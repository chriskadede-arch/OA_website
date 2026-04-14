import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

export default function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-ocean-midnight via-blue-700 to-ocean-turquoise pt-32 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 min-h-screen flex items-center justify-center"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(135deg, rgba(2, 47, 78, 0.85) 0%, rgba(26, 95, 122, 0.85) 50%, rgba(46, 191, 209, 0.85) 100%), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-ocean-turquoise/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-ocean-seafoam/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdropfilter backdrop-blur-lg px-4 py-2 rounded-full mb-8 border border-white/20">
          <span className="text-xl">🌍</span>
          <span className="text-white text-sm font-semibold tracking-wider">Conservation in Motion</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-poppins leading-tight tracking-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-6 font-medium leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </h2>
        )}

        {/* Description */}
        {description && (
          <p className="text-lg md:text-xl text-white/85 mb-12 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="group px-8 py-4 bg-white text-ocean-midnight rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 shadow-lg flex items-center gap-2"
              >
                {primaryCTA.label}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
