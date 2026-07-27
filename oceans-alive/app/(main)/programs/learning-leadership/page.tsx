import Link from 'next/link';
import Image from 'next/image';
import SDGRow from '@/components/common/SDGRow';

export const metadata = {
  title: 'Learning & Leadership Program',
  description: 'Ocean education, youth programs, and capacity building for conservation leaders.',
};

export default function LearningLeadershipPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-teal-600 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/kids.jpg" alt="Learning & Leadership" fill className="object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-6xl font-poppins font-bold text-white/20 mb-4">03</div>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-6">Learning & Leadership</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">
            Lasting conservation depends on knowledge, skills and local leadership. Using the ocean as a classroom, this programme helps youth, community members and practitioners build the confidence and experience to lead change. It is delivered together with the KCW-CBO, the Kuruwitu BMU, schools and local practitioners, with OA as facilitator and programme partner. Learning and lessons-sharing are cross-cutting and intergenerational, not youth-only.
          </p>

          {/* Impact Boxes */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">10,000+</div>
                <div className="text-[9px] text-white/50 uppercase">School Children Reached</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">50</div>
                <div className="text-[9px] text-white/50 uppercase">Schools Reached</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">40+</div>
                <div className="text-[9px] text-white/50 uppercase">International Interns</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">10+</div>
                <div className="text-[9px] text-white/50 uppercase">Films Produced</div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="text-[9px] text-white/30 uppercase">UN SDGs</span>
              <SDGRow sdgs={[4, 14, 13]} size="sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Pillar Section */}
      <section className="bg-gradient-to-br from-green-900 to-teal-900 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                <line x1="10" y1="8" x2="16" y2="8"/>
                <line x1="10" y1="12" x2="16" y2="12"/>
                <line x1="10" y1="16" x2="16" y2="16"/>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">Social Pillar</h2>
            <p className="text-white/70 text-sm uppercase tracking-widest">Strategic Plan 2020-25 | Pillar of Development</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-poppins font-bold text-white mb-6">Social Development Through Education & Community Harmony</h3>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed mb-6">
                Ensuring that the results of our conservation actions contribute to <strong className="text-ocean-turquoise">doing no harm and leaving no one behind</strong> by bringing additional household benefits and social welfare through <strong className="text-ocean-turquoise">education</strong>, <strong className="text-ocean-turquoise">improved nutrition</strong>, and <strong className="text-ocean-turquoise">community harmony</strong>.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-green-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Education for All</h4>
                  <p className="text-white/70 text-sm">Ocean literacy programs reaching 10,000+ learners across all age groups and backgrounds.</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-teal-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Community Harmony</h4>
                  <p className="text-white/70 text-sm">Intergenerational knowledge exchange and storytelling through Project REEL Kilifi.</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-green-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                      <circle cx="12" cy="12" r="4"/>
                      <path d="M12 2C8 6 8 10 12 12M12 2c4 4 4 8 0 10"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Household Benefits</h4>
                  <p className="text-white/70 text-sm">Improved nutrition through permaculture education and sustainable resource management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gradient-to-br from-green-50 to-teal-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-12">What We Do</h2>

          {/* Direct Answer - What We Do */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-green-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">Ocean Education Programs</h3>
              <p className="text-gray-600 text-sm">Youth for Oceans (Y4O) bringing 10,000+ students to the living classroom at Kuruwitu across 50 schools.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-teal-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-teal-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
                  <polyline points="17 2 12 7 7 2"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">Global Ambassador Training</h3>
              <p className="text-gray-600 text-sm">300+ international students, 40+ interns, and 15 filmmakers trained to advocate for coastal fisheries globally.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-blue-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2 17 12 22 22 17"/>
                  <polyline points="2 12 12 17 22 12"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">Fisher Folk Academy</h3>
              <p className="text-gray-600 text-sm">Leadership development and citizen science building community capacity for long-term stewardship.</p>
            </div>
          </div>

          {/* Why This Works - The Living Classroom Story */}
          <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl shadow-xl p-8 md:p-10 mb-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-12 bg-white rounded-full"></div>
              <h3 className="text-2xl font-poppins font-bold">The Ocean as a Classroom</h3>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed mb-4">
                Kuruwitu isn't just a marine sanctuary—it's a living classroom where conservation becomes real. Every year, students from across Kilifi County arrive to snorkel above coral gardens, identify reef species, and hear stories from community divers about what the reef looked like before, and what it looks like now. This is ocean literacy rooted in living evidence, not textbook theory.
              </p>
              <p className="text-white/90 leading-relaxed mb-4">
                Since 2016, Oceans Alive has walked alongside coastal communities to turn their vision for a healthy ocean into reality. We don't just teach—we build learning platforms where knowledge flows in every direction: from elders to youth, from fishers to scientists, from Kuruwitu to the world.
              </p>
              <p className="text-white/90 leading-relaxed">
                Education here is cross-cutting and intergenerational. When primary school children plant corals alongside certified community divers, when international students learn permaculture from Mama Karanga women, when African Leadership University students document fisher stories through Project REEL—that's when conservation becomes a movement, not a project.
              </p>
            </div>
          </div>

          {/* Youth for Oceans Feature */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6">
              <div className="text-white">
                <h3 className="text-2xl font-poppins font-bold">Youth for Oceans (Y4O)</h3>
                <p className="text-white/90 text-sm">Building Ocean Ambassadors from Kilifi to the World</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Over 10,000 school children have stepped into the ocean at Kuruwitu. Not as tourists, but as learners. They've planted corals with community divers, documented marine species, learned permaculture from LIFT Network women, and carried those lessons home.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Seven schools now partner directly with the Y4O program for long-term coral management and restoration education. International students—300 from Europe and North America, 13 from African Leadership University—arrive to learn, then leave as ambassadors lobbying for sustainable coastal fisheries management globally. Fifteen filmmakers have been trained to tell these stories. Ten films have reached screens worldwide.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-700">10,000+</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">School Children Reached</div>
                </div>
                <div className="bg-teal-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-teal-700">50</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">Schools Across Kilifi</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-700">40+</div>
                  <div className="text-xs text-gray-600 uppercase mt-1">International Interns</div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Project REEL */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">Project REEL Kilifi</h3>
                <div className="text-xs text-ocean-turquoise font-bold uppercase mt-1">Storytelling & Knowledge Exchange</div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Intergenerational knowledge doesn't live in reports—it lives in stories. Project REEL trains young filmmakers to document fisher voices, community wisdom, and the Kuruwitu journey. These aren't promotional videos; they're living archives of what works, what failed, and why it matters.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4">
                <div className="text-sm font-bold text-green-700 mb-2">Capturing Community Wisdom</div>
                <div className="space-y-1 text-xs text-gray-600">
                  <div>• 15 filmmakers trained in documentary storytelling</div>
                  <div>• 10 films produced and shared globally</div>
                  <div>• Community-led narratives, not external PR</div>
                </div>
              </div>
            </div>

            {/* Fisher Folk Academy */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">Fisher Folk Academy</h3>
                <div className="text-xs text-amber-600 font-bold uppercase mt-1">Global Recognition, Local Roots</div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                What began at Kuruwitu is now recognized on world stages. The Fisher Folk Academy represents a model that centers community leadership, not external consultants. From IUCN conferences in Marseille, Monaco, and the Asia-Pacific region to the 2022 Blue Champions Award, the world is watching—and learning.
              </p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4">
                <div className="text-sm font-bold text-amber-700 mb-2">International Platforms</div>
                <div className="space-y-1 text-xs text-gray-600">
                  <div>• 2021-2022 IUCN Global Conferences (3 presentations)</div>
                  <div>• 2022 IUCN Blue Champions Award</div>
                  <div>• 2023 Royal Visit & National Recognition</div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width - Citizen Science */}
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="bg-white/20 rounded-lg px-3 py-1 text-white font-bold text-sm inline-block mb-3">Knowledge Building</div>
                <h3 className="text-2xl font-poppins font-bold mb-3">Citizen science & community monitoring</h3>
                <p className="text-white/90 leading-relaxed">
                  Community members, students and visitors contribute to monitoring and research through toolkits, templates and educational materials, supporting conservation across the Kilifi County BMU network.
                </p>
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
