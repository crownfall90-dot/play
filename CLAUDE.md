# CLAUDE.md — правила разработки Puzzlegrad

## Главное про проект

- **Вся игра** — один файл `web/game.html` (IIFE, без сборщиков).
- После **каждой** правки `web/game.html` запускать: `sh scripts/wrap-web.sh`  
  Это пересобирает `app/src/main/assets/index.html` (Android) и сайт.
- Проверять синтаксис JS перед коммитом:  
  `node -e "const fs=require('fs');const s=fs.readFileSync('web/game.html','utf8');const m=s.match(/<script>([\s\S]*?)<\/script>/g);let ok=true;m&&m.forEach((b,i)=>{try{new Function(b.replace(/<\/?script[^>]*>/g,''))}catch(e){ok=false;console.log('block',i,e.message)}});console.log(ok?'JS OK':'ERRORS')"`

## Релизы — строгие правила

1. **Выпускать только по команде** «Выпускай» или «собираем следующее обновление».  
   Мёрдж в `main` сам по себе **не публикует** ничего.
2. Последовательность выпуска:
   - Смёрджить PR в `main` (squash, с явными `commit_title` и `commit_message`)
   - Запустить workflow `android.yml` через `workflow_dispatch` на `main`
   - После того как workflow завершится и создаст тег: `git fetch --tags && python3 scripts/changelog.py`
   - Открыть PR с обновлённым `docs/CHANGELOG.md` + очищенным `release-notes.md` (пустой файл) → смёрджить
3. `release-notes.md` — **только** то, что увидят игроки: новые механики, исправления, улучшения.  
   Нельзя упоминать: панель владельца, токены, CI, скрипты, технические детали.
4. Версия определяется автоматически: `1.0.(100 + GITHUB_RUN_NUMBER)`. Не создавать теги вручную.

## Firebase

- Правила базы — файл `docs/firebase-rules.json`. Деплоить вручную в консоли Firebase.  
  Менять правила при добавлении нового пути в базу.
- Пути базы: `rooms`, `presence`, `leaders`, `profiles`, `friends`, `inbox`, `fcodes`, `fcodeOf`, `guestN`, `playerNo`, `feedback`.
- **Тест-клиенты** обязаны блокировать `/presence` (не писать присутствие в Firebase).

## Ветки и PR

- Рабочая ветка: `claude/practical-rubin-yw3r4y` (текущая сессия).
- PR открывать как draft; переводить в ready перед мёрджем.
- Идентификатор модели — **не писать** в коммитах и PR.
- Атрибуция в коммите:
  ```
  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01ChnK81F671HkeSg92eKK8m
  ```

## Структура `web/game.html`

Разделы отделены комментариями `/* ---------------- раздел ---------------- */`.

Ключевые места:

| Что | Где искать |
|---|---|
| Все типы карт | `TYPES`, раздел `art` |
| Подходит ли карта, компоненты, фишки | `fits`, `groupsOf`, `component`, `claimable`, раздел `rules` |
| Ход, постройка, очки | `startTurn`, `afterPlace`, `scoreAfter`, `resolveFeature`, раздел `turns` |
| Прогресс: уровень, задания, достижения, рейтинг | `PROG`, `QUESTS`, `ACH`, `syncRating`, `renderTop`, раздел `progress` |
| Кружок-уведомление на кнопке прогресса | `rewardReady()`, `progressDot()`, `ptabsDot()` |
| Онлайн-игра | `net`, `pumpRemote`, `sendMove`, раздел `online` |
| Ход мула (бот) | `botPick`, `aiTurn` |
| Кошелёк, золото, магазин | `wallet` (localStorage), `saveWallet`, раздел `gold, figures, shop` |
| Настройки, профиль | раздел `settings` |
| Обратная связь | `openFeedback()` → Firebase `/feedback/{uid}/` |

## Механики: важные детали

### Фишка после возврата (meeple anywhere)
После успешной постройки, если фишка вернулась (`meepleReturned`), игрок может поставить её **на любой незанятый пазл на доске**, а не только на только что выложенную карту.
- `claimableAll()` — собирает все свободные `{t, g}` по всей доске.
- `askMeeple(null, opts, p)` — режим «куда угодно»: показывает только призрачные фишки на поле + «Без фишки».
- Ход кодируется полями `mv.mtx`/`mv.mty` когда фишка кладётся не на выложенную карту.
- Боты в anyMode всегда кладут на только что выложенную карту (упрощение).

### Прогресс и кружок
- `PROG` хранится в `wallet.prog` (localStorage).
- `PROG.inTop10` — флаг «игрок в топ-10 рейтинга»; устанавливается после `syncRating` и при открытии вкладки «Рейтинг».
- `ptabsDot()` — обновляет точки на вкладках внутри экрана «Прогресс» (Задания / Достижения / Рейтинг).
- Точка на «Рейтинг» гасится при открытии вкладки (`PROG.inTop10 = false`).

### Удаление друга
Всегда через `confirmBox(...)` — нельзя удалить одним нажатием. Текст кнопки — «Удалить».

### XP и уровни
`xp = score + 5 + (win ? 25 : 0)`. Переход уровня: `xpNeed(l) = 50 + 50 * l`. +20 золота за уровень.  
Кубки — только за рейтинговые онлайн-партии: 1-е +30, 2-е +15, 3-е +5, ничья +10.

## Чего нельзя делать

- `git push --force` — никогда.
- Публиковать email владельца.
- Спрашивать ключ `FIREBASE_SERVICE_ACCOUNT` или GitHub-токен.
- Добавлять технические детали в `release-notes.md`.
- Идентификатор модели в коммитах/PR.
- Создавать теги вручную (`git tag vXXX`).
