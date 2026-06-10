import Link from 'next/link';
import Image from 'next/image';
import SDGRow from '@/components/common/SDGRow';

export const metadata = {
  title: 'Research, Innovation & Sustainable Finance',
  description: 'Scientific monitoring, data-driven conservation, and sustainable revenue models.',
};

export default function ResearchInnovationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/oceansmen.jpg" alt="Research & Innovation" fill className="object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-6xl font-poppins font-bold text-white/20 mb-4">05</div>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-6">Research, Innovation & Sustainable Finance</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">
            This programme generates the evidence, innovation and financial sustainability needed to support long-term conservation impact. By combining scientific monitoring, community knowledge and sustainable revenue models, Oceans Alive demonstrates how conservation can be both effective and financially resilient.
          </p>

          {/* Impact Boxes */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">85%</div>
                <div className="text-[9px] text-white/50 uppercase">Coral Survival Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">Quarterly</div>
                <div className="text-[9px] text-white/50 uppercase">Monitoring Surveys</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">400%</div>
                <div className="text-[9px] text-white/50 uppercase">Fish Biomass Increase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">Data-Driven</div>
                <div className="text-[9px] text-white/50 uppercase">Conservation</div>
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
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Fish Biomass Monitoring</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Tracks changes in fish abundance and diversity to assess ecosystem health and conservation outcomes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Coral Health Monitoring</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Regular assessments measure coral cover, recruitment and reef condition to guide restoration and management efforts.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Sustainable Conservation Tourism</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Develops responsible tourism experiences that generate income for conservation while educating visitors about marine ecosystems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Sustainable Finance Mechanisms</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Develops innovative revenue streams, conservation fees and enterprise models that help ensure the long-term sustainability of conservation initiatives.
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
