// The owner's panel inside the game (7 taps on the version row) opens for accounts in /admins only: the database
// answers /errors to them alone. A player who finds the gesture gets nothing. Firebase is a fake.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs');
const {loadPlaywright, instrumentedCopy} = require('./golden/harness.cjs');

const pw = loadPlaywright();
const serve = file => new Promise(res => { const srv = http.createServer((q, r) => { r.setHeader('content-type', 'text/html; charset=utf-8'); r.end(fs.readFileSync(file)); }).listen(0, '127.0.0.1', () => res(srv)); });

async function tapSeven(browser, file, admin) {
  const ctx = await browser.newContext({viewport: {width: 390, height: 844}, reducedMotion: 'reduce'});
  await ctx.addInitScript("window.FIREBASE = {apiKey: 'k', dbUrl: 'https://db.invalid', googleClientId: ''};");
  const page = await ctx.newPage(), errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.route(/^https?:\/\/(?!127\.0\.0\.1)/, r => {
    const u = r.request().url(), ok = (st, b) => r.fulfill({status: st, contentType: 'application/json', body: JSON.stringify(b)});
    if (/accounts:signUp/.test(u)) return ok(200, {idToken: 'T', refreshToken: 'R', localId: 'u1', expiresIn: '3600'});
    if (/db\.invalid\/errors\.json/.test(u)) return admin ? ok(200, {e1: {m: 'x', ts: 1}}) : ok(401, {error: 'Permission denied'});
    if (/db\.invalid/.test(u)) return ok(200, null);
    return r.abort();
  });
  await page.goto(file);
  await page.waitForFunction(() => !!window.__pg, null, {timeout: 15000});
  await page.evaluate(() => window.__pg.show('settings'));
  for (let i = 0; i < 7; i++) await page.evaluate(() => document.querySelector('#verFull').closest('.srow').click());
  await page.waitForTimeout(1200);
  const shown = await page.evaluate(() => !!document.querySelector('.ocard.dev')), btn = await page.evaluate(() => !document.querySelector('#devBtn').hidden);
  await ctx.close();
  return {shown, btn, errors};
}

test('owner panel in the game: only for admins', {skip: !pw && 'playwright is not installed (npm ci)', timeout: 60000}, async () => {
  const browser = await pw.chromium.launch(), srv = await serve(instrumentedCopy()), file = `http://127.0.0.1:${srv.address().port}/game.html`;
  try {
    const player = await tapSeven(browser, file, false);
    assert.deepEqual([player.shown, player.btn], [false, false], 'an ordinary player sees nothing');
    const owner = await tapSeven(browser, file, true);
    assert.deepEqual([owner.shown, owner.btn], [true, true], 'the owner gets the panel');
    assert.deepEqual(player.errors.concat(owner.errors), []);
  } finally { await browser.close(); srv.close(); }
});
