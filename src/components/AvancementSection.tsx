import React from 'react';
import { PROGRESS_ITEMS } from '../data/embercData';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

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

      </div>
    </section>
  );
};