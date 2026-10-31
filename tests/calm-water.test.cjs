// Heat: the water (waterfalls, lake shimmer, foam) is the only thing that animates all the time during a game, and it
// repaints the 3D scene while it does. It rests a few seconds after the last touch or move and wakes up on the next one.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const games = require('./golden/games.json');
const {loadPlaywright, instrumentedCopy} = require('./golden/harness.cjs');

const pw = loadPlaywright();

test('calm water: ambient animation pauses when nothing happens and wakes on a touch', {skip: !pw && 'playwright is not installed (npm ci)', timeout: 90000}, async () => {
  const browser = await pw.chromium.launch();
  try {
    const ctx = await browser.newContext({viewport: {width: 390, height: 844}}); // normal motion, like a player's phone
    const page = await ctx.newPage(), errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.route(/^https?:/, r => r.abort());
    await page.goto('file://' + instrumentedCopy());
    await page.waitForFunction(() => !!window.__pg, null, {timeout: 15000});
    const g = games[3], cfg = JSON.parse(JSON.stringify(g.cfg)); cfg.seats[0] = {...cfg.seats[0], human: true}; cfg.noIntro = true;
    await page.evaluate(([c, m]) => { window.__pg.startGame(c, m); window.__pg.show('game'); }, [cfg, g.moves.slice(0, 51)]); // seat 0 is next, rivers and lakes on the board
    await page.waitForFunction(() => window.__pg.state().phase === 'place', null, {timeout: 40000});
    // endless animations only: the one-off ones (the screen edge flashing at the start of a turn) end by themselves
    const running = () => page.evaluate(() => document.getAnimations().filter(a => a.playState === 'running' && a.effect.getComputedTiming().iterations === Infinity).length);
    const calm = () => page.evaluate(() => document.documentElement.classList.contains('calm'));
    await page.mouse.move(30, 300); await page.mouse.move(50, 310); // a touch (on a loaded machine the replay may have outlasted the calm timer)
    assert.ok(await running() > 0, 'the water flows while something is going on');
    await page.waitForFunction(() => document.documentElement.classList.contains('calm'), null, {timeout: 8000});
    assert.equal(await running(), 0, 'nothing animates once the table is calm');
    await page.mouse.move(40, 400); await page.mouse.move(60, 410);
    assert.equal(await calm(), false, 'a touch wakes it');
    assert.ok(await running() > 0);
    assert.deepEqual(errors, []);
    await ctx.close();
  } finally { await browser.close(); }
});
