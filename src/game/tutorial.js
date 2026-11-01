// src/game/tutorial.js
// Scripted tutorial steps, deck, bot moves, and coach card renderer.

export const TUT_STEPS = [
  {ic: '👆', t: 'Тапните по рамке', p: 'Сюда ляжет ваша карта', wait: 'select', only: [0, -1]},
  {ic: '✅', t: 'Нажмите «Поставить»', p: 'Город сошёлся с городом', wait: 'placed', hl: '#ok'},
  {ic: '🧍', t: 'Поставьте фишку на город', p: 'Фишка делает город вашим', wait: 'meepleDone', hl: '#mrow .chip:not(.skip)'},
  {ic: '🏰', t: 'Город достроен: +4 очка!', p: 'Фишка вернулась к вам. Теперь ходит бот', wait: 'bot'},
  {ic: '✋', t: 'Проведите пальцем по полю', p: 'Так поле двигается', wait: 'pan', hand: true},
  {ic: '🔍', t: 'Нажмите «+»', p: 'Или разведите два пальца — поле приблизится', wait: 'zoom', hl: '#zin'},
  {ic: '👆', t: 'Тапните по рамке', p: 'Продолжим дорогу бота', wait: 'select', only: [1, 1]},
  {ic: '🔄', t: 'Поверните карту', p: 'Кнопка ↻ меняет поворот', wait: 'rotate', hl: '#rot'},
  {ic: '✅', t: 'Нажмите «Поставить»', p: 'Дорога повернула вправо', wait: 'placed', hl: '#ok', r: 2},
  {ic: '🧍', t: 'Поставьте фишку на дорогу', p: 'Достроите дорогу — получите очки', wait: 'meepleDone', hl: '#mrow .chip:not(.skip)'},
  {ic: '🤝', t: 'Бот закроет один конец', p: 'Чужой ход тоже может вам помочь', wait: 'bot'},
  {ic: '👆', t: 'Закройте второй конец', p: 'Тапните по рамке справа', wait: 'select', only: [2, 1]},
  {ic: '✅', t: 'Нажмите «Поставить»', p: 'Дорога будет закончена', wait: 'placed', hl: '#ok'},
  {ic: '🛤️', t: 'Дорога достроена!', p: 'Стопка кончилась — считаем очки', wait: 'end'},
  {ic: '🏆', t: 'Вы победили! +30 золота', p: 'У кого больше очков, тот и выиграл', btn: 'Играть', done: true},
];

export const TUT_DECK = ['rEnd', 'rRock', 'rC', 'rS', 'cap', 'cap'];

export const TUT_BOT = [
  {x: 1, y: 0, r: 0},
  {x: 1, y: -1, r: 2}
];

export function createTutorialState() {
  return {
    i: 0,
    bot: TUT_BOT.slice()
  };
}

export function getTutorialStep(tutState, steps = TUT_STEPS) {
  if (!tutState || typeof tutState.i !== 'number') return null;
  return steps[tutState.i] || null;
}

export function isTutorialAllowed(tutState, x, y, steps = TUT_STEPS) {
  const step = getTutorialStep(tutState, steps);
  if (!step || !step.only) return true;
  return step.only[0] === x && step.only[1] === y;
}

export function shouldAdvanceStep(currentStep, eventName) {
  if (!currentStep) return false;
  return currentStep.wait === eventName;
}

export function renderCoachCardHtml(step, stepIndex, totalSteps = TUT_STEPS.length) {
  if (!step) return '';
  const progressPercent = totalSteps > 1 ? (100 * stepIndex / (totalSteps - 1)).toFixed(0) : '0';
  return `<span class="cic">${step.ic}</span><span class="ctx"><b>${step.t}</b><small>${step.p}</small></span>${step.btn ? `<button class="cta" id="tutNext">${step.btn}</button>` : ''}${step.hand ? '<i class="swipe"></i>' : ''}<span class="cbar"><i style="width:${progressPercent}%"></i></span>`;
}
