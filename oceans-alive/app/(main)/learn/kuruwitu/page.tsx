import Link from 'next/link';
import Image from 'next/image';

export default function KuruwitiPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-ocean-midnight overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/kamakukijcma.jpg"
            alt="Kuruwitu Community"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-midnight/80 via-ocean-midnight/70 to-ocean-midnight"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-ocean-turquoise text-sm font-bold uppercase tracking-widest mb-4">Where the Model Was Born</p>
            <h1 className="text-5xl md:text-6xl font-poppins font-bold text-white leading-tight mb-6">
              The Kuruwitu Partnership<br />
              <span className="text-ocean-turquoise">& Living Classroom</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              A 20-year journey of community-led marine conservation. The story of how Kuruwitu's fishers created Kenya's first Community Conservation Area and built a living laboratory for ocean stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Kuruwitu is where the model was born and where most of Oceans Alive's demonstration and learning activity still takes place.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Kuruwitu is a living classroom. Within it we run coral-restoration demonstrations, reef and intertidal learning, fisheries and co-management education, school visits, local and international student programs, internships and engagement with community practitioners. This work is undertaken in close collaboration with the Kuruwitu-CBO, the Kuruwitu BMU, local practitioners, schools and technical partners. Oceans Alive acts as a facilitator and program partner.
            </p>
          </div>
        </div>
      </section>

      {/* The Origin Story */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">The Beginning</p>
              <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">
                The Origin & Leadership of Kuruwitu
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  In the early 2000s, Kuruwitu's fishers saw their catch declining year after year. Instead of waiting for outside intervention, they took action themselves.
                </p>
                <p className="leading-relaxed">
                  Led by local community leaders and fishermen, the <strong>Kuruwitu Conservation and Welfare Association (KCW-CBO)</strong> was formed. In 2003, they established Kenya's first Community Conservation Area (CCA)—a voluntary no-take zone managed entirely by the community.
                </p>
                <p className="leading-relaxed">
                  This wasn't a project imposed from outside. It was born from local wisdom, driven by local leadership, and sustained by local commitment. The fishers of Kuruwitu decided their future—and created a model that would inspire conservation efforts across Kenya's coast.
                </p>
              </div>
            </div>

            <div className="bg-ocean-midnight/5 border border-ocean-turquoise/20 rounded-2xl p-8">
              <h3 className="text-2xl font-poppins font-bold text-ocean-midnight mb-6">Key Milestones</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-ocean-turquoise/10 rounded-full flex items-center justify-center">
                    <span className="text-ocean-turquoise font-bold text-lg">2003</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ocean-midnight mb-1">CCA Established</h4>
                    <p className="text-sm text-gray-600">Community creates Kenya's first voluntary no-take zone</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-ocean-turquoise/10 rounded-full flex items-center justify-center">
                    <span className="text-ocean-turquoise font-bold text-lg">2018</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ocean-midnight mb-1">Fish Biomass +400%</h4>
                    <p className="text-sm text-gray-600">15 years of data proves the community's approach works</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-ocean-turquoise/10 rounded-full flex items-center justify-center">
                    <span className="text-ocean-turquoise font-bold text-lg">2022</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ocean-midnight mb-1">Co-Management Plan</h4>
                    <p className="text-sm text-gray-600">Kenya's first legal Co-Management Agreement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Structure */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Who Does What</p>
            <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-4">
              The Partnership Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kuruwitu's success is built on clear roles, mutual respect, and collaborative action. Each partner brings distinct expertise and authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* KCW-CBO Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200 rounded-2xl p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-bold text-blue-900 mb-3">
                Kuruwitu Conservation & Welfare CBO
              </h3>
              <p className="text-sm text-blue-800 mb-4 font-semibold">Community Leadership & Ownership</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Founded and led by Kuruwitu community members</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Initiated the CCA and drives conservation action</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Manages community welfare and local initiatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Holds knowledge and decision-making authority</span>
                </li>
              </ul>
            </div>

            {/* Kuruwitu BMU Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 border-2 border-green-200 rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-bold text-green-900 mb-3">
                Kuruwitu Beach Management Unit
              </h3>
              <p className="text-sm text-green-800 mb-4 font-semibold">Fisheries Governance & Enforcement</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Legally recognized fisheries governance body</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Co-signatory to the Co-Management Plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Enforces fishing regulations and closure zones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Liaises with Kenya Fisheries Service</span>
                </li>
              </ul>
            </div>

            {/* Oceans Alive Card */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100/50 border-2 border-cyan-200 rounded-2xl p-6">
              <div className="w-12 h-12 bg-ocean-turquoise rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-bold text-cyan-900 mb-3">
                Oceans Alive Foundation
              </h3>
              <p className="text-sm text-cyan-800 mb-4 font-semibold">Facilitator & Technical Partner</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Facilitates learning programmes and demonstrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Documents results and shares lessons learned</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Provides technical support (coral restoration, monitoring)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-ocean-turquoise/5 border border-ocean-turquoise/20 rounded-xl p-6 text-center">
            <p className="text-gray-700 leading-relaxed">
              Oceans Alive acts as a facilitator and programme partner, not as the owner of the learning site. All work is undertaken in close collaboration with the KCW-CBO, Kuruwitu BMU, local practitioners, schools, and technical partners.
            </p>
          </div>
        </div>
      </section>

      {/* Living Classroom */}
      <section className="bg-gradient-to-b from-ocean-midnight to-ocean-midnight/95 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Learning in Action</p>
            <h2 className="text-4xl font-poppins font-bold text-white mb-4">
              Kuruwitu as a Living Classroom
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              From local school visits to international student programmes, Kuruwitu hosts hands-on learning experiences in marine conservation and community-led stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Coral Restoration Demonstrations',
                description: 'Practical training in coral gardening techniques and reef rehabilitation',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                )
              },
              {
                title: 'Reef & Intertidal Learning',
                description: 'Guided snorkeling, tide pool exploration, and marine ecology education',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                )
              },
              {
                title: 'Fisheries Education',
                description: 'Understanding sustainable fishing practices and marine resource management',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                title: 'Co-Management Training',
                description: 'Learning how communities and government can govern fisheries together',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: 'School Visits',
                description: 'Coastal schools connect with their ocean through field trips and activities',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
              {
                title: 'Student Programmes',
                description: 'Local and international students conduct research and build capacity',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                )
              },
              {
                title: 'Internships',
                description: 'Graduate and undergraduate placements in conservation fieldwork',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'Practitioner Exchange',
                description: 'Community practitioners from other sites learn the Kuruwitu approach',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                )
              },
              {
                title: 'Monitoring & Data',
                description: 'Training in ecological monitoring, data collection, and citizen science',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/20 flex items-center justify-center shrink-0 text-cyan-300 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-poppins font-bold text-white mb-2 leading-tight">{item.title}</h3>
                    <p className="text-sm text-white/60">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Context */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Governance Framework</p>
              <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">
                Legal & Management Context
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  The Kuruwitu closure began as a voluntary community initiative. Over two decades, it evolved into a legally recognized governance model.
                </p>
                <p className="leading-relaxed">
                  In 2022, the <strong>Kuruwitu Co-Management Area</strong> became Kenya's first legal Co-Management Plan under the Fisheries Management and Development Act (2016). This milestone placed 12,000 hectares of ocean under formal community stewardship.
                </p>
                <p className="leading-relaxed">
                  The Co-Management Plan is a binding agreement between:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-ocean-turquoise mt-1.5">→</span>
                    <span>The Kuruwitu BMU (community governance)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ocean-turquoise mt-1.5">→</span>
                    <span>Kenya Fisheries Service (state authority)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ocean-turquoise mt-1.5">→</span>
                    <span>Kenya Wildlife Service (protected area management)</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  This framework gives the community legal standing to enforce rules, participate in decision-making, and co-manage marine resources alongside government.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-4">What the Co-Management Plan Covers</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-ocean-turquoise/10 rounded-full flex items-center justify-center text-ocean-turquoise text-xs font-bold">1</span>
                    <span>Boundaries and zoning of the Co-Management Area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-ocean-turquoise/10 rounded-full flex items-center justify-center text-ocean-turquoise text-xs font-bold">2</span>
                    <span>Rules for the no-take closure and fishing zones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-ocean-turquoise/10 rounded-full flex items-center justify-center text-ocean-turquoise text-xs font-bold">3</span>
                    <span>Enforcement mechanisms and penalties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-ocean-turquoise/10 rounded-full flex items-center justify-center text-ocean-turquoise text-xs font-bold">4</span>
                    <span>Roles and responsibilities of each partner</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-ocean-turquoise/10 rounded-full flex items-center justify-center text-ocean-turquoise text-xs font-bold">5</span>
                    <span>Decision-making processes and dispute resolution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-ocean-turquoise/10 rounded-full flex items-center justify-center text-ocean-turquoise text-xs font-bold">6</span>
                    <span>Monitoring, reporting, and adaptive management</span>
                  </li>
                </ul>
              </div>

              <div className="bg-ocean-turquoise/10 border border-ocean-turquoise/30 rounded-xl p-6">
                <h4 className="font-bold text-ocean-midnight mb-2">A National Precedent</h4>
                <p className="text-sm text-gray-700">
                  Kuruwitu's Co-Management Plan is being used as a template for other coastal communities across Kenya seeking to formalize community-led marine governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-ocean-midnight py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
            Visit the Living Classroom
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Interested in learning programmes, research partnerships, or visiting Kuruwitu? Get in touch to explore opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact?type=Partnership"
              className="px-8 py-4 bg-ocean-turquoise text-white font-bold rounded-xl hover:bg-white hover:text-ocean-midnight transition-all duration-200"
            >
              Partner With Us
            </Link>
            <Link
              href="/programmes"
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-ocean-turquoise hover:bg-ocean-turquoise/10 transition-all duration-200"
            >
              View All Programmes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
