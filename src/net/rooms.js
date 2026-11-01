// src/net/rooms.js
// Online room code generation, color allocation, security authorization (S-2), and rules resolution.

export const BOT_NAMES = ['Бот Ёж', 'Бот Сова', 'Бот Лис', 'Бот Барсук'];

export function newCode(length = 5) {
  const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let out = '';
  for (let i = 0; i < length; i++) {
    out += A[(Math.random() * A.length) | 0];
  }
  return out;
}

export function assignColors(seats, palette = [], randomFn = Math.random) {
  const out = seats.map(x => ({...x, col: null}));
  const order = seats.map((x, i) => i).sort(() => randomFn() - 0.5);
  for (const i of order) {
    if (seats[i].col && !out.some(x => x.col === seats[i].col)) {
      out[i].col = seats[i].col;
    }
  }
  const free = palette.map(c => c.col || c).filter(c => !out.some(x => x.col === c)).sort(() => randomFn() - 0.5);
  out.forEach(x => {
    if (!x.col) x.col = free.pop();
  });
  return out;
}

export function roomMax(net, defaultMax = 5) {
  return Math.min(5, Math.max(2, (net && (net.max || (net.lobby && net.lobby.max))) || defaultMax));
}

export function ratedRules(mode, modesDict = {}) {
  const modeConfig = modesDict[mode] ? modesDict[mode].set : {};
  return {
    mode,
    ...modeConfig,
    rivers: true,
    timer: 60,
    hints: true,
    tie: 'all'
  };
}

export function netAuth(d, m, net, players = []) {
  if (!net) return true;
  const u = typeof d.u === 'string' ? d.u : '';
  const ids = net.uidOf;
  if (!u) return !net.secure;

  const bind = id => {
    if (typeof id !== 'string') return false;
    const b = ids.get(id);
    if (!b || !net.gameId) {
      ids.set(id, u);
      return true;
    }
    return b === u;
  };

  const hostUid = net.hostId ? ids.get(net.hostId) : '';
  if (m.t === 'host') return !net.hostId || m.id === net.hostId ? bind(m.id) : false;
  if (m.t === 'hello' || m.t === 'ready') return bind(m.id);
  if (m.t === 'lobby' || m.t === 'start') {
    if (hostUid && u !== hostUid) return false;
    if (m.t === 'start' && m.sec === 1) net.secure = true;
    return true;
  }
  if (m.g !== net.gameId || (typeof m.p !== 'number' && m.t !== 'ver' && m.t !== 'upd' && m.t !== 'upresume')) {
    return true;
  }
  const seat = typeof m.p === 'number' ? players[m.p] : null;
  const room = new Set(players.filter(x => x.owner).map(x => ids.get(x.owner)).filter(Boolean));
  if (hostUid) room.add(hostUid);
  if (!seat) return room.has(u) || !net.secure;
  if (!seat.owner || (m.t === 'move' && m.auto)) return room.has(u) || !net.secure;
  const owner = ids.get(seat.owner);
  return owner ? owner === u : !net.secure;
}

export function isLobbyAllReady(seats, hostId) {
  const others = (seats || []).filter(x => x.owner && x.owner !== hostId);
  return others.length === 0 || others.every(x => x.ready);
}
