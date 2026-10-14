import React from 'react';
import { SANDWICH_STEPS } from '../data/sandwichData';

export const SandwichProcess: React.FC = () => {
  return (
    <section className="py-24 border-t border-neutral-100 bg-neutral-50/70" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Authentic Sandwich Section Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FF6900] font-bold">
            HOW IT WORKS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 font-['Outfit'] leading-[1.08]">
            We&rsquo;re tech-obsessed <br />
            <span className="spectrum-text-gradient">filmmakers at heart.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal pt-1">
            Our obsession for great products intersects with our filmmaking background. What does that get? Cinematic videos that we and our clients show the world through digital channels, TikTok, and broadcast TV.
          </p>
        </div>

        {/* 4 Steps Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SANDWICH_STEPS.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl border border-neutral-200 bg-white p-7 space-y-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="font-mono text-3xl font-black text-[#FF6900]">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 font-['Outfit']">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                {step.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
