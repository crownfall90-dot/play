#!/bin/sh
# Wraps web/game.html (artifact fragment) into a full document for the Android app.
set -e
cd "$(dirname "$0")/.."
out=app/src/main/assets/index.html
mkdir -p "$(dirname "$out")"
{
  printf '<!doctype html>\n<html lang="ru"><head><meta charset="utf-8">\n'
  printf '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover,user-scalable=no">\n'
  printf '</head><body>\n'
  cat web/game.html
  printf '\n</body></html>\n'
} > "$out"
echo "wrote $out"
