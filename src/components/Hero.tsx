import React from 'react';
import { ArrowDown, Play, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onOpenCalculator: () => void;
  onOpenReel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenCalculator, onOpenReel }) => {
  return (
    <section className="relative overflow-hidden border-b border-neutral-800 pt-12 pb-16 lg:pt-16 lg:pb-24">
      {/* Subtle ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[120px]" 
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Independent Social Media &amp; Creator Studio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight text-white leading-[1.08] font-['Outfit'] text-balance">
              We engineer culture-defining social campaigns that scale revenue.
            </h1>

            <p className="max-w-xl text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Specialized in high-retention short-form video, hyper-targeted creator activations, 
              and full-funnel paid social for modern consumer &amp; DTC brands.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-neutral-950 bg-amber-400 rounded-md hover:bg-amber-300 active:scale-[0.98] transition-all whitespace-nowrap shadow-sm"
              >
                <span>Explore Client Campaigns</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-neutral-900 border border-neutral-700/80 rounded-md hover:bg-neutral-800 hover:border-neutral-600 active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <span>Calculate Campaign ROI</span>
              </button>
            </div>

            {/* Unboxed Metadata Trust Marker */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-neutral-400">
              <span className="text-neutral-300 font-medium">Production Studios in Los Angeles &amp; London</span>
              <span aria-hidden="true">·</span>
              <span>TikTok &amp; Meta Agency Certified</span>
              <span aria-hidden="true">·</span>
              <span>Guaranteed Delivery Timelines</span>
            </div>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-2xl">
              <img
                src="/src/assets/images/hero_social_agency_1792011267704.jpg"
                alt="KINETIK creative studio production set with cinema cameras and live monitors"
                className="h-[360px] sm:h-[440px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Bottom Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

              {/* Interactive Showreel Trigger Overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-amber-400 font-medium">In-House Stage 04</p>
                  <p className="text-sm font-semibold text-white">Behind The Viral Pipeline</p>
                  <p className="text-xs text-neutral-400">4K Short-Form Production Hub</p>
                </div>
                
                <button
                  onClick={onOpenReel}
                  className="flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-3.5 py-2 text-xs font-medium text-white transition-all active:scale-95 shrink-0"
                  title="Watch agency reel teaser"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-amber-400" />
                  <span>Showreel (0:45)</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
