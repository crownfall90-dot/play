// src/net/firebase.js: the Firebase session and REST paths moved out of game.html (TASK-008-5).
// Same requests and the same saved session as before, so nobody is signed out by the update. No network: fetch is faked.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const load = () => import('../src/net/firebase.js');
const mem = (init = {}) => { const m = {...init}; return {getItem: k => (k in m ? m[k] : null), setItem: (k, v) => { m[k] = String(v); }, m}; };
const fakeFetch = answers => { const calls = []; const f = async (url, opt = {}) => { calls.push({url, opt}); const a = answers.shift() || {ok: true, body: {}}; return {ok: a.ok !== false, status: a.status || 200, json: async () => a.body}; }; f.calls = calls; return f; };

test('net/firebase: a guest gets an anonymous account once, saved under fbAuth', async () => {
  const {createFirebase} = await load();
  const storage = mem(), fetch = fakeFetch([{body: {idToken: 'T1', refreshToken: 'R1', localId: 'u1', expiresIn: '3600'}}]);
  let seen = null;
  const fb = createFirebase({apiKey: 'K', dbUrl: 'https://db', storage, fetch, onChange: a => { seen = a; }});
  assert.equal(await fb.token(), 'T1');
  assert.equal(await fb.token(), 'T1', 'cached while valid');
  assert.equal(fetch.calls.length, 1);
  assert.match(fetch.calls[0].url, /accounts:signUp\?key=K$/);
  assert.equal(JSON.parse(storage.m.fbAuth).uid, 'u1');
  assert.equal(seen.uid, 'u1', 'the game sees the session');
  assert.equal(await fb.url('rooms/AB'), 'https://db/rooms/AB.json?auth=T1');
});

test('net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest', async () => {
  const {createFirebase} = await load();
  const saved = {idToken: 'old', refreshToken: 'R', uid: 'u2', exp: 0, email: 'p@example.com'};
  const ok = createFirebase({apiKey: 'K', dbUrl: 'https://db', storage: mem({fbAuth: JSON.stringify(saved)}), fetch: fakeFetch([{body: {id_token: 'NEW', refresh_token: 'R2', expires_in: '3600', user_id: 'u2'}}])});
  assert.equal(await ok.token(), 'NEW');
  assert.equal(ok.session().email, 'p@example.com', 'still the same profile');
  const bad = createFirebase({apiKey: 'K', dbUrl: 'https://db', storage: mem({fbAuth: JSON.stringify(saved)}), fetch: fakeFetch([{ok: false, status: 400}])});
  await assert.rejects(bad.token(), /auth expired/);
});

test('net/firebase: errors keep their old meaning', async () => {
  const {createFirebase} = await load();
  const fb = createFirebase({apiKey: 'K', dbUrl: 'https://db', storage: mem({fbAuth: JSON.stringify({idToken: 'T', uid: 'u', exp: Date.now() + 1e7})}), fetch: fakeFetch([{ok: false, status: 401}, {ok: false, status: 400, body: {error: {message: 'EMAIL_EXISTS'}}}])});
  await assert.rejects(fb.get('admins/x'), /rules/);
  await assert.rejects(fb.idt('signUp', {}), e => e.error.message === 'EMAIL_EXISTS');
});

test('net/firebase: game.html takes the session from the module, with no second copy', () => {
  const html = fs.readFileSync('web/game.html', 'utf8');
  assert.ok(html.includes('PG.net.createFirebase('));
  assert.ok(!html.includes('securetoken.googleapis.com'), 'token refresh only in src/net/firebase.js');
  assert.ok(!html.includes('accounts:${method}'), 'Identity Toolkit calls only in src/net/firebase.js');
});
