// tests/engine-bot-personas.test.cjs
// Tests for G-2: Distinct bot archetypes / personas (builder, roadman, monk, balanced)
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');

test('engine/bots: BOT_ARCHETYPES definition and default personas in config', async () => {
  const {BOT_ARCHETYPES} = await import('../src/engine/bots.js');
  const {PL0} = await import('../src/state/config.js');

  assert.ok(BOT_ARCHETYPES.builder, 'has builder');
  assert.ok(BOT_ARCHETYPES.roadman, 'has roadman');
  assert.ok(BOT_ARCHETYPES.monk, 'has monk');
  assert.ok(BOT_ARCHETYPES.balanced, 'has balanced');

  // Verify PL0 bot seats have personas
  assert.equal(PL0[1].persona, 'builder');
  assert.equal(PL0[2].persona, 'roadman');
  assert.equal(PL0[3].persona, 'monk');
  assert.equal(PL0[4].persona, 'balanced');
});

test('engine/bots: figurePick prioritizes features matching bot persona', async () => {
  const {figurePick} = await import('../src/engine/bots.js');

  const tiles = new Map();
  // Place two road tiles so road component has length 2
  tiles.set('0,0', {x: 0, y: 0, type: 'rS', r: 0});
  tiles.set('0,1', {x: 0, y: 1, type: 'rS', r: 0});
  const meeples = [];

  const cityOpt = {
    t: {x: 0, y: 0, type: 'cap', r: 0},
    g: {kind: 'c', edges: [0]}
  };
  const roadOpt = {
    t: {x: 0, y: 0, type: 'rS', r: 0},
    g: {kind: 'r', edges: [0, 2]}
  };
  const fortOpt = {
    t: {x: 0, y: 0, type: 'fort', r: 0},
    g: {kind: 'f', edges: [0, 1, 2, 3]}
  };

  const deterministicRng = () => 0.5;

  // Between city and road of comparable value:
  // Builder prefers city
  const builderPick = figurePick(tiles, meeples, [cityOpt, roadOpt], 6, deterministicRng, 'normal', 'builder');
  assert.ok(builderPick, 'builder picked an object');
  assert.equal(builderPick.g.kind, 'c', 'builder prefers city feature');

  // Roadman prefers road
  const roadmanPick = figurePick(tiles, meeples, [cityOpt, roadOpt], 6, deterministicRng, 'normal', 'roadman');
  assert.ok(roadmanPick, 'roadman picked an object');
  assert.equal(roadmanPick.g.kind, 'r', 'roadman prefers road feature');

  // Monk prefers fort
  const monkPick = figurePick(tiles, meeples, [cityOpt, fortOpt], 6, deterministicRng, 'normal', 'monk');
  assert.ok(monkPick, 'monk picked an object');
  assert.equal(monkPick.g.kind, 'f', 'monk prefers fort feature');
});
