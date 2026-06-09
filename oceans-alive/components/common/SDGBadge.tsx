'use client';

import { SDGS } from '@/lib/sdg-mapping';

interface SDGBadgeProps {
  number: number;
  size?: 'sm' | 'md' | 'lg';
  showTooltip?: boolean;
  className?: string;
}

export default function SDGBadge({
  number,
  size = 'md',
  showTooltip = true,
  className = ''
}: SDGBadgeProps) {
  const sdg = SDGS[number];

  if (!sdg) return null;

  const sizeClasses = {
    sm: 'w-10 h-10 text-[10px]',
    md: 'w-14 h-14 text-xs',
    lg: 'w-20 h-20 text-base',
  };

  return (
    <div
      className={`relative group ${className}`}
      title={showTooltip ? `SDG ${sdg.number}: ${sdg.name}` : undefined}
    >
      <div
        className={`${sizeClasses[size]} rounded-lg flex flex-col items-center justify-center font-bold text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105`}
        style={{ backgroundColor: sdg.color }}
      >
        <div className="text-[0.6em] opacity-80 leading-none">SDG</div>
        <div className="text-[1.8em] leading-none font-black">{sdg.number}</div>
      </div>

      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-xl">
          <div className="font-bold">{sdg.name}</div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
}
