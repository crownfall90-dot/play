// Progress and profile UI helpers (E-1.4)
// Renders level circles, mastery grids, quests, and collection cards.

/** Generates circular SVG progress ring. */
export function ringSvg(frac) {
  const c = 2 * Math.PI * 26;
  return `<svg width="58" height="58" viewBox="0 0 58 58">` +
    `<circle cx="29" cy="29" r="26" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="5"/>` +
    `<circle cx="29" cy="29" r="26" fill="none" stroke="#f2b84b" stroke-width="5" stroke-linecap="round" stroke-dasharray="${(c * frac).toFixed(2)} ${c.toFixed(2)}"/>` +
    `</svg>`;
}

/** Generates HTML markup for the game modes mastery statistics grid. */
export function renderMasteryGrid(byMode = {}) {
  const tile = (key, ic, name) => {
    const m = byMode[key] || {}, g = m.games || 0, w = m.wins || 0, rate = g ? Math.round(100 * w / g) : 0;
    const body = g ? `<small>${rate}% (${w}/${g}) · рек. ${m.best || 0}</small>` : '<small class="mnone">Сыграйте первую партию</small>';
    return `<div class="mcard${g ? '' : ' empty'}"><span class="mic">${ic}</span><div><b>${name}</b>${body}</div></div>`;
  };
  return `<div class="mgrid">${tile('bots', '🤖', 'Боты')}${tile('duel', '⚔️', 'Дуэль')}${tile('friends', '👥', 'Друзья')}${tile('online', '🌐', 'Онлайн')}</div>`;
}

/** Generates HTML markup for completed features summary (cities, roads, forts). */
export function renderBuildingStats(st = {}) {
  const maxCityText = st.maxCity ? ` <small>(рекорд: ${st.maxCity} карт)</small>` : '';
  return `<div class="sbuild">` +
    `<span>🏰 <b>${st.c || 0}</b> городов${maxCityText}</span>` +
    `<span>🛤 <b>${st.r || 0}</b> дорог</span>` +
    `<span>🏯 <b>${st.f || 0}</b> крепостей</span>` +
    `</div>`;
}

/** Generates HTML markup for a single collection card. */
export function renderCollectionCard(col, prog, figs, frames, wallet, figPreview, initial) {
  const nameInitial = (initial || '?').toUpperCase();
  const figItems = (col.figs || []).map(k => {
    const f = figs[k] || {name: k};
    const has = prog.figsDone && prog.figsDone.has(k);
    return `<span class="col-item${has ? ' has' : ''}"><img src="${figPreview(k)}" alt=""><span>${f.name}</span><i class="cchk">${has ? '✓' : '—'}</i></span>`;
  }).join('');

  const frameItems = (col.frames || []).map(k => {
    const f = frames[k] || {name: k};
    const has = prog.framesDone && prog.framesDone.has(k);
    return `<span class="col-item${has ? ' has' : ''}"><span class="av mini${f.ring ? ' fr' : ''}" style="--c:${wallet.color || '#ef5350'};${f.ring ? `--fr:${f.ring}` : ''}">${nameInitial}</span><span>${f.name}</span><i class="cchk">${has ? '✓' : '—'}</i></span>`;
  }).join('');

  const pct = Math.min(100, Math.round(100 * prog.done / prog.total));
  const actionBtn = prog.isClaimed
    ? '<span class="pill">Собрано</span>'
    : prog.isComplete
      ? `<button class="chip pri" data-claimcol="${col.id}">Забрать +${col.reward}</button>`
      : '<span class="pill lock">В процессе</span>';

  return `<div class="col-card${prog.isClaimed ? ' got' : prog.isComplete ? ' done' : ''}">` +
    `<div class="col-head"><span class="col-ic">${col.ic}</span><div class="col-info"><b>${col.name}</b><small>${col.desc}</small></div><span class="col-rew"><i class="coin"></i> +${col.reward}</span></div>` +
    `<div class="col-grid">${figItems}${frameItems}</div>` +
    `<div class="col-foot"><div class="xpbar"><i style="width:${pct}%"></i></div><small>${prog.done} / ${prog.total}</small>${actionBtn}</div>` +
    `</div>`;
}
