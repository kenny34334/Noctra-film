import React, { useEffect, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(24);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Simulate video playback progress
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 450);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl overflow-hidden rounded-xl border border-neutral-700 bg-neutral-950 shadow-2xl z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900/90 px-5 py-3.5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KINETIK 2026 Studio Reel (0:45)</span>
          </div>

          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Stage Container */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black flex items-center justify-center group">
          <img
            src="/src/assets/images/hero_social_agency_1792011267704.jpg"
            alt="Agency showreel studio preview"
            className="w-full h-full object-cover opacity-80"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

          {/* Central Play/Pause Watermark */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-neutral-950 shadow-lg hover:scale-105 active:scale-95 transition-all"
            aria-label={isPlaying ? 'Pause showreel' : 'Play showreel'}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-1" />
            )}
          </button>

          {/* Chapters Overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-300">
            <div className="bg-black/60 px-3 py-1 rounded border border-white/10">
              CHAPTER 02: HIGH-RETENTION HOOKS
            </div>
            <div className="bg-black/60 px-3 py-1 rounded border border-white/10 text-amber-400">
              4K 60FPS MASTER
            </div>
          </div>

          {/* Bottom Player Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent space-y-2">
            {/* Timeline Progress Bar */}
            <div className="relative w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden cursor-pointer">
              <div
                className="h-full bg-amber-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-neutral-300 pt-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-amber-400 transition-colors"
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <span className="font-mono text-neutral-400">
                  0:{progress < 10 ? `0${progress}` : Math.min(progress, 45)} / 0:45
                </span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-amber-400 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => {
                    const el = document.documentElement;
                    if (!document.fullscreenElement) el.requestFullscreen?.();
                    else document.exitFullscreen?.();
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Info Footer */}
        <div className="p-4 bg-neutral-900 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400">
          <div>
            Featuring campaigns for <span className="text-white font-medium">KURA Streetwear, Aethel Botanicals, Nexus Audio, and Terra Radiance</span>.
          </div>
          <div className="text-neutral-500 font-mono">
            Shot on ARRI Alexa Mini LF &amp; RED V-Raptor
          </div>
        </div>

      </div>
    </div>
  );
};
