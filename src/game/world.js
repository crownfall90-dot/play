// src/game/world.js
// DOM world coordinate projections, feature positions, and wall calculations

export const V = [[0, -1], [1, 0], [0, 1], [-1, 0]];
export const DX = [0, 1, 0, -1];
export const DY = [-1, 0, 1, 0];
export const HOUSES = ['house', 'house2', 'house3', 'house4'];

/**
 * Calculates relative position [x, y] inside a tile (0.5..-0.5) for placing a meeple
 */
export function groupPos(t, g) {
  if (!g) return [0, 0];
  if (g.kind === 'f') return [0.24, 0.18];
  if (g.kind === 'c') {
    if (g.edges.length === 1) {
      const [x, y] = V[g.edges[0]];
      return [x * 0.3, y * 0.3];
    }
    let sx = 0, sy = 0;
    g.edges.forEach(d => {
      sx += V[d][0];
      sy += V[d][1];
    });
    return [sx * 0.16 + 0.06, sy * 0.16 + 0.08];
  }
  const a = V[g.edges[0]];
  if (g.edges.length === 2) {
    const b = V[g.edges[1]];
    return [(a[0] * 0.4225 + b[0] * 0.1225) * 0.5, (a[1] * 0.4225 + b[1] * 0.1225) * 0.5];
  }
  return [a[0] * 0.3, a[1] * 0.3];
}

/**
 * Computes wall face visibility and waterfall state for 4 sides of a tile
 */
export function calcWallVisibility(t, hasNeighbor, edgeAt) {
  const result = [];
  for (let d = 0; d < 4; d++) {
    const nx = t.x + DX[d], ny = t.y + DY[d];
    const hidden = hasNeighbor(nx, ny);
    const edge = edgeAt(t, d);
    const fall = !hidden && edge === 'w';
    result.push({d, hidden, fall});
  }
  return result;
}

/**
 * Computes procedural decor sprite items (houses, trees, rocks, towers) for a placed tile
 */
export function generateDecorItems(t, edgeAtFn, rngFn, lowGfx = false, typesConfig = {}) {
  const E = [0, 1, 2, 3].map(d => edgeAtFn(t, d));
  const R = rngFn(t.seed);
  const items = [];
  const city = [0, 1, 2, 3].filter(d => E[d] === 'c');

  if (city.length === 1) {
    const [x, y] = V[city[0]], px = -y, py = x;
    items.push([HOUSES[(R() * 4) | 0], x * 0.36 + px * 0.17, y * 0.36 + py * 0.17], [HOUSES[(R() * 4) | 0], x * 0.38 - px * 0.13, y * 0.38 - py * 0.13]);
  } else if (city.length > 1) {
    let sx = 0, sy = 0;
    city.forEach(d => { sx += V[d][0]; sy += V[d][1]; });
    const cx = sx * 0.2, cy = sy * 0.2, pts = [[-0.16, -0.06], [0.14, -0.14], [0.02, 0.1], [-0.2, 0.16]];
    const n = city.length >= 3 ? 4 : 3;
    for (let i = 0; i < n; i++) items.push([i === 0 && city.length >= 3 ? 'tower' : HOUSES[(R() * 4) | 0], cx + pts[i][0], cy + pts[i][1]]);
  }

  const typeDef = typesConfig[t.type] || {};
  if (typeDef.fort) items.push(['tower', 0, 0.2]);

  const end = typeDef.end;
  if (end && end !== 'cliff') {
    const d = E.indexOf('r');
    items.push([end, -V[d][0] * 0.1, -V[d][1] * 0.1 + 0.06]);
  }
  if (typeDef.rocks) items.push(['boulders', -0.05, 0.05], ['rock', 0.22, -0.12], ['rock', -0.24, 0.26]);

  for (const [a, b, sx, sy] of [[0, 3, -1, -1], [0, 1, 1, -1], [1, 2, 1, 1], [2, 3, -1, 1]]) {
    if (E[a] === 'c' || E[b] === 'c' || E[a] === 'b' || E[b] === 'b' || lowGfx) continue;
    if (typeDef.end === 'cliff') {
      const dr = E.indexOf('r');
      if (sx * -V[dr][0] + sy * -V[dr][1] > 0) continue;
    }
    if (R() < 0.62) {
      const k = R();
      items.push([k < 0.36 ? 'pine' : k < 0.62 ? 'oak' : k < 0.71 ? 'birch' : k < 0.78 ? 'poplar' : k < 0.88 ? 'bush' : k < 0.95 ? 'rock' : 'hay', sx * (0.30 + R() * 0.05) + (R() - 0.5) * 0.05, sy * (0.30 + R() * 0.05)]);
    }
  }

  items.forEach(it => {
    if (it[2] < -0.2 && !['rock', 'boulders', 'hay', 'bush'].includes(it[0])) {
      it[2] = -0.2 + (it[2] + 0.2) * 0.35;
      it[3] = 1;
    }
  });
  items.sort((p, q) => p[2] - q[2]);

  return {items, cityCount: city.length};
}
