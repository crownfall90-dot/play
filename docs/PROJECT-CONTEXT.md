# Puzzlegrad: постоянный контекст разработки

Репозиторий: `crownfall90-dot/play`. Безопасная рабочая ветка: `setup/test-environment`. Актуальная база текущего пакета: `b68390e1e907a792a19dc8ee156ce1a5011f78a1`.

## Архитектура и данные

Основное игровое ядро и UI находятся в `web/game.html`; Android — тонкая WebView-обвязка и asset, создаваемый `scripts/wrap-web.sh`. Сетевые комнаты, presence и аккаунтный слой используют Firebase при наличии конфигурации. Offline-сохранение партии хранится локально. Подробная существующая архитектура: [ARCHITECTURE.md](ARCHITECTURE.md); тестирование: [TESTING.md](TESTING.md); полный продуктовый план: [DEVELOPMENT-REQUIREMENTS.md](DEVELOPMENT-REQUIREMENTS.md); дорожная карта: [ROADMAP.md](ROADMAP.md).

## Статусы

- GitHub MCP 29 октября 2026 авторизован как `crownfall90-dot`; чтение и запись доступны через действия с обязательным подтверждением. До этого локальный git transport не имел credentials.
- `setup/test-environment` проверена на SHA `b68390e`; `main` находится на другом SHA и не меняется.
- Исходный staging workflow на базовом SHA ранее успешно выполнялся. Новый пакет до отправки не считается собранным или проверенным CI.
- Отдельный тестовый Firebase не подтверждён. Текущий staging build удаляет `app/google-services.json` и является offline; production Firebase не использовать для разработки.
- Реальный телефон и два аккаунта Android/web текущим пакетом не проверены.

## Безопасность подписи

В прежнем аудите обнаружен риск раскрытия основного signing material в истории/репозитории. Не копировать ключ или пароль в документы и логи, не менять ключ без плана совместимости установленных APK. Тестовый workflow использует отдельный persistent staging key из GitHub Secrets и проверяет identity/signing; основной release signing этим пакетом не затрагивается.

## Текущий пакет этапа 1

Планируется и локально проверяется как один ограниченный пакет: terminal marker до async final scoring, защита active save от возврата завершённой игры, локальная история результата, возврат на главную после background, раннее резервирование номера remote move, duplicate start guard, тихий конечный пропуск непригодных карт и singleton accessible confirmation dialog. Это не закрывает весь этап 1: остаются расширенные сценарии массового catch-up без старых анимаций, реальный двухклиентский онлайн и Android/WebView/телефон.

## Status update 2026-10-29, stage 2 working branch
This section supersedes older planning statuses above. Test base: 29d7f594e94c7ef9a063ae5b434963ef75af2c53. Public APK 1.0.209 was published from cd3747f9e00b91a3a8228095c194c8657c7485d4; main merge is still pending in draft PR 151. Successful candidate CI and FCM acceptance were shown in owner screenshots; phone delivery, upgrade/data preservation and two-client online remain unverified.
Current branch: dev/stage2-account-network-20261029. First narrow package guards the notified marker against disabled Android notifications/channel and denied permission, and serializes announcements. It does not establish the cause of the owner's missing notification. No subscription diagnostics, account/color changes, test Firebase setup, phone verification or public release are claimed by this package.
Automated checks: existing lifecycle tests plus four source-structure notification checks (NOT Android runtime tests), and offline staging compilation. CI creates a source commit only after these commands pass. Compilation uses a temporary debug signature, uploads no APK and is not an installable persistent test update. Production Firebase configuration is removed only in the CI workspace. No production data access or message send occurs.
Stage 1 online/device scenarios remain open. Stage 2 Google login, permanent colors, connection/versioned data sync and owner-role security remain planned. Separate test Firebase is still unconfirmed. Existing signing-key exposure risk remains unresolved; no key rotation is performed.
