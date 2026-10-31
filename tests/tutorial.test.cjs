// The tutorial, played through like a player: every coach step must move on after its action, ending in a win.
// (It once stuck on "put a figure on the town": the town closed on move one could not take a figure.)
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const {loadPlaywright, instrumentedCopy, openGame} = require('./golden/harness.cjs');

const pw = loadPlaywright();

test('tutorial: all steps, from the first card to the win', {skip: !pw && 'playwright is not installed (npm ci)', timeout: 120000}, async () => {
  const browser = await pw.chromium.launch();
  try {
    const {page, errors} = await openGame(browser, instrumentedCopy(), null);
    await page.setViewportSize({width: 360, height: 640}); // the narrowest Android phone: the spots to tap must still be reachable
    const coach = () => page.evaluate(() => { const c = document.querySelector('#coach'); return c && !c.hidden ? c.querySelector('b').textContent : ''; });
    const waitCoach = (re, ms = 10000) => page.waitForFunction(r => { const c = document.querySelector('#coach'); return c && !c.hidden && new RegExp(r).test(c.querySelector('b').textContent); }, re.source, {timeout: ms});
    // a spot to tap is brought into view by the camera first (it takes under a second)
    const tap = async sel => { if (/slot/.test(sel)) await page.waitForTimeout(900); await page.locator(sel).first().click({timeout: 8000}); };
    await page.evaluate(() => document.querySelector('#tutBtn').click());
    await waitCoach(/Тапните по рамке/);
    await tap('#world .slot'); await waitCoach(/Нажмите «Поставить»/);
    await tap('#ok'); await waitCoach(/фишку на город/);
    await tap('#mrow .chip:not(.skip)'); await waitCoach(/Проведите пальцем/, 15000);
    const bb = await page.locator('#board').boundingBox();
    await page.mouse.move(bb.x + bb.width / 2, bb.y + bb.height / 2); await page.mouse.down();
    await page.mouse.move(bb.x + bb.width / 2 + 120, bb.y + bb.height / 2 + 30, {steps: 8}); await page.mouse.up();
    await waitCoach(/Нажмите «\+»/);
    await tap('#zin'); await waitCoach(/Тапните по рамке/);
    await tap('#world .slot'); await waitCoach(/Поверните карту/);
    await tap('#rot'); await waitCoach(/Нажмите «Поставить»/);
    for (let k = 0; k < 4 && /Нажмите «Поставить»/.test(await coach()); k++) { await tap('#ok'); await page.waitForTimeout(600); if (/Нажмите «Поставить»/.test(await coach())) await tap('#rot'); }
    await waitCoach(/фишку на дорогу/);
    await tap('#mrow .chip:not(.skip)'); await waitCoach(/Закройте второй конец/, 15000);
    await tap('#world .slot'); await waitCoach(/Нажмите «Поставить»/);
    await tap('#ok'); await waitCoach(/Вы победили/, 20000);
    const s = await page.evaluate(() => window.__pg.state().players.map(p => p.score));
    assert.ok(s[0] > s[1], `the player wins (${s})`);
    await tap('#tutNext');
    await page.waitForFunction(() => document.querySelector('#coach').hidden);
    assert.deepEqual(errors, []);
  } finally { await browser.close(); }
});
