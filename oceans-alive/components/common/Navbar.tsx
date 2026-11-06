/**
 * ══════════════════════════════════════════════════════════════════
 * HEADER / MAIN MENU (shown on every page)
 * ══════════════════════════════════════════════════════════════════
 * PART 1 · Types                   - shape of the menu data (no need to edit)
 * PART 2 · Get Involved cards      - Donate / Partner / Contact cards in the menu
 * PART 3 · MENU LINKS (MEGA_NAV)   - ← edit menu items and dropdown links here
 * PART 4 · Desktop dropdown panels - one function per dropdown style
 * PART 5 · Mobile menu item        - the accordion rows in the phone menu
 * PART 6 · The header itself       - top bar, logo, desktop menu, search, phone menu
 * Search this file for "PART <n>" or "SECTION <n>".
 * Programme/project links in the dropdowns come from lib/our-work.ts and lib/projects-data.ts.
 * Page text, images and links (editable in Pages CMS)  →  content/site/menu.json
 */
'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/lib/projects-data';
import { OUR_WORK_PROGRAMS, CROSS_CUTTING_THEMES } from '@/lib/our-work';

import PAGE from '@/content/site/menu.json';

// ══════════════════════════════════════════════════════════════════
// PART 1 · Types (shape of the menu data - no need to edit)
// ══════════════════════════════════════════════════════════════════

interface NavSubItem {
  label: string;
  href: string;
  description: string;
  badge?: string;
}

interface NavColumn {
  title: string;
  items: NavSubItem[];
  compact?: boolean;
}

interface MegaNavItem {
  label: string;
  href?: string;
  columns?: NavColumn[];
  layout?: 'dark-immersive' | 'action-cards' | 'editorial' | 'get-involved-custom';
}

// ══════════════════════════════════════════════════════════════════
// PART 2 · Get Involved action cards (Donate / Partner / Contact)
// ══════════════════════════════════════════════════════════════════

const INVOLVE_CARDS = PAGE.INVOLVE_CARDS;

// ══════════════════════════════════════════════════════════════════
// PART 3 · MENU LINKS - edit the main menu and its dropdowns here
// ══════════════════════════════════════════════════════════════════

const MEGA_NAV: MegaNavItem[] = [
  {
    label: 'Our Work',
    layout: 'dark-immersive',
    columns: [
      {
        title: 'Programs',
        compact: true,
        items: OUR_WORK_PROGRAMS.map((p) => ({
          label: p.title,
          href: `/programs/${p.slug}`,
          description: p.navBlurb,
        })),
      },
    ],
  },
  {
    label: 'Our Story',
    href: '/about/story',
  },
  {
    label: 'Who We Are',
    layout: 'editorial',
    columns: [
      {
        title: 'About Us',
        items: [
          { label: 'Our Team', href: '/about/team', description: 'Meet the people behind our conservation work' },
          { label: 'Mission & Vision', href: '/about/mission', description: 'Our purpose and values driving ocean conservation' },
          { label: 'Get Involved', href: '/get-involved', description: 'Join our mission to protect the ocean' },
        ],
      },
      {
        title: 'Learn More',
        items: [
          { label: 'Impact Stories', href: '/blog/category/impact-stories', description: 'Real results from our fieldwork' },
          { label: 'Photo Gallery', href: '/gallery', description: 'Coral restoration, community life, wildlife & ocean landscapes' },
          { label: 'Kuruwitu Story', href: '/learn/kuruwitu', description: 'Kenya\'s first community-led marine conservation area' },
        ],
      },
    ],
  },
  {
    label: 'Get Involved',
    layout: 'get-involved-custom',
  },
];

// ─── Dark Immersive Dropdown (Our Work) ───────────────────────────────────────

// ══════════════════════════════════════════════════════════════════
// PART 4 · Desktop dropdown panels (one function per style)
// ══════════════════════════════════════════════════════════════════

function DarkImmersiveMegaDropdown({ item, onClose }: { item: MegaNavItem; onClose: () => void }) {
  const programsCol = item.columns?.[0];

  return (
    <div className="absolute top-full left-0 right-0 z-50">
      <div className="bg-ocean-midnight border-t border-white/5 shadow-[0_24px_60px_-10px_rgba(0,0,0,0.6)]">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-8">

            {/* Column 1: Our Work — rewritten intro + Explore All Projects CTA */}
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '280px' }}>
              <Image
                src={PAGE.darkImmersiveMegaDropdown.image}
                alt={PAGE.darkImmersiveMegaDropdown.imageAlt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight via-ocean-midnight/90 to-ocean-midnight/50" />
              <div className="relative z-10 h-full p-5 flex flex-col justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-ocean-turquoise mb-2 flex items-center gap-2">
                    <span className="w-3 h-px bg-ocean-turquoise/50 inline-block" />{PAGE.darkImmersiveMegaDropdown.eyebrow}</p>
                  <h3 className="text-xl font-poppins font-bold text-white leading-tight mb-2">{PAGE.darkImmersiveMegaDropdown.subheading}</h3>
                  <p className="text-[13px] text-white/70 leading-relaxed">{PAGE.darkImmersiveMegaDropdown.text}</p>
                </div>
                <div>
                  <div className="flex items-center gap-6 mb-3">
                    <div>
                      <div className="text-2xl font-poppins font-bold text-ocean-turquoise leading-none">
                        {String(OUR_WORK_PROGRAMS.length).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1">{PAGE.darkImmersiveMegaDropdown.eyebrow2}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-poppins font-bold text-ocean-turquoise leading-none">{PROJECTS.length}+</div>
                      <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1">{PAGE.darkImmersiveMegaDropdown.eyebrow3}</div>
                    </div>
                  </div>
                  <Link
                    href={PAGE.darkImmersiveMegaDropdown.link}
                    onClick={onClose}
                    className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-ocean-turquoise text-ocean-midnight rounded-lg font-bold text-sm hover:bg-white transition-all duration-200"
                  >{PAGE.darkImmersiveMegaDropdown.linkText}<span className="group-hover/btn:translate-x-0.5 transition-transform inline-block">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 2: Programs */}
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-ocean-turquoise mb-2 flex items-center gap-2">
                <span className="w-3 h-px bg-ocean-turquoise/40 inline-block" />{PAGE.darkImmersiveMegaDropdown.eyebrow4}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {programsCol?.items.map((prog, i) => (
                  <Link
                    key={prog.href}
                    href={prog.href}
                    onClick={onClose}
                    className="group relative p-3 rounded-xl border border-white/10 hover:border-ocean-turquoise/40 hover:bg-white/5 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="w-7 h-7 rounded-lg bg-white/5 text-ocean-turquoise text-xs font-bold flex items-center justify-center shrink-0 group-hover:bg-ocean-turquoise group-hover:text-ocean-midnight transition-all duration-200">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-ocean-turquoise/40 group-hover:text-ocean-turquoise group-hover:translate-x-1 transition-all">→</span>
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-ocean-turquoise transition-colors leading-tight mb-1">
                      {prog.label}
                    </div>
                    <p className="text-[11px] text-white/45 leading-snug line-clamp-1">{prog.description}</p>
                  </Link>
                ))}
              </div>

              {/* Cross-cutting themes */}
              <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <span className="text-[9px] text-white/30 uppercase tracking-widest shrink-0">{PAGE.darkImmersiveMegaDropdown.eyebrow5}</span>
                <span className="text-[11px] text-white/40 leading-snug">
                  {CROSS_CUTTING_THEMES.join(' · ')}
                </span>
              </div>
            </div>

          </div>

          {/* Recognition & Partners band */}
          <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recognition & Awards */}
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-ocean-turquoise mb-2 flex items-center gap-2">
                <span className="w-3 h-px bg-ocean-turquoise/40 inline-block" />{PAGE.darkImmersiveMegaDropdown.eyebrow6}</p>
              <div className="flex flex-wrap items-center gap-1.5 mb-2">
                {PAGE.darkImmersiveMegaDropdown.list.map((a) => (
                  <span
                    key={a.label}
                    className="inline-flex items-center gap-1.5 text-[11px] text-white/70 bg-white/5 border border-white/10 rounded-full px-2.5 py-1"
                  >
                    <svg className="w-3 h-3 text-ocean-turquoise shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {a.label} <span className="text-white/40">· {a.year}</span>
                  </span>
                ))}
              </div>
              <Link
                href={PAGE.darkImmersiveMegaDropdown.link2}
                onClick={onClose}
                className="group/link text-[11px] font-bold text-ocean-turquoise hover:text-white transition-colors inline-flex items-center gap-1"
              >{PAGE.darkImmersiveMegaDropdown.linkText2}<span className="group-hover/link:translate-x-0.5 transition-transform inline-block">→</span>
              </Link>
            </div>

            {/* Partners */}
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-ocean-turquoise mb-2 flex items-center gap-2">
                <span className="w-3 h-px bg-ocean-turquoise/40 inline-block" />{PAGE.darkImmersiveMegaDropdown.eyebrow7}</p>
              <div className="flex flex-wrap items-center gap-1.5 mb-2">
                {PAGE.darkImmersiveMegaDropdown.list2.map((name) => (
                  <span
                    key={name}
                    className="text-[11px] text-white/60 bg-white/5 border border-white/10 rounded-full px-2.5 py-1"
                  >
                    {name}
                  </span>
                ))}
              </div>
              <Link
                href={PAGE.darkImmersiveMegaDropdown.link3}
                onClick={onClose}
                className="group/link text-[11px] font-bold text-ocean-turquoise hover:text-white transition-colors inline-flex items-center gap-1"
              >{PAGE.darkImmersiveMegaDropdown.linkText3}<span className="group-hover/link:translate-x-0.5 transition-transform inline-block">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── Action Cards Dropdown (Get Involved) ────────────────────────────────────

function ActionCardsMegaDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 right-0 z-50">
      <div className="bg-ocean-midnight border-t border-white/5 shadow-[0_24px_60px_-10px_rgba(0,0,0,0.6)]">
        <div className="max-w-6xl mx-auto px-6 py-9">
          <div className="grid grid-cols-3 gap-4">
            {INVOLVE_CARDS.map((card, i) => (
              <Link
                key={card.title}
                href={card.href}
                onClick={onClose}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.gradient} p-7 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              >
                {/* ── Card 0 (Donate): scattered water bubbles ── */}
                {i === 0 && (<>
                  <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/[0.07] pointer-events-none" />
                  <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-black/10 pointer-events-none" />
                  <div className="absolute top-1/2 -translate-y-1/2 -left-7 w-24 h-24 rounded-full bg-white/[0.04] pointer-events-none" />
                  <div className="absolute top-5 right-[38%] w-11 h-11 rounded-full bg-white/[0.08] pointer-events-none" />
                  <div className="absolute bottom-9 right-9 w-6 h-6 rounded-full bg-white/[0.14] pointer-events-none" />
                  <div className="absolute bottom-16 left-14 w-4 h-4 rounded-full bg-white/[0.10] pointer-events-none" />
                </>)}

                {/* ── Card 1 (Partner & Volunteer): rotated diamond frames ── */}
                {i === 1 && (<>
                  <div className="absolute -top-9 -right-9 w-40 h-40 border-2 border-white/[0.09] rotate-45 rounded-2xl pointer-events-none" />
                  <div className="absolute -bottom-14 -left-14 w-56 h-56 border border-white/[0.05] rotate-45 rounded-3xl pointer-events-none" />
                  <div className="absolute top-7 left-6 w-10 h-10 bg-white/[0.07] rotate-45 rounded-lg pointer-events-none" />
                  <div className="absolute bottom-10 right-7 w-7 h-7 bg-white/[0.09] rotate-45 rounded pointer-events-none" />
                  <div className="absolute top-1/2 right-12 w-5 h-5 border border-white/[0.12] rotate-45 rounded pointer-events-none" />
                </>)}

                {/* ── Card 2 (Contact Us): message envelope pattern ── */}
                {i === 2 && (<>
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-lg border-2 border-white/[0.08] pointer-events-none" />
                  <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-2xl bg-white/[0.05] pointer-events-none" />
                  <div className="absolute top-6 right-8 w-12 h-12 rounded border border-white/[0.10] pointer-events-none" />
                  <div className="absolute bottom-8 left-8 w-8 h-8 rounded-lg bg-white/[0.08] pointer-events-none" />
                  <div className="absolute top-1/2 left-1/3 w-6 h-6 rounded border border-white/[0.12] pointer-events-none" />
                </>)}

                <div className="relative">
                  <div className="h-7 mb-4">
                    {card.badge && (
                      <span className="inline-flex items-center text-[9px] font-bold uppercase tracking-widest bg-white/15 px-2.5 py-1 rounded-full">
                        {card.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-55 mb-3">{card.eyebrow}</p>
                  <div className="mb-4">
                    <div className="text-3xl font-poppins font-bold">{card.stat}</div>
                    <div className="text-[10px] opacity-50 mt-0.5">{card.statLabel}</div>
                  </div>
                  <h4 className="text-xl font-poppins font-bold mb-2">{card.title}</h4>
                  <p className="text-sm opacity-65 leading-relaxed mb-6">{card.description}</p>
                  <div className="text-xs font-bold opacity-75 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">{PAGE.actionCardsMegaDropdown.text}<span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Secondary links */}
          <div className="mt-4 flex items-center gap-6 pt-4 border-t border-white/10">
            <span className="text-[9px] text-white/25 uppercase tracking-widest shrink-0">{PAGE.actionCardsMegaDropdown.eyebrow}</span>
            {PAGE.actionCardsMegaDropdown.list.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={onClose}
                className="group/link inline-flex items-center gap-1 text-xs text-white/40 hover:text-ocean-turquoise transition-all font-medium whitespace-nowrap hover:gap-2"
              >
                {l.label}
                <span className="inline-block group-hover/link:translate-x-0.5 transition-transform">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Get Involved Custom Dropdown ─────────────────────────────────────────────

function GetInvolvedMegaDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 right-0 z-50">
      <div className="bg-ocean-midnight border-t border-white/5 shadow-[0_24px_60px_-10px_rgba(0,0,0,0.6)]">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid gap-8" style={{ gridTemplateColumns: '1fr 280px 380px' }}>

            {/* Left: Description */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-poppins font-bold text-white mb-4">{PAGE.getInvolvedMegaDropdown.subheading}</h3>
              <p className="text-white/70 leading-relaxed">{PAGE.getInvolvedMegaDropdown.text}</p>
            </div>

            {/* Middle: Menu Items */}
            <div className="flex flex-col justify-center">
              <Link
                href={PAGE.getInvolvedMegaDropdown.link}
                onClick={onClose}
                className="text-white/90 hover:text-ocean-turquoise font-medium text-lg py-2 transition-colors"
              >{PAGE.getInvolvedMegaDropdown.linkText}</Link>
              <div className="h-px bg-white/20 my-3" />
              <Link
                href={PAGE.getInvolvedMegaDropdown.link2}
                onClick={onClose}
                className="text-white/90 hover:text-ocean-turquoise font-medium text-lg py-2 transition-colors"
              >{PAGE.getInvolvedMegaDropdown.linkText2}</Link>
              <Link
                href={PAGE.getInvolvedMegaDropdown.link3}
                onClick={onClose}
                className="text-white/90 hover:text-ocean-turquoise font-medium text-lg py-2 transition-colors"
              >{PAGE.getInvolvedMegaDropdown.linkText3}</Link>
            </div>

            {/* Right: Featured Campaign Card */}
            <Link
              href={PAGE.getInvolvedMegaDropdown.link4}
              onClick={onClose}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-teal-600 to-teal-800 p-6 text-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-teal-500 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">{PAGE.getInvolvedMegaDropdown.eyebrow}</div>
                <div className="flex items-center gap-2 text-sm mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>{PAGE.getInvolvedMegaDropdown.text2}</div>
                <h4 className="text-3xl font-poppins font-bold mb-2">{PAGE.getInvolvedMegaDropdown.smallHeading}<br />{PAGE.getInvolvedMegaDropdown.smallHeading2}</h4>
                <p className="text-xl font-light mb-6">{PAGE.getInvolvedMegaDropdown.text3}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-teal-800 rounded-full font-semibold text-sm">{PAGE.getInvolvedMegaDropdown.text4}<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              {/* Background decorative element */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-20">
                <svg className="w-32 h-32" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 10 L90 90 L10 90 Z" />
                </svg>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Editorial Dropdown (Learn) ───────────────────────────────────────────────

function EditorialMegaDropdown({ item, onClose }: { item: MegaNavItem; onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 z-50 w-3/4">
      <div className="bg-white border-t border-ocean-midnight/10 shadow-2xl rounded-b-2xl">
        <div className="px-6 py-8">
          <div className="grid gap-6" style={{ gridTemplateColumns: '240px 1fr 1fr' }}>

            {/* Featured photo card */}
            <Link
              href={PAGE.editorialMegaDropdown.link}
              onClick={onClose}
              className="group relative rounded-2xl overflow-hidden block"
              style={{ minHeight: '240px' }}
            >
              <Image
                src={PAGE.editorialMegaDropdown.image}
                alt={PAGE.editorialMegaDropdown.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight via-ocean-midnight/55 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <p className="text-[9px] font-bold uppercase tracking-widest text-ocean-turquoise mb-2">{PAGE.editorialMegaDropdown.eyebrow}</p>
                <h4 className="text-sm font-poppins font-bold text-white leading-snug mb-1.5">{PAGE.editorialMegaDropdown.smallHeading}</h4>
                <p className="text-[11px] text-white/55 leading-snug mb-3">{PAGE.editorialMegaDropdown.text}</p>
                <span className="text-xs font-bold text-ocean-turquoise group-hover:underline">{PAGE.editorialMegaDropdown.label}</span>
              </div>
            </Link>

            {/* Content columns */}
            {item.columns?.map((col) => (
              <div key={col.title}>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-ocean-turquoise mb-4 flex items-center gap-2">
                  <span className="w-3 h-px bg-ocean-turquoise/50 inline-block" />
                  {col.title}
                </p>
                <div className="space-y-0.5">
                  {col.items.map((sub) => (
                    <Link
                      key={sub.href + sub.label}
                      href={sub.href}
                      onClick={onClose}
                      className="group flex items-start gap-3 py-2.5 px-3 rounded-xl hover:bg-ocean-midnight/5 transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-ocean-turquoise/35 mt-[7px] shrink-0 group-hover:bg-ocean-turquoise group-hover:scale-150 transition-all" />
                      <div className="min-w-0">
                        <div className="text-[13px] font-semibold text-ocean-midnight group-hover:text-ocean-turquoise transition-colors leading-tight">
                          {sub.label}
                        </div>
                        <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{sub.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile Nav Item ──────────────────────────────────────────────────────────

// ══════════════════════════════════════════════════════════════════
// PART 5 · Mobile menu item (accordion row)
// ══════════════════════════════════════════════════════════════════

function MobileNavItem({ item, onClose }: { item: MegaNavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  if (!item.columns && item.href) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="flex items-center justify-between py-3.5 text-sm font-semibold text-ocean-midnight border-b border-gray-100"
      >
        {item.label}
        <span className="text-ocean-turquoise/50 text-xs">→</span>
      </Link>
    );
  }

  // If no columns and no href, skip rendering
  if (!item.columns) {
    return null;
  }

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-3.5 text-sm font-semibold text-ocean-midnight"
      >
        {item.label}
        <svg
          className={`w-4 h-4 text-ocean-turquoise transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="pb-5 space-y-5">
          {item.layout === 'dark-immersive' && (
            <div className="bg-ocean-midnight rounded-2xl p-5">
              <p className="text-[9px] font-bold uppercase tracking-widest text-ocean-turquoise mb-2">{PAGE.mobileNavItem.eyebrow}</p>
              <p className="text-xs text-white/60 leading-relaxed mb-4">{PAGE.mobileNavItem.text}</p>
              <Link
                href={PAGE.mobileNavItem.link}
                onClick={onClose}
                className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-turquoise text-ocean-midnight rounded-lg font-bold text-xs"
              >{PAGE.mobileNavItem.linkText}<span>→</span>
              </Link>
            </div>
          )}
          {item.columns.map((col) => (
            <div key={col.title}>
              <p className="text-[9px] font-bold uppercase tracking-widest text-ocean-turquoise mb-2.5 flex items-center gap-2">
                <span className="w-3 h-px bg-ocean-turquoise/50 inline-block" />
                {col.title}
              </p>
              {col.compact ? (
                <div className="grid grid-cols-2 gap-0.5">
                  {col.items.map((sub, i) => (
                    <Link
                      key={sub.href + sub.label}
                      href={sub.href}
                      onClick={onClose}
                      className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="w-5 h-5 rounded-md bg-ocean-turquoise/10 text-ocean-turquoise text-[8px] font-bold flex items-center justify-center shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[11px] font-medium text-ocean-midnight leading-tight">{sub.label}</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="space-y-0.5">
                  {col.items.map((sub) => (
                    <Link
                      key={sub.href + sub.label}
                      href={sub.href}
                      onClick={onClose}
                      className="group flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-ocean-turquoise/40 shrink-0 group-hover:bg-ocean-turquoise transition-colors" />
                      <div>
                        <span className="text-sm font-medium text-ocean-midnight">{sub.label}</span>
                        {sub.badge && (
                          <span className="ml-2 text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-ocean-turquoise/15 text-ocean-turquoise">
                            {sub.badge}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {item.layout === 'dark-immersive' && (
            <div className="flex items-center gap-4 pt-1">
              <Link
                href={PAGE.mobileNavItem.link2}
                onClick={onClose}
                className="flex-1 flex items-center gap-2 py-2 px-3 rounded-lg bg-gray-50 text-xs font-semibold text-ocean-midnight"
              >
                <svg className="w-3.5 h-3.5 text-ocean-turquoise shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>{PAGE.mobileNavItem.linkText2}</Link>
              <Link
                href={PAGE.mobileNavItem.link3}
                onClick={onClose}
                className="flex-1 flex items-center gap-2 py-2 px-3 rounded-lg bg-gray-50 text-xs font-semibold text-ocean-midnight"
              >
                <svg className="w-3.5 h-3.5 text-ocean-turquoise shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>{PAGE.mobileNavItem.linkText3}</Link>
            </div>
          )}

          {/* Compact action cards for Get Involved */}
          {item.layout === 'action-cards' && (
            <div className="grid grid-cols-3 gap-2">
              {INVOLVE_CARDS.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  onClick={onClose}
                  className={`rounded-xl bg-gradient-to-br ${card.gradient} p-3 text-white text-center`}
                >
                  <div className="text-base font-poppins font-bold">{card.stat}</div>
                  <div className="text-[10px] font-bold mt-0.5 opacity-80">{card.title}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main Navbar ───────────────────────────────────────────────────────────────

// ══════════════════════════════════════════════════════════════════
// PART 6 · The header itself
// ══════════════════════════════════════════════════════════════════

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    console.log('Opening menu:', label);
    setActiveMenu(label);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 300);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const closeAll = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(null);
  }, []);

  const activeItem = MEGA_NAV.find((n) => n.label === activeMenu);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <nav className="bg-white/95 backdrop-blur-lg border-b border-ocean-midnight/5 shadow-sm relative">
            {/* Combined Top Bar and Main Nav */}
            <div className="relative">
              {/* ══════════════════════════════════════════════════════════════════
                  SECTION 1 · Top bar (phone, email, search, Donate button)
                  ══════════════════════════════════════════════════════════════════ */}
              <div className="bg-ocean-midnight border-b border-white/10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-end h-12 gap-4 sm:gap-6">
                  <a href={PAGE.topBar.link} className="hidden xl:flex items-center gap-2 text-xs text-white/70 hover:text-ocean-turquoise transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>{PAGE.topBar.linkText}</a>
                  <a href={PAGE.topBar.link2} className="hidden lg:flex items-center gap-2 text-xs text-white/70 hover:text-ocean-turquoise transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>{PAGE.topBar.linkText2}</a>
                  <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="flex items-center gap-1.5 text-xs text-white/70 hover:text-ocean-turquoise transition-colors"
                    aria-label={PAGE.topBar.accessibleLabel}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>{PAGE.topBar.buttonText}</button>
                  <Link
                    href={PAGE.topBar.link3}
                    onClick={closeAll}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-ocean-turquoise to-blue-500 text-white rounded-md font-semibold text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>{PAGE.topBar.linkText3}</Link>
                </div>
              </div>

              {/* ══════════════════════════════════════════════════════════════════
                  SECTION 2 · Phone/tablet header (logo + menu button) - below 1024px
                  ══════════════════════════════════════════════════════════════════ */}
              <div className="flex lg:hidden items-center justify-between h-16 px-4 bg-ocean-midnight">
                <Link href={PAGE.phoneTabletHeaderBelow1024px.link} onClick={closeAll} className="flex items-center shrink-0">
                  <Image
                    src={PAGE.phoneTabletHeaderBelow1024px.image}
                    alt={PAGE.phoneTabletHeaderBelow1024px.imageAlt}
                    width={960}
                    height={540}
                    className="w-[120px] h-14 object-cover"
                    priority
                  />
                </Link>
                <button
                  onClick={() => { setMobileOpen(!mobileOpen); closeAll(); }}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  aria-label={PAGE.phoneTabletHeaderBelow1024px.accessibleLabel}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                    />
                  </svg>
                </button>
              </div>

              {/* ══════════════════════════════════════════════════════════════════
                  SECTION 3 · Desktop logo panel (diagonal edge) - 1024px and up
                  ══════════════════════════════════════════════════════════════════ */}
              <div className="hidden lg:flex absolute left-0 top-0 z-20 bg-ocean-midnight items-center justify-center px-8 md:px-12" style={{ width: '520px', height: '100%' }}>
                <Link href={PAGE.desktopLogoPanel1024pxAndUp.link} onClick={closeAll} className="flex items-center shrink-0">
                  <Image
                    src={PAGE.desktopLogoPanel1024pxAndUp.image}
                    alt={PAGE.desktopLogoPanel1024pxAndUp.imageAlt}
                    width={960}
                    height={540}
                    className={`w-auto object-contain transition-all duration-300 ${mobileOpen ? 'h-40 md:h-48' : 'h-36 md:h-44'}`}
                    priority
                  />
                </Link>

                {/* 45-degree Diagonal Separator Line */}
                <div
                  className="absolute right-0 top-0 h-full w-16 bg-ocean-midnight"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                    transform: 'translateX(100%)'
                  }}
                />
                <div
                  className="absolute right-0 top-0 h-full w-0.5 bg-white/20"
                  style={{
                    transformOrigin: 'top right',
                    transform: 'rotate(-45deg) translateX(0)',
                    height: '141.42%'
                  }}
                />
              </div>

              <div className="hidden lg:flex relative max-w-6xl mx-auto items-stretch h-20 md:h-22 overflow-hidden">
                {/* Left Section: Spacer for logo */}
                <div style={{ width: '520px' }} />

                {/* Right Section: Menu Area with White Background */}
                <div className="flex-1 bg-white flex items-center justify-between px-6">
                {/* ══════════════════════════════════════════════════════════════════
                    SECTION 4 · Desktop menu items
                    ══════════════════════════════════════════════════════════════════ */}
                <div className="hidden lg:flex items-center gap-1 ml-12">
                  {MEGA_NAV.map((item) => {
                    const isActive = activeMenu === item.label;

                    if (!item.columns && item.href) {
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={closeAll}
                          className="px-4 py-2 text-base font-bold text-gray-700 hover:text-ocean-midnight hover:bg-ocean-midnight/5 rounded-lg transition-colors"
                        >
                          {item.label}
                        </Link>
                      );
                    }

                    // Skip items without columns and without href
                    if (!item.columns) {
                      return null;
                    }

                    return (
                      <button
                        key={item.label}
                        onMouseEnter={() => openMenu(item.label)}
                        onMouseLeave={scheduleClose}
                        onClick={() => setActiveMenu(isActive ? null : item.label)}
                        className={`flex items-center gap-1 px-4 py-2 text-base font-bold rounded-lg transition-all duration-150 ${
                          isActive
                            ? 'text-ocean-midnight bg-ocean-midnight/8'
                            : 'text-gray-700 hover:text-ocean-midnight hover:bg-ocean-midnight/5'
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'rotate-180 text-ocean-turquoise' : 'text-gray-400'}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 5 · Search bar (slides down)
              ══════════════════════════════════════════════════════════════════ */}
          {searchOpen && (
            <div className="bg-ocean-midnight/5 border-t border-ocean-midnight/10">
              <div className="max-w-6xl mx-auto px-6 py-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={PAGE.searchBar.placeholder}
                    className="w-full px-4 py-2.5 pr-10 rounded-lg border border-ocean-midnight/20 focus:border-ocean-turquoise focus:ring-2 focus:ring-ocean-turquoise/20 outline-none transition-all"
                    autoFocus
                  />
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          )}

            {/* ══════════════════════════════════════════════════════════════════
                SECTION 6 · Desktop dropdown panel
                ══════════════════════════════════════════════════════════════════ */}
            {activeItem && (
              <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose} className="relative">
                {activeItem.layout === 'dark-immersive' ? (
                  <DarkImmersiveMegaDropdown item={activeItem} onClose={closeAll} />
                ) : activeItem.layout === 'get-involved-custom' ? (
                  <GetInvolvedMegaDropdown onClose={closeAll} />
                ) : activeItem.layout === 'action-cards' ? (
                  <ActionCardsMegaDropdown onClose={closeAll} />
                ) : activeItem.columns ? (
                  <EditorialMegaDropdown item={activeItem} onClose={closeAll} />
                ) : null}
              </div>
            )}
          </nav>
      </div>

      {/* Backdrop */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-40 bg-ocean-midnight/10 backdrop-blur-[2px]"
          onClick={closeAll}
          style={{ top: '96px' }}
        />
      )}

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7 · Phone/tablet menu (opens from the menu button)
          ══════════════════════════════════════════════════════════════════ */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[112px] z-50 bg-white border-t border-ocean-midnight/10 shadow-xl max-h-[calc(100dvh-112px)] overflow-y-auto overscroll-contain">
          <div className="max-w-6xl mx-auto px-6 py-4 space-y-0">
            {MEGA_NAV.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                onClose={() => setMobileOpen(false)}
              />
            ))}
            <div className="pt-4">
              <Link
                href={PAGE.phoneTabletMenu.link}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-ocean-turquoise to-blue-500 text-white rounded-xl font-bold text-sm shadow-md"
              >{PAGE.phoneTabletMenu.linkText}</Link>
              <div className="flex flex-col items-center gap-2 pt-4 pb-2 text-sm text-ocean-midnight/70">
                <a href={PAGE.phoneTabletMenu.link2} className="hover:text-ocean-turquoise">{PAGE.phoneTabletMenu.linkText2}</a>
                <a href={PAGE.phoneTabletMenu.link3} className="hover:text-ocean-turquoise break-all">{PAGE.phoneTabletMenu.linkText3}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
