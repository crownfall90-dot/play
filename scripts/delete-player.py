#!/usr/bin/env python3
"""Deletes one ANONYMOUS (guest) account and everything the game stores for it: the sign-in account,
presence, profile, leaderboard entry, player number, friend code, friends and inbox. Accounts with an
e-mail are refused. The account is found by the start of its uid, as account-check.py prints it.

Usage: FIREBASE_SERVICE_ACCOUNT='<json>' scripts/delete-player.py UID_PREFIX|tests [--apply]
With `tests` it removes every guest whose version is one only the project's test runs write.
"""
import json, os, sys, urllib.request
import importlib.util
spec = importlib.util.spec_from_file_location('an', os.path.join(os.path.dirname(__file__), 'assign-numbers.py'))
an = importlib.util.module_from_spec(spec); spec.loader.exec_module(an)


# Version strings that only the test runs of this project ever wrote to /presence (real builds report 1.0.N
# with N above 125; the test harness reports these).
TEST_VERSIONS = {'1', '1.0.117'}


def main():
    prefix, apply = sys.argv[1], '--apply' in sys.argv
    sa = json.loads(os.environ['FIREBASE_SERVICE_ACCOUNT'])
    pid, tok = sa['project_id'], an.token(sa)
    db = json.load(open(os.path.join(os.path.dirname(__file__), '..', 'app', 'google-services.json')))['project_info'].get('firebase_url') \
        or f'https://{pid}-default-rtdb.europe-west1.firebasedatabase.app'
    def call(method, path, query=''):
        req = urllib.request.Request(f'{db}/{path}.json{query}', method=method, headers={'Authorization': 'Bearer ' + tok})
        with urllib.request.urlopen(req) as r: return json.load(r)
    def account(uid):
        lookup = urllib.request.Request(f'https://identitytoolkit.googleapis.com/v1/projects/{pid}/accounts:lookup', json.dumps({'localId': [uid]}).encode(),
                                        {'Authorization': 'Bearer ' + tok, 'Content-Type': 'application/json'})
        with urllib.request.urlopen(lookup) as r: return (json.load(r).get('users') or [{}])[0]
    pres = call('GET', 'presence') or {}
    if prefix == 'tests':  # leftovers of the project's own test runs
        uids = [u for u, v in pres.items() if (v or {}).get('v') in TEST_VERSIONS]
    else:
        uids = [u for u in pres if u.startswith(prefix)]
        if len(uids) != 1: sys.exit(f'{len(uids)} accounts start with {prefix}')
    print(f'{len(uids)} account(s)')
    for uid in uids:
        user = account(uid)
        if user.get('email') or user.get('providerUserInfo'):
            print(f'{uid[:6]}…: skipped (has an e-mail / sign-in provider)'); continue
        code = call('GET', f'fcodeOf/{uid}')
        paths = [f'presence/{uid}', f'profiles/{uid}', f'leaders/{uid}', f'playerNo/{uid}', f'fcodeOf/{uid}', f'friends/{uid}', f'inbox/{uid}'] + ([f'fcodes/{code}'] if code else [])
        v = pres.get(uid) or {}
        print(f'{uid[:6]}…: name {v.get("n")!r} version {v.get("v")!r}' + ('' if apply else ' — would delete'))
        if not apply: continue
        for p in paths: call('DELETE', p)
        delete = urllib.request.Request(f'https://identitytoolkit.googleapis.com/v1/projects/{pid}/accounts:delete', json.dumps({'localId': uid}).encode(),
                                        {'Authorization': 'Bearer ' + tok, 'Content-Type': 'application/json'})
        urllib.request.urlopen(delete).read()
    print('deleted' if apply else 'dry run')


main()
