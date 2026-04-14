'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Hero from '@/components/common/Hero';
import { BLOG_CATEGORIES } from '@/lib/constants';
import { BlogPost } from '@/lib/types';
import { apiClient } from '@/lib/api-client';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchPosts();
  }, [selectedCategory, searchQuery]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await apiClient.getBlogs(
        1,
        12,
        selectedCategory || undefined
      );
      setPosts(response.data || []);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Hero
        title="Blog & Stories"
        subtitle="Impact Stories, Education & Updates"
        description="Read about our conservation efforts, community successes, and lessons learned from the field."
      />

      <section className="py-16 md:py-24">
        <div className="container-fluid">
          {/* Search & Filter */}
          <div className="max-w-3xl mx-auto mb-12">
            <input
              type="text"
              placeholder="Search posts..."
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
                All Posts
              </button>
              {BLOG_CATEGORIES.map((category) => (
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

          {/* Posts Grid */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No posts found. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div key={post.id} className="card overflow-hidden hover:shadow-xl transition-shadow">
                  {post.featured_image_url && (
                    <div className="h-48 bg-gray-300 overflow-hidden">
                      <img
                        src={post.featured_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-poppins font-semibold text-ocean-turquoise uppercase">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(post.published_at).toLocaleDateString()}
                      </span>
                    </div>

                    <h3 className="text-xl font-poppins font-bold text-ocean-midnight mb-2 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">By {post.author_name}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-ocean-turquoise font-poppins font-semibold hover:text-ocean-midnight text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
