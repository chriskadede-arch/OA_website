/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Project › Ocean Eyes School Programme
 * URL:  /projects/ocean-eyes
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. The Math
 *   3. Pipeline
 *   4. Impact Stats
 *   5. Call to action
 *
 * Where the text/data lives:
 *   • PIPELINE  →  top of this file
 *   • FUNDER  →  top of this file
 * Page text, images and links (editable in Pages CMS)  →  content/projects/ocean-eyes.json
 */
import Link from 'next/link';
import Image from 'next/image';

import PAGE from '@/content/projects/ocean-eyes.json';

export const metadata = PAGE.seo;

const PIPELINE = PAGE.PIPELINE;

const FUNDER = PAGE.FUNDER;

export default function OceanEyesPage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/80 via-amber-900/70 to-ocean-midnight" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-ocean-turquoise rounded-full animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">{PAGE.hero.eyebrow}</span>
            </div>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">{PAGE.hero.title}</h1>
            <p className="text-xl text-white/90 leading-relaxed mb-3">{PAGE.hero.text}</p>
            <p className="text-sm text-white/60 uppercase tracking-widest mb-8">{PAGE.hero.eyebrow2}</p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">{PAGE.hero.text2}</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">{PAGE.hero.eyebrow3}</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">{PAGE.hero.text3}</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">{PAGE.hero.eyebrow4}</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">{PAGE.hero.text4}</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">{PAGE.hero.eyebrow5}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Funder badge, floating right */}
        <div className="hidden lg:flex absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 flex-col items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">{PAGE.hero.eyebrow6}</span>
          <div className="relative w-36 h-20 bg-white rounded-xl p-3">
            <Image src={FUNDER.logo} alt={FUNDER.name} fill className="object-contain p-2" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · The Math
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-amber-50 py-12 border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <div className="bg-white rounded-2xl px-6 py-5 shadow-sm">
              <div className="text-3xl font-poppins font-bold text-amber-800">{PAGE.theMath.text}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">{PAGE.theMath.eyebrow}</div>
            </div>
            <span className="text-2xl text-amber-800/40 font-bold">×</span>
            <div className="bg-white rounded-2xl px-6 py-5 shadow-sm">
              <div className="text-3xl font-poppins font-bold text-amber-800">{PAGE.theMath.text2}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">{PAGE.theMath.eyebrow2}</div>
            </div>
            <span className="text-2xl text-amber-800/40 font-bold">×</span>
            <div className="bg-white rounded-2xl px-6 py-5 shadow-sm">
              <div className="text-3xl font-poppins font-bold text-amber-800">{PAGE.theMath.text3}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">{PAGE.theMath.eyebrow3}</div>
            </div>
            <span className="text-2xl text-amber-800/40 font-bold">=</span>
            <div className="bg-amber-800 rounded-2xl px-6 py-5 shadow-sm">
              <div className="text-3xl font-poppins font-bold text-white">{PAGE.theMath.text4}</div>
              <div className="text-xs text-amber-100 uppercase tracking-widest">{PAGE.theMath.eyebrow4}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Pipeline
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.pipeline.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">{PAGE.pipeline.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PIPELINE.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="bg-gray-50 rounded-2xl p-6 h-full">
                  <div className="text-4xl font-poppins font-black text-amber-800/15 mb-2">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="font-poppins font-bold text-ocean-midnight mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                </div>
                {i < PIPELINE.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-amber-800/30 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Impact Stats
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.impactStats.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white leading-tight mb-4">{PAGE.impactStats.heading}</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">{PAGE.impactStats.text}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-poppins font-bold text-ocean-turquoise mb-2">{PAGE.impactStats.text2}</div>
              <p className="text-sm text-white/60 uppercase tracking-widest">{PAGE.impactStats.eyebrow2}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-poppins font-bold text-ocean-turquoise mb-2">{PAGE.impactStats.text3}</div>
              <p className="text-sm text-white/60 uppercase tracking-widest">{PAGE.impactStats.eyebrow3}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-poppins font-bold text-ocean-turquoise mb-2">{PAGE.impactStats.text4}</div>
              <p className="text-sm text-white/60 uppercase tracking-widest">{PAGE.impactStats.eyebrow4}</p>
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
