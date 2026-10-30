// src/engine/scoring.js on hand-made features.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');

const town = (n, meeples) => ({kind: 'c', tiles: Array.from({length: n}, (_, i) => ({x: i, y: 0, type: 'cap', r: 0})), meeples});

test('engine/scoring: towns, forts, ties and respect', async () => {
  const S = await import('../src/engine/scoring.js');
  const tiles = new Map();
  assert.equal(S.featurePoints(tiles, town(3, []), false), 6, 'finished town: 2 per card');
  assert.equal(S.featurePoints(tiles, town(3, []), true), 3, 'unfinished at the end: 1 per card');
  assert.equal(S.featurePoints(tiles, {kind: 'f', tiles: new Array(9)}, false), 9);
  assert.deepEqual(S.settle(tiles, town(2, []), false, 2, 'all', 0), {pts: 4, win: [], each: 0, helped: false});
  assert.deepEqual(S.settle(tiles, town(2, [{p: 1}]), false, 2, 'all', 1), {pts: 4, win: [1], each: 4, helped: false});
  assert.deepEqual(S.settle(tiles, town(2, [{p: 1}]), false, 2, 'all', 0), {pts: 4, win: [1], each: 4, helped: true}, 'finishing a rival town earns respect');
  assert.deepEqual(S.settle(tiles, town(2, [{p: 1}]), true, 2, 'all', 0).helped, false, 'no respect in final scoring');
  assert.deepEqual(S.settle(tiles, town(3, [{p: 0}, {p: 1}]), false, 3, 'split', 2), {pts: 6, win: [0, 1], each: 3, helped: true});
  assert.equal(S.settle(tiles, town(3, [{p: 0}, {p: 1}]), false, 3, 'all', 0).each, 6);
});
