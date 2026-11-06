/**
 * ══════════════════════════════════════════════════════════════════
 * PARTNER CARD (not currently used on any page)
 * ══════════════════════════════════════════════════════════════════
 */
'use client';

import { useState } from 'react';

type Props = {
  name: string;
  role: string;
  logo?: string | null;
};

function getInitials(name: string): string {
  return name
    .split(/[\s&/·]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export default function PartnerCard({ name, role, logo }: Props) {
  const [imgError, setImgError] = useState(false);
  const showLogo = logo && !imgError;
  const initials = getInitials(name);

  return (
    <div className="group flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl border border-gray-100 hover:border-ocean-turquoise/40 hover:shadow-xl transition-all duration-300 min-h-[150px] text-center">
      <div className="h-14 flex items-center justify-center">
        {showLogo ? (
          <img
            src={logo}
            alt={name}
            className="max-h-12 max-w-[110px] w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ocean-midnight/10 to-ocean-turquoise/20 flex items-center justify-center">
            <span className="text-xs font-bold font-poppins text-ocean-midnight/60">{initials}</span>
          </div>
        )}
      </div>
      <div>
        <div className="font-poppins font-bold text-sm text-ocean-midnight leading-snug mb-0.5">{name}</div>
        <div className="text-xs text-gray-400 leading-tight">{role}</div>
      </div>
    </div>
  );
}
