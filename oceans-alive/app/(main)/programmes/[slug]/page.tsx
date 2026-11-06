/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Single programme page (template used by every programme)
 * URL:  /programmes/[slug]
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Long Description
 *   3. Body Images
 *   4. Quote
 *   5. Related Programmes
 *   6. Call to action
 *
 * Where the text/data lives:
 *   • PROGRAMMES  →  lib/constants.ts
 *   • PROGRAMME_SDGS  →  lib/sdg-mapping.ts
 *   • PROGRAMME_DETAILS  →  top of this file
 * Page text, images and links (editable in Pages CMS)  →  content/old-pages/programme-detail.json
 */
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PROGRAMMES } from '@/lib/constants';
import SDGRow from '@/components/common/SDGRow';
import { PROGRAMME_SDGS } from '@/lib/sdg-mapping';

import PAGE from '@/content/old-pages/programme-detail.json';

// ─── Per-programme extended content ──────────────────────────────────────────

interface ProgrammeDetail {
  slug: string;
  heroImage?: string;
  heroImageAlt?: string;
  longDescription: string[];
  highlights: { label: string; value: string }[];
  bodyImages?: { src: string; alt: string; caption: string }[];
  quote?: { text: string; author: string };
  relatedSlugs: string[];
}

const PROGRAMME_DETAILS: Record<string, ProgrammeDetail> = PAGE.PROGRAMME_DETAILS as unknown as Record<string, ProgrammeDetail>;

// ─── Page ──────────────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return PROGRAMMES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const prog = PROGRAMMES.find((p) => p.slug === params.slug);
  if (!prog) return {};
  return {
    title: `${prog.title} - Oceans Alive Foundation`,
    description: prog.description,
  };
}

export default function ProgrammePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const prog = PROGRAMMES.find((p) => p.slug === slug);
  if (!prog) notFound();

  const detail = PROGRAMME_DETAILS[slug];
  const related = PROGRAMMES.filter((p) => detail?.relatedSlugs?.includes(p.slug)).slice(0, 3);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className={`relative bg-gradient-to-br ${prog.color} overflow-hidden`}>
        {detail?.heroImage && (
          <div className="absolute inset-0">
            <Image
              src={detail.heroImage}
              alt={detail.heroImageAlt || prog.title}
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
        )}
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-24 md:pt-40 md:pb-32">
          <Link
            href={PAGE.hero.link}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold mb-8 transition-colors"
          >{PAGE.hero.linkText}</Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1 rounded-full">{PAGE.hero.eyebrow}{prog.number}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
              {prog.category}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6 mb-6">
            <span className="text-5xl font-poppins font-bold text-white/20 leading-none">{prog.number}</span>
            <div className="min-w-0">
              <h1 className="font-poppins font-bold text-white text-4xl md:text-6xl leading-tight mb-3">
                {prog.title}
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                {prog.description}
              </p>
            </div>
          </div>
          {prog.partners && (
            <p className="text-white/50 text-xs uppercase tracking-widest mt-4">{PAGE.hero.eyebrow2}{prog.partners}
            </p>
          )}

          {/* Impact boxes & SDGs - integrated into hero */}
          {detail?.highlights && (
            <div className="mt-12 pt-8 border-t border-white/20">
              {/* Smaller stat boxes */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {detail.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-3 py-2 min-w-[110px] hover:bg-white/20 hover:border-ocean-turquoise/50 transition-all duration-200"
                  >
                    <div className="text-lg font-poppins font-bold text-white mb-0.5 leading-none">
                      {h.value}
                    </div>
                    <div className="text-[9px] text-white/50 uppercase tracking-wide leading-tight">
                      {h.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* SDGs inline */}
              {PROGRAMME_SDGS[detail.slug] && (
                <div className="flex justify-center items-center gap-3">
                  <span className="text-[9px] text-white/30 uppercase tracking-widest">{PAGE.hero.eyebrow3}</span>
                  <SDGRow sdgs={PROGRAMME_SDGS[detail.slug]} size="sm" />
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Long Description
          ══════════════════════════════════════════════════════════════════ */}
      {detail?.longDescription && (
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                {detail.longDescription.map((para, i) => (
                  <p key={i} className={`leading-relaxed text-gray-700 ${i === 0 ? 'text-lg' : ''}`}>
                    {para}
                  </p>
                ))}
              </div>
              <div className="space-y-6">
                {/* Stat callout */}
                <div className={`rounded-2xl bg-gradient-to-br ${prog.color} p-8 text-white text-center`}>
                  <div className="text-5xl font-poppins font-bold mb-2">{prog.stat}</div>
                  <div className="text-sm opacity-80 uppercase tracking-wider">{prog.statLabel}</div>
                </div>
                {prog.partners && (
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-ocean-turquoise mb-2">{PAGE.longDescription.eyebrow}</p>
                    <p className="text-sm text-gray-700">{prog.partners}</p>
                  </div>
                )}
                <div className="bg-ocean-midnight rounded-2xl p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-ocean-turquoise mb-2">{PAGE.longDescription.eyebrow2}</p>
                  <p className="text-sm font-poppins font-bold">{prog.title}</p>
                  <p className="text-xs text-white/60 mt-1">{prog.category}{PAGE.longDescription.text}{prog.number}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Body Images
          ══════════════════════════════════════════════════════════════════ */}
      {detail?.bodyImages && detail.bodyImages.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className={`grid grid-cols-1 ${detail.bodyImages.length > 1 ? 'md:grid-cols-2' : ''} gap-6`}>
              {detail.bodyImages.map((img) => (
                <div key={img.src}>
                  <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden shadow-md mb-3">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-gray-500 text-center italic">{img.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Quote
          ══════════════════════════════════════════════════════════════════ */}
      {detail?.quote && (
        <section className="bg-ocean-midnight py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-2xl md:text-3xl font-poppins font-bold text-white leading-relaxed mb-6">
              &ldquo;{detail.quote.text}&rdquo;
            </p>
            <p className="text-ocean-turquoise text-sm font-semibold uppercase tracking-widest">
              - {detail.quote.author}
            </p>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Related Programmes
          ══════════════════════════════════════════════════════════════════ */}
      {related.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-3">{PAGE.relatedProgrammes.eyebrow}</p>
            <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-8">{PAGE.relatedProgrammes.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r, index) => (
                <Link
                  key={r.slug}
                  href={`/programmes/${r.slug}`}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${r.color} p-7 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-2xl font-poppins font-bold text-white/25">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-full">{r.category}</span>
                  </div>
                  <h3 className="text-base font-poppins font-bold mb-2">{r.title}</h3>
                  <p className="text-sm opacity-75 leading-relaxed line-clamp-2">{r.description}</p>
                  <div className="mt-4 text-sm font-bold text-white/80 group-hover:text-white transition-colors">{PAGE.relatedProgrammes.text}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 · Call to action
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-turquoise py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-poppins font-bold text-white">{PAGE.callToAction.subheading}</h3>
              <p className="text-white/80 mt-1">{PAGE.callToAction.text}</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Link
                href={PAGE.callToAction.link}
                className="px-6 py-3 bg-white text-ocean-turquoise font-bold rounded-xl hover:bg-ocean-midnight hover:text-white transition-all duration-200"
              >{PAGE.callToAction.linkText}</Link>
              <Link
                href={PAGE.callToAction.link2}
                className="px-6 py-3 border border-white/50 text-white font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-all duration-200"
              >{PAGE.callToAction.linkText2}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
