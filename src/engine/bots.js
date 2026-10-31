// Where a bot (or the turn clock, for a player who ran out of time) puts a card.
// random() is passed in so tests can make the choice reproducible; the game passes Math.random.
// Bot moves are sent as ordinary moves, so other phones never re-run this: changing it cannot split a game.
import {DX, DY, key, allMoves, groupsOf, component} from './board.js';
import {roadPoints, featurePoints} from './scoring.js';

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

const NOUN = {c: 'ваш город', r: 'вашу дорогу', f: 'вашу крепость'};
const CLAIM = {c: 'Город без хозяина — поставьте на него фишку', r: 'Дорога без хозяина — поставьте на неё фишку', f: 'Крепость — поставьте на неё фишку'};
const points = n => n % 10 === 1 && n % 100 !== 11 ? 'очко' : [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100) ? 'очка' : 'очков';

/** The "hint" button: the best spot for player p's card, and why, in words a player understands. Deterministic
 *  (the same board always gives the same advice). Finishing your own town or road counts most, then growing it,
 *  then a fresh feature you can claim (only with a figure in hand); handing points to an opponent counts against.
 *  Returns {x, y, r, why} or null when the card fits nowhere. */
export function hintPick(tiles, meeples, type, p, players, haveFigure) {
  let best = null;
  for (const m of allMoves(tiles, type)) {
    const t = {x: m.x, y: m.y, type, r: m.r, seed: 1};
    tiles.set(key(t.x, t.y), t); // tried in place, removed below
    let s = neighbours(tiles, m) * .4, why = null, wv = 0;
    const say = (v, text) => { if (v > wv) { wv = v; why = text; } };
    for (const g of groupsOf(t)) {
      const c = component(tiles, meeples, t, g), pts = featurePoints(tiles, c, false);
      if (!c.meeples.length) {
        // a figure can only go on a feature nobody holds, on the card just placed
        if (haveFigure && !c.complete) { const v = 2.5 + Math.min(pts, 12) * .25; s += v; say(v, CLAIM[g.kind]); }
        continue;
      }
      const cnt = Array.from({length: players}, () => 0); c.meeples.forEach(x => cnt[x.p]++);
      const mx = Math.max(...cnt), mine = cnt[p] === mx;
      if (mine && c.complete) { const v = 10 + pts * 1.5; s += v; say(v, `Достроит ${NOUN[g.kind]} — +${pts} ${points(pts)}`); }
      else if (mine) { const v = 2 + c.tiles.length * .4; s += v; say(v, `Продолжит ${NOUN[g.kind]}`); }
      else s -= c.complete ? 3 + pts : 1 + c.tiles.length * .3;
    }
    tiles.delete(key(t.x, t.y));
    if (!best || s > best.s) best = {x: m.x, y: m.y, r: m.r, s, why};
  }
  if (!best) return null;
  return {x: best.x, y: best.y, r: best.r, why: best.why || 'Здесь карта удобно ляжет рядом с другими'};
}
