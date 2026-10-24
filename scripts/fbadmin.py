"""Shared by the owner scripts: an access token for the Firebase service account (signed JWT, no extra libraries)."""
import base64, json, os, subprocess, tempfile, time, urllib.parse, urllib.request

SCOPES = 'https://www.googleapis.com/auth/firebase.database https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/cloud-platform'


def token(sa):
    # The same signed-JWT flow as scripts/fcm-send.py, with the scopes needed here.
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
