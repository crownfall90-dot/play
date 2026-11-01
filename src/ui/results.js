// src/ui/results.js
// Post-game and in-game results screen: winner title, podium, breakdown table, and summary line

/**
 * Returns title for results header
 */
export function winTitle(winner, final, isMeWinner = false) {
  if (!winner) return '';
  if (!final) return 'Лидирует ' + winner.name;
  return isMeWinner ? 'Победа!' : 'Победил ' + winner.name;
}

/**
 * Generates podium HTML for #podium
 */
export function renderPodiumHtml(podiumEntries, meepleImgFn) {
  return podiumEntries.map(([p, place, h]) => {
    const isFirst = place === 1 ? ' first' : '';
    const img = meepleImgFn ? meepleImgFn(p.i) : '';
    const botPill = !p.human ? ' <span class="botpill">бот</span>' : '';
    return `<div class="pc${isFirst}">${img}<b>${p.name}${botPill}</b><span class="pts">${p.score}</span><div class="blk" style="height:${h}px">${place}</div></div>`;
  }).join('');
}

/**
 * Generates breakdown table HTML for #bd
 */
export function renderBreakdownTableHtml(rankedPlayers) {
  return rankedPlayers.map(p => {
    const botPill = !p.human ? ' <span class="botpill">бот</span>' : '';
    const stats = p.stats || {c: 0, r: 0, f: 0, t: 0};
    return `<tr style="--c:${p.col}"><td><span class="dot"></span>${p.name}${botPill}</td><td>${stats.c}</td><td>${stats.r}</td><td>${stats.f}</td><td>${stats.t || 0}</td><td>${p.score}</td></tr>`;
  }).join('');
}

/**
 * Generates summary stats line HTML for #sumline
 */
export function renderSummaryLineHtml({tilesCount, movesCount, figsCount, deckCount}) {
  return `<span><b>${tilesCount}</b>карт на поле</span><span><b>${movesCount}</b>ходов</span><span><b>${figsCount}</b>фишек выставлено</span><span><b>${deckCount}</b>карт в стопке</span>`;
}
