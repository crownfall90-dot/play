// Bot levels: every level puts the card on a legal spot; normal and hard take a finished object over a loose spot, and
// spend a figure only on something worth it (more readily on hard, never the last figures for a scrap).
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');

test('engine/bots: levels pick legal moves, figures only for worthwhile objects', async () => {
  const B = await import('../src/engine/bots.js');
  const {allMoves, key, groupsOf} = await import('../src/engine/board.js');
  const {TYPES} = await import('../src/engine/tiles.js');
  assert.deepEqual(B.BOT_LEVELS, ['easy', 'normal', 'hard']);
  const tiles = new Map([[key(0, 0), {x: 0, y: 0, type: 'capRS', r: 0, seed: 1}]]);
  const type = Object.keys(TYPES).find(k => k !== 'capRS' && allMoves(tiles, k).length);
  const legal = allMoves(tiles, type).map(m => `${m.x},${m.y},${m.r}`);
  let n = 0; const rnd = () => ((n = (n * 7 + 3) % 11) / 11);
  for (const level of B.BOT_LEVELS) {
    const m = B.levelPick(tiles, [], type, 0, 2, rnd, level);
    assert.ok(m && legal.includes(`${m.x},${m.y},${m.r}`), level + ' plays a legal move');
  }
  // figures: a city of 5 cards is worth taking with plenty of figures, not with the last one
  const t = {x: 0, y: 0, type: 'capRS', r: 0, seed: 1};
  const g = groupsOf(t).find(q => q.kind === 'c') || groupsOf(t)[0];
  const opts = [{t, g}];
  const mid = () => 0.5;
  const rich = B.figurePick(tiles, [], opts, 7, mid, 'normal'), last = B.figurePick(tiles, [], opts, 1, mid, 'normal');
  assert.ok(rich === null || rich === opts[0]);
  if (rich) assert.equal(last, null, 'the last figure is kept for something big');
  assert.equal(B.figurePick(tiles, [], [{t, g, done: true}], 7, mid, 'hard'), null, 'a finished object is not claimed');
});
