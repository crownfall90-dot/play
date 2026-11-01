// Bot levels: every level puts the card on a legal spot; normal and hard take a finished object over a loose spot, and
// spend a figure only on something worth it (more readily on hard, never the last figures for a scrap).
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');

test('engine/bots: levels pick legal moves, figures only for worthwhile objects', async () => {
  const B = await import('../src/engine/bots.js');
  const {allMoves, key, groupsOf} = await import('../src/engine/board.js');
  const {TYPES} = await import('../src/engine/tiles.js');
  assert.deepEqual(B.BOT_LEVELS, ['easy', 'normal', 'hard']);
  const tiles = new Map([[key(0, 0), {x: 0, y: 0, type: 'capRS', r: 0, seed: 1}]]);
  const type = Object.keys(TYPES).find(k => k !== 'capRS' && allMoves(tiles, k).length);
  const legal = allMoves(tiles, type).map(m => `${m.x},${m.y},${m.r}`);
  let n = 0; const rnd = () => ((n = (n * 7 + 3) % 11) / 11);
  for (const level of B.BOT_LEVELS) {
    const m = B.levelPick(tiles, [], type, 0, 2, rnd, level);
    assert.ok(m && legal.includes(`${m.x},${m.y},${m.r}`), level + ' plays a legal move');
  }
  // figures: a city of 5 cards is worth taking with plenty of figures, not with the last one
  const t = {x: 0, y: 0, type: 'capRS', r: 0, seed: 1};
  const g = groupsOf(t).find(q => q.kind === 'c') || groupsOf(t)[0];
  const opts = [{t, g}];
  const mid = () => 0.5;
  const rich = B.figurePick(tiles, [], opts, 7, mid, 'normal'), last = B.figurePick(tiles, [], opts, 1, mid, 'normal');
  assert.ok(rich === null || rich === opts[0]);
  if (rich) assert.equal(last, null, 'the last figure is kept for something big');
  assert.equal(B.figurePick(tiles, [], [{t, g, done: true}], 7, mid, 'hard'), null, 'a finished object is not claimed');
});

test('engine/bots: win rate simulation (G-1): normal beats easy >= 65%, hard beats normal >= 60%', async () => {
  const {TYPES, deckList} = await import('../src/engine/tiles.js');
  const {key, allMoves, groupsOf, component, gid} = await import('../src/engine/board.js');
  const {completedAround, settle, doneMine} = await import('../src/engine/scoring.js');
  const {levelPick, figurePick} = await import('../src/engine/bots.js');

  function runMatch(p0Level, p1Level, seed) {
    let s = seed >>> 0;
    const rnd = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
    const rules = {mode: 'fast', rivers: false, deck: 30, meeples: 4, tie: 'all'};
    const d = deckList(rules);
    for (let i = d.length - 1; i > 0; i--) { const j = (rnd() * (i + 1)) | 0; [d[i], d[j]] = [d[j], d[i]]; }
    const deck = rules.deck ? d.slice(0, rules.deck) : d;
    const firstType = deck.pop();
    const first = {x: 0, y: 0, type: firstType, r: 0, seed: 1};
    const tiles = new Map([[key(0, 0), first]]);
    const players = [
      {level: p0Level, score: 0, meeples: rules.meeples},
      {level: p1Level, score: 0, meeples: rules.meeples}
    ];
    const meeples = [];
    let turn = 0;

    while (deck.length > 0) {
      const type = deck.pop();
      const moves = allMoves(tiles, type);
      if (!moves.length) continue;
      const p = turn;
      const lvl = players[p].level;
      const m = levelPick(tiles, meeples, type, p, 2, rnd, lvl);
      if (!m) continue;
      const t = {x: m.x, y: m.y, type, r: m.r, seed: 1, by: p};
      tiles.set(key(t.x, t.y), t);

      const mine = doneMine(tiles, meeples, t, p);
      for (const c of completedAround(tiles, meeples, t)) {
        const {win, each, helped} = settle(tiles, c, false, 2, rules.tie, p);
        win.forEach(i => { players[i].score += each; });
        if (helped) players[p].score += 1;
        for (const mp of [...c.meeples]) {
          const idx = meeples.findIndex(x => x.gid === mp.gid);
          if (idx >= 0) { meeples.splice(idx, 1); players[mp.p].meeples++; }
        }
      }

      if (players[p].meeples > 0) {
        const opts = groupsOf(t).filter(g => {
          const c = component(tiles, meeples, t, g);
          return c.meeples.length === 0;
        }).map(g => ({t, g}));
        const choice = figurePick(tiles, meeples, opts, players[p].meeples, rnd, lvl);
        if (choice) {
          players[p].meeples--;
          meeples.push({t: choice.t, g: choice.g, p, gid: gid(choice.t, choice.g)});
        }
      }

      for (const mn of mine) {
        const c = component(tiles, meeples, mn.t, mn.g);
        const {win, each, helped} = settle(tiles, c, false, 2, rules.tie, p);
        win.forEach(i => { players[i].score += each; });
        if (helped) players[p].score += 1;
        for (const mp of [...c.meeples]) {
          const idx = meeples.findIndex(x => x.gid === mp.gid);
          if (idx >= 0) { meeples.splice(idx, 1); players[mp.p].meeples++; }
        }
      }

      turn = 1 - turn;
    }

    const seen = new Set();
    for (const mp of [...meeples]) {
      if (seen.has(mp.gid)) continue;
      const c = component(tiles, meeples, mp.t, mp.g);
      c.ids.forEach(i => seen.add(i));
      const {win, each} = settle(tiles, c, true, 2, rules.tie, 0);
      win.forEach(i => { players[i].score += each; });
    }

    return players[0].score > players[1].score ? 0 : players[1].score > players[0].score ? 1 : -1;
  }

  function simulate(p0, p1, count = 200) {
    let w0 = 0, w1 = 0, ties = 0;
    for (let i = 0; i < count; i++) {
      const first = i % 2;
      const res = first === 0 ? runMatch(p0, p1, i * 7919 + 1) : runMatch(p1, p0, i * 7919 + 1);
      if (res === -1) ties++;
      else if (first === 0 ? res === 0 : res === 1) w0++;
      else w1++;
    }
    return {w0, w1, ties, winRate0: w0 / count, winRate1: w1 / count};
  }

  const sNE = simulate('normal', 'easy', 200);
  assert.ok(sNE.winRate0 >= 0.65, `normal wins against easy >= 65% (actual: ${(sNE.winRate0 * 100).toFixed(1)}%)`);

  const sHN = simulate('hard', 'normal', 200);
  assert.ok(sHN.winRate0 >= 0.60, `hard wins against normal >= 60% (actual: ${(sHN.winRate0 * 100).toFixed(1)}%)`);
});
