'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RESOURCE_CATEGORIES } from '@/lib/constants';
import { Resource } from '@/lib/types';
import { apiClient } from '@/lib/api-client';

const FILE_TYPE_COLORS: Record<string, string> = {
  pdf: 'bg-red-50 text-red-600 border-red-100',
  doc: 'bg-blue-50 text-blue-600 border-blue-100',
  image: 'bg-purple-50 text-purple-600 border-purple-100',
};

// FEATURED VIDEOS - Add your YouTube/Vimeo links here
const FEATURED_VIDEOS = [
  {
    id: 1,
    title: 'Kuruwitu Conservation Story',
    description: 'How a small fishing village became a global model for community-led ocean conservation.',
    thumbnail: '/images/divers.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=example1',
    duration: '12:45',
    category: 'Impact Story',
  },
  {
    id: 2,
    title: 'Coral Restoration in Action',
    description: 'Watch fishers transform into reef gardeners, planting 25,000+ corals across 39 hectares.',
    thumbnail: '/images/coralteaching.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=example2',
    duration: '8:20',
    category: 'Field Work',
  },
  {
    id: 3,
    title: 'Women Leading Change',
    description: '735+ women building climate-smart livelihoods through Trash4Cash and permaculture.',
    thumbnail: '/images/trashforcash.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=example3',
    duration: '10:15',
    category: 'Community',
  },
];

// EXTERNAL ARTICLES - What others wrote about Oceans Alive
const EXTERNAL_ARTICLES = [
  {
    id: 1,
    title: 'UNDP Equator Prize 2021: Kuruwitu Conservation Model',
    source: 'United Nations Development Programme',
    logo: '/images/partners/undp.png',
    excerpt: 'Recognized as one of the world\'s most innovative community-based conservation initiatives.',
    url: 'https://www.equatorinitiative.org/2021/09/27/kuruwitu-conservation-and-welfare-association/',
    date: 'September 2021',
    featured: true,
  },
  {
    id: 2,
    title: 'Kenya\'s First Community Co-Management Success',
    source: 'IUCN - International Union for Conservation of Nature',
    logo: '/images/partners/iucn.png',
    excerpt: '120 km² under Kenya\'s first officially endorsed Co-Management Area Plan, setting precedent for coastal governance.',
    url: '#',
    date: 'June 2023',
    featured: true,
  },
  {
    id: 3,
    title: 'From Coral Bleaching to National Model',
    source: 'Blue Ventures Conservation',
    excerpt: 'How Kuruwitu transformed from 90% coral loss to 400% fish biomass increase in two decades.',
    url: '#',
    date: 'March 2024',
  },
  {
    id: 4,
    title: 'Royal Visit Highlights Community Conservation',
    source: 'Kenya Wildlife Service',
    excerpt: 'King Charles III recognizes Kuruwitu as exemplary model during 2023 Kenya visit.',
    url: '#',
    date: 'November 2023',
  },
  {
    id: 5,
    title: 'Women at the Heart of Ocean Recovery',
    source: 'Coral Guardian',
    excerpt: 'Partnership spotlight on women-led conservation in Kilifi County.',
    url: '#',
    date: 'January 2024',
  },
];

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
      {/* ── IMMERSIVE HERO WITH ANIMATED GRADIENT ─────────────────── */}
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
              <span className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest">Knowledge Hub</span>
            </div>

            <h1 className="font-poppins font-bold text-white text-6xl md:text-7xl lg:text-8xl leading-tight mb-8">
              Explore Our
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-turquoise via-green-400 to-ocean-seafoam">
                Conservation Library
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-12 max-w-3xl mx-auto">
              Dive into toolkits, videos, and stories from 20+ years of community-led ocean conservation. Learn from our journey, download proven methodologies, and see the impact in action.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { icon: '📄', label: 'Toolkits & Guides', value: '25+' },
                { icon: '🎥', label: 'Impact Videos', value: '15+' },
                { icon: '📰', label: 'Press & Articles', value: '30+' },
                { icon: '📊', label: 'Case Studies', value: '10+' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <div className="text-3xl mb-2">{stat.icon}</div>
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

      {/* ── CREATIVE TAB NAVIGATION ─────────────────────────────── */}
      <section className="bg-white pt-12 sticky top-0 z-40 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3">
            {[
              { id: 'downloads', label: 'Toolkits & Downloads', icon: '📥', count: filtered.length },
              { id: 'videos', label: 'Videos & Films', icon: '🎬', count: FEATURED_VIDEOS.length },
              { id: 'articles', label: 'What Others Say', icon: '📰', count: EXTERNAL_ARTICLES.length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`group relative px-6 py-4 rounded-t-2xl font-bold text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-br from-ocean-midnight to-ocean-turquoise text-white shadow-lg scale-105'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-ocean-midnight'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{tab.icon}</span>
                  <div className="text-left">
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

      {/* ── VIDEOS SECTION ─────────────────────────────────────── */}
      {activeTab === 'videos' && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-poppins font-bold text-ocean-midnight mb-4">
                See Conservation in Action
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Watch the transformation from coral bleaching to thriving reefs, fishers to guardians, and villages to global models.
              </p>
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
                  <div className="absolute top-6 left-6 px-3 py-1.5 bg-ocean-turquoise/90 backdrop-blur-sm rounded-lg text-white text-xs font-bold uppercase tracking-wider">
                    Featured
                  </div>

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
            <div className="mt-16 text-center bg-gradient-to-br from-ocean-midnight to-ocean-turquoise rounded-3xl p-12">
              <h3 className="text-3xl font-poppins font-bold text-white mb-4">Want to Feature Our Work?</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Media professionals, filmmakers, and researchers: we welcome collaboration. Contact us for high-resolution footage and interviews.
              </p>
              <Link
                href="/contact?type=Partnership"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ocean-midnight font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Partner With Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── EXTERNAL ARTICLES SECTION ─────────────────────────── */}
      {activeTab === 'articles' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-poppins font-bold text-ocean-midnight mb-4">
                What Others Say About Us
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Recognition from UNDP, IUCN, and conservation leaders worldwide. Our community-led model is making waves.
              </p>
            </div>

            {/* Featured Articles (Top 2 Large Cards) */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {EXTERNAL_ARTICLES.filter(a => a.featured).map((article) => (
                <a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-br from-ocean-midnight to-ocean-turquoise rounded-3xl p-8 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                        <span className="text-ocean-turquoise text-xs font-bold uppercase tracking-wider">Featured</span>
                      </div>
                      <span className="text-white/60 text-sm">{article.date}</span>
                    </div>

                    <h3 className="text-2xl font-poppins font-bold text-white mb-4 group-hover:text-ocean-turquoise transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-white/80 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm" />
                        <span className="text-white/90 font-semibold text-sm">{article.source}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white group-hover:translate-x-2 transition-transform">
                        <span className="text-sm font-bold">Read Article</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Rest of Articles (Masonry-style Grid) */}
            <div className="grid md:grid-cols-3 gap-6">
              {EXTERNAL_ARTICLES.filter(a => !a.featured).map((article) => (
                <a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-ocean-turquoise/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ocean-turquoise/10 to-ocean-midnight/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-ocean-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>

                  <h3 className="font-poppins font-bold text-ocean-midnight mb-3 group-hover:text-ocean-turquoise transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-500 font-medium">{article.source}</span>
                    <div className="flex items-center gap-1 text-ocean-turquoise text-xs font-bold group-hover:gap-2 transition-all">
                      Read
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
                  <h3 className="text-2xl font-poppins font-bold text-ocean-midnight">Press & Media Inquiries</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Writing about community conservation? We'd love to support your story.
                </p>
                <Link
                  href="/contact?type=Other"
                  className="inline-flex items-center gap-2 text-ocean-turquoise font-bold hover:text-ocean-midnight transition-colors"
                >
                  Contact Media Team
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── DOWNLOADS SECTION (Original with Enhanced Design) ────── */}
      {activeTab === 'downloads' && (
        <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-poppins font-bold text-ocean-midnight mb-4">
                Proven Methodologies
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Download toolkits, case studies, and educational materials used across 20+ years of conservation success.
              </p>
            </div>

            {/* Search + Filters */}
            <div className="mb-10 bg-white rounded-2xl shadow-lg p-6">
              <div className="relative mb-6">
                <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search toolkits, case studies, reports..."
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
                >
                  All Resources
                </button>
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
                  <Image src="/images/divers.jpg" alt="" fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-gray-400 mb-3">No resources found</h3>
                <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
                  {searchQuery ? `No results for "${searchQuery}"` : 'Check back soon or contact us to request specific materials.'}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-ocean-turquoise text-white font-bold rounded-xl hover:bg-ocean-midnight transition-all duration-300 hover:scale-105"
                >
                  Request Materials
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        >
                          Download
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* ── CONTACT STRIP (Enhanced) ─────────────────────────── */}
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
                <span className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest">Need Help?</span>
              </div>
              <h2 className="text-4xl font-poppins font-bold text-white mb-4">
                Can't Find What You Need?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Request specific resources, submit materials to share with the conservation community, or ask about our methodologies. We're here to help.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-ocean-turquoise text-white font-bold rounded-xl hover:bg-white hover:text-ocean-midnight transition-all duration-300 text-center shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Get in Touch
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/blog"
                className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:border-ocean-turquoise hover:bg-ocean-turquoise/10 transition-all duration-300 text-center hover:scale-105"
              >
                Read Our Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
