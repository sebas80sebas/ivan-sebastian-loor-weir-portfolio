/**
 * Global site configuration.
 *
 * Personal/contact data and publication flags live here so that the
 * components never hard-code them. Everything in this file is PUBLIC — it is
 * rendered into the website. Do not add private data.
 */

export const site = {
  name: 'Iván Sebastián Loor Weir',
  shortName: 'Iván Loor Weir',
  initials: 'ISLW',
  jobTitle: {
    en: 'Cloud DevSecOps Engineer',
    es: 'Cloud DevSecOps Engineer',
  },
  employer: 'ALIANDO',
  positioning: 'Azure · Infrastructure as Code · Cloud Security · Kubernetes',
  location: {
    en: 'Madrid, Spain',
    es: 'Madrid, España',
  },
  locality: 'Madrid',
  countryCode: 'ES',

  contact: {
    email: 'sebas80sebas@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ivansebastianloorweir',
    github: 'https://github.com/sebas80sebas',
  },

  /**
   * CV files, served from /public/cv/. A CV button is only rendered when the
   * corresponding file exists at build time (see src/lib/cv.ts), so the site
   * never links to a missing file. To publish a CV, drop an approved PDF at
   * the path below and rebuild — no component changes required.
   */
  cv: {
    en: '/cv/ivan-sebastian-loor-weir-cv-en.pdf',
    es: '/cv/ivan-sebastian-loor-weir-cv-es.pdf',
  },

  /**
   * Client names appear in the private CV but are anonymised on the public
   * site by default. Set to `true` only after confirming that each client
   * (and project name) may be disclosed publicly.
   */
  showClientNames: false,

  /** Default social preview image (1200×630), relative to /public. */
  ogImage: '/og-image.png',
} as const;

export type Site = typeof site;
