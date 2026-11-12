/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Blog category page (template used by every category)
 * URL:  /blog/category/[slug]
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Stories
 *   3. Other Categories
 *
 * Where the text/data lives (all editable in Pages CMS):
 *   • Category text, stats, images  →  content/blog-categories.json  ("Blog categories")
 *   • Posts                         →  content/blog/*.md             ("Blog posts")
 */
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ACCENT_CLASSES, getAllPosts, getCategories, type Post } from '@/lib/blog';

export function generateStaticParams() {
  return getCategories().map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const config = getCategories().find((c) => c.slug === params.slug);
  if (!config) return { title: 'Not Found' };
  return {
    title: `${config.name} - Oceans Alive Foundation`,
    description: config.description,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categories = getCategories();
  const config = categories.find((c) => c.slug === params.slug);
  if (!config) notFound();

  const stories = getAllPosts().filter((p) => p.category === config.name);
  const featured = stories.find((p) => p.highlight !== 'None') ?? stories[0];
  const rest = stories.filter((s) => s !== featured);
  const others = categories.filter((c) => c.slug !== params.slug);
  const accent = ACCENT_CLASSES[config.accentColor] ?? ACCENT_CLASSES.Turquoise;

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden">
        <Image src={config.heroImage} alt={config.heroImageAlt} fill className="object-cover opacity-35" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-midnight/20 via-ocean-midnight/50 to-ocean-midnight" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 md:pt-40 pb-0">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/45 hover:text-white text-xs font-bold uppercase tracking-widest mb-12 transition-colors group"
          >
            <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Stories
          </Link>

          {/* Eyebrow */}
          <p className={`text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-3 ${accent.text}`}>
            <span className="w-8 h-px bg-current inline-block" />
            {config.eyebrow}
          </p>

          {/* Headline */}
          <h1
            className="font-poppins font-bold text-white leading-none mb-6"
            style={{ fontSize: 'clamp(2.25rem, 8vw + 0.5rem, 5.5rem)', whiteSpace: 'pre-line' }}
          >
            {config.headline}
          </h1>

          <p className="text-white/60 text-lg max-w-xl leading-relaxed mb-14">{config.description}</p>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {config.stats.map((stat) => (
                <div key={stat.label} className="py-7 px-3 sm:px-6 first:pl-0">
                  <div className={`text-2xl md:text-3xl font-poppins font-bold mb-1 ${accent.text}`}>{stat.number}</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-wide sm:tracking-widest font-semibold break-words">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Stories
          ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {stories.length === 0 ? (
            /* ── Empty state ── */
            <div className="text-center py-24">
              <div className="relative w-28 h-28 rounded-full overflow-hidden mx-auto mb-8 opacity-20">
                <Image src={config.heroImage} alt="" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-gray-300 mb-4">Coming Soon</h3>
              <p className="text-gray-400 text-sm mb-3 max-w-sm mx-auto leading-relaxed">
                We&apos;re preparing new {config.name.toLowerCase()} content. Subscribe to be the first to know.
              </p>
              <p className="text-gray-300 text-xs mb-10">
                In the meantime, explore our{' '}
                <Link href="/blog" className="text-ocean-turquoise hover:underline font-semibold">
                  latest stories
                </Link>
                .
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-ocean-midnight text-white font-bold rounded-xl hover:bg-ocean-turquoise transition-colors text-sm"
              >
                Stay Updated →
              </Link>
            </div>
          ) : (
            <>
              {/* ── Featured story ── */}
              {featured && <FeaturedStory post={featured} accent={accent} />}

              {/* ── Story grid ── */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((story) => (
                    <StoryCard key={story.slug} post={story} accent={accent} />
                  ))}
                </div>
              )}

              {/* If only 1 story total (no rest), a prompt for more */}
              {rest.length === 0 && featured && (
                <p className="text-center text-sm text-gray-400 mt-4">
                  More {config.name.toLowerCase()} coming soon.{' '}
                  <Link href="/contact" className="text-ocean-turquoise font-semibold hover:underline">
                    Subscribe for updates →
                  </Link>
                </p>
              )}
            </>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Other Categories
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${accent.text}`}>Explore More</p>
              <h2 className="text-2xl font-poppins font-bold text-white">Other Topics</h2>
            </div>
            <Link
              href="/blog"
              className="text-xs font-bold text-white/40 hover:text-white uppercase tracking-widest transition-colors hidden sm:block"
            >
              All Stories →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="group relative rounded-2xl overflow-hidden block"
                style={{ minHeight: '280px' }}
              >
                <Image src={cat.cardImage} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight/90 via-ocean-midnight/20 to-transparent" />

                <div className="relative z-10 p-6 flex flex-col justify-end h-full" style={{ minHeight: '280px' }}>
                  <p className="text-white/70 text-[11px] uppercase tracking-widest font-semibold mb-1.5">{cat.cardDescription}</p>
                  <div className="flex items-center justify-between">
                    <h3 className="font-poppins font-bold text-white text-lg group-hover:text-ocean-turquoise transition-colors">{cat.name}</h3>
                    <svg
                      className="w-4 h-4 text-white/30 group-hover:text-ocean-turquoise group-hover:translate-x-0.5 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center sm:hidden">
            <Link href="/blog" className="text-xs font-bold text-white/40 hover:text-white uppercase tracking-widest transition-colors">
              ← All Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

type Accent = (typeof ACCENT_CLASSES)[keyof typeof ACCENT_CLASSES];

function FeaturedStory({ post, accent }: { post: Post; accent: Accent }) {
  const inner = (
    <>
      <Image
        src={post.image}
        alt={post.title}
        fill
        className={`object-cover ${post.isOpen ? 'group-hover:scale-105 transition-transform duration-700' : 'grayscale'}`}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-midnight/95 via-ocean-midnight/80 to-ocean-midnight/30" />

      <div className="relative z-10 p-8 md:p-12 flex flex-col justify-end max-w-2xl" style={{ minHeight: '360px' }}>
        <div className="flex items-center gap-3 mb-5">
          <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white ${post.isOpen ? accent.bg : 'bg-gray-500'}`}>
            Featured
          </span>
          <span className="text-white/40 text-xs">{post.readTime}</span>
          <span className="text-white/30 text-xs">{post.dateLabel}</span>
        </div>

        <h2 className="font-poppins font-bold text-white text-2xl md:text-3xl mb-3 leading-tight group-hover:text-ocean-turquoise transition-colors">
          {post.title}
        </h2>
        <p className="text-white/65 text-sm leading-relaxed mb-5 line-clamp-2 max-w-xl">{post.excerpt}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.stats.map((s) => (
            <span key={s} className="text-[10px] bg-white/10 text-white/65 px-3 py-1 rounded-full font-semibold">
              {s}
            </span>
          ))}
        </div>

        {post.isOpen ? (
          <div className={`inline-flex items-center gap-1.5 font-bold text-sm group-hover:translate-x-1 transition-transform ${accent.text}`}>
            Read Story
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        ) : (
          <div className="text-white/40 font-bold text-sm">Coming Soon - Content Being Updated</div>
        )}
      </div>
    </>
  );

  if (!post.isOpen) {
    return (
      <div className="block mb-10 relative rounded-2xl overflow-hidden opacity-50 cursor-not-allowed" style={{ minHeight: '360px' }}>
        {inner}
      </div>
    );
  }
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block mb-10 relative rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
      style={{ minHeight: '360px' }}
    >
      {inner}
    </Link>
  );
}

function StoryCard({ post, accent }: { post: Post; accent: Accent }) {
  const inner = (
    <>
      {post.image && (
        <div className="relative h-44 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className={`object-cover ${post.isOpen ? 'group-hover:scale-105 transition-transform duration-500' : 'grayscale'}`}
          />
          <div className="absolute inset-0 bg-ocean-midnight/20" />
          <div className="absolute top-3 left-3">
            <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white ${post.isOpen ? accent.bg : 'bg-gray-500'}`}>
              {post.category}
            </span>
          </div>
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        {!post.image && (
          <span className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${accent.text}`}>{post.category}</span>
        )}
        <h3 className="font-poppins font-bold text-ocean-midnight text-base mb-2 leading-snug group-hover:text-ocean-turquoise transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">{post.excerpt}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.stats.map((s) => (
            <span key={s} className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${accent.text} ${accent.bgLight}`}>
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs border-t border-gray-50 pt-3 mt-auto">
          <span className="text-gray-400">{post.dateLabel}</span>
          {post.isOpen ? (
            <span className={`font-bold group-hover:translate-x-0.5 transition-transform inline-block ${accent.text}`}>{post.readTime} →</span>
          ) : (
            <span className="text-gray-500 font-bold">Coming Soon</span>
          )}
        </div>
      </div>
    </>
  );

  if (!post.isOpen) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden flex flex-col opacity-50 cursor-not-allowed">
        {inner}
      </div>
    );
  }
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-ocean-turquoise/20 transition-all duration-300 flex flex-col"
    >
      {inner}
    </Link>
  );
}
