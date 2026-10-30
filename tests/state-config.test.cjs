// src/state/config.js: default seats, palette, modes, rules, settings rows. Keys are saved in players' setups and wallets.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');

test('config: palette, modes, rules and settings keep their keys', async () => {
  const C = await import('../src/state/config.js');
  assert.equal(C.PALETTE.length, 7, 'seven colours (turquoise was removed)');
  assert.ok(C.PL0.length === 5 && C.PL0[0].human === true && C.PL0.slice(1).every(p => !p.human));
  assert.ok(C.validCol('#ef5350') && !C.validCol('#2ec4d6'));
  assert.deepEqual(Object.keys(C.MODES), ['fast', 'classic', 'epic']);
  assert.deepEqual(C.RULES.map(r => r.k), ['mode', 'deck', 'rivers', 'meeples', 'timer', 'hints', 'tie']);
  const keys = C.PREFS.map(r => r.k);
  for (const k of ['sound', 'music', 'view', 'speed', 'alert', 'zones', 'gfx', 'notify']) assert.ok(keys.includes(k), 'setting ' + k);
  for (const [, ks] of C.PREF_GROUPS) for (const k of ks) assert.ok(keys.includes(k), 'group member ' + k);
  assert.equal(C.STREAK_GOLD.length, 7);
});
