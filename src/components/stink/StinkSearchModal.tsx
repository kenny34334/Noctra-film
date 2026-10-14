import React, { useState, useEffect } from 'react';
import { StinkProject } from '../../data/stinkData';
import { X, Search, ArrowRight } from 'lucide-react';

interface StinkSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: StinkProject[];
  onSelectProject: (project: StinkProject) => void;
}

export const StinkSearchModal: React.FC<StinkSearchModalProps> = ({
  isOpen,
  onClose,
  projects,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');

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

  if (!isOpen) return null;

  const filtered = projects.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.client.toLowerCase().includes(q) ||
      p.director.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/90 backdrop-blur-2xl p-4 sm:p-8 animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-3xl bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-white space-y-6 mt-12">
        {/* Search Input Bar */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-5 h-5 text-neutral-500" />
            <input
              type="text"
              autoFocus
              placeholder="Search by director, client, or film..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-lg sm:text-xl font-['Outfit'] text-white placeholder-neutral-600 focus:outline-none"
            />
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto space-y-2">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-xs font-mono text-neutral-500">
              NO FILMS FOUND FOR &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((proj) => (
              <div
                key={proj.id}
                onClick={() => {
                  onClose();
                  onSelectProject(proj);
                }}
                className="group flex items-center justify-between p-3 rounded-xl hover:bg-neutral-900 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-10 rounded bg-neutral-900 overflow-hidden shrink-0">
                    <img
                      src={proj.thumbnail}
                      alt={proj.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      {proj.client} · {proj.title}
                    </div>
                    <div className="text-xs font-mono text-neutral-500">
                      {proj.director} · {proj.categoryLabel}
                    </div>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
