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
            From 30 hectares of protected reef to a national model of community-led ocean governance.
            A story that belongs to the fishermen who started it.
          </p>
          <div className="mt-10 flex items-center gap-3 text-xs text-white/30 uppercase tracking-widest">
            <span className="w-5 h-px bg-white/20" />
            Kuruwitu · Kilifi County · Kenya · Since 2003
          </div>
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
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-ocean-midnight leading-tight mb-10">
                From 30 Hectares<br />to a National Model
              </h2>

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
                In the late 90s, when coral bleaching devastated Kenya's reefs and fish stocks collapsed, Kuruwitu's fishing community took action - establishing Kenya's first community-driven marine protected area, a 30-hectare Tengefu.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                During the first 15 years of management, unprecedented results were delivered: 400% fish biomass increase, 30% coral recovery, 17% seagrass restoration, and 735% household income improvement in the surrounding area. A working model was created.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                In 2016, Oceans Alive Foundation was established to share this proven Community Conservation Area (CCA) experience, offering technical support to scale across 17 neighbouring Beach Management Units. Today, we support 12,000 hectares of co-managed ocean and 7,000+ households across Kilifi County.
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
                // Handle year ranges differently
                const isRange = item.year.includes('-');
                const displayYear = isRange ? '03-18' : item.year.slice(2);

                return (
                <div key={item.year} className="flex gap-5 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className={`${isRange ? 'w-14' : 'w-10'} h-10 rounded-full bg-ocean-turquoise/10 border-2 border-ocean-turquoise flex items-center justify-center shrink-0`}>
                      <span className="text-[10px] font-bold text-ocean-turquoise">{displayYear}</span>
                    </div>
                    {i < TIMELINE.length - 1 && <div className="w-px flex-1 bg-ocean-turquoise/20 mt-2" />}
                  </div>
                  <div className="pt-1 pb-6">
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
