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
              Building a Future Where Oceans and Communities<br />
              <span className="text-white">Thrive Together</span>
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Creating, catalyzing, and scaling pragmatic, community-led solutions for ocean conservation across Kenya and the Western Indian Ocean region. Empowering coastal communities as the primary stewards of their marine resources.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/programmes"
                className="px-7 py-3.5 bg-ocean-midnight text-white font-bold rounded-xl hover:bg-white hover:text-ocean-turquoise transition-all duration-200 shadow-lg"
              >
                Our Programmes
              </Link>
              <Link
                href="/about"
                className="px-7 py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:border-ocean-turquoise hover:text-ocean-turquoise transition-all duration-200"
              >
                Our Story
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
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">20-Year Journey of Impact</p>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight">
                Two Decades of<br />Community-Led Conservation
              </h2>
            </div>
            <div className="lg:pt-3">
              <p className="text-white/60 text-lg leading-relaxed">
                From establishing Kenya's first community-driven Community Conservation Area (CCA) in 2003, to 15 years of proven results (400% fish biomass increase, 30% coral recovery), to Kenya's first Co-Management Plan in 2022 - placing 12,000 hectares under community stewardship.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-0 border-l border-t border-b border-white/10">
            {IMPACT_STATS.map((stat, i) => (
              <div key={i} className="flex-1 min-w-0 py-6 px-4 border-r border-white/10 text-center">
                <div className="text-xl md:text-2xl font-poppins font-bold text-ocean-turquoise mb-1">
                  {stat.value}
                </div>
                <p className="text-[10px] md:text-xs text-white/50 leading-tight">{stat.label}</p>
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

            {/* SDGs - Real UN Logos */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4">
              <span className="text-[9px] text-white/25 uppercase tracking-widest">Contributing to UN SDGs</span>
              <SDGRow sdgs={PRIMARY_SDGS} size="md" useRealLogos={true} />
            </div>
          </div>
        </div>
      </section>

      {/* - 5 Programs Cards -------------─ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-3">Our Work</p>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-ocean-midnight leading-tight">
                Interlocking<br />Programs
              </h2>
            </div>
            <Link
              href="/programmes"
              className="shrink-0 inline-flex items-center gap-2 text-ocean-turquoise font-bold hover:text-ocean-midnight transition-colors"
            >
              View all 5 programs →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {/* Program 1: Ocean Recovery */}
            <Link
              href="/programs/ocean-recovery"
              className="group relative rounded-2xl overflow-hidden block hover:shadow-2xl transition-all duration-300 lg:col-span-2"
              style={{ minHeight: '320px' }}
            >
              <Image
                src="/images/divers.jpg"
                alt="Ocean Recovery"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight via-ocean-midnight/70 to-ocean-midnight/20" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-4xl font-poppins font-bold text-white/30 mb-2">01</div>
                <h3 className="text-xl font-poppins font-bold text-white mb-2 leading-tight">Ocean Recovery</h3>
                <p className="text-sm text-white/70 mb-4">Coral restoration, fisheries & marine ecosystems</p>
                <div className="flex items-center gap-2 mb-3">
                  <SDGRow sdgs={[14, 13, 17]} size="sm" showTooltip={false} />
                </div>
                <span className="text-xs font-bold text-ocean-turquoise group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Learn more →
                </span>
              </div>
            </Link>

            {/* Program 2: Social Health Environment */}
            <Link
              href="/programs/she"
              className="group relative rounded-2xl overflow-hidden block hover:shadow-2xl transition-all duration-300 lg:col-span-2"
              style={{ minHeight: '320px' }}
            >
              <Image
                src="/images/trashforcash.jpg"
                alt="Social Health Environment Program"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900 via-pink-900/70 to-pink-900/20" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-4xl font-poppins font-bold text-white/30 mb-2">02</div>
                <h3 className="text-xl font-poppins font-bold text-white mb-2 leading-tight">Social Health Environment</h3>
                <p className="text-sm text-white/70 mb-4">Women's empowerment & sustainable livelihoods</p>
                <div className="flex items-center gap-2 mb-3">
                  <SDGRow sdgs={[5, 8, 14, 13]} size="sm" showTooltip={false} />
                </div>
                <span className="text-xs font-bold text-ocean-turquoise group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Learn more →
                </span>
              </div>
            </Link>

            {/* Program 3: Learning & Leadership */}
            <Link
              href="/programs/learning-leadership"
              className="group relative rounded-2xl overflow-hidden block hover:shadow-2xl transition-all duration-300 lg:col-span-2"
              style={{ minHeight: '320px' }}
            >
              <Image
                src="/images/kids.jpg"
                alt="Learning & Leadership"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/70 to-green-900/20" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-4xl font-poppins font-bold text-white/30 mb-2">03</div>
                <h3 className="text-xl font-poppins font-bold text-white mb-2 leading-tight">Learning & Leadership</h3>
                <p className="text-sm text-white/70 mb-4">Ocean education & capacity building</p>
                <div className="flex items-center gap-2 mb-3">
                  <SDGRow sdgs={[4, 14, 13]} size="sm" showTooltip={false} />
                </div>
                <span className="text-xs font-bold text-ocean-turquoise group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Learn more →
                </span>
              </div>
            </Link>

            {/* Program 4: Governance & Fisheries */}
            <Link
              href="/programs/governance-fisheries"
              className="group relative rounded-2xl overflow-hidden block hover:shadow-2xl transition-all duration-300 lg:col-span-3"
              style={{ minHeight: '320px' }}
            >
              <Image
                src="/images/kamakukijcma.jpg"
                alt="Governance & Fisheries"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900 via-amber-900/70 to-amber-900/20" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-4xl font-poppins font-bold text-white/30 mb-2">04</div>
                <h3 className="text-xl font-poppins font-bold text-white mb-2 leading-tight">Governance & Fisheries</h3>
                <p className="text-sm text-white/70 mb-4">Community governance & sustainable fisheries</p>
                <div className="flex items-center gap-2 mb-3">
                  <SDGRow sdgs={[14, 17, 8]} size="sm" showTooltip={false} />
                </div>
                <span className="text-xs font-bold text-ocean-turquoise group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Learn more →
                </span>
              </div>
            </Link>

            {/* Program 5: Research & Innovation */}
            <Link
              href="/programs/research-innovation"
              className="group relative rounded-2xl overflow-hidden block hover:shadow-2xl transition-all duration-300 lg:col-span-3"
              style={{ minHeight: '320px' }}
            >
              <Image
                src="/images/oceansmen.jpg"
                alt="Research & Innovation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900 via-cyan-900/70 to-cyan-900/20" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-4xl font-poppins font-bold text-white/30 mb-2">05</div>
                <h3 className="text-xl font-poppins font-bold text-white mb-2 leading-tight">Research & Innovation</h3>
                <p className="text-sm text-white/70 mb-4">Monitoring & sustainable finance</p>
                <div className="flex items-center gap-2 mb-3">
                  <SDGRow sdgs={[14, 13, 17]} size="sm" showTooltip={false} />
                </div>
                <span className="text-xs font-bold text-ocean-turquoise group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Learn more →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* - Women & Ocean -----------------─ */}
      <section className="relative bg-gradient-to-br from-[#1a6b5a] to-ocean-seafoam py-16 md:py-20 overflow-hidden">
        {/* Background Image - Covers Entire Section */}
        <div className="absolute inset-0">
          <Image
            src="/images/trashforcash.jpg"
            alt="Women in Kilifi's Trash4Cash programme"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a6b5a]/40 to-ocean-seafoam/30" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-widest mb-4 drop-shadow-lg">Women & Ocean</p>
              <h2 className="text-4xl font-poppins font-bold text-white mb-6 drop-shadow-lg">
                Women at the Heart of Conservation
              </h2>
              <p className="text-white leading-relaxed mb-4 drop-shadow-md">
                Through Oceans Alive's Social, Health and Environment programme, women are helping shape the future of conservation across Kilifi County.
              </p>
              <p className="text-white leading-relaxed mb-4 drop-shadow-md">
                From coral restoration and community leadership to small businesses and recycling initiatives, women are creating practical solutions that benefit both people and the environment.
              </p>
              <p className="text-white leading-relaxed mb-8 drop-shadow-md">
                Today, more than 120 women collect, sort and sell over two tonnes of plastic each month, turning waste into income while helping protect the coast they call home.
              </p>
              <Link
                href="/programmes/trash4cash"
                className="inline-flex items-center gap-2 bg-white text-[#1a6b5a] font-bold px-6 py-3 rounded-xl hover:bg-ocean-midnight hover:text-white transition-all duration-200 shadow-xl"
              >
                Support Women's Programmes →
              </Link>
            </div>
            <div className="relative w-full h-[600px] lg:h-[700px]">
              {/* Overlapping Image 1 - Top Right */}
              <div className="absolute top-12 right-6 md:right-12 w-64 md:w-80 lg:w-96 h-52 md:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-2xl border-4 md:border-6 border-white transform rotate-6 hover:rotate-3 hover:scale-105 transition-all duration-300 z-10">
                <Image
                  src="/images/womenlearning.jpg"
                  alt="Women learning and empowerment"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping Image 2 - Bottom Left */}
              <div className="absolute bottom-12 left-6 md:left-12 w-72 md:w-88 lg:w-[420px] h-56 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 md:border-6 border-white transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 z-20">
                <Image
                  src="/images/womenlearning2.jpg"
                  alt="Women in community programs"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* - Newsletter ------------------- */}
      <section className="relative overflow-hidden bg-[#040f1a] py-24 md:py-32">

        {/* Dot grid texture */}
        <div className="absolute inset-0 [background-image:radial-gradient(circle,rgba(46,191,209,0.18)_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none" />

        {/* Rising arc waves from the bottom */}
        <div className="absolute -bottom-72 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full border border-ocean-turquoise/[0.07] pointer-events-none" />
        <div className="absolute -bottom-56 left-1/2 -translate-x-1/2 w-[740px] h-[740px] rounded-full border border-ocean-turquoise/[0.10] pointer-events-none" />
        <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-ocean-turquoise/[0.14] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[280px] h-[280px] rounded-full border-2 border-ocean-turquoise/[0.18] pointer-events-none" />
        {/* Glowing epicentre at the bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-5 h-5 rounded-full bg-ocean-turquoise shadow-[0_0_40px_12px_rgba(46,191,209,0.4)] pointer-events-none" />

        {/* Top fade so arcs don't bleed upward */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040f1a] via-transparent to-[#040f1a] pointer-events-none" />

        {/* Rotated side text - left edge */}
        <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-center select-none pointer-events-none">
          <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-ocean-turquoise/20 whitespace-nowrap">
            Kilifi · Kenya · Est. 2017
          </span>
        </div>

        {/* - Content - */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">

            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ocean-turquoise opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ocean-turquoise" />
                </span>
                <span className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em]">Stay Connected</span>
              </div>

              <h2 className="font-poppins font-bold leading-[1.02] mb-6">
                <span className="block text-5xl md:text-6xl xl:text-7xl text-white">Join the Mission.</span>
                <span className="block text-5xl md:text-6xl xl:text-7xl text-ocean-turquoise">Protect the Sea.</span>
              </h2>

              <p className="text-white/55 text-lg leading-relaxed max-w-sm mb-10">
                Quarterly updates from the field - conservation progress, stories from Kilifi's coast,
                and real ways to support the work.
              </p>

              {/* Topic pills */}
              <div className="flex flex-wrap gap-3">
                {['Field Reports', 'Coral Updates', 'Impact Stories', 'Ways to Help'].map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 rounded-full border border-ocean-turquoise/25 text-ocean-turquoise/65 text-xs font-semibold uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - form card */}
            <div className="relative">
              <p className="absolute -top-7 -left-1 text-[100px] font-poppins font-black text-ocean-turquoise/[0.04] leading-none select-none pointer-events-none">
                OAF
              </p>

              <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 md:p-12">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-ocean-turquoise/40 to-transparent" />

                <h3 className="text-2xl font-poppins font-bold text-white mb-2">
                  Get Updates on Our Work
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-8">
                  Subscribe for quarterly updates on conservation progress, educational resources,
                  and opportunities to make an impact along Kenya's coast.
                </p>

                <NewsletterForm variant="footer" />

                <p className="text-xs text-white/20 text-center mt-6 pt-5 border-t border-white/[0.06]">
                  Quarterly · No spam · Unsubscribe anytime
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* - Final CTA -------------------─ */}
      <section className="bg-white py-14 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-poppins font-bold text-ocean-midnight">
                Ready to make an impact?
              </h3>
              <p className="text-ocean-turquoise mt-1">
                Join us
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/donate"
                className="px-6 py-3 bg-ocean-turquoise text-white font-bold rounded-xl hover:bg-ocean-midnight transition-all duration-200"
              >
                Donate
              </Link>
              <Link
                href="/contact?type=Volunteer"
                className="px-6 py-3 border border-gray-200 text-ocean-midnight font-semibold rounded-xl hover:border-ocean-turquoise hover:text-ocean-turquoise transition-all duration-200"
              >
                Volunteer
              </Link>
              <Link
                href="/contact?type=Partnership"
                className="px-6 py-3 border border-gray-200 text-ocean-midnight font-semibold rounded-xl hover:border-ocean-turquoise hover:text-ocean-turquoise transition-all duration-200"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
