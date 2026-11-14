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

  const allPosts = getAllPosts();
  const stories = allPosts.filter((p) => p.category === config.name);
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
              {/* ── Exactly two stories: featured (wide) and the other side by side ── */}
              {featured && rest.length === 1 ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <FeaturedStory post={featured} accent={accent} inRow />
                  </div>
                  <StoryCard post={rest[0]} accent={accent} />
                </div>
              ) : (
                featured && <FeaturedStory post={featured} accent={accent} />
              )}

              {/* ── Story grid ── */}
              {rest.length > 1 && (
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
            {others.map((cat, i) => {
              const tone = TOPIC_TONES[i % TOPIC_TONES.length];
              const catPosts = allPosts.filter((p) => p.category === cat.name);
              const latest = catPosts[0];
              const wide = topicSpan(i, others.length).includes('lg:col-span-4');
              return (
                <Link
                  key={cat.slug}
                  href={`/blog/category/${cat.slug}`}
                  className={`group relative rounded-3xl overflow-hidden block ring-1 ring-white/10 shadow-xl shadow-black/30 transition-all duration-500 hover:-translate-y-1.5 hover:ring-2 ${tone.ring} ${topicSpan(i, others.length)}`}
                  style={{ minHeight: '300px' }}
                >
                  <Image
                    src={cat.cardImage}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Layered shading: dark base for text, soft colour glow from the corner */}
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ocean-midnight/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight from-10% via-ocean-midnight/60 via-45% to-ocean-midnight/0" />
                  <div className={`absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-25 group-hover:opacity-45 transition-opacity duration-500 ${tone.bg}`} />

                  <div className="relative z-10 p-6 md:p-7 flex flex-col justify-between h-full" style={{ minHeight: '300px' }}>
                    {/* Top row: story count + big outlined number */}
                    <div className="flex items-start justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">
                        <span className={`w-1.5 h-1.5 rounded-full ${tone.bg}`} />
                        {catPosts.length} {catPosts.length === 1 ? 'story' : 'stories'}
                      </span>
                      <span
                        className="font-poppins font-bold leading-none text-lg text-white/80 select-none pt-1.5 transition-colors duration-300 group-hover:text-white"
                        style={{ textShadow: '0 1px 6px rgba(0,0,0,0.45)' }}
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Bottom: title block */}
                    <div>
                      <span className={`block h-1 w-10 rounded-full mb-4 transition-all duration-500 group-hover:w-24 ${tone.bg}`} />
                      <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-2 text-white/85">{cat.cardDescription}</p>
                      <h3 className={`font-poppins font-bold text-white leading-tight mb-3 ${wide ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                        {cat.name}
                      </h3>
                      {latest && (
                        <p className={`text-white/65 text-xs leading-relaxed mb-5 line-clamp-2 ${wide ? 'max-w-md' : ''}`}>
                          <span className="text-white/40 uppercase tracking-widest text-[9px] font-bold mr-1.5">Latest</span>
                          {latest.title}
                        </p>
                      )}
                      <div className="flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
                          Explore topic
                        </span>
                        <span
                          className={`w-9 h-9 rounded-full border border-white/20 bg-white/5 backdrop-blur flex items-center justify-center text-white transition-all duration-300 group-hover:border-transparent ${tone.hoverBg} ${tone.hoverText}`}
                        >
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
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

/**
 * "Other Topics" card widths, so the rows always come out full (no gap at the end).
 * Desktop: rows of 3 (each card 2 of 6 columns); when the count doesn't divide by 3,
 * one or two cards are made double width. Tablet: rows of 2; an odd last card spans both.
 */
/** Colour accents that rotate across the "Other Topics" cards. */
const TOPIC_TONES = [
  { text: 'text-ocean-turquoise', bg: 'bg-ocean-turquoise', ring: 'hover:ring-ocean-turquoise', hoverBg: 'group-hover:bg-ocean-turquoise', hoverText: 'group-hover:text-ocean-midnight' },
  { text: 'text-ocean-sunshine', bg: 'bg-ocean-sunshine', ring: 'hover:ring-ocean-sunshine', hoverBg: 'group-hover:bg-ocean-sunshine', hoverText: 'group-hover:text-ocean-midnight' },
  { text: 'text-ocean-seafoam', bg: 'bg-ocean-seafoam', ring: 'hover:ring-ocean-seafoam', hoverBg: 'group-hover:bg-ocean-seafoam', hoverText: 'group-hover:text-ocean-midnight' },
];

function topicSpan(i: number, n: number): string {
  const tablet = n % 2 === 1 && i === n - 1 ? 'sm:col-span-2' : '';
  const wide = (n % 3 === 2 && i === 0) || (n % 3 === 1 && (i === 0 || i === 3));
  return `${wide ? 'lg:col-span-4' : 'lg:col-span-2'} ${tablet}`;
}

type Accent = (typeof ACCENT_CLASSES)[keyof typeof ACCENT_CLASSES];

function FeaturedStory({ post, accent, inRow = false }: { post: Post; accent: Accent; inRow?: boolean }) {
  const space = inRow ? 'h-full' : 'mb-10';
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
      <div className={`block ${space} relative rounded-2xl overflow-hidden opacity-50 cursor-not-allowed`} style={{ minHeight: '360px' }}>
        {inner}
      </div>
    );
  }
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block ${space} relative rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500`}
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
