# Iván Sebastián Loor Weir — Cloud DevSecOps Portfolio

Bilingual (English / Spanish) personal portfolio of **Iván Sebastián Loor Weir**, Cloud DevSecOps Engineer at ALIANDO.

> **Cloud DevSecOps Engineer · Azure · Infrastructure as Code · Cloud Security · Kubernetes**

A static, dependency-light website built with Astro and deployed on Cloudflare Pages. It presents professional experience, technical case studies with architecture diagrams, verified certifications, skills and education. All the content is structured, schema-validated data rather than hard-coded markup.

---

## Contents

1. [Project overview](#1-project-overview)
2. [Features](#2-features)
3. [Technology stack](#3-technology-stack)
4. [Repository structure](#4-repository-structure)
5. [Getting started](#5-getting-started)
6. [Available scripts](#6-available-scripts)
7. [Content management](#7-content-management)
8. [Internationalization](#8-internationalization)
9. [Deployment (Cloudflare Pages)](#9-deployment-cloudflare-pages)
10. [Security and privacy](#10-security-and-privacy)
11. [Performance, accessibility and SEO](#11-performance-accessibility-and-seo)
12. [Maintenance](#12-maintenance)
13. [License](#13-license)

---

## 1. Project overview

**Purpose.** Give recruiters, engineering managers and architects a fast, credible picture of a Cloud DevSecOps profile. The site centres on real engineering work: Infrastructure as Code, CI/CD, cloud security, observability automation and container platforms. It is not a list of logos.

**Positioning.** Azure platforms delivered as code (Terraform, Azure Verified Modules, Azure DevOps, GitHub Actions), with security designed into modules and pipelines, and a background in automating monitoring and remediation. The positioning points towards cloud architecture and managed Kubernetes without overstating seniority.

**Objectives.**

- Understand the profile in seconds (hero, positioning, documented facts).
- Show engineering depth through case studies that cover context, decisions, security, operations and results.
- Present certifications accurately: proctored exams only, each with a verification link. Courses are listed separately.
- Protect client confidentiality. Professional work is anonymised by default.

**Languages.** English (default, at `/`) and Spanish (at `/es/`). Every page has an equivalent in the other language.

## 2. Features

| Area | What is implemented |
|---|---|
| Responsive design | Fluid type and spacing scales; layouts tested from 360 px to wide desktop. |
| Localization | Full EN/ES content, a language switch that keeps the current page and section, and `hreflang` alternates. |
| Experience | Career timeline, an anonymised-client toggle, highlights and links to related case studies. |
| Projects | Featured case-study grid with type filters (professional / academic), plus a compact archive of smaller projects linked to GitHub. |
| Case studies | Seven detailed pages: overview, context, problem, responsibilities, architecture and diagram, stack, implementation, challenges and decisions, security, operations, results (with an optional data table) and lessons learned. |
| Architecture diagrams | Data-driven inline SVG with auto-routed connectors, a legend, a confidentiality note, a full text alternative and hover highlighting. |
| Certifications | Grouped by issuer, with verified dates, highlighted scores and links to the issuer's verification page. |
| Skills | Grouped by domain. Each technology shows its usage context (professional / academic / personal / certified) and a description. There are no percentages. |
| Education and learning | Degree with a thesis panel; focus areas and course completions kept apart from certifications. |
| Contact and CV | Email, LinkedIn and GitHub. CV download buttons appear only when an approved PDF exists; otherwise a "Request CV" email link is shown. |
| Theme | Light and dark themes that follow the OS by default, with a manual toggle and no flash of the wrong theme. |
| Motion | CSS-only hero animation and scroll reveal. All motion is disabled under `prefers-reduced-motion`. |
| SEO | Canonical URLs, `hreflang` (with `x-default`), Open Graph and Twitter cards, JSON-LD (`Person`, `WebSite`, `ProfilePage`, `TechArticle`, `BreadcrumbList`), sitemap and robots.txt. |
| Security | Hash-based Content-Security-Policy generated per page, strict security headers and no third-party requests. |

## 3. Technology stack

| Layer | Technology |
|---|---|
| Framework | [Astro 7](https://astro.build) (static site generation) |
| Language | TypeScript (strict), Astro components |
| Content | Astro content collections (YAML), validated with Zod (`astro/zod`) |
| Styling | Hand-written CSS with design tokens (`src/styles/tokens.css`), component-scoped styles. No CSS framework. |
| Fonts | IBM Plex Sans, IBM Plex Mono and Instrument Serif, self-hosted via `@fontsource` |
| Images | `astro:assets` (responsive WebP via `sharp`) |
| Diagrams | Custom SVG renderer (`src/components/Diagram.astro`). No diagram runtime is shipped. |
| Animation | CSS only. No animation libraries. |
| SEO | `@astrojs/sitemap`, custom `Seo.astro` and JSON-LD helpers |
| Tooling | `@astrojs/check`, TypeScript, Node.js 22 |
| Hosting | Cloudflare Pages |

Client-side JavaScript is limited to small progressive enhancements: theme toggle, mobile menu, active-section highlighting, project filters, diagram hover and scroll reveal.

## 4. Repository structure

```text
ivan-sebastian-loor-weir-portfolio/
├── public/                      # Static files copied verbatim to the build
│   ├── _headers                 # Cloudflare Pages security & cache headers
│   ├── favicon.svg              # ISLW monogram (source of all icons)
│   ├── favicon-32.png, apple-touch-icon.png, icon-512.png
│   ├── og-image.png             # 1200×630 social preview (generated)
│   ├── site.webmanifest
│   └── cv/                      # (optional) approved public CV PDFs — see §7
├── scripts/
│   └── generate-brand-assets.mjs  # Rebuilds PNG icons + OG image from SVG
├── src/
│   ├── assets/                  # Images processed by astro:assets (profile photo)
│   ├── components/
│   │   ├── home/                # Home sections: Hero, About, Experience, Projects,
│   │   │                        #   Certifications, Skills, Education, Learning, Contact
│   │   ├── case/                # Case-study page template
│   │   ├── Diagram.astro        # Data-driven architecture diagram renderer
│   │   ├── Header / Footer / LanguageSwitcher / ThemeToggle / Seo / Icon / Monogram
│   │   └── ProjectCard / ProjectArchive / ProjectsIndexPage / SectionHeader
│   ├── config/site.ts           # Public identity, contact links, CV paths, flags
│   ├── content/                 # All bilingual content (YAML)
│   │   ├── profile.yaml         # About copy, principles, languages
│   │   ├── experience.yaml      # Career timeline
│   │   ├── certifications.yaml  # Proctored certifications ONLY
│   │   ├── learning.yaml        # Focus areas + course completions
│   │   ├── skills.yaml          # Technology domains with usage context
│   │   ├── education.yaml
│   │   └── projects/*.yaml      # One file per project / case study (+ diagram)
│   ├── content.config.ts        # Collection schemas (build fails on invalid content)
│   ├── i18n/
│   │   ├── ui.ts                # Interface strings (EN/ES)
│   │   └── utils.ts             # Translation, localized paths, hreflang, dates
│   ├── layouts/BaseLayout.astro # <html>, <head>, header, main, footer
│   ├── lib/                     # cv.ts, projects.ts, schema.ts (JSON-LD)
│   ├── pages/                   # Routes: /, /projects/, /projects/[slug]/,
│   │                            #   /es/…, 404, robots.txt
│   └── styles/                  # tokens.css, global.css, fonts.css
├── docs/                        # PRIVATE reference material — git-ignored, never committed
├── .env.example                 # Documented (public) build-time variables
├── .gitignore
├── .nvmrc                       # Node.js version (22.x, required by Astro 7)
├── astro.config.mjs             # Site URL, i18n, CSP, sitemap
├── package.json
├── tsconfig.json
└── README.md
```

## 5. Getting started

**Prerequisites**

- Node.js **22.23.4 or later** (see `.nvmrc`; Astro 7 requires Node 22). With nvm: `nvm install && nvm use`.
- npm 10+.

**Install and run**

```bash
git clone <repository-url> ivan-sebastian-loor-weir-portfolio
cd ivan-sebastian-loor-weir-portfolio
nvm use            # or make sure Node 22 is active
npm ci             # install exact, locked dependencies
npm run dev        # http://localhost:4321
```

**Production build and local preview**

```bash
npm run build      # outputs the static site to dist/
npm run preview    # serves dist/ at http://localhost:4321
```

## 6. Available scripts

| Script | Command | Purpose |
|---|---|---|
| `npm run dev` / `npm start` | `astro dev` | Development server with hot reload |
| `npm run build` | `astro build` | Static production build into `dist/` |
| `npm run preview` | `astro preview` | Serve the production build locally |
| `npm run check` | `astro check` | Type-check `.astro`/`.ts` files and content |
| `npm run brand` | `node scripts/generate-brand-assets.mjs` | Regenerate PNG icons and `og-image.png` from the SVG monogram |
| `npm run astro` | `astro` | Astro CLI passthrough |

## 7. Content management

All content is YAML under `src/content/` and is validated by `src/content.config.ts`. A missing translation, a malformed date or an unexpected key fails the build, so broken content cannot be deployed. Localized fields always have the form `{ en: …, es: … }`.

> **YAML tip:** quote any value that contains `: ` or a comma inside `{ … }` flow mappings, or use block style (`en:` / `es:` on separate lines).

**Add a project (card only).** Create `src/content/projects/<slug>.yaml` with `order`, `type` (`professional | academic | personal`), `category`, `title`, `summary`, `role`, `period`, `stack` and optionally `repo`. Projects without `caseStudy` appear in the "More projects" archive.

**Add a case study.** Add a `caseStudy` block to the project file (see `azure-platform-modernisation.yaml` for a complete example). Its presence creates `/projects/<slug>/` and `/es/projects/<slug>/` automatically. Required fields: `overview`, `context`, `problem`, `responsibilities`, `architecture`, `stackGroups`, `implementation`, `challenges`, `security`, `operations`, `results`, `lessons`. Optional fields: `diagram`, `resultsTable`, `confidential` (shows the confidentiality note).

**Diagrams.** A `diagram` has `width`/`height` (viewBox units), `groups` (zones, each optionally with an `id` so that edges can target them), `nodes` (`id`, `label`, `sub`, `x`, `y`, `w`, `h`, `kind`) and `edges` (`from`, `to`, `label`, `dashed`, `route`). `kind` sets the colour and legend entry (`source`, `pipeline`, `security`, `azure`, `platform`, `data`, `observe`, `external`, `device`). Connectors are routed automatically; use `route: h | v | hv | vh | u` to force a shape. The text alternative is generated from the same data. Only draw components that are documented, and never include real topology, names or identifiers.

**Update experience.** Edit `src/content/experience.yaml`. Real client names go in `clients` and are only rendered when `showClientNames` is `true` in `src/config/site.ts`. `clientsAnonymized` is shown otherwise. `projects` links a role to its case studies.

**Add a certification.** Add an entry to `src/content/certifications.yaml`. Only proctored certifications backed by a certificate or score report belong there. Set `highlight: true` with `score`/`maxScore` to show a score. Never invent credential IDs or verification URLs; leave `verifyUrl` out if there is none. Course completions go in `learning.yaml` (`kind: course`).

**Update translations.** Interface strings live in `src/i18n/ui.ts` (`en` and `es` objects with identical keys). Content translations live next to each field in the YAML files.

**Replace or publish CV files.** Copy an approved PDF to `public/cv/ivan-sebastian-loor-weir-cv-en.pdf` and/or `public/cv/ivan-sebastian-loor-weir-cv-es.pdf` (the paths are configured in `src/config/site.ts`), then rebuild. Download buttons appear automatically (`src/lib/cv.ts` checks which files exist at build time). Without files, the site shows a "Request CV" email link. Use a public version of the CV, for example one without a phone number.

**Images and brand assets.** Replace `src/assets/profile.jpg` (square, at least 640 px; strip EXIF metadata first). Responsive WebP versions are generated at build time. After changing `public/favicon.svg` or the OG copy, run `npm run brand`.

## 8. Internationalization

- Routing uses Astro i18n with `prefixDefaultLocale: false`: English at `/…`, Spanish at `/es/…`.
- Pages are thin wrappers. For example, `src/pages/index.astro` and `src/pages/es/index.astro` both render `HomePage` with a `lang` prop, so the two languages never drift structurally.
- `alternates()` in `src/i18n/utils.ts` maps every URL to its equivalent in the other language. It feeds the language switcher (which also carries the `#section` hash) and the `hreflang` tags.
- Technical terms usually kept in English by Spanish-speaking engineering teams (Infrastructure as Code, pipeline, landing zone, runbook…) stay in English in the Spanish copy.
- To add a language: add it to `languages` in `src/i18n/ui.ts` and `i18n.locales` in `astro.config.mjs`, provide its UI strings, add the new key to every localized field (the schema enforces this) and create the `src/pages/<lang>/` wrappers.

## 9. Deployment (Cloudflare Pages)

The site is fully static and needs no server, database or secrets.

1. Push the repository to GitHub.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git** and select the repository.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** *(leave empty)*
4. Environment variables (Production and Preview):
   - `NODE_VERSION` = `22.23.5` (Cloudflare also reads `.nvmrc`; setting it explicitly is safer)
   - `SITE_URL` = the public URL, e.g. `https://ivan-sebastian-loor-weir-portfolio.pages.dev` or your custom domain
5. **Branch configuration:** production branch `main`. Other branches get preview deployments automatically.
6. **Custom domain:** in the Pages project, open **Custom domains → Set up a domain**. For an apex domain managed by Cloudflare, the DNS records are created for you; for an external DNS provider, add the `CNAME` record that Cloudflare shows. Then update `SITE_URL` to the new domain and redeploy, so that canonical URLs, `hreflang`, Open Graph and the sitemap use it.
7. **Verify the deployment:**
   - `/` and `/es/` load, and the language switch keeps the current page.
   - `/sitemap-index.xml` and `/robots.txt` reference the correct domain.
   - Response headers include `Strict-Transport-Security`, `X-Content-Type-Options` and `Content-Security-Policy: frame-ancestors 'none'` (check with `curl -I https://<domain>/`).
   - Social previews render, for example with the LinkedIn Post Inspector.
   - Run Lighthouse against the production URL.

`public/_headers` is applied automatically by Cloudflare Pages. Unknown routes are served `404.html`.

## 10. Security and privacy

- **Private documentation is never committed.** `/docs/` (CVs, certificates, employment documents, private notes) is excluded in `.gitignore`. Nothing is copied from `docs/` into the public build automatically; public assets are created separately and sanitised (for example, the profile photo is re-encoded without metadata).
- **No secrets.** The site uses no API keys, tokens or backend. `.env`, key and certificate files and credential JSON files are git-ignored. `.env.example` documents the only variable, `SITE_URL`, which is public by nature (it is printed into every page).
- **Public vs private assets.** Everything under `public/`, `src/` and `src/content/` is published. Do not put anything there that you would not show a stranger.
- **Client confidentiality.** Client names are hidden by default (`showClientNames: false`). Case studies describe approach and logical design only: no subscription or tenant IDs, IP ranges, private endpoints, internal URLs, resource names, sizing or commercial figures. Before adding a case study, check that every component in its diagram and every claim is documented and publishable.
- **Browser security.** A hash-based CSP (`default-src 'self'`, no inline script without a hash, `object-src 'none'`), `frame-ancestors 'none'`, HSTS, `nosniff`, a strict referrer policy and a restrictive `Permissions-Policy`. Fonts and images are self-hosted, so the site makes no third-party requests and has no tracking.
- **Dependencies.** Versions are pinned exactly in `package.json` and locked in `package-lock.json`; run `npm audit` before releases.
- If a secret is ever committed, deleting the file is not enough: rotate the credential and rewrite the history (for example with `git filter-repo`).

## 11. Performance, accessibility and SEO

**Performance.** Static HTML, minimal JavaScript (small inline modules, no framework runtime), self-hosted fonts with `font-display: swap` and unicode-range subsets, responsive WebP images with explicit dimensions (no layout shift), lazy-loaded below-the-fold media, and immutable caching for fingerprinted assets. Lighthouse (mobile, local build): Performance 96–99, Accessibility 100, Best Practices 100, SEO 100.

**Accessibility (WCAG 2.2 AA principles).** Semantic landmarks, a skip link and a logical heading hierarchy. Focus states are visible and the site is fully usable by keyboard (the mobile menu closes with Escape). The language switcher is accessible (`lang`/`hreflang`, `aria-current`). Colour contrast is checked in both themes. Every diagram has `<title>`/`<desc>` and a full text alternative. Motion is reduced on request. Filters announce their result through a polite live region, and content stays visible without JavaScript.

**SEO.** Descriptive titles and meta descriptions per page and language, canonical URLs, `hreflang` + `x-default`, Open Graph and Twitter metadata, JSON-LD structured data with verifiable facts only (no ratings or reviews), an XML sitemap with language alternates, and robots.txt.

## 12. Maintenance

- **Dependencies:** `npm outdated` → update → `npm run check && npm run build` → `npm audit`. Astro major upgrades may change the Node.js requirement (update `.nvmrc` and `NODE_VERSION` together).
- **Content:** most updates are YAML-only edits. The schema catches structural mistakes at build time.
- **New sections:** create a component in `src/components/home/`, add its strings to `src/i18n/ui.ts`, add a collection to `content.config.ts` if it needs structured content, and include it in `HomePage.astro` (and in the header navigation if relevant).
- **Before each release:** `npm run check`, `npm run build`, preview both languages, and confirm that `git status` shows nothing from `docs/`.

## 13. License

**No open-source license is applied.** The repository is public for transparency and as a code sample, but its content (text, case studies, photo, brand mark and CV) is personal and not licensed for reuse. All rights are reserved by default.

If you want others to be able to reuse the code without the personal content, a reasonable approach is:

- **Code** (`src/components`, `src/lib`, `src/layouts`, `src/styles`, `scripts`, configuration): MIT License.
- **Content and assets** (`src/content`, `src/assets`, `public/` images, the brand mark): all rights reserved.

Record that split in a `LICENSE` file before declaring it.
