import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { STATIC_BLOG_STORIES } from '@/lib/constants';

// ─── Per-story rich content ───────────────────────────────────────────────────

interface StoryContent {
  heroImage: string;
  heroImageAlt: string;
  bodyImages: { src: string; alt: string; caption: string }[];
  pullQuote: string;
  pullQuoteAttrib: string;
  body: string[];
  relatedSlugs: string[];
}

const BLOG_CONTENT: Record<string, StoryContent> = {
  'coral-restoration-journey': {
    heroImage: '/images/divers.jpg',
    heroImageAlt: 'Community divers planting coral at Kuruwitu reef',
    pullQuote: 'The reef is not just recovering — it is growing. We see fish we haven\'t seen in twenty years.',
    pullQuoteAttrib: 'Community diver, Kuruwitu',
    body: [
      'In 2019, Oceans Alive Foundation partnered with Coral Guardian International to begin Kenya\'s most ambitious community-led coral restoration programme. What started with a handful of trained fishers and a single underwater nursery has grown into a programme that has placed over 24,800 coral colonies back onto Kilifi\'s degraded reefs.',
      'The methodology is deceptively simple: fragment healthy coral, grow it in underwater nurseries for three to six months until it is strong enough to transplant, then carefully attach it to dead or dying reef structures using stainless steel nails and hydraulic cement. The complexity is in the detail — choosing the right coral species for each microenvironment, monitoring for disease and bleaching, managing nursery predators, and training community members to do all of this safely and precisely.',
      'The programme\'s 85% coral survival rate — measured from nursery to one year post-transplant — places it well above the global average of around 50-60%. Researchers attribute this success to two factors: the use of locally-sourced coral fragments that are already adapted to Kilifi\'s specific water conditions, and the deep investment of the community divers who tend to the nurseries with the same care that farmers give to crops.',
      'Today, over 40 community members are trained and certified reef gardeners. Many of them were fishers who once relied on dynamite fishing or walked across coral flats to gather invertebrates. Now they are the reef\'s most committed protectors — because their identity, their income, and their pride are tied to its recovery.',
      'The ecological results are becoming undeniable. Fish biomass within the Kuruwitu protected area has increased by an estimated 40% since the programme began. Species not seen in decades — including several grouper species and the critically endangered bumphead parrotfish — have been documented returning to the restored zones.',
    ],
    bodyImages: [
      { src: '/images/oceansmen.jpg', alt: 'Trained reef gardeners preparing for a dive', caption: 'Trained reef gardeners from the Kuruwitu community preparing for a restoration dive.' },
      { src: '/images/coralteaching.jpg', alt: 'Coral restoration training session', caption: 'Community members learn coral fragment identification during a training session with Coral Guardian experts.' },
    ],
    relatedSlugs: ['rebuilding-fisheries', 'co-management-plan', 'iucn-2025'],
  },

  'trash4cash-women': {
    heroImage: '/images/trashforcash.jpg',
    heroImageAlt: 'Women in Trash4Cash sorting plastic waste in Kilifi',
    pullQuote: 'Before Trash4Cash, plastic was just a problem. Now it is our business, our income, and our pride.',
    pullQuoteAttrib: 'Trash4Cash participant, Kilifi',
    body: [
      'Every month, more than two tonnes of plastic waste are collected from the beaches, mangroves, and waterways of Kilifi County by a network of over 80 women. They sort it, weigh it, and sell it to recycling partners — earning a reliable income while protecting the coastline that their communities depend on.',
      'Trash4Cash began as a simple idea: pay community members for the plastic they collect. What Oceans Alive discovered quickly was that women — who often bear the burden of managing waste in their households and communities — were by far the most organised and committed collectors. The programme was redesigned around their leadership.',
      'Each collection point is run by a women\'s group that organises their own schedules, manages the weighing and recording, and negotiates with recycling buyers. The groups have become micro-enterprises, reinvesting a portion of their earnings into group savings schemes and school fees for their children.',
      'The environmental impact is direct and measurable: plastic that would otherwise enter the ocean is intercepted at source. Kilifi\'s beaches, which once accumulated significant plastic during rains, are visibly cleaner. Fisher communities report less plastic in their nets. Mangrove ecosystems, which trap plastic debris in their root systems and slowly suffocate, are recovering.',
      'But Trash4Cash is more than an environmental programme. It is a women\'s economic empowerment programme that uses the environment as its entry point. Participants have used their earnings to start small businesses, repair houses, and pay secondary school fees. The programme has created a model that other coastal counties in Kenya are now beginning to replicate.',
    ],
    bodyImages: [
      { src: '/images/trashforcash2.jpg', alt: 'Women sorting and weighing plastic', caption: 'Women sort and weigh collected plastic at a Trash4Cash collection point in Kilifi.' },
      { src: '/images/womenlearning.jpg', alt: 'Training session for Trash4Cash participants', caption: 'Participants receive financial literacy and business training alongside the environmental programme.' },
    ],
    relatedSlugs: ['youth-conservation', 'ocean-leaders', 'world-ocean-day-2024'],
  },

  'youth-conservation': {
    heroImage: '/images/kids.jpg',
    heroImageAlt: 'Children at the Kuruwitu marine sanctuary learning about the ocean',
    pullQuote: 'When a child understands why the reef matters, they become its guardian for life. That is the programme we are building.',
    pullQuoteAttrib: 'Ocean Education team, Oceans Alive',
    body: [
      'For a generation of children growing up along Kenya\'s coast, the ocean has always been there — but it has not always been understood. Oceans Alive Foundation\'s ocean education programme has reached over 2,500 students across Kilifi County with hands-on marine conservation learning that turns curiosity into commitment.',
      'The programme runs in partnership with local primary and secondary schools. Students visit the Kuruwitu marine sanctuary for field days that include snorkelling in the protected zone, coral identification sessions, and meetings with the community divers who maintain the reef restoration nurseries. Many children are meeting a coral reef in person for the first time.',
      'Back in the classroom, teachers trained by Oceans Alive run a curriculum that covers marine biodiversity, the causes and effects of reef degradation, the science of coral reproduction, and the role of community governance in protecting marine resources. The curriculum is designed to be practical, local, and linked to the lives the children already live.',
      'The results are visible in the community. Children who went through the programme three or four years ago are now secondary school students who volunteer at clean-up events, challenge peers who damage the reef, and — in several cases — have gone on to study environmental science. Some are now interning with the research and monitoring team.',
      'Oceans Alive also runs a parallel youth leadership stream for older students, pairing them with conservation staff for structured learning placements. Several of today\'s community conservation officers began as participants in the youth education programme more than a decade ago.',
    ],
    bodyImages: [
      { src: '/images/learning.jpg', alt: 'Students learning about marine ecosystems', caption: 'Students from Kilifi primary schools engage with hands-on marine biology materials.' },
      { src: '/images/coralteaching.jpg', alt: 'Coral education session', caption: 'A community educator explains coral reef ecology to a school group at the Kuruwitu sanctuary.' },
    ],
    relatedSlugs: ['ocean-leaders', 'coral-restoration-journey', 'world-ocean-day-2024'],
  },

  'co-management-plan': {
    heroImage: '/images/kamakukijcma.jpg',
    heroImageAlt: 'Community leaders and government officials at the JCMA co-management signing',
    pullQuote: 'This is not just a plan on paper. It is the community saying: this ocean belongs to us, and we will protect it.',
    pullQuoteAttrib: 'BMU chair, Kuruwitu',
    body: [
      'In January 2022, Oceans Alive Foundation achieved something that had never been done before in Kenya: the delivery of the country\'s first formal ocean co-management plan under the new Kenya Fisheries Act. The plan placed 150 km² of ocean — expanded from the original 30-hectare Kuruwitu sanctuary — under community-led governance.',
      'The journey to this moment took nearly two decades. It began in 2003 when Desmond Bowden responded to fishers whose livelihoods were collapsing. It moved through the establishment of the Kuruwitu Conservation and Welfare Association, the creation of Kenya\'s first permanent marine sanctuary, and years of relationship-building with government fisheries officers, county administrators, and national policymakers.',
      'The co-management plan defines fishing zones, seasonal closures, gear restrictions, and community governance structures across the entire Kuruwitu Joint Community Marine Area. It is legally enforceable, recognised by the county and national government, and — crucially — owned and administered by the fishing communities themselves through their Beach Management Units.',
      'The BMU network that administers the plan represents thousands of registered fishers across multiple villages. Monthly meetings address compliance issues, maintenance of the monitoring programme, and reinvestment of sanctuary dividends back into community development. The governance model has been studied by policymakers from Uganda, Tanzania, and Mozambique as a blueprint for marine governance in the Western Indian Ocean region.',
      'For the communities involved, the plan represents something deeper than policy. It is the formalisation of a relationship between people and the sea that has sustained coastal Kilifi for generations — and a commitment to sustain it for generations to come.',
    ],
    bodyImages: [
      { src: '/images/BMUmeeting.jpg', alt: 'BMU community governance meeting', caption: 'Beach Management Unit representatives meet monthly to administer the co-management plan.' },
      { src: '/images/BMUS.jpg', alt: 'BMU network members', caption: 'The BMU network spans multiple communities along the Kilifi coastline.' },
    ],
    relatedSlugs: ['coral-restoration-journey', 'rebuilding-fisheries', 'iucn-2025'],
  },

  'royal-visit': {
    heroImage: '/images/oceanday.jpg',
    heroImageAlt: 'Royal visit to the Kuruwitu conservation project in 2023',
    pullQuote: 'What you have built here — the partnership between people and their ocean — is exactly what the world needs more of.',
    pullQuoteAttrib: 'His Majesty King Charles III, Kuruwitu, 2023',
    body: [
      'In 2023, His Majesty King Charles III visited the Kuruwitu conservation project during his official visit to Kenya. For the community members who had spent two decades building what he came to see, it was a moment of extraordinary validation.',
      'The King was brought to Kuruwitu as part of a programme designed to showcase Kenya\'s leadership in community-based conservation. He met with community divers, BMU representatives, women from the Trash4Cash programme, and the young students who had been through the ocean education curriculum. He snorkelled over the restored reef section and spoke at length with the fishers who first created the marine sanctuary.',
      'The coverage was immediate and global. Images of the King speaking with Kilifi\'s fishing communities reached audiences around the world, bringing unprecedented attention to the Kuruwitu model and to Kenya\'s ocean conservation leadership more broadly.',
      'For Oceans Alive, the visit was significant not just symbolically but practically. In the weeks that followed, inquiries from international conservation organisations, government ministries from seven countries, and potential funding partners increased dramatically. Several new partnerships — including a research collaboration with a UK university and a conservation film commission — trace their origins directly to the attention generated by the royal visit.',
      'But ask anyone in Kuruwitu what they remember most, and they are likely to tell you not about the cameras or the international coverage — but about the moment the King listened, genuinely listened, as the BMU chair explained why the reef matters to their children\'s future.',
    ],
    bodyImages: [
      { src: '/images/communities.jpg', alt: 'Community members at the royal visit', caption: 'Community members gathered at Kuruwitu to welcome His Majesty King Charles III.' },
      { src: '/images/oceansmen.jpg', alt: 'Conservation team presenting their work', caption: 'The Oceans Alive conservation team presented restoration results to the royal delegation.' },
    ],
    relatedSlugs: ['co-management-plan', 'iucn-2025', 'coral-restoration-journey'],
  },

  'world-ocean-day-2024': {
    heroImage: '/images/oceanday.jpg',
    heroImageAlt: 'World Ocean Day 2024 celebrations in Kilifi County',
    pullQuote: 'Twenty years ago we had almost nothing left. Today, we have a reef that is alive. That is what a community can do.',
    pullQuoteAttrib: 'Desmond Bowden, CEO, Oceans Alive Foundation',
    body: [
      'World Ocean Day 2024 was unlike any before it in Kilifi County. More than 800 community members, school students, government officials, and conservation partners came together at Kuruwitu to celebrate twenty years of coastal stewardship — and to look ahead at what the next twenty could bring.',
      'The day began before dawn with a community dive. Twelve certified reef gardeners descended together to the coral nurseries and the transplanted reef sections — the most experienced among them pausing over individual coral colonies they could remember planting five years ago, now large and branching, hosting small fish and invertebrates in their structure.',
      'On shore, school children performed conservation-themed performances, BMU representatives led guided walks of the reef flat, and researchers presented monitoring data showing the recovery of fish populations within the protected zone. A photographic exhibition documented two decades of change: bleached rubble becoming structured reef; depleted fishing grounds becoming managed marine areas.',
      'The centrepiece of the day was a community address that named each of the forty-plus certified divers by name, and the thousands of community members who had contributed to the programme through their governance participation, their restraint from destructive fishing, and their commitment to the co-management plan.',
      'As the sun set over the Indian Ocean, the message that emerged was not one of celebration alone — it was one of continuation. The reef is recovering. The community is united. The model is working. But the ocean still faces existential threats from climate change, from illegal fishing, from plastic pollution, from the relentless pressure of coastal development. The work of the next twenty years will be even more important than the work of the last.',
    ],
    bodyImages: [
      { src: '/images/communities.jpg', alt: 'Community gathering on World Ocean Day', caption: 'Over 800 community members gathered at Kuruwitu to mark twenty years of conservation.' },
      { src: '/images/kids.jpg', alt: 'School children celebrating Ocean Day', caption: 'School children from across Kilifi County participated in the World Ocean Day celebrations.' },
    ],
    relatedSlugs: ['coral-restoration-journey', 'youth-conservation', 'trash4cash-women'],
  },

  'rebuilding-fisheries': {
    heroImage: '/images/fisher.jpg',
    heroImageAlt: 'Kilifi fisherman with his catch from sustainable fishing areas',
    pullQuote: 'My grandfather told me the sea used to be full of fish. Now my children are growing up with that same sea again.',
    pullQuoteAttrib: 'Fisher, Kuruwitu BMU',
    body: [
      'When Oceans Alive began its work in Kilifi County in 2003, the fishing communities it partnered with described a crisis: fish catches had declined by more than 60% over two decades. Reef fish that had once supported entire families were absent from the catches. Fishers were travelling further and staying out longer to bring in less.',
      'The co-managed marine area at Kuruwitu was designed in part as a response to this crisis. By establishing no-take zones where fish can breed undisturbed and grow to maturity, the programme intended to rebuild fish populations that would then spill over into the surrounding fishing areas — providing fishers with larger, more sustainable catches without requiring them to travel as far.',
      'Twelve years of monitoring data now show that this strategy is working. Fish biomass within the protected zone has increased by an estimated 40% compared to baseline measurements. Species richness — the number of different species present — has increased significantly, including the return of large predatory fish that indicate a healthy, functioning ecosystem.',
      'Alongside the protected zone, Oceans Alive works with BMUs on gear transition programmes — supporting fishers to move away from destructive gear like beach seine nets and small-mesh gillnets toward more selective methods that allow juvenile fish to escape and breed. The programme provides training, connects fishers with suppliers of appropriate gear, and works with county fisheries officers to enforce regulations.',
      'The results are not just ecological. Fishers report higher prices for their catch because larger fish command premium rates. With more fish available closer to shore, fuel costs have fallen. The combination of ecological recovery and economic improvement is creating exactly the kind of virtuous cycle that makes community conservation self-sustaining.',
    ],
    bodyImages: [
      { src: '/images/BMUS.jpg', alt: 'BMU members discussing fisheries management', caption: 'BMU members review seasonal closure zones as part of the fisheries co-management programme.' },
      { src: '/images/man.jpg', alt: 'Community fisheries officer', caption: 'A community fisheries officer conducting a reef monitoring survey in the protected zone.' },
    ],
    relatedSlugs: ['co-management-plan', 'coral-restoration-journey', 'iucn-2025'],
  },

  'ocean-leaders': {
    heroImage: '/images/interns.jpg',
    heroImageAlt: 'International and Kenyan interns at the Kuruwitu conservation project',
    pullQuote: 'The best conservation training is not in a classroom — it is in the field, alongside the communities who own the outcome.',
    pullQuoteAttrib: 'Oceans Alive capacity building team',
    body: [
      'Each year, a cohort of aspiring conservation professionals — from Kenya and from around the world — arrives at Kuruwitu to learn what conservation looks like when it is done well. The Oceans Alive internship and capacity building programme is not an introductory experience. It is a deep immersion in community-led marine conservation at one of the most successful sites in the Western Indian Ocean.',
      'Interns work alongside community reef monitors, BMU governance teams, ocean education officers, and research scientists. They assist with coral monitoring surveys, participate in community meetings, support school education days, and contribute to the research and monitoring programme that provides the evidence base for the co-management plan.',
      'The programme prioritises Kenyan participants — particularly students from coastal counties who have direct connections to the communities and challenges that Oceans Alive addresses. Many alumni have gone on to work in conservation and fisheries management across East Africa, carrying the Kuruwitu model with them as a reference point for what community-led conservation can achieve.',
      'International interns contribute perspectives, skills, and networks that enrich the programme. Several have returned to their home countries to establish partnerships between their institutions and Oceans Alive, creating an ongoing exchange of knowledge and support that benefits both sides.',
      'The programme also runs a separate strand for Kenyan government officers — fisheries inspectors, county environmental officers, and national park rangers — who spend time at Kuruwitu to understand how co-management governance works in practice. For many, it is the first time they have seen community and government working as genuine partners rather than adversaries.',
    ],
    bodyImages: [
      { src: '/images/learning.jpg', alt: 'Intern training session on reef monitoring', caption: 'Interns receive training in coral reef monitoring techniques from experienced community divers.' },
      { src: '/images/Capacityassess.jpg', alt: 'Capacity assessment and training', caption: 'Participants in the capacity building programme complete a practical assessment in the field.' },
    ],
    relatedSlugs: ['youth-conservation', 'coral-restoration-journey', 'co-management-plan'],
  },

  'iucn-2025': {
    heroImage: '/images/kamakukijcma.jpg',
    heroImageAlt: 'Oceans Alive presenting the Kuruwitu model at the IUCN World Conservation Congress',
    pullQuote: 'Kuruwitu is not just a success story from Kenya. It is a blueprint for how the world can save its coastal oceans.',
    pullQuoteAttrib: 'IUCN session chair, 2025',
    body: [
      'At the 2025 IUCN World Conservation Congress — the world\'s largest conservation forum — Oceans Alive Foundation presented the Kuruwitu co-management model to an audience of scientists, policymakers, and civil society leaders from more than 160 countries. The presentation was one of the most attended sessions of the congress.',
      'The Kuruwitu model was presented as a case study in scaling: how a 30-hectare community sanctuary became a 120 km² nationally recognised marine governance zone; how a handful of committed fishers became a certified cadre of 40+ reef gardeners; how a local initiative became a nationally replicated framework under Kenya\'s new Fisheries Act.',
      'Delegates from the Western Indian Ocean region — including representatives from Tanzania, Mozambique, Madagascar, the Seychelles, and Comoros — attended a dedicated side event on translating the Kuruwitu approach to their own contexts. Oceans Alive facilitated a structured exchange between Kilifi community leaders and coastal fishing communities from three other countries, creating direct peer-to-peer learning that no amount of policy documentation could replicate.',
      'The congress also served as the occasion for the formal launch of a regional network of community-managed marine areas along the East African coast — an initiative that Oceans Alive has been supporting behind the scenes for three years. The network will share monitoring data, governance frameworks, and technical expertise across borders.',
      'For the Oceans Alive team, the IUCN congress was both a milestone and a reminder of the work still ahead. Climate change is accelerating coral bleaching events. Illegal, unreported, and unregulated fishing continues to undermine even the best community governance. Plastic pollution has not been solved. The world needs many more Kuruwitus — and it needs them soon.',
    ],
    bodyImages: [
      { src: '/images/oceansmen.jpg', alt: 'Oceans Alive team at international conservation events', caption: 'The Oceans Alive team represents Kenya\'s coastal communities on the international conservation stage.' },
    ],
    relatedSlugs: ['co-management-plan', 'coral-restoration-journey', 'rebuilding-fisheries'],
  },
};

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return STATIC_BLOG_STORIES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const story = STATIC_BLOG_STORIES.find((s) => s.slug === params.slug);
  if (!story) return { title: 'Story Not Found' };
  return { title: story.title, description: story.excerpt };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPost({ params }: { params: { slug: string } }) {
  const story = STATIC_BLOG_STORIES.find((s) => s.slug === params.slug);
  if (!story) notFound();

  const content = BLOG_CONTENT[params.slug];
  const related = content?.relatedSlugs
    ? STATIC_BLOG_STORIES.filter((s) => content.relatedSlugs.includes(s.slug))
    : STATIC_BLOG_STORIES.filter((s) => s.slug !== params.slug).slice(0, 3);

  if (!content) {
    const fallbackRelated = STATIC_BLOG_STORIES.filter((s) => s.slug !== params.slug).slice(0, 3);
    return <MinimalPost story={story} related={fallbackRelated} />;
  }

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative bg-ocean-midnight overflow-hidden" style={{ minHeight: '520px' }}>
        <Image
          src={content.heroImage}
          alt={content.heroImageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight via-ocean-midnight/75 to-ocean-midnight/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32 flex flex-col justify-end" style={{ minHeight: '520px' }}>
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-ocean-turquoise text-white px-3 py-1 rounded-full">
              {story.category}
            </span>
            <span className="text-white/40 text-xs">{story.date}</span>
            <span className="text-white/25">·</span>
            <span className="text-white/40 text-xs">{story.readTime}</span>
          </div>
          <h1 className="font-poppins font-bold text-white text-3xl md:text-5xl leading-tight mb-6 max-w-3xl">
            {story.title}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
            {story.excerpt}
          </p>
        </div>
      </section>

      {/* ── Article body ───────────────────────────────────── */}
      <article className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">

          {/* Stats pills */}
          {story.stats && (
            <div className="flex flex-wrap gap-2 mb-10">
              {story.stats.map((s) => (
                <span
                  key={s}
                  className="text-xs font-semibold bg-ocean-turquoise/10 text-ocean-turquoise px-3 py-1.5 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          {/* Body text */}
          <div className="prose prose-lg max-w-none">
            {content.body.map((paragraph, i) => (
              <div key={i}>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">{paragraph}</p>

                {/* Insert first photo after paragraph 1 */}
                {i === 1 && content.bodyImages[0] && (
                  <div className="my-10 -mx-6 md:-mx-12">
                    <div className="relative rounded-2xl overflow-hidden" style={{ height: '360px' }}>
                      <Image
                        src={content.bodyImages[0].src}
                        alt={content.bodyImages[0].alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-3 italic px-6 md:px-12">{content.bodyImages[0].caption}</p>
                  </div>
                )}

                {/* Pull quote after paragraph 2 */}
                {i === 2 && (
                  <blockquote className="my-10 pl-6 border-l-4 border-ocean-turquoise">
                    <p className="text-xl md:text-2xl font-poppins font-bold text-ocean-midnight leading-snug mb-3 italic">
                      "{content.pullQuote}"
                    </p>
                    <cite className="text-sm text-ocean-turquoise font-semibold not-italic">
                      — {content.pullQuoteAttrib}
                    </cite>
                  </blockquote>
                )}

                {/* Insert second photo after paragraph 3 */}
                {i === 3 && content.bodyImages[1] && (
                  <div className="my-10 -mx-6 md:-mx-12">
                    <div className="relative rounded-2xl overflow-hidden" style={{ height: '300px' }}>
                      <Image
                        src={content.bodyImages[1].src}
                        alt={content.bodyImages[1].alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-3 italic px-6 md:px-12">{content.bodyImages[1].caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* ── Impact box ─────────────────────────────────────── */}
      <section className="bg-ocean-midnight py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <p className="text-[9px] font-bold uppercase tracking-widest text-ocean-turquoise">Impact at a Glance</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {story.stats.map((s) => (
              <div key={s} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-white font-semibold text-sm">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related stories ────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-2">Continue Reading</p>
                <h2 className="text-2xl font-poppins font-bold text-ocean-midnight">Related Stories</h2>
              </div>
              <Link href="/blog" className="text-sm font-bold text-ocean-turquoise hover:text-ocean-midnight transition-colors">
                All stories →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-ocean-turquoise/20 transition-all duration-200 block"
                >
                  <span className="text-[10px] font-bold text-ocean-turquoise uppercase tracking-widest">{r.category}</span>
                  <h3 className="font-poppins font-bold text-ocean-midnight mt-2 mb-2 leading-snug group-hover:text-ocean-turquoise transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-4">{r.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-50 pt-3">
                    <span>{r.date}</span>
                    <span className="text-ocean-turquoise font-bold group-hover:translate-x-0.5 transition-transform inline-block">Read →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Back + CTA ─────────────────────────────────────── */}
      <section className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/blog" className="text-sm font-bold text-ocean-midnight hover:text-ocean-turquoise transition-colors flex items-center gap-2">
            ← Back to all stories
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="px-5 py-2.5 bg-ocean-turquoise text-white font-bold rounded-xl text-sm hover:bg-ocean-midnight transition-all duration-200"
            >
              Support This Work
            </Link>
            <Link
              href="/contact?type=Partnership"
              className="px-5 py-2.5 border border-gray-200 text-ocean-midnight font-semibold rounded-xl text-sm hover:border-ocean-turquoise hover:text-ocean-turquoise transition-all duration-200"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Minimal fallback (if content map entry missing) ─────────────────────────

function MinimalPost({
  story,
  related,
}: {
  story: (typeof STATIC_BLOG_STORIES)[0];
  related: typeof STATIC_BLOG_STORIES;
}) {
  return (
    <>
      <section className="bg-ocean-midnight py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-ocean-turquoise text-white px-3 py-1 rounded-full">
              {story.category}
            </span>
            <span className="text-white/40 text-xs">{story.date} · {story.readTime}</span>
          </div>
          <h1 className="font-poppins font-bold text-white text-3xl md:text-5xl leading-tight mb-6">{story.title}</h1>
          <p className="text-white/70 text-lg leading-relaxed">{story.excerpt}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-8">
            {story.stats.map((s) => (
              <span key={s} className="text-xs font-semibold bg-ocean-turquoise/10 text-ocean-turquoise px-3 py-1.5 rounded-full">{s}</span>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">{story.excerpt}</p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-white py-12 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-poppins font-bold text-ocean-midnight mb-8">Related Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all block">
                  <span className="text-[10px] font-bold text-ocean-turquoise uppercase tracking-widest">{r.category}</span>
                  <h3 className="font-poppins font-bold text-ocean-midnight mt-2 mb-2 group-hover:text-ocean-turquoise transition-colors">{r.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-gray-50 py-10 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link href="/blog" className="text-sm font-bold text-ocean-midnight hover:text-ocean-turquoise transition-colors">← Back to stories</Link>
          <Link href="/donate" className="px-5 py-2.5 bg-ocean-turquoise text-white font-bold rounded-xl text-sm hover:bg-ocean-midnight transition-all">Support This Work</Link>
        </div>
      </section>
    </>
  );
}
