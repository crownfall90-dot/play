// During an online game everybody sees where the player to move is about to put the card, before it is confirmed:
// the mover's phone sends its place and turn (throttled), the others show an unconfirmed tinted card. Offline fakes.
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

async function room(browser, file, mine) {
  const ctx = await browser.newContext({viewport: {width: 390, height: 844}, reducedMotion: 'reduce'});
  await ctx.addInitScript(INIT);
  const page = await ctx.newPage(), errors = [], sent = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.route(/^https?:\/\/(?!127\.0\.0\.1)/, r => {
    const u = r.request().url();
    if (/accounts:signUp/.test(u)) return r.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify({idToken: 'T', refreshToken: 'R', localId: 'u1', expiresIn: '3600'})});
    if (/db\.invalid\/rooms\/.*msgs/.test(u) && r.request().method() === 'POST') { try { sent.push(JSON.parse(JSON.parse(r.request().postData()).m)); } catch (_) {} return r.fulfill({status: 200, contentType: 'application/json', body: '{"name":"x"}'}); }
    if (/db\.invalid/.test(u)) return r.fulfill({status: 200, contentType: 'application/json', body: 'null'});
    return r.abort();
  });
  await page.goto(file);
  await page.waitForFunction(() => !!window.__pg, null, {timeout: 15000});
  await page.evaluate(() => { document.querySelector('#codeIn').value = 'ABCDE'; document.querySelector('#join').click(); });
  await page.waitForFunction(() => window.__es.length === 1, null, {timeout: 10000});
  const cfg = games[0].cfg, id = await page.evaluate(() => window.__pg.myId);
  const start = {t: 'start', seats: cfg.seats.map((s, i) => ({name: s.name, owner: mine && i === 0 ? id : 'o' + i, uid: null, fig: s.fig, col: s.col})), rules: cfg.rules, deck: cfg.deck, seed: cfg.seed, quick: true};
  await page.evaluate(m => { const e = window.__es[0]; e.readyState = 1; e.onopen(); e.l.put({data: JSON.stringify({path: '/', data: {s1: {m: JSON.stringify(m), ts: Date.now()}}})}); }, start);
  await page.waitForSelector('#scr-game:not([hidden]) .room b', {timeout: 10000});
  return {ctx, page, errors, sent};
}
const feed = (page, m) => page.evaluate(m => { window.__k = (window.__k || 1) + 1; window.__es[0].l.put({data: JSON.stringify({path: '/s' + window.__k, data: {m: JSON.stringify(m), ts: Date.now() + 5000}})}); }, m);

test('peek: others see the card the mover holds, the mover sends it', {skip: !pw && 'playwright is not installed (npm ci)', timeout: 90000}, async () => {
  const browser = await pw.chromium.launch(), srv = await serve(instrumentedCopy()), file = `http://127.0.0.1:${srv.address().port}/game.html`;
  try {
    // a watcher: all seats belong to other phones
    const w = await room(browser, file, false);
    await w.page.waitForFunction(() => window.__pg.state().phase === 'remote', null, {timeout: 10000});
    const g = await w.page.evaluate(() => ({g: window.__pg.net().gameId, n: window.__pg.state().applied, p: window.__pg.turnNow()}));
    await feed(w.page, {t: 'peek', g: g.g, p: g.p, n: g.n, x: 1, y: 0, r: 1});
    await w.page.waitForSelector('.tile.peek', {timeout: 5000});
    const left1 = await w.page.evaluate(() => document.querySelector('.tile.peek').style.left);
    await feed(w.page, {t: 'peek', g: g.g, p: g.p, n: g.n, x: -1, y: 0, r: 2});
    await w.page.waitForFunction(l => document.querySelector('.tile.peek').style.left !== l, left1, {timeout: 5000});
    assert.equal(await w.page.locator('.tile.peek').count(), 1, 'one card, moved');
    await feed(w.page, {t: 'peek', g: g.g, p: g.p, n: g.n + 5, x: 4, y: 4, r: 0});
    assert.equal(await w.page.locator('.tile.peek').count(), 1, 'a message of another turn is ignored');
    assert.deepEqual(w.errors, []);
    await w.ctx.close();

    // the mover: choosing a place and turning the card sends peeks
    const m = await room(browser, file, true);
    await m.page.waitForFunction(() => window.__pg.state().phase === 'place' && document.querySelectorAll('.slot').length > 0, null, {timeout: 15000});
    await m.page.evaluate(() => { const s = document.querySelector('.slot'); window.__pg.selectSlot(+s.dataset.x, +s.dataset.y); });
    await m.page.waitForTimeout(900);
    const peeks = m.sent.filter(x => x.t === 'peek');
    assert.ok(peeks.length >= 1, 'a peek is sent when a place is chosen');
    assert.ok(Number.isInteger(peeks[0].x) && Number.isInteger(peeks[0].y) && peeks[0].r >= 0 && peeks[0].r < 4);
    const before = peeks.length;
    await m.page.evaluate(() => { window.__pg.rotate(); });
    await m.page.waitForTimeout(900);
    const after = m.sent.filter(x => x.t === 'peek').length;
    assert.ok(after <= before + 1, 'at most one peek per change');
    assert.deepEqual(m.errors, []);
    await m.ctx.close();
  } finally { await browser.close(); srv.close(); }
});
