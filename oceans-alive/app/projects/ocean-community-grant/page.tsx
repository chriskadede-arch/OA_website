/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Project › Ocean Community Grant: OCG2/1012
 * URL:  /projects/ocean-community-grant
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero (with partner logos)
 *   2. Impact band
 *   3. The challenge
 *   4. Designed to include
 *   5. The bigger picture
 *   6. Call to action
 *
 * Where the text/data lives:
 *   • PARTNERS  →  top of this file
 */
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Ocean Community Grant: OCG2/1012 | Oceans Alive Foundation',
  description: 'Enhancing livelihoods through locally developed approaches to reduce illegal fishing practices across five coastal communities in Kenya.',
};

const PARTNERS = [
  { name: 'UK International Development', logo: '/images/partners/uk-international-development.png', box: 'w-44 h-16' },
  { name: 'Ocean Community Empowerment and Nature (OCEAN) Grantee', logo: '/images/partners/ocean-grantee-symbol.png', box: 'w-28 h-28', zoom: true },
];

const APPROACH = [
  'Locally developed action to reduce illegal fishing gear and practices.',
  'Peer learning that strengthens skills and community ownership.',
  'More inclusive, diversified livelihood opportunities.',
  'A model with potential for local, national, and regional replication.',
];

const REACH = [
  { value: '25', label: 'Peer trainers, with 40% women' },
  { value: '200', label: 'Community members to receive peer training' },
  { value: '50', label: 'People taking part in livelihood training' },
  { value: '80% / 20%', label: 'Youth and people living with disabilities among livelihood trainees' },
];

export default function OceanCommunityGrantPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero (with partner logos)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/kamakukijcma.jpg"
            alt="Coastal community in the KAMAMKUKI Joint Co-Management Area"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-violet-900/80 via-violet-900/70 to-ocean-midnight" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-40">
          <div className="max-w-3xl lg:max-w-2xl xl:max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-ocean-turquoise rounded-full animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Ocean Community Grant · OCG2/1012</span>
            </div>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              A Fairer Catch.<br />
              <span className="text-ocean-turquoise">A Stronger Coast.</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Enhancing livelihoods through locally developed approaches to reduce illegal fishing practices. Across five Beach Management Units in the KAMAMKUKI Joint Co-Management Area, communities are shaping solutions that protect the sea and create more inclusive ways to earn a living.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">695</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">IPLC Beneficiaries</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">31%</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">Women</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">4,164</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">People Reached</div>
              </div>
            </div>

            {/* Partner logos, inline on smaller screens */}
            <div className="lg:hidden mt-10 inline-flex flex-wrap items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
              <span className="w-full text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Funded by</span>
              {PARTNERS.map((p) => (
                <div key={p.name} className="relative w-32 h-16 bg-white rounded-xl overflow-hidden">
                  <Image src={p.logo} alt={p.name} fill className={`object-contain p-2 ${p.zoom ? 'scale-[1.35]' : ''}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner badge, floating right */}
        <div className="hidden lg:flex absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 flex-col items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Funded by</span>
          {PARTNERS.map((p) => (
            <div key={p.name} className={`relative ${p.box} bg-white rounded-xl overflow-hidden`}>
              <Image src={p.logo} alt={p.name} fill className={`object-contain p-2 ${p.zoom ? 'scale-[1.35]' : ''}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Impact band
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-violet-50 py-10 border-b border-violet-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-violet-100">
              <p className="text-xs font-bold text-violet-700 uppercase tracking-widest mb-2">Where</p>
              <p className="font-poppins font-bold text-ocean-midnight">KAMAMKUKI Joint Co-Management Area</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-violet-100">
              <p className="text-xs font-bold text-violet-700 uppercase tracking-widest mb-2">Who</p>
              <p className="font-poppins font-bold text-ocean-midnight">Five Beach Management Units</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-violet-100">
              <p className="text-xs font-bold text-violet-700 uppercase tracking-widest mb-2">Habitat</p>
              <p className="font-poppins font-bold text-ocean-midnight">25 km² of nearshore waters</p>
            </div>
          </div>
          <p className="text-center text-gray-600 leading-relaxed mt-6 max-w-2xl mx-auto">
            When communities thrive, the ocean has room to recover.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · The challenge
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">The Challenge</p>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">
                Healthy Waters. Secure Livelihoods.
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Illegal fishing is putting pressure on fish stocks, marine habitats, and the families who depend on the sea. Gear exchange efforts can fall short when communities do not shape and own the solutions. In KAMAMKUKI, five fishing communities are working together to co-manage 25 km² of nearshore habitat, where dragnetting remains a challenge.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                This project puts local leadership at the centre: reducing harmful gear and practices while building skills and opening up diversified income opportunities for fishers, women, youth, and people with disabilities.
              </p>
              <ol className="space-y-3">
                {APPROACH.map((item, i) => (
                  <li key={item} className="flex gap-4 items-start">
                    <span className="shrink-0 w-9 h-9 bg-ocean-turquoise text-white rounded-full flex items-center justify-center font-poppins font-bold text-sm">{i + 1}</span>
                    <span className="text-gray-700 leading-relaxed pt-1.5">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '480px' }}>
              <Image
                src="/images/fisher.jpg"
                alt="A fisher on the Kenyan coast carrying his nets"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Designed to include
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Designed to Include</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">
              Opportunity Should Reach Everyone
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {REACH.map((r) => (
              <div key={r.label} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl md:text-4xl font-poppins font-bold text-violet-700 mb-2">{r.value}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{r.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12">
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '320px' }}>
              <Image
                src="/images/womenlearning2.jpg"
                alt="Community members at a training session"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Half of the 200 community members to be trained are women. The project&apos;s 695 direct IPLC beneficiaries and their households, an estimated 4,164 people, are projected to benefit from healthier ecosystems and stronger fisheries.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · The bigger picture
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">The Bigger Picture</p>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">
            A Better Future for People and the Sea
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By supporting community-owned solutions, the initiative aims to restore habitats, improve fish stocks, strengthen incomes, and inspire approaches that can travel beyond the coast.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 · Call to action
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-ocean-midnight to-ocean-turquoise/30 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            Support Community-Led Change
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Your support helps fishing communities replace harmful practices with livelihoods that last.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/donate"
              className="px-8 py-4 bg-ocean-turquoise text-white rounded-xl font-bold hover:bg-white hover:text-ocean-turquoise transition-all shadow-lg"
            >
              Support This Project
            </Link>
            <Link
              href="/#projects"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-ocean-midnight transition-all"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
