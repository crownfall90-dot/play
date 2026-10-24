#!/usr/bin/env python3
"""Read-only: for players with the given nicknames, shows which sign-in account (uid) holds each name
in /profiles, /presence and /leaders, and the account's sign-in methods. E-mails are masked.

Usage: FIREBASE_SERVICE_ACCOUNT='<json>' scripts/account-check.py nick1 nick2 ...
"""
import json, os, sys, urllib.request
sys.path.insert(0, os.path.dirname(__file__))
import importlib.util
spec = importlib.util.spec_from_file_location('an', os.path.join(os.path.dirname(__file__), 'assign-numbers.py'))
an = importlib.util.module_from_spec(spec); spec.loader.exec_module(an)

mask = lambda e: (e[:1] + '***@' + e.split('@')[-1]) if e else '-'


def main():
    wanted = {n.lower() for n in sys.argv[1:]}
    sa = json.loads(os.environ['FIREBASE_SERVICE_ACCOUNT'])
    tok, pid = an.token(sa), sa['project_id']
    db = json.load(open(os.path.join(os.path.dirname(__file__), '..', 'app', 'google-services.json')))['project_info'].get('firebase_url') \
        or f'https://{pid}-default-rtdb.europe-west1.firebasedatabase.app'
    def get(path):
        with urllib.request.urlopen(urllib.request.Request(f'{db}/{path}.json', headers={'Authorization': 'Bearer ' + tok})) as r:
            return json.load(r)
    pres, lead, prof, no = get('presence') or {}, get('leaders') or {}, get('profiles') or {}, get('playerNo') or {}
    found = {}
    for uid, v in pres.items():
        if '*' in wanted and (v or {}).get('n'): found.setdefault(uid, {})['presence'] = v['n']
        elif (v or {}).get('n', '').lower() in wanted: found.setdefault(uid, {})['presence'] = v['n']
    for uid, v in lead.items():
        if (v or {}).get('n', '').lower() in wanted: found.setdefault(uid, {})['leaders'] = v['n']
    for uid, v in prof.items():
        try: w = json.loads(v.get('w', '{}'))
        except Exception: w = {}
        try: s = json.loads(v.get('s', '{}'))
        except Exception: s = {}
        if (w.get('name') or '').lower() in wanted or (s.get('name') or '').lower() in wanted:
            found.setdefault(uid, {})['profile'] = {'wallet.name': w.get('name'), 'seat.name': s.get('name'), 'gold': w.get('gold'), 'guest': w.get('guest'), 'no': w.get('no'),
                                                    'saved': v.get('t'), 'streak': w.get('streak'), 'owned': len(w.get('owned') or []), 'by': v.get('by')}
    for uid in found:
        if uid in pres: found[uid]['presence_raw'] = pres[uid]
        req = urllib.request.Request(f'https://identitytoolkit.googleapis.com/v1/projects/{pid}/accounts:lookup', json.dumps({'localId': [uid]}).encode(),
                                     {'Authorization': 'Bearer ' + tok, 'Content-Type': 'application/json'})
        with urllib.request.urlopen(req) as r:
            u = (json.load(r).get('users') or [{}])[0]
        found[uid]['auth'] = {'email': mask(u.get('email', '')), 'providers': [p.get('providerId') for p in u.get('providerUserInfo', [])] or ['anonymous'], 'created': u.get('createdAt')}
        found[uid]['no'] = no.get(uid)
        found[uid]['fcodeOf'] = get(f'fcodeOf/{uid}')
    for uid, d in found.items():
        print(uid[:6] + '…', json.dumps(d, ensure_ascii=False))


main()
