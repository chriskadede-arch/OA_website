import Link from 'next/link';
import Image from 'next/image';
import NewsletterForm from '@/components/common/NewsletterForm';
import { IMPACT_STATS, TIMELINE } from '@/lib/constants';

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-ocean-midnight overflow-hidden min-h-[90vh] flex flex-col lg:flex-row">

        {/* Background gradients — left side only */}
        <div className="absolute inset-0 lg:right-[45%] bg-gradient-to-br from-ocean-midnight via-[#0a2f4a] to-[#0a4f7a]" />
        <div className="absolute inset-0 lg:right-[45%] bg-[radial-gradient(ellipse_at_top_right,rgba(46,191,209,0.15),transparent_60%)]" />

        {/* ── Text column ── */}
        <div className="relative z-10 flex-1 flex items-center px-8 py-24 lg:px-14 xl:px-20">
          <div className="max-w-xl">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-ocean-turquoise inline-block" />
              Kilifi County, Kenya · Est. 2003
            </p>
            <h1 className="font-poppins font-bold text-white text-5xl md:text-6xl xl:text-7xl leading-[1.05] mb-8">
              Protect the Ocean.<br />
              <span className="text-ocean-turquoise">Empower the Community.</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-4">
              Oceans Alive Foundation empowers Kenya's coastal communities to become the stewards
              of the ocean on which they depend — restoring coral reefs, rebuilding fisheries,
              and securing livelihoods since 2003.
            </p>
            <p className="text-sm text-ocean-turquoise/80 italic mb-10">
              "Conservation works when it begins and ends with the communities who call the ocean home."
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/programmes"
                className="px-7 py-3.5 bg-ocean-turquoise text-white font-bold rounded-xl hover:bg-white hover:text-ocean-midnight transition-all duration-200 shadow-lg"
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

            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-poppins font-bold text-ocean-turquoise">25,000+</div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Coral Colonies Planted</div>
              </div>
              <div>
                <div className="text-3xl font-poppins font-bold text-ocean-turquoise">150 km²</div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Under Co-Management</div>
              </div>
              <div>
                <div className="text-3xl font-poppins font-bold text-ocean-turquoise">20+</div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Years of Conservation</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Photos column — diagonal weave, full height ── */}
        <div className="hidden lg:block w-[45%] self-stretch relative">

          {/* Coral — top 58%, bottom edge is a diagonal cut */}
          <div className="absolute top-0 left-0 right-0 h-[58%] overflow-hidden z-10 group
            [clip-path:polygon(0_0,100%_0,100%_80%,0_100%)]">
            <Image
              src="/images/coral.png"
              alt="Restored coral colony at Kilifi reef"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-ocean-midnight/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-ocean-midnight/40 via-transparent to-transparent" />
            {/* Stat — bottom left, clear of the clipped area */}
            <div className="absolute bottom-24 left-8">
              <p className="text-[10px] text-ocean-turquoise font-bold uppercase tracking-widest mb-1">Coral Restoration</p>
              <p className="text-5xl font-poppins font-bold text-white leading-none drop-shadow-lg">25,000+</p>
              <p className="text-xs text-white/55 uppercase tracking-wider mt-1">Colonies Planted</p>
            </div>
          </div>

          {/* Glowing badge — dead centre, overlaps both photos */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20
            w-[88px] h-[88px] rounded-full bg-ocean-turquoise
            ring-4 ring-white/20
            shadow-xl shadow-ocean-turquoise/60
            flex flex-col items-center justify-center">
            <p className="text-[23px] font-poppins font-bold text-white leading-none">85%</p>
            <p className="text-[8px] text-white/75 uppercase tracking-widest mt-0.5">Survival</p>
          </div>

          {/* Starfish — bottom 58%, top edge is the mirror diagonal */}
          <div className="absolute bottom-0 left-0 right-0 h-[58%] overflow-hidden z-0 group
            [clip-path:polygon(0_20%,100%_0,100%_100%,0_100%)]">
            <Image
              src="/images/starfish.png"
              alt="Red starfish at Kilifi marine sanctuary"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-ocean-midnight/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight/40 via-transparent to-transparent" />
            {/* Stat — bottom right */}
            <div className="absolute bottom-8 right-8 text-right">
              <p className="text-[10px] text-ocean-turquoise font-bold uppercase tracking-widest mb-1">Protected Ocean</p>
              <p className="text-5xl font-poppins font-bold text-white leading-none drop-shadow-lg">150 km²</p>
              <p className="text-xs text-white/55 uppercase tracking-wider mt-1">Under Conservation</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Impact Stats (dark immersive) ─────────────────── */}
      <section className="bg-ocean-midnight py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Our Impact</p>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight">
                Twenty Years of<br />Measurable Change
              </h2>
            </div>
            <div className="lg:pt-3">
              <p className="text-white/60 text-lg leading-relaxed">
                From a 30-hectare sanctuary to Kenya's first co-management plan — delivered along
                640 km of coastline, with communities at the centre of every decision.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-white/10">
            {IMPACT_STATS.slice(0, 8).map((stat, i) => (
              <div key={i} className="py-8 px-6 border-r border-b border-white/10">
                <div className="text-3xl md:text-4xl font-poppins font-bold text-ocean-turquoise mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-white/50 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-x-8 gap-y-2">
            <span className="text-[9px] text-white/25 uppercase tracking-widest">Recognised by</span>
            {['UNDP Equator Prize', 'IUCN World Conservation Congress 2025', 'Royal Visit 2023', 'Canon CENA Partnership'].map((a) => (
              <span key={a} className="text-xs text-white/40 font-semibold">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 Flagship Programmes ─────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-3">Our Work</p>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-ocean-midnight leading-tight">
                14 Interlocking<br />Programmes
              </h2>
            </div>
            <Link
              href="/programmes"
              className="shrink-0 inline-flex items-center gap-2 text-ocean-turquoise font-bold hover:text-ocean-midnight transition-colors"
            >
              View all 14 programmes →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { slug: 'coral-restoration', title: 'Coral Restoration', stat: '25,000+', statLabel: 'Colonies Planted', img: '/images/divers.jpg', grad: 'from-ocean-midnight via-[#0a3560] to-[#0a4f7a]' },
              { slug: 'trash4cash', title: 'Trash4Cash', stat: '2t', statLabel: 'Plastic / Month', img: '/images/trashforcash.jpg', grad: 'from-[#1a6b5a] via-[#124d40] to-[#0b3329]' },
              { slug: 'ocean-education', title: 'Ocean Education', stat: '2,500+', statLabel: 'People Educated', img: '/images/kids.jpg', grad: 'from-[#0a3560] via-ocean-midnight to-[#040f1a]' },
              { slug: 'co-management', title: 'Co-Management', stat: '150 km²', statLabel: 'Under LMMA Plan', img: '/images/kamakukijcma.jpg', grad: 'from-[#3a4f2a] via-[#263520] to-[#111a0e]' },
            ].map((p) => (
              <Link
                key={p.slug}
                href={`/programmes/${p.slug}`}
                className="group relative rounded-2xl overflow-hidden block"
                style={{ minHeight: '300px' }}
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.grad} opacity-80 group-hover:opacity-90 transition-opacity`} />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="text-2xl font-poppins font-bold text-ocean-turquoise leading-none">{p.stat}</div>
                  <div className="text-[10px] text-white/55 uppercase tracking-widest mt-0.5 mb-2">{p.statLabel}</div>
                  <h3 className="text-lg font-poppins font-bold text-white mb-3 leading-tight">{p.title}</h3>
                  <span className="text-xs font-bold text-white/55 group-hover:text-ocean-turquoise transition-colors">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story (text left + timeline right) ────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">
                A Journey of<br />Community &amp; Ocean
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Oceans Alive is a Kenyan marine conservation foundation built on action. We work alongside
                coastal communities to restore the ocean through hand-planted coral reefs, rebuilt
                fisheries, and local stewardship.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our story began in 2003 when a shared concern for the reef brought residents and the
                Kuruwitu fishers together. What started as a temporary 30-hectare <em>tengefu</em> — a
                no-take zone — became permanent at the fishermen's own request.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                In January 2022, Oceans Alive delivered Kenya's first formal ocean co-management plan —
                placing 150 km² of sea under community stewardship. From our roots in Kuruwitu, we now
                accelerate this recovery across the coastline — led by the community, for the community.
              </p>
              <div className="flex items-center gap-6 py-6 border-t border-gray-100">
                <div>
                  <div className="text-3xl font-poppins font-bold text-ocean-turquoise">2003</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Founded</div>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <div className="text-sm font-bold text-ocean-turquoise uppercase tracking-wider">Prize</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">UNDP Equator Prize</div>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <div className="text-sm font-bold text-ocean-turquoise uppercase tracking-wider">Royal</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Royal Visit 2023</div>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-4 text-ocean-turquoise font-bold hover:text-ocean-midnight transition-colors"
              >
                Read our full story →
              </Link>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {TIMELINE.map((item, i) => (
                <div key={item.year} className="flex gap-5 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-ocean-turquoise/10 border-2 border-ocean-turquoise flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-ocean-turquoise">{item.year.slice(2)}</span>
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Women & Ocean ─────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1a6b5a] to-ocean-seafoam py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-4">Women &amp; Ocean</p>
              <h2 className="text-4xl font-poppins font-bold text-white mb-6">
                Women at the Heart of Conservation
              </h2>
              <p className="text-white/85 leading-relaxed mb-4">
                From coral restoration divers to eco-entrepreneurs to community leaders, women are at
                the heart of the Oceans Alive model. The LIFT Network and Trash4Cash programmes place
                financial independence and conservation leadership directly in the hands of Kilifi's
                coastal women.
              </p>
              <p className="text-white/85 leading-relaxed mb-8">
                Women collect, sort, and sell plastic waste — transforming environmental harm into
                economic gain while protecting the beaches and reefs that sustain their communities.
                Over 80 women now participate, collecting more than 2 tonnes of plastic monthly.
              </p>
              <Link
                href="/programmes/trash4cash"
                className="inline-flex items-center gap-2 bg-white text-[#1a6b5a] font-bold px-6 py-3 rounded-xl hover:bg-ocean-midnight hover:text-white transition-all duration-200"
              >
                Support Women's Programmes →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-48 rounded-2xl overflow-hidden col-span-2">
                <Image src="/images/trashforcash.jpg" alt="Women in Kilifi's Trash4Cash programme" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="relative h-36 rounded-2xl overflow-hidden">
                <Image src="/images/trashforcash2.jpg" alt="Trash4Cash women sorting plastic" fill className="object-cover" />
              </div>
              <div className="relative h-36 rounded-2xl overflow-hidden">
                <Image src="/images/farmers.jpg" alt="Women with fresh produce" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────── */}
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

        {/* Rotated side text — left edge */}
        <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-center select-none pointer-events-none">
          <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-ocean-turquoise/20 whitespace-nowrap">
            Kilifi · Kenya · Est. 2003
          </span>
        </div>

        {/* ── Content ── */}
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
                Quarterly updates from the field — conservation progress, stories from Kilifi's coast,
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

            {/* Right — form card */}
            <div className="relative">
              <p className="absolute -top-7 -left-1 text-[100px] font-poppins font-black text-ocean-turquoise/[0.04] leading-none select-none pointer-events-none">
                OAF
              </p>

              <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 md:p-10">
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

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="bg-white py-14 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-poppins font-bold text-ocean-midnight">
                Ready to make an impact?
              </h3>
              <p className="text-ocean-turquoise mt-1">
                Join 1,200+ community members protecting coastal Kenya since 2003.
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
