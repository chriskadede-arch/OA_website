/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.json',
  ],
  theme: {
    extend: {
      colors: {
        'ocean': {
          'midnight': '#022F4E',      // Midnight Zone Blue
          'turquoise': '#2EBFD1',     // Tropical Turquoise
          'seafoam': '#58A971',       // Seafoam Green
          'sunshine': '#FBB308',      // Sunshine Yellow
          'sand': '#E6D7BA',          // Sandy Shores
        },
        'slate': {
          '950': '#0f172a',
          '900': '#0f1729',
          '800': '#1a202c',
          '700': '#2d3748',
          '600': '#4a5568',
          '500': '#718096',
          '400': '#a0aec0',
          '300': '#cbd5e0',
          '200': '#e2e8f0',
          '100': '#f7fafc',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'rugrats': ['Rugrats Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#374151',
            a: {
              color: '#2EBFD1',
              '&:hover': {
                color: '#022F4E',
              },
            },
            h1: {
              color: '#022F4E',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700',
            },
            h2: {
              color: '#022F4E',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700',
            },
            h3: {
              color: '#022F4E',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '600',
            },
          },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'sm-blue': '0 2px 4px rgba(2, 47, 78, 0.08)',
        'md-blue': '0 4px 12px rgba(2, 47, 78, 0.12)',
        'lg-blue': '0 10px 24px rgba(2, 47, 78, 0.16)',
        'xl-blue': '0 20px 40px rgba(2, 47, 78, 0.2)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
