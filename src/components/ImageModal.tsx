import React from 'react';
import { X, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { ScreenshotItem } from '../types';

interface ImageModalProps {
  item: ScreenshotItem | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#FDFCFA] rounded-3xl overflow-hidden shadow-2xl border border-[#2F3B6B]/20 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 bg-[#2F3B6B] text-[#FDFCFA] border-b border-[#2F3B6B]">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-[#C99A3E]/20 text-[#C99A3E] px-2.5 py-0.5 rounded-full border border-[#C99A3E]/30">
              {item.badge}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#FDFCFA]/10 hover:bg-[#FDFCFA]/20 text-[#FDFCFA] transition-colors"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Screenshot Display Container */}
          <div className="rounded-2xl overflow-hidden border border-[#2F3B6B]/15 bg-[#23222B] shadow-inner relative min-h-[280px] flex items-center justify-center">
            <img
              src={item.imageSrc}
              alt={item.title}
              className="w-full h-auto object-contain max-h-[500px]"
              onError={(e) => {
                // Fallback UI if local image file isn't uploaded yet
                e.currentTarget.style.display = 'none';
              }}
            />

          </div>

          {/* Description & Highlights */}
          <div className="space-y-4">
            <div>
              <h4 className="font-serif font-bold text-lg text-[#2F3B6B]">Description de l'écran</h4>
              <p className="text-sm text-[#23222B]/80 leading-relaxed mt-1">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#2F3B6B]/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A641B] mb-2">
                Éléments clés visibles sur cet écran :
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {item.highlights.map((highlight, idx) => (
                  <div key={idx} className="bg-[#F5F4F1] p-3 rounded-xl text-xs font-medium text-[#23222B] flex items-center gap-2 border border-[#2F3B6B]/5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F5F4F1] border-t border-[#2F3B6B]/10 flex items-center justify-between text-xs text-[#23222B]/70">
          <span className="flex items-center gap-1.5 font-medium">
            <Sparkles className="w-4 h-4 text-[#C99A3E]" />
            EMBERC • Interface responsive et épurée
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#2F3B6B] text-[#FDFCFA] font-semibold rounded-xl hover:bg-[#23222B] transition-colors"
          >
            Fermer l'aperçu
          </button>
        </div>
      </div>
    </div>
  );
};
