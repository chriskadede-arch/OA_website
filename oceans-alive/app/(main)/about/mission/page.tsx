import Link from 'next/link';
import { PRINCIPLES } from '@/lib/constants';
import SDGRow from '@/components/common/SDGRow';
import { PRIMARY_SDGS } from '@/lib/sdg-mapping';
import AboutNav from '@/components/common/AboutNav';

export const metadata = {
  title: 'Mission & Vision - Oceans Alive Foundation',
  description:
    'Our mission, guiding principles, and values - the philosophy that drives every programme from coral reef to national policy.',
};

const VALUES = [
  {
    title: 'Community-Led',
    body: 'The people closest to the ocean are best placed to care for it. We work alongside communities to develop solutions that reflect local knowledge, priorities and experience.',
    color: 'from-ocean-midnight to-[#0a3560]',
  },
  {
    title: 'Long-Term Thinking',
    body: 'We focus on lasting outcomes rather than short-term projects, helping communities build the skills, partnerships and financial resilience needed to sustain change.',
    color: 'from-[#1a6b5a] to-[#0e4a3c]',
  },
  {
    title: 'Learning & Education',
    body: 'Knowledge creates opportunity. We support learning at every level, from school programmes and community training to citizen science and leadership development.',
    color: 'from-[#0a4f7a] to-[#0e6b8a]',
  },
  {
    title: 'Conservation in Action',
    body: 'We protect and restore marine ecosystems through practical, evidence-based conservation that benefits both nature and people.',
    color: 'from-[#6b3a00] to-[#9a5500]',
  },
  {
    title: 'Partnership',
    body: 'Meaningful change happens when communities, government, researchers and responsible businesses work together toward shared goals.',
    color: 'from-[#3d1a6b] to-[#4f2a8a]',
  },
];

const PRINCIPLE_COLORS = [
  'from-ocean-midnight to-[#0a3560]',
  'from-[#1a6b5a] to-[#0e4a3c]',
  'from-[#6b3a00] to-[#9a5500]',
  'from-[#0a4f7a] to-[#0e6b8a]',
];

export default function MissionPage() {
  return (
    <>
      <AboutNav />
      {/* ── Mission Quote Hero ────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden py-24 md:py-36">
        {/* Giant decorative quote mark */}
        <div className="absolute top-0 left-0 pointer-events-none select-none">
          <span className="text-[30vw] font-poppins font-bold text-ocean-midnight/[0.03] leading-none">&ldquo;</span>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-10 flex items-center gap-3">
            <span className="w-8 h-px bg-ocean-turquoise/50" />
            Our Purpose
          </p>

          <blockquote className="font-poppins font-bold text-ocean-midnight leading-tight mb-10">
            <span className="block text-4xl md:text-6xl lg:text-7xl max-w-5xl">
              &ldquo;We believe the ocean&apos;s future depends on the communities{' '}
              <span className="text-ocean-turquoise">whose livelihoods depend on it.</span>&rdquo;
            </span>
          </blockquote>

          <div className="flex items-center gap-4 mb-14">
            <div className="w-10 h-px bg-ocean-midnight/20" />
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Des Bowden, Co-Founder & CEO, Oceans Alive | Co-Founder & Patron, Kuruwitu Conservation
            </span>
          </div>

          <div className="max-w-3xl">
            <div className="mb-8 pb-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-ocean-turquoise mb-4">Our Mission</h3>
              <p className="text-gray-700 text-xl font-semibold leading-relaxed">
                To create, connect and catalyze co-management initiatives by providing support to BMU and Coastal Indigenous People and Local Communities (IPLC), sharing relevant knowledge and building capacity.
              </p>
            </div>

            {/* The Challenge */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <h3 className="text-sm font-bold uppercase tracking-widest text-ocean-turquoise mb-8">The Challenge We Are Addressing</h3>

              <div className="space-y-8">
                {/* First Paragraph */}
                <div className="relative bg-gradient-to-r from-ocean-turquoise/5 via-ocean-turquoise/3 to-transparent border-l-4 border-ocean-turquoise p-8 rounded-r-2xl">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    For generations, Kenya's coastal people have relied on the ocean for food and work. Today, this way of life is under threat. Coral reefs are struggling because of climate change, pollution, and overfishing. When the reef suffers, families face hard times, with fewer fish to catch and less money to support their homes.
                  </p>
                </div>

                {/* Second Paragraph */}
                <div className="bg-gradient-to-r from-gray-50 to-white border-l-4 border-ocean-midnight/30 p-8 rounded-r-2xl">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Due to population growth, more people are now fishing than ever before, and this has caused fish numbers to drop. To catch what they need, some fishers use nets that are <span className="font-semibold text-ocean-midnight">illegal, unreported and unregulated (IUU)</span>. These methods destroy coral and seagrass and catch fish that are too small before they have reproduced, and because there is little help from local authorities to stop these harmful practices, the ocean continues to suffer.
                  </p>
                </div>

                {/* What Actually Works */}
                <div className="relative overflow-hidden bg-gradient-to-br from-ocean-midnight to-ocean-midnight/90 rounded-2xl p-10 md:p-12">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(46,191,209,0.15),transparent_50%)]"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-ocean-turquoise/5 rounded-full blur-3xl"></div>

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-2 h-2 rounded-full bg-ocean-turquoise"></div>
                      <div className="w-2 h-2 rounded-full bg-ocean-turquoise/60"></div>
                      <div className="w-2 h-2 rounded-full bg-ocean-turquoise/30"></div>
                    </div>
                    <h4 className="font-poppins font-bold text-ocean-turquoise mb-6 text-3xl">What Actually Works</h4>
                    <p className="text-white/90 leading-relaxed text-xl max-w-4xl">
                      Conservation thrives when communities are well-organised and work in strong, long-term partnerships. For over 10 years, Oceans Alive has walked alongside coastal communities to provide the technical, institutional, and financial support needed to turn their vision for a healthy ocean into a reality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision Strip ─────────────────────────────────────────── */}
      <section className="bg-ocean-midnight py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2">
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-ocean-turquoise/50" />
                Our Vision
              </p>
              <p className="text-white text-2xl md:text-3xl font-poppins font-bold leading-snug">
                Marine conservation of Kenya's coastline and its coastal Indigenous People and Local Communities (IPLC) resource use in balance with nature to support well-being and sustainable livelihoods.
              </p>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-7xl font-poppins font-bold text-ocean-turquoise leading-none">2003</div>
              <div className="text-xs text-white/30 uppercase tracking-widest mt-1">twenty years</div>
            </div>
          </div>

          {/* SDG Section */}
          <div className="mt-12 pt-10 border-t border-white/10">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-6 text-center">
              Aligned with United Nations Sustainable Development Goals
            </p>
            <div className="flex justify-center">
              <SDGRow sdgs={PRIMARY_SDGS} size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-ocean-turquoise/50" />
              What We Stand For
            </p>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-ocean-midnight">
              Our Core Values
            </h2>
          </div>

          <div className="space-y-4">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-r ${v.color} p-8 flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300`}
              >
                {/* Number */}
                <div className="shrink-0">
                  <span className="text-5xl font-poppins font-bold text-white/10 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                {/* Vertical divider */}
                <div className="hidden md:block w-px self-stretch bg-white/10" />
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-poppins font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-white/60 leading-relaxed">{v.body}</p>
                </div>
                {/* Arrow */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principles ───────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-4 flex items-center justify-center gap-3">
              <span className="w-6 h-px bg-ocean-turquoise/50" />
              How We Work
              <span className="w-6 h-px bg-ocean-turquoise/50" />
            </p>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-ocean-midnight">
              Four Core Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.number}
                className={`relative group overflow-hidden rounded-3xl bg-gradient-to-br ${PRINCIPLE_COLORS[i]} p-10 min-h-[220px] flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Ghost number bg */}
                <div className="absolute -bottom-4 -right-4 text-[120px] font-poppins font-bold text-white/[0.05] leading-none select-none pointer-events-none">
                  {p.number}
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2 block">
                    Principle {p.number}
                  </span>
                  <h3 className="text-2xl font-poppins font-bold text-white mb-4 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Next Chapter CTA ─────────────────────────────────────── */}
      <section className="bg-gray-50 py-14 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            <span className="font-bold text-ocean-midnight">Continue reading:</span> See the global recognition our community-led model has earned.
          </p>
          <Link
            href="/about/recognition"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-ocean-midnight text-white font-bold text-sm rounded-xl hover:bg-ocean-turquoise hover:text-ocean-midnight transition-all duration-200"
          >
            Recognition & Awards <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
