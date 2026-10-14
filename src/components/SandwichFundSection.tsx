import React from 'react';
import { SANDWICH_FUND } from '../data/sandwichData';
import { Coins, ArrowRight } from 'lucide-react';

interface SandwichFundSectionProps {
  onApplyForFund: () => void;
}

export const SandwichFundSection: React.FC<SandwichFundSectionProps> = ({ onApplyForFund }) => {
  return (
    <section className="py-24 bg-white border-t border-neutral-100" id="fund">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-900 p-8 sm:p-12 lg:p-16 text-white shadow-xl">
          
          {/* Top Spectrum Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 sandwich-spectrum-bar" />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#F6BE00] font-semibold">
              <Coins className="w-3.5 h-3.5" />
              <span>THE SANDWICH EQUITY FUND</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-['Outfit']">
              {SANDWICH_FUND.subhead}
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              {SANDWICH_FUND.body}
            </p>

            <div className="pt-2 text-xs font-mono text-neutral-400">
              {SANDWICH_FUND.stats}
            </div>

            <div className="pt-4">
              <button
                onClick={onApplyForFund}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-neutral-950 bg-white rounded-lg hover:bg-neutral-100 transition-all shadow-md active:scale-98"
              >
                <span>Pitch Us For The Fund</span>
                <ArrowRight className="w-4 h-4 text-[#FF6900]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
