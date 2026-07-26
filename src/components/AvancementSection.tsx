import React from 'react';
import { PROGRESS_ITEMS } from '../data/embercData';
import { CheckCircle2, Clock, Sparkles, Image as ImageIcon, Smartphone, Radio, BellRing, ArrowRight } from 'lucide-react';

export const AvancementSection: React.FC = () => {
  const doneItems = PROGRESS_ITEMS.filter((item) => item.status === 'done');
  const upcomingItems = PROGRESS_ITEMS.filter((item) => item.status === 'upcoming');

  return (
    <section id="avancement" className="py-20 md:py-28 bg-[#F5F4F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#2F3B6B]/10 text-[#2F3B6B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>État d'Avancement Concret</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2F3B6B]">
            Où en est le projet aujourd'hui ?
          </h2>
          <p className="text-base text-[#23222B]/80 leading-relaxed">
            Le cœur du système est fonctionnel et déjà opérationnel. Découvrez côte à côte ce qui est déjà prêt à servir les fidèles et ce qui arrivera très prochainement.
          </p>
        </div>

        {/* Side-by-Side Unified View ("Déjà là" Vert vs "Bientôt" Doré) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Déjà Fonctionnel (Vert) - 7 cols */}
          <div className="lg:col-span-7 bg-[#FDFCFA] rounded-3xl p-6 sm:p-8 border border-emerald-600/20 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#2F3B6B]/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#23222B]">
                    Déjà là (Fonctionnel)
                  </h3>
                  <p className="text-xs text-[#23222B]/60">Le socle principal est entièrement développé</p>
                </div>
              </div>
              <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200">
                10 Fonctionnalités Prêtes
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {doneItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#F5F4F1] p-3.5 rounded-xl border border-emerald-600/10 space-y-1 hover:border-emerald-600/30 transition-colors"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#23222B]">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#23222B]/70 leading-normal mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Bientôt (Doré / Orange) - 5 cols */}
          <div className="lg:col-span-5 bg-[#FDFCFA] rounded-3xl p-6 sm:p-8 border border-[#C99A3E]/30 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#2F3B6B]/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#8A641B] flex items-center justify-center font-bold">
                    <Clock className="w-6 h-6 text-[#C99A3E]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#23222B]">
                      Bientôt (En préparation)
                    </h3>
                    <p className="text-xs text-[#23222B]/60">Perspectives d'extension du projet</p>
                  </div>
                </div>
                <span className="text-xs font-bold bg-amber-100 text-amber-800 px-3 py-1 rounded-full border border-amber-200">
                  À Venir
                </span>
              </div>

              <div className="space-y-3">
                {upcomingItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#F5F4F1] p-4 rounded-xl border border-[#C99A3E]/20 space-y-1 hover:border-[#C99A3E]/40 transition-colors"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#C99A3E] mt-1.5 shrink-0" />
                      <div>
                        <h4 className="text-xs font-bold text-[#23222B]">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-[#23222B]/70 leading-normal mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-[#2F3B6B]/5 rounded-2xl border border-[#2F3B6B]/10 text-xs text-[#2F3B6B] font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C99A3E] shrink-0" />
              <span>Un développement continu conduit avec foi, méthode et régularité.</span>
            </div>
          </div>

        </div>

        {/* Screenshot Placeholder Containers Explicitly Named */}
        <div className="bg-[#FDFCFA] rounded-3xl p-6 sm:p-8 border border-[#2F3B6B]/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2F3B6B]/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A641B] uppercase tracking-wider mb-1">
                <ImageIcon className="w-4 h-4" />
                <span>Captures d'Écran Réelles du Système</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2F3B6B]">
                Aperçu visuel des modules déjà développés
              </h3>
            </div>
            <a
              href="#apercu"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F3B6B] hover:text-[#C99A3E] transition-colors"
            >
              <span>Voir la galerie complète</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-[#23222B]/70 leading-relaxed">
            Les visuels ci-dessous illustrent les écrans réels de l'application (consultation des programmes, carnet de chants, gestion des lectures et espace d'administration).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Explicit Placeholder 1 */}
            <div className="group relative rounded-xl bg-[#F5F4F1] border border-[#2F3B6B]/15 overflow-hidden p-3 transition-all hover:shadow-md">
              <div className="aspect-video rounded-lg overflow-hidden bg-[#23222B] relative flex items-center justify-center">
                <img
                  src="capture-programme-culte.png"
                  alt="Capture du programme de culte"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Visual fallback if placeholder image not found yet
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="p-3 text-center text-[#FDFCFA] space-y-1">
                  <span className="text-[10px] font-mono bg-[#2F3B6B] text-[#C99A3E] px-2 py-0.5 rounded border border-[#C99A3E]/30 block">
                    capture-programme-culte.png
                  </span>
                  <p className="text-[11px] font-semibold">Programme de Culte</p>
                </div>
              </div>
              <p className="text-[11px] font-semibold text-[#23222B] mt-2 text-center">
                Programme & Prédicateur
              </p>
            </div>

            {/* Explicit Placeholder 2 */}
            <div className="group relative rounded-xl bg-[#F5F4F1] border border-[#2F3B6B]/15 overflow-hidden p-3 transition-all hover:shadow-md">
              <div className="aspect-video rounded-lg overflow-hidden bg-[#23222B] relative flex items-center justify-center">
                <img
                  src="capture-chants.png"
                  alt="Capture des chants et paroles"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="p-3 text-center text-[#FDFCFA] space-y-1">
                  <span className="text-[10px] font-mono bg-[#2F3B6B] text-[#C99A3E] px-2 py-0.5 rounded border border-[#C99A3E]/30 block">
                    capture-chants.png
                  </span>
                  <p className="text-[11px] font-semibold">Recueil de Chants & Audio</p>
                </div>
              </div>
              <p className="text-[11px] font-semibold text-[#23222B] mt-2 text-center">
                Paroles & Lecteur Audio
              </p>
            </div>

            {/* Explicit Placeholder 3 */}
            <div className="group relative rounded-xl bg-[#F5F4F1] border border-[#2F3B6B]/15 overflow-hidden p-3 transition-all hover:shadow-md">
              <div className="aspect-video rounded-lg overflow-hidden bg-[#23222B] relative flex items-center justify-center">
                <img
                  src="capture-connexion.png"
                  alt="Capture de la connexion"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="p-3 text-center text-[#FDFCFA] space-y-1">
                  <span className="text-[10px] font-mono bg-[#2F3B6B] text-[#C99A3E] px-2 py-0.5 rounded border border-[#C99A3E]/30 block">
                    capture-connexion.png
                  </span>
                  <p className="text-[11px] font-semibold">Connexion Identifiant</p>
                </div>
              </div>
              <p className="text-[11px] font-semibold text-[#23222B] mt-2 text-center">
                Accès Sans Email
              </p>
            </div>

            {/* Explicit Placeholder 4 */}
            <div className="group relative rounded-xl bg-[#F5F4F1] border border-[#2F3B6B]/15 overflow-hidden p-3 transition-all hover:shadow-md">
              <div className="aspect-video rounded-lg overflow-hidden bg-[#23222B] relative flex items-center justify-center">
                <img
                  src="capture-medias.png"
                  alt="Capture des médias"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="p-3 text-center text-[#FDFCFA] space-y-1">
                  <span className="text-[10px] font-mono bg-[#2F3B6B] text-[#C99A3E] px-2 py-0.5 rounded border border-[#C99A3E]/30 block">
                    capture-medias.png
                  </span>
                  <p className="text-[11px] font-semibold">Médiathèque Paroissiale</p>
                </div>
              </div>
              <p className="text-[11px] font-semibold text-[#23222B] mt-2 text-center">
                Photos, Audios & Docs
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
