import React from 'react';
import { ArrowDown, Sparkles, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F5F4F1] via-[#FDFCFA] to-[#F5F4F1]">
      {/* Decorative background ambiance circles */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#2F3B6B]/5 via-[#C99A3E]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FDFCFA] border border-[#2F3B6B]/15 px-4 py-1.5 rounded-full shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#C99A3E] animate-pulse" />
            <span className="text-xs font-semibold text-[#2F3B6B] tracking-wide uppercase">
              Plateforme Numérique Paroissiale
            </span>
            <span className="text-xs text-[#23222B]/40">•</span>
            <span className="text-xs font-medium text-[#23222B]/70">EMBERC</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2F3B6B] leading-[1.15]">
            La vie de l'église, <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#C99A3E] relative inline-block">
              réunie en un seul endroit
              <span className="absolute bottom-1 left-0 w-full h-[2px] bg-[#C99A3E]/30 rounded-full" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#23222B]/80 font-normal leading-relaxed max-w-2xl mx-auto">
            Une plateforme numérique centralisée et chaleureuse qui permet à toutes les paroisses de l'<strong>EMBERC</strong> de publier et aux fidèles de consulter facilement les programmes de cultes, le recueil de chants avec audio, les lectures bibliques et les annonces de la communauté.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projet"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#2F3B6B] hover:bg-[#23222B] text-[#FDFCFA] font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg group"
            >
              <span>Découvrir le projet</span>
              <ArrowDown className="w-4 h-4 text-[#C99A3E] group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#apercu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FDFCFA] hover:bg-[#F5F4F1] text-[#2F3B6B] font-semibold text-sm px-6 py-3.5 rounded-xl border border-[#2F3B6B]/20 transition-all shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-[#C99A3E]" />
              <span>Voir les écrans réalisés</span>
            </a>
          </div>

          {/* Key Value Pill Highlights */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#23222B]/75">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              100% Autonome par paroisse
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Connexion simple sans email
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Chants & audio partagés
            </span>
          </div>
        </div>

        {/* Hero Interactive Device Showcase Frame */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-[#23222B] p-2.5 sm:p-4 shadow-2xl border border-[#23222B]/20 ring-1 ring-black/5">
            {/* Laptop Header Bar */}
            <div className="flex items-center justify-between pb-3 px-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[11px] font-mono text-[#FDFCFA]/60 hidden sm:inline-block">
                  https://emberc.eglise.app
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#FDFCFA]/70 text-xs font-medium">
                <span className="hidden sm:inline-block text-[11px] bg-[#2F3B6B]/80 text-[#FDFCFA] px-2.5 py-0.5 rounded-full border border-[#C99A3E]/30">
                  Aperçu de la plateforme
                </span>
              </div>
            </div>

            {/* Screen Content Wrapper with Placeholder Fallback & Interactive Switch */}
            <div className="relative rounded-xl bg-[#F5F4F1] overflow-hidden border border-[#2F3B6B]/10">
              {/* Optional Real Screenshot Image Placeholder */}
              <div className="hidden">
                <img
                  src="hero-illustration.png"
                  alt="Aperçu de la plateforme EMBERC"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Interface Simulation */}
              <div className="p-4 sm:p-6 text-left">
                {/* Content Card Preview */}
                <div className="space-y-3">
                  <div className="bg-[#FDFCFA] rounded-xl p-4 sm:p-5 border border-[#2F3B6B]/10 shadow-sm">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-[#8A641B]">
                        DIMANCHE 26 JUILLET À 07:30
                      </span>
                      <span className="text-xs bg-[#2F3B6B]/10 text-[#2F3B6B] font-semibold px-2.5 py-0.5 rounded-full">
                        Messe du dimanche
                      </span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#23222B] mb-1">
                      Culte d'Action de Grâce & Louange
                    </h3>
                    <p className="text-xs text-[#23222B]/70 mb-4">
                      Officiant : Pasteur Jean Jaques • Prédicateur : Diacre Juste
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#2F3B6B]/10">
                      <div className="bg-[#F5F4F1] p-2.5 rounded-lg text-xs flex items-center justify-between">
                        <span className="font-medium text-[#23222B]">1. Cantique d'ouverture</span>
                        <span className="font-bold text-[#2F3B6B]">N° TEST-01</span>
                      </div>
                      <div className="bg-[#F5F4F1] p-2.5 rounded-lg text-xs flex items-center justify-between">
                        <span className="font-medium text-[#23222B]">2. Lecture Biblique</span>
                        <span className="font-bold text-[#C99A3E]">Psaume 23 (Français / Ewe)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
