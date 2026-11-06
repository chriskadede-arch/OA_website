/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Project › Elasmobranch Awareness & Permaculture
 * URL:  /projects/elasmobranch-awareness
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Did You Know callout
 *   3. Overview
 *   4. Three Phase Roadmap
 *   5. Call to action
 *
 * Where the text/data lives:
 *   • FUNDER  →  top of this file
 * Page text, images and links (editable in Pages CMS)  →  content/projects/elasmobranch-awareness.json
 */
import Link from 'next/link';
import Image from 'next/image';

import PAGE from '@/content/projects/elasmobranch-awareness.json';

export const metadata = PAGE.seo;

const FUNDER = PAGE.FUNDER;

export default function ElasmobranchAwarenessPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE.hero.image}
            alt={PAGE.hero.imageAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-ocean-midnight" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-ocean-turquoise rounded-full animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">{PAGE.hero.eyebrow}</span>
            </div>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">{PAGE.hero.title}</h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">{PAGE.hero.text}</p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">{PAGE.hero.text2}</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">{PAGE.hero.eyebrow2}</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">{PAGE.hero.text3}</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">{PAGE.hero.eyebrow3}</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">{PAGE.hero.text4}</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">{PAGE.hero.eyebrow4}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Funder badge, floating right */}
        <div className="hidden lg:flex absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 flex-col items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">{PAGE.hero.eyebrow5}</span>
          <div className="relative w-36 h-20 bg-white rounded-xl p-3">
            <Image src={FUNDER.logo} alt={FUNDER.name} fill className="object-contain p-2" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Did You Know callout
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-10 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl p-8 border border-slate-200">
            <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 font-poppins font-bold">?</div>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-ocean-midnight">{PAGE.didYouKnowCallout.label}</span>{PAGE.didYouKnowCallout.text}</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Overview
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.overview.eyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">{PAGE.overview.heading}</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">{PAGE.overview.text}</p>
                <p className="text-gray-700 leading-relaxed mb-4">{PAGE.overview.text2}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{PAGE.overview.text3}</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '400px' }}>
              <Image
                src={PAGE.overview.image}
                alt={PAGE.overview.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Three Phase Roadmap
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.threePhaseRoadmap.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">{PAGE.threePhaseRoadmap.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-slate-700">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{PAGE.threePhaseRoadmap.eyebrow2}</div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-4">{PAGE.threePhaseRoadmap.subheading}</h3>
              <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                <li>{PAGE.threePhaseRoadmap.item}</li>
                <li>{PAGE.threePhaseRoadmap.item2}</li>
                <li>{PAGE.threePhaseRoadmap.item3}</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-slate-700">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{PAGE.threePhaseRoadmap.eyebrow3}</div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-4">{PAGE.threePhaseRoadmap.subheading2}</h3>
              <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                <li>{PAGE.threePhaseRoadmap.item4}</li>
                <li>{PAGE.threePhaseRoadmap.item5}</li>
                <li>{PAGE.threePhaseRoadmap.item6}</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-slate-700">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{PAGE.threePhaseRoadmap.eyebrow4}</div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-4">{PAGE.threePhaseRoadmap.subheading3}</h3>
              <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                <li>{PAGE.threePhaseRoadmap.item7}</li>
                <li>{PAGE.threePhaseRoadmap.item8}</li>
                <li>{PAGE.threePhaseRoadmap.item9}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Call to action
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-ocean-midnight to-ocean-turquoise/30 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">{PAGE.callToAction.heading}</h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">{PAGE.callToAction.text}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={PAGE.callToAction.link}
              className="px-8 py-4 bg-ocean-turquoise text-white rounded-xl font-bold hover:bg-white hover:text-ocean-turquoise transition-all shadow-lg"
            >{PAGE.callToAction.linkText}</Link>
            <Link
              href={PAGE.callToAction.link2}
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-ocean-midnight transition-all"
            >{PAGE.callToAction.linkText2}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
