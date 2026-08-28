import React, { useEffect } from 'react';
import { X, Shield, BookOpen } from 'lucide-react';
import { ARCHIVAL_EXHIBITS } from '../data/portfolioData';

export default function ArchivalModal({ exhibitId, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const exhibit = ARCHIVAL_EXHIBITS.find(e => e.id === exhibitId) || ARCHIVAL_EXHIBITS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-vintage-deepInk/95 backdrop-blur-xl animate-fadeIn text-vintage-paper">
      <div className="relative max-w-4xl w-full max-h-[90vh] bg-vintage-charcoal border border-bronze/60 rounded-xl shadow-2xl overflow-y-auto flex flex-col p-6 md:p-10">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-vintage-slate bg-vintage-deepInk text-vintage-sand hover:text-bronze hover:border-bronze transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 text-xs font-mono text-bronze uppercase mb-4 font-bold">
          <Shield className="w-4 h-4" />
          <span>NATIONAL ARCHIVES EXAMINATION // {exhibit.type}</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-display font-bold text-vintage-paper mb-6">
          {exhibit.title}
        </h3>

        <div className="aspect-[16/9] w-full rounded-lg bg-vintage-deepInk border border-vintage-slate mb-6 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
          <div className="w-16 h-16 rounded-full border border-bronze/40 flex items-center justify-center bg-bronze/10 mb-4">
            <BookOpen className="w-8 h-8 text-bronze" />
          </div>
          <div className="text-sm font-mono text-bronze uppercase font-bold mb-1">
            ARCHIVAL PRIMARY EVIDENCE
          </div>
          <p className="text-xs md:text-sm font-serif text-vintage-sand max-w-md">
            {exhibit.caption}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-vintage-slate text-xs font-mono">
          <div>
            <div className="text-vintage-sepia uppercase text-[10px] mb-1 font-bold">SOURCE & ATTRIBUTION</div>
            <div className="text-vintage-paper font-semibold">{exhibit.source}</div>
          </div>

          <div>
            <div className="text-vintage-sepia uppercase text-[10px] mb-1 font-bold">HISTORICAL SIGNIFICANCE</div>
            <div className="text-vintage-sand font-serif text-sm leading-relaxed">{exhibit.significance}</div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-vintage-slate flex items-center justify-between text-[11px] font-mono text-vintage-tan">
          <span>CATALOG NO: NAI-AZADHIND-{exhibit.year.replace(/[^0-9]/g, '')}</span>
          <button 
            onClick={onClose}
            className="px-5 py-2 rounded bg-bronze text-vintage-deepInk font-bold uppercase hover:bg-bronze-light transition shadow"
          >
            RETURN TO STORY
          </button>
        </div>

      </div>
    </div>
  );
}
