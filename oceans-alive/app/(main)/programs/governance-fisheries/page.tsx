/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Our Work › Governance & Sustainable Fisheries
 * URL:  /programs/governance-fisheries
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. What We Do
 * Page text, images and links (editable in Pages CMS)  →  content/old-pages/programs-governance-fisheries.json
 */
import Link from 'next/link';
import Image from 'next/image';
import SDGRow from '@/components/common/SDGRow';

import PAGE from '@/content/old-pages/programs-governance-fisheries.json';

export const metadata = PAGE.seo;

export default function GovernanceFisheriesPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-amber-600 to-orange-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={PAGE.hero.image} alt={PAGE.hero.imageAlt} fill className="object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-24 md:pt-40 md:pb-32">
          <div className="text-6xl font-poppins font-bold text-white/20 mb-4">{PAGE.hero.text}</div>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-6">{PAGE.hero.title}</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">{PAGE.hero.text2}</p>

          {/* Key Impact Metrics */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">{PAGE.hero.text3}</div>
                <div className="text-[9px] text-white/50 uppercase">{PAGE.hero.eyebrow}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">{PAGE.hero.text4}</div>
                <div className="text-[9px] text-white/50 uppercase">{PAGE.hero.eyebrow2}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">{PAGE.hero.text5}</div>
                <div className="text-[9px] text-white/50 uppercase">{PAGE.hero.eyebrow3}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">{PAGE.hero.text6}</div>
                <div className="text-[9px] text-white/50 uppercase">{PAGE.hero.eyebrow4}</div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="text-[9px] text-white/30 uppercase">{PAGE.hero.eyebrow5}</span>
              <SDGRow sdgs={[14, 17, 8]} size="sm" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · What We Do
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-12">{PAGE.whatWeDo.heading}</h2>

          {/* Policy Milestones Banner */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
            <div className="text-center mb-6">
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">{PAGE.whatWeDo.eyebrow}</div>
              <div className="text-3xl font-bold text-amber-700">{PAGE.whatWeDo.text}</div>
              <p className="text-sm text-gray-600 mt-2">{PAGE.whatWeDo.text2}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-5 text-center">
                <div className="text-xl font-bold text-orange-700 mb-2">{PAGE.whatWeDo.text3}</div>
                <div className="text-sm text-gray-600">{PAGE.whatWeDo.text4}</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-xl p-5 text-center">
                <div className="text-xl font-bold text-yellow-700 mb-2">{PAGE.whatWeDo.text5}</div>
                <div className="text-sm text-gray-600">{PAGE.whatWeDo.text6}</div>
              </div>
            </div>
          </div>

          {/* Kilifi County BMU Network Feature */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-amber-600 to-orange-700 p-6">
              <div className="text-white">
                <h3 className="text-2xl font-poppins font-bold">{PAGE.whatWeDo.subheading}</h3>
                <p className="text-white/90 text-sm">{PAGE.whatWeDo.text7}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-6">{PAGE.whatWeDo.text8}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl p-5 text-center text-white">
                  <div className="text-3xl lg:text-4xl font-bold mb-1">{PAGE.whatWeDo.text9}</div>
                  <div className="text-xs uppercase opacity-90">{PAGE.whatWeDo.eyebrow2}</div>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl p-5 text-center text-white">
                  <div className="text-3xl lg:text-4xl font-bold mb-1">{PAGE.whatWeDo.text10}</div>
                  <div className="text-xs uppercase opacity-90">{PAGE.whatWeDo.eyebrow3}</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-5 text-center text-white">
                  <div className="text-3xl lg:text-4xl font-bold mb-1">{PAGE.whatWeDo.text11}</div>
                  <div className="text-xs uppercase opacity-90">{PAGE.whatWeDo.eyebrow4}</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-5 text-center text-white">
                  <div className="text-3xl lg:text-4xl font-bold mb-1">{PAGE.whatWeDo.text12}</div>
                  <div className="text-xs uppercase opacity-90">{PAGE.whatWeDo.eyebrow5}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* First CMA */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">{PAGE.whatWeDo.subheading2}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.whatWeDo.text13}</p>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="text-2xl font-bold text-blue-700">{PAGE.whatWeDo.text14}</div>
                    <div className="text-xs text-gray-600">{PAGE.whatWeDo.text15}</div>
                  </div>
                  <div className="ml-auto">
                    <div className="text-lg font-bold text-blue-600">{PAGE.whatWeDo.text16}</div>
                    <div className="text-xs text-gray-600">{PAGE.whatWeDo.text17}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* BMU Capacity Building */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">{PAGE.whatWeDo.subheading3}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.whatWeDo.text18}</p>
              <div className="space-y-2">
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-sm text-gray-700">{PAGE.whatWeDo.text19}</div>
                </div>
                <div className="bg-teal-50 rounded-lg p-3">
                  <div className="text-sm text-gray-700">{PAGE.whatWeDo.text20}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width - Data & Monitoring */}
          <div className="bg-gradient-to-r from-ocean-midnight to-blue-900 rounded-2xl shadow-xl p-6 sm:p-8 text-white">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="bg-white/20 rounded-lg px-3 py-1 text-white font-bold text-sm inline-block mb-3">{PAGE.whatWeDo.text21}</div>
                <h3 className="text-2xl font-poppins font-bold mb-3">{PAGE.whatWeDo.subheading4}</h3>
                <p className="text-white/90 leading-relaxed mb-4">{PAGE.whatWeDo.text22}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-xs text-white/70 uppercase mb-1">{PAGE.whatWeDo.eyebrow6}</div>
                    <div className="text-lg font-bold">{PAGE.whatWeDo.text23}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-xs text-white/70 uppercase mb-1">{PAGE.whatWeDo.eyebrow7}</div>
                    <div className="text-lg font-bold">{PAGE.whatWeDo.text24}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-xs text-white/70 uppercase mb-1">{PAGE.whatWeDo.eyebrow8}</div>
                    <div className="text-lg font-bold">{PAGE.whatWeDo.text25}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href={PAGE.whatWeDo.link} className="inline-flex items-center gap-2 px-6 py-3 bg-ocean-turquoise text-white font-bold rounded-xl hover:bg-ocean-midnight transition-colors">{PAGE.whatWeDo.linkText}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
