/**
 * ══════════════════════════════════════════════════════════════════
 * "ALL PROJECTS" CAROUSEL (home page + programme pages)
 * ══════════════════════════════════════════════════════════════════
 * Swipeable cards with left/right arrows. Card text comes from lib/projects-data.ts.
 * Page text, images and links (editable in Pages CMS)  →  content/site/projects-carousel.json
 */
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/projects-data';

import PAGE from '@/content/site/projects-carousel.json';

export default function ProjectsCarousel({ projects, dark = false }: { projects: Project[]; dark?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [progress, setProgress] = useState(0);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateEdges, { passive: true });
    window.addEventListener('resize', updateEdges);
    return () => {
      el.removeEventListener('scroll', updateEdges);
      window.removeEventListener('resize', updateEdges);
    };
  }, [updateEdges]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card]');
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Edge fades */}
      <div className={`pointer-events-none absolute left-0 top-0 bottom-4 w-10 md:w-24 bg-gradient-to-r ${dark ? 'from-ocean-midnight' : 'from-white'} to-transparent z-10 transition-opacity duration-300 ${atStart ? 'opacity-0' : 'opacity-100'}`} />
      <div className={`pointer-events-none absolute right-0 top-0 bottom-4 w-10 md:w-24 bg-gradient-to-l ${dark ? 'from-ocean-midnight' : 'from-white'} to-transparent z-10 transition-opacity duration-300 ${atEnd ? 'opacity-0' : 'opacity-100'}`} />

      {/* Arrow controls */}
      <button
        onClick={() => scrollByCard(-1)}
        aria-label={PAGE.intro.accessibleLabel}
        disabled={atStart}
        className="flex absolute left-1 sm:left-2 top-1/2 md:top-[45%] -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 shadow-xl border border-gray-200 items-center justify-center text-ocean-midnight hover:bg-ocean-turquoise hover:text-white hover:border-ocean-turquoise transition-all disabled:opacity-0 disabled:pointer-events-none"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => scrollByCard(1)}
        aria-label={PAGE.intro.accessibleLabel2}
        disabled={atEnd}
        className="flex absolute right-1 sm:right-2 top-1/2 md:top-[45%] -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 shadow-xl border border-gray-200 items-center justify-center text-ocean-midnight hover:bg-ocean-turquoise hover:text-white hover:border-ocean-turquoise transition-all disabled:opacity-0 disabled:pointer-events-none"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-px-6 md:scroll-px-14 scroll-smooth pt-2 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-6 md:px-14"
      >
        {projects.map((project, index) => (
          <Link
            key={project.id}
            data-card
            href={`/projects/${project.slug}`}
            className="group relative shrink-0 snap-start flex flex-col rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/30 hover:ring-2 hover:ring-ocean-turquoise hover:-translate-y-1.5 transition-all duration-500 w-[82vw] max-w-[440px] sm:w-[440px] md:w-[480px] md:max-w-none min-h-[520px] sm:min-h-[600px]"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
            />
            {/* Photo stays clear at the top; the project colour rises from the bottom */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/45 to-transparent" />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${project.gradient}`}
              style={{ WebkitMaskImage: 'linear-gradient(to top, #000 48%, transparent 82%)', maskImage: 'linear-gradient(to top, #000 48%, transparent 82%)' }}
            />
            {/* Soft turquoise glow that brightens on hover */}
            <div className="absolute -bottom-32 -right-24 w-80 h-80 rounded-full bg-ocean-turquoise blur-3xl opacity-15 group-hover:opacity-35 transition-opacity duration-700" />

            <div className="relative flex-1 p-6 sm:p-8 flex flex-col justify-between gap-8">
              {/* Top row: category + outlined number */}
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-3.5 py-1.5 text-[11px] font-bold text-white uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-ocean-turquoise" />
                  {project.category}
                </span>
                <span
                  className="text-5xl sm:text-6xl font-poppins font-black leading-none select-none transition-transform duration-500 group-hover:-translate-y-1"
                  style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.8)', textShadow: '0 4px 18px rgba(0,0,0,0.35)' }}
                  aria-hidden
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div>
                {project.funder && !project.funder.startsWith('Oceans Alive') && (
                  <p className="inline-flex items-center gap-2 rounded-full bg-ocean-midnight/50 backdrop-blur-md border border-white/10 pl-1.5 pr-3 py-1 mb-4 text-[10px] text-white/80 uppercase tracking-widest font-semibold">
                    <span className="w-5 h-5 rounded-full bg-ocean-sunshine text-ocean-midnight flex items-center justify-center">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    With {project.funder}
                  </p>
                )}
                <span className="block h-1 w-12 rounded-full bg-ocean-turquoise mb-4 transition-all duration-500 group-hover:w-28" />
                <h2 className="text-2xl sm:text-3xl md:text-[2.15rem] font-poppins font-bold text-white mb-3 leading-tight break-words">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-[15px] text-white/80 mb-6 leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {/* Stats in a glass strip */}
                <div className="grid grid-flow-col auto-cols-fr divide-x divide-white/10 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/10 mb-6">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="px-3 py-3 sm:px-4">
                      <div className="text-lg sm:text-2xl font-poppins font-bold text-ocean-turquoise leading-none mb-1.5">
                        {stat.value}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-white/55 uppercase tracking-wider leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white group-hover:text-ocean-turquoise transition-colors">{PAGE.intro.label.trim()}</span>
                  <span className="w-11 h-11 rounded-full border border-white/25 bg-white/5 backdrop-blur flex items-center justify-center text-white transition-all duration-300 group-hover:bg-ocean-turquoise group-hover:border-ocean-turquoise group-hover:text-ocean-midnight">
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* Trailing spacer so the last card can fully clear the edge fade */}
        <div className="shrink-0 w-1" aria-hidden="true" />
      </div>

      {/* Scroll progress bar */}
      <div className={`mx-6 md:mx-14 h-1 rounded-full overflow-hidden ${dark ? 'bg-white/10' : 'bg-gray-100'}`}>
        <div
          className="h-full bg-ocean-turquoise rounded-full transition-[width] duration-150"
          style={{ width: `${Math.max(8, progress * 100)}%` }}
        />
      </div>
    </div>
  );
}
