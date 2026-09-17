# Changelog

All notable changes to the **Captain Lakshmi: Invicta** digital monograph project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-09-17

### Added
- **14-Act Cinematic Reconstructions:** Hardware-accelerated `<canvas>` frame sequencer covering the complete biographical continuum of Captain Lakshmi Sahgal (1914–2012).
- **Non-Destructive Scroll Lock:** Intelligent arrival locking that preserves page position during sequence playback and releases scroll strictly at 100% completion.
- **Sub-Pixel Auto Tour:** Stable `requestAnimationFrame` reading mode advancing at ~75px/sec with seamless pause/resume on user interruption.
- **One-Click Global Rewatch:** Interactive masthead monogram that resets all 14 sequences and scrolls instantly to the opening masthead.
- **Archival Deep-Viewer Modal:** High-resolution artifact inspection with museum-grade specimen matting, cataloging numbers, and primary source provenance.
- **Broadsheet Gazette Timeline:** Interactive 1940s newsprint timeline with category filtering (*Origins, Medicine, Command, Humanitarian, Activism, Legacy*).
- **Three Custom Photo Treatments:**
  - *Torn Newspaper Deckle Edge* (`.photo-torn`) for Hero historical photo strip.
  - *Archival Museum Specimen Mount* (`.photo-stamp`) for primary evidence artifacts.
  - *Aged Darkroom Print* (`.photo-darkroom`) with tilt and bronze halation for the Rani of Jhansi Regiment insignia.
- **Cross-Platform Favicon Suite:** Multi-resolution `.ico`, `.png`, `.svg`, and `.apple-touch-icon` featuring the 8-pointed regiment star and monogram.
- **Continuous Integration (CI):** Automated GitHub Actions build and verification workflow.

### Fixed
- Fixed rAF animation stall during parent re-renders by ref-isolating event callbacks (`onProgressUpdateRef`, `onLockChangeRef`).
- Fixed frame cache wipe bug by decoupling frame loader dependencies from rendering callbacks.
- Replaced 14 window scroll listeners with native `IntersectionObserver` instances, eliminating scroll-event bottlenecking.
- Fixed navigation jump fighting by introducing a synchronized `window.__navJumping` coordination flag.
- Fixed Archival Modal image rendering in Chromium/WebKit browsers by replacing broken CSS mask-composite rules with double-matting specimen borders.

### Refined
- Unified and elevated historical prose across all 14 sequence typography cues for dramatic, episodic continuity.
- Restored authentic archival photo mapping for Exhibit 01 (Captain Lakshmi in INA Uniform).
- Optimized asset extraction pipeline using Lanczos scaling and `libwebp` compression.
