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
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-8">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Marine Education</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Thousands of students visit Kuruwitu each year to learn about marine ecosystems, conservation and sustainable resource management.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Youth Ocean Leadership</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Young people gain practical experience, mentorship and opportunities to become future conservation leaders.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Fisher Folk Academy</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                A growing centre for learning, leadership development and innovation within coastal communities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Citizen Science</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Community members, students and visitors contribute to monitoring and research, helping build knowledge while supporting conservation.
              </p>
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
