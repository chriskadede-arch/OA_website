'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { contactFormSchema, ContactFormData } from '@/lib/validators';
import { apiClient } from '@/lib/api-client';
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants';

const INQUIRY_OPTIONS = [
  { value: 'General Inquiry', label: 'General', desc: 'Questions & info' },
  { value: 'Partnership', label: 'Partnership', desc: 'NGOs, research, business' },
  { value: 'Volunteer', label: 'Volunteer', desc: 'Give time & skills' },
  { value: 'Donation', label: 'Donate', desc: 'Support our work' },
  { value: 'Other', label: 'Other', desc: 'Anything else' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [selectedType, setSelectedType] = useState('General Inquiry');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { inquiry_type: 'General Inquiry' },
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    const match = INQUIRY_OPTIONS.find((o) => o.value === type || o.label === type);
    if (match) {
      setSelectedType(match.value);
      setValue('inquiry_type', match.value);
    }
  }, [setValue]);

  const selectType = (value: string) => {
    setSelectedType(value);
    setValue('inquiry_type', value);
  };

  const onSubmit = async (data: ContactFormData) => {
    setError('');
    try {
      await apiClient.submitContact(data);
      setSubmitted(true);
      reset();
      setSelectedType('General Inquiry');
      setTimeout(() => setSubmitted(false), 8000);
    } catch (err: any) {
      setError(err.message || 'Failed to submit. Please try again.');
    }
  };

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
                Let's Work<br />
                <span className="text-ocean-turquoise">Together</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-md">
                Whether you want to partner, volunteer, donate, or just learn more — our team
                in Kilifi responds within 48 hours.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-ocean-turquoise transition-colors">
                    <svg className="w-4 h-4 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-white/60 text-sm group-hover:text-ocean-turquoise transition-colors">{CONTACT_EMAIL}</span>
                </a>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-ocean-turquoise transition-colors">
                    <svg className="w-4 h-4 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-white/60 text-sm group-hover:text-ocean-turquoise transition-colors">{CONTACT_PHONE}</span>
                </a>
              </div>
            </div>

            {/* Hero photo stack */}
            <div className="relative hidden lg:block h-80">
              <div className="relative h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/communities.jpg"
                  alt="Kilifi coastal community"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight/60 to-transparent" />
              </div>
              {/* Floating fisher card */}
              <div className="absolute -bottom-5 -left-5 w-36 h-28 rounded-xl overflow-hidden border-4 border-ocean-midnight shadow-xl">
                <Image src="/images/fisher.jpg" alt="Kilifi fisherman" fill className="object-cover" />
              </div>
              {/* Floating stat pill */}
              <div className="absolute -top-4 -right-4 bg-ocean-turquoise rounded-xl px-4 py-3 text-white text-center shadow-lg">
                <div className="text-xl font-poppins font-bold leading-none">48h</div>
                <div className="text-[9px] font-bold uppercase tracking-widest opacity-80 mt-0.5">Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + Info ──────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Form — 3/5 width */}
            <div className="lg:col-span-3">

              {/* Success state */}
              {submitted && (
                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <Image src="/images/oceanday.jpg" alt="" fill className="object-cover" />
                  <div className="absolute inset-0 bg-ocean-midnight/82" />
                  <div className="relative py-16 px-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-ocean-turquoise/20 border-2 border-ocean-turquoise flex items-center justify-center mx-auto mb-6">
                      <svg className="w-7 h-7 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-poppins font-bold text-white mb-2">Message Received</h3>
                    <p className="text-white/70 mb-1">Thank you for reaching out.</p>
                    <p className="text-white/45 text-sm">We'll get back to you within 48 hours from Kilifi.</p>
                  </div>
                </div>
              )}

              {/* Error banner */}
              {error && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl mb-6 text-sm">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {error}
                </div>
              )}

              <div className="mb-8">
                <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-2">Get in touch</p>
                <h2 className="text-3xl font-poppins font-bold text-ocean-midnight">Send Us a Message</h2>
              </div>

              {/* Inquiry type selector */}
              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">What is this about?</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  {INQUIRY_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => selectType(opt.value)}
                      className={`p-3 rounded-xl border-2 text-left transition-all duration-200 ${
                        selectedType === opt.value
                          ? 'border-ocean-turquoise bg-ocean-turquoise/8 text-ocean-midnight'
                          : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-ocean-turquoise/40 hover:bg-white'
                      }`}
                    >
                      <div className={`text-[11px] font-bold mb-0.5 leading-tight ${selectedType === opt.value ? 'text-ocean-turquoise' : 'text-gray-500'}`}>
                        {opt.label}
                      </div>
                      <div className="text-[10px] opacity-65 leading-tight">{opt.desc}</div>
                    </button>
                  ))}
                </div>
                {/* Hidden field synced to cards */}
                <input type="hidden" {...register('inquiry_type')} />
              </div>

              {/* Form fields */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Full Name <span className="text-ocean-turquoise">*</span>
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      placeholder="Your name"
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ocean-midnight placeholder:text-gray-300 focus:outline-none focus:border-ocean-turquoise transition-colors disabled:opacity-50"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1.5">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Email Address <span className="text-ocean-turquoise">*</span>
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="your@email.com"
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ocean-midnight placeholder:text-gray-300 focus:outline-none focus:border-ocean-turquoise transition-colors disabled:opacity-50"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1.5">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    placeholder="What is this about?"
                    disabled={isSubmitting}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ocean-midnight placeholder:text-gray-300 focus:outline-none focus:border-ocean-turquoise transition-colors disabled:opacity-50"
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-500 mt-1.5">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Message <span className="text-ocean-turquoise">*</span>
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Tell us how we can help..."
                    disabled={isSubmitting}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ocean-midnight placeholder:text-gray-300 focus:outline-none focus:border-ocean-turquoise transition-colors disabled:opacity-50 resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1.5">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-ocean-midnight text-white font-bold rounded-xl hover:bg-ocean-turquoise transition-all duration-300 text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Info Panel — 2/5 width */}
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '520px' }}>
                <Image
                  src="/images/fisher.jpg"
                  alt="Kilifi County fisherman"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-ocean-midnight/25 via-ocean-midnight/55 to-ocean-midnight/95" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Location */}
                  <div className="flex items-start gap-3 mb-7">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-ocean-turquoise mb-0.5">Location</p>
                      <p className="text-white text-sm font-semibold">Kilifi County, Kenya</p>
                      <p className="text-white/50 text-xs mt-0.5">East African Coast</p>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-7 space-y-5 mb-7">
                    {/* Email */}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-ocean-turquoise mb-0.5">Email</p>
                        <p className="text-white text-sm group-hover:text-ocean-turquoise transition-colors">{CONTACT_EMAIL}</p>
                      </div>
                    </a>

                    {/* Phone */}
                    <a href={`tel:${CONTACT_PHONE}`} className="flex items-start gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-ocean-turquoise mb-0.5">Phone</p>
                        <p className="text-white text-sm group-hover:text-ocean-turquoise transition-colors">{CONTACT_PHONE}</p>
                      </div>
                    </a>

                    {/* Response time */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-ocean-turquoise mb-0.5">Response Time</p>
                        <p className="text-white text-sm">Within 48 hours</p>
                      </div>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/30 mb-3">Follow Our Work</p>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://facebook.com/oceansalive"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-xl bg-white/10 hover:bg-ocean-turquoise flex items-center justify-center transition-colors"
                        aria-label="Facebook"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                      <a
                        href="https://instagram.com/oceans_alive_kenya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-xl bg-white/10 hover:bg-ocean-turquoise flex items-center justify-center transition-colors"
                        aria-label="Instagram"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <circle cx="12" cy="12" r="4" />
                          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
