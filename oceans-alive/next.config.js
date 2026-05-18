/** @type {import('next').NextConfig} */
const isStaticExport = process.env.NEXT_STATIC_EXPORT === '1';

const nextConfig = {
  ...(isStaticExport ? {
    output: 'export',
    basePath: '/OA_website',
    trailingSlash: true,
    images: { unoptimized: true },
  } : {
    images: {
      domains: [
        'res.cloudinary.com',
        'supabase.co',
        'images.unsplash.com',
        'images.pexels.com',
        'upload.wikimedia.org',
        'www.coralguardian.org',
        'www.coralreefcare.com',
        'www.platcorpgroup.com',
      ],
      formats: ['image/avif', 'image/webp'],
    },
  }),
  reactStrictMode: true,
};

module.exports = nextConfig;
