import React, { useState } from 'react';
import { PROJECT_INFO } from '../data/embercData';
import { Heart, BookOpen, Sparkles, UserCheck, Quote, Edit3 } from 'lucide-react';
import { RotatingScriptureQuote } from './RotatingScriptureQuote';

export const ConvictionSection: React.FC = () => {
  const [authorName, setAuthorName] = useState(PROJECT_INFO.leadAuthor);
  const [isEditingName, setIsEditingName] = useState(false);

  return (
    <section id="conviction" className="py-20 md:py-28 bg-[#F5F4F1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Frame */}
        <div className="bg-[#FDFCFA] rounded-3xl p-8 sm:p-12 border border-[#2F3B6B]/15 shadow-lg relative overflow-hidden space-y-8">
          {/* Subtle Decorative Accent */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C99A3E]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2F3B6B]">
              Une vision fraternelle au service du Royaume
            </h2>
          </div>

          {/* Conviction Message Text */}
          <div className="space-y-4 text-sm sm:text-base text-[#23222B]/85 leading-relaxed text-justify sm:text-left max-w-3xl mx-auto">
            <p>
              Ce projet part d'une volonté profonde de <strong>moderniser la vie de l'église sans jamais la dénaturer</strong> : faciliter l'accès à l'information pour tous, réduire durablement la dépendance au papier, aider les fidèles et les groupes de louange à se préparer spirituellement avant de venir au culte, et renforcer la communion fraternelle entre toutes les paroisses de l'<strong>EMBERC</strong>.
            </p>
            <p>
              C'est une démarche entreprise avec <strong>foi, patience et rigueur</strong>. La plateforme n'a pas été conçue pour imposer une contrainte, mais pour offrir un outil simple, utile et durable, pensé pour grandir sereinement au rythme des besoins réels du terrain.
            </p>
          </div>

          {/* Scripture Quote Box */}
          <RotatingScriptureQuote />

          {/* Developer Credit & Interactive Signature Placeholder */}
          <div className="pt-6 border-t border-[#2F3B6B]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#2F3B6B] text-[#FDFCFA] flex items-center justify-center font-bold">
                <UserCheck className="w-6 h-6 text-[#C99A3E]" />
              </div>
              <div>
                <p className="text-xs text-[#23222B]/60 font-medium">Projet conduit par un développeur indépendant :</p>
                <div className="flex items-center gap-2 mt-0.5">
                  {isEditingName ? (
                    <input
                      type="text"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      onBlur={() => setIsEditingName(false)}
                      autoFocus
                      className="font-serif font-bold text-lg text-[#2F3B6B] bg-[#F5F4F1] border border-[#C99A3E] px-2 py-0.5 rounded text-sm focus:outline-none"
                    />
                  ) : (
                    <span className="font-serif font-bold text-lg text-[#2F3B6B]">
                      {authorName}
                    </span>
                  )}
                  <button
                    onClick={() => setIsEditingName(!isEditingName)}
                    className="p-1 text-[#23222B]/40 hover:text-[#2F3B6B] transition-colors"
                    title="Modifier votre nom"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
