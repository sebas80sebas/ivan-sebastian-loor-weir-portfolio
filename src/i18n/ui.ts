/**
 * Interface strings (navigation, labels, headings, metadata).
 * Long-form content (experience, projects, certifications…) lives in
 * src/content and carries its own `en` / `es` fields.
 *
 * Technical terms that are normally used in English in Spanish-speaking
 * engineering teams (Infrastructure as Code, pipeline, landing zone…) are
 * intentionally kept in English in the Spanish copy.
 */

export const languages = {
  en: { label: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_US' },
  es: { label: 'Español', short: 'ES', htmlLang: 'es', ogLocale: 'es_ES' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const langs = Object.keys(languages) as Lang[];

export const ui = {
  en: {
    'meta.home.title': 'Iván Sebastián Loor Weir — Cloud DevSecOps Engineer',
    'meta.home.description':
      'Cloud DevSecOps Engineer at ALIANDO (Madrid). Azure platforms delivered as code with Terraform and CI/CD, DevSecOps, cloud security and automation. Case studies, certifications and experience.',
    'meta.projects.title': 'Projects & case studies — Iván Sebastián Loor Weir',
    'meta.projects.description':
      'Cloud engineering, Infrastructure as Code, DevSecOps and monitoring-automation projects by Iván Sebastián Loor Weir, with detailed technical case studies.',
    'meta.404.title': 'Page not found — Iván Sebastián Loor Weir',

    'skip': 'Skip to content',
    'nav.label': 'Main navigation',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.certifications': 'Certifications',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close menu',
    'nav.home': 'Home',
    'lang.label': 'Language',
    'lang.switch': 'Ver esta página en español',
    'theme.toggle': 'Toggle colour theme',
    'theme.light': 'Light',
    'theme.dark': 'Dark',

    'cv.download': 'Download CV',
    'cv.downloadEn': 'CV (English)',
    'cv.downloadEs': 'CV (Spanish)',
    'cv.request': 'Request CV',
    'cv.requestSubject': 'CV request — portfolio',

    'hero.eyebrow': 'Cloud DevSecOps Engineer at ALIANDO',
    'hero.statement.a': 'I design, provision and automate',
    'hero.statement.em': 'secure Azure platforms',
    'hero.statement.b': '— Terraform-defined, pipeline-delivered and observable.',
    'hero.cta.primary': 'Explore my work',
    'hero.facts.label': 'At a glance',
    'hero.fact.envs.value': '5',
    'hero.fact.envs.label': 'environments provisioned as code, sbx → prod',
    'hero.fact.services.value': '40+',
    'hero.fact.services.label': 'Azure services deployed with Terraform for Dhareeba 2.0',
    'hero.fact.certs.label': 'professional certifications — Microsoft, HashiCorp, GitHub, Anthropic',
    'hero.visual.label': 'Illustrative diagram of a Terraform delivery flow: commit, plan, security scan and apply, promoted across sandbox, development, QA, pre-production and production environments.',
    'hero.visual.caption': 'Illustrative · IaC promotion flow',

    'section.about': 'About',
    'section.experience': 'Experience',
    'section.projects': 'Selected work',
    'section.certifications': 'Certifications',
    'section.skills': 'Technical skills',
    'section.education': 'Education',
    'section.learning': 'Continuous learning',
    'section.contact': 'Contact',

    'about.title.a': 'Infrastructure, automation and security —',
    'about.title.em': 'treated as one discipline.',
    'about.principles': 'Engineering principles',
    'about.facts.location': 'Based in',
    'about.facts.languages': 'Languages',
    'about.facts.focus': 'Current focus',

    'experience.title': 'From managed services to platform delivery.',
    'experience.intro':
      'Two roles at ALIANDO: first operating and automating Azure for enterprise clients, then delivering multi-environment cloud platforms as code.',
    'experience.present': 'Present',
    'experience.highlights': 'Selected work',
    'experience.stack': 'Technologies',
    'experience.related': 'Related case studies',
    'experience.area': 'Area',
    'experience.clients': 'Clients',
    'experience.more': 'more achievements',

    'projects.title': 'Case studies in cloud engineering, IaC and automation.',
    'projects.intro':
      'Professional work is described at the level of architecture and engineering decisions; confidential environment details are omitted.',
    'projects.filter.label': 'Filter projects by type',
    'projects.filter.all': 'All',
    'projects.type.professional': 'Professional',
    'projects.type.academic': 'Academic',
    'projects.type.personal': 'Personal',
    'projects.role': 'Role',
    'projects.readCase': 'Read case study',
    'projects.viewRepo': 'Repository',
    'projects.more': 'More projects',
    'projects.moreIntro': 'Smaller personal and academic projects. Source code on GitHub.',
    'projects.viewAll': 'All projects',
    'projects.featured': 'Featured',
    'projects.shown': 'projects shown',

    'case.back': 'All projects',
    'case.overview': 'Overview',
    'case.context': 'Context',
    'case.problem': 'Problem statement',
    'case.responsibilities': 'My responsibilities',
    'case.architecture': 'Architecture overview',
    'case.stack': 'Technology stack',
    'case.implementation': 'Implementation approach',
    'case.challenges': 'Challenges & engineering decisions',
    'case.challenge': 'Challenge',
    'case.decision': 'Decision',
    'case.security': 'Security considerations',
    'case.operations': 'Operational considerations',
    'case.results': 'Results & impact',
    'case.lessons': 'Lessons learned',
    'case.onThisPage': 'On this page',
    'case.facts.type': 'Type',
    'case.facts.role': 'Role',
    'case.facts.period': 'Period',
    'case.facts.org': 'Context',
    'case.confidential':
      'Confidential environment details (identifiers, network topology, sizing) are intentionally omitted. Diagrams show the logical design only.',
    'case.next': 'Next case study',
    'case.prev': 'Previous case study',
    'case.repo': 'View source on GitHub',

    'diagram.textAlt': 'Text description of the diagram',
    'diagram.flows': 'Flows',
    'diagram.components': 'Components',

    'certs.title': 'Verified credentials, separated from coursework.',
    'certs.intro':
      'Proctored professional certifications, each linked to its issuer’s verification page. Course completions are listed separately under continuous learning.',
    'certs.earned': 'Earned',
    'certs.validUntil': 'Valid until',
    'certs.score': 'Score',
    'certs.verify': 'Verify credential',
    'certs.count': 'certifications',

    'skills.title': 'Technologies, described by how they are used.',
    'skills.intro':
      'No percentages. Each entry states the context — professional, academic or personal — and what the technology was used for.',
    'skills.context.professional': 'Professional',
    'skills.context.academic': 'Academic',
    'skills.context.personal': 'Personal',
    'skills.context.certified': 'Certified',

    'education.title': 'Computer Science and Engineering, with a thesis on containers at the edge.',
    'education.thesis': 'Bachelor’s thesis',
    'education.grade': 'Grade',
    'education.readThesis': 'Read the thesis case study',
    'education.thesisPdf': 'Download thesis (PDF)',

    'learning.title': 'Where my learning is going.',
    'learning.intro':
      'Current focus areas, and course completions that are not professional certifications.',
    'learning.focus': 'Focus areas',
    'learning.courses': 'Course completions',
    'learning.coursesNote': 'Courses and learning badges — not proctored certifications.',

    'contact.title.a': 'Building on Azure, Terraform or',
    'contact.title.em': 'secure delivery pipelines?',
    'contact.body':
      'I’m open to DevOps, DevSecOps, Cloud Engineer, Solutions Architect and Automation Specialist roles — in Spain or internationally, remote or hybrid.',
    'contact.openTo': 'Open to roles as',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.location': 'Location',
    'contact.cta': 'Send an email',
    'contact.subject': 'Hello Iván — via your portfolio',

    'footer.built': 'Static site built with Astro, deployed on Cloudflare Pages.',
    'footer.top': 'Back to top',
    'footer.rights': 'All rights reserved.',

    '404.title': 'This route doesn’t resolve.',
    '404.body': 'The page you’re looking for doesn’t exist or has moved.',
    '404.home': 'Back to the homepage',

    'common.newTab': '(opens in a new tab)',
  },
  es: {
    'meta.home.title': 'Iván Sebastián Loor Weir — Cloud DevSecOps Engineer',
    'meta.home.description':
      'Cloud DevSecOps Engineer en ALIANDO (Madrid). Plataformas Azure entregadas como código con Terraform y CI/CD, DevSecOps, seguridad cloud y automatización. Casos de estudio, certificaciones y experiencia.',
    'meta.projects.title': 'Proyectos y casos de estudio — Iván Sebastián Loor Weir',
    'meta.projects.description':
      'Proyectos de Cloud Engineering, Infrastructure as Code, DevSecOps y automatización de la monitorización de Iván Sebastián Loor Weir, con casos de estudio técnicos.',
    'meta.404.title': 'Página no encontrada — Iván Sebastián Loor Weir',

    'skip': 'Saltar al contenido',
    'nav.label': 'Navegación principal',
    'nav.about': 'Perfil',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.certifications': 'Certificaciones',
    'nav.skills': 'Skills',
    'nav.education': 'Formación',
    'nav.contact': 'Contacto',
    'nav.menu': 'Menú',
    'nav.close': 'Cerrar menú',
    'nav.home': 'Inicio',
    'lang.label': 'Idioma',
    'lang.switch': 'View this page in English',
    'theme.toggle': 'Cambiar tema de color',
    'theme.light': 'Claro',
    'theme.dark': 'Oscuro',

    'cv.download': 'Descargar CV',
    'cv.downloadEn': 'CV (inglés)',
    'cv.downloadEs': 'CV (español)',
    'cv.request': 'Solicitar CV',
    'cv.requestSubject': 'Solicitud de CV — portfolio',

    'hero.eyebrow': 'Cloud DevSecOps Engineer en ALIANDO',
    'hero.statement.a': 'Diseño, aprovisiono y automatizo',
    'hero.statement.em': 'plataformas Azure seguras',
    'hero.statement.b': ': definidas en Terraform, desplegadas mediante pipelines y observables.',
    'hero.cta.primary': 'Ver mi trabajo',
    'hero.facts.label': 'En resumen',
    'hero.fact.envs.value': '5',
    'hero.fact.envs.label': 'entornos aprovisionados como código, de sbx a prod',
    'hero.fact.services.value': '40+',
    'hero.fact.services.label': 'servicios Azure desplegados con Terraform en Dhareeba 2.0',
    'hero.fact.certs.label': 'certificaciones profesionales: Microsoft, HashiCorp, GitHub y Anthropic',
    'hero.visual.label': 'Diagrama ilustrativo de un flujo de entrega con Terraform: commit, plan, análisis de seguridad y apply, promovido por los entornos de sandbox, desarrollo, QA, preproducción y producción.',
    'hero.visual.caption': 'Ilustrativo · flujo de promoción IaC',

    'section.about': 'Perfil',
    'section.experience': 'Experiencia',
    'section.projects': 'Trabajo seleccionado',
    'section.certifications': 'Certificaciones',
    'section.skills': 'Skills técnicas',
    'section.education': 'Formación',
    'section.learning': 'Aprendizaje continuo',
    'section.contact': 'Contacto',

    'about.title.a': 'Infraestructura, automatización y seguridad,',
    'about.title.em': 'como una sola disciplina.',
    'about.principles': 'Principios de ingeniería',
    'about.facts.location': 'Ubicación',
    'about.facts.languages': 'Idiomas',
    'about.facts.focus': 'Foco actual',

    'experience.title': 'De managed services a la entrega de plataformas.',
    'experience.intro':
      'Dos roles en ALIANDO: primero operando y automatizando Azure para clientes enterprise, después entregando plataformas cloud multientorno como código.',
    'experience.present': 'Actualidad',
    'experience.highlights': 'Trabajo destacado',
    'experience.stack': 'Tecnologías',
    'experience.related': 'Casos de estudio relacionados',
    'experience.area': 'Área',
    'experience.clients': 'Clientes',
    'experience.more': 'logros más',

    'projects.title': 'Casos de estudio de Cloud Engineering, IaC y automatización.',
    'projects.intro':
      'El trabajo profesional se describe a nivel de arquitectura y decisiones de ingeniería; los detalles confidenciales de los entornos se omiten.',
    'projects.filter.label': 'Filtrar proyectos por tipo',
    'projects.filter.all': 'Todos',
    'projects.type.professional': 'Profesional',
    'projects.type.academic': 'Académico',
    'projects.type.personal': 'Personal',
    'projects.role': 'Rol',
    'projects.readCase': 'Leer caso de estudio',
    'projects.viewRepo': 'Repositorio',
    'projects.more': 'Más proyectos',
    'projects.moreIntro': 'Proyectos personales y académicos más pequeños. Código fuente en GitHub.',
    'projects.viewAll': 'Todos los proyectos',
    'projects.featured': 'Destacado',
    'projects.shown': 'proyectos mostrados',

    'case.back': 'Todos los proyectos',
    'case.overview': 'Resumen',
    'case.context': 'Contexto',
    'case.problem': 'Problema',
    'case.responsibilities': 'Mis responsabilidades',
    'case.architecture': 'Arquitectura',
    'case.stack': 'Stack tecnológico',
    'case.implementation': 'Enfoque de implementación',
    'case.challenges': 'Retos y decisiones de ingeniería',
    'case.challenge': 'Reto',
    'case.decision': 'Decisión',
    'case.security': 'Consideraciones de seguridad',
    'case.operations': 'Consideraciones operativas',
    'case.results': 'Resultados e impacto',
    'case.lessons': 'Lecciones aprendidas',
    'case.onThisPage': 'En esta página',
    'case.facts.type': 'Tipo',
    'case.facts.role': 'Rol',
    'case.facts.period': 'Periodo',
    'case.facts.org': 'Contexto',
    'case.confidential':
      'Los detalles confidenciales de los entornos (identificadores, topología de red, dimensionamiento) se omiten intencionadamente. Los diagramas muestran solo el diseño lógico.',
    'case.next': 'Siguiente caso',
    'case.prev': 'Caso anterior',
    'case.repo': 'Ver código en GitHub',

    'diagram.textAlt': 'Descripción textual del diagrama',
    'diagram.flows': 'Flujos',
    'diagram.components': 'Componentes',

    'certs.title': 'Credenciales verificables, separadas de los cursos.',
    'certs.intro':
      'Certificaciones profesionales con examen supervisado, cada una enlazada a la página de verificación del emisor. Los cursos completados se listan aparte, en aprendizaje continuo.',
    'certs.earned': 'Obtenida',
    'certs.validUntil': 'Válida hasta',
    'certs.score': 'Puntuación',
    'certs.verify': 'Verificar credencial',
    'certs.count': 'certificaciones',

    'skills.title': 'Tecnologías descritas por cómo se usan.',
    'skills.intro':
      'Sin porcentajes. Cada entrada indica el contexto (profesional, académico o personal) y para qué se ha utilizado la tecnología.',
    'skills.context.professional': 'Profesional',
    'skills.context.academic': 'Académico',
    'skills.context.personal': 'Personal',
    'skills.context.certified': 'Certificado',

    'education.title': 'Ingeniería Informática, con un TFG sobre contenedores en el edge.',
    'education.thesis': 'Trabajo Fin de Grado',
    'education.grade': 'Calificación',
    'education.readThesis': 'Leer el caso de estudio del TFG',
    'education.thesisPdf': 'Descargar TFG (PDF)',

    'learning.title': 'Hacia dónde va mi aprendizaje.',
    'learning.intro':
      'Áreas de foco actuales y cursos completados que no son certificaciones profesionales.',
    'learning.focus': 'Áreas de foco',
    'learning.courses': 'Cursos completados',
    'learning.coursesNote': 'Cursos y badges de aprendizaje, no certificaciones con examen supervisado.',

    'contact.title.a': '¿Trabajas con Azure, Terraform o',
    'contact.title.em': 'pipelines de entrega seguros?',
    'contact.body':
      'Estoy abierto a puestos de DevOps, DevSecOps, Cloud Engineer, Solutions Architect y Automation Specialist, en España o a nivel internacional, en remoto o en formato híbrido.',
    'contact.openTo': 'Abierto a puestos de',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.location': 'Ubicación',
    'contact.cta': 'Enviar un email',
    'contact.subject': 'Hola Iván — desde tu portfolio',

    'footer.built': 'Sitio estático construido con Astro y desplegado en Cloudflare Pages.',
    'footer.top': 'Volver arriba',
    'footer.rights': 'Todos los derechos reservados.',

    '404.title': 'Esta ruta no resuelve.',
    '404.body': 'La página que buscas no existe o ha cambiado de ubicación.',
    '404.home': 'Volver al inicio',

    'common.newTab': '(se abre en una pestaña nueva)',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
