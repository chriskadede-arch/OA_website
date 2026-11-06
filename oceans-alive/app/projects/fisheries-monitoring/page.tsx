/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Project › Fisheries Monitoring Capacity (KAMAMKUKI)
 * URL:  /projects/fisheries-monitoring
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Geography band
 *   3. Overview
 *   4. Two phase build
 *   5. Collaboration
 *   6. Call to action
 *
 * Where the text/data lives:
 *   • FUNDER  →  top of this file
 */
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Fisheries Monitoring Capacity, KAMAMKUKI JCMA | Oceans Alive Foundation',
  description: 'A two phase programme turning five Beach Management Units across two counties into a single, evidence led system for monitoring and defending shared fisheries.',
};

const FUNDER = { name: 'Blue Ventures Conservation', logo: '/images/partners/blue-ventures.png' };

export default function FisheriesMonitoringPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/kamakukijcma.jpg"
            alt="Fisheries Monitoring Capacity, KAMAMKUKI JCMA"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 via-emerald-900/70 to-ocean-midnight" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-ocean-turquoise rounded-full animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">October 2024 to November 2026</span>
            </div>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Fisheries Monitoring Capacity, KAMAMKUKI JCMA
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              With funding from Blue Ventures Conservation, Oceans Alive is strengthening fisheries monitoring and co-management across five Beach Management Units.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">304 km²</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">JCMA Area</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">5</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">BMUs</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">10</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">Landing Sites</div>
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
          SECTION 2 · Geography band
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-emerald-50 py-10 border-b border-emerald-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-emerald-100">
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-2">Kilifi County</p>
              <p className="font-poppins font-bold text-ocean-midnight">Kuruwitu, Kanamai and Mtwapa BMUs</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-emerald-100">
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-2">Mombasa County</p>
              <p className="font-poppins font-bold text-ocean-midnight">Marina and Kidongo BMUs</p>
            </div>
          </div>
          <p className="text-center text-gray-600 leading-relaxed mt-6 max-w-2xl mx-auto">
            Together these five Beach Management Units manage roughly 304 square kilometres of coastal and marine waters within Kenya's territorial sea, alongside the Kenya Fisheries Service and their respective county governments.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Overview
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Why It Matters</p>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">
                Reliable Data for a Resource Under Pressure
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The JCMA faces a familiar set of pressures: destructive and illegal fishing, declining fish stocks, habitat degradation, weak enforcement, and thin institutional capacity within the co-management bodies meant to hold the line.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The response is built around governance and institutional development, fisheries catch and ecological monitoring, compliance strengthening, financial resilience for fishing households, and community food security, delivered under Kenya's Fisheries Management and Development Act No. 35 of 2016. Delivery combines ongoing fisheries data collection, community resource surveys, data feedback sessions, compliance assessments, exchange visits, stakeholder engagement and technical partnerships, aimed at systems that keep working long after the project ends.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '400px' }}>
              <Image
                src="/images/Capacityassess.jpg"
                alt="Fisheries capacity assessment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Two phase build
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Project Phases</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">
              Building the System in Two Stages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-ocean-turquoise text-white rounded-full flex items-center justify-center mb-4 font-poppins font-bold text-xl">1</div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">October 2024 to September 2025</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Diagnosed and closed governance and institutional capacity gaps across all five BMUs, and stood up a fisheries catch monitoring system at ten landing sites within the JCMA.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-ocean-turquoise text-white rounded-full flex items-center justify-center mb-4 font-poppins font-bold text-xl">2</div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">December 2025 to November 2026</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Adds structured BMU governance mentorship, peer learning between BMUs, Village Savings and Loan Associations for financial resilience, and deeper fisheries and ecological monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Collaboration
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Collaboration</p>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">
            One Table, Five BMUs and Their Governments
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Oceans Alive and Blue Ventures work closely with the five BMUs, the KAMAMKUKI Joint Co-Management Area Committee, national and county government institutions, and research organisations. The aim is a stronger, better coordinated co-management system: capable BMUs, reliable fisheries information, improved compliance, greater community financial resilience, and partnerships built to last beyond the project itself.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 · Call to action
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-ocean-midnight to-ocean-turquoise/30 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            Help Strengthen Fisheries Governance
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Your support helps BMUs monitor and manage shared fisheries resources for the long term.
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
