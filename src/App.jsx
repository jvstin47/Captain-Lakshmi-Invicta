import React, { useState } from 'react';
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

export default function App() {
  const [activeChapterId, setActiveChapterId] = useState(SEQUENCES[0].id);
  const [selectedExhibitId, setSelectedExhibitId] = useState(null);

  const handleProgressUpdate = (seqId, progress) => {
    if (progress > 0.1 && progress < 0.95) {
      setActiveChapterId(seqId);
    }
  };

  const handleOpenArchivalModal = (id) => {
    setSelectedExhibitId(id || 'arch-01');
  };

  const handleCloseModal = () => {
    setSelectedExhibitId(null);
  };

  return (
    <div className="relative min-h-screen bg-vintage-deepInk text-vintage-paper overflow-x-hidden selection:bg-bronze selection:text-vintage-deepInk">
      
      {/* Ambient Film Grain Overlay */}
      <div className="vintage-grain" />

      {/* Persistent Minimal Editorial Navigation */}
      <Navigation 
        activeChapterId={activeChapterId}
      />

      {/* Hero Section with Archival Photo Carousel */}
      <Hero />

      {/* Required Historical Reconstruction Disclaimer Notice */}
      <DisclaimerBanner />

      {/* Acts 01 to 05: Scroll-Controlled Cinematic Reconstructions + Context Bridges */}
      {SEQUENCES.map((seq, index) => {
        const nextSeq = SEQUENCES[index + 1] || null;
        return (
          <React.Fragment key={seq.id}>
            <CinematicSequence 
              sequence={seq} 
              onProgressUpdate={handleProgressUpdate}
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
