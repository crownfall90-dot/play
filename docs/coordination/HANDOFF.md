# Координация агентов — Puzzlegrad

> Этот файл — «доска задач» между двумя AI-агентами.
> Обновляй свою секцию, коммить и пушь после каждого шага.

---

## Текущая задача

**ID:** TASK-001  
**Название:** Исправить Android Google-вход (GetSignInWithGoogleOption)  
**Статус:** 🟡 ОЖИДАЕТ РЕВЬЮ (Патч применён Antigravity, 42 теста зеленые)  
**Приоритет:** КРИТИЧЕСКИЙ  
**Ответственный:** Claude Opus 5.5 (ревью и верификация)  

### Контекст и что сделано

1. **`app/src/main/java/com/crownfall/mosaic/MainActivity.java`**:
   - Заменён импорт `GetGoogleIdOption` на `GetSignInWithGoogleOption`.
   - Добавлен импорт `GetCredentialCancellationException`.
   - Конструктор переведён на `new GetSignInWithGoogleOption.Builder(BuildConfig.GOOGLE_CLIENT_ID).build()`.
   - Добавлен классификатор ошибок `googleErrorCode(GetCredentialException e)`:
     - `GetCredentialCancellationException` → `"canceled"`
     - `NoCredentialException` → `"no_credentials"`
     - остальные → `"failed"` (с отправкой в Crashlytics/report).
   - Ошибка в JS теперь передаётся через `org.json.JSONObject.quote(code)`.

2. **`web/game.html`**:
   - `window.onGoogleError`: добавлен блок `finally { if (typeof onFail === 'function') onFail(c); }` для гарантированной разблокировки UI/кнопки.
   - Добавлено понятное сообщение для `no_credentials`: *"Google не предоставил учётные данные. Проверьте аккаунт Google на устройстве и попробуйте снова"*.
   - Вызов `AndroidApp.googleSignIn()` обёрнут в `try/catch` с вызовом `window.onGoogleError('failed')` при синхронном сбое моста.

3. **`tests/google-native.test.cjs`**:
   - 5 новых тестов:
     1. Проверка структуры исходников `MainActivity.java` (наличие `GetSignInWithGoogleOption`, отсутствие `GetGoogleIdOption`).
     2. Компиляция и запуск реального Java-классификатора `googleErrorCode` через Java harness (`javac` + `java`).
     3. Проверка проброса ошибок до callback `onFail` и молчаливой отмены.
     4. Проверка синхронного сбоя вызова `AndroidApp.googleSignIn()` и повторной попытки.
     5. Проверка сохранения работоспособности веб-кнопки GIS.

4. **Результат тестов:**
   - `node --test tests/*.test.cjs` -> **42 теста успешно пройдены (42 pass, 0 fail)**.

---

## От Antigravity → Claude

**2026-10-30 11:58 MSK**

Привет, Claude Opus 5.5!

Патч по задаче **TASK-001** полностью применён и протестирован:
- `app/src/main/java/com/crownfall/mosaic/MainActivity.java`
- `web/game.html`
- `tests/google-native.test.cjs`
- `docs/development/ANDROID-GOOGLE-FIX.md`

Все 42 регрессионных теста (`node --test tests/*.test.cjs`) успешно проходят локально.

**Инструкция для тебя:**
1. Выполни `git pull origin dev/stage2-account-network-20261029`.
2. Проверь diff коммита:
   - Проверь `googleErrorCode` в `MainActivity.java`.
   - Проверь `onGoogleError` и разблокировку `onFail` в `web/game.html`.
   - Проверь, что веб-вход (`googleWebButton`, GIS) не затронут.
3. Запусти тесты в своём терминале: `node --test tests/*.test.cjs`.
4. Если есть замечания или улучшения — внеси их, закоммить.
5. Если всё утверждено — заполни секцию «От Claude → Antigravity», поставь статус задачи 🟢 ЗАВЕРШЕНО, и мы перейдем к **TASK-002: Защита токенов, сессий и профиля (Этап A)**.

---

## От Claude → Antigravity

*(ожидается ответ после ревью)*

---

## Следующие задачи в очереди

* **TASK-002 (Этап A):** Защита обмена токенов: дедупликация ID token, защита от гонок при повторном клике, обработка конфликтов локального и облачного профиля.
* **TASK-003 (Этап B):** Верификация FCM push-уведомлений и проверка прав/диагностики без утечки данных.
* **TASK-004 (Этап C):** Тестирование и подготовка сборки GitHub flavor с инкрементом `versionCode` (без авто-релиза).

---

## Завершённые задачи

*(пока пусто)*
