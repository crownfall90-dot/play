// The hint button in a real game: shown on your own turn, hidden while bots move; it picks a legal spot,
// turns the card to fit, explains why, and the move can be made right away.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const games = require('./golden/games.json');
const {loadPlaywright, instrumentedCopy, openGame} = require('./golden/harness.cjs');

const pw = loadPlaywright();

test('hint button: on your turn it suggests a legal move with a reason', {skip: !pw && 'playwright is not installed (npm ci)', timeout: 120000}, async () => {
  const browser = await pw.chromium.launch();
  try {
    const {page, errors} = await openGame(browser, instrumentedCopy(), null);
    const cfg = JSON.parse(JSON.stringify(games[0].cfg));
    cfg.seats[0] = {...cfg.seats[0], name: 'Я', human: true};
    cfg.noIntro = true;
    await page.evaluate(c => { window.__pg.startGame(c, []); window.__pg.show('game'); }, cfg);
    for (let turn = 0; turn < 3; turn++) {
      await page.waitForFunction(() => window.__pg.state().phase === 'place' && !document.querySelector('#tip').hidden, null, {timeout: 20000});
      await page.click('#tip');
      const st = await page.evaluate(() => ({status: document.querySelector('#status').textContent, ok: !document.querySelector('#ok').disabled, sel: !!document.querySelector('#world .slot.sel')}));
      assert.match(st.status, /^💡 \S/, 'the reason is shown');
      assert.ok(st.ok && st.sel, 'a spot is chosen and can be placed');
      await page.click('#ok');
      // after the move the button goes away until it is your turn again
      await page.waitForFunction(() => document.querySelector('#tip').hidden, null, {timeout: 5000});
      // skip the figure question if it comes up
      await page.waitForFunction(() => window.__pg.state().phase !== 'busy', null, {timeout: 20000}).catch(() => {});
      await page.evaluate(() => { const b = [...document.querySelectorAll('#mrow button')].find(x => /Без фишки/.test(x.textContent)); if (b) b.click(); });
    }
    assert.deepEqual(errors, []);
  } finally { await browser.close(); }
});
