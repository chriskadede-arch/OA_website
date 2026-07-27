import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Our Strategic Objectives',
  description: 'Four strategic objectives spanning education, marine ecosystem integrity, food security & income, and institutional capacity.',
};

export default function Programmes() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ocean-midnight py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-ocean-turquoise inline-block" />
            Our Work
          </p>
          <h1 className="font-poppins font-bold text-white text-5xl md:text-7xl leading-tight mb-6 max-w-3xl">
            Our <span className="text-ocean-turquoise">Strategic Objectives</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
            Four integrated objectives creating healthier oceans and stronger communities across Kenya's coast.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
            {[
              { value: '10,000+', label: 'Learners Reached' },
              { value: '25,000+', label: 'Corals Planted' },
              { value: '735+', label: 'Women Empowered' },
              { value: '18', label: 'BMUs Coordinated' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-poppins font-bold text-ocean-turquoise">{s.value}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Strategic Objectives Creative Bento Box Layout */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">Our Work</p>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-ocean-midnight">
              Our Strategic Objectives
            </h2>
          </div>

          {/* Creative Bento-Box Layout Same as Homepage */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Objective 1: Strengthen Coastal Education TALL LEFT */}
            <Link
              href="/programs/learning-leadership"
              className="group relative rounded-2xl overflow-hidden block hover:shadow-2xl transition-all duration-300 border border-ocean-midnight/10 md:col-span-5 md:row-span-2"
              style={{ minHeight: '540px' }}
            >
              <Image
                src="/images/kids.jpg"
                alt="Social Development Education"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/85 to-green-900/35" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Social</span>
                  </div>
                  <div className="text-3xl font-poppins font-black text-white/20">01</div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-poppins font-bold text-white mb-2 leading-tight">
                    Strengthen Coastal Education
                  </h3>
                  <p className="text-sm text-white/85 mb-3 leading-relaxed max-w-lg">
                    Kuruwitu becomes a living classroom. <strong>10,000+ learners</strong> gain hands-on experience in coral restoration and conservation. Building ocean leaders through education and community harmony.
                  </p>
                  <span className="text-sm font-bold text-ocean-turquoise group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    Explore programme <span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Objective 2: Promote Marine Ecosystem Integrity TOP RIGHT WIDE */}
            <Link
              href="/programs/ocean-recovery"
              className="group relative rounded-2xl overflow-hidden block hover:shadow-2xl transition-all duration-300 border border-ocean-midnight/10 md:col-span-7"
              style={{ minHeight: '260px' }}
            >
              <Image
                src="/images/divers.jpg"
                alt="Environmental Stewardship"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight via-ocean-midnight/85 to-ocean-midnight/35" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Environment</span>
                  </div>
                  <div className="text-3xl font-poppins font-black text-white/20">02</div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-poppins font-bold text-white mb-2 leading-tight">
                    Promote Marine Ecosystem Integrity
                  </h3>
                  <p className="text-sm text-white/85 mb-3 leading-relaxed max-w-lg">
                    Fishers become reef gardeners. <strong>120 km² co-managed</strong>, <strong>25,000+ corals planted</strong>, <strong>400% fish biomass increase</strong>. Proof that people and ecosystems recover together.
                  </p>
                  <span className="text-sm font-bold text-ocean-turquoise group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    Explore programme <span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Objective 3: Promote Food Security & Income BOTTOM RIGHT SMALL */}
            <Link
              href="/programs/she"
              className="group relative rounded-2xl overflow-hidden block hover:shadow-2xl transition-all duration-300 border border-ocean-midnight/10 md:col-span-4"
              style={{ minHeight: '260px' }}
            >
              <Image
                src="/images/trashforcash.jpg"
                alt="Economic Sustainability"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900 via-pink-900/85 to-pink-900/35" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Economic</span>
                  </div>
                  <div className="text-3xl font-poppins font-black text-white/20">03</div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-poppins font-bold text-white mb-2 leading-tight">
                    Promote Food Security & Income
                  </h3>
                  <p className="text-sm text-white/85 mb-3 leading-relaxed max-w-lg">
                    <strong>735+ women</strong> in Trash4Cash. <strong>600+ households</strong> with food security.
                  </p>
                  <span className="text-sm font-bold text-ocean-turquoise group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    Explore programme <span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Objective 4: Strengthen Institutional Capacity BOTTOM RIGHT MEDIUM */}
            <Link
              href="/programs/research-innovation"
              className="group relative rounded-2xl overflow-hidden block hover:shadow-2xl transition-all duration-300 border border-ocean-midnight/10 md:col-span-3"
              style={{ minHeight: '260px' }}
            >
              <Image
                src="/images/oceansmen.jpg"
                alt="Governance & Co-Management"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900 via-cyan-900/85 to-cyan-900/35" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Governance</span>
                  </div>
                  <div className="text-3xl font-poppins font-black text-white/20">04</div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-poppins font-bold text-white mb-2 leading-tight">
                    Strengthen Institutional Capacity
                  </h3>
                  <p className="text-sm text-white/85 mb-3 leading-relaxed max-w-lg">
                    <strong>18 BMUs</strong>, <strong>audit-ready science</strong>, <strong>Royal Visit 2023</strong>.
                  </p>
                  <span className="text-sm font-bold text-ocean-turquoise group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    Explore programme <span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
