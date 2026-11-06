/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Strategic Objective 4 › Institutional Capacity (Governance)
 * URL:  /programs/research-innovation
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Governance Pillar
 *   3. What We Do
 */
import Link from 'next/link';
import Image from 'next/image';
import SDGRow from '@/components/common/SDGRow';

export const metadata = {
  title: 'Research, Innovation & Sustainable Finance',
  description: 'Scientific monitoring, data-driven conservation, and sustainable revenue models.',
};

export default function ResearchInnovationPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-cyan-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/oceansmen.jpg" alt="Research & Innovation" fill className="object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-24 md:pt-40 md:pb-32">
          <div className="text-6xl font-poppins font-bold text-white/20 mb-4">04</div>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-6">Strengthen Institutional Capacity</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">
            This programme generates the evidence, innovation and financial sustainability that support long-term conservation. It combines scientific monitoring (in partnership with WCS), community knowledge and sustainable revenue models.
          </p>

          {/* Impact Boxes */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">85%</div>
                <div className="text-[9px] text-white/50 uppercase">Coral Survival Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">Quarterly</div>
                <div className="text-[9px] text-white/50 uppercase">Monitoring Surveys</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">400%</div>
                <div className="text-[9px] text-white/50 uppercase">Fish Biomass Increase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">Data-Driven</div>
                <div className="text-[9px] text-white/50 uppercase">Conservation</div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="text-[9px] text-white/30 uppercase">UN SDGs</span>
              <SDGRow sdgs={[14, 13, 17]} size="sm" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Governance Pillar
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-cyan-900 to-blue-900 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">Governance Pillar</h2>
            <p className="text-white/70 text-sm uppercase tracking-widest">Strategic Plan 2020-25 | Pillar of Development</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-poppins font-bold text-white mb-6">Governance & Co-Management</h3>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed mb-6">
                Supporting fisheries communities of Kilifi County in application of <strong className="text-ocean-turquoise">state and county policies, rules and regulations</strong> governing aquatic resource ownership. This is achieved by promoting the <strong className="text-ocean-turquoise">Joint and Co-Management Areas</strong> that allow fishers rights to <strong className="text-ocean-turquoise">community based natural resource management</strong>, targeting fisheries co-management through core activities of <strong className="text-ocean-turquoise">Beach Management Units (BMU)</strong>.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-cyan-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Beach Management Units</h4>
                  <p className="text-white/70 text-sm">18 BMUs across Kilifi Network coordinating community-based fisheries governance.</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-blue-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Joint Co-Management</h4>
                  <p className="text-white/70 text-sm">120 km² under Kenya's first Co-Management Plan - community rights meet institutional support.</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-teal-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Policy Application</h4>
                  <p className="text-white/70 text-sm">Supporting communities in applying state and county regulations for resource ownership.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · What We Do
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-12">What We Do</h2>

          {/* Direct Answer - What We Do */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-cyan-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-cyan-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">Scientific Monitoring</h3>
              <p className="text-gray-600 text-sm">Quarterly ecosystem health surveys with WCS tracking coral, fish biomass, and seagrass across 15 years of data.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-blue-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">BMU Network Coordination</h3>
              <p className="text-gray-600 text-sm">Supporting 18 Beach Management Units managing 120 km² of co-managed waters across Kilifi County.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-green-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">Sustainable Finance</h3>
              <p className="text-gray-600 text-sm">Economic models, ecotourism concessions, and revenue strategies that keep conservation alive beyond donor cycles.</p>
            </div>
          </div>

          {/* Why This Works - The Evidence Story */}
          <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-12 bg-white rounded-full"></div>
              <h3 className="text-2xl font-poppins font-bold">Community Passion Needs Professional Backbone</h3>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed mb-4">
                The Kuruwitu model works because it's backed by rigorous science, sustainable finance, and institutional support. Community-led doesn't mean community-alone. Oceans Alive provides the technical expertise, monitoring infrastructure, and evidence base that turns grassroots passion into policy-ready conservation.
              </p>
              <p className="text-white/90 leading-relaxed mb-4">
                In partnership with Wildlife Conservation Society (WCS), we conduct quarterly monitoring surveys that track ecosystem health across coral cover, fish biomass, and seagrass recovery. This isn't data for journals - it's proof that the model works. When the Royal Family visited Kuruwitu in 2023, when IUCN awarded the Blue Champions recognition in 2022, when Kenya's government endorsed the first Co-Management Plan - they did it because the evidence was undeniable.
              </p>
              <p className="text-white/90 leading-relaxed">
                This programme also generates the sustainable revenue models that keep conservation alive beyond donor cycles: economic assessments, business plans, aquatic ecotourism concessions with Vipingo Ridge and LEAP, grants from IUCN/EU BIOPAMA, and KCW-CBO revenue streams generating USD 10–20K annually. Conservation that doesn't pay for itself doesn't last.
              </p>
            </div>
          </div>

          {/* Monitoring & Research Feature */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-6">
              <div className="text-white">
                <h3 className="text-2xl font-poppins font-bold">Scientific Monitoring & Assessment</h3>
                <p className="text-white/90 text-sm">Partnership with Wildlife Conservation Society (WCS) | 15 Years of Data</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-6">
                In partnership with WCS, Oceans Alive conducts quarterly monitoring surveys that track the health of Kuruwitu's marine ecosystems. These aren't academic exercises - they're the proof that community-led conservation delivers measurable, long-term recovery. Fifteen years of data show a 400% increase in fish biomass, 30% reef recovery, 17% seagrass regrowth, and an 85% coral survival rate in restoration sites.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex-shrink-0 text-blue-600">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 3l3 4h-2v4h-2v-4H9l3-4z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-poppins font-bold text-ocean-midnight mb-3">Fish Biomass Monitoring</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Catch Assessment Surveys (CAS) and Frame Surveys (FS) track fish abundance and diversity across the sanctuary and surrounding waters. The 400% biomass increase within the Tengefu LMMA and 135% improvement in surrounding catch prove that protected areas benefit fishers, not just fish.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex-shrink-0 text-pink-600">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-poppins font-bold text-ocean-midnight mb-3">Coral & Ecosystem Health</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Regular assessments measure coral cover, recruitment, and reef condition. An 85% survival rate in coral restoration sites demonstrates that community-led restoration isn't just symbolic - it's rebuilding reefs at scale, backed by science.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-5">
                <div className="text-sm font-bold text-cyan-700 mb-2">Evidence That Changed Policy</div>
                <div className="text-xs text-gray-600 leading-relaxed">
                  This monitoring data underpinned Kenya's first officially endorsed Co-Management Plan (2022), Kenya's first IUCN SAGE analysis, and the development of the 6-step co-management toolkit now being adopted across Kilifi County's 18 BMUs. Science didn't replace community wisdom - it amplified it.
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Sustainable Finance */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">Sustainable Finance Models</h3>
                <div className="text-xs text-green-600 font-bold uppercase mt-1">Beyond Donor Dependency</div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conservation that doesn't generate its own revenue doesn't survive. This programme develops the economic models that keep community-led conservation alive beyond project cycles: aquatic ecotourism concessions with Vipingo Ridge and LEAP, business plans for community-based organizations, and diversified funding from IUCN/EU BIOPAMA and other strategic partners.
              </p>
              <div className="space-y-2">
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-700">KCW-CBO Annual Revenue</div>
                    <div className="text-lg font-bold text-green-600">$10-20K</div>
                  </div>
                </div>
                <div className="bg-teal-50 rounded-lg p-3 text-xs text-gray-700 space-y-1">
                  <div>✓ Vipingo Ridge & LEAP Ecotourism Concessions</div>
                  <div>✓ IUCN/EU BIOPAMA Strategic Grants</div>
                  <div>✓ Economic assessments & business planning</div>
                </div>
              </div>
            </div>

            {/* BMU Network Governance */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">Kilifi BMU Network Coordination</h3>
                <div className="text-xs text-blue-600 font-bold uppercase mt-1">18 BMUs | 120 km² Co-Managed</div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Oceans Alive coordinates the Kilifi County BMU Network - 18 Beach Management Units managing 120 km² of co-managed waters. This isn't bureaucracy; it's how fisher voices reach county and national policy. We support BMUs in applying fisheries policies, developing co-management plans, and ensuring that community rights are recognized and protected.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-sm font-bold text-blue-700 mb-2">What BMUs Control</div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• Joint and Co-Management Area plans (CMAP)</div>
                  <div>• Community-based natural resource management</div>
                  <div>• Fisheries co-management with government</div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width - Scientific Monitoring */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl shadow-xl p-6 sm:p-8 text-white">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="bg-white/20 rounded-lg px-3 py-1 text-white font-bold text-sm inline-block mb-3">Evidence-Based Conservation</div>
                <h3 className="text-2xl font-poppins font-bold mb-3">Scientific Monitoring</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  In partnership with WCS, quarterly monitoring surveys track ecosystem health and conservation impact through Catch Assessment Surveys, Frame Surveys, and the State of Fishery 2021 report.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-xs text-white/70 uppercase mb-1">Partner</div>
                    <div className="text-lg font-bold">WCS</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-xs text-white/70 uppercase mb-1">Data Period</div>
                    <div className="text-lg font-bold">~15 Years</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-xs text-white/70 uppercase mb-1">Survey Frequency</div>
                    <div className="text-lg font-bold">Quarterly</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/programs/learning-leadership" className="inline-flex items-center gap-3 px-6 py-3 bg-ocean-turquoise text-white font-bold rounded-xl hover:bg-ocean-midnight transition-colors">
              <span className="text-white/60 text-sm">1 of 4</span>
              <span>Next: Strengthen Coastal Education →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
