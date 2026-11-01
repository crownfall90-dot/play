// Roadmap phase 1 (connection): going online first asks the game server (with a time limit); a dropped table stream
// shows "reconnecting" over the board and hides it when the stream is back. Offline: Firebase and EventSource are fakes.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs');
const {loadPlaywright, instrumentedCopy} = require('./golden/harness.cjs');

const pw = loadPlaywright();
const serve = file => new Promise(res => { const srv = http.createServer((q, r) => { r.setHeader('content-type', 'text/html; charset=utf-8'); r.end(fs.readFileSync(file)); }).listen(0, '127.0.0.1', () => res(srv)); });
const INIT = `window.FIREBASE = {apiKey: 'k', dbUrl: 'https://db.invalid', googleClientId: ''};
  window.__es = []; window.EventSource = class { constructor(url) { this.url = url; this.readyState = 0; window.__es.push(this); } addEventListener() {} close() { this.readyState = 2; } };`;

async function open(browser, file, serverUp) {
  const ctx = await browser.newContext({viewport: {width: 390, height: 844}, reducedMotion: 'reduce'});
  await ctx.addInitScript(INIT);
  const page = await ctx.newPage(), errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.route(/^https?:\/\/(?!127\.0\.0\.1)/, r => {
    const u = r.request().url();
    if (!serverUp) return r.abort();
    if (/accounts:signUp/.test(u)) return r.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify({idToken: 'T', refreshToken: 'R', localId: 'u1', expiresIn: '3600'})});
    if (/db\.invalid/.test(u)) return r.fulfill({status: 200, contentType: 'application/json', body: 'null'});
    return r.abort();
  });
  await page.goto(file);
  await page.waitForFunction(() => !!window.__pg, null, {timeout: 15000});
  return {ctx, page, errors};
}

test('connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"', {skip: !pw && 'playwright is not installed (npm ci)', timeout: 60000}, async () => {
  const browser = await pw.chromium.launch(), srv = await serve(instrumentedCopy()), file = `http://127.0.0.1:${srv.address().port}/game.html`;
  try {
    const a = await open(browser, file, false);
    await a.page.evaluate(() => { document.querySelector('#codeIn').value = 'ABCDE'; document.querySelector('#join').click(); });
    await a.page.waitForSelector('#confirmBox', {timeout: 10000});
    assert.match(await a.page.textContent('#confirmBox'), /Нет связи с игровым сервером/);
    assert.equal(await a.page.evaluate(() => window.__es.length), 0, 'no room stream opened without a server');
    await a.ctx.close();

    const b = await open(browser, file, true);
    await b.page.evaluate(() => { document.querySelectorAll('body > .over').forEach(e => e.remove()); document.querySelector('#codeIn').value = 'ABCDE'; document.querySelector('#join').click(); });
    await b.page.waitForFunction(() => window.__es.length === 1, null, {timeout: 10000});
    const es = () => b.page.evaluate(() => window.__es[window.__es.length - 1]);
    assert.match((await es()).url, /rooms\/ABCDE\/msgs\.json\?auth=T/);
    const bad = () => b.page.evaluate(() => document.querySelector('#netBad').hidden);
    await b.page.evaluate(() => { const e = window.__es[0]; e.readyState = 1; e.onopen(); });
    assert.equal(await bad(), true);
    await b.page.evaluate(() => { const e = window.__es[0]; e.readyState = 0; e.onerror(); }); // the browser is retrying
    assert.equal(await bad(), false, 'reconnecting is shown');
    await b.page.evaluate(() => { const e = window.__es[0]; e.readyState = 1; e.onopen(); });
    assert.equal(await bad(), true, 'and hidden once back');
    // a stream the browser gave up on is reopened by the game
    await b.page.evaluate(() => { const e = window.__es[0]; e.readyState = 2; e.onerror(); });
    await b.page.waitForFunction(() => window.__es.length === 2, null, {timeout: 6000});
    assert.deepEqual(a.errors.concat(b.errors), []);
    await b.ctx.close();
  } finally { await browser.close(); srv.close(); }
});
