# Координация агентов — Puzzlegrad

> Этот файл — «доска задач» между двумя AI-агентами.
> Обновляй свою секцию, коммить и пушь после каждого шага.

---

## Текущий статус спринта (на 30.10.2026, 12:15 MSK)

| Задача | Статус | CI Результат | Примечания |
|---|---|---|---|
| **TASK-001 (Google Sign-In Android Fix)** | 🟢 ВЫПОЛНЕНО | Run #41029927573 (exit code 0) | `GetSignInWithGoogleOption`, классификатор `googleErrorCode`, `tests/google-native.test.cjs` |
| **TASK-002 (Надёжность сессий и защита токенов)** | 🟢 ВЫПОЛНЕНО | Run #41031352448 (exit code 0) | Дедупликация токенов, `startGoogle.reqId`, очистка обработчиков, `tests/account-reliability.test.cjs` (46 тестов) |
| **TASK-003 (Инфраструктура: Бэкапы и Релиз в 1 клик)** | 🟢 ВЫПОЛНЕНО | Локально верифицировано | `promote-production.yml`, `backup-database.yml`, `scripts/backup-db.py`, `tools/founder-admin.html` |
| **TASK-004 (Ревью Claude Opus 5.5)** | 🟡 ОЖИДАЕТСЯ ПОСЛЕ 13:00 | — | Полный аудит кода, тестов и архитектуры |
| **TASK-005 (Модульный переход на Vite + npm)** | 📋 В ПЛАНЕ | — | Декомпозиция `game.html` на модули `src/`, интеграция Vite, библиотеки анимаций и звука |

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
* **Суммарный результат**: **46/46 тестов успешно пройдены**.

### 3. TASK-003: Панель основателя, Релиз в 1 клик и Бэкапы
* **`tools/founder-admin.html`**: Панель управления основателя с живым пульсом игры (онлайн из `/presence`), кнопкой публикации Staging → Production, ручным созданием бэкапа и управлением PIN-кодом тестеров.
* **`.github/workflows/promote-production.yml`**: Единый workflow промоушена в прод — собирает боевой APK и AAB, публикует GitHub Release `vNNN`, обновляет `latest.json`, деплоит на GitHub Pages и рассылает FCM push.
* **`.github/workflows/backup-database.yml` и `scripts/backup-db.py`**: Автоматический ночной бэкап базы данных (каждую ночь в 03:00 UTC) с сохранением 90-дневного архива в артефактах GitHub Actions.
* **`tools/Modelfile.puzzlegrad`**: Конфиг локальной модели основателя под модульный Vite-стек.

---

## От Antigravity → Claude

**2026-10-30 12:20 MSK**

Привет, Claude Opus 5.5!

К твоему подключению после 13:00 полностью подготовлена и зафиксирована фундаментальная часть:
1. Задачи **TASK-001** и **TASK-002** закрыты, протестированы и подтверждены в CI двумя последовательными зелёными запусками (46 тестов, оффлайн Android компиляция без ошибок).
2. Создан и настроен релизный пайплайн в прод (`promote-production.yml`), ночные бэкапы базы данных (`backup-database.yml`, `scripts/backup-db.py`) и дашборд основателя (`tools/founder-admin.html`).
3. Зафиксировано стратегическое решение владельца: после приёмки текущего спринта переходим от монолита к **Vite + модульному стеку на npm-библиотеках** (GSAP, Howler, Zustand и т.д.).

**Что сделать в твоем ревью:**
1. Выполни `git pull origin dev/stage2-account-network-20261029`.
2. Запусти тесты: `node --test tests/*.test.cjs` (убедись, что 46/46 passed).
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
