/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: About › Our Team
 * URL:  /about/team
 * ══════════════════════════════════════════════════════════════════
 * Sections, top to bottom (search this file for "SECTION <n>"):
 *   1. Hero — "The People Behind the Ocean"
 *   2. Team grid (one tile per person)
 *   3. Community stewards band
 *   4. Join the team — call to action
 *
 * Where the text/data lives:
 *   • TEAM_MEMBERS  →  lib/constants.ts
 * Page text, images and links (editable in Pages CMS)  →  content/pages/about-team.json
 */
import Image from 'next/image';
import Link from 'next/link';
import { TEAM_MEMBERS } from '@/lib/constants';
import PAGE from '@/content/pages/about-team.json';

export const metadata = PAGE.seo;

const GRADIENTS = PAGE.GRADIENTS;

// All cards uniform - same size as the smallest (Ledama/Patrick style)



export default function TeamPage() {
  return (
    <>
      <div className="bg-white min-h-screen">

        {/* ══════════════════════════════════════════════════════════
            HERO - Clean gradient background
        ══════════════════════════════════════════════════════════ */}
        {/* ══════════════════════════════════════════════════════════════════
            SECTION 1 · Hero — "The People Behind the Ocean"
            ══════════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-end overflow-hidden">

        {/* Clean gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-ocean-turquoise/5" />
        </div>

        {/* Foreground text */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 pt-36 md:pt-48 w-full">

          {/* Giant stacked headline */}
          <div className="mb-10 overflow-hidden">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-ocean-turquoise mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-ocean-turquoise/50" />{PAGE.heroThePeopleBehindTheOcean.eyebrow}</p>
            <h1 className="font-poppins font-bold leading-[0.88] select-none">
              <span className="block text-[clamp(64px,12vw,140px)] text-ocean-midnight">{PAGE.heroThePeopleBehindTheOcean.label}</span>
              <span className="block text-[clamp(64px,12vw,140px)] text-ocean-midnight">{PAGE.heroThePeopleBehindTheOcean.label2}</span>
              <span className="block text-[clamp(64px,12vw,140px)] text-ocean-turquoise">{PAGE.heroThePeopleBehindTheOcean.label3}</span>
              <span className="block text-[clamp(64px,12vw,140px)] text-ocean-turquoise">{PAGE.heroThePeopleBehindTheOcean.label4}</span>
            </h1>
          </div>

          {/* Bottom: stats + description */}
          <div className="flex flex-col md:flex-row items-start md:items-end gap-10 max-w-xl">
            <p className="text-gray-600 text-base leading-relaxed">{PAGE.heroThePeopleBehindTheOcean.text}</p>
            <div className="flex gap-8 shrink-0">
              {PAGE.heroThePeopleBehindTheOcean.list.map(([v,l])=>(
                <div key={l}>
                  <div className="text-2xl font-poppins font-bold text-ocean-turquoise leading-none">{v}</div>
                  <div className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll nudge */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[9px] text-gray-400 uppercase tracking-widest">{PAGE.heroThePeopleBehindTheOcean.eyebrow2}</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent" />
        </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
          TEAM GRID - Apple-inspired editorial grid
        ══════════════════════════════════════════════════════════ */}
        {/* ══════════════════════════════════════════════════════════════════
            SECTION 2 · Team grid (one tile per person)
            ══════════════════════════════════════════════════════════════════ */}
        <section className="relative bg-white py-24 overflow-hidden">

        {/* Subtle radial glow at the very top - like an iPhone wallpaper bloom */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(46,191,209,0.12) 0%, transparent 65%)' }} />

        {/* Ghost watermark number */}
        <div
          className="absolute bottom-0 right-0 font-poppins font-black leading-none select-none pointer-events-none text-gray-100"
          style={{ fontSize: 'clamp(220px, 32vw, 380px)' }}
        >{PAGE.teamGrid.text}</div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          {/* ── Apple-style section header ── */}
          <div className="text-center mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-gray-400 mb-4">{PAGE.teamGrid.eyebrow}</p>
            <h2 className="font-poppins font-bold text-ocean-midnight leading-[1.0]"
              style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}>{PAGE.teamGrid.heading}<br />
              <span className="text-gray-400">{PAGE.teamGrid.label}</span>
            </h2>
            <p className="text-gray-500 text-[13px] mt-4 tracking-wide">{PAGE.teamGrid.text2}</p>
          </div>

          {/* ── Uniform square grid ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3">
            {TEAM_MEMBERS.filter((member) => !member.hidden).map((member, i) => {
              const gFrom = GRADIENTS[i % GRADIENTS.length][0];
              const gTo   = GRADIENTS[i % GRADIENTS.length][1];

              return (
                <div
                  key={member.name}
                  className="group relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] bg-gray-100 col-span-1 aspect-square
                    border border-gray-200 hover:border-ocean-turquoise/30
                    transition-all duration-500 ease-out cursor-default shadow-sm hover:shadow-lg"
                >
                  {/* Full-bleed image or gradient placeholder */}
                  <div className="absolute inset-0">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ background: `linear-gradient(145deg, ${gFrom} 0%, ${gTo} 100%)` }}
                      >
                        {/* Oversized initial as abstract background art */}
                        <span
                          className="font-poppins font-black text-white/[0.07] select-none leading-none"
                          style={{ fontSize: '8rem' }}
                        >
                          {member.name.charAt(0)}
                        </span>
                        {/* Centered monogram */}
                        <span
                          className="absolute font-poppins font-bold text-white/50"
                          style={{ fontSize: '1.75rem' }}
                        >
                          {member.initials}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Deep gradient scrim - text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-midnight/90 via-ocean-midnight/40 to-transparent" />

                  {/* Top-right index badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-[9px] font-mono text-white/20 group-hover:text-white/50 transition-colors duration-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Bottom text block */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-3 z-10">
                    <h3 className="font-poppins font-bold text-white leading-tight text-sm sm:text-[0.82rem] break-words">
                      {member.name}
                    </h3>
                    <p className="text-white/60 mt-0.5 uppercase tracking-wider leading-snug text-[0.6rem] sm:text-[0.55rem] line-clamp-3">
                      {member.role}
                    </p>
                    {/* Bio - slides in on hover */}
                    <div className="overflow-hidden max-h-0 group-hover:max-h-10 transition-all duration-500 ease-out">
                      <p className="text-white/30 leading-relaxed mt-1 text-[0.58rem]">
                        {member.bio.slice(0, 60)}{member.bio.length > 60 ? '…' : ''}
                      </p>
                    </div>
                  </div>

                  {/* Hover: top shimmer line */}
                  <div
                    className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent)' }}
                  />
                </div>
              );
            })}

            {/* ── Join card ── */}
            <Link
              href={PAGE.teamGrid.link}
              className="group relative col-span-1 aspect-square rounded-3xl sm:rounded-[2.5rem] overflow-hidden bg-gray-50
                border border-dashed border-gray-300 hover:border-ocean-turquoise
                flex items-center justify-center transition-all duration-500 shadow-sm hover:shadow-lg"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(46,191,209,0.1) 0%, transparent 70%)' }}
              />
              <div className="relative text-center px-4">
                <div className="w-8 h-8 rounded-xl border border-gray-300 group-hover:border-ocean-turquoise flex items-center justify-center mx-auto mb-2 transition-all duration-300 group-hover:scale-110">
                  <span className="text-gray-400 group-hover:text-ocean-turquoise text-lg leading-none transition-colors">+</span>
                </div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-500 group-hover:text-ocean-turquoise transition-colors">{PAGE.teamGrid.eyebrow2}</p>
                <p className="text-[10px] text-gray-400 mt-1">{PAGE.teamGrid.text3}</p>
              </div>
            </Link>
          </div>

        </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
          COMMUNITY - Full-bleed with photo wash
        ══════════════════════════════════════════════════════════ */}
        {/* ══════════════════════════════════════════════════════════════════
            SECTION 3 · Community stewards band
            ══════════════════════════════════════════════════════════════════ */}
        <section className="relative mt-2 overflow-hidden py-28 md:py-40 bg-ocean-midnight">
        <div className="absolute inset-0">
          <Image src={PAGE.communityStewardsBand.image} alt={PAGE.communityStewardsBand.imageAlt} fill className="object-cover opacity-15 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-midnight via-ocean-midnight/90 to-ocean-midnight/60" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-ocean-turquoise/60 mb-6 flex items-center gap-3">
                <span className="w-6 h-px bg-ocean-turquoise/30" />{PAGE.communityStewardsBand.eyebrow}</p>
              <h2 className="font-poppins font-bold leading-[0.9] mb-8">
                <span className="block text-[clamp(48px,8vw,96px)] text-white">{PAGE.communityStewardsBand.label}</span>
                <span className="block text-[clamp(32px,5vw,60px)] text-ocean-turquoise">{PAGE.communityStewardsBand.label2}</span>
                <span className="block text-[clamp(32px,5vw,60px)] text-ocean-turquoise">{PAGE.communityStewardsBand.label3}</span>
              </h2>
              <p className="text-white/45 leading-relaxed max-w-lg text-base mb-8">{PAGE.communityStewardsBand.text}</p>
              <Link href={PAGE.communityStewardsBand.link} className="inline-flex items-center gap-2 text-xs font-bold text-ocean-turquoise group/l hover:gap-4 transition-all">{PAGE.communityStewardsBand.linkText}<span className="group-hover/l:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {PAGE.communityStewardsBand.list.map(([count,role,desc])=>(
                <div key={role} className="group/c rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] hover:border-ocean-turquoise/20 p-6 transition-all duration-300">
                  <div className="text-3xl font-poppins font-bold text-ocean-turquoise mb-1 group-hover/c:scale-105 transition-transform origin-left">{count}</div>
                  <div className="text-xs font-bold text-white/70 mb-1">{role}</div>
                  <p className="text-[10px] text-white/25 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
          CTA - Dark split
        ══════════════════════════════════════════════════════════ */}
        {/* ══════════════════════════════════════════════════════════════════
            SECTION 4 · Join the team — call to action
            ══════════════════════════════════════════════════════════════════ */}
        <section className="border-t border-white/[0.05] py-24 bg-gradient-to-br from-ocean-midnight to-ocean-turquoise/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-ocean-turquoise/60 mb-6">{PAGE.joinTheTeamCallToAction.eyebrow}</p>
              <h2 className="font-poppins font-bold text-white leading-tight mb-6">
                <span className="block text-4xl md:text-5xl">{PAGE.joinTheTeamCallToAction.label}</span>
                <span className="block text-4xl md:text-5xl text-ocean-turquoise">{PAGE.joinTheTeamCallToAction.label2}</span>
              </h2>
              <p className="text-white/40 leading-relaxed mb-8 max-w-md">{PAGE.joinTheTeamCallToAction.text}</p>
              <div className="flex flex-wrap gap-3">
                <Link href={PAGE.joinTheTeamCallToAction.link} className="px-7 py-3.5 bg-ocean-turquoise text-ocean-midnight font-bold rounded-xl hover:bg-white transition-colors text-sm">{PAGE.joinTheTeamCallToAction.linkText}</Link>
                <Link href={PAGE.joinTheTeamCallToAction.link2} className="px-7 py-3.5 border border-white/15 text-white font-bold rounded-xl hover:border-ocean-turquoise hover:text-ocean-turquoise transition-all text-sm">{PAGE.joinTheTeamCallToAction.linkText2}</Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {PAGE.joinTheTeamCallToAction.list.map(role=>(
                <div key={role} className="border border-white/[0.05] hover:border-ocean-turquoise/30 rounded-xl px-4 py-3 text-[11px] font-semibold text-white/30 hover:text-ocean-turquoise transition-all cursor-default">
                  + {role}
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>

      </div>
    </>
  );
}
