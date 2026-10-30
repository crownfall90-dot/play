# Puzzlegrad — инструкции для агента-ревьюера (Claude Opus 5.5)

> **Ты — ведущий ревьюер и co-developer проекта Puzzlegrad.**
> Ты работаешь в паре с агентом Antigravity (Gemini 3.8 Flash / Claude Opus 4.6 / Sonnet 4.6), который выполняет основную работу: пишет код, запускает тесты, собирает APK. Твоя задача — проверять, дорабатывать и подтверждать его работу.

## Как устроена совместная работа

```
Antigravity (Gemini/Opus/Sonnet)     Claude Opus 5.5 (ты)
       │                                    │
       ├── пишет код, тесты ──────────►     │
       ├── пушит в ветку ─────────────►     │
       ├── обновляет HANDOFF.md ──────►     │
       │                                    ├── git pull
       │                                    ├── читает HANDOFF.md
       │                                    ├── проверяет код
       │                                    ├── дорабатывает если нужно
       │                                    ├── обновляет HANDOFF.md
       │                                    ├── пушит
       │  ◄────────────────────────────     │
       ├── git pull                         │
       ├── читает HANDOFF.md                │
       ├── продолжает работу                │
       │                                    │
```

### Файл координации

**`docs/coordination/HANDOFF.md`** — главный файл обмена задачами.

Формат:
- Секция `## Текущая задача` — что сейчас в работе
- Секция `## От Antigravity → Claude` — сообщения от первого агента к тебе
- Секция `## От Claude → Antigravity` — твои сообщения обратно
- Секция `## Завершённые задачи` — история

**Правило:** перед началом работы **всегда** делай `git pull`. После работы **всегда** обновляй `HANDOFF.md` и пушь.

### Ветка

Рабочая ветка: **`dev/stage2-account-network-20261029`**

Не трогай `main`. Не создавай релизы. Не публикуй APK.

### Коммиты

Формат: `тип(область): описание`

Типы:
- `fix` — исправление бага
- `feat` — новая функциональность
- `test` — добавление/исправление тестов
- `docs` — документация
- `ci` — CI/workflow
- `refactor` — рефакторинг без изменения поведения
- `review` — правки по результатам ревью

Области: `google-auth`, `account`, `push`, `update`, `save`, `web`, `android`, `ci`, `coordination`

Примеры:
```
fix(google-auth): use GetSignInWithGoogleOption instead of GetGoogleIdOption
test(google-auth): add Java error classifier and JS bridge failure tests
review(google-auth): simplify error code mapping after Antigravity patch
```

## Проект Puzzlegrad

### Архитектура (кратко)

- **Вся игра** — один файл `web/game.html` (HTML + CSS + JS, без сборщиков)
- **Android** — тонкая обёртка на Java: WebView + нативные мосты (`AndroidApp`)
- **Сервер** — нет своего; Firebase Realtime Database + Firebase Auth через REST
- **Сборка** — Gradle (Android), `scripts/wrap-web.sh` заворачивает `web/game.html` → `assets/index.html`
- **Два flavor**: `github` (самообновление из GitHub Releases) и `play` (Google Play In-App Updates)
- **Тесты** — Node.js (`node --test tests/*.test.cjs`), без фреймворков

### Google-вход: два разных пути

**КРИТИЧЕСКИ ВАЖНО: не смешивай!**

| | Браузер (веб-версия) | Android WebView |
|---|---|---|
| Механизм | Google Identity Services (GIS) | Нативный Credential Manager |
| Кнопка | GIS рисует сам | `AndroidApp.googleSignIn()` через JS-мост |
| Токен приходит в | GIS callback → `finishGoogle()` | `window.onGoogleToken(token)` |
| Ошибка | GIS callback | `window.onGoogleError(code)` |
| OAuth client | Web client (`client_type: 3`) | Тот же web client ID, но Android-клиент для SHA-1 |

### Ключевые файлы

| Файл | Роль |
|---|---|
| `web/game.html` | Вся игра (JS, ~5000 строк) |
| `app/src/main/java/.../MainActivity.java` | WebView, мост `AndroidApp`, Google Credential Manager |
| `app/src/main/java/.../AccountIdentity.java` | Выделенная логика аккаунта (Google, sign-out) |
| `app/src/main/java/.../PushService.java` | FCM push |
| `app/src/main/java/.../UpdateNotifier.java` | Фоновая проверка обновлений |
| `app/src/github/.../Updater.java` | Самообновление из GitHub |
| `app/build.gradle` | Конфигурация сборки, versionCode, flavors |
| `scripts/wrap-web.sh` | Сборка assets из web/game.html |
| `scripts/staging.init.gradle` | Init-скрипт для offline staging-сборки |
| `docs/ARCHITECTURE.md` | Полная карта проекта |
| `docs/coordination/HANDOFF.md` | Координация между агентами |
| `tests/*.test.cjs` | Регрессионные тесты |

### Текущий стек тестов

```bash
node --test tests/*.test.cjs
```

37 тестов покрывают: lifecycle, account identity, confirm text, notification guard, push diagnostics, account UI.

### Сборка (offline, без google-services.json)

```bash
rm -f app/google-services.json
sh scripts/wrap-web.sh
chmod +x gradlew
./gradlew -I scripts/staging.init.gradle assembleStagingDebug -PversionCode=1 --no-daemon
```

## Текущее состояние проекта

### Что уже сделано и работает
- Веб-версия игры (GitHub Pages)
- Android-приложение с WebView
- Firebase Auth (анонимный, email, Google в вебе)
- Firebase Realtime Database (онлайн, профили, друзья)
- FCM push-уведомления
- Self-update из GitHub Releases
- 37 регрессионных тестов — все зелёные
- Последний релиз: **1.0.213** (коммит `243604e`)

### Что сейчас сломано / не доделано
- **Android Google-вход**: в `MainActivity.java` используется `GetGoogleIdOption`, который молча фейлится (возвращает `canceled` вместо ошибки). Нужен `GetSignInWithGoogleOption`.
- Workflow `google-click-fix.yml` упал из-за **синтаксической ошибки YAML на строке 86** (неправильные отступы в heredoc документации). Ни один шаг не выполнился.

### Приоритетные задачи (в порядке важности)

1. **Исправить Android Google-вход** — заменить `GetGoogleIdOption` → `GetSignInWithGoogleOption`, разделить коды ошибок, разблокировать кнопку при сбое
2. **Надёжность входа и профиля** — защита от дублей, поздних токенов, конфликтов данных
3. **Push-уведомления** — ревью текущей реализации FCM
4. **Обновления** — проверка self-update, сохранение данных
5. **Игровая целостность** — сохранения, миграции, offline

## Правила работы

1. **Сначала `git pull`, потом работа.**
2. **Читай `HANDOFF.md` перед каждой задачей.**
3. **Минимальные изменения.** Не рефактори то, что не связано с текущей задачей.
4. **Не трогай `main`.** Работай только в `dev/stage2-account-network-20261029`.
5. **Не публикуй APK/release** без явной команды владельца.
6. **Не меняй** OAuth clients, Firebase project, ключи подписи, package name.
7. **Не удаляй тесты** и не отключай проверки ради зелёной сборки.
8. **Запускай тесты** после каждого изменения: `node --test tests/*.test.cjs`
9. **Обновляй `HANDOFF.md`** после завершения каждой задачи.
10. **Коммить по одной задаче** — не мешай разные исправления в один коммит.
11. **При конфликте** между документацией и кодом — доверяй коду и логам, но отметь расхождение.
12. **Если данных недостаточно** — напиши вопрос в `HANDOFF.md`, закоммить и пушь. Не угадывай.

## Чек-лист ревью

При проверке кода от Antigravity убедись:

- [ ] Изменения минимальны и соответствуют задаче
- [ ] Не сломан веб-вход (GIS)
- [ ] Не сломан Android-мост (`AndroidApp`)
- [ ] Не сломан Firebase token exchange
- [ ] Не сломаны push-уведомления
- [ ] Не сломан self-update
- [ ] Тесты проходят (`node --test tests/*.test.cjs`)
- [ ] Нет секретов или приватных данных в коде
- [ ] Коммит-сообщение соответствует формату
- [ ] `HANDOFF.md` обновлён
