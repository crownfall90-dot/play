// Profile cloud synchronization helpers (E-1.3)
// Encodes, decodes, and merges profile payloads stored at /profiles/{uid}.

/** Serializes local wallet and seat settings into the database profile payload. */
export function encodeProfilePayload(wallet, setupSeats = null, timestamp = Date.now()) {
  const payload = {
    w: JSON.stringify(wallet),
    t: timestamp,
  };
  if (setupSeats && setupSeats[0]) {
    payload.s = JSON.stringify({
      name: setupSeats[0].name,
      col: setupSeats[0].col,
    });
  }
  return payload;
}

/** Parses profile payload from database into wallet and seat object. */
export function decodeProfilePayload(data) {
  if (!data || !data.w) return null;
  try {
    const wallet = JSON.parse(data.w);
    const seats = data.s ? JSON.parse(data.s) : null;
    return {
      wallet,
      seats,
      timestamp: data.t || 0,
    };
  } catch (_) {
    return null;
  }
}

/** Merge two wallet states resolving conflicts in gold, quests, and unlocked cosmetics. */
export function mergeWallets(local = {}, remote = {}) {
  const merged = Object.assign({}, local, remote);
  // Gold: keep the maximum to avoid accidental rollbacks
  merged.gold = Math.max(local.gold || 0, remote.gold || 0);
  // Promos: union of redeemed promos
  merged.promos = Array.from(new Set([...(local.promos || []), ...(remote.promos || [])]));
  // Frames & cosmetics
  merged.owned = Array.from(new Set([...(local.owned || ['classic']), ...(remote.owned || ['classic'])]));
  merged.frames = Array.from(new Set([...(local.frames || []), ...(remote.frames || [])]));
  return merged;
}
