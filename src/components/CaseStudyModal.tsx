import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, CheckCircle2, Quote, ArrowRight, Share2, Sparkles } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestSimilar: (clientOrCategory: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-neutral-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-neutral-700 bg-neutral-900 shadow-2xl z-10 text-neutral-100 focus:outline-none">
        
        {/* Modal Sticky Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-neutral-800 bg-neutral-900/95 px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
              {project.client}
            </span>
            <span className="text-neutral-500" aria-hidden="true">/</span>
            <span className="text-xs text-neutral-400">
              {project.categoryLabel}
            </span>
          </div>

          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
            aria-label="Close case study details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Visual & Title */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-['Outfit']">
              {project.title}
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {project.tagline}
            </p>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                <span className="font-medium bg-neutral-900/80 px-2.5 py-1 rounded border border-neutral-700">
                  Campaign Window: {project.year}
                </span>
                <span className="bg-neutral-900/80 px-2.5 py-1 rounded border border-neutral-700">
                  Channels: {project.platforms.join(' · ')}
                </span>
              </div>
            </div>
          </div>

          {/* Quantitative Impact Strip */}
          <div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>Verified Campaign Results</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800">
              {project.metrics.map((metric, i) => (
                <div key={metric.label} className={i !== 0 ? 'pt-3 sm:pt-0 sm:pl-4' : ''}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums font-['Outfit']">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-neutral-200 mt-0.5">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                    {metric.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategy & Challenge Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3 rounded-lg border border-neutral-800 p-5 bg-neutral-900/40">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                01. The Brand Challenge
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-3 rounded-lg border border-neutral-800 p-5 bg-neutral-900/40">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                02. The Tactical Execution
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.strategy}
              </p>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Production &amp; Management Scope
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 bg-neutral-950/40 border border-neutral-800/80 p-3 rounded-md"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Attributable Testimonial Quote */}
          <div className="relative rounded-lg border border-neutral-800 bg-neutral-950/80 p-6 space-y-3">
            <Quote className="w-6 h-6 text-amber-400/80" />
            <blockquote className="text-sm sm:text-base text-neutral-200 italic leading-relaxed">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>
            <div className="pt-2 text-xs border-t border-neutral-800/60 flex items-center justify-between text-neutral-400">
              <div>
                <span className="font-semibold text-white">{project.testimonial.author}</span>
                <span aria-hidden="true"> · </span>
                <span>{project.testimonial.role}</span>
              </div>
              <span className="text-amber-400 font-medium">{project.testimonial.company}</span>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800">
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                alert('Campaign link copied to clipboard.');
              }}
              className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Case Study</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project.client);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 rounded-md hover:bg-amber-300 transition-all"
            >
              <span>Build A Similar Campaign For Your Brand</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
