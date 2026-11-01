// Owner panel: the players list, a player's card with the event log, clearing a log. Firebase is a fake: nothing is sent anywhere.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const {loadPlaywright} = require('./golden/harness.cjs');

const pw = loadPlaywright();
const PANEL = 'file://' + path.join(__dirname, '..', 'tools', 'founder-admin.html');

test('admin panel: all players, one player\'s info and log, clearing it', {skip: !pw && 'playwright is not installed (npm ci)', timeout: 60000}, async () => {
  const browser = await pw.chromium.launch();
  try {
    const ctx = await browser.newContext({viewport: {width: 1100, height: 1000}});
    const page = await ctx.newPage(), errors = [], writes = [], urls = [];
    page.on('pageerror', e => errors.push(e.message)); page.on('dialog', d => d.accept());
    const now = Date.now();
    const data = {
      presence: {u1: {t: now - 30e3, s: 'menu', n: 'Katy', p: 'github', v: '1.0.227', r: 1, m: 'Pixel 7', i: 6.3}, u2: {t: now - 5 * 3600e3, s: 'off', n: 'guest7', p: 'web', v: '1.0.226', r: 0}},
      'leaders/u1': {n: 'Katy', r: 45, w: 3, t: now},
      'profiles/u1': {w: JSON.stringify({gold: 640, owned: ['classic', 'monk'], prog: {lvl: 4, xp: 120, st: {games: 22, wins: 9, best: 71}}}), t: now - 60e3},
      'logs/u1': {b: {t: now - 1000, k: 'game_end', d: '{"mode":"online","place":1}'}, a: {t: now - 9000, k: 'open', d: '{"v":"1.0.227"}'}},
      errors: {e1: {m: 'TypeError: x is undefined', ts: now - 500, ver: '1.0.227', uid: 'u1'}},
      'feedback/u1': {f1: {k: 'idea', m: 'hi', t: now}},
    };
    await ctx.route(/^https?:/, r => {
      const u = new URL(r.request().url()), m = r.request().method(), ok = b => r.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify(b)});
      if (/signInWithPassword/.test(u.href)) return ok({idToken: 'ADM', refreshToken: 'R', expiresIn: '3600', localId: 'owner', email: 'o@x.ru'});
      if (/gsi\/client/.test(u.href)) return r.fulfill({contentType: 'text/javascript', body: 'window.google={accounts:{id:{initialize(){},renderButton(){}}}}'});
      if (/api\.github\.com/.test(u.host)) return ok([]);
      if (/firebasedatabase/.test(u.host)) {
        const p = u.pathname.replace(/\.json$/, '').slice(1); urls.push(m + ' ' + p + u.search);
        if (m !== 'GET') { writes.push(m + ' ' + p); return ok(null); }
        if (p === 'errors') return ok(u.searchParams.get('orderBy') === '"uid"' ? {e1: data.errors.e1} : data.errors);
        return ok(data[p] === undefined ? null : data[p]);
      }
      return r.abort();
    });
    await page.goto(PANEL);
    await page.fill('#loginMail', 'o@x.ru'); await page.fill('#loginPass', 'secret1'); await page.click('#btnLogin');
    await page.waitForSelector('.pl-row', {timeout: 10000});
    assert.equal(await page.locator('.pl-row').count(), 2);
    assert.match(await page.textContent('#plList'), /Katy[\s\S]*github|Katy/);
    assert.equal(await page.textContent('#plCount'), '2 из 2');
    await page.fill('#plSearch', 'guest'); assert.equal(await page.locator('.pl-row').count(), 1);
    await page.fill('#plSearch', '');
    assert.ok(urls.some(x => /presence\?orderBy="t"&limitToLast=500/.test(decodeURIComponent(x)) || /presence\?orderBy=%22t%22&limitToLast=500/.test(x)), 'the list asks for the latest 500 players');
    await page.click('.pl-row[data-uid=u1]');
    await page.waitForSelector('#plLog');
    const card = await page.textContent('#plDetail');
    for (const want of ['Katy', 'Pixel 7', '1.0.227', '640', '45', '22', '71', 'game_end', 'open', 'TypeError: x is undefined']) assert.ok(card.includes(want), 'the card shows ' + want);
    assert.ok(card.indexOf('game_end') < card.indexOf('open'), 'newest event first');
    await page.click('#plClear');
    await page.waitForFunction(() => true); await page.waitForTimeout(300);
    assert.ok(writes.includes('DELETE logs/u1'), 'clearing deletes only this player\'s log');
    await page.click('#btnErrors');
    await page.waitForSelector('#plDetail [data-pl=u1]');
    assert.deepEqual(errors, []);
  } finally { await browser.close(); }
});
