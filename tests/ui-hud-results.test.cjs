// Tests for src/ui/hud.js and src/ui/results.js (E-1.9 decomposition)
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');

const hud = require('../src/ui/hud.js');
const results = require('../src/ui/results.js');

test('ui/hud: cityD generates SVG path data for corners and edges', () => {
  // 4 city edges -> full tile
  const full = hud.cityD(['c', 'c', 'c', 'c'], 100);
  assert.equal(full.fill, 'M0 0H100V100H0Z');

  // 1 city edge -> arc
  const one = hud.cityD(['c', 'f', 'f', 'f'], 100);
  assert.ok(one.fill.includes('M'));
  assert.ok(one.fill.includes('Q'));
  assert.ok(one.wall.includes('M'));
});

test('ui/hud: ownSvg generates data-URI for claimed features', () => {
  const t = {type: 'rS', r: 0};
  const list = [
    {kind: 'r', edges: [0, 2], cols: ['#ef5350']}
  ];
  const uri = hud.ownSvg(t, list);
  assert.ok(uri.startsWith('data:image/svg+xml,'));
  const svg = decodeURIComponent(uri);
  assert.ok(svg.includes('stroke="#ef5350"'), 'includes color stroke in SVG');
});

test('ui/hud: renderPlayersListHtml renders player elements with turn badges and scores', () => {
  const players = [
    {name: 'Вы', col: '#ef5350', init: 'В', score: 12, meeples: 4, human: true, uid: 'me'},
    {name: 'Бот Сова', col: '#4c8dff', init: 'Б', score: 8, meeples: 3, human: false, uid: null}
  ];

  const html = hud.renderPlayersListHtml(players, {
    turn: 0,
    phase: 'place',
    bump: [],
    isMe: (p) => p.name === 'Вы',
    myRing: () => null,
    meeplesTotal: 5,
    turnTag: (i) => i === 0 ? 'ваш ход' : 'ходит',
    clockHtml: () => ''
  });

  assert.ok(html.includes('class="pl active"'), 'active turn player highlighted');
  assert.ok(html.includes('ваш ход'), 'turn tag displayed');
  assert.ok(html.includes('Бот Сова'), 'bot player displayed');
  assert.ok(html.includes('botpill'), 'bot pill badge rendered');
});

test('ui/results: winTitle produces appropriate win title', () => {
  assert.equal(results.winTitle({name: 'Вы'}, true, true), 'Победа!');
  assert.equal(results.winTitle({name: 'Бот Сова'}, true, false), 'Победил Бот Сова');
  assert.equal(results.winTitle({name: 'Вы'}, false, false), 'Лидирует Вы');
});

test('ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores', () => {
  const players = [
    {i: 0, name: 'Вы', col: '#ef5350', score: 24, human: true, stats: {c: 12, r: 8, f: 4, t: 15, m: 3}},
    {i: 1, name: 'Бот Сова', col: '#4c8dff', score: 18, human: false, stats: {c: 10, r: 4, f: 4, t: 14, m: 2}}
  ];

  const podEntries = [
    [players[0], 1, 100],
    [players[1], 2, 70]
  ];

  const podiumHtml = results.renderPodiumHtml(podEntries, (i) => `<img>`);
  assert.ok(podiumHtml.includes('pc first'), 'winner has pc first class');
  assert.ok(podiumHtml.includes('24'), 'winner points displayed');

  const bdHtml = results.renderBreakdownTableHtml(players);
  assert.ok(bdHtml.includes('<td>12</td>'), 'city stats rendered');
  assert.ok(bdHtml.includes('<td>24</td>'), 'total score rendered');
});
