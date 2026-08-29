import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Compass, Film, Sparkles } from 'lucide-react';

/**
 * CinematicSequence Engine — v3
 *
 * Fixes applied (v3):
 * - Touch device detection: disables mouse parallax on touch screens (no mouse = no distortion)
 * - Scroll track height: 250vh on mobile/touch, 150vh on desktop for controlled scrub feel
 * - Scrub HUD: hidden on xs screens (< sm) to prevent canvas occlusion on phones
 * - Typography cue: smaller headline font on mobile, subtext hidden on xs to reduce clutter
 * - Location/era stamp: hidden below md breakpoint to avoid bottom-left overlap with cues
 * - Parallax effect only fires when isTouchDevice is false
 */

const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

export default function CinematicSequence({ sequence, onProgressUpdate }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const framesRef = useRef([]);
  const loadedCountRef = useRef(0);
  const mouseOffsetRef = useRef({ x: 0, y: 0 });
  const currentFrameRef = useRef(0);
  const rafMouseRef = useRef(null);
  const rafScrollRef = useRef(null);
  const hasStartedLoadingRef = useRef(false);
  const touchDevice = useRef(isTouchDevice());

  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadPercent, setLoadPercent] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCueIndex, setActiveCueIndex] = useState(0);

  const totalFrames = sequence.frameCount;
  const CHUNK_SIZE = 8;

  // ── 1. Chunked Frame Loader ───────────────────────────────────────────────
  const loadChunk = useCallback((startIdx) => {
    const end = Math.min(startIdx + CHUNK_SIZE, totalFrames);
    const promises = [];

    for (let i = startIdx; i < end; i++) {
      promises.push(new Promise((resolve) => {
        const img = new Image();
        const frameNum = String(i + 1).padStart(3, '0');
        img.src = `${sequence.framePath}/${sequence.framePrefix}${frameNum}.${sequence.frameExtension}`;
        img.onload = () => {
          framesRef.current[i] = img;
          loadedCountRef.current += 1;
          const pct = Math.round((loadedCountRef.current / totalFrames) * 100);
          setLoadPercent(pct);
          if (i === 0 && canvasRef.current) renderFrame(0);
          if (loadedCountRef.current === totalFrames) setIsLoaded(true);
          resolve();
        };
        img.onerror = resolve;
      }));
    }

    Promise.all(promises).then(() => {
      if (end < totalFrames) {
        setTimeout(() => loadChunk(end), 16);
      }
    });
  }, [sequence, totalFrames]); // eslint-disable-line

  useEffect(() => {
    framesRef.current = new Array(totalFrames);
    loadedCountRef.current = 0;
    hasStartedLoadingRef.current = false;
    setIsLoaded(false);
    setLoadPercent(0);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStartedLoadingRef.current) {
          hasStartedLoadingRef.current = true;
          loadChunk(0);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [sequence, totalFrames, loadChunk]);

  // ── 2. renderFrame ────────────────────────────────────────────────────────
  const renderFrame = useCallback((frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = framesRef.current[frameIdx];
    if (!img) {
      for (let offset = 1; offset < totalFrames; offset++) {
        if (frameIdx - offset >= 0 && framesRef.current[frameIdx - offset]) {
          img = framesRef.current[frameIdx - offset]; break;
        }
        if (frameIdx + offset < totalFrames && framesRef.current[frameIdx + offset]) {
          img = framesRef.current[frameIdx + offset]; break;
        }
      }
    }
    if (!img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;

    if (canvas.width !== Math.round(cw * dpr) || canvas.height !== Math.round(ch * dpr)) {
      canvas.width = Math.round(cw * dpr);
      canvas.height = Math.round(ch * dpr);
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, cw, ch);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cw / ch;
    let renderW, renderH, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      renderW = cw;
      renderH = cw / imgRatio;
      offsetX = 0;
      offsetY = (ch - renderH) / 2;
    } else {
      renderH = ch;
      renderW = ch * imgRatio;
      offsetX = (cw - renderW) / 2;
      offsetY = 0;
    }

    // Only apply parallax on non-touch devices
    const px = touchDevice.current ? 0 : mouseOffsetRef.current.x * 8;
    const py = touchDevice.current ? 0 : mouseOffsetRef.current.y * 8;

    ctx.drawImage(img, offsetX + px, offsetY + py, renderW, renderH);
    ctx.restore();
  }, [totalFrames]);

  // ── 3. ResizeObserver ─────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ro = new ResizeObserver(() => {
      renderFrame(currentFrameRef.current);
    });
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [renderFrame]);

  // ── 4. Scroll listener ────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.offsetHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / scrollHeight));
      const targetFrame = Math.min(totalFrames - 1, Math.floor(progress * totalFrames));

      const cues = sequence.typographyCues;
      let nextCueIdx = activeCueIndex;
      for (let i = 0; i < cues.length; i++) {
        if (progress >= cues[i].progressStart && progress <= cues[i].progressEnd) {
          nextCueIdx = i;
          break;
        }
      }

      currentFrameRef.current = targetFrame;
      setScrollProgress(progress);
      setCurrentFrameIndex(targetFrame);
      setActiveCueIndex(nextCueIdx);

      if (onProgressUpdate) onProgressUpdate(sequence.id, progress);

      cancelAnimationFrame(rafScrollRef.current);
      rafScrollRef.current = requestAnimationFrame(() => renderFrame(targetFrame));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafScrollRef.current);
    };
  }, [totalFrames, sequence, renderFrame, onProgressUpdate]); // eslint-disable-line

  // ── 5. Mouse parallax — desktop only ─────────────────────────────────────
  const handleMouseMove = useCallback((e) => {
    if (touchDevice.current) return;
    mouseOffsetRef.current = {
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    };
    cancelAnimationFrame(rafMouseRef.current);
    rafMouseRef.current = requestAnimationFrame(() => {
      renderFrame(currentFrameRef.current);
    });
  }, [renderFrame]);

  // ── Render ────────────────────────────────────────────────────────────────
  const cues = sequence.typographyCues;

  const posClass = (pos) => ({
    'bottom-left':   'bottom-20 left-4 md:left-10 max-w-[85vw] md:max-w-lg text-left items-start',
    'bottom-right':  'bottom-24 right-4 md:right-10 max-w-[85vw] md:max-w-lg text-right items-end',
    'top-left':      'top-24 left-4 md:left-10 max-w-[85vw] md:max-w-lg text-left items-start',
    'top-right':     'top-24 right-4 md:right-10 max-w-[85vw] md:max-w-lg text-right items-end',
    'center-left':   'top-1/2 -translate-y-1/2 left-4 md:left-10 max-w-[85vw] md:max-w-lg text-left items-start',
    'center-right':  'top-1/2 -translate-y-1/2 right-4 md:right-10 max-w-[85vw] md:max-w-lg text-right items-end',
    'bottom-center': 'bottom-24 left-1/2 -translate-x-1/2 max-w-[90vw] md:max-w-xl text-center items-center',
  }[pos] || 'bottom-20 left-4 md:left-10 max-w-[85vw] md:max-w-lg text-left items-start');

  // Taller scroll track on touch/mobile so thumb swipes feel controlled
  const scrollTrackHeight = touchDevice.current ? 'h-[250vh]' : 'h-[150vh]';

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${scrollTrackHeight} bg-vintage-deepInk select-none`}
      onMouseMove={handleMouseMove}
      id={sequence.id}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-vintage-deepInk">

        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
          style={{ willChange: 'transform' }}
        />

        <div className="vintage-vignette" />

        {/* Top HUD */}
        <div className="absolute top-6 left-4 right-4 md:left-6 md:right-6 flex items-center justify-between z-20 pointer-events-none text-xs font-mono tracking-widest uppercase">
          <div className="flex items-center gap-2 md:gap-3 bg-vintage-deepInk/90 backdrop-blur-md px-3 md:px-4 py-1.5 rounded-lg border border-vintage-charcoal shadow-xl text-vintage-paper">
            <span className="inline-block w-2 h-2 rounded-full bg-bronze animate-pulse" />
            <span className="font-bold text-bronze">ACT {sequence.chapterNumber}</span>
            <span className="text-vintage-sepia">/</span>
            <span className="text-vintage-sand hidden sm:inline">{sequence.title}</span>
          </div>

          <div className="hidden md:flex items-center gap-4 bg-vintage-deepInk/90 backdrop-blur-md px-4 py-1.5 rounded-lg border border-vintage-charcoal text-vintage-sand">
            <div className="flex items-center gap-1.5 text-bronze font-semibold">
              <Film className="w-3.5 h-3.5 text-bronze" />
              <span className="text-[11px]">{sequence.type}</span>
            </div>
            <span className="text-vintage-sepia">|</span>
            <span className="text-bronze font-bold">{Math.round(scrollProgress * 100)}%</span>
          </div>
        </div>

        {/* Bottom Left Location & Era Stamp — hidden on mobile to avoid overlap with cues */}
        <div className="absolute bottom-6 left-4 md:left-10 z-20 pointer-events-none hidden md:block">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-bronze uppercase mb-1 font-bold">
            <Compass className="w-3.5 h-3.5" />
            <span>{sequence.location}</span>
          </div>
          <div className="text-xs font-serif italic text-vintage-tan tracking-wider">
            {sequence.era}
          </div>
        </div>

        {/* Typography Cues — ONE rendered at a time, cross-fade */}
        {cues.map((cue, idx) => {
          const isActive = idx === activeCueIndex &&
            scrollProgress >= cue.progressStart &&
            scrollProgress <= cue.progressEnd;

          return (
            <div
              key={idx}
              className={`absolute z-20 pointer-events-none transition-all duration-500 ease-out flex flex-col ${posClass(cue.position)} ${
                isActive
                  ? 'opacity-100 translate-y-0 blur-0 scale-100'
                  : 'opacity-0 translate-y-4 blur-sm scale-95'
              }`}
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-bronze uppercase mb-2 bg-vintage-deepInk/95 backdrop-blur-md px-3 py-1 rounded-lg w-max border border-bronze/40 shadow-xl font-semibold">
                <Sparkles className="w-3 h-3 text-bronze" />
                <span>{cue.tag}</span>
              </div>
              <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-vintage-paper tracking-tight leading-none drop-shadow-2xl mb-2 md:mb-3">
                {cue.headline}
              </h3>
              <p className="hidden sm:block text-sm md:text-base font-serif text-vintage-sand leading-relaxed max-w-md bg-vintage-deepInk/85 backdrop-blur-sm p-3 md:p-4 rounded-lg border-l-2 border-bronze shadow-xl">
                {cue.subtext}
              </p>
            </div>
          );
        })}

        {/* Scrub HUD — hidden on mobile phones, visible from sm upward */}
        <div className="absolute bottom-5 right-4 md:right-8 z-30 pointer-events-auto hidden sm:block min-w-[220px] md:min-w-[260px] bg-vintage-deepInk border border-bronze/70 rounded-lg p-3 shadow-[0_10px_35px_rgba(0,0,0,0.95)]">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase text-vintage-sand mb-2 pb-1.5 border-b border-vintage-charcoal">
            <span className="flex items-center gap-1.5 text-bronze font-bold">
              <Film className="w-3 h-3 text-bronze" />
              <span>RECONSTRUCTION</span>
            </span>
            <span className="text-vintage-tan font-bold">
              FRAME {String(currentFrameIndex + 1).padStart(2, '0')}/{totalFrames}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex-grow h-2 bg-vintage-charcoal rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-bronze-dark via-bronze to-bronze-light transition-all duration-75"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            <span className="text-[10px] font-mono font-bold text-bronze">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>

          <div className="mt-1.5 flex items-center justify-between text-[9px] font-mono text-vintage-sepia uppercase">
            <span>SCROLL TO SCRUB</span>
            <span>CINEMATIC ARCHIVE</span>
          </div>
        </div>

        {/* Loading Overlay */}
        {!isLoaded && loadPercent < 100 && (
          <div className="absolute inset-0 bg-vintage-deepInk/90 backdrop-blur-md z-40 flex flex-col items-center justify-center">
            <div className="text-xs font-mono tracking-widest text-bronze mb-3 uppercase flex items-center gap-2 font-semibold">
              <Film className="w-4 h-4 animate-spin text-bronze" />
              <span>DECODING FRAMES // {loadPercent}%</span>
            </div>
            <div className="w-48 h-1 bg-vintage-charcoal rounded-full overflow-hidden">
              <div
                className="h-full bg-bronze transition-all duration-200"
                style={{ width: `${loadPercent}%` }}
              />
            </div>
            <div className="text-[10px] font-mono text-vintage-sepia mt-2 uppercase tracking-wider">
              ACT {sequence.chapterNumber} — {sequence.title}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
