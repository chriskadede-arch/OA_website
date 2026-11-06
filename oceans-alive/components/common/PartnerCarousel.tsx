/**
 * ══════════════════════════════════════════════════════════════════
 * PARTNER LOGO CAROUSEL
 * ══════════════════════════════════════════════════════════════════
 * Partners come from lib/constants.ts → PARTNERS.
 * Page text, images and links (editable in Pages CMS)  →  content/site/partner-carousel.json
 */
'use client';

import { PARTNERS } from '@/lib/constants';
import Image from 'next/image';

import PAGE from '@/content/site/partner-carousel.json';

export default function PartnerCarousel() {
  return (
    <div className="relative overflow-hidden bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <h3 className="text-center text-sm font-bold uppercase tracking-widest text-gray-400">{PAGE.intro.subheading}</h3>
      </div>

      {/* Infinite scrolling carousel */}
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set of partners */}
          {PARTNERS.map((partner, index) => (
            <div
              key={`partner-1-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: '150px', height: '70px' }}
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={50}
                  className="object-contain max-h-12 opacity-60 hover:opacity-100 transition-opacity "
                  style={{ maxHeight: '48px' }}
                />
              ) : (
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-400">{partner.name}</div>
                </div>
              )}
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {PARTNERS.map((partner, index) => (
            <div
              key={`partner-2-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: '150px', height: '70px' }}
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={50}
                  className="object-contain max-h-12 opacity-60 hover:opacity-100 transition-opacity "
                  style={{ maxHeight: '48px' }}
                />
              ) : (
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-400">{partner.name}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
