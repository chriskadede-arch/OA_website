import Link from 'next/link';
import Image from 'next/image';
import { IMPACT_STATS } from '@/lib/constants';
import AboutNav from '@/components/common/AboutNav';

export const metadata = {
  title: 'About Oceans Alive Foundation',
  description:
    'Twenty years of community-led marine conservation on the Kenyan coast. Our story, mission, team, partners, and recognition.',
};

const CHAPTERS = [
  {
    num: '01',
    title: 'Our Story',
    subtitle: 'From 30 hectares to a national blueprint',
    body: 'How a handful of Kuruwitu fishermen and a founder with a vision created Kenya\'s first marine sanctuary - and two decades later, a globally recognised conservation model.',
    href: '/about/story',
    gradient: 'from-ocean-midnight to-[#0a3560]',
    accent: 'ocean-turquoise',
    image: '/images/BMUS.jpg',
    wide: true,
  },
  {
    num: '02',
    title: 'Mission & Vision',
    subtitle: 'Purpose-driven, community-led',
    body: 'Our core mission, four guiding principles, and the values that drive every programme from reef to policy table.',
    href: '/about/mission',
    gradient: 'from-[#0a4f7a] to-[#0e6b8a]',
    accent: 'ocean-turquoise',
    image: null,
    wide: false,
  },
  {
    num: '03',
    title: 'Recognition',
    subtitle: 'Global impact, local roots',
    body: 'UNDP Equator Prize · King Charles III · IUCN World Congress 2025. Every award reflects the communities who earned it.',
    href: '/about/recognition',
    gradient: 'from-[#6b3a00] to-[#9a5500]',
    accent: '[#FBB308]',
    image: null,
    wide: false,
  },
  {
    num: '04',
    title: 'Our Partners',
    subtitle: 'Stronger together for the ocean',
    body: 'Coral Guardian, Canon CENA, UK FCDO, UNDP, IUCN - a global network of organisations aligned around one shared mission.',
    href: '/about/partners',
    gradient: 'from-[#1a6b5a] to-[#0e4a3c]',
    accent: '[#6ee7b7]',
    image: null,
    wide: false,
  },
  {
    num: '05',
    title: 'Our Team',
    subtitle: 'The people behind the work',
    body: 'From reef monitors to policy advocates - meet the core team and 7,000+ community stewards driving daily change in Kilifi County.',
    href: '/about/team',
    gradient: 'from-[#022F4E] to-[#1a4f5a]',
    accent: 'ocean-turquoise',
    image: '/images/communities.jpg',
    wide: false,
  },
];

const QUICK_STATS = IMPACT_STATS.slice(0, 4);

export default function AboutHub() {
  return (
    <>
      <AboutNav />
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-ocean-midnight overflow-hidden py-24 md:py-36">
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(46,191,209,0.6) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Ghost "ABOUT" watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[18vw] font-poppins font-bold text-white/[0.03] leading-none tracking-tight whitespace-nowrap">
            ABOUT
          </span>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-ocean-turquoise/50 inline-block" />
            Kilifi County, Kenya · Est. 2017
          </p>
          <h1 className="font-poppins font-bold text-white leading-[0.9] mb-8">
            <span className="block text-6xl md:text-8xl">About</span>
            <span className="block text-6xl md:text-8xl text-ocean-turquoise">Oceans Alive</span>
          </h1>
          <p className="text-white/55 text-xl max-w-2xl leading-relaxed">
            Oceans Alive is a marine conservation organisation working along Kenya's coast to restore ocean ecosystems, strengthen local livelihoods and support community-led stewardship of marine resources.
          </p>
          <p className="text-white/45 text-lg max-w-2xl leading-relaxed mt-4">
            For more than three decades, members of our team have worked alongside fishing communities, Beach Management Units, women's groups and local institutions to develop practical solutions that benefit both people and the environment.
          </p>
        </div>
      </section>

      {/* ── Chapter Cards ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-10 flex items-center gap-3">
            <span className="w-6 h-px bg-ocean-turquoise/50 inline-block" />
            Explore Our Chapters
          </p>

          {/* Grid: 3 cols on lg. Row 1: [card 1 × 2] [card 2]. Row 2: [card 3] [card 4] [card 5]. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CHAPTERS.map((ch, i) => (
              <Link
                key={ch.num}
                href={ch.href}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${ch.gradient} p-8 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
                  i === 0 ? 'min-h-[320px] lg:col-span-2' : 'min-h-[260px]'
                }`}
              >
                {/* Background photo */}
                {ch.image && (
                  <div className="absolute inset-0">
                    <Image
                      src={ch.image}
                      alt={ch.title}
                      fill
                      className="object-cover opacity-15 group-hover:opacity-25 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                )}

                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/[0.04] pointer-events-none" />
                <div className="absolute -bottom-16 -left-10 w-56 h-56 rounded-full bg-black/10 pointer-events-none" />

                <div className="relative">
                  <span className="text-[60px] font-poppins font-bold text-white/10 leading-none select-none">
                    {ch.num}
                  </span>
                </div>

                <div className="relative">
                  <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-${ch.accent}`}>
                    {ch.subtitle}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-3 leading-tight">
                    {ch.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-md">
                    {ch.body}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-white/40 group-hover:text-white group-hover:gap-4 transition-all duration-300">
                    Read chapter <span className="text-base">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Stats ──────────────────────────────────────────── */}
      <section className="bg-ocean-midnight py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
            {QUICK_STATS.map((s, i) => (
              <div key={i} className="text-center px-6 py-4">
                <div className="text-3xl md:text-4xl font-poppins font-bold text-ocean-turquoise mb-1">
                  {s.value}
                </div>
                <p className="text-xs text-white/40 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get Involved CTA ─────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-2">
              Ready to make a difference?
            </h2>
            <p className="text-gray-500">
              Donate, partner with us, or volunteer in the field at Kuruwitu.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link
              href="/donate"
              className="px-6 py-3 bg-ocean-turquoise text-ocean-midnight font-bold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm"
            >
              Donate Now
            </Link>
            <Link
              href="/contact?type=Partnership"
              className="px-6 py-3 border border-ocean-midnight text-ocean-midnight font-bold rounded-xl hover:bg-ocean-midnight hover:text-white transition-all text-sm"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
