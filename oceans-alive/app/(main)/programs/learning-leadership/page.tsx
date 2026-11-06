/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Strategic Objective 1 › Strengthen Coastal Education (Social)
 * URL:  /programs/learning-leadership
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Social Pillar
 *   3. What We Do
 * Page text, images and links (editable in Pages CMS)  →  content/old-pages/programs-learning-leadership.json
 */
import Link from 'next/link';
import Image from 'next/image';
import SDGRow from '@/components/common/SDGRow';

import PAGE from '@/content/old-pages/programs-learning-leadership.json';

export const metadata = PAGE.seo;

export default function LearningLeadershipPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-green-600 to-teal-600 overflow-hidden">
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
              <SDGRow sdgs={[4, 14, 13]} size="sm" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Social Pillar
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-green-900 to-teal-900 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                <line x1="10" y1="8" x2="16" y2="8"/>
                <line x1="10" y1="12" x2="16" y2="12"/>
                <line x1="10" y1="16" x2="16" y2="16"/>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">{PAGE.socialPillar.heading}</h2>
            <p className="text-white/70 text-sm uppercase tracking-widest">{PAGE.socialPillar.eyebrow}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-poppins font-bold text-white mb-6">{PAGE.socialPillar.subheading}</h3>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed mb-6">{PAGE.socialPillar.text}<strong className="text-ocean-turquoise">{PAGE.socialPillar.boldText}</strong>{PAGE.socialPillar.text2}<strong className="text-ocean-turquoise">{PAGE.socialPillar.boldText2}</strong>, <strong className="text-ocean-turquoise">{PAGE.socialPillar.boldText3}</strong>{PAGE.socialPillar.text3}<strong className="text-ocean-turquoise">{PAGE.socialPillar.boldText4}</strong>.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-green-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{PAGE.socialPillar.smallHeading}</h4>
                  <p className="text-white/70 text-sm">{PAGE.socialPillar.text4}</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-teal-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{PAGE.socialPillar.smallHeading2}</h4>
                  <p className="text-white/70 text-sm">{PAGE.socialPillar.text5}</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-green-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                      <circle cx="12" cy="12" r="4"/>
                      <path d="M12 2C8 6 8 10 12 12M12 2c4 4 4 8 0 10"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{PAGE.socialPillar.smallHeading3}</h4>
                  <p className="text-white/70 text-sm">{PAGE.socialPillar.text6}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · What We Do
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-green-50 to-teal-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-12">{PAGE.whatWeDo.heading}</h2>

          {/* Direct Answer - What We Do */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-green-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">{PAGE.whatWeDo.subheading}</h3>
              <p className="text-gray-600 text-sm">{PAGE.whatWeDo.text}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-teal-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-teal-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
                  <polyline points="17 2 12 7 7 2"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">{PAGE.whatWeDo.subheading2}</h3>
              <p className="text-gray-600 text-sm">{PAGE.whatWeDo.text2}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-blue-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2 17 12 22 22 17"/>
                  <polyline points="2 12 12 17 22 12"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">{PAGE.whatWeDo.subheading3}</h3>
              <p className="text-gray-600 text-sm">{PAGE.whatWeDo.text3}</p>
            </div>
          </div>

          {/* Why This Works - The Living Classroom Story */}
          <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-8 text-white">
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

          {/* Youth for Oceans Feature */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6">
              <div className="text-white">
                <h3 className="text-2xl font-poppins font-bold">{PAGE.whatWeDo.subheading5}</h3>
                <p className="text-white/90 text-sm">{PAGE.whatWeDo.text7}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.whatWeDo.text8}</p>
              <p className="text-gray-700 leading-relaxed mb-6">{PAGE.whatWeDo.text9}</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-700">{PAGE.whatWeDo.text10}</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">{PAGE.whatWeDo.eyebrow}</div>
                </div>
                <div className="bg-teal-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-teal-700">{PAGE.whatWeDo.text11}</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">{PAGE.whatWeDo.eyebrow2}</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-700">{PAGE.whatWeDo.text12}</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">{PAGE.whatWeDo.eyebrow3}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Project REEL */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">{PAGE.whatWeDo.subheading6}</h3>
                <div className="text-xs text-ocean-turquoise font-bold uppercase mt-1">{PAGE.whatWeDo.eyebrow4}</div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.whatWeDo.text13}</p>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4">
                <div className="text-sm font-bold text-green-700 mb-2">{PAGE.whatWeDo.text14}</div>
                <div className="space-y-1 text-xs text-gray-600">
                  <div>{PAGE.whatWeDo.text15}</div>
                  <div>{PAGE.whatWeDo.text16}</div>
                  <div>{PAGE.whatWeDo.text17}</div>
                </div>
              </div>
            </div>

            {/* Fisher Folk Academy */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">{PAGE.whatWeDo.subheading7}</h3>
                <div className="text-xs text-amber-600 font-bold uppercase mt-1">{PAGE.whatWeDo.eyebrow5}</div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.whatWeDo.text18}</p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4">
                <div className="text-sm font-bold text-amber-700 mb-2">{PAGE.whatWeDo.text19}</div>
                <div className="space-y-1 text-xs text-gray-600">
                  <div>{PAGE.whatWeDo.text20}</div>
                  <div>{PAGE.whatWeDo.text21}</div>
                  <div>{PAGE.whatWeDo.text22}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width - Citizen Science */}
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl shadow-xl p-6 sm:p-8 text-white">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="bg-white/20 rounded-lg px-3 py-1 text-white font-bold text-sm inline-block mb-3">{PAGE.whatWeDo.text23}</div>
                <h3 className="text-2xl font-poppins font-bold mb-3">{PAGE.whatWeDo.subheading8}</h3>
                <p className="text-white/90 leading-relaxed">{PAGE.whatWeDo.text24}</p>
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
