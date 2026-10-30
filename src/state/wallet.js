// The player's wallet on this device (localStorage 'wallet'): gold, figures, boosts, settings, profile.
// The keys and the default values must stay as they are: players' saved wallets are read with them.

const DEFAULTS = () => ({gold: 100, owned: ['classic'], fig: 'classic', daily: '', dailyBox: '', paid: [], sound: true, color: '#ef5350'});

/** Checksum of what a hand edit would change (gold, figures, friend code). Not a real protection: it is computed
 *  in public code; it only catches a stray edit of localStorage. */
export function walletSig(w) {
  if (!w) return '';
  const str = 'pg_sec_' + (w.gold || 0) + '_' + (w.owned ? w.owned.slice().sort().join(',') : '') + '_' + (w.fcode || '') + '_salt90';
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return (h >>> 0).toString(16);
}

/**
 * Reads the wallet. A checksum that does not match resets the gold to 100.
 * colorOk(c) tells a colour of the current palette; others become fallbackColor.
 */
export function loadWallet(storage, colorOk, fallbackColor) {
  let w = null, sig = null;
  try { w = JSON.parse(storage.getItem('wallet')); sig = storage.getItem('wallet_sig'); } catch (_) {}
  if (w && sig && sig !== walletSig(w)) { w.gold = 100; }
  const v = Object.assign(DEFAULTS(), w);
  v.boosts = Object.assign({double: 0, meeple: 0}, v.boosts);
  if (!colorOk(v.color)) v.color = fallbackColor; // a colour taken out of the palette (turquoise)
  return v;
}

/** Writes the wallet with its checksum. */
export function storeWallet(storage, w) {
  try {
    storage.setItem('wallet', JSON.stringify(w));
    storage.setItem('wallet_sig', walletSig(w));
  } catch (_) {}
}
