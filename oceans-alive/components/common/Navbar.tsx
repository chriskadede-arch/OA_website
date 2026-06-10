'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ─── Types ────────────────────────────────────────────────────────────────────

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
  layout?: 'dark-immersive' | 'action-cards' | 'editorial';
}

// ─── Action cards constant (desktop + mobile) ─────────────────────────────────

const INVOLVE_CARDS = [
  {
    eyebrow: 'Fund Conservation',
    title: 'Donate',
    description: '$25 plants 5 coral fragments and sustains a local family for a month.',
    href: '/donate',
    gradient: 'from-ocean-turquoise to-[#0a4f7a]',
    stat: '$25',
    statLabel: '= 5 Coral Fragments',
    badge: 'Most Impactful',
  },
  {
    eyebrow: 'NGOs · Governments · Business',
    title: 'Partner With Us',
    description: 'Amplify conservation impact through research, funding, and expertise.',
    href: '/contact?type=Partnership',
    gradient: 'from-[#1a6b5a] to-[#0e4a3c]',
    stat: '40+',
    statLabel: 'Global Partners',
    badge: null,
  },
  {
    eyebrow: 'Give Your Time & Skills',
    title: 'Volunteer',
    description: 'Field, research, education and community roles available in Kilifi.',
    href: '/contact?type=Volunteer',
    gradient: 'from-[#b05e00] to-[#7a3f00]',
    stat: '200+',
    statLabel: 'Volunteers to Date',
    badge: null,
  },
];

// ─── Nav Data ─────────────────────────────────────────────────────────────────

// 5 Main Programs for Navigation
const FIVE_PROGRAMS = [
  { title: 'Ocean Recovery', description: 'Coral, reefs & marine ecosystems' },
  { title: 'SHE Program', description: 'Women\'s livelihoods & empowerment' },
  { title: 'Learning & Leadership', description: 'Education & capacity building' },
  { title: 'Governance & Fisheries', description: 'Community governance & BMUs' },
  { title: 'Research & Innovation', description: 'Monitoring & sustainable finance' },
];

const MEGA_NAV: MegaNavItem[] = [
  {
    label: 'Our Work',
    layout: 'dark-immersive',
    columns: [
      {
        title: 'About Us',
        items: [
          { label: 'Our Story', href: '/about/story', description: 'Founded 2003 by Desmond Bowden & Kuruwitu fishermen' },
          { label: 'Mission & Vision', href: '/about/mission', description: 'Our purpose and guiding principles' },
          { label: 'Recognition & Awards', href: '/about/recognition', description: 'UNDP Equator Prize · Royal Visit · IUCN 2025' },
          { label: 'Our Partners', href: '/about/partners', description: 'Coral Guardian, Canon CENA, UK FCDO & more' },
          { label: 'Our Team', href: '/about/team', description: 'The people behind the work in Kilifi County' },
        ],
      },
      {
        title: 'Our Programs',
        compact: true,
        items: FIVE_PROGRAMS.map((p) => ({
          label: p.title,
          href: '/programmes',
          description: p.description,
        })),
      },
    ],
  },
  {
    label: 'Learn',
    layout: 'editorial',
    columns: [
      {
        title: 'Blog & Stories',
        items: [
          { label: 'Impact Stories', href: '/blog/category/impact-stories', description: 'Real results from our fieldwork' },
          { label: 'Education', href: '/blog/category/education', description: 'Learning resources and conservation articles' },
          { label: 'Community News', href: '/blog/category/community-news', description: 'Updates from local coastal communities' },
          { label: 'Latest Updates', href: '/blog/category/updates', description: 'News and announcements from OAF' },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Toolkits', href: '/resources?category=Toolkits', description: 'Practical guides for marine conservation' },
          { label: 'IEC Materials', href: '/resources?category=IEC+Materials', description: 'Information & education content' },
          { label: 'Case Studies', href: '/resources?category=Case+Studies', description: 'Deep dives into our programmes' },
          { label: 'Reports & Data', href: '/resources?category=Reports', description: 'Evidence-based conservation insights' },
        ],
      },
      {
        title: 'Gallery',
        items: [
          { label: 'Coral Restoration', href: '/gallery?category=Coral+Restoration', description: 'Reef recovery captured in photos' },
          { label: 'Community Life', href: '/gallery?category=Community', description: 'Coastal community moments' },
          { label: 'Wildlife', href: '/gallery?category=Wildlife', description: 'Marine creatures we protect' },
          { label: 'Ocean Landscapes', href: '/gallery?category=Ocean+Landscapes', description: "Kenya's stunning coastline" },
        ],
      },
    ],
  },
  {
    label: 'Get Involved',
    layout: 'action-cards',
    columns: [
      {
        title: 'Support Us',
        items: [
          { label: 'Make a Donation', href: '/donate', description: 'Directly fund conservation projects', badge: 'Popular' },
          { label: 'Monthly Giving', href: '/donate', description: 'Sustain our work with recurring support' },
          { label: 'Corporate Partnership', href: '/contact?type=Partnership', description: 'Collaborate with us as a business' },
          { label: 'In-Kind Support', href: '/contact?type=Other', description: 'Donate equipment or expertise' },
        ],
      },
      {
        title: 'Engage',
        items: [
          { label: 'Volunteer', href: '/contact?type=Volunteer', description: 'Give your time and skills to conservation' },
          { label: 'Partner With Us', href: '/contact?type=Partnership', description: 'NGOs, governments & researchers welcome' },
          { label: 'Internships', href: '/contact?type=Other', description: 'Join us as a student or graduate' },
          { label: 'Community Events', href: '/blog/category/updates', description: 'Workshops, cleanups & field days' },
        ],
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

// ─── Dark Immersive Dropdown (Our Work) ───────────────────────────────────────

function DarkImmersiveMegaDropdown({ item, onClose }: { item: MegaNavItem; onClose: () => void }) {
  const aboutCol = item.columns?.[0];
  const programmesCol = item.columns?.[1];

  return (
    <div className="absolute top-full left-0 right-0 z-40" onMouseLeave={onClose}>
      <div className="h-1 bg-transparent" />
      <div className="bg-ocean-midnight border-t border-white/5 shadow-[0_24px_60px_-10px_rgba(0,0,0,0.6)]">
        <div className="max-w-6xl mx-auto px-6 py-9">
          <div className="grid gap-0" style={{ gridTemplateColumns: '200px 1fr 280px' }}>

            {/* Column 1: About Us */}
            <div className="pr-8 border-r border-white/10">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-ocean-turquoise mb-6 flex items-center gap-2">
                <span className="w-4 h-px bg-ocean-turquoise/40 inline-block" />
                About Us
              </p>
              <div className="space-y-0.5">
                {aboutCol?.items.map((sub) => (
                  <Link
                    key={sub.href + sub.label}
                    href={sub.href}
                    onClick={onClose}
                    className="group flex items-center py-2.5 px-2 rounded-xl hover:bg-white/5 transition-all duration-200"
                  >
                    <span
                      className="h-px bg-ocean-turquoise shrink-0 transition-all duration-300 mr-0 group-hover:mr-2.5"
                      style={{ width: 0 }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.width = '12px'; }}
                    />
                    <span className="text-[13px] font-medium text-white/55 group-hover:text-white transition-colors duration-200 leading-tight">
                      {sub.label}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-8 px-2 select-none pointer-events-none">
                <div className="text-[56px] font-poppins font-bold text-white/5 leading-none">20+</div>
                <div className="text-[9px] text-white/15 uppercase tracking-[0.18em] mt-1">Years Active</div>
              </div>
            </div>

            {/* Column 2: Our Programs */}
            <div className="px-8 border-r border-white/10">
              <div className="flex items-center justify-between mb-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-ocean-turquoise flex items-center gap-2">
                  <span className="w-4 h-px bg-ocean-turquoise/40 inline-block" />
                  Our Programs
                </p>
                <Link
                  href="/programmes"
                  onClick={onClose}
                  className="text-[10px] text-white/30 hover:text-ocean-turquoise transition-colors font-medium"
                >
                  See overview →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-0.5">
                {programmesCol?.items.map((prog, i) => (
                  <Link
                    key={prog.href}
                    href={prog.href}
                    onClick={onClose}
                    className="group flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-white/5 transition-all duration-150"
                  >
                    <span className="w-6 h-6 rounded-md bg-white/5 text-ocean-turquoise text-[9px] font-bold flex items-center justify-center shrink-0 group-hover:bg-ocean-turquoise group-hover:text-ocean-midnight transition-all duration-200">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] font-medium text-white/45 group-hover:text-white/90 transition-colors leading-snug">
                      {prog.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: Photo + Impact */}
            <div className="pl-8">
              <Link
                href="/programmes"
                onClick={onClose}
                className="group relative block rounded-2xl overflow-hidden"
                style={{ minHeight: '260px', height: '100%' }}
              >
                <Image
                  src="/images/divers.jpg"
                  alt="Coral restoration divers at Kuruwitu"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight via-ocean-midnight/65 to-ocean-midnight/15" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/35">
                    Coral Restoration · Kilifi
                  </div>
                  <div>
                    <div className="text-[42px] font-poppins font-bold text-ocean-turquoise leading-none">24,800</div>
                    <div className="text-[10px] text-white/55 uppercase tracking-widest mt-1">Coral Colonies Planted</div>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-white/55 group-hover:text-ocean-turquoise transition-colors duration-200">
                      View All Programmes
                      <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                    </div>
                  </div>
                </div>
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
    <div className="absolute top-full left-0 right-0 z-40" onMouseLeave={onClose}>
      <div className="h-1 bg-transparent" />
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

                {/* ── Card 1 (Partner): rotated diamond frames ── */}
                {i === 1 && (<>
                  <div className="absolute -top-9 -right-9 w-40 h-40 border-2 border-white/[0.09] rotate-45 rounded-2xl pointer-events-none" />
                  <div className="absolute -bottom-14 -left-14 w-56 h-56 border border-white/[0.05] rotate-45 rounded-3xl pointer-events-none" />
                  <div className="absolute top-7 left-6 w-10 h-10 bg-white/[0.07] rotate-45 rounded-lg pointer-events-none" />
                  <div className="absolute bottom-10 right-7 w-7 h-7 bg-white/[0.09] rotate-45 rounded pointer-events-none" />
                  <div className="absolute top-1/2 right-12 w-5 h-5 border border-white/[0.12] rotate-45 rounded pointer-events-none" />
                </>)}

                {/* ── Card 2 (Volunteer): diagonal stripes + concentric rings ── */}
                {i === 2 && (<>
                  <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 1px, transparent 22px)' }} />
                  <div className="absolute -top-14 -right-14 w-52 h-52 rounded-full border-[3px] border-white/[0.08] pointer-events-none" />
                  <div className="absolute -top-7 -right-7 w-32 h-32 rounded-full border-2 border-white/[0.10] pointer-events-none" />
                  <div className="absolute -top-1 -right-1 w-16 h-16 rounded-full border border-white/[0.12] pointer-events-none" />
                  <div className="absolute bottom-8 left-5 w-16 h-16 rounded-full bg-black/[0.08] pointer-events-none" />
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
                  <div className="text-xs font-bold opacity-75 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                    Get Started <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Secondary links */}
          <div className="mt-4 flex items-center gap-6 pt-4 border-t border-white/10">
            <span className="text-[9px] text-white/25 uppercase tracking-widest shrink-0">More ways:</span>
            {[
              { label: 'Monthly Giving', href: '/donate' },
              { label: 'In-Kind Donations', href: '/contact?type=Other' },
              { label: 'Community Events', href: '/blog/category/updates' },
              { label: 'Internships', href: '/contact?type=Other' },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={onClose}
                className="text-xs text-white/40 hover:text-ocean-turquoise transition-colors font-medium whitespace-nowrap"
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Editorial Dropdown (Learn) ───────────────────────────────────────────────

function EditorialMegaDropdown({ item, onClose }: { item: MegaNavItem; onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 right-0 z-40" onMouseLeave={onClose}>
      <div className="h-1 bg-transparent" />
      <div className="bg-white border-t border-ocean-midnight/10 shadow-2xl">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid gap-6" style={{ gridTemplateColumns: '240px 1fr 1fr 1fr' }}>

            {/* Featured photo card */}
            <Link
              href="/blog/category/impact-stories"
              onClick={onClose}
              className="group relative rounded-2xl overflow-hidden block"
              style={{ minHeight: '240px' }}
            >
              <Image
                src="/images/coralteaching.jpg"
                alt="Ocean education at Kuruwitu"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight via-ocean-midnight/55 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <p className="text-[9px] font-bold uppercase tracking-widest text-ocean-turquoise mb-2">From the Field</p>
                <h4 className="text-sm font-poppins font-bold text-white leading-snug mb-1.5">
                  Stories from Kenya's Coast
                </h4>
                <p className="text-[11px] text-white/55 leading-snug mb-3">
                  Conservation through community voices.
                </p>
                <span className="text-xs font-bold text-ocean-turquoise group-hover:underline">
                  Read Stories →
                </span>
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

function MobileNavItem({ item, onClose }: { item: MegaNavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  if (!item.columns) {
    return (
      <Link
        href={item.href!}
        onClick={onClose}
        className="flex items-center justify-between py-3.5 text-sm font-semibold text-ocean-midnight border-b border-gray-100"
      >
        {item.label}
        <span className="text-ocean-turquoise/50 text-xs">→</span>
      </Link>
    );
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
                      className="flex items-center gap-2 py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="w-6 h-6 rounded-md bg-ocean-turquoise/10 text-ocean-turquoise text-[9px] font-bold flex items-center justify-center shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs font-medium text-ocean-midnight leading-snug">{sub.label}</span>
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

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
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
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-ocean-midnight/5 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" onClick={closeAll} className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Oceans Alive Foundation"
              width={960}
              height={540}
              className="h-12 md:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {MEGA_NAV.map((item) => {
              const isActive = activeMenu === item.label;

              if (!item.columns) {
                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    onClick={closeAll}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-ocean-midnight hover:bg-ocean-midnight/5 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <button
                  key={item.label}
                  onMouseEnter={() => openMenu(item.label)}
                  onMouseLeave={scheduleClose}
                  onClick={() => setActiveMenu(isActive ? null : item.label)}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                    isActive
                      ? 'text-ocean-midnight bg-ocean-midnight/8'
                      : 'text-gray-700 hover:text-ocean-midnight hover:bg-ocean-midnight/5'
                  }`}
                >
                  {item.label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? 'rotate-180 text-ocean-turquoise' : 'text-gray-400'}`}
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

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              onClick={closeAll}
              className="hidden sm:inline-flex items-center px-5 py-2 bg-gradient-to-r from-ocean-turquoise to-blue-500 text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 shadow-sm"
            >
              Donate
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => { setMobileOpen(!mobileOpen); closeAll(); }}
              className="md:hidden p-2 text-ocean-midnight hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
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
        </div>

        {/* Desktop Mega Dropdown */}
        {activeItem?.columns && (
          <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
            {activeItem.layout === 'dark-immersive' ? (
              <DarkImmersiveMegaDropdown item={activeItem} onClose={closeAll} />
            ) : activeItem.layout === 'action-cards' ? (
              <ActionCardsMegaDropdown onClose={closeAll} />
            ) : (
              <EditorialMegaDropdown item={activeItem} onClose={closeAll} />
            )}
          </div>
        )}
      </nav>

      {/* Backdrop */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-40 bg-ocean-midnight/10 backdrop-blur-[2px]"
          onClick={closeAll}
          style={{ top: '80px' }}
        />
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 z-50 bg-white border-t border-ocean-midnight/10 shadow-xl max-h-[80vh] overflow-y-auto">
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
                href="/donate"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-ocean-turquoise to-blue-500 text-white rounded-xl font-bold text-sm shadow-md"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
