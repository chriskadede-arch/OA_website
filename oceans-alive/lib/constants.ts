/**
 * ══════════════════════════════════════════════════════════════════
 * SHARED SITE DATA
 * ══════════════════════════════════════════════════════════════════
 * The words and numbers now live in content/data/*.json and are edited in
 * Pages CMS ("Site data" section): site & contact details, team, impact
 * stats, timeline, partners, principles, old programmes.
 * This file re-exports them so the pages can import from one place.
 * Search for "DATA:" to jump between groups.
 */
import SITE from '@/content/data/site-details.json';
import TEAM from '@/content/data/team.json';
import IMPACT from '@/content/data/impact-stats.json';
import TIMELINE_DATA from '@/content/data/timeline.json';
import PARTNERS_DATA from '@/content/data/partners.json';
import PRINCIPLES_DATA from '@/content/data/principles.json';
import OLD_PROGRAMMES from '@/content/data/old-programmes.json';

// ══════════════════════════════════════════════════════════════════
// DATA: Brand colours
// ══════════════════════════════════════════════════════════════════
export const BRAND_COLORS = {
  primary: '#022F4E', // Midnight Zone Blue
  secondary: '#2EBFD1', // Tropical Turquoise
  accent: '#58A971', // Seafoam Green
  highlight: '#FBB308', // Sunshine Yellow
  tertiary: '#E6D7BA', // Sandy Shores
};

// ══════════════════════════════════════════════════════════════════
// DATA: Site details (name, description, web address, social handles)
// ══════════════════════════════════════════════════════════════════
export const SITE_NAME = SITE.siteName;
export const SITE_DESCRIPTION =
  SITE.siteDescription;
export const SITE_URL = 'https://oceansalive.org';
export const SITE_TWITTER = SITE.twitterHandle;
export const SITE_INSTAGRAM = SITE.instagramHandle;
export const SITE_FACEBOOK = SITE.facebookPage;

// ══════════════════════════════════════════════════════════════════
// DATA: Old navigation list (not used - the menu is in components/common/Navbar.tsx)
// ══════════════════════════════════════════════════════════════════
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Donate', href: '/donate' },
  { label: 'Contact', href: '/contact' },
];

// ══════════════════════════════════════════════════════════════════
// DATA: Resource categories  → used on /resources
// ══════════════════════════════════════════════════════════════════
export const RESOURCE_CATEGORIES = SITE.resourceCategories;

// ══════════════════════════════════════════════════════════════════
// DATA: Gallery categories  → used on /gallery
// ══════════════════════════════════════════════════════════════════
export const GALLERY_CATEGORIES = SITE.galleryCategories;

// ══════════════════════════════════════════════════════════════════
// DATA: Donation amounts (in cents)  → used on /donate
// ══════════════════════════════════════════════════════════════════
export const DONATION_AMOUNTS = [
  { label: '$5', value: 500 },
  { label: '$10', value: 1000 },
  { label: '$25', value: 2500 },
  { label: '$50', value: 5000 },
  { label: '$100', value: 10000 },
  { label: '$250', value: 25000 },
  { label: 'Custom', value: 0 },
];

// ══════════════════════════════════════════════════════════════════
// DATA: Settings - items per page
// ══════════════════════════════════════════════════════════════════
export const POSTS_PER_PAGE = 12;
export const RESOURCES_PER_PAGE = 20;
export const GALLERY_ITEMS_PER_PAGE = 24;

// ══════════════════════════════════════════════════════════════════
// DATA: Contact form enquiry types
// ══════════════════════════════════════════════════════════════════
export const CONTACT_INQUIRY_TYPES = SITE.contactFormEnquiryTypes;

// ══════════════════════════════════════════════════════════════════
// DATA: Social links (the footer icons use SOCIAL in Footer.tsx)
// ══════════════════════════════════════════════════════════════════
export const SOCIAL_LINKS = SITE.socialLinks;

// ══════════════════════════════════════════════════════════════════
// DATA: Contact info  → used on /contact and in the footer
// ══════════════════════════════════════════════════════════════════
export const CONTACT_EMAIL = SITE.contactEmail;
export const CONTACT_EMAIL_SECONDARY = SITE.contactEmailSecondary;
export const CONTACT_PHONE = SITE.contactPhone;
export const CONTACT_ADDRESS = SITE.contactAddress;

// ══════════════════════════════════════════════════════════════════
// DATA: Team  → used on /about/team
// ══════════════════════════════════════════════════════════════════
// Shown on /about/team in this order. To take someone off the page without
// deleting their details, set `hidden: true`; delete that line to show them again.
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string | null; // file in public/images/team/, or null for an initials tile
  initials: string;
  hidden?: boolean;
};

export const TEAM_MEMBERS: TeamMember[] = TEAM.members as unknown as TeamMember[];
// ══════════════════════════════════════════════════════════════════
// DATA: Impact stats  → home page, /about, /about/story, /donate
// ══════════════════════════════════════════════════════════════════
export const IMPACT_STATS = IMPACT.stats;

// ══════════════════════════════════════════════════════════════════
// DATA: Timeline (Kuruwitu journey + Oceans Alive journey)  → home, /about/story
// ══════════════════════════════════════════════════════════════════
export const TIMELINE = TIMELINE_DATA.milestones;

// ══════════════════════════════════════════════════════════════════
// DATA: Programmes (all 14)  → /programmes/<slug> pages
// ══════════════════════════════════════════════════════════════════
export const PROGRAMMES = OLD_PROGRAMMES.programmes;

// ══════════════════════════════════════════════════════════════════
// DATA: Partners  → partner logo carousel
// ══════════════════════════════════════════════════════════════════
export const PARTNERS = PARTNERS_DATA.partners;

// ══════════════════════════════════════════════════════════════════
// DATA: Core principles  → /about/mission
// ══════════════════════════════════════════════════════════════════
export const PRINCIPLES = PRINCIPLES_DATA.principles;

// ══════════════════════════════════════════════════════════════════
// DATA: Settings - feature switches
// ══════════════════════════════════════════════════════════════════
export const FEATURES = {
  DONATE_ENABLED: true,
  NEWSLETTER_ENABLED: true,
  COMMENTS_ENABLED: true,
  NEWSLETTER_FORM_IN_FOOTER: true,
  SOCIAL_SHARING: true,
  SEARCH_ENABLED: true,
};
