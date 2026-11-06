/**
 * ══════════════════════════════════════════════════════════════════
 * SITEMAP (sitemap.xml for search engines)
 * ══════════════════════════════════════════════════════════════════
 * Lists every page URL. Add a line here when you create a new page.
 */
import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';
import { PROGRAMMES, SITE_URL, STATIC_BLOG_STORIES } from '@/lib/constants';

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

  const blogPages = STATIC_BLOG_STORIES.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const programmePages = PROGRAMMES.map((programme) => ({
    url: `${SITE_URL}/programmes/${programme.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  try {
    if (!supabase) {
      return [...staticPages, ...blogPages, ...programmePages];
    }

    const { data: posts } = await supabase
      .from('posts')
      .select('slug, updated_at')
      .eq('is_published', true);

    const { data: resources } = await supabase
      .from('resources')
      .select('id, updated_at')
      .eq('is_published', true);

    const dbBlogPages = (posts || []).map((post: { slug: string; updated_at: string }) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    const resourcePages = (resources || []).map((resource: { id: string; updated_at: string }) => ({
      url: `${SITE_URL}/resources/${resource.id}`,
      lastModified: new Date(resource.updated_at),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    return [...staticPages, ...dbBlogPages, ...programmePages, ...resourcePages];
  } catch (error) {
    console.error('Sitemap generation error:', error);
    return [...staticPages, ...blogPages, ...programmePages];
  }
}
