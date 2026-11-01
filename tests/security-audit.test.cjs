// Tests for Security Audit 2026-11-01: SEC-01 (XSS/sanitization), SEC-02 (PIN exposure), SEC-03 (promo claims)
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const GAME_PATH = path.join(__dirname, '..', 'web', 'game.html');
const RULES_PATH = path.join(__dirname, '..', 'docs', 'firebase-rules.json');

test('security audit: firebase rules contain promo_claims and secure testerPin', () => {
  const rules = JSON.parse(fs.readFileSync(RULES_PATH, 'utf8'));

  // SEC-02: testerPin is admin-only
  assert.ok(rules.rules.config && rules.rules.config.testerPin, 'testerPin rule exists');
  assert.ok(!rules.rules.config.testerPin['.read'].includes('true') || rules.rules.config.testerPin['.read'].includes('admins'), 'testerPin is protected from public read');

  // SEC-03: promo_claims node exists with one-time write protection
  assert.ok(rules.rules.promo_claims, 'promo_claims rule branch exists');
  const claim = rules.rules.promo_claims.$code.$uid;
  assert.ok(claim['.write'].includes('!data.exists()'), 'prevents multiple claims of same promo');
  assert.ok(claim['.read'].includes('auth.uid === $uid'), 'users only read their own claims');
});

test('security audit: game.html sanitizes remote seats, uid, and results board against XSS', () => {
  const html = fs.readFileSync(GAME_PATH, 'utf8');

  // SEC-01: remote seats in startGame use clean() and sanitized UID
  assert.match(html, /startGame\(\{seats:\s*m\.seats\.map\(\(x,\s*i\)\s*=>\s*\(\{name:\s*clean\(x\.name\)/);
  assert.match(html, /replace\(\/\[\^\\w-\]\/g,\s*''\)/);

  // SEC-01: results board sanitizes player names on podium and table
  assert.match(html, /podium.*clean\(p\.name\)/s);
  assert.match(html, /#bd.*clean\(p\.name\)/s);

  // SEC-03: redeemPromo checks promo_claims
  assert.match(html, /promo_claims\/\$\{encodeURIComponent\(code\)\}/);
});
