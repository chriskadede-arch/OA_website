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
  {
    value: 'General Inquiry',
    label: 'General',
    desc: 'Questions & info',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    value: 'Partnership',
    label: 'Partnership',
    desc: 'NGOs, research, business',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    value: 'Volunteer',
    label: 'Volunteer',
    desc: 'Give time & skills',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    gradient: 'from-red-500 to-orange-500',
  },
  {
    value: 'Donation',
    label: 'Donate',
    desc: 'Support our work',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    gradient: 'from-green-500 to-teal-500',
  },
  {
    value: 'Other',
    label: 'Other',
    desc: 'Anything else',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>,
    gradient: 'from-gray-500 to-slate-600',
  },
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
      {/* ── IMMERSIVE HERO WITH MAP & ANIMATION ─────────────────── */}
      <section className="relative bg-ocean-midnight overflow-hidden">
        {/* Animated ocean waves background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ocean-turquoise rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        {/* Decorative coral pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="coral-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="currentColor" className="text-ocean-turquoise" />
                <circle cx="25" cy="75" r="1.5" fill="currentColor" className="text-ocean-turquoise" />
                <circle cx="75" cy="25" r="1.5" fill="currentColor" className="text-ocean-turquoise" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#coral-pattern)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

            {/* Right: Interactive Map Card */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <div className="aspect-square relative">
                  <Image
                    src="/images/communities.jpg"
                    alt="Kuruwitu Conservation Area"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight via-ocean-midnight/40 to-transparent" />

                  {/* Location Pin Animation */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 w-20 h-20 bg-ocean-turquoise/30 rounded-full animate-ping" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-ocean-turquoise to-green-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-white font-bold text-sm">We're Here</span>
                      </div>
                      <p className="text-white/80 text-xs leading-relaxed">
                        Kuruwitu Conservation & Welfare Association
                        <br />
                        Kilifi County, Kenya Coast
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-ocean-turquoise to-ocean-midnight rounded-2xl p-6 shadow-2xl border-4 border-white max-w-xs">
                <div className="text-4xl font-poppins font-bold text-white mb-1">48hrs</div>
                <div className="text-white/70 text-sm">Average response time from our team in Kilifi</div>
              </div>
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

      {/* ── CREATIVE INQUIRY TYPE SELECTOR ──────────────────────── */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-ocean-midnight mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose what brings you here today. We'll make sure your message reaches the right team.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {INQUIRY_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => selectType(opt.value)}
                className={`group relative p-6 rounded-2xl border-2 text-center transition-all duration-300 ${
                  selectedType === opt.value
                    ? 'border-ocean-turquoise bg-white shadow-xl scale-105'
                    : 'border-gray-200 bg-white hover:border-ocean-turquoise/40 hover:shadow-lg hover:scale-105'
                }`}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${opt.gradient} flex items-center justify-center ${
                  selectedType === opt.value ? 'scale-110' : 'group-hover:scale-110'
                } transition-transform`}>
                  <div className="text-white">{opt.icon}</div>
                </div>
                <div className={`text-sm font-bold mb-1 ${selectedType === opt.value ? 'text-ocean-turquoise' : 'text-gray-700'}`}>
                  {opt.label}
                </div>
                <div className="text-xs text-gray-500">{opt.desc}</div>

                {selectedType === opt.value && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-ocean-turquoise rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          <input type="hidden" {...register('inquiry_type')} />
        </div>
      </section>

      {/* ── FORM SECTION ──────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">

          {/* Success Animation */}
          {submitted && (
            <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <div className="absolute inset-0">
                <Image src="/images/oceanday.jpg" alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-ocean-turquoise/95 to-ocean-midnight/95" />
              </div>
              <div className="relative py-20 px-8 text-center">
                <div className="w-24 h-24 rounded-full bg-white/20 border-4 border-white flex items-center justify-center mx-auto mb-8 animate-bounce">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-4xl font-poppins font-bold text-white mb-4">Message Received!</h3>
                <p className="text-white/90 text-lg mb-2">Thank you for reaching out to Oceans Alive.</p>
                <p className="text-white/70">We'll get back to you within 48 hours from our team in Kilifi, Kenya.</p>
              </div>
            </div>
          )}

          {/* Error banner */}
          {error && (
            <div className="flex items-center gap-4 p-5 bg-red-50 border-2 border-red-200 text-red-700 rounded-2xl mb-8">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className="flex-1">{error}</div>
            </div>
          )}

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-100 p-8 md:p-12 shadow-xl">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight mb-3">
                Send Us a Message
              </h2>
              <p className="text-gray-600">Fill out the form below and we'll be in touch soon.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                    Full Name <span className="text-ocean-turquoise">*</span>
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className="w-full rounded-xl border-2 border-gray-200 bg-white px-5 py-4 text-ocean-midnight placeholder:text-gray-400 focus:outline-none focus:border-ocean-turquoise focus:ring-4 focus:ring-ocean-turquoise/10 transition-all disabled:opacity-50"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                    Email Address <span className="text-ocean-turquoise">*</span>
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    className="w-full rounded-xl border-2 border-gray-200 bg-white px-5 py-4 text-ocean-midnight placeholder:text-gray-400 focus:outline-none focus:border-ocean-turquoise focus:ring-4 focus:ring-ocean-turquoise/10 transition-all disabled:opacity-50"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                  Subject
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  placeholder="What would you like to discuss?"
                  disabled={isSubmitting}
                  className="w-full rounded-xl border-2 border-gray-200 bg-white px-5 py-4 text-ocean-midnight placeholder:text-gray-400 focus:outline-none focus:border-ocean-turquoise focus:ring-4 focus:ring-ocean-turquoise/10 transition-all disabled:opacity-50"
                />
                {errors.subject && (
                  <p className="text-sm text-red-500 mt-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                  Message <span className="text-ocean-turquoise">*</span>
                </label>
                <textarea
                  {...register('message')}
                  rows={6}
                  placeholder="Tell us about your interest in ocean conservation, how you'd like to collaborate, or any questions you have..."
                  disabled={isSubmitting}
                  className="w-full rounded-xl border-2 border-gray-200 bg-white px-5 py-4 text-ocean-midnight placeholder:text-gray-400 focus:outline-none focus:border-ocean-turquoise focus:ring-4 focus:ring-ocean-turquoise/10 transition-all disabled:opacity-50 resize-none"
                />
                {errors.message && (
                  <p className="text-sm text-red-500 mt-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-5 bg-gradient-to-r from-ocean-midnight to-ocean-turquoise text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 text-lg tracking-wide disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── VISIT US & SOCIAL SECTION ─────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-ocean-midnight to-ocean-turquoise py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/fisher.jpg" alt="" fill className="object-cover" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Visit Us */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-bold text-white mb-3">Visit Us</h3>
              <p className="text-white/80 text-sm mb-2">Kuruwitu Conservation Area</p>
              <p className="text-white/60 text-xs">Kilifi County, Kenya Coast</p>
            </div>

            {/* Response Time */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-bold text-white mb-3">Response Time</h3>
              <p className="text-white/80 text-sm mb-2">Within 48 hours</p>
              <p className="text-white/60 text-xs">Monday to Friday, 9AM - 5PM EAT</p>
            </div>

            {/* Follow Us */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-bold text-white mb-4">Follow Our Work</h3>
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://facebook.com/oceansalive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/20 hover:bg-white hover:text-ocean-turquoise flex items-center justify-center transition-all duration-300 text-white hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/oceans_alive_kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/20 hover:bg-white hover:text-ocean-turquoise flex items-center justify-center transition-all duration-300 text-white hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
