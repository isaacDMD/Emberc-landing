import React, { useState, useEffect } from 'react';
import { Menu, X, Church, Sparkles, ChevronRight } from 'lucide-react';
import { PROJECT_INFO } from '../data/embercData';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#projet', label: 'Le projet' },
    { href: '#solution', label: 'La solution' },
    { href: '#roles', label: 'Comment ça marche' },
    { href: '#avancement', label: 'Avancement' },
    { href: '#apercu', label: 'Aperçu' },
    { href: '#conviction', label: 'Notre vision' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F4F1]/90 backdrop-blur-md border-b border-[#2F3B6B]/10 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Project Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#2F3B6B] flex items-center justify-center text-[#FDFCFA] shadow-sm group-hover:bg-[#23222B] transition-colors">
              <Church className="w-5 h-5 text-[#C99A3E]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#2F3B6B]">
                  {PROJECT_INFO.name}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest bg-[#C99A3E]/15 text-[#8A641B] px-2 py-0.5 rounded-full border border-[#C99A3E]/30 hidden sm:inline-block">
                  Plateforme
                </span>
              </div>
              <p className="text-xs text-[#23222B]/70 font-medium hidden md:block line-clamp-1">
                Église Mission Baptiste Évangélique Royaume du Christ
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#FDFCFA]/80 px-4 py-1.5 rounded-full border border-[#2F3B6B]/10 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-[#23222B]/80 hover:text-[#2F3B6B] hover:bg-[#2F3B6B]/5 px-3.5 py-1.5 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#apercu"
              className="inline-flex items-center gap-2 text-xs font-semibold bg-[#2F3B6B] hover:bg-[#23222B] text-[#FDFCFA] px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C99A3E]" />
              <span>Voir les écrans</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#23222B] hover:bg-[#2F3B6B]/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFCFA] border-b border-[#2F3B6B]/10 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            <p className="text-[11px] uppercase tracking-wider font-bold text-[#8A641B] px-3 pt-1">
              Navigation
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#23222B] hover:text-[#2F3B6B] hover:bg-[#F5F4F1] px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#23222B]/40" />
              </a>
            ))}
            <div className="pt-3 border-t border-[#2F3B6B]/10">
              <a
                href="#apercu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[#2F3B6B] text-[#FDFCFA] px-4 py-3 rounded-xl shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#C99A3E]" />
                <span>Découvrir la plateforme</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
