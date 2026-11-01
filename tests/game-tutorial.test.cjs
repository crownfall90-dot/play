// tests/game-tutorial.test.cjs
const test = require('node:test');
const assert = require('node:assert/strict');

test('game/tutorial: state creation and step progression', async () => {
  const tutorial = await import('../src/game/tutorial.js');

  const state = tutorial.createTutorialState();
  assert.equal(state.i, 0);
  assert.equal(state.bot.length, 2);

  const step0 = tutorial.getTutorialStep(state);
  assert.ok(step0);
  assert.equal(step0.wait, 'select');
  assert.deepEqual(step0.only, [0, -1]);

  // isTutorialAllowed
  assert.equal(tutorial.isTutorialAllowed(state, 0, -1), true);
  assert.equal(tutorial.isTutorialAllowed(state, 1, 0), false);
  assert.equal(tutorial.isTutorialAllowed(null, 1, 0), true);

  // shouldAdvanceStep
  assert.equal(tutorial.shouldAdvanceStep(step0, 'select'), true);
  assert.equal(tutorial.shouldAdvanceStep(step0, 'wrong_event'), false);
  assert.equal(tutorial.shouldAdvanceStep(null, 'select'), false);

  // Deck and Bot move sequences
  assert.equal(tutorial.TUT_DECK.length, 6);
  assert.equal(tutorial.TUT_BOT.length, 2);
  assert.deepEqual(tutorial.TUT_BOT[0], {x: 1, y: 0, r: 0});
  assert.deepEqual(tutorial.TUT_BOT[1], {x: 1, y: -1, r: 2});
});

test('game/tutorial: renderCoachCardHtml formatting', async () => {
  const tutorial = await import('../src/game/tutorial.js');

  const step = {
    ic: '👆',
    t: 'Тапните по рамке',
    p: 'Сюда ляжет ваша карта',
    wait: 'select',
    btn: 'Далее'
  };

  const html = tutorial.renderCoachCardHtml(step, 0, 15);
  assert.ok(html.includes('Тапните по рамке'));
  assert.ok(html.includes('Сюда ляжет ваша карта'));
  assert.ok(html.includes('id="tutNext"'));
  assert.ok(html.includes('width:0%'));

  const empty = tutorial.renderCoachCardHtml(null, 0, 15);
  assert.equal(empty, '');
});
