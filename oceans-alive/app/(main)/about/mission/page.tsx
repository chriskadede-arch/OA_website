import Link from 'next/link';
import { PRINCIPLES } from '@/lib/constants';

export const metadata = {
  title: 'Mission & Vision — Oceans Alive Foundation',
  description:
    'Our mission, guiding principles, and values — the philosophy that drives every programme from coral reef to national policy.',
};

const VALUES = [
  {
    title: 'Community-Led',
    body: 'Solutions designed by and for local communities — the people who know the ocean best and have the most to gain from protecting it.',
    color: 'from-ocean-midnight to-[#0a3560]',
  },
  {
    title: 'Sustainability',
    body: 'Long-term environmental and social benefits that outlast any single project, grant cycle, or funding partner.',
    color: 'from-[#1a6b5a] to-[#0e4a3c]',
  },
  {
    title: 'Education',
    body: 'Empowering people with knowledge and skills so conservation capacity stays local — not dependent on outside experts.',
    color: 'from-[#0a4f7a] to-[#0e6b8a]',
  },
  {
    title: 'Conservation',
    body: 'Protecting marine biodiversity and ecosystems through evidence-based action — restoring what was lost, protecting what remains.',
    color: 'from-[#6b3a00] to-[#9a5500]',
  },
  {
    title: 'Partnership',
    body: 'Collaborating with communities, governments, researchers, and responsible businesses who share our values and amplify our reach.',
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
      {/* ── Mission Quote Hero ────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden py-24 md:py-36">
        {/* Giant decorative quote mark */}
        <div className="absolute top-0 left-0 pointer-events-none select-none">
          <span className="text-[30vw] font-poppins font-bold text-ocean-midnight/[0.03] leading-none">&ldquo;</span>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-10 flex items-center gap-3">
            <span className="w-8 h-px bg-ocean-turquoise/50" />
            Chapter 02 · Our Purpose
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
              Desmond Bowden — Founder, Oceans Alive Foundation
            </span>
          </div>

          <div className="max-w-3xl">
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Oceans Alive Foundation empowers Kenya&apos;s coastal communities to become the stewards
              of the ocean on which they depend — restoring coral reefs, rebuilding fisheries,
              and securing livelihoods for generations to come.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Our aim is to create, promote, facilitate, and accelerate environmental, economic,
              and socio-cultural change for good on the Kenyan coast. Every programme we run is
              community-driven, evidence-based, and designed to deliver measurable impact across
              ecology, governance, and livelihoods.
            </p>
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
                A Kenya where every fishing community is the guardian of its own ocean —
                and where the health of the sea guarantees the security of coastal livelihoods
                for generations.
              </p>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-7xl font-poppins font-bold text-ocean-turquoise leading-none">2003</div>
              <div className="text-xs text-white/30 uppercase tracking-widest mt-1">to forever</div>
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
