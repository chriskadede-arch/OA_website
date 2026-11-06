/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: About › Our Partners
 * URL:  /about/partners
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Priority Partners — Featured Stories
 *   3. All Partners — Organized by Category
 *   4. Become a Partner (call to action)
 *
 * Where the text/data lives:
 *   • PARTNERS  →  top of this file
 *   • PRIORITY_PARTNERS  →  top of this file
 * Page text, images and links (editable in Pages CMS)  →  content/pages/about-partners.json
 */
import Link from 'next/link';
import Image from 'next/image';
import PartnerLogo from '@/components/common/PartnerLogo';
import PartnerCarousel from '@/components/common/PartnerCarousel';
import PAGE from '@/content/pages/about-partners.json';

export const metadata = PAGE.seo;

type Partner = {
  name: string;
  role?: string;
  outcome?: string;
  category: 'community' | 'government' | 'funding' | 'technical' | 'former';
  logoPath?: string;
  domain?: string;
  current?: boolean;
  showName?: boolean;
  large?: boolean;
};

const PARTNERS: Partner[] = PAGE.PARTNERS as unknown as Partner[];

const PRIORITY_PARTNERS = PAGE.PRIORITY_PARTNERS;

export default function PartnersPage() {
  const communityPartners = PARTNERS.filter(p => p.category === 'community' && p.current);
  const governmentPartners = PARTNERS.filter(p => p.category === 'government' && p.current);
  const fundingPartners = PARTNERS.filter(p => p.category === 'funding' && p.current);
  const technicalPartners = PARTNERS.filter(p => p.category === 'technical' && p.current);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-ocean-turquoise/10 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={PAGE.hero.image} alt={PAGE.hero.imageAlt} fill className="object-cover opacity-10" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.3em] mb-5">{PAGE.hero.eyebrow}</p>
            <h1 className="text-5xl md:text-6xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">{PAGE.hero.title}<br />
              <span className="text-ocean-turquoise">{PAGE.hero.label}</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">{PAGE.hero.text}</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Priority Partners — Featured Stories
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-3">{PAGE.priorityPartnersFeaturedStories.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight">{PAGE.priorityPartnersFeaturedStories.heading}</h2>
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
                      <p className="text-xs text-ocean-turquoise font-bold uppercase tracking-wider mb-1">{PAGE.priorityPartnersFeaturedStories.eyebrow2}</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{partner.relationship}</p>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">{PAGE.priorityPartnersFeaturedStories.eyebrow3}</p>
                      <p className="text-sm text-ocean-midnight font-semibold leading-relaxed">{partner.outcome}</p>
                    </div>
                  </div>

                  {partner.link && (
                    <Link
                      href={partner.link}
                      className="inline-flex items-center gap-2 text-ocean-turquoise font-bold text-sm mt-4 group-hover:gap-3 transition-all"
                    >{PAGE.priorityPartnersFeaturedStories.linkText}<span>→</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · All Partners — Organized by Category
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">

          {/* Community Partners - Most Prominent */}
          <div className="relative">
            <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1a6b5a] to-[#6ee7b7] rounded-full" />
            <div className="pl-8">
              <div className="mb-6">
                <p className="text-xs text-[#1a6b5a] font-bold uppercase tracking-widest mb-2">{PAGE.allPartnersOrganizedByCategory.eyebrow}</p>
                <h2 className="text-2xl md:text-3xl font-poppins font-bold text-ocean-midnight mb-2">{PAGE.allPartnersOrganizedByCategory.heading}</h2>
                <p className="text-gray-600 text-sm italic">{PAGE.allPartnersOrganizedByCategory.text}</p>
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
                <p className="text-xs text-amber-700 font-bold uppercase tracking-widest mb-2">{PAGE.allPartnersOrganizedByCategory.eyebrow2}</p>
                <h2 className="text-2xl md:text-3xl font-poppins font-bold text-ocean-midnight">{PAGE.allPartnersOrganizedByCategory.heading2}</h2>
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
                <p className="text-xs text-ocean-turquoise font-bold uppercase tracking-widest mb-2">{PAGE.allPartnersOrganizedByCategory.eyebrow3}</p>
                <h2 className="text-2xl md:text-3xl font-poppins font-bold text-ocean-midnight mb-2">{PAGE.allPartnersOrganizedByCategory.heading3}</h2>
                <p className="text-gray-600 text-sm">{PAGE.allPartnersOrganizedByCategory.text2}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {fundingPartners.map((partner) => (
                  <div
                    key={partner.name}
                    className={`rounded-xl p-4 border hover:shadow-lg transition-all flex items-center justify-center ${
                      partner.large ? 'h-40 col-span-2' : 'h-28'
                    } ${partner.name === 'Coral Guardian' ? 'bg-gradient-to-br from-blue-900 to-blue-800 border-blue-700' : 'bg-white border-gray-200'}`}
                  >
                    {partner.logoPath ? (
                      partner.showName ? (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 px-2">
                          <PartnerLogo name={partner.name} logoPath={partner.logoPath} size={partner.large ? 'xl' : 'md'} className="flex-1" />
                          <p className="text-[11px] font-bold text-ocean-midnight text-center leading-tight">{partner.name}</p>
                        </div>
                      ) : (
                        <PartnerLogo name={partner.name} logoPath={partner.logoPath} size="md" className="w-full h-full" />
                      )
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
                <p className="text-xs text-cyan-700 font-bold uppercase tracking-widest mb-2">{PAGE.allPartnersOrganizedByCategory.eyebrow4}</p>
                <h2 className="text-2xl md:text-3xl font-poppins font-bold text-ocean-midnight">{PAGE.allPartnersOrganizedByCategory.heading4}</h2>
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

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Become a Partner (call to action)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-ocean-midnight to-ocean-turquoise/30 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ocean-turquoise/20 mb-6">
            <svg className="w-8 h-8 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">{PAGE.becomeAPartner.heading}</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">{PAGE.becomeAPartner.text}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={PAGE.becomeAPartner.link}
              className="px-8 py-4 bg-ocean-turquoise text-ocean-midnight font-bold rounded-xl hover:bg-white transition-all duration-200 shadow-xl"
            >{PAGE.becomeAPartner.linkText}</Link>
            <Link
              href={PAGE.becomeAPartner.link2}
              className="px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-200"
            >{PAGE.becomeAPartner.linkText2}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
