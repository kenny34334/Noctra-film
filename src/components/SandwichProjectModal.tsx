import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { SandwichLoaf } from './SandwichLoaf';

interface SandwichProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

export const SandwichProjectModal: React.FC<SandwichProjectModalProps> = ({
  isOpen,
  onClose,
  initialType,
}) => {
  const [videoType, setVideoType] = useState('Product Launch Film');
  const [productName, setProductName] = useState('');
  const [productUrl, setProductUrl] = useState('');
  const [oneLiner, setOneLiner] = useState('');
  const [budget, setBudget] = useState('$50,000 – $100,000');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialType) setVideoType(initialType);
  }, [initialType]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName.trim() || !name.trim() || !email.trim()) {
      setError('Please provide your product name, your name, and work email.');
      return;
    }
    setError('');
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl border border-neutral-200 bg-white shadow-2xl z-10 text-neutral-900 p-6 sm:p-10">
        
        {/* Spectrum Top Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 sandwich-spectrum-bar rounded-t-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-100 pb-5">
          <div className="flex items-center gap-2">
            <SandwichLoaf size={22} className="text-[#FF6900]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-900">
              MAKE A SANDWICH
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6">
          {submitted ? (
            <div className="text-center space-y-4 py-8 animate-in fade-in">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-[#97D700]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-['Outfit']">
                We got your note!
              </h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed font-normal">
                Thanks, <span className="text-neutral-900 font-bold">{name}</span>. We are already looking up <span className="text-[#FF6900] font-semibold">{productName}</span>. A real human from the Sandwich directing team will reply to <span className="text-neutral-900 font-semibold">{email}</span> within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-all"
                >
                  Back to films
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-['Outfit'] text-neutral-900">
                  Let&rsquo;s make a video together.
                </h2>
                <p className="text-xs text-neutral-500 mt-1">
                  Tell us what you are building. No corporate jargon required.
                </p>
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                  {error}
                </div>
              )}

              {/* Video Format Tabs */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block mb-2">
                  What format are you envisioning?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    'Product Launch Film',
                    'Commercial / TV Spot',
                    'Social & TikTok Series',
                    'Explainer & Demo',
                    'Sandwich Fund Equity',
                  ].map((type) => {
                    const active = videoType === type;
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setVideoType(type)}
                        className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                          active
                            ? 'border-neutral-900 bg-neutral-900 text-white font-bold'
                            : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-300 hover:text-black'
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Product Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold">
                    Product / Company Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Labs"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="mt-1 w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold">
                    Website or Prototype URL
                  </label>
                  <input
                    type="text"
                    placeholder="https://yourproduct.com"
                    value={productUrl}
                    onChange={(e) => setProductUrl(e.target.value)}
                    className="mt-1 w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              {/* One liner */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold">
                  What does your product do in one honest sentence?
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. It helps teams communicate without sending 40 emails."
                  value={oneLiner}
                  onChange={(e) => setOneLiner(e.target.value)}
                  className="mt-1 w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none"
                />
              </div>

              {/* Budget & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold">
                    Budget Ballpark
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="mt-1 w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none"
                  >
                    <option value="$25,000 – $50,000">$25k – $50k</option>
                    <option value="$50,000 – $100,000">$50k – $100k</option>
                    <option value="$100,000+">$100k+ (Full Launch)</option>
                    <option value="Sandwich Fund Equity">Equity Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="First & Last"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-mono font-bold uppercase tracking-wider bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-all shadow-md"
              >
                <span>{submitting ? 'Sending to Sandwich...' : 'Send To Sandwich Directing Team'}</span>
                <ArrowRight className="w-4 h-4 text-[#F6BE00]" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
