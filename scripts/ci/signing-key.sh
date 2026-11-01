#!/usr/bin/env bash
# Prepares the release signing key for a CI build (docs/SIGNING-KEY-ROTATION.md).
# Without app/signing/USE_NEW: the old key (legacy, until the switch) — nothing to do.
# With it: the new key, kept encrypted in app/signing/release.p12.enc (AES-256, PBKDF2, the SIGNING_PASSPHRASE
# secret or BACKUP_PASSPHRASE), is decrypted into the runner's private temp directory and handed to Gradle through
# $GITHUB_ENV; its certificate SHA-256 goes to SIGNING_CERT_SHA256, which latest.json publishes as "cert" so copies
# signed with the old key know they must reinstall once.
set -euo pipefail
if [ ! -f app/signing/USE_NEW ]; then echo "signing: legacy key"; exit 0; fi
: "${SIGNING_PASSPHRASE:?the SIGNING_PASSPHRASE (or BACKUP_PASSPHRASE) secret is not set}"
dir="${RUNNER_TEMP:-/tmp}/signing"; mkdir -p "$dir"; chmod 700 "$dir"
openssl enc -d -aes-256-cbc -pbkdf2 -iter 600000 -pass env:SIGNING_PASSPHRASE -in app/signing/release.p12.enc -out "$dir/bundle.tgz"
tar -xzf "$dir/bundle.tgz" -C "$dir"
rm -f "$dir/bundle.tgz"
pass=$(cat "$dir/password"); rm -f "$dir/password"
echo "::add-mask::$pass"
sha=$(keytool -list -v -keystore "$dir/release.p12" -storetype PKCS12 -storepass "$pass" -alias puzzlegrad 2>/dev/null | sed -n 's/.*SHA256: *//p' | head -1 | tr -d ': ' | tr 'A-F' 'a-f')
test ${#sha} -eq 64 || { echo "::error::could not read the new key's certificate"; exit 1; }
{
  echo "KEYSTORE_FILE=$dir/release.p12"
  echo "KEYSTORE_PASSWORD=$pass"
  echo "KEY_PASSWORD=$pass"
  echo "KEY_ALIAS=puzzlegrad"
  echo "SIGNING_CERT_SHA256=$sha"
} >> "$GITHUB_ENV"
echo "signing: new key, certificate SHA-256 $sha"
