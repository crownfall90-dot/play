// Bundles src/ into one IIFE (window.PG). It is inlined into the page by scripts/wrap-web.sh, so the
// Android WebView keeps loading a single file:// page with no module requests (TASK-008, strangler step).
import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    target: 'es2019', // old Android System WebViews
    outDir: 'build/bundle',
    emptyOutDir: true,
    minify: true,
    lib: {entry: 'src/main.js', name: 'PG', formats: ['iife'], fileName: () => 'pg.js'},
  },
});
