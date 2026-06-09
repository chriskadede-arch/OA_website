'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { donationSchema, DonationFormData } from '@/lib/validators';
import { DONATION_AMOUNTS, IMPACT_STATS } from '@/lib/constants';
import { apiClient } from '@/lib/api-client';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);

const IMPACT_MAP: Record<number, { what: string; img: string }> = {
  500:   { what: 'Plants 1 coral fragment in Kuruwitu reef', img: '/images/divers.jpg' },
  1000:  { what: 'Supports a community fisher for half a day', img: '/images/fisher.jpg' },
  2500:  { what: 'Plants 5 coral fragments - the most popular gift', img: '/images/oceansmen.jpg' },
  5000:  { what: 'Funds one school ocean education day', img: '/images/kids.jpg' },
  10000: { what: 'Covers one community diver certification', img: '/images/coralteaching.jpg' },
  0:     { what: 'Choose your own level of impact', img: '/images/communities.jpg' },
};

const STEPS = ['Amount', 'Your Info', 'Payment'];

export default function Donate() {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [clientSecret, setClientSecret] = useState('');
  const [donationStep, setDonationStep] = useState<'select' | 'form' | 'payment'>('select');

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

  const stepIndex = { select: 0, form: 1, payment: 2 }[donationStep];

  const onSubmit = async (data: DonationFormData) => {
    const amount = getFinalAmount();
    if (amount < 100) {
      alert('Please select or enter a donation amount of at least $1.00');
      return;
    }
    try {
      const response = await apiClient.createDonationIntent({
        amount,
        donor_name: data.donor_name,
        donor_email: data.donor_email,
        donation_type: data.donation_type,
        message: data.message,
      });
      if (response.data?.clientSecret) {
        setClientSecret(response.data.clientSecret);
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
      <section className="bg-ocean-midnight py-24 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-3">
                <span className="w-8 h-px bg-ocean-turquoise inline-block" />
                Kilifi County, Kenya
              </p>
              <h1 className="font-poppins font-bold text-white text-5xl md:text-6xl leading-tight mb-6">
                Every Dollar<br />
                <span className="text-ocean-turquoise">Restores a Reef</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-md">
                Your donation directly funds coral restoration, community conservation,
                and sustainable livelihoods on Kenya's coastline.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { v: '$25', l: '= 5 Coral Fragments' },
                  { v: '85%', l: 'Coral Survival Rate' },
                  { v: '24,800', l: 'Colonies Planted' },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-poppins font-bold text-ocean-turquoise">{s.v}</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image src="/images/divers.jpg" alt="Coral restoration divers" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight/60 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-40 h-28 rounded-xl overflow-hidden border-4 border-ocean-midnight shadow-xl">
                <Image src="/images/kids.jpg" alt="Ocean education" fill className="object-cover" />
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
            <div className="max-w-3xl mx-auto">
              <div className="mb-10">
                <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-2">Step 1</p>
                <h2 className="text-3xl font-poppins font-bold text-ocean-midnight">Choose Your Impact</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {DONATION_AMOUNTS.slice(0, -1).map((option) => {
                  const impact = IMPACT_MAP[option.value];
                  const isSelected = selectedAmount === option.value;
                  return (
                    <button
                      key={option.value}
                      onClick={() => { setSelectedAmount(option.value); setCustomAmount(''); }}
                      className={`p-5 rounded-2xl text-left border-2 transition-all duration-200 group ${
                        isSelected
                          ? 'border-ocean-turquoise bg-ocean-turquoise/8'
                          : 'border-gray-100 bg-gray-50 hover:border-ocean-turquoise/40 hover:bg-white'
                      }`}
                    >
                      <div className={`text-2xl font-poppins font-bold mb-2 ${isSelected ? 'text-ocean-turquoise' : 'text-ocean-midnight'}`}>
                        {option.label}
                      </div>
                      <p className="text-[11px] text-gray-500 leading-snug">{impact?.what}</p>
                    </button>
                  );
                })}
              </div>

              <div className="mb-8">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Custom Amount (USD)
                </label>
                <div className="flex gap-0 rounded-xl border border-gray-200 overflow-hidden focus-within:border-ocean-turquoise transition-colors">
                  <span className="flex items-center px-4 bg-gray-50 text-gray-500 font-semibold border-r border-gray-200">$</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                    placeholder="Enter amount"
                    className="flex-1 px-4 py-3 text-sm text-ocean-midnight focus:outline-none"
                    min="1"
                    step="0.01"
                  />
                </div>
              </div>

              {getFinalAmount() > 0 && (
                <div className="mb-6 p-4 rounded-xl bg-ocean-midnight/5 border border-ocean-midnight/10 flex items-center gap-3">
                  <svg className="w-5 h-5 text-ocean-turquoise shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-ocean-midnight">
                    <span className="font-bold text-ocean-turquoise">${dollarAmount}</span>
                    {' '}- {activeImpact?.what ?? 'Custom impact'}
                  </p>
                </div>
              )}

              <button
                onClick={() => setDonationStep('form')}
                disabled={getFinalAmount() === 0}
                className="w-full py-4 bg-ocean-midnight text-white font-bold rounded-xl hover:bg-ocean-turquoise transition-all duration-300 text-sm tracking-wide disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue →
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
                      {isSubmitting ? 'Processing...' : 'Continue to Payment →'}
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
                <h2 className="text-3xl font-poppins font-bold text-ocean-midnight">Complete Your Donation</h2>
              </div>
              <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
                <EmbeddedCheckout />
              </EmbeddedCheckoutProvider>
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
                  a: 'All major credit cards, debit cards, and digital wallets through our secure Stripe integration.',
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
