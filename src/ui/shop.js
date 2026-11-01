// Shop UI and interactions (E-1.4)
// Renders the shop screens: daily gifts, figures, avatar frames, and game locations.

/** Generates HTML markup for the daily gift chest card. */
export function renderGiftCard({giftReady, chestSvg, boosts = {}}) {
  const inv = [
    boosts.double ? `Двойное золото ×${boosts.double}` : '',
    boosts.meeple ? `+1 фигурка ×${boosts.meeple}` : '',
  ].filter(Boolean).join(' · ');

  return `<div class="chest${giftReady ? ' ready' : ''}">${chestSvg}</div>` +
    `<div class="gi"><b>Ежедневный подарок</b><small>${giftReady ? 'Золото, бонус на партию или фигурка' : 'Следующий подарок — завтра'}` +
    `${inv ? '<br>У вас: ' + inv : ''}</small></div>` +
    `${giftReady ? '<button class="cta" id="openGift">Открыть</button>' : ''}`;
}

/** Generates HTML markup for figure buttons grid. */
export function renderFiguresGrid({figs, wallet, figPreview}) {
  return Object.entries(figs).map(([k, f]) => {
    const own = (wallet.owned || []).includes(k);
    const sel = wallet.fig === k;
    const tag = sel ? 'Выбрана' : own ? 'Выбрать' : `<i class="coin"></i>${f.price}`;
    return `<button class="fig${sel ? ' sel' : ''}${!own && (wallet.gold || 0) < f.price ? ' poor' : ''}" data-fig="${k}">` +
      `<img src="${figPreview(k)}" alt=""><span>${f.name}</span><small>${tag}</small></button>`;
  }).join('');
}

/** Generates HTML markup for avatar frames grid. */
export function renderFramesGrid({frames, wallet, initial}) {
  const fname = (initial || '?').toUpperCase();
  return Object.entries(frames).map(([k, f]) => {
    const own = !f.price || (wallet.frames || []).includes(k);
    const sel = (wallet.frame || 'none') === k;
    return `<button class="frb${sel ? ' sel' : ''}${!own && (wallet.gold || 0) < f.price ? ' poor' : ''}" data-fr="${k}">` +
      `<span class="av${f.ring ? ' fr' : ''}" style="--c:${wallet.color};${f.ring ? `--fr:${f.ring}` : ''}">${fname}</span>` +
      `<span>${f.name}</span><small>${sel ? 'Выбрана' : own ? 'Выбрать' : `<i class="coin"></i>${f.price}`}</small></button>`;
  }).join('');
}

/** Generates HTML markup for game locations grid. */
export function renderLocationsGrid(locs) {
  return locs.map(l => `<div class="loc${l.open ? '' : ' locked'}">` +
    `<svg viewBox="0 0 160 90" aria-hidden="true">${l.art}</svg>` +
    `<span class="badge">${l.open ? 'Открыта' : '<svg width="10" height="11" viewBox="0 0 10 11"><rect x="1" y="5" width="8" height="6" rx="1" fill="currentColor"/><path d="M3 5V3.5a2 2 0 014 0V5" stroke="currentColor" fill="none" stroke-width="1.4"/></svg>Скоро'}</span>` +
    `<div class="li"><b>${l.name}</b><small>${l.open ? l.desc : l.desc + '. Появится в одном из следующих обновлений'}</small></div></div>`
  ).join('');
}
