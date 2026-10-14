import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, ArrowDown } from 'lucide-react';

interface SandwichHeroProps {
  onOpenMakeVideo: () => void;
  onJumpToWork: () => void;
}

const HERO_CHAPTERS = [
  {
    id: 'ch-1',
    title: 'The Underground Runway Drop',
    client: 'KURA Streetwear',
    time: '00:15',
    image: '/src/assets/images/showreel_centerpiece_1792011907359.jpg',
    logline: 'Taking over midnight intersections with 20 street dancers and handheld anamorphic cameras.',
  },
  {
    id: 'ch-2',
    title: 'Why Would Anyone Pay $24 For Water?',
    client: 'Aethel Aperitifs',
    time: '00:32',
    image: '/src/assets/images/campaign_beverage_1792011268577.jpg',
    logline: 'An honest, slightly self-aware explainer on botanical extracts, ice physics, and why dinner parties got so boring.',
  },
  {
    id: 'ch-3',
    title: 'The Subway Blindfold Test',
    client: 'Nexus Audio Labs',
    time: '00:51',
    image: '/src/assets/images/campaign_tech_1792011268336.jpg',
    logline: '15 real commuters on the loudest train in NYC to test active noise cancellation.',
  },
  {
    id: 'ch-4',
    title: 'Ingredients You Can Actually Pronounce',
    client: 'Terra Radiance',
    time: '01:08',
    image: '/src/assets/images/campaign_beauty_1792011269456.jpg',
    logline: 'Exposing cosmetic pseudoscience with macro zoom lenses and dermatologist humor.',
  },
];

export const SandwichHero: React.FC<SandwichHeroProps> = ({ onOpenMakeVideo, onJumpToWork }) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(25);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);

  const chapter = HERO_CHAPTERS[currentChapterIndex];

  // Synthesize pleasant ambient cinema audio on unmute
  const toggleSound = () => {
    if (isMuted) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioCtxRef.current) audioCtxRef.current = new AudioCtx();
        if (audioCtxRef.current.state === 'suspended') audioCtxRef.current.resume();

        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(110, audioCtxRef.current.currentTime);
        gain.gain.setValueAtTime(0.04, audioCtxRef.current.currentTime);

        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);
        osc.start();
        oscRef.current = osc;
        setIsMuted(false);
      } catch {
        setIsMuted(false);
      }
    } else {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
          oscRef.current.disconnect();
        } catch {
          // ignore
        }
      }
      setIsMuted(true);
    }
  };

  useEffect(() => {
    return () => {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
          oscRef.current.disconnect();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentChapterIndex((idx) => (idx + 1) % HERO_CHAPTERS.length);
          return 0;
        }
        return prev + 1;
      });
    }, 180);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const toggleFullscreen = () => {
    const el = document.getElementById('sandwich-hero-cinema');
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  return (
    <section className="relative pt-12 pb-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Authentic Sandwich Headline Block */}
        <div className="max-w-4xl space-y-4 mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF6900] font-['Outfit']">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Los Angeles Video Production Studio · Est. 2009</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[4.75rem] font-black tracking-tight text-neutral-900 font-['Outfit'] leading-[1.04]">
            Hello. We&rsquo;re Sandwich.<br />
            We make commercials.<br />
            <span className="spectrum-text-gradient">The kind people like.</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-3xl pt-2">
            Sandwich is a video production company that makes launch and explainer films for technology companies and consumer brands, like Slack, Airbnb, and Square.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenMakeVideo}
              className="px-6 py-3 text-sm font-bold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-all shadow-md active:scale-98"
            >
              Make A Video With Us
            </button>
            <button
              onClick={onJumpToWork}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-neutral-900 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-all"
            >
              <span>See Our Work</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Central Showstopper Showreel Player */}
        <div className="relative max-w-5xl">
          <div
            id="sandwich-hero-cinema"
            className="group relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden rounded-2xl bg-black shadow-2xl border border-neutral-200"
          >
            {/* Visual Image */}
            <img
              key={chapter.id}
              src={chapter.image}
              alt={chapter.title}
              className="h-full w-full object-cover transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />

            {/* Gradient Scrim */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

            {/* Top Bar inside video */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between text-xs font-mono text-white">
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="font-bold">SANDWICH SHOWREEL</span>
                <span className="text-neutral-500">·</span>
                <span className="text-[#F6BE00] font-semibold">{chapter.client}</span>
              </div>

              <div className="hidden sm:flex items-center gap-2 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15 text-neutral-300">
                <span>01:14 4K Master</span>
              </div>
            </div>

            {/* Big Central Play Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white text-neutral-900 shadow-2xl hover:scale-110 active:scale-95 transition-transform"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-current text-neutral-900" />
              ) : (
                <Play className="w-8 h-8 fill-current text-neutral-900 ml-1" />
              )}
            </button>

            {/* Bottom HUD inside video */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 space-y-3 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="max-w-xl">
                  <div className="text-xs uppercase tracking-wider text-[#F6BE00] font-bold font-mono">
                    {chapter.client}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-['Outfit'] mt-0.5">
                    {chapter.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-1 line-clamp-1">
                    {chapter.logline}
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-black/70 px-3 py-1.5 rounded-lg border border-white/15 text-xs font-mono">
                  <span className="text-[11px] text-neutral-300">
                    {!isMuted ? 'SOUND ON' : 'MUTED'}
                  </span>
                </div>
              </div>

              {/* Progress Timeline */}
              <div
                className="relative w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickPos = (e.clientX - rect.left) / rect.width;
                  setProgress(Math.round(clickPos * 100));
                }}
              >
                <div
                  className="h-full sandwich-spectrum-bar rounded-full transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between text-xs font-mono text-neutral-300">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-white transition-colors uppercase font-bold"
                  >
                    {isPlaying ? 'PAUSE' : 'PLAY'}
                  </button>
                  <span className="text-neutral-400">{chapter.time} / 01:14</span>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={toggleSound}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#F6BE00]" />}
                    <span>{isMuted ? 'UNMUTE' : 'MUTE'}</span>
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="hover:text-white transition-colors"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom Spectrum Stripe Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 sandwich-spectrum-bar" />
          </div>

          {/* Chapters Bar Beneath Player */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {HERO_CHAPTERS.map((ch, idx) => {
              const active = idx === currentChapterIndex;
              return (
                <button
                  key={ch.id}
                  onClick={() => {
                    setCurrentChapterIndex(idx);
                    setProgress(idx * 25);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    active
                      ? 'border-neutral-900 bg-neutral-50 shadow-sm'
                      : 'border-neutral-200 bg-white hover:border-neutral-300 text-neutral-600'
                  }`}
                >
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">
                    CH 0{idx + 1} · {ch.time}
                  </div>
                  <div className="text-xs font-bold text-neutral-900 truncate mt-0.5">
                    {ch.client}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Authentic Sandwich "This should be simple" Section Line */}
        <div className="mt-20 pt-10 border-t border-neutral-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-lg">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-['Outfit']">
              This should be simple.
            </h3>
            <p className="mt-1 text-sm text-neutral-600">
              Great products deserve videos that people genuinely enjoy watching.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-neutral-900 font-['Outfit']">
            <div>
              <div className="text-3xl font-black tabular-nums">700+</div>
              <div className="text-xs text-neutral-500 font-medium">Videos Produced</div>
            </div>
            <div>
              <div className="text-3xl font-black tabular-nums">300+</div>
              <div className="text-xs text-neutral-500 font-medium">Clients Launched</div>
            </div>
            <div>
              <div className="text-3xl font-black tabular-nums">15+</div>
              <div className="text-xs text-neutral-500 font-medium">Years Since 2009</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
