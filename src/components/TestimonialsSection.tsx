import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Verified Partner Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-['Outfit']">
            Backed By Growth Leaders
          </h2>
          <p className="mt-2 text-neutral-400 text-sm sm:text-base">
            What founders, CMOs, and growth executives say about scaling with KINETIK.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/40 p-7 space-y-6 hover:border-neutral-700 transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-5 h-5 text-amber-400/80" />
                <p className="text-sm text-neutral-200 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80">
                <div className="text-sm font-bold text-white font-['Outfit']">
                  {t.author}
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  {t.role}
                </div>
                <div className="text-xs text-amber-400 font-medium mt-1">
                  {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
