import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Coral Guardian Partnership - Oceans Alive Foundation',
  description:
    'In partnership with the local nonprofit Coral Guardian, we collaborate on the REEL Kilifi project - Restoring Reef Ecosystems for Enhanced Livelihoods in Kenya.',
};

export default function CoralGuardianPage() {
  return (
    <>
      {/* ── Hero with Glass Overlay ─────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-midnight via-[#0a3560] to-[#1a4d6b]">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight/90 via-ocean-midnight/40 to-transparent" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-[15%] w-72 h-72 bg-ocean-turquoise/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Partnership Badge */}
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <span className="text-white/90 text-xs font-bold uppercase tracking-[0.25em]">
                In Partnership with the Local Nonprofit
              </span>
            </div>

            {/* Coral Guardian Logo */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-64 h-32 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center p-6">
                <Image
                  src="/images/partners/coral-guardian.png"
                  alt="Coral Guardian"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>

            <h1 className="font-poppins font-bold text-white text-5xl md:text-7xl leading-[0.95] mb-8">
              Restoring Reefs,<br />
              <span className="text-ocean-turquoise">Rebuilding Lives</span>
            </h1>

            <p className="text-white/70 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12">
              Together with Coral Guardian, we're pioneering community-led coral restoration
              in the Kuruwitu Marine Protected Area - where conservation meets livelihoods.
            </p>

            {/* Glass Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { label: 'Kuruwitu, Kilifi County', value: 'Indian Ocean Coast' },
                { label: '12,000 Hectares', value: 'Protected Area' },
                { label: 'Since 2024', value: 'Active Collaboration' },
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-ocean-turquoise rounded-full" />
          </div>
        </div>
      </section>

      {/* ── The REEL Kilifi Project ─────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-ocean-turquoise/50" />
                Our Joint Mission
              </p>
              <h2 className="font-poppins font-bold text-ocean-midnight text-4xl md:text-5xl leading-[0.95] mb-6">
                The REEL Kilifi<br />
                <span className="text-ocean-turquoise">Project</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-ocean-midnight">Restoring Reef Ecosystems for Enhanced Livelihoods</strong> is
                  more than a coral restoration project - it's a transformative initiative in Kenya's Indian Ocean waters.
                </p>
                <p>
                  The project unfolds in the 12,000-hectare Kuruwitu coastal co-management area in Kilifi County.
                  This pioneering zone benefits from shared coastal and marine resource management between the
                  government and the local fishing community, making it a beacon of effective collaborative
                  conservation in Kenya.
                </p>
                <p className="text-sm italic text-gray-500 border-l-4 border-ocean-turquoise pl-4 py-2 bg-gray-50 rounded-r-lg">
                  "A pioneer in effective collaborative conservation in Kenya - where communities and government
                  protect the ocean together."
                </p>
              </div>
            </div>

            {/* Glass Info Cards */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-ocean-turquoise/10 to-cyan-300/10 rounded-3xl blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  {
                    title: 'Government + Community',
                    desc: 'Co-managed conservation area',
                    color: 'from-amber-500 to-orange-600',
                  },
                  {
                    title: 'Fishing Community',
                    desc: 'Local stewards & beneficiaries',
                    color: 'from-cyan-500 to-ocean-turquoise',
                  },
                  {
                    title: 'Coral Nurseries',
                    desc: 'Community-built & maintained',
                    color: 'from-emerald-500 to-teal-600',
                  },
                  {
                    title: 'Sustainable Fishing',
                    desc: 'Enhanced marine livelihoods',
                    color: 'from-blue-500 to-indigo-600',
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

      {/* ── Restoration Techniques ─────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-28 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ocean-turquoise/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Science Meets Community
            </p>
            <h2 className="font-poppins font-bold text-ocean-midnight text-4xl md:text-5xl mb-6">
              Our Restoration<br />
              <span className="text-ocean-turquoise">Techniques</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Methods adapted and replicable by local communities, ensuring sustainable impact.
            </p>
          </div>

          {/* Coral Restoration Section - Large Feature */}
          <div className="mb-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Icon Column */}
                <div className="lg:col-span-1 bg-gradient-to-br from-ocean-turquoise to-cyan-500 flex items-center justify-center p-12">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-4 p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="font-poppins font-bold text-ocean-midnight text-3xl mb-3">
                        Coral Restoration
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        We use methods that are adapted and replicable by local communities. On-site coral
                        nurseries house fragments of opportunity corals collected in the area.
                      </p>
                    </div>
                  </div>

                  {/* Process Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        step: '01',
                        title: 'Collection',
                        desc: 'Opportunity coral fragments collected from the area',
                      },
                      {
                        step: '02',
                        title: 'Nurture',
                        desc: 'Community-maintained nurseries care for young corals',
                      },
                      {
                        step: '03',
                        title: 'Transplant',
                        desc: 'Corals planted on locally-built artificial reefs',
                      },
                    ].map((process, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200 hover:shadow-lg hover:border-ocean-turquoise/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl font-bold text-ocean-turquoise/30 group-hover:text-ocean-turquoise transition-colors">
                            {process.step}
                          </span>
                        </div>
                        <h4 className="font-bold text-ocean-midnight text-sm mb-2">{process.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{process.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Additional Info */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-emerald-900 text-sm mb-1">Community Training</h4>
                          <p className="text-xs text-emerald-700 leading-relaxed">
                            Fishermen trained in coral biology and restoration methods over several months
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-200">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-900 text-sm mb-1">Protected Zone</h4>
                          <p className="text-xs text-blue-700 leading-relaxed">
                            Restoration within the Tengefu law protected area, ensuring sustainability
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Innovation Note */}
                  <div className="mt-4 p-4 bg-gradient-to-r from-ocean-turquoise/5 to-transparent rounded-xl border-l-4 border-ocean-turquoise">
                    <p className="text-sm text-gray-600 italic">
                      <strong className="text-ocean-midnight not-italic">Innovation in Action:</strong> We're testing
                      new methods to find the most appropriate and financially sustainable approaches for this unique environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Community Involvement ─────────────────────────────────────────── */}
      <section className="bg-ocean-midnight py-20 md:py-28 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ocean-turquoise/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Community at the Core
            </p>
            <h2 className="font-poppins font-bold text-white text-4xl md:text-5xl mb-6">
              Involving Local<br />
              <span className="text-ocean-turquoise">Communities</span>
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              The community plays a central role in the adoption and implementation of the project -
              from training to teaching to shared ownership.
            </p>
          </div>

          {/* Three Pillars - Horizontal Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Fisherman Training',
                desc: 'Local fishermen trained by the project team in coral restoration methods over several months',
                points: [
                  'Awareness of coral reef importance',
                  'Reinforcement of local reef management capacities',
                  'Hands-on restoration techniques',
                ],
                color: 'from-amber-500/20 via-orange-500/20 to-red-500/20',
                borderColor: 'border-amber-400/30',
              },
              {
                title: 'Youth Education',
                desc: 'Developing tools to help teachers in local schools raise awareness among young people',
                points: [
                  'Educational materials for schools',
                  'Engaging curriculum on ocean conservation',
                  'Inspiring the next generation of reef guardians',
                ],
                color: 'from-cyan-500/20 via-ocean-turquoise/20 to-teal-500/20',
                borderColor: 'border-cyan-400/30',
              },
              {
                title: 'Community Ownership',
                desc: 'Regular exchanges between team and community members to share results and engage in protection',
                points: [
                  'Peer-to-peer learning networks',
                  'Community citizen science',
                  'Shared project results and benefits',
                ],
                color: 'from-emerald-500/20 via-teal-500/20 to-green-500/20',
                borderColor: 'border-emerald-400/30',
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl p-8 bg-white/5 backdrop-blur-sm border ${pillar.borderColor} hover:bg-white/10 transition-all duration-300`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-poppins font-bold text-white text-xl mb-3 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    {pillar.desc}
                  </p>

                  {/* Points */}
                  <ul className="space-y-2">
                    {pillar.points.map((point, pointIdx) => (
                      <li key={pointIdx} className="flex items-start gap-2 text-white/60 text-xs">
                        <span className="text-ocean-turquoise mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Goal Statement */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-white/10 via-white/5 to-transparent backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-ocean-turquoise shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-poppins font-bold text-white text-xl mb-3">Our Goal</h3>
                  <p className="text-white/80 leading-relaxed">
                    To develop a sense of ownership in the local community by fostering peer-to-peer learning
                    in the context of community citizen science, and by sharing the results of the project
                    with the immediate and wider community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Monitoring & Evaluation (Side-by-Side) ─────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Evidence-Based Impact
            </p>
            <h2 className="font-poppins font-bold text-ocean-midnight text-4xl md:text-5xl mb-6">
              Monitoring &<br />
              <span className="text-ocean-turquoise">Evaluation</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We track both ecological and social outcomes to ensure lasting, meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Biological Monitoring */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-10 border border-cyan-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-poppins font-bold text-ocean-midnight text-2xl">
                  Biological Monitoring
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: 'Coral Health',
                    desc: 'Monitor survival, growth, and natural recruitment of coral larvae',
                  },
                  {
                    title: 'Water Quality',
                    desc: 'Regular temperature monitoring and coral bleaching observations',
                  },
                  {
                    title: 'Marine Life',
                    desc: 'Fish species diversity, biomass estimates, and invertebrate populations',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-5 border border-cyan-200 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <div className="w-2 h-2 rounded-full bg-cyan-500" />
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

            {/* Social Monitoring */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 border border-emerald-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-poppins font-bold text-ocean-midnight text-2xl">
                  Social Monitoring
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: 'Socio-Economic Data',
                    desc: 'Track benefits from the reef: fisheries and tourism evolution',
                  },
                  {
                    title: 'Community Perception',
                    desc: 'Regular surveys and interviews with the fishing community',
                  },
                  {
                    title: 'Outreach Impact',
                    desc: 'Monitor attendance at presentations to stakeholders and schools',
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
          </div>
        </div>
      </section>

      {/* ── Looking Ahead ─────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-ocean-midnight via-[#0a3560] to-[#1a4d6b] py-20 md:py-28 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-ocean-turquoise/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em] mb-4">
              The Future
            </p>
            <h2 className="font-poppins font-bold text-white text-4xl md:text-5xl mb-6">
              Looking Ahead:<br />
              <span className="text-ocean-turquoise">Project Evolution</span>
            </h2>
          </div>

          {/* Vision Card */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 md:p-12 border border-white/20 shadow-2xl mb-8">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-ocean-turquoise to-cyan-500 flex items-center justify-center shrink-0">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-white text-2xl md:text-3xl mb-4 leading-tight">
                  From Local Success to Regional Model
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  The overall aim of this collaboration is to strengthen and extend the participatory coral reef
                  restoration models implemented in the Kuruwitu Tengefu Community Protection Area in Kenya, in
                  order to support local communities.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Living Classroom
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  The Kuruwitu area will serve as a living classroom for training new communities,
                  sharing experiences and best practices across the region.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  Adapted Approach
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Following a restoration approach adapted to the socio-economic context of local
                  traditional fishing communities - scalable and sustainable.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="text-center">
            <p className="text-white/60 text-sm italic max-w-3xl mx-auto">
              "This partnership represents more than coral restoration - it's about empowering communities
              to become the guardians of their own marine heritage, creating a model that can be replicated
              across Kenya's coast and beyond."
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Section ─────────────────────────────────────────── */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-ocean-midnight text-3xl md:text-4xl mb-5 leading-tight">
                Support Community-Led<br />
                <span className="text-ocean-turquoise">Coral Restoration</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Your contribution directly funds training, equipment, and long-term monitoring for the
                REEL Kilifi project - empowering local communities to restore their reefs and secure
                their livelihoods.
              </p>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 px-7 py-4 bg-ocean-turquoise text-white font-bold rounded-xl hover:bg-ocean-midnight transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Donate to the Project <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Coral Nurseries' },
                { label: 'Fisherman Training' },
                { label: 'Marine Monitoring' },
                { label: 'Community Outreach' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:border-ocean-turquoise/30 transition-all duration-300 group flex items-center justify-center min-h-[120px]"
                >
                  <p className="font-bold text-ocean-midnight text-sm text-center">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Navigation Footer ─────────────────────────────────────── */}
      <section className="bg-ocean-midnight py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/about/partners"
            className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2"
          >
            <span>←</span> Back to All Partners
          </Link>
          <p className="text-white/40 text-sm text-center">
            <span className="font-bold text-white/70">Continue exploring:</span> Discover our other programs
          </p>
          <Link
            href="/programmes"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-ocean-turquoise text-ocean-midnight font-bold text-sm rounded-xl hover:bg-white transition-all duration-200"
          >
            View All Programmes <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
