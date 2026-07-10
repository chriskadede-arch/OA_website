import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { STATIC_BLOG_STORIES } from '@/lib/constants';

// ─── Category configuration ───────────────────────────────────────────────────

const CATEGORY_CONFIG = {
  'coral-restoration': {
    value: 'Coral Restoration',
    eyebrow: 'Reef Gardening · Kilifi County',
    headline: 'Coral\nRestoration',
    description:
      'Since 2019, community fishers have been trained as certified reef gardeners - growing coral fragments in underwater nurseries and transplanting them to bleached areas of Kilifi\'s reefs.',
    heroImage: '/images/divers.jpg',
    heroImageAlt: 'Community divers at the Kuruwitu reef restoration site',
    accentColor: 'ocean-turquoise' as const,
    stats: [
      { number: '25,000+', label: 'Colonies Planted' },
      { number: '85%', label: 'Survival Rate' },
      { number: '400%', label: 'Fish Biomass Increase' },
      { number: '40+', label: 'Divers Trained' },
    ],
  },
  'women-ocean': {
    value: 'Women & Ocean',
    eyebrow: 'Women Leaders · Livelihoods · Kilifi',
    headline: 'Women\n& Ocean',
    description:
      'Women are at the heart of conservation at Oceans Alive - from the Trash4Cash plastic collection programme to the LIFT Network and mangrove restoration.',
    heroImage: '/images/trashforcash3.jpg',
    heroImageAlt: 'Women in Trash4Cash collecting plastic on Kenya\'s coast',
    accentColor: 'ocean-seafoam' as const,
    stats: [
      { number: '120', label: 'Women in Trash4Cash' },
      { number: '2+ t', label: 'Plastic Collected Monthly' },
      { number: 'LIFT', label: 'Women\'s Network' },
      { number: '2003', label: 'Since' },
    ],
  },
  'fisheries': {
    value: 'Fisheries',
    eyebrow: 'Community Fisheries · BMU Governance',
    headline: 'Fisheries\nGovernance',
    description:
      'Working with fisher communities to co-manage 150 km² of Kilifi\'s coastal waters - rebuilding fish stocks and ensuring fishing remains viable for generations to come.',
    heroImage: '/images/fisher.jpg',
    heroImageAlt: 'Fisher at sea in Kilifi County',
    accentColor: 'ocean-turquoise' as const,
    stats: [
      { number: '150 km²', label: 'Under Co-Management' },
      { number: '400%', label: 'Fish Biomass Increase' },
      { number: '12', label: 'BMU Representatives' },
      { number: '20+', label: 'Years Active' },
    ],
  },
  'education': {
    value: 'Education',
    eyebrow: 'Schools · Interns · Community Training',
    headline: 'Ocean\nEducation',
    description:
      'Building a generation of marine conservationists - from primary school field days at Kuruwitu to international intern placements and community-wide training.',
    heroImage: '/images/kids.jpg',
    heroImageAlt: 'Children learning about the ocean at Kuruwitu',
    accentColor: 'ocean-turquoise' as const,
    stats: [
      { number: '2,500+', label: 'People Educated' },
      { number: '200+', label: 'Volunteers Trained' },
      { number: 'Kilifi', label: 'County-Wide Reach' },
      { number: 'Int\'l', label: 'Intern Placements' },
    ],
  },
  'governance': {
    value: 'Governance',
    eyebrow: 'Community Governance · Marine Policy',
    headline: 'Community\nGovernance',
    description:
      'From local BMU structures to national marine policy - helping fisher communities own, govern, and defend their coastal resources through the LMMA and beyond.',
    heroImage: '/images/BMUmeeting.jpg',
    heroImageAlt: 'BMU governance meeting in Kilifi County',
    accentColor: 'ocean-turquoise' as const,
    stats: [
      { number: '150 km²', label: 'LMMA Plan Area' },
      { number: '12', label: 'BMU Representatives' },
      { number: '4', label: 'Partner Communities' },
      { number: '2003', label: 'Since' },
    ],
  },
  'recognition': {
    value: 'Recognition',
    eyebrow: 'Awards · Partnerships · Global Networks',
    headline: 'Recognition\n& Partners',
    description:
      'Oceans Alive\'s community conservation model has earned global recognition - from the IUCN World Congress to international partnerships with Coral Guardian and beyond.',
    heroImage: '/images/oceanday.jpg',
    heroImageAlt: 'World Ocean Day celebrations in Kilifi',
    accentColor: 'ocean-turquoise' as const,
    stats: [
      { number: '2025', label: 'IUCN World Congress' },
      { number: '40+', label: 'Partner Organisations' },
      { number: '20+', label: 'Years Active' },
      { number: 'Global', label: 'Conservation Network' },
    ],
  },
  'impact-stories': {
    value: 'Impact Stories',
    eyebrow: 'Field Results · Real Change · Kilifi County',
    headline: 'Impact\nStories',
    description:
      'These are not press releases - they are the real, measurable, human outcomes of 20+ years of community-led conservation on Kenya\'s coast. Stories of reefs rebuilt, livelihoods created, and governance won.',
    heroImage: '/images/oceanculturelife.jpg',
    heroImageAlt: 'Community life and conservation impact along the Kilifi coast',
    accentColor: 'ocean-turquoise' as const,
    stats: [
      { number: '25,000+', label: 'Corals Planted' },
      { number: '400%', label: 'Fish Recovery' },
      { number: '150 km²', label: 'Co-Managed Ocean' },
      { number: '120', label: 'Women Empowered' },
    ],
  },
  'community-news': {
    value: 'Community News',
    eyebrow: 'Kilifi Communities · Local Voices · Coastal Kenya',
    headline: 'Community\nNews',
    description:
      'From BMU governance decisions to women\'s group milestones and coastal events - the news that matters most to the 1,200+ people whose lives and livelihoods are intertwined with Kenya\'s ocean.',
    heroImage: '/images/communities.jpg',
    heroImageAlt: 'Kilifi coastal community members at a conservation gathering',
    accentColor: 'ocean-seafoam' as const,
    stats: [
      { number: '1,200+', label: 'Community Members' },
      { number: '4', label: 'Partner Communities' },
      { number: '12', label: 'BMU Representatives' },
      { number: '270 km', label: 'Coastline Covered' },
    ],
  },
  'updates': {
    value: 'Latest Updates',
    eyebrow: 'OAF News · Events · Announcements',
    headline: 'Latest\nUpdates',
    description:
      'The latest from Oceans Alive Foundation - programme updates, upcoming events, volunteer opportunities, partnership announcements, and everything happening across Kilifi\'s coastline.',
    heroImage: '/images/oceanday.jpg',
    heroImageAlt: 'Oceans Alive Foundation team at World Ocean Day 2024',
    accentColor: 'ocean-turquoise' as const,
    stats: [
      { number: '2025', label: 'IUCN Featured' },
      { number: '20+', label: 'Years Active' },
      { number: '14', label: 'Active Programmes' },
      { number: '40+', label: 'Global Partners' },
    ],
  },
};

type CategorySlug = keyof typeof CATEGORY_CONFIG;

// Per-story hero images (mirrors BLOG_CONTENT in /blog/[slug]/page.tsx)
const STORY_IMAGES: Record<string, string> = {
  'coral-restoration-journey': '/images/divers.jpg',
  'trash4cash-women': '/images/trashforcash.jpg',
  'youth-conservation': '/images/kids.jpg',
  'co-management-plan': '/images/kamakukijcma.jpg',
  'royal-visit': '/images/oceanday.jpg',
  'world-ocean-day-2024': '/images/communities.jpg',
  'rebuilding-fisheries': '/images/fisher.jpg',
  'ocean-leaders': '/images/interns.jpg',
  'iucn-2025': '/images/kamakukijcma.jpg',
  // Impact Stories
  'kuruwitu-comeback': '/images/oceanculturelife.jpg',
  'mothers-choice-trash4cash': '/images/trashforcash3.jpg',
  'reef-gardener-journal': '/images/man.jpg',
  // Community News
  'bmu-new-leadership-2025': '/images/BMUS.jpg',
  'community-voices-ocean': '/images/communities.jpg',
  'lift-network-eco-market': '/images/womenlearning2.jpg',
  // Latest Updates
  'annual-report-2024': '/images/kamakukijcma.jpg',
  'world-ocean-day-2025': '/images/oceanday.jpg',
  'volunteer-coral-survey-2025': '/images/learning.jpg',
};

const OTHER_CATEGORIES = [
  { slug: 'coral-restoration', label: 'Coral Restoration', desc: 'Reef restoration & gardening', image: '/images/divers.jpg' },
  { slug: 'women-ocean', label: 'Women & Ocean', desc: 'Women-led conservation', image: '/images/trashforcash3.jpg' },
  { slug: 'fisheries', label: 'Fisheries', desc: 'BMU governance & fish stocks', image: '/images/fisher.jpg' },
  { slug: 'education', label: 'Education', desc: 'Learning & training', image: '/images/kids.jpg' },
  { slug: 'governance', label: 'Governance', desc: 'Community governance', image: '/images/BMUmeeting.jpg' },
  { slug: 'recognition', label: 'Recognition', desc: 'Awards & partnerships', image: '/images/oceanday.jpg' },
  { slug: 'impact-stories', label: 'Impact Stories', desc: 'Field results & real change', image: '/images/oceanculturelife.jpg' },
  { slug: 'community-news', label: 'Community News', desc: 'Local voices from the coast', image: '/images/communities.jpg' },
  { slug: 'updates', label: 'Latest Updates', desc: 'News & announcements', image: '/images/oceanday.jpg' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const ACCENT_TEXT: Record<string, string> = {
  'ocean-turquoise': 'text-ocean-turquoise',
  'ocean-sunshine': 'text-ocean-sunshine',
  'ocean-seafoam': 'text-ocean-seafoam',
};

const ACCENT_BG: Record<string, string> = {
  'ocean-turquoise': 'bg-ocean-turquoise',
  'ocean-sunshine': 'bg-ocean-sunshine',
  'ocean-seafoam': 'bg-ocean-seafoam',
};

const ACCENT_BORDER: Record<string, string> = {
  'ocean-turquoise': 'border-ocean-turquoise',
  'ocean-sunshine': 'border-ocean-sunshine',
  'ocean-seafoam': 'border-ocean-seafoam',
};

const ACCENT_BG_LIGHT: Record<string, string> = {
  'ocean-turquoise': 'bg-ocean-turquoise/10',
  'ocean-sunshine': 'bg-ocean-sunshine/10',
  'ocean-seafoam': 'bg-ocean-seafoam/10',
};

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(CATEGORY_CONFIG).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const config = CATEGORY_CONFIG[params.slug as CategorySlug];
  if (!config) return { title: 'Not Found' };
  return {
    title: `${config.value} - Oceans Alive Foundation`,
    description: config.description,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const config = CATEGORY_CONFIG[params.slug as CategorySlug];
  if (!config) notFound();

  const stories = STATIC_BLOG_STORIES.filter((s) => s.category === config.value);
  const featured = stories.find((s) => s.featured) ?? stories[0];
  const rest = stories.filter((s) => s !== featured);
  const others = OTHER_CATEGORIES.filter((c) => c.slug !== params.slug);

  const accentText = ACCENT_TEXT[config.accentColor];
  const accentBg = ACCENT_BG[config.accentColor];
  const accentBorder = ACCENT_BORDER[config.accentColor];
  const accentBgLight = ACCENT_BG_LIGHT[config.accentColor];

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative bg-ocean-midnight overflow-hidden">
        <Image
          src={config.heroImage}
          alt={config.heroImageAlt}
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-midnight/20 via-ocean-midnight/50 to-ocean-midnight" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-0">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/45 hover:text-white text-xs font-bold uppercase tracking-widest mb-12 transition-colors group"
          >
            <svg
              className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Stories
          </Link>

          {/* Eyebrow */}
          <p className={`text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-3 ${accentText}`}>
            <span className="w-8 h-px bg-current inline-block" />
            {config.eyebrow}
          </p>

          {/* Headline */}
          <h1
            className="font-poppins font-bold text-white leading-none mb-6"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', whiteSpace: 'pre-line' }}
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
                <div key={stat.label} className="py-7 px-6 first:pl-0">
                  <div className={`text-2xl md:text-3xl font-poppins font-bold mb-1 ${accentText}`}>
                    {stat.number}
                  </div>
                  <div className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stories ───────────────────────────────────────────────────── */}
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
                We&apos;re preparing new {config.value.toLowerCase()} content. Subscribe to be the
                first to know.
              </p>
              <p className="text-gray-300 text-xs mb-10">
                In the meantime, explore our{' '}
                <Link href="/blog" className="text-ocean-turquoise hover:underline font-semibold">
                  latest stories
                </Link>{' '}
                or{' '}
                <Link href="/blog/category/coral-restoration" className="text-ocean-turquoise hover:underline font-semibold">
                  coral restoration stories
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
              {featured && (
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group block mb-10 relative rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                  style={{ minHeight: '360px' }}
                >
                  <Image
                    src={STORY_IMAGES[featured.slug] ?? config.heroImage}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-ocean-midnight/95 via-ocean-midnight/80 to-ocean-midnight/30" />

                  <div
                    className="relative z-10 p-8 md:p-12 flex flex-col justify-end max-w-2xl"
                    style={{ minHeight: '360px' }}
                  >
                    {/* Badges */}
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white ${accentBg}`}
                      >
                        Featured
                      </span>
                      <span className="text-white/40 text-xs">{featured.readTime}</span>
                      <span className="text-white/30 text-xs">{featured.date}</span>
                    </div>

                    <h2 className="font-poppins font-bold text-white text-2xl md:text-3xl mb-3 leading-tight group-hover:text-ocean-turquoise transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-white/65 text-sm leading-relaxed mb-5 line-clamp-2 max-w-xl">
                      {featured.excerpt}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featured.stats.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] bg-white/10 text-white/65 px-3 py-1 rounded-full font-semibold"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`inline-flex items-center gap-1.5 font-bold text-sm group-hover:translate-x-1 transition-transform ${accentText}`}
                    >
                      Read Story
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              )}

              {/* ── Story grid ── */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((story) => {
                    const img = STORY_IMAGES[story.slug];
                    return (
                      <Link
                        key={story.id}
                        href={`/blog/${story.slug}`}
                        className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-ocean-turquoise/20 transition-all duration-300 flex flex-col"
                      >
                        {/* Photo top */}
                        {img && (
                          <div className="relative h-44 overflow-hidden">
                            <Image
                              src={img}
                              alt={story.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-ocean-midnight/20" />
                            <div className="absolute top-3 left-3">
                              <span
                                className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white ${accentBg}`}
                              >
                                {story.category}
                              </span>
                            </div>
                          </div>
                        )}

                        <div className="p-5 flex flex-col flex-1">
                          {!img && (
                            <span className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${accentText}`}>
                              {story.category}
                            </span>
                          )}
                          <h3 className="font-poppins font-bold text-ocean-midnight text-base mb-2 leading-snug group-hover:text-ocean-turquoise transition-colors">
                            {story.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                            {story.excerpt}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {story.stats.map((s) => (
                              <span
                                key={s}
                                className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${accentText} ${accentBgLight}`}
                              >
                                {s}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between text-xs border-t border-gray-50 pt-3 mt-auto">
                            <span className="text-gray-400">{story.date}</span>
                            <span
                              className={`font-bold group-hover:translate-x-0.5 transition-transform inline-block ${accentText}`}
                            >
                              {story.readTime} →
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}

              {/* If only 1 story total (no rest), a prompt for more */}
              {rest.length === 0 && featured && (
                <p className="text-center text-sm text-gray-400 mt-4">
                  More {config.value.toLowerCase()} coming soon.{' '}
                  <Link href="/contact" className="text-ocean-turquoise font-semibold hover:underline">
                    Subscribe for updates →
                  </Link>
                </p>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Other Categories ──────────────────────────────────────────── */}
      <section className="bg-ocean-midnight py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${accentText}`}>
                Explore More
              </p>
              <h2 className="text-2xl font-poppins font-bold text-white">Other Topics</h2>
            </div>
            <Link
              href="/blog"
              className="text-xs font-bold text-white/40 hover:text-white uppercase tracking-widest transition-colors hidden sm:block"
            >
              All Stories →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {others.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="group relative rounded-2xl overflow-hidden block"
                style={{ minHeight: '140px' }}
              >
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight/60 via-ocean-midnight/25 to-transparent" />

                <div className="relative z-10 p-5 flex flex-col justify-end h-full" style={{ minHeight: '140px' }}>
                  <p className="text-white/50 text-[10px] uppercase tracking-widest font-semibold mb-1">
                    {cat.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <h3 className="font-poppins font-bold text-white text-sm group-hover:text-ocean-turquoise transition-colors">
                      {cat.label}
                    </h3>
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
