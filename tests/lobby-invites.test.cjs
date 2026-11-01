// Room with friends: the creator sees who was invited and has not come yet (with a status), sees them become "late"
// after 30 s, and starting while somebody is still awaited asks first.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const {loadPlaywright, instrumentedCopy, openGame} = require('./golden/harness.cjs');
const pw = loadPlaywright();

test('lobby: invited friends are listed until they join; "late" after 30 s', {skip: !pw && 'playwright is not installed (npm ci)', timeout: 120000}, async () => {
  const browser = await pw.chromium.launch();
  try {
    const {page, errors} = await openGame(browser, instrumentedCopy(), null);
    const r = await page.evaluate(() => {
      const P = window.__pg;
      P.setNet({code: 'ABCD', host: true});
      P.setFriends([{uid: 'u1', n: 'Анна', st: 'Стратег', c: '#3fc27a'}, {uid: 'u2', n: 'Боря'}]);
      const now = Date.now();
      P.setInvited({code: 'ABCD', uids: new Set(['u1', 'u2']), joined: new Set(), at: {u1: now, u2: now - 31000}});
      const seats = [{owner: 'me', uid: 'm', name: 'Я'}];
      const a = P.pendingInvites(seats).map(p => [p.uid, p.late]);
      const b = P.pendingInvites([...seats, {owner: 'x', uid: 'u1', name: 'Анна'}]).map(p => p.uid); // u1 came
      P.setNet({code: 'ZZZZ', host: true});
      const c = P.pendingInvites(seats).length; // another room: nothing pending
      return {a, b, c};
    });
    assert.deepEqual(r.a, [['u1', false], ['u2', true]], 'waiting vs. not answering');
    assert.deepEqual(r.b, ['u2'], 'a friend who joined leaves the list');
    assert.equal(r.c, 0);
    assert.deepEqual(errors, []);
  } finally { await browser.close(); }
});

test('source: pending rows, counter and the start confirmation exist', () => {
  const src = require('node:fs').readFileSync(__dirname + '/../web/game.html', 'utf8');
  assert.match(src, /Приглашён · ждём ответа/);
  assert.match(src, /приглашено: \$\{pend\.length\}/);
  assert.match(src, /Начать без них/);
  assert.match(src, /data-idrop/);
});

test('source: a declined invitation reaches the inviter and shows "Отказался" (no new rules needed)', () => {
  const src = require('node:fs').readFileSync(__dirname + '/../web/game.html', 'utf8');
  assert.match(src, /k: 'no', code:/);
  assert.match(src, /v\.k === 'no'/);
  assert.match(src, /p\.declined \? 'Отказался'/);
});
