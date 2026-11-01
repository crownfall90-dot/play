# Account verification
Source: d8aac0e97d66943223f40811ca45542b82d4788f
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text

  ...
# Subtest: retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
ok 153 - retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
  ---
  duration_ms: 2.643698
  ...
# Subtest: R-5: menu quest banner exists and is wired in game.html
ok 154 - R-5: menu quest banner exists and is wired in game.html
  ---
  duration_ms: 5.01434
  ...
# Subtest: R-12: streak freeze preserves streak on 1 missed day per week
ok 155 - R-12: streak freeze preserves streak on 1 missed day per week
  ---
  duration_ms: 14.251282
  ...
# Subtest: R-7: weekly quests and chest reward tracking
ok 156 - R-7: weekly quests and chest reward tracking
  ---
  duration_ms: 0.826027
  ...
# Subtest: R-8: rating friends scope filter and R-6 season tag
ok 157 - R-8: rating friends scope filter and R-6 season tag
  ---
  duration_ms: 3.250178
  ...
# Subtest: security audit: firebase rules contain promo_claims and secure testerPin
ok 158 - security audit: firebase rules contain promo_claims and secure testerPin
  ---
  duration_ms: 2.188731
  ...
# Subtest: security audit: game.html sanitizes remote seats, uid, and results board against XSS
ok 159 - security audit: game.html sanitizes remote seats, uid, and results board against XSS
  ---
  duration_ms: 4.964375
  ...
# Subtest: security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
ok 160 - security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
  ---
  duration_ms: 8.112572
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 161 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 14.58552
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 162 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 22.70047
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 163 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 4.815494
  ...
# Subtest: progress: levels and achievements
ok 164 - progress: levels and achievements
  ---
  duration_ms: 25.34185
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 165 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 6.747465
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 166 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.38373
  ...
# Subtest: section title bar sticks to the top in the app too
ok 167 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.202733
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 168 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 92.671229
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 169 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 79.266975
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 170 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.42289
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 171 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 1.869267
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 172 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.487744
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 173 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.640091
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 174 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.27552
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 175 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.515225
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 176 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 1.776229
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 177 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.425282
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 178 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.460965
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 179 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 21.571118
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 180 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 14.266325
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 181 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 3.126064
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 182 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.974639
  ...
1..182
# tests 182
# suites 0
# pass 164
# fail 0
# cancelled 0
# skipped 18
# todo 0
# duration_ms 3663.502911

```
## build
```text

BUILD SUCCESSFUL in 1m 24s
33 actionable tasks: 33 executed
```
