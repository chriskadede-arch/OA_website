/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Admin › link to the website editor (Pages CMS)
 * URL:  /admin
 * ══════════════════════════════════════════════════════════════════
 * Content is edited in Pages CMS (https://app.pagescms.org), which saves to
 * GitHub; GitHub then rebuilds the site and uploads it to GoDaddy.
 * This page is just a bookmarkable doorway for the team.
 */
import Link from 'next/link';

export const metadata = {
  title: 'Edit the website',
  robots: { index: false, follow: false },
};

const EDITOR_URL = 'https://app.pagescms.org';

export default function AdminPage() {
  return (
    <section className="bg-ocean-midnight min-h-screen pt-40 pb-24">
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-5">For the Oceans Alive team</p>
        <h1 className="font-poppins font-bold text-white text-4xl md:text-5xl leading-tight mb-6">Edit the website</h1>
        <p className="text-white/70 text-lg leading-relaxed mb-10">
          Blog posts, page text, photos, projects, team members and partner logos are all edited in the website
          editor. Log in with the email address you were invited with.
        </p>

        <a
          href={EDITOR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-ocean-turquoise text-white font-bold rounded-xl hover:bg-white hover:text-ocean-midnight transition-all"
        >
          Open the website editor →
        </a>

        <ol className="mt-14 space-y-5 text-white/70 leading-relaxed list-decimal pl-5">
          <li>Open the editor and choose the <strong className="text-white">Oceans Alive website</strong>.</li>
          <li>Pick what to change from the menu on the left (for example <em>Blog posts</em> or <em>Pages</em>).</li>
          <li>Make your changes and press <strong className="text-white">Save</strong>.</li>
          <li>The live website updates by itself, usually within 5 minutes. Refresh the page to see it.</li>
        </ol>

        <p className="mt-14 text-white/40 text-sm">
          No invitation yet? Ask the website administrator to invite your email address.{' '}
          <Link href="/" className="text-ocean-turquoise hover:underline">
            Back to the website
          </Link>
        </p>
      </div>
    </section>
  );
}
