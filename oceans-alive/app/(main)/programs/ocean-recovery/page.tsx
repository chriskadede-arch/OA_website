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
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-6">Promote Marine Ecosystem Integrity</h1>
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

      {/* Environment Pillar Section */}
      <section className="bg-gradient-to-br from-ocean-midnight to-blue-900 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                <path d="M12 2v20"/>
                <circle cx="12" cy="14" r="6"/>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">Environment Pillar</h2>
            <p className="text-white/70 text-sm uppercase tracking-widest">Strategic Plan 2020-25 | Pillar of Development</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-poppins font-bold text-white mb-6">Sustainable Environmental Management</h3>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed mb-6">
                Assisting coastal communities in <strong className="text-ocean-turquoise">sustainable management of the environment</strong> based on which their livelihoods depend, including <strong className="text-ocean-turquoise">restoration of the coral reef fishery through coral gardens</strong>, and <strong className="text-ocean-turquoise">management of catchment to reef</strong> through implementing <strong className="text-ocean-turquoise">Joint and Co-Management Area plans (CMAP)</strong>.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-blue-300">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Coral Garden Programme</h4>
                  <p className="text-white/70 text-sm">25,000+ corals restored across 39 hectares, transforming fishers into reef gardeners.</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-teal-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Catchment to Reef</h4>
                  <p className="text-white/70 text-sm">Integrated ecosystem management from land through to marine protected areas.</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-cyan-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Co-Management Plans</h4>
                  <p className="text-white/70 text-sm">120 km² under Kenya's first officially endorsed Co-Management Area Plan (CMAP).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-12">What We Do</h2>

          {/* Direct Answer - What We Do */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-pink-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-pink-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">Coral Restoration</h3>
              <p className="text-gray-600 text-sm">Community-led reef restoration through 32 nursery tables, 457 artificial reefs, and 25,000+ corals planted since 2019.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-blue-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3h18v18H3V3z"/>
                  <path d="M9 9h6v6H9V9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">Marine Sanctuary Management</h3>
              <p className="text-gray-600 text-sm">Supporting 39 hectares of protected reef (Tengefu 30ha + Madowani 9ha) and Kenya's first 120 km² Co-Management Area.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-green-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">Catchment to Reef Management</h3>
              <p className="text-gray-600 text-sm">Integrated ecosystem approach from land to sea, including sea turtle conservation along 12 km of coastline.</p>
            </div>
          </div>

          {/* Why This Works - The Story */}
          <div className="bg-gradient-to-br from-ocean-midnight to-blue-900 rounded-2xl shadow-xl p-8 md:p-10 mb-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-12 bg-ocean-turquoise rounded-full"></div>
              <h3 className="text-2xl font-poppins font-bold">From Devastation to National Model</h3>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed mb-4">
                In the late 1990s, coral bleaching devastated Kenya's reefs and fish stocks collapsed. Kuruwitu's fishers faced a choice: watch their livelihoods disappear, or act. In 2003, they formed the Kuruwitu Conservation and Welfare Association. In 2006, they established one of Kenya's earliest community-driven Locally Managed Marine Areas—a 30-hectare no-take sanctuary governed under traditional law, known as a <em>tengefu</em>.
              </p>
              <p className="text-white/90 leading-relaxed mb-4">
                What happened next rewrote what Kenya thought was possible. Over roughly 15 years, the sanctuary delivered a 400% increase in fish biomass, 30% reef recovery, and 17% seagrass regrowth. A 135% improvement in catch in surrounding waters proved the spillover effect: when the reef recovers, fishers benefit. This wasn't theory—it was survival, measured by WCS monitoring data.
              </p>
              <p className="text-white/90 leading-relaxed">
                In 2016, Oceans Alive was established to help document and scale this model. Working with the Kuruwitu BMU, government agencies, and technical partners, we supported the development of Kenya's first officially endorsed Co-Management Plan in 2022—covering 120 km² of ocean and 18 Beach Management Units across Kilifi County. The fishers who started this didn't just save their reef. They shaped national policy.
              </p>
            </div>
          </div>

          {/* Featured Project - Tengefu LMMA */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-8 border-ocean-turquoise">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-ocean-turquoise/10 rounded-lg px-3 py-1 text-ocean-turquoise font-bold text-sm">20 Year Journey</div>
              <div className="bg-amber-100 rounded-lg px-3 py-1 text-amber-700 font-bold text-sm">Kenya's First LMMA</div>
            </div>
            <h3 className="text-2xl font-poppins font-bold text-ocean-midnight mb-4">The 30-Hectare Sanctuary That Changed Everything</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The 30-hectare Tengefu sanctuary at Kuruwitu wasn't Kenya's largest protected area. But it was the most important, because it proved that community-led conservation works—not as a pilot, but as a model that could scale. Around 15 years of community management delivered measurable recovery, economic benefits for 300+ households, and a blueprint that reached national policy.
            </p>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h4 className="font-bold text-ocean-midnight mb-2">Kuruwitu Co-Management Area (Historic Milestone, 2022)</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                120 km² (12,000 hectares) under Kenya's first officially endorsed Co-Management Plan. Developed by the Kuruwitu BMU with Kenya Fisheries Service, Kilifi County Government, and Oceans Alive's technical support. This wasn't handed down—it was built from the ground up, complete with the first 6-step toolkit and Kenya's first IUCN SAGE analysis. Community passion met institutional backbone, and policy followed.
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

          {/* Two Column Layout with SVG Icons */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Coral Restoration */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 flex-shrink-0 text-pink-600">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold text-ocean-midnight">From Fishers to Reef Gardeners</h3>
                  <div className="text-xs text-pink-600 font-bold uppercase mt-1">Coral Restoration Programme</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since 2019, Oceans Alive has partnered with Coral Guardian International and Coral Reef Care to build Kenya's most active community-led coral nursery at Kuruwitu. The same fishers whose livelihoods depend on the reef are now trained and employed as certified reef gardeners—planting, monitoring, and protecting the future they once took for granted.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="bg-pink-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-pink-600">25,000+</div>
                  <div className="text-xs text-gray-600">Corals Planted</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-purple-600">85%</div>
                  <div className="text-xs text-gray-600">Survival Rate</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-blue-600">457</div>
                  <div className="text-xs text-gray-600">Artificial Reefs</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 italic">39 hectares restored across Tengefu (30 ha) and Madowani (9 ha)</p>
            </div>

            {/* Sea Turtle Conservation */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 flex-shrink-0 text-green-600">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <ellipse cx="12" cy="13" rx="9" ry="7"/>
                    <circle cx="12" cy="6" r="3"/>
                    <path d="M4 13c-1 2-1 4 0 6M20 13c1 2 1 4 0 6M7 10l-2-2M17 10l2-2M7 16l-2 2M17 16l2 2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold text-ocean-midnight">Protecting the Shoreline Guardians</h3>
                  <div className="text-xs text-green-600 font-bold uppercase mt-1">Sea Turtle Conservation</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sea turtles return to the same beaches where they were born to lay their eggs. The Kuruwitu Turtle Group ensures they still have a safe place to come home to. Through marine patrols and nest monitoring along 12 km of coastline, the community protects both nesting mothers and hatchlings from poaching, predators, and habitat loss.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-green-700">4,000+</div>
                    <div className="text-xs text-gray-600">Hatchlings Released</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-teal-700">12 km</div>
                    <div className="text-xs text-gray-600">Coastline Monitored</div>
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
