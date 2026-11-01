// Firebase over REST (TASK-008-5): the player's session (anonymous or signed in) and the Realtime Database paths.
// Same requests, same localStorage key ('fbAuth') and the same session shape as before the move out of game.html,
// so players stay signed in after the update. fetch and storage are passed in, so tests run without a network.

/**
 * @param {{apiKey: string, dbUrl: string, storage: Storage, fetch: typeof fetch, onChange?: (a: object|null) => void}} o
 */
export function createFirebase({apiKey, dbUrl, storage, fetch, onChange}) {
  let auth = null;
  const set = a => { auth = a; if (onChange) onChange(auth); };
  const save = () => { try { storage.setItem('fbAuth', JSON.stringify(auth)); } catch (_) {} };
  /** The saved session, read from storage the first time it is needed. */
  function load() {
    if (!auth) try { const a = JSON.parse(storage.getItem('fbAuth')); if (a) set(a); } catch (_) {}
    return auth;
  }
  /** Keep a session from an Identity Toolkit answer (sign-in, sign-up, Google). */
  function keep(j, email) {
    set({idToken: j.idToken, refreshToken: j.refreshToken, uid: j.localId, exp: Date.now() + (+j.expiresIn || 3600) * 1000, email});
    save();
  }
  /** A valid ID token: the saved one, a refreshed one, or (for a guest) a new anonymous account. */
  async function token() {
    if (auth && auth.exp > Date.now() + 60000) return auth.idToken;
    if (load() && auth.exp > Date.now() + 60000) return auth.idToken; // saved and still valid after a restart
    let j = null;
    if (auth && auth.refreshToken) {
      const r = await fetch('https://securetoken.googleapis.com/v1/token?key=' + apiKey, {method: 'POST', headers: {'Content-Type': 'application/x-www-form-urlencoded'}, body: 'grant_type=refresh_token&refresh_token=' + encodeURIComponent(auth.refreshToken)});
      if (r.ok) { const t = await r.json(); j = {idToken: t.id_token, refreshToken: t.refresh_token, expiresIn: t.expires_in, localId: t.user_id}; }
    }
    if (!j && auth && auth.email) throw new Error('auth expired'); // a signed-in profile: log in again, do not start a new one
    if (!j) {
      const r = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + apiKey, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: '{"returnSecureToken":true}'});
      if (!r.ok) throw new Error('auth ' + r.status);
      j = await r.json();
    }
    keep(j, auth && auth.email);
    return auth.idToken;
  }
  /** One Identity Toolkit call (accounts:signInWithPassword, signUp, signInWithIdp, update…); throws its error body. */
  async function idt(method, body) {
    const r = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${method}?key=${apiKey}`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body)});
    const j = await r.json().catch(() => ({})); if (!r.ok) throw j; return j;
  }
  const url = async path => `${dbUrl}/${path}.json?auth=${await token()}`;
  async function get(path) { const r = await fetch(await url(path)); if (!r.ok) throw new Error(r.status === 401 ? 'rules' : 'get ' + r.status); return r.json(); }
  async function put(path, v) { const r = await fetch(await url(path), {method: 'PUT', body: JSON.stringify(v)}); if (!r.ok) throw new Error('put ' + r.status); }
  async function del(path) { try { await fetch(await url(path), {method: 'DELETE'}); } catch (_) {} }
  return {load, keep, token, idt, url, get, put, del, session: () => auth};
}
