import Image from 'next/image';
import Link from 'next/link';
import { TIMELINE, IMPACT_STATS } from '@/lib/constants';

export const metadata = {
  title: 'Our Story - Oceans Alive Foundation',
  description:
    'From a 30-hectare community sanctuary in 2003 to a nationally recognised co-management model - the story of Oceans Alive Foundation.',
};

export default function StoryPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-ocean-midnight overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/BMUS.jpg"
            alt="Kuruwitu community - Oceans Alive Foundation"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-midnight via-ocean-midnight/85 to-ocean-midnight/40" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-ocean-turquoise/50" />
            Our Story
          </p>
          <h1 className="font-poppins font-bold text-white text-5xl md:text-7xl leading-[0.95] mb-8 max-w-3xl">
            Our<br />
            <span className="text-ocean-turquoise">Story</span>
          </h1>
          <p className="text-white/60 text-xl max-w-xl leading-relaxed">
            From 30 hectares of protected reef to a national model of community-led ocean governance. A story that begins with and still belongs to the fishers who started it.
          </p>
        </div>
      </section>

      {/* ── Origin Story ─────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Text */}
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-3">
                <span className="w-6 h-px bg-ocean-turquoise/50" />
                The Beginning
              </p>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-xl font-medium text-ocean-midnight">
                  What began as a small community conservation area in Kuruwitu has grown into one of Kenya's best-known examples of community-led marine stewardship.
                </p>
                <p>
                  From 30 hectares of protected reef, the model has expanded along the coast, demonstrating that when communities are given the tools and authority to manage their marine resources, conservation can strengthen livelihoods, restore ecosystems and shape policy.
                </p>
                <p>
                  Today, Oceans Alive continues to build on those foundations, working with communities, government and partners to create healthier oceans and more resilient coastal communities.
                </p>
              </div>
            </div>

            {/* Photos */}
            <div className="space-y-4 lg:pt-16">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/divers.jpg"
                  alt="Coral restoration divers at Kuruwitu"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight/70 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="text-[10px] text-white/80 font-bold uppercase tracking-wider">
                    Reef Restoration Divers · Since 2019
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/oceanday.jpg"
                    alt="World Ocean Day celebration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[9px] text-white/75 font-bold uppercase tracking-wider">
                      World Ocean Day
                    </span>
                  </div>
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/communities.jpg"
                    alt="Community members at Kuruwitu"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[9px] text-white/75 font-bold uppercase tracking-wider">
                      Kuruwitu Community
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Story Content & Timeline from Homepage */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Underwater Image 1 */}
          <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-12">
            <Image
              src="/images/coral-reef.jpg"
              alt="Coral reef with fish at Kuruwitu"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Our Journey</p>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">
                Reimagining Marine Conservation through community leadership on Kenya's Coast
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                In the late 1990s, coral bleaching devastated Kenya's reefs and fish stocks collapsed. In response, Kuruwitu's residents and fishing community united to build a partnership which formed the Kuruwitu Conservation and Welfare Association in 2003 (now the Kuruwitu Conservation and Welfare CBO). In 2006 Kuruwitu-CBO established one of Kenya's earliest community-driven Locally Managed Marine Areas; a 30-hectare no-take sanctuary governed under traditional law, known as a tengefu. The success at Kuruwitu has been founded on collective action and partnerships driven by the common good.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Oceans Alive and the Kuruwitu-CBO work as distinct partners in a shared mission. The Kuruwitu-CBO manages the sanctuary and local community welfare, while Oceans Alive provides technical, scientific, and institutional support to help scale these locally led successes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Over roughly 15 years of community management, the sanctuary delivered measurable recovery and recorded a 400% increase in fish biomass, 30% reef recovery and 17% seagrass regrowth (WCS monitoring data). A 135% improvement in catch in surrounding waters was recorded and noted as the spill-over effect, proving the importance of a working, community-owned model.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                In 2016, Oceans Alive was established as a separate organisation to help document and share the lessons of this community-led model. Working with the Kuruwitu BMU, the KCW-CBO, government agencies and technical partners, Oceans Alive has supported the development of the 120 km² Kuruwitu Co-Management Area and the growth of the Kilifi County BMU Network of 17 BMUs, as a facilitator and technical partner.
              </p>

              {/* Underwater Image - aligned with timeline */}
              <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg mt-12">
                <Image
                  src="/images/coralteaching.jpg"
                  alt="Coral restoration education and training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {TIMELINE.map((item, i) => {
                // Handle year ranges differently - check for both dash and en-dash
                const isRange = item.year.includes('–') || item.year.includes('-');

                // For display in circle: extract years differently based on format
                let displayYear;
                if (item.year.includes('–')) {
                  // Handle en-dash (2006–2018, 2023–present)
                  const parts = item.year.split('–');
                  displayYear = parts[0].slice(2) + '–' + (parts[1] === 'present' ? 'now' : parts[1].slice(2));
                } else if (item.year.includes('-') && item.year.length > 4) {
                  // Handle regular dash for ranges
                  const parts = item.year.split('-');
                  displayYear = parts[0].slice(2) + '-' + parts[1].slice(2);
                } else {
                  // Single year
                  displayYear = item.year.slice(2);
                }

                return (
                <div key={item.year} className="flex gap-5 pb-5 last:pb-0">
                  <div className="flex flex-col items-center gap-2">
                    {/* Use wider pill shape for ranges, circle for single years */}
                    <div className={`${isRange ? 'px-2.5 h-10 min-w-[56px] rounded-full' : 'w-10 h-10 rounded-full'} bg-ocean-turquoise/10 border-2 border-ocean-turquoise flex items-center justify-center shrink-0`}>
                      <span className="text-[9px] font-bold text-ocean-turquoise whitespace-nowrap">{displayYear}</span>
                    </div>
                    {i < TIMELINE.length - 1 && <div className="w-px flex-1 bg-ocean-turquoise/20" />}
                  </div>
                  <div className="pt-1 pb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-ocean-turquoise uppercase tracking-wider">{item.year}</span>
                      {item.tag && (
                        <span className="text-[10px] bg-ocean-turquoise/10 text-ocean-turquoise px-2 py-0.5 rounded-full font-semibold">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <h4 className="font-poppins font-bold text-ocean-midnight mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* ── Next Chapter CTA ─────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            <span className="font-bold text-ocean-midnight">Continue reading:</span> Learn about the mission and values that guide every programme.
          </p>
          <Link
            href="/about/mission"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-ocean-midnight text-white font-bold text-sm rounded-xl hover:bg-ocean-turquoise hover:text-ocean-midnight transition-all duration-200"
          >
            Mission & Vision <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
