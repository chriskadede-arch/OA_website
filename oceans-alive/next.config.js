/** @type {import('next').NextConfig} */
const isStaticExport = process.env.NEXT_STATIC_EXPORT === '1';
const isLocalBuild = process.env.LOCAL_BUILD === '1';

const nextConfig = {
  ...(isStaticExport ? {
    output: 'export',
    basePath: isLocalBuild ? '' : '/OA_website',
    trailingSlash: true,
    env: {
      NEXT_PUBLIC_BASE_PATH: isLocalBuild ? '' : '/OA_website',
      NEXT_PUBLIC_USE_PHP_FORMS: process.env.NEXT_PUBLIC_USE_PHP_FORMS ?? '0',
    },
    images: {
      loader: 'custom',
      loaderFile: './image-loader.js',
    },
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
  // Performance optimizations
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
