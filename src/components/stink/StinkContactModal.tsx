import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface StinkContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentRegion: string;
}

export const StinkContactModal: React.FC<StinkContactModalProps> = ({
  isOpen,
  onClose,
  currentRegion,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [client, setClient] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
    if (!name.trim() || !email.trim()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl border border-neutral-800 bg-neutral-950 p-6 sm:p-10 shadow-2xl z-10 text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-900 pb-5">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            CONTACT / {currentRegion}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6">
          {submitted ? (
            <div className="text-center space-y-4 py-8 animate-in fade-in">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-black">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black font-['Outfit']">
                Inquiry Transmitted
              </h3>
              <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed font-mono">
                Thank you, {name}. Our London &amp; global executive producers will review your brief and respond shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 text-xs font-mono uppercase bg-white text-black font-bold rounded-lg hover:bg-neutral-200"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black font-['Outfit'] tracking-tight">
                  Start a Production Dialogue
                </h2>
                <p className="text-xs font-mono text-neutral-500 mt-1">
                  Connect with our directorial roster and executive producers.
                </p>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div>
                  <label className="text-neutral-400 uppercase tracking-wider block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="text-neutral-400 uppercase tracking-wider block mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@agency.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="text-neutral-400 uppercase tracking-wider block mb-1">
                    Brand / Agency / Label
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Nike / Wieden+Kennedy"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="text-neutral-400 uppercase tracking-wider block mb-1">
                    Project Synopsis / Timeline
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share brief notes on script, format, or director interest..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-mono font-bold uppercase tracking-wider bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors"
              >
                <span>{submitting ? 'Transmitting...' : 'Send Inquiry To NOCTRA Producers'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
