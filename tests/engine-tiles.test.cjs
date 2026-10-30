// src/engine/tiles.js: the card set. Frozen counts: a change here means a different stack in every game,
// which old and new versions of the game would not agree on.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');

test('engine/tiles: card types and stack sizes per mode', async () => {
  const {TYPES, deckList} = await import('../src/engine/tiles.js');
  assert.equal(Object.keys(TYPES).length, 37);
  assert.deepEqual(Object.keys(TYPES).filter(k => TYPES[k].rare), ['xccrf', 'xccfr', 'xcrcr', 'xcrcf', 'xcrrr', 'xcrff', 'xcfrf', 'xcffr']);
  const n = (mode, rivers) => deckList({mode, rivers}).length;
  assert.deepEqual([n('classic', true), n('classic', false), n('fast', true), n('epic', true)], [81, 67, 73, 154]);
  assert.equal(TYPES.rEnd.e, 'rfxf', 'the cliff side fits only another cliff');
});
