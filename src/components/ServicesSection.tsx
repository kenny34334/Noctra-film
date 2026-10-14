import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { Video, Users, TrendingUp, Compass, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const serviceIcons = [Video, Users, TrendingUp, Compass];

  return (
    <section className="py-20 border-b border-neutral-800" id="services">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Full-Funnel Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-['Outfit']">
            Engineered For The Algorithmic Feed
          </h2>
          <p className="mt-2 text-neutral-400 text-sm sm:text-base">
            Every capability is designed to capture viewer retention within the first 1.5 seconds, seed cultural conversation, and drive measurable checkout conversions.
          </p>
        </div>

        {/* Asymmetric Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                    <span className="font-mono text-sm font-semibold text-amber-400">
                      {service.id}.
                    </span>
                    <Icon className="w-5 h-5 text-neutral-400 group-hover:text-amber-400 transition-colors" />
                  </div>

                  <div className="pt-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors font-['Outfit']">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-neutral-400 mt-1">
                      {service.subtitle}
                    </p>
                    <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800/80">
                  <div className="space-y-1.5">
                    {service.tags.map((tag) => (
                      <div key={tag} className="text-xs text-neutral-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-5 flex items-center justify-end">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 group-hover:text-amber-400 transition-colors"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
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
