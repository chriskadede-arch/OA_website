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

  // The brush ring from the Oceans Alive logo (words removed), used as a tintable mask
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
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="group/hero relative bg-ocean-midnight overflow-hidden min-h-[90vh] flex items-center">
        {/* Background photo: fishers poling at dawn (flipped so the boat sits on the right) */}
        <img
          src={asset(PAGE.hero.image)}
          alt={PAGE.hero.imageAlt}
          loading="eager"
          fetchPriority="high"
          className="absolute inset-y-0 right-0 w-full md:w-[78%] h-full object-cover object-[45%_30%] -scale-x-100 motion-safe:animate-[heroZoom_24s_ease-out_forwards]"
        />
        {/* Fades that blend the photo into the page */}
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-midnight via-ocean-midnight/80 md:from-[22%] md:via-ocean-midnight/45 md:via-[45%] to-ocean-midnight/20 md:to-transparent" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ocean-midnight/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ocean-midnight to-transparent" />

        {/* Message */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-36 pb-20 md:pt-40">
          <div className="max-w-xl">
            <p className="flex items-center gap-3 font-poppins font-light text-ocean-turquoise text-3xl md:text-5xl tracking-[0.2em] uppercase mb-4">
              {PAGE.hero.title}
            </p>
            <h1 className="font-poppins font-bold leading-[1.05] text-4xl sm:text-5xl lg:text-[3.6rem] mb-6">
              <span className="block text-white">{PAGE.hero.heading.split(',')[0]},</span>
              <span className="block text-ocean-turquoise">{PAGE.hero.heading.split(',').slice(1).join(',').trim()}</span>
            </h1>
            <p className="text-white/85 text-base leading-relaxed mb-8 max-w-lg border-l-2 border-ocean-sunshine/70 pl-5">{PAGE.hero.text}</p>

            <div className="flex flex-wrap items-center gap-4">
              {/* Primary: white pill with arrow bubble */}
              <Link
                href={PAGE.hero.link}
                className="inline-flex items-center gap-3 rounded-full bg-white pl-6 pr-2 py-2 text-sm md:text-base font-bold text-ocean-midnight hover:text-ocean-midnight shadow-xl transition-all duration-300 hover:bg-ocean-sunshine hover:gap-5"
              >
                {PAGE.hero.linkText}
                <span aria-hidden="true" className="grid place-items-center w-9 h-9 rounded-full bg-ocean-midnight text-white">&rarr;</span>
              </Link>
              {/* Secondary: glass pill with a sunshine heart bubble on the left */}
              <Link
                href={PAGE.hero.link2}
                className="group inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 backdrop-blur-md pl-2 pr-6 py-2 text-sm md:text-base font-semibold text-white hover:text-white transition-all duration-300 hover:border-ocean-sunshine hover:bg-ocean-sunshine/15"
              >
                <span aria-hidden="true" className="grid place-items-center w-9 h-9 rounded-full bg-ocean-sunshine text-ocean-midnight transition-transform duration-300 group-hover:scale-110">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.4 8.3 2.4 4 6.4 4c2.2 0 3.6 1.2 4.6 2.6C12 5.2 13.4 4 15.6 4c4 0 6 4.3 4.4 7.7C19.5 16.4 12 21 12 21z"/></svg>
                </span>
                {PAGE.hero.linkText2}
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Impact Stats (dark immersive)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight pt-14 md:pt-20 pb-4 overflow-hidden">
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
              <>
                    {/* big faint ring slowly turning behind the photos */}
                    <div aria-hidden="true" className="absolute left-[-22%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] aspect-square pointer-events-none">
                      <div className="w-full h-full bg-white/[0.06] motion-safe:animate-[spin_90s_linear_infinite]" style={ring} />
                    </div>
              </>
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

              {/* 4 · round inset, framed by the yellow logo ring */}
              <div className="group absolute left-[33%] -top-[2%] w-24 h-24 sm:w-32 sm:h-32 z-30">
                <figure className="absolute inset-0 overflow-hidden rounded-full ring-4 ring-ocean-midnight shadow-xl">
                  <img src={asset(PAGE.impactStats.photos[3].image)} alt={PAGE.impactStats.photos[3].alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </figure>
                <div aria-hidden="true" className="absolute -inset-[24%] bg-ocean-sunshine rotate-[200deg] drop-shadow-lg transition-transform duration-700 group-hover:rotate-[230deg]" style={ring} />
              </div>

              {/* floating badge, passing through the turquoise logo ring */}
              <div className="absolute left-[-1%] bottom-[2%] z-30">
                {/* back half of the ring (behind the card) */}
                <div aria-hidden="true" className="absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 bg-ocean-turquoise rotate-180" style={ring} />
                <div className="relative flex items-center gap-3 rounded-2xl bg-white px-4 py-3 pr-16 sm:pr-20 shadow-2xl">
                  <span className="font-poppins text-2xl sm:text-3xl font-bold text-ocean-midnight leading-none">{PAGE.impactStats.badgeNumber}</span>
                  <span className="text-[11px] sm:text-xs font-semibold text-ocean-midnight/70 leading-tight max-w-[7.5rem]">{PAGE.impactStats.badgeText}</span>
                </div>
                {/* front half of the ring (over the card) */}
                <div aria-hidden="true" className="absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32" style={{ clipPath: 'inset(0 0 0 50%)' }}>
                  <div className="w-full h-full bg-ocean-turquoise rotate-180" style={ring} />
                </div>
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
      <section id="projects" className="bg-ocean-midnight pt-10 md:pt-12 pb-16 md:pb-20 scroll-mt-24">
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
