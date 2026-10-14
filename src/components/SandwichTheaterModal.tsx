import React, { useEffect, useState, useRef } from 'react';
import { SandwichFilm } from '../data/sandwichData';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Film, ArrowRight, Share2 } from 'lucide-react';
import { SandwichLoaf } from './SandwichLoaf';

interface SandwichTheaterModalProps {
  film: SandwichFilm | null;
  onClose: () => void;
  onRequestFilm: (client: string) => void;
}

export const SandwichTheaterModal: React.FC<SandwichTheaterModalProps> = ({
  film,
  onClose,
  onRequestFilm,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(15);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (film) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setProgress(10);
      setIsPlaying(true);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
      if (oscRef.current) {
        try {
          oscRef.current.stop();
          oscRef.current.disconnect();
        } catch {
          // ignore
        }
      }
    };
  }, [film, onClose]);

  const toggleSound = () => {
    if (isMuted) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioCtxRef.current) audioCtxRef.current = new AudioCtx();
        if (audioCtxRef.current.state === 'suspended') audioCtxRef.current.resume();

        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(130, audioCtxRef.current.currentTime);
        gain.gain.setValueAtTime(0.03, audioCtxRef.current.currentTime);

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
    if (!film || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 1));
    }, 300);
    return () => clearInterval(interval);
  }, [film, isPlaying]);

  if (!film) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-neutral-200 bg-white shadow-2xl z-10 text-neutral-900">
        
        {/* Spectrum Top Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 sandwich-spectrum-bar rounded-t-3xl" />

        {/* Top Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-neutral-100 bg-white/95 px-6 py-4 backdrop-blur-md rounded-t-3xl">
          <div className="flex items-center gap-2.5 text-xs font-mono">
            <SandwichLoaf size={20} className="text-[#FF6900]" />
            <span className="text-[#FF6900] font-bold uppercase">{film.client}</span>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-900 font-bold truncate max-w-xs">{film.title}</span>
            <span className="text-neutral-400 hidden sm:inline">·</span>
            <span className="text-neutral-500 hidden sm:inline">{film.duration}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden group">
          <img
            src={film.thumbnail}
            alt={film.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          {/* Central Play/Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white text-neutral-900 shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current text-neutral-900" />
            ) : (
              <Play className="w-6 h-6 fill-current text-neutral-900 ml-0.5" />
            )}
          </button>

          {/* Bottom HUD */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent space-y-2 text-white">
            <div
              className="relative w-full h-1.5 bg-neutral-700 rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                setProgress(Math.round(pos * 100));
              }}
            >
              <div
                className="h-full sandwich-spectrum-bar rounded-full transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-neutral-300">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white transition-colors font-bold uppercase"
                >
                  {isPlaying ? 'PAUSE' : 'PLAY'}
                </button>
                <span className="text-neutral-400">{film.duration} Runtime</span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={toggleSound}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#F6BE00]" />}
                  <span>{isMuted ? 'MUTE' : 'UNMUTE'}</span>
                </button>
                <button
                  onClick={() => {
                    const el = document.documentElement;
                    if (!document.fullscreenElement) el.requestFullscreen?.();
                    else document.exitFullscreen?.();
                  }}
                  className="hover:text-white transition-colors"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body & Director Notes */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#FF6900] font-bold">
              THE STORY BEHIND THE FILM
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-neutral-900">
              {film.title}
            </h2>
            <p className="text-base text-neutral-700 italic font-medium leading-relaxed">
              &ldquo;{film.logline}&rdquo;
            </p>
          </div>

          {/* The Backstory */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
              Director Notes &amp; Concept
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed font-normal">
              {film.backstory}
            </p>
          </div>

          {/* Results & Credits Split */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-neutral-200 bg-white">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                Audience &amp; Growth Impact
              </div>
              <div className="text-2xl font-black text-neutral-900 font-['Outfit'] mt-1">
                {film.views}
              </div>
              <div className="text-xs text-[#00AB84] mt-1 font-mono font-semibold">
                {film.results}
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-neutral-200 bg-white">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-[#FF6900]" />
                <span>Production Credits</span>
              </div>
              <div className="text-xs font-mono text-neutral-600 mt-2 space-y-1">
                <div>Director: <span className="text-neutral-900 font-medium">{film.director}</span></div>
                {film.credits.map((cr) => (
                  <div key={cr} className="text-neutral-500">{cr}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                alert('Film link copied to clipboard.');
              }}
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-black transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Film Link</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestFilm(film.client);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-all font-mono shadow-sm"
            >
              <span>Make A Video Like This</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F6BE00]" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
