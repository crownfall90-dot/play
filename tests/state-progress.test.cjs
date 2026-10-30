// src/state/progress.js: levels and daily quests.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');

test('progress: levels and achievements', async () => {
  const P = await import('../src/state/progress.js');
  const prog = {xp: 0, lvl: 1};
  assert.equal(P.addXp(prog, 500), 3);
  assert.deepEqual(prog, {xp: 50, lvl: 4});
  const earned = P.ACH.filter(a => a.ok({wins: 12, games: 30, c: 0, r: 0, f: 0, best: 55, owins: 0}, 5)).map(a => a.id);
  assert.deepEqual(earned, ['w1', 'w10', 'g25', 'b50', 'l5']);
});

test('progress: three different daily quests, every quest comes up evenly over a year', async () => {
  const P = await import('../src/state/progress.js');
  assert.deepEqual(P.dailyQuests('2026-10-30'), P.dailyQuests('2026-10-30'), 'the same on every phone');
  const seen = {}, d0 = Date.UTC(2026, 0, 1);
  for (let i = 0; i < 365; i++) {
    const q = P.dailyQuests(new Date(d0 + i * 864e5).toISOString().slice(0, 10));
    assert.equal(new Set(q).size, 3);
    q.forEach(id => { seen[id] = (seen[id] || 0) + 1; });
  }
  // 3 of 8 a day: about 137 days each. The old pick gave «3 cities» all 365 days.
  for (const id of P.QUESTS.map(q => q.id)) assert.ok(seen[id] > 90 && seen[id] < 190, `${id}: ${seen[id]} days`);
});
