/**
 * ══════════════════════════════════════════════════════════════════
 * TYPES (shapes of data - no content here)
 * ══════════════════════════════════════════════════════════════════
 */
// Blog Post
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image_url?: string;
  category: 'Impact Stories' | 'Education' | 'Updates' | string;
  author_name: string;
  published_at: string;
  updated_at: string;
  view_count: number;
  created_at: string;
  is_published: boolean;
}

// Resource (Toolkit, PDF, Guide)
export interface Resource {
  id: string;
  title: string;
  description: string;
  file_url: string;
  thumbnail_url?: string;
  category: 'Toolkits' | 'Case Studies' | 'IEC Materials' | string;
  file_type: 'pdf' | 'doc' | 'image' | string;
  download_count: number;
  created_at: string;
  updated_at: string;
  is_published: boolean;
}

// Gallery Item (Photo or Video)
export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  image_url?: string;
  video_url?: string; // YouTube URL
  link?: string; // page or blog story this photo belongs to
  linkText?: string;
  type: 'photo' | 'video';
  category: string;
  display_order: number;
  created_at: string;
  is_published: boolean;
}

// Newsletter Subscriber
export interface NewsletterSubscriber {
  id: string;
  email: string;
  name?: string;
  subscribed_at: string;
  is_active: boolean;
  mailchimp_id?: string;
  tags?: string[];
}

// Donation
export interface Donation {
  id: string;
  amount: number; // In cents
  currency: string;
  donor_name?: string;
  donor_email?: string;
  donation_type: 'one-time' | 'recurring';
  stripe_payment_id: string;
  stripe_customer_id?: string;
  status: 'pending' | 'succeeded' | 'failed';
  message?: string;
  donated_at: string;
  created_at: string;
  is_publicized: boolean;
}

// Contact Submission
export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  inquiry_type: 'partnership' | 'donation' | 'general' | string;
  submitted_at: string;
  read: boolean;
}

// User (Admin)
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor' | 'viewer';
  created_at: string;
  last_login?: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Form submission types
export interface NewsletterSignup {
  email: string;
  name?: string;
}

export interface DonationIntent {
  amount: number;
  currency: string;
  donor_name?: string;
  donor_email?: string;
  message?: string;
  is_recurring?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  inquiry_type: string;
}
