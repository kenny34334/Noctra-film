import React from 'react';
import { METHODOLOGY_STEPS } from '../data/portfolioData';

export const MethodologySection: React.FC = () => {
  return (
    <section className="py-20 border-b border-neutral-800 bg-neutral-900/30" id="methodology">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            The Growth Framework
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-['Outfit']">
            Our 14-Day High-Velocity Sprint Model
          </h2>
          <p className="mt-2 text-neutral-400 text-sm sm:text-base">
            Viral scale is not an accidental lottery; it is a systematic testing discipline of rapid iteration, hook analysis, and paid whitelisting.
          </p>
        </div>

        {/* 4-Column Step Framework */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((step) => (
            <div
              key={step.step}
              className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 space-y-4 hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                  <span className="font-mono text-2xl font-extrabold text-amber-400">
                    {step.step}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mt-4 font-['Outfit']">
                  {step.name}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed mt-2">
                  {step.detail}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-800/60 flex items-center gap-1.5 text-[11px] text-neutral-500 font-mono">
                <span>PHASE {step.step} COMPLETE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
