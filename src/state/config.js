// Game configuration data: default seats, the colour palette, game modes and rules, settings rows, streak gold.
// Pure data; names and keys are stored in saved setups and wallets, so do not rename them.

export const PL0 = [
  {name:'Вы',col:'#ef5350',human:true},
  {name:'Маша',col:'#4c8dff',human:false},
  {name:'Дима',col:'#f7c948',human:false},
  {name:'Лёша',col:'#3fc27a',human:false},
  {name:'Катя',col:'#b06cf0',human:false},
];

export const PALETTE = [
  {col: '#ef5350', name: 'Красный'}, {col: '#4c8dff', name: 'Синий'}, {col: '#f7c948', name: 'Жёлтый'}, {col: '#3fc27a', name: 'Зелёный'},
  {col: '#b06cf0', name: 'Фиолетовый'}, {col: '#ff8c42', name: 'Оранжевый'}, {col: '#ff6fae', name: 'Розовый'},
];

export const MODES = {
  fast: {label: 'Быстрая', desc: '30 карт · ~8 мин · 4 фишки', set: {deck: 30, meeples: 4}},
  classic: {label: 'Классика', desc: '50 карт · ~15 мин · 6 фишек', set: {deck: 50, meeples: 6}},
  epic: {label: 'Большая', desc: '100 карт · ~30 мин · 8 фишек', set: {deck: 100, meeples: 8}},
  duel: {label: 'Дуэль 1×1', desc: '30 карт · 20 с на ход · 2 игрока · 5 фишек', set: {deck: 30, meeples: 5, timer: 20}},
};

export const RULES = [
  {k: 'mode', label: 'Режим', opts: Object.entries(MODES).map(([k, m]) => [k, m.label])},
  {k: 'deck', label: 'Карт в стопке', opts: [[30, '30'], [50, '50'], [100, '100']]},
  {k: 'rivers', label: 'Реки', opts: [[true, 'Есть'], [false, 'Нет']]},
  {k: 'meeples', label: 'Фигурок у игрока', opts: [[4, '4'], [5, '5'], [6, '6'], [8, '8']]},
  {k: 'timer', label: 'Время на ход', opts: [[0, 'Без'], [20, '20 с'], [30, '30 с'], [60, '60 с']]},
  {k: 'hints', label: 'Подсветка мест', opts: [[true, 'Вкл'], [false, 'Выкл']]},
  {k: 'cups', label: 'Игра на кубки', opts: [[false, 'Нет'], [true, 'Да']], room: true},
];

export const PREFS = [
  {k: 'sound', ic: '🔊', label: 'Звуки', hint: 'Стук карт, фишки, фанфары', opts: [[true, 'Вкл'], [false, 'Выкл']]},
  {k: 'music', ic: '🎵', label: 'Музыка', hint: 'Спокойная музыка в меню и партии', opts: [[true, 'Вкл'], [false, 'Выкл']]},
  {k: 'view', ic: '🧊', label: 'Вид поля', hint: 'Объёмное поле или вид сверху', opts: [['3d', '3D'], ['top', 'Сверху']]},
  {k: 'botlvl', ic: '🤖', label: 'Сложность ботов', hint: 'Лёгкие ходят просто, обычные считают очки объектов, сложные играют острее и берегут фишки', opts: [['easy', 'Лёгкие'], ['normal', 'Обычные'], ['hard', 'Сложные']]},
  {k: 'speed', ic: '⚡', label: 'Скорость ботов', hint: 'Как быстро ходят соперники-боты', opts: [['normal', 'Обычная'], ['fast', 'Быстрая']]},
  {k: 'alert', ic: '⏰', label: 'Подсветка хода', hint: 'Экран мигает на вашем ходу и краснеет, если время на исходе, а вы бездействуете; в последние 5 секунд лёгкая вибрация', opts: [[true, 'Вкл'], [false, 'Выкл']]},
  {k: 'coach', ic: '💡', label: 'Подсказки', hint: '«Всегда» — на каждом ходу совет: куда положить карту, сколько очков даст объект и что осталось достроить. «По кнопке» — только по лампочке. Опытным можно выключить', opts: [['on', 'Всегда'], ['tip', 'По кнопке'], ['off', 'Выкл']]},
  {k: 'zones', ic: '🎨', label: 'Цвет владельца', hint: 'Закрашивать дороги и города цветом игрока', opts: [[true, 'Вкл'], [false, 'Выкл']]},
  {k: 'gfx', ic: '✨', label: 'Графика', hint: 'Экономная — для слабых телефонов', opts: [['high', 'Красивая'], ['low', 'Экономная']]},
  {k: 'notify', ic: '🔔', label: 'Уведомления', hint: 'Новые версии и новости игры', opts: [[true, 'Вкл'], [false, 'Выкл']], app: true},
];

export const PREF_GROUPS = [['Звук', ['sound', 'music']], ['Игра', ['coach', 'view', 'botlvl', 'speed', 'alert', 'zones']], ['Экран', ['gfx']], ['Уведомления', ['notify']]];

export const STREAK_GOLD = [10, 15, 20, 25, 35, 50, 100];

export const validCol = c => PALETTE.some(x => x.col === c);
