// A road finished with your own cards: you may put a figure on it for the points at once. The starting card belongs
// to nobody, so a road through it still counts as yours; a card laid by somebody else makes it shared.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');

test('engine/scoring: doneMine counts the starting card as neutral', async () => {
  const {key} = await import('../src/engine/board.js');
  const {doneMine} = await import('../src/engine/scoring.js');
  const mk = (x, y, type, r, by) => ({x, y, type, r, seed: 1, ...(by === undefined ? {} : {by})});
  const build = byTop => {
    const tiles = new Map();
    for (const t of [mk(0, 0, 'rS', 0), mk(0, -1, 'rRock', 2, byTop), mk(0, 1, 'rRock', 0, 0)]) tiles.set(key(t.x, t.y), t);
    return tiles;
  };
  const mine = build(0), t = mine.get(key(0, 1));
  const got = doneMine(mine, [], t, 0);
  assert.equal(got.length, 1, 'road: start card + two of my cards is finished and mine');
  assert.equal(got[0].c.tiles.length, 3);
  const shared = build(1);
  assert.equal(doneMine(shared, [], shared.get(key(0, 1)), 0).length, 0, 'a card of another player makes the road shared: no free figure');
});
