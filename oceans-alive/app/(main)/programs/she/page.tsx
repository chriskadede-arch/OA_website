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
          <div className="text-6xl font-poppins font-bold text-white/20 mb-4">03</div>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-6">Promote Food Security & Income</h1>
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
            <div className="w-16 h-16 mx-auto mb-4 text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
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
                  <div className="w-10 h-10 mb-3 text-pink-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M23 6l-9.5 9.5-5-5L1 18"/>
                      <polyline points="17 6 23 6 23 12"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Diversified Income (DIGs)</h4>
                  <p className="text-white/70 text-sm">735+ women in Trash4Cash, permaculture, LIFT Network - economic options beyond fishing.</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-purple-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="18" cy="5" r="3"/>
                      <circle cx="6" cy="12" r="3"/>
                      <circle cx="18" cy="19" r="3"/>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Value Chain Support</h4>
                  <p className="text-white/70 text-sm">For every 1 fisher, 20 livelihoods benefit - supporting the entire coastal economy.</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-10 h-10 mb-3 text-green-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20"/>
                      <circle cx="12" cy="12" r="4"/>
                      <path d="M12 2C8 6 8 10 12 12M12 2c4 4 4 8 0 10M12 22c-4-4-4-8 0-10M12 22c4-4 4-8 0-10"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Safeguard Livelihoods</h4>
                  <p className="text-white/70 text-sm">600+ households with climate-smart food security, protecting traditional ways of life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-12">What We Do</h2>

          {/* Direct Answer - What We Do */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-pink-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-pink-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">Trash4Cash Recycling</h3>
              <p className="text-gray-600 text-sm">120+ women collect, sort and sell plastic waste - turning 2+ tonnes of ocean pollution into monthly household income.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-green-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20"/>
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2C8 6 8 10 12 12M12 2c4 4 4 8 0 10M12 22c-4-4-4-8 0-10M12 22c4-4 4-8 0-10"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">Climate-Smart Food Systems</h3>
              <p className="text-gray-600 text-sm">600+ households with backyard permaculture gardens reducing fishing pressure while improving nutrition and income.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-purple-500 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 text-purple-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2">Women's Leadership (LIFT Network)</h3>
              <p className="text-gray-600 text-sm">735+ women engaged in savings groups, BMU governance, and conservation leadership across Kilifi County.</p>
            </div>
          </div>

          {/* Why This Works - The Philosophy */}
          <div className="bg-gradient-to-br from-pink-600 to-purple-700 rounded-2xl shadow-xl p-8 md:p-10 mb-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-12 bg-white rounded-full"></div>
              <h3 className="text-2xl font-poppins font-bold">When Families Eat from Their Gardens, Oceans Breathe Easier</h3>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed mb-4">
                Conservation is strongest when communities have secure livelihoods and economic independence. This isn't feel-good rhetoric - it's the foundational principle behind the Social, Health & Environment programme. When coastal women have diversified income options, when households grow their own food, when plastic waste becomes a paycheck instead of ocean pollution - that's when conservation moves from a moral argument to a livelihood strategy.
              </p>
              <p className="text-white/90 leading-relaxed mb-4">
                For every 1 fisher on the water, 20 livelihoods benefit in the value chain. That's 20 families whose futures depend on a healthy ocean - not because they're convinced by campaigns, but because their income depends on it. This programme recognizes that economic sustainability and environmental sustainability aren't separate goals. They're the same fight.
              </p>
              <p className="text-white/90 leading-relaxed">
                This isn't aid - it's agency. And when women lead economic empowerment, entire communities shift toward conservation as a livelihood strategy, not a sacrifice.
              </p>
            </div>
          </div>

          {/* Mama Karanga - Trash4Cash Feature */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-6">
              <div className="text-white">
                <h3 className="text-2xl font-poppins font-bold">Mama Karanga – Trash4Cash</h3>
                <p className="text-white/90 text-sm">Turning Ocean Pollution into Household Income</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Eight million tonnes of plastic enter the world's oceans every year. On the Kilifi coast, the women of the Trash4Cash programme are fighting back - and getting paid for it. More than 120 women across four communities now collect, sort, and sell plastic waste to certified recyclers, collecting over two tonnes of plastic waste every month.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                What would otherwise end up choking sea turtles and suffocating coral becomes household income. Trash4Cash is part of the LIFT Network - Oceans Alive's broader women's economic empowerment platform. By placing income generation and environmental protection in the same hands, we make conservation something women do for their own futures, not something done to their environment.
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-pink-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-pink-600">120+</div>
                  <div className="text-xs text-gray-600 uppercase">Women Participants</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-purple-600">2+ Tonnes</div>
                  <div className="text-xs text-gray-600 uppercase">Plastic/Month</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-green-600">4</div>
                  <div className="text-xs text-gray-600 uppercase">Communities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Grid with SVG Icons */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Climate-Smart Permaculture */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 flex-shrink-0 text-green-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M2 12h20"/>
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2C8 6 8 10 12 12M12 2c4 4 4 8 0 10M12 22c-4-4-4-8 0-10M12 22c4-4 4-8 0-10"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold text-ocean-midnight">Kitchen Gardens & Food Security</h3>
                  <div className="text-xs text-green-600 font-bold uppercase mt-1">Climate-Smart Permaculture</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                When coastal fishing families have backyard permaculture gardens growing leafy vegetables and resilient indigenous crops, they eat better - and fish less. This isn't just about nutrition. It's about reducing pressure on overexploited fish stocks by giving families an alternative source of food and income.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The programme is intentionally integrated with LIFT Network, Trash4Cash, and coral restoration - because a community that has food security is a community that can afford to let the reef recover.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-700 mb-1">600+</div>
                <div className="text-sm text-gray-600">Households (≈4,800 people reached)</div>
                <div className="text-xs text-gray-500 mt-2">Demo farm · Permaculture training · Toolkit distribution</div>
              </div>
            </div>

            {/* Women's Leadership */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 flex-shrink-0 text-purple-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold text-ocean-midnight">Women's Leadership in Conservation</h3>
                  <div className="text-xs text-purple-600 font-bold uppercase mt-1">LIFT Network Platform</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Coastal women are disproportionately affected by declining fish stocks and ocean degradation - and disproportionately excluded from the governance decisions that shape their futures. The LIFT Network (Livelihoods, Independence, Finance, Transformation) changes that.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Women now participate in BMU meetings, co-management planning sessions, and conservation monitoring. They're not beneficiaries of conservation - they're its architects. Through savings groups, entrepreneurship training, and leadership development, women are reshaping what coastal conservation looks like.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-lg font-bold text-purple-700">735+ Women Engaged</div>
                <div className="text-sm text-gray-600 mt-1">Across Trash4Cash, permaculture, LIFT Network & savings groups</div>
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

        </div>
      </section>

      {/* Next Strategic Objective Link */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link href="/programs/research-innovation" className="inline-flex items-center gap-3 px-6 py-3 bg-ocean-turquoise text-white font-bold rounded-xl hover:bg-ocean-midnight transition-colors">
            <span className="text-white/60 text-sm">4 of 4</span>
            <span>Next: Strengthen Institutional Capacity →</span>
          </Link>
        </div>
      </section>

      {/* Women at the Heart of Conservation */}
      <section className="relative bg-gradient-to-br from-ocean-midnight to-[#0a4f7a] py-12 md:py-14 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/trashforcash.jpg"
            alt="Women in Kilifi's Trash4Cash programme"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-midnight/60 to-[#0a4f7a]/50" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4 drop-shadow-lg">Women & Ocean</p>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6 drop-shadow-lg">
                Women Leading Conservation
              </h2>
              <p className="text-white/90 leading-relaxed mb-8 drop-shadow-md text-lg">
                <strong>120+ women</strong> collect over <strong>2 tonnes of plastic monthly</strong>, turning waste into income while protecting Kenya's coast.
              </p>
              <Link
                href="/programmes/trash4cash"
                className="inline-flex items-center gap-2 bg-ocean-turquoise text-white font-bold px-6 py-3 rounded-xl hover:bg-white hover:text-ocean-midnight transition-all duration-200 shadow-xl"
              >
                Support Women's Programmes →
              </Link>
            </div>
            <div className="relative w-full h-[350px] lg:h-[400px]">
              {/* Overlapping Image 1 - Top Right */}
              <div className="absolute top-6 right-6 md:right-12 w-52 md:w-64 lg:w-72 h-40 md:h-48 lg:h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-6 hover:rotate-3 hover:scale-105 transition-all duration-300 z-10">
                <Image
                  src="/images/womenlearning.jpg"
                  alt="Women learning and empowerment"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping Image 2 - Bottom Left */}
              <div className="absolute bottom-6 left-6 md:left-12 w-60 md:w-72 lg:w-80 h-44 md:h-52 lg:h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 z-20">
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
    </>
  );
}
