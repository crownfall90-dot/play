// src/engine/board.js: placement and features on small hand-made boards.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');

const load = () => import('../src/engine/board.js');
const boardOf = (B, ...cards) => new Map(cards.map(c => [B.key(c.x, c.y), c]));

test('engine/board: a card fits only next to the board with matching edges', async () => {
  const B = await load();
  const tiles = boardOf(B, {x: 0, y: 0, type: 'cap', r: 0}); // town on the north edge
  assert.equal(B.fits(tiles, 'cap', 2, 0, -1), true, 'town meets town');
  assert.equal(B.fits(tiles, 'cap', 0, 0, -1), false, 'field cannot meet town');
  assert.equal(B.fits(tiles, 'cap', 0, 5, 5), false, 'must touch the board');
  assert.equal(B.fits(tiles, 'cap', 0, 0, 0), false, 'cell already taken');
  assert.equal(B.hasPlacement(tiles, 'cap'), true);
  assert.equal(B.emptyCells(tiles).length, 4);
});

test('engine/board: two town halves make a complete town; the cliff side fits only a cliff', async () => {
  const B = await load();
  const tiles = boardOf(B, {x: 0, y: 0, type: 'cap', r: 0}, {x: 0, y: -1, type: 'cap', r: 2});
  const t = tiles.get('0,0'), g = B.groupsOf(t).find(q => q.kind === 'c');
  const c = B.component(tiles, [], t, g);
  assert.equal(c.complete, true);
  assert.equal(c.tiles.length, 2);
  assert.deepEqual(B.claimable(tiles, [], t), [], 'a finished town takes no figure');
  const cliff = boardOf(B, {x: 0, y: 0, type: 'rEnd', r: 0}); // edges r f x f: the cliff faces south
  assert.equal(B.fits(cliff, 'rEnd', 2, 0, 1), true, 'cliff meets cliff');
  assert.equal(B.fits(cliff, 'fort', 0, 0, 1), false, 'a field never meets the cliff');
});
