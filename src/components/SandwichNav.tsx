import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { SandwichLoaf } from './SandwichLoaf';

interface SandwichNavProps {
  onOpenMakeVideo: () => void;
}

export const SandwichNav: React.FC<SandwichNavProps> = ({ onOpenMakeVideo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Clients', href: '#clients' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'The Fund', href: '#fund' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      {/* Signature Sandwich Spectrum Rainbow Strip */}
      <div className="w-full h-1 sandwich-spectrum-bar sticky top-0 z-50" />

      <header className="sticky top-1 z-40 w-full border-b border-neutral-100 bg-white/95 backdrop-blur-md transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
          
          {/* Brand Wordmark & Loaf Icon */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-neutral-900 group whitespace-nowrap shrink-0"
          >
            <SandwichLoaf size={28} className="text-neutral-900 group-hover:text-[#FF6900] transition-colors" />
            <span className="text-2xl font-black tracking-tight font-['Outfit']">
              SANDWICH
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-black transition-colors whitespace-nowrap shrink-0 relative py-1 hover:underline hover:decoration-[#FF6900] hover:decoration-2 hover:underline-offset-8"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenMakeVideo}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 active:scale-98 transition-all whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>Make A Video</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F6BE00]" />
            </button>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-neutral-700 hover:text-black hover:bg-neutral-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-200 bg-white px-6 py-5 space-y-4 shadow-lg">
            <nav className="flex flex-col space-y-3 font-semibold text-neutral-800">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-base hover:text-[#FF6900] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-neutral-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMakeVideo();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 rounded-lg"
              >
                <span>Make A Video</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F6BE00]" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
