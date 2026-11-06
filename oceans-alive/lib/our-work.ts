import PAGE from '@/content/data/our-work-programmes.json';
/**
 * ══════════════════════════════════════════════════════════════════
 * CONTENT › "Our Work" programme areas
 * ══════════════════════════════════════════════════════════════════
 * Used by /programs/<slug> pages and the "Our Work" menu dropdown.
 */
// ─── "Our Work" programme framework ──────────────────────────────────────────
// Four integrated programmes, with Collaborative Management as the overarching
// approach that connects them (rather than a fifth, separate programme) and
// Sustainable Finance as a cross-cutting mechanism running through all of them.

export interface WorkProjectLink {
  title: string;
  description: string;
  href?: string;
}

export interface WorkProgram {
  slug: string;
  number: string;
  title: string;
  navBlurb: string;
  tagline: string;
  color: string;
  heroImage: string;
  heroImageAlt: string;
  bodyImage: { src: string; alt: string; caption: string };
  intro: string[];
  workIncludes: string[];
  projects: WorkProjectLink[];
  callout: string;
  quote: { text: string; author: string };
}

export const CROSS_CUTTING_THEMES = PAGE.CROSS_CUTTING_THEMES;

export const COLLABORATIVE_MANAGEMENT = PAGE.COLLABORATIVE_MANAGEMENT;

export const OUR_WORK_PROGRAMS: WorkProgram[] = PAGE.OUR_WORK_PROGRAMS as unknown as WorkProgram[];
