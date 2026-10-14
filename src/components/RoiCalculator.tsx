import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, ShieldCheck } from 'lucide-react';

interface RoiCalculatorProps {
  onApplyEstimate: (budget: number, objective: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onApplyEstimate }) => {
  const budgetInputId = useId();
  const [monthlyBudget, setMonthlyBudget] = useState<number>(15000);
  const [objective, setObjective] = useState<'dtc' | 'viral' | 'creators'>('dtc');

  // Realistic agency calculation models
  const calculateMetrics = () => {
    let roasMultiplier = 4.2;
    let impressionsPerDollar = 85;
    let baseVideos = Math.max(8, Math.round(monthlyBudget / 850));
    let creators = Math.max(3, Math.round(monthlyBudget / 1200));

    if (objective === 'dtc') {
      roasMultiplier = 4.6;
      impressionsPerDollar = 75;
    } else if (objective === 'viral') {
      roasMultiplier = 3.4;
      impressionsPerDollar = 140;
      baseVideos = Math.round(baseVideos * 1.3);
    } else if (objective === 'creators') {
      roasMultiplier = 4.1;
      impressionsPerDollar = 90;
      creators = Math.round(creators * 1.5);
    }

    const minImpressions = Math.round((monthlyBudget * impressionsPerDollar * 0.85) / 100000) / 10;
    const maxImpressions = Math.round((monthlyBudget * impressionsPerDollar * 1.2) / 100000) / 10;
    const estimatedPipeline = Math.round(monthlyBudget * roasMultiplier);

    return {
      impressions: `${minImpressions.toFixed(1)}M – ${maxImpressions.toFixed(1)}M`,
      videos: `${baseVideos} Vertical Cuts`,
      creators: `${creators} Vetted Creators`,
      pipeline: `$${estimatedPipeline.toLocaleString()}`,
      roas: `${roasMultiplier.toFixed(1)}× Target ROAS`,
    };
  };

  const metrics = calculateMetrics();

  const objectiveLabels: Record<'dtc' | 'viral' | 'creators', string> = {
    dtc: 'DTC E-Commerce Revenue (Direct ROAS)',
    viral: 'Viral Culture & High-Reach Organic',
    creators: 'Creator Whitelisting & Spark Ads',
  };

  return (
    <section className="py-20 border-b border-neutral-800 bg-neutral-950/70" id="calculator">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Campaign Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-['Outfit']">
            Model Your Growth Velocity
          </h2>
          <p className="mt-2 text-neutral-400 text-sm sm:text-base">
            Dial in your monthly production and ad deployment capital to simulate estimated organic reach, creative output, and pipeline impact based on historical performance.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Box (Left 6 cols) */}
          <div className="lg:col-span-6 rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 space-y-8">
            {/* Slider */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor={budgetInputId} className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                  Monthly Campaign Budget
                </label>
                <span className="text-2xl font-extrabold text-amber-400 font-['Outfit'] tabular-nums">
                  ${monthlyBudget.toLocaleString()}<span className="text-sm font-normal text-neutral-400">/mo</span>
                </span>
              </div>

              <input
                id={budgetInputId}
                type="range"
                min={5000}
                max={80000}
                step={2500}
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none"
              />

              <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                <span>$5,000 (Sprint)</span>
                <span>$30,000 (Scale)</span>
                <span>$80,000+ (Enterprise)</span>
              </div>
            </div>

            {/* Campaign Objective Selector (clean segmented buttons) */}
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                Primary Growth Vector
              </span>
              <div className="grid grid-cols-1 gap-2.5">
                {(['dtc', 'viral', 'creators'] as const).map((key) => {
                  const isSelected = objective === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setObjective(key)}
                      className={`flex items-center justify-between p-3.5 rounded-lg border text-left text-xs transition-all ${
                        isSelected
                          ? 'border-amber-400 bg-amber-400/10 text-white font-medium'
                          : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                      }`}
                    >
                      <span className="font-semibold">{objectiveLabels[key]}</span>
                      {isSelected && (
                        <span className="text-[11px] text-amber-400 font-mono">SELECTED</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Trust disclaimer */}
            <div className="flex items-center gap-2 pt-2 text-xs text-neutral-500">
              <ShieldCheck className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>Projections based on weighted 12-month median data from 40+ client accounts.</span>
            </div>
          </div>

          {/* Real-time Projections Output (Right 6 cols) */}
          <div className="lg:col-span-6 rounded-xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  30-Day Campaign Projection
                </span>
                <h3 className="text-lg font-bold text-white font-['Outfit']">
                  Estimated Deliverables &amp; Reach
                </h3>
              </div>
              <span className="text-xs font-mono text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded border border-neutral-800">
                {metrics.roas}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-neutral-950/80 border border-neutral-800/80">
                <div className="text-xs text-neutral-400 uppercase tracking-wider">
                  Projected Impressions
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-white mt-1 tabular-nums font-['Outfit']">
                  {metrics.impressions}
                </div>
                <div className="text-[11px] text-neutral-500 mt-0.5">
                  TikTok, Reels &amp; Shorts
                </div>
              </div>

              <div className="p-4 rounded-lg bg-neutral-950/80 border border-neutral-800/80">
                <div className="text-xs text-neutral-400 uppercase tracking-wider">
                  Est. Pipeline Value
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-amber-400 mt-1 tabular-nums font-['Outfit']">
                  {metrics.pipeline}
                </div>
                <div className="text-[11px] text-neutral-500 mt-0.5">
                  Blended DTC attribution
                </div>
              </div>

              <div className="p-4 rounded-lg bg-neutral-950/80 border border-neutral-800/80">
                <div className="text-xs text-neutral-400 uppercase tracking-wider">
                  Short-Form Content
                </div>
                <div className="text-lg sm:text-xl font-bold text-white mt-1 tabular-nums font-['Outfit']">
                  {metrics.videos}
                </div>
                <div className="text-[11px] text-neutral-500 mt-0.5">
                  4K native vertical master cuts
                </div>
              </div>

              <div className="p-4 rounded-lg bg-neutral-950/80 border border-neutral-800/80">
                <div className="text-xs text-neutral-400 uppercase tracking-wider">
                  Creator Network
                </div>
                <div className="text-lg sm:text-xl font-bold text-white mt-1 tabular-nums font-['Outfit']">
                  {metrics.creators}
                </div>
                <div className="text-[11px] text-neutral-500 mt-0.5">
                  Contracted &amp; whitelisted
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onApplyEstimate(monthlyBudget, objectiveLabels[objective])}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 rounded-md hover:bg-amber-300 active:scale-[0.99] transition-all shadow-sm"
              >
                <span>Lock In This Forecast &amp; Request Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
