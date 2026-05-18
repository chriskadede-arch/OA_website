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

export default function Resources() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

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
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-ocean-midnight py-24 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-3">
                <span className="w-8 h-px bg-ocean-turquoise inline-block" />
                Knowledge &amp; Tools
              </p>
              <h1 className="font-poppins font-bold text-white text-5xl md:text-6xl leading-tight mb-6">
                Resources &amp;<br />
                <span className="text-ocean-turquoise">Toolkits</span>
              </h1>
              <p className="text-lg text-white/65 leading-relaxed max-w-md">
                Download our proven methodologies, case studies, and educational materials
                to support your own conservation work.
              </p>
            </div>

            {/* Floating cards visual */}
            <div className="hidden lg:grid grid-cols-2 gap-3">
              {[
                { type: 'PDF', label: 'Co-Management Plan', color: 'from-red-900/40 to-ocean-midnight' },
                { type: 'DOC', label: 'Community Toolkit', color: 'from-blue-900/40 to-ocean-midnight' },
                { type: 'PDF', label: 'Coral Restoration Guide', color: 'from-ocean-seafoam/20 to-ocean-midnight' },
                { type: 'IEC', label: 'Marine Education Pack', color: 'from-purple-900/40 to-ocean-midnight' },
              ].map((c) => (
                <div
                  key={c.label}
                  className={`relative rounded-xl p-4 bg-gradient-to-br ${c.color} border border-white/10`}
                  style={{ minHeight: '100px' }}
                >
                  <div className="text-[9px] font-bold uppercase tracking-widest text-ocean-turquoise mb-2">{c.type}</div>
                  <p className="text-white/70 text-xs font-semibold leading-snug">{c.label}</p>
                  <div className="absolute bottom-3 right-3">
                    <svg className="w-4 h-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* Search + Filters */}
          <div className="mb-10">
            <div className="relative mb-6">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search resources, toolkits, case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-ocean-midnight placeholder:text-gray-300 focus:outline-none focus:border-ocean-turquoise transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                  selectedCategory === null
                    ? 'bg-ocean-midnight border-ocean-midnight text-white'
                    : 'border-gray-200 text-gray-600 hover:border-ocean-midnight/40'
                }`}
              >
                All Resources
              </button>
              {RESOURCE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                    selectedCategory === cat
                      ? 'bg-ocean-midnight border-ocean-midnight text-white'
                      : 'border-gray-200 text-gray-600 hover:border-ocean-midnight/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
                  <div className="h-40 bg-gray-100" />
                  <div className="p-6 space-y-3">
                    <div className="h-3 bg-gray-100 rounded w-1/3" />
                    <div className="h-5 bg-gray-100 rounded" />
                    <div className="h-4 bg-gray-100 rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 opacity-25">
                <Image src="/images/learning.jpg" alt="" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-poppins font-bold text-gray-400 mb-2">No resources found</h3>
              <p className="text-gray-400 text-sm mb-6">
                {searchQuery ? `No results for "${searchQuery}"` : 'Check back soon or contact us to request materials.'}
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-ocean-turquoise font-bold text-sm hover:text-ocean-midnight transition-colors">
                Request materials →
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((resource) => (
                <div
                  key={resource.id}
                  className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-ocean-turquoise/20 transition-all duration-300 flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="h-40 bg-gradient-to-br from-ocean-midnight to-[#0a4f7a] overflow-hidden relative">
                    {resource.thumbnail_url ? (
                      <img src={resource.thumbnail_url} alt={resource.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-poppins font-bold text-white/15 uppercase">{resource.file_type}</div>
                          <div className="w-8 h-px bg-ocean-turquoise/40 mx-auto mt-2" />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-lg border ${
                        FILE_TYPE_COLORS[resource.file_type] ?? 'bg-white/10 text-white border-white/20'
                      }`}>
                        {resource.file_type}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-ocean-turquoise">{resource.category}</span>
                    </div>
                    <h3 className="text-base font-poppins font-bold text-ocean-midnight mb-2 line-clamp-2 group-hover:text-ocean-turquoise transition-colors leading-snug">
                      {resource.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-1 leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                        {resource.download_count.toLocaleString()} downloads
                      </span>
                      <a
                        href={resource.file_url}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold text-ocean-turquoise hover:text-ocean-midnight transition-colors"
                      >
                        Download
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* ── Contact Strip ─────────────────────────────────── */}
      <section className="bg-ocean-midnight py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-3">Can't find it?</p>
              <h2 className="text-3xl font-poppins font-bold text-white mb-4">Request Specific Materials</h2>
              <p className="text-white/55 leading-relaxed">
                Contact us to request specific resources, submit your own materials to share,
                or ask about our co-management and reef restoration methodology.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                href="/contact"
                className="px-6 py-3 bg-ocean-turquoise text-white font-bold rounded-xl hover:bg-white hover:text-ocean-midnight transition-all duration-200 text-center"
              >
                Get in Touch
              </Link>
              <Link
                href="/blog"
                className="px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:border-ocean-turquoise hover:text-ocean-turquoise transition-all duration-200 text-center"
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
