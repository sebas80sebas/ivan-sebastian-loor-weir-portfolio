import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** All projects sorted by `order`. */
export async function getProjects(): Promise<Project[]> {
  return (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
}

/** Projects that have a dedicated case-study page. */
export async function getCaseStudies(): Promise<Project[]> {
  return (await getProjects()).filter((p) => p.data.caseStudy);
}

/** Language-neutral path of a case study. */
export const projectPath = (slug: string) => `/projects/${slug}/`;
