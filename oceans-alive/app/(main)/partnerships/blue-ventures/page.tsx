/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Partnership › Blue Ventures (KAMAMKUKI fisheries monitoring)
 * URL:  /partnerships/blue-ventures
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. The KAMAMKUKI Project
 *   3. Project Phases
 *   4. The Challenge
 *   5. Our Approach
 *   6. Expected Outcomes
 *   7. Call to action
 *   8. Navigation Footer
 * Page text, images and links (editable in Pages CMS)  →  content/projects/blue-ventures.json
 */
import Image from 'next/image';
import Link from 'next/link';

import PAGE from '@/content/projects/blue-ventures.json';

export const metadata = PAGE.seo;

export default function BlueVenturesPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc] via-[#0052a3] to-[#003d7a]">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0066cc]/90 via-[#0066cc]/40 to-transparent" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-[15%] w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 lg:pt-40 lg:pb-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Partnership Badge */}
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <span className="text-white/90 text-xs font-bold uppercase tracking-[0.25em]">{PAGE.hero.eyebrow}</span>
            </div>

            <h1 className="font-poppins font-bold text-white text-5xl md:text-7xl leading-[0.95] mb-8">{PAGE.hero.title}<br />
              <span className="text-cyan-300">{PAGE.hero.label}</span>
            </h1>

            <p className="text-white/70 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12">{PAGE.hero.text}</p>

            {/* Glass Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { label: '304 km² Ocean Area', value: 'KAMAMKUKI JCMA' },
                { label: '5 Beach Management Units', value: 'Kilifi & Mombasa' },
                { label: 'October 2024 – November 2026', value: 'Two-Phase Project' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <p className="text-white font-bold text-sm mb-1">{stat.label}</p>
                  <p className="text-white/50 text-xs">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner badge, floating right */}
        <div className="hidden lg:flex absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 flex-col items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">{PAGE.hero.eyebrow2}</span>
          <div className="relative w-36 h-20 bg-white rounded-xl p-3">
            <Image src={PAGE.hero.image} alt={PAGE.hero.imageAlt} fill className="object-contain p-2" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · The KAMAMKUKI Project
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#0066cc] text-xs font-bold uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#0066cc]/50" />{PAGE.theKamamkukiProject.eyebrow}</p>
              <h2 className="font-poppins font-bold text-ocean-midnight text-4xl md:text-5xl leading-[0.95] mb-6">{PAGE.theKamamkukiProject.heading}<br />
                <span className="text-[#0066cc]">{PAGE.theKamamkukiProject.label}</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">{PAGE.theKamamkukiProject.text}<strong className="text-ocean-midnight">{PAGE.theKamamkukiProject.boldText}</strong>{PAGE.theKamamkukiProject.text2}</p>
                <p>{PAGE.theKamamkukiProject.text3}</p>
                <p className="text-sm italic text-gray-500 border-l-4 border-[#0066cc] pl-4 py-2 bg-gray-50 rounded-r-lg">{PAGE.theKamamkukiProject.text4}</p>
              </div>
            </div>

            {/* Glass Info Cards */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-300/10 rounded-3xl blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  {
                    title: 'Five BMUs',
                    desc: 'Kuruwitu, Kanamai, Mtwapa, Marina, Kidongo',
                    color: 'from-blue-500 to-cyan-600',
                  },
                  {
                    title: 'Two Counties',
                    desc: 'Kilifi & Mombasa working together',
                    color: 'from-cyan-500 to-teal-600',
                  },
                  {
                    title: '10 Landing Sites',
                    desc: 'Fisheries catch monitoring stations',
                    color: 'from-emerald-500 to-green-600',
                  },
                  {
                    title: 'Evidence-Based',
                    desc: 'Data-driven adaptive management',
                    color: 'from-indigo-500 to-blue-600',
                  },
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-2xl p-6 bg-white border border-gray-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <h3 className="font-bold text-ocean-midnight text-sm mb-2 leading-tight">{card.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Project Phases
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-28 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0066cc]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#0066cc] text-xs font-bold uppercase tracking-[0.25em] mb-4">{PAGE.projectPhases.eyebrow}</p>
            <h2 className="font-poppins font-bold text-ocean-midnight text-4xl md:text-5xl mb-6">{PAGE.projectPhases.heading}<br />
              <span className="text-[#0066cc]">{PAGE.projectPhases.label}</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{PAGE.projectPhases.text}</p>
          </div>

          {/* Phase 1 */}
          <div className="mb-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Icon Column */}
                <div className="lg:col-span-1 bg-gradient-to-br from-[#0066cc] to-blue-700 flex items-center justify-center p-6 sm:p-12">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">{PAGE.projectPhases.label2}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-4 p-6 sm:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
                        <h3 className="font-poppins font-bold text-ocean-midnight text-2xl sm:text-3xl">{PAGE.projectPhases.subheading}</h3>
                        <span className="text-sm text-gray-500 font-medium px-3 py-1 bg-gray-100 rounded-full">{PAGE.projectPhases.label3}</span>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">{PAGE.projectPhases.text2}</p>
                    </div>
                  </div>

                  {/* Achievement Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'Institutional Assessment',
                        desc: 'Governance and capacity diagnostics across all five BMUs',
                      },
                      {
                        title: 'Catch Monitoring',
                        desc: 'Ten landing sites equipped with fisheries data collection systems',
                      },
                      {
                        title: 'Baseline Data',
                        desc: 'Establishing fisheries and ecological baselines for adaptive management',
                      },
                      {
                        title: 'Capacity Gaps Identified',
                        desc: 'Strategic roadmap for Phase 2 strengthening',
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200 hover:shadow-lg hover:border-[#0066cc]/30 transition-all duration-300 group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#0066cc]/20 flex items-center justify-center shrink-0">
                            <svg className="w-4 h-4 text-[#0066cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-bold text-ocean-midnight text-sm mb-1">{item.title}</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Icon Column */}
                <div className="lg:col-span-1 bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center p-6 sm:p-12">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">{PAGE.projectPhases.label4}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-4 p-6 sm:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
                        <h3 className="font-poppins font-bold text-ocean-midnight text-2xl sm:text-3xl">{PAGE.projectPhases.subheading2}</h3>
                        <span className="text-sm text-gray-500 font-medium px-3 py-1 bg-gray-100 rounded-full">{PAGE.projectPhases.label5}</span>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">{PAGE.projectPhases.text3}</p>
                    </div>
                  </div>

                  {/* Priority Areas */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'BMU Governance & Compliance',
                        desc: 'Structured mentorship programme for institutional strengthening',
                        color: 'from-blue-50 to-cyan-50',
                        border: 'border-blue-200',
                      },
                      {
                        title: 'Peer Learning & Exchange',
                        desc: 'Cross-BMU knowledge sharing and collaboration networks',
                        color: 'from-emerald-50 to-teal-50',
                        border: 'border-emerald-200',
                      },
                      {
                        title: 'Financial Resilience (VSLAs)',
                        desc: 'Village Savings & Loan Associations for fishing communities',
                        color: 'from-purple-50 to-indigo-50',
                        border: 'border-purple-200',
                      },
                      {
                        title: 'Fisheries & Ecological Monitoring',
                        desc: 'Deepening data collection for adaptive management decisions',
                        color: 'from-orange-50 to-amber-50',
                        border: 'border-orange-200',
                      },
                    ].map((area, idx) => (
                      <div
                        key={idx}
                        className={`bg-gradient-to-br ${area.color} rounded-xl p-5 border ${area.border} hover:shadow-lg transition-all duration-300 group`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/60 flex items-center justify-center shrink-0">
                            <span className="text-lg font-bold text-ocean-midnight">{idx + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-ocean-midnight text-sm mb-1">{area.title}</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">{area.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · The Challenge
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-20 md:py-28 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-400/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-cyan-300 text-xs font-bold uppercase tracking-[0.25em] mb-4">{PAGE.theChallenge.eyebrow}</p>
            <h2 className="font-poppins font-bold text-white text-4xl md:text-5xl mb-6">{PAGE.theChallenge.heading}<br />
              <span className="text-cyan-300">{PAGE.theChallenge.label}</span>
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">{PAGE.theChallenge.text}</p>
          </div>

          {/* Challenge Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Destructive Fishing',
                desc: 'Illegal and destructive fishing practices degrading marine habitats',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
              },
              {
                title: 'Declining Fish Stocks',
                desc: 'Overfishing and environmental pressures reducing fish populations',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                ),
              },
              {
                title: 'Habitat Degradation',
                desc: 'Coral reefs, seagrass beds, and mangroves under increasing stress',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                ),
              },
              {
                title: 'Weak Enforcement',
                desc: 'Limited capacity to enforce fisheries regulations and management measures',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Institutional Gaps',
                desc: 'Co-management bodies lack capacity and resources for effective governance',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                title: 'Economic Vulnerability',
                desc: 'Coastal communities increasingly dependent on stressed fisheries resources',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
            ].map((challenge, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/20 flex items-center justify-center shrink-0 text-cyan-300 group-hover:scale-110 transition-transform">
                    {challenge.icon}
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-white text-lg mb-2 leading-tight">
                      {challenge.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">{challenge.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Our Approach
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#0066cc] text-xs font-bold uppercase tracking-[0.25em] mb-4">{PAGE.ourApproach.eyebrow}</p>
            <h2 className="font-poppins font-bold text-ocean-midnight text-4xl md:text-5xl mb-6">{PAGE.ourApproach.heading}<br />
              <span className="text-[#0066cc]">{PAGE.ourApproach.label}</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">{PAGE.ourApproach.text}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Governance & Institutional Development */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 sm:p-10 border border-blue-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066cc] to-blue-700 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-poppins font-bold text-ocean-midnight text-2xl">{PAGE.ourApproach.subheading}</h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: 'Structured Mentorship',
                    desc: 'BMU governance and compliance strengthening programme',
                  },
                  {
                    title: 'Compliance Assessments',
                    desc: 'Regular monitoring and enforcement capacity building',
                  },
                  {
                    title: 'Institutional Development',
                    desc: 'Addressing capacity gaps in co-management bodies',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-5 border border-blue-200 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <div className="w-2 h-2 rounded-full bg-[#0066cc]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-ocean-midnight text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fisheries & Ecological Monitoring */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 sm:p-10 border border-emerald-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-poppins font-bold text-ocean-midnight text-2xl">{PAGE.ourApproach.subheading2}</h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: 'Fisheries Catch Monitoring',
                    desc: 'Ongoing data collection at ten landing sites within the JCMA',
                  },
                  {
                    title: 'Community Resource Surveys',
                    desc: 'Ecological monitoring and baseline assessments',
                  },
                  {
                    title: 'Data-Feedback Sessions',
                    desc: 'Stakeholder engagement to support adaptive management',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-5 border border-emerald-200 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-ocean-midnight text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Financial Resilience */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-6 sm:p-10 border border-purple-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-poppins font-bold text-ocean-midnight text-2xl">{PAGE.ourApproach.subheading3}</h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: 'Village Savings & Loans (VSLAs)',
                    desc: 'Improving financial resilience of fisheries-dependent communities',
                  },
                  {
                    title: 'Community Financial Resilience',
                    desc: 'Building economic buffers for vulnerable households',
                  },
                  {
                    title: 'Reducing Resource Pressure',
                    desc: 'Alternative income sources to decrease fisheries dependence',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-5 border border-purple-200 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-ocean-midnight text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Peer Learning & Exchange */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-6 sm:p-10 border border-orange-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="font-poppins font-bold text-ocean-midnight text-2xl">{PAGE.ourApproach.subheading4}</h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: 'Exchange Visits',
                    desc: 'Promoting peer learning and knowledge exchange among BMUs',
                  },
                  {
                    title: 'Collaboration Networks',
                    desc: 'Building partnerships between five Beach Management Units',
                  },
                  {
                    title: 'Stakeholder Engagement',
                    desc: 'Technical partnerships and community participation',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-5 border border-orange-200 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-ocean-midnight text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 · Expected Outcomes
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-[#0066cc] via-[#0052a3] to-[#003d7a] py-20 md:py-28 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-cyan-300 text-xs font-bold uppercase tracking-[0.25em] mb-4">{PAGE.expectedOutcomes.eyebrow}</p>
            <h2 className="font-poppins font-bold text-white text-4xl md:text-5xl mb-6">{PAGE.expectedOutcomes.heading}<br />
              <span className="text-cyan-300">{PAGE.expectedOutcomes.label}</span>
            </h2>
          </div>

          {/* Outcomes Card */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-10 md:p-12 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Stronger Co-Management System',
                  desc: 'Better-coordinated co-management supported by capable BMUs',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
                {
                  title: 'Reliable Fisheries Information',
                  desc: 'Continuous monitoring and data collection systems',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                },
                {
                  title: 'Improved Compliance',
                  desc: 'Strengthened enforcement and adherence to fisheries regulations',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ),
                },
                {
                  title: 'Greater Community Financial Resilience',
                  desc: 'VSLAs and alternative income sources for fishing households',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Stronger Partnerships',
                  desc: 'Multi-stakeholder collaboration for sustainable fisheries management',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Self-Sustaining Systems',
                  desc: 'Functional, accountable systems that endure beyond the project period',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                },
              ].map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-cyan-400/20 flex items-center justify-center shrink-0 text-cyan-300">
                    {outcome.icon}
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-white text-lg mb-2 leading-tight">
                      {outcome.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">{outcome.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Vision Statement */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/60 text-sm italic text-center max-w-3xl mx-auto">{PAGE.expectedOutcomes.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7 · Call to action
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-ocean-midnight text-3xl md:text-4xl mb-5 leading-tight">{PAGE.callToAction.heading}<br />
                <span className="text-[#0066cc]">{PAGE.callToAction.label}</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">{PAGE.callToAction.text}</p>
              <Link
                href={PAGE.callToAction.link}
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#0066cc] text-white font-bold rounded-xl hover:bg-ocean-midnight transition-all duration-200 shadow-lg hover:shadow-xl"
              >{PAGE.callToAction.linkText}<span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Fisheries Monitoring' },
                { label: 'BMU Governance' },
                { label: 'Community VSLAs' },
                { label: 'Peer Learning' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:border-[#0066cc]/30 transition-all duration-300 group flex items-center justify-center min-h-[120px]"
                >
                  <p className="font-bold text-ocean-midnight text-sm text-center">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 8 · Navigation Footer
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href={PAGE.navigationFooter.link}
            className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2"
          >
            <span>←</span>{PAGE.navigationFooter.linkText}</Link>
          <p className="text-white/40 text-sm text-center">
            <span className="font-bold text-white/70">{PAGE.navigationFooter.label}</span>{PAGE.navigationFooter.text}</p>
          <Link
            href={PAGE.navigationFooter.link2}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#0066cc] text-white font-bold text-sm rounded-xl hover:bg-cyan-400 transition-all duration-200"
          >{PAGE.navigationFooter.linkText2}<span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
