import React from 'react';
import { FEATURE_MODULES } from '../data/embercData';
import { 
  Calendar, Music, BookOpen, Bell, Sparkles, FileAudio, 
  Newspaper, Bookmark, Layers, ShieldCheck 
} from 'lucide-react';

export const SolutionSection: React.FC = () => {
  // Helper icon renderer matching lucide names
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Calendar': return <Calendar className="w-6 h-6 text-[#C99A3E]" />;
      case 'Music': return <Music className="w-6 h-6 text-[#C99A3E]" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-[#C99A3E]" />;
      case 'Bell': return <Bell className="w-6 h-6 text-[#C99A3E]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#C99A3E]" />;
      case 'FolderAudio': return <FileAudio className="w-6 h-6 text-[#C99A3E]" />;
      case 'Newspaper': return <Newspaper className="w-6 h-6 text-[#C99A3E]" />;
      case 'Bookmark': return <Bookmark className="w-6 h-6 text-[#C99A3E]" />;
      default: return <Sparkles className="w-6 h-6 text-[#C99A3E]" />;
    }
  };

  return (
    <section id="solution" className="py-20 md:py-28 bg-[#F5F4F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#C99A3E]/15 text-[#8A641B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#C99A3E]/30">
            <Layers className="w-3.5 h-3.5" />
            <span>La Solution Numérique</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2F3B6B]">
            Une plateforme complète pensée pour l'église
          </h2>
          <p className="text-base text-[#23222B]/80 leading-relaxed">
            Chaque module a été conçu spécifiquement pour répondre aux besoins réels des cultes, des groupes de service et des fidèles de l'<strong>EMBERC</strong>.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURE_MODULES.map((module) => (
            <div
              key={module.id}
              className="bg-[#FDFCFA] p-6 rounded-2xl border border-[#2F3B6B]/10 hover:border-[#C99A3E]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#2F3B6B]/5 group-hover:bg-[#2F3B6B] flex items-center justify-center transition-colors">
                    {renderIcon(module.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F5F4F1] text-[#23222B]/60 px-2.5 py-1 rounded-full border border-[#2F3B6B]/5">
                    {module.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-[#23222B] group-hover:text-[#2F3B6B] transition-colors mb-1">
                    {module.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#8A641B] mb-2">
                    {module.subtitle}
                  </p>
                  <p className="text-xs text-[#23222B]/70 leading-relaxed">
                    {module.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner about Shared Resources vs Parish Autonomy */}
        <div className="mt-12 bg-[#FDFCFA] border border-[#2F3B6B]/15 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2F3B6B] text-[#FDFCFA] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#C99A3E]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg text-[#2F3B6B]">
                Souveraineté des paroisses & Ressources partagées
              </h4>
              <p className="text-xs sm:text-sm text-[#23222B]/75 leading-relaxed mt-1">
                Chaque paroisse administre librement son propre contenu (programmes, annonces, événements), tandis que le recueil des chants et le cantique sont partagés pour l'unité de toute la communauté EMBERC.
              </p>
            </div>
          </div>
          <a
            href="#roles"
            className="shrink-0 text-xs font-bold bg-[#2F3B6B] hover:bg-[#23222B] text-[#FDFCFA] px-5 py-3 rounded-xl transition-colors"
          >
            Découvrir les rôles
          </a>
        </div>

      </div>
    </section>
  );
};
