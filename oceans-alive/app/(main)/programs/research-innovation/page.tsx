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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/oceansmen.jpg" alt="Research & Innovation" fill className="object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-6xl font-poppins font-bold text-white/20 mb-4">05</div>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-6">Research, Innovation & Sustainable Finance</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">
            This programme generates the evidence, innovation and financial sustainability needed to support long-term conservation impact. By combining scientific monitoring, community knowledge and sustainable revenue models, Oceans Alive demonstrates how conservation can be both effective and financially resilient.
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

      {/* What We Do */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-12">What We Do</h2>

          {/* Research Impact Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-6">
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">Evidence-Driven Conservation</div>
              <div className="text-3xl font-bold text-cyan-700">15 Years of Scientific Monitoring</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-700">400%</div>
                <div className="text-xs text-gray-600 uppercase">Fish Biomass Increase</div>
                <div className="text-xs text-green-600 mt-1">WCS Data</div>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-pink-700">30%</div>
                <div className="text-xs text-gray-600 uppercase">Reef Recovery</div>
                <div className="text-xs text-pink-600 mt-1">15 Years</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-cyan-700">85%</div>
                <div className="text-xs text-gray-600 uppercase">Coral Survival Rate</div>
                <div className="text-xs text-cyan-600 mt-1">Restoration Program</div>
              </div>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-amber-700">135%</div>
                <div className="text-xs text-gray-600 uppercase">Income Improvement</div>
                <div className="text-xs text-amber-600 mt-1">Spillover Effect</div>
              </div>
            </div>
          </div>

          {/* Monitoring & Research Feature */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-6">
              <div className="text-white">
                <h3 className="text-2xl font-poppins font-bold">Scientific Monitoring & Assessment</h3>
                <p className="text-white/90 text-sm">Partnership with Wildlife Conservation Society (WCS)</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-poppins font-bold text-ocean-midnight mb-3">Fish Biomass Monitoring</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Tracks changes in fish abundance and diversity to assess ecosystem health and conservation outcomes. 15 years of data documenting 400% increase in fish biomass within the Tengefu LMMA.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-poppins font-bold text-ocean-midnight mb-3">Coral Health Monitoring</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Regular assessments measure coral cover, recruitment and reef condition to guide restoration efforts. 85% survival rate demonstrates restoration effectiveness.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-5">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-bold text-cyan-700 mb-1">Quarterly Monitoring Surveys</div>
                    <div className="text-xs text-gray-600">Catch Assessment Survey (CAS), Frame Survey (FS), State of Fishery 2021</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-700">17%</div>
                    <div className="text-xs text-gray-600">Seagrass Regrowth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Economic Assessments */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">Economic Analysis & Business Plans</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Development of economic assessments and business plans demonstrating financial sustainability of community-led conservation.
              </p>
              <div className="space-y-2">
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-700">KCW-CBO Revenue</div>
                    <div className="text-lg font-bold text-green-600">$10-20K/yr</div>
                  </div>
                </div>
                <div className="bg-teal-50 rounded-lg p-3 text-sm text-gray-700">
                  <div>• KCBMU-NW Business Plan</div>
                  <div>• Coral Restoration Economic Model</div>
                  <div>• Diving Center Feasibility</div>
                </div>
              </div>
            </div>

            {/* Sustainable Tourism */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">Aquatic Ecotourism</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Develops responsible tourism experiences through aquatic concessions, snorkeling packages, and glass-bottom boat tours that generate income while educating visitors.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-sm font-bold text-blue-700 mb-2">Revenue Streams Established</div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• Vipingo Ridge Aquatic Concession</div>
                  <div>• LEAP Student Tours</div>
                  <div>• Eco-tourism Packages & Pricing</div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width - Sustainable Finance */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="bg-white/20 rounded-lg px-3 py-1 text-white font-bold text-sm inline-block mb-3">Financial Resilience</div>
                <h3 className="text-2xl font-poppins font-bold mb-3">Sustainable Finance Mechanisms</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Develops innovative revenue streams, conservation fees and enterprise models that help ensure long-term sustainability of conservation initiatives. Securing grants from Rochefeller Foundation, Body Shop, IUCN/EU BIOPAMA and international partnerships.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-xs text-white/70 uppercase mb-1">Grants Secured</div>
                    <div className="text-lg font-bold">IUCN BIOPAMA</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-xs text-white/70 uppercase mb-1">Awards Won</div>
                    <div className="text-lg font-bold">2017 & 2022</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-xs text-white/70 uppercase mb-1">Global Recognition</div>
                    <div className="text-lg font-bold">IUCN Panorama</div>
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
