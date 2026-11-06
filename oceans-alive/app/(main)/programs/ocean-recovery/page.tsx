/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Strategic Objective 2 › Marine Ecosystem Integrity (Environment)
 * URL:  /programs/ocean-recovery
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Environment Pillar
 *   3. What We Do
 * Page text, images and links (editable in Pages CMS)  →  content/old-pages/programs-ocean-recovery.json
 */
import Link from 'next/link';
import Image from 'next/image';
import SDGRow from '@/components/common/SDGRow';

import PAGE from '@/content/old-pages/programs-ocean-recovery.json';

export const metadata = PAGE.seo;

export default function OceanRecoveryPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-ocean-midnight to-blue-900 overflow-hidden">
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
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-5 py-3">
                <div className="text-3xl font-poppins font-bold text-white">{PAGE.hero.text3}</div>
                <div className="text-[10px] text-white/60 uppercase tracking-wide">{PAGE.hero.eyebrow}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-5 py-3">
                <div className="text-3xl font-poppins font-bold text-white">{PAGE.hero.text4}</div>
                <div className="text-[10px] text-white/60 uppercase tracking-wide">{PAGE.hero.eyebrow2}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-5 py-3">
                <div className="text-3xl font-poppins font-bold text-white">{PAGE.hero.text5}</div>
                <div className="text-[10px] text-white/60 uppercase tracking-wide">{PAGE.hero.eyebrow3}</div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="text-[9px] text-white/30 uppercase">{PAGE.hero.eyebrow4}</span>
              <SDGRow sdgs={[14, 13, 17]} size="sm" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Environment Pillar
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-ocean-midnight to-blue-900 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                <path d="M12 2v20"/>
                <circle cx="12" cy="14" r="6"/>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">{PAGE.environmentPillar.heading}</h2>
            <p className="text-white/70 text-sm uppercase tracking-widest">{PAGE.environmentPillar.eyebrow}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-poppins font-bold text-white mb-6">{PAGE.environmentPillar.subheading}</h3>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed mb-6">{PAGE.environmentPillar.text}<strong className="text-ocean-turquoise">{PAGE.environmentPillar.boldText}</strong>{PAGE.environmentPillar.text2}<strong className="text-ocean-turquoise">{PAGE.environmentPillar.boldText2}</strong>{PAGE.environmentPillar.text3}<strong className="text-ocean-turquoise">{PAGE.environmentPillar.boldText3}</strong>{PAGE.environmentPillar.text4}<strong className="text-ocean-turquoise">{PAGE.environmentPillar.boldText4}</strong>.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-blue-300">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{PAGE.environmentPillar.smallHeading}</h4>
                  <p className="text-white/70 text-sm">{PAGE.environmentPillar.text5}</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-teal-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{PAGE.environmentPillar.smallHeading2}</h4>
                  <p className="text-white/70 text-sm">{PAGE.environmentPillar.text6}</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-cyan-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{PAGE.environmentPillar.smallHeading3}</h4>
                  <p className="text-white/70 text-sm">{PAGE.environmentPillar.text7}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · What We Do
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-12">{PAGE.whatWeDo.heading}</h2>

          {/* Direct Answer - What We Do */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-pink-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-pink-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">{PAGE.whatWeDo.subheading}</h3>
              <p className="text-gray-600 text-sm">{PAGE.whatWeDo.text}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-blue-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3h18v18H3V3z"/>
                  <path d="M9 9h6v6H9V9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">{PAGE.whatWeDo.subheading2}</h3>
              <p className="text-gray-600 text-sm">{PAGE.whatWeDo.text2}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-green-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">{PAGE.whatWeDo.subheading3}</h3>
              <p className="text-gray-600 text-sm">{PAGE.whatWeDo.text3}</p>
            </div>
          </div>

          {/* Why This Works - The Partnership Model */}
          <div className="bg-gradient-to-br from-ocean-midnight to-blue-900 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-12 bg-ocean-turquoise rounded-full"></div>
              <h3 className="text-2xl font-poppins font-bold">{PAGE.whatWeDo.subheading4}</h3>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed mb-4">{PAGE.whatWeDo.text4}</p>
              <p className="text-white/90 leading-relaxed mb-4">{PAGE.whatWeDo.text5}</p>
              <p className="text-white/90 leading-relaxed">{PAGE.whatWeDo.text6}</p>
            </div>
          </div>

          {/* Featured Project - Tengefu LMMA */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 border-l-8 border-ocean-turquoise">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-ocean-turquoise/10 rounded-lg px-3 py-1 text-ocean-turquoise font-bold text-sm">{PAGE.whatWeDo.text7}</div>
              <div className="bg-amber-100 rounded-lg px-3 py-1 text-amber-700 font-bold text-sm">{PAGE.whatWeDo.text8}</div>
            </div>
            <h3 className="text-2xl font-poppins font-bold text-ocean-midnight mb-4">{PAGE.whatWeDo.subheading5}</h3>
            <p className="text-gray-700 leading-relaxed mb-6">{PAGE.whatWeDo.text9}</p>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h4 className="font-bold text-ocean-midnight mb-2">{PAGE.whatWeDo.smallHeading}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{PAGE.whatWeDo.text10}</p>
            </div>

            {/* Impact Timeline */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-ocean-midnight to-blue-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white mb-1">{PAGE.whatWeDo.text11}</div>
                <div className="text-xs text-white/70 uppercase">{PAGE.whatWeDo.eyebrow}</div>
                <div className="text-xs text-white/50 mt-2">{PAGE.whatWeDo.text12}</div>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white mb-1">{PAGE.whatWeDo.text13}</div>
                <div className="text-xs text-white/70 uppercase">{PAGE.whatWeDo.eyebrow2}</div>
                <div className="text-xs text-white/50 mt-2">{PAGE.whatWeDo.text14}</div>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white mb-1">{PAGE.whatWeDo.text15}</div>
                <div className="text-xs text-white/70 uppercase">{PAGE.whatWeDo.eyebrow3}</div>
                <div className="text-xs text-white/50 mt-2">{PAGE.whatWeDo.text16}</div>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white mb-1">{PAGE.whatWeDo.text17}</div>
                <div className="text-xs text-white/70 uppercase">{PAGE.whatWeDo.eyebrow4}</div>
                <div className="text-xs text-white/50 mt-2">{PAGE.whatWeDo.text18}</div>
              </div>
            </div>
          </div>

          {/* Two Column Layout with SVG Icons */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Coral Restoration */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 flex-shrink-0 text-pink-600">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold text-ocean-midnight">{PAGE.whatWeDo.subheading6}</h3>
                  <div className="text-xs text-pink-600 font-bold uppercase mt-1">{PAGE.whatWeDo.eyebrow5}</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.whatWeDo.text19}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-3 mb-3">
                <div className="bg-pink-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-pink-600">{PAGE.whatWeDo.text20}</div>
                  <div className="text-xs text-gray-600">{PAGE.whatWeDo.text21}</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-purple-600">{PAGE.whatWeDo.text22}</div>
                  <div className="text-xs text-gray-600">{PAGE.whatWeDo.text23}</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-blue-600">{PAGE.whatWeDo.text24}</div>
                  <div className="text-xs text-gray-600">{PAGE.whatWeDo.text25}</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 italic">{PAGE.whatWeDo.text26}</p>
            </div>

            {/* Sea Turtle Conservation */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 flex-shrink-0 text-green-600">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <ellipse cx="12" cy="13" rx="9" ry="7"/>
                    <circle cx="12" cy="6" r="3"/>
                    <path d="M4 13c-1 2-1 4 0 6M20 13c1 2 1 4 0 6M7 10l-2-2M17 10l2-2M7 16l-2 2M17 16l2 2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold text-ocean-midnight">{PAGE.whatWeDo.subheading7}</h3>
                  <div className="text-xs text-green-600 font-bold uppercase mt-1">{PAGE.whatWeDo.eyebrow6}</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.whatWeDo.text27}</p>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-green-700">{PAGE.whatWeDo.text28}</div>
                    <div className="text-xs text-gray-600">{PAGE.whatWeDo.text29}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-teal-700">{PAGE.whatWeDo.text30}</div>
                    <div className="text-xs text-gray-600">{PAGE.whatWeDo.text31}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width - Co-Management */}
          <div className="bg-gradient-to-r from-ocean-midnight to-blue-900 rounded-2xl shadow-xl p-6 sm:p-8 text-white">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-4">
              <div>
                <div className="bg-white/20 rounded-lg px-3 py-1 text-white font-bold text-sm inline-block mb-3">{PAGE.whatWeDo.text32}</div>
                <h3 className="text-2xl font-poppins font-bold mb-3">{PAGE.whatWeDo.subheading8}</h3>
                <p className="text-white/90 leading-relaxed max-w-3xl">{PAGE.whatWeDo.text33}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center min-w-[140px] shrink-0 self-stretch sm:self-auto">
                <div className="text-4xl font-bold text-white">{PAGE.whatWeDo.text34}</div>
                <div className="text-xs text-white/70 uppercase mt-1">{PAGE.whatWeDo.eyebrow7}</div>
                <div className="text-xs text-white/50 mt-2">{PAGE.whatWeDo.text35}</div>
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
