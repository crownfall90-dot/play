// src/state/catalog.js: the shop. Figure keys are saved in players' wallets, so the set must not shrink or be renamed.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');

test('catalog: figure keys and prices are stable; one free figure; locations have art', async () => {
  const C = await import('../src/state/catalog.js');
  const keys = Object.keys(C.FIGS);
  for (const k of ['classic', 'peasant', 'monk', 'knight', 'king', 'queen']) assert.ok(keys.includes(k), 'figure ' + k);
  assert.equal(C.FIGS.classic.price, 0);
  assert.equal(C.FIGS.queen.price, 2500, 'the queen is the dearest');
  assert.ok(C.LOCS.length >= 3 && C.LOCS.every(l => l.name && l.art));
  assert.ok(C.CHEST_SVG.startsWith('<svg'));
});
