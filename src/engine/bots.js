// Where a bot (or the turn clock, for a player who ran out of time) puts a card.
// random() is passed in so tests can make the choice reproducible; the game passes Math.random.
// Bot moves are sent as ordinary moves, so other phones never re-run this: changing it cannot split a game.
import {DX, DY, key, allMoves, groupsOf, component} from './board.js';
import {roadPoints} from './scoring.js';

const neighbours = (tiles, m) => { let n = 0; for (let d = 0; d < 4; d++) if (tiles.get(key(m.x + DX[d], m.y + DY[d]))) n++; return n; };

/** Bots like spots with many neighbours, with some randomness. */
export function botPick(tiles, type, random) {
  let best = null, bs = -1e9;
  for (const m of allMoves(tiles, type)) { const s = neighbours(tiles, m) * 1.5 + random() * 2.5; if (s > bs) { bs = s; best = m; } }
  return best;
}

/** For a player whose clock ran out: next to their own unfinished objects first (finishing one is best), never to
 *  the benefit of an opponent who leads an object, otherwise somewhere compact. players: how many seats. */
export function helperPick(tiles, meeples, type, p, players, random) {
  let best = null, bs = -1e9;
  for (const m of allMoves(tiles, type)) {
    const t = {x: m.x, y: m.y, type, r: m.r, seed: 1};
    tiles.set(key(t.x, t.y), t); // tried in place, removed below
    let s = random() * .6;
    for (const g of groupsOf(t)) {
      if (g.kind === 'f') continue;
      const c = component(tiles, meeples, t, g);
      if (!c.meeples.length) continue;
      const cnt = Array.from({length: players}, () => 0); c.meeples.forEach(x => cnt[x.p]++);
      const mx = Math.max(...cnt), shared = cnt.filter(n => n === mx).length > 1;
      const worth = c.complete ? (c.kind === 'c' ? c.tiles.length * 2 : roadPoints(tiles, c)) : c.tiles.length * .8;
      if (cnt[p] === mx) s += 6 + worth * (shared ? .5 : 1.5) + (c.complete ? 8 : 0);
      else s -= 5 + worth * 1.2 + (c.complete ? 8 : 0);
    }
    tiles.delete(key(t.x, t.y));
    s += neighbours(tiles, m) * .15;
    if (s > bs) { bs = s; best = m; }
  }
  return best || botPick(tiles, type, random);
}
