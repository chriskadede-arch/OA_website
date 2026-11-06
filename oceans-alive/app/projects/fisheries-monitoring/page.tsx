/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Project › Fisheries Monitoring Capacity (KAMAMKUKI)
 * URL:  /projects/fisheries-monitoring
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Geography band
 *   3. Overview
 *   4. Two phase build
 *   5. Collaboration
 *   6. Call to action
 *
 * Where the text/data lives:
 *   • FUNDER  →  top of this file
 * Page text, images and links (editable in Pages CMS)  →  content/projects/fisheries-monitoring.json
 */
import Link from 'next/link';
import Image from 'next/image';

import PAGE from '@/content/projects/fisheries-monitoring.json';

export const metadata = PAGE.seo;

const FUNDER = PAGE.FUNDER;

export default function FisheriesMonitoringPage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 via-emerald-900/70 to-ocean-midnight" />
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
          SECTION 2 · Geography band
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-emerald-50 py-10 border-b border-emerald-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-emerald-100">
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-2">{PAGE.geographyBand.eyebrow}</p>
              <p className="font-poppins font-bold text-ocean-midnight">{PAGE.geographyBand.text}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-emerald-100">
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-2">{PAGE.geographyBand.eyebrow2}</p>
              <p className="font-poppins font-bold text-ocean-midnight">{PAGE.geographyBand.text2}</p>
            </div>
          </div>
          <p className="text-center text-gray-600 leading-relaxed mt-6 max-w-2xl mx-auto">{PAGE.geographyBand.text3}</p>
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
                <p className="text-gray-700 leading-relaxed">{PAGE.overview.text2}</p>
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
          SECTION 4 · Two phase build
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.twoPhaseBuild.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">{PAGE.twoPhaseBuild.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-ocean-turquoise text-white rounded-full flex items-center justify-center mb-4 font-poppins font-bold text-xl">{PAGE.twoPhaseBuild.text}</div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">{PAGE.twoPhaseBuild.subheading}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{PAGE.twoPhaseBuild.text2}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-ocean-turquoise text-white rounded-full flex items-center justify-center mb-4 font-poppins font-bold text-xl">{PAGE.twoPhaseBuild.text3}</div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">{PAGE.twoPhaseBuild.subheading2}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{PAGE.twoPhaseBuild.text4}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Collaboration
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.collaboration.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">{PAGE.collaboration.heading}</h2>
          <p className="text-gray-700 leading-relaxed">{PAGE.collaboration.text}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 · Call to action
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
