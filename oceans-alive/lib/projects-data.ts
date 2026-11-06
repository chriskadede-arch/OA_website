/**
 * ══════════════════════════════════════════════════════════════════
 * CONTENT › Projects (cards in the "All Projects" carousel + menu)
 * ══════════════════════════════════════════════════════════════════
 * Each project also has its own page in app/projects/<slug>/page.tsx.
 */
export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  funder: string;
  description: string;
  image: string;
  stats: ProjectStat[];
  gradient: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'reel-outreach',
    title: 'REEL School Outreach Program',
    slug: 'reel-outreach',
    category: 'Education',
    funder: 'Coral Guardian',
    description: 'An 18 month coral reef education drive across 50 schools: five original films, an art competition, and a boat trip to Kuruwitu for the learners who understood corals best.',
    image: '/images/coralteaching.jpg',
    stats: [
      { value: '2,501', label: 'Learners Reached' },
      { value: '50', label: 'Schools' },
      { value: '98%', label: 'Knowledge Gain' },
    ],
    gradient: 'from-teal-900 via-teal-900/90 to-teal-900/60',
  },
  {
    id: 'elasmobranch-awareness',
    title: 'Elasmobranch Awareness & Permaculture',
    slug: 'elasmobranch-awareness',
    category: 'Conservation',
    funder: 'Coral Reef Care',
    description: 'A three phase shark and ray conservation project across four BMUs, growing into permaculture and rainwater harvesting for 40 households in Timboni village.',
    image: '/images/fisher.jpg',
    stats: [
      { value: '4', label: 'BMUs' },
      { value: '3', label: 'Phases' },
      { value: '2024', label: 'Started' },
    ],
    gradient: 'from-slate-900 via-slate-900/90 to-slate-900/60',
  },
  {
    id: 'conscious-coral-tourism',
    title: 'Conscious Coral Reef Restoration Tourism',
    slug: 'conscious-coral-tourism',
    category: 'Tourism',
    funder: 'The Conscious Travel Foundation',
    description: "Turning a 30 hectare sanctuary's 400% fish recovery into a certified, income generating reef tourism enterprise at Kuruwitu, Kenya's first community marine sanctuary.",
    image: '/images/divers.jpg',
    stats: [
      { value: '30 ha', label: 'Sanctuary' },
      { value: '400%', label: 'Fish Biomass Rise' },
      { value: '3 yrs', label: '2026 to 2029' },
    ],
    gradient: 'from-cyan-900 via-cyan-900/90 to-cyan-900/60',
  },
  {
    id: 'fisherfolk-academy',
    title: 'Fishing Community Empowerment Academy',
    slug: 'fisherfolk-academy',
    category: 'Training',
    funder: 'Oceans Alive Foundation',
    description: "Kuruwitu's two decade conservation record turned into a fellowship: training fishing community leaders, women and youth in governance, finance and monitoring.",
    image: '/images/womenlearning.jpg',
    stats: [
      { value: '20+', label: 'Years of Evidence' },
      { value: '8', label: 'Core Skill Areas' },
      { value: '1', label: 'Living Classroom' },
    ],
    gradient: 'from-indigo-900 via-indigo-900/90 to-indigo-900/60',
  },
  {
    id: 'ocean-eyes',
    title: 'Ocean Eyes Coral Restoration School Program',
    slug: 'ocean-eyes',
    category: 'Education',
    funder: 'Ocean Eyes',
    description: 'Six years, eighteen schools, one Marine Base: a schools programme that pairs classroom lessons with hands on conservation and a student led environmental project.',
    image: '/images/kids.jpg',
    stats: [
      { value: '360', label: 'Learners' },
      { value: '18', label: 'Schools' },
      { value: '6', label: 'Years Running' },
    ],
    gradient: 'from-amber-900 via-amber-900/90 to-amber-900/60',
  },
  {
    id: 'ocean5-advocacy',
    title: 'Ocean 5 Advocacy',
    slug: 'ocean5-advocacy',
    category: 'Advocacy',
    funder: 'Oceans5',
    description: 'A 24 month, $250,000 campaign arming the Kilifi County BMU Network with the evidence, media training and coalitions to push back against illegal trawlers.',
    image: '/images/BMUmeeting.jpg',
    stats: [
      { value: '18', label: 'BMUs' },
      { value: '5,000+', label: 'Fisherfolk' },
    ],
    gradient: 'from-rose-900 via-rose-900/90 to-rose-900/60',
  },
  {
    id: 'pelorus-she',
    title: 'Pelorus SHE Trash4Cash Initiative',
    slug: 'pelorus-she',
    category: 'Livelihoods',
    funder: 'Pelorus Foundation',
    description: "A women's clean up movement that started with 19 fishmongers at Kuruwitu and rippled to a 35 strong group in Kanamai, guarding a prime turtle nesting beach.",
    image: '/images/trashforcash.jpg',
    stats: [
      { value: '100', label: 'Women Recycling' },
      { value: '600', label: 'In Permaculture' },
      { value: '2022', label: 'Since' },
    ],
    gradient: 'from-pink-900 via-pink-900/90 to-pink-900/60',
  },
  {
    id: 'fisheries-monitoring',
    title: 'Fisheries Monitoring Capacity, KAMAMKUKI JCMA',
    slug: 'fisheries-monitoring',
    category: 'Science',
    funder: 'Blue Ventures Conservation',
    description: 'A two phase programme turning five Beach Management Units across two counties into a single, evidence led system for monitoring and defending shared fisheries.',
    image: '/images/kamakukijcma.jpg',
    stats: [
      { value: '304 km²', label: 'JCMA Area' },
      { value: '5', label: 'BMUs' },
      { value: '10', label: 'Landing Sites' },
    ],
    gradient: 'from-emerald-900 via-emerald-900/90 to-emerald-900/60',
  },
  {
    id: 'coral-guardian',
    title: 'REEL Kilifi: Coral Guardian Partnership',
    slug: 'coral-guardian',
    category: 'Conservation',
    funder: 'Coral Guardian',
    description: 'Restoring Reef Ecosystems for Enhanced Livelihoods: community-built coral nurseries, fisherman training and youth education across the 12,000-hectare Kuruwitu co-management area.',
    image: '/images/coral-reef.jpg',
    stats: [
      { value: '12,000 ha', label: 'Co-Managed Area' },
      { value: '2024', label: 'Partnership Since' },
      { value: '3', label: 'Community Pillars' },
    ],
    gradient: 'from-orange-900 via-orange-900/90 to-orange-900/60',
  },
  {
    id: 'blue-venture',
    title: 'Blue Ventures: Fisheries Monitoring Capacity',
    slug: 'blue-venture',
    category: 'Fisheries',
    funder: 'Blue Ventures Conservation',
    description: 'A two-phase project strengthening fisheries monitoring and co-management capacity across five Beach Management Units in the KAMAMKUKI Joint Co-Management Area.',
    image: '/images/kamakukijcma.jpg',
    stats: [
      { value: '304 km²', label: 'JCMA Area' },
      { value: '5', label: 'BMUs' },
      { value: '10', label: 'Landing Sites' },
    ],
    gradient: 'from-blue-900 via-blue-900/90 to-blue-900/60',
  },
  {
    id: 'ocean-community-grant',
    title: 'Ocean Community Grant: OCG2/1012',
    slug: 'ocean-community-grant',
    category: 'Livelihoods',
    funder: 'UK International Development',
    description: 'Enhancing livelihoods through locally developed approaches to reduce illegal fishing practices across five coastal communities in Kenya.',
    image: '/images/kamakukijcma.jpg',
    stats: [
      { value: '695', label: 'Beneficiaries' },
      { value: '25', label: 'Peer Trainers' },
      { value: '80%', label: 'Youth Focus' },
    ],
    gradient: 'from-violet-900 via-violet-900/90 to-violet-900/60',
  },
];
