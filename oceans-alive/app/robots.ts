/**
 * ══════════════════════════════════════════════════════════════════
 * ROBOTS.TXT (tells search engines what they may crawl)
 * ══════════════════════════════════════════════════════════════════
 */
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/_next', '/.env'],
      },
      {
        userAgent: 'AdsBot-Google',
        allow: '/',
      },
    ],
    sitemap: 'https://oceansalive.org/sitemap.xml',
  };
}
