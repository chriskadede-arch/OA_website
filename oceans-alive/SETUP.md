# Development Setup Guide

This guide will help you set up the Oceans Alive Foundation website for development.

## Prerequisites

- Node.js 18.0 or higher
- npm or pnpm
- Git
- A code editor (VS Code recommended)
- Accounts for:
  - Supabase (https://supabase.com)
  - Stripe (https://stripe.com)
  - Mailchimp (https://mailchimp.com)
  - GitHub (https://github.com)

## Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/oceans-alive.git
cd oceans-alive
```

## Step 2: Install Dependencies

```bash
npm install
# or with pnpm
pnpm install
```

## Step 3: Set Up Supabase Project

### Create Supabase Project

1. Go to https://supabase.com and sign up
2. Create a new project
3. Copy your project URL and API key

### Initialize Database

1. Copy the SQL from `database.sql`
2. Go to Supabase Dashboard → SQL Editor
3. Create a new query and paste the SQL
4. Execute it

Alternatively, use Supabase CLI:

```bash
npm install -g supabase
supabase init
supabase db push
```

## Step 4: Set Up Environment Variables

1. Copy `.env.example` to `.env.local`

```bash
cp .env.example .env.local
```

2. Fill in the required values:

### Supabase Variables

From your Supabase project settings:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_KEY=your-service-role-key
```

Get these from: **Supabase Dashboard → Settings → API**

### Stripe Variables

From Stripe Dashboard:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
```

To get webhook secret:
1. Go to Stripe Dashboard → Developers → Webhooks
2. Create a new endpoint
3. Set URL to: `https://yourdomain.com/api/donate/webhook`
4. Subscribe to: `payment_intent` events
5. Copy signing secret

### Mailchimp Variables

From Mailchimp Account:

```
MAILCHIMP_API_KEY=your-api-key
MAILCHIMP_SERVER_PREFIX=us1
MAILCHIMP_LIST_ID=your-audience-id
```

To get these:
1. Go to Account → Extras → API Keys
2. Create API key or copy existing one
3. Server prefix is in the API key (e.g., `us1`, `us2-1`, etc.)
4. Audience ID: Lists → Settings → Audience name and defaults → Audience ID

### Google Analytics

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Set up in Google Analytics → Admin → Data Streams

### Optional Variables

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_ENABLE_DONATIONS=true
NEXT_PUBLIC_ENABLE_NEWSLETTER=true
```

## Step 5: Start Development Server

```bash
npm run dev
# or with pnpm
pnpm dev
```

Visit http://localhost:3000

## Step 6: Create Initial Content

### Create a Blog Post

```bash
# Use the API or create directly in Supabase SQL Editor
curl -X POST http://localhost:3000/api/blog \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-admin-token" \
  -d '{
    "title": "My First Blog Post",
    "slug": "my-first-blog-post",
    "excerpt": "A short excerpt about the post",
    "content": "Full blog post content in markdown or HTML",
    "category": "Impact Stories",
    "author_name": "John Doe"
  }'
```

Or insert directly in Supabase:

```sql
INSERT INTO posts (title, slug, excerpt, content, category, author_name, is_published)
VALUES (
  'My First Blog Post',
  'my-first-blog-post',
  'A short excerpt',
  'Full content here',
  'Impact Stories',
  'John Doe',
  true
);
```

## Project Structure Overview

```
oceans-alive/
├── app/
│   ├── layout.tsx          # Root layout (navbar, footer, globals)
│   ├── page.tsx            # Homepage
│   ├── (main)/             # Grouped routes
│   │   ├── blog/           # Blog pages
│   │   ├── resources/      # Resource library
│   │   ├── gallery/        # Photo/video gallery
│   │   ├── donate/         # Donation page
│   │   ├── contact/        # Contact form
│   │   └── newsletter/     # Newsletter management
│   ├── api/                # API routes
│   │   ├── blog/           # Blog API
│   │   ├── resources/      # Resources API
│   │   ├── newsletter/     # Newsletter API
│   │   ├── contact/        # Contact form API
│   │   ├── donate/         # Stripe donation API
│   │   └── upload/         # File upload API
│   └── globals.css         # Tailwind styles
├── components/             # React components
│   ├── common/            # Navbar, Footer, Hero
│   ├── blog/              # Blog components
│   └── ...
├── lib/                    # Utilities
│   ├── supabase.ts        # DB client
│   ├── types.ts           # TypeScript types
│   ├── constants.ts       # Constants
│   └── ...
├── public/                # Static files
├── database.sql           # Database schema
└── .env.local             # Environment variables (git-ignored)
```

## Common Development Tasks

### Adding a New API Endpoint

1. Create file: `app/api/route-name/route.ts`
2. Export GET, POST, PUT, or DELETE functions:

```typescript
export async function GET(request: NextRequest) {
  try {
    // Your logic here
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
```

### Creating a New Page

1. Create directory: `app/(main)/page-name/`
2. Create file: `app/(main)/page-name/page.tsx`
3. Export default React component:

```typescript
export default function PageName() {
  return (
    <div>
      <h1>Page Title</h1>
    </div>
  );
}
```

### Creating a New Component

1. Create file: `components/feature-name/ComponentName.tsx`
2. Export React component (use `'use client'` for client components)
3. Import in pages/other components

### Querying Database

```typescript
import { supabase } from '@/lib/supabase';

// Fetch data
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .eq('is_published', true)
  .order('published_at', { ascending: false });

// Insert data
await supabase
  .from('posts')
  .insert([{ title: 'New Post', ... }]);

// Update data
await supabase
  .from('posts')
  .update({ title: 'Updated Title' })
  .eq('id', 123);

// Delete data
await supabase
  .from('posts')
  .delete()
  .eq('id', 123);
```

### Working with Forms

Use `react-hook-form` with Zod validation:

```typescript
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/lib/validators';

export default function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Submit logic
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      {errors.name && <p>{errors.name.message}</p>}
    </form>
  );
}
```

## Testing

```bash
# Run tests
npm run test

# Lint code
npm run lint

# Type check
npm run type-check

# Format code
npm run format
```

## Debugging

### See API Logs

In browser DevTools → Network tab, click API requests to view request/response.

### See Database Logs

Supabase Dashboard → Logs → API requests

### See Server Logs

Check terminal where `npm run dev` is running.

## Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel deploy

# Deploy to production
vercel --prod
```

Or:
1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables
4. Auto-deploys on push to main

## Troubleshooting

### "Cannot find module '@/...'"

Import paths use `@/*` alias defined in `tsconfig.json`. Make sure your file paths are correct.

### "Supabase connection failed"

- Check `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`
- Verify they're from your Supabase project
- Check network connectivity

### "Stripe webhook failing"

- Verify `STRIPE_WEBHOOK_SECRET` is set
- Make sure webhook endpoint is properly configured in Stripe Dashboard
- Check Stripe logs in Dashboard → Developers → Webhooks

### "Form not submitting"

- Check browser console for errors
- Verify API endpoint exists
- Check network tab in DevTools
- Log data being sent

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

## Getting Help

1. Check the README.md
2. Search GitHub issues
3. Check repository discussions
4. Contact: info@oceansalive.org

---

Happy coding! 🌊
