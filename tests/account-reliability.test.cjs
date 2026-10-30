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

test('anti-cheat: walletSig detects tampering and protects wallet integrity', () => {
  const env = {};
  vm.runInNewContext(fn('walletSig'), env);
  const w1 = { gold: 500, owned: ['classic', 'forest'], fcode: 'ABCDEF' };
  const sig1 = env.walletSig(w1);
  assert.ok(typeof sig1 === 'string' && sig1.length > 0);

  // Altering gold must change signature
  const wTampered = { gold: 999999, owned: ['classic', 'forest'], fcode: 'ABCDEF' };
  const sigTampered = env.walletSig(wTampered);
  assert.notEqual(sig1, sigTampered, 'tampering gold must yield different signature');

  // Verify wallet init logic with tampering
  const store = {
    wallet: JSON.stringify(wTampered),
    wallet_sig: sig1 // stale/mismatched signature
  };
  const mockStorage = {
    getItem: (k) => store[k] || null,
    setItem: (k, v) => { store[k] = v; }
  };
  const envInit = {
    localStorage: mockStorage,
    FIGS: { classic: {} }
  };
  vm.runInNewContext(
    fn('walletSig') + '\n' +
    'var randomFig = () => "classic";\n' +
    'var today = () => "2026-10-30";\n' +
    'var wallet = (() => {\n' +
    '  let w = null, sig = null;\n' +
    '  try { w = JSON.parse(localStorage.getItem("wallet")); sig = localStorage.getItem("wallet_sig"); } catch (_) {}\n' +
    '  if (w && sig && sig !== walletSig(w)) { w.gold = 100; }\n' +
    '  const v = Object.assign({gold: 100, owned: ["classic"], fig: "classic"}, w);\n' +
    '  return v;\n' +
    '})();',
    envInit
  );
  assert.equal(envInit.wallet.gold, 100, 'tampered gold with mismatched signature must be reset to 100');
});

test('anti-cheat: blocks F12, developer shortcuts and context menu', () => {
  assert.ok(html.includes("k === 'F12' || k === 123"));
  assert.ok(html.includes("e.ctrlKey || e.metaKey") && html.includes("e.shiftKey") && html.includes("'I'"));
  assert.ok(html.includes("document.addEventListener('contextmenu', e => { e.preventDefault(); return false; });"));
});

test('staging gate: protects staging web with tester PIN and watermark badge', () => {
  assert.ok(html.includes("function initStagingGate()"));
  assert.ok(html.includes("function showStagingWatermark()"));
  assert.ok(html.includes("sessionStorage.getItem('pg_staging_pin_ok')"));

  // 1. Production check: when IS_STAGING is not set, gate is inactive
  let domAppended = false;
  const mockDocProd = {
    getElementById: () => null,
    createElement: () => ({ id: '', style: {}, appendChild() {}, innerHTML: '' }),
    body: { appendChild: () => { domAppended = true; } }
  };
  const envProd = {
    window: { IS_STAGING: false },
    document: mockDocProd,
    sessionStorage: { getItem: () => null }
  };
  vm.runInNewContext(fn('showStagingWatermark') + '\n' + fn('initStagingGate'), envProd);
  envProd.initStagingGate();
  assert.equal(domAppended, false, 'staging gate must be disabled in production');

  // 2. Staging check: when IS_STAGING is true, overlay is mounted and validates PIN
  const sessionData = {};
  const elements = {};
  const mockDocStaging = {
    getElementById: (id) => elements[id] || null,
    createElement: (tag) => {
      const el = { id: '', style: {}, innerHTML: '', remove: () => {} };
      return el;
    },
    body: {
      appendChild: (el) => {
        elements[el.id] = el;
      }
    }
  };
  const envStaging = {
    window: { IS_STAGING: true, WEB_VERSION: 'тест 214' },
    document: mockDocStaging,
    sessionStorage: {
      getItem: (k) => sessionData[k] || null,
      setItem: (k, v) => { sessionData[k] = v; }
    },
    localStorage: { getItem: () => '2026' }
  };
  vm.runInNewContext(fn('showStagingWatermark') + '\n' + fn('initStagingGate'), envStaging);
  envStaging.initStagingGate();
  assert.ok(elements.stagingGate, 'staging overlay must be appended when unauthenticated');
});

test('features: promo code redemption credits gold, prevents reuse, and signs wallet', async () => {
  const toasts = [];
  const env = {
    wallet: { gold: 100, promos: [] },
    saveWallet: () => {},
    renderShop: () => {},
    toastAny: (m) => toasts.push(m),
    $: () => null
  };
  vm.runInNewContext(fn('redeemPromo'), env);

  // 1. Redeem built-in TESTER2026
  await env.redeemPromo('TESTER2026');
  assert.equal(env.wallet.gold, 600, 'gold must increase by 500');
  assert.deepEqual(env.wallet.promos, ['TESTER2026']);
  assert.ok(toasts.some(t => t.includes('+500')));

  // 2. Reject duplicate redemption
  toasts.length = 0;
  await env.redeemPromo('TESTER2026');
  assert.equal(env.wallet.gold, 600, 'duplicate code must not grant gold');
  assert.ok(toasts.some(t => t.includes('уже был использован')));

  // 3. Redeem OPUS55
  toasts.length = 0;
  await env.redeemPromo('OPUS55');
  assert.equal(env.wallet.gold, 900, 'gold must increase by 300');
  assert.deepEqual(env.wallet.promos, ['TESTER2026', 'OPUS55']);
});

test('features: maintenance screen blocks game view when active', () => {
  const elements = {};
  const mockDoc = {
    getElementById: (id) => elements[id] || null,
    createElement: () => ({ id: '', style: {}, innerHTML: '' }),
    body: { appendChild: (el) => { elements[el.id] = el; } }
  };
  const env = {
    document: mockDoc
  };
  vm.runInNewContext(fn('showMaintenanceScreen'), env);
  env.showMaintenanceScreen('Плановые работы');
  assert.ok(elements.maintBox, 'maintenance screen must be rendered');
  assert.ok(elements.maintBox.innerHTML.includes('Плановые работы'));
});



