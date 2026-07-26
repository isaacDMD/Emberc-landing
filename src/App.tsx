import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ConstatSection } from './components/ConstatSection';
import { SolutionSection } from './components/SolutionSection';
import { RolesSection } from './components/RolesSection';
import { AvancementSection } from './components/AvancementSection';
import { ApercuGallery } from './components/ApercuGallery';
import { ConvictionSection } from './components/ConvictionSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F4F1] text-[#23222B] selection:bg-[#C99A3E]/20 selection:text-[#2F3B6B]">
      {/* Fixed Header */}
      <Header />

      {/* Main Single Page Sections */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Le Constat */}
        <ConstatSection />

        {/* 3. La Solution */}
        <SolutionSection />

        {/* 4. Comment ça marche / Rôles & Connexion */}
        <RolesSection />

        {/* 5. Où en est le projet / Avancement Déjà là & Bientôt */}
        <AvancementSection />

        {/* 6. Aperçu en images / Galerie */}
        <ApercuGallery />

        {/* 7. Message de conviction & Vision */}
        <ConvictionSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
