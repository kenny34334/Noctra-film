import React from 'react';
import { SANDWICH_CLIENTS } from '../data/sandwichData';

export const SandwichClientWall: React.FC = () => {
  return (
    <section className="py-16 border-y border-neutral-100 bg-neutral-50/60" id="clients">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-8">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
            We have helped define how the world understands companies like:
          </p>
        </div>

        {/* Clean, Understated Client Brand Roster */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-neutral-500 font-['Outfit'] text-xl sm:text-2xl font-bold tracking-tight">
          {SANDWICH_CLIENTS.map((client) => (
            <span
              key={client}
              className="hover:text-neutral-900 transition-colors cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
