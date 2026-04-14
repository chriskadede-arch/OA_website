'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { BlogPost } from '@/lib/types';

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const { error } = await supabase.from('posts').delete().eq('id', id);
      if (error) throw error;
      setPosts(posts.filter((p) => p.id !== id));
      alert('Post deleted successfully');
    } catch (error) {
      alert('Failed to delete post');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container-fluid">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-poppins font-bold text-ocean-midnight">Blog Posts</h1>
            <p className="text-gray-600">Manage all blog posts</p>
          </div>
          <Link href="/admin/blog/new" className="btn btn-primary">
            + New Post
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading posts...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="card p-12 text-center">
            <p className="text-gray-600 mb-4">No blog posts yet</p>
            <Link href="/admin/blog/new" className="btn btn-primary">
              Create First Post
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="card p-6 flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-poppins font-bold text-ocean-midnight">
                      {post.title}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-poppins font-semibold ${
                        post.is_published
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {post.is_published ? 'Published' : 'Draft'}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{post.category}</span>
                    <span>By {post.author_name}</span>
                    <span>
                      {new Date(post.published_at).toLocaleDateString()}
                    </span>
                    <span>{post.view_count} views</span>
                  </div>
                </div>

                <div className="flex gap-2 ml-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="btn btn-sm btn-secondary"
                  >
                    View
                  </Link>
                  <Link
                    href={`/admin/blog/${post.id}/edit`}
                    className="btn btn-sm btn-primary"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deletePost(post.id)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
