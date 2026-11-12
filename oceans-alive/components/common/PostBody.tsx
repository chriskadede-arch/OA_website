/**
 * ══════════════════════════════════════════════════════════════════
 * POST BODY (turns a blog post's Markdown text into styled HTML)
 * ══════════════════════════════════════════════════════════════════
 * Editors write the article in Pages CMS. This decides how it looks:
 *   • paragraphs, headings, lists and links
 *   • a photo on its own line → wide rounded photo shown whole; its "title" becomes the caption
 *   • a quote → big pull quote; a last line starting with "—" becomes the attribution
 *   • a YouTube link on its own line → an embedded video player
 */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

/** The video id from any common YouTube link (youtu.be/…, watch?v=…, shorts/…, embed/…). */
function youTubeId(href: string): string | null {
  const m = /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/))([A-Za-z0-9_-]{11})/.exec(href);
  return m ? m[1] : null;
}

const components: Components = {
  p({ node, children }) {
    // A paragraph that only holds a photo is rendered as a figure (no <p> around it).
    const only = node?.children?.length === 1 ? node.children[0] : null;
    if (only && only.type === 'element' && only.tagName === 'img') return <>{children}</>;
    // A paragraph that only holds a YouTube link becomes a video player.
    const href = only && only.type === 'element' && only.tagName === 'a' ? String(only.properties?.href ?? '') : '';
    const videoId = href ? youTubeId(href) : null;
    if (videoId) {
      return (
        <span className="block my-10 -mx-6 md:-mx-12">
          <span className="block relative w-full rounded-2xl overflow-hidden bg-ocean-midnight" style={{ aspectRatio: '16 / 9' }}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}`}
              title="YouTube video"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </span>
        </span>
      );
    }
    const text = node?.children?.length === 1 && node.children[0].type === 'text' ? node.children[0].value : '';
    if (/^[—–-]\s/.test(text)) {
      return <cite className="block text-sm text-ocean-turquoise font-semibold not-italic">{children}</cite>;
    }
    return <p className="text-gray-700 leading-relaxed mb-6 text-lg">{children}</p>;
  },
  img({ src, alt, title }) {
    return (
      <span className="block my-10 -mx-6 md:-mx-12">
        {/* Whole photo at its own shape, so faces are never cropped off. */}
        <span className="block rounded-2xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt ?? ''} className="block w-full h-auto" loading="lazy" />
        </span>
        {title && <span className="block text-xs text-gray-400 mt-3 italic px-6 md:px-12">{title}</span>}
      </span>
    );
  },
  blockquote({ children }) {
    return (
      <blockquote className="my-10 pl-6 border-l-4 border-ocean-turquoise [&>p]:text-xl [&>p]:md:text-2xl [&>p]:font-poppins [&>p]:font-bold [&>p]:text-ocean-midnight [&>p]:leading-snug [&>p]:mb-3 [&>p]:italic">
        {children}
      </blockquote>
    );
  },
  h2({ children }) {
    return <h2 className="text-2xl md:text-3xl font-poppins font-bold text-ocean-midnight mt-12 mb-5 leading-tight">{children}</h2>;
  },
  h3({ children }) {
    return <h3 className="text-xl font-poppins font-bold text-ocean-midnight mt-10 mb-4 leading-snug">{children}</h3>;
  },
  ul({ children }) {
    return <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 text-lg leading-relaxed">{children}</ul>;
  },
  ol({ children }) {
    return <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700 text-lg leading-relaxed">{children}</ol>;
  },
  a({ href, children }) {
    const external = href?.startsWith('http');
    return (
      <a
        href={href}
        className="text-ocean-turquoise font-semibold underline underline-offset-2 hover:text-ocean-midnight"
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  },
  strong({ children }) {
    return <strong className="font-bold text-ocean-midnight">{children}</strong>;
  },
};

export default function PostBody({ markdown }: { markdown: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {markdown}
    </ReactMarkdown>
  );
}
