const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const html = fs.readFileSync('web/game.html', 'utf8');

function fn(name) {
  let i = html.indexOf('async function ' + name + '(');
  if (i < 0) i = html.indexOf('function ' + name + '(');
  assert.ok(i >= 0, `function ${name} not found`);
  const b = html.indexOf('{', i);
  let d = 0;
  for (let j = b; j < html.length; j++) {
    if (html[j] === '{') d++;
    else if (html[j] === '}' && !--d) return html.slice(i, j + 1);
  }
  throw Error(name);
}

test('startGoogle uses request-id to drop superseded or late callbacks', () => {
  const tokens = [];
  const failures = [];
  const env = {
    window: {},
    AndroidApp: { googleSignIn() {} },
    googleAvailable: () => true,
    googleWebOk: () => false,
    toastAny: () => {},
    finishGoogle: (t) => tokens.push(t)
  };
  vm.runInNewContext(fn('startGoogle'), env);

  // First request: reqId = 1
  env.startGoogle(false, c => failures.push(c), {});
  const firstTokenCb = env.window.onGoogleToken;
  assert.ok(typeof firstTokenCb === 'function');

  // Second request started before first completed: reqId = 2
  env.startGoogle(false, c => failures.push(c), {});

  // Simulate late callback from first request
  firstTokenCb('stale-token-1');
  assert.equal(tokens.length, 0, 'stale token from superseded request must be ignored');

  // Second callback fires
  env.window.onGoogleToken('valid-token-2');
  assert.deepEqual(tokens, ['valid-token-2']);
  assert.equal(env.window.onGoogleToken, null, 'callback must be cleared after execution');
  assert.equal(env.window.onGoogleError, null, 'error callback must be cleared after execution');
});

test('startGoogle cleans up window callbacks after error', () => {
  const failures = [];
  const env = {
    window: {},
    AndroidApp: { googleSignIn() {} },
    googleAvailable: () => true,
    googleWebOk: () => false,
    toastAny: () => {},
    finishGoogle: () => {}
  };
  vm.runInNewContext(fn('startGoogle'), env);

  env.startGoogle(false, c => failures.push(c), {});
  assert.ok(typeof env.window.onGoogleError === 'function');

  env.window.onGoogleError('no_credentials');
  assert.deepEqual(failures, ['no_credentials']);
  assert.equal(env.window.onGoogleToken, null, 'onGoogleToken must be nulled after error');
  assert.equal(env.window.onGoogleError, null, 'onGoogleError must be nulled after error');
});

test('finishGoogle guards against duplicate tokens and concurrent in-flight requests', async () => {
  const authCalls = [];
  const failures = [];
  const env = {
    googleBusy: false,
    lastGoogleToken: '',
    lastGoogleTokenTime: 0,
    googleTokenAuth: async (tok) => {
      authCalls.push(tok);
      return { j: { uid: 'u1' }, email: 'test@example.com' };
    },
    authErr: () => ['auth error'],
    keepAuth: () => {},
    track: () => {},
    cloudLoad: async () => true,
    cloudSave: async () => true,
    toastAny: () => {},
    profileName: () => 'Player',
    wallet: { name: 'Player' },
    saveWallet: () => {},
    renderAccount: () => {},
    renderSetup: () => {},
    renderShop: () => {},
    progressDot: () => {},
    show: () => {},
    presenceMark: () => {},
    syncRating: () => {},
    socialReset: () => {},
    askProfile: () => {},
    $: () => ({ hidden: true }),
    document: { querySelectorAll: () => [] },
    setTimeout: () => {}
  };

  vm.runInNewContext(
    'let googleBusy = false; let lastGoogleToken = ""; let lastGoogleTokenTime = 0;\n' +
    fn('finishGoogle'),
    env
  );

  // 1. Initial valid call
  await env.finishGoogle('id-tok-123', false, c => failures.push(c));
  assert.equal(authCalls.length, 1);
  assert.equal(failures.length, 0);

  // 2. Duplicate call with identical token within 10s is blocked
  await env.finishGoogle('id-tok-123', false, c => failures.push(c));
  assert.equal(authCalls.length, 1, 'duplicate token must not trigger googleTokenAuth again');
  assert.deepEqual(failures, ['duplicate']);

  // 3. Different token is allowed
  failures.length = 0;
  await env.finishGoogle('id-tok-456', false, c => failures.push(c));
  assert.equal(authCalls.length, 2);
  assert.equal(failures.length, 0);
});

test('source check: accountDialog wires disabled state and cancel invalidation', () => {
  assert.ok(html.includes("gbtn.disabled = true; startGoogle(link, () => { gbtn.disabled = false; }, gbtn);"));
  assert.ok(html.includes("startGoogle.reqId = (startGoogle.reqId || 0) + 1;"));
  assert.ok(html.includes("window.onGoogleToken = null;"));
  assert.ok(html.includes("window.onGoogleError = null;"));
});
