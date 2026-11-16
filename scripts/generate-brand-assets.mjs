/**
 * Generates raster brand assets from SVG sources using sharp:
 *   public/favicon-32.png, public/apple-touch-icon.png, public/icon-512.png,
 *   public/og-image.png (1200×630 social preview)
 *
 * Note: sharp's bundled libvips renders SVG text with the system's default
 * fonts, so the OG image uses the closest available sans/mono families rather
 * than the self-hosted web fonts. Re-run after changing the favicon or copy.
 *
 * Usage: npm run brand
 */
import { readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import sharp from 'sharp';

const root = resolve(import.meta.dirname, '..');

const favicon = readFileSync(join(root, 'public/favicon.svg'));
await sharp(favicon, { density: 300 }).resize(32, 32).png().toFile(join(root, 'public/favicon-32.png'));
await sharp(favicon, { density: 600 }).resize(180, 180).png().toFile(join(root, 'public/apple-touch-icon.png'));
await sharp(favicon, { density: 1200 }).resize(512, 512).png().toFile(join(root, 'public/icon-512.png'));

// ---- Social preview --------------------------------------------------------
const letters = `
  <g fill="none" stroke="#F4F2EC" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 13.5V29.5"/>
    <path d="M47.5 16.2C45.4 13.4 37.6 12.6 37.6 17.4c0 5 10.4 3.8 10.4 9.2 0 5.2-8.6 5.1-10.9 2.2"/>
    <path d="M15 35.5V51.5h12"/>
    <path d="M35.6 35.5l3.6 16 3.8-11 3.8 11 3.6-16"/>
  </g>
  <circle cx="32" cy="32.5" r="2.6" fill="#4FD1E0"/>`;

const grid = Array.from({ length: 40 }, (_, i) => `<path d="M${i * 32} 0V630" />`).join('') +
  Array.from({ length: 20 }, (_, i) => `<path d="M0 ${i * 32}H1200" />`).join('');

const stages = ['commit', 'plan', 'scan', 'apply'];
const envs = ['sbx', 'dev', 'qa', 'pre', 'prod'];
const pipeline = stages
  .map((s, i) => {
    const x = 690 + i * 120;
    return `<rect x="${x}" y="392" width="96" height="40" rx="6" fill="#101A29" stroke="#22314A"/>
      <text x="${x + 48}" y="417" text-anchor="middle" font-family="IBM Plex Mono" font-weight="500" font-size="15" fill="#E9EDF3">${s}</text>
      ${i < stages.length - 1 ? `<path d="M${x + 98} 412H${x + 118}" stroke="#4FD1E0" stroke-width="2"/>` : ''}`;
  })
  .join('');
const envRow = envs
  .map((e, i) => {
    const x = 690 + i * 96;
    return `<rect x="${x}" y="462" width="84" height="34" rx="17" fill="none" stroke="${i === 4 ? '#4FD1E0' : '#22314A'}"/>
      <text x="${x + 42}" y="484" text-anchor="middle" font-family="IBM Plex Mono" font-size="14" fill="${i === 4 ? '#4FD1E0' : '#9AA6B8'}">${e}</text>`;
  })
  .join('');

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0A111C"/>
  <g stroke="#E9EDF3" stroke-opacity="0.045">${grid}</g>
  <rect x="0" y="0" width="1200" height="6" fill="#4FD1E0"/>
  <g transform="translate(80 80) scale(1.25)"><rect width="64" height="64" rx="14" fill="#101A29" stroke="#22314A"/>${letters}</g>
  <text x="80" y="268" font-family="IBM Plex Sans" font-weight="600" font-size="62" fill="#E9EDF3" letter-spacing="-1.2">Iván Sebastián</text>
  <text x="80" y="340" font-family="IBM Plex Sans" font-weight="600" font-size="62" fill="#E9EDF3" letter-spacing="-1.2">Loor Weir</text>
  <text x="80" y="412" font-family="Instrument Serif" font-style="italic" font-size="40" fill="#4FD1E0">Cloud DevSecOps Engineer</text>
  <text x="80" y="470" font-family="IBM Plex Mono" font-weight="500" font-size="19" fill="#9AA6B8">Azure · Infrastructure as Code · Cloud Security · Kubernetes</text>
  <text x="80" y="560" font-family="IBM Plex Mono" font-weight="500" font-size="16" fill="#9AA6B8" letter-spacing="1.5">MADRID, SPAIN</text>
  ${pipeline}
  ${envRow}
</svg>`;

await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile(join(root, 'public/og-image.png'));
console.log('Brand assets generated.');
