'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAV_ITEMS } from '@/lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-ocean-midnight/5 shadow-sm-blue">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-ocean-midnight to-ocean-turquoise rounded-lg flex items-center justify-center text-white text-sm font-bold">
            🌊
          </div>
          <span className="hidden sm:inline font-poppins font-bold text-ocean-midnight text-base tracking-tight">
            Oceans Alive
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-ocean-midnight transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-ocean-turquoise to-ocean-midnight group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/donate"
            className="hidden sm:inline-block px-6 py-2.5 bg-gradient-to-r from-ocean-turquoise to-blue-500 text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-md-blue hover:-translate-y-0.5 shadow-sm-blue"
          >
            Donate
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-ocean-midnight hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-ocean-midnight/10 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block font-medium text-ocean-midnight hover:text-ocean-turquoise py-2 text-sm transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="block w-full text-center px-4 py-2.5 bg-gradient-to-r from-ocean-turquoise to-blue-500 text-white rounded-lg font-semibold text-sm hover:shadow-md-blue transition-all mt-4"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
