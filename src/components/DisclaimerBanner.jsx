import React from 'react';
import { Film, AlertTriangle } from 'lucide-react';

/**
 * DisclaimerBanner — v2
 * Higher contrast, larger text, clearly legible for archival and historical context.
 */
export default function DisclaimerBanner() {
  return (
    <div className="relative z-30 w-full bg-vintage-charcoal border-y-2 border-bronze/60 py-4 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex items-start sm:items-center justify-center gap-4 text-vintage-paper">
        <AlertTriangle className="w-5 h-5 text-bronze flex-shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-sm font-serif leading-relaxed">
          <strong className="font-mono text-bronze uppercase tracking-widest text-xs mr-2 align-middle">
            [Historical Reconstruction Notice]
          </strong>
          The visual reconstructions on this site — cinematic clips and composited imagery — are
          <em> computer-generated recreations produced solely for the purpose of visualisation</em>.
          They are not archival photographs or authenticated film footage. Authentic historical
          photographs of Captain Lakshmi Sahgal are presented separately in the Archival Photo Record above.
        </p>
      </div>
    </div>
  );
}
