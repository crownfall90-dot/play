// Tests for G-3 (Adaptive difficulty), G-5 (Rare cards and events in Big mode), G-6 (1v1 Duel on Time)
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const GAME_PATH = path.join(__dirname, '..', 'web', 'game.html');

test('G-3: checkAdaptiveDifficulty proposes hard after 3 wins and easy after 3 losses', async () => {
  const {checkAdaptiveDifficulty} = await import('../src/engine/bots.js');

  // Wins progression
  let streak = {w: 0, l: 0};
  let res = checkAdaptiveDifficulty(streak, true, 'normal');
  assert.equal(res.streak.w, 1);
  assert.equal(res.offer, null);

  res = checkAdaptiveDifficulty(res.streak, true, 'normal');
  assert.equal(res.streak.w, 2);
  assert.equal(res.offer, null);

  res = checkAdaptiveDifficulty(res.streak, true, 'normal');
  assert.equal(res.streak.w, 3);
  assert.equal(res.offer, 'hard', 'proposes hard after 3 consecutive wins');

  // If already hard, no redundant offer
  res = checkAdaptiveDifficulty(res.streak, true, 'hard');
  assert.equal(res.offer, null);

  // A loss resets wins streak
  res = checkAdaptiveDifficulty({w: 3, l: 0}, false, 'normal');
  assert.equal(res.streak.w, 0);
  assert.equal(res.streak.l, 1);
  assert.equal(res.offer, null);

  // 3 losses in a row
  res = checkAdaptiveDifficulty({w: 0, l: 2}, false, 'normal');
  assert.equal(res.streak.l, 3);
  assert.equal(res.offer, 'easy', 'proposes easy after 3 consecutive losses');

  // If already easy, no redundant offer
  res = checkAdaptiveDifficulty({w: 0, l: 3}, false, 'easy');
  assert.equal(res.offer, null);
});

test('G-5: Big game mode (epic) includes rare cards and triggers event celebrations', async () => {
  const {deckList, isRareTile, TYPES} = await import('../src/engine/tiles.js');
  const html = fs.readFileSync(GAME_PATH, 'utf8');

  // Check epic deck includes rare tiles
  const epicDeck = deckList({mode: 'epic', rivers: true});
  const rareCount = epicDeck.filter(t => TYPES[t] && TYPES[t].rare).length;
  assert.ok(rareCount > 0, 'epic deck must contain rare tiles');

  // Fast & duel decks do not contain rare tiles
  const fastDeck = deckList({mode: 'fast', rivers: true});
  assert.equal(fastDeck.filter(t => isRareTile(t)).length, 0);

  const duelDeck = deckList({mode: 'duel', rivers: true});
  assert.equal(duelDeck.filter(t => isRareTile(t)).length, 0);

  // In game.html: rare tile placement and big feature completion toasts
  assert.match(html, /gameRules\.mode === 'epic' && TYPES\[t\.type\] && TYPES\[t\.type\]\.rare/);
  assert.match(html, /🌟 Событие в Большой игре/);
});

test('G-6: Duel 1v1 on time mode configuration and progress tracking', async () => {
  const {MODES} = await import('../src/state/config.js');
  const {normalizeStats, recordGameMode} = await import('../src/state/progress.js');
  const html = fs.readFileSync(GAME_PATH, 'utf8');

  // Config parameters
  assert.ok(MODES.duel, 'MODES.duel defined');
  assert.equal(MODES.duel.set.deck, 30);
  assert.equal(MODES.duel.set.timer, 20);
  assert.equal(MODES.duel.set.meeples, 5);

  // Progress tracking
  const st = normalizeStats({});
  assert.ok(st.byMode.duel, 'normalizeStats includes duel');
  assert.equal(st.byMode.duel.games, 0);

  recordGameMode(st, 'duel', true, 45);
  assert.equal(st.byMode.duel.games, 1);
  assert.equal(st.byMode.duel.wins, 1);
  assert.equal(st.byMode.duel.best, 45);

  // game.html UI integration
  assert.match(html, /duel:\s*'⚔️'/);
  assert.match(html, /bm\.duel/);
  assert.match(html, /gameRules\.mode === 'duel'/);
});
