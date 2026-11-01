// Tests for src/game/state.js (E-1.7 game state abstraction)
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');

const {createGameState, resetGameState, isTerminalPhase, activePlayers, humanPlayers, findCurrentPlayer, isLocalPlayer} = require('../src/game/state.js');

test('game/state: createGameState initializes empty game structures', () => {
  const G = createGameState();

  assert.ok(G.tiles instanceof Map, 'tiles is a Map');
  assert.equal(G.tiles.size, 0);
  assert.deepEqual(G.deck, []);
  assert.deepEqual(G.meeples, []);
  assert.deepEqual(G.players, []);
  assert.equal(G.turn, 0);
  assert.equal(G.phase, 'idle');
  assert.equal(G.current, null);
  assert.equal(G.sel, null);
  assert.equal(G.net, null);
});

test('game/state: resetGameState resets playing variables', () => {
  const G = createGameState();
  G.tiles.set('0,0', {type: 'rS'});
  G.turn = 5;
  G.phase = 'meeple';
  G.deck = ['cap', 'c2'];

  resetGameState(G, {phase: 'idle'});
  assert.equal(G.tiles.size, 0);
  assert.equal(G.turn, 0);
  assert.equal(G.phase, 'idle');
  assert.equal(G.deck.length, 0);
});

test('game/state: player predicates and current player lookup', () => {
  const players = [
    {name: 'Вы', human: true, owner: 'id-1', score: 10, resigned: false},
    {name: 'Маша', human: false, owner: null, score: 8, resigned: false},
    {name: 'Дима', human: true, owner: 'id-2', score: 4, resigned: true}
  ];

  assert.equal(humanPlayers(players).length, 2);
  assert.equal(activePlayers(players).length, 2);
  assert.equal(findCurrentPlayer(players, 0).name, 'Вы');
  assert.equal(findCurrentPlayer(players, 4).name, 'Маша'); // 4 % 3 = 1
  assert.equal(isTerminalPhase('end'), true);
  assert.equal(isTerminalPhase('tile'), false);
  assert.equal(isLocalPlayer(players[0], 'id-1', true), true);
  assert.equal(isLocalPlayer(players[1], 'id-1', true), false);
  assert.equal(isLocalPlayer(players[0], 'id-other', false), true);
});
