#!/bin/sh
# Wraps web/game.html (artifact fragment) into a full document for the Android app:
# swaps Google Fonts for the bundled copies in assets/fonts and embeds release-notes.md.
set -e
cd "$(dirname "$0")/.."
out=app/src/main/assets/index.html
mkdir -p "$(dirname "$out")"
# Firebase web config from app/google-services.json, if the project has one.
firebase=$(python3 - <<'PY'
import json, os
p = 'app/google-services.json'
if not os.path.exists(p):
    print('null')
else:
    g = json.load(open(p))
    info = g['project_info']
    db = info.get('firebase_url') or 'https://%s-default-rtdb.europe-west1.firebasedatabase.app' % info['project_id']
    print(json.dumps({'apiKey': g['client'][0]['api_key'][0]['current_key'], 'dbUrl': db}))
PY
)
notes=$(python3 -c 'import json; print(json.dumps(open("release-notes.md", encoding="utf-8").read().strip(), ensure_ascii=False))')
{
  printf '<!doctype html>\n<html lang="ru"><head><meta charset="utf-8">\n'
  printf '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover,user-scalable=no">\n'
  printf '<link rel="stylesheet" href="fonts/fonts.css">\n'
  cat <<'BOOT'
<script>
/* If the game cannot start (usually an outdated Android System WebView), say how to fix it instead of a blank screen. */
(function () {
  var m = /Chrome\/(\d+)/.exec(navigator.userAgent), old = m && +m[1] < 80;
  function fail() {
    if (window.__ready) return;
    document.body.innerHTML = '<div style="font:16px sans-serif;color:#eef1f8;background:#101729;position:fixed;top:0;left:0;right:0;bottom:0;padding:32px;line-height:1.5">' +
      '<h2 style="margin:0 0 12px">Не удалось запустить игру</h2><p>Обновите приложения «Android System WebView» и «Chrome» в Google Play и откройте игру снова.</p>' +
      '<p><a style="color:#f2b84b" href="https://play.google.com/store/apps/details?id=com.google.android.webview">Открыть Android System WebView в Google Play</a></p></div>';
  }
  if (old) document.addEventListener('DOMContentLoaded', fail); else setTimeout(fail, 8000);
})();
</script>
BOOT
  printf '<script>window.RELEASE_NOTES = %s; window.FIREBASE = %s;</script>\n' "$notes" "$firebase"
  printf '</head><body>\n'
  grep -v -e 'fonts.googleapis.com' -e 'fonts.gstatic.com' web/game.html
  printf '\n</body></html>\n'
} > "$out"
echo "wrote $out"
