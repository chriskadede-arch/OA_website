import Link from 'next/link';
import Image from 'next/image';
import SDGRow from '@/components/common/SDGRow';

export const metadata = {
  title: 'Governance & Sustainable Fisheries Program',
  description: 'Community governance, BMU networks, and sustainable fisheries management.',
};

export default function GovernanceFisheriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-600 to-orange-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/kamakukijcma.jpg" alt="Governance & Fisheries" fill className="object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-6xl font-poppins font-bold text-white/20 mb-4">04</div>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-6">Governance & Sustainable Fisheries</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">
            Strong governance is essential for effective conservation. This program strengthens local institutions, empowers communities to participate in decision-making and promotes sustainable fisheries management through collaborative governance systems.
          </p>

          {/* Impact Boxes */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">17</div>
                <div className="text-[9px] text-white/50 uppercase">BMUs in Network</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">120 km²</div>
                <div className="text-[9px] text-white/50 uppercase">Co-Managed Area</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">2022</div>
                <div className="text-[9px] text-white/50 uppercase">Plan Signed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">1,200+</div>
                <div className="text-[9px] text-white/50 uppercase">Community Members</div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="text-[9px] text-white/30 uppercase">UN SDGs</span>
              <SDGRow sdgs={[14, 17, 8]} size="sm" />
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
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Beach Management Unit Capacity Building</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Strengthens the leadership, governance and operational effectiveness of local Beach Management Units responsible for fisheries management.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Co-Management Planning</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Supports communities, government agencies and stakeholders to jointly manage marine resources through participatory planning processes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Fisheries Governance Training</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Builds community understanding of fisheries regulations, resource management and co-management approaches.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Community Conservation Networks</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Links communities across the coast to strengthen collective action, advocacy and knowledge sharing for marine conservation.
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
