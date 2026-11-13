/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Gallery
 * URL:  /gallery
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Photo grid + lightbox
 *
 * Where the text/data lives:
 *   • GALLERY_CATEGORIES  →  lib/constants.ts
 *   • LOCAL_PREVIEWS  →  top of this file
 *   • STATIC_GALLERY  →  top of this file
 * Page text, images and links (editable in Pages CMS)  →  content/pages/gallery.json
 */
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GALLERY_CATEGORIES } from '@/lib/constants';
import { GalleryItem } from '@/lib/types';

import PAGE from '@/content/pages/gallery.json';

const LOCAL_PREVIEWS = PAGE.LOCAL_PREVIEWS;

// Short quotes from the blog stories, shown in the space under each big photo.
const QUOTES = PAGE.QUOTES;

// All gallery photos from Display Photos and images folders
const STATIC_GALLERY: GalleryItem[] = PAGE.STATIC_GALLERY as unknown as GalleryItem[];

export default function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<'photo' | 'video' | null>(null);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    fetchGallery();
  }, [selectedCategory, selectedType]);

  // The photos and videos live in content/pages/gallery.json (edited in Pages CMS).
  // The Type and Category buttons filter that list right here in the browser.
  const fetchGallery = () => {
    let data = STATIC_GALLERY.filter((item) => item.is_published !== false);
    if (selectedType) data = data.filter((item) => item.type === selectedType);
    if (selectedCategory) data = data.filter((item) => item.category === selectedCategory);
    setItems(data);
    setLoading(false);
  };

  const extractYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight pt-36 pb-20 md:pt-40 md:pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center mb-12">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-3">
                <span className="w-8 h-px bg-ocean-turquoise inline-block" />{PAGE.hero.eyebrow}</p>
              <h1 className="font-poppins font-bold text-white text-5xl md:text-6xl leading-tight mb-4">{PAGE.hero.title}<br />
                <span className="text-ocean-turquoise">{PAGE.hero.label}</span>
              </h1>
              <p className="text-white/65 text-lg max-w-xl leading-relaxed">{PAGE.hero.text}</p>
            </div>
          </div>

          {/* Photo mosaic in hero: one large photo plus four smaller ones, filling the
              whole block with no gaps (2 columns on phones, 4 on larger screens). */}
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[200px] gap-2 rounded-2xl overflow-hidden">
            {LOCAL_PREVIEWS.slice(0, 5).map((p, i) => (
              <div key={p.src} className={`relative overflow-hidden ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                <Image src={p.src} alt={p.alt} fill sizes={i === 0 ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'} className="object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-ocean-midnight/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Photo grid + lightbox
          ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-6 mb-10 pb-8 border-b border-gray-100">
            {/* Type */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-1">{PAGE.photoGridLightbox.eyebrow}</span>
              {[
                { label: 'All', value: null as null },
                { label: 'Photos', value: 'photo' as const },
                { label: 'Videos', value: 'video' as const },
              ].map((t) => (
                <button
                  key={String(t.value)}
                  onClick={() => setSelectedType(t.value)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                    selectedType === t.value
                      ? 'bg-ocean-midnight border-ocean-midnight text-white'
                      : 'border-gray-200 text-gray-600 hover:border-ocean-midnight/40'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-gray-200 hidden sm:block" />

            {/* Category */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-1">{PAGE.photoGridLightbox.eyebrow2}</span>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                  selectedCategory === null
                    ? 'bg-ocean-turquoise border-ocean-turquoise text-white'
                    : 'border-gray-200 text-gray-600 hover:border-ocean-turquoise/40'
                }`}
              >{PAGE.photoGridLightbox.buttonText}</button>
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                    selectedCategory === cat
                      ? 'bg-ocean-turquoise border-ocean-turquoise text-white'
                      : 'border-gray-200 text-gray-600 hover:border-ocean-turquoise/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className={`rounded-xl bg-gray-100 animate-pulse ${i % 5 === 0 ? 'h-64' : 'h-44'}`} />
              ))}
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-24">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 opacity-30">
                <Image src={PAGE.photoGridLightbox.image} alt="" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-poppins font-bold text-gray-400 mb-2">{PAGE.photoGridLightbox.subheading}</h3>
              <p className="text-gray-400 text-sm">{PAGE.photoGridLightbox.text}</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {items.map((item, i) => {
                const big = i % 7 === 0;
                const quote = big && QUOTES.length ? QUOTES[Math.floor(i / 7) % QUOTES.length] : null;
                const media = (
                  <>
                    {item.type === 'photo' && item.image_url ? (
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : item.type === 'video' ? (
                      <div className="relative w-full h-full bg-gradient-to-br from-ocean-midnight to-[#0a4f7a] flex items-center justify-center">
                        {(item.image_url || (item.video_url && extractYouTubeId(item.video_url))) && (
                          <img
                            src={item.image_url || `https://img.youtube.com/vi/${extractYouTubeId(item.video_url || '')}/hqdefault.jpg`}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        )}
                        <div className="relative w-14 h-14 rounded-full bg-ocean-midnight/60 flex items-center justify-center group-hover:bg-ocean-turquoise transition-colors">
                          <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    ) : null}

                    {/* Caption, always visible */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean-midnight/90 via-ocean-midnight/50 to-transparent pt-10">
                      <div className="p-3 w-full">
                        <p className="text-white text-[11px] font-semibold line-clamp-2 leading-tight">{item.title}</p>
                        <div className="flex items-center justify-between gap-2 mt-1">
                          <p className="text-white/60 text-[8px] uppercase tracking-widest">{item.category}</p>
                          {item.link && (
                            <Link
                              href={item.link}
                              onClick={(e) => e.stopPropagation()}
                              className="text-ocean-turquoise text-[8px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 hover:text-white transition-opacity"
                            >
                              {item.linkText || 'Learn more'} →
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>

                    {item.type === 'video' && (
                      <div className="absolute top-3 right-3 bg-white/15 text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">{PAGE.photoGridLightbox.eyebrow3}</div>
                    )}
                  </>
                );

                if (!big) {
                  return (
                    <div key={item.id} className="relative overflow-hidden rounded-xl cursor-pointer group h-44" onClick={() => setSelectedItem(item)}>
                      {media}
                    </div>
                  );
                }
                // Big tile: same photo size as before (h-64); the space below it holds a quote.
                return (
                  <div key={item.id} className="col-span-2 row-span-2 flex flex-col gap-3">
                    <div className="relative overflow-hidden rounded-xl cursor-pointer group h-64 shrink-0" onClick={() => setSelectedItem(item)}>
                      {media}
                    </div>
                    {quote && (
                      <Link
                        href={quote.link}
                        className="group/q flex-1 rounded-xl bg-white px-5 py-3 flex flex-col justify-center"
                      >
                        <p className="font-poppins font-bold text-ocean-midnight text-sm md:text-base leading-snug line-clamp-3">
                          <span className="text-ocean-turquoise">&ldquo;</span>{quote.text}<span className="text-ocean-turquoise">&rdquo;</span>
                        </p>
                        <p className="text-ocean-turquoise text-[10px] font-bold uppercase tracking-widest mt-1.5 group-hover/q:text-ocean-midnight transition-colors">
                          {quote.by} →
                        </p>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-ocean-midnight/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {selectedItem.type === 'photo' && selectedItem.image_url ? (
                <img src={selectedItem.image_url} alt={selectedItem.title} className="w-full h-auto max-h-[60vh] object-cover rounded-t-2xl" />
              ) : selectedItem.type === 'video' && selectedItem.video_url ? (
                <iframe
                  width="100%"
                  height="420"
                  src={`https://www.youtube-nocookie.com/embed/${extractYouTubeId(selectedItem.video_url)}`}
                  title={selectedItem.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-t-2xl"
                />
              ) : null}

              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 w-9 h-9 bg-ocean-midnight/70 hover:bg-ocean-midnight text-white rounded-xl flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                  selectedItem.type === 'photo' ? 'bg-ocean-turquoise/10 text-ocean-turquoise' : 'bg-ocean-midnight/10 text-ocean-midnight'
                }`}>
                  {selectedItem.type === 'photo' ? 'Photo' : 'Video'}
                </span>
                <span className="text-xs text-gray-400">{selectedItem.category}</span>
              </div>
              <h2 className="text-2xl font-poppins font-bold text-ocean-midnight mb-2">{selectedItem.title}</h2>
              {selectedItem.description && (
                <p className="text-gray-600 leading-relaxed">{selectedItem.description}</p>
              )}
              {selectedItem.link && (
                <Link
                  href={selectedItem.link}
                  className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-ocean-turquoise text-white font-bold rounded-xl text-sm hover:bg-ocean-midnight transition-colors"
                >
                  {selectedItem.linkText || 'Learn more'} →
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
