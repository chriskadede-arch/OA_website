'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Hero from '@/components/common/Hero';
import { RESOURCE_CATEGORIES } from '@/lib/constants';
import { Resource } from '@/lib/types';
import { apiClient } from '@/lib/api-client';

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
      const response = await apiClient.getResources(
        1,
        20,
        selectedCategory || undefined
      );
      setResources(response.data || []);
    } catch (error) {
      console.error('Failed to fetch resources:', error);
    } finally {
      setLoading(false);
    }
  };

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case 'pdf':
        return '📄';
      case 'doc':
        return '📋';
      case 'image':
        return '🖼️';
      default:
        return '📦';
    }
  };

  return (
    <>
      <Hero
        title="Resources & Toolkits"
        subtitle="Tools for Marine Conservation"
        description="Download our proven methodologies, case studies, and educational materials to support your conservation work."
      />

      <section className="py-16 md:py-24">
        <div className="container-fluid">
          {/* Search & Filter */}
          <div className="max-w-3xl mx-auto mb-12">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input mb-6"
            />

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg font-poppins text-sm transition-colors ${
                  selectedCategory === null
                    ? 'bg-ocean-turquoise text-white'
                    : 'bg-gray-200 text-ocean-midnight hover:bg-gray-300'
                }`}
              >
                All Resources
              </button>
              {RESOURCE_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-poppins text-sm transition-colors ${
                    selectedCategory === category
                      ? 'bg-ocean-turquoise text-white'
                      : 'bg-gray-200 text-ocean-midnight hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading resources...</p>
            </div>
          ) : resources.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No resources found. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="card p-6 hover:shadow-xl transition-shadow flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="h-40 bg-gradient-to-br from-ocean-turquoise to-ocean-midnight rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    {resource.thumbnail_url ? (
                      <img
                        src={resource.thumbnail_url}
                        alt={resource.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-5xl">{getFileIcon(resource.file_type)}</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="mb-3">
                      <span className="text-xs font-poppins font-semibold text-ocean-turquoise uppercase">
                        {resource.file_type}
                      </span>
                      <span className="text-xs text-gray-500 ml-2">{resource.category}</span>
                    </div>

                    <h3 className="text-lg font-poppins font-bold text-ocean-midnight mb-2 line-clamp-2">
                      {resource.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                      {resource.description}
                    </p>

                    {/* Downloads & CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {resource.download_count} downloads
                      </span>
                      <a
                        href={resource.file_url}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ocean-turquoise font-poppins font-semibold hover:text-ocean-midnight text-sm"
                      >
                        Download →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-poppins font-bold text-ocean-midnight mb-6">
              Need More Resources?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Can't find what you're looking for? Contact us to request specific materials or submit
              your own resources to share with the community.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
