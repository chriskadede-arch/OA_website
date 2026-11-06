/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: About › Our Story
 * URL:  /about/story
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Origin Story
 *   3. Story content & timeline
 *   4. Next Chapter (call to action)
 *
 * Where the text/data lives:
 *   • TIMELINE, IMPACT_STATS  →  lib/constants.ts
 * Page text, images and links (editable in Pages CMS)  →  content/pages/about-story.json
 */
import Image from 'next/image';
import Link from 'next/link';
import { TIMELINE, IMPACT_STATS } from '@/lib/constants';
import PAGE from '@/content/pages/about-story.json';

export const metadata = PAGE.seo;

export default function StoryPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PAGE.hero.image}
            alt={PAGE.hero.imageAlt}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-midnight via-ocean-midnight/85 to-ocean-midnight/40" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 pt-40 pb-28 md:pt-52 md:pb-40">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-ocean-turquoise/50" />{PAGE.hero.eyebrow}</p>
          <h1 className="font-poppins font-bold text-white text-5xl md:text-7xl leading-[0.95] mb-8 max-w-3xl">{PAGE.hero.title}<br />
            <span className="text-ocean-turquoise">{PAGE.hero.label}</span>
          </h1>
          <p className="text-white/60 text-xl max-w-xl leading-relaxed">{PAGE.hero.text}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Origin Story
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Text */}
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-3">
                <span className="w-6 h-px bg-ocean-turquoise/50" />{PAGE.originStory.eyebrow}</p>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-xl font-medium text-ocean-midnight">{PAGE.originStory.text}</p>
                <p>{PAGE.originStory.text2}</p>
                <p>{PAGE.originStory.text3}</p>
              </div>
            </div>

            {/* Photos */}
            <div className="space-y-4 lg:pt-16">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={PAGE.originStory.image}
                  alt={PAGE.originStory.imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight/70 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="text-[10px] text-white/80 font-bold uppercase tracking-wider">{PAGE.originStory.eyebrow2}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={PAGE.originStory.image2}
                    alt={PAGE.originStory.imageAlt2}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[9px] text-white/75 font-bold uppercase tracking-wider">{PAGE.originStory.eyebrow3}</span>
                  </div>
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={PAGE.originStory.image3}
                    alt={PAGE.originStory.imageAlt3}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[9px] text-white/75 font-bold uppercase tracking-wider">{PAGE.originStory.eyebrow4}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Story content & timeline
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Underwater Image 1 */}
          <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-12">
            <Image
              src={PAGE.storyContentAndTimeline.image}
              alt={PAGE.storyContentAndTimeline.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.storyContentAndTimeline.eyebrow}</p>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">{PAGE.storyContentAndTimeline.heading}</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">{PAGE.storyContentAndTimeline.text}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.storyContentAndTimeline.text2}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.storyContentAndTimeline.text3}</p>
              <p className="text-gray-700 leading-relaxed mb-8">{PAGE.storyContentAndTimeline.text4}</p>

              {/* Underwater Image - aligned with timeline */}
              <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg mt-12">
                <Image
                  src={PAGE.storyContentAndTimeline.image2}
                  alt={PAGE.storyContentAndTimeline.imageAlt2}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {TIMELINE.map((item, i) => {
                // Handle year ranges differently - check for both dash and en-dash
                const isRange = item.year.includes('–') || item.year.includes('-');

                // For display in circle: extract years differently based on format
                let displayYear;
                if (item.year.includes('–')) {
                  // Handle en-dash (2006–2018, 2023–present)
                  const parts = item.year.split('–');
                  displayYear = parts[0].slice(2) + '–' + (parts[1] === 'present' ? 'now' : parts[1].slice(2));
                } else if (item.year.includes('-') && item.year.length > 4) {
                  // Handle regular dash for ranges
                  const parts = item.year.split('-');
                  displayYear = parts[0].slice(2) + '-' + parts[1].slice(2);
                } else {
                  // Single year
                  displayYear = item.year.slice(2);
                }

                return (
                <div key={item.year} className="flex gap-5 pb-5 last:pb-0">
                  <div className="flex flex-col items-center gap-2">
                    {/* Use wider pill shape for ranges, circle for single years */}
                    <div className={`${isRange ? 'px-2.5 h-10 min-w-[56px] rounded-full' : 'w-10 h-10 rounded-full'} bg-ocean-turquoise/10 border-2 border-ocean-turquoise flex items-center justify-center shrink-0`}>
                      <span className="text-[9px] font-bold text-ocean-turquoise whitespace-nowrap">{displayYear}</span>
                    </div>
                    {i < TIMELINE.length - 1 && <div className="w-px flex-1 bg-ocean-turquoise/20" />}
                  </div>
                  <div className="pt-1 pb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-ocean-turquoise uppercase tracking-wider">{item.year}</span>
                      {item.tag && (
                        <span className="text-[10px] bg-ocean-turquoise/10 text-ocean-turquoise px-2 py-0.5 rounded-full font-semibold">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <h4 className="font-poppins font-bold text-ocean-midnight mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Next Chapter (call to action)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14">
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
