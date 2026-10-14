import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-16 text-neutral-400">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="text-2xl font-extrabold tracking-tighter text-white font-['Outfit'] inline-block"
            >
              KINETIK<span className="text-amber-400">.</span>
            </a>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              An independent social-first creative agency. We partner with ambitious consumer brands to engineer viral short-form content, creator activations, and high-ROAS paid media funnels.
            </p>
            <div className="text-xs text-neutral-500 font-mono">
              Los Angeles Studio · London HQ
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#work" className="hover:text-amber-400 transition-colors">
                  Selected Work &amp; Case Studies
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Capabilities &amp; Production
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-amber-400 transition-colors">
                  14-Day Sprint Methodology
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-amber-400 transition-colors">
                  Verified Client Results
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  Campaign ROI Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Social Channels & Contact */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
              Connect With The Studio
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-400">
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
                TikTok
              </a>
              <span aria-hidden="true">·</span>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
                Instagram
              </a>
              <span aria-hidden="true">·</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
                LinkedIn
              </a>
              <span aria-hidden="true">·</span>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
                YouTube Shorts
              </a>
            </div>

            <div className="pt-3 text-xs text-neutral-500">
              General inquiries: <span className="text-neutral-300">hello@kinetik-agency.com</span>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} KINETIK Creative Agency LLC. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
