'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Hero from '@/components/common/Hero';
import { GALLERY_CATEGORIES } from '@/lib/constants';
import { GalleryItem } from '@/lib/types';
import { apiClient } from '@/lib/api-client';

export default function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<'photo' | 'video' | null>(null);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    fetchGallery();
  }, [selectedCategory, selectedType]);

  const fetchGallery = async () => {
    setLoading(true);
    try {
      const response = await apiClient.getGalleryItems(
        1,
        24,
        selectedType || undefined
      );
      let data = response.data || [];

      if (selectedCategory) {
        data = data.filter((item) => item.category === selectedCategory);
      }

      setItems(data);
    } catch (error) {
      console.error('Failed to fetch gallery:', error);
    } finally {
      setLoading(false);
    }
  };

  const extractYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };

  return (
    <>
      <Hero
        title="Photo & Video Gallery"
        subtitle="Visual Stories of Our Work"
        description="Explore our conservation projects, community activities, and the beauty of Kenya's marine ecosystems."
      />

      <section className="py-16 md:py-24">
        <div className="container-fluid">
          {/* Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            {/* Type Filter */}
            <div className="mb-6">
              <h3 className="font-poppins font-semibold text-ocean-midnight mb-3">Media Type</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedType(null)}
                  className={`px-4 py-2 rounded-lg font-poppins text-sm transition-colors ${
                    selectedType === null
                      ? 'bg-ocean-turquoise text-white'
                      : 'bg-gray-200 text-ocean-midnight hover:bg-gray-300'
                  }`}
                >
                  All Media
                </button>
                <button
                  onClick={() => setSelectedType('photo')}
                  className={`px-4 py-2 rounded-lg font-poppins text-sm transition-colors ${
                    selectedType === 'photo'
                      ? 'bg-ocean-turquoise text-white'
                      : 'bg-gray-200 text-ocean-midnight hover:bg-gray-300'
                  }`}
                >
                  📷 Photos
                </button>
                <button
                  onClick={() => setSelectedType('video')}
                  className={`px-4 py-2 rounded-lg font-poppins text-sm transition-colors ${
                    selectedType === 'video'
                      ? 'bg-ocean-turquoise text-white'
                      : 'bg-gray-200 text-ocean-midnight hover:bg-gray-300'
                  }`}
                >
                  🎥 Videos
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="font-poppins font-semibold text-ocean-midnight mb-3">Category</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg font-poppins text-sm transition-colors ${
                    selectedCategory === null
                      ? 'bg-ocean-turquoise text-white'
                      : 'bg-gray-200 text-ocean-midnight hover:bg-gray-300'
                  }`}
                >
                  All Categories
                </button>
                {GALLERY_CATEGORIES.map((category) => (
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
          </div>

          {/* Gallery Grid */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading gallery...</p>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No items found. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="relative h-48 overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => setSelectedItem(item)}
                >
                  {item.type === 'photo' && item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : item.type === 'video' && item.video_url ? (
                    <div className="w-full h-full bg-gradient-to-br from-ocean-turquoise to-ocean-midnight flex items-center justify-center">
                      <div className="text-white text-4xl">▶</div>
                    </div>
                  ) : null}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                    <div className="w-full p-3 bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="font-poppins font-semibold text-sm line-clamp-2">{item.title}</p>
                      <p className="text-xs opacity-75">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              ✕
            </button>

            {/* Content */}
            <div className="p-6">
              {selectedItem.type === 'photo' && selectedItem.image_url ? (
                <img
                  src={selectedItem.image_url}
                  alt={selectedItem.title}
                  className="w-full h-auto rounded-lg mb-4"
                />
              ) : selectedItem.type === 'video' && selectedItem.video_url ? (
                <iframe
                  width="100%"
                  height="500"
                  src={`https://www.youtube.com/embed/${extractYouTubeId(selectedItem.video_url)}`}
                  title={selectedItem.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg mb-4"
                />
              ) : null}

              <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-2">
                {selectedItem.title}
              </h2>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-poppins font-semibold text-ocean-turquoise uppercase">
                  {selectedItem.type === 'photo' ? '📷 Photo' : '🎥 Video'}
                </span>
                <span className="text-sm text-gray-600">{selectedItem.category}</span>
              </div>

              {selectedItem.description && (
                <p className="text-gray-700 text-lg leading-relaxed">{selectedItem.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
