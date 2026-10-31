// Renders the launcher icon (store/src/*.svg) into Android mipmaps and the 512px Play Store icon.
// Usage: node scripts/render-icons.cjs   (needs Playwright)
const fs = require('fs'), path = require('path');
const { chromium } = require(process.env.PLAYWRIGHT || 'playwright');
const root = path.resolve(__dirname, '..'), res = path.join(root, 'app/src/main/res');
const svg = f => 'data:image/svg+xml;base64,' + fs.readFileSync(path.join(root, 'store/src', f)).toString('base64');
const DENS = {mdpi: 1, hdpi: 1.5, xhdpi: 2, xxhdpi: 3, xxxhdpi: 4};

(async () => {
  const b = await chromium.launch();
  const shot = async (file, size, out, css = '') => {
    const p = await b.newPage({viewport: {width: size, height: size}});
    await p.setContent(`<body style="margin:0;background:transparent"><img src="${svg(file)}" style="width:${size}px;height:${size}px;display:block;${css}"></body>`);
    await p.waitForTimeout(100);
    fs.mkdirSync(path.dirname(out), {recursive: true});
    await p.screenshot({path: out, omitBackground: true});
    await p.close();
  };
  for (const [d, k] of Object.entries(DENS)) {
    const dir = path.join(res, 'mipmap-' + d);
    await shot('icon-foreground.svg', 108 * k, path.join(dir, 'ic_launcher_foreground.png'));
    await shot('icon-background.svg', 108 * k, path.join(dir, 'ic_launcher_background.png'));
    // Icons for Android 7.x, which has no adaptive icons.
    await shot('icon.svg', 48 * k, path.join(dir, 'ic_launcher.png'), 'border-radius:18%');
    await shot('icon.svg', 48 * k, path.join(dir, 'ic_launcher_round.png'), 'border-radius:50%');
  }
  await shot('icon.svg', 512, path.join(root, 'store/icon-512.png'));
  // Web / PWA icons: the same artwork (maskable is full-bleed; the content already sits inside the safe zone).
  const W = path.join(root, 'web/icons');
  await shot('icon.svg', 192, path.join(W, 'icon-192.png'), 'border-radius:18%');
  await shot('icon.svg', 512, path.join(W, 'icon-512.png'), 'border-radius:18%');
  await shot('icon.svg', 512, path.join(W, 'maskable-512.png'));
  await shot('icon.svg', 180, path.join(W, 'apple-touch-icon.png'));
  await shot('icon.svg', 32, path.join(W, 'favicon-32.png'), 'border-radius:18%');
  await b.close();
})();
