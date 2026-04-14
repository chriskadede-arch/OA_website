# 🚀 Quick Reference Guide

## File Locations

### Core Pages
- Homepage: `app/page.tsx`
- About: `app/(main)/about/page.tsx`
- Blog: `app/(main)/blog/page.tsx`
- Resources: `app/(main)/resources/page.tsx`
- Gallery: `app/(main)/gallery/page.tsx`
- Donate: `app/(main)/donate/page.tsx`
- Contact: `app/(main)/contact/page.tsx`

### Admin Pages
- Dashboard: `app/(main)/admin/page.tsx`
- Blog Management: `app/(main)/admin/blog/page.tsx`

### Components
- Navbar: `components/common/Navbar.tsx`
- Footer: `components/common/Footer.tsx`
- Hero: `components/common/Hero.tsx`
- Newsletter Form: `components/common/NewsletterForm.tsx`

### API Routes
- Blog: `app/api/blog/route.ts` & `app/api/blog/[slug]/route.ts`
- Resources: `app/api/resources/route.ts`
- Gallery: `app/api/gallery/route.ts`
- Newsletter: `app/api/newsletter/subscribe/route.ts`
- Contact: `app/api/contact/route.ts`
- Donations: `app/api/donate/intent/route.ts` & `app/api/donate/webhook/route.ts`

### Configuration
- Package.json: `package.json` (dependencies)
- TypeScript: `tsconfig.json`
- Tailwind: `tailwind.config.js`
- Next.js: `next.config.js`
- Vercel: `vercel.json`
- CI/CD: `.github/workflows/deploy.yml`

### Database & Utilities
- Database Schema: `database.sql`
- Supabase Client: `lib/supabase.ts`
- Types: `lib/types.ts`
- Constants: `lib/constants.ts`
- Validators: `lib/validators.ts`
- API Client: `lib/api-client.ts`

### Documentation
- README: `README.md` (project overview)
- Setup: `SETUP.md` (developer setup)
- Deployment: `DEPLOYMENT.md` (deployment guide)
- Implementation: `IMPLEMENTATION_COMPLETE.md` (this build summary)
- Environment: `.env.example` (env variables)

---

## 🎯 Most Important Files to Know

If you're new to the project:

1. **Start here**: `README.md` - Understand what the project does
2. **Setup**: `SETUP.md` - Get it running on your machine
3. **Main page**: `app/page.tsx` - See the homepage structure
4. **Types**: `lib/types.ts` - Understand the data models
5. **Database**: `database.sql` - See all tables
6. **Constants**: `lib/constants.ts` - Brand colors, navigation, etc.

---

## 📞 Common Developer Questions

### How do I add a new blog post?
**Option 1 (Admin UI)**: Go to `/admin/blog/new`  
**Option 2 (Database)**: Insert directly into `posts` table  
**Option 3 (API)**: POST to `/api/blog` with admin auth

### How do I customize the brand colors?
Edit `lib/constants.ts` and `tailwind.config.js`

### How do I add a new page?
1. Create directory: `app/(main)/page-name/`
2. Create file: `app/(main)/page-name/page.tsx`
3. Export default React component

### How do I test Stripe donations locally?
Use test card: `4242 4242 4242 4242` with any future expiry date

### How do I check what's in the database?
Go to Supabase Dashboard → SQL Editor → Run queries

### How do I see error logs?
**Local**: Check terminal where `npm run dev` is running  
**Production**: Vercel Dashboard → Deployments → Logs

### How do I update environment variables?
1. Edit `.env.local` (local development)
2. Update Vercel Dashboard → Settings → Environment Variables (production)
3. Redeploy after adding new variables

---

## 🔗 Important URLs (after deployment)

- Production: `https://oceansalive.org`
- Admin Dashboard: `https://oceansalive.org/admin`
- Blog: `https://oceansalive.org/blog`
- Donations: `https://oceansalive.org/donate`
- API: `https://oceansalive.org/api/*`

---

## 📦 Key Dependencies

**Must Have**:
- next, react, react-dom
- @supabase/supabase-js
- stripe, @stripe/react-stripe-js
- react-hook-form, zod

**Nice to Have**:
- next-auth (user login)
- sentry (error tracking)
- framer-motion (animations)

---

## 🛠️ Development Commands

```bash
# Start local development
npm run dev
# Visit http://localhost:3000

# Build for production
npm run build

# Start production server
npm start

# Check for TypeScript errors
npm run type-check

# Lint code
npm run lint

# Format code
npm run format
```

---

## 🔐 Secrets You'll Need

Store these in `.env.local` (never commit):

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_KEY
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
MAILCHIMP_API_KEY
MAILCHIMP_SERVER_PREFIX
MAILCHIMP_LIST_ID
NEXT_PUBLIC_GA_MEASUREMENT_ID
```

---

## 📊 Database Cheat Sheet

### Top Query: Get all published posts
```sql
SELECT * FROM posts WHERE is_published = true ORDER BY published_at DESC;
```

### Get all donations
```sql
SELECT * FROM donations WHERE status = 'succeeded' ORDER BY donated_at DESC;
```

### Count newsletter subscribers
```sql
SELECT COUNT(*) FROM newsletter_subscribers WHERE is_active = true;
```

### Get contact submissions
```sql
SELECT * FROM contact_submissions ORDER BY submitted_at DESC;
```

---

## 🐛 Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| Module not found | Check import path, ensure file exists |
| Build fails | Run `npm run build` locally, check logs |
| Env vars missing | Add to `.env.local`, restart dev server |
| Database error | Check Supabase connection, verify URL and keys |
| Stripe error | Verify webhook secret, check test vs live keys |
| Form not submitting | Check network tab, verify API endpoint |
| Images not loading | Check URL is accessible, verify Cloudinary setup |
| Mobile looking broken | Check responsive design, test in browser DevTools |

---

## 📈 Monitoring & Health Checks

**Daily**:
- Check Vercel deployment status
- Monitor for console errors in DevTools
- Test core features (donate, newsletter, contact)

**Weekly**:
- Review Google Analytics
- Check Stripe payments succeeded
- Monitor database size

**Monthly**:
- Review uptime
- Check performance metrics
- Plan content updates
- Review user feedback

---

## 🎓 Learning Resources

**Next.js**: https://nextjs.org/docs  
**React**: https://react.dev  
**Tailwind**: https://tailwindcss.com/docs  
**TypeScript**: https://www.typescriptlang.org/docs  
**Supabase**: https://supabase.com/docs  
**Stripe**: https://stripe.com/docs

---

## 👥 Team Roles

| Role | Responsibilities |
|------|------------------|
| **Developer** | Code, deploy, bugfixes |
| **Content Manager** | Blog posts, resources, gallery |
| **Admin** | Dashboard, user management |
| **Designer** | Logo, colors, brand assets |

---

## 🚀 Deployment Reminders

- Always test locally first (`npm run dev`)
- Type-check before pushing (`npm run type-check`)
- Run linter before committing (`npm run lint`)
- Tag releases in GitHub
- Monitor Vercel after deployment
- Keep `.env` variables secure

---

## 📞 Getting Help

1. Check `SETUP.md` for setup issues
2. Check `DEPLOYMENT.md` for deployment issues
3. Check `README.md` for feature questions
4. Check GitHub Issues for similar problems
5. Read code comments for implementation details
6. Contact: info@oceansalive.org

---

**Last Updated**: April 11, 2026  
**Status**: ✅ Ready for Development & Deployment  
**Questions?** See the full documentation files.
