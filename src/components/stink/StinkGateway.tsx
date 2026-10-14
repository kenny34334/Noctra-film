import React, { useState } from 'react';
import { DivisionType } from '../../data/stinkData';
import { ArrowUpRight, Film, Sparkles } from 'lucide-react';

interface StinkGatewayProps {
  onSelectDivision: (division: DivisionType) => void;
}

export const StinkGateway: React.FC<StinkGatewayProps> = ({ onSelectDivision }) => {
  const [hovered, setHovered] = useState<DivisionType | null>(null);

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-between overflow-hidden">
      
      {/* Top Bar on Gateway */}
      <div className="relative z-20 px-6 py-6 sm:px-10 flex items-center justify-between text-xs font-mono">
        <div className="text-neutral-500 uppercase tracking-widest hidden sm:block">
          GLOBAL PRODUCTION HOUSE
        </div>

        {/* Centered Wordmark */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="text-2xl sm:text-3xl font-black tracking-tighter text-white font-['Outfit'] uppercase">
            NOCTRA<span className="font-light tracking-widest ml-1 text-xs text-neutral-400">FILMS</span>
          </span>
        </div>

        <div className="text-neutral-400 uppercase tracking-widest text-[11px] ml-auto sm:ml-0">
          SELECT DIVISION
        </div>
      </div>

      {/* Center 2-Way Gateway Split */}
      <div className="relative z-10 flex-1 grid grid-cols-1 md:grid-cols-2 h-full">
        
        {/* Left: COMMERCIAL */}
        <div
          onMouseEnter={() => setHovered('commercial')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => onSelectDivision('commercial')}
          className={`group relative cursor-pointer overflow-hidden flex flex-col justify-end p-8 sm:p-14 border-b md:border-b-0 md:border-r border-neutral-800 transition-all duration-700 ${
            hovered === 'fiction' ? 'opacity-40' : 'opacity-100'
          }`}
        >
          {/* Cinema Background Visual */}
          <img
            src="/src/assets/images/showreel_centerpiece_1792011907359.jpg"
            alt="Noctra Commercial Division"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 group-hover:via-black/20 transition-all duration-500" />

          {/* Text Lockup */}
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIVISION 01</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight font-['Outfit'] text-white leading-none">
              COMMERCIAL
            </h2>

            <p className="text-xs sm:text-sm font-mono text-neutral-300 max-w-md uppercase tracking-wider">
              Commercials · Music Videos · Brand Films · Fashion Cinema
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono font-bold uppercase text-white group-hover:text-amber-400 transition-colors">
              <span>Enter Commercial</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Right: FICTION */}
        <div
          onMouseEnter={() => setHovered('fiction')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => onSelectDivision('fiction')}
          className={`group relative cursor-pointer overflow-hidden flex flex-col justify-end p-8 sm:p-14 transition-all duration-700 ${
            hovered === 'commercial' ? 'opacity-40' : 'opacity-100'
          }`}
        >
          {/* Cinema Background Visual */}
          <img
            src="/src/assets/images/fiction_narrative_cinema_1792018265965.jpg"
            alt="Noctra Fiction Division"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 group-hover:via-black/20 transition-all duration-500" />

          {/* Text Lockup */}
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <Film className="w-3.5 h-3.5 text-white" />
              <span>DIVISION 02</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight font-['Outfit'] text-white leading-none">
              FICTION
            </h2>

            <p className="text-xs sm:text-sm font-mono text-neutral-300 max-w-md uppercase tracking-wider">
              Feature Films · Dramatic Shorts · Episodic Television
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono font-bold uppercase text-white group-hover:text-neutral-300 transition-colors">
              <span>Enter Fiction</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer Info on Gateway */}
      <div className="relative z-20 px-6 py-4 sm:px-10 flex items-center justify-between text-[11px] font-mono text-neutral-500 border-t border-neutral-900">
        <div>LONDON · PARIS · BERLIN · LOS ANGELES · SHANGHAI</div>
        <div>NOCTRA {new Date().getFullYear()}</div>
      </div>

    </div>
  );
};
