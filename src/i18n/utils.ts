import { defaultLang, langs, ui, type Lang, type UIKey } from './ui';

/** Localised value: one string (or any value) per language. */
export type Localized<T = string> = Record<Lang, T>;

/** Detect the language from a URL pathname (`/es/...` → `es`). */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return (langs as string[]).includes(first) ? (first as Lang) : defaultLang;
}

/** Returns a translator bound to a language. Falls back to English. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key];
  };
}

/** Pick the value for `lang` from a localised field. */
export function l<T>(value: Localized<T>, lang: Lang): T {
  return value[lang] ?? value[defaultLang];
}

/**
 * Build a localised path from a language-neutral path.
 *   localizePath('/projects/foo/', 'es') → '/es/projects/foo/'
 *   localizePath('/', 'en')              → '/'
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const withSlash = clean.endsWith('/') || clean.includes('#') ? clean : `${clean}/`;
  return lang === defaultLang ? withSlash : `/${lang}${withSlash === '/' ? '/' : withSlash}`;
}

/** Strip the language prefix from a pathname → language-neutral path. */
export function neutralPath(pathname: string): string {
  const parts = pathname.split('/');
  if ((langs as string[]).includes(parts[1]) && parts[1] !== defaultLang) {
    parts.splice(1, 1);
  }
  const joined = parts.join('/') || '/';
  return joined.startsWith('/') ? joined : `/${joined}`;
}

/** Equivalent URL of the current page in every language (for hreflang + switcher). */
export function alternates(url: URL): Record<Lang, string> {
  const neutral = neutralPath(url.pathname);
  return Object.fromEntries(langs.map((lang) => [lang, localizePath(neutral, lang)])) as Record<Lang, string>;
}

/** Format a YYYY-MM or YYYY-MM-DD date for display. */
export function formatDate(iso: string, lang: Lang, opts: { day?: boolean } = {}): string {
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1));
  const locale = lang === 'es' ? 'es-ES' : 'en-GB';
  const formatted = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: opts.day && d ? 'numeric' : undefined,
    timeZone: 'UTC',
  }).format(date);
  return formatted.replace('.', '');
}
