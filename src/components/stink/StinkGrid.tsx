import React, { useState } from 'react';
import { StinkProject } from '../../data/stinkData';
import { Play } from 'lucide-react';

interface StinkGridProps {
  projects: StinkProject[];
  onSelectProject: (project: StinkProject) => void;
  selectedDirector?: string | null;
  onClearDirectorFilter?: () => void;
}

export const StinkGrid: React.FC<StinkGridProps> = ({
  projects,
  onSelectProject,
  selectedDirector,
  onClearDirectorFilter,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="pt-24 pb-32 px-2 sm:px-4 max-w-[1920px] mx-auto">
      
      {/* Active Director Filter Bar if filtered */}
      {selectedDirector && (
        <div className="mb-6 px-4 flex items-center justify-between text-xs font-mono text-neutral-400 border-b border-neutral-800 pb-3">
          <div>
            SHOWING WORK DIRECTED BY <span className="text-white font-bold">{selectedDirector}</span>
          </div>
          {onClearDirectorFilter && (
            <button
              onClick={onClearDirectorFilter}
              className="hover:text-white transition-colors underline"
            >
              Clear Filter (Show All)
            </button>
          )}
        </div>
      )}

      {/* Asymmetric Stink Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-2 sm:gap-3">
        {projects.map((project) => {
          const isHovered = hoveredId === project.id;

          // Compute column spans matching Stink's width-full, width-half, width-third
          let colSpan = 'md:col-span-6 lg:col-span-4'; // default width-third
          let aspect = 'aspect-[16/10] sm:aspect-[4/3]';

          if (project.width === 'full') {
            colSpan = 'col-span-1 md:col-span-6 lg:col-span-12';
            aspect = 'aspect-[16/9] sm:aspect-[21/9]';
          } else if (project.width === 'half') {
            colSpan = 'col-span-1 md:col-span-6 lg:col-span-6';
            aspect = 'aspect-[16/10] sm:aspect-[16/10]';
          }

          return (
            <div
              key={project.id}
              className={`${colSpan} group relative cursor-pointer overflow-hidden bg-neutral-950 transition-all`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onSelectProject(project)}
            >
              {/* Media Container */}
              <div className={`relative ${aspect} w-full overflow-hidden bg-neutral-900`}>
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className={`h-full w-full object-cover transition-transform duration-700 ${
                    isHovered ? 'scale-105 opacity-90' : 'scale-100 opacity-95'
                  }`}
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark vignette on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Play affordance indicator on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Understated Stink Info Lockup (Bottom Left) */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10 space-y-0.5">
                  <h3 className="text-base sm:text-lg font-bold font-['Outfit'] tracking-tight leading-tight">
                    {project.client} <span className="font-normal text-white/70">· {project.title}</span>
                  </h3>
                  <div className="text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                    <span>{project.director}</span>
                    <span className="mx-1.5 opacity-40">/</span>
                    <span className="text-[11px] uppercase opacity-75">{project.categoryLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
