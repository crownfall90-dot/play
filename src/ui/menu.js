// src/ui/menu.js
// In-game pause menu, surrender/draw options, and menu card rendering.

export function formatGameMenuHtml({online, live, seat, allBots}) {
  const title = online ? 'Онлайн-партия' : live ? 'Пауза' : 'Меню';
  const subtitle = online ? 'Партия идёт, пока вы в меню' : live ? 'Боты ждут, время хода остановлено' : '';
  const canDrawOrResign = Boolean(online && live && seat >= 0 && !allBots);
  const canCancel = Boolean((!online && live) || allBots);

  const drawResignHtml = canDrawOrResign
    ? '<div class="row2b"><button class="ghostbtn" data-a="draw">Предложить ничью</button><button class="ghostbtn danger" data-a="resign">Сдаться</button></div>'
    : '';

  const cancelHtml = canCancel
    ? '<button class="ghostbtn danger" data-a="cancel">Отменить партию</button>'
    : '';

  return `<div class="ocard"><h3>${title}</h3>` +
    (subtitle ? `<p>${subtitle}</p>` : '<p></p>') +
    '<button class="cta wide" data-a="resume">Продолжить</button>' +
    '<button class="ghostbtn" data-a="settings">Настройки</button>' +
    drawResignHtml +
    cancelHtml +
    '<button class="ghostbtn" data-a="menu">Выйти в главное меню</button></div>';
}

export function areAllOpponentsAway(activeHumanIndices, awayCheckFn, myIndex) {
  if (!Array.isArray(activeHumanIndices)) return false;
  return activeHumanIndices.every(i => i === myIndex || (typeof awayCheckFn === 'function' && awayCheckFn(i)));
}
