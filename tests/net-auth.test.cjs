// Who may speak for a seat in an online room (audit S-2). Offline: Firebase and EventSource are fakes. Each message
// carries the writer's account id (u); a stranger — or a player for somebody else's seat — cannot make a move or halt
// the game, a move without u is ignored in a room started by this version, and the real moves still work.
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

test('net auth: only the seat owner moves; strangers and unsigned messages are ignored; the game keeps going', {skip: !pw && 'playwright is not installed (npm ci)', timeout: 90000}, async () => {
  const browser = await pw.chromium.launch(), srv = await serve(instrumentedCopy()), file = `http://127.0.0.1:${srv.address().port}/game.html`;
  try {
    const ctx = await browser.newContext({viewport: {width: 390, height: 844}, reducedMotion: 'reduce'});
    await ctx.addInitScript(INIT);
    const page = await ctx.newPage(), errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.route(/^https?:\/\/(?!127\.0\.0\.1)/, r => {
      const u = r.request().url();
      if (/accounts:signUp/.test(u)) return r.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify({idToken: 'T', refreshToken: 'R', localId: 'me', expiresIn: '3600'})});
      return r.fulfill({status: 200, contentType: 'application/json', body: 'null'});
    });
    await page.goto(file);
    await page.waitForFunction(() => !!window.__pg, null, {timeout: 15000});
    await page.evaluate(() => { document.querySelector('#codeIn').value = 'ABCDE'; document.querySelector('#join').click(); });
    await page.waitForFunction(() => window.__es.length === 1, null, {timeout: 10000});
    const cfg = games[0].cfg, mv = games[0].moves;
    let k = 0;
    const put = (m, u) => page.evaluate(([m, u, k]) => { const e = window.__es[0]; e.readyState = 1; if (k === 1) e.onopen(); e.l.put({data: JSON.stringify({path: '/m' + k, data: {m: JSON.stringify(m), ts: Date.now() + 1000 * k, ...(u ? {u} : {})}})}); }, [m, u, ++k]);
    await put({t: 'host', id: 'o0'}, 'U0');
    await put({t: 'hello', id: 'o0', uid: 'U0', reg: 0, name: 'A', fig: 'classic', col: cfg.seats[0].col}, 'U0');
    await put({t: 'hello', id: 'o1', uid: 'U1', reg: 0, name: 'B', fig: 'classic', col: cfg.seats[1].col}, 'U1');
    await put({t: 'start', sec: 1, seats: cfg.seats.slice(0, 2).map((s, i) => ({name: s.name, owner: 'o' + i, uid: null, fig: s.fig, col: s.col})), rules: cfg.rules, deck: cfg.deck, seed: cfg.seed, quick: true}, 'U0');
    await page.waitForFunction(() => window.__pg.state().phase === 'remote', null, {timeout: 10000});
    const gid = await page.evaluate(() => window.__pg.net().gameId);
    const applied = () => page.evaluate(() => window.__pg.state().applied);
    assert.equal(await applied(), 0);
    // a stranger, a different player, and a message without an account id, all with a legal-looking first move
    const first = {t: 'move', g: gid, ...mv[0]};
    await put(first, 'STRANGER');
    await put(first, 'U1'); // seat 0 belongs to U0
    await put(first);       // no account id in a secure room
    await page.waitForTimeout(800);
    assert.equal(await applied(), 0, 'forged moves are not applied');
    assert.equal(await page.evaluate(() => /разошлась/.test(document.body.innerText)), false, 'the game is not halted by a forged move');
    // the real one
    await put(first, 'U0');
    await page.waitForFunction(() => window.__pg.state().applied === 1, null, {timeout: 10000});
    // another phone may play for a player who ran out of time (auto), but a stranger may not
    const second = {t: 'move', g: gid, ...mv[1], auto: 1};
    await put(second, 'STRANGER');
    await page.waitForTimeout(500);
    assert.equal(await applied(), 1);
    await put(second, 'U0');
    await page.waitForFunction(() => window.__pg.state().applied === 2, null, {timeout: 10000});
    assert.deepEqual(errors, []);
    await ctx.close();
  } finally { await browser.close(); srv.close(); }
});
