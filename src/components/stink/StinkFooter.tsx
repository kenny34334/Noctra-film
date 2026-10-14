import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export const StinkFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="border-t border-neutral-900 bg-black text-neutral-400 py-16 px-6 sm:px-12 font-mono text-xs">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Newsletter Subscription Banner matching Stink exactly */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-900">
          <div className="flex items-center gap-4 text-white text-sm sm:text-base font-normal">
            <Mail className="w-6 h-6 text-white shrink-0" />
            <span>Get more in your inbox</span>
          </div>

          {subscribed ? (
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Subscribed to NOCTRA Monthly</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white w-full sm:w-64"
                required
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-white text-black font-bold hover:bg-neutral-200 transition-colors shrink-0 uppercase tracking-wider"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Bottom Rights & Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-neutral-900 pt-8 text-neutral-500 text-[11px]">
          <div>
            NOCTRA {new Date().getFullYear()}. All rights reserved. NOCTRA is part of the <span className="text-white">NOCTRA Family</span>.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={scrollToTop} className="hover:text-white transition-colors">
              Scroll to top
            </button>
            <a href="https://instagram.com/stinkfilms" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="https://twitter.com/stinkfilms" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="https://linkedin.com/company/stink" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
