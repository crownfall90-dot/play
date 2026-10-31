#!/usr/bin/env python3
"""Builds the launcher icon: ONE big jigsaw piece painted like a game card (city, road, river, trees, a meeple).
Writes store/src/icon.svg, icon-foreground.svg, icon-background.svg; then run `node scripts/render-icons.cjs`."""
import math, random, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
random.seed(11)
B, RC, NECK, NH, HR = 57, 5.5, 6.5, 2, 7.5           # body size, corner radius, half neck, neck length, knob radius
KN = NH + math.sqrt(HR * HR - NECK * NECK) + HR  # how far a knob sticks out
# knobs clockwise from the top: +1 out, -1 in (top out, right out, bottom in, left in)
SIDES = [1, 1, -1, -1]
OX, OY = 54 - B / 2 + 0, 54 - B / 2 + 0          # body origin before centring tweak
# bounding box of the knobs: top and right stick out, so move the body down-left to centre the whole piece
OX -= KN / 2 - .5; OY += KN / 2 - 1

def pt(p0, d, n, u, v): return (p0[0] + d[0] * u + n[0] * v, p0[1] + d[1] * u + n[1] * v)
def f(p): return f'{p[0]:.2f} {p[1]:.2f}'
def piece_path(ox, oy):
    c = [(ox, oy), (ox + B, oy), (ox + B, oy + B), (ox, oy + B)]
    dirs = [(1, 0), (0, 1), (-1, 0), (0, -1)]
    outs = [(0, -1), (1, 0), (0, 1), (-1, 0)]
    out = ''
    for i in range(4):
        p0, d, n, s = c[i], dirs[i], outs[i], SIDES[i]
        L, M = B, B / 2
        a = pt(p0, d, n, RC, 0)
        out += (f'M{f(a)}' if i == 0 else f'A{RC} {RC} 0 0 1 {f(a)}')
        out += f'L{f(pt(p0, d, n, M - NECK, 0))}'
        out += f'L{f(pt(p0, d, n, M - NECK, s * NH))}'
        out += f'A{HR} {HR} 0 1 {1 if s > 0 else 0} {f(pt(p0, d, n, M + NECK, s * NH))}'
        out += f'L{f(pt(p0, d, n, M + NECK, 0))}'
        out += f'L{f(pt(p0, d, n, L - RC, 0))}'
    out += f'A{RC} {RC} 0 0 1 {f(pt(c[0], dirs[0], outs[0], RC, 0))}Z'
    return out

def tufts(x0, y0, x1, y1, n):
    s = ''
    for _ in range(n):
        x, y = random.uniform(x0, x1), random.uniform(y0, y1)
        s += f'<path d="M{x-1.6:.1f} {y:.1f}L{x:.1f} {y-2.8:.1f}L{x+1.6:.1f} {y-.4:.1f}" stroke="#3f7d2c" stroke-width=".9" fill="none" opacity=".7"/>'
    for _ in range(9):
        x, y = random.uniform(x0, x1), random.uniform(y0, y1)
        s += f'<circle cx="{x:.1f}" cy="{y:.1f}" r="1" fill="{random.choice(["#fff6d8","#ffd75e","#f3a6c8"])}"/>'
    return s
def tree(x, y, r=5):
    return (f'<ellipse cx="{x+1.2}" cy="{y+r*.8}" rx="{r}" ry="{r*.45}" fill="rgba(20,60,15,.35)"/>'
            f'<circle cx="{x}" cy="{y}" r="{r}" fill="url(#itree)" stroke="#256b30" stroke-width=".7"/>'
            f'<circle cx="{x-r*.3}" cy="{y-r*.35}" r="{r*.35}" fill="rgba(210,245,160,.5)"/>')
def house(x, y, k=1.0):
    return (f'<g transform="translate({x} {y}) scale({k})"><rect x="0" y="0" width="14" height="9" rx=".8" fill="#efe0bd" stroke="#8a6a3c" stroke-width=".7"/>'
            '<path d="M-1.6 .8L7 -6.8L15.6 .8Z" fill="#c4553a" stroke="#7a2f20" stroke-width=".7"/><rect x="5.4" y="4" width="3.2" height="5" fill="#7a4f2c"/></g>')
def stroked(d, layers):
    return ''.join(f'<path d="{d}" fill="none" stroke="{c}" stroke-width="{w}" stroke-linecap="butt"/>' for w, c in layers)
ROAD = [(11, 'rgba(60,90,30,.4)'), (9, '#80653e'), (7, '#d9bf88'), (4.4, '#c7a874'), (2.6, '#e2cb98')]
RIVER = [(17, 'rgba(30,70,20,.4)'), (14.5, '#a8975f'), (13, '#d6c48e'), (11.5, 'rgba(240,252,255,.85)'), (10, '#46b3d3'), (7, '#2f93c8'), (4.2, '#2276b8'), (1.8, '#1c64a6')]
def city(bx, by):
    k = .55
    bricks = ''
    for r, y in enumerate([16, 21, 26, 31, 36]):
        for q in range(5):
            x = 18 + q * 7.5 + (3.7 if r % 2 else 0)
            bricks += f'<rect x="{x:.1f}" y="{y}" width="6.5" height="4" rx=".8" fill="{"#c4553a" if (q + r) % 2 else "#d0664a"}" stroke="#7a2f20" stroke-width=".4"/>'
    wall = 'M8 8L66 8Q64 40 8 54Z'
    return (f'<g transform="translate({bx-8*k+1:.1f} {by-8*k+1:.1f}) scale({k})"><path d="{wall}" fill="#e0c389"/>{bricks}'
            f'<path d="{wall}" fill="none" stroke="#6e4a26" stroke-width="5"/><path d="{wall}" fill="none" stroke="#b98a4e" stroke-width="2.6"/>'
            '<circle cx="62" cy="14" r="6.5" fill="#b98a4e" stroke="#6e4a26" stroke-width="1.2"/><path d="M54.5 12L62 .5L69.5 12Z" fill="#c4553a" stroke="#7a2f20" stroke-width=".9"/>'
            '<circle cx="14" cy="50" r="6.5" fill="#b98a4e" stroke="#6e4a26" stroke-width="1.2"/><path d="M6.5 48L14 36.5L21.5 48Z" fill="#c4553a" stroke="#7a2f20" stroke-width=".9"/>'
            '<path d="M26 44L30 44L30 40Q28 37 26 40Z" fill="#5d3c1d"/></g>')
def meeple(x, y, k=1.0):
    return (f'<g transform="translate({x} {y}) scale({k})"><ellipse cx="0" cy="1.5" rx="6.5" ry="2.4" fill="rgba(30,25,10,.45)"/>'
      '<path d="M-3 0L-6.5-2Q-7.5-4.5-5.5-6L-3.5-7.5Q-4.5-9-2-10.5L2-10.5Q4.5-9 3.5-7.5L5.5-6Q7.5-4.5 6.5-2L3 0Z" fill="#e0463c" stroke="#7a1d18" stroke-width=".9" stroke-linejoin="round"/>'
      '<circle cx="0" cy="-14" r="4.2" fill="#e0463c" stroke="#7a1d18" stroke-width=".9"/><circle cx="-1.4" cy="-15.4" r="1.4" fill="rgba(255,255,255,.55)"/>'
      '<path d="M-2.6-9.5Q0-8 2.6-9.5" stroke="#7a1d18" stroke-width=".7" fill="none"/></g>')

ox, oy = OX, OY
P = piece_path(ox, oy)
road = f'M{ox-4} {oy+36}Q{ox+24} {oy+29} {ox+B*.62:.1f} {oy+33}T{ox+B+KN} {oy+27}'
river = f'M{ox-4} {oy+B-2}Q{ox+20} {oy+B+3} {ox+38} {oy+B-6}T{ox+B+KN} {oy+B-5}'
art = (f'<rect x="0" y="0" width="108" height="108" fill="url(#igrass)"/>' + tufts(ox - 8, oy - 12, ox + B + 13, oy + B, 26) +
       stroked(road, ROAD) + stroked(river, RIVER) +
       f'<path d="{river}" fill="none" stroke="rgba(235,250,255,.7)" stroke-width="1" stroke-dasharray="4 9" stroke-linecap="round"/>' +
       city(ox, oy) + tree(ox + B / 2, oy - NH - 1.8, 4.8) + tree(ox + B + 3, oy + 14, 3.8) + tree(ox + 40, oy + 14, 4.4) + tree(ox + 11, oy + 41, 3.6) +
       house(ox + 36, oy + 19, .62) + meeple(ox + 29, oy + 37, .85) +
       '<rect width="108" height="108" fill="url(#ivig)"/>')
defs = f'''<defs>
<radialGradient id="ibg" cx="50%" cy="34%" r="78%"><stop offset="0" stop-color="#5a74c4"/><stop offset=".5" stop-color="#2a3a72"/><stop offset="1" stop-color="#0f1630"/></radialGradient>
<radialGradient id="iglow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffd878" stop-opacity=".55"/><stop offset="1" stop-color="#ffd878" stop-opacity="0"/></radialGradient>
<linearGradient id="igrass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#80be56"/><stop offset="1" stop-color="#5a9a3c"/></linearGradient>
<radialGradient id="itree" cx=".35" cy=".35" r=".8"><stop offset="0" stop-color="#7cc65a"/><stop offset="1" stop-color="#2f8a3e"/></radialGradient>
<linearGradient id="igold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff2c4"/><stop offset=".5" stop-color="#f2c45a"/><stop offset="1" stop-color="#d98e1f"/></linearGradient>
<radialGradient id="ivig" cx=".5" cy=".42" r=".7"><stop offset=".62" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#0a1e08" stop-opacity=".3"/></radialGradient>
<clipPath id="ipc"><path d="{P}"/></clipPath></defs>'''
spark = ('<path d="M93 11L94.6 16.4L100 18L94.6 19.6L93 25L91.4 19.6L86 18L91.4 16.4Z" fill="#fff6d0"/>'
         '<path d="M15 88L16 91.4L19.4 92.4L16 93.4L15 96.8L14 93.4L10.6 92.4L14 91.4Z" fill="#fff6d0" opacity=".85"/>')
piece = (f'<ellipse cx="{ox+B/2+4:.1f}" cy="{oy+B+8:.1f}" rx="26" ry="3.6" fill="#000" opacity=".3"/>'
         f'<g transform="translate(0 3.2)"><path d="{P}" fill="#4a3018"/></g>'          # card thickness
         f'<path d="{P}" fill="url(#igold)"/>'
         f'<g clip-path="url(#ipc)" transform="translate(0 0)"><g transform="translate({54-54} 0)">{art}</g></g>'
         f'<path d="{P}" fill="none" stroke="#2b1c0c" stroke-width="1.4" stroke-linejoin="round"/>'
         f'<path d="{P}" fill="none" stroke="rgba(255,244,200,.55)" stroke-width=".7" transform="translate(-.35 -.35)" clip-path="url(#ipc)"/>')
S = f'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108" width="108" height="108"'
bg = f'<rect width="108" height="108" fill="url(#ibg)"/><circle cx="54" cy="52" r="46" fill="url(#iglow)"/>'
out = root / 'store/src'
(out / 'icon-background.svg').write_text(f'<svg {S}>{defs}{bg}</svg>', encoding='utf8')
(out / 'icon-foreground.svg').write_text(f'<svg {S}>{defs}{piece}{spark}</svg>', encoding='utf8')
(out / 'icon.svg').write_text(f'<svg {S}>{defs}{bg}{piece}{spark}</svg>', encoding='utf8')
print('ok', round(ox, 1), round(oy, 1), round(KN, 1))
