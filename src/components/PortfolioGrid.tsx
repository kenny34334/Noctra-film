import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, Project } from '../data/portfolioData';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface PortfolioGridProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Campaigns' },
    { id: 'short-form', label: 'Short-Form & Reels' },
    { id: 'creator-ugc', label: 'Creator & UGC' },
    { id: 'paid-performance', label: 'Paid Social' },
    { id: 'brand-relaunch', label: 'Brand Relaunch' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 border-b border-neutral-800" id="work">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Portfolio &amp; Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-['Outfit']">
              Featured Client Campaigns
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Real brand transformations backed by rigorous retention data, verified sales attribution, and custom creator networks.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-neutral-800 text-amber-400 font-semibold shadow-sm'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/80 hover:border-neutral-700 transition-all duration-200 overflow-hidden flex flex-col justify-between"
              >
                {/* Media Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback container if image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle Gradient Scrim for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  
                  {/* Category & Channels unboxed metadata overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300 backdrop-blur-sm bg-neutral-950/60 px-3 py-1.5 rounded-md border border-white/10">
                    <span className="font-semibold text-amber-400">{project.client}</span>
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <span>{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Corner Action Cue */}
                  <div className="absolute bottom-4 right-4">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-neutral-900/90 border border-neutral-700 px-3 py-1.5 rounded-md group-hover:bg-amber-400 group-hover:text-neutral-950 transition-colors">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Content & Proof Metrics */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors font-['Outfit']">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-400 line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Quantitative proof metrics bar */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-neutral-800/80">
                    {project.metrics.slice(0, 3).map((metric) => (
                      <div key={metric.label}>
                        <div className="text-base sm:text-lg font-bold text-white tabular-nums">
                          {metric.value}
                        </div>
                        <div className="text-[11px] text-neutral-400 truncate">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Platform Footnote */}
                  <div className="pt-2 flex items-center gap-2 text-xs text-neutral-500">
                    <span>Platforms:</span>
                    <span className="text-neutral-400">{project.platforms.join(' · ')}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
