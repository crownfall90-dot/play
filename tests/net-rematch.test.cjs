// N-5 Rematch contract: in an online game, "Реванш" appears on the results card and screen.
// Host starting rematch invokes startOnline with the same seats; non-host sends a rematch offer.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const GAME_PATH = path.join(__dirname, '..', 'web', 'game.html');

test('rematch (N-5): game.html contains rematchClick, startRematch and handles rematch message', () => {
  const code = fs.readFileSync(GAME_PATH, 'utf8');

  // Verify functions exist
  assert.ok(code.includes('function rematchClick('), 'rematchClick function is defined');
  assert.ok(code.includes('function startRematch('), 'startRematch function is defined');

  // Verify buttons label dynamically changes for online
  assert.ok(code.includes("${net ? 'Реванш' : 'Ещё партию'}"), 'in-game results button uses Реванш for online');
  assert.ok(code.includes("ag.textContent = net ? 'Реванш' : 'Ещё партию'"), 'results screen button uses Реванш for online');

  // Verify message handling
  assert.ok(code.includes("m.t === 'rematch'"), 'onNet handles rematch message');
  assert.ok(code.includes("Принять реванш"), 'host receives rematch prompt');
  assert.ok(code.includes("Запрос на реванш отправлен"), 'guest gets confirmation feedback');
});
