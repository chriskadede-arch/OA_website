/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Project › One Voice for Coastal Resilience (Oceans5)
 * URL:  /projects/ocean5-advocacy
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Project at a Glance
 *   3. Project Overview (the problem)
 *   4. The Initiative (objectives)
 *   5. Policy Alignment (JCMA Plans)
 *   6. Why Oceans Alive
 *   7. Conclusion
 *   8. Call to action
 *
 * Page text, images and links (editable in Pages CMS)  →  content/projects/ocean5-advocacy.json
 */
import Link from 'next/link';
import Image from 'next/image';

import PAGE from '@/content/projects/ocean5-advocacy.json';

export const metadata = PAGE.seo;

const FUNDER = PAGE.FUNDER;

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
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">{PAGE.hero.text4}</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">{PAGE.hero.eyebrow5}</div>
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
          SECTION 2 · Project at a Glance
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white pt-16 md:pt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-3">{PAGE.atAGlance.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">{PAGE.atAGlance.heading}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {PAGE.atAGlance.items.map((item, i) => (
              <div
                key={item.label}
                className={`relative rounded-2xl p-6 border overflow-hidden ${
                  i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'
                } ${i === 4 ? 'bg-rose-900 border-rose-900 text-white sm:col-span-2 lg:col-span-2' : 'bg-rose-50 border-rose-100'}`}
              >
                <span className={`block h-1 w-10 rounded-full mb-4 ${i === 4 ? 'bg-ocean-sunshine' : 'bg-rose-800'}`} />
                <p className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${i === 4 ? 'text-white/70' : 'text-rose-800'}`}>{item.label}</p>
                <p className={`leading-relaxed ${i === 4 ? 'text-xl font-poppins font-bold text-white' : 'text-sm text-gray-700'}`}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Project Overview (the problem)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.problemStatement.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight mb-4 max-w-3xl mx-auto">{PAGE.problemStatement.heading}</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">{PAGE.problemStatement.text}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PAGE.problemStatement.cards.map((card, i) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-full bg-rose-900 text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                  <h3 className="font-poppins font-bold text-lg text-ocean-midnight">{card.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · The Initiative (objectives)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.objectives.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight mb-4">{PAGE.objectives.heading}</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">{PAGE.objectives.text}</p>
          </div>
          <div className="space-y-4">
            {PAGE.objectives.list.map((obj, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-rose-900 text-white flex items-center justify-center shrink-0 text-sm font-bold">{i + 1}</div>
                <p className="text-gray-700 leading-relaxed pt-1">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Policy Alignment (JCMA Plans)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 lg:gap-14 items-center">
          <div className="rounded-3xl bg-gradient-to-br from-rose-900 to-ocean-midnight p-10 text-white text-center shadow-xl">
            <div className="font-poppins font-black text-5xl md:text-6xl text-ocean-turquoise mb-3">{PAGE.jcma.statValue}</div>
            <p className="text-white/75 text-sm uppercase tracking-widest font-semibold leading-relaxed">{PAGE.jcma.statLabel}</p>
          </div>
          <div>
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.jcma.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight mb-5">{PAGE.jcma.heading}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{PAGE.jcma.text}</p>
            <p className="text-gray-700 font-semibold mb-3">{PAGE.jcma.text2}</p>
            <ul className="space-y-2">
              {PAGE.jcma.threats.map((t) => (
                <li key={t} className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-rose-800 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 · Why Oceans Alive
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.whyOceansAlive.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white leading-tight mb-4">{PAGE.whyOceansAlive.heading}</h2>
            <p className="text-white/70 leading-relaxed max-w-3xl mx-auto">{PAGE.whyOceansAlive.text}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PAGE.whyOceansAlive.items.map((item, i) => (
              <div key={item} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-poppins font-black text-ocean-turquoise/40 mb-3">{String(i + 1).padStart(2, '0')}</div>
                <p className="text-sm text-white/85 leading-relaxed">{item}</p>
              </div>
            ))}
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
