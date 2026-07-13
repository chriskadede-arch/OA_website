import Link from 'next/link';
import { PARTNERS } from '@/lib/constants';
import PartnerCard from '@/components/common/PartnerCard';
import PartnerCarousel from '@/components/common/PartnerCarousel';
import PartnerLogo from '@/components/common/PartnerLogo';

export const metadata = {
  title: 'Our Partners - Oceans Alive Foundation',
  description:
    'Government, community, donors and supporters - the network of organizations partnering with Oceans Alive to protect Kenya\'s coast.',
};

type PartnerOrg = {
  name: string;
  role: string;
  category: string;
  link?: string;
  logoPath?: string;
  domain?: string;
  bgColor?: string;
  logoSize?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

const PARTNER_ORGS: PartnerOrg[] = [
  // Government Partners
  { name: 'Kenya Fisheries Service (KeFS)', role: 'National Fisheries Partner', category: 'government', link: '/programs/governance-fisheries', logoPath: '/images/partners/kenya-fisheries.png' },
  { name: 'County Government of Kilifi', role: 'Fisheries Directorate - Agriculture, Fisheries & Blue Economy, Livestock Development and Irrigation', category: 'government', link: '/programs/governance-fisheries', logoPath: '/images/partners/kilifi-county.jpg' },
  { name: 'County Government of Mombasa', role: 'Fisheries Directorate', category: 'government', logoPath: '/images/partners/mombasa-county.jpg' },

  // Community Partners
  { name: 'Kuruwitu Beach Management Unit (KBMU)', role: 'Community Governance Partner', category: 'community', link: '/programs/governance-fisheries' },
  { name: 'Kuruwitu Conservation & Welfare CBO (KCW-CBO)', role: 'Community-Based Organization', category: 'community' },

  // Current Donors  - Using logos and domains with brand colors
  { name: 'Coral Guardian', role: 'Coral Restoration Partner', category: 'donor', link: '/partnerships/coral-guardian', logoPath: '/images/partners/coral-guardian.png', bgColor: '#1a2332' },
  { name: 'Blue Ventures', role: 'Conservation Funding Partner', category: 'donor', domain: 'blueventures.org', bgColor: '#0066cc' },
  { name: 'OCEAN Community', role: 'Ocean Conservation Network', category: 'donor', logoPath: '/images/partners/ocean-community.png', bgColor: '#ffffff', logoSize: 'xxl' },
  { name: 'Canon', role: 'Media & Documentation Partner', category: 'donor', link: '/programs/research-innovation', domain: 'canon.com', bgColor: '#ffffff', logoSize: 'xl' },
  { name: 'DEFRA', role: 'UK Department for Environment, Food & Rural Affairs', category: 'donor', logoPath: '/images/partners/defra.jpg', bgColor: '#ffffff' },
  { name: 'Saruni Basecamp Foundation', role: 'Community Support Partner', category: 'donor', logoPath: '/images/partners/saruni.png', bgColor: '#ffffff' },
  { name: 'Conscious Travel', role: 'Sustainable Tourism Partner', category: 'donor', logoPath: '/images/partners/conscious-travel.png', bgColor: '#ffffff' },
  { name: 'Seas4Life', role: 'Ocean Advocacy Partner', category: 'donor', logoPath: '/images/partners/seas4life.png', bgColor: '#5db9c4' },
  { name: 'Oceans 5', role: 'Ocean Conservation Funder', category: 'donor', logoPath: '/images/partners/oceans5.jpg', bgColor: '#ffffff' },
  { name: 'Ocean Eyes', role: 'Marine Conservation Partner', category: 'donor', logoPath: '/images/partners/ocean-eyes.jpg', bgColor: '#ffffff' },

  // Supporters
  { name: 'Vipingo Ridge', role: 'Local Supporter', category: 'supporter', logoPath: '/images/partners/vipingo-ridge.png', bgColor: '#ffffff' },
  { name: 'The Leap', role: 'Community Supporter', category: 'supporter', logoPath: '/images/partners/the-leap.svg', bgColor: '#301535' },
];

const CATEGORIES = [
  {
    label: 'Government Partners',
    category: 'government',
    color: 'from-[#6b3a00] to-[#9a5500]',
    accentBg: 'bg-amber-400/10',
    accentText: 'text-amber-300',
  },
  {
    label: 'Community Partners',
    category: 'community',
    color: 'from-[#1a6b5a] to-[#0e4a3c]',
    accentBg: 'bg-[#6ee7b7]/10',
    accentText: 'text-[#6ee7b7]',
  },
  {
    label: 'Current Donors',
    category: 'donor',
    color: 'from-ocean-midnight to-[#0a3560]',
    accentBg: 'bg-ocean-turquoise/10',
    accentText: 'text-ocean-turquoise',
  },
  {
    label: 'Supporters',
    category: 'supporter',
    color: 'from-[#0a4f7a] to-[#0e6b8a]',
    accentBg: 'bg-sky-400/10',
    accentText: 'text-sky-300',
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
                Our Network
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
              {CATEGORIES.map((cat) => {
                const count = PARTNER_ORGS.filter(p => p.category === cat.category).length;
                return (
                  <div
                    key={cat.label}
                    className={`rounded-2xl bg-gradient-to-br ${cat.color} p-5`}
                  >
                    <span className={`text-[10px] font-bold uppercase tracking-widest mb-3 block ${cat.accentText}`}>
                      {cat.label}
                    </span>
                    <p className="text-white font-bold text-sm">{count} {count === 1 ? 'partner' : 'partners'}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Auto-scrolling Partner Carousel ─────────────────────────── */}
      <PartnerCarousel />

      {/* ── Creative Partner Mosaic (Bento Grid) ─────────────────────────────── */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* First Row: Government (left) + Current Donors (center) + Supporters (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">

            {/* Government Partners - Compact Left Column */}
            <div className="lg:col-span-3">
              <div className={`h-full rounded-2xl bg-gradient-to-br ${CATEGORIES[0].color} p-4 relative overflow-hidden`}>
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/5" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/50 mb-3 block">
                  {CATEGORIES[0].label}
                </span>
                <div className="space-y-2">
                  {PARTNER_ORGS.filter(p => p.category === 'government').map((partner) => (
                    <div key={partner.name}>
                      {partner.link ? (
                        <Link href={partner.link} className="group block p-3 rounded-lg bg-white hover:bg-gray-50 border border-gray-200 transition-all">
                          <div className="flex items-center gap-2">
                            <PartnerLogo name={partner.name} domain={partner.domain} logoPath={partner.logoPath} size="md" />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-[10px] font-bold text-ocean-midnight leading-tight line-clamp-1">{partner.name}</h4>
                              <span className="text-[8px] text-ocean-turquoise font-bold opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <div className="p-3 rounded-lg bg-white border border-gray-200">
                          <div className="flex items-center gap-2">
                            <PartnerLogo name={partner.name} domain={partner.domain} logoPath={partner.logoPath} size="md" />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-[10px] font-bold text-ocean-midnight leading-tight line-clamp-1">{partner.name}</h4>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Current Donors - Wide Center Column */}
            <div className="lg:col-span-6">
              <div className={`rounded-2xl bg-gradient-to-br ${CATEGORIES[2].color} p-6 relative overflow-hidden`}>
                <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-white/5" />
                <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-white/5" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 block">
                  {CATEGORIES[2].label}
                </span>
                <p className="text-white/40 italic text-xs mb-4 flex items-center gap-2">
                  <svg className="w-3 h-3 text-ocean-turquoise/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  Click any partner to discover the story behind our collaboration
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {PARTNER_ORGS.filter(p => p.category === 'donor').map((partner) => (
                    <div key={partner.name} className="relative">
                      {partner.link ? (
                        <Link
                          href={partner.link}
                          className="group relative block p-5 rounded-xl hover:shadow-lg hover:ring-2 hover:ring-ocean-turquoise/50 transition-all h-28 flex items-center justify-center overflow-hidden"
                          style={{ backgroundColor: partner.bgColor || '#ffffff' }}
                        >
                          <PartnerLogo name={partner.name} domain={partner.domain} logoPath={partner.logoPath} size={partner.logoSize || 'lg'} className="w-full h-full group-hover:scale-105 transition-transform" />
                          {/* Arrow indicator for clickable logos */}
                          <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-ocean-turquoise text-white flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                            →
                          </div>
                        </Link>
                      ) : (
                        <div
                          className="p-5 rounded-xl h-28 flex items-center justify-center opacity-80"
                          style={{ backgroundColor: partner.bgColor || '#ffffff' }}
                        >
                          <PartnerLogo name={partner.name} domain={partner.domain} logoPath={partner.logoPath} size={partner.logoSize || 'lg'} className="w-full h-full" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Supporters - Compact Right Column */}
            <div className="lg:col-span-3">
              <div className={`h-full rounded-2xl bg-gradient-to-br ${CATEGORIES[3].color} p-4 relative overflow-hidden`}>
                <div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-full bg-white/5" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/50 mb-3 block">
                  {CATEGORIES[3].label}
                </span>
                <div className="space-y-2">
                  {PARTNER_ORGS.filter(p => p.category === 'supporter').map((partner) => (
                    <div
                      key={partner.name}
                      className="p-3 rounded-lg h-20 flex items-center justify-center"
                      style={{ backgroundColor: partner.bgColor || '#ffffff' }}
                    >
                      <PartnerLogo name={partner.name} domain={partner.domain} logoPath={partner.logoPath} size="sm" className="w-full h-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Second Row: Community Partners Full Width */}
          <div className="grid grid-cols-1 gap-4">
            <div className="lg:col-span-12">
              <div className={`rounded-2xl bg-gradient-to-br ${CATEGORIES[1].color} p-4 relative overflow-hidden`}>
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/5" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/50 mb-3 block">
                  {CATEGORIES[1].label}
                </span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {PARTNER_ORGS.filter(p => p.category === 'community').map((partner) => (
                    <div key={partner.name}>
                      {partner.link ? (
                        <Link href={partner.link} className="group block p-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition-all">
                          <h4 className="text-xs font-bold text-white leading-tight">{partner.name}</h4>
                          <span className="text-[8px] text-white/80 font-bold mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
                        </Link>
                      ) : (
                        <div className="p-3 rounded-lg bg-white/10 border border-white/10">
                          <h4 className="text-xs font-bold text-white leading-tight">{partner.name}</h4>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
