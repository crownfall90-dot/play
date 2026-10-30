// Golden-game harness: loads web/game.html in headless Chromium with a small hook that exposes the game's
// internals, so a recorded game (cfg + moves) can be replayed and its final state compared.
// The hook is added only to a temporary copy; the shipped game is untouched.
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');

const GAME = path.join(__dirname, '..', '..', 'web', 'game.html');
const HOOK = `
window.__pg = {
  startGame, makeDeck, show,
  state: () => ({phase, applied, players, tiles, gameLog}),
};
`;

function loadPlaywright() {
  try { return require('playwright'); } catch (_) { return null; }
}

// The game script is one strict IIFE: the hook goes just before its closing line.
function instrumentedCopy() {
  const html = fs.readFileSync(GAME, 'utf8');
  const end = html.lastIndexOf('})();');
  if (end < 0) throw new Error('game.html: closing IIFE not found');
  const out = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'pg-golden-')), 'game.html');
  fs.writeFileSync(out, html.slice(0, end) + HOOK + html.slice(end));
  return out;
}

// Seeded Math.random, so a recording run is reproducible (replays do not need it: moves carry everything).
const seededRandom = seed => `(() => { let s = ${seed >>> 0}; Math.random = () => { s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; })();`;

async function openGame(browser, file, seed) {
  const ctx = await browser.newContext({viewport: {width: 430, height: 900}, reducedMotion: 'reduce'});
  if (seed != null) await ctx.addInitScript(seededRandom(seed));
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.route(/^https?:/, r => r.abort()); // fully offline: no fonts, no Firebase
  await page.goto('file://' + file);
  await page.waitForFunction(() => !!window.__pg);
  return {ctx, page, errors};
}

// Everything that decides the outcome: who scored what, figures left, and the board.
const SNAPSHOT = () => {
  const s = window.__pg.state();
  return {
    phase: s.phase,
    scores: s.players.map(p => p.score),
    meeples: s.players.map(p => p.meeples),
    board: [...s.tiles.values()].map(t => `${t.x},${t.y},${t.type},${t.r}`).sort(),
  };
};

// The phase turns to 'end' before unfinished features are scored; the results card appears only after that.
async function waitEnd(page, timeout) {
  await page.waitForFunction(() => window.__pg.state().phase === 'end' && !!document.querySelector('#over .fin'), null, {timeout, polling: 100});
}

module.exports = {loadPlaywright, instrumentedCopy, openGame, SNAPSHOT, waitEnd};
