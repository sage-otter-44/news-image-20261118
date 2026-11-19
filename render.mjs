// Build-time render script (not part of the entry program): rasterises build.html
// (the SVG front page) to entry.png at 1024x1024 with headless Chromium.
// Usage: node render.mjs
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const dir = dirname(fileURLToPath(import.meta.url));
const chrome = process.env.CHROME_PATH ?? `${process.env.HOME}/.cache/ms-playwright/chromium_headless_shell-1255/chrome-headless-shell-linux64/chrome-headless-shell`;
execFileSync(chrome, [
  '--headless', '--disable-gpu', '--no-sandbox',
  `--screenshot=${join(dir, 'entry.png')}`,
  '--window-size=1024,1024', '--force-device-scale-factor=1', '--hide-scrollbars',
  `file://${join(dir, 'build.html')}`,
], { stdio: 'inherit' });
console.log('wrote entry.png');
