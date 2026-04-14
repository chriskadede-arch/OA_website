'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Hero from '@/components/common/Hero';
import { donationSchema, DonationFormData } from '@/lib/validators';
import { DONATION_AMOUNTS, IMPACT_STATS } from '@/lib/constants';
import { apiClient } from '@/lib/api-client';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);

export default function Donate() {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [clientSecret, setClientSecret] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);
  const [donationStep, setDonationStep] = useState<'select' | 'form' | 'payment'>('select');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      currency: 'USD',
      donation_type: 'one-time',
    },
  });

  const donor_name = watch('donor_name');
  const donor_email = watch('donor_email');
  const message = watch('message');

  const getFinalAmount = () => {
    if (selectedAmount && selectedAmount > 0) return selectedAmount;
    const parsed = parseInt(customAmount);
    return parsed > 0 ? parsed * 100 : 0; // Convert to cents
  };

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

  return (
    <>
      <Hero
        title="Support Our Mission"
        subtitle="Your Donation Matters"
        description="Every contribution helps us protect marine ecosystems, support sustainable fisheries, and educate the next generation of conservationists."
      />

      <section className="py-16 md:py-24">
        <div className="container-fluid">
          {donationStep === 'select' && (
            <div className="max-w-2xl mx-auto mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-4">
                  Select Donation Amount
                </h2>
                <p className="text-gray-600">
                  Choose a preset amount or enter a custom amount
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {DONATION_AMOUNTS.slice(0, -1).map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSelectedAmount(option.value);
                      setCustomAmount('');
                    }}
                    className={`p-4 rounded-lg font-poppins font-semibold transition-all ${
                      selectedAmount === option.value
                        ? 'bg-ocean-turquoise text-white scale-105'
                        : 'bg-gray-100 text-ocean-midnight hover:bg-gray-200'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="mb-8">
                <label className="form-label">Custom Amount (USD)</label>
                <div className="flex gap-2">
                  <span className="flex items-center px-4 bg-gray-100 rounded-lg">$</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="0.00"
                    className="form-input flex-1"
                    min="1"
                    step="0.01"
                  />
                </div>
              </div>

              <button
                onClick={() => setDonationStep('form')}
                disabled={getFinalAmount() === 0}
                className="btn btn-primary w-full btn-lg disabled:opacity-50"
              >
                Continue to Donation Form
              </button>
            </div>
          )}

          {donationStep === 'form' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
              {/* Donation Form */}
              <div>
                <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-6">
                  Your Information
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="bg-ocean-turquoise bg-opacity-10 p-4 rounded-lg mb-6">
                    <p className="font-poppins font-semibold text-ocean-midnight">
                      Donation Amount:{' '}
                      <span className="text-2xl text-ocean-turquoise">
                        ${(getFinalAmount() / 100).toFixed(2)}
                      </span>
                    </p>
                  </div>

                  <div>
                    <label className="form-label">Full Name (Optional)</label>
                    <input
                      {...register('donor_name')}
                      type="text"
                      className="form-input"
                      placeholder="Your name"
                    />
                    {errors.donor_name && (
                      <p className="text-sm text-red-500 mt-1">{errors.donor_name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="form-label">Email (Optional)</label>
                    <input
                      {...register('donor_email')}
                      type="email"
                      className="form-input"
                      placeholder="your@email.com"
                    />
                    {errors.donor_email && (
                      <p className="text-sm text-red-500 mt-1">{errors.donor_email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="form-label">Donation Type</label>
                    <select {...register('donation_type')} className="form-input">
                      <option value="one-time">One-Time Donation</option>
                      <option value="recurring">Monthly Donation</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">
                      Message <span className="text-sm text-gray-500">(Optional)</span>
                    </label>
                    <textarea
                      {...register('message')}
                      className="form-textarea"
                      rows={4}
                      placeholder="Let us know why you're supporting Oceans Alive..."
                    />
                  </div>

                  <div className="flex gap-2 pt-4">
                    <button
                      type="button"
                      onClick={() => setDonationStep('select')}
                      className="btn btn-secondary flex-1"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary flex-1"
                    >
                      {isSubmitting ? 'Processing...' : 'Continue to Payment'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Impact Info */}
              <div>
                <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-6">
                  Your Impact
                </h2>

                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-ocean-turquoise to-ocean-midnight text-white rounded-lg">
                    <p className="text-sm opacity-90 mb-2">Your donation of</p>
                    <p className="text-4xl font-poppins font-bold">
                      ${(getFinalAmount() / 100).toFixed(2)}
                    </p>
                    <p className="text-sm opacity-90 mt-2">makes a real difference</p>
                  </div>

                  <div>
                    <h3 className="font-poppins font-bold text-ocean-midnight mb-4">
                      Where Your Money Goes
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-lg">🌱</span>
                        <div>
                          <p className="font-poppins font-semibold text-ocean-midnight">Restoration</p>
                          <p className="text-gray-600">Coral reef restoration and ecosystem recovery</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-lg">📚</span>
                        <div>
                          <p className="font-poppins font-semibold text-ocean-midnight">Education</p>
                          <p className="text-gray-600">Marine education for students and communities</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-lg">🤝</span>
                        <div>
                          <p className="font-poppins font-semibold text-ocean-midnight">Community</p>
                          <p className="text-gray-600">Supporting sustainable livelihoods</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-poppins font-bold text-ocean-midnight mb-4">Our Impact</h3>
                    <div className="space-y-2">
                      {IMPACT_STATS.map((stat, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center text-sm"
                        >
                          <span className="text-gray-600">{stat.label}</span>
                          <span className="font-poppins font-bold text-ocean-turquoise">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {donationStep === 'payment' && clientSecret && (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-8 text-center">
                Complete Your Donation
              </h2>
              <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
                <EmbeddedCheckout />
              </EmbeddedCheckoutProvider>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-2">
                  Is my donation tax-deductible?
                </h3>
                <p className="text-gray-700">
                  Yes! Oceans Alive Foundation is a registered nonprofit. Please check your local tax
                  laws for deductibility in your country.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-2">
                  Can I set up a recurring donation?
                </h3>
                <p className="text-gray-700">
                  Yes! You can choose monthly donations during the checkout process. You can cancel
                  anytime.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-700">
                  We accept all major credit cards, debit cards, and digital wallets through Stripe.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-2">
                  How can I stay updated on my donation's impact?
                </h3>
                <p className="text-gray-700">
                  We'll send you impact updates via email. You can also subscribe to our newsletter
                  for quarterly impact reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
