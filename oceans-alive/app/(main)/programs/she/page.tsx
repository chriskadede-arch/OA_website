import Link from 'next/link';
import Image from 'next/image';
import SDGRow from '@/components/common/SDGRow';

export const metadata = {
  title: 'SHE Program - Sustainable Households & Enterprises',
  description: 'Women\'s empowerment, livelihoods, and economic independence through conservation.',
};

export default function SHEProgramPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/trashforcash.jpg" alt="SHE Program" fill className="object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-6xl font-poppins font-bold text-white/20 mb-4">02</div>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-6">SHE Program</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-4 leading-relaxed">
            Sustainable Households & Enterprises
          </p>
          <p className="text-lg text-white/80 max-w-3xl mb-8 leading-relaxed">
            Conservation is strongest when communities have secure livelihoods and opportunities for the future. The SHE Program supports women, youth and vulnerable households to strengthen incomes, improve food security and build resilience while reducing pressure on marine resources.
          </p>

          {/* Impact Boxes */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">80+</div>
                <div className="text-[9px] text-white/50 uppercase">Women Employed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">2+ tonnes</div>
                <div className="text-[9px] text-white/50 uppercase">Plastic Monthly</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">4</div>
                <div className="text-[9px] text-white/50 uppercase">Communities</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">120+</div>
                <div className="text-[9px] text-white/50 uppercase">LIFT Network Women</div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="text-[9px] text-white/30 uppercase">UN SDGs</span>
              <SDGRow sdgs={[5, 8, 14, 13]} size="sm" />
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
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Trash4Cash</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Plastic waste is transformed into economic opportunity through a community-led recycling programme that creates income while reducing pollution.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Women's Leadership</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We support women to take active roles in conservation, fisheries governance and community decision-making.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Climate-Smart Food Systems</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Through kitchen gardens, indigenous crops and sustainable farming practices, households improve nutrition, food security and resilience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-3">Financial Literacy & Entrepreneurship</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Training helps participants build practical skills in budgeting, business management and long-term financial planning.
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
