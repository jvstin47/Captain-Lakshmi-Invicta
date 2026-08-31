import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { Compass, Film, Sparkles, Lock, Unlock, RotateCcw, FastForward } from 'lucide-react';

/**
 * CinematicSequence Engine — v6 (Robust Frame Playback & Scroll Locking)
 *
 * Guarantees:
 * 1. Frame preloading starts immediately and never gets wiped by re-renders.
 * 2. Playback runs on a continuous rAF loop decoupled from React state/props churn.
 * 3. Page scroll is safely locked on arrival and strictly unlocked upon 100% completion.
 */

const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

export default function CinematicSequence({ sequence, onProgressUpdate, onLockChange, resetKey = 0 }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const framesRef = useRef([]);
  const loadedCountRef = useRef(0);
  const mouseOffsetRef = useRef({ x: 0, y: 0 });
  const currentFrameRef = useRef(0);
  const rafMouseRef = useRef(null);
  const rafPlayRef = useRef(null);
  const isPlayingRef = useRef(false);
  const hasPlayedRef = useRef(false);
  const touchDevice = useRef(isTouchDevice());

  // Ref-isolate callbacks to prevent dependency churn from resetting animation
  const onProgressUpdateRef = useRef(onProgressUpdate);
  onProgressUpdateRef.current = onProgressUpdate;
  const onLockChangeRef = useRef(onLockChange);
  onLockChangeRef.current = onLockChange;

  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadPercent, setLoadPercent] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCueIndex, setActiveCueIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const totalFrames = sequence.frameCount;
  const CHUNK_SIZE = 16;
  const TARGET_FPS = 30;
  const PLAYBACK_DURATION_MS = useMemo(
    () => (totalFrames / TARGET_FPS) * 1000,
    [totalFrames]
  );

  // ── 1. Canvas Renderer ───────────────────────────────────────────────────
  const renderFrame = useCallback((frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.clientWidth || window.innerWidth;
    const ch = canvas.clientHeight || window.innerHeight;

    if (canvas.width !== Math.round(cw * dpr) || canvas.height !== Math.round(ch * dpr)) {
      canvas.width = Math.round(cw * dpr);
      canvas.height = Math.round(ch * dpr);
    }

    let img = framesRef.current[frameIdx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < totalFrames; offset++) {
        if (frameIdx - offset >= 0 && framesRef.current[frameIdx - offset]?.complete && framesRef.current[frameIdx - offset]?.naturalWidth > 0) {
          img = framesRef.current[frameIdx - offset]; break;
        }
        if (frameIdx + offset < totalFrames && framesRef.current[frameIdx + offset]?.complete && framesRef.current[frameIdx + offset]?.naturalWidth > 0) {
          img = framesRef.current[frameIdx + offset]; break;
        }
      }
    }
    if (!img || !img.complete || img.naturalWidth === 0) return;

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

    const px = touchDevice.current ? 0 : mouseOffsetRef.current.x * 8;
    const py = touchDevice.current ? 0 : mouseOffsetRef.current.y * 8;

    ctx.drawImage(img, offsetX + px, offsetY + py, renderW, renderH);
    ctx.restore();
  }, [totalFrames]);

  // ── 2. Frame Loader (Loads once per sequence on mount) ─────────────────────
  useEffect(() => {
    framesRef.current = new Array(totalFrames);
    loadedCountRef.current = 0;
    setIsLoaded(false);
    setLoadPercent(0);

    const loadChunk = (startIdx) => {
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
            if (i === 0) {
              renderFrame(0);
            }
            if (loadedCountRef.current >= totalFrames * 0.8) {
              setIsLoaded(true);
            }
            resolve();
          };
          img.onerror = resolve;
        }));
      }

      Promise.all(promises).then(() => {
        if (end < totalFrames) {
          setTimeout(() => loadChunk(end), 8);
        } else {
          setIsLoaded(true);
        }
      });
    };

    loadChunk(0);
  }, [sequence.id]); // eslint-disable-line

  // ── 2b. Global Reset (when user clicks name in navbar) ────────────────────
  useEffect(() => {
    if (resetKey === 0) return; // skip initial mount

    // Cancel any in-flight animation
    if (rafPlayRef.current) {
      cancelAnimationFrame(rafPlayRef.current);
      rafPlayRef.current = null;
    }

    // Reset all refs
    isPlayingRef.current = false;
    hasPlayedRef.current = false;
    currentFrameRef.current = 0;

    // Reset all visual state
    setIsPlaying(false);
    setHasPlayed(false);
    setIsLocked(false);
    setScrollProgress(0);
    setCurrentFrameIndex(0);
    setActiveCueIndex(0);

    // Notify parent lock is released
    onLockChangeRef.current?.(false);

    // Render frame 0 so canvas is not blank
    renderFrame(0);
  }, [resetKey, renderFrame]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ro = new ResizeObserver(() => {
      renderFrame(currentFrameRef.current);
    });
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [renderFrame]);

  // ── 4. Non-Destructive Scroll Lock Handler ─────────────────────────────────
  useEffect(() => {
    if (!isLocked) return;

    const handleWheel = (e) => {
      e.preventDefault();
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    const handleKeyScroll = (e) => {
      const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Spacebar'];
      if (keys.includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyScroll);
    };
  }, [isLocked]);

  // ── 5. Sequence Playback Engine ───────────────────────────────────────────
  const finishPlayback = useCallback(() => {
    isPlayingRef.current = false;
    hasPlayedRef.current = true;
    if (rafPlayRef.current) {
      cancelAnimationFrame(rafPlayRef.current);
      rafPlayRef.current = null;
    }

    currentFrameRef.current = totalFrames - 1;
    setCurrentFrameIndex(totalFrames - 1);
    setScrollProgress(1);
    setIsPlaying(false);
    setHasPlayed(true);
    setIsLocked(false);

    onLockChangeRef.current?.(false);
    onProgressUpdateRef.current?.(sequence.id, 1);
    renderFrame(totalFrames - 1);
  }, [totalFrames, sequence.id, renderFrame]);

  const startPlayback = useCallback(() => {
    if (isPlayingRef.current) return;

    isPlayingRef.current = true;
    setIsPlaying(true);
    setIsLocked(true);
    onLockChangeRef.current?.(true);

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const targetY = window.scrollY + rect.top;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }

    const startTime = performance.now();
    const cues = sequence.typographyCues;

    const step = (now) => {
      if (!isPlayingRef.current) return;

      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / PLAYBACK_DURATION_MS);
      const targetFrame = Math.min(totalFrames - 1, Math.floor(progress * totalFrames));

      currentFrameRef.current = targetFrame;
      setCurrentFrameIndex(targetFrame);
      setScrollProgress(progress);

      let nextCueIdx = 0;
      for (let i = 0; i < cues.length; i++) {
        if (progress >= cues[i].progressStart && progress <= cues[i].progressEnd) {
          nextCueIdx = i;
          break;
        }
      }
      setActiveCueIndex(nextCueIdx);

      renderFrame(targetFrame);
      onProgressUpdateRef.current?.(sequence.id, progress);

      if (progress < 1) {
        rafPlayRef.current = requestAnimationFrame(step);
      } else {
        finishPlayback();
      }
    };

    if (rafPlayRef.current) cancelAnimationFrame(rafPlayRef.current);
    rafPlayRef.current = requestAnimationFrame(step);
  }, [totalFrames, PLAYBACK_DURATION_MS, sequence.typographyCues, sequence.id, renderFrame, finishPlayback]);

  // ── 6. Trigger on Reach — IntersectionObserver (zero scroll-event overhead) ─
  // window.__navJumping is set by Navigation/App when programmatically jumping
  // to a section — prevents sequences en-route from hijacking the scroll.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          !hasPlayedRef.current &&
          !isPlayingRef.current &&
          !window.__navJumping
        ) {
          startPlayback();
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [startPlayback]);

  // Cleanup rAF only on unmount
  useEffect(() => {
    return () => {
      if (rafPlayRef.current) cancelAnimationFrame(rafPlayRef.current);
      if (rafMouseRef.current) cancelAnimationFrame(rafMouseRef.current);
    };
  }, []);

  // ── 7. Mouse Parallax (desktop only) ──────────────────────────────────────
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

  // ── 8. Skip / Replay Actions ──────────────────────────────────────────────
  const handleSkip = (e) => {
    e.stopPropagation();
    finishPlayback();
  };

  const handleReplay = (e) => {
    e.stopPropagation();
    hasPlayedRef.current = false;
    setHasPlayed(false);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setTimeout(() => {
      startPlayback();
    }, 150);
  };

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

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-vintage-deepInk select-none overflow-hidden"
      onMouseMove={handleMouseMove}
      id={sequence.id}
    >
      <div className="relative w-full h-full flex items-center justify-center bg-vintage-deepInk overflow-hidden">

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

        {/* Bottom Left Location & Era Stamp */}
        <div className="absolute bottom-6 left-4 md:left-10 z-20 pointer-events-none hidden md:block">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-bronze uppercase mb-1 font-bold">
            <Compass className="w-3.5 h-3.5" />
            <span>{sequence.location}</span>
          </div>
          <div className="text-xs font-serif italic text-vintage-tan tracking-wider">
            {sequence.era}
          </div>
        </div>

        {/* Typography Cues */}
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

        {/* Interactive Scrub & Playback Status HUD */}
        <div className="absolute bottom-5 right-4 md:right-8 z-30 pointer-events-auto min-w-[220px] md:min-w-[280px] bg-vintage-deepInk/95 backdrop-blur-md border border-bronze/70 rounded-lg p-3 shadow-[0_10px_35px_rgba(0,0,0,0.95)]">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase text-vintage-sand mb-2 pb-1.5 border-b border-vintage-charcoal">
            <span className="flex items-center gap-1.5 text-bronze font-bold">
              {isPlaying ? (
                <>
                  <Lock className="w-3 h-3 text-amber-400 animate-pulse" />
                  <span className="text-amber-400">PLAYING // SCROLL LOCKED</span>
                </>
              ) : hasPlayed ? (
                <>
                  <Unlock className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">UNLOCKED // CONTINUE SCROLL</span>
                </>
              ) : (
                <>
                  <Film className="w-3 h-3 text-bronze" />
                  <span>READY // SCROLL TO ENTER</span>
                </>
              )}
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

          <div className="mt-2.5 flex items-center justify-between text-[9px] font-mono text-vintage-sepia uppercase">
            {isPlaying ? (
              <button
                onClick={handleSkip}
                className="flex items-center gap-1 text-vintage-sand hover:text-bronze transition-colors px-2 py-0.5 rounded bg-vintage-charcoal border border-vintage-slate"
                title="Skip to end and unlock page scroll"
              >
                <FastForward className="w-3 h-3" />
                <span>SKIP TO END</span>
              </button>
            ) : hasPlayed ? (
              <button
                onClick={handleReplay}
                className="flex items-center gap-1 text-vintage-sand hover:text-bronze transition-colors px-2 py-0.5 rounded bg-vintage-charcoal border border-vintage-slate"
                title="Replay sequence with locked scroll"
              >
                <RotateCcw className="w-3 h-3 text-bronze" />
                <span>REPLAY SEQUENCE</span>
              </button>
            ) : (
              <button
                onClick={() => startPlayback()}
                className="flex items-center gap-1 text-bronze hover:underline font-semibold"
              >
                PLAY NOW
              </button>
            )}
            <span className="text-vintage-tan">CINEMATIC ARCHIVE</span>
          </div>
        </div>

        {/* Loading Overlay */}
        {!isLoaded && (
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
    </section>
  );
}

