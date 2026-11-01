// Account authentication & profile helpers (E-1.3)

export const RENAME_PRICE = 50;

/** Sanitize nickname and constrain length to 12 characters. */
export function sanitizeNickname(v) {
  return String(v || '').replace(/[<>&"'`]/g, '').trim().slice(0, 12);
}

/** Check whether a nickname is valid (at least 2 chars, not placeholder). */
export function isValidNickname(name) {
  const n = sanitizeNickname(name);
  return n.length >= 2 && n.toLowerCase() !== 'игрок' && n.toLowerCase() !== 'player';
}

/** Derive display profile name from wallet and guest state. */
export function getDisplayName(wallet = {}, guestDefault = 'Игрок') {
  return sanitizeNickname(wallet.name) || sanitizeNickname(wallet.guest) || guestDefault;
}
