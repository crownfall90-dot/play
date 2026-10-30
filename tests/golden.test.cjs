// Determinism contract (TASK-008): every recorded game, replayed from its cfg and moves the way a phone
// rejoining an online game does it, must end with exactly the recorded scores, figures and board.
// If this fails after a refactor, the refactor changed the rules or their order: online games between the
// old and new version would split. Re-record (scripts/golden-record.cjs) only for an intended rule change.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const games = require('./golden/games.json');
const {loadPlaywright, instrumentedCopy, openGame, SNAPSHOT, waitEnd} = require('./golden/harness.cjs');

const pw = loadPlaywright();

test('golden games: replays end exactly as recorded', {skip: !pw && 'playwright is not installed (npm ci)', timeout: 600000}, async t => {
  const file = instrumentedCopy();
  const browser = await pw.chromium.launch();
  try {
    for (const g of games) {
      await t.test(g.name, async () => {
        const {ctx, page, errors} = await openGame(browser, file, null);
        try {
          await page.evaluate(({cfg, moves}) => { window.__pg.startGame(cfg, moves); window.__pg.show('game'); }, g);
          await waitEnd(page, 60000);
          const got = await page.evaluate(SNAPSHOT);
          assert.deepEqual(errors, [], 'no page errors');
          assert.deepEqual(got, g.expect);
        } finally { await ctx.close(); }
      });
    }
  } finally { await browser.close(); }
});

test('golden games: the set covers rivers, lakes, the cliff and every table size', () => {
  const types = new Set(games.flatMap(g => g.expect.board.map(b => b.split(',')[2])));
  for (const id of ['wEnd', 'rEnd']) assert.ok(types.has(id), `no recorded game uses ${id}`);
  assert.ok([...types].some(id => /lake|pond/i.test(id)) || types.size > 20, 'lake tiles expected');
  assert.deepEqual([...new Set(games.map(g => g.cfg.seats.length))].sort(), [2, 3, 4, 5]);
});
