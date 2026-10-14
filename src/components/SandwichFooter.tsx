import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SandwichLoaf } from './SandwichLoaf';

export const SandwichFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-100 bg-white py-16 text-neutral-600" id="about">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-100">
          
          {/* Brand Note */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5 text-neutral-900">
              <SandwichLoaf size={28} className="text-neutral-900" />
              <span className="text-2xl font-black tracking-tight font-['Outfit']">
                SANDWICH
              </span>
            </div>
            <p className="text-base text-neutral-600 max-w-md leading-relaxed font-normal">
              Sandwich is a Los Angeles video production company that makes launch and explainer films for technology companies and consumer brands. Since 2009.
            </p>
            <div className="text-xs font-mono text-neutral-400">
              Sandwich Video, Inc. · 323-776-9351 · Los Angeles, California
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 text-xs font-semibold">
            <div className="text-neutral-900 font-bold uppercase tracking-wider mb-2 font-mono">
              Explore
            </div>
            <div>
              <a href="#work" className="hover:text-black transition-colors hover:underline hover:decoration-[#FF6900]">
                Featured Work
              </a>
            </div>
            <div>
              <a href="#clients" className="hover:text-black transition-colors hover:underline hover:decoration-[#FF6900]">
                Client Roster
              </a>
            </div>
            <div>
              <a href="#how-it-works" className="hover:text-black transition-colors hover:underline hover:decoration-[#FF6900]">
                How It Works
              </a>
            </div>
            <div>
              <a href="#fund" className="hover:text-black transition-colors hover:underline hover:decoration-[#FF6900]">
                The Sandwich Fund
              </a>
            </div>
          </div>

          {/* Channels */}
          <div className="md:col-span-3 space-y-2 text-xs font-semibold">
            <div className="text-neutral-900 font-bold uppercase tracking-wider mb-2 font-mono">
              Channels
            </div>
            <div>
              <a href="https://vimeo.com/sandwichvideo" target="_blank" rel="noreferrer" className="hover:text-black transition-colors hover:underline hover:decoration-[#00A3E0]">
                Vimeo
              </a>
            </div>
            <div>
              <a href="https://youtube.com/@sandwichvideo" target="_blank" rel="noreferrer" className="hover:text-black transition-colors hover:underline hover:decoration-[#E4002B]">
                YouTube
              </a>
            </div>
            <div>
              <a href="https://twitter.com/sandwichvideo" target="_blank" rel="noreferrer" className="hover:text-black transition-colors hover:underline hover:decoration-[#00AB84]">
                X (Twitter)
              </a>
            </div>
            <div>
              <a href="https://instagram.com/sandwichvideo" target="_blank" rel="noreferrer" className="hover:text-black transition-colors hover:underline hover:decoration-[#C724B1]">
                Instagram
              </a>
            </div>
            <div className="pt-2 text-neutral-500 font-mono text-[11px]">
              Direct hello: <span className="text-neutral-900 font-semibold">hello@sandwich.co</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Sandwich Video, Inc. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-black transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
