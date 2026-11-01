// tests/net-rooms-matchmaking.test.cjs
const test = require('node:test');
const assert = require('node:assert/strict');

test('net/rooms: newCode, assignColors, roomMax, and ratedRules', async () => {
  const rooms = await import('../src/net/rooms.js');

  // newCode
  const code = rooms.newCode();
  assert.equal(code.length, 5);
  assert.match(code, /^[A-Z0-9]{5}$/);

  // assignColors
  const palette = [{col: '#f00'}, {col: '#0f0'}, {col: '#00f'}, {col: '#ff0'}];
  const seats = [
    {name: 'Alice', col: '#f00'},
    {name: 'Bob', col: '#f00'}, // duplicate request
    {name: 'Charlie', col: null}
  ];
  const colored = rooms.assignColors(seats, palette, () => 0.1);
  assert.equal(colored.length, 3);
  const colors = colored.map(s => s.col);
  assert.equal(new Set(colors).size, 3, 'all players get unique colors');
  assert.ok(colors.includes('#f00'), 'first requester gets requested color');

  // roomMax
  assert.equal(rooms.roomMax({max: 4}), 4);
  assert.equal(rooms.roomMax({max: 10}), 5);
  assert.equal(rooms.roomMax({max: 1}), 2);
  assert.equal(rooms.roomMax(null, 3), 3);

  // ratedRules
  const modes = {
    fast: {set: {deckMax: 30}},
    classic: {set: {deckMax: 50}}
  };
  const fastRules = rooms.ratedRules('fast', modes);
  assert.equal(fastRules.mode, 'fast');
  assert.equal(fastRules.deckMax, 30);
  assert.equal(fastRules.timer, 60);
  assert.equal(fastRules.tie, 'all');

  // isLobbyAllReady
  assert.equal(rooms.isLobbyAllReady([
    {owner: 'host', ready: false},
    {owner: 'guest1', ready: true},
    {owner: 'guest2', ready: true}
  ], 'host'), true);

  assert.equal(rooms.isLobbyAllReady([
    {owner: 'host', ready: false},
    {owner: 'guest1', ready: false}
  ], 'host'), false);
});

test('net/rooms: netAuth validates authorized authors', async () => {
  const rooms = await import('../src/net/rooms.js');

  const net = {
    hostId: 'h1',
    uidOf: new Map([['h1', 'uid-host'], ['p2', 'uid-p2']]),
    secure: true,
    gameId: 'game-1'
  };

  const players = [
    {owner: 'h1', name: 'Host'},
    {owner: 'p2', name: 'Guest'}
  ];

  // Authorized move from seat 1 (p2)
  assert.equal(rooms.netAuth({u: 'uid-p2'}, {t: 'move', g: 'game-1', p: 1}, net, players), true);

  // Impersonated move from seat 1 sent by attacker
  assert.equal(rooms.netAuth({u: 'uid-attacker'}, {t: 'move', g: 'game-1', p: 1}, net, players), false);

  // Auto move can be sent by room participant
  assert.equal(rooms.netAuth({u: 'uid-host'}, {t: 'move', g: 'game-1', p: 1, auto: 1}, net, players), true);

  // Unsigned message in secure room rejected
  assert.equal(rooms.netAuth({}, {t: 'move', g: 'game-1', p: 1}, net, players), false);
});

test('net/matchmaking: createMatchState and filterOpenRooms', async () => {
  const mm = await import('../src/net/matchmaking.js');

  const state = mm.createMatchState({want: 4, mode: 'duel', create: true});
  assert.equal(state.want, 4);
  assert.equal(state.mode, 'duel');
  assert.equal(state.create, true);
  assert.equal(state.ready, false);

  const now = 100000;
  const seeks = new Map([
    ['ROOM1', {ts: now - 5000, n: 1, want: 2}], // 1 needed
    ['ROOM2', {ts: now - 2000, n: 2, want: 4}], // 2 needed
    ['STALE', {ts: now - 30000, n: 1, want: 2}], // expired
    ['CLOSED', {ts: now - 1000, n: 1, want: 2}]
  ]);
  const closed = new Set(['CLOSED']);
  const skip = new Set();

  const open = mm.filterOpenRooms(seeks, closed, skip, now);
  assert.equal(open.length, 2);
  assert.equal(open[0].code, 'ROOM1', 'closest to start comes first');
  assert.equal(open[1].code, 'ROOM2');
});

test('net/matchmaking: H-5 bot fallback triggers and fills seats', async () => {
  const mm = await import('../src/net/matchmaking.js');

  // shouldAutoFillBots
  assert.equal(mm.shouldAutoFillBots({
    isHost: true,
    startAt: 0,
    elapsedSec: 10,
    seatsCount: 1,
    wantCount: 2
  }), true);

  assert.equal(mm.shouldAutoFillBots({
    isHost: false,
    startAt: 0,
    elapsedSec: 10,
    seatsCount: 1,
    wantCount: 2
  }), false);

  assert.equal(mm.shouldAutoFillBots({
    isHost: true,
    startAt: 12345,
    elapsedSec: 10,
    seatsCount: 1,
    wantCount: 2
  }), false);

  // autoFillSeats
  const initialSeats = [{owner: 'p1', name: 'Alice', ready: true}];
  const filled = mm.autoFillSeats(initialSeats, 3, null, ['Бот Ёж', 'Бот Сова']);
  assert.equal(filled.length, 3);
  assert.equal(filled[0].name, 'Alice');
  assert.equal(filled[1].name, 'Бот Ёж');
  assert.equal(filled[1].bot, true);
  assert.equal(filled[1].owner, null);

  // formatMatchStatus
  const statusWait = mm.formatMatchStatus({seatsCount: 1, wantCount: 2, startAt: 0});
  assert.equal(statusWait.full, false);
  assert.equal(statusWait.title, 'Ищем соперников…');

  const statusStart = mm.formatMatchStatus({seatsCount: 2, wantCount: 2, startAt: 103000, now: 100000});
  assert.equal(statusStart.full, true);
  assert.equal(statusStart.left, 3);
  assert.equal(statusStart.title, 'Старт через 3…');
});
