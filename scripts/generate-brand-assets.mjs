/**
 * Generates raster brand assets from SVG sources using sharp:
 *   public/favicon-32.png, public/apple-touch-icon.png, public/icon-512.png
 *
 * The Open Graph image is rendered separately with headless Chrome so it can
 * use the site's web fonts — see scripts/generate-og-image.mjs (npm run og).
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

console.log('Brand icons generated. (The OG image is rendered separately: npm run og)');
