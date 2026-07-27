import Link from 'next/link';
import Image from 'next/image';
import NewsletterForm from '@/components/common/NewsletterForm';
import SDGRow from '@/components/common/SDGRow';
import { IMPACT_STATS, TIMELINE } from '@/lib/constants';
import { PRIMARY_SDGS } from '@/lib/sdg-mapping';

export default function Home() {
  // basePath is handled by Next.js config for Image components
  // For raw img tags, we need to add it manually
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <>
      {/* Hero */}
      <section className="relative bg-ocean-midnight overflow-hidden min-h-[90vh]">

        {/* Three images with diagonal dividers */}
        <div className="absolute inset-0 bg-ocean-midnight will-change-auto">
          {/* Image 1 - Left side with diagonal on right edge - show more of photo */}
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'polygon(0 0, 38% 0, 28% 100%, 0 100%)' }}>
            <div className="absolute inset-0 w-full h-full" style={{ transform: 'translateX(-35%)' }}>
              <img
                src={`${basePath}/images/P5310100.jpg`}
                alt="Ocean conservation work"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  objectPosition: 'center center',
                  imageRendering: '-webkit-optimize-contrast',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}
                loading="eager"
                decoding="sync"
              />
            </div>
            <div className="absolute inset-0 bg-blue-900/60"></div>
          </div>

          {/* Image 2 - Center with diagonal on both edges */}
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'polygon(38% 0, 72% 0, 62% 100%, 28% 100%)' }}>
            <img
              src={`${basePath}/images/divers.jpg`}
              alt="Divers and ocean conservation"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                minWidth: '100%',
                minHeight: '100%',
                objectPosition: '55% 40%',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            />
            <div className="absolute inset-0 bg-blue-900/60"></div>
          </div>

          {/* Image 3 - Right side with diagonal on left edge - ZOOMED IN for details */}
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'polygon(72% 0, 100% 0, 100% 100%, 62% 100%)' }}>
            <img
              src={`${basePath}/images/IMG_4955.jpg`}
              alt="Ocean conservation in Kenya"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                minWidth: '140%',
                minHeight: '140%',
                objectPosition: '55% 45%',
                transform: 'scale(1.2)',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            />
            <div className="absolute inset-0 bg-blue-900/60"></div>
          </div>
        </div>

        {/* Additional gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-midnight/40 via-ocean-midnight/50 to-ocean-midnight/70"></div>

        {/* Content overlay - centered over all images */}
        <div className="relative z-20 flex items-center justify-center w-full min-h-[90vh] px-6 py-20">
          <div className="max-w-5xl text-center">
            <h1 className="font-poppins font-light text-ocean-turquoise text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6 tracking-[0.15em] uppercase">
              Oceans Alive
            </h1>
            <h2 className="font-poppins font-bold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
              Healthy Oceans, Healthy Communities
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Oceans Alive works with coastal communities, Beach Management Units, government agencies and conservation partners to strengthen fisheries co-management, restore marine ecosystems and build resilient coastal livelihoods in Kenya. Drawing on more than two decades of learning from Kuruwitu, we connect local knowledge, practical conservation, science and policy to support locally led marine stewardship.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/about/story"
                className="px-7 py-3.5 bg-ocean-midnight text-white font-bold rounded-xl hover:bg-white hover:text-ocean-turquoise transition-all duration-200 shadow-lg"
              >
                Learn Our Story
              </Link>
              <Link
                href="/donate"
                className="px-7 py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:border-ocean-turquoise hover:text-ocean-turquoise transition-all duration-200"
              >
                Support Our Work
              </Link>
            </div>

          </div>
        </div>

      </section>


      {/* - Impact Stats (dark immersive) ---------─ */}
      <section className="bg-ocean-midnight py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight mb-6">
                Two Decades of Impact
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                <span className="text-white font-bold">20+ years of community-led conservation</span> at Kuruwitu: Oceans Alive was founded in <span className="text-white font-bold">2016</span> to scale and support the community-led approach started by the <span className="text-white font-bold">Kuruwitu-CBO in 2003</span>
              </p>
            </div>
            <div className="lg:pt-3">
              <p className="text-white/60 text-lg leading-relaxed">
                We work through community institutions and formal co-management structures, in collaboration with government, technical partners and donors. Oceans Alive's role is to facilitate, strengthen capacity, provide technical advice, monitor, mobilise funding, support learning and document lessons — so that coastal communities remain the primary stewards of their marine resources.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-0 border-l border-t border-b border-white/10">
            {IMPACT_STATS.map((stat, i) => (
              <div key={i} className="flex-1 min-w-0 py-4 px-3 border-r border-white/10 text-center">
                <div className="text-lg md:text-xl font-poppins font-bold text-ocean-turquoise mb-1">
                  {stat.value}
                </div>
                <p className="text-[9px] md:text-[10px] text-white/50 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 space-y-6">
            {/* Recognition */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <span className="text-[9px] text-white/25 uppercase tracking-widest">Recognised by</span>
              {['IUCN Blue Champions Award 2022', 'HM King Charles III Visit 2023', 'IUCN World Congress 2025'].map((a) => (
                <span key={a} className="text-xs text-white/40 font-semibold">{a}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* - 4 Strategic Objectives Cards -------------─ */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-2">Our Work</p>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">
                Our Strategic Objectives
              </h2>
            </div>
            <Link
              href="/programmes"
              className="shrink-0 inline-flex items-center gap-2 text-ocean-turquoise font-bold hover:text-ocean-midnight transition-colors text-sm"
            >
              Explore our programmes →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Strategic Objective 1: Strengthen Coastal Environmental Education → SOCIAL PILLAR */}
            <Link
              href="/programs/learning-leadership"
              className="group relative rounded-2xl overflow-hidden block hover:shadow-2xl transition-all duration-300 border border-ocean-midnight/10"
              style={{ minHeight: '260px' }}
            >
              <Image
                src="/images/kids.jpg"
                alt="Social Development - Education"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/85 to-green-900/35" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Social Pillar</span>
                  </div>
                  <div className="text-3xl font-poppins font-black text-white/20">01</div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-poppins font-bold text-white mb-2 leading-tight">
                    Strengthen Coastal Education
                  </h3>
                  <p className="text-sm text-white/85 mb-3 leading-relaxed max-w-lg">
                    Kuruwitu becomes a living classroom. <strong>10,000+ learners</strong> gain hands-on experience in coral restoration and conservation. Building ocean leaders through education and community harmony.
                  </p>
                  <span className="text-sm font-bold text-ocean-turquoise group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    Explore programmes <span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Strategic Objective 2: Promote Marine Ecosystem Integrity → ENVIRONMENT PILLAR */}
            <Link
              href="/programs/ocean-recovery"
              className="group relative rounded-2xl overflow-hidden block hover:shadow-2xl transition-all duration-300 border border-ocean-midnight/10"
              style={{ minHeight: '260px' }}
            >
              <Image
                src="/images/divers.jpg"
                alt="Environmental Stewardship"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight via-ocean-midnight/85 to-ocean-midnight/35" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Environment Pillar</span>
                  </div>
                  <div className="text-3xl font-poppins font-black text-white/20">02</div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-poppins font-bold text-white mb-2 leading-tight">
                    Promote Marine Ecosystem Integrity
                  </h3>
                  <p className="text-sm text-white/85 mb-3 leading-relaxed max-w-lg">
                    Fishers become reef gardeners. <strong>120 km² co-managed</strong>, <strong>25,000+ corals planted</strong>, <strong>400% fish biomass increase</strong>. Proof that people and ecosystems recover together.
                  </p>
                  <span className="text-sm font-bold text-ocean-turquoise group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    Explore programmes <span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Strategic Objective 3: Promote Food Security & Income → ECONOMIC PILLAR */}
            <Link
              href="/programs/she"
              className="group relative rounded-2xl overflow-hidden block hover:shadow-2xl transition-all duration-300 border border-ocean-midnight/10"
              style={{ minHeight: '260px' }}
            >
              <Image
                src="/images/trashforcash.jpg"
                alt="Economic Sustainability"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900 via-pink-900/85 to-pink-900/35" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Economic Pillar</span>
                  </div>
                  <div className="text-3xl font-poppins font-black text-white/20">03</div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-poppins font-bold text-white mb-2 leading-tight">
                    Promote Food Security & Income
                  </h3>
                  <p className="text-sm text-white/85 mb-3 leading-relaxed max-w-lg">
                    When families eat from gardens, oceans breathe easier. <strong>735+ women</strong> in Trash4Cash and permaculture. <strong>600+ households</strong> with food security. The ocean isn't their only option—it's their choice to protect.
                  </p>
                  <span className="text-sm font-bold text-ocean-turquoise group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    Explore programmes <span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Strategic Objective 4: Strengthen Institutional Capacity → GOVERNANCE PILLAR */}
            <Link
              href="/programs/research-innovation"
              className="group relative rounded-2xl overflow-hidden block hover:shadow-2xl transition-all duration-300 border border-ocean-midnight/10"
              style={{ minHeight: '260px' }}
            >
              <Image
                src="/images/oceansmen.jpg"
                alt="Governance & Co-Management"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900 via-cyan-900/85 to-cyan-900/35" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Governance Pillar</span>
                  </div>
                  <div className="text-3xl font-poppins font-black text-white/20">04</div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-poppins font-bold text-white mb-2 leading-tight">
                    Strengthen Institutional Capacity
                  </h3>
                  <p className="text-sm text-white/85 mb-3 leading-relaxed max-w-lg">
                    Community passion meets professional backbone. <strong>Audit-ready science</strong>, <strong>18 BMUs coordinated</strong>, <strong>Royal Visit 2023</strong> recognition. Joint and Co-Management Areas work when community rights meet institutional support.
                  </p>
                  <span className="text-sm font-bold text-ocean-turquoise group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    Explore programmes <span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* - Stay Connected & Get Involved (Compact Combined) ------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ocean-midnight to-ocean-turquoise/30 py-8 md:py-10">

        {/* Dot grid texture */}
        <div className="absolute inset-0 [background-image:radial-gradient(circle,rgba(46,191,209,0.18)_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none" />

        {/* Rising arc waves from the bottom - reduced */}
        <div className="absolute -bottom-56 left-1/2 -translate-x-1/2 w-[740px] h-[740px] rounded-full border border-ocean-turquoise/[0.10] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[280px] h-[280px] rounded-full border-2 border-ocean-turquoise/[0.18] pointer-events-none" />


        {/* - Content - */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">

            {/* Left - Compact heading */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ocean-turquoise opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ocean-turquoise" />
                </span>
                <span className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em]">Stay Connected</span>
              </div>

              <h2 className="font-poppins font-bold leading-[1.1] mb-4">
                <span className="block text-3xl md:text-4xl text-white">Join the Mission.</span>
                <span className="block text-3xl md:text-4xl text-ocean-turquoise">Protect the Sea.</span>
              </h2>

              <p className="text-white/55 text-sm leading-relaxed max-w-md mb-6">
                Field updates and ways to support.
              </p>

              {/* Integrated CTA buttons */}
              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  href="/donate"
                  className="px-5 py-2.5 bg-ocean-turquoise text-white font-bold text-sm rounded-lg hover:bg-white hover:text-ocean-turquoise transition-all duration-200 shadow-lg"
                >
                  Donate
                </Link>
                <Link
                  href="/contact?type=Volunteer"
                  className="px-5 py-2.5 border border-white/30 text-white font-semibold text-sm rounded-lg hover:border-ocean-turquoise hover:bg-ocean-turquoise/10 transition-all duration-200"
                >
                  Volunteer
                </Link>
                <Link
                  href="/contact?type=Partnership"
                  className="px-5 py-2.5 border border-white/30 text-white font-semibold text-sm rounded-lg hover:border-ocean-turquoise hover:bg-ocean-turquoise/10 transition-all duration-200"
                >
                  Partner
                </Link>
              </div>
            </div>

            {/* Right - Compact form card */}
            <div className="relative">
              <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-xl p-6">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-ocean-turquoise/40 to-transparent" />

                <h3 className="text-lg font-poppins font-bold text-white mb-1.5">
                  Get Updates
                </h3>
                <p className="text-white/45 text-xs leading-relaxed mb-5">
                  Conservation progress & opportunities to make an impact.
                </p>

                <NewsletterForm variant="footer" />

                <p className="text-[10px] text-white/20 text-center mt-4 pt-3 border-t border-white/[0.06]">
                  Quarterly · No spam · Unsubscribe anytime
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
