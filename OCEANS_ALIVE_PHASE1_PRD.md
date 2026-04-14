# PRODUCT REQUIREMENTS DOCUMENT
## Oceans Alive Foundation - Phase 1 Website

**Document Date**: April 11, 2026  
**Status**: Ready for Review  
**Version**: 1.0  

---

## 1. EXECUTIVE SUMMARY

Oceans Alive Foundation needs a professional, low-maintenance website to serve as the digital hub for environmental education, impact storytelling, and donor/partner engagement. Phase 1 focuses on a **quick-win MVP** that establishes web presence without overengineering.

**Key Constraint**: Simple, cost-effective, maintainable by small team with minimal technical expertise.

**Target Launch**: 6-8 weeks  
**Estimated Monthly Cost**: $5-15/month (can be $0 with all free tiers)  
**Technology Approach**: WordPress CMS (proven, low-barrier to entry for NGOs)

---

## 2. PROBLEM STATEMENT

### Current State
- OAF has brand identity (logo, colors, typography) and social media presence (@oceans_alive_kenya)
- Domain registered (oceansalive.org) but no active website
- Content (impact stories, educational materials, films) exists but scattered across platforms
- No centralized hub for donors, partners, students, and communities to access OAF information
- No mechanism for regular donor/partner engagement (newsletter currently ad-hoc)
- Educational materials and case studies are not discoverable

### Pain Points
1. **Discoverability**: Potential partners, students, donors can't find OAF's work online
2. **Content Fragmentation**: Films, toolkits, case studies scattered across YouTube, email, social media, local files
3. **Engagement Bottleneck**: No efficient way to send quarterly updates to donor/partner network
4. **Storytelling Medium**: Limited ability to showcase impact-led narratives alongside multimedia
5. **SEO/Organic Reach**: No searchable content hub for environmental education keywords

### Success Metric for Phase 1
- Website live and accessible at oceansalive.org
- 50+ pieces of content published (blog posts, case studies, toolkit links)
- 500+ newsletter subscribers by end of first quarter
- Unified social media presence with consistent messaging
- 1000+ monthly visitors by month 3

---

## 3. PROPOSED SOLUTION

### 3.1 Website Architecture (WordPress)

**Platform**: WordPress (self-hosted)  
**Hosting**: Bluehost or SiteGround with nonprofit discount ($3-5/mo)  
**Domain**: oceansalive.org  
**SSL**: Free via Let's Encrypt  

**Why WordPress?**
- Mature, stable platform with 40%+ of web
- Massive plugin ecosystem = no coding needed for Phase 1
- Non-technical users can publish content, manage media
- Strong SEO out-of-the-box
- Excellent nonprofit community and support
- Can scale up to Phase 2+ without technical rewrite

### 3.2 Website Structure

```
/ (Homepage)
├── About
│   ├── Our Mission
│   ├── Our Team
│   └── Impact Stats
├── Blog / Stories
│   ├── Featured Impact Stories
│   ├── Environmental Education
│   └── Community Updates
├── Resources Library
│   ├── Toolkits & Guides (PDFs)
│   ├── Case Studies
│   ├── Video Gallery
│   └── IEC Materials (Posters, Infographics)
├── Get Involved
│   ├── Donate
│   ├── Newsletter Signup
│   └── Contact
└── Connect
    ├── Social Media Links
    ├── Newsletter Archive
    └── Contact Form
```

---

## 4. CORE FEATURES - PHASE 1

### 4.1 FEATURE: Website Foundation
**Requirement**: Professional homepage and key pages reflecting OAF's mission

**Scope**:
- Homepage with hero section (brand message + call-to-action)
- About page (mission, values, team bios, impact stats)
- Contact page with inquiry form
- Privacy policy + Terms of Use
- Mobile-responsive design
- Brand colors and typography (Poppins + Rugrats Sans)
- Fast loading (< 3 second page load)

**Success Criteria**:
- ✅ Homepage loads in < 2 seconds
- ✅ Mobile score > 90 (Google PageSpeed)
- ✅ All pages accessible and properly branded
- ✅ Contact form submits successfully

**Implementation**:
- WordPress theme: Neve or Astra (free, responsive, customizable)
- Plugin: Elementor (free version) or Divi for visual page building
- Plugin: WP Forms for contact forms
- Plugin: WP Super Cache for performance

---

### 4.2 FEATURE: Blog / Impact Stories
**Requirement**: Content hub for case studies, learnings, and environmental education articles

**Scope**:
- Blog post editor with rich formatting (images, video embeds, links)
- Categories: Impact Stories, Education, Community Updates, News
- Featured image + excerpt preview
- Search functionality
- Related posts sidebar
- Social share buttons on each post
- Author bios for blog writers

**Success Criteria**:
- ✅ Can publish 50+ blog posts in Phase 1
- ✅ Posts are discoverable via search (internal + Google)
- ✅ Readers can share posts to social media
- ✅ Posts load with embedded videos/images

**Implementation**:
- Built-in WordPress blog functionality
- Plugin: Yoast SEO (free) for SEO optimization
- Plugin: Social Snap for social sharing
- Built-in featured images and tags

---

### 4.3 FEATURE: Resource Library / Toolkit Hub
**Requirement**: Centralized location for downloadable materials (PDFs, guides, case studies)

**Scope**:
- Searchable/filterable directory of resources
- Resource categories: Toolkits, Case Studies, IEC Materials (posters/infographics)
- Thumbnail preview with description
- Direct download link
- Related resources recommendations
- Downloaded content is properly attributed to OAF

**Success Criteria**:
- ✅ 20+ resources uploaded and organized
- ✅ Easy-to-find resource download buttons
- ✅ Search/filter by category works
- ✅ File size optimized for fast download

**Implementation**:
- Plugin: Document Management System (DMS) or custom post type
- Alternative: Simple page with organized links + file uploads
- Files hosted on Cloudinary (free, with CDN for fast delivery)
- Or: Google Drive folder embedded on page (simplest)

---

### 4.4 FEATURE: Multimedia Gallery (Videos + Photos)
**Requirement**: Browse and watch OAF's documentaries, environmental films, and photo galleries

**Scope**:
- Video gallery pulling from YouTube channel
- Photo gallery with tags (coral restoration, community, education, etc.)
- Video descriptions with contextual information
- Call-to-action (donate, newsletter signup) after video
- Image lightbox for photo viewing
- Responsive video player

**Success Criteria**:
- ✅ 10+ videos embedded from YouTube
- ✅ 50+ photos organized in galleries
- ✅ Videos autoplay or can be clicked
- ✅ Photos display in responsive grid

**Implementation**:
- Plugin: YouTube Feed (free) to auto-pull latest videos
- Plugin: Envira Gallery (free version) for photo galleries
- Cloudinary for image hosting and CDN delivery
- YouTube native embeds for video player

---

### 4.5 FEATURE: Newsletter Signup + Email Campaigns
**Requirement**: Build subscriber list and send quarterly updates to donors and partners

**Scope**:
- Newsletter signup popup / sidebar widget
- Homepage signup CTA (prominent)
- Subscriber management (collected, segmented)
- Monthly email template with OAF updates, stories, impact metrics
- Automated welcome email for new subscribers
- Unsubscribe link (required by law)

**Success Criteria**:
- ✅ 500+ subscribers by end of Q1
- ✅ 2+ newsletters sent and opened
- ✅ Signup form on every page
- ✅ Automatic confirmation emails sent

**Implementation**:
- Email service: Mailchimp (free tier, 500 contacts + 1,000 emails/mo)
- Plugin: WPForms or MailerLite integration
- Newsletter signup popup: MonsterInsights or built-in form
- Scheduled monthly email campaigns via Mailchimp dashboard

---

### 4.6 FEATURE: Social Media Integration
**Requirement**: Unified presence across Facebook, Instagram, TikTok, LinkedIn, and X

**Scope**:
- Social media feed widget on homepage/sidebar
- Share buttons on every blog post
- Links to all social profiles (footer + sidebar)
- Cross-posting automation (one post to multiple platforms)
- Embedded feeds (Instagram, Facebook, TikTok on pages)
- Consistent branding across all platforms

**Success Criteria**:
- ✅ All 5 platforms linked and branded with OAF logo
- ✅ Feed widgets visible on homepage
- ✅ Share buttons working on every post
- ✅ New blog posts auto-shared to social

**Implementation**:
- Method A: Meta Business Suite (free Facebook/Instagram management)
- Method B: IFTTT (free cross-posting automation)
- Plugin: Social Snap for share buttons
- Native embeds: Instagram, TikTok, LinkedIn, X widgets (free)
- Scheduling: Buffer (limited free tier) or native platform schedulers

---

### 4.7 FEATURE: Donation / Support CTA
**Requirement**: Enable visitors to donate and support OAF (low-barrier entry)

**Scope**:
- Donation button prominently placed (homepage, footer, dedicated page)
- Multiple donation amounts (one-time: $5, $10, $25, $50, custom)
- Optional recurring donation option
- Donor message of impact (% goes to coral restoration, etc.)
- Transaction security (SSL, PCI compliance)
- Thank you email upon donation
- Donation page explaining use of funds

**Success Criteria**:
- ✅ Donation page live and functional
- ✅ Donations processable via Stripe or PayPal
- ✅ Donors receive confirmation email
- ✅ Transparent explanation of fund use

**Implementation**:
- Platform: Donorbox (free, 1.5% fee) or Stripe + custom form
- Alternative: PayPal Giving Fund (0% if 501(c)(3) nonprofit)
- Payment processor: Stripe (2.2% + $0.30 per transaction)
- Plugin: GiveWP or WP Charitable for WordPress integration

---

### 4.8 FEATURE: Basic Analytics & SEO
**Requirement**: Track website performance and discoverability

**Scope**:
- Page views, visitor sources, device types
- Blog post performance (most read articles)
- Newsletter signup sources
- Donation conversion tracking
- Search engine visibility (Google Search Console)

**Success Criteria**:
- ✅ Analytics dashboard accessible
- ✅ Can identify top-performing content
- ✅ Website appears in Google search results
- ✅ Donation tracking implemented

**Implementation**:
- Analytics: Google Analytics 4 (free, built into WordPress)
- SEO: Yoast SEO plugin (free)
- Search Console: Google Search Console (free)
- Heatmaps (optional): Hotjar free tier
- Goal tracking: GA4 events for donations, signups

---

## 5. FEATURES OUT OF SCOPE - PHASE 1

❌ Member/login system (e.g., password-protected resources)  
❌ E-commerce functionality (selling materials)  
❌ Community forum or discussion board  
❌ Live chat / chatbot support  
❌ Advanced CRM for donor management  
❌ Mobile app  
❌ Real-time notifications or push alerts  
❌ Content API for third-party integrations  
❌ Machine learning or recommendation engine  
❌ Video streaming (self-hosted) - YouTube is sufficient  

**Note**: These can be evaluated for Phase 2 based on Phase 1 learnings.

---

## 6. TECHNICAL ARCHITECTURE

### 6.1 Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **CMS** | WordPress 6.x | Proven, mature, plugin ecosystem |
| **Hosting** | Bluehost / SiteGround | One-click WordPress, nonprofit discount |
| **Database** | MySQL 8.0 | Included with WordPress hosting |
| **Email Service** | Mailchimp | Free tier, industry standard |
| **Image CDN** | Cloudinary | Free 25GB+CDN, ease of use |
| **Video Hosting** | YouTube | Free, unlimited, best reach |
| **Forms** | WPForms | Free WordPress form builder |
| **Analytics** | Google Analytics 4 | Free, robust, built-in |
| **Payment** | Stripe + Donorbox | Secure, low fees, reliable |
| **Domain** | oceansalive.org (existing) | Already registered |

### 6.2 Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    Website Visitors                      │
│           (PC, Mobile, Tablet, Social Traffic)           │
└─────────────────┬───────────────────────────────────────┘
                  │
┌─────────────────────────────────────────────────────────┐
│              WordPress Website Frontend                 │
│           (oceansalive.org via Bluehost)                │
│  ├─ Homepage, Blog, Resources, Gallery, Donate Page     │
│  └─ Mobile Responsive, Brad Colors, Fast Loading        │
└─────────┬───────────────────────┬──────────────┬────────┘
          │                       │              │
    ┌─────▼────┐      ┌──────────▼───┐  ┌──────▼─────┐
    │  MySQL   │      │  WordPress   │  │  Plugins   │
    │ Database │      │    Core      │  │ (SEO, CDN) │
    └──────────┘      └──────────────┘  └────────────┘
          │
    ┌─────┴──────────────────────────────────────────┐
    │        External Services (No Hosting Cost)     │
    ├──────────────────────────────────────────────┤
    │ • YouTube (Videos) - Free                     │
    │ • Cloudinary (Images/CDN) - Free 25GB        │
    │ • Mailchimp (Email) - Free tier              │
    │ • Google Analytics - Free                    │
    │ • Stripe/Donorbox (Donations) - 1.5-2.2%   │
    │ • IFTTT (Social Cross-post) - Free          │
    │ • Meta Business Suite - Free                │
    └──────────────────────────────────────────────┘
```

### 6.3 Do We Need External Tools/APIs?

**Short Answer: No external custom tooling needed for Phase 1.**

All Phase 1 requirements can be handled with:
1. **WordPress plugins** (no code required)
2. **Free SaaS services** (Mailchimp, YouTube, Cloudinary, etc.)
3. **Browser-based dashboard** (no CLI tools or Python needed)

**Python/CLI would be needed IF:**
- Building custom backend API (Phase 2)
- Automating bulk content imports from spreadsheets
- Advanced analytics or data processing

**MCPs Status:**
- No mature MCPs exist for WordPress CMS tasks yet
- Standard MCPs for file operations, Git, and APIs exist but aren't necessary for Phase 1

---

## 7. IMPLEMENTATION PLAN

### Phase 1 Timeline: 6-8 Weeks

| Week | Milestone | Deliverables |
|------|-----------|--------------|
| **1-2** | Foundation Setup | Domain configured, hosting activated, WordPress installed, theme selected/customized |
| **2-3** | Content Structure | Pages created (About, Blog, Resources, Gallery), navigation finalized, brand style applied |
| **3-4** | Content Population | 30+ blog posts published, resources uploaded, videos embedded, galleries set up |
| **4-5** | Integrations | Mailchimp connected, Stripe/Donorbox integrated, social feeds embedded, analytics set up |
| **5-6** | Polish & Launch | SEO optimization, mobile testing, form testing, security hardening, domain goes live |
| **6-7** | Monitoring | Launch monitoring, issue resolution, performance optimization, first newsletter sent |
| **7-8** | Planning | Gather user feedback, plan Phase 2 features, document learnings |

### Week-by-Week Task Breakdown

**Week 1: Domain & Hosting**
- [ ] Verify oceansalive.org is active and pointed to hosting provider
- [ ] Sign up for Bluehost/SiteGround, apply nonprofit discount
- [ ] Install WordPress, choose theme (Neve or Astra)
- [ ] Install essential plugins (Yoast SEO, WPForms, WP Super Cache, Elementor)
- [ ] Configure basic site settings (title, logo, tagline)

**Week 2: Brand & Pages**
- [ ] Upload OAF logo and brand assets
- [ ] Set color scheme (Midnight Blue primary, accents)
- [ ] Create main pages: Home, About, Blog, Resources, Gallery, Donate, Contact
- [ ] Set up navigation menu
- [ ] Create homepage hero section with CTAs

**Week 3: Content Setup**
- [ ] Create blog categories (Impact Stories, Education, Updates)
- [ ] Set up resource library structure
- [ ] Create YouTube channel (if not existing) and upload initial videos
- [ ] Create Cloudinary account, add 50+ images
- [ ] Build photo galleries

**Week 4: Content Population (Part 1)**
- [ ] Write/publish 15+ blog posts (impact stories, case studies, education pieces)
- [ ] Upload 20+ resources (PDFs, guides, toolkits)
- [ ] Embed 10+ YouTube videos
- [ ] Populate gallery with 50+ photos
- [ ] Add author bios for blog writers

**Week 5: Content Population (Part 2)**
- [ ] Publish 15+ additional blog posts
- [ ] Add testimonials / success metrics
- [ ] Create team page with bios
- [ ] Set up resource search/filter
- [ ] Write donation page copy

**Week 6: Integrations**
- [ ] Connect Mailchimp and set up signup forms (homepage, sidebar, footer)
- [ ] Connect Stripe/Donorbox for donations
- [ ] Embed Instagram, Facebook, TikTok feeds
- [ ] Set up IFTTT for cross-platform posting
- [ ] Configure Google Analytics 4
- [ ] Set up Google Search Console

**Week 7: Polish & Testing**
- [ ] Test all forms (contact, newsletter, donation)
- [ ] Mobile responsiveness across all pages
- [ ] Page load speed optimization
- [ ] Fix broken links, missing images
- [ ] Enable SSL/HTTPS (automatic on modern hosting)
- [ ] Create privacy policy + T&Cs
- [ ] Send first test newsletter via Mailchimp

**Week 8: Launch & Monitoring**
- [ ] Publish press release (update social media)
- [ ] Monitor uptime and page load times
- [ ] Check Google Search Console for indexing
- [ ] Respond to initial inquiries
- [ ] Send welcome email to all sign-ups
- [ ] Plan Phase 2 enhancements

---

## 8. RESOURCE REQUIREMENTS

### 8.1 Team Roles Needed

| Role | Responsibilities | Hours/Week | Notes |
|------|------------------|-----------|-------|
| **Project Lead** | Timeline, stakeholder updates, decisions | 5 | (Could be part-time) |
| **Content Writer** | Blog posts, resource descriptions, copy | 10-15 | Multiple people can share |
| **Designer/Marketer** | Brand implementation, visual assets, copywriting | 5-10 | Can be volunteer |
| **WordPress Admin** | Plugin management, hosting, tech setup | 5-8 | Can be volunteer or freelancer |
| **Graphic Designer** | Featured images, infographics, posters (optional) | 3-5 | Can be external contractor |

**Total: 28-43 hours/week average across team**

### 8.2 Budget Breakdown

| Item | Cost | Notes |
|------|------|-------|
| **Hosting (Bluehost/SiteGround)** | $3-5/mo | Nonprofit discount applied (via TechSoup) |
| **Domain (oceansalive.org)** | $0 | Already registered |
| **Mailchimp** | $0 | Free tier sufficient for Phase 1 |
| **YouTube** | $0 | Free unlimited uploads |
| **Cloudinary** | $0 | Free tier (25GB storage + CDN) |
| **Google Analytics** | $0 | Free |
| **Stripe** | 2.2% + $0.30/transaction | Only on donations (no monthly fee) |
| **Donorbox** | 1.5% fee only | Or use Stripe directly |
| **WPForms / Plugins** | $0 | Free versions sufficient |
| **IFTTT** | $0 | Free tier sufficient |
| **Email Domain** | $0-5/mo | Optional (use Gmail initially) |
| **SSL Certificate** | $0 | Included with hosting |
| **Freelancer/Contractor** | $1,000-3,000 | Optional for initial setup/design |
| | | |
| **TOTAL MONTHLY** | **$5-15** | (Can be $0 with all free tiers) |
| **TOTAL SETUP** | **$1,000-3,500** | (If hiring freelancer; $0 if internal) |

### 8.3 Tools & Software Needed

**Provided by Hosting/SaaS:**
- WordPress (free)
- MySQL database
- Mailchimp
- Google Analytics
- Stripe/PayPal
- YouTube
- Cloudinary
- IFTTT

**Optional (Can Find Free Versions):**
- Figma (free tier) for design mockups
- Canva (free tier) for graphics
- Adobe Stock / Unsplash for images

**No Engineering Tools Needed for Phase 1:**
- ❌ Custom APIs
- ❌ Python backe
nd
- ❌ CLI tools
- ❌ Version control (unless development team uses Git)
- ❌ MCPs or advanced integrations

---

## 9. SUCCESS METRICS & KPIs

### Month 1 Goals
- ✅ Website live at oceansalive.org
- ✅ 50+ pieces of content published
- ✅ 100+ newsletter subscribers
- ✅ 1+ successful donation received
- ✅ Mobile PageSpeed > 85

### Month 2-3 Goals
- ✅ 500+ newsletter subscribers
- ✅ 1,000+ unique monthly visitors
- ✅ 10+ donations received
- ✅ 25+ new blog subscribers
- ✅ Top 5 blog posts identified (by views/engagement)

### Success Dashboard (Tracked in Google Analytics)
- **Website Traffic**: Monthly unique visitors, page views, session duration
- **Content Performance**: Top blog posts, resource downloads, video views
- **Engagement**: Newsletter signup rate, conversion rates, social shares
- **Conversion**: Donation count, amount, repeat donors
- **Technical**: Page load time, mobile score, uptime %

---

## 10. RISKS & MITIGATION

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|-----------|
| **Content not ready on time** | Delayed launch | Medium | Prioritize 30 core posts; add more post-launch |
| **Hosting/Domain issues** | Days of downtime | Low | Use established provider (Bluehost); test domain before launch |
| **WordPress security breach** | Data loss, reputation damage | Low | Regular backups (plugin), keep WordPress updated, strong passwords |
| **Email deliverability issues** | Newsletters not received | Low | Use reputable email service (Mailchimp); monitor bounce rates |
| **Low traffic post-launch** | Lack of impact visibility | Medium | Plan Phase 2 content/SEO; promote via social media |
| **Donation payment failures** | Lost revenue | Low | Test payment processing before launch; have manual backup |
| **Team bandwidth** | Rushed, low-quality work | Medium | Define clear ownership; recruit volunteer contributors early |

---

## 11. TECH STACK RATIONALE: WHY NOT CUSTOM CODE?

### Why WordPress vs. Custom Python/FastAPI Backend?

**WordPress Advantages for Phase 1:**
- ✅ **No coding skills required** - non-technical volunteers can publish content
- ✅ **Time-to-market** - launch in 6-8 weeks vs. 3-6 months with custom code
- ✅ **Mature ecosystem** - 40,000+ plugins solving 95% of common needs
- ✅ **Affordable** - $5/mo vs. $200+/mo for custom backend infrastructure
- ✅ **Low mainenance** - hosting provider manages updates, security
- ✅ **Searchability** - built-in SEO, fast indexing by Google
- ✅ **Scalability** - can handle 5,000+ monthly visitors without optimization

**When to Consider Custom Code (Phase 2+):**
- Building API for mobile app or partner integrations
- Custom member/learner dashboards with tracking
- Advanced reporting or data analysis
- Real-time collaboration features
- Custom workflows specific to OAF

**Not Using:**
- ❌ Python backend (Django/FastAPI) - overkill for Phase 1, slows time-to-market
- ❌ React/Vue frontend - unnecessary complexity, hosting costs
- ❌ Custom APIs - no Phase 1 requirement
- ❌ MCPs - not yet mature for CMS workflows
- ❌ CLI tools - not needed when WordPress admin is browser-based

---

## 12. PHASE 2 ROADMAP (Tentative)

Once Phase 1 is stable (3+ months of operation):

**Potential Phase 2 Features:**
- Member system + login (for partner project tracking)
- Advanced resource filtering (search + faceted filters)
- Webinar/event management (calendar plugin)
- Advanced CRM for donor relationship tracking
- API for partner integrations
- Mobile app for community access
- Membership/paid content tiers
- Advanced analytics dashboard
- Integration with project management tools

---

## 13. SIGN-OFF & NEXT STEPS

### Next Steps After PRD Approval:
1. [ ] Stakeholder reviews and approves PRD
2. [ ] Budget and hosting provider finalized
3. [ ] Team roles assigned (writer, designer, content lead)
4. [ ] Design mockups created for homepage + key pages
5. [ ] Content audit: compile all existing blog posts + resources
6. [ ] Hosting setup begins (Week 1 of timeline)
7. [ ] Weekly standup meetings scheduled

### PRD Sign-Off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| **Product Owner** | [OAF Director] | _____ | _____ |
| **Project Lead** | [Name] | _____ | _____ |
| **Technical Lead** | [Name] | _____ | _____ |

---

## Appendix: Tools Reference

### Budget-Friendly Open Source Alternatives (All Free)
- CMS: WordPress, Ghost, Strapi
- Email: Ghost newsletters (built-in), Brevo (free tier)
- Analytics: Matomo (self-hosted), Plausible (open-source)
- Donation: GiveWP, Generous Donations plugin
- Forms: WPForms, Gravity Forms

### Nonprofit Discount Sources
- **TechSoup.org**: Microsoft, Adobe, QuickBooks discounts
- **Google.org**: Workspace, Cloud credits, Analytics 360
- **Meta**: Ad credits, business tools
- **Stripe**: Reduced fees for nonprofits
- **Mailchimp**: Nonprofit tier pricing

### Key WordPress Plugins (Phase 1 Essentials)
- Yoast SEO (free) - SEO optimization
- WPForms (free) - Contact forms
- Mailchimp for WordPress (free) - Email integration
- Social Snap (free) - Social share buttons
- WP Super Cache (free) - Performance
- Akismet (free) - Spam protection
- Elementor (free) - Page builder (optional)
- MonsterInsights (free) - Analytics integration

---

**PRD Version**: 1.0  
**Last Updated**: April 11, 2026  
**Document Status**: Ready for Review
