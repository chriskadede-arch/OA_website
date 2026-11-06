/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Project › Fishing Community Empowerment Academy
 * URL:  /projects/fisherfolk-academy
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Pull quote intro
 *   3. Skills grid
 *   4. Living Classroom
 *   5. Participant to Custodian journey
 *   6. Call to action
 *
 * Where the text/data lives:
 *   • SKILLS  →  top of this file
 */
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Fishing Community Empowerment Academy | Oceans Alive Foundation',
  description: "Kuruwitu's two decade conservation record turned into a fellowship, training fishing community leaders, women and youth to drive sustainable fisheries management.",
};

const SKILLS = [
  'Leadership', 'Fisheries Management', 'Governance', 'Financial Management',
  'Monitoring', 'Communication', 'Behaviour Change', 'Sustainable Livelihoods',
];

export default function FisherfolkAcademyPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden min-h-[55vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/womenlearning.jpg"
            alt="Fishing Community Empowerment Academy"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 via-indigo-900/70 to-ocean-midnight" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 pt-40 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <span className="w-2 h-2 bg-ocean-turquoise rounded-full animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Training Fellowship</span>
          </div>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
            Fishing Community Empowerment Academy
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Transforming fisheries management through community leadership.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Pull quote intro
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-poppins font-medium text-ocean-midnight leading-snug">
            "Healthy fisheries depend on strong, empowered communities, not short term, externally driven projects."
          </p>
          <p className="text-gray-600 leading-relaxed mt-6 max-w-2xl mx-auto">
            The Academy places communities at the centre of decision making, equipping them with the knowledge, practical skills and long term support to manage their own marine resources and build resilient coastal livelihoods.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Skills grid
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">
              Eight Skills, Taught Through Experience
            </h2>
            <p className="text-gray-600 leading-relaxed mt-4 max-w-2xl mx-auto">
              Community leaders, women, youth and other underrepresented groups train through experiential learning, practical field work and long term mentoring, then return home to share what they have learned.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {SKILLS.map((skill) => (
              <span key={skill} className="px-5 py-2.5 bg-white border-2 border-indigo-100 rounded-full text-sm font-semibold text-ocean-midnight">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Living Classroom
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden order-2 lg:order-1" style={{ minHeight: '380px' }}>
              <Image
                src="/images/communities.jpg"
                alt="Kuruwitu Living Classroom"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">The Living Classroom</p>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">
                Twenty Years of Proof, in One Place
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At the heart of the Academy is the Kuruwitu Co-Managed Area, Oceans Alive's internationally recognised Living Classroom, where participants learn directly from more than two decades of successful community-led marine conservation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Here they see how healthy ecosystems, strong governance, sustainable fisheries, women's empowerment, scientific monitoring and sustainable finance work together, then take those lessons home as practical training materials and toolkits that can be adapted by fishing communities across Kenya, the Western Indian Ocean and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Participant to Custodian journey
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-indigo-950 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Our Vision</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white leading-tight">
              From Participant to Custodian
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-white/10 flex items-center justify-center text-white font-bold mb-4">1</div>
              <h3 className="font-poppins font-bold text-white mb-2">Participant</h3>
              <p className="text-sm text-white/70 leading-relaxed">Joins a conservation project led by others, learning by watching and doing.</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-white/10 flex items-center justify-center text-white font-bold mb-4">2</div>
              <h3 className="font-poppins font-bold text-white mb-2">Leader</h3>
              <p className="text-sm text-white/70 leading-relaxed">Takes on governance, monitoring and mentoring roles within their own BMU.</p>
            </div>
            <div className="bg-ocean-turquoise/10 rounded-2xl p-6 border border-ocean-turquoise/30 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-ocean-turquoise flex items-center justify-center text-ocean-midnight font-bold mb-4">3</div>
              <h3 className="font-poppins font-bold text-white mb-2">Custodian</h3>
              <p className="text-sm text-white/70 leading-relaxed">Owns and sustains a self-reliant, financially independent Co-Managed Marine Area.</p>
            </div>
          </div>
          <p className="text-white/60 text-center leading-relaxed mt-10 max-w-2xl mx-auto">
            By investing in people, leadership and long term capacity, Oceans Alive is helping communities move from being participants in conservation projects to becoming the leaders, innovators and custodians of their own marine resources.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 · Call to action
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-ocean-midnight to-ocean-turquoise/30 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            Help Build the Next Generation of Ocean Leaders
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Your support trains community leaders who can strengthen fisheries governance and build self-reliant marine areas across the coast.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/donate"
              className="px-8 py-4 bg-ocean-turquoise text-white rounded-xl font-bold hover:bg-white hover:text-ocean-turquoise transition-all shadow-lg"
            >
              Support This Project
            </Link>
            <Link
              href="/#projects"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-ocean-midnight transition-all"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
