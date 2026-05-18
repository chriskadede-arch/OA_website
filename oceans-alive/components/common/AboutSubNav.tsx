'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SECTIONS = [
  { label: 'Overview', href: '/about' },
  { label: 'Our Story', href: '/about/story' },
  { label: 'Mission & Vision', href: '/about/mission' },
  { label: 'Recognition', href: '/about/recognition' },
  { label: 'Partners', href: '/about/partners' },
  { label: 'Our Team', href: '/about/team' },
];

export default function AboutSubNav() {
  const path = usePathname();

  return (
    <nav className="sticky top-16 md:top-20 z-40 bg-ocean-midnight/96 backdrop-blur-md border-b border-white/[0.07] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-1 py-2.5">
          {SECTIONS.map((s) => {
            const active =
              s.href === '/about'
                ? path === '/about'
                : path.startsWith(s.href);
            return (
              <Link
                key={s.href}
                href={s.href}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  active
                    ? 'bg-ocean-turquoise text-ocean-midnight'
                    : 'text-white/50 hover:text-white hover:bg-white/10'
                }`}
              >
                {s.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
