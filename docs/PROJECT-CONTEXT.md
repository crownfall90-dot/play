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
