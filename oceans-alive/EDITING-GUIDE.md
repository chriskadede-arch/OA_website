# Oceans Alive website — Editing Guide

A map of where everything lives, so you can find and change any part of the site quickly.

> **Text, photos and blog posts are now edited without code**, in the Pages CMS dashboard
> (https://app.pagescms.org, or `/admin` on the live site). Every save is published to GoDaddy
> automatically by `.github/workflows/deploy-godaddy.yml`. This guide is for **developers**
> changing layout, design or adding new pages.

---

## 1. How to find things (three search words)

Every file has a labelled header at the top, and every part of a page has a banner above it. In VS Code, press **Ctrl+Shift+F** (search all files) or **Ctrl+F** (search this file) and type:

| Search for | Finds | Example |
|---|---|---|
| `PAGE:` | The top of every page file, with its web address and a numbered list of its sections | `PAGE: About › Our Team` |
| `SECTION` | The banner above each part of a page (hero, stats, call to action…) | `SECTION 2 · Team grid` |
| `DATA:` | Each group of data re-exported by `lib/constants.ts` | `DATA: Team  → used on /about/team` |
| `PAGE.` | Where a page shows a piece of editable text (the value lives in its JSON file) | `{PAGE.hero.title}` |

In the Navbar file, search `PART` to jump between the menu links, the dropdowns and the header layout.

A section banner looks like this:

```tsx
{/* ══════════════════════════════════════════════════════════════════
    SECTION 3 · Community stewards band
    ══════════════════════════════════════════════════════════════════ */}
<section ...>
```

---

## 2. Folder map

```
oceans-alive/
├── app/                     ← one folder per web address; the page itself is page.tsx
│   ├── page.tsx             ← Home page
│   ├── layout.tsx           ← Wraps every page (header + page + footer)
│   ├── globals.css          ← Site-wide styles (incl. phone/tablet fixes at the bottom)
│   ├── (main)/              ← Most pages (the "(main)" part is NOT in the web address)
│   └── projects/            ← The individual project pages
├── components/common/       ← Pieces shared by many pages (Navbar, Footer, carousels…)
├── content/                 ← ALL EDITABLE WORDS (edited in Pages CMS, or by hand)
│   ├── blog/*.md            ← One file per blog post (Markdown)
│   ├── blog-categories.json ← Blog category pages
│   ├── pages/*.json         ← Text, images and links of each page (home.json, contact.json…)
│   ├── projects/*.json      ← Text of each project page
│   ├── data/*.json          ← Shared data: team, partners, timeline, impact stats, contacts,
│   │                          project cards, Our Work programmes
│   ├── site/*.json          ← Menu, footer, newsletter form
│   └── old-pages/*.json     ← Older pages not linked from the menu
├── lib/                     ← Code that loads the content (blog.ts, constants.ts, our-work.ts…)
├── scripts/generate-cms-config.mjs ← Builds ../.pages.yml (the editing dashboard)
├── public/images/           ← All photos (team photos in public/images/team/)
└── godaddy-upload/          ← Built website, created by the build command (don't edit)
```

---

## 3. Web address → file

| Web address | File |
|---|---|
| `/` (home) | `app/page.tsx` |
| `/about` | `app/(main)/about/page.tsx` |
| `/about/story` | `app/(main)/about/story/page.tsx` |
| `/about/mission` | `app/(main)/about/mission/page.tsx` |
| `/about/recognition` | `app/(main)/about/recognition/page.tsx` |
| `/about/partners` | `app/(main)/about/partners/page.tsx` |
| `/about/team` | `app/(main)/about/team/page.tsx` (people are in `lib/constants.ts`) |
| `/programmes` | `app/(main)/programmes/page.tsx` |
| `/programmes/<name>` | `app/(main)/programmes/[slug]/page.tsx` — one template for all 14 |
| `/programs/learning-leadership` | `app/(main)/programs/learning-leadership/page.tsx` (Objective 1) |
| `/programs/ocean-recovery` | `app/(main)/programs/ocean-recovery/page.tsx` (Objective 2) |
| `/programs/she` | `app/(main)/programs/she/page.tsx` (Objective 3) |
| `/programs/research-innovation` | `app/(main)/programs/research-innovation/page.tsx` (Objective 4) |
| `/programs/governance-fisheries` | `app/(main)/programs/governance-fisheries/page.tsx` |
| `/programs/<other>` | `app/(main)/programs/[slug]/page.tsx` — text in `lib/our-work.ts` |
| `/projects/<name>` | `app/projects/<name>/page.tsx` — one file per project |
| `/partnerships/blue-ventures` | `app/(main)/partnerships/blue-ventures/page.tsx` |
| `/partnerships/coral-guardian` | `app/(main)/partnerships/coral-guardian/page.tsx` |
| `/learn/kuruwitu` | `app/(main)/learn/kuruwitu/page.tsx` |
| `/blog` | `app/(main)/blog/page.tsx` |
| `/blog/<story>` | `app/(main)/blog/[slug]/page.tsx` — stories in `lib/constants.ts` |
| `/blog/category/<name>` | `app/(main)/blog/category/[slug]/page.tsx` |
| `/gallery` | `app/(main)/gallery/page.tsx` |
| `/resources` | `app/(main)/resources/page.tsx` |
| `/get-involved` | `app/(main)/get-involved/page.tsx` |
| `/contact` | `app/(main)/contact/page.tsx` |
| `/donate` | `app/(main)/donate/page.tsx` |
| `/donate/success` | `app/donate/success/page.tsx` |
| Header / main menu | `components/common/Navbar.tsx` |
| Footer | `components/common/Footer.tsx` |

Folders named `[slug]` are **templates**: one file draws many pages, and each page's text comes from a list (named in that file's header).

Each page file's header names its content file (`Page text, images and links (editable in Pages CMS) → content/pages/….json`). In the page code, `PAGE.section.key` reads from that file.

---

## 4. Content files and the editing dashboard

- **Changing words or photos:** edit the JSON/Markdown in `content/` (or use the dashboard). Don't type text into the `.tsx` files any more; put it in the page's JSON and reference it as `PAGE.section.key`.
- **Blog posts:** `content/blog/<web-address>.md`. Front matter fields: `title`, `status` (`Published` / `Coming soon` / `Draft`), `category` (must match a name in `content/blog-categories.json`), `date` (YYYY-MM-DD, newest first), `highlight`, `excerpt`, `image`, `imageAlt`, `readTime` (optional, auto-calculated), `stats`. The body is Markdown; `lib/blog.ts` loads posts and `components/common/PostBody.tsx` styles them.
- **Team members:** `content/data/team.json`. `hidden: true` hides someone (currently **Eunice Mose**, waiting for a photo). Photos go in `public/images/team/`.
- **Adding a new page or a new content file:** create `content/<folder>/<name>.json`, import it in the page (`import PAGE from '@/content/…json'`), add a line for it in `scripts/generate-cms-config.mjs`, then run `npm run cms:config` to update `../.pages.yml`. The script refuses to run if any content file is missing from the dashboard.
- **New blog category:** add it to `content/blog-categories.json`, then run `npm run cms:config` so it appears in the category drop-down.
- **Colours and styling classes** stored in the JSON files (e.g. project `gradient`) are hidden from editors; `tailwind.config.js` scans `content/**/*.json` so those classes still work.

---

## 5. Build and upload

**Normally nothing to do:** every push to `main` (including every Save in the dashboard) runs `.github/workflows/deploy-godaddy.yml`, which builds the site and uploads the changed files to GoDaddy (needs the `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` secrets in GitHub). Progress: GitHub → repo → **Actions**.

Manual build and upload (fallback):

1. Open a terminal in this `oceans-alive` folder.
2. Run `npm run build:godaddy`.
3. The finished website appears in `godaddy-upload/`.
4. Upload **the contents** of `godaddy-upload/` to `public_html` on GoDaddy (see `UPLOAD-INSTRUCTIONS.txt` inside that folder).

To preview while editing, run `npm run dev` and open http://localhost:3000.

---

## 6. Phone and tablet layout rules

Keep these in mind when adding new sections, so the site stays mobile-friendly:

- **Screen-width breakpoints** (Tailwind prefixes): no prefix = phones · `sm:` ≥ 640px · `md:` ≥ 768px (tablets) · `lg:` ≥ 1024px (desktop menu appears) · `xl:` ≥ 1280px.
- **The header is fixed** and about **114px tall** below 1024px and **130px tall** from 1024px up.
  - Page heroes need at least `pt-36 md:pt-40` top padding, or their first line hides under the header.
  - Anything `sticky` must use `top-[112px] lg:top-[128px]`.
- **Grids of numbers or cards:** start at 1–2 columns on phones, then add more (e.g. `grid-cols-2 sm:grid-cols-3 lg:grid-cols-6`). Never start with 3 or more.
- **Big headings** (`text-4xl` and larger) shrink automatically on phones; see the bottom of `app/globals.css`.
