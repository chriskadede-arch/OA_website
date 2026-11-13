/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Donate
 * URL:  /donate
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Donation steps (amount → details → payment)
 *   3. FAQ
 *
 * Where the text/data lives:
 *   • DONATION_AMOUNTS, IMPACT_STATS  →  lib/constants.ts
 *   • IMPACT_MAP  →  top of this file
 *   • ALLOCATION_BREAKDOWN  →  top of this file
 * Page text, images and links (editable in Pages CMS)  →  content/pages/donate.json
 */
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

import PAGE from '@/content/pages/donate.json';

const USE_PHP_FORMS = usesPhpForms();

const IMPACT_MAP: Record<number, { what: string; img: string }> = PAGE.IMPACT_MAP as unknown as Record<number, { what: string; img: string }>;

const STEPS = USE_PHP_FORMS ? ['Amount', 'Your Info', 'Confirmation'] : ['Amount', 'Your Info', 'Payment'];

const ALLOCATION_BREAKDOWN = PAGE.ALLOCATION_BREAKDOWN;

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
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight pt-36 pb-24 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={PAGE.hero.image}
            alt={PAGE.hero.imageAlt}
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-ocean-midnight/80" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-5">{PAGE.hero.eyebrow}</p>
            <h1 className="font-poppins font-bold text-white text-5xl md:text-6xl leading-tight mb-6">{PAGE.hero.title}<br />
              <span className="text-ocean-turquoise">{PAGE.hero.label}</span>
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">{PAGE.hero.text}</p>
          </div>
        </div>
      </section>

      {/* ── Step Progress ─────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 sticky top-[112px] lg:top-[128px] z-30">
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

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Donation steps (amount → details → payment)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* ── Step 1: Amount ─── */}
          {donationStep === 'select' && (
            <div className="max-w-4xl mx-auto">
              <div className="mb-10 text-center">
                <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-2">{PAGE.donationSteps.eyebrow}</p>
                <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-3">{PAGE.donationSteps.heading}</h2>
                <p className="text-gray-600">{PAGE.donationSteps.text}</p>
              </div>

              {/* Donation Amount Options */}
              <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                {/* $100 Option */}
                <div className="p-6 rounded-xl border-2 border-gray-200 bg-white text-center hover:border-ocean-turquoise/50 transition-all">
                  <div className="text-4xl font-poppins font-bold text-gray-700 mb-2">{PAGE.donationSteps.text2}</div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{PAGE.donationSteps.eyebrow2}</p>
                </div>

                {/* $250 Recommended */}
                <div className="p-6 rounded-xl border-4 border-ocean-turquoise bg-ocean-turquoise/5 text-center relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ocean-turquoise text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{PAGE.donationSteps.eyebrow3}</div>
                  <div className="text-4xl font-poppins font-bold text-ocean-turquoise mb-2">{PAGE.donationSteps.text3}</div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider">{PAGE.donationSteps.eyebrow4}</p>
                </div>

                {/* $500 Option */}
                <div className="p-6 rounded-xl border-2 border-gray-200 bg-white text-center hover:border-ocean-turquoise/50 transition-all">
                  <div className="text-4xl font-poppins font-bold text-gray-700 mb-2">{PAGE.donationSteps.text4}</div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{PAGE.donationSteps.eyebrow5}</p>
                </div>
              </div>

              {/* How Your Money is Used - Creative Visual Breakdown */}
              <div className="mb-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-poppins font-bold text-ocean-midnight mb-2">{PAGE.donationSteps.subheading}</h3>
                  <p className="text-xs text-gray-500 italic">{PAGE.donationSteps.text5}</p>
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
                      <p className="text-xs uppercase tracking-wider text-ocean-turquoise mb-1">{PAGE.donationSteps.eyebrow6}</p>
                      <p className="text-2xl font-bold">{PAGE.donationSteps.text6}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-white/60 mb-1">{PAGE.donationSteps.text7}</p>
                      <p className="text-lg font-semibold">{PAGE.donationSteps.text8}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom amount option */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-ocean-midnight mb-3">{PAGE.donationSteps.label}</label>
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
                    placeholder={PAGE.donationSteps.placeholder}
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
                  <h3 className="text-lg font-bold text-ocean-midnight">{PAGE.donationSteps.subheading2}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-ocean-midnight mb-1">{PAGE.donationSteps.text9}</p>
                    <p className="text-gray-600 text-xs">{PAGE.donationSteps.text10}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ocean-midnight mb-1">{PAGE.donationSteps.text11}</p>
                    <p className="text-gray-600 text-xs">{PAGE.donationSteps.text12}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ocean-midnight mb-1">{PAGE.donationSteps.text13}</p>
                    <p className="text-gray-600 text-xs">{PAGE.donationSteps.text14}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ocean-midnight mb-1">{PAGE.donationSteps.text15}</p>
                    <p className="text-gray-600 text-xs">{PAGE.donationSteps.text16}</p>
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
              >{PAGE.donationSteps.buttonText}</button>
            </div>
          )}

          {/* ── Step 2: Info + Impact ─── */}
          {donationStep === 'form' && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
              <div className="lg:col-span-3">
                <div className="mb-8">
                  <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-2">{PAGE.donationSteps.eyebrow7}</p>
                  <h2 className="text-3xl font-poppins font-bold text-ocean-midnight">{PAGE.donationSteps.heading2}</h2>
                  <p className="text-gray-500 text-sm mt-1">{PAGE.donationSteps.text17}</p>
                </div>

                <div className="p-4 rounded-xl bg-ocean-turquoise/8 border border-ocean-turquoise/20 mb-8">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">{PAGE.donationSteps.eyebrow8}</p>
                  <p className="text-2xl font-poppins font-bold text-ocean-turquoise">${dollarAmount}</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{PAGE.donationSteps.label2}</label>
                      <input
                        {...register('donor_name')}
                        type="text"
                        placeholder={PAGE.donationSteps.placeholder2}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-ocean-midnight placeholder:text-gray-300 focus:outline-none focus:border-ocean-turquoise transition-colors"
                      />
                      {errors.donor_name && <p className="text-xs text-red-500 mt-1.5">{errors.donor_name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{PAGE.donationSteps.label3}</label>
                      <input
                        {...register('donor_email')}
                        type="email"
                        placeholder={PAGE.donationSteps.placeholder3}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-ocean-midnight placeholder:text-gray-300 focus:outline-none focus:border-ocean-turquoise transition-colors"
                      />
                      {errors.donor_email && <p className="text-xs text-red-500 mt-1.5">{errors.donor_email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{PAGE.donationSteps.label4}</label>
                    <select
                      {...register('donation_type')}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-ocean-midnight focus:outline-none focus:border-ocean-turquoise transition-colors"
                    >
                      <option value="one-time">{PAGE.donationSteps.option}</option>
                      <option value="recurring">{PAGE.donationSteps.option2}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{PAGE.donationSteps.label5}<span className="text-gray-400 font-normal normal-case tracking-normal">{PAGE.donationSteps.label6}</span>
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder={PAGE.donationSteps.placeholder4}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-ocean-midnight placeholder:text-gray-300 focus:outline-none focus:border-ocean-turquoise transition-colors resize-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setDonationStep('select')}
                      className="flex-1 py-3.5 border border-gray-200 text-ocean-midnight font-semibold rounded-xl hover:border-ocean-midnight transition-colors text-sm"
                    >{PAGE.donationSteps.buttonText2}</button>
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
                    alt={PAGE.donationSteps.imageAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight via-ocean-midnight/60 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-ocean-turquoise mb-2">{PAGE.donationSteps.eyebrow9}{dollarAmount}{PAGE.donationSteps.eyebrow10}</p>
                    <p className="text-white font-semibold text-sm leading-snug">{activeImpact?.what ?? PAGE.donationSteps.defaultImpactText}</p>
                  </div>
                </div>

                <h3 className="text-sm font-poppins font-bold text-ocean-midnight mb-4 uppercase tracking-wide">{PAGE.donationSteps.subheading3}</h3>
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
                <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-2">{PAGE.donationSteps.eyebrow11}</p>
                <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-3">{PAGE.donationSteps.heading3}</h2>
                <p className="text-gray-600 text-sm">{PAGE.donationSteps.text18}</p>
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
                  <strong>{PAGE.donationSteps.boldText}</strong>{PAGE.donationSteps.text19}</p>
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
                <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-2">{PAGE.donationSteps.eyebrow12}</p>
                <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-4">{PAGE.donationSteps.heading4}</h2>
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
                  <h3 className="text-xl font-poppins font-bold text-white">{PAGE.donationSteps.subheading4}</h3>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-ocean-turquoise uppercase tracking-wider mb-1">{PAGE.donationSteps.eyebrow13}</p>
                      <p className="text-white font-semibold">{PAGE.donationSteps.text20}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-ocean-turquoise uppercase tracking-wider mb-1">{PAGE.donationSteps.eyebrow14}</p>
                      <p className="text-white font-semibold">{PAGE.donationSteps.text21}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-ocean-turquoise uppercase tracking-wider mb-1">{PAGE.donationSteps.eyebrow15}</p>
                      <p className="text-white font-semibold text-lg">{PAGE.donationSteps.text22}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-ocean-turquoise uppercase tracking-wider mb-1">{PAGE.donationSteps.eyebrow16}</p>
                      <p className="text-white font-semibold text-lg">{PAGE.donationSteps.text23}</p>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-xs text-ocean-turquoise uppercase tracking-wider mb-1">{PAGE.donationSteps.eyebrow17}</p>
                    <p className="text-white font-semibold">{PAGE.donationSteps.text24}</p>
                  </div>

                  <div className="bg-ocean-turquoise/10 rounded-xl p-4 border border-ocean-turquoise/30">
                    <p className="text-xs text-ocean-turquoise font-bold uppercase tracking-wider mb-2">{PAGE.donationSteps.eyebrow18}</p>
                    <p className="text-white/90 text-sm leading-relaxed">{PAGE.donationSteps.text25}</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-center mb-8">
                <p className="text-sm text-gray-600 mb-1">{PAGE.donationSteps.text26}</p>
                <p className="text-sm text-gray-500">{PAGE.donationSteps.text27}<strong className="text-ocean-midnight">{PAGE.donationSteps.boldText2}</strong>{PAGE.donationSteps.text28}{' '}
                  <strong className="text-ocean-midnight">{PAGE.donationSteps.boldText3}</strong>
                </p>
              </div>

              <div className="text-center">
                <Link
                  href={PAGE.donationSteps.link}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-ocean-midnight text-white font-bold rounded-xl hover:bg-ocean-turquoise transition-all duration-300 text-sm tracking-wide"
                >{PAGE.donationSteps.linkText}</Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · FAQ
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-3">{PAGE.fAQ.eyebrow}</p>
              <h2 className="text-3xl font-poppins font-bold text-white mb-4">{PAGE.fAQ.heading}</h2>
              <p className="text-white/55 text-sm leading-relaxed">{PAGE.fAQ.text}</p>
            </div>
            <div className="lg:col-span-2 space-y-6">
              {PAGE.faq.list.map((faq) => (
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
