/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Single blog story (template used by every post)
 * URL:  /blog/[slug]
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Article text (written in Pages CMS)
 *   3. Impact box
 *   4. Related stories
 *   5. Back link + call to action
 *   (Posts with status "Coming soon" show a "Content Being Updated" notice instead.)
 *
 * Where the text/data lives:
 *   • Each post  →  content/blog/<post-name>.md  (Pages CMS → "Blog posts")
 */
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import PostBody from '@/components/common/PostBody';
import { getAllPosts, getPost, getRelatedPosts } from '@/lib/blog';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return { title: 'Story Not Found' };
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  if (!post.isOpen) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-200 flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-3xl font-poppins font-bold text-gray-800 mb-4">Content Being Updated</h1>
            <p className="text-lg text-gray-600 mb-2">This story is currently being reviewed and updated with the latest information.</p>
            <p className="text-sm text-gray-500 mb-8">Please check back soon for the complete story.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span className="font-semibold">{post.category}</span>
            </div>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ocean-midnight text-white font-bold rounded-xl hover:bg-ocean-turquoise transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Stories
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedPosts(post);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden" style={{ minHeight: '520px' }}>
        {post.image && <Image src={post.image} alt={post.imageAlt} fill className="object-cover" priority />}
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight via-ocean-midnight/75 to-ocean-midnight/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-24 md:pt-40 md:pb-32 flex flex-col justify-end" style={{ minHeight: '520px' }}>
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-ocean-turquoise text-white px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-white/40 text-xs">{post.dateLabel}</span>
            <span className="text-white/25">·</span>
            <span className="text-white/40 text-xs">{post.readTime}</span>
          </div>
          <h1 className="font-poppins font-bold text-white text-3xl md:text-5xl leading-tight mb-6 max-w-3xl">{post.title}</h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">{post.excerpt}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Article text
          ══════════════════════════════════════════════════════════════════ */}
      <article className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          {post.stats.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {post.stats.map((s) => (
                <span key={s} className="text-xs font-semibold bg-ocean-turquoise/10 text-ocean-turquoise px-3 py-1.5 rounded-full">
                  {s}
                </span>
              ))}
            </div>
          )}
          <PostBody markdown={post.body} />
        </div>
      </article>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Impact box
          ══════════════════════════════════════════════════════════════════ */}
      {post.stats.length > 0 && (
        <section className="bg-ocean-midnight py-12">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <p className="text-[9px] font-bold uppercase tracking-widest text-ocean-turquoise">Impact at a Glance</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {post.stats.map((s) => (
                <div key={s} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <p className="text-white font-semibold text-sm">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Related stories
          ══════════════════════════════════════════════════════════════════ */}
      {related.length > 0 && (
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-2">Continue Reading</p>
                <h2 className="text-2xl font-poppins font-bold text-ocean-midnight">Related Stories</h2>
              </div>
              <Link href="/blog" className="text-sm font-bold text-ocean-turquoise hover:text-ocean-midnight transition-colors">
                All stories →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-ocean-turquoise/20 transition-all duration-200 block"
                >
                  <span className="text-[10px] font-bold text-ocean-turquoise uppercase tracking-widest">{r.category}</span>
                  <h3 className="font-poppins font-bold text-ocean-midnight mt-2 mb-2 leading-snug group-hover:text-ocean-turquoise transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-4">{r.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-50 pt-3">
                    <span>{r.dateLabel}</span>
                    <span className="text-ocean-turquoise font-bold group-hover:translate-x-0.5 transition-transform inline-block">Read →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Back link + call to action
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/blog" className="text-sm font-bold text-ocean-midnight hover:text-ocean-turquoise transition-colors flex items-center gap-2">
            ← Back to all stories
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="px-5 py-2.5 bg-ocean-turquoise text-white font-bold rounded-xl text-sm hover:bg-ocean-midnight transition-all duration-200"
            >
              Support This Work
            </Link>
            <Link
              href="/contact?type=Partnership"
              className="px-5 py-2.5 border border-gray-200 text-ocean-midnight font-semibold rounded-xl text-sm hover:border-ocean-turquoise hover:text-ocean-turquoise transition-all duration-200"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
