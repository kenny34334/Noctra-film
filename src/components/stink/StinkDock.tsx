import React, { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { REGIONS } from '../../data/stinkData';

interface StinkDockProps {
  activeTab: 'latest' | 'directors' | 'about';
  onSelectTab: (tab: 'latest' | 'directors' | 'about') => void;
  currentRegionCode: string;
  onSelectRegion: (code: string) => void;
  onOpenContact: () => void;
}

export const StinkDock: React.FC<StinkDockProps> = ({
  activeTab,
  onSelectTab,
  currentRegionCode,
  onSelectRegion,
  onOpenContact,
}) => {
  const [showRegions, setShowRegions] = useState(false);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[95vw]">
      
      {/* Region Selector Popover */}
      {showRegions && (
        <div className="absolute bottom-14 left-0 w-56 rounded-2xl stink-dock p-2 space-y-1 shadow-2xl text-xs font-mono animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="px-3 py-1.5 text-[10px] uppercase text-neutral-400 border-b border-white/10 tracking-wider">
            Select Territory
          </div>
          {REGIONS.map((r) => {
            const isSelected = r.code === currentRegionCode;
            return (
              <button
                key={r.code}
                onClick={() => {
                  onSelectRegion(r.code);
                  setShowRegions(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all ${
                  isSelected
                    ? 'bg-white text-black font-bold'
                    : 'text-neutral-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{r.name}</span>
                <span className="opacity-60">{r.code}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Floating Pill Dock */}
      <nav className="stink-dock rounded-full px-2 py-1.5 flex items-center gap-1 text-xs font-mono shadow-2xl">
        
        {/* Region Button */}
        <button
          onClick={() => setShowRegions(!showRegions)}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-full transition-all text-neutral-300 hover:text-white hover:bg-white/10 ${
            showRegions ? 'bg-white/20 text-white' : ''
          }`}
          title="Select Region"
        >
          <Globe className="w-3.5 h-3.5" />
          <span className="font-bold">{currentRegionCode}</span>
          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showRegions ? 'rotate-180' : ''}`} />
        </button>

        {/* Hairline Divider */}
        <span className="h-4 w-[1px] bg-white/20 mx-1" />

        {/* Latest */}
        <button
          onClick={() => onSelectTab('latest')}
          className={`px-4 py-2 rounded-full transition-all ${
            activeTab === 'latest'
              ? 'bg-white text-black font-bold shadow-sm'
              : 'text-neutral-300 hover:text-white hover:bg-white/10'
          }`}
        >
          Latest
        </button>

        {/* Directors */}
        <button
          onClick={() => onSelectTab('directors')}
          className={`px-4 py-2 rounded-full transition-all ${
            activeTab === 'directors'
              ? 'bg-white text-black font-bold shadow-sm'
              : 'text-neutral-300 hover:text-white hover:bg-white/10'
          }`}
        >
          Directors
        </button>

        {/* About */}
        <button
          onClick={() => onSelectTab('about')}
          className={`px-4 py-2 rounded-full transition-all ${
            activeTab === 'about'
              ? 'bg-white text-black font-bold shadow-sm'
              : 'text-neutral-300 hover:text-white hover:bg-white/10'
          }`}
        >
          About
        </button>

        {/* Hairline Divider */}
        <span className="h-4 w-[1px] bg-white/20 mx-1" />

        {/* Contact Trigger */}
        <button
          onClick={onOpenContact}
          className="px-3.5 py-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-all font-semibold"
        >
          Contact
        </button>
      </nav>

    </div>
  );
};
