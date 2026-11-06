/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Home page
 * URL:  /
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Impact Stats (dark immersive)
 *   3. Our Projects Carousel
 *
 * Where the text/data lives:
 *   • IMPACT_STATS, TIMELINE  →  lib/constants.ts
 *   • PRIMARY_SDGS  →  lib/sdg-mapping.ts
 *   • PROJECTS  →  lib/projects-data.ts
 * Page text, images and links (editable in Pages CMS)  →  content/pages/home.json
 */
import Link from 'next/link';
import Image from 'next/image';
import NewsletterForm from '@/components/common/NewsletterForm';
import SDGRow from '@/components/common/SDGRow';
import { IMPACT_STATS, TIMELINE } from '@/lib/constants';
import { PRIMARY_SDGS } from '@/lib/sdg-mapping';
import { PROJECTS } from '@/lib/projects-data';
import ProjectsCarousel from '@/components/common/ProjectsCarousel';

import PAGE from '@/content/pages/home.json';

export default function Home() {
  // basePath is handled by Next.js config for Image components
  // For raw img tags, we need to add it manually
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden min-h-[90vh]">

        {/* Three images with diagonal dividers */}
        <div className="absolute inset-0 bg-ocean-midnight will-change-auto">
          {/* Image 1 - Left side with diagonal on right edge - show more of photo */}
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'polygon(0 0, 38% 0, 28% 100%, 0 100%)' }}>
            <div className="absolute inset-0 w-full h-full" style={{ transform: 'translateX(-35%)' }}>
              <img
                src={`${basePath}/images/P5310100.jpg`}
                alt={PAGE.hero.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  objectPosition: 'center center',
                  imageRendering: '-webkit-optimize-contrast',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}
                loading="eager"
                decoding="sync"
              />
            </div>
            <div className="absolute inset-0 bg-blue-900/60"></div>
          </div>

          {/* Image 2 - Center with diagonal on both edges */}
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'polygon(38% 0, 72% 0, 62% 100%, 28% 100%)' }}>
            <img
              src={`${basePath}/images/divers.jpg`}
              alt={PAGE.hero.imageAlt2}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                minWidth: '100%',
                minHeight: '100%',
                objectPosition: '55% 40%',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            />
            <div className="absolute inset-0 bg-blue-900/60"></div>
          </div>

          {/* Image 3 - Right side with diagonal on left edge - ZOOMED IN for details */}
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'polygon(72% 0, 100% 0, 100% 100%, 62% 100%)' }}>
            <img
              src={`${basePath}/images/IMG_4955.jpg`}
              alt={PAGE.hero.imageAlt3}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                minWidth: '140%',
                minHeight: '140%',
                objectPosition: '55% 45%',
                transform: 'scale(1.2)',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            />
            <div className="absolute inset-0 bg-blue-900/60"></div>
          </div>
        </div>

        {/* Additional gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-midnight/40 via-ocean-midnight/50 to-ocean-midnight/70"></div>

        {/* Content overlay - centered over all images */}
        <div className="relative z-20 flex items-center justify-center w-full min-h-[90vh] px-6 pt-36 pb-20 md:pt-40">
          <div className="max-w-5xl text-center">
            <h1 className="font-poppins font-light text-ocean-turquoise text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6 tracking-[0.15em] uppercase">{PAGE.hero.title}</h1>
            <h2 className="font-poppins font-bold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">{PAGE.hero.heading}</h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">{PAGE.hero.text}</p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href={PAGE.hero.link}
                className="px-7 py-3.5 bg-ocean-midnight text-white font-bold rounded-xl hover:bg-white hover:text-ocean-turquoise transition-all duration-200 shadow-lg"
              >{PAGE.hero.linkText}</Link>
              <Link
                href={PAGE.hero.link2}
                className="px-7 py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:border-ocean-turquoise hover:text-ocean-turquoise transition-all duration-200"
              >{PAGE.hero.linkText2}</Link>
            </div>

          </div>
        </div>

      </section>


      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Impact Stats (dark immersive)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.impactStats.eyebrow}</p>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight mb-6">{PAGE.impactStats.heading}</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                <span className="text-white font-bold">{PAGE.impactStats.label}</span>{PAGE.impactStats.text}<span className="text-white font-bold">{PAGE.impactStats.label2}</span>{PAGE.impactStats.text2}<span className="text-white font-bold">{PAGE.impactStats.label3}</span>
              </p>
            </div>
            <div className="lg:pt-3">
              <p className="text-white/60 text-lg leading-relaxed">{PAGE.impactStats.text3}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-l border-t border-white/10">
            {IMPACT_STATS.map((stat, i) => (
              <div key={i} className="min-w-0 py-5 px-3 border-r border-b border-white/10 text-center">
                <div className="text-xl md:text-2xl font-poppins font-bold text-ocean-turquoise mb-1 whitespace-nowrap">
                  {stat.value}
                </div>
                <p className="text-[11px] md:text-xs text-white/50 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 space-y-6">
            {/* Recognition */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <span className="text-[9px] text-white/25 uppercase tracking-widest">{PAGE.impactStats.eyebrow2}</span>
              {PAGE.impactStats.list.map((a) => (
                <span key={a} className="text-xs text-white/40 font-semibold">{a}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Our Projects Carousel
          ══════════════════════════════════════════════════════════════════ */}
      <section id="projects" className="bg-ocean-midnight py-16 md:py-20 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-10">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-2">{PAGE.ourProjectsCarousel.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white leading-tight">{PAGE.ourProjectsCarousel.heading}</h2>
          </div>
        </div>

        <ProjectsCarousel projects={PROJECTS} dark />
      </section>
    </>
  );
}
