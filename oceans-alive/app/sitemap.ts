/**
 * ══════════════════════════════════════════════════════════════════
 * SITEMAP (sitemap.xml for search engines)
 * ══════════════════════════════════════════════════════════════════
 * Lists every page URL. Add a line here when you create a new page.
 */
import { MetadataRoute } from 'next';
import { PROGRAMMES, SITE_URL } from '@/lib/constants';
import { getAllPosts } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
      {
        url: SITE_URL,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 1,
      },
      {
        url: `${SITE_URL}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${SITE_URL}/blog`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
      },
      {
        url: `${SITE_URL}/resources`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
      {
        url: `${SITE_URL}/gallery`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
      {
        url: `${SITE_URL}/donate`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      },
      {
        url: `${SITE_URL}/contact`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      },
      {
        url: `${SITE_URL}/partnerships/coral-guardian`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
    ];

  const blogPages = getAllPosts().filter((post) => post.isOpen).map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const programmePages = PROGRAMMES.map((programme) => ({
    url: `${SITE_URL}/programmes/${programme.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...programmePages];
}
