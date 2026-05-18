import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PROGRAMMES } from '@/lib/constants';

// ─── Per-programme extended content ──────────────────────────────────────────

interface ProgrammeDetail {
  slug: string;
  heroImage?: string;
  heroImageAlt?: string;
  longDescription: string[];
  highlights: { label: string; value: string }[];
  bodyImages?: { src: string; alt: string; caption: string }[];
  quote?: { text: string; author: string };
  relatedSlugs: string[];
}

const PROGRAMME_DETAILS: Record<string, ProgrammeDetail> = {
  'coral-restoration': {
    slug: 'coral-restoration',
    heroImage: '/images/divers.jpg',
    heroImageAlt: 'Oceans Alive community divers preparing for coral restoration at Kuruwitu',
    longDescription: [
      "Since 2019, Oceans Alive Foundation has partnered with Coral Guardian International and Coral Reef Care to build Kenya's most active community-led coral nursery at Kuruwitu. Local fishers — the same men and women whose livelihoods depend on the reef — are trained and employed as certified reef gardeners.",
      'Coral fragments are grown in underwater nurseries attached to metal tree structures. Once colonies reach transplantable size, community divers carefully move them to bleached and degraded areas of the reef. The result: 24,800 coral colonies planted since 2019 with an 85% survival rate — well above the global average.',
      'The programme is deliberately designed so that the community owns it. Fishers who once dynamite-fished now guard the same reef, because they have seen it come back to life with their own hands. Within the protected tengefu, fish biomass has increased by 40% — and the fish have started coming back outside it too.',
    ],
    highlights: [
      { label: 'Coral Colonies Planted', value: '24,800' },
      { label: 'Survival Rate', value: '85%' },
      { label: 'Community Divers Trained', value: '40+' },
      { label: 'Fish Biomass Increase', value: '40%' },
      { label: 'Programme Start', value: '2019' },
      { label: 'Partner', value: 'Coral Guardian · Coral Reef Care' },
    ],
    bodyImages: [
      {
        src: '/images/oceansmen.jpg',
        alt: 'Two young Oceans Alive trained community divers',
        caption: 'Trained community divers — local fishers turned reef guardians',
      },
    ],
    quote: {
      text: 'The reef is not just recovering — it is growing. We see fish we have not seen in twenty years.',
      author: 'Community diver, Kuruwitu',
    },
    relatedSlugs: ['co-management', 'research-monitoring', 'bmu-network'],
  },

  'co-management': {
    slug: 'co-management',
    heroImage: '/images/kamakukijcma.jpg',
    heroImageAlt: 'Community co-management meeting — Kilifi County, Kenya',
    longDescription: [
      "In January 2022, Oceans Alive Foundation made history: delivering Kenya's first formal ocean co-management plan under new government guidelines. The plan places 150 km² of sea — an area the size of a small city — under structured community stewardship, with Beach Management Units and local government sharing governance responsibility.",
      'The LMMA (Locally Managed Marine Area) model is the culmination of nearly two decades of relationship-building between Oceans Alive, Kilifi County Government, the Kenya Ministry of Blue Economy, and the fishing communities who live at the heart of this work. What began with 30 hectares at Kuruwitu in 2003 is now a 120 km² internationally recognised governance blueprint.',
      "Community co-management means that the people who fish the sea also write the rules about how it is fished. Rotational no-take zones, gear transition programmes, seasonal closures — all driven by community data, community decisions, and community enforcement. It's governance by the people it protects.",
    ],
    highlights: [
      { label: 'Ocean Under Management', value: '120 km²' },
      { label: 'Year Plan Signed', value: '2022' },
      { label: 'Communities Covered', value: 'Kilifi County' },
      { label: 'Government Partners', value: '2' },
      { label: 'From Kuruwitu (2003)', value: '30 ha' },
      { label: 'Today', value: '120 km²' },
    ],
    bodyImages: [
      {
        src: '/images/BMUmeeting.jpg',
        alt: 'Beach Management Unit meeting with community members',
        caption: 'A Beach Management Unit (BMU) meeting — community voices shaping marine policy',
      },
      {
        src: '/images/BMUS.jpg',
        alt: 'Community members in a co-management planning circle',
        caption: 'Co-management planning sessions bring together fishers, elders and government officials',
      },
    ],
    quote: {
      text: 'When communities own their conservation, they defend it. When it provides livelihoods, they sustain it.',
      author: 'Oceans Alive Foundation',
    },
    relatedSlugs: ['bmu-network', 'marine-governance', 'coral-restoration'],
  },

  'project-reel': {
    slug: 'project-reel',
    heroImage: '/images/oceanculturelife.jpg',
    heroImageAlt: 'Project REEL Kilifi — Canon CENA documentation at Kuruwitu',
    longDescription: [
      "Project REEL Kilifi is a media partnership between Oceans Alive, Canon Central & North Africa (Canon CENA), and Athlete Media Group. The programme brings world-class photography and filmmaking to the Kilifi coast — documenting the conservation story and amplifying it to audiences that wouldn't otherwise hear it.",
      'The visual documentation produced by Project REEL has appeared in international conservation media, supported OAF fundraising campaigns, and brought global attention to the Kuruwitu model. Photographs from the project have reached audiences across four continents.',
      "Beyond storytelling, Project REEL trains local young people in photography and documentation — building a generation of Kenyan environmental communicators who can tell their own story in their own voice.",
    ],
    highlights: [
      { label: 'Partners', value: 'Canon CENA · Athlete Media' },
      { label: 'Reach', value: 'Global' },
      { label: 'Focus', value: 'Visual storytelling' },
      { label: 'Local Training', value: 'Youth photographers' },
    ],
    quote: {
      text: 'Conservation that cannot be seen cannot inspire. Project REEL puts Kilifi on the world stage.',
      author: 'Oceans Alive Foundation',
    },
    relatedSlugs: ['ocean-education', 'coral-restoration', 'capacity-building'],
  },

  'uk-biodiversity': {
    slug: 'uk-biodiversity',
    heroImage: '/images/Capacityassess.jpg',
    heroImageAlt: 'Capacity assessment workshop — UK Biodiversity Programme',
    longDescription: [
      'The UK Biodiversity Programme is an institutional capacity-building initiative funded by the UK Government through the FCDO (Foreign, Commonwealth & Development Office). It works to strengthen the organisational and governance infrastructure behind marine conservation in Kenya.',
      'The programme focuses on the people and systems that make conservation work over the long term: training conservation managers, strengthening community governance structures, and building the policy frameworks that give community-led marine management legal standing.',
      'Through this programme, Oceans Alive has deepened its engagement with national government bodies, supported the development of Kenya\'s marine governance framework, and built institutional capacity that extends well beyond any single project cycle.',
    ],
    highlights: [
      { label: 'Funder', value: 'UK Government FCDO' },
      { label: 'Focus', value: 'Institutional capacity' },
      { label: 'Scope', value: 'Kenya-wide' },
    ],
    relatedSlugs: ['marine-governance', 'capacity-building', 'co-management'],
  },

  'ocean-education': {
    slug: 'ocean-education',
    heroImage: '/images/coralteaching.jpg',
    heroImageAlt: 'Teacher showing coral to children at Kuruwitu — Ocean Education programme',
    longDescription: [
      "The tengefu — the protected space — is Oceans Alive's living classroom. Each year, more than 2,500 students, interns, and young people come to Kuruwitu to learn real marine conservation, not from textbooks, but from the reef itself.",
      "Schools from across Kilifi County visit the sanctuary for guided learning days. Children snorkel above coral gardens, learn to identify reef species, and hear from community divers about what the reef looked like before — and what it looks like now. It's ocean literacy rooted in living evidence.",
      'The internship programme brings aspiring conservationists from Kenya and around the world to train alongside OAF staff. They leave with practical skills in reef monitoring, community engagement, and marine governance — and many go on to build careers in conservation.',
    ],
    highlights: [
      { label: 'Young People Educated', value: '2,500+ / yr' },
      { label: 'Schools Reached', value: 'Kilifi County' },
      { label: 'Interns Hosted', value: 'Kenya & International' },
      { label: 'Learning Setting', value: 'Living reef classroom' },
    ],
    bodyImages: [
      {
        src: '/images/kids.jpg',
        alt: 'Children learning about marine conservation at Kuruwitu',
        caption: 'The reef as a classroom — children discovering marine life at Kuruwitu',
      },
      {
        src: '/images/learning.jpg',
        alt: 'Students in a learning session at the marine sanctuary',
        caption: 'Ocean literacy sessions at the Kuruwitu marine sanctuary',
      },
      {
        src: '/images/interns.jpg',
        alt: 'Conservation interns from Kenya and abroad working with Oceans Alive',
        caption: 'International and Kenyan interns gaining hands-on conservation experience',
      },
    ],
    quote: {
      text: 'When a child grows up protecting the ocean, it is protected for a generation. When they teach their children, it is protected forever.',
      author: 'Ocean Education Programme',
    },
    relatedSlugs: ['coral-restoration', 'capacity-building', 'research-monitoring'],
  },

  'bmu-network': {
    slug: 'bmu-network',
    heroImage: '/images/BMUS.jpg',
    heroImageAlt: 'Beach Management Unit members in community meeting at Kilifi',
    longDescription: [
      "Beach Management Units (BMUs) are the legal bodies that represent fishing communities in Kenya's coastal governance system. Oceans Alive works to connect and strengthen the BMU network across Kilifi County — ensuring that fishers' voices carry real weight in decision-making at county and national level.",
      'Through the Kilifi BMU Network, OAF facilitates regular inter-BMU coordination meetings, supports communities in documenting fishing pressure data, and provides training in fisheries management, legal rights, and governance processes.',
      "The programme has contributed to a 40% increase in fish biomass within co-managed areas — evidence that when fishers govern their own waters, the ocean responds. The Kilifi BMU Network is now a model being examined by Kenya Fisheries Service for national rollout.",
    ],
    highlights: [
      { label: 'Fish Biomass Increase', value: '40%' },
      { label: 'County Coverage', value: 'Kilifi County' },
      { label: 'Government Partner', value: 'Kenya Fisheries Service' },
      { label: 'Governance Level', value: 'County & National' },
    ],
    bodyImages: [
      {
        src: '/images/BMUmeeting.jpg',
        alt: 'BMU meeting with community fishers and Oceans Alive team',
        caption: 'Regular BMU coordination meetings keep community voices central to governance',
      },
      {
        src: '/images/fisher.jpg',
        alt: 'Fisherman on the Kilifi coast with fishing nets',
        caption: 'The fishers of Kilifi — the people the BMU Network exists to represent and empower',
      },
    ],
    quote: {
      text: 'When fishers govern their own waters, the ocean responds.',
      author: 'Kilifi BMU Network',
    },
    relatedSlugs: ['co-management', 'marine-governance', 'coral-restoration'],
  },

  'trash4cash': {
    slug: 'trash4cash',
    heroImage: '/images/trashforcash.jpg',
    heroImageAlt: 'Women in Trash4Cash programme sorting plastic waste on the Kilifi coast',
    longDescription: [
      "Eight million tonnes of plastic enter the world's oceans every year. On the Kilifi coast, the women of the Trash4Cash programme are fighting back — and getting paid for it.",
      "Trash4Cash brings together women's groups from coastal communities to collect, sort, and sell plastic waste to certified recyclers. What would otherwise end up in the ocean becomes household income. More than 80 women now participate across four communities, collecting over two tonnes of plastic waste every month.",
      "The programme is part of the LIFT Network — Oceans Alive's broader women's economic empowerment and conservation leadership platform. By placing income generation and environmental protection in the same hands, Trash4Cash makes conservation something women do for their own futures, not something done to their environment.",
    ],
    highlights: [
      { label: 'Women Participants', value: '80+' },
      { label: 'Plastic Collected Monthly', value: '2+ tonnes' },
      { label: 'Communities', value: '4' },
      { label: 'Plastic Entering Oceans Annually', value: '8M tonnes' },
    ],
    bodyImages: [
      {
        src: '/images/trashforcash2.jpg',
        alt: 'Trash4Cash women sorting plastic waste into categories for recycling',
        caption: 'Sorting, weighing and preparing plastic for sale to certified recyclers',
      },
      {
        src: '/images/trashforcash3.jpg',
        alt: 'Women in Trash4Cash programme with collected plastic on Kilifi beach',
        caption: 'Clean beaches. Economic independence. Conservation leadership.',
      },
    ],
    quote: {
      text: 'We are not just cleaning the beach. We are building our future.',
      author: 'Trash4Cash participant, Kilifi',
    },
    relatedSlugs: ['lift-network', 'kitchen-gardens', 'community-health'],
  },

  'turtle-protection': {
    slug: 'turtle-protection',
    heroImage: '/images/oceanday.jpg',
    heroImageAlt: 'Community celebration of ocean conservation at Kilifi — World Ocean Day',
    longDescription: [
      "Sea turtles have swum Kenya's coastline for millions of years. Today, three species — the green turtle, hawksbill turtle, and loggerhead — nest along the Kilifi coast. All three are threatened.",
      "Oceans Alive community rangers monitor nesting beaches year-round along 640 km of coastline, recording nesting events, tagging females, and protecting nests from poachers and disturbance. Data collected by the rangers feeds into Kenya's national turtle monitoring programme.",
      "The programme is built on the understanding that communities who live alongside nesting turtles are the most effective guardians of those turtles. Community rangers are paid local people — often former poachers — who have chosen stewardship over exploitation because it supports their families and their identity.",
    ],
    highlights: [
      { label: 'Coastline Monitored', value: '640 km' },
      { label: 'Species Protected', value: '3 turtle species' },
      { label: 'Monitoring', value: 'Year-round' },
      { label: 'Community Rangers', value: 'Local residents' },
    ],
    quote: {
      text: 'We watched the turtles almost disappear. Now we watch them come back. That is the greatest change of our lifetime.',
      author: 'Community ranger, Kilifi coast',
    },
    relatedSlugs: ['co-management', 'research-monitoring', 'bmu-network'],
  },

  'marine-governance': {
    slug: 'marine-governance',
    heroImage: '/images/man.jpg',
    heroImageAlt: 'Marine policy documentation and governance work at Oceans Alive',
    longDescription: [
      "Conservation without policy is just gardening. Oceans Alive translates twenty years of community-collected data and field experience into national marine policy frameworks — ensuring that what works in Kilifi shapes how Kenya manages its entire 640 km coastline.",
      "In 2022, OAF delivered Kenya's first ocean co-management plan under new government guidelines — a legal document placing 150 km² under community stewardship. In 2025, the Kuruwitu model was presented at the IUCN World Conservation Congress as a globally scalable blueprint for community-led marine governance.",
      'The Marine Governance & Policy programme supports communities in generating the evidence that policymakers need, represents community interests at county and national government level, and advocates for legal frameworks that recognise community marine tenure across the Western Indian Ocean.',
    ],
    highlights: [
      { label: 'Co-Management Plan', value: '2022 — First in Kenya' },
      { label: 'IUCN Presentation', value: '2025' },
      { label: 'Ocean Under Policy', value: '120 km²' },
      { label: 'Government Partners', value: 'Ministry of Blue Economy · Kilifi County' },
    ],
    quote: {
      text: 'From 30 hectares to a global blueprint. Community governance can scale.',
      author: 'IUCN World Conservation Congress, 2025',
    },
    relatedSlugs: ['co-management', 'bmu-network', 'research-monitoring'],
  },

  'lift-network': {
    slug: 'lift-network',
    heroImage: '/images/womenlearning.jpg',
    heroImageAlt: 'Women in the LIFT Network — economic empowerment and conservation leadership',
    longDescription: [
      "The LIFT Network is Oceans Alive's platform for women's economic empowerment and conservation leadership on the Kilifi coast. LIFT stands for Livelihoods, Independence, Finance, and Transformation.",
      "Coastal women are disproportionately affected by declining fish stocks and ocean degradation — and disproportionately excluded from the governance decisions that shape their futures. LIFT changes that by connecting women to income-generating opportunities (Trash4Cash, eco-tourism, kitchen gardens) while building their leadership within community conservation structures.",
      "Through LIFT, women participate in BMU meetings, co-management planning sessions, and conservation monitoring. They are not beneficiaries of conservation — they are its architects.",
    ],
    highlights: [
      { label: 'Women Members', value: '80+' },
      { label: 'Programmes Connected', value: 'Trash4Cash · Kitchen Gardens · Eco-Tourism' },
      { label: 'County', value: 'Kilifi' },
      { label: 'Focus', value: 'Economic agency + conservation leadership' },
    ],
    bodyImages: [
      {
        src: '/images/womenlearning2.jpg',
        alt: 'Women learning and collaborating in the LIFT Network programme',
        caption: 'LIFT Network training sessions — building conservation leaders from within communities',
      },
    ],
    quote: {
      text: "Women are agents of conservation, not beneficiaries. LIFT is designed to expand women's economic independence alongside ocean stewardship.",
      author: 'Oceans Alive Foundation',
    },
    relatedSlugs: ['trash4cash', 'kitchen-gardens', 'community-health'],
  },

  'kitchen-gardens': {
    slug: 'kitchen-gardens',
    heroImage: '/images/farmernaction.jpg',
    heroImageAlt: 'Coastal woman tending a kitchen garden — Kilifi County, Kenya',
    longDescription: [
      "On Kenya's coast, food security and ocean health are the same problem. When fish stocks decline, fishing families turn to more intensive harvesting — accelerating the collapse. Kitchen gardens break this cycle by providing alternative food sources and income, reducing pressure on the reef.",
      "Oceans Alive's Kitchen Gardens & Food Security programme establishes climate-smart kitchen gardens for coastal fishing families across Kilifi County. Women who lead the gardens gain income from selling surplus produce, reducing their households' dependence on overexploited fish stocks.",
      'The programme is intentionally integrated with LIFT Network, Trash4Cash, and the coral restoration work — because a community that has food security is a community that can afford to let the reef recover.',
    ],
    highlights: [
      { label: 'Scope', value: 'Kilifi County' },
      { label: 'Beneficiaries', value: 'Coastal fishing families' },
      { label: 'Design', value: 'Climate-smart agriculture' },
      { label: 'Linked Programmes', value: 'LIFT Network · Trash4Cash' },
    ],
    bodyImages: [
      {
        src: '/images/farmers.jpg',
        alt: 'Women laughing and holding fresh vegetables from kitchen gardens',
        caption: 'Kitchen garden produce — nutrition, income, and reduced pressure on the reef',
      },
    ],
    quote: {
      text: 'When the family has food from the garden, the father does not have to take every fish from the sea.',
      author: 'Kitchen garden participant, Kilifi',
    },
    relatedSlugs: ['lift-network', 'trash4cash', 'community-health'],
  },

  'capacity-building': {
    slug: 'capacity-building',
    heroImage: '/images/Capacityassess.jpg',
    heroImageAlt: 'Capacity assessment and training workshop — Oceans Alive Foundation',
    longDescription: [
      "Conservation only lasts as long as the people who carry it. Oceans Alive's Capacity Building & Training programme builds the human infrastructure that makes community-led marine conservation durable — beyond any single funder, project, or generation.",
      "Training covers marine governance, protected area management, ecological monitoring, fisheries law, and community facilitation. Participants include BMU members, community rangers, women's group leaders, local government officials, and aspiring conservationists from across Kenya.",
      "The programme deliberately trains people who will remain in the community after any given project ends — fishers, teachers, local leaders — because they are the ones who will carry the conservation work forward. International interns and students are also integrated into the programme, creating exchange that strengthens both local and global conservation capacity.",
    ],
    highlights: [
      { label: 'Training Coverage', value: 'Kenya-wide' },
      { label: 'Topics', value: 'Governance, monitoring, fisheries law' },
      { label: 'Participants', value: 'Community members, BMUs, interns' },
      { label: 'Approach', value: 'Train the trainer, long-term capacity' },
    ],
    bodyImages: [
      {
        src: '/images/womenlearning.jpg',
        alt: 'Women in a capacity building training session with Oceans Alive',
        caption: 'Conservation training — building skills that last beyond any project cycle',
      },
    ],
    relatedSlugs: ['ocean-education', 'bmu-network', 'marine-governance'],
  },

  'community-health': {
    slug: 'community-health',
    heroImage: '/images/communities.jpg',
    heroImageAlt: 'Community gathering in Kilifi County — Oceans Alive health and wellbeing programme',
    longDescription: [
      "The health of Kilifi's coastal communities and the health of its ocean are inseparable. When fish stocks collapse, families go hungry. When plastic pollution rises, children get sick swimming in the sea. When livelihoods are insecure, mental health suffers.",
      "Oceans Alive's Community Health & Wellbeing programme takes a holistic approach — linking ocean conservation directly to the physical, economic, and social wellbeing of the 1,200+ community members at the heart of its work.",
      "The programme includes nutrition support through kitchen gardens, economic resilience through Trash4Cash and LIFT Network, community health days linked to World Ocean Day celebrations, and partnerships with local health authorities on issues that intersect with environmental quality.",
    ],
    highlights: [
      { label: 'Community Members', value: '1,200+' },
      { label: 'Approach', value: 'Holistic ocean-community link' },
      { label: 'County', value: 'Kilifi' },
      { label: 'Linked Programmes', value: 'Kitchen Gardens · LIFT · Trash4Cash' },
    ],
    quote: {
      text: "A healthy ocean is a healthy community. We do not separate them.",
      author: 'Oceans Alive Foundation',
    },
    relatedSlugs: ['lift-network', 'kitchen-gardens', 'trash4cash'],
  },

  'research-monitoring': {
    slug: 'research-monitoring',
    heroImage: '/images/oceansmen.jpg',
    heroImageAlt: 'Community reef monitoring divers — research and monitoring programme',
    longDescription: [
      "Good conservation is grounded in evidence. Oceans Alive's Research & Monitoring programme generates the ecological baselines, fish biomass surveys, coral cover assessments, and biodiversity data that underpin every other programme the organisation runs.",
      "Community reef monitors — local trained divers — conduct regular transect surveys of the Kuruwitu tengefu and surrounding areas. Their data tracks coral cover recovery, fish biomass changes, and the expansion of species into previously degraded areas. This data is presented to Kenya Fisheries Service, county government, and international partners to inform marine policy.",
      "At the IUCN World Conservation Congress in 2025, Oceans Alive presented a decade of reef monitoring data demonstrating that community-led marine governance produces measurable, sustained ecological recovery — making the Kilifi model the most evidence-backed community conservation programme in East Africa.",
    ],
    highlights: [
      { label: 'Coral Survival Rate', value: '85%' },
      { label: 'Fish Biomass Recovery', value: '40%' },
      { label: 'Monitoring Duration', value: '10+ years' },
      { label: 'Data Used For', value: 'National marine policy' },
      { label: 'IUCN Presentation', value: '2025' },
      { label: 'Partners', value: 'Coral Guardian · IUCN' },
    ],
    quote: {
      text: 'Our data does not just tell us how the reef is doing. It tells the government how to protect it.',
      author: 'Oceans Alive Research & Monitoring',
    },
    relatedSlugs: ['coral-restoration', 'co-management', 'marine-governance'],
  },
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return PROGRAMMES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const prog = PROGRAMMES.find((p) => p.slug === params.slug);
  if (!prog) return {};
  return {
    title: `${prog.title} — Oceans Alive Foundation`,
    description: prog.description,
  };
}

export default function ProgrammePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const prog = PROGRAMMES.find((p) => p.slug === slug);
  if (!prog) notFound();

  const detail = PROGRAMME_DETAILS[slug];
  const related = PROGRAMMES.filter((p) => detail?.relatedSlugs?.includes(p.slug)).slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={`relative bg-gradient-to-br ${prog.color} overflow-hidden`}>
        {detail?.heroImage && (
          <div className="absolute inset-0">
            <Image
              src={detail.heroImage}
              alt={detail.heroImageAlt || prog.title}
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
        )}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold mb-8 transition-colors"
          >
            ← All Programmes
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1 rounded-full">
              Programme {prog.number}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
              {prog.category}
            </span>
          </div>
          <div className="flex items-start gap-6 mb-6">
            <span className="text-5xl font-poppins font-bold text-white/20 leading-none">{prog.number}</span>
            <div>
              <h1 className="font-poppins font-bold text-white text-4xl md:text-6xl leading-tight mb-3">
                {prog.title}
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                {prog.description}
              </p>
            </div>
          </div>
          {prog.partners && (
            <p className="text-white/50 text-xs uppercase tracking-widest mt-4">
              With us and partners: {prog.partners}
            </p>
          )}
        </div>
      </section>

      {/* ── Key Stats ────────────────────────────────────────── */}
      {detail?.highlights && (
        <section className="bg-white py-14 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {detail.highlights.map((h) => (
                <div key={h.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-poppins font-bold text-ocean-turquoise mb-1">
                    {h.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider leading-tight">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Hero Photo ───────────────────────────────────────── */}
      {detail?.heroImage && (
        <section className="bg-gray-50 py-0">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={detail.heroImage}
                alt={detail.heroImageAlt || prog.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* ── Long Description ─────────────────────────────────── */}
      {detail?.longDescription && (
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                {detail.longDescription.map((para, i) => (
                  <p key={i} className={`leading-relaxed text-gray-700 ${i === 0 ? 'text-lg' : ''}`}>
                    {para}
                  </p>
                ))}
              </div>
              <div className="space-y-6">
                {/* Stat callout */}
                <div className={`rounded-2xl bg-gradient-to-br ${prog.color} p-8 text-white text-center`}>
                  <div className="text-5xl font-poppins font-bold mb-2">{prog.stat}</div>
                  <div className="text-sm opacity-80 uppercase tracking-wider">{prog.statLabel}</div>
                </div>
                {prog.partners && (
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-ocean-turquoise mb-2">Partners</p>
                    <p className="text-sm text-gray-700">{prog.partners}</p>
                  </div>
                )}
                <div className="bg-ocean-midnight rounded-2xl p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-ocean-turquoise mb-2">Programme</p>
                  <p className="text-sm font-poppins font-bold">{prog.title}</p>
                  <p className="text-xs text-white/60 mt-1">{prog.category} · Programme {prog.number}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Body Images ──────────────────────────────────────── */}
      {detail?.bodyImages && detail.bodyImages.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className={`grid grid-cols-1 ${detail.bodyImages.length > 1 ? 'md:grid-cols-2' : ''} gap-6`}>
              {detail.bodyImages.map((img) => (
                <div key={img.src}>
                  <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden shadow-md mb-3">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-gray-500 text-center italic">{img.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Quote ────────────────────────────────────────────── */}
      {detail?.quote && (
        <section className="bg-ocean-midnight py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-2xl md:text-3xl font-poppins font-bold text-white leading-relaxed mb-6">
              &ldquo;{detail.quote.text}&rdquo;
            </p>
            <p className="text-ocean-turquoise text-sm font-semibold uppercase tracking-widest">
              — {detail.quote.author}
            </p>
          </div>
        </section>
      )}

      {/* ── Related Programmes ───────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-3">Connected Work</p>
            <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-8">
              Related Programmes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/programmes/${r.slug}`}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${r.color} p-7 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-2xl font-poppins font-bold text-white/25">{r.number}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-full">{r.category}</span>
                  </div>
                  <h3 className="text-base font-poppins font-bold mb-2">{r.title}</h3>
                  <p className="text-sm opacity-75 leading-relaxed line-clamp-2">{r.description}</p>
                  <div className="mt-4 text-sm font-bold text-white/80 group-hover:text-white transition-colors">
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-ocean-turquoise py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-poppins font-bold text-white">
                Support This Programme
              </h3>
              <p className="text-white/80 mt-1">
                Your donation directly funds conservation work on Kenya&apos;s coast.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/donate"
                className="px-6 py-3 bg-white text-ocean-turquoise font-bold rounded-xl hover:bg-ocean-midnight hover:text-white transition-all duration-200"
              >
                Donate Now
              </Link>
              <Link
                href="/programmes"
                className="px-6 py-3 border border-white/50 text-white font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                All Programmes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
