/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Our Work › Programme area (template)
 * URL:  /programs/[slug]
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. Intro + Work Includes
 *   3. Body Image
 *   4. Projects
 *   5. Quote
 *   6. Collaborative Management band
 *   7. Other Programmes
 *   8. Call to action
 *
 * Where the text/data lives:
 *   • OUR_WORK_PROGRAMS, CROSS_CUTTING_THEMES, COLLABORATIVE_MANAGEMENT  →  lib/our-work.ts
 */
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { OUR_WORK_PROGRAMS, CROSS_CUTTING_THEMES, COLLABORATIVE_MANAGEMENT } from '@/lib/our-work';
import { ProgramIcon } from '@/components/common/ProgramIcon';

export async function generateStaticParams() {
  return OUR_WORK_PROGRAMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const program = OUR_WORK_PROGRAMS.find((p) => p.slug === params.slug);
  if (!program) return {};
  return {
    title: `${program.title} - Oceans Alive Foundation`,
    description: program.tagline,
  };
}

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const program = OUR_WORK_PROGRAMS.find((p) => p.slug === slug);
  if (!program) notFound();

  const otherPrograms = OUR_WORK_PROGRAMS.filter((p) => p.slug !== slug);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className={`relative bg-gradient-to-br ${program.color} overflow-hidden`}>
        <div className="absolute inset-0">
          <Image
            src={program.heroImage}
            alt={program.heroImageAlt}
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/55" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-24 md:pt-40 md:pb-32">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold mb-8 transition-colors"
          >
            ← Our Work
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1 rounded-full">
              Programme {program.number} of 04
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
            <ProgramIcon slug={program.slug} className="w-12 h-12 text-white shrink-0" />
            <div className="min-w-0">
              <h1 className="font-poppins font-bold text-white text-4xl md:text-6xl leading-tight mb-3">
                {program.title}
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                {program.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Intro + Work Includes
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {program.intro.map((para, i) => (
                <p key={i} className={`leading-relaxed text-gray-700 ${i === 0 ? 'text-lg' : ''}`}>
                  {para}
                </p>
              ))}

              {/* Callout */}
              <div className={`rounded-2xl bg-gradient-to-br ${program.color} p-7 text-white`}>
                <p className="text-lg font-poppins font-semibold leading-relaxed text-white">
                  &ldquo;{program.callout}&rdquo;
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-ocean-turquoise mb-4">
                Our Work Includes
              </p>
              <ul className="space-y-3">
                {program.workIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700 leading-snug">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${program.color} shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Body Image
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-md mb-3">
            <Image
              src={program.bodyImage.src}
              alt={program.bodyImage.alt}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-gray-500 text-center italic">{program.bodyImage.caption}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Projects
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight mb-10">
            {program.title} in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {program.projects.map((project, index) => {
              const Card = (
                <>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-2xl font-poppins font-bold text-white/25">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {!project.href && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-full">
                        In Development
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-poppins font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed">{project.description}</p>
                  {project.href && (
                    <div className="mt-4 text-sm font-bold text-white/80 group-hover:text-white transition-colors">
                      Learn more →
                    </div>
                  )}
                </>
              );

              return project.href ? (
                <Link
                  key={project.title}
                  href={project.href}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${program.color} p-7 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  {Card}
                </Link>
              ) : (
                <div
                  key={project.title}
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${program.color} opacity-70 p-7 text-white`}
                >
                  {Card}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Quote
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-poppins font-bold text-white leading-relaxed mb-6">
            &ldquo;{program.quote.text}&rdquo;
          </p>
          <p className="text-ocean-turquoise text-sm font-semibold uppercase tracking-widest">
            - {program.quote.author}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 · Collaborative Management band
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20 border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-3">
            {COLLABORATIVE_MANAGEMENT.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight mb-6">
            {COLLABORATIVE_MANAGEMENT.heading}
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            {COLLABORATIVE_MANAGEMENT.paragraphs[0]}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2">
            {CROSS_CUTTING_THEMES.map((theme) => (
              <span
                key={theme}
                className="text-xs font-semibold text-ocean-midnight bg-ocean-turquoise/10 px-3 py-1.5 rounded-full"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7 · Other Programmes
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-3">Connected Work</p>
          <h2 className="text-3xl font-poppins font-bold text-ocean-midnight mb-8">
            Our Other Programmes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPrograms.map((p) => (
              <Link
                key={p.slug}
                href={`/programs/${p.slug}`}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${p.color} p-7 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-4">
                  <ProgramIcon slug={p.slug} className="w-6 h-6 text-white" />
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-full">
                    Programme {p.number}
                  </span>
                </div>
                <h3 className="text-base font-poppins font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed line-clamp-2">{p.navBlurb}</p>
                <div className="mt-4 text-sm font-bold text-white/80 group-hover:text-white transition-colors">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 8 · Call to action
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-turquoise py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-poppins font-bold text-white">
                Support This Programme
              </h3>
              <p className="text-white/80 mt-1">
                Your donation directly funds conservation work on Kenya&apos;s coast.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/donate"
                className="px-6 py-3 bg-white text-ocean-turquoise font-bold rounded-xl hover:bg-ocean-midnight hover:text-white transition-all duration-200"
              >
                Donate Now
              </Link>
              <Link
                href="/#projects"
                className="px-6 py-3 border border-white/50 text-white font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                Explore All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
