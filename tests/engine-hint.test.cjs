// src/engine/bots.js hintPick: the in-game "hint" button. Same board → same advice, and the advice makes sense.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');

const load = async () => ({B: await import('../src/engine/board.js'), bots: await import('../src/engine/bots.js')});
const boardOf = (B, ...cards) => new Map(cards.map(c => [B.key(c.x, c.y), c]));
const townFig = (B, t, p) => ({gid: B.gid(t, B.groupsOf(t).find(g => g.kind === 'c')), p});

test('hint: finishes your own town and says how many points it brings', async () => {
  const {B, bots} = await load();
  const tiles = boardOf(B, {x: 0, y: 0, type: 'cap', r: 0});
  const h = bots.hintPick(tiles, [townFig(B, tiles.get('0,0'), 0)], 'cap', 0, 2, true);
  assert.deepEqual([h.x, h.y, h.r], [0, -1, 2]);
  assert.equal(h.why, 'Достроит ваш город — +4 очка прямо сейчас');
  assert.equal(tiles.size, 1, 'the board is left as it was');
});

test('hint: does not finish an opponent\'s town for them', async () => {
  const {B, bots} = await load();
  const tiles = boardOf(B, {x: 0, y: 0, type: 'cap', r: 0});
  const h = bots.hintPick(tiles, [townFig(B, tiles.get('0,0'), 1)], 'cap', 0, 2, true);
  assert.notDeepEqual([h.x, h.y], [0, -1]);
});

test('hint: with a figure in hand, points at a feature nobody holds; without one, just a tidy spot', async () => {
  const {B, bots} = await load();
  const tiles = boardOf(B, {x: 0, y: 0, type: 'cap', r: 0});
  const a = bots.hintPick(tiles, [], 'cap', 0, 2, true);
  assert.match(a.why, /без хозяина — поставьте фишку: достроите — \+\d+ очк\S* или больше, осталось закрыть \d+ кра/);
  assert.deepEqual(bots.hintPick(tiles, [], 'cap', 0, 2, true), a, 'deterministic');
  const b = bots.hintPick(tiles, [], 'cap', 0, 2, false);
  assert.ok(b && typeof b.why === 'string' && !/поставьте/.test(b.why));
});

test('hint: growing your own town tells the points and the open sides left', async () => {
  const {B, bots} = await load();
  // own town on the north side of a three-sided town card: placing a town edge-piece above grows it
  const tiles = boardOf(B, {x: 0, y: 0, type: 'c3', r: 0});
  const h = bots.hintPick(tiles, [townFig(B, tiles.get('0,0'), 0)], 'cap', 0, 2, false);
  assert.match(h.why, /^(Достроит|Продолжит) ваш город/);
  if (/^Продолжит/.test(h.why)) assert.match(h.why, /достроите — \+\d+ очк\S*, осталось закрыть \d+ кра/);
  const t = tiles.get('0,0'), g = B.groupsOf(t).find(q => q.kind === 'c');
  assert.match(bots.featureNote(tiles, [], t, g), /^достроите — \+2 очка, осталось закрыть 3 края$/);
});
