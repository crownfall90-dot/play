// Renders Google Play graphics from the real game: icon, feature graphic, phone screenshots.
// Usage: node scripts/store-assets.js   (needs Playwright; run scripts/wrap-web.sh first)
const path = require('path');
const { chromium } = require(process.env.PLAYWRIGHT || 'playwright');
const root = path.resolve(__dirname, '..');
const game = 'file://' + path.join(root, 'app/src/main/assets/index.html');
const out = f => path.join(root, 'store', f);

(async () => {
  const b = await chromium.launch();
  const page = async (vp, dpr) => {
    const p = await b.newPage({viewport: vp, deviceScaleFactor: dpr, reducedMotion: 'reduce'});
    await p.addInitScript(() => {
      window.AndroidApp = {versionName: () => '1.0', startUpdate() {}, checkUpdates() {}, setUpdateNotifications() {}};
      localStorage.setItem('wallet', JSON.stringify({gold: 2400, owned: ['classic', 'knight', 'king'], fig: 'knight', daily: new Date().toISOString().slice(0, 10)}));
      localStorage.setItem('setup', JSON.stringify({n: 3, seats: [{name: 'Аня', human: true}, {name: 'Маша', human: false}, {name: 'Дима', human: false}, {name: 'Лёша', human: false}, {name: 'Катя', human: false}], rules: {deck: 0, rivers: true, meeples: 7, timer: 0, hints: true}}));
    });
    await p.goto(game); await p.waitForTimeout(700);
    return p;
  };

  // Phone screenshots 1080x1920.
  const p = await page({width: 360, height: 640}, 3);
  await p.addStyleTag({content: '.mini{animation:none!important;transform:rotateX(56deg) rotateZ(-8deg) scale3d(.8,.8,.8)!important}'});
  await p.screenshot({path: out('screenshots/1-menu.png')});
  await p.click('#playBtn'); await p.waitForTimeout(200);
  await p.screenshot({path: out('screenshots/4-setup.png')});
  await p.click('#scr-setup [data-go="menu"]'); await p.click('[data-go="shop"]'); await p.waitForTimeout(300);
  await p.screenshot({path: out('screenshots/6-shop.png')});
  await p.click('#scr-shop [data-go="menu"]'); await p.click('#playBtn'); await p.waitForTimeout(200);
  await p.click('#start'); await p.waitForTimeout(500);
  // Play our turns until the kingdom has grown.
  for (let i = 0; i < 40 && (await p.$$('#world .tile:not(.ghost)')).length < 22; i++) {
    await p.waitForFunction(() => document.querySelector('.slot') || !document.querySelector('#mrow').hidden, null, {timeout: 20000});
    if (await p.$eval('#mrow', x => !x.hidden)) { await p.click('#mrow .chip.skip'); continue; }
    // Tap a highlighted spot that is fully on screen (not under the buttons or the tray); pan if none is.
    const spot = await p.evaluate(() => {
      const br = document.querySelector('#board').getBoundingClientRect();
      const ok = [...document.querySelectorAll('.slot')].map(s => s.getBoundingClientRect())
        .map(r => ({x: r.x + r.width / 2, y: r.y + r.height / 2})).filter(c => c.x > br.left + 30 && c.x < br.right - 60 && c.y > br.top + 40 && c.y < br.bottom - 30)
        .filter(c => document.elementFromPoint(c.x, c.y)?.closest('.slot'));
      return ok[0] || null;
    });
    if (!spot) { await p.click('#ctr'); await p.click('#zout'); await p.waitForTimeout(400); continue; }
    await p.mouse.click(spot.x, spot.y); await p.waitForTimeout(150);
    if (await p.$eval('#ok', x => x.disabled)) continue;
    await p.click('#ok'); await p.waitForTimeout(300);
    if (await p.$eval('#mrow', x => !x.hidden)) {
      const chips = await p.$$('#mrow .chip:not(.skip)');
      await (i % 2 && chips.length ? chips[0] : await p.$('#mrow .chip.skip')).click();
    }
  }
  await p.waitForFunction(() => document.querySelector('.slot'), null, {timeout: 20000});
  await p.click('#ctr'); await p.waitForTimeout(700);
  await p.evaluate(() => document.querySelector('#hint').classList.add('gone'));
  await p.screenshot({path: out('screenshots/2-game.png')});
  await p.evaluate(() => { const b = document.createElement('button'); b.dataset.go = 'results'; document.body.append(b); b.click(); b.remove(); });
  await p.waitForTimeout(300);
  await p.screenshot({path: out('screenshots/5-results.png')});

  // Icon 512x512: the menu's little 3D kingdom on the brand background.
  const ic = await page({width: 360, height: 640}, 2);
  await ic.addStyleTag({content: `.mini{animation:none!important;transform:rotateX(50deg) rotateZ(-10deg) scale3d(.95,.95,.95)!important}
    #scr-menu{background:radial-gradient(circle at 50% 45%,#3a4f86,#141b33 75%)!important}.mbody,.sbar,.goldchip{visibility:hidden}.hero{flex:0 0 100%!important}`});
  await ic.waitForTimeout(300);
  await ic.screenshot({path: out('icon-512.png'), clip: {x: 52, y: 215, width: 256, height: 256}});

  // Feature graphic 1024x500.
  const fg = await page({width: 1024, height: 500}, 1);
  await fg.addStyleTag({content: `html.app .phone{position:fixed;inset:0}#scr-menu{background:radial-gradient(90% 120% at 75% 40%,#3a4f86,#141b33 70%)!important;flex-direction:row-reverse!important}
    .hero{flex:0 0 55%!important}.mini{animation:none!important;transform:rotateX(55deg) rotateZ(-12deg) scale3d(1.25,1.25,1.25)!important;top:58%!important}
    .mbody{flex:0 0 45%!important;justify-content:center;padding:0 0 0 56px!important}.mbtn,.mfoot,.mrow2,.goldchip{display:none!important}.logo{font-size:56px!important}.tag{font-size:18px!important;max-width:360px}`});
  await fg.waitForTimeout(300);
  await fg.screenshot({path: out('feature-1024x500.png')});
  await b.close();
})();
