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
  fast: {label: 'Быстрая', desc: '40 карт · 5 фишек · 10–15 минут', set: {deck: 40, meeples: 5}},
  classic: {label: 'Классика', desc: 'Вся колода · 7 фишек · золотая середина', set: {deck: 0, meeples: 7}},
  epic: {label: 'Большая', desc: 'Двойная колода · 9 фишек · огромное королевство', set: {deck: 0, meeples: 9}},
};

export const RULES = [
  {k: 'mode', label: 'Режим', opts: Object.entries(MODES).map(([k, m]) => [k, m.label])},
  {k: 'deck', label: 'Карт в стопке', opts: [[40, '40'], [60, '60'], [0, 'Все']]},
  {k: 'rivers', label: 'Реки', opts: [[true, 'Есть'], [false, 'Нет']]},
  {k: 'meeples', label: 'Фигурок у игрока', opts: [[5, '5'], [7, '7'], [9, '9']]},
  {k: 'timer', label: 'Время на ход', opts: [[0, 'Без'], [30, '30 с'], [60, '60 с']]},
  {k: 'hints', label: 'Подсветка мест', opts: [[true, 'Вкл'], [false, 'Выкл']]},
  {k: 'tie', label: 'Спорный объект: очки', opts: [['all', 'Каждому'], ['split', 'Поровну']]},
];

export const PREFS = [
  {k: 'sound', ic: '🔊', label: 'Звуки', hint: 'Стук карт, фишки, фанфары', opts: [[true, 'Вкл'], [false, 'Выкл']]},
  {k: 'music', ic: '🎵', label: 'Музыка', hint: 'Спокойная музыка в меню и партии', opts: [[true, 'Вкл'], [false, 'Выкл']]},
  {k: 'view', ic: '🧊', label: 'Вид поля', hint: 'Объёмное поле или вид сверху', opts: [['3d', '3D'], ['top', 'Сверху']]},
  {k: 'speed', ic: '⚡', label: 'Скорость ботов', hint: 'Как быстро ходят соперники-боты', opts: [['normal', 'Обычная'], ['fast', 'Быстрая']]},
  {k: 'alert', ic: '💡', label: 'Подсветка хода', hint: 'Экран мигает на вашем ходу и краснеет, если время на исходе, а вы бездействуете; в последние 5 секунд лёгкая вибрация', opts: [[true, 'Вкл'], [false, 'Выкл']]},
  {k: 'zones', ic: '🎨', label: 'Цвет владельца', hint: 'Закрашивать дороги и города цветом игрока', opts: [[true, 'Вкл'], [false, 'Выкл']]},
  {k: 'gfx', ic: '✨', label: 'Графика', hint: 'Экономная — для слабых телефонов', opts: [['high', 'Красивая'], ['low', 'Экономная']]},
  {k: 'notify', ic: '🔔', label: 'Уведомления', hint: 'Новые версии и новости игры', opts: [[true, 'Вкл'], [false, 'Выкл']], app: true},
];

export const PREF_GROUPS = [['Звук', ['sound', 'music']], ['Игра', ['view', 'speed', 'alert', 'zones']], ['Экран', ['gfx']], ['Уведомления', ['notify']]];

export const STREAK_GOLD = [10, 15, 20, 25, 35, 50, 100];

export const validCol = c => PALETTE.some(x => x.col === c);
