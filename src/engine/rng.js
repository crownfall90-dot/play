// Seeded randomness shared by every phone in a game: the same seed must give the same numbers on all of them,
// so these two functions must never change (tests/golden.test.cjs replays recorded games to prove it).

/** mulberry32: a generator of floats in [0, 1) from a 32-bit seed. */
export const rng = seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };

/** A 32-bit string hash (seeds tile art from its key). */
export const hash = s => [...s].reduce((a, ch) => (a * 31 + ch.charCodeAt(0)) | 0, 7);
