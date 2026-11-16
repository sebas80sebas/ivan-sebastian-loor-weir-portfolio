/**
 * Schema.org structured data. Only verifiable facts are emitted — no ratings,
 * reviews or fabricated metrics.
 */
import { site } from '@/config/site';
import type { Lang } from '@/i18n/ui';

interface Cert {
  name: string;
  issuer: string;
  verifyUrl?: string;
}

export function personSchema(siteUrl: string, lang: Lang, certs: Cert[] = []) {
  return {
    '@type': 'Person',
    '@id': `${siteUrl}#person`,
    name: site.name,
    givenName: 'Iván Sebastián',
    familyName: 'Loor Weir',
    jobTitle: site.jobTitle[lang],
    description: `${site.jobTitle[lang]} — ${site.positioning}`,
    url: siteUrl,
    image: new URL('/og-image.png', siteUrl).href,
    email: `mailto:${site.contact.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.locality,
      addressCountry: site.countryCode,
    },
    worksFor: { '@type': 'Organization', name: site.employer },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universidad Carlos III de Madrid',
      sameAs: 'https://www.uc3m.es',
    },
    knowsLanguage: ['es', 'en'],
    knowsAbout: [
      'Terraform',
      'Infrastructure as Code',
      'Microsoft Azure',
      'Azure Verified Modules',
      'Azure DevOps',
      'GitHub Actions',
      'DevSecOps',
      'Cloud security',
      'OpenShift',
      'Kubernetes',
      'Azure Monitor',
      'Zabbix',
      'Python',
      'PowerShell',
    ],
    sameAs: [site.contact.linkedin, site.contact.github],
    hasCredential: certs.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.name,
      credentialCategory: 'certification',
      recognizedBy: { '@type': 'Organization', name: c.issuer },
      ...(c.verifyUrl ? { url: c.verifyUrl } : {}),
    })),
  };
}

export function websiteSchema(siteUrl: string, lang: Lang) {
  return {
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    url: siteUrl,
    name: site.name,
    inLanguage: lang,
    author: { '@id': `${siteUrl}#person` },
  };
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
