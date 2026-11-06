/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Programmes › Strategic Objectives overview
 * URL:  /programmes
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Strategic Objectives cards (4)
 * Page text, images and links (editable in Pages CMS)  →  content/old-pages/programmes.json
 */
import Link from 'next/link';
import Image from 'next/image';

import PAGE from '@/content/old-pages/programmes.json';

export const metadata = PAGE.seo;

export default function Programmes() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight pt-36 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-ocean-turquoise inline-block" />{PAGE.hero.eyebrow}</p>
          <h1 className="font-poppins font-bold text-white text-5xl md:text-7xl leading-tight mb-6 max-w-3xl">{PAGE.hero.title}<span className="text-ocean-turquoise">{PAGE.hero.label}</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed mb-10">{PAGE.hero.text}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
            {PAGE.hero.list.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-poppins font-bold text-ocean-turquoise">{s.value}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Strategic Objectives cards (4)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-ocean-midnight">{PAGE.strategicObjectivesCards.heading}</h2>
          </div>

          {/* Creative Bento-Box Layout Same as Homepage */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* Objective 1: Strengthen Coastal Education TALL LEFT */}
            <Link
              href={PAGE.strategicObjectivesCards.link}
              className="group relative rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 border border-ocean-midnight/10 lg:col-span-5 lg:row-span-2"
              style={{ minHeight: '540px' }}
            >
              <Image
                src={PAGE.strategicObjectivesCards.image}
                alt={PAGE.strategicObjectivesCards.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/85 to-green-900/35" />
              <div className="relative flex-1 p-6 flex flex-col justify-between gap-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{PAGE.strategicObjectivesCards.eyebrow}</span>
                  </div>
                  <div className="text-3xl font-poppins font-black text-white/20">{PAGE.strategicObjectivesCards.text}</div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-poppins font-bold text-white mb-2 leading-tight">{PAGE.strategicObjectivesCards.subheading}</h3>
                  <p className="text-sm text-white/85 mb-3 leading-relaxed max-w-lg">{PAGE.strategicObjectivesCards.text2}<strong>{PAGE.strategicObjectivesCards.boldText}</strong>{PAGE.strategicObjectivesCards.text3}</p>
                  <span className="text-sm font-bold text-ocean-turquoise group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">{PAGE.strategicObjectivesCards.label}<span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Objective 2: Promote Marine Ecosystem Integrity TOP RIGHT WIDE */}
            <Link
              href={PAGE.strategicObjectivesCards.link2}
              className="group relative rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 border border-ocean-midnight/10 lg:col-span-7"
              style={{ minHeight: '260px' }}
            >
              <Image
                src={PAGE.strategicObjectivesCards.image2}
                alt={PAGE.strategicObjectivesCards.imageAlt2}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight via-ocean-midnight/85 to-ocean-midnight/35" />
              <div className="relative flex-1 p-6 flex flex-col justify-between gap-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{PAGE.strategicObjectivesCards.eyebrow2}</span>
                  </div>
                  <div className="text-3xl font-poppins font-black text-white/20">{PAGE.strategicObjectivesCards.text4}</div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-poppins font-bold text-white mb-2 leading-tight">{PAGE.strategicObjectivesCards.subheading2}</h3>
                  <p className="text-sm text-white/85 mb-3 leading-relaxed max-w-lg">{PAGE.strategicObjectivesCards.text5}<strong>{PAGE.strategicObjectivesCards.boldText2}</strong>, <strong>{PAGE.strategicObjectivesCards.boldText3}</strong>, <strong>{PAGE.strategicObjectivesCards.boldText4}</strong>{PAGE.strategicObjectivesCards.text6}</p>
                  <span className="text-sm font-bold text-ocean-turquoise group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">{PAGE.strategicObjectivesCards.label2}<span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Objective 3: Promote Food Security & Income BOTTOM RIGHT SMALL */}
            <Link
              href={PAGE.strategicObjectivesCards.link3}
              className="group relative rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 border border-ocean-midnight/10 lg:col-span-4"
              style={{ minHeight: '260px' }}
            >
              <Image
                src={PAGE.strategicObjectivesCards.image3}
                alt={PAGE.strategicObjectivesCards.imageAlt3}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900 via-pink-900/85 to-pink-900/35" />
              <div className="relative flex-1 p-6 flex flex-col justify-between gap-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{PAGE.strategicObjectivesCards.eyebrow3}</span>
                  </div>
                  <div className="text-3xl font-poppins font-black text-white/20">{PAGE.strategicObjectivesCards.text7}</div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-poppins font-bold text-white mb-2 leading-tight">{PAGE.strategicObjectivesCards.subheading3}</h3>
                  <p className="text-sm text-white/85 mb-3 leading-relaxed max-w-lg">
                    <strong>{PAGE.strategicObjectivesCards.boldText5}</strong>{PAGE.strategicObjectivesCards.text8}<strong>{PAGE.strategicObjectivesCards.boldText6}</strong>{PAGE.strategicObjectivesCards.text9}</p>
                  <span className="text-sm font-bold text-ocean-turquoise group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">{PAGE.strategicObjectivesCards.label3}<span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Objective 4: Strengthen Institutional Capacity BOTTOM RIGHT MEDIUM */}
            <Link
              href={PAGE.strategicObjectivesCards.link4}
              className="group relative rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 border border-ocean-midnight/10 lg:col-span-3"
              style={{ minHeight: '260px' }}
            >
              <Image
                src={PAGE.strategicObjectivesCards.image4}
                alt={PAGE.strategicObjectivesCards.imageAlt4}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900 via-cyan-900/85 to-cyan-900/35" />
              <div className="relative flex-1 p-6 flex flex-col justify-between gap-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{PAGE.strategicObjectivesCards.eyebrow4}</span>
                  </div>
                  <div className="text-3xl font-poppins font-black text-white/20">{PAGE.strategicObjectivesCards.text10}</div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-poppins font-bold text-white mb-2 leading-tight">{PAGE.strategicObjectivesCards.subheading4}</h3>
                  <p className="text-sm text-white/85 mb-3 leading-relaxed max-w-lg">
                    <strong>{PAGE.strategicObjectivesCards.boldText7}</strong>, <strong>{PAGE.strategicObjectivesCards.boldText8}</strong>, <strong>{PAGE.strategicObjectivesCards.boldText9}</strong>.
                  </p>
                  <span className="text-sm font-bold text-ocean-turquoise group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">{PAGE.strategicObjectivesCards.label4}<span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
