/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Resources (toolkits, videos, press)
 * URL:  /resources
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Tab bar (Toolkits / Videos / What Others Say)
 *   3. Videos tab
 *   4. What Others Say tab (press articles)
 *   5. Toolkits & Downloads tab
 *   6. Contact strip
 *
 * Where the text/data lives:
 *   • RESOURCE_CATEGORIES  →  lib/constants.ts
 *   • FEATURED_VIDEOS  →  top of this file
 *   • EXTERNAL_ARTICLES  →  top of this file
 * Page text, images and links (editable in Pages CMS)  →  content/pages/resources.json
 */
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RESOURCE_CATEGORIES } from '@/lib/constants';
import { Resource } from '@/lib/types';
import { apiClient } from '@/lib/api-client';

import PAGE from '@/content/pages/resources.json';

const FILE_TYPE_COLORS: Record<string, string> = PAGE.FILE_TYPE_COLORS as unknown as Record<string, string>;

// FEATURED VIDEOS - Add your YouTube/Vimeo links here
const FEATURED_VIDEOS = PAGE.FEATURED_VIDEOS;

// EXTERNAL ARTICLES - What others wrote about Oceans Alive (REAL ARTICLES FOUND WITH REAL IMAGES)
const EXTERNAL_ARTICLES = PAGE.EXTERNAL_ARTICLES;

export default function Resources() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'downloads' | 'videos' | 'articles'>('downloads');

  useEffect(() => {
    fetchResources();
  }, [selectedCategory, searchQuery]);

  const fetchResources = async () => {
    setLoading(true);
    try {
      const response = await apiClient.getResources(1, 20, selectedCategory || undefined);
      setResources(response.data || []);
    } catch {
      setResources([]);
    } finally {
      setLoading(false);
    }
  };

  const filtered = searchQuery
    ? resources.filter((r) =>
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : resources;

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-midnight via-[#0a4f7a] to-[#1a6b5a] opacity-90" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-ocean-turquoise/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-ocean-turquoise rounded-full animate-pulse" />
              <span className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest">{PAGE.hero.eyebrow}</span>
            </div>

            <h1 className="font-poppins font-bold text-white text-6xl md:text-7xl lg:text-8xl leading-tight mb-8">{PAGE.hero.title}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-turquoise via-green-400 to-ocean-seafoam">{PAGE.hero.label}</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-12 max-w-3xl mx-auto">{PAGE.hero.text}</p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                {
                  svg: <svg className="w-10 h-10 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
                  label: 'Toolkits & Guides',
                  value: '25+'
                },
                {
                  svg: <svg className="w-10 h-10 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
                  label: 'Impact Videos',
                  value: '15+'
                },
                {
                  svg: <svg className="w-10 h-10 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>,
                  label: 'Press & Articles',
                  value: '30+'
                },
                {
                  svg: <svg className="w-10 h-10 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                  label: 'Case Studies',
                  value: '10+'
                },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <div className="mb-2">{stat.svg}</div>
                  <div className="text-2xl font-poppins font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Tab bar (Toolkits / Videos / What Others Say)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white pt-6 md:pt-8 sticky top-[112px] lg:top-[128px] z-40 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center sm:justify-center sm:gap-3">
            {[
              {
                id: 'downloads',
                label: 'Toolkits & Downloads',
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>,
                count: filtered.length
              },
              {
                id: 'videos',
                label: 'Videos & Films',
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
                count: FEATURED_VIDEOS.length
              },
              {
                id: 'articles',
                label: 'What Others Say',
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>,
                count: EXTERNAL_ARTICLES.length
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`group relative min-w-0 px-2 py-3 sm:px-6 sm:py-4 rounded-t-2xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-br from-ocean-midnight to-ocean-turquoise text-white shadow-lg scale-105'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-ocean-midnight'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
                  <div className={activeTab === tab.id ? 'text-white' : 'text-ocean-turquoise'}>{tab.icon}</div>
                  <div className="text-center sm:text-left leading-tight">
                    <div>{tab.label}</div>
                    <div className={`text-xs font-normal ${activeTab === tab.id ? 'text-white/70' : 'text-gray-400'}`}>
                      {tab.count} {tab.count === 1 ? 'item' : 'items'}
                    </div>
                  </div>
                </div>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-ocean-turquoise rounded-t-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Videos tab
          ══════════════════════════════════════════════════════════════════ */}
      {activeTab === 'videos' && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-poppins font-bold text-ocean-midnight mb-4">{PAGE.videosTab.heading}</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">{PAGE.videosTab.text}</p>
            </div>

            {/* Featured Video (Large) */}
            <div className="mb-12">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer hover:shadow-3xl transition-shadow duration-500">
                <div className="aspect-video relative">
                  <Image
                    src={FEATURED_VIDEOS[0].thumbnail}
                    alt={FEATURED_VIDEOS[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border-4 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute top-6 right-6 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg text-white text-sm font-bold">
                    {FEATURED_VIDEOS[0].duration}
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-6 left-6 px-3 py-1.5 bg-ocean-turquoise/90 backdrop-blur-sm rounded-lg text-white text-xs font-bold uppercase tracking-wider">{PAGE.videosTab.eyebrow}</div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-3">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-bold uppercase tracking-wider">
                        {FEATURED_VIDEOS[0].category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-poppins font-bold text-white mb-3">
                      {FEATURED_VIDEOS[0].title}
                    </h3>
                    <p className="text-white/80 text-lg max-w-2xl">
                      {FEATURED_VIDEOS[0].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {FEATURED_VIDEOS.slice(1).map((video) => (
                <div
                  key={video.id}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-video relative">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border-3 border-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-7 h-7 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-white text-xs font-bold">
                      {video.duration}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="mb-2">
                        <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-[10px] font-bold uppercase tracking-wider">
                          {video.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-poppins font-bold text-white mb-2">
                        {video.title}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center bg-gradient-to-br from-ocean-midnight to-ocean-turquoise rounded-3xl p-6 sm:p-12">
              <h3 className="text-3xl font-poppins font-bold text-white mb-4">{PAGE.videosTab.subheading}</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">{PAGE.videosTab.text2}</p>
              <Link
                href={PAGE.videosTab.link}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ocean-midnight font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >{PAGE.videosTab.linkText}<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · What Others Say tab (press articles)
          ══════════════════════════════════════════════════════════════════ */}
      {activeTab === 'articles' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-poppins font-bold text-ocean-midnight mb-4">{PAGE.whatOthersSayTab.heading}</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">{PAGE.whatOthersSayTab.text}</p>
            </div>

            {/* Featured Articles (Top 2 Large Cards WITH IMAGES) */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {EXTERNAL_ARTICLES.filter(a => a.featured).map((article) => (
                <a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={article.thumbnail}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight via-ocean-midnight/85 to-ocean-midnight/40" />
                  </div>

                  <div className="relative z-10 p-8 min-h-[400px] flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg border border-white/20">
                        <span className="text-white text-xs font-bold uppercase tracking-wider">{PAGE.whatOthersSayTab.eyebrow}</span>
                      </div>
                      <span className="text-white/70 text-sm">{article.date}</span>
                    </div>

                    <h3 className="text-2xl font-poppins font-bold text-white mb-4 group-hover:text-ocean-turquoise transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-white/80 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                      <span className="text-white/90 font-semibold text-sm">{article.source}</span>
                      <div className="flex items-center gap-2 text-white group-hover:translate-x-2 transition-transform">
                        <span className="text-sm font-bold">{PAGE.whatOthersSayTab.label}</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Rest of Articles (With Thumbnail Images) */}
            <div className="grid md:grid-cols-3 gap-6">
              {EXTERNAL_ARTICLES.filter(a => !a.featured).map((article) => (
                <a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-ocean-turquoise/30 transition-all duration-300"
                >
                  {/* Article Thumbnail */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.thumbnail}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight/40 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs text-ocean-midnight font-bold">{article.date}</span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-ocean-turquoise" />
                      <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">{article.source}</span>
                    </div>

                    <h3 className="font-poppins font-bold text-ocean-midnight mb-3 group-hover:text-ocean-turquoise transition-colors leading-tight">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-ocean-turquoise text-sm font-bold group-hover:gap-3 transition-all">{PAGE.whatOthersSayTab.text2}<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Press Contact CTA */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  <h3 className="text-2xl font-poppins font-bold text-ocean-midnight">{PAGE.whatOthersSayTab.subheading}</h3>
                </div>
                <p className="text-gray-600 mb-4">{PAGE.whatOthersSayTab.text3}</p>
                <Link
                  href={PAGE.whatOthersSayTab.link}
                  className="inline-flex items-center gap-2 text-ocean-turquoise font-bold hover:text-ocean-midnight transition-colors"
                >{PAGE.whatOthersSayTab.linkText}<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Toolkits & Downloads tab
          ══════════════════════════════════════════════════════════════════ */}
      {activeTab === 'downloads' && (
        <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-poppins font-bold text-ocean-midnight mb-4">{PAGE.toolkitsAndDownloadsTab.heading}</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">{PAGE.toolkitsAndDownloadsTab.text}</p>
            </div>

            {/* Search + Filters */}
            <div className="mb-10 bg-white rounded-2xl shadow-lg p-6">
              <div className="relative mb-6">
                <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder={PAGE.toolkitsAndDownloadsTab.placeholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-5 py-4 rounded-xl border-2 border-gray-200 text-ocean-midnight placeholder:text-gray-400 focus:outline-none focus:border-ocean-turquoise transition-colors text-lg"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all border-2 ${
                    selectedCategory === null
                      ? 'bg-ocean-midnight border-ocean-midnight text-white shadow-lg scale-105'
                      : 'border-gray-200 text-gray-600 hover:border-ocean-midnight/40 hover:scale-105'
                  }`}
                >{PAGE.toolkitsAndDownloadsTab.buttonText}</button>
                {RESOURCE_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all border-2 ${
                      selectedCategory === cat
                        ? 'bg-ocean-midnight border-ocean-midnight text-white shadow-lg scale-105'
                        : 'border-gray-200 text-gray-600 hover:border-ocean-midnight/40 hover:scale-105'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Resources Grid */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="rounded-3xl border-2 border-gray-100 overflow-hidden animate-pulse">
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200" />
                    <div className="p-6 space-y-4">
                      <div className="h-3 bg-gray-200 rounded w-1/3" />
                      <div className="h-6 bg-gray-200 rounded" />
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 opacity-20">
                  <Image src={PAGE.toolkitsAndDownloadsTab.image} alt="" fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-gray-400 mb-3">{PAGE.toolkitsAndDownloadsTab.subheading}</h3>
                <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
                  {searchQuery ? `No results for "${searchQuery}"` : 'Check back soon or contact us to request specific materials.'}
                </p>
                <Link
                  href={PAGE.toolkitsAndDownloadsTab.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-ocean-turquoise text-white font-bold rounded-xl hover:bg-ocean-midnight transition-all duration-300 hover:scale-105"
                >{PAGE.toolkitsAndDownloadsTab.linkText}<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((resource) => (
                  <div
                    key={resource.id}
                    className="group rounded-3xl border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:border-ocean-turquoise/40 transition-all duration-300 flex flex-col hover:-translate-y-2"
                  >
                    {/* Thumbnail */}
                    <div className="h-48 bg-gradient-to-br from-ocean-midnight to-[#0a4f7a] overflow-hidden relative">
                      {resource.thumbnail_url ? (
                        <img src={resource.thumbnail_url} alt={resource.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-5xl font-poppins font-bold text-white/15 uppercase mb-2">{resource.file_type}</div>
                            <div className="w-12 h-1 bg-ocean-turquoise/40 mx-auto rounded-full" />
                          </div>
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border-2 ${
                          FILE_TYPE_COLORS[resource.file_type] ?? 'bg-white/20 text-white border-white/40'
                        }`}>
                          {resource.file_type}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1 bg-white">
                      <div className="mb-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-ocean-turquoise">{resource.category}</span>
                      </div>
                      <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-3 line-clamp-2 group-hover:text-ocean-turquoise transition-colors leading-tight">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1 leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t-2 border-gray-50">
                        <div className="flex items-center gap-2 text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          <span className="text-xs font-bold uppercase tracking-wider">
                            {resource.download_count.toLocaleString()}
                          </span>
                        </div>
                        <a
                          href={resource.file_url}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-ocean-turquoise to-ocean-midnight text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 text-sm group-hover:scale-105"
                        >{PAGE.toolkitsAndDownloadsTab.linkText2}<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 · Contact strip
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-ocean-turquoise rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-ocean-turquoise rounded-full animate-pulse" />
                <span className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest">{PAGE.contactStrip.eyebrow}</span>
              </div>
              <h2 className="text-4xl font-poppins font-bold text-white mb-4">{PAGE.contactStrip.heading}</h2>
              <p className="text-white/70 text-lg leading-relaxed">{PAGE.contactStrip.text}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                href={PAGE.contactStrip.link}
                className="group px-8 py-4 bg-ocean-turquoise text-white font-bold rounded-xl hover:bg-white hover:text-ocean-midnight transition-all duration-300 text-center shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >{PAGE.contactStrip.linkText}<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href={PAGE.contactStrip.link2}
                className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:border-ocean-turquoise hover:bg-ocean-turquoise/10 transition-all duration-300 text-center hover:scale-105"
              >{PAGE.contactStrip.linkText2}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
