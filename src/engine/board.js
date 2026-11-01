// The board: which card fits where, and the features (towns, roads, forts) cards join into.
// Pure functions over the game's state (tiles: Map "x,y" → {x, y, type, r}; meeples: [{gid, ...}]),
// so they run the same in the game, on another phone and in tests.
import {TYPES, normEdge} from './tiles.js';

/** Directions N E S W. */
export const DX = [0, 1, 0, -1], DY = [-1, 0, 1, 0];
export const key = (x, y) => x + ',' + y;
const at = (tiles, x, y) => tiles.get(key(x, y));
/** The edge of a placed card facing direction d (its type's edges turned by r). */
export const edgeAt = (t, d) => TYPES[t.type].e[(d - t.r + 4) % 4];

/** Can a card of this type, turned r times, go to the empty cell x, y? It must touch the board and match every neighbour. */
export function fits(tiles, type, r, x, y) {
  if (at(tiles, x, y)) return false;
  let n = 0;
  for (let d = 0; d < 4; d++) { const nb = at(tiles, x + DX[d], y + DY[d]); if (!nb) continue; n++; if (normEdge(edgeAt(nb, (d + 2) % 4)) !== normEdge(TYPES[type].e[(d - r + 4) % 4])) return false; }
  return n > 0;
}
export function emptyCells(tiles) { const m = new Map(); for (const t of tiles.values()) for (let d = 0; d < 4; d++) { const x = t.x + DX[d], y = t.y + DY[d]; if (!at(tiles, x, y)) m.set(key(x, y), {x, y}); } return [...m.values()]; }
export const legalRots = (tiles, type, x, y) => [0, 1, 2, 3].filter(r => fits(tiles, type, r, x, y));
/** Every legal placement, in a fixed order (bots and the turn clock pick from it: the order is part of the rules). */
export function allMoves(tiles, type) { const out = []; for (const c of emptyCells(tiles)) for (const r of legalRots(tiles, type, c.x, c.y)) out.push({x: c.x, y: c.y, r}); return out; }
export function hasPlacement(tiles, type) { for (const c of emptyCells(tiles)) if (legalRots(tiles, type, c.x, c.y).length) return true; return false; }

/** The features on one card: its town edges, each road (a straight or bent road is one), its fort. */
export function groupsOf(t) {
  const by = {c: [], r: []};
  for (let d = 0; d < 4; d++) { const k = edgeAt(t, d); if (by[k === 'b' ? 'r' : k]) by[k === 'b' ? 'r' : k].push(d); }
  const gs = [];
  if (by.c.length) gs.push({kind: 'c', edges: by.c});
  if (by.r.length === 2) gs.push({kind: 'r', edges: by.r}); else by.r.forEach(d => gs.push({kind: 'r', edges: [d]}));
  if (TYPES[t.type].fort) gs.push({kind: 'f', edges: []});
  return gs;
}
/** Id of a feature on one card; meeples remember it. */
export const gid = (t, g) => key(t.x, t.y) + '|' + g.kind + g.edges.join('');
/** A fort with its eight neighbours; complete when all nine cells are taken. */
export function fortComp(tiles, meeples, t) {
  const ts = [];
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { const n = at(tiles, t.x + dx, t.y + dy); if (n) ts.push(n); }
  const id = key(t.x, t.y) + '|f';
  return {kind: 'f', tiles: ts, complete: ts.length === 9, ids: new Set([id]), meeples: meeples.filter(m => m.gid === id)};
}
/** The whole town or road a feature belongs to, across cards; complete when no edge of it is open. */
export function component(tiles, meeples, t, g) {
  if (g.kind === 'f') return fortComp(tiles, meeples, t);
  const ids = new Set(), ts = new Set(), st = [[t, g]];
  let open = false;
  while (st.length) {
    const [a, ag] = st.pop(), id = gid(a, ag);
    if (ids.has(id)) continue;
    ids.add(id); ts.add(a);
    for (const d of ag.edges) {
      const nb = at(tiles, a.x + DX[d], a.y + DY[d]);
      if (!nb) { open = true; continue; }
      const ng = groupsOf(nb).find(q => q.kind === ag.kind && q.edges.includes((d + 2) % 4));
      if (ng) st.push([nb, ng]);
    }
  }
  return {kind: g.kind, tiles: [...ts], complete: !open, ids, meeples: meeples.filter(m => ids.has(m.gid))};
}
/** Features of a card a figure may still go on: nobody's figure in the whole feature and not finished.
 *  Rules v2 (v2 = true): the player p may also add figures to a feature where only p's own figures stand (one per card
 *  and feature), to hold it against a later merge. */
export const claimable = (tiles, meeples, t, p = null, v2 = false) => groupsOf(t).filter(g => {
  const c = component(tiles, meeples, t, g);
  if (c.complete) return false;
  if (c.meeples.length === 0) return true;
  return !!v2 && p != null && c.meeples.every(m => m.p === p) && !meeples.some(m => m.gid === gid(t, g));
});
export const claimableAll = (tiles, meeples, p = null, v2 = false) => { const r = []; for (const t of tiles.values()) for (const g of claimable(tiles, meeples, t, p, v2)) r.push({t, g}); return r; };
