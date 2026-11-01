const test = require('node:test');
const assert = require('node:assert/strict');
const setup = require('../src/ui/setup.js');

test('ui/setup: renderModeCardsHtml renders cards with labels and icons', () => {
  const modes = {
    fast: {label: 'Быстрая', desc: '30 карт · 9 минут'},
    classic: {label: 'Классика', desc: '50 карт · 15 минут'}
  };
  const html = setup.renderModeCardsHtml(modes, 'fast', false);
  assert.ok(html.includes('modecards'));
  assert.ok(html.includes('data-setmode="fast"'));
  assert.ok(html.includes('aria-pressed="true"'));
  assert.ok(html.includes('data-setmode="classic"'));
  assert.ok(html.includes('aria-pressed="false"'));
  assert.ok(html.includes('⚡'));
  assert.ok(html.includes('⚖️'));

  const lockedHtml = setup.renderModeCardsHtml(modes, 'classic', true);
  assert.ok(lockedHtml.includes('disabled'));
});

test('ui/setup: renderRuleRowsHtml filters rules and marks active options', () => {
  const rules = [
    {k: 'mode', label: 'Режим', opts: []},
    {k: 'timer', label: 'Время на ход', opts: [[0, 'Без лимита'], [60, '60 с']]},
    {k: 'tie', label: 'Ничья', room: true, opts: [['all', 'Все'], ['split', 'Разделить']]}
  ];

  // Offline / non-room
  const offlineHtml = setup.renderRuleRowsHtml(rules, {timer: 0, tie: 'all'}, {isOnline: false, isRoom: false});
  assert.ok(offlineHtml.includes('data-k="timer"'));
  assert.ok(offlineHtml.includes('Без лимита'));
  assert.ok(!offlineHtml.includes('data-k="tie"')); // Room rule omitted when not room

  // Online / room
  const onlineHtml = setup.renderRuleRowsHtml(rules, {timer: 60, tie: 'all'}, {isOnline: true, isRoom: true});
  assert.ok(onlineHtml.includes('data-k="tie"'));
  assert.ok(!onlineHtml.includes('Без лимита')); // 'no limit' (0) omitted for online timer
});

test('ui/setup: profileName and hero meta', () => {
  const heroBots = setup.getSetupHeroMeta('bots');
  assert.equal(heroBots[1], '🤖');

  const heroFriends = setup.getSetupHeroMeta('friends');
  assert.equal(heroFriends[1], '👥');

  // formatProfileName
  assert.equal(setup.formatProfileName([], {name: 'Alice'}), 'Alice');
  assert.equal(setup.formatProfileName([], {guest: 'guest99'}), 'guest99');
  assert.equal(setup.formatProfileName([{name: 'Bob'}], {}), 'Bob');
  assert.equal(setup.formatProfileName([{name: 'Вы'}], {}), 'nickname');
  assert.equal(setup.formatProfileName([], {}), 'nickname');
});

test('ui/setup: adjustSeatsForMode switches between local players and bots', () => {
  const seats = [
    {name: 'Me', human: true},
    {name: 'Бот 2', human: false},
    {name: 'Бот 3', human: false}
  ];
  const defaultBots = [{name: 'Me'}, {name: 'Бот 2'}, {name: 'Бот 3'}];

  setup.adjustSeatsForMode(seats, 'local', defaultBots);
  assert.equal(seats[1].human, true);
  assert.equal(seats[1].name, 'Игрок 2');
  assert.equal(seats[2].name, 'Игрок 3');

  setup.adjustSeatsForMode(seats, 'bots', defaultBots);
  assert.equal(seats[1].human, false);
  assert.equal(seats[1].name, 'Бот 2');
  assert.equal(seats[2].name, 'Бот 3');
});

test('ui/setup: renderSwatchesHtml, renderSetupMeHtml and renderSetupSeatsHtml', () => {
  const palette = [{col: '#f00', name: 'Красный'}, {col: '#00f', name: 'Синий'}];
  const sw = setup.renderSwatchesHtml('#f00', ['#00f'], palette);
  assert.ok(sw.includes('swatches'));
  assert.ok(sw.includes('--c:#f00'));
  assert.ok(sw.includes('disabled')); // #00f is taken

  const me = setup.renderSetupMeHtml('Alice', '#f00', palette);
  assert.ok(me.infoHtml.includes('Alice'));
  assert.ok(me.swHtml.includes('swatches'));

  const seats = [
    {name: 'Alice', col: '#f00', human: true},
    {name: 'Бот 2', col: '#00f', human: false}
  ];
  const seatsHtml = setup.renderSetupSeatsHtml(seats, 2, {profileName: 'Alice', colorEdit: 0, palette});
  assert.ok(seatsHtml.includes('Alice'));
  assert.ok(seatsHtml.includes('🤖 бот'));
  assert.ok(seatsHtml.includes('swatches')); // colorEdit === 0
});
