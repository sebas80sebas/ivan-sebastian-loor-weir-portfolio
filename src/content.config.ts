/**
 * Content model.
 *
 * All long-form, bilingual content lives in YAML under src/content/ and is
 * validated here at build time — a missing translation or a malformed date
 * fails the build instead of shipping a broken page.
 *
 *   profile.yaml          → About section copy, principles, languages
 *   experience.yaml       → career timeline
 *   certifications.yaml   → proctored professional certifications ONLY
 *   learning.yaml         → focus areas + course completions (not certifications)
 *   skills.yaml           → technology domains with usage context
 *   education.yaml        → degrees
 *   projects/*.yaml       → one file per project / case study (+ diagram data)
 */
import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

/* ---- Shared helpers -------------------------------------------------------- */
// strictObject: an unexpected key (e.g. a YAML flow mapping split by a comma) fails the build.
const l10n = z.strictObject({ en: z.string().min(1), es: z.string().min(1) });
const l10nList = z.strictObject({ en: z.array(z.string().min(1)), es: z.array(z.string().min(1)) });
const isoMonth = z.string().regex(/^\d{4}-\d{2}(-\d{2})?$/, 'Use YYYY-MM or YYYY-MM-DD');
const url = z.string().url();

/* ---- Profile (About section copy) ----------------------------------------- */
const profile = defineCollection({
  loader: file('src/content/profile.yaml'),
  schema: z.object({
    paragraphs: l10nList,
    principles: l10nList,
    languages: z.array(z.object({ name: l10n, level: l10n, credential: l10n.optional(), url: url.optional() })),
    focus: l10n,
  }),
});

/* ---- Experience -------------------------------------------------------------- */
const experience = defineCollection({
  loader: file('src/content/experience.yaml'),
  schema: z.object({
    order: z.number(),
    company: z.string(),
    role: l10n,
    start: isoMonth,
    end: isoMonth.nullable(),
    location: l10n,
    workMode: l10n,
    area: l10n,
    /** Real client names — rendered only when site.showClientNames is true. */
    clients: z.array(z.string()).default([]),
    /** Anonymised description used on the public site by default. */
    clientsAnonymized: l10n,
    summary: l10n,
    highlights: l10nList,
    stack: z.array(z.string()),
    projects: z.array(z.string()).default([]),
  }),
});

/* ---- Certifications ---------------------------------------------------------- */
const certifications = defineCollection({
  loader: file('src/content/certifications.yaml'),
  schema: z.object({
    order: z.number(),
    code: z.string(),
    name: z.string(),
    issuer: z.enum(['Microsoft', 'HashiCorp', 'GitHub', 'Anthropic']),
    level: l10n,
    earned: isoMonth.optional(),
    validUntil: isoMonth.optional(),
    score: z.number().optional(),
    maxScore: z.number().optional(),
    highlight: z.boolean().default(false),
    verifyUrl: url.optional(),
    domain: l10n,
  }),
});

/* ---- Learning (NOT certifications) ------------------------------------------ */
const learning = defineCollection({
  loader: file('src/content/learning.yaml'),
  schema: z.object({
    kind: z.enum(['focus', 'course']),
    order: z.number(),
    title: l10n,
    provider: z.string().optional(),
    description: l10n.optional(),
  }),
});

/* ---- Skills ------------------------------------------------------------------ */
const skillContext = z.enum(['professional', 'academic', 'personal', 'certified']);
const skills = defineCollection({
  loader: file('src/content/skills.yaml'),
  schema: z.object({
    order: z.number(),
    title: l10n,
    summary: l10n,
    items: z.array(
      z.object({
        name: z.string(),
        context: z.array(skillContext).min(1),
        usage: l10n,
      }),
    ),
  }),
});

/* ---- Education --------------------------------------------------------------- */
const education = defineCollection({
  loader: file('src/content/education.yaml'),
  schema: z.object({
    order: z.number(),
    institution: z.string(),
    degree: l10n,
    start: z.string(),
    end: z.string(),
    location: l10n,
    description: l10n.optional(),
    thesis: z
      .object({
        title: l10n,
        grade: z.string(),
        date: isoMonth,
        project: z.string(),
        summary: l10n,
        /** Public PDF of the thesis, relative to /public. */
        pdf: z.string().optional(),
      })
      .optional(),
    honours: l10n.optional(),
  }),
});

/* ---- Projects & case studies ------------------------------------------------- */
const nodeKind = z.enum(['source', 'pipeline', 'security', 'azure', 'platform', 'data', 'observe', 'external', 'device']);

const diagram = z.object({
  title: l10n,
  description: l10n,
  /** Optional honesty note shown under the figure (e.g. "logical view"). */
  note: l10n.optional(),
  width: z.number(),
  height: z.number(),
  groups: z
    .array(
      z.object({
        /** Optional id so edges can target a whole group. */
        id: z.string().optional(),
        label: z.union([z.string(), l10n]),
        x: z.number(),
        y: z.number(),
        w: z.number(),
        h: z.number(),
        tone: z.enum(['neutral', 'accent', 'signal']).default('neutral'),
      }),
    )
    .default([]),
  nodes: z.array(
    z.object({
      id: z.string(),
      label: z.union([z.string(), l10n]),
      sub: z.union([z.string(), l10n]).optional(),
      x: z.number(),
      y: z.number(),
      w: z.number().default(150),
      h: z.number().default(52),
      kind: nodeKind,
    }),
  ),
  edges: z.array(
    z.object({
      from: z.string(),
      to: z.string(),
      label: z.union([z.string(), l10n]).optional(),
      dashed: z.boolean().default(false),
      /** Connector routing: h(orizontal), v(ertical), hv/vh elbows, u = loop under. Inferred if omitted. */
      route: z.enum(['h', 'v', 'hv', 'vh', 'u']).optional(),
    }),
  ),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    featured: z.boolean().default(false),
    type: z.enum(['professional', 'academic', 'personal']),
    category: l10n,
    title: l10n,
    summary: l10n,
    role: l10n,
    period: z.string(),
    org: l10n.optional(),
    stack: z.array(z.string()),
    repo: url.optional(),
    /** Extra public links shown on the case-study page (additional repositories, PDFs). */
    links: z
      .array(
        z.object({
          label: z.union([z.string(), l10n]),
          href: z.string(),
          kind: z.enum(['github', 'pdf']).default('github'),
        }),
      )
      .default([]),
    /** Short outcome line for cards. */
    outcome: l10n.optional(),
    /** Present ⇒ the project gets a dedicated case-study page. */
    caseStudy: z
      .object({
        overview: l10n,
        context: l10n,
        problem: l10n,
        responsibilities: l10nList,
        architecture: l10n,
        diagram: diagram.optional(),
        stackGroups: z.array(z.object({ label: l10n, items: z.array(z.string()) })),
        implementation: l10nList,
        challenges: z.array(z.object({ challenge: l10n, decision: l10n })),
        security: l10nList,
        operations: l10nList,
        results: l10nList,
        resultsTable: z
          .object({
            caption: l10n,
            columns: l10nList,
            rows: z.array(z.array(z.string())),
            source: l10n,
          })
          .optional(),
        lessons: l10nList,
        confidential: z.boolean().default(false),
      })
      .optional(),
  }),
});

export const collections = { profile, experience, certifications, learning, skills, education, projects };
