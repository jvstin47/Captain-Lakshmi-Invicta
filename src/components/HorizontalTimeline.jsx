import React, { useRef, useState } from 'react';
import { TIMELINE_MILESTONES } from '../data/timelineData';
import { ChevronLeft, ChevronRight, Newspaper, Compass, Calendar, Bookmark, Printer } from 'lucide-react';

export default function HorizontalTimeline() {
  const scrollContainerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'ORIGINS', 'MEDICINE', 'COMMAND', 'HUMANITARIAN', 'ACTIVISM', 'LEGACY'];

  const filteredMilestones = activeCategory === 'ALL' 
    ? TIMELINE_MILESTONES 
    : TIMELINE_MILESTONES.filter(m => m.category === activeCategory);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="timeline-section" className="relative py-20 px-6 md:px-12 bg-vintage-newsprint text-vintage-ink border-y-4 border-vintage-ink overflow-hidden shadow-inner">
      
      {/* Authentic Newspaper Watermark Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Newspaper Broadsheet Masthead */}
        <div className="border-b-4 border-t-2 border-vintage-ink py-4 mb-8 text-center">
          
          {/* Top Dateline & Gazette Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono uppercase tracking-widest text-vintage-charcoal border-b border-vintage-charcoal/40 pb-2 mb-3 px-2">
            <span>VOL. CVI • NO. 365</span>
            <span className="font-bold tracking-widest">★ THE HISTORICAL GAZETTE & DISPATCH ★</span>
            <span>PRICE: TWO ANNAS (1914–2012)</span>
          </div>

          {/* Main Masthead Title */}
          <div className="px-4 py-2">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-vintage-deepInk uppercase scale-y-95">
              The Century of Lakshmi
            </h2>
            <p className="text-sm md:text-base font-news italic text-vintage-charcoal mt-1 max-w-3xl mx-auto">
              "A Comprehensive Daily Chronicle of Dr. Lakshmi Sahgal: From Colonial Madras to the Singapore Frontlines and Beyond"
            </p>
          </div>

          {/* Sub-Masthead Issue Metadata Rule */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-wider text-vintage-charcoal/80 border-t border-b-2 border-vintage-ink/80 pt-2 pb-1.5 px-2 mt-2">
            <span>CITY EDITIONS: MADRAS • SINGAPORE • RANGOON • KANPUR</span>
            <span className="hidden sm:inline">AUTHENTIC RECTIFIED DISPATCHES</span>
            <span>SPECIAL HISTORICAL RECORD</span>
          </div>

        </div>

        {/* Category News Desks & Navigation Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-vintage-charcoal/30">
          
          {/* Category Filter Buttons (Styled as News Departments) */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-terracotta mr-2 flex items-center gap-1">
              <Newspaper className="w-3.5 h-3.5" /> DESK:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-xs font-mono tracking-wider uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-vintage-ink text-vintage-paper font-bold shadow'
                    : 'bg-vintage-cream/70 text-vintage-charcoal hover:bg-vintage-sand border border-vintage-charcoal/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 text-xs font-mono text-vintage-charcoal">
            <span className="hidden lg:inline text-[11px] font-bold">TURN BROADSHEET PAGES:</span>
            <div className="flex items-center gap-1.5">
              <button 
                onClick={() => scroll('left')}
                className="p-2 border border-vintage-ink bg-vintage-cream hover:bg-vintage-ink hover:text-vintage-paper transition text-vintage-ink shadow-sm"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-2 border border-vintage-ink bg-vintage-cream hover:bg-vintage-ink hover:text-vintage-paper transition text-vintage-ink shadow-sm"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Horizontal Newspaper Articles Track */}
        <div className="relative">
          {/* Right-edge fade signals more articles */}
          <div className="absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-vintage-newsprint via-vintage-newsprint/80 to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar cursor-grab active:cursor-grabbing scroll-smooth"
          >
          {filteredMilestones.map((item) => (
            <article
              key={`${item.year}-${item.title}`}
              className="min-w-[320px] max-w-[360px] flex-shrink-0 p-6 bg-[#faf7f0] border-2 border-vintage-ink shadow-[4px_4px_0px_rgba(28,25,23,0.8)] hover:shadow-[6px_6px_0px_rgba(184,84,72,0.9)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group relative"
            >
              {/* Paper Corner Stamp Decoration */}
              <div className="absolute top-2 right-2 text-[9px] font-mono text-terracotta border border-terracotta/40 px-1.5 py-0.2 uppercase font-bold">
                {item.year}
              </div>

              <div>
                {/* Year & Dateline Banner */}
                <div className="border-b border-vintage-ink/40 pb-2 mb-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl font-display font-black text-vintage-deepInk group-hover:text-terracotta transition-colors">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-mono uppercase font-bold text-vintage-sepia">
                      [{item.category}]
                    </span>
                  </div>
                  <div className="text-[11px] font-mono font-bold text-terracotta uppercase flex items-center gap-1 mt-0.5">
                    <Compass className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Article Headline */}
                <h3 className="text-xl font-display font-bold text-vintage-deepInk leading-snug mb-3 group-hover:text-terracotta transition-colors">
                  {item.title}
                </h3>

                {/* Article Body with Classic Drop Cap */}
                <div className="text-xs md:text-sm font-serif text-vintage-charcoal leading-relaxed mb-4 text-justify">
                  <span className="float-left text-3xl font-display font-bold leading-none pr-1.5 pt-0.5 text-vintage-deepInk">
                    {item.description.charAt(0)}
                  </span>
                  {item.description.slice(1)}
                </div>
              </div>

              {/* Editorial Impact Footnote */}
              <div className="pt-3 border-t-2 border-dashed border-vintage-ink/40 text-[11px] font-mono text-vintage-deepInk bg-vintage-cream/40 p-2.5 rounded-sm">
                <span className="text-terracotta font-bold">HISTORICAL IMPACT: </span>
                <span className="font-serif italic text-xs">{item.impact}</span>
              </div>

            </article>
          ))}
          </div>
        </div>

        {/* Newspaper Footer Rule */}
        <div className="border-t border-vintage-ink/40 pt-3 mt-4 flex flex-wrap items-center justify-between text-[10px] font-mono text-vintage-charcoal uppercase">
          <span>COMPILED FROM ARCHIVAL TELEGRAMS & OFFICIAL DISPATCHES</span>
          <span>THE CITIZEN ARCHIVE • SPECIAL SUPPLEMENT</span>
        </div>

      </div>

    </section>
  );
}
