/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Our Work › Governance & Sustainable Fisheries
 * URL:  /programs/governance-fisheries
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. What We Do
 */
import Link from 'next/link';
import Image from 'next/image';
import SDGRow from '@/components/common/SDGRow';

export const metadata = {
  title: 'Governance & Sustainable Fisheries Program',
  description: 'Community governance, BMU networks, and sustainable fisheries management.',
};

export default function GovernanceFisheriesPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-amber-600 to-orange-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/kamakukijcma.jpg" alt="Governance & Fisheries" fill className="object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-24 md:pt-40 md:pb-32">
          <div className="text-6xl font-poppins font-bold text-white/20 mb-4">04</div>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-6">Governance & Sustainable Fisheries</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">
            Strong, collaborative governance is at the core of what Oceans Alive does  -  at least as central as coral restoration. This programme strengthens local institutions, supports communities to participate in decision-making, and promotes sustainable fisheries management through collaborative governance.
          </p>

          {/* Key Impact Metrics */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">17</div>
                <div className="text-[9px] text-white/50 uppercase">BMUs in Network</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">265,000 ha</div>
                <div className="text-[9px] text-white/50 uppercase">Kilifi County Network</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">7,000</div>
                <div className="text-[9px] text-white/50 uppercase">Fishers/Households</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">6-Step</div>
                <div className="text-[9px] text-white/50 uppercase">CMA Toolkit</div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="text-[9px] text-white/30 uppercase">UN SDGs</span>
              <SDGRow sdgs={[14, 17, 8]} size="sm" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · What We Do
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-12">What We Do</h2>

          {/* Policy Milestones Banner */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
            <div className="text-center mb-6">
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">Milestones in Kenyan Co-Management</div>
              <div className="text-3xl font-bold text-amber-700">First in Kenya</div>
              <p className="text-sm text-gray-600 mt-2">Developed by communities and government, with OA providing technical support.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-5 text-center">
                <div className="text-xl font-bold text-orange-700 mb-2">First CMA endorsed (2022)</div>
                <div className="text-sm text-gray-600">Co-Management Area</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-xl p-5 text-center">
                <div className="text-xl font-bold text-yellow-700 mb-2">First BMU Network</div>
                <div className="text-sm text-gray-600">Officially endorsed county network (Kilifi)</div>
              </div>
            </div>
          </div>

          {/* Kilifi County BMU Network Feature */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-amber-600 to-orange-700 p-6">
              <div className="text-white">
                <h3 className="text-2xl font-poppins font-bold">Kilifi County BMU Network</h3>
                <p className="text-white/90 text-sm">First Officially Endorsed County Network</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-6">
                17 BMUs · 265,000 ha · 7,000 fishers/households benefiting · 6-step toolkit · State of Fishery 2021 report · IUCN/EU BIOPAMA support.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl p-5 text-center text-white">
                  <div className="text-3xl lg:text-4xl font-bold mb-1">17</div>
                  <div className="text-xs uppercase opacity-90">BMUs</div>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl p-5 text-center text-white">
                  <div className="text-3xl lg:text-4xl font-bold mb-1">265,000</div>
                  <div className="text-xs uppercase opacity-90">Hectares</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-5 text-center text-white">
                  <div className="text-3xl lg:text-4xl font-bold mb-1">7,000</div>
                  <div className="text-xs uppercase opacity-90">Fishers/Households</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-5 text-center text-white">
                  <div className="text-3xl lg:text-4xl font-bold mb-1">6-Step</div>
                  <div className="text-xs uppercase opacity-90">Toolkit</div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* First CMA */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">First Co-Management Area</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Developed with the Kuruwitu BMU under the BMU Regulations; includes Kenya's first IUCN SAGE (Site Assessment for Governance and Equity) analysis, placing communities at the centre of marine governance.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="text-2xl font-bold text-blue-700">IUCN SAGE</div>
                    <div className="text-xs text-gray-600">First in Kenya</div>
                  </div>
                  <div className="ml-auto">
                    <div className="text-lg font-bold text-blue-600">2022</div>
                    <div className="text-xs text-gray-600">Endorsed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* BMU Capacity Building */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">BMU capacity & operations</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Support to build the capacity of conservation CBOs and BMUs  -  patrol boats, uniforms, scout training and grants for operations.
              </p>
              <div className="space-y-2">
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-sm text-gray-700">Patrol Boats & Scout Training</div>
                </div>
                <div className="bg-teal-50 rounded-lg p-3">
                  <div className="text-sm text-gray-700">Operational Grants</div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width - Data & Monitoring */}
          <div className="bg-gradient-to-r from-ocean-midnight to-blue-900 rounded-2xl shadow-xl p-6 sm:p-8 text-white">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="bg-white/20 rounded-lg px-3 py-1 text-white font-bold text-sm inline-block mb-3">Evidence-Based Policy</div>
                <h3 className="text-2xl font-poppins font-bold mb-3">Fisheries data & monitoring</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Catch Assessment Surveys, Frame Surveys, the State of Fishery 2021 report and MCS plans that inform both community management and national policy, in partnership with WCS.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-xs text-white/70 uppercase mb-1">Partner</div>
                    <div className="text-lg font-bold">WCS</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-xs text-white/70 uppercase mb-1">Report</div>
                    <div className="text-lg font-bold">State of Fishery 2021</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-xs text-white/70 uppercase mb-1">Tools</div>
                    <div className="text-lg font-bold">CAS · FS · MCS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/programmes" className="inline-flex items-center gap-2 px-6 py-3 bg-ocean-turquoise text-white font-bold rounded-xl hover:bg-ocean-midnight transition-colors">
              View All Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
