# Oceans Alive Foundation - Website

A modern, performant website for Oceans Alive Foundation built with **Next.js 14**, **React 18**, **TypeScript**, **Tailwind CSS**, and **Supabase**.

## 🌊 Project Overview

This is a complete rebuild of the Oceans Alive Foundation website, designed to:

- Showcase impact stories and environmental education content
- Provide a resource library with toolkits and guides
- Display multimedia galleries (photos and videos)
- Manage newsletter subscriptions and campaigns
- Process donations via Stripe
- Enable community engagement through contact forms

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Static typing
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Backend
- **Next.js API Routes** - Serverless backend
- **Supabase** - PostgreSQL database + authentication
- **Node.js** - Runtime

### External Services
- **Stripe** - Payment processing
- **Mailchimp** - Email marketing
- **YouTube API** - Video hosting
- **Cloudinary** - Image CDN (optional)
- **Google Analytics 4** - Analytics

### Deployment
- **Vercel** - Hosting and CI/CD
- **GitHub** - Version control

## 📋 Requirements

- **Node.js** 18.0 or higher
- **npm** or **pnpm** package manager
- **Git** for version control

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/oceans-alive.git
cd oceans-alive
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Set Up Environment Variables

Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

**Required variables:**
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_KEY` - Supabase service role key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
- `STRIPE_SECRET_KEY` - Stripe secret key
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook secret
- `MAILCHIMP_API_KEY` - Mailchimp API key
- `MAILCHIMP_SERVER_PREFIX` - Mailchimp server (e.g., `us1`)
- `MAILCHIMP_LIST_ID` - Mailchimp audience ID

### 4. Set Up Supabase Database

#### Option A: Using Supabase Dashboard (Recommended for first-time setup)

1. Create a new Supabase project at https://supabase.com
2. Go to **SQL Editor** in the Supabase dashboard
3. Create a new query and paste the contents of `database.sql`
4. Execute the query

#### Option B: Using Supabase CLI

```bash
npm install -g supabase
supabase init
supabase db push
```

### 5. Start Development Server

```bash
npm run dev
# or
pnpm dev
```

Visit http://localhost:3000 to see your site.

## 📁 Project Structure

```
oceans-alive/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── (main)/              # Grouped pages
│   │   ├── about/
│   │   ├── blog/
│   │   ├── resources/
│   │   ├── gallery/
│   │   ├── donate/
│   │   ├── contact/
│   │   └── newsletter/
│   ├── api/                 # API routes
│   │   ├── blog/
│   │   ├── resources/
│   │   ├── gallery/
│   │   ├── newsletter/
│   │   ├── donate/
│   │   ├── contact/
│   │   ├── upload/
│   │   └── admin/
│   └── globals.css          # Global styles
├── components/              # Reusable React components
│   ├── common/             # Common components (Navbar, Footer, Hero)
│   ├── blog/               # Blog components
│   ├── gallery/            # Gallery components
│   ├── resources/          # Resources components
│   ├── donate/             # Donation components
│   └── contact/            # Contact form components
├── lib/                     # Utilities and helpers
│   ├── supabase.ts         # Supabase client
│   ├── types.ts            # TypeScript types
│   ├── constants.ts        # Constants and config
│   ├── api-client.ts       # API client
│   ├── validators.ts       # Zod schemas
│   └── stripe.ts           # Stripe utilities
├── hooks/                   # Custom React hooks
├── public/                  # Static assets
├── database.sql            # Database schema
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## 🎨 Branding

The site uses Oceans Alive Foundation's brand colors:

- **Primary (Midnight Blue)**: `#022F4E`
- **Secondary (Tropical Turquoise)**: `#2EBFD1`
- **Accent (Seafoam Green)**: `#58A971`
- **Highlight (Sunshine Yellow)**: `#FBB308`
- **Tertiary (Sandy Shores)**: `#E6D7BA`

Fonts:
- **Headings**: Poppins (All-Caps)
- **Body**: Rugrats Sans

## 🔧 Core Features

### 1. **Blog System**
- Create, edit, publish blog posts
- Categories: Impact Stories, Education, Updates
- Featured images and excerpts
- View count tracking
- SEO-friendly URLs (slugs)

### 2. **Resource Library**
- Download toolkits, guides, and materials
- Categories: Toolkits, Case Studies, IEC Materials
- Download counter
- Search and filter by category

### 3. **Gallery**
- Photo gallery with lazy loading
- YouTube video embeds
- Category filtering
- Responsive grid layout

### 4. **Newsletter**
- Subscribe form on every page
- Mailchimp API integration
- Double opt-in confirmation
- Subscriber management

### 5. **Donations**
- Stripe payment integration
- One-time and recurring donations
- Donation amount selector
- Donor messages
- Payment confirmation emails

### 6. **Contact Forms**
- Contact form submission
- Email notifications
- Admin review interface
- Inquiry categorization

### 7. **Admin Panel** (Phase 1.5)
- Create/edit blog posts
- Upload resources
- Manage gallery items
- View submissions and analytics

## 📊 API Endpoints

All API endpoints are prefixed with `/api/`

### Blog
- `GET /api/blog` - Get all published posts (paginated)
- `GET /api/blog/[slug]` - Get single post by slug
- `POST /api/blog` - Create new post (admin only)
- `PUT /api/blog/[id]` - Update post (admin only)
- `DELETE /api/blog/[id]` - Delete post (admin only)

### Resources
- `GET /api/resources` - Get all resources (paginated)
- `GET /api/resources/[id]` - Get single resource
- `POST /api/resources` - Create resource (admin only)

### Gallery
- `GET /api/gallery` - Get all gallery items (paginated)
- `POST /api/gallery` - Create gallery item (admin only)

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `POST /api/newsletter/send` - Send newsletter (admin only)

### Donations
- `POST /api/donate/intent` - Create payment intent
- `POST /api/donate/webhook` - Stripe webhook handler

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/admin/contacts` - Get submissions (admin only)

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push to main

```bash
vercel deploy
```

### Configure Domain

1. In Vercel: Settings → Domains
2. Add your domain (oceansalive.org)
3. Follow nameserver setup
4. SSL certificate auto-provisioned

## 🧪 Testing

Run tests:

```bash
npm run test
```

Lint code:

```bash
npm run lint
```

Type check:

```bash
npm run type-check
```

## 📱 Mobile Responsive

The site is fully responsive and tested on:
- iPhone 12/13/14/15
- iPad
- Android devices
- Desktop (1920px+)

## ♿ Accessibility

Features:
- WCAG 2.1 AA compliance
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast compliance

## 🔒 Security

- Environment variables for secrets
- HTTPS/SSL enforced in production
- SQL injection prevention (Supabase)
- XSS protection (React)
- CSRF protection (Next.js)
- Content Security Policy headers

## 📈 Performance

- Lighthouse score target: 90+
- Page load time: < 2 seconds
- Core Web Vitals optimized
- Image optimization with Next.js Image
- Code splitting and lazy loading

## 🐛 Known Issues & Limitations

Currently (Phase 1):
- Admin panel is basic (no UI yet - use API directly)
- Comments system not yet integrated (use Disqus in Phase 1.5)
- Multi-language support not available
- Mobile app not available

## 🗓️ Roadmap

### Phase 1 (Current)
- ✅ Website foundation
- ✅ Blog system
- ✅ Resources library
- ✅ Gallery
- ✅ Newsletter
- ✅ Donations
- ✅ Contact forms

### Phase 1.5
- 🔄 Admin panel UI
- 🔄 Comments system
- 🔄 Advanced analytics

### Phase 2
- 📅 User login system
- 📅 Member-only content
- 📅 Event management
- 📅 Webinar platform
- 📅 Advanced CRM

## 📞 Support & Contributing

For issues or questions:
1. Check existing GitHub issues
2. Create new issue with detailed description
3. Contact: info@oceansalive.org

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 💚 About Oceans Alive Foundation

**Oceans Alive Foundation** is a community-empowered marine conservation NGO headquartered in Kuruwitu, Kilifi County, Kenya. We work to:

- Restore coral ecosystems
- Support sustainable fisheries
- Provide environmental education
- Empower local communities
- Protect marine biodiversity

Learn more at: https://oceansalive.org

---

**Made with ❤️ for ocean conservation**
