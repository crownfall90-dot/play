#!/usr/bin/env python3
"""Deletes one ANONYMOUS (guest) account and everything the game stores for it: the sign-in account,
presence, profile, leaderboard entry, player number, friend code, friends and inbox. Accounts with an
e-mail are refused. The account is found by the start of its uid, as account-check.py prints it.

Usage: FIREBASE_SERVICE_ACCOUNT='<json>' scripts/delete-player.py UID_PREFIX [--apply]
"""
import json, os, sys, urllib.request
import importlib.util
spec = importlib.util.spec_from_file_location('an', os.path.join(os.path.dirname(__file__), 'assign-numbers.py'))
an = importlib.util.module_from_spec(spec); spec.loader.exec_module(an)


def main():
    prefix, apply = sys.argv[1], '--apply' in sys.argv
    sa = json.loads(os.environ['FIREBASE_SERVICE_ACCOUNT'])
    pid, tok = sa['project_id'], an.token(sa)
    db = json.load(open(os.path.join(os.path.dirname(__file__), '..', 'app', 'google-services.json')))['project_info'].get('firebase_url') \
        or f'https://{pid}-default-rtdb.europe-west1.firebasedatabase.app'
    def call(method, path, query=''):
        req = urllib.request.Request(f'{db}/{path}.json{query}', method=method, headers={'Authorization': 'Bearer ' + tok})
        with urllib.request.urlopen(req) as r: return json.load(r)
    uids = [u for u in (call('GET', 'presence', '?shallow=true') or {}) if u.startswith(prefix)]
    if len(uids) != 1: sys.exit(f'{len(uids)} accounts start with {prefix}')
    uid = uids[0]
    lookup = urllib.request.Request(f'https://identitytoolkit.googleapis.com/v1/projects/{pid}/accounts:lookup', json.dumps({'localId': [uid]}).encode(),
                                    {'Authorization': 'Bearer ' + tok, 'Content-Type': 'application/json'})
    with urllib.request.urlopen(lookup) as r: user = (json.load(r).get('users') or [{}])[0]
    if user.get('email') or user.get('providerUserInfo'): sys.exit('refusing: this account has an e-mail / sign-in provider')
    print(f'{uid[:6]}…: presence {call("GET", f"presence/{uid}")}')
    code = call('GET', f'fcodeOf/{uid}')
    paths = [f'presence/{uid}', f'profiles/{uid}', f'leaders/{uid}', f'playerNo/{uid}', f'fcodeOf/{uid}', f'friends/{uid}', f'inbox/{uid}'] + ([f'fcodes/{code}'] if code else [])
    print('would delete:', ', '.join(paths) + ', sign-in account')
    if not apply: return print('dry run')
    for p in paths: call('DELETE', p)
    delete = urllib.request.Request(f'https://identitytoolkit.googleapis.com/v1/projects/{pid}/accounts:delete', json.dumps({'localId': uid}).encode(),
                                    {'Authorization': 'Bearer ' + tok, 'Content-Type': 'application/json'})
    urllib.request.urlopen(delete).read()
    print('deleted')


main()
