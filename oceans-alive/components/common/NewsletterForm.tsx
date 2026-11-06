/**
 * ══════════════════════════════════════════════════════════════════
 * NEWSLETTER SIGN-UP FORM
 * ══════════════════════════════════════════════════════════════════
 * Used on /get-involved. On GoDaddy it sends to the PHP scripts in /api.
 * Page text, images and links (editable in Pages CMS)  →  content/site/newsletter-form.json
 */
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newsLetterSchema, NewsletterFormData } from '@/lib/validators';
import { apiClient } from '@/lib/api-client';

import PAGE from '@/content/site/newsletter-form.json';

interface NewsletterFormProps {
  variant?: 'default' | 'footer';
}

export default function NewsletterForm({ variant = 'default' }: NewsletterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsLetterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitMessage('');

    try {
      const response = await apiClient.subscribeNewsletter(data.email, data.name);
      setSubmitMessage('Thank you for subscribing! Our team has been notified.');
      reset();
    } catch (error: any) {
      setSubmitError(
        error.response?.data?.error || error.message || 'Failed to subscribe. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === 'footer') {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full">
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <input
            {...register('email')}
            type="email"
            placeholder={PAGE.intro.placeholder}
            className="flex-1 px-4 py-3 rounded-lg text-ocean-midnight bg-white focus:outline-none focus:ring-2 focus:ring-ocean-midnight min-w-0"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-ocean-midnight text-white rounded-lg font-poppins font-semibold hover:bg-ocean-sand transition-colors disabled:opacity-50 shrink-0 whitespace-nowrap"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        {errors.email && (
          <p className="text-sm text-red-200">{errors.email.message}</p>
        )}
        {submitMessage && <p className="text-sm text-green-200">{submitMessage}</p>}
        {submitError && <p className="text-sm text-red-200">{submitError}</p>}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="form-label">{PAGE.intro.label}</label>
        <input
          {...register('email')}
          type="email"
          placeholder={PAGE.intro.placeholder2}
          className="form-input"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="form-label">{PAGE.intro.label2}</label>
        <input
          {...register('name')}
          type="text"
          placeholder={PAGE.intro.placeholder3}
          className="form-input"
          disabled={isSubmitting}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn btn-primary"
      >
        {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
      </button>

      {submitMessage && (
        <p className="text-sm text-green-600 mt-4 text-center">{submitMessage}</p>
      )}
      {submitError && (
        <p className="text-sm text-red-500 mt-4 text-center">{submitError}</p>
      )}
    </form>
  );
}
