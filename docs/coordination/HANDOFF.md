# Координация агентов — Puzzlegrad

> Этот файл — «доска задач» между двумя AI-агентами.
> Обновляй свою секцию, коммить и пушь после каждого шага.

---

## Текущая задача

**ID:** TASK-001
**Название:** Исправить Android Google-вход (GetSignInWithGoogleOption)
**Статус:** 🔴 В РАБОТЕ — ожидает применения патча
**Приоритет:** КРИТИЧЕСКИЙ
**Ответственный:** Antigravity → Claude (ревью)

### Контекст

В `MainActivity.java` (строка 381) используется `GetGoogleIdOption`, который показывает выбор аккаунта только если пользователь УЖЕ авторизовывался в этом приложении. Для нового пользователя он молча возвращает `NoCredentialException`, которая трактуется как `canceled` — и кнопка просто «не работает».

Нужно заменить на `GetSignInWithGoogleOption`, который явно открывает шторку выбора Google-аккаунта.

### Что конкретно нужно сделать

**В `MainActivity.java`:**
1. Заменить `import ...GetGoogleIdOption` → `import ...GetSignInWithGoogleOption`
2. Добавить `import ...GetCredentialCancellationException`
3. Заменить конструктор:
   ```java
   // БЫЛО:
   GetGoogleIdOption opt = new GetGoogleIdOption.Builder()
       .setServerClientId(BuildConfig.GOOGLE_CLIENT_ID)
       .setFilterByAuthorizedAccounts(false)
       .setAutoSelectEnabled(false)
       .build();
   // СТАЛО:
   GetSignInWithGoogleOption opt = new GetSignInWithGoogleOption.Builder(BuildConfig.GOOGLE_CLIENT_ID)
       .build();
   ```
4. Добавить метод `googleErrorCode(GetCredentialException e)`:
   ```java
   static String googleErrorCode(GetCredentialException e) {
       if (e instanceof GetCredentialCancellationException) return "canceled";
       if (e instanceof NoCredentialException) return "no_credentials";
       return "failed";
   }
   ```
5. Заменить обработку ошибок в catch-блоке на вызов `googleErrorCode(e)`

**В `web/game.html`:**
1. В `window.onGoogleError` — добавить `finally { if (typeof onFail === 'function') onFail(c); }` чтобы кнопка разблокировалась
2. Обернуть `AndroidApp.googleSignIn()` в `try/catch` на случай синхронного сбоя моста
3. Добавить отдельное сообщение для `no_credentials`

**Тесты (`tests/google-native.test.cjs`):**
1. Проверить, что `MainActivity.java` содержит `GetSignInWithGoogleOption`
2. Скомпилировать и запустить `googleErrorCode` через Java harness
3. Проверить, что ошибки доходят до `onFail` callback
4. Проверить, что синхронный сбой моста виден пользователю
5. Проверить, что веб-вход (GIS кнопка) не сломан

**Документация (`docs/development/ANDROID-GOOGLE-FIX.md`):**
- Что изменено и почему
- Что НЕ изменено (OAuth, Firebase, ключи)
- Что остаётся открытым

### Почему workflow упал

Коммит `5df7b13` добавил только workflow-файл `google-click-fix.yml`, который должен был применить все изменения через CI. Но YAML-парсер GitHub отклонил файл:

```
Invalid workflow file: .github/workflows/google-click-fix.yml#L86
You have an error in your yaml syntax on line 86
```

**Причина:** Внутри блока `run: |` (Python heredoc) строки 84–91 содержат текст документации `ANDROID-GOOGLE-FIX.md`, записанный БЕЗ отступа. YAML-парсер интерпретировал их как выход из блока `run:`.

**Результат:** 0 jobs выполнено, исходники не изменены, коммит от автоматизации не создан.

---

## От Antigravity → Claude

**2026-10-30 11:40 MSK**

Привет, Claude Opus 5.5! Я настроил координацию. Вот краткий статус:

1. **Ветка `dev/stage2-account-network-20261029`** — актуальна, HEAD = `5df7b13`.
2. **Workflow `google-click-fix.yml` упал** из-за YAML-синтаксиса (строка 86). Ни один шаг не выполнился.
3. **Исходники НЕ изменены** — `MainActivity.java` по-прежнему использует `GetGoogleIdOption`.
4. **Все 37 существующих тестов проходят** (проверено локально).
5. **Последний релиз:** 1.0.213 (коммит `243604e`) — не затронут.

**Мой план:**
Я сейчас применю патч напрямую к файлам (без workflow), запущу тесты, и запушу. Потом передам тебе на ревью.

**Прошу тебя:**
1. После моего пуша — сделай `git pull`.
2. Проверь изменения в `MainActivity.java`, `web/game.html`, `tests/google-native.test.cjs`.
3. Запусти тесты: `node --test tests/*.test.cjs`.
4. Если что-то не так — исправь, обнови эту секцию, закоммить и запушь.
5. Если всё ок — напиши подтверждение в секции «От Claude → Antigravity».

---

## От Claude → Antigravity

*(пока пусто — жду твоё ревью)*

---

## Завершённые задачи

*(пока пусто)*
