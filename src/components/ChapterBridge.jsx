import React from 'react';
import { BookOpen, Compass, Quote, FileText, ArrowRight, Sparkles } from 'lucide-react';

/**
 * ChapterBridge — v2
 * - Passes correct archivalExhibitId per sequence (not hardcoded arch-01)
 * - Subtle per-era eraAccent colour tint on the left border + drop cap
 */
export default function ChapterBridge({ sequence, nextSequence, onOpenArchivalModal }) {
  const accent = sequence.eraAccent || '#c08269';

  return (
    <section
      className="relative py-14 md:py-20 px-6 md:px-12 bg-gradient-to-b from-vintage-deepInk via-vintage-charcoal/80 to-vintage-deepInk border-y border-vintage-charcoal overflow-hidden text-vintage-paper"
      style={{
        // Very subtle era-specific warm/cool tint on the background
        backgroundImage: `radial-gradient(ellipse at 70% 50%, ${accent}14 0%, transparent 65%)`,
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Top Historical Dateline Tag */}
        <div
          className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase mb-5 pb-2 border-b border-vintage-charcoal"
          style={{ color: accent }}
        >
          <BookOpen className="w-4 h-4" style={{ color: accent }} />
          <span>HISTORICAL DISPATCH // ACT {sequence.chapterNumber} // {sequence.era}</span>
        </div>

        {/* 2-Column Vintage Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Context & Narrative with Editorial Drop Cap */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-vintage-paper tracking-tight leading-tight mb-4">
              {sequence.title}
            </h2>

            <div className="text-base md:text-lg font-serif text-vintage-sand leading-relaxed mb-6">
              {/* Per-era accent on the drop cap */}
              <span
                className="float-left text-4xl font-display font-bold leading-none pr-2 pt-1"
                style={{ color: accent }}
              >
                {sequence.historicalContext.charAt(0)}
              </span>
              {sequence.historicalContext.slice(1)}
            </div>

            {/* Historical Quote Callout with per-era left border */}
            <div
              className="relative p-6 md:p-7 rounded-lg bg-vintage-deepInk/90 border-y border-r border-vintage-charcoal shadow-2xl mb-6"
              style={{ borderLeftWidth: '4px', borderLeftColor: accent }}
            >
              <Quote
                className="absolute top-4 right-4 w-8 h-8 opacity-15"
                style={{ color: accent }}
              />
              <blockquote className="font-serif italic text-lg md:text-xl text-vintage-paper leading-relaxed mb-3">
                "{sequence.quote.text}"
              </blockquote>
              <div className="text-xs font-mono tracking-wider uppercase font-bold" style={{ color: accent }}>
                — {sequence.quote.author}
              </div>
              <div className="text-[11px] font-mono text-vintage-tan mt-0.5">
                Archival Record: {sequence.quote.source}
              </div>
            </div>

            {/* Primary Source Verification Stamp */}
            <div className="flex items-center gap-2 text-xs font-mono text-vintage-tan bg-vintage-deepInk/80 px-4 py-2 rounded border border-vintage-charcoal w-max">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
              <span>VERIFIED HISTORICAL RECORD // NATIONAL ARCHIVES OF INDIA</span>
            </div>
          </div>

          {/* Right Column: Archival Ledger Card */}
          <div className="lg:col-span-5 flex flex-col gap-5">

            <div className="p-6 md:p-7 rounded-lg bg-vintage-deepInk border border-vintage-slate shadow-2xl relative">
              <div
                className="flex items-center justify-between text-xs font-mono uppercase mb-4 pb-2 border-b border-vintage-charcoal font-bold"
                style={{ color: accent }}
              >
                <span>ARCHIVAL LEDGER</span>
                <span>ACT {sequence.chapterNumber}</span>
              </div>

              <div className="space-y-3.5 text-xs font-mono">
                <div>
                  <div className="text-vintage-sepia uppercase text-[10px] font-bold">HISTORICAL LOCATION</div>
                  <div className="text-vintage-paper font-semibold text-sm mt-0.5">{sequence.location}</div>
                </div>

                <div>
                  <div className="text-vintage-sepia uppercase text-[10px] font-bold">TIME PERIOD</div>
                  <div className="text-vintage-paper font-semibold mt-0.5">{sequence.era}</div>
                </div>

                <div>
                  <div className="text-vintage-sepia uppercase text-[10px] font-bold">EDITORIAL SIGNIFICANCE</div>
                  <div className="text-vintage-sand font-serif text-sm leading-relaxed mt-0.5">
                    {sequence.tagline}
                  </div>
                </div>
              </div>

              {/* Fixed: passes correct archivalExhibitId per sequence */}
              <button
                onClick={() => onOpenArchivalModal && onOpenArchivalModal(sequence.archivalExhibitId || 'arch-01')}
                className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-vintage-charcoal border text-xs font-mono tracking-widest uppercase transition-all duration-300 shadow font-bold hover:text-vintage-deepInk"
                style={{ borderColor: `${accent}80`, color: accent }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = accent; e.currentTarget.style.color = '#12100e'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = accent; }}
              >
                <FileText className="w-4 h-4" />
                <span>EXAMINE ARCHIVAL EVIDENCE</span>
              </button>
            </div>

            {/* Next Chapter Guide */}
            {nextSequence && (
              <div className="p-4 rounded-lg bg-vintage-charcoal/40 border border-vintage-charcoal flex items-center justify-between">
                <div>
                  <div
                    className="text-[10px] font-mono tracking-widest uppercase font-bold"
                    style={{ color: nextSequence.eraAccent || accent }}
                  >
                    NEXT RECONSTRUCTION
                  </div>
                  <div className="text-sm font-display font-semibold text-vintage-paper mt-0.5">
                    Act {nextSequence.chapterNumber}: {nextSequence.title}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4" style={{ color: nextSequence.eraAccent || accent }} />
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
