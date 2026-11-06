/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Project › Pelorus SHE Trash4Cash
 * URL:  /projects/pelorus-she
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. SHE explainer
 *   3. Ripple Effect
 *   4. What peer training covers
 *   5. Turtle nesting highlight
 *   6. Call to action
 *
 * Where the text/data lives:
 *   • FUNDER  →  top of this file
 */
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Pelorus SHE Trash4Cash Initiative | Oceans Alive Foundation',
  description: "A women's clean up movement that started with 19 fishmongers at Kuruwitu and rippled to a 35 strong group in Kanamai, guarding a prime turtle nesting beach.",
};

const FUNDER = { name: 'Pelorus Foundation', logo: '/images/partners/pelorus-foundation.jpg' };

export default function PelorusShePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/trashforcash.jpg"
            alt="Pelorus SHE Trash4Cash Initiative"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pink-900/80 via-pink-900/70 to-ocean-midnight" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-ocean-turquoise rounded-full animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Running Since 2022</span>
            </div>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Pelorus SHE Trash4Cash Initiative
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-3">
              Bolstering our Social, Health and Environment initiative: turning beach clean ups into a livelihood and a biodiversity win for the Mama Karanga fishmongers of Kanamai BMU.
            </p>
            <p className="text-sm text-white/60 uppercase tracking-widest mb-8">
              With the KAMAMKUKI Joint Co-Management Area and Kanamai Beach Management Unit
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">100</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">Women Recycling</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">600</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">In Permaculture</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">35</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">Kanamai Women</div>
              </div>
            </div>
          </div>
        </div>

        {/* Funder badge, floating right */}
        <div className="hidden lg:flex absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 flex-col items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Partner</span>
          <div className="relative w-36 h-20 bg-white rounded-xl p-3">
            <Image src={FUNDER.logo} alt={FUNDER.name} fill className="object-contain p-2" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · SHE explainer
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-pink-50 border border-pink-100">
              <p className="font-poppins font-bold text-pink-800 text-lg">Social</p>
              <p className="text-xs text-gray-500 mt-1">Women's groups and peer networks</p>
            </div>
            <div className="p-5 rounded-2xl bg-pink-50 border border-pink-100">
              <p className="font-poppins font-bold text-pink-800 text-lg">Health</p>
              <p className="text-xs text-gray-500 mt-1">Cleaner beaches, safer communities</p>
            </div>
            <div className="p-5 rounded-2xl bg-pink-50 border border-pink-100">
              <p className="font-poppins font-bold text-pink-800 text-lg">Environment</p>
              <p className="text-xs text-gray-500 mt-1">Plastic removed, habitats protected</p>
            </div>
          </div>
          <p className="text-center text-gray-600 leading-relaxed mt-8 max-w-2xl mx-auto">
            S.H.E. stands for Social, Health, and Environment, the three strands Oceans Alive has woven together for female fishmongers it calls the guardians of the ocean.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Ripple Effect
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">The Ripple Effect</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">
              How 19 Women Became a Coastwide Movement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-pink-700 flex flex-col">
              <p className="text-xs font-bold text-pink-600 uppercase tracking-widest mb-2">The Pilot</p>
              <div className="text-3xl font-poppins font-bold text-ocean-midnight mb-3">19 Women</div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">With Pelorus Foundation support, 19 women fishmongers formed the Kuruwitu Women Group, piloting a trash for cash approach to beach clean ups.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-pink-700 flex flex-col">
              <p className="text-xs font-bold text-pink-600 uppercase tracking-widest mb-2">The Proof</p>
              <div className="text-3xl font-poppins font-bold text-ocean-midnight mb-3">100 &amp; 600</div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">The idea grew: 100 women now sell collected plastic to a recycling company, and 600 are involved in climate smart permaculture.</p>
            </div>
            <div className="bg-pink-800 rounded-2xl p-6 shadow-sm flex flex-col">
              <p className="text-xs font-bold text-pink-200 uppercase tracking-widest mb-2">The Replication</p>
              <div className="text-3xl font-poppins font-bold text-white mb-3">35 in Kanamai</div>
              <p className="text-sm text-pink-100 leading-relaxed flex-1">Experienced Kuruwitu women became peer trainers for the new Soft Coral Kanamai Self Help Group, passing on everything they had learned.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · What peer training covers
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '380px' }}>
              <Image
                src="/images/trashforcash2.jpg"
                alt="Women's trash-for-cash group"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Peer to Peer Training</p>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">
                What the Kuruwitu Women Pass On
              </h2>
              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-600 mt-2 shrink-0" />
                  Institutional capacity building and group formalization
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-600 mt-2 shrink-0" />
                  Village Savings and Loan Association operations
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-600 mt-2 shrink-0" />
                  Benefit sharing standard operating procedures
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-600 mt-2 shrink-0" />
                  Plastic processing, recycling, and agreements with recycling companies
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-6">
                Oceans Alive backs every group with training manuals, leaflets and guidebooks, so the model keeps travelling long after the trainers go home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Turtle nesting highlight
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/80 text-lg leading-relaxed">
            The Kanamai clean ups protect more than income: they guard a beach that is one of the area's prime sea turtle nesting sites, tying every bag of plastic removed to a nest with a better chance of surviving.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 · Call to action
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-ocean-midnight to-ocean-turquoise/30 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            Help Empower More Women Fishmongers
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Your support helps carry trash for cash livelihoods and beach clean ups to the next BMU along the coast.
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
