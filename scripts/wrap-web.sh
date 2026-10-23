#!/bin/sh
# Wraps web/game.html (artifact fragment) into a full document for the Android app:
# swaps Google Fonts for the bundled copies in assets/fonts and embeds release-notes.md.
set -e
cd "$(dirname "$0")/.."
out=app/src/main/assets/index.html
mkdir -p "$(dirname "$out")"
notes=$(python3 -c 'import json; print(json.dumps(open("release-notes.md", encoding="utf-8").read().strip(), ensure_ascii=False))')
{
  printf '<!doctype html>\n<html lang="ru"><head><meta charset="utf-8">\n'
  printf '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover,user-scalable=no">\n'
  printf '<link rel="stylesheet" href="fonts/fonts.css">\n'
  printf '<script>window.RELEASE_NOTES = %s;</script>\n' "$notes"
  printf '</head><body>\n'
  grep -v -e 'fonts.googleapis.com' -e 'fonts.gstatic.com' web/game.html
  printf '\n</body></html>\n'
} > "$out"
echo "wrote $out"
