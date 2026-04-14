-- Blog Posts Table
CREATE TABLE public.posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title varchar(255) NOT NULL,
  slug varchar(255) UNIQUE NOT NULL,
  excerpt text,
  content text NOT NULL,
  featured_image_url varchar(500),
  category varchar(50) DEFAULT 'Updates',
  author_name varchar(100) DEFAULT 'Oceans Alive',
  published_at timestamp with time zone DEFAULT NOW(),
  updated_at timestamp with time zone DEFAULT NOW(),
  view_count integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT NOW(),
  is_published boolean DEFAULT FALSE,
  UNIQUE(slug)
);

-- Resources (Toolkits, PDFs, Guides)
CREATE TABLE public.resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title varchar(255) NOT NULL,
  description text,
  file_url varchar(500) NOT NULL,
  thumbnail_url varchar(500),
  category varchar(100) DEFAULT 'Toolkits',
  file_type varchar(20) DEFAULT 'pdf',
  download_count integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT NOW(),
  updated_at timestamp with time zone DEFAULT NOW(),
  is_published boolean DEFAULT FALSE
);

-- Gallery Items (Photos & Videos)
CREATE TABLE public.gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title varchar(255) NOT NULL,
  description text,
  image_url varchar(500),
  video_url varchar(500),
  type varchar(20) DEFAULT 'photo',
  category varchar(100) DEFAULT 'General',
  display_order integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT NOW(),
  is_published boolean DEFAULT FALSE
);

-- Newsletter Subscribers
CREATE TABLE public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email varchar(255) UNIQUE NOT NULL,
  name varchar(100),
  subscribed_at timestamp with time zone DEFAULT NOW(),
  is_active boolean DEFAULT TRUE,
  mailchimp_id varchar(255),
  tags text[],
  unsubscribed_at timestamp with time zone
);

-- Donations
CREATE TABLE public.donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  amount integer NOT NULL,
  currency varchar(3) DEFAULT 'USD',
  donor_name varchar(100),
  donor_email varchar(255),
  donation_type varchar(50) DEFAULT 'one-time',
  stripe_payment_id varchar(255) UNIQUE,
  stripe_customer_id varchar(255),
  status varchar(50) DEFAULT 'pending',
  message text,
  donated_at timestamp with time zone DEFAULT NOW(),
  created_at timestamp with time zone DEFAULT NOW(),
  is_publicized boolean DEFAULT FALSE,
  is_recurring boolean DEFAULT FALSE
);

-- Contact Form Submissions
CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar(100) NOT NULL,
  email varchar(255) NOT NULL,
  subject varchar(255),
  message text NOT NULL,
  inquiry_type varchar(50) DEFAULT 'general',
  submitted_at timestamp with time zone DEFAULT NOW(),
  read boolean DEFAULT FALSE,
  response text,
  responded_at timestamp with time zone
);

-- Users (Admin/Editor)
CREATE TABLE public.users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email varchar(255) UNIQUE NOT NULL,
  name varchar(100),
  role varchar(50) DEFAULT 'viewer',
  created_at timestamp with time zone DEFAULT NOW(),
  last_login timestamp with time zone,
  is_active boolean DEFAULT TRUE
);

-- Create Indexes for Better Performance
CREATE INDEX idx_posts_slug ON public.posts(slug);
CREATE INDEX idx_posts_published ON public.posts(is_published);
CREATE INDEX idx_posts_category ON public.posts(category);
CREATE INDEX idx_resources_published ON public.resources(is_published);
CREATE INDEX idx_resources_category ON public.resources(category);
CREATE INDEX idx_gallery_published ON public.gallery_items(is_published);
CREATE INDEX idx_gallery_category ON public.gallery_items(category);
CREATE INDEX idx_newsletter_email ON public.newsletter_subscribers(email);
CREATE INDEX idx_newsletter_active ON public.newsletter_subscribers(is_active);
CREATE INDEX idx_donations_email ON public.donations(donor_email);
CREATE INDEX idx_donations_status ON public.donations(status);
CREATE INDEX idx_contact_read ON public.contact_submissions(read);

-- RLS (Row Level Security) - Optional but recommended for production
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Public read access for published content
CREATE POLICY "Public read access" ON public.posts
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public read access" ON public.resources
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public read access" ON public.gallery_items
  FOR SELECT USING (is_published = true);

-- Allow anyone to insert newsletter subscribers
CREATE POLICY "Enable insert for newsletter" ON public.newsletter_subscribers
  FOR INSERT WITH CHECK (true);

-- Allow anyone to insert donations
CREATE POLICY "Enable insert for donations" ON public.donations
  FOR INSERT WITH CHECK (true);

-- Allow anyone to submit contact forms
CREATE POLICY "Enable insert for contacts" ON public.contact_submissions
  FOR INSERT WITH CHECK (true);

-- Storage Buckets
INSERT INTO storage.buckets (id, name)
VALUES ('images', 'images')
ON CONFLICT(id) DO NOTHING;

INSERT INTO storage.buckets (id, name)
VALUES ('documents', 'documents')
ON CONFLICT(id) DO NOTHING;

-- Storage Policies
CREATE POLICY "Public read for images" ON storage.objects
  FOR SELECT USING (bucket_id = 'images');

CREATE POLICY "Authenticated upload for images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'images' AND auth.role() = 'authenticated');

CREATE POLICY "Public read for documents" ON storage.objects
  FOR SELECT USING (bucket_id = 'documents');

CREATE POLICY "Authenticated upload for documents" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'documents' AND auth.role() = 'authenticated');
