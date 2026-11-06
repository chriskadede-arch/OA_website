/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Project › Conscious Coral Reef Restoration Tourism
 * URL:  /projects/conscious-coral-tourism
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Ecological Recovery Dashboard
 *   3. The Plan
 *   4. Visitor Experience
 *   5. Progress Checklist
 *   6. Looking Ahead
 *   7. Call to action
 *
 * Where the text/data lives:
 *   • EXPERIENCE  →  top of this file
 *   • PROGRESS  →  top of this file
 *   • FUNDER  →  top of this file
 */
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Conscious Coral Reef Restoration Tourism | Oceans Alive Foundation',
  description: "Turning a 30 hectare sanctuary's ecological recovery into a certified, income generating reef tourism enterprise at Kuruwitu, Kenya's first community marine sanctuary.",
};

const EXPERIENCE = [
  { title: 'Coral Education', body: 'Restoration tours explaining how the sanctuary recovered and why it matters.' },
  { title: 'Nursery Work', body: 'Hands on time in the coral nursery, learning how fragments are grown and cared for.' },
  { title: 'Reef Out-Planting', body: 'Artificial reef out-planting sessions where visitors help transplant juvenile coral.' },
  { title: 'Plant Your Own Coral', body: 'A signature moment: every visitor gets to plant a coral of their own on the reef.' },
];

const PROGRESS = [
  'Entrance and reception area cleaned, with new wall paintings of local marine life',
  'Collaboration MOU between Oceans Alive and KCW-CBO revised',
  'Marketing consultant engaged to design a communication strategy',
  'Tourist sunbeds and mattresses procured',
  "Rangers' and guides' uniforms made",
  'Snorkels, masks and reef shoes procured for tourists',
];

const FUNDER = { name: 'The Conscious Travel Foundation', logo: '/images/partners/conscious-travel.png' };

export default function ConsciousCoralTourismPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/divers.jpg"
            alt="Conscious Coral Reef Restoration Tourism"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/80 via-cyan-900/70 to-ocean-midnight" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-ocean-turquoise rounded-full animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">March 2026 to March 2029</span>
            </div>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Conscious Coral Reef Restoration Tourism
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Nineteen years of community conservation at Kuruwitu, Kenya's first community marine sanctuary, becoming a certified, income generating coral restoration tourism enterprise.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">30 ha</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">Sanctuary</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">19</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">Years of Community Care</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">3</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">Year Programme</div>
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
          SECTION 2 · Ecological Recovery Dashboard
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Why Kuruwitu</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">
              Nineteen Years of Ecological Recovery, By the Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            <div className="bg-cyan-50 rounded-2xl p-4 sm:p-6 text-center border border-cyan-100">
              <div className="text-2xl sm:text-3xl font-poppins font-bold text-cyan-800 mb-1">400%</div>
              <p className="text-[11px] sm:text-xs text-gray-600 uppercase tracking-wide sm:tracking-widest">Rise in Fish Biomass</p>
            </div>
            <div className="bg-cyan-50 rounded-2xl p-4 sm:p-6 text-center border border-cyan-100">
              <div className="text-2xl sm:text-3xl font-poppins font-bold text-cyan-800 mb-1">17%</div>
              <p className="text-[11px] sm:text-xs text-gray-600 uppercase tracking-wide sm:tracking-widest">Seagrass Recovery</p>
            </div>
            <div className="bg-cyan-50 rounded-2xl p-4 sm:p-6 text-center border border-cyan-100">
              <div className="text-2xl sm:text-3xl font-poppins font-bold text-cyan-800 mb-1">30%+</div>
              <p className="text-[11px] sm:text-xs text-gray-600 uppercase tracking-wide sm:tracking-widest">Coral Cover Improvement</p>
            </div>
            <div className="bg-cyan-50 rounded-2xl p-4 sm:p-6 text-center border border-cyan-100">
              <div className="text-2xl sm:text-3xl font-poppins font-bold text-cyan-800 mb-1">135%</div>
              <p className="text-[11px] sm:text-xs text-gray-600 uppercase tracking-wide sm:tracking-widest">Fish Catch Spillover</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mt-8 max-w-3xl mx-auto text-center">
            Kuruwitu is managed by the Kuruwitu Conservation and Welfare CBO and the Kuruwitu Beach Management Unit under traditional law, and now co-managed under Kenya's Fisheries Regulations. The CBO has run its eco tourism venture for over 10 years, becoming a popular destination and a living classroom for other fishing communities. But climate driven coral bleaching, illegal fishing and unregulated tourism now threaten those gains, which is exactly what this programme is built to hold the line against.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · The Plan
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">The Plan</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">
              Three Moves to a Certified Destination
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-ocean-turquoise text-white rounded-full flex items-center justify-center mb-4 font-poppins font-bold text-xl">1</div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-3">Business Plan and Strategy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Develop a professional business plan and tourism strategy built around the sanctuary's proven ecological recovery.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-ocean-turquoise text-white rounded-full flex items-center justify-center mb-4 font-poppins font-bold text-xl">2</div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-3">Facilities and Certification</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Upgrade facilities and safety compliance, and certify staff to national tourism board standards.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-ocean-turquoise text-white rounded-full flex items-center justify-center mb-4 font-poppins font-bold text-xl">3</div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-3">KATO Marketing Packages</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Formalize Aquatic Safari packages with the Kenya Association of Tour Operators, who have already expressed interest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Visitor Experience
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">The Visitor Experience</p>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">
                A Beach to Reef Package, Built Around Participation
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Tourists, schools and corporate groups pay to take part in an aquatic safari, not just watch one. The result funds reef restoration, monitoring and community livelihoods while widening every visitor's understanding of what protecting a coral reef actually takes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXPERIENCE.map((item) => (
                <div key={item.title} className="bg-cyan-50 rounded-xl p-5 border border-cyan-100">
                  <h3 className="font-poppins font-bold text-ocean-midnight mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Progress Checklist
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Progress to Date</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white leading-tight">
              Already Underway
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROGRESS.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <svg className="w-5 h-5 text-ocean-turquoise shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-white/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 · Looking Ahead
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Beyond Kuruwitu, the model is designed to travel: a grassroots led, tourism linked, income generating blueprint that other coastal communities across Kenya can adapt for their own reefs.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7 · Call to action
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-ocean-midnight to-ocean-turquoise/30 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            Help Safeguard Kuruwitu's Reefs
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Your support helps finance reef restoration, monitoring and community livelihoods through regenerative tourism.
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
