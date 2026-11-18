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
import { asset } from '@/lib/asset';

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
      <section className="bg-ocean-midnight py-14 md:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-12 lg:gap-14 items-center mb-12">
            {/* Text (kept compact) */}
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-3">{PAGE.impactStats.eyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white leading-tight mb-5">
                {PAGE.impactStats.heading}
                <svg className="block mt-2 w-40 h-3 text-ocean-sunshine" viewBox="0 0 160 12" fill="none" aria-hidden="true">
                  <path d="M2 8c30-6 70-8 156-3" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-4">
                <span className="text-white font-semibold">{PAGE.impactStats.label}</span>{PAGE.impactStats.text}<span className="text-white font-semibold">{PAGE.impactStats.label2}</span>{PAGE.impactStats.text2}<span className="text-white font-semibold">{PAGE.impactStats.label3}</span>.
              </p>
              <p className="text-white/50 text-sm leading-relaxed border-l-2 border-ocean-turquoise/60 pl-4">{PAGE.impactStats.text3}</p>
            </div>

            {/* Photo collage */}
            <div className="relative h-[380px] sm:h-[460px] lg:h-[500px] select-none" aria-label="Photos of our work">
              {/* decorative arcs and dots */}
              {/* Oceans Alive logo ring (words removed), tinted in brand colours */}
              {(() => {
                const ring = {
                  WebkitMaskImage: `url(${asset('/images/brand-ring.png')})`,
                  maskImage: `url(${asset('/images/brand-ring.png')})`,
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                } as React.CSSProperties;
                return (
                  <>
                    {/* big faint ring slowly turning behind the photos */}
                    <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] aspect-square pointer-events-none">
                      <div className="w-full h-full bg-white/[0.06] motion-safe:animate-[spin_90s_linear_infinite]" style={ring} />
                    </div>
                    {/* sunshine ring at the top corner */}
                    <div aria-hidden="true" className="absolute -top-10 -right-8 w-32 h-32 sm:w-40 sm:h-40 bg-ocean-sunshine rotate-[160deg] z-30 drop-shadow-lg" style={ring} />
                    {/* turquoise ring wrapping the photos at the bottom */}
                    <div aria-hidden="true" className="absolute bottom-[4%] left-[28%] w-32 h-32 sm:w-40 sm:h-40 bg-ocean-turquoise -rotate-[20deg] z-30" style={ring} />
                  </>
                );
              })()}
              <div
                aria-hidden="true"
                className="absolute top-[6%] left-[-2%] w-28 h-24 opacity-40"
                style={{ backgroundImage: 'radial-gradient(#5ECEC5 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}
              />

              {/* 1 · tall arch */}
              <figure className="group absolute left-[2%] top-[10%] w-[44%] h-[78%] overflow-hidden rounded-t-full rounded-b-3xl shadow-2xl ring-1 ring-white/10 z-10">
                <img src={asset(PAGE.impactStats.photos[0].image)} alt={PAGE.impactStats.photos[0].alt} loading="lazy" className="w-full h-full object-cover object-[40%_center] transition-transform duration-700 group-hover:scale-105" />
              </figure>

              {/* 2 · top right */}
              <figure className="group absolute right-[4%] top-[4%] w-[48%] h-[44%] overflow-hidden rounded-3xl rounded-tr-[5rem] shadow-2xl ring-1 ring-white/10 z-20">
                <img src={asset(PAGE.impactStats.photos[1].image)} alt={PAGE.impactStats.photos[1].alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </figure>

              {/* 3 · bottom right */}
              <figure className="group absolute right-0 bottom-0 w-[50%] h-[46%] overflow-hidden rounded-3xl rounded-bl-[5rem] shadow-2xl ring-1 ring-white/10 z-20">
                <img src={asset(PAGE.impactStats.photos[2].image)} alt={PAGE.impactStats.photos[2].alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </figure>

              {/* 4 · round inset */}
              <figure className="group absolute left-[34%] top-[0%] w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-full ring-[6px] ring-ocean-midnight shadow-xl z-30">
                <img src={asset(PAGE.impactStats.photos[3].image)} alt={PAGE.impactStats.photos[3].alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </figure>

              {/* floating badge */}
              <div className="absolute left-[-1%] bottom-[2%] z-30 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-2xl backdrop-blur">
                <span className="font-poppins text-2xl sm:text-3xl font-bold text-ocean-midnight leading-none">{PAGE.impactStats.badgeNumber}</span>
                <span className="text-[11px] sm:text-xs font-semibold text-ocean-midnight/70 leading-tight max-w-[7.5rem]">{PAGE.impactStats.badgeText}</span>
              </div>
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
