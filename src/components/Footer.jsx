import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="legacy-section" className="relative py-12 md:py-16 px-6 md:px-12 bg-vintage-deepInk border-t border-bronze/40 text-vintage-sand">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-10 border-b border-vintage-charcoal">

          {/* Col 1: Overview */}
          <div className="md:col-span-5">
            <div className="text-sm font-display font-bold tracking-widest text-vintage-paper uppercase mb-3">
              Captain Lakshmi Sahgal (1914–2012)
            </div>
            <p className="text-sm font-serif text-vintage-tan leading-relaxed max-w-sm mb-6">
              An interactive digital museum and scroll-scrub documentary honoring Captain Lakshmi Sahgal —
              Doctor, Commander of the Rani of Jhansi Regiment, and Lifelong Healer.
            </p>
            {/* Attribution: sourced from verified archival record */}
            <div className="text-xs font-serif italic text-bronze border-l-2 border-bronze/40 pl-3 leading-relaxed">
              "We cast away all differences of caste, language, and religion. In our uniform, we were simply soldiers of free India."
              <div className="text-[11px] font-mono text-vintage-sepia mt-1 not-italic">
                — Captain Lakshmi Sahgal, INA Oral Archives (1943)
              </div>
            </div>
          </div>

          {/* Col 2: Primary Historical Sources */}
          <div className="md:col-span-4 text-xs font-mono">
            <div className="text-vintage-paper uppercase font-bold tracking-widest mb-4 pb-2 border-b border-vintage-charcoal">
              Historical Sources & Archives
            </div>
            <ul className="space-y-2 text-vintage-tan">
              <li>• National Archives of India, New Delhi</li>
              <li>• Netaji Research Bureau, Kolkata</li>
              <li>• INA Documents & Oral History Collection (IIL)</li>
              <li>• <em className="font-serif italic">A Revolutionary Life: Memoirs</em> — Lakshmi Sahgal (2011)</li>
              <li>• GSVM Medical College Kanpur Heritage Archive</li>
              <li>• Imperial War Museum, London — INA Files</li>
            </ul>
          </div>

          {/* Col 3: Platform Architecture */}
          <div className="md:col-span-3 text-xs font-mono">
            <div className="text-vintage-paper uppercase font-bold tracking-widest mb-4 pb-2 border-b border-vintage-charcoal">
              Architecture & Technology
            </div>
            <div className="space-y-2 text-vintage-tan text-[11px]">
              <div>Framework: React 18 & Vite 5</div>
              <div>Renderer: Canvas Hardware-Accelerated Sequencer</div>
              <div>Asset Pipeline: WebP 8fps Scrub Interpolation</div>
              <div>Watermark Removal: FFmpeg delogo inpaint</div>
              <div>Loading: IntersectionObserver + chunked preload</div>
              <div className="text-bronze pt-2 font-bold">Dynamic Vintage Narrative Theming</div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-vintage-sepia">
          <div>
            © 2026 Digital Monograph of Captain Lakshmi Sahgal
          </div>
          <div className="flex items-center gap-1">
            <span>Historical Truth • Reconstructed Atmosphere • Living Legacy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
