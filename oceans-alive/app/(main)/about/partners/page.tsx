import Link from 'next/link';
import Image from 'next/image';
import PartnerLogo from '@/components/common/PartnerLogo';
import PartnerCarousel from '@/components/common/PartnerCarousel';

export const metadata = {
  title: 'Partners & Collaborations - Oceans Alive Foundation',
  description:
    'Partnership, philanthropy and community collaboration - the network of organizations making marine conservation possible in Kilifi County.',
};

type Partner = {
  name: string;
  role?: string;
  outcome?: string;
  category: 'community' | 'government' | 'funding' | 'technical' | 'former';
  logoPath?: string;
  domain?: string;
  current?: boolean;
};

const PARTNERS: Partner[] = [
  // Community & Resource-User Institutions (Priority First)
  { name: 'Kuruwitu Conservation & Welfare CBO', role: 'Central community partner in closure, coral restoration and marine education', outcome: 'Continuing management role in the marine protected area', category: 'community', current: true },
  { name: 'Kuruwitu BMU', role: 'Community fisheries governance', category: 'community', current: true },
  { name: 'Kanamai BMU', role: 'KAMAMKUKI JCMA partner', category: 'community', current: true },
  { name: 'Mtwapa BMU', role: 'KAMAMKUKI JCMA partner', category: 'community', current: true },
  { name: 'Marina BMU', role: 'KAMAMKUKI JCMA partner', category: 'community', current: true },
  { name: 'Kidongo BMU', role: 'KAMAMKUKI JCMA partner', category: 'community', current: true },
  { name: 'Kilifi County BMU Network', role: 'County-level learning, coordination & advocacy', category: 'community', current: true },
  { name: 'KAMAMKUKI Joint BMU Committee', role: 'The five BMUs managing the Joint Community Management Area', outcome: 'Community-led management of Kenya\'s first JCMA', category: 'community', current: true },

  // Government & Statutory Partners
  { name: 'Kenya Fisheries Service', role: 'National statutory framework partner', outcome: 'Endorsement and rollout of Kenya\'s first CMA and county BMU network', category: 'government', logoPath: '/images/partners/kenya-fisheries.png', current: true },
  { name: 'County Government of Kilifi', role: 'Co-management and KAMAMKUKI JCMA collaboration', category: 'government', logoPath: '/images/partners/kilifi-county.jpg', current: true },
  { name: 'County Government of Mombasa', role: 'Fisheries governance collaboration', category: 'government', logoPath: '/images/partners/mombasa-county.jpg', current: true },

  // Funding Partners & Donors
  { name: 'Blue Ventures Conservation', role: 'Strengthens BMU governance, fisheries monitoring, financial inclusion & peer learning', outcome: 'Strengthened BMU governance and monitoring systems', category: 'funding', logoPath: '/images/partners/blue-ventures.png', current: true },
  { name: 'Oceans 5', role: 'Ocean conservation funder', category: 'funding', logoPath: '/images/partners/oceans5.jpg', current: true },
  { name: 'Coral Guardian', role: 'Coral restoration partner', category: 'funding', logoPath: '/images/partners/Coral-Guardian-Logo-White (1).png', current: true },
  { name: 'BIOPAMA / IUCN', role: 'Biodiversity & protected area funding', category: 'funding', current: true },
  { name: 'DEFRA', role: 'UK Government environment funding', category: 'funding', logoPath: '/images/partners/defra.jpg', current: true },
  { name: 'OCEAN Community', role: 'Ocean conservation network', category: 'funding', logoPath: '/images/partners/ocean-community.png', current: true },
  { name: 'Canon', role: 'Media & documentation partner', category: 'funding', logoPath: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Canon_logo.svg', current: true },
  { name: 'Saruni Basecamp Foundation', role: 'Community support', category: 'funding', logoPath: '/images/partners/saruni.png', current: true },
  { name: 'Conscious Travel', role: 'Sustainable tourism partner', category: 'funding', logoPath: '/images/partners/conscious-travel.png', current: true },
  { name: 'Seas4Life', role: 'Ocean advocacy', category: 'funding', logoPath: '/images/partners/seas4life.png', current: true },
  { name: 'Ocean Eyes', role: 'Marine conservation', category: 'funding', logoPath: '/images/partners/ocean-eyes.jpg', current: true },
  { name: 'Vipingo Ridge', role: 'Local supporter', category: 'funding', logoPath: '/images/partners/vipingo-ridge.png', current: true },
  { name: 'The Leap', role: 'Community supporter', category: 'funding', logoPath: '/images/partners/the-leap.svg', current: true },

  // Technical, Research & Learning Partners
  { name: 'KMFRI', role: 'Kenya Marine and Fisheries Research Institute', category: 'technical', current: true },
  { name: 'WCS', role: 'Monitoring & communications partner', category: 'technical', current: true },
];

const PRIORITY_PARTNERS = [
  {
    name: 'Blue Ventures Conservation',
    relationship: 'Strengthens BMU governance, fisheries monitoring, financial inclusion and peer learning in the KAMAMKUKI JCMA',
    outcome: 'Strengthened BMU governance and monitoring systems',
    logoPath: '/images/partners/blue-ventures.png',
    link: '/partnerships/blue-ventures'
  },
  {
    name: 'Kenya Fisheries Service',
    relationship: 'National statutory framework for co-management planning, compliance, monitoring and capacity building',
    outcome: 'Endorsement and rollout of Kenya\'s first CMA and county BMU network',
    logoPath: '/images/partners/kenya-fisheries.png'
  },
  {
    name: 'KAMAMKUKI BMUs',
    relationship: 'The five community fisheries institutions that manage the Joint Community Management Area',
    outcome: 'Community-led fisheries management and sustainable coastal development',
    logoPath: null
  },
  {
    name: 'Kuruwitu Conservation & Welfare CBO',
    relationship: 'Central community partner in closure, coral restoration and marine education with deep history and continuing management role',
    outcome: 'Protected marine area with thriving coral and fish populations',
    logoPath: null
  }
];

export default function PartnersPage() {
  const communityPartners = PARTNERS.filter(p => p.category === 'community' && p.current);
  const governmentPartners = PARTNERS.filter(p => p.category === 'government' && p.current);
  const fundingPartners = PARTNERS.filter(p => p.category === 'funding' && p.current);
  const technicalPartners = PARTNERS.filter(p => p.category === 'technical' && p.current);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-ocean-turquoise/10 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/kamakukujcma.jpg" alt="Community Partnership" fill className="object-cover opacity-10" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.3em] mb-5">Partnerships & Collaborations</p>
            <h1 className="text-5xl md:text-6xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">
              Together, Making<br />
              <span className="text-ocean-turquoise">Conservation Possible</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Oceans Alive's work relies on partnership, philanthropy and community collaboration.
              The results and impact presented across this website have been achieved together with
              the institutions and people below, each of whom contributes to making this work possible.
            </p>
          </div>
        </div>
      </section>

      {/* Priority Partners - Featured Stories */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-3">Priority Partnerships</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight">Deep Relationships, Real Outcomes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PRIORITY_PARTNERS.map((partner) => (
              <div key={partner.name} className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-ocean-turquoise/5 rounded-bl-[100px]" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-poppins font-bold text-ocean-midnight pr-4">{partner.name}</h3>
                    {partner.logoPath && (
                      <div className="w-16 h-16 shrink-0">
                        <PartnerLogo name={partner.name} logoPath={partner.logoPath} size="md" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-ocean-turquoise font-bold uppercase tracking-wider mb-1">Relationship</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{partner.relationship}</p>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Outcome</p>
                      <p className="text-sm text-ocean-midnight font-semibold leading-relaxed">{partner.outcome}</p>
                    </div>
                  </div>

                  {partner.link && (
                    <Link
                      href={partner.link}
                      className="inline-flex items-center gap-2 text-ocean-turquoise font-bold text-sm mt-4 group-hover:gap-3 transition-all"
                    >
                      Read the full story <span>→</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Partners - Organized by Category */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">

          {/* Community Partners - Most Prominent */}
          <div className="relative">
            <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1a6b5a] to-[#6ee7b7] rounded-full" />
            <div className="pl-8">
              <div className="mb-6">
                <p className="text-xs text-[#1a6b5a] font-bold uppercase tracking-widest mb-2">Community-Led Action</p>
                <h2 className="text-2xl md:text-3xl font-poppins font-bold text-ocean-midnight mb-2">
                  Community & Resource-User Institutions
                </h2>
                <p className="text-gray-600 text-sm italic">Community-led action is central to Oceans Alive's identity</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {communityPartners.map((partner) => (
                  <div key={partner.name} className="bg-gradient-to-br from-[#1a6b5a]/5 to-transparent rounded-xl p-5 border border-[#1a6b5a]/20 hover:border-[#1a6b5a]/40 transition-all">
                    <h3 className="font-bold text-ocean-midnight text-sm mb-1">{partner.name}</h3>
                    {partner.role && <p className="text-xs text-gray-600 leading-relaxed">{partner.role}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Government Partners */}
          <div className="relative">
            <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-700 to-amber-400 rounded-full" />
            <div className="pl-8">
              <div className="mb-6">
                <p className="text-xs text-amber-700 font-bold uppercase tracking-widest mb-2">Statutory Framework</p>
                <h2 className="text-2xl md:text-3xl font-poppins font-bold text-ocean-midnight">
                  Government & Statutory Partners
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {governmentPartners.map((partner) => (
                  <div key={partner.name} className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-all flex items-center gap-4">
                    {partner.logoPath && (
                      <div className="w-14 h-14 shrink-0">
                        <PartnerLogo name={partner.name} logoPath={partner.logoPath} size="sm" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-ocean-midnight text-xs leading-tight mb-1">{partner.name}</h3>
                      {partner.role && <p className="text-[10px] text-gray-500">{partner.role}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Funding Partners & Donors */}
          <div className="relative">
            <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-ocean-midnight to-ocean-turquoise rounded-full" />
            <div className="pl-8">
              <div className="mb-6">
                <p className="text-xs text-ocean-turquoise font-bold uppercase tracking-widest mb-2">Funding & Support</p>
                <h2 className="text-2xl md:text-3xl font-poppins font-bold text-ocean-midnight mb-2">
                  Funding Partners & Donors
                </h2>
                <p className="text-gray-600 text-sm">
                  Oceans Alive depends on grant funding and donor support to do this work, and we acknowledge that support openly.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {fundingPartners.map((partner) => (
                  <div key={partner.name} className={`rounded-xl p-4 border hover:shadow-lg transition-all h-28 flex items-center justify-center ${partner.name === 'Coral Guardian' ? 'bg-gradient-to-br from-blue-900 to-blue-800 border-blue-700' : 'bg-white border-gray-200'}`}>
                    {partner.logoPath ? (
                      <PartnerLogo name={partner.name} logoPath={partner.logoPath} size="md" className="w-full h-full" />
                    ) : (
                      <div className="text-center">
                        <p className="text-xs font-bold text-ocean-midnight">{partner.name}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Partners */}
          <div className="relative">
            <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-700 to-cyan-400 rounded-full" />
            <div className="pl-8">
              <div className="mb-6">
                <p className="text-xs text-cyan-700 font-bold uppercase tracking-widest mb-2">Research & Learning</p>
                <h2 className="text-2xl md:text-3xl font-poppins font-bold text-ocean-midnight">
                  Technical, Research & Learning Partners
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {technicalPartners.map((partner) => (
                  <div key={partner.name} className="bg-gradient-to-br from-cyan-50 to-transparent rounded-xl p-5 border border-cyan-200 hover:border-cyan-300 transition-all">
                    <h3 className="font-bold text-ocean-midnight text-sm mb-1">{partner.name}</h3>
                    {partner.role && <p className="text-xs text-gray-600">{partner.role}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logo Carousel */}
      <PartnerCarousel />

      {/* Become a Partner CTA */}
      <section className="bg-gradient-to-br from-ocean-midnight to-ocean-turquoise/30 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ocean-turquoise/20 mb-6">
            <svg className="w-8 h-8 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
            Work With Us
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            We collaborate with NGOs, research institutions, governments, media organizations, and responsible
            businesses who share our commitment to community-led conservation.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?type=Partnership"
              className="px-8 py-4 bg-ocean-turquoise text-ocean-midnight font-bold rounded-xl hover:bg-white transition-all duration-200 shadow-xl"
            >
              Start a Conversation →
            </Link>
            <Link
              href="/donate"
              className="px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-200"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
