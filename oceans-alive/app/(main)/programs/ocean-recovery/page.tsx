import Link from 'next/link';
import Image from 'next/image';
import SDGRow from '@/components/common/SDGRow';

export const metadata = {
  title: 'Ocean Recovery Program',
  description: 'Healthy oceans support healthy communities. Coral restoration, fisheries protection, and marine ecosystem recovery.',
};

export default function OceanRecoveryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ocean-midnight to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/divers.jpg" alt="Ocean Recovery" fill className="object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-6xl font-poppins font-bold text-white/20 mb-4">01</div>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-6">Ocean Recovery</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">
            Healthy oceans support healthy communities. Our Ocean Recovery programme helps coastal communities protect and restore the ecosystems they depend on — from coral reefs and fisheries to sea-turtle habitats. Coral restoration is one of several workstreams within this programme, alongside fisheries and habitat management.
          </p>

          {/* Key Impact Metrics */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-5 py-3">
                <div className="text-3xl font-poppins font-bold text-white">25,000+</div>
                <div className="text-[10px] text-white/60 uppercase tracking-wide">Corals Out-Planted Since 2019</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-5 py-3">
                <div className="text-3xl font-poppins font-bold text-white">457</div>
                <div className="text-[10px] text-white/60 uppercase tracking-wide">Artificial Reefs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-5 py-3">
                <div className="text-3xl font-poppins font-bold text-white">39 ha</div>
                <div className="text-[10px] text-white/60 uppercase tracking-wide">Reef Restored (30 ha Tengefu + 9 ha Madowani)</div>
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
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-12">What We Do</h2>

          {/* Featured Project - Tengefu LMMA */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-8 border-ocean-turquoise">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-ocean-turquoise/10 rounded-lg px-3 py-1 text-ocean-turquoise font-bold text-sm">20 Year Journey</div>
              <div className="bg-amber-100 rounded-lg px-3 py-1 text-amber-700 font-bold text-sm">First in Kenya</div>
            </div>
            <h3 className="text-2xl font-poppins font-bold text-ocean-midnight mb-4">30-ha Tengefu</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Established by the Kuruwitu community in 2006, one of Kenya's earliest community-driven Locally Managed Marine Areas. Around 15 years of community management delivered strong ecosystem recovery and economic benefits for 300+ households.
            </p>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h4 className="font-bold text-ocean-midnight mb-2">Kuruwitu Co-Management Area (Milestone, 2022)</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                120 km² (12,000 ha) under Kenya's first officially endorsed Co-Management Plan, developed by the Kuruwitu BMU with Kenya Fisheries Service, the county government and OA's technical support. Includes the first 6-step toolkit and an IUCN SAGE analysis.
              </p>
            </div>

            {/* Impact Timeline */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-ocean-midnight to-blue-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white mb-1">400%</div>
                <div className="text-xs text-white/70 uppercase">Fish Biomass Increase</div>
                <div className="text-xs text-white/50 mt-2">WCS Data</div>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white mb-1">30%</div>
                <div className="text-xs text-white/70 uppercase">Reef Recovery</div>
                <div className="text-xs text-white/50 mt-2">WCS Data ~15 years</div>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white mb-1">17%</div>
                <div className="text-xs text-white/70 uppercase">Seagrass Regrowth</div>
                <div className="text-xs text-white/50 mt-2">WCS Data</div>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white mb-1">135%</div>
                <div className="text-xs text-white/70 uppercase">Catch Improvement</div>
                <div className="text-xs text-white/50 mt-2">Surrounding Waters (Spillover)</div>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Coral Restoration */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">Coral Restoration</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Community-led restoration using underwater nursery tables and artificial reef structures; trained local divers maintain and monitor coral fragments.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-pink-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-pink-600">32</div>
                  <div className="text-xs text-gray-600">Coral Nursery Tables</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-600">85%</div>
                  <div className="text-xs text-gray-600">Survival Rate</div>
                </div>
              </div>
            </div>

            {/* Sea Turtle Conservation */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">Sea-turtle conservation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The community Turtle Group supports marine and nest patrols.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-green-700">4,000+</div>
                    <div className="text-xs text-gray-600">Hatchlings Released</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-teal-700">12 km</div>
                    <div className="text-xs text-gray-600">Kuruwitu Coastline Monitored</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width - Co-Management */}
          <div className="bg-gradient-to-r from-ocean-midnight to-blue-900 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="bg-white/20 rounded-lg px-3 py-1 text-white font-bold text-sm inline-block mb-3">Historic Milestone</div>
                <h3 className="text-2xl font-poppins font-bold mb-3">Kuruwitu Co-Management Area</h3>
                <p className="text-white/90 leading-relaxed max-w-3xl">
                  Covering 12,000 hectares of ocean under Kenya's first officially endorsed Co-Management Plan (2022). Development of first 6-step toolkit and IUCN SAGE analysis, placing communities at the centre of marine governance.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center min-w-[140px]">
                <div className="text-4xl font-bold text-white">12,000</div>
                <div className="text-xs text-white/70 uppercase mt-1">Hectares</div>
                <div className="text-xs text-white/50 mt-2">Co-Managed</div>
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
