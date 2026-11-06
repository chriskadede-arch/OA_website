/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Project › Ocean Community Grant: OCG2/1012
 * URL:  /projects/ocean-community-grant
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero (with partner logos)
 *   2. Impact band
 *   3. The challenge
 *   4. Designed to include
 *   5. The bigger picture
 *   6. Call to action
 *
 * Where the text/data lives:
 *   • PARTNERS  →  top of this file
 * Page text, images and links (editable in Pages CMS)  →  content/projects/ocean-community-grant.json
 */
import Link from 'next/link';
import Image from 'next/image';
import PAGE from '@/content/projects/ocean-community-grant.json';

export const metadata = PAGE.seo;

const PARTNERS = PAGE.PARTNERS;

const APPROACH = PAGE.APPROACH;

const REACH = PAGE.REACH;

export default function OceanCommunityGrantPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero (with partner logos)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE.hero.image}
            alt={PAGE.hero.imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-violet-900/80 via-violet-900/70 to-ocean-midnight" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-40">
          <div className="max-w-3xl lg:max-w-2xl xl:max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-ocean-turquoise rounded-full animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">{PAGE.hero.eyebrow}</span>
            </div>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">{PAGE.hero.title}<br />
              <span className="text-ocean-turquoise">{PAGE.hero.label}</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">{PAGE.hero.text}</p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">{PAGE.hero.text2}</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">{PAGE.hero.eyebrow2}</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">{PAGE.hero.text3}</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">{PAGE.hero.eyebrow3}</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">{PAGE.hero.text4}</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">{PAGE.hero.eyebrow4}</div>
              </div>
            </div>

            {/* Partner logos, inline on smaller screens */}
            <div className="lg:hidden mt-10 inline-flex flex-wrap items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
              <span className="w-full text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">{PAGE.hero.eyebrow5}</span>
              {PARTNERS.map((p) => (
                <div key={p.name} className="relative w-32 h-16 bg-white rounded-xl overflow-hidden">
                  <Image src={p.logo} alt={p.name} fill className={`object-contain p-2 ${p.zoom ? 'scale-[1.35]' : ''}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner badge, floating right */}
        <div className="hidden lg:flex absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 flex-col items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">{PAGE.hero.eyebrow6}</span>
          {PARTNERS.map((p) => (
            <div key={p.name} className={`relative ${p.box} bg-white rounded-xl overflow-hidden`}>
              <Image src={p.logo} alt={p.name} fill className={`object-contain p-2 ${p.zoom ? 'scale-[1.35]' : ''}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · Impact band
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-violet-50 py-10 border-b border-violet-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-violet-100">
              <p className="text-xs font-bold text-violet-700 uppercase tracking-widest mb-2">{PAGE.impactBand.eyebrow}</p>
              <p className="font-poppins font-bold text-ocean-midnight">{PAGE.impactBand.text}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-violet-100">
              <p className="text-xs font-bold text-violet-700 uppercase tracking-widest mb-2">{PAGE.impactBand.eyebrow2}</p>
              <p className="font-poppins font-bold text-ocean-midnight">{PAGE.impactBand.text2}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-violet-100">
              <p className="text-xs font-bold text-violet-700 uppercase tracking-widest mb-2">{PAGE.impactBand.eyebrow3}</p>
              <p className="font-poppins font-bold text-ocean-midnight">{PAGE.impactBand.text3}</p>
            </div>
          </div>
          <p className="text-center text-gray-600 leading-relaxed mt-6 max-w-2xl mx-auto">{PAGE.impactBand.text4}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · The challenge
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.theChallenge.eyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">{PAGE.theChallenge.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{PAGE.theChallenge.text}</p>
              <p className="text-gray-700 leading-relaxed mb-8">{PAGE.theChallenge.text2}</p>
              <ol className="space-y-3">
                {APPROACH.map((item, i) => (
                  <li key={item} className="flex gap-4 items-start">
                    <span className="shrink-0 w-9 h-9 bg-ocean-turquoise text-white rounded-full flex items-center justify-center font-poppins font-bold text-sm">{i + 1}</span>
                    <span className="text-gray-700 leading-relaxed pt-1.5">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '480px' }}>
              <Image
                src={PAGE.theChallenge.image}
                alt={PAGE.theChallenge.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · Designed to include
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.designedToInclude.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">{PAGE.designedToInclude.heading}</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {REACH.map((r) => (
              <div key={r.label} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl md:text-4xl font-poppins font-bold text-violet-700 mb-2">{r.value}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{r.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12">
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '320px' }}>
              <Image
                src={PAGE.designedToInclude.image}
                alt={PAGE.designedToInclude.imageAlt}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">{PAGE.designedToInclude.text}</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · The bigger picture
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.theBiggerPicture.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">{PAGE.theBiggerPicture.heading}</h2>
          <p className="text-gray-700 leading-relaxed">{PAGE.theBiggerPicture.text}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 · Call to action
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-ocean-midnight to-ocean-turquoise/30 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">{PAGE.callToAction.heading}</h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">{PAGE.callToAction.text}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={PAGE.callToAction.link}
              className="px-8 py-4 bg-ocean-turquoise text-white rounded-xl font-bold hover:bg-white hover:text-ocean-turquoise transition-all shadow-lg"
            >{PAGE.callToAction.linkText}</Link>
            <Link
              href={PAGE.callToAction.link2}
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-ocean-midnight transition-all"
            >{PAGE.callToAction.linkText2}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
