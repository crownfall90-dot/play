#!/usr/bin/env python3
"""Gives every existing player who already has a nickname a hidden player number in the order they
first joined (Firebase Auth creation time), and moves the guest counter /guestN past them, so new
guests continue as nickname<N+1>, nickname<N+2>…

Usage: FIREBASE_SERVICE_ACCOUNT='<json>' scripts/assign-numbers.py [--apply]
Without --apply it only prints the plan (nicknames and numbers, no e-mails). Safe to run again:
players who already have a number keep it.
"""
import json, os, sys, urllib.request, urllib.parse

SCOPES = 'https://www.googleapis.com/auth/firebase.database https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/cloud-platform'
PLACEHOLDERS = {'', 'Вы', 'Игрок', 'nickname'}


def token(sa):
    # The same signed-JWT flow as scripts/fcm-send.py, with the scopes needed here.
    import base64, subprocess, tempfile, time
    b64 = lambda d: base64.urlsafe_b64encode(d).rstrip(b'=').decode()
    now = int(time.time())
    head = b64(json.dumps({'alg': 'RS256', 'typ': 'JWT'}).encode())
    claim = b64(json.dumps({'iss': sa['client_email'], 'scope': SCOPES, 'aud': 'https://oauth2.googleapis.com/token', 'iat': now, 'exp': now + 3600}).encode())
    with tempfile.NamedTemporaryFile('w', suffix='.pem', delete=False) as k:
        k.write(sa['private_key'])
    try:
        sig = subprocess.run(['openssl', 'dgst', '-sha256', '-sign', k.name], input=f'{head}.{claim}'.encode(), capture_output=True, check=True).stdout
    finally:
        os.unlink(k.name)
    body = urllib.parse.urlencode({'grant_type': 'urn:ietf:params:oauth:grant-type:jwt-bearer', 'assertion': f'{head}.{claim}.{b64(sig)}'}).encode()
    with urllib.request.urlopen('https://oauth2.googleapis.com/token', body) as r:
        return json.load(r)['access_token']


def main():
    apply = '--apply' in sys.argv
    sa = json.loads(os.environ['FIREBASE_SERVICE_ACCOUNT'])
    tok, pid = token(sa), sa['project_id']
    db = json.load(open(os.path.join(os.path.dirname(__file__), '..', 'app', 'google-services.json')))['project_info'].get('firebase_url') \
        or f'https://{pid}-default-rtdb.europe-west1.firebasedatabase.app'
    def get(path):
        with urllib.request.urlopen(urllib.request.Request(f'{db}/{path}.json', headers={'Authorization': 'Bearer ' + tok})) as r:
            return json.load(r)
    def put(path, value):
        req = urllib.request.Request(f'{db}/{path}.json', json.dumps(value).encode(), {'Authorization': 'Bearer ' + tok}, method='PUT')
        urllib.request.urlopen(req).read()

    names = {}
    for uid, v in (get('presence') or {}).items():
        n = (v or {}).get('n') or ''
        if n not in PLACEHOLDERS and not n.startswith('nickname'): names[uid] = n
    for uid, v in (get('leaders') or {}).items():
        n = (v or {}).get('n') or ''
        if n not in PLACEHOLDERS and not n.startswith('nickname'): names.setdefault(uid, n)
    for uid, v in (get('profiles') or {}).items():
        try: n = json.loads(v.get('w', '{}')).get('name') or ''
        except Exception: n = ''
        if n not in PLACEHOLDERS and not n.startswith('nickname'): names.setdefault(uid, n)

    # When each account was created (admin lookup, 100 at a time).
    created, uids = {}, list(names)
    for i in range(0, len(uids), 100):
        req = urllib.request.Request(f'https://identitytoolkit.googleapis.com/v1/projects/{pid}/accounts:lookup',
                                     json.dumps({'localId': uids[i:i + 100]}).encode(),
                                     {'Authorization': 'Bearer ' + tok, 'Content-Type': 'application/json'})
        with urllib.request.urlopen(req) as r:
            for u in json.load(r).get('users', []):
                created[u['localId']] = int(u.get('createdAt', 0))
    have = get('playerNo') or {}
    counter = get('guestN') or 0
    top = max([counter] + list(have.values()))
    order = sorted((u for u in names if u not in have), key=lambda u: created.get(u, 1 << 62))
    plan = []
    for u in order:
        top += 1
        plan.append((u, top))
    print(f'players with a nickname: {len(names)}, already numbered: {len(have)}, guest counter: {counter}')
    for u, n in plan:
        print(f'  #{n}  {names[u]}  (joined {created.get(u, "?")})')
    print(f'guest counter → {top}; next guest: nickname{top + 1}')
    if not apply:
        print('dry run: nothing written (run with --apply)')
        return
    for u, n in plan:
        put(f'playerNo/{u}', n)
    if top > counter:
        put('guestN', top)
    print('written')


if __name__ == '__main__':
    main()
