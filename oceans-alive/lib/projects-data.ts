import PAGE from '@/content/data/projects.json';
/**
 * ══════════════════════════════════════════════════════════════════
 * CONTENT › Projects (cards in the "All Projects" carousel + menu)
 * ══════════════════════════════════════════════════════════════════
 * Each project also has its own page in app/projects/<slug>/page.tsx.
 */
export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  funder: string;
  description: string;
  image: string;
  stats: ProjectStat[];
  gradient: string;
}

export const PROJECTS: Project[] = PAGE.PROJECTS as unknown as Project[];
