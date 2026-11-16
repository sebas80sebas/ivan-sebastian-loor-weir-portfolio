// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Public site URL. Used for canonical URLs, hreflang, Open Graph and the sitemap.
 * Override in Cloudflare Pages with the SITE_URL environment variable once a
 * custom domain is configured (e.g. https://www.example.com).
 */
const SITE = process.env.SITE_URL ?? 'https://ivan-sebastian-loor-weir-portfolio.pages.dev';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', es: 'es' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
