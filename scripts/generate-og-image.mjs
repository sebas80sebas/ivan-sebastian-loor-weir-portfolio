/**
 * Renders the Open Graph image (public/og-image.png, 1200×630) from
 * scripts/og/og-image.html with headless Chrome, so the preview uses the
 * same self-hosted typefaces as the website. The same image is used by the
 * site's og:image / twitter:image and by LinkedIn "Featured" link previews.
 *
 * Requirements: Google Chrome or Chromium installed locally. Override the
 * binary with CHROME_PATH=/path/to/chrome.
 *
 * Usage: npm run og
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';

const root = resolve(import.meta.dirname, '..');
const out = join(root, 'public/og-image.png');

const chrome =
  process.env.CHROME_PATH ??
  ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'].find(
    (bin) => {
      try {
        execFileSync(bin, ['--version'], { stdio: 'ignore' });
        return true;
      } catch {
        return false;
      }
    },
  );
if (!chrome) {
  console.error('Chrome/Chromium not found. Set CHROME_PATH to the browser binary.');
  process.exit(1);
}

// Certification count comes from the content source so the badge never drifts.
const certCount = (readFileSync(join(root, 'src/content/certifications.yaml'), 'utf8').match(/^- id:/gm) ?? []).length;

const work = mkdtempSync(join(tmpdir(), 'islw-og-'));
try {
  const html = readFileSync(join(root, 'scripts/og/og-image.html'), 'utf8')
    .replaceAll('{{FONTS}}', pathToFileURL(join(root, 'node_modules/@fontsource')).href)
    .replaceAll('{{PHOTO}}', pathToFileURL(join(root, 'src/assets/profile.jpg')).href)
    .replaceAll('{{CERTS}}', String(certCount));
  const page = join(work, 'og.html');
  writeFileSync(page, html);

  const raw = join(work, 'og-raw.png');
  execFileSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--hide-scrollbars',
      '--allow-file-access-from-files',
      `--user-data-dir=${join(work, 'profile')}`,
      '--force-device-scale-factor=1',
      '--window-size=1200,630',
      '--virtual-time-budget=4000',
      `--screenshot=${raw}`,
      pathToFileURL(page).href,
    ],
    { stdio: 'ignore' },
  );
  if (!existsSync(raw)) throw new Error('Chrome did not produce a screenshot.');

  await sharp(raw).resize(1200, 630).png({ compressionLevel: 9, palette: false }).toFile(out);
  console.log(`OG image written to ${out} (${certCount} certifications).`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
