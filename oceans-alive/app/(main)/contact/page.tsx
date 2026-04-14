'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Hero from '@/components/common/Hero';
import { contactFormSchema, ContactFormData } from '@/lib/validators';
import { apiClient } from '@/lib/api-client';
import { CONTACT_INQUIRY_TYPES, CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setError('');
    try {
      await apiClient.submitContact(data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error: any) {
      setError(error.message || 'Failed to submit form. Please try again.');
    }
  };

  return (
    <>
      <Hero
        title="Get In Touch"
        subtitle="We'd Love to Hear From You"
        description="Have questions about our work? Want to partner with us? Get in touch!"
      />

      <section className="py-16 md:py-24">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-6">
                Send Us a Message
              </h2>

              {submitted && (
                <div className="p-4 bg-green-100 text-green-800 rounded-lg mb-6">
                  ✓ Thank you! We've received your message and will get back to you soon.
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-100 text-red-800 rounded-lg mb-6">
                  ✗ {error}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    {...register('name')}
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="form-label">Email Address *</label>
                  <input
                    {...register('email')}
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="form-label">Inquiry Type</label>
                  <select
                    {...register('inquiry_type')}
                    className="form-input"
                    disabled={isSubmitting}
                  >
                    {CONTACT_INQUIRY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="form-label">Subject</label>
                  <input
                    {...register('subject')}
                    type="text"
                    className="form-input"
                    placeholder="What is this about?"
                    disabled={isSubmitting}
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="form-label">Message *</label>
                  <textarea
                    {...register('message')}
                    className="form-textarea"
                    rows={5}
                    placeholder="Your message..."
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-6">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-poppins font-semibold text-ocean-midnight mb-2">Email</h3>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-ocean-turquoise hover:text-ocean-midnight text-lg"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>

                <div>
                  <h3 className="font-poppins font-semibold text-ocean-midnight mb-2">Phone</h3>
                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="text-ocean-turquoise hover:text-ocean-midnight text-lg"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>

                <div>
                  <h3 className="font-poppins font-semibold text-ocean-midnight mb-2">Response Time</h3>
                  <p className="text-gray-700">
                    We typically respond to inquiries within 2-3 business days.
                  </p>
                </div>

                <div className="pt-8 border-t border-gray-300">
                  <h3 className="font-poppins font-semibold text-ocean-midnight mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com/oceansalive"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-ocean-turquoise text-white rounded-full flex items-center justify-center hover:bg-ocean-midnight transition-colors"
                      aria-label="Facebook"
                    >
                      f
                    </a>
                    <a
                      href="https://instagram.com/oceans_alive_kenya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-ocean-turquoise text-white rounded-full flex items-center justify-center hover:bg-ocean-midnight transition-colors"
                      aria-label="Instagram"
                    >
                      📷
                    </a>
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
