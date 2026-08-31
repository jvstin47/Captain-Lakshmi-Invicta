import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SEQUENCES } from './data/sequencesData';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import DisclaimerBanner from './components/DisclaimerBanner';
import CinematicSequence from './components/CinematicSequence';
import ChapterBridge from './components/ChapterBridge';
import Chapter06ArchivalHub from './components/Chapter06ArchivalHub';
import HorizontalTimeline from './components/HorizontalTimeline';
import LifePortfolioGrid from './components/LifePortfolioGrid';
import FutureChaptersRoadmap from './components/FutureChaptersRoadmap';
import ArchivalModal from './components/ArchivalModal';
import Footer from './components/Footer';
import { Play, Pause } from 'lucide-react';

export default function App() {
  const [activeChapterId, setActiveChapterId] = useState(SEQUENCES[0].id);
  const [selectedExhibitId, setSelectedExhibitId] = useState(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const rafAutoScrollRef = useRef(null);

  const [isSequenceLocked, setIsSequenceLocked] = useState(false);

  const handleSequenceLockChange = useCallback((locked) => {
    setIsSequenceLocked(locked);
  }, []);

  const handleProgressUpdate = useCallback((seqId, progress) => {
    if (progress > 0.1 && progress < 0.95) {
      setActiveChapterId(prev => (prev === seqId ? prev : seqId));
    }
  }, []);

  const handleOpenArchivalModal = useCallback((id) => {
    setSelectedExhibitId(id || 'arch-01');
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedExhibitId(null);
  }, []);

  // ── Auto Scroll Engine ──────────────────────────────────────────────────
  // Uses a stable ref to hold the loop body so lock/unlock never creates ghost rAF loops.
  const isAutoScrollingRef = useRef(false);
  const isSequenceLockedRef = useRef(false);
  isAutoScrollingRef.current = isAutoScrolling;
  isSequenceLockedRef.current = isSequenceLocked;

  const scrollStepRef = useRef(null);
  scrollStepRef.current = () => {
    if (!isAutoScrollingRef.current || isSequenceLockedRef.current) return;

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY >= maxScroll - 5) {
      setIsAutoScrolling(false);
      return;
    }

    window.scrollBy({ top: 1.25, behavior: 'auto' });
    rafAutoScrollRef.current = requestAnimationFrame(scrollStepRef.current);
  };

  const startAutoScroll = useCallback(() => {
    setIsAutoScrolling(true);
    if (window.scrollY < 200) {
      const firstSeq = document.getElementById('seq-01-origins');
      if (firstSeq) {
        firstSeq.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const stopAutoScroll = useCallback(() => {
    setIsAutoScrolling(false);
    if (rafAutoScrollRef.current) {
      cancelAnimationFrame(rafAutoScrollRef.current);
      rafAutoScrollRef.current = null;
    }
  }, []);

  const toggleAutoScroll = useCallback(() => {
    if (isAutoScrolling) {
      stopAutoScroll();
    } else {
      startAutoScroll();
    }
  }, [isAutoScrolling, startAutoScroll, stopAutoScroll]);

  // Single effect: start/stop the loop based on isAutoScrolling + isSequenceLocked
  useEffect(() => {
    if (rafAutoScrollRef.current) {
      cancelAnimationFrame(rafAutoScrollRef.current);
      rafAutoScrollRef.current = null;
    }
    if (isAutoScrolling && !isSequenceLocked) {
      rafAutoScrollRef.current = requestAnimationFrame(scrollStepRef.current);
    }
    return () => {
      if (rafAutoScrollRef.current) {
        cancelAnimationFrame(rafAutoScrollRef.current);
        rafAutoScrollRef.current = null;
      }
    };
  }, [isAutoScrolling, isSequenceLocked]);

  // User interruption: stop auto-scroll if user manually wheels or touches (when not locked)
  useEffect(() => {
    if (!isAutoScrolling || isSequenceLocked) return;

    const handleUserInterrupt = () => {
      stopAutoScroll();
    };

    window.addEventListener('wheel', handleUserInterrupt, { passive: true });
    window.addEventListener('touchmove', handleUserInterrupt, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleUserInterrupt);
      window.removeEventListener('touchmove', handleUserInterrupt);
    };
  }, [isAutoScrolling, isSequenceLocked, stopAutoScroll]);

  return (
    <div className="relative min-h-screen bg-vintage-deepInk text-vintage-paper overflow-x-hidden selection:bg-bronze selection:text-vintage-deepInk">
      
      {/* Ambient Film Grain Overlay */}
      <div className="vintage-grain" />

      {/* Persistent Minimal Editorial Navigation */}
      <Navigation 
        activeChapterId={activeChapterId}
        isAutoScrolling={isAutoScrolling}
        onToggleAutoScroll={toggleAutoScroll}
      />

      {/* Hero Section with Archival Photo Carousel */}
      <Hero 
        isAutoScrolling={isAutoScrolling}
        onToggleAutoScroll={toggleAutoScroll}
      />

      {/* Required Historical Reconstruction Disclaimer Notice */}
      <DisclaimerBanner />

      {/* Acts 01 to 14: Scroll-Controlled Cinematic Reconstructions + Context Bridges */}
      {SEQUENCES.map((seq, index) => {
        const nextSeq = SEQUENCES[index + 1] || null;
        return (
          <React.Fragment key={seq.id}>
            <CinematicSequence 
              sequence={seq} 
              onProgressUpdate={handleProgressUpdate}
              onLockChange={handleSequenceLockChange}
            />

            <ChapterBridge 
              sequence={seq} 
              nextSequence={nextSeq}
              onOpenArchivalModal={handleOpenArchivalModal}
            />
          </React.Fragment>
        );
      })}

      {/* Act 06: The Commander — Rani of Jhansi Archival Hub */}
      <Chapter06ArchivalHub 
        onOpenArchivalModal={handleOpenArchivalModal}
      />

      {/* Pinned Chronological Cartography / Daily Broadsheet Newspaper Timeline */}
      <HorizontalTimeline />

      {/* Multifaceted Historical Record Matrix */}
      <LifePortfolioGrid />

      {/* Future Acts 07 to 14 Extension Architecture Roadmap */}
      <FutureChaptersRoadmap />

      {/* Bibliography, Citations & Archival Footer */}
      <Footer />

      {/* Floating Auto-Scroll Toast Indicator */}
      {isAutoScrolling && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fadeIn">
          <button
            onClick={stopAutoScroll}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-vintage-deepInk/95 border border-bronze text-vintage-paper shadow-[0_0_25px_rgba(192,130,105,0.4)] backdrop-blur-md text-xs font-mono tracking-widest uppercase hover:bg-bronze hover:text-vintage-deepInk transition-all group"
          >
            <span className="w-2 h-2 rounded-full bg-bronze group-hover:bg-vintage-deepInk animate-pulse" />
            <span>AUTO TOUR ACTIVE</span>
            <span className="text-vintage-sepia group-hover:text-vintage-charcoal">•</span>
            <span className="flex items-center gap-1 text-vintage-tan group-hover:text-vintage-deepInk">
              <Pause className="w-3.5 h-3.5" /> PAUSE
            </span>
          </button>
        </div>
      )}

      {/* Museum Deep-Inspection Archival Modal */}
      {selectedExhibitId && (
        <ArchivalModal 
          exhibitId={selectedExhibitId}
          onClose={handleCloseModal}
        />
      )}

    </div>
  );
}

