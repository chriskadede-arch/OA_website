/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Donate › Thank-you page
 * URL:  /donate/success
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. What Happens Next
 *   3. Impact Stats
 *   4. Call to action
 */
'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

function DonationSuccessContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const paymentIntent = searchParams.get('payment_intent');

  useEffect(() => {
    if (paymentIntent) {
      // Verify payment status
      fetch(`/api/verify-payment?payment_intent=${paymentIntent}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 'succeeded') {
            setStatus('success');
          } else {
            setStatus('error');
          }
        })
        .catch(() => setStatus('error'));
    } else {
      setStatus('success'); // Fallback for direct navigation
    }
  }, [paymentIntent]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-ocean-midnight flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-ocean-turquoise border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Confirming your donation...</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen bg-ocean-midnight flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 rounded-full bg-red-500/15 border-2 border-red-500 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="font-poppins font-bold text-white text-3xl mb-4">Payment Not Confirmed</h1>
          <p className="text-white/60 mb-8">
            We couldn't confirm your payment. Please contact us if you believe this is an error.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              Contact Support
            </Link>
            <Link
              href="/donate"
              className="px-6 py-3 bg-ocean-turquoise text-ocean-midnight font-bold rounded-xl hover:bg-white transition-colors text-sm"
            >
              Try Again
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/king-charles-coral.jpg"
            alt="Ocean conservation"
            fill
            className="object-cover object-center opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-ocean-turquoise/15 border-2 border-ocean-turquoise flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="font-poppins font-bold text-white text-5xl md:text-6xl leading-tight mb-6">
            Thank You for<br />
            <span className="text-ocean-turquoise">Making a Difference</span>
          </h1>

          <p className="text-xl text-white/80 leading-relaxed mb-8">
            Your donation is now helping restore coral reefs and support coastal communities in Kenya.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/60 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Receipt sent to your email
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · What Happens Next
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-poppins font-bold text-ocean-midnight text-center mb-12">
            What Happens Next
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-ocean-turquoise/15 border-2 border-ocean-turquoise flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-ocean-turquoise">1</span>
              </div>
              <h3 className="font-poppins font-bold text-ocean-midnight mb-2">Immediate Impact</h3>
              <p className="text-sm text-gray-600">
                Your funds are allocated to active conservation projects in Kuruwitu.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-ocean-turquoise/15 border-2 border-ocean-turquoise flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-ocean-turquoise">2</span>
              </div>
              <h3 className="font-poppins font-bold text-ocean-midnight mb-2">Quarterly Updates</h3>
              <p className="text-sm text-gray-600">
                Receive detailed impact reports showing exactly how your donation is being used.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-ocean-turquoise/15 border-2 border-ocean-turquoise flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-ocean-turquoise">3</span>
              </div>
              <h3 className="font-poppins font-bold text-ocean-midnight mb-2">Community Connection</h3>
              <p className="text-sm text-gray-600">
                Join our newsletter for stories from the field and ways to get more involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Impact Stats
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest text-center mb-8">
            Our Collective Impact
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-poppins font-bold text-white mb-2">400%</div>
              <p className="text-sm text-white/60">Fish Biomass Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-poppins font-bold text-white mb-2">30%</div>
              <p className="text-sm text-white/60">Coral Recovery</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-poppins font-bold text-white mb-2">12,000</div>
              <p className="text-sm text-white/60">Hectares Protected</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-poppins font-bold text-white mb-2">20+</div>
              <p className="text-sm text-white/60">Years of Conservation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Call to action
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-poppins font-bold text-ocean-midnight mb-4">
            Stay Connected
          </h2>
          <p className="text-gray-600 mb-8">
            Follow our progress and see your impact in action.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-ocean-midnight text-white font-bold rounded-xl hover:bg-ocean-turquoise transition-colors text-sm"
            >
              Back to Home
            </Link>
            <Link
              href="/programmes"
              className="px-6 py-3 border-2 border-gray-200 text-ocean-midnight font-bold rounded-xl hover:border-ocean-midnight transition-colors text-sm"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default function DonationSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-ocean-midnight flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-ocean-turquoise border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Loading...</p>
        </div>
      </div>
    }>
      <DonationSuccessContent />
    </Suspense>
  );
}
