/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: About › Mission & Vision
 * URL:  /about/mission
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Mission Quote Hero
 *   2. Vision strip
 *   3. Values
 *   4. Principles
 *   5. Next Chapter (call to action)
 *
 * Where the text/data lives:
 *   • PRINCIPLES  →  lib/constants.ts
 *   • PRIMARY_SDGS  →  lib/sdg-mapping.ts
 *   • VALUES  →  top of this file
 * Page text, images and links (editable in Pages CMS)  →  content/pages/about-mission.json
 */
import Link from 'next/link';
import { PRINCIPLES } from '@/lib/constants';
import SDGRow from '@/components/common/SDGRow';
import { PRIMARY_SDGS } from '@/lib/sdg-mapping';
import PAGE from '@/content/pages/about-mission.json';

export const metadata = PAGE.seo;

const VALUES = PAGE.VALUES;

const PRINCIPLE_COLORS = PAGE.PRINCIPLE_COLORS;

export default function MissionPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Mission Quote Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden pt-36 pb-24 md:pt-48 md:pb-36">
        {/* Giant decorative quote mark */}
        <div className="absolute top-0 left-0 pointer-events-none select-none">
          <span className="text-[30vw] font-poppins font-bold text-ocean-midnight/[0.03] leading-none">&ldquo;</span>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-10 flex items-center gap-3">
            <span className="w-8 h-px bg-ocean-turquoise/50" />{PAGE.missionQuoteHero.eyebrow}</p>

          <blockquote className="font-poppins font-bold text-ocean-midnight leading-tight mb-10">
            <span className="block text-4xl md:text-6xl lg:text-7xl max-w-5xl">{PAGE.missionQuoteHero.label}{' '}
              <span className="text-ocean-turquoise">{PAGE.missionQuoteHero.label2}</span>&rdquo;
            </span>
          </blockquote>

          <div className="flex items-center gap-4 mb-14">
            <div className="w-10 h-px bg-ocean-midnight/20" />
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{PAGE.missionQuoteHero.eyebrow2}</span>
          </div>

          <div className="max-w-3xl">
            <div className="mb-8 pb-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-ocean-turquoise mb-4">{PAGE.missionQuoteHero.subheading}</h3>
              <p className="text-gray-700 text-xl font-semibold leading-relaxed">{PAGE.missionQuoteHero.text}</p>
            </div>

            {/* The Challenge */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <h3 className="text-sm font-bold uppercase tracking-widest text-ocean-turquoise mb-8">{PAGE.missionQuoteHero.subheading2}</h3>

              <div className="space-y-8">
                {/* First Paragraph */}
                <div className="relative bg-gradient-to-r from-ocean-turquoise/5 via-ocean-turquoise/3 to-transparent border-l-4 border-ocean-turquoise p-8 rounded-r-2xl">
                  <p className="text-gray-700 text-lg leading-relaxed">{PAGE.missionQuoteHero.text2}</p>
                </div>

                {/* Second Paragraph */}
                <div className="bg-gradient-to-r from-gray-50 to-white border-l-4 border-ocean-midnight/30 p-8 rounded-r-2xl">
                  <p className="text-gray-700 leading-relaxed text-lg">{PAGE.missionQuoteHero.text3}<span className="font-semibold text-ocean-midnight">{PAGE.missionQuoteHero.label3}</span>{PAGE.missionQuoteHero.text4}</p>
                </div>

                {/* What Actually Works */}
                <div className="relative overflow-hidden bg-gradient-to-br from-ocean-midnight to-ocean-midnight/90 rounded-2xl p-6 sm:p-10 md:p-12">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(46,191,209,0.15),transparent_50%)]"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-ocean-turquoise/5 rounded-full blur-3xl"></div>

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-2 h-2 rounded-full bg-ocean-turquoise"></div>
                      <div className="w-2 h-2 rounded-full bg-ocean-turquoise/60"></div>
                      <div className="w-2 h-2 rounded-full bg-ocean-turquoise/30"></div>
                    </div>
                    <h4 className="font-poppins font-bold text-ocean-turquoise mb-6 text-3xl">{PAGE.missionQuoteHero.smallHeading}</h4>
                    <p className="text-white/90 leading-relaxed text-xl max-w-4xl">{PAGE.missionQuoteHero.text5}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Vision strip
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2">
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-ocean-turquoise/50" />{PAGE.visionStrip.eyebrow}</p>
              <p className="text-white text-2xl md:text-3xl font-poppins font-bold leading-snug">{PAGE.visionStrip.text}</p>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-7xl font-poppins font-bold text-ocean-turquoise leading-none">{PAGE.visionStrip.text2}</div>
              <div className="text-xs text-white/30 uppercase tracking-widest mt-1">{PAGE.visionStrip.eyebrow2}</div>
            </div>
          </div>

          {/* SDG Section */}
          <div className="mt-12 pt-10 border-t border-white/10">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-6 text-center">{PAGE.visionStrip.eyebrow3}</p>
            <div className="flex justify-center">
              <SDGRow sdgs={PRIMARY_SDGS} size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Values
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-ocean-turquoise/50" />{PAGE.values.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-ocean-midnight">{PAGE.values.heading}</h2>
          </div>

          <div className="space-y-4">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-r ${v.color} p-8 flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300`}
              >
                {/* Number */}
                <div className="shrink-0">
                  <span className="text-5xl font-poppins font-bold text-white/10 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                {/* Vertical divider */}
                <div className="hidden md:block w-px self-stretch bg-white/10" />
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-poppins font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-white/60 leading-relaxed">{v.body}</p>
                </div>
                {/* Arrow */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Principles
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-4 flex items-center justify-center gap-3">
              <span className="w-6 h-px bg-ocean-turquoise/50" />{PAGE.principles.eyebrow}<span className="w-6 h-px bg-ocean-turquoise/50" />
            </p>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-ocean-midnight">{PAGE.principles.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.number}
                className={`relative group overflow-hidden rounded-3xl bg-gradient-to-br ${PRINCIPLE_COLORS[i]} p-6 sm:p-10 min-h-[220px] flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Ghost number bg */}
                <div className="absolute -bottom-4 -right-4 text-[120px] font-poppins font-bold text-white/[0.05] leading-none select-none pointer-events-none">
                  {p.number}
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2 block">{PAGE.principles.eyebrow2}{p.number}
                  </span>
                  <h3 className="text-2xl font-poppins font-bold text-white mb-4 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Next Chapter (call to action)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-14 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            <span className="font-bold text-ocean-midnight">{PAGE.nextChapter.label}</span>{PAGE.nextChapter.text}</p>
          <Link
            href={PAGE.nextChapter.link}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-ocean-midnight text-white font-bold text-sm rounded-xl hover:bg-ocean-turquoise hover:text-ocean-midnight transition-all duration-200"
          >{PAGE.nextChapter.linkText}<span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
