import React, { useEffect, useState } from 'react';
import { StinkProject } from '../../data/stinkData';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Share2, Film } from 'lucide-react';

interface StinkFilmModalProps {
  project: StinkProject | null;
  onClose: () => void;
  onSelectDirector: (director: string) => void;
}

export const StinkFilmModal: React.FC<StinkFilmModalProps> = ({
  project,
  onClose,
  onSelectDirector,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(20);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setProgress(15);
      setIsPlaying(true);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  useEffect(() => {
    if (!project || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 1));
    }, 350);
    return () => clearInterval(interval);
  }, [project, isPlaying]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200 overflow-y-auto p-4 sm:p-8">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-5xl max-h-[94vh] overflow-y-auto bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl z-10 text-white">
        
        {/* Top Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-neutral-900 bg-neutral-950/95 px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="font-bold text-white uppercase">{project.client}</span>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-400">{project.title}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Cinema Stage */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden group">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

          {/* Big Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-0.5" />
            )}
          </button>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent space-y-2 text-xs font-mono text-neutral-300">
            <div
              className="relative w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                setProgress(Math.round(pos * 100));
              }}
            >
              <div
                className="h-full bg-white rounded-full transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-3">
                <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-white font-bold">
                  {isPlaying ? 'PAUSE' : 'PLAY'}
                </button>
                <span className="text-neutral-500">4K PRORES</span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
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

        {/* Project Details & Credits */}
        <div className="p-6 sm:p-10 space-y-8">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              {project.categoryLabel} · {project.year}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight">
              {project.client} <span className="text-neutral-400 font-light">· {project.title}</span>
            </h2>

            {project.laurels && project.laurels.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {project.laurels.map((laurel) => (
                  <span
                    key={laurel}
                    className="inline-flex items-center px-2.5 py-1 rounded bg-white/10 text-neutral-200 text-[11px] font-mono border border-white/20"
                  >
                    🏆 {laurel}
                  </span>
                ))}
              </div>
            )}

            <div className="pt-1">
              <span className="text-xs font-mono text-neutral-400">DIRECTED BY: </span>
              <button
                onClick={() => {
                  onClose();
                  onSelectDirector(project.director);
                }}
                className="text-sm font-bold text-white underline hover:text-neutral-300 ml-1"
              >
                {project.director}
              </button>
            </div>
          </div>

          {/* Synopsis */}
          <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-900">
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              {project.synopsis}
            </p>
          </div>

          {/* Credits Table */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <Film className="w-3.5 h-3.5" />
              <span>Full Production Credits</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-neutral-400 pt-2 border-t border-neutral-900">
              <div>
                <span className="text-neutral-500 block">Director</span>
                <span className="text-white font-medium">{project.credits.director}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Director of Photography</span>
                <span className="text-white font-medium">{project.credits.dop}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Editor</span>
                <span className="text-white font-medium">{project.credits.editor}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Colorist</span>
                <span className="text-white font-medium">{project.credits.colorist}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Production Company</span>
                <span className="text-white font-medium">{project.credits.production}</span>
              </div>
            </div>
          </div>

          {/* Bottom Share Link */}
          <div className="pt-6 border-t border-neutral-900 flex justify-end">
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Link Copied to Clipboard' : 'Share Project'}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
