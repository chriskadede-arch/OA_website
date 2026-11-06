# Oceans Alive website — Editing Guide

A map of where everything lives, so you can find and change any part of the site quickly.

---

## 1. How to find things (three search words)

Every file has a labelled header at the top, and every part of a page has a banner above it. In VS Code, press **Ctrl+Shift+F** (search all files) or **Ctrl+F** (search this file) and type:

| Search for | Finds | Example |
|---|---|---|
| `PAGE:` | The top of every page file, with its web address and a numbered list of its sections | `PAGE: About › Our Team` |
| `SECTION` | The banner above each part of a page (hero, stats, call to action…) | `SECTION 2 · Team grid` |
| `DATA:` | Each group of text/numbers in `lib/constants.ts` | `DATA: Team  → used on /about/team` |

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
├── lib/                     ← Text and numbers used across the site
│   ├── constants.ts         ← MAIN CONTENT FILE: team, stats, contacts, blog stories…
│   ├── projects-data.ts     ← Project cards (home carousel + menu)
│   └── our-work.ts          ← "Our Work" programme areas
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

---

## 4. Common edits

### Team members — `lib/constants.ts`, search `DATA: Team`
- **Add a person:** copy an existing `{ … }` block, change the name, role and bio, and put it where they should appear (the page shows people in list order).
- **Add or replace a photo:** put the image in `public/images/team/` (a square crop around 800×800 works best), then set `image: '/images/team/their-file.jpg'`. With `image: null`, the tile shows their initials instead.
- **Hide someone without deleting them:** add `hidden: true,`. Delete that line to show them again.
  - *Currently hidden:* **Eunice Mose** (waiting for a photo).
- **Headcounts** ("18 specialists" etc.) are typed in `app/(main)/about/team/page.tsx`, so update them there.

### Impact numbers (120 km², 25,000+ corals…) — `lib/constants.ts`, search `DATA: Impact stats`
These appear on the home page, `/about`, `/about/story` and `/donate`. Some pages also have their own numbers typed directly in that page's hero section.

### Phone, email, address — `lib/constants.ts`, search `DATA: Contact info`
The top bar and the phone menu in `components/common/Navbar.tsx` (search `SECTION 1` and `SECTION 7`) also have the phone and email typed in.

### Main menu and dropdowns — `components/common/Navbar.tsx`, search `PART 3`

### Footer links and social icons — `components/common/Footer.tsx`
Social links are in the `SOCIAL` list at the top; each column has a `SECTION` banner. The **Programmes** column automatically shows the same four programmes as the "Our Work" menu; to change them, edit `lib/our-work.ts` and both update together.

### "All Projects" carousel cards — `lib/projects-data.ts`
Each project's full page is in `app/projects/<name>/page.tsx`.

### Blog stories — `lib/constants.ts`, search `DATA: Blog stories`

### Photos in general
All images live in `public/images/`. A file at `public/images/kids.jpg` is used in code as `/images/kids.jpg`.

---

## 5. Build and upload

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
