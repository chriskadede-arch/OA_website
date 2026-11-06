/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Project › Elasmobranch Awareness & Permaculture
 * URL:  /projects/elasmobranch-awareness
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Did You Know callout
 *   3. Overview
 *   4. Three Phase Roadmap
 *   5. Call to action
 *
 * Where the text/data lives:
 *   • FUNDER  →  top of this file
 */
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Elasmobranch Awareness & Permaculture | Oceans Alive Foundation',
  description: 'A three phase shark and ray conservation project across four Beach Management Units, growing into permaculture and water security for Timboni village.',
};

const FUNDER = { name: 'Coral Reef Care', logo: '/images/partners/coral-reef-care.jpg' };

export default function ElasmobranchAwarenessPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/fisher.jpg"
            alt="Elasmobranch Awareness & Permaculture Project"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-ocean-midnight" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-ocean-turquoise rounded-full animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Ongoing Since 2024</span>
            </div>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Elasmobranch Awareness & Permaculture
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              A three year, part time partnership with Coral Reef Care, teaching coastal communities and schools why sharks and rays matter, then turning that trust into food and water security.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">4</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">BMUs</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">3</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">Phases</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">2024</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">Started</div>
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
          SECTION 2 · Did You Know callout
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-10 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl p-8 border border-slate-200">
            <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 font-poppins font-bold">?</div>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-ocean-midnight">Why this project exists: </span>
              As apex predators, sharks accumulate toxins, including heavy metals and pesticides, in their tissue over a lifetime. Eating shark meat carries that risk forward. Awareness sessions explain this alongside the ecological case for leaving elasmobranchs in the water.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Overview
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Project Overview</p>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">
                From the KAMAMKUKI JCMA to the Kitchen Garden
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Since 2024, Oceans Alive Foundation has partnered with Coral Reef Care to raise awareness of elasmobranch conservation within the KAMAMKUKI Joint Co-Management Area, working directly with fishers from four Beach Management Units: Marina, Kidongo, Kanamai and Kuruwitu.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sessions combine PowerPoint presentations, educational films, handouts and posters to build understanding of elasmobranch ecology, their importance to a healthy reef, the threats they face from overfishing, and the sustainable fishing practices and gear choices that reduce shark and ray bycatch.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Key partners: the Ministry of Education, the Teachers Service Commission, the Directorate of Fisheries for Mombasa and Kilifi County, the four BMUs, participating schools, and the Timboni Community Group.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '400px' }}>
              <Image
                src="/images/BMUmeeting.jpg"
                alt="BMU awareness session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Three Phase Roadmap
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">The Roadmap</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">
              Three Phases, One Growing Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-slate-700">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Phase 1</div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-4">Schools and First Contact</h3>
              <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                <li>2 schools reached, 100 learners</li>
                <li>108 walk in learners at Bahari Hai Education Centre</li>
                <li>3 BMU groups mobilized, 66 fishers reached</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-slate-700">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Phase 2</div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-4">Expanding to Four BMUs</h3>
              <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                <li>Outreach expanded to all 4 BMUs, 120 members reached</li>
                <li>Discussions on gear threats and sustainable fishing</li>
                <li>2026 continuation targets 80 fishers in Kanamai and Kuruwitu, chosen for high recent elasmobranch activity</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-slate-700">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Phase 3</div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-4">Permaculture and Water Security</h3>
              <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                <li>Climate smart backyard kitchen gardening for 40 households in Timboni village</li>
                <li>Two concrete water storage tanks planned for rainwater harvesting</li>
                <li>Strengthens household resilience through the dry season</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Call to action
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-ocean-midnight to-ocean-turquoise/30 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            Help Protect Sharks and Rays
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Your support carries this work from awareness into food and water security for the families who share the reef with these animals.
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
