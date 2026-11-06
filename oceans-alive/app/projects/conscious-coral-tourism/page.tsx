/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Project › Conscious Coral Reef Restoration Tourism
 * URL:  /projects/conscious-coral-tourism
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Ecological Recovery Dashboard
 *   3. The Plan
 *   4. Visitor Experience
 *   5. Progress Checklist
 *   6. Looking Ahead
 *   7. Call to action
 *
 * Where the text/data lives:
 *   • EXPERIENCE  →  top of this file
 *   • PROGRESS  →  top of this file
 *   • FUNDER  →  top of this file
 * Page text, images and links (editable in Pages CMS)  →  content/projects/conscious-coral-tourism.json
 */
import Link from 'next/link';
import Image from 'next/image';

import PAGE from '@/content/projects/conscious-coral-tourism.json';

export const metadata = PAGE.seo;

const EXPERIENCE = PAGE.EXPERIENCE;

const PROGRESS = PAGE.PROGRESS;

const FUNDER = PAGE.FUNDER;

export default function ConsciousCoralTourismPage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/80 via-cyan-900/70 to-ocean-midnight" />
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
          SECTION 2 · Ecological Recovery Dashboard
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.ecologicalRecoveryDashboard.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">{PAGE.ecologicalRecoveryDashboard.heading}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            <div className="bg-cyan-50 rounded-2xl p-4 sm:p-6 text-center border border-cyan-100">
              <div className="text-2xl sm:text-3xl font-poppins font-bold text-cyan-800 mb-1">{PAGE.ecologicalRecoveryDashboard.text}</div>
              <p className="text-[11px] sm:text-xs text-gray-600 uppercase tracking-wide sm:tracking-widest">{PAGE.ecologicalRecoveryDashboard.eyebrow2}</p>
            </div>
            <div className="bg-cyan-50 rounded-2xl p-4 sm:p-6 text-center border border-cyan-100">
              <div className="text-2xl sm:text-3xl font-poppins font-bold text-cyan-800 mb-1">{PAGE.ecologicalRecoveryDashboard.text2}</div>
              <p className="text-[11px] sm:text-xs text-gray-600 uppercase tracking-wide sm:tracking-widest">{PAGE.ecologicalRecoveryDashboard.eyebrow3}</p>
            </div>
            <div className="bg-cyan-50 rounded-2xl p-4 sm:p-6 text-center border border-cyan-100">
              <div className="text-2xl sm:text-3xl font-poppins font-bold text-cyan-800 mb-1">{PAGE.ecologicalRecoveryDashboard.text3}</div>
              <p className="text-[11px] sm:text-xs text-gray-600 uppercase tracking-wide sm:tracking-widest">{PAGE.ecologicalRecoveryDashboard.eyebrow4}</p>
            </div>
            <div className="bg-cyan-50 rounded-2xl p-4 sm:p-6 text-center border border-cyan-100">
              <div className="text-2xl sm:text-3xl font-poppins font-bold text-cyan-800 mb-1">{PAGE.ecologicalRecoveryDashboard.text4}</div>
              <p className="text-[11px] sm:text-xs text-gray-600 uppercase tracking-wide sm:tracking-widest">{PAGE.ecologicalRecoveryDashboard.eyebrow5}</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mt-8 max-w-3xl mx-auto text-center">{PAGE.ecologicalRecoveryDashboard.text5}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · The Plan
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.thePlan.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">{PAGE.thePlan.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-ocean-turquoise text-white rounded-full flex items-center justify-center mb-4 font-poppins font-bold text-xl">{PAGE.thePlan.text}</div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-3">{PAGE.thePlan.subheading}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{PAGE.thePlan.text2}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-ocean-turquoise text-white rounded-full flex items-center justify-center mb-4 font-poppins font-bold text-xl">{PAGE.thePlan.text3}</div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-3">{PAGE.thePlan.subheading2}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{PAGE.thePlan.text4}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-ocean-turquoise text-white rounded-full flex items-center justify-center mb-4 font-poppins font-bold text-xl">{PAGE.thePlan.text5}</div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-3">{PAGE.thePlan.subheading3}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{PAGE.thePlan.text6}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Visitor Experience
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.visitorExperience.eyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">{PAGE.visitorExperience.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{PAGE.visitorExperience.text}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXPERIENCE.map((item) => (
                <div key={item.title} className="bg-cyan-50 rounded-xl p-5 border border-cyan-100">
                  <h3 className="font-poppins font-bold text-ocean-midnight mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Progress Checklist
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.progressChecklist.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white leading-tight">{PAGE.progressChecklist.heading}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROGRESS.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <svg className="w-5 h-5 text-ocean-turquoise shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-white/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 · Looking Ahead
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">{PAGE.lookingAhead.text}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7 · Call to action
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
