// src/state/save.js
// Offline game saving, resume checks, and match history management.

export const FINISHED_GAMES_KEY = 'finishedGames';
export const GAME_HISTORY_KEY = 'gameHistory';
export const SAVED_GAME_KEY = 'savedGame';
export const LAST_ONLINE_KEY = 'lastGame';

export function gameKey(cfg) {
  if (!cfg) return '';
  if (cfg.online) return 'o:' + cfg.online;
  if (cfg.localId) return 'l:' + cfg.localId;
  return '';
}

export function jsonRead(storage, key, fallback) {
  try {
    const v = JSON.parse((storage && storage.getItem(key)) || 'null');
    return v == null ? fallback : v;
  } catch (_) {
    return fallback;
  }
}

export function finishedGames(storage = localStorage) {
  const a = jsonRead(storage, FINISHED_GAMES_KEY, []);
  return Array.isArray(a) ? a.filter(x => typeof x === 'string' || (x && typeof x.k === 'string')) : [];
}

export function isGameFinished(storage = localStorage, key) {
  if (!key) return false;
  return finishedGames(storage).some(x => (typeof x === 'string' ? x : x.k) === key);
}

export function markGameFinished(storage = localStorage, key) {
  if (!key) return;
  try {
    const a = finishedGames(storage).filter(x => (typeof x === 'string' ? x : x.k) !== key);
    a.unshift({k: key, at: Date.now()});
    storage.setItem(FINISHED_GAMES_KEY, JSON.stringify(a.slice(0, 200)));
  } catch (_) {}
}

export function saveHistoryEntry(storage = localStorage, row) {
  if (!row || !row.id) return;
  try {
    const data = jsonRead(storage, GAME_HISTORY_KEY, []);
    const old = Array.isArray(data) ? data.filter(x => x && typeof x.id === 'string') : [];
    storage.setItem(GAME_HISTORY_KEY, JSON.stringify([row, ...old.filter(x => x.id !== row.id)].slice(0, 50)));
  } catch (_) {}
}

export function saveActiveGame(storage = localStorage, gameLog) {
  if (!gameLog) return;
  try {
    storage.setItem(SAVED_GAME_KEY, JSON.stringify(gameLog));
  } catch (_) {}
}

export function clearActiveGame(storage = localStorage) {
  try {
    storage.removeItem(SAVED_GAME_KEY);
  } catch (_) {}
}

export function loadActiveGame(storage = localStorage) {
  try {
    const saved = JSON.parse(storage.getItem(SAVED_GAME_KEY));
    if (!saved) return null;
    if (!saved.cfg || !Array.isArray(saved.cfg.seats) || saved.cfg.seats.length < 2 || !Array.isArray(saved.cfg.deck) || !Array.isArray(saved.moves) || isGameFinished(storage, gameKey(saved.cfg))) {
      storage.removeItem(SAVED_GAME_KEY);
      return null;
    }
    return saved;
  } catch (_) {
    return null;
  }
}

export function getLastOnline(storage = localStorage, maxAgeMs = 3 * 3600e3) {
  try {
    const g = JSON.parse(storage.getItem(LAST_ONLINE_KEY));
    return g && Date.now() - g.at < maxAgeMs ? g : null;
  } catch (_) {
    return null;
  }
}
