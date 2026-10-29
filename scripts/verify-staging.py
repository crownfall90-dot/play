import hashlib
import os
from pathlib import Path
import re
import subprocess
import sys
import tempfile

report = {'status': 'verification_error', 'expected': 'unavailable', 'actual': 'unavailable'}

def run(args):
    result = subprocess.run(args, capture_output=True, text=True)
    if result.returncode:
        raise RuntimeError('Tool failed: ' + Path(args[0]).name)
    return result.stdout

def verify():
    apk = Path('app/build/outputs/apk/staging/debug/app-staging-debug.apk')
    root = Path(os.environ['ANDROID_HOME']) / 'build-tools'
    candidates = [p for p in root.iterdir() if (p / 'aapt').is_file() and (p / 'apksigner').is_file()]
    tools = max(candidates, key=lambda p: tuple(int(n) for n in re.findall(r'\d+', p.name)))
    badging = run([str(tools / 'aapt'), 'dump', 'badging', str(apk)])
    if not re.search(r"^package: name='com\.crownfall\.mosaic\.test'", badging, re.M):
        report['status'] = 'wrong_application_id'
        return False
    permissions = run([str(tools / 'aapt'), 'dump', 'permissions', str(apk)])
    if 'android.permission.INTERNET' in permissions:
        report['status'] = 'internet_permission_present'
        return False
    certs = run([str(tools / 'apksigner'), 'verify', '--verbose', '--print-certs', str(apk)])
    matches = re.findall(r'^Signer #\d+ certificate SHA-256 digest:[ \t]*([0-9a-fA-F:]+)[ \t]*\r?$', certs, re.M)
    fingerprints = [value.replace(':', '').lower() for value in matches]
    if len(fingerprints) != 1 or not re.fullmatch(r'[0-9a-f]{64}', fingerprints[0]):
        report['status'] = 'signer_digest_parse_error'
        return False
    report['actual'] = fingerprints[0]
    key = os.environ.get('STAGING_KEYSTORE_FILE')
    if key:
        with tempfile.TemporaryDirectory(dir=os.environ['RUNNER_TEMP']) as temp:
            der = Path(temp) / 'public.der'
            run(['keytool', '-exportcert', '-keystore', key, '-storetype', 'PKCS12', '-alias', 'staging', '-storepass:env', 'STORE_PASSWORD', '-file', str(der)])
            report['expected'] = hashlib.sha256(der.read_bytes()).hexdigest()
        report['status'] = 'match' if report['actual'] == report['expected'] else 'certificate_mismatch'
        return report['status'] == 'match'
    if os.environ.get('REQUIRE_STAGING_SIGNING') == 'true':
        report['status'] = 'persistent_key_missing'
        return False
    report['status'] = 'temporary_pr_signature'
    return True

ok = False
try:
    ok = verify()
except Exception as error:
    print('Verification could not finish (' + type(error).__name__ + '); no raw tool output published.')
finally:
    lines = [f'{name}={value}' for name, value in report.items()]
    print('\n'.join(lines))
    if os.environ.get('GITHUB_OUTPUT'):
        with open(os.environ['GITHUB_OUTPUT'], 'a', encoding='utf-8') as out:
            out.write('\n'.join(lines) + '\n')
    text = 'OFFLINE TEST ONLY\nCommit: ' + os.environ.get('GITHUB_SHA', 'local') + '\n' + '\n'.join(lines) + '\n'
    Path('SIGNING-DIAGNOSTICS.txt').write_text(text, encoding='utf-8')
    if os.environ.get('GITHUB_STEP_SUMMARY'):
        with open(os.environ['GITHUB_STEP_SUMMARY'], 'a', encoding='utf-8') as summary:
            summary.write('### Staging certificate verification\n```text\n' + text + '```\n')
    if ok:
        Path('TEST-BUILD.txt').write_text(text, encoding='utf-8')
sys.exit(0 if ok else 1)
