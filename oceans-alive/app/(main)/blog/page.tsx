/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Impact Stories (blog index)
 * URL:  /blog
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Category filters + story list
 *   3. Call to action strip
 *
 * Where the text/data lives (all editable in Pages CMS):
 *   • Page text      →  content/pages/blog.json        ("Pages › Blog page")
 *   • Posts          →  content/blog/*.md              ("Blog posts")
 *   • Categories     →  content/blog-categories.json   ("Blog categories")
 */
import Link from 'next/link';
import Image from 'next/image';
import page from '@/content/pages/blog.json';
import { getAllPosts, getCategories, type Post } from '@/lib/blog';

export const metadata = {
  title: page.seoTitle,
  description: page.seoDescription,
};

export default function Blog() {
  const posts = getAllPosts();
  const categories = getCategories();
  const featured = posts.find((p) => p.highlight === 'Top story on the main blog page');
  const rest = posts.filter((p) => p !== featured);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight pt-36 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={page.hero.backgroundImage} alt="" fill className="object-cover opacity-15" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-midnight via-ocean-midnight/90 to-ocean-midnight/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-3">
                <span className="w-8 h-px bg-ocean-turquoise inline-block" />
                {page.hero.eyebrow}
              </p>
              <h1 className="font-poppins font-bold text-white text-5xl md:text-6xl mb-6 leading-tight">
                {page.hero.titleLine1}<br />
                <span className="text-ocean-turquoise">{page.hero.titleLine2}</span>
              </h1>
              <p className="text-white/70 text-lg max-w-xl leading-relaxed">{page.hero.text}</p>
            </div>

            {/* Category pills floating on hero */}
            <div className="hidden lg:flex flex-wrap gap-2">
              <Link
                href="/blog"
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all border bg-ocean-turquoise border-ocean-turquoise text-white"
              >
                All Stories
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/blog/category/${cat.slug}`}
                  className="px-4 py-2 rounded-xl text-sm font-semibold transition-all border border-white/20 text-white/60 hover:border-ocean-turquoise hover:text-ocean-turquoise"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Category filters + story list
          ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* Category filter - mobile */}
          <div className="flex flex-wrap gap-2 mb-12 lg:hidden">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-colors border bg-ocean-turquoise border-ocean-turquoise text-white"
            >
              All Stories
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-colors border border-gray-200 text-gray-600 hover:border-ocean-turquoise"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Featured story with photo */}
          {featured && <FeaturedCard post={featured} />}

          {/* Story grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <StoryCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Call to action strip
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-poppins font-bold text-white">{page.callToAction.title}</h3>
              <p className="text-white/55 mt-1">{page.callToAction.text}</p>
            </div>
            <Link
              href={page.callToAction.buttonLink}
              className="shrink-0 px-6 py-3 bg-ocean-turquoise text-white font-bold rounded-xl hover:bg-white hover:text-ocean-midnight transition-all duration-200"
            >
              {page.callToAction.buttonLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FeaturedCard({ post }: { post: Post }) {
  if (!post.isOpen) {
    return (
      <div className="block mb-10 relative rounded-2xl overflow-hidden opacity-50 cursor-not-allowed pointer-events-none" style={{ minHeight: '320px' }}>
        <Image src={post.image} alt={post.imageAlt || post.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-800/75 to-gray-700/30" />
        <div className="relative z-10 p-8 md:p-12 max-w-2xl" style={{ minHeight: '320px' }}>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-gray-500 text-white px-3 py-1 rounded-full">Featured Story</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">{post.category}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white/70 mb-4 leading-tight">{post.title}</h2>
          <p className="text-white/50 leading-relaxed mb-6 text-sm md:text-base">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.stats.map((s) => (
              <span key={s} className="text-[10px] bg-white/10 text-white/50 px-3 py-1 rounded-full font-semibold">{s}</span>
            ))}
          </div>
          <div className="flex items-center gap-3 text-white/40 font-bold text-sm">
            Coming Soon - Content Being Updated
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block mb-10 relative rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-500" style={{ minHeight: '320px' }}>
      <Image src={post.image} alt={post.imageAlt || post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-midnight/95 via-ocean-midnight/75 to-ocean-midnight/30" />
      <div className="relative z-10 p-8 md:p-12 max-w-2xl" style={{ minHeight: '320px' }}>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest bg-ocean-turquoise text-white px-3 py-1 rounded-full">Featured Story</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">{post.category}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4 leading-tight group-hover:text-ocean-turquoise transition-colors">{post.title}</h2>
        <p className="text-white/75 leading-relaxed mb-6 text-sm md:text-base">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {post.stats.map((s) => (
            <span key={s} className="text-[10px] bg-white/10 text-white/70 px-3 py-1 rounded-full font-semibold">{s}</span>
          ))}
        </div>
        <div className="flex items-center gap-3 text-ocean-turquoise font-bold text-sm group-hover:translate-x-1 transition-transform">
          Read Story →
        </div>
      </div>
    </Link>
  );
}

function StoryCard({ post }: { post: Post }) {
  if (!post.isOpen) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 flex flex-col opacity-50 cursor-not-allowed pointer-events-none">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{post.category}</span>
          <span className="text-[10px] text-gray-400">{post.readTime}</span>
        </div>
        <h3 className="font-poppins font-bold text-gray-600 text-base mb-2 leading-snug">{post.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.stats.map((s) => (
            <span key={s} className="text-[10px] bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full font-semibold">{s}</span>
          ))}
        </div>
        <div className="flex items-center justify-between text-xs border-t border-gray-200 pt-3">
          <span className="text-gray-400">{post.dateLabel}</span>
          <span className="text-gray-500 font-bold">Coming Soon</span>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-ocean-turquoise/20 transition-all duration-200 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-bold text-ocean-turquoise uppercase tracking-widest">{post.category}</span>
        <span className="text-[10px] text-gray-400">{post.readTime}</span>
      </div>
      <h3 className="font-poppins font-bold text-ocean-midnight text-base mb-2 leading-snug group-hover:text-ocean-turquoise transition-colors">{post.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {post.stats.map((s) => (
          <span key={s} className="text-[10px] bg-ocean-turquoise/10 text-ocean-turquoise px-2 py-0.5 rounded-full font-semibold">{s}</span>
        ))}
      </div>
      <div className="flex items-center justify-between text-xs border-t border-gray-50 pt-3">
        <span className="text-gray-400">{post.dateLabel}</span>
        <span className="text-ocean-turquoise font-bold group-hover:translate-x-0.5 transition-transform inline-block">Read →</span>
      </div>
    </Link>
  );
}
