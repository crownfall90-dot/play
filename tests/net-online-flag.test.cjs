// Whoever joins an online game — by an invitation, or coming back after a restart — plays the same kind of game as its
// creator: the start message carries "online" (rated) or "friends' room". Before, only the creator's phone knew, and
// everybody else saw "Комната K7Q2" in the header and no cups. Offline: Firebase and EventSource are fakes.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs');
const games = require('./golden/games.json');
const {loadPlaywright, instrumentedCopy} = require('./golden/harness.cjs');

const pw = loadPlaywright();
const serve = file => new Promise(res => { const srv = http.createServer((q, r) => { r.setHeader('content-type', 'text/html; charset=utf-8'); r.end(fs.readFileSync(file)); }).listen(0, '127.0.0.1', () => res(srv)); });
const INIT = `window.FIREBASE = {apiKey: 'k', dbUrl: 'https://db.invalid', googleClientId: ''};
  window.__es = []; window.EventSource = class { constructor(url) { this.url = url; this.readyState = 0; this.l = {}; window.__es.push(this); } addEventListener(t, f) { this.l[t] = f; } close() { this.readyState = 2; } };`;

async function room(browser, file, startExtra) {
  const ctx = await browser.newContext({viewport: {width: 390, height: 844}, reducedMotion: 'reduce'});
  await ctx.addInitScript(INIT);
  const page = await ctx.newPage(), errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.route(/^https?:\/\/(?!127\.0\.0\.1)/, r => {
    const u = r.request().url();
    if (/accounts:signUp/.test(u)) return r.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify({idToken: 'T', refreshToken: 'R', localId: 'u1', expiresIn: '3600'})});
    if (/db\.invalid/.test(u)) return r.fulfill({status: 200, contentType: 'application/json', body: 'null'});
    return r.abort();
  });
  await page.goto(file);
  await page.waitForFunction(() => !!window.__pg, null, {timeout: 15000});
  await page.evaluate(() => { document.querySelector('#codeIn').value = 'ABCDE'; document.querySelector('#join').click(); });
  await page.waitForFunction(() => window.__es.length === 1, null, {timeout: 10000});
  const cfg = games[0].cfg;
  const start = {t: 'start', seats: cfg.seats.map((s, i) => ({name: s.name, owner: 'o' + i, uid: null, fig: s.fig, col: s.col})), rules: cfg.rules, deck: cfg.deck, seed: cfg.seed, ...startExtra};
  await page.evaluate(m => { const e = window.__es[0]; e.readyState = 1; e.onopen(); e.l.put({data: JSON.stringify({path: '/', data: {s1: {m: JSON.stringify(m), ts: Date.now()}}})}); }, start);
  await page.waitForSelector('#scr-game:not([hidden]) .room b', {timeout: 10000});
  return {ctx, page, errors, head: () => page.textContent('#scr-game .room b')};
}

test('online flag: the start message says online or friends\' room, so the header and the rewards are right everywhere', {skip: !pw && 'playwright is not installed (npm ci)', timeout: 90000}, async () => {
  const browser = await pw.chromium.launch(), srv = await serve(instrumentedCopy()), file = `http://127.0.0.1:${srv.address().port}/game.html`;
  try {
    const a = await room(browser, file, {quick: true});
    assert.equal(await a.head(), 'Онлайн', 'a friend who came in by an invitation, or returned later, sees an online game');
    await a.ctx.close();
    const b = await room(browser, file, {quick: false});
    assert.equal(await b.head(), 'Комната ABCDE', 'a friends\' room stays a room');
    await b.ctx.close();
    assert.deepEqual(a.errors.concat(b.errors), []);
  } finally { await browser.close(); srv.close(); }
});
