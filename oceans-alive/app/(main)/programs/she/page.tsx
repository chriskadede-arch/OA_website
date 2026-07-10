import Link from 'next/link';
import Image from 'next/image';
import SDGRow from '@/components/common/SDGRow';

export const metadata = {
  title: 'Social Health Environment - Sustainable Households & Enterprises',
  description: 'Women\'s empowerment, livelihoods, and economic independence through conservation.',
};

export default function SHEProgramPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/trashforcash.jpg" alt="Social Health Environment Program" fill className="object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-6xl font-poppins font-bold text-white/20 mb-4">02</div>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-6">Social Health Environment</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-4 leading-relaxed">
            Sustainable Households & Enterprises
          </p>
          <p className="text-lg text-white/80 max-w-3xl mb-8 leading-relaxed">
            Conservation is strongest when communities have secure livelihoods and opportunities for the future. The Social Health Environment program supports women, youth and vulnerable households to strengthen incomes, improve food security and build resilience while reducing pressure on marine resources.
          </p>

          {/* Impact Boxes - Updated from OAT Impact 2025 */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">135+</div>
                <div className="text-[9px] text-white/50 uppercase">Households Reached</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">19</div>
                <div className="text-[9px] text-white/50 uppercase">Trash4Cash HH</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">135</div>
                <div className="text-[9px] text-white/50 uppercase">Kitchen Gardens</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">500+</div>
                <div className="text-[9px] text-white/50 uppercase">HH LIFT Network</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">300+</div>
                <div className="text-[9px] text-white/50 uppercase">HH from CBO</div>
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
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-12">What We Do</h2>

          {/* Impact Overview Bar */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <div className="flex flex-wrap justify-around gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-pink-600">654+</div>
                <div className="text-sm text-gray-600">Total Households Reached</div>
                <div className="text-xs text-gray-400 mt-1">Across All Initiatives</div>
              </div>
              <div className="border-l border-gray-200"></div>
              <div>
                <div className="text-3xl font-bold text-purple-600">135</div>
                <div className="text-sm text-gray-600">Kitchen Gardens</div>
                <div className="text-xs text-gray-400 mt-1">Climate-Smart Permaculture</div>
              </div>
              <div className="border-l border-gray-200"></div>
              <div>
                <div className="text-3xl font-bold text-green-600">19</div>
                <div className="text-sm text-gray-600">Mama Karanga</div>
                <div className="text-xs text-gray-400 mt-1">Trash4Cash Participants</div>
              </div>
            </div>
          </div>

          {/* Mama Karanga - Trash4Cash Feature */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-6">
              <div className="text-white">
                <h3 className="text-2xl font-poppins font-bold">Mama Karanga - Trash4Cash</h3>
                <p className="text-white/90 text-sm">Turning Plastic into Economic Opportunity</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Plastic waste is transformed into economic opportunity through a community-led recycling programme led by Mama Karanga, in partnership with Eco-world, that creates income while reducing marine pollution and beach waste.
              </p>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-pink-600">Monthly</div>
                    <div className="text-sm text-gray-600">Beach clean-ups</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-purple-600">Eco-world</div>
                    <div className="text-sm text-gray-600">Partnership</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Climate-Smart Permaculture */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">Climate-Smart Food Systems</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Through backyard climate-smart permaculture, households improve nutrition with green leafy vegetables and resilient indigenous crops while supplementing income.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-700 mb-1">Demo Farm</div>
                <div className="text-sm text-gray-600">Permaculture training & toolkit distribution</div>
              </div>
            </div>

            {/* Women's Leadership */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">Women's Leadership</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We support women to take active roles in conservation, fisheries governance and community decision-making through BMU participation and CBO leadership.
              </p>
              <div className="bg-amber-50 rounded-lg p-4">
                <div className="text-lg font-bold text-amber-700">Community Based Organizations</div>
                <div className="text-sm text-gray-600 mt-1">Women leading conservation and welfare initiatives</div>
              </div>
            </div>
          </div>

          {/* Full Width - Economic Impact */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-700 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="bg-white/20 rounded-lg px-3 py-1 text-white font-bold text-sm inline-block mb-3">Economic Independence</div>
                <h3 className="text-2xl font-poppins font-bold mb-3">Diversified Income & Financial Literacy</h3>
                <p className="text-white/90 leading-relaxed">
                  Training helps participants build practical skills in budgeting, business management and long-term financial planning. For every 1 fisher, 20 other livelihoods benefit in the value chain, creating resilient coastal economies.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center min-w-[120px]">
                  <div className="text-3xl font-bold text-white">300+</div>
                  <div className="text-xs text-white/70 uppercase mt-1">HH from CBO</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center min-w-[120px]">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-xs text-white/70 uppercase mt-1">HH from KBMU</div>
                </div>
              </div>
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
