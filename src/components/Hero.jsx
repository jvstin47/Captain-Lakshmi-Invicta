import React, { useRef, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Image, Shield, HeartPulse, History, Sparkles, Camera, Play, Pause } from 'lucide-react';
import { HERO_ARCHIVAL_PHOTOS } from '../data/heroPhotosData';

export default function Hero({ isAutoScrolling, onToggleAutoScroll }) {
  const carouselRef = useRef(null);
  const [imageErrors, setImageErrors] = useState({});

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const offset = direction === 'left' ? -360 : 360;
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const scrollToFirstSequence = () => {
    const el = document.getElementById('seq-01-origins');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 pt-24 pb-10 bg-vintage-deepInk text-vintage-paper overflow-hidden">
      
      {/* Background Vintage Warmth & Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-bronze/10 rounded-full blur-[160px] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(#2d2822_1px,transparent_1px)] [background-size:32px_32px] opacity-35" />
      </div>

      {/* Top Classification Header */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-vintage-charcoal pb-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-bronze animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-vintage-tan uppercase">
            HISTORICAL MONOGRAPH & ARCHIVAL DOSSIER
          </span>
        </div>
        <div className="text-xs font-mono tracking-widest text-bronze uppercase flex items-center gap-3">
          <span>MADRAS</span>
          <span className="text-vintage-sepia">•</span>
          <span>SINGAPORE</span>
          <span className="text-vintage-sepia">•</span>
          <span>BURMA</span>
          <span className="text-vintage-sepia">•</span>
          <span>KANPUR</span>
        </div>
      </div>

      {/* Main Display Typography */}
      <div className="relative z-10 max-w-7xl mx-auto w-full mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          <div className="lg:col-span-8">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black text-vintage-paper tracking-tight leading-[0.88] uppercase mb-4">
              Lakshmi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-vintage-paper via-vintage-sand to-bronze">
                Sahgal
              </span>
            </h1>
            <p className="text-lg md:text-xl font-serif text-vintage-sand leading-relaxed max-w-2xl font-normal">
              Physician. Commander of the Rani of Jhansi Regiment. Minister. Prisoner of War. Lifelong Healer to the Dispossessed.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-2.5 pb-2 text-xs font-mono border-t lg:border-t-0 lg:border-l border-vintage-charcoal lg:pl-6">
            <div className="flex items-center gap-2 text-vintage-paper">
              <HeartPulse className="w-3.5 h-3.5 text-bronze flex-shrink-0" />
              <span>74 Years in Medical Practice</span>
            </div>
            <div className="flex items-center gap-2 text-vintage-paper">
              <Shield className="w-3.5 h-3.5 text-bronze flex-shrink-0" />
              <span>Asia's First Women's Combat Infantry</span>
            </div>
            <div className="flex items-center gap-2 text-vintage-paper">
              <History className="w-3.5 h-3.5 text-bronze flex-shrink-0" />
              <span>Padma Vibhushan Awardee (1998)</span>
            </div>
          </div>

        </div>
      </div>

      {/* Horizontal Archival Photographs Carousel Section */}
      <div className="relative z-10 max-w-7xl mx-auto w-full mb-8">
        
        {/* Carousel Header & Controls */}
        <div className="flex items-center justify-between gap-4 pb-3 mb-3 border-b border-vintage-charcoal/80 text-xs font-mono">
          <div className="flex items-center gap-2 text-bronze font-bold uppercase tracking-wider">
            <Camera className="w-4 h-4" />
            <span>ARCHIVAL PHOTOGRAPHIC RECORD // AUTHENTIC HISTORICAL PORTRAITS</span>
          </div>

          <div className="flex items-center gap-2 text-vintage-tan">
            <span className="hidden sm:inline text-[11px] uppercase">SCROLL CAROUSEL</span>
            <button 
              onClick={() => scrollCarousel('left')}
              className="p-1.5 rounded border border-vintage-slate bg-vintage-charcoal hover:border-bronze hover:text-bronze text-vintage-paper transition"
              aria-label="Scroll photos left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scrollCarousel('right')}
              className="p-1.5 rounded border border-vintage-slate bg-vintage-charcoal hover:border-bronze hover:text-bronze text-vintage-paper transition"
              aria-label="Scroll photos right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Scroll Track — relative wrapper enables right-edge fade */}
        <div className="relative">
          {/* Right-edge gradient fade — signals more content */}
          <div className="absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-vintage-deepInk via-vintage-deepInk/70 to-transparent z-10 pointer-events-none" />

          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
          >
          {HERO_ARCHIVAL_PHOTOS.map((photo, idx) => {
            const hasError = imageErrors[photo.id];

            return (
              <div 
                key={photo.id}
                className="min-w-[260px] sm:min-w-[290px] max-w-[300px] flex-shrink-0 rounded-lg bg-vintage-charcoal/80 border border-vintage-slate hover:border-bronze transition-all duration-300 shadow-xl overflow-hidden flex flex-col group"
              >
                {/* Photo Area / Fallback Container */}
                <div className="aspect-[4/3] w-full bg-vintage-deepInk relative flex items-center justify-center overflow-visible border-b border-vintage-charcoal">
                  {!hasError ? (
                    <img 
                      src={photo.filename}
                      alt={photo.title}
                      onError={() => handleImageError(photo.id)}
                      className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500 group-hover:scale-105 photo-torn"
                    />
                  ) : (
                    /* Historical Archival Placeholder */
                    <div className="flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-10 h-10 rounded-full border border-bronze/40 flex items-center justify-center bg-bronze/10 text-bronze mb-2">
                        <Image className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-bronze uppercase font-bold tracking-wider">
                        ARCHIVAL PHOTO {idx + 1}
                      </span>
                      <span className="text-[10px] font-serif text-vintage-tan mt-1 line-clamp-2">
                        {photo.title}
                      </span>
                    </div>
                  )}

                  {/* Year Tag Badge */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-vintage-deepInk/90 backdrop-blur-sm border border-vintage-slate text-[10px] font-mono text-bronze font-bold">
                    {photo.year}
                  </div>
                </div>

                {/* Caption & Metadata */}
                <div className="p-3.5 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="text-sm font-display font-bold text-vintage-paper mb-1 group-hover:text-bronze transition-colors">
                      {photo.title}
                    </h4>
                    <p className="text-[11px] font-serif text-vintage-tan line-clamp-2 leading-relaxed mb-2">
                      {photo.caption}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-vintage-charcoal text-[9px] font-mono text-vintage-sepia uppercase">
                    {photo.source}
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>

      </div>

      {/* Bottom Scroll Prompt Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 border-t border-vintage-charcoal flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-4 text-xs font-mono text-vintage-tan tracking-wider uppercase">
          <span className="text-bronze font-bold">ACT 01 OF 14</span>
          <span>•</span>
          <span>MADRAS PRESIDENCY (1914)</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Auto Tour Button */}
          <button
            onClick={onToggleAutoScroll}
            className={`flex items-center gap-2 px-5 py-2 rounded-full border text-xs font-mono tracking-widest uppercase transition-all shadow-lg ${
              isAutoScrolling
                ? 'bg-bronze text-vintage-deepInk border-bronze-light font-bold shadow-[0_0_20px_rgba(192,130,105,0.4)]'
                : 'bg-vintage-deepInk border-bronze/50 hover:border-bronze text-bronze hover:bg-bronze/10'
            }`}
          >
            {isAutoScrolling ? (
              <>
                <Pause className="w-3.5 h-3.5 animate-pulse" />
                <span>PAUSE AUTO TOUR</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>START AUTO TOUR</span>
              </>
            )}
          </button>

          {/* Manual Enter Button */}
          <button 
            onClick={scrollToFirstSequence}
            className="group flex items-center gap-3 px-6 py-2 rounded-full bg-vintage-charcoal border border-bronze/50 hover:border-bronze text-vintage-paper hover:text-bronze text-xs font-mono tracking-widest uppercase transition-all shadow-lg"
          >
            <span>ENTER STORY</span>
            <ChevronDown className="w-4 h-4 text-bronze group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

      </div>

    </section>
  );
}
