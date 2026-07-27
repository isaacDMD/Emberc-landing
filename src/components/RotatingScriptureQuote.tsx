import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { SCRIPTURE_QUOTES } from '../data/embercData';

export const RotatingScriptureQuote: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // déclenche le fondu de sortie

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % SCRIPTURE_QUOTES.length);
        setVisible(true); // fondu d'entrée du verset suivant
      }, 400); // durée du fondu de sortie, doit correspondre à la transition CSS ci-dessous
    }, 50000); 

    return () => clearInterval(interval);
  }, []);

  const quote = SCRIPTURE_QUOTES[index];

  return (
    <div className="bg-[#F5F4F1] p-6 sm:p-8 rounded-2xl border-l-4 border-[#C99A3E] relative overflow-hidden min-h-[140px]">
      <Quote className="w-8 h-8 text-[#C99A3E]/30 absolute top-4 right-4" />

      <blockquote
        className={`space-y-2 text-center sm:text-left transition-opacity duration-400 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="font-serif italic text-base sm:text-lg text-[#2F3B6B] leading-relaxed">
          « {quote.text} »
        </p>
        <cite className="block text-xs font-bold uppercase tracking-wider text-[#8A641B] not-italic">
          — {quote.reference}
        </cite>
      </blockquote>

      {/* Petits indicateurs de progression (points) */}
      <div className="flex items-center gap-1.5 mt-4 justify-center sm:justify-start">
        {SCRIPTURE_QUOTES.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-5 bg-[#C99A3E]' : 'w-1.5 bg-[#C99A3E]/25'
            }`}
          />
        ))}
      </div>
    </div>
  );
};