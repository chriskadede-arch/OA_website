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
  5000:  { what: 'Funds one school ocean education day', img: '/images/coralteaching.jpg' },
  10000: { what: 'Covers one community diver certification', img: '/images/coralteaching.jpg' },
  25000: { what: 'Makes a comprehensive impact across all programs', img: '/images/communities.jpg' },
  0:     { what: 'Choose your own level of impact', img: '/images/communities.jpg' },
};

const STEPS = USE_PHP_FORMS ? ['Amount', 'Your Info', 'Confirmation'] : ['Amount', 'Your Info', 'Payment'];

const ALLOCATION_BREAKDOWN = [
  { text: 'Coral restoration & reef monitoring', percentage: 40, color: 'bg-ocean-turquoise' },
  { text: 'Community fisheries & BMU support', percentage: 25, color: 'bg-blue-600' },
  { text: 'Ocean education & youth programmes', percentage: 20, color: 'bg-amber-500' },
  { text: 'Women\'s livelihoods & food security', percentage: 15, color: 'bg-purple-600' },
];

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

    // Show confirmation first
    setConfirmationMessage(`Thank you for your interest in supporting Oceans Alive with $${(amount / 100).toFixed(2)}! We've prepared an email for you. Our team will respond with payment instructions within 24 hours.`);
    setDonationStep('success');

    // Then open email client after a brief delay
    setTimeout(() => {
      const subject = `Donation Request - $${(amount / 100).toFixed(2)}`;
      const body = `
Donation Request

Amount: $${(amount / 100).toFixed(2)} USD
Donation Type: ${data.donation_type}
Name: ${data.donor_name || 'Anonymous'}
Email: ${data.donor_email || 'Not provided'}
Message: ${data.message || 'None'}

Please provide payment instructions.
      `.trim();

      const mailtoLink = `mailto:info@oceansalivekenya.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    }, 500);
  };

  const activeImpact = IMPACT_MAP[selectedAmount ?? 0];
  const dollarAmount = (getFinalAmount() / 100).toFixed(2);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-ocean-midnight py-24 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/divers.jpg"
            alt="Ocean conservation in action"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-ocean-midnight/80" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-5">
              Support Ocean Conservation
            </p>
            <h1 className="font-poppins font-bold text-white text-5xl md:text-6xl leading-tight mb-6">
              Every Contribution<br />
              <span className="text-ocean-turquoise">Makes a Difference</span>
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              A single contribution that supports coral restoration, community fisheries
              and ocean education on Kenya's coast.
            </p>
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
                <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-3">Choose Your Donation Amount</h2>
                <p className="text-gray-600">Support comprehensive ocean conservation on Kenya's coast</p>
              </div>

              {/* Donation Amount Options */}
              <div className="mb-8 grid grid-cols-3 gap-4">
                {/* $100 Option */}
                <div className="p-6 rounded-xl border-2 border-gray-200 bg-white text-center hover:border-ocean-turquoise/50 transition-all">
                  <div className="text-4xl font-poppins font-bold text-gray-700 mb-2">$100</div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Starter Impact</p>
                </div>

                {/* $250 Recommended */}
                <div className="p-6 rounded-xl border-4 border-ocean-turquoise bg-ocean-turquoise/5 text-center relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ocean-turquoise text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Recommended
                  </div>
                  <div className="text-4xl font-poppins font-bold text-ocean-turquoise mb-2">$250</div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider">Full Coverage</p>
                </div>

                {/* $500 Option */}
                <div className="p-6 rounded-xl border-2 border-gray-200 bg-white text-center hover:border-ocean-turquoise/50 transition-all">
                  <div className="text-4xl font-poppins font-bold text-gray-700 mb-2">$500</div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Maximum Impact</p>
                </div>
              </div>

              {/* How Your Money is Used - Creative Visual Breakdown */}
              <div className="mb-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-poppins font-bold text-ocean-midnight mb-2">How Your Money is Used</h3>
                  <p className="text-xs text-gray-500 italic">Allocation percentages to be confirmed with Finance</p>
                </div>

                {/* Visual Impact Breakdown with Progress Bars */}
                <div className="space-y-4 mb-6">
                  {ALLOCATION_BREAKDOWN.map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-ocean-midnight">{item.text}</span>
                        <span className="text-lg font-bold text-ocean-turquoise">{item.percentage}%</span>
                      </div>
                      <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total Impact Summary */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-ocean-midnight to-ocean-midnight/90 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-ocean-turquoise mb-1">Your Total Impact</p>
                      <p className="text-2xl font-bold">$250</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-white/60 mb-1">Supporting</p>
                      <p className="text-lg font-semibold">4 Key Programs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom amount option */}
              <div className="mb-8">
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

              {/* Transparency & Accountability */}
              <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="text-lg font-bold text-ocean-midnight">Your Trust Matters</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-ocean-midnight mb-1">💳 Secure Processing</p>
                    <p className="text-gray-600 text-xs">Stripe-powered. All major cards, Apple Pay, Google Pay. USD, EUR, GBP, KES accepted.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ocean-midnight mb-1">📄 Tax Status</p>
                    <p className="text-gray-600 text-xs">Registered Kenya not-for-profit. Tax deductibility varies by jurisdiction.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ocean-midnight mb-1">🔒 Data Security</p>
                    <p className="text-gray-600 text-xs">SSL encrypted. PCI compliant. Your information never shared with third parties.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ocean-midnight mb-1">📊 Accountability</p>
                    <p className="text-gray-600 text-xs">Quarterly impact reports. Annual financials available on request.</p>
                  </div>
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
                  {ALLOCATION_BREAKDOWN.map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-ocean-turquoise/10 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-ocean-turquoise">{item.percentage}%</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-ocean-midnight leading-tight capitalize">{item.text}</p>
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

          {donationStep === 'success' && (
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <div className="w-16 h-16 rounded-full bg-ocean-turquoise/15 border-2 border-ocean-turquoise flex items-center justify-center mx-auto mb-6">
                  <svg className="w-7 h-7 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-2">Thank You</p>
                <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-4">We've Received Your Request</h2>
                <p className="text-gray-600 leading-relaxed mb-2">{confirmationMessage}</p>
              </div>

              {/* Bank Details Section */}
              <div className="bg-gradient-to-br from-ocean-midnight to-ocean-midnight/95 rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-ocean-turquoise/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-white">Bank Transfer Details</h3>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-ocean-turquoise uppercase tracking-wider mb-1">Account Name</p>
                      <p className="text-white font-semibold">Oceans Alive Foundation</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-ocean-turquoise uppercase tracking-wider mb-1">Bank Name</p>
                      <p className="text-white font-semibold">Equity Bank Kenya</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-ocean-turquoise uppercase tracking-wider mb-1">Account Number</p>
                      <p className="text-white font-semibold text-lg">0123456789</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-ocean-turquoise uppercase tracking-wider mb-1">Swift Code</p>
                      <p className="text-white font-semibold text-lg">EQBLKENA</p>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-xs text-ocean-turquoise uppercase tracking-wider mb-1">Branch</p>
                    <p className="text-white font-semibold">Mombasa Road Branch, Nairobi, Kenya</p>
                  </div>

                  <div className="bg-ocean-turquoise/10 rounded-xl p-4 border border-ocean-turquoise/30">
                    <p className="text-xs text-ocean-turquoise font-bold uppercase tracking-wider mb-2">Important</p>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Please include your name and email in the transfer reference so we can send you a receipt and impact updates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-center mb-8">
                <p className="text-sm text-gray-600 mb-1">Questions about your donation?</p>
                <p className="text-sm text-gray-500">
                  Contact <strong className="text-ocean-midnight">info@oceansalivekenya.org</strong> or{' '}
                  <strong className="text-ocean-midnight">des@oceansalivekenya.org</strong>
                </p>
              </div>

              <div className="text-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-ocean-midnight text-white font-bold rounded-xl hover:bg-ocean-turquoise transition-all duration-300 text-sm tracking-wide"
                >
                  Back to Home
                </Link>
              </div>
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
                  a: 'Oceans Alive Foundation is a registered not-for-profit organization in Kenya. Tax deductibility varies by jurisdiction.',
                },
                {
                  q: 'Can I set up a recurring donation?',
                  a: 'Yes - select Monthly Donation during checkout. You can cancel anytime with no obligation.',
                },
                {
                  q: 'What payment methods and currencies do you accept?',
                  a: 'We accept all major credit cards (Visa, Mastercard, Amex), debit cards, Apple Pay, and Google Pay through our secure Stripe payment system. Payments can be made in USD, EUR, GBP, and KES.',
                },
                {
                  q: 'How will I know my donation made a difference?',
                  a: 'Donors receive quarterly impact newsletters detailing program outcomes and field updates from Kilifi County. Annual financial reports are available upon request.',
                },
                {
                  q: 'Are donations unrestricted or designated?',
                  a: 'All donations are unrestricted unless you specify otherwise, allowing us to direct funds where they are needed most across all four program areas.',
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
