'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CONTACT_EMAIL, CONTACT_ADDRESS, SITE_NAME } from '@/lib/constants';
import { PRIMARY_SDGS } from '@/lib/sdg-mapping';
import NewsletterForm from './NewsletterForm';
import SDGRow from './SDGRow';

const SOCIAL = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/oceansalive',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/oceans_alive_kenya',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@oceans_alive_kenya',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/oceans-alive',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/oceans_alive_kenya',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@oceansalive',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-midnight text-white">
      {/* Main */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            {/* Logo */}
            <Link href="/" className="group inline-block mb-6">
              <div className="overflow-hidden rounded-2xl bg-white p-3 ring-1 ring-ocean-turquoise/30 shadow-[0_0_40px_rgba(46,191,209,0.18),0_6px_24px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_55px_rgba(46,191,209,0.30)] transition-shadow duration-500">
                <Image
                  src="/logo.png"
                  alt="Oceans Alive Foundation"
                  width={960}
                  height={540}
                  className="h-14 w-auto object-contain block"
                  priority
                />
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-8">
              Working with coastal communities to restore marine ecosystems, strengthen livelihoods, and create lasting positive change along Kenya's coast.
            </p>

            <div className="flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-ocean-turquoise flex items-center justify-center transition-colors text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-poppins font-bold mb-4 text-ocean-turquoise text-sm uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                { label: 'Our Story', href: '/about/story' },
                { label: 'Mission & Vision', href: '/about/mission' },
                { label: 'Recognition', href: '/about/recognition' },
                { label: 'Our Partners', href: '/about/partners' },
                { label: 'Our Team', href: '/about/team' },
                { label: 'Programmes', href: '/programmes' },
                { label: 'Get Involved', href: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-ocean-turquoise transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="font-poppins font-bold mb-4 text-ocean-turquoise text-sm uppercase tracking-wider">Programmes</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                { label: 'Coral Restoration', href: '/programmes' },
                { label: 'Co-Management', href: '/programmes' },
                { label: 'Ocean Education', href: '/programmes' },
                { label: 'Trash4Cash', href: '/programmes' },
                { label: 'BMU Network', href: '/programmes' },
                { label: 'Turtle Protection', href: '/programmes' },
                { label: 'LIFT Network', href: '/programmes' },
                { label: 'Research & Monitoring', href: '/programmes' },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-ocean-turquoise transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-bold mb-4 text-ocean-turquoise text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ocean-turquoise transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="text-white/60">{CONTACT_ADDRESS}</li>
              <li className="pt-2 border-t border-white/10">
                <Link href="/contact?type=Partnership" className="hover:text-ocean-turquoise transition-colors">
                  Press &amp; Media
                </Link>
              </li>
              <li>
                <Link href="/contact?type=Partnership" className="hover:text-ocean-turquoise transition-colors">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-xs text-white/40">
              © {currentYear} Oceans Alive. Registered as Oceans Alive Trust, Kenya. Community-led conservation at Kuruwitu since 2003; Oceans Alive since 2016.
            </p>
            <p className="text-xs text-white/30">
              Website built by{' '}
              <a
                href="https://www.linkedin.com/in/chrisadede/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ocean-turquoise hover:text-white transition-colors font-semibold"
              >
                Ades Media
              </a>
            </p>
          </div>
          <div className="flex gap-5 text-xs text-white/40">
            <Link href="#" className="hover:text-ocean-turquoise transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-ocean-turquoise transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
