/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Facilities } from './components/Facilities';
import { AudienceAndServices } from './components/AudienceAndServices';
import { Pricing } from './components/Pricing';
import { Reviews } from './components/Reviews';
import { LocationAndContact } from './components/LocationAndContact';
import { Footer } from './components/Footer';
import { FreeTrialModal } from './components/FreeTrialModal';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-nosotros', 'instalaciones', 'servicios', 'tarifas', 'opiniones', 'ubicacion'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F7F2] text-slate-900 font-sans antialiased selection:bg-[#FF6B35] selection:text-white">
      
      {/* Top Header Navigation matching reference mockup */}
      <Header
        onOpenTrialModal={() => setTrialModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Hero Section strictly matching user mockup image */}
      <Hero onOpenTrialModal={() => setTrialModalOpen(true)} />

      {/* Brand Identity & Values: "Aquí no eres un número", 5.0 Rating */}
      <AboutUs />

      {/* Facilities & Equipment Showcase */}
      <Facilities />

      {/* Tailored Plans: Beginners, Seniors, Weight Loss, Vacationers */}
      <AudienceAndServices onOpenTrialModal={() => setTrialModalOpen(true)} />

      {/* Transparent Pricing & Passes */}
      <Pricing onOpenTrialModal={() => setTrialModalOpen(true)} />

      {/* 5.0 Google Reviews Showcase */}
      <Reviews />

      {/* Local SEO, Location, Opening Hours & WhatsApp Direct Contact */}
      <LocationAndContact onOpenTrialModal={() => setTrialModalOpen(true)} />

      {/* Footer */}
      <Footer
        onOpenTrialModal={() => setTrialModalOpen(true)}
      />

      {/* Modals */}
      <FreeTrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
      />

    </div>
  );
}
