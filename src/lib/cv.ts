import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { site } from '@/config/site';
import type { Lang } from '@/i18n/ui';

export interface CvLink {
  lang: Lang;
  href: string;
}

/**
 * Returns the CV files that actually exist in /public at build time.
 * Components render download buttons only for these, so the site never links
 * to a missing file. Order: the requested language first.
 */
export function availableCvs(preferred: Lang): CvLink[] {
  const entries = (Object.entries(site.cv) as [Lang, string][])
    .filter(([, href]) => existsSync(join(process.cwd(), 'public', href)))
    .map(([lang, href]) => ({ lang, href }));
  return entries.sort((a, b) => (a.lang === preferred ? -1 : b.lang === preferred ? 1 : 0));
}

/** mailto: link used as a fallback when no CV file is published. */
export function cvRequestHref(subject: string): string {
  return `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}`;
}
