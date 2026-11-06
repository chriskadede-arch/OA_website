/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Project › Fishing Community Empowerment Academy
 * URL:  /projects/fisherfolk-academy
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Pull quote intro
 *   3. Skills grid
 *   4. Living Classroom
 *   5. Participant to Custodian journey
 *   6. Call to action
 *
 * Where the text/data lives:
 *   • SKILLS  →  top of this file
 * Page text, images and links (editable in Pages CMS)  →  content/projects/fisherfolk-academy.json
 */
import Link from 'next/link';
import Image from 'next/image';

import PAGE from '@/content/projects/fisherfolk-academy.json';

export const metadata = PAGE.seo;

const SKILLS = PAGE.SKILLS;

export default function FisherfolkAcademyPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden min-h-[55vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE.hero.image}
            alt={PAGE.hero.imageAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 via-indigo-900/70 to-ocean-midnight" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 pt-40 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <span className="w-2 h-2 bg-ocean-turquoise rounded-full animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">{PAGE.hero.eyebrow}</span>
          </div>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">{PAGE.hero.title}</h1>
          <p className="text-xl text-white/90 leading-relaxed">{PAGE.hero.text}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Pull quote intro
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-poppins font-medium text-ocean-midnight leading-snug">{PAGE.pullQuoteIntro.text}</p>
          <p className="text-gray-600 leading-relaxed mt-6 max-w-2xl mx-auto">{PAGE.pullQuoteIntro.text2}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Skills grid
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.skillsGrid.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">{PAGE.skillsGrid.heading}</h2>
            <p className="text-gray-600 leading-relaxed mt-4 max-w-2xl mx-auto">{PAGE.skillsGrid.text}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {SKILLS.map((skill) => (
              <span key={skill} className="px-5 py-2.5 bg-white border-2 border-indigo-100 rounded-full text-sm font-semibold text-ocean-midnight">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Living Classroom
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden order-2 lg:order-1" style={{ minHeight: '380px' }}>
              <Image
                src={PAGE.livingClassroom.image}
                alt={PAGE.livingClassroom.imageAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.livingClassroom.eyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">{PAGE.livingClassroom.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.livingClassroom.text}</p>
              <p className="text-gray-700 leading-relaxed">{PAGE.livingClassroom.text2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Participant to Custodian journey
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-indigo-950 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.participantToCustodianJourney.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white leading-tight">{PAGE.participantToCustodianJourney.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-white/10 flex items-center justify-center text-white font-bold mb-4">{PAGE.participantToCustodianJourney.text}</div>
              <h3 className="font-poppins font-bold text-white mb-2">{PAGE.participantToCustodianJourney.subheading}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{PAGE.participantToCustodianJourney.text2}</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-white/10 flex items-center justify-center text-white font-bold mb-4">{PAGE.participantToCustodianJourney.text3}</div>
              <h3 className="font-poppins font-bold text-white mb-2">{PAGE.participantToCustodianJourney.subheading2}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{PAGE.participantToCustodianJourney.text4}</p>
            </div>
            <div className="bg-ocean-turquoise/10 rounded-2xl p-6 border border-ocean-turquoise/30 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-ocean-turquoise flex items-center justify-center text-ocean-midnight font-bold mb-4">{PAGE.participantToCustodianJourney.text5}</div>
              <h3 className="font-poppins font-bold text-white mb-2">{PAGE.participantToCustodianJourney.subheading3}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{PAGE.participantToCustodianJourney.text6}</p>
            </div>
          </div>
          <p className="text-white/60 text-center leading-relaxed mt-10 max-w-2xl mx-auto">{PAGE.participantToCustodianJourney.text7}</p>
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
