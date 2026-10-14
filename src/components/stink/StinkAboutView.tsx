import React from 'react';
import { REGIONS } from '../../data/stinkData';
import { MapPin, Mail, Award, Globe } from 'lucide-react';

export const StinkAboutView: React.FC = () => {
  return (
    <div className="pt-28 pb-32 px-4 sm:px-8 max-w-5xl mx-auto space-y-16">
      
      {/* Manifesto */}
      <div className="space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
          ABOUT NOCTRA
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-['Outfit'] leading-[1.08]">
          We create commercials, music videos, and cinematic films that define culture.
        </h1>
        <p className="text-base sm:text-xl text-neutral-300 leading-relaxed font-normal max-w-3xl">
          Founded in 1998, NOCTRA is an independent global network of filmmakers, producers, and creative storytellers. We represent an international roster of unique directorial visionaries across our seven global offices.
        </p>
      </div>

      {/* Global Studios Grid */}
      <div className="space-y-6 pt-8 border-t border-neutral-900">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <Globe className="w-4 h-4" />
          <span>Global Offices</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REGIONS.map((r) => (
            <div
              key={r.code}
              className="p-6 rounded-xl bg-neutral-950 border border-neutral-900 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-neutral-400">{r.code}</span>
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              </div>
              <h3 className="text-xl font-bold font-['Outfit'] text-white">
                {r.city}
              </h3>
              <p className="text-xs text-neutral-400 font-mono">
                {r.name}
              </p>
              <div className="pt-2 text-xs font-mono text-neutral-500">
                Inquiries: <span className="text-neutral-300">{r.code.toLowerCase()}@noctrafilms.com</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recognition */}
      <div className="space-y-6 pt-8 border-t border-neutral-900">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <Award className="w-4 h-4" />
          <span>Accreditation</span>
        </div>
        <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl">
          Consistently ranked among the world’s top commercial production houses. Cannes Lions Palme d&rsquo;Or recipient, D&amp;AD Most Awarded Production Company, British Arrows Production Company of the Year.
        </p>
      </div>

    </div>
  );
};
