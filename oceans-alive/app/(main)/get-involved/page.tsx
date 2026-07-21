import Link from 'next/link';
import NewsletterForm from '@/components/common/NewsletterForm';

export default function GetInvolvedPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ocean-midnight py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            Get Involved
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Join us in protecting Kenya's marine ecosystems and empowering coastal communities
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 from-10% via-ocean-midnight/20 via-40% via-ocean-midnight/60 via-70% to-ocean-midnight py-16">

        {/* Dot grid texture */}
        <div className="absolute inset-0 [background-image:radial-gradient(circle,rgba(46,191,209,0.18)_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none" />

        {/* Rising arc waves */}
        <div className="absolute -bottom-56 left-1/2 -translate-x-1/2 w-[740px] h-[740px] rounded-full border border-ocean-turquoise/[0.08] pointer-events-none" />
        <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-ocean-turquoise/[0.12] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left - Newsletter */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ocean-turquoise opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ocean-turquoise" />
                </span>
                <span className="text-ocean-turquoise text-xs font-bold uppercase tracking-[0.25em]">Stay Connected</span>
              </div>

              <h2 className="font-poppins font-bold leading-tight mb-4">
                <span className="block text-4xl md:text-5xl text-white">Join the Mission.</span>
                <span className="block text-4xl md:text-5xl text-ocean-turquoise">Protect the Sea.</span>
              </h2>

              <p className="text-white/55 leading-relaxed mb-6 max-w-md">
                Quarterly updates from the field - conservation progress, stories from Kilifi's coast, and real ways to support the work.
              </p>

              <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-xl p-6">
                <NewsletterForm variant="footer" />
                <p className="text-xs text-white/20 text-center mt-4">
                  Quarterly · No spam · Unsubscribe anytime
                </p>
              </div>
            </div>

            {/* Right - CTA Actions */}
            <div className="relative">
              <div className="bg-white/[0.06] border border-white/[0.10] rounded-2xl p-8">
                <h3 className="text-3xl font-poppins font-bold text-white mb-3">
                  Ready to Make an Impact?
                </h3>
                <p className="text-white/50 mb-6">Choose how you'd like to get involved</p>

                <div className="space-y-3">
                  <Link
                    href="/donate"
                    className="block w-full px-6 py-4 bg-ocean-turquoise text-white font-bold rounded-xl hover:bg-white hover:text-ocean-midnight transition-all duration-200 text-center"
                  >
                    Donate to the Cause
                  </Link>
                  <Link
                    href="/contact?type=Volunteer"
                    className="block w-full px-6 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-ocean-turquoise hover:bg-ocean-turquoise/10 transition-all duration-200 text-center"
                  >
                    Volunteer With Us
                  </Link>
                  <Link
                    href="/contact?type=Partnership"
                    className="block w-full px-6 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-ocean-turquoise hover:bg-ocean-turquoise/10 transition-all duration-200 text-center"
                  >
                    Partner With Us
                  </Link>
                </div>

                {/* Topic pills */}
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/[0.08]">
                  {['Field Reports', 'Impact Stories', 'Ways to Help'].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full border border-ocean-turquoise/20 text-ocean-turquoise/60 text-[10px] font-semibold uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
