/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Project › REEL School Outreach
 * URL:  /projects/reel-outreach
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Target vs Reality
 *   3. Journey Timeline
 *   4. Results
 *   5. Call to action
 *
 * Where the text/data lives:
 *   • JOURNEY  →  top of this file
 *   • FUNDER  →  top of this file
 */
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'REEL School Outreach Program | Oceans Alive Foundation',
  description: 'An 18 month coral reef education journey across 50 schools: five original films, an art competition, and a reward trip to Kuruwitu for the learners who understood corals best.',
};

const JOURNEY = [
  {
    step: '01',
    title: 'Building the Toolkit',
    body: 'Coral posters and leaflets were designed for classrooms, and a pre-programme questionnaire was drawn up to measure what learners already knew about coral reefs before a single lesson began.',
  },
  {
    step: '02',
    title: 'Five Films, One Story',
    body: 'A set of five original educational films walked learners through what coral actually is, why it matters, the threats it faces, what they personally can do to protect it, and how coral restoration works.',
  },
  {
    step: '03',
    title: 'Beyond the Screen',
    body: 'Guided discussions, quizzes and hands on demonstrations turned each film into a full session, giving learners space to question, debate and practise what they had just seen.',
  },
  {
    step: '04',
    title: 'The Bahari Hai Walk Ins',
    body: '978 additional walk in learners visited the Bahari Hai Education Centre, where they were introduced to permaculture, trash for cash beach clean ups, and a real, living coral demonstration hub.',
  },
  {
    step: '05',
    title: 'Art as Evidence',
    body: 'An end of programme art competition asked learners to express what they had learned about coral reefs and ocean conservation in their own creative work, turning comprehension into something visible.',
  },
  {
    step: '06',
    title: 'A Boat Ride to Kuruwitu',
    body: 'The ten schools with the strongest results earned a trip to Kuruwitu marine sanctuary, where learners boarded a boat to see, for the first time, the coral reefs they had spent months learning to protect.',
  },
];

const FUNDER = { name: 'Coral Guardian', logo: '/images/partners/coral-guardian.png' };

export default function ReelOutreachPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/coralteaching.jpg"
            alt="REEL School Outreach Program"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 via-teal-900/70 to-ocean-midnight" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-ocean-turquoise rounded-full animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Feb 2025 to Jul 2026</span>
            </div>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              REEL School Outreach Program
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-3">
              Restoring Ecosystems and Enhancing Livelihoods: an 18 month coral reef education programme delivered with Coral Guardian across 50 schools on the Kenyan coast.
            </p>
            <p className="text-sm text-white/60 uppercase tracking-widest mb-8">
              With the Ministry of Education, the Teachers Service Commission, 50 head teachers and their school environmental clubs
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">2,501</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">Learners in Films</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">978</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">BHEC Walk Ins</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">98%</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">Knowledge Gain</div>
              </div>
            </div>
          </div>
        </div>

        {/* Funder badge, floating right */}
        <div className="hidden lg:flex absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 flex-col items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Partner</span>
          <div className="relative w-36 h-20 bg-ocean-midnight rounded-xl p-3">
            <Image src={FUNDER.logo} alt={FUNDER.name} fill className="object-contain p-2" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Target vs Reality
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">The Target</p>
              <p className="text-3xl font-poppins font-bold text-ocean-midnight">50 schools, 2,500 learners</p>
            </div>
            <div className="bg-ocean-turquoise/5 rounded-2xl p-8 border border-ocean-turquoise/20">
              <p className="text-xs font-bold uppercase tracking-widest text-ocean-turquoise mb-2">What Actually Happened</p>
              <p className="text-3xl font-poppins font-bold text-ocean-midnight">2,501 learners through 5 films, plus 978 walk ins at Bahari Hai</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Journey Timeline
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">How the Programme Ran</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">
              From Coral Posters to a Boat Ride at Kuruwitu
            </h2>
          </div>

          <div className="space-y-0">
            {JOURNEY.map((item, i) => (
              <div key={item.step} className="flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-12 h-12 rounded-full bg-teal-900/5 border-2 border-teal-700 flex items-center justify-center">
                    <span className="text-sm font-bold text-teal-700">{item.step}</span>
                  </div>
                  {i < JOURNEY.length - 1 && <div className="w-px flex-1 bg-teal-700/20" />}
                </div>
                <div className="pt-1">
                  <h3 className="font-poppins font-bold text-xl text-ocean-midnight mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Results
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">What Changed</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white leading-tight">
              Understanding That Held, Twelve Months Later
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-poppins font-bold text-ocean-turquoise mb-2">98%</div>
              <p className="text-sm text-white/70 leading-relaxed">Increase in knowledge gain measured immediately after the educational film sessions, comparing pre and post programme questionnaires.</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-poppins font-bold text-ocean-turquoise mb-2">65%</div>
              <p className="text-sm text-white/70 leading-relaxed">Knowledge retention recorded in a validation survey conducted a full 12 months later, attributed to the visual impact of the films.</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-poppins font-bold text-ocean-turquoise mb-2">10</div>
              <p className="text-sm text-white/70 leading-relaxed">Top performing schools rewarded with a boat trip to Kuruwitu marine sanctuary to see coral reefs firsthand.</p>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto text-center">
            <p className="text-white/80 leading-relaxed italic">
              Many learners committed to becoming ocean stewards: avoiding litter on beaches, refusing to step on corals, and teaching others what they had learned. Some now say they want to become marine scientists or divers.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Call to action
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-ocean-midnight to-ocean-turquoise/30 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            Help Us Reach the Next 50 Schools
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Your support funds the films, materials and field trips that turn coral science into something a child can see, touch and protect.
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
