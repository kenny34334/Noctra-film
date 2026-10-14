import React from 'react';
import { AGENCY_STATS } from '../data/portfolioData';

export const StatsStrip: React.FC = () => {
  return (
    <section className="border-b border-neutral-800 bg-neutral-900/60 py-10" id="results">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          {AGENCY_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col justify-center ${idx !== 0 ? 'pt-6 md:pt-0 md:pl-6' : ''}`}
            >
              <div className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight tabular-nums">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-neutral-200">
                {stat.label}
              </div>
              <p className="mt-1 text-xs text-neutral-400 leading-snug">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
