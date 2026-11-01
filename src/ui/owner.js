// Owner panel constants, GitHub workflow status formatting, and admin panel UI helpers

export const DEV_REPO = 'crownfall90-dot/play';
export const DEV_WF = 'news.yml';
export const DEV_NATIVE = ['devToken', 'devPanel'];

export const RUN_TEXT = {
  queued: 'в очереди',
  in_progress: 'отправляется',
  completed: ''
};

export function devGet(k, storage = null, nativeApp = null) {
  let v = '';
  try {
    if (storage) v = storage.getItem(k) || '';
    else if (typeof localStorage !== 'undefined') v = localStorage.getItem(k) || '';
  } catch (_) {}

  if (v && DEV_NATIVE.includes(k) && nativeApp && nativeApp.getPref && nativeApp.setPref) {
    try {
      if (!nativeApp.getPref(k)) nativeApp.setPref(k, v);
    } catch (_) {}
  }
  if (!v && DEV_NATIVE.includes(k) && nativeApp && nativeApp.getPref) {
    try {
      v = nativeApp.getPref(k) || '';
      if (v && storage) storage.setItem(k, v);
      else if (v && typeof localStorage !== 'undefined') localStorage.setItem(k, v);
    } catch (_) {}
  }
  return v;
}

export function devSet(k, v, storage = null, nativeApp = null) {
  try {
    if (storage) {
      if (v) storage.setItem(k, v);
      else storage.removeItem(k);
    } else if (typeof localStorage !== 'undefined') {
      if (v) localStorage.setItem(k, v);
      else storage.removeItem(k);
    }
  } catch (_) {}

  if (DEV_NATIVE.includes(k) && nativeApp && nativeApp.setPref) {
    try {
      nativeApp.setPref(k, v || '');
    } catch (_) {}
  }
}

export function formatDevStatus(run) {
  if (!run) return 'Ещё ничего не отправляли';
  const when = new Date(run.created_at).toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  });
  const outcome = run.status === 'completed'
    ? (run.conclusion === 'success' ? '✅ доставлена в Firebase' : '❌ ошибка — откройте Actions на GitHub')
    : '⏳ ' + (RUN_TEXT[run.status] || run.status);
  return `Последняя отправка ${when}: ${outcome}`;
}

export function renderDevPanelCardHtml({tok, devTitle, devBody, devTestOn, siteUrl, repo}) {
  const escTitle = (devTitle || '').replace(/"/g, '&quot;');
  const escBody = (devBody || '').replace(/</g, '&lt;');
  const curRepo = repo || DEV_REPO;

  const content = tok ? `
    <input class="field" id="devTitle" maxlength="60" placeholder="Заголовок" value="${escTitle}">
    <textarea class="field" id="devBody" maxlength="300" rows="4" placeholder="Текст уведомления">${escBody}</textarea>
    <label class="devtest"><input type="checkbox" id="devTest"${devTestOn ? ' checked' : ''}> Только мне — проверить, как выглядит</label>
    <button class="cta wide" id="devSend">Отправить</button>
    <p class="shint" id="devState">Проверяем…</p>
    <button class="linkbtn" id="devForget">Сменить токен GitHub</button>
  ` : `
    <p>Пуш уходит через GitHub. Нужен ваш токен: GitHub → Settings → Developer settings → Fine-grained tokens → репозиторий ${curRepo}, разрешение «Actions: Read and write». Токен хранится только на этом телефоне.</p>
    <input class="field" id="devTok" type="password" placeholder="github_pat_…" autocomplete="off">
    <button class="cta wide" id="devSave">Сохранить</button><p class="shint" id="devState"></p>
  `;

  return `<div class="ocard dev"><div style="font-size:38px">📣</div><h3>Сообщение всем игрокам</h3>
    ${content}
    <button class="ghostbtn" id="devStats">📊 Статистика игры</button>
    <a class="ghostbtn devlink" href="${siteUrl || '/'}admin/" target="_blank" rel="noopener">🛠 Админ-панель и отзывы на сайте</a>
    <button class="ghostbtn" id="devClose">Закрыть</button></div>`;
}
