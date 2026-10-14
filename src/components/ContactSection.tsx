import React, { useState, useEffect } from 'react';
import { Mail, MapPin, CheckCircle, ArrowRight, Clock } from 'lucide-react';

interface ContactSectionProps {
  initialBudget?: number;
  initialObjective?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialBudget,
  initialObjective,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brandUrl, setBrandUrl] = useState('');
  const [budgetTier, setBudgetTier] = useState('$10,000 – $25,000 / mo');
  const [objective, setObjective] = useState('DTC E-Commerce Scale (ROAS Focus)');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialBudget) {
      if (initialBudget <= 10000) setBudgetTier('$5,000 – $10,000 / mo');
      else if (initialBudget <= 25000) setBudgetTier('$10,000 – $25,000 / mo');
      else if (initialBudget <= 50000) setBudgetTier('$25,000 – $50,000 / mo');
      else setBudgetTier('$50,000+ / mo');
    }
    if (initialObjective) {
      setObjective(initialObjective);
    }
  }, [initialBudget, initialObjective]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please provide your name or brand rep name.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid business email address.';
    }
    if (!brandUrl.trim()) errs.brandUrl = 'Please provide your website or primary social handle.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="py-20 border-b border-neutral-800 bg-neutral-900/40" id="contact">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Agency Intel */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                Discovery &amp; Partnerships
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-['Outfit']">
                Let&rsquo;s Build Your Next Viral Engine
              </h2>
              <p className="mt-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
                We accept a limited cohort of 4 brand partners each quarter to maintain strict in-house creative quality and rapid sprint turnarounds.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">24-Hour Creative Audit Guarantee</div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Our strategy team reviews your current feed and returns a 3-point competitor breakdown within one business day.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Direct Executive Inbox</div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    partners@kinetik-agency.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Physical In-House Studios</div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Los Angeles (Arts District) · London (Shoreditch)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7 rounded-xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-['Outfit']">
                    Discovery Brief Received
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-white">{name}</span>. Our strategy directors are already reviewing <span className="text-amber-400">{brandUrl}</span>. Expect your audit and discovery calendar link via <span className="text-white">{email}</span> within 24 hours.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 text-left text-xs space-y-1.5 max-w-md mx-auto text-neutral-400 font-mono">
                  <div><span className="text-neutral-500">Tier:</span> {budgetTier}</div>
                  <div><span className="text-neutral-500">Growth Focus:</span> {objective}</div>
                  <div><span className="text-neutral-500">Status:</span> In Review (Priority Queue)</div>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setBrandUrl('');
                    setMessage('');
                  }}
                  className="mt-4 px-5 py-2 text-xs font-semibold text-neutral-400 hover:text-white border border-neutral-800 rounded-md hover:bg-neutral-800 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-neutral-800 pb-4">
                  <h3 className="text-lg font-bold text-white font-['Outfit']">
                    Request 14-Day Growth Discovery
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    No spam. Confidential review by senior partners only.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                      Your Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full rounded-md border bg-neutral-950 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-neutral-800 focus:border-amber-400 focus:ring-amber-400'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-400">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                      Work Email <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="alex@yourbrand.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full rounded-md border bg-neutral-950 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-neutral-800 focus:border-amber-400 focus:ring-amber-400'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                  </div>
                </div>

                {/* Brand Website / Social Handle */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                    Brand URL or Social Handle <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="https://yourbrand.com or @yourbrand"
                    value={brandUrl}
                    onChange={(e) => setBrandUrl(e.target.value)}
                    className={`w-full rounded-md border bg-neutral-950 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
                      errors.brandUrl
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-neutral-800 focus:border-amber-400 focus:ring-amber-400'
                    }`}
                  />
                  {errors.brandUrl && <p className="text-[11px] text-red-400">{errors.brandUrl}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Budget */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                      Monthly Campaign Budget
                    </label>
                    <select
                      value={budgetTier}
                      onChange={(e) => setBudgetTier(e.target.value)}
                      className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    >
                      <option value="$5,000 – $10,000 / mo">$5,000 – $10,000 / mo</option>
                      <option value="$10,000 – $25,000 / mo">$10,000 – $25,000 / mo</option>
                      <option value="$25,000 – $50,000 / mo">$25,000 – $50,000 / mo</option>
                      <option value="$50,000+ / mo">$50,000+ / mo (Enterprise)</option>
                    </select>
                  </div>

                  {/* Primary Objective */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                      Primary Objective
                    </label>
                    <select
                      value={objective}
                      onChange={(e) => setObjective(e.target.value)}
                      className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    >
                      <option value="DTC E-Commerce Scale (ROAS Focus)">DTC E-Commerce Scale (ROAS Focus)</option>
                      <option value="Viral Awareness & Culture Seeding">Viral Awareness &amp; Culture Seeding</option>
                      <option value="Creator Whitelisting & Spark Ads">Creator Whitelisting &amp; Spark Ads</option>
                      <option value="Complete Social Rebrand">Complete Social Rebrand</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                    Current Challenges or Goals (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what is currently working or where you are seeing creative fatigue..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 rounded-md hover:bg-amber-300 active:scale-[0.99] transition-all disabled:opacity-50 shadow-sm"
                >
                  {isSubmitting ? (
                    <span>Submitting Brief...</span>
                  ) : (
                    <>
                      <span>Schedule 20-Min Discovery Strategy Call</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
