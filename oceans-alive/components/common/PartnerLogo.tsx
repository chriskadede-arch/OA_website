'use client';

import { useState } from 'react';
import Image from 'next/image';

type PartnerLogoProps = {
  name: string;
  domain?: string;
  logoPath?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  className?: string;
};

function getInitials(name: string): string {
  return name
    .split(/[\s&/·,]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export default function PartnerLogo({ name, domain, logoPath, size = 'md', className = '' }: PartnerLogoProps) {
  const [imgError, setImgError] = useState(false);
  const [clearbitError, setClearbitError] = useState(false);

  const initials = getInitials(name);

  // Size configurations
  const sizeClasses = {
    sm: 'w-8 h-8 text-[10px]',
    md: 'w-12 h-12 text-xs',
    lg: 'w-16 h-16 text-sm',
    xl: 'w-20 h-20 text-base',
    xxl: 'w-24 h-24 text-lg',
  };

  const logoSizeClasses = {
    sm: 'max-h-8 max-w-full',
    md: 'max-h-12 max-w-full',
    lg: 'max-h-20 max-w-full',
    xl: 'max-h-24 max-w-full',
    xxl: 'max-h-28 max-w-full',
  };

  // Determine logo source - Use Google Favicon API (more reliable than Clearbit)
  let logoSrc = null;
  if (logoPath) {
    logoSrc = logoPath;
  } else if (domain && !clearbitError && !imgError) {
    // Google's favicon service is more reliable and faster
    logoSrc = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  }

  if (logoSrc && !imgError) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <img
          src={logoSrc}
          alt={`${name} logo`}
          className={`${logoSizeClasses[size]} w-auto h-auto object-contain transition-all duration-300`}
          onError={() => {
            setImgError(true);
            if (domain) setClearbitError(true);
          }}
        />
      </div>
    );
  }

  // Fallback to initials
  return (
    <div className={`${sizeClasses[size]} shrink-0 rounded-full bg-gradient-to-br from-white/20 to-white/10 border border-white/20 flex items-center justify-center ${className}`}>
      <span className={`${size === 'sm' ? 'text-[9px]' : size === 'md' ? 'text-xs' : size === 'xl' ? 'text-base' : size === 'xxl' ? 'text-lg' : 'text-sm'} font-bold font-poppins text-white/90`}>
        {initials}
      </span>
    </div>
  );
}
