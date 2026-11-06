/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: About › Recognition & Awards
 * URL:  /about/recognition
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. All Awards — 3x2 Grid
 *   3. Quote Strip
 *   4. Next Chapter (call to action)
 *
 * Where the text/data lives:
 *   • AWARDS  →  top of this file
 */
import Link from 'next/link';

export const metadata = {
  title: 'Recognition & Awards - Oceans Alive Foundation',
  description:
    'UNDP Equator Prize, King Charles III Royal Visit, IUCN World Conservation Congress 2025 - global recognition for community-led marine conservation.',
};

const AWARDS = [
  {
    year: '2023',
    tag: 'Royal Visit',
    tagColor: 'bg-[#FBB308]/15 text-[#FBB308] border border-[#FBB308]/30',
    title: 'His Majesty King Charles III',
    sub: 'Kuruwitu Marine Sanctuary · Kilifi, Kenya',
    body:
      'His Majesty King Charles III personally visited the Kuruwitu project, launched a coral restoration block bearing his royal cypher into the waters, and endorsed the community-led conservation model to a global audience of millions.',
    highlight: 'Royal endorsement carried the work of Kilifi\'s fishermen to every corner of the world.',
    large: true,
  },
  {
    year: '2017',
    tag: 'UNDP Equator Prize',
    tagColor: 'bg-ocean-turquoise/15 text-ocean-turquoise border border-ocean-turquoise/30',
    title: 'UNDP Equator Prize 2017',
    sub: 'United Nations Development Programme',
    body:
      'Kuruwitu CBO wins the prestigious UNDP Equator Prize for exemplary community-based approaches to conservation and sustainable development - placing the community-led model on the world stage of environmental leadership.',
    highlight: 'One of the world\'s most recognised prizes for grassroots environmental action.',
    large: true,
  },
  {
    year: '2022',
    tag: 'Blue Champions',
    tagColor: 'bg-sky-400/15 text-sky-400 border border-sky-400/30',
    title: 'IUCN Blue Champions Award 2022',
    sub: 'International Union for Conservation of Nature',
    body:
      'Kuruwitu CBO wins the 2022 IUCN Blue Champions Award, recognizing outstanding ocean conservation leadership and two decades of proven community-driven marine protection delivering 400% fish biomass increase and 30% coral recovery.',
    highlight: 'Global recognition for champions protecting our ocean for future generations.',
    large: true,
  },
  {
    year: '2021',
    tag: 'UN Food Systems',
    tagColor: 'bg-[#6ee7b7]/15 text-[#6ee7b7] border border-[#6ee7b7]/30',
    title: 'United Nations Food Systems Game Changer',
    sub: 'UN Food Systems Summit',
    body:
      'Recognized as a Food System Game Changer for innovative community-led approaches linking ocean health, fisheries management, and food security in coastal communities.',
    highlight: 'Transforming how communities manage ocean resources for sustainable livelihoods.',
    large: false,
  },
  {
    year: '2024',
    tag: 'WEF Innovator',
    tagColor: 'bg-purple-400/15 text-purple-400 border border-purple-400/30',
    title: 'World Economic Forum - Uplink Top Innovator',
    sub: 'World Economic Forum',
    body:
      'Selected as a top innovator by the World Economic Forum\'s UpLink platform for scalable ocean conservation solutions.',
    highlight: 'Global recognition for innovation in marine conservation.',
    large: false,
  },
  {
    year: '2025',
    tag: 'IUCN Congress',
    tagColor: 'bg-[#6ee7b7]/15 text-[#6ee7b7] border border-[#6ee7b7]/30',
    title: 'IUCN World Conservation Congress',
    sub: 'International Union for Conservation of Nature',
    body:
      "Presented the Kuruwitu community co-management model as a globally scalable blueprint for marine governance at the world's largest conservation forum.",
    highlight: 'From 30 hectares to a global template - Kuruwitu on the world stage.',
    large: false,
  },
];

export default function RecognitionPage() {
  const large = AWARDS.filter((a) => a.large);
  const small = AWARDS.filter((a) => !a.large);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-amber-50/30 overflow-hidden pt-36 pb-24 md:pt-48 md:pb-36">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#FBB308]/10 blur-[120px] pointer-events-none" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(251,179,8,0.5) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-[#FBB308] text-xs font-bold uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-[#FBB308]/60" />
            Global Recognition
          </p>
          <h1 className="font-poppins font-bold text-ocean-midnight text-5xl md:text-7xl leading-[0.95] mb-8 max-w-3xl">
            Recognised<br />
            <span className="text-[#FBB308]">By the World.</span>
          </h1>
          <p className="text-gray-700 text-xl max-w-xl leading-relaxed">
            Every award, prize, and royal visit reflects the work of the fishing communities
            of Kilifi County - not just our organisation.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · All Awards — 3x2 Grid
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-10 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {AWARDS.map((award) => (
              <div
                key={award.title}
                className="relative group overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 hover:shadow-xl hover:border-ocean-turquoise/30 transition-all duration-300"
              >
                {/* Year watermark */}
                <div className="absolute top-4 right-5 text-4xl font-poppins font-bold text-gray-100 leading-none select-none pointer-events-none">
                  {award.year}
                </div>

                <div className="relative">
                  <span className={`inline-block text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full mb-5 ${award.tagColor}`}>
                    {award.tag}
                  </span>
                  <h3 className="text-base font-poppins font-bold text-ocean-midnight mb-1.5 leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-4">{award.sub}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{award.body}</p>

                  {award.highlight && (
                    <div className="border-t border-white/[0.07] pt-4 mt-4">
                      <p className="text-xs text-ocean-turquoise/80 italic">&ldquo;{award.highlight}&rdquo;</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Quote Strip
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-16 border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-3xl md:text-4xl font-poppins font-bold text-white leading-snug">
            &ldquo;These recognitions celebrate the dedication of Kilifi's coastal communities.<br />
            <span className="text-ocean-turquoise">Their commitment to ocean stewardship is what makes this work possible.</span>&rdquo;
          </p>
          <p className="mt-6 text-white/35 text-sm uppercase tracking-widest">
            - Des Bowden, Co-Founder & CEO
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Next Chapter (call to action)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-14">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm">
            <span className="font-bold text-white/70">Continue reading:</span> Meet the organisations partnering with us to protect Kenya&apos;s ocean.
          </p>
          <Link
            href="/about/partners"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-ocean-turquoise text-ocean-midnight font-bold text-sm rounded-xl hover:bg-white transition-all duration-200"
          >
            Our Partners <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
