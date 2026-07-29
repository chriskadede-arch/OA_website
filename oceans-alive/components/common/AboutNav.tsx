'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ABOUT_NAV_ITEMS = [
  { label: 'Overview', href: '/about' },
  { label: 'Our Story', href: '/about/story' },
  { label: 'Mission & Vision', href: '/about/mission' },
  { label: 'Recognition', href: '/about/recognition' },
  { label: 'Kuruwitu Story', href: '/learn/kuruwitu' },
  { label: 'Our Team', href: '/about/team' },
  { label: 'Partners', href: '/about/partners' },
];

export default function AboutNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-3">
          {ABOUT_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-ocean-turquoise text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-ocean-midnight'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
