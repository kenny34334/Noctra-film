import React from 'react';
import { STINK_DIRECTORS, StinkDirector } from '../../data/stinkData';
import { ArrowRight, Trophy } from 'lucide-react';

interface StinkDirectorsViewProps {
  onSelectDirector: (directorName: string) => void;
}

export const StinkDirectorsView: React.FC<StinkDirectorsViewProps> = ({
  onSelectDirector,
}) => {
  return (
    <div className="pt-28 pb-32 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Title */}
      <div className="border-b border-neutral-800 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            TALENT ROSTER
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-['Outfit'] mt-1">
            Directors
          </h1>
        </div>
        <p className="text-xs font-mono text-neutral-400 max-w-md">
          Representing leading visionary filmmakers across commercials, music videos, fiction, and episodic projects.
        </p>
      </div>

      {/* Directors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {STINK_DIRECTORS.map((director: StinkDirector) => (
          <div
            key={director.slug}
            className="group cursor-pointer rounded-xl bg-neutral-950 border border-neutral-900 overflow-hidden hover:border-neutral-700 transition-all flex flex-col justify-between"
            onClick={() => onSelectDirector(director.name)}
          >
            {/* Visual Aspect */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
              <img
                src={director.avatar}
                alt={director.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
              <div className="absolute top-3 right-3 text-[11px] font-mono bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-neutral-300 border border-white/10">
                {director.city}
              </div>
            </div>

            {/* Details */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold font-['Outfit'] text-white group-hover:text-amber-400 transition-colors">
                  {director.name}
                </h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed font-normal">
                  {director.bio}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-neutral-900">
                <div className="flex flex-wrap gap-1.5">
                  {director.awards.map((aw) => (
                    <span
                      key={aw}
                      className="inline-flex items-center gap-1 text-[10px] font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800"
                    >
                      <Trophy className="w-2.5 h-2.5 text-amber-400" />
                      <span>{aw}</span>
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-mono text-neutral-300 group-hover:text-white">
                  <span>View Curated Reel</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
