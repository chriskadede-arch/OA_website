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
    year: '2019',
    tag: 'UNDP Equator Prize',
    tagColor: 'bg-ocean-turquoise/15 text-ocean-turquoise border border-ocean-turquoise/30',
    title: 'UNDP Equator Prize',
    sub: 'United Nations Development Programme',
    body:
      'Awarded the prestigious UNDP Equator Prize for exemplary community-based approaches to conservation and sustainable development - placing Oceans Alive on the world stage of environmental leadership.',
    highlight: 'One of the world\'s most recognised prizes for grassroots environmental action.',
    large: true,
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
  {
    year: '2022',
    tag: 'Policy Landmark',
    tagColor: 'bg-white/10 text-white/60 border border-white/15',
    title: "Kenya's First Ocean Co-Management Plan",
    sub: 'Government of Kenya · Ministry of Blue Economy',
    body:
      "Delivered Kenya's first formal Co-Management Plan under new government guidelines - a historic milestone placing 150 km² under legally recognised community stewardship.",
    highlight: 'Nothing like it had existed before on this coastline.',
    large: false,
  },
  {
    year: '2024',
    tag: 'National Stage',
    tagColor: 'bg-white/10 text-white/60 border border-white/15',
    title: 'World Fisheries Day · National Exhibition',
    sub: "Mombasa · Cabinet Secretary for Blue Economy",
    body:
      "Exhibited collaborative marine conservation at the national World Fisheries Day event in Mombasa, in attendance with Kenya's Cabinet Secretary for Blue Economy & Maritime Affairs.",
    highlight: 'National visibility for a model built in a small coastal village.',
    large: false,
  },
  {
    year: 'Ongoing',
    tag: 'Partnerships',
    tagColor: 'bg-white/10 text-white/60 border border-white/15',
    title: 'International Partnerships',
    sub: 'Canon CENA · Coral Guardian · UK Government · AMG',
    body:
      'Active partnerships with Canon Central & North Africa, Coral Guardian, Platcorp Foundation, UK Government (FCDO), and Athlete Media Group - ensuring world-class expertise supports community-led action.',
    highlight: 'Global partners aligned around a community-driven mission.',
    large: false,
  },
];

export default function RecognitionPage() {
  const large = AWARDS.filter((a) => a.large);
  const small = AWARDS.filter((a) => !a.large);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#040f1a] overflow-hidden py-24 md:py-36">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#FBB308]/5 blur-[120px] pointer-events-none" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(251,179,8,0.5) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-[#FBB308]/70 text-xs font-bold uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-[#FBB308]/30" />
            Chapter 03 · Global Recognition
          </p>
          <h1 className="font-poppins font-bold text-white text-5xl md:text-7xl leading-[0.95] mb-8 max-w-3xl">
            Recognised<br />
            <span className="text-[#FBB308]">By the World.</span>
          </h1>
          <p className="text-white/50 text-xl max-w-xl leading-relaxed">
            Every award, prize, and royal visit reflects the work of the fishing communities
            of Kilifi County - not just our organisation.
          </p>
        </div>
      </section>

      {/* ── Hero Awards (large) ──────────────────────────────────── */}
      <section className="bg-[#040f1a] pb-0 pt-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-5">
            {large.map((award) => (
              <div
                key={award.title}
                className="relative group overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03] p-10 hover:bg-white/[0.06] hover:border-[#FBB308]/20 transition-all duration-300"
              >
                {/* Giant year watermark */}
                <div className="absolute -bottom-4 -right-4 text-[120px] font-poppins font-bold text-white/[0.04] leading-none select-none pointer-events-none">
                  {award.year}
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full ${award.tagColor}`}>
                      {award.tag}
                    </span>
                    <span className="text-4xl font-poppins font-bold text-white/15">{award.year}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-2 leading-tight">
                    {award.title}
                  </h3>
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-6">{award.sub}</p>
                  <p className="text-white/55 leading-relaxed text-sm mb-6">{award.body}</p>

                  <div className="border-t border-white/[0.07] pt-5">
                    <p className="text-xs text-ocean-turquoise italic">&ldquo;{award.highlight}&rdquo;</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Recognitions ───────────────────────────────────── */}
      <section className="bg-[#040f1a] py-5 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {small.map((award) => (
              <div
                key={award.title}
                className="relative group overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300"
              >
                {/* Year watermark */}
                <div className="absolute top-4 right-5 text-4xl font-poppins font-bold text-white/[0.06] leading-none select-none pointer-events-none">
                  {award.year}
                </div>

                <div className="relative">
                  <span className={`inline-block text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full mb-5 ${award.tagColor}`}>
                    {award.tag}
                  </span>
                  <h3 className="text-base font-poppins font-bold text-white mb-1.5 leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-[10px] text-white/25 uppercase tracking-wider mb-4">{award.sub}</p>
                  <p className="text-white/45 text-sm leading-relaxed">{award.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote Strip ──────────────────────────────────────────── */}
      <section className="bg-ocean-midnight py-16 border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-3xl md:text-4xl font-poppins font-bold text-white leading-snug">
            &ldquo;These awards don&apos;t belong to Oceans Alive.<br />
            <span className="text-ocean-turquoise">They belong to the communities of Kilifi.</span>&rdquo;
          </p>
          <p className="mt-6 text-white/35 text-sm uppercase tracking-widest">
            - Desmond Bowden, Founder
          </p>
        </div>
      </section>

      {/* ── Next Chapter CTA ─────────────────────────────────────── */}
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
