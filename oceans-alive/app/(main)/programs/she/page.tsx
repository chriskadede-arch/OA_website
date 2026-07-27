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
            Conservation is strongest when communities have secure livelihoods. This programme supports women, youth and vulnerable households to strengthen incomes, improve food security and build resilience while reducing pressure on marine resources.
          </p>

          {/* Impact Boxes */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">23</div>
                <div className="text-[9px] text-white/50 uppercase">Women in Trash4Cash (Mama Karanga)</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">2</div>
                <div className="text-[9px] text-white/50 uppercase">Women's Groups (Savings & Loan)</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">600+</div>
                <div className="text-[9px] text-white/50 uppercase">Households with Climate-Smart Permaculture</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-4 py-3 min-w-[130px]">
                <div className="text-2xl font-poppins font-bold text-white">735+</div>
                <div className="text-[9px] text-white/50 uppercase">Women Engaged Across Programmes</div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="text-[9px] text-white/30 uppercase">UN SDGs</span>
              <SDGRow sdgs={[5, 8, 14, 13]} size="sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Economic Pillar Section */}
      <section className="bg-gradient-to-br from-pink-900 to-purple-900 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">💰</div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">Economic Pillar</h2>
            <p className="text-white/70 text-sm uppercase tracking-widest">Strategic Plan 2020-25 | Pillar of Development</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-poppins font-bold text-white mb-6">Economic Sustainability & Diversified Income</h3>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed mb-6">
                Supporting sustainability of income streams in the fishery and related value chains, <strong className="text-ocean-turquoise">safeguarding traditional livelihoods</strong> while offering <strong className="text-ocean-turquoise">diversified income generating activities (DIGs)</strong> and recognizing that <strong className="text-ocean-turquoise">for every 1 fisher, 20 other livelihoods benefit in the value chain</strong>.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-4xl mb-3">♻️</div>
                  <h4 className="text-lg font-bold text-white mb-2">Diversified Income (DIGs)</h4>
                  <p className="text-white/70 text-sm">735+ women in Trash4Cash, permaculture, LIFT Network—economic options beyond fishing.</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-4xl mb-3">🔗</div>
                  <h4 className="text-lg font-bold text-white mb-2">Value Chain Support</h4>
                  <p className="text-white/70 text-sm">For every 1 fisher, 20 livelihoods benefit—supporting the entire coastal economy.</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-4xl mb-3">🌾</div>
                  <h4 className="text-lg font-bold text-white mb-2">Safeguard Livelihoods</h4>
                  <p className="text-white/70 text-sm">600+ households with climate-smart food security, protecting traditional ways of life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women at the Heart of Conservation */}
      <section className="relative bg-gradient-to-br from-[#1a6b5a] to-ocean-seafoam py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/trashforcash.jpg"
            alt="Women in Kilifi's Trash4Cash programme"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a6b5a]/40 to-ocean-seafoam/30" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-widest mb-4 drop-shadow-lg">Women & Ocean</p>
              <h2 className="text-4xl font-poppins font-bold text-white mb-6 drop-shadow-lg">
                Women at the Heart of Conservation
              </h2>
              <p className="text-white leading-relaxed mb-4 drop-shadow-md">
                Through Oceans Alive's Social, Health and Environment programme, women are helping shape the future of conservation across Kilifi County.
              </p>
              <p className="text-white leading-relaxed mb-4 drop-shadow-md">
                From coral restoration and community leadership to small businesses and recycling initiatives, women are creating practical solutions that benefit both people and the environment.
              </p>
              <p className="text-white leading-relaxed mb-8 drop-shadow-md">
                Today, more than 120 women collect, sort and sell over two tonnes of plastic each month, turning waste into income while helping protect the coast they call home.
              </p>
              <Link
                href="/programmes/trash4cash"
                className="inline-flex items-center gap-2 bg-white text-[#1a6b5a] font-bold px-6 py-3 rounded-xl hover:bg-ocean-midnight hover:text-white transition-all duration-200 shadow-xl"
              >
                Support Women's Programmes →
              </Link>
            </div>
            <div className="relative w-full h-[600px] lg:h-[700px]">
              {/* Overlapping Image 1 - Top Right */}
              <div className="absolute top-12 right-6 md:right-12 w-64 md:w-80 lg:w-96 h-52 md:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-2xl border-4 md:border-6 border-white transform rotate-6 hover:rotate-3 hover:scale-105 transition-all duration-300 z-10">
                <Image
                  src="/images/womenlearning.jpg"
                  alt="Women learning and empowerment"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping Image 2 - Bottom Left */}
              <div className="absolute bottom-12 left-6 md:left-12 w-72 md:w-88 lg:w-[420px] h-56 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 md:border-6 border-white transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 z-20">
                <Image
                  src="/images/womenlearning2.jpg"
                  alt="Women in community programs"
                  fill
                  className="object-cover"
                />
              </div>
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
                <h3 className="text-2xl font-poppins font-bold">Mama Karanga – Trash4Cash</h3>
                <p className="text-white/90 text-sm">Ongoing Pilot</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Plastic waste is turned into income through a community-led recycling programme led by Mama Karanga, in partnership with Eco-world, reducing marine pollution and beach waste. Monthly beach clean-ups.
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
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">Climate-smart food systems</h3>
                <div className="text-xs text-ocean-turquoise font-bold uppercase mt-1">Ongoing</div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Backyard climate-smart permaculture improves nutrition with leafy vegetables and resilient indigenous crops while supplementing income. Demo farm; permaculture training and toolkit distribution.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-700 mb-1">600+</div>
                <div className="text-sm text-gray-600">Households (≈4,800 people)</div>
              </div>
            </div>

            {/* Women's Leadership */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight">Women's leadership</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Supporting women to take active roles in conservation, fisheries governance and community decision-making through BMU participation and CBO leadership.
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
                <div className="bg-white/20 rounded-lg px-3 py-1 text-white font-bold text-sm inline-block mb-3">Financial independence</div>
                <h3 className="text-2xl font-poppins font-bold mb-3">Building Financial Resilience</h3>
                <p className="text-white/90 leading-relaxed">
                  Training in budgeting, business management and financial planning.
                </p>
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
