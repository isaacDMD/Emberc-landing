import React from 'react';
import { AlertCircle, CheckCircle, FileText, Volume2, Users, HeartHandshake, Sparkles } from 'lucide-react';

export const ConstatSection: React.FC = () => {
  return (
    <section id="projet" className="py-20 md:py-28 bg-[#FDFCFA] border-y border-[#2F3B6B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#2F3B6B]/10 text-[#2F3B6B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Le Constat du Terrain</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2F3B6B]">
            Pourquoi ce projet était devenu nécessaire
          </h2>
          <p className="text-base text-[#23222B]/80 leading-relaxed">
            Au sein de l'<strong>EMBERC</strong>, la vie spirituelle est riche et vibrante. Mais la gestion quotidienne des informations reposait jusqu'ici sur des habitudes orales et des papiers éphémères.
          </p>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#F5F4F1] p-6 sm:p-8 rounded-2xl border border-[#2F3B6B]/10 space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#8A641B] flex items-center justify-center font-bold">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#23222B]">
              Transmissions orales & oublis
            </h3>
            <p className="text-sm text-[#23222B]/75 leading-relaxed">
              Les annonces et les ordres du culte se transmettent souvent de bouche à oreille. Les fidèles absents un dimanche ou les nouveaux venus peinent à récupérer l'information à temps.
            </p>
          </div>

          <div className="bg-[#F5F4F1] p-6 sm:p-8 rounded-2xl border border-[#2F3B6B]/10 space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#8A641B] flex items-center justify-center font-bold">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#23222B]">
              Feuilles papier égarées
            </h3>
            <p className="text-sm text-[#23222B]/75 leading-relaxed">
              Les programmes imprimés et les plannings de lecture se déchirent ou se perdent rapidement. La circulation des textes d'une paroisse à l'autre manquait de continuité.
            </p>
          </div>

          <div className="bg-[#F5F4F1] p-6 sm:p-8 rounded-2xl border border-[#2F3B6B]/10 space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#8A641B] flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#23222B]">
              Préparation au culte difficile
            </h3>
            <p className="text-sm text-[#23222B]/75 leading-relaxed">
              Sans accès préalable aux numéros de chants ou aux passages bibliques prévus, les fidèles et les intervenants ne pouvaient pas se préparer sereinement durant la semaine.
            </p>
          </div>
        </div>

        {/* Side-by-Side Reality Comparison Box */}
        <div className="bg-gradient-to-br from-[#2F3B6B] to-[#23222B] text-[#FDFCFA] rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C99A3E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C99A3E] text-[#23222B] flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold">L'Engagement de la Plateforme EMBERC</h3>
                <p className="text-xs text-[#FDFCFA]/70">Une solution moderne, fraternelle et respectueuse de nos traditions</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t border-[#FDFCFA]/15">
              {/* Left Column: Before */}
              <div className="bg-[#FDFCFA]/5 p-6 rounded-2xl border border-[#FDFCFA]/10 space-y-4">
                <div className="flex items-center gap-2 text-rose-300 font-semibold text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>Sans plateforme centralisée</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-[#FDFCFA]/80">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>Annonces importantes oubliées par manque d'accès</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>Mélodies des chants inconnues avant le début du culte</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>Isolement des fidèles empêchés de se déplacer</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>Dispersion des archives de la paroisse</span>
                  </li>
                </ul>
              </div>

              {/* Right Column: With EMBERC */}
              <div className="bg-[#C99A3E]/15 p-6 rounded-2xl border border-[#C99A3E]/30 space-y-4">
                <div className="flex items-center gap-2 text-[#C99A3E] font-semibold text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Avec la plateforme EMBERC</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-[#FDFCFA]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Accès en un clic aux programmes et annonces 24h/24</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Chants avec paroles intégrales & écoute de l'audio</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Lien vivant maintenu entre toutes les paroisses de l'EMBERC</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Autonomie complète garantie pour chaque paroisse</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
