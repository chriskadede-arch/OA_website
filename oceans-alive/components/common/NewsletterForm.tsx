'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newsLetterSchema, NewsletterFormData } from '@/lib/validators';
import { apiClient } from '@/lib/api-client';

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
      setSubmitMessage('Thank you for subscribing! Check your email to confirm.');
      reset();
    } catch (error: any) {
      setSubmitError(
        error.response?.data?.error || 'Failed to subscribe. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === 'footer') {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            {...register('email')}
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-lg text-ocean-midnight bg-white focus:outline-none focus:ring-2 focus:ring-ocean-midnight"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-ocean-midnight text-white rounded-lg font-poppins font-semibold hover:bg-ocean-sand transition-colors disabled:opacity-50"
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
        <label className="form-label">Email Address</label>
        <input
          {...register('email')}
          type="email"
          placeholder="your@email.com"
          className="form-input"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="form-label">Full Name (Optional)</label>
        <input
          {...register('name')}
          type="text"
          placeholder="Your name"
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
