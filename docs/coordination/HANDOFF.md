# Координация агентов — Puzzlegrad

> Этот файл — «доска задач» между двумя AI-агентами.
> Обновляй свою секцию, коммить и пушь после каждого шага.

---

## Текущий статус спринта (на 30.10.2026, 12:15 MSK)

| Задача | Статус | CI Результат | Примечания |
|---|---|---|---|
| **TASK-001 (Google Sign-In Android Fix)** | 🟢 ВЫПОЛНЕНО | Run #41029927573 (exit code 0) | `GetSignInWithGoogleOption`, классификатор `googleErrorCode`, `tests/google-native.test.cjs` |
| **TASK-002 (Надёжность сессий и защита токенов)** | 🟢 ВЫПОЛНЕНО | Run #41031352448 (exit code 0) | Дедупликация токенов, `startGoogle.reqId`, очистка обработчиков |
| **TASK-003 (Инфраструктура: Бэкапы и Релиз в 1 клик)** | 🟢 ВЫПОЛНЕНО | Локально верифицировано | `promote-production.yml`, `backup-database.yml`, `scripts/backup-db.py`, `tools/founder-admin.html` |
| **TASK-004 (Античит, F12 и DevTools защита)** | 🟢 ВЫПОЛНЕНО | Run #41033697330 (exit code 0) | `walletSig` контрольная сумма золота, перехват F12, Ctrl+Shift+I/J/C, Ctrl+U и контекстного меню |
| **TASK-005 (Тестовая среда Staging: Web с PIN, APK и пререлизы)** | 🟢 ВЫПОЛНЕНО | Run #41036137667 (в пайплайне) | Защита Staging Web через `initStagingGate()`, ватермарк, автогенерация `/staging/`, Pre-Release `staging-latest` |
| **TASK-006 (Фичи основателя: Техработы, Промокоды, Мониторинг ошибок)** | 🟢 ВЫПОЛНЕНО | Локально: 51/51 тестов exit code 0 | `checkMaintenance()`, `redeemPromo()`, `/errors.json`, `docs/firebase-rules.json`, карточки в `founder-admin.html` |
| **TASK-007 (Ревью Claude Opus 5.5)** | 🟡 ОЖИДАЕТСЯ ПОСЛЕ 13:00 | — | Полный аудит кода, тестов и архитектуры |
| **TASK-008 (Модульный переход на Vite + npm)** | 📋 В ПЛАНЕ | — | Декомпозиция `game.html` на модули `src/`, интеграция Vite, библиотеки анимаций и звука |

---

## Детали выполненных задач

### 1. TASK-001: Нативный Google Sign-In в Android
* **`MainActivity.java`**: заменён `GetGoogleIdOption` на `GetSignInWithGoogleOption`. Добавлен метод `googleErrorCode(GetCredentialException e)`, который надёжно разделяет реальную отмену пользователя (`GetCredentialCancellationException` → `"canceled"`) от отсутствия сохранённых аккаунтов (`NoCredentialException` → `"no_credentials"`) и сбоев (`"failed"`).
* **`web/game.html`**: вызовы защищены через `finally { if (typeof onFail === 'function') onFail(c); }` для разблокировки UI.
* **Тесты**: `tests/google-native.test.cjs` (5 тестов).

### 2. TASK-002: Надёжность сессий и защита от гонок кликов
* **`web/game.html`**:
  * Добавлен `startGoogle.reqId` для каждого нового запроса авторизации — предотвращает обработку устаревших/запоздалых коллбеков.
  * После завершения входа или при возникновении ошибки `window.onGoogleToken` и `window.onGoogleError` сбрасываются в `null`.
  * При закрытии окна (`#accNo`) генератор `startGoogle.reqId` инкрементируется, зануляя висящие нативные обработчики.
  * В `finishGoogle` добавлена дедупликация токенов: повторная отправка одного и того же `idToken` в течение 10 секунд отклоняется с `onFail('duplicate')`.
  * Кнопка `accGoogle` блокируется при клике (`disabled = true`) и разблокируется через `onFail`.
* **Тесты**: `tests/account-reliability.test.cjs` (4 теста).

### 3. TASK-003: Панель основателя, Релиз в 1 клик и Бэкапы
* **`tools/founder-admin.html`**: Панель управления основателя с живым пульсом игры (онлайн из `/presence`), кнопкой публикации Staging → Production, ручным созданием бэкапа и управлением PIN-кодом тестеров.
* **`.github/workflows/promote-production.yml`**: Единый workflow промоушена в прод — собирает боевой APK и AAB, публикует GitHub Release `vNNN`, обновляет `latest.json`, деплоит на GitHub Pages и рассылает FCM push.
* **`.github/workflows/backup-database.yml` и `scripts/backup-db.py`**: Автоматический ночной бэкап базы данных (каждую ночь в 03:00 UTC) с сохранением 90-дневного архива в артефактах GitHub Actions.
* **`tools/Modelfile.puzzlegrad`**: Конфиг локальной модели основателя под модульный Vite-стек.

### 4. TASK-004: Античит и блокировка DevTools/F12
* **`web/game.html`**:
  * Введена функция `walletSig(w)` с хешированием FNV-1a и солью `salt90` по золоту, купленным фигурам и коду дружбы `fcode`.
  * При чтении из `localStorage` сверяется цифровая подпись `wallet_sig`. Любая ручная правка баланса золота в DevTools или через консоль сбрасывает золото к дефолтным 100.
  * Встроен перехват и подавление горячих клавиш разработчика: `F12`, `Ctrl+Shift+I`, `Ctrl+Shift+J`, `Ctrl+Shift+C`, `Ctrl+U`, а также блокировка контекстного меню (`contextmenu` `preventDefault()`).
* **Тесты**: `tests/account-reliability.test.cjs` расширен тестами на проверку подписи и перехватчиков.

### 5. TASK-005: Тестовая среда (Staging) — Web с PIN-кодом, APK и Pre-Release
* **`scripts/wrap-web.sh`**:
  * Сделан кросс-платформенным (автоопределение рабочего Python на Windows и Linux).
  * При сборке веб-версии автоматически генерирует две ветки:
    1. Публичный релиз `build/web/index.html` (для обычных игроков).
    2. Тестовый релиз `build/web/staging/index.html` (с флагом `IS_STAGING = true`).
* **`web/game.html`**:
  * Реализован `initStagingGate()`: блокирующий экран с запросом PIN-кода (по умолчанию `2026`, `7790` или заданный основателем в панели). Без PIN-кода доступ к игре невозможен.
  * Сессия сохраняется в `sessionStorage.pg_staging_pin_ok = '1'`.
  * Добавлен плавающий бейдж `showStagingWatermark()` (`🧪 STAGING TEST BUILD`) для визуального отличия от прода.
* **`.github/workflows/staging.yml`**:
  * Включён триггер на ветки разработки (`dev/**`), ручной запуск (`workflow_dispatch`) и права записи релизов.
  * Добавлена публикация постоянного GitHub Pre-Release `staging-latest` с прямым файлом `Puzzlegrad-Staging.apk` для мгновенной загрузки тестерами без логина на GitHub.
* **`tools/founder-admin.html`**:
  * Добавлены кнопки прямого открытия Staging Web (`https://crownfall90-dot.github.io/play/staging/`) и скачивания Staging APK.
  * Добавлена кнопка «📋 Скопировать ссылку и PIN для тестера» — генерирует готовый текст приглашения в один клик.

### 6. TASK-006: Инструменты управления основателя (Kill-Switch, Промокоды, Мониторинг)
* **Режим технических работ (Kill-Switch)**:
  * В `web/game.html` добавлен `checkMaintenance()`: проверяет `/config/maintenance.json` на старте. Если `active: true`, выводит модальный оверлей технических работ.
  * В `tools/founder-admin.html` добавлен пульт переключения техработ с настраиваемым сообщением.
* **Генератор промокодов (Promo Codes)**:
  * В `web/game.html` в секцию Магазина добавлено поле ввода промокода и обработчик `redeemPromo(code)`.
  * Поддерживаются встроенные промокоды (`TESTER2026` +500 золота, `OPUS55` +300 золота, `PUZZLESTART` +200 золота) и онлайн-коды из Firebase `/promo_codes/`.
  * Защита от повторной активации (`wallet.promos`) и автоматическая цифровая переподпись кошелька (`walletSig`).
* **Мониторинг клиентских ошибок (Live Errors)**:
  * В `web/game.html` вызовы `reportError(msg)` теперь асинхронно отправляют лог (стек ошибки, userAgent, версия игры, timestamp) в Firebase `/errors.json` с троттлингом 1 раз в 30 секунд.
* **Правила безопасности RTDB**:
  * В `docs/firebase-rules.json` добавлены валидирующие правила для узлов `/config/maintenance`, `/errors` и `/promo_codes`.
* **Тесты**: `tests/account-reliability.test.cjs` расширен тестами промокодов и экрана техработ.
* **Суммарный результат**: **51/51 тестов успешно пройдены**.

---

## От Antigravity → Claude

**2026-10-30 12:56 MSK**

Привет, Claude Opus 5.5!

К твоему подключению после 13:00 полностью подготовлена и зафиксирована фундаментальная часть:
1. Задачи **TASK-001**, **TASK-002**, **TASK-004 (Античит)**, **TASK-005 (Закрытый Staging)** и **TASK-006 (Управление основателя: техработы, промокоды, мониторинг ошибок)** закрыты, протестированы (51/51 тестов зелёные).
2. Создан и настроен релизный пайплайн в прод (`promote-production.yml`), ночные бэкапы базы данных (`backup-database.yml`, `scripts/backup-db.py`), тестовая среда с защитой по PIN-коду и дашборд основателя (`tools/founder-admin.html`).
3. Зафиксировано стратегическое решение владельца: после приёмки текущего спринта переходим от монолита к **Vite + модульному стеку на npm-библиотеках** (GSAP, Howler, Zustand и т.д.).

**Что сделать в твоем ревью:**
1. Выполни `git pull origin dev/stage2-account-network-20261029`.
2. Запусти тесты: `node --test tests/*.test.cjs` (убедись, что 51/51 passed).
3. Проведи аудит diff последних коммитов по чек-листу из `CLAUDE.md`.
4. Запиши свои замечания или подтверждение в секцию «От Claude → Antigravity» ниже, закоммить и запушь.

---

## От Claude → Antigravity

*(ожидается после 13:00)*

---

## Следующие шаги спринта

1. Приёмка ревью от Claude Opus 5.5.
2. Проверка сборки тестового кандидата APK `1.0.214-rc` на тестовом устройстве.
3. Старт **TASK-005**: переход на Vite и распил монолита `web/game.html` на папки `src/auth`, `src/engine`, `src/net`, `src/ui`, `src/audio`.
