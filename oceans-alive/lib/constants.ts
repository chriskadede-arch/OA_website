// Brand Colors
export const BRAND_COLORS = {
  primary: '#022F4E', // Midnight Zone Blue
  secondary: '#2EBFD1', // Tropical Turquoise
  accent: '#58A971', // Seafoam Green
  highlight: '#FBB308', // Sunshine Yellow
  tertiary: '#E6D7BA', // Sandy Shores
};

// Site Metadata
export const SITE_NAME = 'Oceans Alive Foundation';
export const SITE_DESCRIPTION =
  "Working with coastal communities to restore marine ecosystems, strengthen livelihoods, and create lasting positive change along Kenya's coast.";
export const SITE_URL = 'https://oceansalive.org';
export const SITE_TWITTER = '@oceans_alive_kenya';
export const SITE_INSTAGRAM = '@oceans_alive_kenya';
export const SITE_FACEBOOK = 'oceansalive';

// Navigation
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Donate', href: '/donate' },
  { label: 'Contact', href: '/contact' },
];

// Blog Categories
export const BLOG_CATEGORIES = [
  'Coral Restoration',
  'Women & Ocean',
  'Fisheries',
  'Education',
  'Governance',
  'Recognition',
  'Impact Stories',
  'Community News',
  'Latest Updates',
];

// Resource Categories
export const RESOURCE_CATEGORIES = [
  'Toolkits',
  'Case Studies',
  'IEC Materials',
  'Reports',
];

// Gallery Categories
export const GALLERY_CATEGORIES = [
  'Coral Restoration',
  'Community',
  'Education',
  'Wildlife',
  'Ocean Landscapes',
];

// Donation Amounts (in cents)
export const DONATION_AMOUNTS = [
  { label: '$5', value: 500 },
  { label: '$10', value: 1000 },
  { label: '$25', value: 2500 },
  { label: '$50', value: 5000 },
  { label: '$100', value: 10000 },
  { label: 'Custom', value: 0 },
];

// Pagination
export const POSTS_PER_PAGE = 12;
export const RESOURCES_PER_PAGE = 20;
export const GALLERY_ITEMS_PER_PAGE = 24;

// Contact Form Types
export const CONTACT_INQUIRY_TYPES = [
  'General Inquiry',
  'Partnership',
  'Donation',
  'Volunteer',
  'Other',
];

// Social Links
export const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/oceansalive',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/oceans_alive_kenya',
    icon: 'instagram',
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@oceans_alive_kenya',
    icon: 'tiktok',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/oceans-alive',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/oceans_alive_kenya',
    icon: 'twitter',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@oceansalive',
    icon: 'youtube',
  },
];

// Contact Info
export const CONTACT_EMAIL = 'info@oceansalive.org';
export const CONTACT_PHONE = '+254 712 345 678';
export const CONTACT_ADDRESS = 'Watamu, Kilifi County, Kenya';

// Team
export const TEAM_MEMBERS = [
  {
    name: 'Ali Kaka',
    role: 'Chairman of the Board',
    bio: 'Provides strategic leadership and governance oversight for Oceans Alive Foundation, bringing decades of experience in conservation leadership and East African coastal governance.',
    image: '/images/team/ali-kaka.avif',
    initials: 'AK',
  },
  {
    name: 'Des Bowden',
    role: 'Director / CEO',
    bio: 'Founded Oceans Alive in 2003 alongside Kuruwitu fishermen. Has led the organisation from a 30-hectare sanctuary to a globally recognised model of community-led marine conservation — and Kenya\'s first ocean co-management plan.',
    image: '/images/team/des-bowden.webp',
    initials: 'DB',
  },
  {
    name: 'Lionel D Murage',
    role: 'Technical advisor',
    bio: 'Coordinates Oceans Alive\'s programme portfolio, managing delivery timelines, stakeholder relationships, and field operations across Kilifi County.',
    image: '/images/team/lionel-murage.avif',
    initials: 'LM',
  },
  {
    name: 'Sarah Sidi',
    role: 'Admin & Human Resource Manager',
    bio: 'Manages team welfare, recruitment, and organisational development — ensuring Oceans Alive attracts and retains the talent needed to deliver its community conservation mission.',
    image: null,
    initials: 'SS',
  },
  {
    name: 'Alice Mwakulilah',
    role: 'Project Manager',
    bio: 'Coordinates international partnerships, donor relationships, and programme stakeholder engagement across Kilifi County, keeping OAF\'s projects on track and on mission.',
    image: null,
    initials: 'AM',
  },
  {
    name: 'Tilda Bowden',
    role: 'Director / Education Development',
    bio: 'Leads ocean education initiatives — connecting schools, youth groups, and community members to marine conservation through the living classroom at Kuruwitu.',
    image: '/images/team/tilda-bowden.avif',
    initials: 'TB',
  },
  {
    name: 'Remmy Safari',
    role: 'Programme Manager',
    bio: 'Drives the BMU network and fisheries co-management programmes, supporting Beach Management Units and building governance structures that protect Kenya\'s coastal fisheries long-term.',
    image: '/images/team/remmy-safari.avif',
    initials: 'RS',
  },
  {
    name: 'Katana Ngala',
    role: 'Coral Restoration Technician',
    bio: 'Leads hands-on coral nursery operations at Kuruwitu, training community reef gardeners and overseeing the planting and monitoring of 25,000+ coral colonies.',
    image: '/images/team/katana-ngala.avif',
    initials: 'KN',
  },
  {
    name: 'John Dominic',
    role: 'Technical Advisor',
    bio: 'Provides specialist technical guidance on marine ecology, conservation methodology, and programme design — ensuring every OAF intervention is grounded in best practice.',
    image: '/images/team/john-dominic.avif',
    initials: 'JD',
  },
  {
    name: 'Roseline Kibogo',
    role: 'Fisheries Development Assistant',
    bio: 'Supports fisheries development across Kilifi\'s co-managed marine areas, coordinating community data collection and monitoring fish biomass recovery.',
    image: null,
    initials: 'RK',
  },
  {
    name: 'Teddy Katono',
    role: 'Permaculture Extension Assistant',
    bio: 'Works with coastal families to establish climate-smart kitchen gardens, reducing dependence on overfished stocks and strengthening household food security.',
    image: '/images/team/teddy-katono.avif',
    initials: 'TK',
  },
  {
    name: 'Cameron Bowden',
    role: 'Coral Outreach Officer',
    bio: 'Connects the coral restoration programme to wider audiences — engaging communities, schools, tourists, and media partners in the reef recovery work at Kuruwitu.',
    image: null,
    initials: 'CB',
  },
  {
    name: 'Ledama Masidza',
    role: 'Ambassador',
    bio: 'Provides specialist consultancy on community development strategy, policy advocacy, and coastal governance frameworks across OAF\'s programme areas.',
    image: null,
    initials: 'LMa',
  },
  {
    name: 'Patrick Kyengo',
    role: 'Monitoring & Evaluation Officer',
    bio: 'Leads impact measurement across all programmes, designing data collection systems and delivering evidence that informs both programme improvement and donor reporting.',
    image: null,
    initials: 'PK',
  },
  {
    name: 'Chris Adede',
    role: 'Communications Officer',
    bio: 'Tells the story of Oceans Alive\'s work to the world — from Project REEL Kilifi media partnerships to social media, press, and advocacy content reaching global conservation audiences.',
    image: '/images/team/chris-adede.jpg',
    initials: 'CA',
  },
];

// Impact Stats
export const IMPACT_STATS = [
  { label: 'Coral Colonies Hand-Planted', value: '25,000+' },
  { label: 'Kuruwitu Co-Managed Area and plan', value: '120 km²' },
  { label: 'Students & Youth Educated', value: '10,000+' },
  { label: 'The oldest Community Conservation Area in Kenya', value: '21 Years' },
  { label: 'Fish Biomass Increase within the sanctuary', value: '400%' },
  { label: 'Coastline Protected', value: '640 km' },
  { label: 'Women in Trash4Cash', value: '80+' },
  { label: 'Community Members', value: '1,200+' },
];

// OAF Timeline
export const TIMELINE = [
  {
    year: '2003',
    title: 'A Community Takes Action',
    body: 'Following a devastating coral bleaching event in the late 1990s, fish stocks declined and many fishing families struggled to make a living. In Kuruwitu, community members came together, supported by local resident Des Bowden, to find a way forward.',
    tag: '',
  },
  {
    year: '2006',
    title: "Kenya's First Community Marine Sanctuary",
    body: 'As part of a five-year management plan, the Kuruwitu community set aside 30 hectares of its inner lagoon as a protected area, known locally as a tengefu. What began as a local response to declining fish stocks became the foundation of a community-led approach to marine conservation.',
    tag: 'Founding',
  },
  {
    year: '2017',
    title: 'Oceans Alive Takes Shape',
    body: 'The Oceans Alive Foundation was established to support and expand the community-led conservation work taking place along Kenya\'s coast. Building on lessons from Kuruwitu, the organisation helps communities, government and partners work together.',
    tag: '',
  },
  {
    year: '2017',
    title: 'Global Recognition',
    body: 'The Kuruwitu CBO, supported by Oceans Alive, received the UNDP Equator Prize for outstanding community-led marine conservation. Community representatives Katana Ngala and Shida Shoka travelled to New York to accept the award.',
    tag: 'UNDP Prize',
  },
  {
    year: '2022',
    title: '120 km² of Ocean Under Co-Management',
    body: "Years of collaboration led to the formal establishment of the Kuruwitu Co-Managed Area. Covering 120 square kilometres of ocean, it marked a major step forward for community participation in marine governance on Kenya's coast.",
    tag: 'Policy Landmark',
  },
  {
    year: '2023',
    title: 'Royal Recognition',
    body: "During a visit to Kuruwitu, His Majesty King Charles III placed a coral restoration block bearing his royal cypher into the water. The moment brought international attention to a conservation story that began with a local community.",
    tag: 'Royal Visit',
  },
  {
    year: '2025',
    title: 'Sharing the Model',
    body: 'At the IUCN World Conservation Congress, the Kuruwitu experience was presented as an example of community-led marine conservation in practice. What began as a local response to a crisis is now informing conversations about marine stewardship across the Western Indian Ocean.',
    tag: 'IUCN 2025',
  },
];

// Programmes — all 14
export const PROGRAMMES = [
  {
    number: '01',
    category: 'Ecosystem',
    icon: '🪸',
    slug: 'coral-restoration',
    title: 'Coral Reef Restoration',
    description: "Kenya's most active community-led coral nursery. 25,000+ colonies hand-planted since 2019. Local fishers trained and employed as reef gardeners.",
    stat: '25,000+',
    statLabel: 'Colonies Planted',
    href: '/programmes/coral-restoration',
    color: 'from-ocean-midnight to-ocean-turquoise',
    partners: '',
  },
  {
    number: '02',
    category: 'Governance',
    icon: '🌊',
    slug: 'co-management',
    title: 'Community Co-Management (LMMA)',
    description: "Kenya's first LMMA. 120 km² under a formal management plan signed in 2022, placing communities at the centre of marine governance. A landmark in Kenyan marine governance history.",
    stat: '120 km²',
    statLabel: 'Under Protection',
    href: '/programmes/co-management',
    color: 'from-[#1a6b5a] to-ocean-seafoam',
    partners: 'Kenya Ministry of Blue Economy · Kilifi County Government',
  },
  {
    number: '03',
    category: 'Media',
    icon: '📸',
    slug: 'project-reel',
    title: 'Project REEL Kilifi',
    description: 'Canon CENA and Athlete Media Group partnership. World-class photography and film documenting conservation work along the Kilifi coast — amplifying the community story to a global audience.',
    stat: 'Global',
    statLabel: 'Reach',
    href: '/programmes/project-reel',
    color: 'from-[#0a4f7a] to-ocean-turquoise',
    partners: 'Canon CENA · Athlete Media Group',
  },
  {
    number: '04',
    category: 'Institutional',
    icon: '🇬🇧',
    slug: 'uk-biodiversity',
    title: 'UK Biodiversity Programme',
    description: 'UK Government FCDO-funded initiative building institutional capacity across coastal management systems. Strengthening the people and structures that protect Kenya\'s marine environment long-term.',
    stat: 'FCDO',
    statLabel: 'Funded',
    href: '/programmes/uk-biodiversity',
    color: 'from-[#1a3a6b] to-[#0a4f7a]',
    partners: 'UK Government FCDO',
  },
  {
    number: '05',
    category: 'Education',
    icon: '🎓',
    slug: 'ocean-education',
    title: 'Ocean Education & Youth',
    description: 'The tengefu is our living classroom — welcoming schools, interns, and youth groups to learn real conservation. 10,000+ young people educated in ocean literacy in Kilifi County.',
    stat: '10,000+',
    statLabel: 'Youth Educated',
    href: '/programmes/ocean-education',
    color: 'from-[#0a4f7a] to-ocean-turquoise',
    partners: '',
  },
  {
    number: '06',
    category: 'Governance',
    icon: '🐟',
    slug: 'bmu-network',
    title: 'Kilifi BMU Network',
    description: "Connecting and strengthening Beach Management Units across Kilifi County to ensure fishers' voices reach decision-makers at county and national level.",
    stat: '400%',
    statLabel: 'Fish Biomass Growth',
    href: '/programmes/bmu-network',
    color: 'from-[#1a6b5a] to-ocean-seafoam',
    partners: 'Kenya Fisheries Service',
  },
  {
    number: '07',
    category: 'Livelihoods',
    icon: '♻️',
    slug: 'trash4cash',
    title: 'Trash4Cash',
    description: "Women's groups collect and sort plastic waste, selling to certified recyclers. Turning ocean pollution into household income and clean coastlines. 80+ women, 2+ tonnes of plastic monthly.",
    stat: '80+',
    statLabel: 'Women Employed',
    href: '/programmes/trash4cash',
    color: 'from-[#c47900] to-ocean-sunshine',
    partners: '',
  },
  {
    number: '08',
    category: 'Conservation',
    icon: '🐢',
    slug: 'turtle-protection',
    title: 'Turtle Protection',
    description: 'Monitoring and protecting sea turtle nesting habitats along the Kilifi coast. Community rangers record nesting events and prevent poaching year-round along 640 km of coastline.',
    stat: '640 km',
    statLabel: 'Coastline Monitored',
    href: '/programmes/turtle-protection',
    color: 'from-ocean-midnight to-[#1a6b5a]',
    partners: '',
  },
  {
    number: '09',
    category: 'Policy',
    icon: '📋',
    slug: 'marine-governance',
    title: 'Marine Governance & Policy',
    description: 'Translating community-collected data into national marine policy frameworks. OAF presented findings at IUCN 2025, placing the Kilifi model on the global conservation stage.',
    stat: 'IUCN',
    statLabel: '2025 Presented',
    href: '/programmes/marine-governance',
    color: 'from-[#022F4E] to-[#0a4f7a]',
    partners: 'IUCN · UNDP Kenya',
  },
  {
    number: '10',
    category: 'Livelihoods',
    icon: '👩',
    slug: 'lift-network',
    title: 'LIFT Network',
    description: "Women's livelihoods, financial independence and eco-entrepreneurship. Building resilient coastal communities from the ground up through women's economic agency and conservation leadership.",
    stat: '80+',
    statLabel: 'Women Members',
    href: '/programmes/lift-network',
    color: 'from-[#c47900] to-ocean-sunshine',
    partners: '',
  },
  {
    number: '11',
    category: 'Food Security',
    icon: '🥬',
    slug: 'kitchen-gardens',
    title: 'Kitchen Gardens & Food Security',
    description: 'Climate-smart gardens for coastal fishing families. Reducing dependence on overexploited fish stocks while strengthening household nutrition and resilience across Kilifi County.',
    stat: 'Kilifi',
    statLabel: 'County Wide',
    href: '/programmes/kitchen-gardens',
    color: 'from-[#1a6b5a] to-ocean-seafoam',
    partners: '',
  },
  {
    number: '12',
    category: 'Training',
    icon: '🏫',
    slug: 'capacity-building',
    title: 'Capacity Building & Training',
    description: 'Marine governance, protected area management, and ecological monitoring training. Building the human infrastructure that makes conservation last beyond project cycles and individual funders.',
    stat: 'Kenya+',
    statLabel: 'Reach',
    href: '/programmes/capacity-building',
    color: 'from-[#0a4f7a] to-ocean-turquoise',
    partners: '',
  },
  {
    number: '13',
    category: 'Wellbeing',
    icon: '🏥',
    slug: 'community-health',
    title: 'Community Health & Wellbeing',
    description: "Holistic programmes that link ocean health directly to community health — because the wellbeing of Kilifi's people and the health of its waters are inseparable.",
    stat: '1,200+',
    statLabel: 'Community Members',
    href: '/programmes/community-health',
    color: 'from-[#1a6b5a] to-ocean-seafoam',
    partners: '',
  },
  {
    number: '14',
    category: 'Science',
    icon: '🔬',
    slug: 'research-monitoring',
    title: 'Research & Monitoring',
    description: 'Ecological baselines, fish biomass surveys, and coral cover assessments. The evidence base that underpins every programme and every policy recommendation OAF makes.',
    stat: '85%',
    statLabel: 'Coral Survival Rate',
    href: '/programmes/research-monitoring',
    color: 'from-ocean-midnight to-ocean-turquoise',
    partners: 'Coral Guardian · IUCN',
  },
];

// Partners
export const PARTNERS = [
  {
    name: 'Coral Guardian',
    role: 'Coral Restoration Partner',
    logo: 'https://www.coralguardian.org/app/themes/coralguardian-theme/library/img/logo-coral-guardian.svg',
  },
  {
    name: 'Canon Central & North Africa',
    role: 'Media & Documentation Partner',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Canon_logo.svg',
  },
  {
    name: 'Platcorp Foundation',
    role: 'Funding Partner',
    logo: 'https://www.platcorpgroup.com/media/ahank4bv/plat-foundation-logo.png',
  },
  {
    name: 'Athlete Media Group',
    role: 'Media Partner',
    logo: null,
  },
  {
    name: 'UK Government FCDO',
    role: 'Institutional Funder',
    logo: null,
  },
  {
    name: 'Coral Reef Care',
    role: 'Reef Restoration Partner',
    logo: 'https://www.coralreefcare.com/img/coralreefcarelogo.svg',
  },
  {
    name: 'UNDP Kenya',
    role: 'Equator Prize · Development Partner',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/UNDP_logo.svg',
  },
  {
    name: 'Kenya Fisheries Service',
    role: 'Government Partner',
    logo: null,
  },
  {
    name: 'Kilifi County Government',
    role: 'County Government Partner',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Seal_of_Kilifi_County.png',
  },
  {
    name: 'IUCN',
    role: 'International Conservation Partner',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/IUCN_logo.svg',
  },
];

// Static blog stories (shown when database is not connected)
export const STATIC_BLOG_STORIES = [
  {
    id: 'coral-restoration-journey',
    slug: 'coral-restoration-journey',
    title: '25,000 Coral Colonies and Counting: Our Reef Restoration Journey',
    excerpt: 'Since 2019, Oceans Alive and local community divers have hand-planted over 25,000 coral colonies in and around the Kuruwitu co-managed area. Here is the story of how a handful of committed fishers became Kenya\'s most skilled reef gardeners.',
    category: 'Coral Restoration',
    date: 'March 2025',
    readTime: '8 min read',
    featured: true,
    stats: ['25,000+ colonies planted', '85% survival rate', '40+ divers trained'],
  },
  {
    id: 'trash4cash-women',
    slug: 'trash4cash-women',
    title: "Trash4Cash: How Kilifi's Women Are Turning Plastic Into Power",
    excerpt: "Women's groups collect, sort, and sell plastic waste — transforming environmental harm into economic independence and community leadership along Kenya's coast.",
    category: 'Women & Ocean',
    date: 'January 2025',
    readTime: '5 min read',
    featured: false,
    stats: ['80+ women', '2+ tonnes monthly', '4 communities'],
  },
  {
    id: 'youth-conservation',
    slug: 'youth-conservation',
    title: 'Growing Up With the Ocean: Youth Conservation at Kuruwitu',
    excerpt: "For a generation of children growing up on Kenya's coast, the Kuruwitu marine sanctuary is not just a conservation area — it is a classroom, a playground, and a future.",
    category: 'Education',
    date: 'November 2024',
    readTime: '4 min read',
    featured: false,
    stats: ['10,000+ students', 'Annual reach', 'Kilifi County'],
  },
  {
    id: 'co-management-plan',
    slug: 'co-management-plan',
    title: "Kenya's Historic Ocean Co-Management Plan: What It Means for Coastal Communities",
    excerpt: 'In January 2022, Oceans Alive made history — delivering Kenya\'s first formal ocean co-management plan and placing 120 km² under community stewardship.',
    category: 'Governance',
    date: 'September 2024',
    readTime: '6 min read',
    featured: false,
    stats: ['120 km² protected', 'First in Kenya', '20,000 residents benefiting'],
  },
  {
    id: 'royal-visit',
    slug: 'royal-visit',
    title: 'A King Comes to Kuruwitu: The Royal Visit That Changed Everything',
    excerpt: 'When His Majesty King Charles III walked into the Kuruwitu project in 2023, he carried with him a message that echoed around the world: community conservation works.',
    category: 'Recognition',
    date: 'July 2024',
    readTime: '6 min read',
    featured: false,
    stats: ['Global media coverage', '2023 milestone', 'Royal endorsement'],
  },
  {
    id: 'world-ocean-day-2024',
    slug: 'world-ocean-day-2024',
    title: 'World Ocean Day 2024: Celebrating Two Decades of Coastal Stewardship',
    excerpt: "This year's Ocean Day celebrations in Kilifi brought together over 800 community members, school children, and conservation partners to mark twenty years of protecting Kenya's ocean.",
    category: 'Education',
    date: 'June 2024',
    readTime: '5 min read',
    featured: false,
    stats: ['800+ attendees', '20 years celebrated', 'Kilifi County'],
  },
  {
    id: 'rebuilding-fisheries',
    slug: 'rebuilding-fisheries',
    title: "Rebuilding the Sea: How Community Management Is Restoring Kenya's Fisheries",
    excerpt: 'Rotational no-take zones, gear transition programmes, and community-managed marine areas are combining to rebuild fish stocks while maintaining food security for coastal families.',
    category: 'Fisheries',
    date: 'August 2024',
    readTime: '7 min read',
    featured: false,
    stats: ['400% fish biomass increase', 'Rotational zones', 'Sustainable livelihoods'],
  },
  {
    id: 'ocean-leaders',
    slug: 'ocean-leaders',
    title: 'The Next Generation: Building Ocean Leaders at Kuruwitu',
    excerpt: 'Aspiring marine conservationists from Kenya and around the world come to Kuruwitu to learn real conservation — building capacity that lasts far beyond any single funder or project.',
    category: 'Education',
    date: 'May 2024',
    readTime: '5 min read',
    featured: false,
    stats: ['International interns', 'Kenya-wide training', 'Long-term capacity'],
  },
  {
    id: 'iucn-2025',
    slug: 'iucn-2025',
    title: 'From Kilifi to the World Stage: Oceans Alive at IUCN 2025',
    excerpt: "At the world's largest conservation forum, Oceans Alive presented the Kuruwitu co-management model as a globally scalable blueprint for marine governance — from 30 hectares to a global vision.",
    category: 'Recognition',
    date: 'February 2025',
    readTime: '4 min read',
    featured: false,
    stats: ['IUCN World Congress', 'Global blueprint', 'Western Indian Ocean'],
  },
  // ── Impact Stories ────────────────────────────────────────────────────────
  {
    id: 'kuruwitu-comeback',
    slug: 'kuruwitu-comeback',
    title: 'One Reef, Twenty Years: The Kuruwitu Comeback Story',
    excerpt: 'From a collapse so severe that fishermen were talking about leaving forever, to a reef supplying 400% more fish and a co-management plan recognised at the IUCN World Congress — this is how community ownership changed everything.',
    category: 'Impact Stories',
    date: 'April 2025',
    readTime: '9 min read',
    featured: true,
    stats: ['400% fish biomass increase', '25,000+ corals planted', '120 km² co-managed'],
  },
  {
    id: 'mothers-choice-trash4cash',
    slug: 'mothers-choice-trash4cash',
    title: "Fatuma's Choice: From Empty Nets to Economic Independence",
    excerpt: "When Fatuma Hamisi joined the Trash4Cash programme, she had no independent income. Three years later, she leads the largest plastic collection group on Kilifi's northern coast — and her daughter wants to be a marine biologist.",
    category: 'Impact Stories',
    date: 'February 2025',
    readTime: '5 min read',
    featured: false,
    stats: ['80+ women employed', '2+ tonnes monthly', 'Economic independence'],
  },
  {
    id: 'reef-gardener-journal',
    slug: 'reef-gardener-journal',
    title: "Before Sunrise: A Day in the Life of Kilifi's Reef Gardener",
    excerpt: "Katana Ngala has been underwater almost every working day since 2019. As Oceans Alive's coral restoration technician, he knows each nursery frame by touch. He's the reason thousands of corals are alive today.",
    category: 'Impact Stories',
    date: 'March 2025',
    readTime: '6 min read',
    featured: false,
    stats: ['25,000+ corals planted', '85% survival rate', '40+ divers trained'],
  },
  // ── Community News ────────────────────────────────────────────────────────
  {
    id: 'bmu-new-leadership-2025',
    slug: 'bmu-new-leadership-2025',
    title: 'A New Chapter: Kuruwitu BMU Elects Its 2025 Leadership',
    excerpt: 'With new leadership and ambitious plans — including a digital reef monitoring app and an expansion of the co-management zone — the Kuruwitu Beach Management Unit is entering its most active governance phase yet.',
    category: 'Community News',
    date: 'January 2025',
    readTime: '4 min read',
    featured: true,
    stats: ['120 km² governed', '12 BMU representatives', 'Community-led mandate'],
  },
  {
    id: 'community-voices-ocean',
    slug: 'community-voices-ocean',
    title: "In Their Own Words: What the Ocean Means to Kilifi's People",
    excerpt: "We asked 15 coastal residents — from Kuruwitu to Vipingo — one question: what does the ocean mean to you? Their answers, unedited and unfiltered, are more powerful than any statistic.",
    category: 'Community News',
    date: 'March 2025',
    readTime: '6 min read',
    featured: false,
    stats: ['15 community voices', 'Kilifi coastline', 'Unedited stories'],
  },
  {
    id: 'lift-network-eco-market',
    slug: 'lift-network-eco-market',
    title: "LIFT Network Women Launch Kilifi's First Eco-Enterprise Market",
    excerpt: "Fifteen LIFT Network members have opened Kilifi's first eco-enterprise market at Watamu — a milestone that marks the transition from livelihood support to full economic independence.",
    category: 'Community News',
    date: 'February 2025',
    readTime: '5 min read',
    featured: false,
    stats: ['15 entrepreneurs', 'LIFT Network launch', 'Watamu, Kenya'],
  },
  // ── Latest Updates ────────────────────────────────────────────────────────
  {
    id: 'annual-report-2024',
    slug: 'annual-report-2024',
    title: 'OAF Annual Report 2024: The Year the Model Proved Itself',
    excerpt: "25,000 coral colonies. 120 km² under co-management. 80 women in Trash4Cash. A presentation at the IUCN World Congress. 2024 was the year Oceans Alive's community model proved it doesn't just work — it scales.",
    category: 'Latest Updates',
    date: 'May 2025',
    readTime: '7 min read',
    featured: true,
    stats: ['25,000+ corals planted', 'IUCN 2025 featured', '14 active programmes'],
  },
  {
    id: 'world-ocean-day-2025',
    slug: 'world-ocean-day-2025',
    title: 'World Ocean Day 2025 — Join Us June 8th at Watamu',
    excerpt: "This year's celebration will be the largest in Kilifi's history — community dives at dawn, reef walks, live music, the launch of our citizen science app, and the opening of the new youth marine education centre.",
    category: 'Latest Updates',
    date: 'April 2025',
    readTime: '2 min read',
    featured: false,
    stats: ['June 8, 2025', 'Watamu Beach', 'Free to attend'],
  },
  {
    id: 'volunteer-coral-survey-2025',
    slug: 'volunteer-coral-survey-2025',
    title: 'Volunteer Call: Coral Survey Teams Needed for July 2025',
    excerpt: "We're recruiting 20 trained volunteers for our Q3 coral monitoring surveys at Kuruwitu. No prior marine experience required — six days of full training provided, accommodation available on request.",
    category: 'Latest Updates',
    date: 'April 2025',
    readTime: '3 min read',
    featured: false,
    stats: ['Starts July 2025', '20 volunteer spots', 'Full training provided'],
  },
];

// The 4 Principles
export const PRINCIPLES = [
  {
    number: '01',
    title: 'Community Ownership',
    body: 'Every programme is co-designed with fishing communities, BMUs, and local leaders. Ownership drives the accountability that makes outcomes last.',
  },
  {
    number: '02',
    title: 'Integrated Impact',
    body: 'Restoring a reef only works if the community has other income sources. Teaching children only works if their parents have secure livelihoods. Our programmes are deliberately interconnected.',
  },
  {
    number: '03',
    title: 'Evidence-Led Action',
    body: 'Research and monitoring underpin every programme. Data collected by community reef monitors informs national policy — closing the loop between science and governance.',
  },
  {
    number: '04',
    title: 'Gender at the Core',
    body: "Women are agents of conservation, not beneficiaries. LIFT Network, Trash4Cash, and kitchen gardens are designed to expand women's economic independence alongside ocean stewardship.",
  },
];

// Feature Flags
export const FEATURES = {
  DONATE_ENABLED: true,
  NEWSLETTER_ENABLED: true,
  COMMENTS_ENABLED: true,
  NEWSLETTER_FORM_IN_FOOTER: true,
  SOCIAL_SHARING: true,
  SEARCH_ENABLED: true,
};
