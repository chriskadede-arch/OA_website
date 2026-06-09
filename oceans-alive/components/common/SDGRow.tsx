'use client';

import SDGBadge from './SDGBadge';

interface SDGRowProps {
  sdgs: number[];
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}

export default function SDGRow({
  sdgs,
  size = 'sm',
  label,
  className = ''
}: SDGRowProps) {
  if (!sdgs || sdgs.length === 0) return null;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {label && (
        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold shrink-0">
          {label}
        </span>
      )}
      <div className="flex items-center gap-2 flex-wrap">
        {sdgs.map((sdgNumber) => (
          <SDGBadge key={sdgNumber} number={sdgNumber} size={size} />
        ))}
      </div>
    </div>
  );
}
