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
            Chapter 01
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

      {/* ── Timeline ─────────────────────────────────────────────── */}
      <section className="bg-[#040f1a] py-20 md:py-28 overflow-hidden">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(46,191,209,1) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-4 flex items-center justify-center gap-3">
              <span className="w-6 h-px bg-ocean-turquoise/50" />
              Two Decades of Impact
              <span className="w-6 h-px bg-ocean-turquoise/50" />
            </p>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white">
              Milestones That Matter
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {TIMELINE.map((item, i) => (
              <div key={item.year} className="flex gap-0 group">

                {/* Year + line */}
                <div className="flex flex-col items-center mr-8 shrink-0">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-ocean-midnight border-2 border-ocean-turquoise/40 flex items-center justify-center shadow-lg shadow-ocean-turquoise/10 group-hover:border-ocean-turquoise group-hover:shadow-ocean-turquoise/30 transition-all duration-300">
                      <span className="text-[10px] font-bold text-ocean-turquoise">{item.year}</span>
                    </div>
                    {/* Glow ring */}
                    <div className="absolute inset-0 rounded-full bg-ocean-turquoise/5 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                  </div>
                  {i < TIMELINE.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-ocean-turquoise/30 to-ocean-turquoise/5 mt-2 min-h-[60px]" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-12 pt-3 flex-1">
                  {item.tag && (
                    <span className="inline-block text-[9px] font-bold uppercase tracking-[0.2em] text-ocean-turquoise bg-ocean-turquoise/10 border border-ocean-turquoise/20 px-2.5 py-1 rounded-full mb-3">
                      {item.tag}
                    </span>
                  )}
                  <h3 className="text-xl font-poppins font-bold text-white mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed text-sm">
                    {item.body}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Stats ─────────────────────────────────────────── */}
      <section className="bg-ocean-midnight py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-10 text-center flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-ocean-turquoise/50" />
            The Numbers Behind the Story
            <span className="w-6 h-px bg-ocean-turquoise/50" />
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {IMPACT_STATS.map((stat, i) => (
              <div
                key={i}
                className="relative group text-center p-6 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.07] hover:border-ocean-turquoise/30 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-poppins font-bold text-ocean-turquoise mb-2">
                  {stat.value}
                </div>
                <p className="text-xs text-white/45 leading-snug">{stat.label}</p>
              </div>
            ))}
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
