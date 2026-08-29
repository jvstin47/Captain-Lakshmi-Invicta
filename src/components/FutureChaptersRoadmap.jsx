import React from 'react';
import { Film, CheckCircle2, ChevronRight, Sparkles, Compass } from 'lucide-react';
import { ALL_CHAPTERS } from '../data/sequencesData';

/**
 * FutureChaptersRoadmap -> Archival Compendium
 * Interactive directory indexing all 14 realized chapters with direct navigation.
 */
export default function FutureChaptersRoadmap() {
  const scrollToChapter = (seqId) => {
    const el = document.getElementById(seqId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="roadmap-section" className="relative py-20 md:py-28 px-6 md:px-12 bg-vintage-charcoal border-t border-bronze/20 text-vintage-paper overflow-hidden">

      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[radial-gradient(#c08269_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Editorial header */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-bronze uppercase mb-4 font-bold">
            <Compass className="w-4 h-4 text-bronze" />
            <span>ARCHIVAL COMPENDIUM // THE FOURTEEN ACTS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-vintage-paper uppercase tracking-tight leading-[0.9] mb-6">
            The Complete<br />
            <span className="text-bronze">Biographical Arc</span>
          </h2>
          <p className="text-base md:text-lg font-serif text-vintage-sand leading-relaxed max-w-2xl">
            From the quiet colonial balconies of 1914 Madras to the frontlines of Burma, 
            the border crisis of 1971, and her final clinical examinations in Kanpur. 
            All fourteen chronological chapters are digitally reconstructed with cinematic frame sequences.
          </p>
          <p className="text-xs font-mono text-vintage-sepia mt-4 uppercase tracking-widest flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            14 of 14 Reconstructed Chapters Active
          </p>
        </div>

        {/* 14 Chapter Grid — editorial broadsheet style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ALL_CHAPTERS.map((ch) => (
            <div
              key={ch.id}
              onClick={() => ch.sequenceId && scrollToChapter(ch.sequenceId)}
              className="relative p-6 bg-vintage-deepInk/80 hover:bg-vintage-deepInk border border-vintage-slate/50 hover:border-bronze/70 rounded-lg transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-0.5"
            >
              {/* Chapter number watermark */}
              <div className="absolute top-4 right-4 text-4xl font-display font-black text-vintage-charcoal/80 leading-none select-none group-hover:text-bronze/15 transition-colors">
                {ch.number}
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-bronze uppercase mb-2">
                  <span>ACT {ch.number}</span>
                  <span className="text-vintage-tan">{ch.year}</span>
                </div>
                
                <h3 className="text-base font-display font-bold text-vintage-sand group-hover:text-vintage-paper transition-colors mb-1.5 leading-tight">
                  {ch.title}
                </h3>
                
                <p className="text-xs font-serif text-vintage-sepia leading-relaxed line-clamp-2">
                  {ch.subtitle}
                </p>

                <div className="mt-4 pt-3 border-t border-vintage-charcoal flex items-center gap-1.5 text-[10px] font-mono text-bronze/90 uppercase group-hover:text-bronze transition-colors">
                  <Sparkles className="w-3 h-3 text-bronze" />
                  <span>Interactive Scene</span>
                  <ChevronRight className="w-3 h-3 ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
