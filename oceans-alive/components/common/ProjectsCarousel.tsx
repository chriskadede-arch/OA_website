/**
 * ══════════════════════════════════════════════════════════════════
 * "ALL PROJECTS" CAROUSEL (home page + programme pages)
 * ══════════════════════════════════════════════════════════════════
 * Swipeable cards with left/right arrows. Card text comes from lib/projects-data.ts.
 */
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/projects-data';

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
        aria-label="Scroll left"
        disabled={atStart}
        className="flex absolute left-1 sm:left-2 top-1/2 md:top-[45%] -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 shadow-xl border border-gray-200 items-center justify-center text-ocean-midnight hover:bg-ocean-turquoise hover:text-white hover:border-ocean-turquoise transition-all disabled:opacity-0 disabled:pointer-events-none"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => scrollByCard(1)}
        aria-label="Scroll right"
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
        className="flex gap-4 sm:gap-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-px-6 md:scroll-px-14 scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-6 md:px-14"
      >
        {projects.map((project, index) => (
          <Link
            key={project.id}
            data-card
            href={`/projects/${project.slug}`}
            className="group relative shrink-0 snap-start flex flex-col rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-ocean-midnight/10 w-[82vw] max-w-[440px] sm:w-[440px] md:w-[480px] md:max-w-none min-h-[520px] sm:min-h-[600px]"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient}`} />

            <div className="relative flex-1 p-6 sm:p-9 flex flex-col justify-between gap-8">
              <div className="flex items-start justify-between gap-4">
                <div className="px-3.5 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl font-poppins font-black text-white/20 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl md:text-[2.15rem] font-poppins font-bold text-white mb-3 leading-tight break-words">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-white/85 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-start gap-x-5 gap-y-3 mb-6 flex-wrap">
                  {project.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-xl sm:text-2xl font-poppins font-bold text-ocean-turquoise">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-white/50 uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <span className="text-sm font-bold text-ocean-turquoise group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  Explore Project <span className="text-lg">→</span>
                </span>
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
