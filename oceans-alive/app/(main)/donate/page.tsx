'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { donationSchema, DonationFormData } from '@/lib/validators';
import { DONATION_AMOUNTS, IMPACT_STATS } from '@/lib/constants';
import { apiClient } from '@/lib/api-client';
import { usesPhpForms } from '@/lib/php-forms';
import StripePaymentForm from '@/components/common/StripePaymentForm';

const USE_PHP_FORMS = usesPhpForms();

const IMPACT_MAP: Record<number, { what: string; img: string }> = {
  500:   { what: 'Plants 1 coral fragment in Kuruwitu reef', img: '/images/divers.jpg' },
  1000:  { what: 'Supports a community fisher for half a day', img: '/images/fisher.jpg' },
  2500:  { what: 'Plants 5 coral fragments - the most popular gift', img: '/images/oceansmen.jpg' },
  5000:  { what: 'Funds one school ocean education day', img: '/images/kids.jpg' },
  10000: { what: 'Covers one community diver certification', img: '/images/coralteaching.jpg' },
  25000: { what: 'Makes a significant impact - Royal-approved conservation', img: '/images/king-charles-coral.jpg' },
  0:     { what: 'Choose your own level of impact', img: '/images/communities.jpg' },
};

const STEPS = USE_PHP_FORMS ? ['Amount', 'Your Info', 'Confirmation'] : ['Amount', 'Your Info', 'Payment'];

export default function Donate() {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [donationStep, setDonationStep] = useState<'select' | 'form' | 'payment' | 'success'>('select');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: { currency: 'USD', donation_type: 'one-time' },
  });

  const getFinalAmount = () => {
    if (selectedAmount && selectedAmount > 0) return selectedAmount;
    const parsed = parseFloat(customAmount);
    return parsed > 0 ? Math.round(parsed * 100) : 0;
  };

  const stepIndex = { select: 0, form: 1, payment: 2, success: 2 }[donationStep];

  const onSubmit = async (data: DonationFormData) => {
    const amount = getFinalAmount();
    if (amount < 100) {
      alert('Please select or enter a donation amount of at least $1.00');
      return;
    }
    try {
      // Call the new API route directly
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          donor_name: data.donor_name,
          donor_email: data.donor_email,
          donation_type: data.donation_type,
          message: data.message,
          currency: data.currency,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();

        // Show helpful message if Stripe isn't configured
        if (response.status === 503) {
          alert(
            'Payment processing is not yet configured.\n\n' +
            'To enable card payments:\n' +
            '1. Create a free Stripe account at dashboard.stripe.com\n' +
            '2. Get your API keys\n' +
            '3. Add them to the .env.local file\n' +
            '4. Restart the development server\n\n' +
            'See QUICK-START-STRIPE.txt for detailed instructions.'
          );
          return;
        }

        throw new Error(errorData.error || 'Failed to create payment intent');
      }

      const { clientSecret: secret } = await response.json();

      if (secret) {
        setClientSecret(secret);
        setDonationStep('payment');
      }
    } catch (error: any) {
      alert(error.message || 'Failed to process donation');
    }
  };

  const activeImpact = IMPACT_MAP[selectedAmount ?? 0];
  const dollarAmount = (getFinalAmount() / 100).toFixed(2);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-ocean-midnight py-24 md:py-28 overflow-hidden">
        {/* King Charles Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/king-charles-coral.jpg"
            alt="King Charles III with coral restoration"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-ocean-midnight/75" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-3">
                <span className="w-8 h-px bg-ocean-turquoise inline-block" />
                Support Ocean Conservation
              </p>
              <h1 className="font-poppins font-bold text-white text-5xl md:text-6xl leading-tight mb-6">
                Every Dollar<br />
                <span className="text-ocean-turquoise">Makes a Difference</span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-10 max-w-md">
                Your donation directly funds coral restoration, community conservation,
                and sustainable livelihoods on Kenya's coastline.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden border-4 border-ocean-turquoise/30 shadow-2xl">
                <Image
                  src="/images/king-cypher-coral.jpg"
                  alt="Royal cypher coral restoration - King Charles III"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Step Progress ─────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3 max-w-lg">
            {STEPS.map((step, i) => (
              <div key={step} className="flex items-center gap-3 flex-1 last:flex-none">
                <div className="flex items-center gap-2 shrink-0">
                  <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all ${
                    i < stepIndex
                      ? 'border-ocean-turquoise bg-ocean-turquoise text-white'
                      : i === stepIndex
                      ? 'border-ocean-midnight bg-ocean-midnight text-white'
                      : 'border-gray-200 text-gray-400'
                  }`}>
                    {i < stepIndex ? (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : i + 1}
                  </div>
                  <span className={`text-xs font-semibold hidden sm:block ${
                    i === stepIndex ? 'text-ocean-midnight' : i < stepIndex ? 'text-ocean-turquoise' : 'text-gray-400'
                  }`}>{step}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`flex-1 h-px transition-colors ${i < stepIndex ? 'bg-ocean-turquoise' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* ── Step 1: Amount ─── */}
          {donationStep === 'select' && (
            <div className="max-w-4xl mx-auto">
              <div className="mb-10 text-center">
                <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-2">Step 1</p>
                <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-3">Your $250 Donation Impact</h2>
                <p className="text-gray-600">Royal-approved conservation that covers comprehensive ocean restoration</p>
              </div>

              {/* Fixed $250 amount display */}
              <div className="mb-8 p-8 rounded-2xl border-4 border-ocean-turquoise bg-ocean-turquoise/5 text-center">
                <div className="text-6xl font-poppins font-bold text-ocean-turquoise mb-2">$250</div>
                <p className="text-sm text-gray-600 uppercase tracking-wider">Comprehensive Conservation Package</p>
              </div>

              {/* What $250 covers */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-ocean-midnight mb-4 text-center">Your $250 donation covers:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Plants coral fragments in Kuruwitu reef' },
                    { text: 'Supports community fishers' },
                    { text: 'Plants multiple coral colonies' },
                    { text: 'Funds school ocean education days' },
                    { text: 'Covers community diver certification' },
                    { text: 'Makes a significant impact - Royal-approved conservation' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <span className="w-2 h-2 rounded-full bg-ocean-turquoise mt-1.5 shrink-0"></span>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom amount option */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-ocean-midnight mb-3">Or enter custom amount (USD)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-gray-400">$</span>
                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="0.00"
                    className="w-full rounded-xl border-2 border-gray-200 pl-10 pr-4 py-4 text-lg text-ocean-midnight placeholder:text-gray-300 focus:outline-none focus:border-ocean-turquoise transition-colors"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  const amt = getFinalAmount();
                  if (amt < 100) {
                    setSelectedAmount(25000);
                  }
                  setDonationStep('form');
                }}
                className="w-full py-4 bg-ocean-midnight text-white font-bold rounded-xl hover:bg-ocean-turquoise transition-all duration-300 text-sm tracking-wide shadow-lg"
              >
                Proceed with Donation →
              </button>
            </div>
          )}

          {/* ── Step 2: Info + Impact ─── */}
          {donationStep === 'form' && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
              <div className="lg:col-span-3">
                <div className="mb-8">
                  <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-2">Step 2</p>
                  <h2 className="text-3xl font-poppins font-bold text-ocean-midnight">Your Information</h2>
                  <p className="text-gray-500 text-sm mt-1">All fields are optional - donate anonymously if you prefer.</p>
                </div>

                <div className="p-4 rounded-xl bg-ocean-turquoise/8 border border-ocean-turquoise/20 mb-8">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">Donating</p>
                  <p className="text-2xl font-poppins font-bold text-ocean-turquoise">${dollarAmount}</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                      <input
                        {...register('donor_name')}
                        type="text"
                        placeholder="Your name (optional)"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-ocean-midnight placeholder:text-gray-300 focus:outline-none focus:border-ocean-turquoise transition-colors"
                      />
                      {errors.donor_name && <p className="text-xs text-red-500 mt-1.5">{errors.donor_name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                      <input
                        {...register('donor_email')}
                        type="email"
                        placeholder="your@email.com (optional)"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-ocean-midnight placeholder:text-gray-300 focus:outline-none focus:border-ocean-turquoise transition-colors"
                      />
                      {errors.donor_email && <p className="text-xs text-red-500 mt-1.5">{errors.donor_email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Donation Type</label>
                    <select
                      {...register('donation_type')}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-ocean-midnight focus:outline-none focus:border-ocean-turquoise transition-colors"
                    >
                      <option value="one-time">One-Time Donation</option>
                      <option value="recurring">Monthly Donation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Message <span className="text-gray-400 font-normal normal-case tracking-normal">(optional)</span>
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Tell us why you're supporting Oceans Alive..."
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-ocean-midnight placeholder:text-gray-300 focus:outline-none focus:border-ocean-turquoise transition-colors resize-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setDonationStep('select')}
                      className="flex-1 py-3.5 border border-gray-200 text-ocean-midnight font-semibold rounded-xl hover:border-ocean-midnight transition-colors text-sm"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-[2] py-3.5 bg-ocean-midnight text-white font-bold rounded-xl hover:bg-ocean-turquoise transition-all duration-300 text-sm disabled:opacity-50"
                    >
                      {isSubmitting ? 'Processing...' : USE_PHP_FORMS ? 'Submit Donation Request →' : 'Continue to Payment →'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Impact panel */}
              <div className="lg:col-span-2">
                <div className="relative rounded-2xl overflow-hidden mb-6" style={{ minHeight: '260px' }}>
                  <Image
                    src={activeImpact?.img ?? '/images/divers.jpg'}
                    alt="Your impact"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight via-ocean-midnight/60 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-ocean-turquoise mb-2">Your ${dollarAmount} will</p>
                    <p className="text-white font-semibold text-sm leading-snug">{activeImpact?.what ?? 'Make a real difference.'}</p>
                  </div>
                </div>

                <h3 className="text-sm font-poppins font-bold text-ocean-midnight mb-4 uppercase tracking-wide">Where Your Money Goes</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Coral Restoration', desc: 'Growing & transplanting reef fragments' },
                    { label: 'Community Education', desc: 'Ocean literacy for schools & fishers' },
                    { label: 'Women\'s Livelihoods', desc: 'Trash4Cash & LIFT Network' },
                    { label: 'Marine Governance', desc: 'BMU networks & policy advocacy' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-ocean-turquoise mt-2 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-ocean-midnight leading-tight">{item.label}</p>
                        <p className="text-xs text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── Step 3: Payment ─── */}
          {donationStep === 'payment' && clientSecret && (
            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-2">Step 3</p>
                <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-3">
                  Complete Your Donation
                </h2>
                <p className="text-gray-600 text-sm">
                  Enter your card details below. All payments are securely processed by Stripe.
                </p>
              </div>

              <StripePaymentForm
                clientSecret={clientSecret}
                amount={getFinalAmount()}
                onSuccess={() => {
                  // Redirect is handled by Stripe
                }}
                onBack={() => {
                  setDonationStep('form');
                  setClientSecret(null);
                }}
              />

              <div className="mt-8 p-4 rounded-xl bg-gray-50 border border-gray-200">
                <p className="text-xs text-gray-600 leading-relaxed">
                  <strong>Secure Payment:</strong> Your payment information is encrypted and never stored on our servers.
                  We use Stripe, a PCI-compliant payment processor trusted by millions of businesses worldwide.
                </p>
              </div>
            </div>
          )}

          {USE_PHP_FORMS && donationStep === 'success' && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-ocean-turquoise/15 border-2 border-ocean-turquoise flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-2">Step 3</p>
              <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-4">Thank You for Your Support</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{confirmationMessage}</p>
              <p className="text-sm text-gray-500 mb-8">
                Our team at <strong>info@oceansalivekenya.org</strong> and{' '}
                <strong>des@oceansalivekenya.org</strong> has been notified and will follow up with payment details.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-ocean-midnight text-white font-bold rounded-xl hover:bg-ocean-turquoise transition-all duration-300 text-sm tracking-wide"
              >
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="bg-ocean-midnight py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-3">Questions</p>
              <h2 className="text-3xl font-poppins font-bold text-white mb-4">Common Questions</h2>
              <p className="text-white/55 text-sm leading-relaxed">
                Your generosity deserves clarity. Here are answers to what donors ask most.
              </p>
            </div>
            <div className="lg:col-span-2 space-y-6">
              {[
                {
                  q: 'Is my donation tax-deductible?',
                  a: 'Oceans Alive Foundation is a registered Kenyan not-for-profit. Please check your local tax laws for deductibility in your country.',
                },
                {
                  q: 'Can I set up a recurring donation?',
                  a: 'Yes - select Monthly Donation during checkout. You can cancel anytime with no obligation.',
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept all major credit cards (Visa, Mastercard, Amex), debit cards, Apple Pay, and Google Pay through our secure Stripe payment system.',
                },
                {
                  q: 'How will I know my donation made a difference?',
                  a: 'We send quarterly impact updates by email. Subscribe to our newsletter for field reports from Kilifi.',
                },
              ].map((faq) => (
                <div key={faq.q} className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="font-poppins font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
