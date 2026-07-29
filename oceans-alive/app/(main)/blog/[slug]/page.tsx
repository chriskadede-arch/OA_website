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
    pullQuote: 'The reef is not just recovering - it is growing. We see fish we haven\'t seen in twenty years.',
    pullQuoteAttrib: 'Community diver, Kuruwitu',
    body: [
      'In 2019, Oceans Alive Foundation partnered with Coral Guardian International to begin Kenya\'s most ambitious community-led coral restoration programme. What started with a handful of trained fishers and a single underwater nursery has grown into a programme that has placed over 24,800 coral colonies back onto Kilifi\'s degraded reefs.',
      'The methodology is deceptively simple: fragment healthy coral, grow it in underwater nurseries for three to six months until it is strong enough to transplant, then carefully attach it to dead or dying reef structures using stainless steel nails and hydraulic cement. The complexity is in the detail - choosing the right coral species for each microenvironment, monitoring for disease and bleaching, managing nursery predators, and training community members to do all of this safely and precisely.',
      'The programme\'s 85% coral survival rate - measured from nursery to one year post-transplant - places it well above the global average of around 50-60%. Researchers attribute this success to two factors: the use of locally-sourced coral fragments that are already adapted to Kilifi\'s specific water conditions, and the deep investment of the community divers who tend to the nurseries with the same care that farmers give to crops.',
      'Today, over 40 community members are trained and certified reef gardeners. Many of them were fishers who once relied on dynamite fishing or walked across coral flats to gather invertebrates. Now they are the reef\'s most committed protectors - because their identity, their income, and their pride are tied to its recovery.',
      'The ecological results are becoming undeniable. Fish biomass within the Kuruwitu protected area has increased by an estimated 40% since the programme began. Species not seen in decades - including several grouper species and the critically endangered bumphead parrotfish - have been documented returning to the restored zones.',
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
      'Every month, more than two tonnes of plastic waste are collected from the beaches, mangroves, and waterways of Kilifi County by a network of over 80 women. They sort it, weigh it, and sell it to recycling partners - earning a reliable income while protecting the coastline that their communities depend on.',
      'Trash4Cash began as a simple idea: pay community members for the plastic they collect. What Oceans Alive discovered quickly was that women - who often bear the burden of managing waste in their households and communities - were by far the most organised and committed collectors. The programme was redesigned around their leadership.',
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
      'For a generation of children growing up along Kenya\'s coast, the ocean has always been there - but it has not always been understood. Oceans Alive Foundation\'s ocean education programme has reached over 2,500 students across Kilifi County with hands-on marine conservation learning that turns curiosity into commitment.',
      'The programme runs in partnership with local primary and secondary schools. Students visit the Kuruwitu marine sanctuary for field days that include snorkelling in the protected zone, coral identification sessions, and meetings with the community divers who maintain the reef restoration nurseries. Many children are meeting a coral reef in person for the first time.',
      'Back in the classroom, teachers trained by Oceans Alive run a curriculum that covers marine biodiversity, the causes and effects of reef degradation, the science of coral reproduction, and the role of community governance in protecting marine resources. The curriculum is designed to be practical, local, and linked to the lives the children already live.',
      'The results are visible in the community. Children who went through the programme three or four years ago are now secondary school students who volunteer at clean-up events, challenge peers who damage the reef, and - in several cases - have gone on to study environmental science. Some are now interning with the research and monitoring team.',
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
      'In January 2022, Oceans Alive Foundation achieved something that had never been done before in Kenya: the delivery of the country\'s first formal ocean co-management plan under the new Kenya Fisheries Act. The plan placed 150 km² of ocean - expanded from the original 30-hectare Kuruwitu sanctuary - under community-led governance.',
      'The journey to this moment took nearly two decades. It began in 2003 when Des Bowden responded to fishers whose livelihoods were collapsing. It moved through the establishment of the Kuruwitu Conservation and Welfare Association, the creation of Kenya\'s first permanent marine sanctuary, and years of relationship-building with government fisheries officers, county administrators, and national policymakers.',
      'The co-management plan defines fishing zones, seasonal closures, gear restrictions, and community governance structures across the entire Kuruwitu Joint Community Marine Area. It is legally enforceable, recognised by the county and national government, and - crucially - owned and administered by the fishing communities themselves through their Beach Management Units.',
      'The BMU network that administers the plan represents thousands of registered fishers across multiple villages. Monthly meetings address compliance issues, maintenance of the monitoring programme, and reinvestment of sanctuary dividends back into community development. The governance model has been studied by policymakers from Uganda, Tanzania, and Mozambique as a blueprint for marine governance in the Western Indian Ocean region.',
      'For the communities involved, the plan represents something deeper than policy. It is the formalisation of a relationship between people and the sea that has sustained coastal Kilifi for generations - and a commitment to sustain it for generations to come.',
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
    pullQuote: 'What you have built here - the partnership between people and their ocean - is exactly what the world needs more of.',
    pullQuoteAttrib: 'His Majesty King Charles III, Kuruwitu, 2023',
    body: [
      'In 2023, His Majesty King Charles III visited the Kuruwitu conservation project during his official visit to Kenya. For the community members who had spent two decades building what he came to see, it was a moment of extraordinary validation.',
      'The King was brought to Kuruwitu as part of a programme designed to showcase Kenya\'s leadership in community-based conservation. He met with community divers, BMU representatives, women from the Trash4Cash programme, and the young students who had been through the ocean education curriculum. He snorkelled over the restored reef section and spoke at length with the fishers who first created the marine sanctuary.',
      'The coverage was immediate and global. Images of the King speaking with Kilifi\'s fishing communities reached audiences around the world, bringing unprecedented attention to the Kuruwitu model and to Kenya\'s ocean conservation leadership more broadly.',
      'For Oceans Alive, the visit was significant not just symbolically but practically. In the weeks that followed, inquiries from international conservation organisations, government ministries from seven countries, and potential funding partners increased dramatically. Several new partnerships - including a research collaboration with a UK university and a conservation film commission - trace their origins directly to the attention generated by the royal visit.',
      'But ask anyone in Kuruwitu what they remember most, and they are likely to tell you not about the cameras or the international coverage - but about the moment the King listened, genuinely listened, as the BMU chair explained why the reef matters to their children\'s future.',
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
    pullQuoteAttrib: 'Des Bowden, CEO, Oceans Alive Foundation',
    body: [
      'World Ocean Day 2024 was unlike any before it in Kilifi County. More than 800 community members, school students, government officials, and conservation partners came together at Kuruwitu to celebrate twenty years of coastal stewardship - and to look ahead at what the next twenty could bring.',
      'The day began before dawn with a community dive. Twelve certified reef gardeners descended together to the coral nurseries and the transplanted reef sections - the most experienced among them pausing over individual coral colonies they could remember planting five years ago, now large and branching, hosting small fish and invertebrates in their structure.',
      'On shore, school children performed conservation-themed performances, BMU representatives led guided walks of the reef flat, and researchers presented monitoring data showing the recovery of fish populations within the protected zone. A photographic exhibition documented two decades of change: bleached rubble becoming structured reef; depleted fishing grounds becoming managed marine areas.',
      'The centrepiece of the day was a community address that named each of the forty-plus certified divers by name, and the thousands of community members who had contributed to the programme through their governance participation, their restraint from destructive fishing, and their commitment to the co-management plan.',
      'As the sun set over the Indian Ocean, the message that emerged was not one of celebration alone - it was one of continuation. The reef is recovering. The community is united. The model is working. But the ocean still faces existential threats from climate change, from illegal fishing, from plastic pollution, from the relentless pressure of coastal development. The work of the next twenty years will be even more important than the work of the last.',
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
      'The co-managed marine area at Kuruwitu was designed in part as a response to this crisis. By establishing no-take zones where fish can breed undisturbed and grow to maturity, the programme intended to rebuild fish populations that would then spill over into the surrounding fishing areas - providing fishers with larger, more sustainable catches without requiring them to travel as far.',
      'Twelve years of monitoring data now show that this strategy is working. Fish biomass within the protected zone has increased by an estimated 40% compared to baseline measurements. Species richness - the number of different species present - has increased significantly, including the return of large predatory fish that indicate a healthy, functioning ecosystem.',
      'Alongside the protected zone, Oceans Alive works with BMUs on gear transition programmes - supporting fishers to move away from destructive gear like beach seine nets and small-mesh gillnets toward more selective methods that allow juvenile fish to escape and breed. The programme provides training, connects fishers with suppliers of appropriate gear, and works with county fisheries officers to enforce regulations.',
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
    pullQuote: 'The best conservation training is not in a classroom - it is in the field, alongside the communities who own the outcome.',
    pullQuoteAttrib: 'Oceans Alive capacity building team',
    body: [
      'Each year, a cohort of aspiring conservation professionals - from Kenya and from around the world - arrives at Kuruwitu to learn what conservation looks like when it is done well. The Oceans Alive internship and capacity building programme is not an introductory experience. It is a deep immersion in community-led marine conservation at one of the most successful sites in the Western Indian Ocean.',
      'Interns work alongside community reef monitors, BMU governance teams, ocean education officers, and research scientists. They assist with coral monitoring surveys, participate in community meetings, support school education days, and contribute to the research and monitoring programme that provides the evidence base for the co-management plan.',
      'The programme prioritises Kenyan participants - particularly students from coastal counties who have direct connections to the communities and challenges that Oceans Alive addresses. Many alumni have gone on to work in conservation and fisheries management across East Africa, carrying the Kuruwitu model with them as a reference point for what community-led conservation can achieve.',
      'International interns contribute perspectives, skills, and networks that enrich the programme. Several have returned to their home countries to establish partnerships between their institutions and Oceans Alive, creating an ongoing exchange of knowledge and support that benefits both sides.',
      'The programme also runs a separate strand for Kenyan government officers - fisheries inspectors, county environmental officers, and national park rangers - who spend time at Kuruwitu to understand how co-management governance works in practice. For many, it is the first time they have seen community and government working as genuine partners rather than adversaries.',
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
      'At the 2025 IUCN World Conservation Congress - the world\'s largest conservation forum - Oceans Alive Foundation presented the Kuruwitu co-management model to an audience of scientists, policymakers, and civil society leaders from more than 160 countries. The presentation was one of the most attended sessions of the congress.',
      'The Kuruwitu model was presented as a case study in scaling: how a 30-hectare community sanctuary became a 120 km² nationally recognised marine governance zone; how a handful of committed fishers became a certified cadre of 40+ reef gardeners; how a local initiative became a nationally replicated framework under Kenya\'s new Fisheries Act.',
      'Delegates from the Western Indian Ocean region - including representatives from Tanzania, Mozambique, Madagascar, the Seychelles, and Comoros - attended a dedicated side event on translating the Kuruwitu approach to their own contexts. Oceans Alive facilitated a structured exchange between Kilifi community leaders and coastal fishing communities from three other countries, creating direct peer-to-peer learning that no amount of policy documentation could replicate.',
      'The congress also served as the occasion for the formal launch of a regional network of community-managed marine areas along the East African coast - an initiative that Oceans Alive has been supporting behind the scenes for three years. The network will share monitoring data, governance frameworks, and technical expertise across borders.',
      'For the Oceans Alive team, the IUCN congress was both a milestone and a reminder of the work still ahead. Climate change is accelerating coral bleaching events. Illegal, unreported, and unregulated fishing continues to undermine even the best community governance. Plastic pollution has not been solved. The world needs many more Kuruwitus - and it needs them soon.',
    ],
    bodyImages: [
      { src: '/images/oceansmen.jpg', alt: 'Oceans Alive team at international conservation events', caption: 'The Oceans Alive team represents Kenya\'s coastal communities on the international conservation stage.' },
    ],
    relatedSlugs: ['co-management-plan', 'coral-restoration-journey', 'rebuilding-fisheries'],
  },

  // ── Impact Stories ─────────────────────────────────────────────────────────

  'kuruwitu-comeback': {
    heroImage: '/images/oceanculturelife.jpg',
    heroImageAlt: 'The Kuruwitu reef, now teeming with life after two decades of community protection',
    pullQuote: 'Twenty years ago I could walk across that reef and see nothing. No fish, no colour. Now I go underwater and I cry - because it is alive again.',
    pullQuoteAttrib: 'Community elder, Kuruwitu Village',
    body: [
      'Stand at the edge of the Kuruwitu reef flat at low tide and look out. The water is so clear you can read the colour of the coral from shore. There are parrotfish grazing in water barely deep enough to cover them. A white-spotted grouper pauses in the shadow of a brain coral, then drifts lazily into the blue. Two decades ago, this scene was impossible. The reef was rubble.',
      'In the early 2000s, Kilifi\'s fishing communities were in crisis. Dynamite fishing had shattered the reef structure. Over-harvesting with illegal beach seine nets had stripped the water column of fish that communities had relied on for generations. Fishers were travelling thirty kilometres offshore to catch what their grandfathers had found twenty metres from shore. The economics of fishing were breaking down, and with them, a way of life.',
      'It was in this context that a British marine conservationist named Des Bowden sat down with the fishermen of Kuruwitu village and asked a simple, radical question: what would it take for you to stop fishing one section of the reef permanently? The answer - which emerged from dozens of meetings over months - required trust, governance, and a shared belief that sacrifice today would mean abundance tomorrow.',
      'What followed was the establishment of Kenya\'s first community-managed no-take zone: a 30-hectare permanent sanctuary created not by government decree but by the voluntary decision of the fishing community that depended on it. Over the next fifteen years, that sanctuary grew - not just in area, but in proof. Fish populations within the zone increased by an order of magnitude. Species returned that had been absent for decades.',
      'By 2022, the numbers were undeniable. Fish biomass within the co-managed zone had increased by more than 400% compared to baseline measurements from 2003. The spillover effect into adjacent fishing areas was real and measurable. Fishers who gave up twenty metres of reef twenty years ago were now catching more fish, more reliably, than at any point in living memory. The 25,000 coral colonies planted since 2019 by certified community reef gardeners accelerated the recovery, closing the loop between coral restoration and fisheries in a way rarely achieved in conservation practice.',
      'The Kuruwitu model has been recognised by the IUCN World Conservation Congress as a blueprint for marine governance across the Western Indian Ocean. But for the fishers who sat in those early meetings - who made the decision to protect, and kept it - it is simpler than that. It is their reef. They brought it back. And their children will inherit an ocean that is alive.',
    ],
    bodyImages: [
      { src: '/images/divers.jpg', alt: 'Community divers at the Kuruwitu reef restoration site', caption: 'Certified community divers tend to coral nurseries at Kuruwitu - the same fishers who first created the marine sanctuary in 2003.' },
      { src: '/images/BMUS.jpg', alt: 'BMU governance meeting', caption: 'The Beach Management Unit that administers the co-management plan meets monthly to review compliance data and plan the reef\'s future.' },
    ],
    relatedSlugs: ['coral-restoration-journey', 'co-management-plan', 'iucn-2025'],
  },

  'mothers-choice-trash4cash': {
    heroImage: '/images/trashforcash3.jpg',
    heroImageAlt: 'Fatuma and her collection group weigh plastic at a Trash4Cash point in Kilifi',
    pullQuote: 'My husband used to decide everything about money in our house. Now I run a team of fourteen women and I decide our futures.',
    pullQuoteAttrib: 'Fatuma Hamisi, Trash4Cash group leader, Kilifi North',
    body: [
      'Fatuma Hamisi grew up watching the tide carry plastic onto the beach outside her door. She understood it was wrong the way you understand rain is wet - as a fact of life, not a solvable problem. She was twenty-six when an Oceans Alive community worker asked if she wanted to be paid to collect it.',
      'That was three years ago. Today, Fatuma manages a collection group of fourteen women who together gather, sort, and sell more plastic than any other group on Kilifi\'s northern coast. She tracks their collection data on a phone she bought herself. She negotiates directly with the recycling buyer from Mombasa. She runs a savings scheme that has helped four members of her group pay secondary school fees they could not otherwise afford.',
      'The Trash4Cash programme\'s environmental impact is easy to quantify: more than two tonnes of plastic removed from the coastal environment each month; cleaner beaches; fewer plastic-choked mangrove roots; fewer entanglements in fishing gear. The fishers who work near the collection areas notice the difference. The mangrove forest that lines part of Kilifi Creek, once visibly degraded by plastic accumulation, is recovering.',
      'But the programme\'s human impact is harder to put in a press release. It shows up in the way Fatuma describes making decisions. In the way her daughter, who is twelve, announced last month that she wants to study marine biology. In the savings books group members pull out at monthly meetings, tracking contributions that are building toward futures that plastic collection alone did not purchase - but made possible.',
      'Oceans Alive designed Trash4Cash around the insight that women in coastal communities are the primary managers of household waste, and that they have the networks, the organisational capacity, and the motivation to run collection operations efficiently. What the programme provided was infrastructure: a guaranteed buyer, a fair price, basic equipment, and the legitimacy of a formal employer-employee relationship. In communities where it operates, women\'s incomes have increased by an average of 40%.',
    ],
    bodyImages: [
      { src: '/images/trashforcash2.jpg', alt: 'Women sorting and weighing plastic', caption: 'Trash4Cash participants sort collected plastic by type at a collection point - precision work that maximises the value of every kilogram sold to recycling partners.' },
      { src: '/images/womenlearning2.jpg', alt: 'Women in financial literacy training', caption: 'Financial literacy training alongside the environmental programme has helped group members convert Trash4Cash income into long-term household savings.' },
    ],
    relatedSlugs: ['trash4cash-women', 'kuruwitu-comeback', 'lift-network-eco-market'],
  },

  'reef-gardener-journal': {
    heroImage: '/images/man.jpg',
    heroImageAlt: 'Katana Ngala, coral restoration technician, preparing for a morning dive at Kuruwitu',
    pullQuote: 'I know every nursery frame by touch. I know which corals are growing fast, which ones need watching. They are not just corals to me. I planted them.',
    pullQuoteAttrib: 'Katana Ngala, Coral Restoration Technician, Oceans Alive Foundation',
    body: [
      'Katana Ngala is in the water before the sun is. On most mornings, he is the first person at the reef - checking the nursery frames before the visibility has fully improved, running his hands along the wire structures where hundreds of coral fragments grow on their way to becoming transplantable colonies. He can tell, by the way a coral feels and by its colour in the first grey light of the Indian Ocean morning, whether it has had a good week.',
      'Katana grew up in Kilifi. As a young man, he fished - sometimes legally, sometimes in ways he now describes with a slight wince. He knew the reef was declining. Everyone knew. He just did not know what to do about it. When the coral restoration programme launched in 2019, he applied for training without being entirely sure what he was signing up for.',
      'What he signed up for was becoming, over the next five years, one of East Africa\'s most skilled reef restoration practitioners. He has been trained in coral fragment harvesting, underwater nursery management, transplantation using stainless steel fixings and hydraulic cement, predator management, bleaching monitoring, and species identification. He has attended workshops in Madagascar and Mozambique. He has trained 40 other community members himself.',
      'The programme\'s 85% coral survival rate - measured from nursery to twelve months post-transplant - is in large part a reflection of Katana\'s standards. He rejects fragments that do not look healthy enough. He moves corals that are in poor positions. He adjusts nursery depth when seasonal temperatures threaten to stress growing fragments. Conservation science happens in the university; the actual outcome happens with people like Katana in the water, making decisions in real time.',
      'Ask him what the best moment of his career has been, and he does not hesitate. "There is a section of reef near the south nursery where we transplanted our first corals in 2019," he says. "Last month I dived there and counted forty-seven species of fish. In 2019, there were almost none. I did that. The community did that. That is the best feeling I have ever had."',
    ],
    bodyImages: [
      { src: '/images/oceansmen.jpg', alt: 'Reef gardening team preparing equipment before a dive', caption: 'The Kuruwitu reef gardening team checks equipment before a morning restoration dive - a ritual that has taken place almost every working day since 2019.' },
      { src: '/images/coralteaching.jpg', alt: 'Katana training new community divers', caption: 'Katana leads coral identification and handling training for new reef gardeners, passing on skills learned from Coral Guardian experts.' },
    ],
    relatedSlugs: ['coral-restoration-journey', 'kuruwitu-comeback', 'rebuilding-fisheries'],
  },

  // ── Community News ─────────────────────────────────────────────────────────

  'bmu-new-leadership-2025': {
    heroImage: '/images/BMUmeeting.jpg',
    heroImageAlt: 'The newly elected Kuruwitu BMU leadership committee at their first meeting of 2025',
    pullQuote: 'We are not here to maintain what exists. We are here to build what has never existed before - ocean governance that truly belongs to the people who live by the sea.',
    pullQuoteAttrib: 'Newly elected BMU chair, Kuruwitu, January 2025',
    body: [
      'In January 2025, the Kuruwitu Beach Management Unit - one of Kenya\'s most closely watched community marine governance bodies - held its biennial leadership election. What might have seemed like a routine administrative exercise was, in practice, something more significant: a test of whether a governance model built over twenty years could survive the most basic challenge facing any institution - the peaceful transfer of power.',
      'It passed. The election was organised and administered entirely by the BMU itself, overseen by an elected oversight committee. Three candidates stood for the chair position. There was debate, there was canvassing, and there was a result that all three candidates accepted. The outgoing chair, who has served since 2021, gave a speech that community members present described as one of the most moving they had heard - a final accounting of what four years of governance had achieved and what remained undone.',
      'The new leadership has set out an agenda that is ambitious by any standard. First priority: the launch of a digital reef monitoring platform that will allow community members, researchers, and government officers to access fish biomass data, coral cover assessments, and enforcement logs in real time via a mobile app. The platform is being developed in partnership with a Nairobi-based conservation technology startup.',
      'Second priority: an application to extend the co-management zone by a further 15 km² to the north, incorporating a reef system that has been unprotected for two decades and that community surveys suggest has significant recovery potential. The application is before Kenya\'s Marine Fisheries Research Institute for technical assessment, with a decision expected before the end of 2025.',
      'For Oceans Alive, the election and the new leadership agenda represent something important: the co-management model is not dependent on any single individual, any single partner organisation, or any single funding cycle. It is self-perpetuating. The community owns it, elects it, and drives it forward. That was always the goal.',
    ],
    bodyImages: [
      { src: '/images/BMUS.jpg', alt: 'BMU members in governance session', caption: 'Elected BMU representatives from across Kilifi County review the proposed co-management zone extension during the first committee meeting of 2025.' },
      { src: '/images/kamakukijcma.jpg', alt: 'The JCMA governance framework', caption: 'The JCMA governance framework underpins the BMU mandate - displayed at the Kuruwitu community resource centre as a reminder of what the community signed into law.' },
    ],
    relatedSlugs: ['co-management-plan', 'rebuilding-fisheries', 'kuruwitu-comeback'],
  },

  'community-voices-ocean': {
    heroImage: '/images/communities.jpg',
    heroImageAlt: 'Residents of Kilifi\'s coastal communities at the annual marine conservation gathering',
    pullQuote: 'The ocean does not belong to me. I belong to it. Every decision I make is about whether my grandchildren will still be able to say the same.',
    pullQuoteAttrib: 'Elder fisherwoman, Vipingo village',
    body: [
      'Every conservation programme has numbers. Oceans Alive has some of the best: 25,000 coral colonies, 400% fish recovery, 150 km² under management. But numbers exist at a distance. They don\'t tell you why a fisherman wept the first time he saw a bumphead parrotfish return to the reef he had protected for fifteen years. They don\'t capture what it means to a fourteen-year-old girl when she snorkels in her community\'s protected zone and sees a reef she didn\'t know was possible.',
      'We spent three weeks travelling the Kilifi coastline - from Kuruwitu to Watamu to Vipingo - and asking residents, unscripted, what the ocean means to them. Fifteen people sat with us. They spoke in Swahili, in Giriama, in English, and in combinations of all three. This is what they said.',
      'Mohammed, 67, retired fisherman, Kuruwitu: "My father taught me to fish on this reef. His father taught him. But when I was your age, the fish were leaving. I was afraid that when my sons grew up, there would be nothing left. Now I take my grandchildren to the protected zone and I show them what a reef is supposed to look like. I did not think I would live to see this."',
      'Amina, 34, Trash4Cash group leader, Watamu: "The ocean gives us food. The ocean gives us income. When we clean the beach, we are not doing it for the tourists - we are doing it for ourselves. A dirty ocean is a dying ocean, and a dying ocean means our children go hungry. It is that simple." And James, 29, youth volunteer: "I used to think conservation was for rich people. Oceans Alive showed me that the most important conservation happens in the communities where people actually live by the sea. That changed everything."',
      'What strikes you, spending time with these communities, is how little daylight there is between practical survival and principled stewardship. Nobody here is protecting the ocean out of abstract concern. They are protecting it because it is the ground beneath their feet - the source of their food, their income, their identity, and their children\'s futures. Conservation that ignores this is conservation that will fail.',
    ],
    bodyImages: [
      { src: '/images/oceanculturelife.jpg', alt: 'Ocean culture and community life on the coast', caption: 'Coastal community life in Kilifi is inseparable from the ocean - from daily fishing rhythms to weekly BMU governance meetings.' },
      { src: '/images/farmernaction.jpg', alt: 'Community members in resource use mapping', caption: 'Community members participate in a resource mapping exercise - keeping the co-management plan grounded in local knowledge that no outsider could supply.' },
    ],
    relatedSlugs: ['bmu-new-leadership-2025', 'kuruwitu-comeback', 'trash4cash-women'],
  },

  'lift-network-eco-market': {
    heroImage: '/images/womenlearning2.jpg',
    heroImageAlt: 'LIFT Network women at the launch of Kilifi\'s first eco-enterprise market in Watamu',
    pullQuote: 'We were told we needed support. What we actually needed was a market. And when we built the market ourselves, that\'s when everything changed.',
    pullQuoteAttrib: 'LIFT Network member, Watamu',
    body: [
      'On a bright Saturday morning in February 2025, fifteen women from the LIFT Network opened what they call Soko la Bahari - the Sea Market - in Watamu. The name is deliberate. These are not products shipped from Nairobi, not generic handicrafts sourced at wholesale. They are hand-dyed fabrics using natural coastal plant pigments, handwoven fish traps repurposed as decorative pieces, sustainably harvested seaweed snacks, and jewellery made from ethically collected shells.',
      'Every item on sale has a story, and the women selling them know it. That is the point. The LIFT Network - Livelihood, Independence, and Financial Transformation - was designed by Oceans Alive not as a handout programme but as a pathway to genuine economic independence. The eco-enterprise market is the most visible expression yet of what that pathway looks like when women travel it fully.',
      'The market did not happen overnight. LIFT Network members went through twelve months of business development training, product design workshops, sustainable materials sourcing guidance, and marketing skills development. They formed a cooperative governance structure, elected officers, and opened a joint bank account. The Saturday market is the commercial outlet for everything they built.',
      'On opening day, the market attracted more than 200 visitors - conservation tourists, hotel guests from the Watamu resort strip, and local residents who heard about it through community radio. By midday, several products had sold out. The women improvised a WhatsApp order system on the spot, which is now their primary sales channel for repeat customers from Nairobi and abroad.',
      'For Oceans Alive, the LIFT Network eco-market demonstrates that conservation impact and economic independence are not competing goals - they reinforce each other. Women who earn independent income from sustainable products have a direct stake in the health of the coastal environment their products come from. The ocean\'s recovery and the community\'s prosperity are, at last, moving in the same direction.',
    ],
    bodyImages: [
      { src: '/images/womenlearning.jpg', alt: 'LIFT Network business training session', caption: 'LIFT Network members attended twelve months of business development training before the eco-market launched - building governance structures as well as products.' },
      { src: '/images/trashforcash3.jpg', alt: 'Women\'s economic activities along the Kilifi coast', caption: 'The LIFT Network builds on the economic foundation established by Trash4Cash - connecting environmental action directly to women\'s financial independence.' },
    ],
    relatedSlugs: ['trash4cash-women', 'mothers-choice-trash4cash', 'community-voices-ocean'],
  },

  // ── Latest Updates ─────────────────────────────────────────────────────────

  'annual-report-2024': {
    heroImage: '/images/kamakukijcma.jpg',
    heroImageAlt: 'Oceans Alive Foundation team and community partners at the 2024 annual review',
    pullQuote: '2024 was not the year we scaled. It was the year we proved we could scale without losing the thing that makes us work: the community.',
    pullQuoteAttrib: 'Des Bowden, Director & CEO, Oceans Alive Foundation',
    body: [
      'Annual reports are usually written backward - from outcomes to inputs, from impact to effort, from the headline numbers to the human stories underneath them. This one starts differently. It starts with a question: what did 2024 feel like?',
      'It felt like arrival. Not in the sense that the work is done - it is not, and may never be, and that is the nature of conservation work in a world of accelerating climate change. But 2024 was the year when several long-running efforts converged into something bigger than their parts. The coral restoration programme passed 25,000 colonies planted. The co-management zone registered its first full year of formal governance data - and the data showed what the fishers already knew: the fish are coming back. And the IUCN World Conservation Congress, held in 2025, was shaped by months of preparation that defined much of 2024.',
      'The numbers tell part of the story. 25,000 coral colonies planted with an 85% survival rate that exceeds most comparable programmes globally. 150 km² under formal community co-management. 120 women employed in Trash4Cash, removing 2+ tonnes of plastic monthly. 2,500+ students reached through ocean education. 14 active programmes spanning ecosystem restoration, fisheries governance, livelihoods, education, health, and media.',
      'But the numbers that matter most are harder to quantify. The moment when a BMU chair said, in a governance meeting attended by county and national government officials, "this is our ocean and we will govern it." The daughter of a Trash4Cash participant who announced she wants to study marine biology. The 67-year-old fisherman who, for the first time in his adult life, saw a bumphead parrotfish on the Kuruwitu reef.',
      'In 2025 and beyond, Oceans Alive will expand the co-management zone, launch the digital reef monitoring platform, open the Watamu Youth Marine Education Centre, and continue making the case that community-led conservation is not a compromise between human development and ecological recovery - it is the only model that achieves both. The annual report is available to download from our resources page.',
    ],
    bodyImages: [
      { src: '/images/oceanday.jpg', alt: 'World Ocean Day 2024 community gathering', caption: 'Over 800 community members gathered at Kuruwitu for World Ocean Day 2024 - the single largest conservation event in Kilifi\'s history.' },
      { src: '/images/Capacityassess.jpg', alt: 'Annual programme review and capacity assessment', caption: 'Staff and community partners in the annual programme review - a process that drives adaptation and evidence-based planning across all 14 programmes.' },
    ],
    relatedSlugs: ['iucn-2025', 'world-ocean-day-2025', 'kuruwitu-comeback'],
  },

  'world-ocean-day-2025': {
    heroImage: '/images/oceanday.jpg',
    heroImageAlt: 'Dawn preparations for World Ocean Day celebrations at Kuruwitu reef',
    pullQuote: 'Every year Ocean Day gets bigger. This year, the reef itself will be the centrepiece. We want everyone in Kilifi to touch it and understand what they are protecting.',
    pullQuoteAttrib: 'Tilda Bowden, Education Director, Oceans Alive Foundation',
    body: [
      'On June 8th, 2025 - World Ocean Day - the Indian Ocean will be the main stage, and everyone in Kilifi County is invited.',
      'This year\'s celebration is the most ambitious Oceans Alive has hosted. It begins at 6 AM with a community reef walk at low tide - guided by trained community educators, open to all ages, no experience required. At 8 AM, twelve certified community divers will descend to the coral nurseries and transplanted reef sections for a simultaneous restoration dive, with underwater cameras broadcasting live to a screen on the beach. Children can watch the reef gardeners at work in real time.',
      'At 10 AM, we will officially open the Watamu Youth Marine Education Centre - a permanent facility that will host school groups, youth conservation training, citizen science workshops, and international research collaborations year-round. The centre has been two years in planning and represents the most significant investment Oceans Alive has made in ocean education infrastructure to date.',
      'The afternoon programme includes a live music stage featuring coastal Kenya artists, a community conservation market hosted by the LIFT Network, interactive species identification workshops, and the public launch of the OAF Reef Monitor app - a citizen science platform allowing registered community members to log reef observations, report violations, and track fish populations from their phones.',
      'There will be food, music, and children snorkelling for the first time. But at the centre of all of it will be the reef itself - the same reef that was rubble twenty years ago and is now one of the most closely studied and genuinely recovering coral ecosystems in the Western Indian Ocean. All events are free. To receive programme updates and register for the guided reef walk, contact us through the website or WhatsApp.',
    ],
    bodyImages: [
      { src: '/images/kids.jpg', alt: 'Children at a previous World Ocean Day celebration', caption: 'School groups from across Kilifi County attend World Ocean Day at Kuruwitu each year - many children experiencing the reef for the very first time.' },
      { src: '/images/learning.jpg', alt: 'Ocean education activities at the Kuruwitu sanctuary', caption: 'Hands-on learning drives every Oceans Alive education event. The new Watamu centre will allow this to happen year-round, for thousands more children.' },
    ],
    relatedSlugs: ['annual-report-2024', 'youth-conservation', 'world-ocean-day-2024'],
  },

  'volunteer-coral-survey-2025': {
    heroImage: '/images/learning.jpg',
    heroImageAlt: 'Volunteer trainees at the Kuruwitu coral monitoring and survey training programme',
    pullQuote: 'The best volunteers are not always the ones with the most experience. They are the ones who can be genuinely useful within six days - and never stop wanting to know what is down there.',
    pullQuoteAttrib: 'Coral survey coordinator, Oceans Alive Foundation',
    body: [
      'We are looking for twenty people who want to do something real. Not symbolic conservation tourism, not photo opportunities - real work. Joining Oceans Alive\'s Q3 2025 coral survey team means spending six days learning a scientifically rigorous reef monitoring methodology and then putting it to use on one of East Africa\'s most closely monitored marine ecosystems.',
      'The coral monitoring survey is conducted every quarter at Kuruwitu. Trained teams use point intercept transect methodology to assess live coral cover, dead coral, algae cover, and substrate composition across permanent monitoring sites. Fish biomass surveys run alongside, using underwater visual census techniques. The data collected feeds directly into the annual monitoring report underpinning the BMU\'s co-management plan and Kenya Fisheries Service compliance assessments.',
      'This is not a beginners\' snorkelling holiday. It is volunteer-powered science. But no prior marine biology experience is required - what is required is the ability to swim comfortably, the willingness to spend up to four hours in the water daily, and the patience for methodical work that does not always produce dramatic results but is the foundation of everything that the dramatic results depend on.',
      'Training takes place over the first six days of the programme, led by Oceans Alive\'s research team and experienced community divers including Katana Ngala - the lead coral restoration technician who has been monitoring this reef daily since 2019. You will learn coral species identification, survey methodology, data recording, and underwater navigation. By the end of training week, you will be conducting surveys independently.',
      'The programme runs from July 14th to August 8th 2025. Volunteers commit to a minimum of two weeks, with the option to extend. Accommodation can be arranged at the Kuruwitu community lodge at cost price. International volunteers are welcome; Kenyan nationals from coastal counties are particularly encouraged to apply. To apply, email volunteer@oceansalive.org with a brief paragraph about why you want to join. No formal form - just tell us who you are.',
    ],
    bodyImages: [
      { src: '/images/Capacityassess.jpg', alt: 'Volunteers in coral survey training at Kuruwitu', caption: 'Survey volunteers receive hands-on training in point intercept transect methodology from experienced community conservation officers.' },
      { src: '/images/interns.jpg', alt: 'Previous volunteer cohort at the Kuruwitu project', caption: 'Previous survey volunteers from Kenya and internationally have contributed data that directly underpins the Kuruwitu co-management plan.' },
    ],
    relatedSlugs: ['ocean-leaders', 'annual-report-2024', 'coral-restoration-journey'],
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

  // Block access to Community News and Impact Stories
  const isDisabled = story.category === 'Community News' || story.category === 'Impact Stories';
  if (isDisabled) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-200 flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-3xl font-poppins font-bold text-gray-800 mb-4">Content Being Updated</h1>
            <p className="text-lg text-gray-600 mb-2">This story is currently being reviewed and updated with the latest information.</p>
            <p className="text-sm text-gray-500 mb-8">Please check back soon for the complete story.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span className="font-semibold">{story.category}</span>
            </div>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ocean-midnight text-white font-bold rounded-xl hover:bg-ocean-turquoise transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Stories
          </Link>
        </div>
      </div>
    );
  }

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
                      - {content.pullQuoteAttrib}
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
