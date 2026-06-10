import Link from 'next/link';
import Image from 'next/image';
import SDGRow from '@/components/common/SDGRow';

export const metadata = {
  title: 'Ocean Recovery Program',
  description: 'Healthy oceans support healthy communities. Coral restoration, fisheries protection, and marine ecosystem recovery.',
};

export default function OceanRecoveryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ocean-midnight to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/divers.jpg" alt="Ocean Recovery" fill className="object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-6xl font-poppins font-bold text-white/20 mb-4">01</div>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-6">Ocean Recovery</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">
            Healthy oceans support healthy communities. Our Ocean Recovery Program helps coastal communities protect and restore the ecosystems they depend on, from coral reefs and fisheries to sea turtle habitats.
          </p>

          {/* Impact Boxes */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">25,000+</div>
                <div className="text-[9px] text-white/50 uppercase">Corals Planted</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">400%</div>
                <div className="text-[9px] text-white/50 uppercase">Fish Biomass Increase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">120 km²</div>
                <div className="text-[9px] text-white/50 uppercase">Co-Managed Area</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">85%</div>
                <div className="text-[9px] text-white/50 uppercase">Coral Survival Rate</div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="text-[9px] text-white/30 uppercase">UN SDGs</span>
              <SDGRow sdgs={[14, 13, 17]} size="sm" />
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
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Kuruwitu Tengefu</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Established in 2006, the Kuruwitu Tengefu was Kenya's first community-managed marine sanctuary. It remains a powerful example of how local stewardship can help reefs recover and fish populations return.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Coral Restoration</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Through coral nurseries, coral gardening and reef restoration, communities are helping damaged reefs recover and become more resilient to future pressures.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Kuruwitu Co-Management Area</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Covering 12,000 hectares of ocean, the co-management area supports sustainable fishing, habitat protection and shared responsibility for marine resources.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Sea Turtle Conservation</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Working with local communities, we protect nesting sites, monitor turtle populations and respond to threats facing these important marine species.
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
