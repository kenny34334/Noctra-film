import React from 'react';
import { Search } from 'lucide-react';

interface StinkHeaderProps {
  currentRegion: string;
  onOpenSearch: () => void;
  onResetView: () => void;
}

export const StinkHeader: React.FC<StinkHeaderProps> = ({
  currentRegion,
  onOpenSearch,
  onResetView,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none px-6 py-5 sm:py-6 flex items-center justify-between">
      {/* Top Left: Regional Marker */}
      <div className="pointer-events-auto text-[11px] font-mono tracking-widest text-neutral-400 uppercase hidden sm:block">
        <span>{currentRegion} / EDITION</span>
      </div>

      {/* Top Center: Signature Stink Wordmark */}
      <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2">
        <button
          onClick={onResetView}
          className="text-xl sm:text-2xl font-black tracking-tighter text-white hover:opacity-75 transition-opacity font-['Outfit'] uppercase"
        >
          NOCTRA<span className="font-light tracking-widest ml-1 text-xs text-neutral-400">FILMS</span>
        </button>
      </div>

      {/* Top Right: Search Trigger */}
      <div className="pointer-events-auto ml-auto sm:ml-0">
        <button
          onClick={onOpenSearch}
          className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Search directory"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
