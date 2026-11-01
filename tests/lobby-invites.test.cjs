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

test('lobby DOM: pending rows, counter, drop button and declined status rendered in DOM', {skip: !pw && 'playwright is not installed (npm ci)', timeout: 120000}, async () => {
  const browser = await pw.chromium.launch();
  try {
    const {page, errors} = await openGame(browser, instrumentedCopy(), null);
    const res = await page.evaluate(() => {
      const P = window.__pg;
      P.show('lobby');
      P.setNet({code: 'ABCD', host: true, hostId: P.myId});
      P.setFriends([
        {uid: 'u1', n: 'Анна', st: 'Стратег', c: '#3fc27a'},
        {uid: 'u2', n: 'Боря'},
        {uid: 'u3', n: 'Влад'}
      ]);
      const now = Date.now();
      P.setInvited({
        code: 'ABCD',
        uids: new Set(['u1', 'u2', 'u3']),
        joined: new Set(),
        declined: new Set(['u3']),
        at: {u1: now, u2: now - 31000, u3: now}
      });
      P.show('lobby');
      const countText = document.querySelector('#lbCount') ? document.querySelector('#lbCount').textContent : '';
      const invItems = [...document.querySelectorAll('#plist li.inv')];
      const invTexts = invItems.map(li => ({
        name: li.querySelector('.who b') ? li.querySelector('.who b').textContent : '',
        status: li.querySelector('.who small') ? li.querySelector('.who small').textContent : '',
        hasDrop: li.querySelector('[data-idrop]') !== null
      }));

      // Test dropping an invite
      const dropBtn = document.querySelector('[data-idrop="u1"]');
      if (dropBtn) dropBtn.click();
      const afterDropCount = document.querySelectorAll('#plist li.inv').length;

      return {countText, invTexts, afterDropCount};
    });

    assert.ok(res.countText.includes('приглашено:'), 'header shows count of invited friends');
    assert.equal(res.invTexts.length, 3, 'shows 3 invited friends');
    assert.equal(res.invTexts[0].status, 'Приглашён · ждём ответа');
    assert.equal(res.invTexts[1].status, 'Не отвечает');
    assert.equal(res.invTexts[2].status, 'Отказался');
    assert.equal(res.invTexts[0].hasDrop, true, 'has drop button');
    assert.equal(res.afterDropCount, 2, 'dropping removes friend from invited list');
    assert.deepEqual(errors, []);
  } finally { await browser.close(); }
});
