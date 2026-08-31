import React from 'react';
import { Shield, Award, FileText, ChevronRight, Users, Compass, BookOpen } from 'lucide-react';

export default function Chapter06ArchivalHub({ onOpenArchivalModal }) {
  return (
    <section id="chapter-06-hub" className="relative py-14 md:py-18 px-6 md:px-12 bg-khaki-dark border-t border-bronze/40 text-vintage-paper overflow-hidden">
      
      {/* Military Archival Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#d4b373_1px,transparent_1px)] [background-size:36px_36px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Chapter Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-khaki pb-6 mb-8">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded bg-bronze text-vintage-deepInk text-xs font-mono font-bold uppercase tracking-widest shadow">
              ACT 06 // HISTORICAL TURNING POINT
            </span>
            <span className="text-xs font-mono text-vintage-sand uppercase">SINGAPORE // JULY 1943</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-bronze-light">
            <Shield className="w-4 h-4" />
            <span>AZAD HIND FAUJ // RANI OF JHANSI REGIMENT</span>
          </div>
        </div>

        {/* Title & Dramatic Summary */}
        <div className="max-w-4xl mb-8">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-vintage-paper tracking-tight uppercase leading-[0.95] mb-6">
            The Commander <br />
            <span className="text-bronze-light">Takes the Field</span>
          </h2>
          <p className="text-lg md:text-xl font-serif text-vintage-sand leading-relaxed font-light">
            On 9 July 1943, Subhas Chandra Bose summoned Dr. Lakshmi Swaminathan for a private four-hour meeting at his Singapore headquarters. By midnight, she had accepted the appointment to raise and command Asia’s first all-women combat infantry regiment.
          </p>
        </div>

        {/* Interactive Archival Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Cards / Milestones */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* The 4-Hour Meeting Detail Card */}
            <div className="p-8 rounded-lg bg-vintage-deepInk/90 border border-khaki shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Shield className="w-36 h-36 text-bronze" />
              </div>

              <div className="relative z-10">
                <div className="text-xs font-mono tracking-widest text-bronze uppercase mb-2 font-semibold">
                  PRIMARY HISTORICAL ENCOUNTER
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-vintage-paper mb-4">
                  The Four-Hour Midnight Mandate
                </h3>
                <p className="text-sm md:text-base font-serif text-vintage-sand leading-relaxed mb-6">
                  Netaji told Dr. Lakshmi: <em>"I want a unit of brave Indian women who will carry rifles, march through the jungles of Burma, and fight alongside men for the motherland."</em> Lakshmi did not hesitate. The next morning, recruitment notices were issued across Singapore, Malaya, and Burma.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-vintage-charcoal text-xs font-mono">
                  <div className="p-3 rounded bg-vintage-charcoal/60">
                    <div className="text-vintage-sepia uppercase text-[10px]">REGIMENT SIZE</div>
                    <div className="text-bronze font-bold text-base mt-1">1,500+ Women</div>
                  </div>
                  <div className="p-3 rounded bg-vintage-charcoal/60">
                    <div className="text-vintage-sepia uppercase text-[10px]">COMMISSION</div>
                    <div className="text-vintage-paper font-bold text-base mt-1">Captain & Minister</div>
                  </div>
                  <div className="p-3 rounded bg-vintage-charcoal/60">
                    <div className="text-vintage-sepia uppercase text-[10px]">WEAPONS TRAINED</div>
                    <div className="text-vintage-paper font-bold text-base mt-1">Lee-Enfield & Bren</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Archival Quotes from Recruits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-lg bg-vintage-deepInk/90 border border-khaki shadow">
                <div className="text-[11px] font-mono text-bronze uppercase mb-2 font-bold">NETAJI'S PROCLAMATION // 1943</div>
                <blockquote className="font-serif italic text-sm text-vintage-sand leading-relaxed mb-3">
                  "I want women who will not merely be nurses, but soldiers of freedom who will fight to the last bullet."
                </blockquote>
                <div className="text-[10px] font-mono text-vintage-tan uppercase">— Subhas Chandra Bose</div>
              </div>

              <div className="p-6 rounded-lg bg-vintage-deepInk/90 border border-khaki shadow">
                <div className="text-[11px] font-mono text-bronze uppercase mb-2 font-bold">CAPTAIN LAKSHMI'S ORDER</div>
                <blockquote className="font-serif italic text-sm text-vintage-sand leading-relaxed mb-3">
                  "We cast away all differences of caste, language, and religion. In our uniform, we were simply soldiers of free India."
                </blockquote>
                <div className="text-[10px] font-mono text-vintage-tan uppercase">— Captain Lakshmi Sahgal</div>
              </div>

            </div>

          </div>

          {/* Right Column: Genuine Archival Artifact Highlights */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-6 rounded-lg bg-vintage-deepInk border border-bronze/50 shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-bronze uppercase mb-4 font-bold">
                <FileText className="w-4 h-4" />
                <span>ARCHIVAL EXHIBIT // 01</span>
              </div>

              <div className="aspect-[4/3] rounded-lg bg-vintage-deepInk border border-vintage-slate mb-4 overflow-visible relative flex items-center justify-center p-3">
                <img 
                  src="/archival_photos/badge_rani_of_jhansi.jpg" 
                  alt="Rani of Jhansi Regiment Badge" 
                  className="w-full h-full object-contain photo-darkroom rounded"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-vintage-deepInk/95 via-vintage-deepInk/60 to-transparent p-2.5 flex flex-col justify-end rounded-b-lg">
                  <div className="text-xs font-display font-bold text-vintage-paper">Rani of Jhansi Regiment Insignia</div>
                  <div className="text-[10px] font-mono text-bronze">Azad Hind Armed Forces (1943) // Brass Cap Badge</div>
                </div>
              </div>

              <div className="text-xs font-mono text-vintage-sand leading-relaxed mb-5">
                Preserved in the National Archives of India and Netaji Research Bureau, Kolkata.
              </div>

              <button 
                onClick={() => onOpenArchivalModal && onOpenArchivalModal('arch-01')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded bg-bronze text-vintage-deepInk font-mono text-xs font-bold uppercase hover:bg-bronze-light transition shadow"
              >
                <span>OPEN FULL ARCHIVE VIEWER</span>
              </button>
            </div>

            {/* Archival Context Note */}
            <div className="p-5 rounded-lg bg-vintage-deepInk/80 border border-khaki text-xs font-mono">
              <div className="flex items-center gap-2 text-bronze mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span className="font-bold uppercase">Historical Record // Azad Hind</span>
              </div>
              <p className="text-vintage-tan text-[11px] leading-relaxed">
                The Rani of Jhansi Regiment was formally constituted on 22 October 1943, one day after the proclamation of the Provisional Government of Free India. Captain Lakshmi was simultaneously inducted as Minister of Women's Affairs.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
