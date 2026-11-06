/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: About › Recognition & Awards
 * URL:  /about/recognition
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. All Awards — 3x2 Grid
 *   3. Quote Strip
 *   4. Next Chapter (call to action)
 *
 * Where the text/data lives:
 *   • AWARDS  →  top of this file
 * Page text, images and links (editable in Pages CMS)  →  content/pages/about-recognition.json
 */
import Link from 'next/link';
import PAGE from '@/content/pages/about-recognition.json';

export const metadata = PAGE.seo;

const AWARDS = PAGE.AWARDS;

export default function RecognitionPage() {
  const large = AWARDS.filter((a) => a.large);
  const small = AWARDS.filter((a) => !a.large);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-amber-50/30 overflow-hidden pt-36 pb-24 md:pt-48 md:pb-36">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#FBB308]/10 blur-[120px] pointer-events-none" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(251,179,8,0.5) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-[#FBB308] text-xs font-bold uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-[#FBB308]/60" />{PAGE.hero.eyebrow}</p>
          <h1 className="font-poppins font-bold text-ocean-midnight text-5xl md:text-7xl leading-[0.95] mb-8 max-w-3xl">{PAGE.hero.title}<br />
            <span className="text-[#FBB308]">{PAGE.hero.label}</span>
          </h1>
          <p className="text-gray-700 text-xl max-w-xl leading-relaxed">{PAGE.hero.text}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · All Awards — 3x2 Grid
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-10 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {AWARDS.map((award) => (
              <div
                key={award.title}
                className="relative group overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 hover:shadow-xl hover:border-ocean-turquoise/30 transition-all duration-300"
              >
                {/* Year watermark */}
                <div className="absolute top-4 right-5 text-4xl font-poppins font-bold text-gray-100 leading-none select-none pointer-events-none">
                  {award.year}
                </div>

                <div className="relative">
                  <span className={`inline-block text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full mb-5 ${award.tagColor}`}>
                    {award.tag}
                  </span>
                  <h3 className="text-base font-poppins font-bold text-ocean-midnight mb-1.5 leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-4">{award.sub}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{award.body}</p>

                  {award.highlight && (
                    <div className="border-t border-white/[0.07] pt-4 mt-4">
                      <p className="text-xs text-ocean-turquoise/80 italic">&ldquo;{award.highlight}&rdquo;</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Quote Strip
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-16 border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-3xl md:text-4xl font-poppins font-bold text-white leading-snug">{PAGE.quoteStrip.text}<br />
            <span className="text-ocean-turquoise">{PAGE.quoteStrip.label}</span>&rdquo;
          </p>
          <p className="mt-6 text-white/35 text-sm uppercase tracking-widest">{PAGE.quoteStrip.eyebrow}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Next Chapter (call to action)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-14">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm">
            <span className="font-bold text-white/70">{PAGE.nextChapter.label}</span>{PAGE.nextChapter.text}</p>
          <Link
            href={PAGE.nextChapter.link}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-ocean-turquoise text-ocean-midnight font-bold text-sm rounded-xl hover:bg-white transition-all duration-200"
          >{PAGE.nextChapter.linkText}<span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
