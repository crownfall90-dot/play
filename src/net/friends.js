// Friends and invitations helpers (E-1.5)

export const INVITE_TTL = 120000; // 2 minutes

/** Validates and formats 6-character friend code. */
export function cleanFriendCode(code) {
  return String(code || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
}

/** Formats room invite payload sent to friend's inbox. */
export function formatInvitePayload(myUid, myName, roomCode, timestamp = Date.now()) {
  return {
    k: 'r',
    u: myUid,
    n: String(myName || 'Игрок').slice(0, 12),
    code: String(roomCode || '').slice(0, 8),
    t: timestamp,
  };
}

/** Formats friend request payload. */
export function formatFriendRequestPayload(myUid, myName, friendCode = null, timestamp = Date.now()) {
  const req = {
    k: 'f',
    u: myUid,
    n: String(myName || 'Игрок').slice(0, 12),
    t: timestamp,
  };
  if (friendCode) req.v = cleanFriendCode(friendCode);
  return req;
}

/** Generates HTML markup for a single friend row in friends list. */
export function renderFriendRow(f, actionBtn = '', subText = '') {
  const col = f.c || (f.on ? '#3fc27a' : '#5b6684');
  const initial = (f.n || '?')[0].toUpperCase();
  return `<li class="lead frow${f.on ? ' on' : ''}">` +
    `<span class="av" style="--c:${col}">${initial}</span>` +
    `<span class="fwho"><b>${f.n}</b><small>${subText}</small></span>` +
    `${actionBtn}</li>`;
}
