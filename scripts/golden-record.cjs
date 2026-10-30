#!/usr/bin/env node
// Records bot-only games into tests/golden/games.json: their cfg, every move and the final state.
// Run it only when a game rule changes ON PURPOSE (then review the diff of games.json):
//   node scripts/golden-record.cjs
'use strict';
const fs = require('fs');
const path = require('path');
const {loadPlaywright, instrumentedCopy, openGame, SNAPSHOT, waitEnd} = require('../tests/golden/harness.cjs');

// Rules and table sizes that exercise every kind of card: rivers and lakes, cliffs, rare tiles, big decks.
const VARIANTS = [
  {n: 2, rules: {mode: 'classic', rivers: true}},
  {n: 3, rules: {mode: 'classic', rivers: true}},
  {n: 4, rules: {mode: 'classic', rivers: false}},
  {n: 5, rules: {mode: 'classic', rivers: true}},
  {n: 2, rules: {mode: 'fast', rivers: true}},
  {n: 4, rules: {mode: 'fast', rivers: false}},
  {n: 3, rules: {mode: 'epic', rivers: true}},
  {n: 2, rules: {mode: 'classic', rivers: true, meeples: 3}},
];
const PER_VARIANT = 3;
const BASE = {mode: 'classic', deck: 0, rivers: true, meeples: 7, timer: 0, hints: true, tie: 'all'};
const COLS = ['#ef5350', '#4c8dff', '#f7c948', '#3fc27a', '#b06cf0'];

(async () => {
  const pw = loadPlaywright();
  if (!pw) throw new Error('playwright is not installed');
  const file = instrumentedCopy();
  const browser = await pw.chromium.launch();
  const games = [];
  let seed = 1;
  for (const v of VARIANTS) {
    for (let k = 0; k < PER_VARIANT; k++, seed++) {
      const {ctx, page, errors} = await openGame(browser, file, seed);
      const rules = {...BASE, ...v.rules};
      await page.evaluate(({n, rules, COLS}) => {
        const seats = Array.from({length: n}, (_, i) => ({name: 'Бот ' + (i + 1), human: false, fig: 'classic', col: COLS[i]}));
        window.__pg.startGame({seats, rules, deck: window.__pg.makeDeck(rules), seed: (Math.random() * 1e9) | 0, bonus: -1});
        window.__pg.show('game');
      }, {n: v.n, rules, COLS});
      await waitEnd(page, 240000);
      const expect = await page.evaluate(SNAPSHOT);
      const log = await page.evaluate(() => JSON.parse(JSON.stringify(window.__pg.state().gameLog)));
      if (errors.length) throw new Error(`seed ${seed}: ${errors.join('; ')}`);
      games.push({name: `${v.rules.mode}-${v.n}p-${v.rules.rivers ? 'rivers' : 'land'}${v.rules.meeples ? '-m' + v.rules.meeples : ''}-${k + 1}`, cfg: log.cfg, moves: log.moves, expect});
      console.log(`${games.at(-1).name}: ${log.moves.length} moves, scores ${expect.scores.join('/')}`);
      await ctx.close();
    }
  }
  await browser.close();
  const out = path.join(__dirname, '..', 'tests', 'golden', 'games.json');
  fs.writeFileSync(out, JSON.stringify(games) + '\n');
  console.log(`wrote ${games.length} games to ${path.relative(process.cwd(), out)}`);
})().catch(e => { console.error(e); process.exit(1); });
