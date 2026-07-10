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
            Lasting conservation depends on knowledge, skills and local leadership. Our Learning & Leadership Program uses the ocean as a classroom, helping young people, community members and conservation practitioners build the confidence and experience needed to lead change.
          </p>

          {/* Impact Boxes */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">10,000+</div>
                <div className="text-[9px] text-white/50 uppercase">Students Educated</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">200+</div>
                <div className="text-[9px] text-white/50 uppercase">Volunteers Trained</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">Kilifi</div>
                <div className="text-[9px] text-white/50 uppercase">County-Wide</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">40+</div>
                <div className="text-[9px] text-white/50 uppercase">International Interns</div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="text-[9px] text-white/30 uppercase">UN SDGs</span>
              <SDGRow sdgs={[4, 14, 13]} size="sm" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gradient-to-br from-green-50 to-teal-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-12">What We Do</h2>

          {/* Impact at a Glance */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-6">
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">Building Future Ambassadors</div>
              <div className="text-4xl font-bold text-green-700">2,800+ Students & Advocates</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-700">2,500</div>
                <div className="text-xs text-gray-600 uppercase">Primary Students</div>
                <div className="text-xs text-green-600 mt-1">Youth for Oceans</div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-700">300</div>
                <div className="text-xs text-gray-600 uppercase">International</div>
                <div className="text-xs text-blue-600 mt-1">Y4O Program</div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-700">13</div>
                <div className="text-xs text-gray-600 uppercase">Regional Students</div>
                <div className="text-xs text-purple-600 mt-1">African Leadership Univ</div>
              </div>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-amber-700">50</div>
                <div className="text-xs text-gray-600 uppercase">Schools Reached</div>
                <div className="text-xs text-amber-600 mt-1">Education Programs</div>
              </div>
            </div>
          </div>

          {/* Youth for Oceans Feature */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6">
              <div className="text-white">
                <h3 className="text-2xl font-poppins font-bold">Youth for Oceans (Y4O)</h3>
                <p className="text-white/90 text-sm">Marine Education & Ocean Advocacy</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-6">
                Thousands of students visit Kuruwitu each year to learn about marine ecosystems, coral restoration, backyard climate-smart permaculture, and sustainable resource management—becoming future ambassadors for coastal fisheries conservation.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-5">
                  <div className="mb-2">
                    <div className="text-2xl font-bold text-green-700">7 Schools</div>
                  </div>
                  <div className="text-sm text-gray-600">Partnering with Y4O program for sustainable coral management and restoration education</div>
                </div>
                <div className="bg-teal-50 rounded-xl p-5">
                  <div className="mb-2">
                    <div className="text-2xl font-bold text-teal-700">Hands-on</div>
                  </div>
                  <div className="text-sm text-gray-600">Marine & terrestrial environment education through experiential learning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Global Ambassadors */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">Global Impact Advocates</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                International students and filmmakers become ambassadors to lobby for sustainable coastal fisheries management globally.
              </p>
              <div className="space-y-3">
                <div className="bg-blue-50 rounded-lg p-3 flex justify-between items-center">
                  <div className="text-sm text-gray-700">International Students (Y4O)</div>
                  <div className="text-lg font-bold text-blue-600">300</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 flex justify-between items-center">
                  <div className="text-sm text-gray-700">Filmmakers Trained</div>
                  <div className="text-lg font-bold text-purple-600">15</div>
                </div>
                <div className="bg-cyan-50 rounded-lg p-3 flex justify-between items-center">
                  <div className="text-sm text-gray-700">Global Films Produced</div>
                  <div className="text-lg font-bold text-cyan-600">10</div>
                </div>
              </div>
            </div>

            {/* IUCN Global Platforms */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">Fisher Folk Academy</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                A growing centre for learning, leadership development and innovation within coastal communities, supported by global recognition.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4">
                <div className="text-sm font-bold text-green-700 mb-2">Global Presentations</div>
                <div className="space-y-1 text-xs text-gray-600">
                  <div>• 2021 IUCN Marseille Conference</div>
                  <div>• 2022 IUCN APAC Conference</div>
                  <div>• 2022 IUCN Monaco Conference</div>
                  <div>• 2022 Blue Champions Award</div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width - Citizen Science */}
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="bg-white/20 rounded-lg px-3 py-1 text-white font-bold text-sm inline-block mb-3">Knowledge Building</div>
                <h3 className="text-2xl font-poppins font-bold mb-3">Citizen Science & Community Monitoring</h3>
                <p className="text-white/90 leading-relaxed">
                  Community members, students and visitors contribute to monitoring and research through toolkits, templates, museums and educational materials—helping build knowledge while supporting conservation across 17 BMUs.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center min-w-[160px]">
                <div className="text-4xl font-bold text-white">10 Athletes</div>
                <div className="text-xs text-white/70 uppercase mt-2">International Fame</div>
                <div className="text-xs text-white/50 mt-1">Coral Restoration Advocates</div>
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
