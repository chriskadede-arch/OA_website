import Image from 'next/image';
import Link from 'next/link';
import { TEAM_MEMBERS } from '@/lib/constants';

export const metadata = {
  title: 'Our Team - Oceans Alive Foundation',
  description: 'Meet the Oceans Alive Foundation team - 18 specialists and community stewards protecting Kenya\'s coast.',
};

const GRADIENTS = [
  ['#022F4E','#0a4f7a'],
  ['#1a6b5a','#0e4a3c'],
  ['#0a4f7a','#0e6b8a'],
  ['#6b3a00','#9a5500'],
  ['#3d1a6b','#4f2a8a'],
  ['#1a4a5a','#022F4E'],
];

// All cards uniform - same size as the smallest (Ledama/Patrick style)



export default function TeamPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ══════════════════════════════════════════════════════════
          HERO - Clean gradient background
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">

        {/* Clean gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-ocean-turquoise/5" />
        </div>

        {/* Foreground text */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 pt-36 w-full">

          {/* Giant stacked headline */}
          <div className="mb-10 overflow-hidden">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-ocean-turquoise mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-ocean-turquoise/50" />
              Oceans Alive Foundation
            </p>
            <h1 className="font-poppins font-bold leading-[0.88] select-none">
              <span className="block text-[clamp(64px,12vw,140px)] text-ocean-midnight">The</span>
              <span className="block text-[clamp(64px,12vw,140px)] text-ocean-midnight">People</span>
              <span className="block text-[clamp(64px,12vw,140px)] text-ocean-turquoise">Behind</span>
              <span className="block text-[clamp(64px,12vw,140px)] text-ocean-turquoise">the Ocean.</span>
            </h1>
          </div>

          {/* Bottom: stats + description */}
          <div className="flex flex-col md:flex-row items-start md:items-end gap-10 max-w-xl">
            <p className="text-gray-600 text-base leading-relaxed">
              18 specialists. Community stewards. One coastline. Since 2003.
            </p>
            <div className="flex gap-8 shrink-0">
              {[['18','Core team'],['20+','Years']].map(([v,l])=>(
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
          <span className="text-[9px] text-gray-400 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TEAM GRID - Apple-inspired editorial grid
      ══════════════════════════════════════════════════════════ */}
      <section className="relative bg-white py-24 overflow-hidden">

        {/* Subtle radial glow at the very top - like an iPhone wallpaper bloom */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(46,191,209,0.12) 0%, transparent 65%)' }} />

        {/* Ghost watermark number */}
        <div
          className="absolute bottom-0 right-0 font-poppins font-black leading-none select-none pointer-events-none text-gray-100"
          style={{ fontSize: 'clamp(220px, 32vw, 380px)' }}
        >
          15
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          {/* ── Apple-style section header ── */}
          <div className="text-center mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-gray-400 mb-4">
              The Team
            </p>
            <h2 className="font-poppins font-bold text-ocean-midnight leading-[1.0]"
              style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}>
              The people<br />
              <span className="text-gray-400">behind the ocean.</span>
            </h2>
            <p className="text-gray-500 text-[13px] mt-4 tracking-wide">
              19 specialists · Kilifi County, Kenya
            </p>
          </div>

          {/* ── Uniform square grid ── */}
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
            {TEAM_MEMBERS.map((member, i) => {
              const gFrom = GRADIENTS[i % GRADIENTS.length][0];
              const gTo   = GRADIENTS[i % GRADIENTS.length][1];

              return (
                <div
                  key={member.name}
                  className="group relative overflow-hidden rounded-[2.5rem] bg-gray-100 col-span-1 aspect-square
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
                  <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                    <h3 className="font-poppins font-bold text-white leading-tight text-[0.82rem]">
                      {member.name}
                    </h3>
                    <p className="text-white/40 mt-0.5 uppercase tracking-widest text-[0.55rem]">
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
              href="/contact?type=Volunteer"
              className="group relative col-span-1 aspect-square rounded-[2.5rem] overflow-hidden bg-gray-50
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
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-500 group-hover:text-ocean-turquoise transition-colors">
                  Join the team
                </p>
                <p className="text-[10px] text-gray-400 mt-1">
                  We&apos;re always looking for talent
                </p>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          COMMUNITY - Full-bleed with photo wash
      ══════════════════════════════════════════════════════════ */}
      <section className="relative mt-2 overflow-hidden py-28 md:py-40 bg-ocean-midnight">
        <div className="absolute inset-0">
          <Image src="/images/BMUS.jpg" alt="Community" fill className="object-cover opacity-15 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-midnight via-ocean-midnight/90 to-ocean-midnight/60" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-ocean-turquoise/60 mb-6 flex items-center gap-3">
                <span className="w-6 h-px bg-ocean-turquoise/30" /> The Backbone
              </p>
              <h2 className="font-poppins font-bold leading-[0.9] mb-8">
                <span className="block text-[clamp(48px,8vw,96px)] text-white">7,000+</span>
                <span className="block text-[clamp(32px,5vw,60px)] text-ocean-turquoise">Community</span>
                <span className="block text-[clamp(32px,5vw,60px)] text-ocean-turquoise">Stewards</span>
              </h2>
              <p className="text-white/45 leading-relaxed max-w-lg text-base mb-8">
                Fishers, reef monitors, women leaders, BMU reps, and community rangers -
                the 7,000+ people who protect Kenya&apos;s coast because it is their home.
              </p>
              <Link href="/about/story" className="inline-flex items-center gap-2 text-xs font-bold text-ocean-turquoise group/l hover:gap-4 transition-all">
                Read our story <span className="group-hover/l:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ['40+','Reef Monitors','Certified community divers'],
                ['12','BMU Reps','Across Kilifi County'],
                ['120','Women Leaders','Trash4Cash & LIFT Network'],
                ['25+','Sea Rangers','Turtle & fishery patrol'],
              ].map(([count,role,desc])=>(
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
      <section className="border-t border-white/[0.05] py-24 bg-ocean-midnight">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-ocean-turquoise/60 mb-6">Work With Us</p>
              <h2 className="font-poppins font-bold text-white leading-tight mb-6">
                <span className="block text-4xl md:text-5xl">Join the team.</span>
                <span className="block text-4xl md:text-5xl text-ocean-turquoise">Protect the ocean.</span>
              </h2>
              <p className="text-white/40 leading-relaxed mb-8 max-w-md">
                Marine biologists, educators, communicators, and field researchers -
                we welcome talent at Kuruwitu and across Kilifi County.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact?type=Volunteer" className="px-7 py-3.5 bg-ocean-turquoise text-ocean-midnight font-bold rounded-xl hover:bg-white transition-colors text-sm">
                  Volunteer / Intern
                </Link>
                <Link href="/contact?type=Other" className="px-7 py-3.5 border border-white/15 text-white font-bold rounded-xl hover:border-ocean-turquoise hover:text-ocean-turquoise transition-all text-sm">
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {['Marine Biologist','Community Educator','Communications','Field Researcher','Policy Analyst','Permaculture Specialist'].map(role=>(
                <div key={role} className="border border-white/[0.05] hover:border-ocean-turquoise/30 rounded-xl px-4 py-3 text-[11px] font-semibold text-white/30 hover:text-ocean-turquoise transition-all cursor-default">
                  + {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
