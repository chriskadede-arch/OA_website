/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Project › Ocean 5 Advocacy
 * URL:  /projects/ocean5-advocacy
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Problem Statement
 *   3. Objectives
 *   4. Activities Timeline
 *   5. Outcomes
 *   6. Risks and Sustainability
 *   7. Conclusion
 *   8. Call to action
 *
 * Where the text/data lives:
 *   • FUNDER  →  top of this file
 *   • ACTIVITIES  →  top of this file
 * Page text, images and links (editable in Pages CMS)  →  content/projects/ocean5-advocacy.json
 */
import Link from 'next/link';
import Image from 'next/image';

import PAGE from '@/content/projects/ocean5-advocacy.json';

export const metadata = PAGE.seo;

const FUNDER = PAGE.FUNDER;

const ACTIVITIES = PAGE.ACTIVITIES;

export default function Ocean5AdvocacyPage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-rose-900/80 via-rose-900/70 to-ocean-midnight" />
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
            </div>
          </div>
        </div>

        {/* Funder badge, floating right */}
        <div className="hidden lg:flex absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 flex-col items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">{PAGE.hero.eyebrow4}</span>
          <div className="relative w-36 h-20 bg-white rounded-xl p-3">
            <Image src={FUNDER.logo} alt={FUNDER.name} fill className="object-contain p-2" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Problem Statement
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.problemStatement.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight mb-4">{PAGE.problemStatement.heading}</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">{PAGE.problemStatement.text}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
              <div className="text-3xl font-poppins font-bold text-rose-800 mb-2">{PAGE.problemStatement.text2}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{PAGE.problemStatement.text3}</p>
            </div>
            <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
              <div className="text-3xl font-poppins font-bold text-rose-800 mb-2">{PAGE.problemStatement.text4}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{PAGE.problemStatement.text5}</p>
            </div>
            <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
              <div className="text-3xl font-poppins font-bold text-rose-800 mb-2">{PAGE.problemStatement.text6}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{PAGE.problemStatement.text7}</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">{PAGE.problemStatement.text8}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Objectives
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.objectives.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">{PAGE.objectives.heading}</h2>
          </div>
          <div className="space-y-4">
            {[
              'Enhance Network governance and leadership skills to foster unified advocacy.',
              'Equip BMU members with tools for evidence gathering, policy analysis and public campaigning on IUU threats.',
              'Facilitate strategic partnerships and media engagement to amplify calls for trawler regulation and enforcement.',
              'Monitor and evaluate advocacy impacts to keep strategies adaptive and community driven.',
            ].map((obj, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-rose-900 text-white flex items-center justify-center shrink-0 text-sm font-bold">{i + 1}</div>
                <p className="text-gray-700 leading-relaxed pt-1">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Activities Timeline
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.activitiesTimeline.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">{PAGE.activitiesTimeline.heading}</h2>
          </div>
          <div className="space-y-0">
            {ACTIVITIES.map((item, i) => (
              <div key={item.title} className="flex gap-4 sm:gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center gap-2 shrink-0 w-28">
                  <div className="px-2 sm:px-3 py-2 rounded-full bg-rose-900/5 border-2 border-rose-800 text-center">
                    <span className="text-[11px] font-bold text-rose-800 whitespace-nowrap">{item.months}</span>
                  </div>
                  {i < ACTIVITIES.length - 1 && <div className="w-px flex-1 bg-rose-800/20" />}
                </div>
                <div className="pt-1 pb-2 min-w-0">
                  <h3 className="font-poppins font-bold text-lg sm:text-xl text-ocean-midnight mb-2 break-words">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">{item.body}</p>
                  <p className="text-sm font-semibold text-rose-800">{PAGE.activitiesTimeline.text}{item.output}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Outcomes
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.outcomes.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white leading-tight">{PAGE.outcomes.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-xs font-bold text-ocean-turquoise uppercase tracking-widest mb-3">{PAGE.outcomes.eyebrow2}</p>
              <p className="text-sm text-white/80 leading-relaxed">{PAGE.outcomes.text}</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-xs font-bold text-ocean-turquoise uppercase tracking-widest mb-3">{PAGE.outcomes.eyebrow3}</p>
              <p className="text-sm text-white/80 leading-relaxed">{PAGE.outcomes.text2}</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-xs font-bold text-ocean-turquoise uppercase tracking-widest mb-3">{PAGE.outcomes.eyebrow4}</p>
              <p className="text-sm text-white/80 leading-relaxed">{PAGE.outcomes.text3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 · Risks and Sustainability
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.risksAndSustainability.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">{PAGE.risksAndSustainability.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-ocean-midnight mb-3">{PAGE.risksAndSustainability.subheading}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{PAGE.risksAndSustainability.text}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-ocean-midnight mb-3">{PAGE.risksAndSustainability.subheading2}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{PAGE.risksAndSustainability.text2}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-ocean-midnight mb-3">{PAGE.risksAndSustainability.subheading3}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{PAGE.risksAndSustainability.text3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7 · Conclusion
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl font-poppins font-medium text-ocean-midnight leading-relaxed">{PAGE.conclusion.text}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 8 · Call to action
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
