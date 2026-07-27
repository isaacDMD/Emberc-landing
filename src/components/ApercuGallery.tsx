import React, { useState } from 'react';
import { SCREENSHOTS } from '../data/embercData';
import { ScreenshotItem } from '../types';
import { ImageModal } from './ImageModal';
import { Eye, Layers, Sparkles, Check, Monitor, Smartphone } from 'lucide-react';

export const ApercuGallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'fidele' | 'responsable' | 'admin'>('all');
  const [selectedScreenshot, setSelectedScreenshot] = useState<ScreenshotItem | null>(null);

  const filteredScreenshots = SCREENSHOTS.filter((screen) => {
    if (filter === 'all') return true;
    if (filter === 'fidele') return screen.category === 'fidele';
    if (filter === 'responsable') return screen.category === 'responsable' || screen.category === 'fidele';
    if (filter === 'admin') return screen.category === 'admin' || screen.category === 'responsable';
    return true;
  });

  return (
    <section id="apercu" className="py-20 md:py-28 bg-[#FDFCFA] border-y border-[#2F3B6B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#C99A3E]/15 text-[#8A641B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#C99A3E]/30">
            <Eye className="w-3.5 h-3.5" />
            <span>Galerie des Écrans Développés</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2F3B6B]">
            Aperçu en images de la plateforme
          </h2>
          <p className="text-base text-[#23222B]/80 leading-relaxed">
            Explorez les différentes interfaces créées pour les fidèles et pour les responsables de paroisse. Cliquez sur une image pour l'agrandir.
          </p>

          {/* Filter Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-[#2F3B6B] text-[#FDFCFA] shadow-xs'
                  : 'bg-[#F5F4F1] text-[#23222B]/70 hover:bg-[#2F3B6B]/10'
              }`}
            >
              Tous les Écrans ({SCREENSHOTS.length})
            </button>
            <button
              onClick={() => setFilter('fidele')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'fidele'
                  ? 'bg-[#2F3B6B] text-[#FDFCFA] shadow-xs'
                  : 'bg-[#F5F4F1] text-[#23222B]/70 hover:bg-[#2F3B6B]/10'
              }`}
            >
              Vue Fidèles
            </button>
            <button
              onClick={() => setFilter('responsable')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'responsable'
                  ? 'bg-[#2F3B6B] text-[#FDFCFA] shadow-xs'
                  : 'bg-[#F5F4F1] text-[#23222B]/70 hover:bg-[#2F3B6B]/10'
              }`}
            >
              Chants & Lectures
            </button>
            <button
              onClick={() => setFilter('admin')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'admin'
                  ? 'bg-[#2F3B6B] text-[#FDFCFA] shadow-xs'
                  : 'bg-[#F5F4F1] text-[#23222B]/70 hover:bg-[#2F3B6B]/10'
              }`}
            >
              Espace Administration
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScreenshots.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedScreenshot(item)}
              className="group bg-[#F5F4F1] rounded-2xl border border-[#2F3B6B]/10 overflow-hidden cursor-pointer hover:shadow-xl hover:border-[#C99A3E]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Mockup Frame & Image */}
                <div className="relative bg-[#23222B] aspect-[16/10] overflow-hidden border-b border-[#2F3B6B]/10">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#2F3B6B]/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-[#FDFCFA] font-semibold text-xs">
                    <Eye className="w-4 h-4 text-[#C99A3E]" />
                    <span>Cliquer pour agrandir</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#2F3B6B]/10 text-[#2F3B6B] px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#23222B] group-hover:text-[#2F3B6B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#23222B]/75 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Footer Badge */}
              <div className="px-5 py-3 bg-[#FDFCFA] border-t border-[#2F3B6B]/10 flex items-center justify-end text-[11px] text-[#23222B]/60">
                <span className="font-semibold text-[#2F3B6B] flex items-center gap-1">
                  <span>Agrandir</span>
                  <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        <ImageModal
          item={selectedScreenshot}
          onClose={() => setSelectedScreenshot(null)}
        />

      </div>
    </section>
  );
};
