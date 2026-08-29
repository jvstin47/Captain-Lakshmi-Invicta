import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Clock, Award, Shield, Sparkles } from 'lucide-react';
import { SEQUENCES, ALL_CHAPTERS } from '../data/sequencesData';

export default function Navigation({ activeChapterId }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeSeq = SEQUENCES.find(s => s.id === activeChapterId) || SEQUENCES[0];

  const scrollToSection = (id) => {
    setIsDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-vintage-deepInk/95 backdrop-blur-md border-b border-vintage-charcoal/90 py-3 shadow-2xl' 
            : 'bg-gradient-to-b from-vintage-deepInk/90 via-vintage-deepInk/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Refined Clean Editorial Subject Header */}
          <div 
            className="flex flex-col cursor-pointer group" 
            onClick={() => scrollToSection('hero')}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bronze group-hover:scale-125 transition-transform" />
              <span className="text-xs md:text-sm font-display font-bold tracking-widest text-vintage-cream uppercase group-hover:text-bronze transition-colors">
                Lakshmi Sahgal
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-widest text-vintage-tan/80 uppercase pl-4">
              1914 — 2012 // Monograph
            </span>
          </div>

          {/* Center: Live Story Act Tracker */}
          <div className="hidden lg:flex items-center gap-3 px-4 py-1.5 rounded-full bg-vintage-charcoal/80 border border-vintage-slate/70 backdrop-blur-md text-xs font-mono">
            <span className="text-bronze font-bold">ACT {activeSeq?.chapterNumber || '01'}</span>
            <span className="text-vintage-sepia">/</span>
            <span className="text-vintage-sand tracking-wider uppercase text-[11px] font-medium">
              {activeSeq?.title || 'The Awakening'}
            </span>
          </div>

          {/* Right Navigation Controls */}
          <div className="flex items-center gap-4 md:gap-6 text-xs font-mono tracking-widest uppercase">
            <button 
              onClick={() => scrollToSection('timeline-section')}
              className="hidden md:inline-flex items-center gap-1.5 text-vintage-sand hover:text-bronze transition-colors"
            >
              <Clock className="w-3.5 h-3.5 text-bronze" />
              <span>Timeline</span>
            </button>

            <button 
              onClick={() => scrollToSection('portfolio-section')}
              className="hidden md:inline-flex items-center gap-1.5 text-vintage-sand hover:text-bronze transition-colors"
            >
              <Award className="w-3.5 h-3.5 text-bronze" />
              <span>The Record</span>
            </button>

            <button 
              onClick={() => scrollToSection('chapter-06-hub')}
              className="hidden sm:inline-flex items-center gap-1.5 text-vintage-sand hover:text-bronze transition-colors"
            >
              <Shield className="w-3.5 h-3.5 text-bronze" />
              <span>The Commander</span>
            </button>

            {/* Chapters Drawer Button */}
            <button 
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded border border-vintage-slate/90 bg-vintage-charcoal/80 hover:border-bronze hover:text-bronze text-vintage-cream transition-all text-xs shadow"
              aria-label="Toggle story chapters"
            >
              {isDrawerOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span className="hidden sm:inline">CHAPTERS</span>
            </button>
          </div>
        </div>
      </header>

      {/* Chapters Overlay / Archival Directory */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-40 bg-vintage-deepInk/98 backdrop-blur-2xl flex flex-col justify-between p-6 md:p-12 overflow-y-auto animate-fadeIn">
          <div className="max-w-6xl mx-auto w-full pt-16">
            
            <div className="flex items-center justify-between border-b border-vintage-charcoal pb-4 mb-8">
              <div>
                <span className="text-xs font-mono tracking-widest text-bronze uppercase">CHRONOLOGICAL ARCHIVE</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-vintage-paper">The Fourteen Acts of Lakshmi Sahgal</h2>
              </div>
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 rounded-full border border-vintage-charcoal text-vintage-sand hover:text-bronze hover:border-bronze transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chapter Directory Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ALL_CHAPTERS.map((ch) => (
                <div 
                  key={ch.id}
                  onClick={() => {
                    if (ch.hasClip && ch.sequenceId) {
                      scrollToSection(ch.sequenceId);
                    } else if (ch.isArchivalHub) {
                      scrollToSection('chapter-06-hub');
                    } else {
                      scrollToSection('roadmap-section');
                    }
                  }}
                  className={`group p-4 rounded-lg border transition-all cursor-pointer ${
                    ch.hasClip 
                      ? 'bg-vintage-charcoal/70 border-vintage-slate hover:border-bronze hover:bg-vintage-charcoal'
                      : ch.isArchivalHub
                      ? 'bg-bronze/10 border-bronze/50 hover:border-bronze hover:bg-bronze/20'
                      : 'bg-vintage-deepInk/60 border-vintage-charcoal/50 opacity-60 hover:opacity-100 hover:border-vintage-slate'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className={`font-bold ${ch.hasClip || ch.isArchivalHub ? 'text-bronze' : 'text-vintage-sepia'}`}>
                      ACT {ch.number}
                    </span>
                    <span className="text-vintage-tan text-[11px]">{ch.year}</span>
                  </div>
                  <h3 className="font-display font-semibold text-vintage-paper group-hover:text-bronze transition-colors text-base mb-1">
                    {ch.title}
                  </h3>
                  <p className="text-xs font-serif text-vintage-sand line-clamp-1">
                    {ch.subtitle}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[10px] font-mono uppercase">
                    {ch.hasClip ? (
                      <span className="text-bronze flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" /> RECONSTRUCTED SCENE
                      </span>
                    ) : ch.isArchivalHub ? (
                      <span className="text-bronze flex items-center gap-1 font-semibold">
                        <BookOpen className="w-2.5 h-2.5" /> ARCHIVAL HUB
                      </span>
                    ) : (
                      <span className="text-vintage-sepia">PIPELINE STANDBY</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links Footer in Drawer */}
            <div className="mt-12 pt-6 border-t border-vintage-charcoal flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-vintage-sand">
              <div className="flex items-center gap-6">
                <button onClick={() => scrollToSection('timeline-section')} className="hover:text-bronze transition">Timeline (1914–2012)</button>
                <button onClick={() => scrollToSection('portfolio-section')} className="hover:text-bronze transition">The Record</button>
                <button onClick={() => scrollToSection('roadmap-section')} className="hover:text-bronze transition">Future Acts</button>
                <button onClick={() => scrollToSection('legacy-section')} className="hover:text-bronze transition">Sources & Citations</button>
              </div>
              <div className="text-vintage-sepia text-[11px]">
                HISTORICAL MONOGRAPH
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
