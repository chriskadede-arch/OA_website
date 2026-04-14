import Link from 'next/link';
import Hero from '@/components/common/Hero';
import NewsletterForm from '@/components/common/NewsletterForm';
import { IMPACT_STATS } from '@/lib/constants';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Community-Led Marine Conservation"
        subtitle="Building Sustainable Futures in Coastal Kenya"
        description="Oceans Alive Foundation empowers local communities to restore coral ecosystems, sustainable fisheries, and protect marine biodiversity through education and action."
        primaryCTA={{ label: 'Explore Our Work', href: '/blog' }}
        secondaryCTA={{ label: 'Learn More', href: '/about' }}
      />

      {/* Impact Stats */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-fluid">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-ocean-midnight mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Through community partnerships and sustainable practices, we're making measurable
              differences in marine conservation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {IMPACT_STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-poppins font-bold text-ocean-turquoise mb-2">
                  {stat.value}
                </div>
                <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-fluid">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-ocean-midnight text-center mb-12">
            Featured Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Blog Preview */}
            <div className="card p-6 hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-ocean-turquoise to-ocean-midnight rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-white opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C6.248 6.253 2 10.623 2 16s4.248 9.747 10 9.747 10-4.373 10-9.747c0-5.377-4.248-9.747-10-9.747z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-poppins font-bold text-ocean-midnight mb-2">
                Impact Stories
              </h3>
              <p className="text-gray-600 mb-4">
                Read inspiring stories of community-led conservation success and lessons learned
                from our field work.
              </p>
              <Link
                href="/blog"
                className="text-ocean-turquoise font-poppins font-semibold hover:text-ocean-midnight"
              >
                Read Blog →
              </Link>
            </div>

            {/* Resources Preview */}
            <div className="card p-6 hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-ocean-seafoam to-ocean-midnight rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-white opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C6.248 6.253 2 10.623 2 16s4.248 9.747 10 9.747 10-4.373 10-9.747c0-5.377-4.248-9.747-10-9.747z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-poppins font-bold text-ocean-midnight mb-2">
                Resources & Toolkits
              </h3>
              <p className="text-gray-600 mb-4">
                Download our proven methodologies, guides, and toolkits for marine conservation
                and sustainable fisheries.
              </p>
              <Link
                href="/resources"
                className="text-ocean-turquoise font-poppins font-semibold hover:text-ocean-midnight"
              >
                Browse Resources →
              </Link>
            </div>

            {/* Gallery Preview */}
            <div className="card p-6 hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-ocean-sunshine to-ocean-midnight rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-white opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C6.248 6.253 2 10.623 2 16s4.248 9.747 10 9.747 10-4.373 10-9.747c0-5.377-4.248-9.747-10-9.747z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-poppins font-bold text-ocean-midnight mb-2">
                Photo & Video Gallery
              </h3>
              <p className="text-gray-600 mb-4">
                Explore visual documentation of our conservation projects, community activities,
                and marine life.
              </p>
              <Link
                href="/gallery"
                className="text-ocean-turquoise font-poppins font-semibold hover:text-ocean-midnight"
              >
                View Gallery →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-ocean-turquoise py-16 md:py-24">
        <div className="container-fluid">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
              Get Updates on Our Work
            </h2>
            <p className="text-lg text-white mb-8">
              Subscribe to our newsletter for quarterly updates on conservation progress, educational
              resources, and ways you can make an impact.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-ocean-turquoise rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-ocean-midnight mb-2">
                  Learn
                </h3>
                <p className="text-gray-600">
                  Discover our methodologies and conservation approaches through our resource
                  library.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-ocean-seafoam rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-ocean-midnight mb-2">
                  Support
                </h3>
                <p className="text-gray-600">
                  Donate to support our conservation and education programs in coastal Kenya.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-ocean-sunshine rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-ocean-midnight mb-2">
                  Engage
                </h3>
                <p className="text-gray-600">
                  Get involved with our community initiatives and conservation projects.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="btn btn-primary btn-lg"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
