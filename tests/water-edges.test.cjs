// Roadmap 4.2: rivers and lakes join seamlessly. Every water card is drawn from the same tile frame with the same
// river mouth on each water side (water 28 px across a 192 px card, centred), and turning a card only turns it.
// Checked on the real art, for every pair of water cards and all four turns of each: the water across the seam
// must line up pixel-for-pixel within antialiasing.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const {loadPlaywright, instrumentedCopy, openGame} = require('./golden/harness.cjs');

const pw = loadPlaywright();

test('water edges: every water side has the river mouth, every pair lines up in all turns', {skip: !pw && 'playwright is not installed (npm ci)', timeout: 120000}, async () => {
  const browser = await pw.chromium.launch();
  try {
    const {page, errors} = await openGame(browser, instrumentedCopy(), null);
    const res = await page.evaluate(async () => {
      const S = 192, V = [[0,-1],[1,0],[0,1],[-1,0]];
      const art = PG.render.createArt({S, V, PL0: ['#e33', '#33e', '#3a3', '#ea3', '#a3e'], MEEPLE_D: ''});
      const T = PG.engine.TYPES, ids = Object.keys(T).filter(k => T[k].e.includes('w'));
      const edge = (id, r, d) => T[id].e[(d - r + 4) % 4];
      // the card turned r quarter turns, as the table shows it
      const turned = {};
      for (const id of ids) {
        const im = new Image(); im.src = art.drawTile(id); await im.decode();
        for (let r = 0; r < 4; r++) {
          const c = document.createElement('canvas'); c.width = c.height = S; const g = c.getContext('2d');
          g.translate(S / 2, S / 2); g.rotate(r * Math.PI / 2); g.drawImage(im, -S / 2, -S / 2); turned[id + r] = g.getImageData(0, 0, S, S).data;
        }
      }
      const blue = (d, x, y) => { const i = (y * S + x) * 4; return d[i + 2] > d[i] + 60 && d[i + 2] > d[i + 1] + 15; };
      // water along one side, one pixel in: [first, last] row/column, or null
      const span = (d, side) => { const hit = []; for (let k = 0; k < S; k++) { const [x, y] = side === 1 ? [S - 2, k] : side === 3 ? [1, k] : side === 0 ? [k, 1] : [k, S - 2]; if (blue(d, x, y)) hit.push(k); } return hit.length ? [hit[0], hit[hit.length - 1], hit.length] : null; };
      const mouths = [], seams = [];
      for (const id of ids) for (let r = 0; r < 4; r++) for (let d = 0; d < 4; d++) if (edge(id, r, d) === 'w') mouths.push([id, r, d, span(turned[id + r], d)]);
      for (const a of ids) for (let ra = 0; ra < 4; ra++) if (edge(a, ra, 1) === 'w')
        for (const b of ids) for (let rb = 0; rb < 4; rb++) if (edge(b, rb, 3) === 'w') seams.push([a, ra, b, rb, span(turned[a + ra], 1), span(turned[b + rb], 3)]);
      return {mouths, seams, ids};
    });
    assert.ok(res.ids.includes('wLake') && res.ids.includes('wTee'), 'lakes are among the water cards');
    for (const [id, r, d, sp] of res.mouths) {
      assert.ok(sp, `${id} turned ${r}: no water on side ${d}`);
      const [lo, hi, n] = sp;
      assert.ok(Math.abs((lo + hi) / 2 - 95.5) <= 2, `${id} turned ${r}, side ${d}: water off centre (${lo}..${hi})`);
      assert.ok(hi - lo >= 18 && hi - lo <= 30 && n >= hi - lo - 3, `${id} turned ${r}, side ${d}: water ${lo}..${hi} (${n} px) is not one river-wide band`);
    }
    assert.ok(res.seams.length > 200, `all pairs and turns checked (${res.seams.length})`);
    for (const [a, ra, b, rb, L, R] of res.seams) {
      assert.ok(Math.abs(L[0] - R[0]) <= 2 && Math.abs(L[1] - R[1]) <= 2, `${a}↻${ra} | ${b}↻${rb}: water ${L[0]}..${L[1]} meets ${R[0]}..${R[1]}`);
    }
    assert.deepEqual(errors, []);
  } finally { await browser.close(); }
});
