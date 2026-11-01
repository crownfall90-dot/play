// Unit tests for extracted UI modules: src/ui/shop.js and src/ui/progress.js (E-1.4)
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');

test('ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid', async () => {
  const {renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid} = await import('../src/ui/shop.js');

  // Gift card markup
  const readyCard = renderGiftCard({giftReady: true, chestSvg: '<svg>chest</svg>', boosts: {double: 2}});
  assert.ok(readyCard.includes('class="chest ready"'));
  assert.ok(readyCard.includes('Двойное золото ×2'));
  assert.ok(readyCard.includes('<button class="cta" id="openGift">Открыть</button>'));

  const waitingCard = renderGiftCard({giftReady: false, chestSvg: '<svg>chest</svg>', boosts: {}});
  assert.ok(!waitingCard.includes('ready'));
  assert.ok(!waitingCard.includes('id="openGift"'));

  // Figures grid markup
  const figs = {
    classic: {name: 'Классик', price: 0},
    knight: {name: 'Рыцарь', price: 150}
  };
  const wallet = {owned: ['classic'], fig: 'classic', gold: 50, frames: []};
  const figPreview = k => `img/${k}.png`;

  const figsHtml = renderFiguresGrid({figs, wallet, figPreview});
  assert.ok(figsHtml.includes('data-fig="classic"'));
  assert.ok(figsHtml.includes('Выбрана'));
  assert.ok(figsHtml.includes('data-fig="knight"'));
  assert.ok(figsHtml.includes('poor')); // gold 50 < 150
  assert.ok(figsHtml.includes('150'));

  // Frames grid markup
  const frames = {
    none: {name: 'Без рамки', price: 0, ring: ''},
    royal: {name: 'Королевская', price: 200, ring: 'gold'}
  };
  const framesHtml = renderFramesGrid({frames, wallet, initial: 'А'});
  assert.ok(framesHtml.includes('data-fr="none"'));
  assert.ok(framesHtml.includes('data-fr="royal"'));
  assert.ok(framesHtml.includes('А'));

  // Locations grid markup
  const locs = [
    {name: 'Замок', open: true, desc: 'Красивый замок', art: '<g></g>'},
    {name: 'Таверна', open: false, desc: 'Уютное место', art: '<g></g>'}
  ];
  const locsHtml = renderLocationsGrid(locs);
  assert.ok(locsHtml.includes('Замок'));
  assert.ok(locsHtml.includes('Открыта'));
  assert.ok(locsHtml.includes('Таверна'));
  assert.ok(locsHtml.includes('Скоро'));
});

test('ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard', async () => {
  const {ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard} = await import('../src/ui/progress.js');

  // Ring SVG
  const ring = ringSvg(0.5);
  assert.ok(ring.includes('<svg width="58" height="58"'));
  assert.ok(ring.includes('stroke-dasharray'));

  // Mastery grid
  const byMode = {
    bots: {games: 10, wins: 8, best: 70},
    duel: {games: 5, wins: 4, best: 55},
    friends: {games: 2, wins: 1, best: 40},
    online: {games: 0, wins: 0, best: 0}
  };
  const masteryHtml = renderMasteryGrid(byMode);
  assert.ok(masteryHtml.includes('Боты'));
  assert.ok(masteryHtml.includes('80% (8/10) · рек. 70'));
  assert.ok(masteryHtml.includes('Дуэль'));
  assert.ok(masteryHtml.includes('80% (4/5) · рек. 55'));
  assert.ok(masteryHtml.includes('Друзья'));
  assert.ok(masteryHtml.includes('Онлайн'));

  // Building stats
  const buildHtml = renderBuildingStats({c: 12, r: 25, f: 4, maxCity: 14});
  assert.ok(buildHtml.includes('12</b> городов'));
  assert.ok(buildHtml.includes('рекорд: 14 карт'));
  assert.ok(buildHtml.includes('25</b> дорог'));
  assert.ok(buildHtml.includes('4</b> крепостей'));

  // Collection card
  const col = {
    id: 'court',
    name: 'Королевский двор',
    desc: 'Набор знати',
    reward: 200,
    ic: '👑',
    figs: ['knight'],
    frames: ['royal']
  };
  const prog = {
    isComplete: true,
    isClaimed: false,
    done: 2,
    total: 2,
    figsDone: new Set(['knight']),
    framesDone: new Set(['royal'])
  };
  const figs = {knight: {name: 'Рыцарь'}};
  const frames = {royal: {name: 'Королевская', ring: 'gold'}};
  const cardHtml = renderCollectionCard(col, prog, figs, frames, {color: '#ef5350'}, k => k, 'П');

  assert.ok(cardHtml.includes('Королевский двор'));
  assert.ok(cardHtml.includes('+200'));
  assert.ok(cardHtml.includes('data-claimcol="court"'));
  assert.ok(cardHtml.includes('Забрать +200'));
});
