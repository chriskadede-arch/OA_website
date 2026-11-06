/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Strategic Objective 4 › Institutional Capacity (Governance)
 * URL:  /programs/research-innovation
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Governance Pillar
 *   3. What We Do
 * Page text, images and links (editable in Pages CMS)  →  content/old-pages/programs-research-innovation.json
 */
import Link from 'next/link';
import Image from 'next/image';
import SDGRow from '@/components/common/SDGRow';

import PAGE from '@/content/old-pages/programs-research-innovation.json';

export const metadata = PAGE.seo;

export default function ResearchInnovationPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-cyan-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={PAGE.hero.image} alt={PAGE.hero.imageAlt} fill className="object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-24 md:pt-40 md:pb-32">
          <div className="text-6xl font-poppins font-bold text-white/20 mb-4">{PAGE.hero.text}</div>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-6">{PAGE.hero.title}</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">{PAGE.hero.text2}</p>

          {/* Impact Boxes */}
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
              <SDGRow sdgs={[14, 13, 17]} size="sm" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Governance Pillar
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-cyan-900 to-blue-900 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">{PAGE.governancePillar.heading}</h2>
            <p className="text-white/70 text-sm uppercase tracking-widest">{PAGE.governancePillar.eyebrow}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-poppins font-bold text-white mb-6">{PAGE.governancePillar.subheading}</h3>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed mb-6">{PAGE.governancePillar.text}<strong className="text-ocean-turquoise">{PAGE.governancePillar.boldText}</strong>{PAGE.governancePillar.text2}<strong className="text-ocean-turquoise">{PAGE.governancePillar.boldText2}</strong>{PAGE.governancePillar.text3}<strong className="text-ocean-turquoise">{PAGE.governancePillar.boldText3}</strong>{PAGE.governancePillar.text4}<strong className="text-ocean-turquoise">{PAGE.governancePillar.boldText4}</strong>.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-cyan-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{PAGE.governancePillar.smallHeading}</h4>
                  <p className="text-white/70 text-sm">{PAGE.governancePillar.text5}</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-blue-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{PAGE.governancePillar.smallHeading2}</h4>
                  <p className="text-white/70 text-sm">{PAGE.governancePillar.text6}</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-teal-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{PAGE.governancePillar.smallHeading3}</h4>
                  <p className="text-white/70 text-sm">{PAGE.governancePillar.text7}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · What We Do
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-12">{PAGE.whatWeDo.heading}</h2>

          {/* Direct Answer - What We Do */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-cyan-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-cyan-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">{PAGE.whatWeDo.subheading}</h3>
              <p className="text-gray-600 text-sm">{PAGE.whatWeDo.text}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-blue-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">{PAGE.whatWeDo.subheading2}</h3>
              <p className="text-gray-600 text-sm">{PAGE.whatWeDo.text2}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-green-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">{PAGE.whatWeDo.subheading3}</h3>
              <p className="text-gray-600 text-sm">{PAGE.whatWeDo.text3}</p>
            </div>
          </div>

          {/* Why This Works - The Evidence Story */}
          <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-12 bg-white rounded-full"></div>
              <h3 className="text-2xl font-poppins font-bold">{PAGE.whatWeDo.subheading4}</h3>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed mb-4">{PAGE.whatWeDo.text4}</p>
              <p className="text-white/90 leading-relaxed mb-4">{PAGE.whatWeDo.text5}</p>
              <p className="text-white/90 leading-relaxed">{PAGE.whatWeDo.text6}</p>
            </div>
          </div>

          {/* Monitoring & Research Feature */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-6">
              <div className="text-white">
                <h3 className="text-2xl font-poppins font-bold">{PAGE.whatWeDo.subheading5}</h3>
                <p className="text-white/90 text-sm">{PAGE.whatWeDo.text7}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-6">{PAGE.whatWeDo.text8}</p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex-shrink-0 text-blue-600">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 3l3 4h-2v4h-2v-4H9l3-4z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-poppins font-bold text-ocean-midnight mb-3">{PAGE.whatWeDo.smallHeading}</h4>
                    <p className="text-gray-700 leading-relaxed">{PAGE.whatWeDo.text9}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex-shrink-0 text-pink-600">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-poppins font-bold text-ocean-midnight mb-3">{PAGE.whatWeDo.smallHeading2}</h4>
                    <p className="text-gray-700 leading-relaxed">{PAGE.whatWeDo.text10}</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-5">
                <div className="text-sm font-bold text-cyan-700 mb-2">{PAGE.whatWeDo.text11}</div>
                <div className="text-xs text-gray-600 leading-relaxed">{PAGE.whatWeDo.text12}</div>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Sustainable Finance */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">{PAGE.whatWeDo.subheading6}</h3>
                <div className="text-xs text-green-600 font-bold uppercase mt-1">{PAGE.whatWeDo.eyebrow}</div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.whatWeDo.text13}</p>
              <div className="space-y-2">
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-700">{PAGE.whatWeDo.text14}</div>
                    <div className="text-lg font-bold text-green-600">{PAGE.whatWeDo.text15}</div>
                  </div>
                </div>
                <div className="bg-teal-50 rounded-lg p-3 text-xs text-gray-700 space-y-1">
                  <div>{PAGE.whatWeDo.text16}</div>
                  <div>{PAGE.whatWeDo.text17}</div>
                  <div>{PAGE.whatWeDo.text18}</div>
                </div>
              </div>
            </div>

            {/* BMU Network Governance */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">{PAGE.whatWeDo.subheading7}</h3>
                <div className="text-xs text-blue-600 font-bold uppercase mt-1">{PAGE.whatWeDo.eyebrow2}</div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.whatWeDo.text19}</p>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-sm font-bold text-blue-700 mb-2">{PAGE.whatWeDo.text20}</div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>{PAGE.whatWeDo.text21}</div>
                  <div>{PAGE.whatWeDo.text22}</div>
                  <div>{PAGE.whatWeDo.text23}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width - Scientific Monitoring */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl shadow-xl p-6 sm:p-8 text-white">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="bg-white/20 rounded-lg px-3 py-1 text-white font-bold text-sm inline-block mb-3">{PAGE.whatWeDo.text24}</div>
                <h3 className="text-2xl font-poppins font-bold mb-3">{PAGE.whatWeDo.subheading8}</h3>
                <p className="text-white/90 leading-relaxed mb-4">{PAGE.whatWeDo.text25}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-xs text-white/70 uppercase mb-1">{PAGE.whatWeDo.eyebrow3}</div>
                    <div className="text-lg font-bold">{PAGE.whatWeDo.text26}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-xs text-white/70 uppercase mb-1">{PAGE.whatWeDo.eyebrow4}</div>
                    <div className="text-lg font-bold">{PAGE.whatWeDo.text27}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-xs text-white/70 uppercase mb-1">{PAGE.whatWeDo.eyebrow5}</div>
                    <div className="text-lg font-bold">{PAGE.whatWeDo.text28}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href={PAGE.whatWeDo.link} className="inline-flex items-center gap-3 px-6 py-3 bg-ocean-turquoise text-white font-bold rounded-xl hover:bg-ocean-midnight transition-colors">
              <span className="text-white/60 text-sm">{PAGE.whatWeDo.label}</span>
              <span>{PAGE.whatWeDo.label2}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
