/**
 * Partner Logo Management
 * Provides logo URLs for partners using multiple sources:
 * 1. Local uploads (/images/partners/)
 * 2. Clearbit Logo API (free, no auth required)
 * 3. Official brand CDNs
 * 4. Fallback to initials
 */

export type Partner = {
  name: string;
  role: string;
  category: string;
  link?: string;
  domain?: string; // For Clearbit API
  logoPath?: string; // Local logo path
  brandColor?: string; // For fallback
};

/**
 * Get logo URL for a partner
 * Priority: Local > Clearbit API > Initials fallback
 */
export function getPartnerLogo(partner: Partner): string | null {
  // 1. Check for local logo
  if (partner.logoPath) {
    return partner.logoPath;
  }

  // 2. Use Clearbit Logo API (free, no auth)
  // https://logo.clearbit.com/:domain
  if (partner.domain) {
    return `https://logo.clearbit.com/${partner.domain}`;
  }

  // 3. Return null to fallback to initials
  return null;
}

/**
 * Get initials from partner name
 */
export function getPartnerInitials(name: string): string {
  return name
    .split(/[\s&/·,]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

/**
 * Known brand colors for fallback backgrounds
 */
export const BRAND_COLORS: Record<string, string> = {
  'Coral Guardian': '#00a8cc',
  'Blue Ventures': '#0066cc',
  'Canon': '#e31837',
  'Pelorus': '#0a3d62',
  'Vipingo Ridge': '#2d5016',
};

/**
 * Get brand color or default
 */
export function getBrandColor(partnerName: string): string {
  return BRAND_COLORS[partnerName] || '#022F4E'; // Ocean midnight default
}
