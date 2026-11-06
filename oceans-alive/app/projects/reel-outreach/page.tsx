/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Project › REEL School Outreach
 * URL:  /projects/reel-outreach
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Target vs Reality
 *   3. Journey Timeline
 *   4. Results
 *   5. Call to action
 *
 * Where the text/data lives:
 *   • JOURNEY  →  top of this file
 *   • FUNDER  →  top of this file
 * Page text, images and links (editable in Pages CMS)  →  content/projects/reel-outreach.json
 */
import Link from 'next/link';
import Image from 'next/image';

import PAGE from '@/content/projects/reel-outreach.json';

export const metadata = PAGE.seo;

const JOURNEY = PAGE.JOURNEY;

const FUNDER = PAGE.FUNDER;

export default function ReelOutreachPage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 via-teal-900/70 to-ocean-midnight" />
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
          <div className="relative w-36 h-20 bg-ocean-midnight rounded-xl p-3">
            <Image src={FUNDER.logo} alt={FUNDER.name} fill className="object-contain p-2" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Target vs Reality
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{PAGE.targetVsReality.eyebrow}</p>
              <p className="text-3xl font-poppins font-bold text-ocean-midnight">{PAGE.targetVsReality.text}</p>
            </div>
            <div className="bg-ocean-turquoise/5 rounded-2xl p-8 border border-ocean-turquoise/20">
              <p className="text-xs font-bold uppercase tracking-widest text-ocean-turquoise mb-2">{PAGE.targetVsReality.eyebrow2}</p>
              <p className="text-3xl font-poppins font-bold text-ocean-midnight">{PAGE.targetVsReality.text2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Journey Timeline
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.journeyTimeline.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">{PAGE.journeyTimeline.heading}</h2>
          </div>

          <div className="space-y-0">
            {JOURNEY.map((item, i) => (
              <div key={item.step} className="flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-12 h-12 rounded-full bg-teal-900/5 border-2 border-teal-700 flex items-center justify-center">
                    <span className="text-sm font-bold text-teal-700">{item.step}</span>
                  </div>
                  {i < JOURNEY.length - 1 && <div className="w-px flex-1 bg-teal-700/20" />}
                </div>
                <div className="pt-1">
                  <h3 className="font-poppins font-bold text-xl text-ocean-midnight mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Results
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.results.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white leading-tight">{PAGE.results.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-poppins font-bold text-ocean-turquoise mb-2">{PAGE.results.text}</div>
              <p className="text-sm text-white/70 leading-relaxed">{PAGE.results.text2}</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-poppins font-bold text-ocean-turquoise mb-2">{PAGE.results.text3}</div>
              <p className="text-sm text-white/70 leading-relaxed">{PAGE.results.text4}</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-poppins font-bold text-ocean-turquoise mb-2">{PAGE.results.text5}</div>
              <p className="text-sm text-white/70 leading-relaxed">{PAGE.results.text6}</p>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto text-center">
            <p className="text-white/80 leading-relaxed italic">{PAGE.results.text7}</p>
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
