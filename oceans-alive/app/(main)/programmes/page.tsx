import Link from 'next/link';
import Image from 'next/image';
import { PRINCIPLES, PARTNERS } from '@/lib/constants';

export const metadata = {
  title: 'Our Programs',
  description: 'Five integrated programs spanning ocean recovery, women\'s empowerment, learning & leadership, governance, and research - forming a complete model for community-led conservation.',
};

export default function Programmes() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-ocean-midnight py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-ocean-turquoise inline-block" />
            Kilifi County, Kenya
          </p>
          <h1 className="font-poppins font-bold text-white text-5xl md:text-7xl leading-tight mb-6 max-w-3xl">
            Our <span className="text-ocean-turquoise">5 Programs</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
            Five integrated programs spanning ocean recovery, women's empowerment, learning & leadership, governance, and research—forming a complete model for community-led conservation that centers the people who depend on the sea.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
            {[
              { value: '5', label: 'Core Programs' },
              { value: '25,000+', label: 'Coral Colonies Planted' },
              { value: '120 km²', label: 'Under Co-Management' },
              { value: '10,000+', label: 'People Educated' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-poppins font-bold text-ocean-turquoise">{s.value}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tengefu / Integrated Approach ────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Our Integrated Approach</p>
              <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-6">
                The Tengefu Model
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <em>Tengefu</em> is a Swahili word for a protected space that belongs to everyone.
                It is the principle at the heart of everything Oceans Alive does.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conservation that works begins and ends with the communities who call the ocean home.
                At Oceans Alive Foundation, no programme stands alone. Our fourteen initiatives are
                deliberately interlocked - reef restoration that trains community divers, governance
                structures that carry fisher voices to national policy, women's livelihoods that reduce
                pressure on fish stocks, and youth education that plants the next generation of reef guardians.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When communities own their conservation, they defend it. When it provides livelihoods,
                they sustain it. When it educates their children, they pass it on.
              </p>
            </div>
            {/* Real photos showing the 4 pillars */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image src="/images/divers.jpg" alt="Coral restoration divers at Kuruwitu" fill className="object-cover" />
                <div className="absolute inset-0 bg-ocean-midnight/40 flex items-end p-3">
                  <span className="text-white text-xs font-bold">🪸 Marine Health</span>
                </div>
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image src="/images/BMUmeeting.jpg" alt="Community BMU governance meeting" fill className="object-cover" />
                <div className="absolute inset-0 bg-ocean-midnight/40 flex items-end p-3">
                  <span className="text-white text-xs font-bold">🏛️ Community Power</span>
                </div>
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image src="/images/trashforcash3.jpg" alt="Women in Trash4Cash collecting plastic" fill className="object-cover" />
                <div className="absolute inset-0 bg-ocean-midnight/40 flex items-end p-3">
                  <span className="text-white text-xs font-bold">💼 Livelihoods</span>
                </div>
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image src="/images/kids.jpg" alt="Children learning about the ocean at Kuruwitu" fill className="object-cover" />
                <div className="absolute inset-0 bg-ocean-midnight/40 flex items-end p-3">
                  <span className="text-white text-xs font-bold">📚 Knowledge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Flagship spotlight ────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-ocean-midnight to-ocean-turquoise p-10 text-white">
                <div className="absolute inset-0">
                  <Image
                    src="/images/oceansmen.jpg"
                    alt="Oceans Alive trained coral restoration divers"
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
                <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-ocean-turquoise/70 mb-2">Partnership · Coral Guardian International</p>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6">01 / Flagship Programme</p>
              <h2 className="text-4xl font-poppins font-bold mb-4">Coral Restoration</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Since 2019, Oceans Alive has partnered with Coral Guardian to rebuild Kilifi's degraded
                reefs. Community fishers are trained as certified reef gardeners - growing coral fragments
                in underwater nurseries and transplanting them to bleached areas. The programme blends
                world-class marine science with deep local ownership.
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
                {[
                  { v: '25,000+', l: 'Colonies Planted' },
                  { v: '2019', l: 'Year Founded' },
                  { v: '40+', l: 'Divers Trained' },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-poppins font-bold text-ocean-turquoise">{s.v}</div>
                    <div className="text-xs text-white/60 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Also in the Coral Programme</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-ocean-turquoise font-bold shrink-0">85%</span>
                  <span>Coral survival rate from nursery to reef - well above the global average</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ocean-turquoise font-bold shrink-0">6 yrs</span>
                  <span>Of active reef gardening by trained community divers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ocean-turquoise font-bold shrink-0">400%</span>
                  <span>Increase in fish biomass within the protected tengefu since restoration began</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ocean-turquoise font-bold shrink-0">∞</span>
                  <span>"The reef is not just recovering - it is growing. We see fish we haven't seen in twenty years." - Community diver, Kuruwitu</span>
                </li>
              </ul>
              <Link
                href="/blog?category=Impact+Stories"
                className="inline-flex items-center gap-2 mt-8 text-ocean-turquoise font-bold hover:text-ocean-midnight transition-colors"
              >
                Read the full restoration story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 Programs ─────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-3">The Full Picture</p>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-ocean-midnight mb-4">
              5 Integrated Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Five interconnected programs spanning ocean recovery, women's empowerment, learning, governance, and research—forming a complete model for community-led conservation.
            </p>
          </div>

          {/* Program 1: Ocean Recovery */}
          <div className="mb-12 bg-gradient-to-br from-ocean-midnight to-blue-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex items-start justify-between mb-6">
              <div className="text-6xl font-poppins font-bold text-white/20">01</div>
            </div>
            <h3 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Ocean Recovery</h3>
            <p className="text-white/90 leading-relaxed mb-6 text-lg max-w-3xl">
              Healthy oceans support healthy communities. Our Ocean Recovery Program helps coastal communities protect and restore the ecosystems they depend on, from coral reefs and fisheries to sea turtle habitats.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                'Kuruwitu Tengefu',
                'Kuruwitu Co-Management Area',
                'Community-Led Marine Managed Areas',
                'Coral Restoration',
                'Sea Turtle Conservation',
                'Fisheries Monitoring and Protection'
              ].map((item) => (
                <div key={item} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-sm">
                  • {item}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-6">
              <div>
                <div className="text-3xl font-poppins font-bold text-ocean-turquoise">25,000+</div>
                <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Corals Planted</div>
              </div>
              <div>
                <div className="text-3xl font-poppins font-bold text-ocean-turquoise">400%</div>
                <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Fish Biomass Increase</div>
              </div>
              <div>
                <div className="text-3xl font-poppins font-bold text-ocean-turquoise">120 km²</div>
                <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Co-Managed</div>
              </div>
            </div>
          </div>

          {/* Program 2: Social Health Environment */}
          <div className="mb-12 bg-gradient-to-br from-pink-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex items-start justify-between mb-6">
              <div className="text-6xl font-poppins font-bold text-white/20">02</div>
            </div>
            <h3 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Social Health Environment (Sustainable Households & Enterprises)</h3>
            <p className="text-white/90 leading-relaxed mb-6 text-lg max-w-3xl">
              Conservation is strongest when communities have secure livelihoods and opportunities for the future. The Social Health Environment program supports women, youth and vulnerable households to strengthen incomes, improve food security and build resilience while reducing pressure on marine resources.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                'Women\'s Savings and Enterprise Groups',
                'Financial Literacy and Entrepreneurship',
                'Climate-Smart Food Systems',
                'Trash4Cash',
                'Women\'s Leadership',
                'Community Innovation'
              ].map((item) => (
                <div key={item} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-sm">
                  • {item}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-6">
              <div>
                <div className="text-3xl font-poppins font-bold text-pink-200">120</div>
                <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Women Employed</div>
              </div>
              <div>
                <div className="text-3xl font-poppins font-bold text-pink-200">2+ tonnes</div>
                <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Plastic Monthly</div>
              </div>
              <div>
                <div className="text-3xl font-poppins font-bold text-pink-200">4</div>
                <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Communities</div>
              </div>
            </div>
          </div>

          {/* Program 3: Learning & Leadership */}
          <div className="mb-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex items-start justify-between mb-6">
              <div className="text-6xl font-poppins font-bold text-white/20">03</div>
            </div>
            <h3 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Learning & Leadership</h3>
            <p className="text-white/90 leading-relaxed mb-6 text-lg max-w-3xl">
              Lasting conservation depends on knowledge, skills and local leadership. Our Learning & Leadership Program uses the ocean as a classroom, helping young people, community members and conservation practitioners build the confidence and experience needed to lead change.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                'Marine Education',
                'Fisher Folk Academy',
                'Youth Ocean Leadership',
                'Internships and Placements',
                'International Learning Exchanges',
                'Citizen Science'
              ].map((item) => (
                <div key={item} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-sm">
                  • {item}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-6">
              <div>
                <div className="text-3xl font-poppins font-bold text-green-200">10,000+</div>
                <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Students Educated</div>
              </div>
              <div>
                <div className="text-3xl font-poppins font-bold text-green-200">200+</div>
                <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Volunteers Trained</div>
              </div>
              <div>
                <div className="text-3xl font-poppins font-bold text-green-200">Kilifi</div>
                <div className="text-xs text-white/70 uppercase tracking-wider mt-1">County-Wide</div>
              </div>
            </div>
          </div>

          {/* Program 4: Governance and Sustainable Fisheries */}
          <div className="mb-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex items-start justify-between mb-6">
              <div className="text-6xl font-poppins font-bold text-white/20">04</div>
            </div>
            <h3 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Governance & Sustainable Fisheries</h3>
            <p className="text-white/90 leading-relaxed mb-6 text-lg max-w-3xl">
              Strong governance is essential for effective conservation. This program strengthens local institutions, empowers communities to participate in decision-making and promotes sustainable fisheries management through collaborative governance systems.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                'Beach Management Unit Capacity Building',
                'Fisheries Governance Training',
                'Community Ranger Training',
                'Co-Management Planning',
                'Peer-to-Peer Learning Exchanges',
                'Community Conservation Networks'
              ].map((item) => (
                <div key={item} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-sm">
                  • {item}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-6">
              <div>
                <div className="text-3xl font-poppins font-bold text-amber-200">18</div>
                <div className="text-xs text-white/70 uppercase tracking-wider mt-1">BMUs in Network</div>
              </div>
              <div>
                <div className="text-3xl font-poppins font-bold text-amber-200">120 km²</div>
                <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Co-Managed Area</div>
              </div>
              <div>
                <div className="text-3xl font-poppins font-bold text-amber-200">2022</div>
                <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Plan Signed</div>
              </div>
            </div>
          </div>

          {/* Programme 5: Research, Innovation and Sustainable Finance */}
          <div className="mb-12 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex items-start justify-between mb-6">
              <div className="text-6xl font-poppins font-bold text-white/20">05</div>
            </div>
            <h3 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Research, Innovation & Sustainable Finance</h3>
            <p className="text-white/90 leading-relaxed mb-6 text-lg max-w-3xl">
              This programme generates the evidence, innovation and financial sustainability needed to support long-term conservation impact. By combining scientific monitoring, community knowledge and sustainable revenue models, Oceans Alive demonstrates how conservation can be both effective and financially resilient.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                'Fish Biomass Monitoring',
                'Coral Health Monitoring',
                'Seagrass Monitoring',
                'Socio-Economic Monitoring',
                'Citizen Science Research',
                'Sustainable Conservation Tourism',
                'Glass Bottom Boat Experiences',
                'Conservation Visitor Experiences',
                'Sustainable Finance Mechanisms'
              ].map((item) => (
                <div key={item} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-sm">
                  • {item}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-6">
              <div>
                <div className="text-3xl font-poppins font-bold text-cyan-200">85%</div>
                <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Coral Survival Rate</div>
              </div>
              <div>
                <div className="text-3xl font-poppins font-bold text-cyan-200">Quarterly</div>
                <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Monitoring Surveys</div>
              </div>
              <div>
                <div className="text-3xl font-poppins font-bold text-cyan-200">Data-Driven</div>
                <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Conservation</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4 Principles ─────────────────────────────────────── */}
      <section className="bg-ocean-midnight py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-3">Why It Works</p>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
              4 Principles Behind Every Programme
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              In Kilifi, the word <em>tengefu</em> describes a protected space that the whole community
              guards. Our programme design starts from that principle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRINCIPLES.map((p) => (
              <div key={p.number} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise/30 mb-4">{p.number}</div>
                <h3 className="font-poppins font-bold text-xl text-white mb-3">{p.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ─────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-3">International Partnerships</p>
            <h2 className="text-3xl font-poppins font-bold text-ocean-midnight">
              World-Class Expertise Supporting Community-Led Action
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border border-gray-100 rounded-2xl overflow-hidden">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="p-6 border-r border-b border-gray-100 last:border-r-0 hover:bg-ocean-turquoise/5 transition-colors text-center"
              >
                <div className="font-poppins font-bold text-sm text-ocean-midnight mb-1">{p.name}</div>
                <div className="text-xs text-gray-400">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get Involved CTA ──────────────────────────────────── */}
      <section className="bg-ocean-turquoise py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-poppins font-bold text-white">Partner With Our Programmes</h3>
              <p className="text-white/80 mt-1">
                NGOs, governments, research institutions, and businesses - every partnership strengthens community conservation.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Link href="/contact?type=Partnership" className="px-6 py-3 bg-white text-ocean-turquoise font-bold rounded-xl hover:bg-ocean-midnight hover:text-white transition-all duration-200">
                Partner With Us
              </Link>
              <Link href="/contact?type=Volunteer" className="px-6 py-3 border border-white/50 text-white font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-all duration-200">
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
