// src/game/state.js
// Represents the runtime game state G: tiles, deck, meeples, players, turn, phase, etc.

export function createGameState(initial = {}) {
  return {
    tiles: new Map(),
    deck: [],
    meeples: [],
    players: [],
    turn: 0,
    phase: 'idle',
    current: null,
    sel: null,
    ghost: null,
    ghostDeg: 0,
    trayDeg: 0,
    slotEls: [],
    token: 0,
    gameVisible: true,
    pendingStart: false,
    rules: null,
    net: null,
    queue: [],
    applied: 0,
    gameLog: null,
    ending: false,
    catchUp: false,
    lastPlaced: null,
    paused: false,
    turnTok: 0,
    ...initial
  };
}

export function resetGameState(G, defaults = {}) {
  G.tiles = new Map();
  G.deck = [];
  G.meeples = [];
  G.players = [];
  G.turn = 0;
  G.phase = 'idle';
  G.current = null;
  G.sel = null;
  G.ghost = null;
  G.ghostDeg = 0;
  G.trayDeg = 0;
  G.slotEls = [];
  G.token = 0;
  G.gameVisible = true;
  G.pendingStart = false;
  G.queue = [];
  G.applied = 0;
  G.gameLog = null;
  G.ending = false;
  G.catchUp = false;
  G.lastPlaced = null;
  G.paused = false;
  G.turnTok = 0;
  if (defaults) Object.assign(G, defaults);
  return G;
}

export function isTerminalPhase(phase) {
  return phase === 'end';
}

export function activePlayers(players) {
  return (players || []).filter(p => !p.resigned);
}

export function humanPlayers(players) {
  return (players || []).filter(p => p.human);
}

export function findCurrentPlayer(players, turn) {
  if (!players || !players.length) return null;
  return players[((turn % players.length) + players.length) % players.length];
}

export function isLocalPlayer(player, myId, isNet) {
  if (!player) return false;
  return isNet ? player.owner === myId : !!player.human;
}
