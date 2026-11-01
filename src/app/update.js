// Update pause during online matches and release notes handling.

export const UPD_WAIT = 10 * 60 * 1000;

export function appCode(isAndroid) {
  if (isAndroid && typeof window !== 'undefined' && window.AndroidApp && window.AndroidApp.versionName) {
    return parseInt(String(window.AndroidApp.versionName()).split('.').pop(), 10) || 0;
  }
  return 1e9;
}

export function showWhatsNew(ver, storage = typeof localStorage !== 'undefined' ? localStorage : null) {
  if (!storage || !ver) return false;
  let last = null;
  try {
    last = storage.getItem('seenVersion');
    storage.setItem('seenVersion', ver);
  } catch (_) {
    return false;
  }
  if (!last || last === ver || typeof window === 'undefined' || !window.RELEASE_NOTES) return false;

  const box = document.createElement('div');
  box.className = 'over';
  box.style.position = 'fixed';
  box.innerHTML = `<div class="ocard"><h3>Что нового в версии ${ver}</h3><div class="notes-list"></div><button class="cta wide">Играть</button></div>`;
  box.querySelector('.notes-list').textContent = window.RELEASE_NOTES;
  box.querySelector('.cta').onclick = () => box.remove();
  document.body.append(box);
  return true;
}
