/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Project › Pelorus SHE Trash4Cash
 * URL:  /projects/pelorus-she
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero
 *   2. SHE explainer
 *   3. Ripple Effect
 *   4. What peer training covers
 *   5. Turtle nesting highlight
 *   6. Call to action
 *
 * Where the text/data lives:
 *   • FUNDER  →  top of this file
 * Page text, images and links (editable in Pages CMS)  →  content/projects/pelorus-she.json
 */
import Link from 'next/link';
import Image from 'next/image';

import PAGE from '@/content/projects/pelorus-she.json';

export const metadata = PAGE.seo;

const FUNDER = PAGE.FUNDER;

export default function PelorusShePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 · Hero
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-ocean-midnight overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE.hero.image}
            alt={PAGE.hero.imageAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pink-900/80 via-pink-900/70 to-ocean-midnight" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-ocean-turquoise rounded-full animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">{PAGE.hero.eyebrow}</span>
            </div>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">{PAGE.hero.title}</h1>
            <p className="text-xl text-white/90 leading-relaxed mb-3">{PAGE.hero.text}</p>
            <p className="text-sm text-white/60 uppercase tracking-widest mb-8">{PAGE.hero.eyebrow2}</p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">{PAGE.hero.text2}</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">{PAGE.hero.eyebrow3}</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">{PAGE.hero.text3}</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">{PAGE.hero.eyebrow4}</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-ocean-turquoise">{PAGE.hero.text4}</div>
                <div className="text-sm text-white/60 uppercase tracking-widest mt-1">{PAGE.hero.eyebrow5}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Funder badge, floating right */}
        <div className="hidden lg:flex absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 flex-col items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">{PAGE.hero.eyebrow6}</span>
          <div className="relative w-36 h-20 bg-white rounded-xl p-3">
            <Image src={FUNDER.logo} alt={FUNDER.name} fill className="object-contain p-2" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 · SHE explainer
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-pink-50 border border-pink-100">
              <p className="font-poppins font-bold text-pink-800 text-lg">{PAGE.sHEExplainer.text}</p>
              <p className="text-xs text-gray-500 mt-1">{PAGE.sHEExplainer.text2}</p>
            </div>
            <div className="p-5 rounded-2xl bg-pink-50 border border-pink-100">
              <p className="font-poppins font-bold text-pink-800 text-lg">{PAGE.sHEExplainer.text3}</p>
              <p className="text-xs text-gray-500 mt-1">{PAGE.sHEExplainer.text4}</p>
            </div>
            <div className="p-5 rounded-2xl bg-pink-50 border border-pink-100">
              <p className="font-poppins font-bold text-pink-800 text-lg">{PAGE.sHEExplainer.text5}</p>
              <p className="text-xs text-gray-500 mt-1">{PAGE.sHEExplainer.text6}</p>
            </div>
          </div>
          <p className="text-center text-gray-600 leading-relaxed mt-8 max-w-2xl mx-auto">{PAGE.sHEExplainer.text7}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 · Ripple Effect
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.rippleEffect.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight leading-tight">{PAGE.rippleEffect.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-pink-700 flex flex-col">
              <p className="text-xs font-bold text-pink-600 uppercase tracking-widest mb-2">{PAGE.rippleEffect.eyebrow2}</p>
              <div className="text-3xl font-poppins font-bold text-ocean-midnight mb-3">{PAGE.rippleEffect.text}</div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{PAGE.rippleEffect.text2}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-pink-700 flex flex-col">
              <p className="text-xs font-bold text-pink-600 uppercase tracking-widest mb-2">{PAGE.rippleEffect.eyebrow3}</p>
              <div className="text-3xl font-poppins font-bold text-ocean-midnight mb-3">{PAGE.rippleEffect.text3}</div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{PAGE.rippleEffect.text4}</p>
            </div>
            <div className="bg-pink-800 rounded-2xl p-6 shadow-sm flex flex-col">
              <p className="text-xs font-bold text-pink-200 uppercase tracking-widest mb-2">{PAGE.rippleEffect.eyebrow4}</p>
              <div className="text-3xl font-poppins font-bold text-white mb-3">{PAGE.rippleEffect.text5}</div>
              <p className="text-sm text-pink-100 leading-relaxed flex-1">{PAGE.rippleEffect.text6}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 · What peer training covers
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '380px' }}>
              <Image
                src={PAGE.whatPeerTrainingCovers.image}
                alt={PAGE.whatPeerTrainingCovers.imageAlt}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-ocean-turquoise text-xs font-bold uppercase tracking-widest mb-4">{PAGE.whatPeerTrainingCovers.eyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ocean-midnight mb-6 leading-tight">{PAGE.whatPeerTrainingCovers.heading}</h2>
              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-600 mt-2 shrink-0" />{PAGE.whatPeerTrainingCovers.item}</li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-600 mt-2 shrink-0" />{PAGE.whatPeerTrainingCovers.item2}</li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-600 mt-2 shrink-0" />{PAGE.whatPeerTrainingCovers.item3}</li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-600 mt-2 shrink-0" />{PAGE.whatPeerTrainingCovers.item4}</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-6">{PAGE.whatPeerTrainingCovers.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 · Turtle nesting highlight
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-ocean-midnight py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/80 text-lg leading-relaxed">{PAGE.turtleNestingHighlight.text}</p>
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
