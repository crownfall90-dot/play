// Roadmap 4.3: switching graphics redraws the cards already on the table without restarting the game.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const games = require('./golden/games.json');
const {loadPlaywright, instrumentedCopy, openGame, SNAPSHOT, waitEnd} = require('./golden/harness.cjs');

const pw = loadPlaywright();

test('graphics switch: decor of placed cards is redrawn, the game stays', {skip: !pw && 'playwright is not installed (npm ci)', timeout: 120000}, async () => {
  const browser = await pw.chromium.launch();
  try {
    const {page, errors} = await openGame(browser, instrumentedCopy(), null);
    await page.evaluate(g => { window.__pg.startGame(g.cfg, g.moves); window.__pg.show('game'); }, games[0]);
    await waitEnd(page, 60000);
    const look = () => page.evaluate(() => {
      const dc = [...document.querySelectorAll('#world .bb.dc')];
      return {dc: dc.length, trees: dc.filter(e => /s-(pine|oak|birch|poplar|bush|hay)\b/.test(e.className)).length,
        figures: document.querySelectorAll('#world .bb[class*=" s-m"]').length,
        // the cards only: floating score texts and puffs come and go on their own timers
        html: [...document.querySelectorAll('#world > .tile')].map(t => t.outerHTML).join('')};
    });
    const pick = i => page.evaluate(i => document.querySelector(`#prefs [data-pref=gfx] button[data-i="${i}"]`).click(), i);
    const game = await page.evaluate(SNAPSHOT);
    await pick(0);
    const high = await look();
    assert.ok(high.trees > 0, 'trees on the beautiful setting');
    await pick(1);
    const low = await look();
    assert.equal(low.trees, 0, 'no trees on the economy setting');
    assert.ok(low.dc > 0, 'houses and towers stay');
    assert.equal(low.figures, high.figures, 'figures are kept');
    await pick(0);
    const back = await look();
    assert.equal(back.html, high.html, 'switching back draws exactly the same table');
    assert.deepEqual(await page.evaluate(SNAPSHOT), game, 'the game itself is untouched');
    assert.deepEqual(errors, []);
  } finally { await browser.close(); }
});
