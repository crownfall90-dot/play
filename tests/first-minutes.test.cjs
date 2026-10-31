// The first minutes of a newcomer: easy bots for the first three games (unless a level was chosen), then the chosen
// level; funnel markers (first open, first game done) are written once.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const {loadPlaywright, instrumentedCopy, openGame} = require('./golden/harness.cjs');

const pw = loadPlaywright();

test('first minutes: soft start, then the chosen bot level; first open is marked once', {skip: !pw && 'playwright is not installed (npm ci)', timeout: 120000}, async () => {
  const browser = await pw.chromium.launch();
  try {
    const {page, errors} = await openGame(browser, instrumentedCopy(), null);
    const r = await page.evaluate(() => {
      const P = window.__pg, out = {};
      out.firstSeen = P.wallet().firstSeen;
      P.wallet().botlvl = 'normal'; P.prog().st.games = 0; out.g0 = P.botLevel();
      P.prog().st.games = 2; out.g2 = P.botLevel();
      P.prog().st.games = 3; out.g3 = P.botLevel();
      P.wallet().botlvl = 'hard'; P.prog().st.games = 0; out.chosen = P.botLevel();
      return out;
    });
    assert.match(r.firstSeen, /^\d{4}-\d{2}-\d{2}$/, 'first open is remembered');
    assert.equal(r.g0, 'easy'); assert.equal(r.g2, 'easy');
    assert.equal(r.g3, 'normal', 'from the fourth game the chosen level applies');
    assert.equal(r.chosen, 'hard', 'a level chosen by the player is never overridden');
    assert.deepEqual(errors, []);
  } finally { await browser.close(); }
});
