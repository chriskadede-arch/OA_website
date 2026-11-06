/**
 * Generates ../.pages.yml (the Pages CMS editing dashboard) from the files in content/.
 *
 * Run after adding a new content file, a new blog category, or new keys:
 *   npm run cms:config
 *
 * Every content/**\/*.json file becomes a form. Field types are guessed from the
 * values (image paths → image picker, long text → paragraph box, lists → repeatable
 * items). Technical values (colours, styling classes, ids/slugs used in web
 * addresses) are left out of the forms; `settings.content.merge: true` keeps them
 * in the file when an editor saves.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const REPO_PREFIX = 'oceans-alive'; // the site lives in this folder of the git repo
const OUT = path.join(ROOT, '..', '.pages.yml');
const readJson = (rel) => JSON.parse(fs.readFileSync(path.join(ROOT, rel), 'utf8'));

// ── Labels ──────────────────────────────────────────────────────────────────
const KEY_LABELS = {
  seo: 'Google title & description (SEO)',
  eyebrow: 'Small label above heading',
  image: 'Image',
  imageAlt: 'Image description (alt text, for screen readers)',
  link: 'Link (web address, e.g. /contact)',
  href: 'Link (web address, e.g. /contact)',
  linkText: 'Link text',
  buttonText: 'Button text',
  title: 'Title',
  heading: 'Heading',
  subheading: 'Subheading',
  smallHeading: 'Small heading',
  text: 'Text',
  label: 'Label',
  item: 'Bullet point',
  quote: 'Quote',
  quoteBy: 'Quote author',
  boldText: 'Bold text',
  italicText: 'Italic text',
  tooltip: 'Tooltip (shown when hovering)',
  placeholder: 'Hint text inside the form box',
  accessibleLabel: 'Screen-reader label',
  desc: 'Description',
  alt: 'Image description (alt text)',
  src: 'Image',
  cards: 'Cards',
  list: 'List',
  description: 'Description',
};
function humanize(key) {
  const m = /^(.*?)(\d+)$/.exec(key);
  const base = m ? m[1] : key;
  const num = m ? ` ${m[2]}` : '';
  if (KEY_LABELS[base]) return KEY_LABELS[base] + num;
  const words = base
    .replace(/_/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .toLowerCase()
    .trim();
  return words.charAt(0).toUpperCase() + words.slice(1) + num;
}

// ── Field guessing ─────────────────────────────────────────────────────────
const TECHNICAL_KEYS = /^(id|slug|gradient|color|colour|colors|textColor|bgColor|bg|iconBg|iconColor|accent|className|classes|ring|border|layout|compact|variant|style|hex|tag|tagColor|badgeColor|dotColor|barColor)$/i;
const isClassy = (s) => /(^|\s)(bg|text|from|to|via|border|ring|shadow|w|h|p|px|py|m|mx|my|rounded|grid|flex|gap|hover:[a-z]+)-/.test(s);
const isHex = (s) => /^#[0-9a-f]{3,8}$/i.test(s);
const isImagePath = (s) => /^\/images\/.+\.(jpe?g|png|webp|gif|svg|avif|jfif)$/i.test(s);
const IMAGE_KEY = /(image|logo|photo|picture|avatar|thumbnail|src|cover)$/i;

function isTechnical(key, value) {
  if (TECHNICAL_KEYS.test(key)) return true;
  if (typeof value === 'string' && (isClassy(value) || isHex(value))) return true;
  if (Array.isArray(value) && value.length && value.every((v) => typeof v === 'string' && (isClassy(v) || isHex(v)))) return true;
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const vals = Object.values(value);
    if (vals.length && vals.every((v) => typeof v === 'string' && (isClassy(v) || isHex(v)))) return true;
  }
  return false;
}

function stringField(key, samples) {
  const strs = samples.filter((s) => typeof s === 'string');
  if (strs.some(isImagePath) || (IMAGE_KEY.test(key) && strs.every((s) => s === '' || s.startsWith('/') || s.startsWith('http')))) {
    return { type: 'image' };
  }
  if (strs.some((s) => s.length > 90 || s.includes('\n'))) return { type: 'text' };
  return { type: 'string' };
}

/** Build a Pages CMS field for `key` from one or more sample values. */
function fieldFor(key, samples) {
  const present = samples.filter((v) => v !== undefined && v !== null);
  if (!present.length) return null;
  if (present.some((v) => isTechnical(key, v))) return null;
  const label = humanize(key);
  const first = present[0];

  if (key === 'accentColor') {
    return { name: key, label: 'Accent colour', type: 'select', options: { values: ['Turquoise', 'Sunshine yellow', 'Seafoam green'] } };
  }
  if (typeof first === 'boolean') return { name: key, label, type: 'boolean' };
  if (typeof first === 'number') return { name: key, label, type: 'number' };
  if (typeof first === 'string') return { name: key, label, ...stringField(key, present) };

  if (Array.isArray(first)) {
    const items = present.flat();
    if (!items.length) return null;
    if (items.every((v) => typeof v === 'string')) {
      if (items.every((v) => isClassy(v) || isHex(v))) return null;
      return { name: key, label, ...stringField(key, items), list: true };
    }
    if (items.every((v) => v && typeof v === 'object' && !Array.isArray(v))) {
      const fields = objectFields(items);
      if (!fields.length) return null;
      const summaryKey = fields.find((f) => ['string', 'text'].includes(f.type))?.name;
      return {
        name: key,
        label,
        type: 'object',
        list: summaryKey ? { collapsible: { collapsed: true, summary: `{fields.${summaryKey}}` } } : true,
        fields,
      };
    }
    return null;
  }

  if (typeof first === 'object') {
    // Objects whose keys are data (e.g. { "healthy-oceans": {...} }) become a list of named groups.
    const fields = objectFields(present);
    if (!fields.length) return null;
    return { name: key, label, type: 'object', fields };
  }
  return null;
}

function objectFields(objects) {
  const keys = [];
  for (const o of objects) for (const k of Object.keys(o)) if (!keys.includes(k)) keys.push(k);
  return keys.map((k) => fieldFor(k, objects.map((o) => o[k]))).filter(Boolean);
}

function fileEntry(rel, label, name) {
  const data = readJson(rel);
  const fields = Array.isArray(data) ? null : objectFields([data]);
  return {
    name: name ?? rel.replace(/^content\//, '').replace(/\.json$/, '').replace(/[^a-z0-9]+/gi, '-'),
    label,
    type: 'file',
    path: `${REPO_PREFIX}/${rel}`,
    format: 'json',
    fields,
  };
}

// ── Labels for each content file ──────────────────────────────────────────
const PAGE_LABELS = {
  home: 'Home page',
  about: 'About (overview)',
  'about-story': 'About › Our Story',
  'about-mission': 'About › Mission & Vision',
  'about-recognition': 'About › Recognition',
  'about-partners': 'About › Partners',
  'about-team': 'About › Our Team (page text)',
  blog: 'Blog page (text around the stories)',
  'get-involved': 'Get Involved',
  contact: 'Contact',
  donate: 'Donate',
  'donate-thank-you': 'Donate › Thank-you page',
  gallery: 'Gallery',
  resources: 'Resources',
  'kuruwitu-story': 'Kuruwitu Story',
  'our-work-programme-template': 'Our Work › text shared by the 4 programme pages',
};
const projects = readJson('content/data/projects.json').PROJECTS;
const projectTitle = (slug) => projects.find((p) => p.slug === slug || (slug === 'blue-ventures' && p.slug === 'blue-venture'))?.title;
const listJson = (dir) =>
  fs
    .readdirSync(path.join(ROOT, dir))
    .filter((f) => f.endsWith('.json') && !f.startsWith('_'))
    .sort()
    .map((f) => `${dir}/${f}`);
const base = (rel) => path.basename(rel, '.json');

const pageOrder = Object.keys(PAGE_LABELS);
const pageFiles = listJson('content/pages').sort((a, b) => {
  const ia = pageOrder.indexOf(base(a));
  const ib = pageOrder.indexOf(base(b));
  return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
});

const categories = readJson('content/blog-categories.json').categories.map((c) => c.name);

// ── Blog posts (Markdown files) ──────────────────────────────────────────
const blogCollection = {
  name: 'blog',
  label: 'Blog posts',
  type: 'collection',
  path: `${REPO_PREFIX}/content/blog`,
  format: 'yaml-frontmatter',
  filename: '{fields.title}.md',
  view: {
    fields: ['title', 'status', 'category', 'date'],
    primary: 'title',
    sort: ['date', 'title'],
    default: { sort: 'date', order: 'desc' },
  },
  fields: [
    { name: 'title', label: 'Title', type: 'string', required: true },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      default: 'Published',
      description: 'Published = live on the website. Coming soon = the card shows but the story says "being updated". Draft = hidden everywhere.',
      options: { values: ['Published', 'Coming soon', 'Draft'] },
    },
    { name: 'category', label: 'Category', type: 'select', required: true, options: { values: categories } },
    { name: 'date', label: 'Date', type: 'date', required: true, options: { format: 'yyyy-MM-dd' }, description: 'Newest stories appear first.' },
    {
      name: 'highlight',
      label: 'Highlight',
      type: 'select',
      default: 'None',
      description: 'Show this story as the big featured card on its category page, or on the main blog page.',
      options: { values: ['None', 'Top story on its category page', 'Top story on the main blog page'] },
    },
    { name: 'excerpt', label: 'Short summary (shown on story cards)', type: 'text', required: true },
    { name: 'image', label: 'Cover photo', type: 'image', required: true },
    { name: 'imageAlt', label: 'Cover photo description (alt text)', type: 'string' },
    { name: 'readTime', label: 'Reading time', type: 'string', description: 'Leave empty to calculate it automatically (e.g. "5 min read").' },
    { name: 'stats', label: 'Key numbers (short pills, e.g. "120 women")', type: 'string', list: true },
    {
      name: 'body',
      label: 'Story',
      type: 'rich-text',
      description: 'Write the story. Use the quote button for pull quotes (put "— Name" on the last line), and the image button for photos.',
      options: { format: 'markdown' },
    },
  ],
};

const config = {
  media: {
    input: `${REPO_PREFIX}/public/images`,
    output: '/images',
    categories: ['image'],
    rename: 'safe',
  },
  settings: {
    content: { merge: true },
  },
  content: [
    blogCollection,
    fileEntry('content/blog-categories.json', 'Blog categories', 'blog-categories'),
    {
      name: 'pages',
      label: 'Pages',
      type: 'group',
      items: pageFiles.map((rel) => fileEntry(rel, PAGE_LABELS[base(rel)] ?? humanize(base(rel)), `page-${base(rel)}`)),
    },
    {
      name: 'our-work',
      label: 'Our Work (4 programmes)',
      type: 'group',
      items: [fileEntry('content/data/our-work-programmes.json', 'Programmes (all text for the 4 programme pages)', 'our-work-programmes')],
    },
    {
      name: 'projects',
      label: 'Projects',
      type: 'group',
      items: [
        fileEntry('content/data/projects.json', 'Project cards (homepage carousel)', 'project-cards'),
        ...listJson('content/projects').map((rel) =>
          fileEntry(rel, `Project page › ${projectTitle(base(rel)) ?? humanize(base(rel))}`, `project-${base(rel)}`),
        ),
      ],
    },
    {
      name: 'site',
      label: 'Site-wide',
      type: 'group',
      items: [
        fileEntry('content/data/site-details.json', 'Contact details & social media', 'site-details'),
        fileEntry('content/data/team.json', 'Team members', 'team'),
        fileEntry('content/data/impact-stats.json', 'Impact numbers', 'impact-stats'),
        fileEntry('content/data/timeline.json', 'Timeline (Our Story)', 'timeline'),
        fileEntry('content/data/partners.json', 'Partner logos', 'partners'),
        fileEntry('content/data/principles.json', 'Core principles (Mission page)', 'principles'),
        fileEntry('content/site/menu.json', 'Top menu', 'menu'),
        fileEntry('content/site/footer.json', 'Footer', 'footer'),
        fileEntry('content/site/newsletter-form.json', 'Newsletter sign-up form', 'newsletter-form'),
        fileEntry('content/site/projects-carousel.json', 'Projects carousel (buttons)', 'projects-carousel'),
        fileEntry('content/site/partner-carousel.json', 'Partner carousel', 'partner-carousel'),
      ],
    },
    {
      name: 'old-pages',
      label: 'Older pages (not in the menu)',
      type: 'group',
      items: [
        fileEntry('content/data/old-programmes.json', 'Old programme list (/programmes)', 'old-programmes'),
        ...listJson('content/old-pages').map((rel) => fileEntry(rel, `Old page › ${humanize(base(rel))}`, `old-${base(rel)}`)),
      ],
    },
  ],
};

// Every file must be on the dashboard (catches new files nobody added above).
const listed = new Set();
const walk = (entries) => entries.forEach((e) => (e.items ? walk(e.items) : listed.add(e.path)));
walk(config.content);
const missing = [];
const scan = (dir) =>
  fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true }).forEach((d) => {
    const rel = `${dir}/${d.name}`;
    if (d.isDirectory()) return rel !== 'content/blog' && scan(rel);
    if (d.name.endsWith('.json') && !listed.has(`${REPO_PREFIX}/${rel}`)) missing.push(rel);
  });
scan('content');
if (missing.length) {
  console.error('These content files are not on the dashboard yet - add them in scripts/generate-cms-config.mjs:\n  ' + missing.join('\n  '));
  process.exit(1);
}

const header =
  '# Pages CMS dashboard configuration (https://pagescms.org)\n' +
  '# GENERATED by oceans-alive/scripts/generate-cms-config.mjs - edit that script, then run `npm run cms:config`.\n\n';
fs.writeFileSync(OUT, header + yaml.dump(config, { lineWidth: 120, noRefs: true }));
const count = (entries) => entries.reduce((n, e) => n + (e.items ? count(e.items) : 1), 0);
console.log(`Wrote ${path.relative(process.cwd(), OUT)} with ${count(config.content)} editable sections.`);
