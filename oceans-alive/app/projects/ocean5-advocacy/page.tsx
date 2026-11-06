/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Project › Ocean 5 Advocacy
 * URL:  /projects/ocean5-advocacy
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Problem Statement
 *   3. Objectives
 *   4. Activities Timeline
 *   5. Outcomes
 *   6. Risks and Sustainability
 *   7. Conclusion
 *   8. Call to action
 *
 * Where the text/data lives:
 *   • FUNDER  →  top of this file
 *   • ACTIVITIES  →  top of this file
 */
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Ocean 5 Advocacy | Oceans Alive Foundation',
  description: 'A 24 month, $250,000 campaign arming the Kilifi County Beach Management Unit Network with the evidence, media training and coalitions to push back against illegal trawlers.',
};

const FUNDER = { name: 'Oceans5', logo: '/images/partners/oceans5.jpg' };

const ACTIVITIES = [
  {
    months: 'Months 1 to 6',
    title: 'Capacity Building Workshops',
    body: 'Train 200 BMU leaders, half of them women or youth, in policy brief writing, digital monitoring tools such as vessel tracking apps, and the legal frameworks for IUU enforcement, delivered in partnership with COMRED.',
    output: '4 workshops held, 80% of participants showing measured skill improvement',
  },
  {
    months: 'Months 3 to 9',
    title: 'Governance Strengthening',
    body: 'Improve Network bylaws, run participatory mapping of IUU hotspots, and mentor leaders toward more inclusive decision making.',
    output: 'Approved bylaws, all 18 BMUs mapped for advocacy priorities',
  },
  {
    months: 'Months 7 to 18',
    title: 'Advocacy Campaigns',
    body: 'Launch targeted campaigns, including a "Ban Trawlers Now" petition to the Kenya Fisheries Service, backed by media training and coalition building with the Kenya Marine and Fisheries Research Institute.',
    output: '2 campaigns, 5,000 signatures, coverage across 10+ media outlets',
  },
  {
    months: 'Months 10 to 24',
    title: 'Monitoring and Coalition Support',
    body: 'Provide low cost tools such as GPS buoys for IUU reporting, and build links with regional monitoring bodies including the Indian Ocean Tuna Commission.',
    output: '50 incident reports submitted, 3 new partnerships formed',
  },
  {
    months: 'Ongoing',
    title: 'Evaluation and Scaling',
    body: 'Run mid term and end line evaluations with community feedback loops to keep the model adaptive.',
    output: 'Annual reports, and a model ready to scale to other counties',
  },
];

export default function Ocean5AdvocacyPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/BMUmeeting.jpg"
            alt="Ocean 5 Advocacy"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-rose-900/80 via-rose-900/70 to-ocean-midnight" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-ocean-turquoise rounded-full animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Q1 2026 to Q4 2027</span>
            </div>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Ocean 5 Advocacy
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Empowering Coastal Voices: building advocacy capacity for the Kilifi County Beach Management Unit Network to confront illegal fishing and trawler encroachment.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">18</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">BMUs</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">5,000+</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">Fisherfolk</div>
              </div>
            </div>
          </div>
        </div>

        {/* Funder badge, floating right */}
        <div className="hidden lg:flex absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 flex-col items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Partner</span>
          <div className="relative w-36 h-20 bg-white rounded-xl p-3">
            <Image src={FUNDER.logo} alt={FUNDER.name} fill className="object-contain p-2" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Problem Statement
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">The Problem</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight mb-4">
              Kilifi's Fishers Are Losing Ground to Trawlers They Cannot Fight Alone
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Small scale artisanal fishers make up 90% of the fishing sector along Kilifi's 270 km stretch of Kenya's coastline, and it is their nearshore waters that industrial trawlers are encroaching on.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
              <div className="text-3xl font-poppins font-bold text-rose-800 mb-2">30%+</div>
              <p className="text-sm text-gray-600 leading-relaxed">Decline in key species like prawns and reef fish over the last decade, threatening food security for 20,000+ fishing households.</p>
            </div>
            <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
              <div className="text-3xl font-poppins font-bold text-rose-800 mb-2">$100M+</div>
              <p className="text-sm text-gray-600 leading-relaxed">Estimated annual regional losses from illegal, unreported and unregulated fishing and weak enforcement.</p>
            </div>
            <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
              <div className="text-3xl font-poppins font-bold text-rose-800 mb-2">80%</div>
              <p className="text-sm text-gray-600 leading-relaxed">Share of income Kilifi's small scale fishers draw from nearshore resources now under threat from foreign trawlers.</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
            The KCBMU Network gained formal recognition only recently, under the 2024 Beach Management Unit Regulations, and still lacks the skills in evidence-based advocacy, media engagement and coalition-building it needs to influence policy. Left unaddressed, this threatens the newly approved KAMAMKUKI, TAMKIBO and MALINDI-MAGARINI Joint Co-Management Plan (2024 to 2028) and risks locking coastal communities into deeper poverty.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Objectives
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Objectives</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">
              Building a Network That Can Lobby and Win
            </h2>
          </div>
          <div className="space-y-4">
            {[
              'Enhance Network governance and leadership skills to foster unified advocacy.',
              'Equip BMU members with tools for evidence gathering, policy analysis and public campaigning on IUU threats.',
              'Facilitate strategic partnerships and media engagement to amplify calls for trawler regulation and enforcement.',
              'Monitor and evaluate advocacy impacts to keep strategies adaptive and community driven.',
            ].map((obj, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-rose-900 text-white flex items-center justify-center shrink-0 text-sm font-bold">{i + 1}</div>
                <p className="text-gray-700 leading-relaxed pt-1">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Activities Timeline
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Activities</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">
              A 24 Month Campaign, Five Moving Parts
            </h2>
          </div>
          <div className="space-y-0">
            {ACTIVITIES.map((item, i) => (
              <div key={item.title} className="flex gap-4 sm:gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center gap-2 shrink-0 w-28">
                  <div className="px-2 sm:px-3 py-2 rounded-full bg-rose-900/5 border-2 border-rose-800 text-center">
                    <span className="text-[11px] font-bold text-rose-800 whitespace-nowrap">{item.months}</span>
                  </div>
                  {i < ACTIVITIES.length - 1 && <div className="w-px flex-1 bg-rose-800/20" />}
                </div>
                <div className="pt-1 pb-2 min-w-0">
                  <h3 className="font-poppins font-bold text-lg sm:text-xl text-ocean-midnight mb-2 break-words">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">{item.body}</p>
                  <p className="text-sm font-semibold text-rose-800">Expected output: {item.output}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Outcomes
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Expected Outcomes</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white leading-tight">
              What Success Looks Like
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-xs font-bold text-ocean-turquoise uppercase tracking-widest mb-3">Short Term, 12 Months</p>
              <p className="text-sm text-white/80 leading-relaxed">70% of BMUs show improved advocacy skills, and at least one policy brief on trawler bans reaches a county assembly.</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-xs font-bold text-ocean-turquoise uppercase tracking-widest mb-3">Medium Term, 24 Months</p>
              <p className="text-sm text-white/80 leading-relaxed">Reported IUU incidents fall by 25% as monitoring improves, and the Network becomes a recognised voice in national fisheries dialogues.</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-xs font-bold text-ocean-turquoise uppercase tracking-widest mb-3">Long Term</p>
              <p className="text-sm text-white/80 leading-relaxed">A 15% income increase for fishers, supporting Oceans5's goal of curbing overfishing across the Western Indian Ocean, including biodiversity hotspots like the North Kenya Banks, and aligning with SDG 14.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 · Risks and Sustainability
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Staying Honest About the Risks</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">
              Risks, Sustainability and How Progress Gets Tracked
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-ocean-midnight mb-3">Risks and Mitigation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Political resistance to trawler bans is met with evidence based advocacy. Low participation is addressed through incentives and sensitization forums, run by the BMUs themselves with backing from the Network and County Fisheries.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-ocean-midnight mb-3">Sustainability</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Skills are embedded directly in Network operations rather than held by outside trainers, and Oceans Alive will pursue follow on funding to carry the work beyond this grant.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-poppins font-bold text-ocean-midnight mb-3">Monitoring and Learning</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Trained advocates, policy submissions, IUU reports and income are tracked through BMU logs, surveys and digital dashboards, with biannual progress reports to Oceans5 and quarterly steering committee meetings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7 · Conclusion
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl font-poppins font-medium text-ocean-midnight leading-relaxed">
            "This initiative will transform the KCBMU Network from a reactive monitoring body into a proactive force for ocean justice."
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 8 · Call to action
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-ocean-midnight to-ocean-turquoise/30 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            Help Amplify Coastal Voices
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Your support helps fisherfolk communities advocate for stronger protection against illegal fishing and trawler threats.
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
