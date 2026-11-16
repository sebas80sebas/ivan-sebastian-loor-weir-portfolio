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
  markdown: { syntaxHighlight: false }, // no Markdown code blocks are rendered; avoids Shiki inline styles under CSP
  security: {
    // Hash-based Content-Security-Policy generated at build time for every
    // inline script/style Astro emits. Complemented by HTTP headers in
    // public/_headers (frame-ancestors, HSTS, etc. cannot be set via <meta>).
    csp: {
      algorithm: 'SHA-256',
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        'upgrade-insecure-requests',
      ],
      styleDirective: {
        // CSS custom properties set via style="" attributes (animation offsets, diagram sizing).
        resources: [{ resource: "'unsafe-inline'", kind: 'attribute' }],
      },
    },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', es: 'es' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
