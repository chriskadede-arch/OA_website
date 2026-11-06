/**
 * ══════════════════════════════════════════════════════════════════
 * BLOG DATA (reads the editable post files)
 * ══════════════════════════════════════════════════════════════════
 * Posts       → content/blog/<post-name>.md  (edited in Pages CMS → "Blog posts")
 * Categories  → content/blog-categories.json (edited in Pages CMS → "Blog categories")
 *
 * Runs at build time only (it reads files from disk), so import it from
 * server components / generateStaticParams, never from 'use client' files.
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import categoriesFile from '@/content/blog-categories.json';

export type PostStatus = 'Published' | 'Coming soon' | 'Draft';
export type PostHighlight = 'None' | 'Top story on its category page' | 'Top story on the main blog page';

export interface Post {
  slug: string;
  title: string;
  status: PostStatus;
  category: string;
  /** ISO date, e.g. 2025-03-01 */
  date: string;
  /** Display date, e.g. "March 2025" */
  dateLabel: string;
  highlight: PostHighlight;
  excerpt: string;
  image: string;
  imageAlt: string;
  readTime: string;
  stats: string[];
  /** Markdown article text */
  body: string;
  /** True when the full article can be read (status = Published) */
  isOpen: boolean;
}

export interface BlogCategory {
  name: string;
  slug: string;
  eyebrow: string;
  headline: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  accentColor: 'Turquoise' | 'Sunshine yellow' | 'Seafoam green';
  stats: { number: string; label: string }[];
  cardDescription: string;
  cardImage: string;
}

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

// Pages CMS writes dates unquoted, which the YAML reader turns into Date objects.
function toIsoDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? '').slice(0, 10);
}

function formatMonthYear(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

function estimateReadTime(markdown: string): string {
  const words = markdown.replace(/!\[[^\]]*\]\([^)]*\)/g, '').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function readPost(file: string): Post {
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
  const { data, content } = matter(raw);
  const status = (data.status ?? 'Published') as PostStatus;
  const date = toIsoDate(data.date);
  return {
    slug: file.replace(/\.md$/, ''),
    title: String(data.title ?? ''),
    status,
    category: String(data.category ?? ''),
    date,
    dateLabel: formatMonthYear(date),
    highlight: (data.highlight ?? 'None') as PostHighlight,
    excerpt: String(data.excerpt ?? ''),
    image: String(data.image ?? ''),
    imageAlt: String(data.imageAlt ?? ''),
    readTime: data.readTime ? String(data.readTime) : estimateReadTime(content),
    stats: Array.isArray(data.stats) ? data.stats.map(String).filter(Boolean) : [],
    body: content.trim(),
    isOpen: status === 'Published',
  };
}

/** Every post that is not a draft, newest first. */
export function getAllPosts(): Post[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map(readPost)
    .filter((p) => p.status !== 'Draft')
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getCategories(): BlogCategory[] {
  return categoriesFile.categories as BlogCategory[];
}

export function getCategoryByName(name: string): BlogCategory | undefined {
  return getCategories().find((c) => c.name === name);
}

/** Stories to suggest under an article: same category first, then the newest others. */
export function getRelatedPosts(post: Post, count = 3): Post[] {
  const others = getAllPosts().filter((p) => p.slug !== post.slug);
  const same = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...same, ...rest].slice(0, count);
}

/** Tailwind classes for each category accent colour (kept here so Tailwind sees them). */
export const ACCENT_CLASSES: Record<BlogCategory['accentColor'], { text: string; bg: string; bgLight: string }> = {
  Turquoise: { text: 'text-ocean-turquoise', bg: 'bg-ocean-turquoise', bgLight: 'bg-ocean-turquoise/10' },
  'Sunshine yellow': { text: 'text-ocean-sunshine', bg: 'bg-ocean-sunshine', bgLight: 'bg-ocean-sunshine/10' },
  'Seafoam green': { text: 'text-ocean-seafoam', bg: 'bg-ocean-seafoam', bgLight: 'bg-ocean-seafoam/10' },
};
