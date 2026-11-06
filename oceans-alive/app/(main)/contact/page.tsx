/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Contact
 * URL:  /contact
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Contact form + info card
 *
 * Where the text/data lives:
 *   • CONTACT_EMAIL, CONTACT_PHONE  →  lib/constants.ts
 *   • INQUIRY_OPTIONS  →  top of this file
 */
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
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/images/fisher.jpg" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-midnight/90 to-ocean-turquoise/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <svg className="w-4 h-4 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest">Kilifi County, Kenya</span>
            </div>

            <h1 className="font-poppins font-bold text-white text-6xl md:text-7xl lg:text-8xl leading-tight mb-8">
              Let's Make
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-turquoise via-green-400 to-ocean-seafoam">
                Waves Together
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-12">
              Whether you want to partner, volunteer, donate, or just learn more - we're here to connect with you from the shores of Kuruwitu.
            </p>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-ocean-turquoise/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-turquoise to-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold uppercase tracking-wider text-ocean-turquoise mb-1">Email Us</div>
                    <div className="text-sm text-white/80 group-hover:text-white transition-colors truncate">{CONTACT_EMAIL}</div>
                  </div>
                </div>
              </a>

              <a
                href={`tel:${CONTACT_PHONE}`}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-ocean-turquoise/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold uppercase tracking-wider text-ocean-turquoise mb-1">Call Us</div>
                    <div className="text-sm text-white/80 group-hover:text-white transition-colors">{CONTACT_PHONE}</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Contact form + info card
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Form - 3/5 width */}
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
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar - 2/5 width */}
            <aside className="lg:col-span-2 space-y-6">
              {/* Contact Info Card */}
              <div className="bg-gradient-to-br from-ocean-midnight to-ocean-turquoise rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-xl font-poppins font-bold mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Email</p>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm hover:text-ocean-seafoam transition-colors break-all">
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Phone</p>
                      <a href={`tel:${CONTACT_PHONE}`} className="text-sm hover:text-ocean-seafoam transition-colors">
                        {CONTACT_PHONE}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Location</p>
                      <p className="text-sm">Vipingo, Kilifi County, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours Card */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8">
                <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-4">Office Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Monday - Friday</span>
                    <span className="font-semibold text-ocean-midnight">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Saturday - Sunday</span>
                    <span className="font-semibold text-gray-400">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-400">East Africa Time (EAT) • UTC+3</p>
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="bg-ocean-seafoam/10 border-2 border-ocean-seafoam/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-ocean-seafoam/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-ocean-seafoam" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ocean-midnight">48 Hour Response</p>
                    <p className="text-xs text-gray-500">Average reply time</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
