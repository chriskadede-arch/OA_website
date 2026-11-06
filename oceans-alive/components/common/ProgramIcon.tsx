/**
 * ══════════════════════════════════════════════════════════════════
 * PROGRAMME ICONS (small line icons per programme)
 * ══════════════════════════════════════════════════════════════════
 */
// ─── Inline SVG icons for the four "Our Work" programmes ────────────────────
// Replaces emoji so the icons render identically across every OS/browser.

export type ProgramIconSlug =
  | 'healthy-oceans'
  | 'sustainable-fisheries-blue-economy'
  | 'resilient-communities-livelihoods'
  | 'education-research-youth';

export function ProgramIcon({ slug, className = 'w-6 h-6' }: { slug: string; className?: string }) {
  const common = {
    className,
    fill: 'none' as const,
    stroke: 'currentColor' as const,
    viewBox: '0 0 24 24',
  };

  switch (slug) {
    // Healthy Oceans — sun over waves
    case 'healthy-oceans':
      return (
        <svg {...common}>
          <circle cx="12" cy="7" r="2.75" strokeWidth={1.5} />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.5 14.5c1.33-1.33 2.67-1.33 4 0s2.67 1.33 4 0 2.67-1.33 4-1.33 2.67 1.33 4 1.33 2.67-1.33 3-1.5M2.5 19c1.33-1.33 2.67-1.33 4 0s2.67 1.33 4 0 2.67-1.33 4-1.33 2.67 1.33 4 1.33 2.67-1.33 3-1.5"
          />
        </svg>
      );

    // Sustainable Fisheries & Blue Economy — fish
    case 'sustainable-fisheries-blue-economy':
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 12c2.8-3.6 6.9-5.5 11-4.7 2.3.4 4.2 1.8 5 2.7v4c-.8.9-2.7 2.3-5 2.7-4.1.8-8.2-1.1-11-4.7z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 9.5c1-.8 2.5-1.4 3.5-.7M16 14.5c1 .8 2.5 1.4 3.5.7" />
          <circle cx="7.5" cy="11" r="0.75" fill="currentColor" stroke="none" />
        </svg>
      );

    // Resilient Communities and Livelihoods — community
    case 'resilient-communities-livelihoods':
      return (
        <svg {...common}>
          <circle cx="8.5" cy="8" r="2.5" strokeWidth={1.5} />
          <circle cx="16" cy="8.5" r="2" strokeWidth={1.5} />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.75 19.5c0-3.31 2.57-6 5.75-6s5.75 2.69 5.75 6M14.5 14.25c2.62.28 4.75 2.6 4.75 5.25"
          />
        </svg>
      );

    // Education, Research & Youth — graduation cap
    case 'education-research-youth':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5 2.5 9l9.5 4.5L21.5 9 12 4.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.5 11.3V16c0 1.66 2.46 3 5.5 3s5.5-1.34 5.5-3v-4.7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.5 9v5.5" />
        </svg>
      );

    default:
      return null;
  }
}
