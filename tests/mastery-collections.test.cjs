// Tests for R-9 Collections and R-11 Mastery stats
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');

test('catalog: COLLECTIONS structure and collectionProgress logic (R-9)', async () => {
  const C = await import('../src/state/catalog.js');
  assert.ok(Array.isArray(C.COLLECTIONS), 'COLLECTIONS is an array');
  assert.equal(C.COLLECTIONS.length, 3, '3 collections defined');

  for (const col of C.COLLECTIONS) {
    assert.ok(col.id, 'has id');
    assert.ok(col.name, 'has name');
    assert.ok(col.reward > 0, 'has reward');
    assert.ok(Array.isArray(col.figs), 'has figs');
    assert.ok(Array.isArray(col.frames), 'has frames');
  }

  // Check progress with empty wallet
  const emptyWallet = {owned: ['classic'], frames: []};
  const courtProg = C.collectionProgress(C.COLLECTIONS[0], emptyWallet);
  assert.equal(courtProg.isComplete, false);
  assert.equal(courtProg.isClaimed, false);
  assert.equal(courtProg.done, 0);

  // Check progress with complete wallet
  const fullCourtWallet = {
    owned: ['classic', 'knight', 'king', 'queen'],
    frames: ['royal'],
    colClaimed: []
  };
  const completeProg = C.collectionProgress(C.COLLECTIONS[0], fullCourtWallet);
  assert.equal(completeProg.isComplete, true);
  assert.equal(completeProg.done, completeProg.total);
  assert.equal(completeProg.isClaimed, false);

  // After claim
  fullCourtWallet.colClaimed.push('court');
  const claimedProg = C.collectionProgress(C.COLLECTIONS[0], fullCourtWallet);
  assert.equal(claimedProg.isComplete, true);
  assert.equal(claimedProg.isClaimed, true);
});

test('progress: normalizeStats and recordGameMode (R-11)', async () => {
  const P = await import('../src/state/progress.js');
  
  // Normalizing empty / legacy stats
  const norm = P.normalizeStats({games: 5, wins: 3, best: 42});
  assert.equal(norm.games, 5);
  assert.equal(norm.wins, 3);
  assert.equal(norm.best, 42);
  assert.equal(norm.maxCity, 0);
  assert.ok(norm.byMode.bots);
  assert.ok(norm.byMode.friends);
  assert.ok(norm.byMode.online);

  // Record games by mode
  P.recordGameMode(norm, 'bots', true, 50);
  assert.equal(norm.byMode.bots.games, 1);
  assert.equal(norm.byMode.bots.wins, 1);
  assert.equal(norm.byMode.bots.best, 50);

  P.recordGameMode(norm, 'bots', false, 30);
  assert.equal(norm.byMode.bots.games, 2);
  assert.equal(norm.byMode.bots.wins, 1);
  assert.equal(norm.byMode.bots.best, 50);

  P.recordGameMode(norm, 'online', true, 65);
  assert.equal(norm.byMode.online.games, 1);
  assert.equal(norm.byMode.online.wins, 1);
  assert.equal(norm.byMode.online.best, 65);

  P.recordGameMode(norm, 'friends', true, 48);
  assert.equal(norm.byMode.friends.games, 1);
  assert.equal(norm.byMode.friends.wins, 1);
  assert.equal(norm.byMode.friends.best, 48);
});

test('source check: game.html and styles.css contain R-9, R-11, D-1, D-2 integration', async () => {
  const fs = require('node:fs');
  const html = fs.readFileSync('web/game.html', 'utf8');
  const css = fs.readFileSync('src/ui/styles.css', 'utf8');

  // R-9 Collections tab and renderCollections
  assert.match(html, /data-pt="cols"/);
  assert.match(html, /renderCollections/);
  assert.match(html, /data-claimcol=/);

  // R-11 Mastery stats
  assert.match(html, /Мастерство по режимам/);
  assert.match(html, /smastery/);
  assert.match(html, /recordGameMode/);

  // D-2 Placement lock & feature confetti
  assert.match(html, /puzzle-lock/);
  assert.match(html, /featureConfetti/);

  // D-1 and D-2 CSS
  assert.match(css, /\.puzzle-lock/);
  assert.match(css, /\.feat-confetti/);
  assert.match(css, /\.smastery/);
  assert.match(css, /\.col-card/);
});
