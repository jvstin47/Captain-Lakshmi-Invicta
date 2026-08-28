import React from 'react';
import { Film, Hourglass, ChevronRight } from 'lucide-react';
import { ALL_CHAPTERS } from '../data/sequencesData';

/**
 * FutureChaptersRoadmap — v2
 * Reframed as an atmospheric editorial "The Story Continues" narrative teaser
 * rather than a placeholder grid of grey "PIPELINE STANDBY" cards.
 */
export default function FutureChaptersRoadmap() {
  const futureChapters = ALL_CHAPTERS.filter(c => c.isPlaceholder);

  return (
    <section id="roadmap-section" className="relative py-20 md:py-28 px-6 md:px-12 bg-vintage-charcoal border-t border-bronze/20 text-vintage-paper overflow-hidden">

      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[radial-gradient(#c08269_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Editorial header */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-bronze uppercase mb-4 font-bold">
            <Hourglass className="w-4 h-4 text-bronze" />
            <span>THE STORY CONTINUES — ACTS 07 TO 14</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-vintage-paper uppercase tracking-tight leading-[0.9] mb-6">
            A Life That Would<br />
            <span className="text-bronze">Not Stand Still</span>
          </h2>
          <p className="text-base md:text-lg font-serif text-vintage-sand leading-relaxed max-w-2xl">
            The march across Burma. The Red Fort trials. Fifty years treating the poor in Kanpur.
            The Bhopal survivors. The 2002 Presidential race. Her story did not end with the war —
            it deepened into something rarer still: a life of absolute, unbroken conviction.
          </p>
          <p className="text-sm font-mono text-vintage-sepia mt-4 uppercase tracking-widest">
            Additional cinematic reconstructions will be released as chapters activate.
          </p>
        </div>

        {/* Chapter teaser list — editorial newspaper column style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-vintage-charcoal/60 border border-vintage-slate/40 rounded-lg overflow-hidden">
          {futureChapters.map((ch, idx) => (
            <div
              key={ch.id}
              className="relative p-6 bg-vintage-deepInk/60 hover:bg-vintage-deepInk transition-colors duration-300 group"
            >
              {/* Chapter number watermark */}
              <div className="absolute top-4 right-4 text-5xl font-display font-black text-vintage-charcoal/60 leading-none select-none group-hover:text-bronze/10 transition-colors">
                {ch.number}
              </div>

              <div className="relative z-10">
                <div className="text-[10px] font-mono tracking-widest text-bronze/70 uppercase mb-2">
                  {ch.year}
                </div>
                <h3 className="text-base font-display font-bold text-vintage-sand group-hover:text-vintage-paper transition-colors mb-1 leading-tight">
                  {ch.title}
                </h3>
                <p className="text-xs font-serif text-vintage-sepia leading-relaxed">
                  {ch.subtitle}
                </p>

                <div className="mt-4 flex items-center gap-1 text-[10px] font-mono text-vintage-sepia/50 uppercase group-hover:text-bronze/50 transition-colors">
                  <Film className="w-3 h-3" />
                  <span>In Production</span>
                  <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
