#!/usr/bin/env python3
"""Sends a data push to an FCM topic (HTTP v1 API) using a Firebase service-account key.

Usage: FIREBASE_SERVICE_ACCOUNT='<json>' scripts/fcm-send.py TOPIC CODE VERSION NOTES_FILE
Only the Python standard library and the openssl command are needed (both exist on GitHub runners).
"""
import base64, json, os, subprocess, sys, tempfile, time, urllib.parse, urllib.request


def b64(data: bytes) -> str:
    return base64.urlsafe_b64encode(data).rstrip(b'=').decode()


def access_token(sa: dict) -> str:
    now = int(time.time())
    head = b64(json.dumps({'alg': 'RS256', 'typ': 'JWT'}).encode())
    claim = b64(json.dumps({'iss': sa['client_email'], 'scope': 'https://www.googleapis.com/auth/firebase.messaging',
                            'aud': 'https://oauth2.googleapis.com/token', 'iat': now, 'exp': now + 3600}).encode())
    with tempfile.NamedTemporaryFile('w', suffix='.pem', delete=False) as k:
        k.write(sa['private_key'])
    try:
        sig = subprocess.run(['openssl', 'dgst', '-sha256', '-sign', k.name], input=f'{head}.{claim}'.encode(),
                             capture_output=True, check=True).stdout
    finally:
        os.unlink(k.name)
    body = urllib.parse.urlencode({'grant_type': 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                                   'assertion': f'{head}.{claim}.{b64(sig)}'}).encode()
    with urllib.request.urlopen('https://oauth2.googleapis.com/token', body) as r:
        return json.load(r)['access_token']


def main():
    topic, code, version, notes_file = sys.argv[1:5]
    sa = json.loads(os.environ['FIREBASE_SERVICE_ACCOUNT'])
    notes = open(notes_file, encoding='utf-8').read().strip()[:1500]
    msg = {'message': {'topic': topic, 'android': {'priority': 'high'},
                       'data': {'code': str(code), 'version': version, 'notes': notes}}}
    req = urllib.request.Request(f"https://fcm.googleapis.com/v1/projects/{sa['project_id']}/messages:send",
                                 json.dumps(msg).encode(), {'Authorization': 'Bearer ' + access_token(sa),
                                                            'Content-Type': 'application/json'})
    with urllib.request.urlopen(req) as r:
        print('sent', topic, json.load(r).get('name'))


if __name__ == '__main__':
    main()
