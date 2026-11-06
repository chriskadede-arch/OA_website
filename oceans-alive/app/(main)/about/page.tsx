/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: About › Overview
 * URL:  /about
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Chapter Cards
 *   3. Quick Stats
 *   4. Get Involved (call to action)
 *
 * Where the text/data lives:
 *   • IMPACT_STATS  →  lib/constants.ts
 *   • CHAPTERS  →  top of this file
 * Page text, images and links (editable in Pages CMS)  →  content/pages/about.json
 */
import Link from 'next/link';
import Image from 'next/image';
import { IMPACT_STATS } from '@/lib/constants';
import PAGE from '@/content/pages/about.json';

export const metadata = PAGE.seo;

const CHAPTERS = PAGE.CHAPTERS;

const QUICK_STATS = IMPACT_STATS.slice(0, 4);

export default function AboutHub() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden pt-36 pb-24 md:pt-48 md:pb-36">
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(46,191,209,0.6) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Ghost "ABOUT" watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[18vw] font-poppins font-bold text-white/[0.03] leading-none tracking-tight whitespace-nowrap">{PAGE.hero.label}</span>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-ocean-turquoise/50 inline-block" />{PAGE.hero.eyebrow}</p>
          <h1 className="font-poppins font-bold text-white leading-[0.9] mb-8">
            <span className="block text-6xl md:text-8xl">{PAGE.hero.label2}</span>
            <span className="block text-6xl md:text-8xl text-ocean-turquoise">{PAGE.hero.label3}</span>
          </h1>
          <p className="text-white/55 text-xl max-w-2xl leading-relaxed">{PAGE.hero.text}</p>
          <p className="text-white/45 text-lg max-w-2xl leading-relaxed mt-4">{PAGE.hero.text2}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Chapter Cards
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-10 flex items-center gap-3">
            <span className="w-6 h-px bg-ocean-turquoise/50 inline-block" />{PAGE.chapterCards.eyebrow}</p>

          {/* Grid: 3 cols on lg. Row 1: [card 1 × 2] [card 2]. Row 2: [card 3] [card 4] [card 5]. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CHAPTERS.map((ch, i) => (
              <Link
                key={ch.num}
                href={ch.href}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${ch.gradient} p-8 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
                  i === 0 ? 'min-h-[320px] lg:col-span-2' : 'min-h-[260px]'
                }`}
              >
                {/* Background photo */}
                {ch.image && (
                  <div className="absolute inset-0">
                    <Image
                      src={ch.image}
                      alt={ch.title}
                      fill
                      className="object-cover opacity-15 group-hover:opacity-25 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                )}

                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/[0.04] pointer-events-none" />
                <div className="absolute -bottom-16 -left-10 w-56 h-56 rounded-full bg-black/10 pointer-events-none" />

                <div className="relative">
                  <span className="text-[60px] font-poppins font-bold text-white/10 leading-none select-none">
                    {ch.num}
                  </span>
                </div>

                <div className="relative">
                  <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-${ch.accent}`}>
                    {ch.subtitle}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-3 leading-tight">
                    {ch.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-md">
                    {ch.body}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-white/40 group-hover:text-white group-hover:gap-4 transition-all duration-300">{PAGE.chapterCards.label}<span className="text-base">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Quick Stats
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
            {QUICK_STATS.map((s, i) => (
              <div key={i} className="text-center px-3 sm:px-4 lg:px-6 py-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-ocean-turquoise mb-1 whitespace-nowrap">
                  {s.value}
                </div>
                <p className="text-[11px] sm:text-xs text-white/40 uppercase tracking-wide sm:tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Get Involved (call to action)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-2">{PAGE.getInvolved.heading}</h2>
            <p className="text-gray-500">{PAGE.getInvolved.text}</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link
              href={PAGE.getInvolved.link}
              className="px-6 py-3 bg-ocean-turquoise text-ocean-midnight font-bold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm"
            >{PAGE.getInvolved.linkText}</Link>
            <Link
              href={PAGE.getInvolved.link2}
              className="px-6 py-3 border border-ocean-midnight text-ocean-midnight font-bold rounded-xl hover:bg-ocean-midnight hover:text-white transition-all text-sm"
            >{PAGE.getInvolved.linkText2}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
