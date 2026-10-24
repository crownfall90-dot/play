#!/usr/bin/env python3
"""Sets the nickname of one account (found by the start of its uid, as account-check.py prints it)
in its cloud profile, presence record and leaderboard entry. The time stamp of the profile is
renewed so every device signed in to it picks the name up on its next sync.

Usage: FIREBASE_SERVICE_ACCOUNT='<json>' scripts/rename-player.py UID_PREFIX NEW_NAME [--apply]
"""
import json, os, sys, urllib.request
import importlib.util
spec = importlib.util.spec_from_file_location('an', os.path.join(os.path.dirname(__file__), 'assign-numbers.py'))
an = importlib.util.module_from_spec(spec); spec.loader.exec_module(an)


def main():
    prefix, name, apply = sys.argv[1], sys.argv[2].strip(), '--apply' in sys.argv
    if not (1 <= len(name) <= 20): sys.exit('bad name')
    sa = json.loads(os.environ['FIREBASE_SERVICE_ACCOUNT'])
    tok = an.token(sa)
    db = json.load(open(os.path.join(os.path.dirname(__file__), '..', 'app', 'google-services.json')))['project_info'].get('firebase_url') \
        or f"https://{sa['project_id']}-default-rtdb.europe-west1.firebasedatabase.app"
    def call(method, path, body=None, query=''):
        req = urllib.request.Request(f'{db}/{path}.json{query}', None if body is None else json.dumps(body).encode(), {'Authorization': 'Bearer ' + tok}, method=method)
        with urllib.request.urlopen(req) as r: return json.load(r)
    uids = [u for u in (call('GET', 'profiles', query='?shallow=true') or {}) if u.startswith(prefix)]
    if len(uids) != 1: sys.exit(f'{len(uids)} profiles start with {prefix}')
    uid = uids[0]
    prof = call('GET', f'profiles/{uid}')
    w, s = json.loads(prof.get('w', '{}')), json.loads(prof.get('s', '{}'))
    print(f'{uid[:6]}…: wallet.name {w.get("name")!r}, seat.name {s.get("name")!r} → {name!r}')
    if not apply: return print('dry run')
    import time
    w['name'], s['name'], w['nameAt'] = name, name, int(time.time() * 1000)
    call('PATCH', f'profiles/{uid}', {'w': json.dumps(w, ensure_ascii=False), 's': json.dumps(s, ensure_ascii=False), 't': {'.sv': 'timestamp'}})
    if call('GET', f'presence/{uid}'): call('PATCH', f'presence/{uid}', {'n': name})
    if call('GET', f'leaders/{uid}'): call('PATCH', f'leaders/{uid}', {'n': name})
    print('written')


main()
