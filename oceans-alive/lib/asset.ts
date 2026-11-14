/**
 * Adds the site's base path to a local file path for plain <img> tags.
 *
 * On GoDaddy the site sits at the web root, so "/images/x.jpg" works as is.
 * The GitHub Pages preview lives under "/OA_website/", so it needs the prefix.
 * (next/image and next/link add it automatically; plain <img> does not.)
 */
export function asset(src: string): string;
export function asset(src: string | undefined | null): string | undefined;
export function asset(src: string | undefined | null): string | undefined {
  if (!src) return src ?? undefined;
  if (!src.startsWith('/') || src.startsWith('//')) return src; // external URL
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return base && !src.startsWith(base + '/') ? base + src : src;
}
