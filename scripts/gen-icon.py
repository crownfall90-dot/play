#!/usr/bin/env python3
"""Builds the launcher icon (four game cards assembled into one puzzle) from the splash artwork in web/game.html.
Writes store/src/icon.svg, icon-foreground.svg, icon-background.svg; then run `node scripts/render-icons.js`."""
import re, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
html = (root / 'web/game.html').read_text(encoding='utf8')
m = re.search(r'<svg class="bootpz"[^>]*>(.*?)</svg>', html, re.S)
art = re.sub(r'<rect class="sh"[^>]*/>', '', m.group(1))
S, CX, CY = 0.43, 54, 52          # scale of the 160-unit splash art and where its centre (78,78) lands in the 108 canvas
T = f'translate({CX} {CY}) scale({S}) translate(-78 -78)'
defs_extra = '''<radialGradient id="ibg" cx="50%" cy="34%" r="78%"><stop offset="0" stop-color="#5a74c4"/><stop offset=".5" stop-color="#2a3a72"/><stop offset="1" stop-color="#0f1630"/></radialGradient>
<radialGradient id="iglow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffd878" stop-opacity=".55"/><stop offset="1" stop-color="#ffd878" stop-opacity="0"/></radialGradient>
<linearGradient id="irim" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff2c4"/><stop offset="1" stop-color="#e9a52e"/></linearGradient>'''
spark = '<path d="M92 12L93.6 17.4L99 19L93.6 20.6L92 26L90.4 20.6L85 19L90.4 17.4Z" fill="#fff6d0"/><path d="M17 84L18 87.4L21.4 88.4L18 89.4L17 92.8L16 89.4L12.6 88.4L16 87.4Z" fill="#fff6d0" opacity=".85"/>'
bg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108" width="108" height="108"><defs>{defs_extra}</defs><rect width="108" height="108" fill="url(#ibg)"/><circle cx="54" cy="51" r="46" fill="url(#iglow)"/></svg>'
fg_body = (f'<ellipse cx="54" cy="80.5" rx="25" ry="3.6" fill="#000" opacity=".28"/>'
           f'<g transform="{T}">{art}</g>{spark}')
fg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108" width="108" height="108"><defs>{defs_extra}</defs>{fg_body}</svg>'
full = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108" width="108" height="108"><defs>{defs_extra}</defs><rect width="108" height="108" fill="url(#ibg)"/><circle cx="54" cy="51" r="46" fill="url(#iglow)"/>{fg_body}</svg>'
out = root / 'store/src'
(out / 'icon-background.svg').write_text(bg, encoding='utf8')
(out / 'icon-foreground.svg').write_text(fg, encoding='utf8')
(out / 'icon.svg').write_text(full, encoding='utf8')
print('ok')
