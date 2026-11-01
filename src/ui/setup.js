// src/ui/setup.js
// Setup screen helpers: mode cards, custom rule rows, and seats list HTML.

export const SETUP_ICONS = {
  fast: '⚡',
  classic: '⚖️',
  epic: '🏰',
  duel: '⚔️'
};

export function renderModeCardsHtml(modes, selectedMode, locked = false) {
  if (!modes) return '';
  return `<div class="modecards">${Object.entries(modes).map(([k, m]) => {
    const isPressed = selectedMode === k;
    const icon = SETUP_ICONS[k] || '🎮';
    const desc = m.desc ? m.desc.split(' · ').slice(0, 2).join(' · ') : '';
    const disabledAttr = locked ? ' disabled' : '';
    return `<button class="mcard" data-setmode="${k}" aria-pressed="${isPressed}"${disabledAttr}><i>${icon}</i><b>${m.label}</b><small>${desc}</small></button>`;
  }).join('')}</div>`;
}

export function renderRuleRowsHtml(rules, currentRules = {}, {isOnline = false, isRoom = false} = {}) {
  if (!Array.isArray(rules)) return '';
  return rules
    .filter(r => r.k !== 'mode' && (!r.room || isRoom))
    .map(r => {
      const optsHtml = r.opts.map(([v, l], i) => {
        if (isOnline && r.k === 'timer' && !v) return '';
        const isPressed = currentRules[r.k] === v || (isOnline && r.k === 'timer' && v === 60 && !currentRules.timer);
        return `<button data-i="${i}" aria-pressed="${isPressed}">${l}</button>`;
      }).join('');
      return `<div class="opt"><span>${r.label}</span><span class="mseg" data-k="${r.k}">${optsHtml}</span></div>`;
    }).join('');
}
