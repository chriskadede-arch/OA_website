'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalResources: 0,
    totalGalleryItems: 0,
    totalDonations: 0,
    totalDonationAmount: 0,
    totalNewsletterSubscribers: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [
        postsData,
        resourcesData,
        galleryData,
        donationsData,
        subscribersData,
      ] = await Promise.all([
        supabase.from('posts').select('*', { count: 'exact', head: true }),
        supabase.from('resources').select('*', { count: 'exact', head: true }),
        supabase.from('gallery_items').select('*', { count: 'exact', head: true }),
        supabase.from('donations').select('*').eq('status', 'succeeded'),
        supabase.from('newsletter_subscribers').select('*', { count: 'exact', head: true }),
      ]);

      const totalAmount = donationsData.data?.reduce((sum, d) => sum + d.amount, 0) || 0;

      setStats({
        totalPosts: postsData.count || 0,
        totalResources: resourcesData.count || 0,
        totalGalleryItems: galleryData.count || 0,
        totalDonations: donationsData.data?.length || 0,
        totalDonationAmount: totalAmount,
        totalNewsletterSubscribers: subscribersData.count || 0,
      });
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container-fluid">
        <div className="mb-8">
          <h1 className="text-4xl font-poppins font-bold text-ocean-midnight mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">Manage all content and monitor site metrics</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading dashboard...</p>
          </div>
        ) : (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Blog Posts</p>
                    <p className="text-4xl font-poppins font-bold text-ocean-midnight">
                      {stats.totalPosts}
                    </p>
                  </div>
                  <span className="text-4xl">📝</span>
                </div>
                <Link
                  href="/admin/blog"
                  className="text-ocean-turquoise text-sm font-poppins font-semibold mt-4 inline-block"
                >
                  Manage →
                </Link>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Resources</p>
                    <p className="text-4xl font-poppins font-bold text-ocean-midnight">
                      {stats.totalResources}
                    </p>
                  </div>
                  <span className="text-4xl">📦</span>
                </div>
                <Link
                  href="/admin/resources"
                  className="text-ocean-turquoise text-sm font-poppins font-semibold mt-4 inline-block"
                >
                  Manage →
                </Link>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Gallery Items</p>
                    <p className="text-4xl font-poppins font-bold text-ocean-midnight">
                      {stats.totalGalleryItems}
                    </p>
                  </div>
                  <span className="text-4xl">🎨</span>
                </div>
                <Link
                  href="/admin/gallery"
                  className="text-ocean-turquoise text-sm font-poppins font-semibold mt-4 inline-block"
                >
                  Manage →
                </Link>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Donations</p>
                    <p className="text-4xl font-poppins font-bold text-ocean-turquoise">
                      {stats.totalDonations}
                    </p>
                  </div>
                  <span className="text-4xl">💰</span>
                </div>
                <p className="text-green-600 text-sm font-poppins font-semibold mt-4">
                  Total: ${(stats.totalDonationAmount / 100).toFixed(2)}
                </p>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Newsletter Subscribers</p>
                    <p className="text-4xl font-poppins font-bold text-ocean-midnight">
                      {stats.totalNewsletterSubscribers}
                    </p>
                  </div>
                  <span className="text-4xl">📧</span>
                </div>
              </div>

              <div className="card p-6 bg-gradient-to-br from-ocean-turquoise to-ocean-midnight text-white">
                <h3 className="font-poppins font-bold text-lg mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Link
                    href="/admin/blog/new"
                    className="block text-sm hover:opacity-80 transition-opacity"
                  >
                    + New Blog Post
                  </Link>
                  <Link
                    href="/admin/resources/new"
                    className="block text-sm hover:opacity-80 transition-opacity"
                  >
                    + Add Resource
                  </Link>
                  <Link
                    href="/admin/gallery/new"
                    className="block text-sm hover:opacity-80 transition-opacity"
                  >
                    + Add Gallery Item
                  </Link>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card p-6">
              <h2 className="text-2xl font-poppins font-bold text-ocean-midnight mb-6">
                Content Management
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-poppins font-bold text-ocean-midnight mb-4">Blog Posts</h3>
                  <div className="space-y-2">
                    <Link
                      href="/admin/blog"
                      className="block p-3 bg-gray-50 hover:bg-gray-100 rounded text-ocean-turquoise text-sm"
                    >
                      View All Posts
                    </Link>
                    <Link
                      href="/admin/blog/new"
                      className="block p-3 bg-gray-50 hover:bg-gray-100 rounded text-ocean-turquoise text-sm"
                    >
                      Create New Post
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="font-poppins font-bold text-ocean-midnight mb-4">
                    Resources & Toolkits
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="/admin/resources"
                      className="block p-3 bg-gray-50 hover:bg-gray-100 rounded text-ocean-turquoise text-sm"
                    >
                      View All Resources
                    </Link>
                    <Link
                      href="/admin/resources/new"
                      className="block p-3 bg-gray-50 hover:bg-gray-100 rounded text-ocean-turquoise text-sm"
                    >
                      Add Resource
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="font-poppins font-bold text-ocean-midnight mb-4">Gallery</h3>
                  <div className="space-y-2">
                    <Link
                      href="/admin/gallery"
                      className="block p-3 bg-gray-50 hover:bg-gray-100 rounded text-ocean-turquoise text-sm"
                    >
                      View Gallery Items
                    </Link>
                    <Link
                      href="/admin/gallery/new"
                      className="block p-3 bg-gray-50 hover:bg-gray-100 rounded text-ocean-turquoise text-sm"
                    >
                      Add Gallery Item
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="font-poppins font-bold text-ocean-midnight mb-4">Other</h3>
                  <div className="space-y-2">
                    <Link
                      href="/admin/contact-submissions"
                      className="block p-3 bg-gray-50 hover:bg-gray-100 rounded text-ocean-turquoise text-sm"
                    >
                      Contact Submissions
                    </Link>
                    <Link
                      href="/admin/donations"
                      className="block p-3 bg-gray-50 hover:bg-gray-100 rounded text-ocean-turquoise text-sm"
                    >
                      Donations
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
