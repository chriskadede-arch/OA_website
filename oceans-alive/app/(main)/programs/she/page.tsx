/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Strategic Objective 3 › Food Security & Income (Economic)
 * URL:  /programs/she
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Economic Pillar
 *   3. What We Do
 *   4. Next Strategic Objective Link
 *   5. Women at the Heart of Conservation
 * Page text, images and links (editable in Pages CMS)  →  content/old-pages/programs-she.json
 */
import Link from 'next/link';
import Image from 'next/image';
import SDGRow from '@/components/common/SDGRow';

import PAGE from '@/content/old-pages/programs-she.json';

export const metadata = PAGE.seo;

export default function SHEProgramPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-pink-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={PAGE.hero.image} alt={PAGE.hero.imageAlt} fill className="object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-24 md:pt-40 md:pb-32">
          <div className="text-6xl font-poppins font-bold text-white/20 mb-4">{PAGE.hero.text}</div>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-6">{PAGE.hero.title}</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-4 leading-relaxed">{PAGE.hero.text2}</p>
          <p className="text-lg text-white/80 max-w-3xl mb-8 leading-relaxed">{PAGE.hero.text3}</p>

          {/* Impact Boxes */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">{PAGE.hero.text4}</div>
                <div className="text-[9px] text-white/50 uppercase">{PAGE.hero.eyebrow}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">{PAGE.hero.text5}</div>
                <div className="text-[9px] text-white/50 uppercase">{PAGE.hero.eyebrow2}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">{PAGE.hero.text6}</div>
                <div className="text-[9px] text-white/50 uppercase">{PAGE.hero.eyebrow3}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">{PAGE.hero.text7}</div>
                <div className="text-[9px] text-white/50 uppercase">{PAGE.hero.eyebrow4}</div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="text-[9px] text-white/30 uppercase">{PAGE.hero.eyebrow5}</span>
              <SDGRow sdgs={[5, 8, 14, 13]} size="sm" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Economic Pillar
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-pink-900 to-purple-900 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">{PAGE.economicPillar.heading}</h2>
            <p className="text-white/70 text-sm uppercase tracking-widest">{PAGE.economicPillar.eyebrow}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-poppins font-bold text-white mb-6">{PAGE.economicPillar.subheading}</h3>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed mb-6">{PAGE.economicPillar.text}<strong className="text-ocean-turquoise">{PAGE.economicPillar.boldText}</strong>{PAGE.economicPillar.text2}<strong className="text-ocean-turquoise">{PAGE.economicPillar.boldText2}</strong>{PAGE.economicPillar.text3}<strong className="text-ocean-turquoise">{PAGE.economicPillar.boldText3}</strong>.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-pink-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M23 6l-9.5 9.5-5-5L1 18"/>
                      <polyline points="17 6 23 6 23 12"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{PAGE.economicPillar.smallHeading}</h4>
                  <p className="text-white/70 text-sm">{PAGE.economicPillar.text4}</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-purple-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="18" cy="5" r="3"/>
                      <circle cx="6" cy="12" r="3"/>
                      <circle cx="18" cy="19" r="3"/>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{PAGE.economicPillar.smallHeading2}</h4>
                  <p className="text-white/70 text-sm">{PAGE.economicPillar.text5}</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-green-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                      <circle cx="12" cy="12" r="4"/>
                      <path d="M12 2C8 6 8 10 12 12M12 2c4 4 4 8 0 10M12 22c-4-4-4-8 0-10M12 22c4-4 4-8 0-10"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{PAGE.economicPillar.smallHeading3}</h4>
                  <p className="text-white/70 text-sm">{PAGE.economicPillar.text6}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · What We Do
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-12">{PAGE.whatWeDo.heading}</h2>

          {/* Direct Answer - What We Do */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-pink-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-pink-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">{PAGE.whatWeDo.subheading}</h3>
              <p className="text-gray-600 text-sm">{PAGE.whatWeDo.text}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-green-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20"/>
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2C8 6 8 10 12 12M12 2c4 4 4 8 0 10M12 22c-4-4-4-8 0-10M12 22c4-4 4-8 0-10"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">{PAGE.whatWeDo.subheading2}</h3>
              <p className="text-gray-600 text-sm">{PAGE.whatWeDo.text2}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-purple-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-purple-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">{PAGE.whatWeDo.subheading3}</h3>
              <p className="text-gray-600 text-sm">{PAGE.whatWeDo.text3}</p>
            </div>
          </div>

          {/* Why This Works - The Philosophy */}
          <div className="bg-gradient-to-br from-pink-600 to-purple-700 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-8 text-white">
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

          {/* Mama Karanga - Trash4Cash Feature */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-6">
              <div className="text-white">
                <h3 className="text-2xl font-poppins font-bold">{PAGE.whatWeDo.subheading5}</h3>
                <p className="text-white/90 text-sm">{PAGE.whatWeDo.text7}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.whatWeDo.text8}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.whatWeDo.text9}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-pink-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-pink-600">{PAGE.whatWeDo.text10}</div>
                  <div className="text-xs text-gray-600 uppercase">{PAGE.whatWeDo.eyebrow}</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-purple-600">{PAGE.whatWeDo.text11}</div>
                  <div className="text-xs text-gray-600 uppercase">{PAGE.whatWeDo.eyebrow2}</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-green-600">{PAGE.whatWeDo.text12}</div>
                  <div className="text-xs text-gray-600 uppercase">{PAGE.whatWeDo.eyebrow3}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Grid with SVG Icons */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Climate-Smart Permaculture */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 flex-shrink-0 text-green-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M2 12h20"/>
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2C8 6 8 10 12 12M12 2c4 4 4 8 0 10M12 22c-4-4-4-8 0-10M12 22c4-4 4-8 0-10"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold text-ocean-midnight">{PAGE.whatWeDo.subheading6}</h3>
                  <div className="text-xs text-green-600 font-bold uppercase mt-1">{PAGE.whatWeDo.eyebrow4}</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.whatWeDo.text13}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.whatWeDo.text14}</p>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-700 mb-1">{PAGE.whatWeDo.text15}</div>
                <div className="text-sm text-gray-600">{PAGE.whatWeDo.text16}</div>
                <div className="text-xs text-gray-500 mt-2">{PAGE.whatWeDo.text17}</div>
              </div>
            </div>

            {/* Women's Leadership */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 flex-shrink-0 text-purple-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold text-ocean-midnight">{PAGE.whatWeDo.subheading7}</h3>
                  <div className="text-xs text-purple-600 font-bold uppercase mt-1">{PAGE.whatWeDo.eyebrow5}</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.whatWeDo.text18}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.whatWeDo.text19}</p>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-lg font-bold text-purple-700">{PAGE.whatWeDo.text20}</div>
                <div className="text-sm text-gray-600 mt-1">{PAGE.whatWeDo.text21}</div>
              </div>
            </div>
          </div>

          {/* Full Width - Economic Impact */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-700 rounded-2xl shadow-xl p-6 sm:p-8 text-white">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="bg-white/20 rounded-lg px-3 py-1 text-white font-bold text-sm inline-block mb-3">{PAGE.whatWeDo.text22}</div>
                <h3 className="text-2xl font-poppins font-bold mb-3">{PAGE.whatWeDo.subheading8}</h3>
                <p className="text-white/90 leading-relaxed">{PAGE.whatWeDo.text23}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Next Strategic Objective Link
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link href={PAGE.nextStrategicObjectiveLink.link} className="inline-flex items-center gap-3 px-6 py-3 bg-ocean-turquoise text-white font-bold rounded-xl hover:bg-ocean-midnight transition-colors">
            <span className="text-white/60 text-sm">{PAGE.nextStrategicObjectiveLink.label}</span>
            <span>{PAGE.nextStrategicObjectiveLink.label2}</span>
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Women at the Heart of Conservation
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-ocean-midnight to-[#0a4f7a] py-12 md:py-14 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={PAGE.womenAtTheHeartOfConservation.image}
            alt={PAGE.womenAtTheHeartOfConservation.imageAlt}
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-midnight/60 to-[#0a4f7a]/50" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4 drop-shadow-lg">{PAGE.womenAtTheHeartOfConservation.eyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6 drop-shadow-lg">{PAGE.womenAtTheHeartOfConservation.heading}</h2>
              <p className="text-white/90 leading-relaxed mb-8 drop-shadow-md text-lg">
                <strong>{PAGE.womenAtTheHeartOfConservation.boldText}</strong>{PAGE.womenAtTheHeartOfConservation.text}<strong>{PAGE.womenAtTheHeartOfConservation.boldText2}</strong>{PAGE.womenAtTheHeartOfConservation.text2}</p>
              <Link
                href={PAGE.womenAtTheHeartOfConservation.link}
                className="inline-flex items-center gap-2 bg-ocean-turquoise text-white font-bold px-6 py-3 rounded-xl hover:bg-white hover:text-ocean-midnight transition-all duration-200 shadow-xl"
              >{PAGE.womenAtTheHeartOfConservation.linkText}</Link>
            </div>
            <div className="relative w-full h-[350px] lg:h-[400px]">
              {/* Overlapping Image 1 - Top Right */}
              <div className="absolute top-6 right-6 md:right-12 w-52 md:w-64 lg:w-72 h-40 md:h-48 lg:h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-6 hover:rotate-3 hover:scale-105 transition-all duration-300 z-10">
                <Image
                  src={PAGE.womenAtTheHeartOfConservation.image2}
                  alt={PAGE.womenAtTheHeartOfConservation.imageAlt2}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping Image 2 - Bottom Left */}
              <div className="absolute bottom-6 left-6 md:left-12 w-60 md:w-72 lg:w-80 h-44 md:h-52 lg:h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 z-20">
                <Image
                  src={PAGE.womenAtTheHeartOfConservation.image3}
                  alt={PAGE.womenAtTheHeartOfConservation.imageAlt3}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
