/**
 * ══════════════════════════════════════════════════════════════════
 * FORM RULES (what counts as a valid contact / donation form)
 * ══════════════════════════════════════════════════════════════════
 */
import { z } from 'zod';

// Newsletter Signup Validation
export const newsLetterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
});

export type NewsletterFormData = z.infer<typeof newsLetterSchema>;

// Donation Form Validation
export const donationSchema = z.object({
  amount: z.number().min(1, 'Amount must be greater than 0'),
  currency: z.string().default('USD'),
  donor_name: z.string().optional(),
  donor_email: z.string().email().optional(),
  donation_type: z.enum(['one-time', 'recurring']).default('one-time'),
  message: z.string().optional(),
  is_recurring: z.boolean().optional(),
});

export type DonationFormData = z.infer<typeof donationSchema>;

// Contact Form Validation
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z
    .string()
    .max(255, 'Subject must not exceed 255 characters')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must not exceed 5000 characters'),
  inquiry_type: z.string().default('general'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Blog Post Validation (for admin)
export const blogPostSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters')
    .max(255, 'Title must not exceed 255 characters'),
  slug: z
    .string()
    .min(5, 'Slug must be at least 5 characters')
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  excerpt: z
    .string()
    .min(10, 'Excerpt must be at least 10 characters')
    .max(500, 'Excerpt must not exceed 500 characters'),
  content: z.string().min(50, 'Content must be at least 50 characters'),
  category: z.string().min(1, 'Please select a category'),
  featured_image_url: z.string().url().optional().or(z.literal('')),
  author_name: z.string().optional(),
  is_published: z.boolean().default(false),
});

export type BlogPostFormData = z.infer<typeof blogPostSchema>;

// Resource Upload Validation (for admin)
export const resourceSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters')
    .max(255, 'Title must not exceed 255 characters'),
  description: z.string().optional(),
  category: z.string().min(1, 'Please select a category'),
  file_url: z.string().url('Please provide a valid file URL'),
  thumbnail_url: z.string().url().optional().or(z.literal('')),
  file_type: z.enum(['pdf', 'doc', 'image']),
  is_published: z.boolean().default(false),
});

export type ResourceFormData = z.infer<typeof resourceSchema>;

// Gallery Item Validation (for admin)
export const galleryItemSchema = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters')
    .max(255, 'Title must not exceed 255 characters'),
  description: z.string().optional(),
  image_url: z.string().url().optional(),
  video_url: z.string().url().optional(),
  type: z.enum(['photo', 'video']),
  category: z.string().min(1, 'Please select a category'),
  display_order: z.number().int().nonnegative().optional(),
  is_published: z.boolean().default(false),
});

export type GalleryItemFormData = z.infer<typeof galleryItemSchema>;
