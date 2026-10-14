import React, { useState } from 'react';
import { SANDWICH_FILMS, SandwichFilm } from '../data/sandwichData';
import { Play, Clock, ArrowUpRight } from 'lucide-react';

interface SandwichWorkGridProps {
  onSelectFilm: (film: SandwichFilm) => void;
}

export const SandwichWorkGrid: React.FC<SandwichWorkGridProps> = ({ onSelectFilm }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: `Featured Work (${SANDWICH_FILMS.length})` },
    { id: 'commercials', label: 'Commercials' },
    { id: 'social', label: 'Social & Shorts' },
    { id: 'launch', label: 'Launch Films' },
    { id: 'explainer', label: 'Explainers & Tech' },
  ];

  const filteredFilms =
    filter === 'all'
      ? SANDWICH_FILMS
      : SANDWICH_FILMS.filter((f) => f.category === filter);

  return (
    <section className="py-24 bg-white" id="work">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-100">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF6900] font-bold">
              THE WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 font-['Outfit'] mt-1">
              Videos that people like.
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base max-w-xl">
              From high-concept broadcast spots to fast-twitch social drops, each one is engineered to be clear, charming, and impossible to scroll past.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 rounded-xl">
            {categories.map((c) => {
              const active = filter === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setFilter(c.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-white text-neutral-900 shadow-sm'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Film Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFilms.map((film) => (
            <div
              key={film.id}
              onClick={() => onSelectFilm(film)}
              className="group cursor-pointer rounded-2xl border border-neutral-200 bg-white hover:border-neutral-400 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Thumbnail Stage */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Duration Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono text-neutral-900 font-bold border border-neutral-200/60 shadow-sm flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#FF6900]" />
                  <span>{film.duration}</span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono text-neutral-700 font-medium border border-neutral-200/60 shadow-sm">
                  {film.categoryLabel}
                </div>

                {/* Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-neutral-900 shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5 text-neutral-900" />
                  </div>
                </div>

                {/* Corner Cue */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-white bg-black/80 px-2.5 py-1 rounded-md">
                    <span>Watch Film</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Film Text & Logline */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#FF6900] font-bold">
                    {film.client}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#FF6900] transition-colors font-['Outfit'] mt-1 leading-snug">
                    {film.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {film.logline}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 text-xs font-mono flex items-center justify-between text-neutral-500">
                  <span className="font-semibold text-neutral-900">{film.views}</span>
                  <span className="text-neutral-400">·</span>
                  <span className="text-[#00AB84] font-medium truncate max-w-[160px]">{film.results}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
