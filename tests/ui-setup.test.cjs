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
