import React from 'react';
import { USER_ROLES } from '../data/embercData';
import { User, Music2, BookMarked, Church, ShieldCheck, KeyRound, Check, Smartphone, Lock } from 'lucide-react';

export const RolesSection: React.FC = () => {
  const getRoleIcon = (iconName: string) => {
    switch (iconName) {
      case 'User': return <User className="w-5 h-5 text-[#C99A3E]" />;
      case 'Music2': return <Music2 className="w-5 h-5 text-[#C99A3E]" />;
      case 'BookMarked': return <BookMarked className="w-5 h-5 text-[#C99A3E]" />;
      case 'Church': return <Church className="w-5 h-5 text-[#C99A3E]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#C99A3E]" />;
      default: return <User className="w-5 h-5 text-[#C99A3E]" />;
    }
  };

  return (
    <section id="roles" className="py-20 md:py-28 bg-[#FDFCFA] border-y border-[#2F3B6B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#2F3B6B]/10 text-[#2F3B6B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Organisation Simple & Accessibilité</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2F3B6B]">
            Des rôles clairs adaptés à chacun
          </h2>
          <p className="text-base text-[#23222B]/80 leading-relaxed">
            Chaque membre et chaque responsable dispose d'un espace adapté à sa mission dans l'église, sans aucune complexité technique.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {USER_ROLES.map((role) => (
            <div
              key={role.id}
              className="bg-[#F5F4F1] p-6 rounded-2xl border border-[#2F3B6B]/10 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#2F3B6B] flex items-center justify-center">
                    {getRoleIcon(role.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FDFCFA] text-[#8A641B] px-2.5 py-1 rounded-full border border-[#C99A3E]/30">
                    {role.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-[#23222B]">
                    {role.title}
                  </h3>
                  <p className="text-xs text-[#23222B]/75 mt-1 leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2F3B6B]/10 space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#2F3B6B]">
                    Ce que la personne peut faire :
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#23222B]/80">
                    {role.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Guarantee Card */}
          <div className="bg-gradient-to-br from-[#2F3B6B] to-[#1E2749] text-[#FDFCFA] p-6 rounded-2xl flex flex-col justify-between border border-[#2F3B6B]">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C99A3E] text-[#23222B] flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold">
                Autonomie Paroissiale Garantie
              </h3>
              <p className="text-xs text-[#FDFCFA]/80 leading-relaxed">
                Chaque paroisse reste maître de ses données. Un administrateur d'une paroisse ne pourra <strong>jamais</strong> modifier ou supprimer le contenu publié par une autre paroisse de l'EMBERC.
              </p>
            </div>
            <div className="pt-4 border-t border-[#FDFCFA]/20">
              <span className="text-[11px] font-semibold text-[#C99A3E]">
                ✓ Cloisonnement étanche & Fraternité préservée
              </span>
            </div>
          </div>
        </div>

        {/* Feature Focus Box: Simple Username Login (No Email Required) */}
        <div className="bg-[#F5F4F1] border-2 border-dashed border-[#C99A3E]/40 rounded-3xl p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-[#C99A3E] text-[#23222B] flex items-center justify-center font-bold shrink-0 shadow-sm">
              <KeyRound className="w-8 h-8" />
            </div>

            <div className="space-y-2 text-center lg:text-left flex-1">
              <div className="inline-flex items-center gap-2 bg-[#C99A3E]/20 text-[#8A641B] px-3 py-0.5 rounded-full text-xs font-bold">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Pensé pour Tout le Monde</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2F3B6B]">
                Connexion simple par identifiant — Pas besoin d'adresse email
              </h3>
              <p className="text-sm text-[#23222B]/80 leading-relaxed">
                Afin que chaque fidèle, y compris les personnes aînées ou peu familières avec Internet, puisse utiliser la plateforme facilement, la connexion se fait grâce à un simple <strong>identifiant personnel</strong> (ex : <em>diacre_juste</em>, <em>fidèle_marie</em>) et un mot de passe. Aucune adresse email n'est obligatoire.
              </p>
            </div>

            <div className="bg-[#FDFCFA] p-4 rounded-xl border border-[#2F3B6B]/10 shadow-xs text-xs text-[#23222B] w-full lg:w-72 space-y-2 shrink-0">
              <div className="font-semibold text-[#2F3B6B] border-b border-[#2F3B6B]/10 pb-1.5 flex items-center justify-between">
                <span>Espace de Connexion</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Simple</span>
              </div>
              <div className="space-y-1.5">
                <div className="bg-[#F5F4F1] p-2 rounded text-[11px] font-mono text-[#23222B]/70">
                  Identifiant: pasteur_jean
                </div>
                <div className="bg-[#F5F4F1] p-2 rounded text-[11px] font-mono text-[#23222B]/70">
                  Mot de passe: ••••••••
                </div>
                <button className="w-full bg-[#2F3B6B] text-[#FDFCFA] py-1.5 rounded font-medium text-[11px] text-center">
                  Se connecter à ma paroisse
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
