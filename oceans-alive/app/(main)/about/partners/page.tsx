import Link from 'next/link';
import { PARTNERS } from '@/lib/constants';
import PartnerCard from '@/components/common/PartnerCard';

export const metadata = {
  title: 'Our Partners - Oceans Alive Foundation',
  description:
    'Coral Guardian, Canon CENA, UK FCDO, UNDP, IUCN - the global network of organisations partnering with Oceans Alive to protect Kenya\'s coast.',
};

const CATEGORIES = [
  {
    label: 'Conservation & Reef Restoration',
    names: ['Coral Guardian', 'Coral Reef Care', 'IUCN'],
    color: 'from-[#1a6b5a] to-[#0e4a3c]',
    accentBg: 'bg-[#6ee7b7]/10',
    accentText: 'text-[#6ee7b7]',
  },
  {
    label: 'Institutional & Development',
    names: ['UK Government FCDO', 'UNDP Kenya', 'Platcorp Foundation'],
    color: 'from-ocean-midnight to-[#0a3560]',
    accentBg: 'bg-ocean-turquoise/10',
    accentText: 'text-ocean-turquoise',
  },
  {
    label: 'Media & Communications',
    names: ['Canon Central & North Africa', 'Athlete Media Group'],
    color: 'from-[#0a4f7a] to-[#0e6b8a]',
    accentBg: 'bg-sky-400/10',
    accentText: 'text-sky-300',
  },
  {
    label: 'Government Partners',
    names: ['Kenya Fisheries Service', 'Kilifi County Government'],
    color: 'from-[#6b3a00] to-[#9a5500]',
    accentBg: 'bg-amber-400/10',
    accentText: 'text-amber-300',
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-ocean-turquoise/50" />
                Chapter 04 · Our Network
              </p>
              <h1 className="font-poppins font-bold text-ocean-midnight text-5xl md:text-6xl leading-[0.95] mb-6">
                Our<br />
                <span className="text-ocean-turquoise">Partners</span>
              </h1>
              <p className="text-gray-500 text-xl leading-relaxed max-w-lg">
                Conservation at this scale requires a global network. These organisations bring
                expertise, resources, and reach - all aligned around communities protecting their own ocean.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.label}
                  className={`rounded-2xl bg-gradient-to-br ${cat.color} p-5`}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-widest mb-3 block ${cat.accentText}`}>
                    {cat.label}
                  </span>
                  <p className="text-white font-bold text-sm">{cat.names.length} partners</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner Cards by Category ────────────────────────────── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {CATEGORIES.map((cat) => {
            const catPartners = PARTNERS.filter((p) => cat.names.includes(p.name));
            return (
              <div key={cat.label}>
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8">
                  <span className={`inline-block w-2 h-6 rounded-full bg-gradient-to-b ${cat.color}`} />
                  <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">{cat.label}</h2>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Cards */}
                <div className={`grid grid-cols-2 md:grid-cols-${Math.min(catPartners.length, 4)} gap-4`}>
                  {catPartners.map((p) => (
                    <PartnerCard key={p.name} name={p.name} role={p.role} logo={p.logo} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── All Partners (quick grid) ─────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-3">All Partners</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Every organisation listed here has contributed directly to our work on the Kenyan coast.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {PARTNERS.map((p) => (
              <PartnerCard key={p.name} name={p.name} role={p.role} logo={p.logo} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Become a Partner ─────────────────────────────────────── */}
      <section className="bg-ocean-midnight py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-5 flex items-center gap-3">
                <span className="w-6 h-px bg-ocean-turquoise/50" />
                Work With Us
              </p>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-5 leading-tight">
                Become a Partner.<br />
                <span className="text-ocean-turquoise">Protect the Ocean.</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-8">
                We work with NGOs, research institutions, governments, media organisations, and
                responsible businesses who share our commitment to community-led conservation.
              </p>
              <Link
                href="/contact?type=Partnership"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-ocean-turquoise text-ocean-midnight font-bold rounded-xl hover:bg-white transition-all duration-200 text-sm"
              >
                Start a Conversation <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Research & Co-creation', desc: 'Joint scientific projects and monitoring' },
                { label: 'Funding & Grants', desc: 'Institutional and philanthropic support' },
                { label: 'Media & Storytelling', desc: 'Amplify community voices globally' },
                { label: 'Capacity Building', desc: 'Training, skills & expertise exchange' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5 hover:bg-white/[0.07] transition-colors"
                >
                  <h3 className="font-poppins font-bold text-white text-sm mb-1.5">{item.label}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Next Chapter CTA ─────────────────────────────────────── */}
      <section className="bg-ocean-midnight py-12 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm">
            <span className="font-bold text-white/70">Continue reading:</span> Meet the team driving this work every day in Kilifi County.
          </p>
          <Link
            href="/about/team"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-ocean-turquoise text-ocean-midnight font-bold text-sm rounded-xl hover:bg-white transition-all duration-200"
          >
            Our Team <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
