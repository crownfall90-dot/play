// The title bar of every scrolling section stays at the very top of the screen while the page scrolls, also in the
// app, where the status bar leaves a gap at the top (it used to stop below that gap and let the list show above it).
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs');
const {loadPlaywright, instrumentedCopy} = require('./golden/harness.cjs');

const pw = loadPlaywright();
const serve = file => new Promise(res => { const srv = http.createServer((q, r) => { r.setHeader('content-type', 'text/html; charset=utf-8'); r.end(fs.readFileSync(file)); }).listen(0, '127.0.0.1', () => res(srv)); });

test('section title bar sticks to the top in the app too', {skip: !pw && 'playwright is not installed (npm ci)', timeout: 60000}, async () => {
  const browser = await pw.chromium.launch(), srv = await serve(instrumentedCopy());
  try {
    const page = await (await browser.newContext({viewport: {width: 390, height: 700}, reducedMotion: 'reduce'})).newPage();
    await page.goto(`http://127.0.0.1:${srv.address().port}/game.html`);
    await page.waitForFunction(() => !!window.__pg, null, {timeout: 15000});
    for (const app of [false, true]) {
      await page.evaluate(a => { document.documentElement.classList.toggle('app', a); document.documentElement.style.setProperty('--it', a ? '42px' : '0px'); window.__pg.show('settings'); }, app);
      const r = await page.evaluate(() => { const s = document.querySelector('#scr-settings'); s.querySelector('.lb').style.minHeight = '2200px'; s.scrollTop = 600; return new Promise(res => setTimeout(() => res({top: s.querySelector('.ltop').getBoundingClientRect().top - s.getBoundingClientRect().top, st: s.scrollTop}), 100)); });
      assert.ok(r.st > 300, 'the page really scrolled');
      assert.ok(Math.abs(r.top) < 1, `title bar at the very top (app=${app}), was ${r.top}`);
    }
  } finally { await browser.close(); srv.close(); }
});
