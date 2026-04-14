# Deployment Guide

This guide shows how to deploy Oceans Alive to production using Vercel.

## Prerequisites

- GitHub repository created and code pushed
- Vercel account (https://vercel.com)
- Stripe account configured with webhook
- Mailchimp account with API key and audience ID
- Supabase project with database set up

## Step 1: Connect Repository to Vercel

1. Go to https://vercel.com/new
2. Select "Import Git Repository"
3. Find your `oceans-alive` repository
4. Click "Import"

## Step 2: Configure Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add all variables from `.env.example`:

```
NEXT_PUBLIC_SUPABASE_URL = your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY = your-anon-key
SUPABASE_SERVICE_KEY = your-service-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_live_...
STRIPE_SECRET_KEY = sk_live_...
STRIPE_WEBHOOK_SECRET = whsec_...
MAILCHIMP_API_KEY = your-api-key
MAILCHIMP_SERVER_PREFIX = us1
MAILCHIMP_LIST_ID = your-audience-id
NEXT_PUBLIC_GA_MEASUREMENT_ID = G-XXXXXXXXXX
```

**Important**: Use production keys (not test keys) for Stripe.

## Step 3: Configure Domain

### Option A: Use Vercel Domain (Free)
1. Vercel Dashboard → Settings → Domains
2. Add any `.vercel.app` domain
3. Automatic SSL certificate

### Option B: Custom Domain (oceansalive.org)
1. Vercel Dashboard → Settings → Domains
2. Click "Add"
3. Enter `oceansalive.org`
4. Follow nameserver setup instructions
5. Update domain registrar with Vercel nameservers
6. Wait for DNS propagation (usually 24 hours)

## Step 4: Configure Stripe Webhook

1. Go to Stripe Dashboard → Developers → Webhooks
2. Click "Add endpoint"
3. Endpoint URL: `https://yourvercel-domain.com/api/donate/webhook`
4. Events: Select `payment_intent.succeeded` and `payment_intent.payment_failed`
5. Copy "Signing secret"
6. Add as `STRIPE_WEBHOOK_SECRET` to Vercel environment

## Step 5: Deploy

### Automatic Deployment
- Every push to `main` branch automatically deploys to production
- Push to other branches deploy to preview URLs

### Manual Deployment
```bash
vercel deploy --prod
```

**First deployment takes 2-5 minutes. Check Vercel dashboard for progress.**

## Step 6: Verification

After deployment:

1. ✅ Visit https://yourdomain.com to see live site
2. ✅ Check all pages load correctly
3. ✅ Test newsletter signup (should add to Mailchimp)
4. ✅ Test donation flow (use Stripe test card: 4242 4242 4242 4242)
5. ✅ Test contact form submission
6. ✅ Check Google Analytics is tracking
7. ✅ Verify mobile responsiveness

## Step 7: Database Backups

Supabase automatically backs up daily. To manually backup:

1. Supabase Dashboard → Backups
2. Click "Create backup"
3. Backups are retained for 7 days (paid plans: 30 days)

## Monitoring & Logs

### View Deployment Logs
- Vercel Dashboard → Deployments → Click deployment → Logs

### View Runtime Errors
- Vercel Dashboard → Deployments → Production → Runtime Logs

### Monitor Analytics
- Vercel Analytics (free): Built-in performance metrics
- Google Analytics 4: Custom events and user behavior
- Sentry (optional): Error tracking

## Environment-Specific Configs

### Development (localhost:3000)
- Use Stripe TEST keys
- Use Mailchimp test audience (optional)
- Supabase staging instance (optional)

### Staging (preview-*.vercel.app)
- Can use test or production keys
- Useful for QA before production

### Production (oceansalive.org)
- Use Stripe LIVE keys
- Use Mailchimp production audience
- Use Supabase production instance

## Rollback

If something breaks:

1. Vercel Dashboard → Deployments
2. Find the working deployment
3. Click "Rollback to this deployment"
4. Automatic rollback happens within seconds

## Database Migrations

If you update `database.sql`:

1. Apply changes in Supabase SQL Editor
2. Test locally
3. Commit and push to GitHub
4. Vercel auto-deploys

For data-modifying migrations, do it before deployment to avoid issues.

## Performance Optimization

### SEO
- Sitemap auto-generated: `/sitemap.xml`
- Robots.txt: `/robots.txt`
- Meta tags: Defined in `app/layout.tsx`

### Images
- All images used via Next.js `Image` component
- Automatic optimization for different sizes
- WebP format for modern browsers

### Code Splitting
- Next.js auto code splits by route
- Dynamic imports for heavy components

### Caching
- Static pages: 60 seconds (ISR)
- API routes: Cache control headers
- CDN: Vercel edge caching

## Troubleshooting Deployments

### Build fails
- Check logs in Vercel dashboard
- Ensure all env vars are set
- Run `npm run build` locally to test

### Env variables not available
- Redeploy after adding variables
- Check variable names match exactly
- Restart development server locally

### Database connection issues
- Verify Supabase URL and keys
- Check if Supabase project is running
- Test from Node REPL: `const { createClient } = require('@supabase/supabase-js')`

### Stripe webhook not firing
- Check webhook is enabled in Stripe Dashboard
- Verify signing secret is correct
- Check logs: `curl https://api.stripe.com/v1/webhook_endpoints`

## Going Live Checklist

- [ ] Custom domain configured
- [ ] SSL certificate verified
- [ ] Contact form sending emails
- [ ] Newsletter signup working
- [ ] Donations processing (test first)
- [ ] Analytics tracking events
- [ ] Mobile responsive on all devices
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] Database backups enabled
- [ ] Team has access to admin dashboard
- [ ] Newsletter audience ID correct
- [ ] Stripe webhooks configured
- [ ] Contact form emails configured
- [ ] Emergency rollback plan documented

## Post-Launch

### Week 1-2
- Monitor Vercel logs for errors
- Check analytics for traffic
- Test all forms daily
- Monitor Stripe for payment issues

### Week 2-4
- Analyze page performance
- Optimize slow endpoints
- Collect user feedback
- Plan Phase 2 features

## Support & Maintenance

For issues:
1. Check Vercel dashboard logs
2. Check Supabase dashboard status
3. Verify all env variables
4. Check GitHub for error reports

Contact: info@oceansalive.org

---

**Deployment Status**: 🚀 Ready to launch!
