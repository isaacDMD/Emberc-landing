import React from 'react';
import { Church, ArrowUp, Heart } from 'lucide-react';
import { PROJECT_INFO } from '../data/embercData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#23222B] text-[#FDFCFA] pt-16 pb-12 border-t border-[#C99A3E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#FDFCFA]/10">
          
          {/* Left Brand Identity */}
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2F3B6B] flex items-center justify-center text-[#FDFCFA] border border-[#C99A3E]/40">
                <Church className="w-5 h-5 text-[#C99A3E]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FDFCFA]">
                {PROJECT_INFO.name}
              </span>
            </div>
            <p className="text-xs text-[#FDFCFA]/75 leading-relaxed font-normal">
              {PROJECT_INFO.fullName} — Plateforme Numérique Paroissiale Centralisée.
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-[#FDFCFA]/80">
            <a href="#projet" className="hover:text-[#C99A3E] transition-colors">Le projet</a>
            <a href="#solution" className="hover:text-[#C99A3E] transition-colors">La solution</a>
            <a href="#roles" className="hover:text-[#C99A3E] transition-colors">Les rôles</a>
            <a href="#avancement" className="hover:text-[#C99A3E] transition-colors">Avancement</a>
            <a href="#apercu" className="hover:text-[#C99A3E] transition-colors">Aperçu en images</a>
            <a href="#conviction" className="hover:text-[#C99A3E] transition-colors">Notre vision</a>
          </div>

          {/* Right Scroll Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 bg-[#2F3B6B] hover:bg-[#C99A3E] hover:text-[#23222B] text-[#FDFCFA] text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm group"
          >
            <span>Retour en haut</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FDFCFA]/60">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>Porté avec foi et rigueur par</span>
            <span className="text-[#C99A3E] font-semibold">{PROJECT_INFO.leadAuthor}</span>
          </p>

          <p className="text-[11px] text-[#FDFCFA]/40 text-center sm:text-right">
            © {new Date().getFullYear()} EMBERC. Projet statique libre de déploiement sur Vercel, Netlify ou GitHub Pages.
          </p>
        </div>

      </div>
    </footer>
  );
};
