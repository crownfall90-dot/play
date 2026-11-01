// Presence and online status helpers (E-1.5)

export const STATE_TEXT = {
  search: 'ищет соперников',
  online: 'играет онлайн',
  bots: 'играет с ботами',
  menu: 'в меню',
  off: 'не в сети',
};

/** Formats user presence payload to save in /presence/{uid}. */
export function formatPresenceRecord({
  name,
  state = 'menu',
  registered = false,
  dev = {},
  retention = {},
}) {
  return {
    t: {'.sv': 'timestamp'},
    n: String(name || 'Игрок').slice(0, 12),
    s: state,
    r: registered ? 1 : 0,
    ...dev,
    ...retention,
  };
}

/** Filters and sorts raw /presence node into an active online players list. */
export function filterActivePresence(raw = {}, myUid = null) {
  return Object.entries(raw)
    .map(([uid, v]) => ({uid, ...(v || {})}))
    .filter(x => x.s && x.n && x.s !== 'off')
    .sort((a, b) => (b.uid === myUid) - (a.uid === myUid) || (b.t || 0) - (a.t || 0));
}

/** Returns localized string for presence activity state. */
export function getPresenceStatus(state) {
  return STATE_TEXT[state] || 'не в сети';
}
