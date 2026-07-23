import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, MapPin } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface HeaderProps {
  onOpenTrialModal: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenTrialModal,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Instalaciones', href: '#instalaciones' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Tarifas', href: '#tarifas' },
    { name: 'Opiniones', href: '#opiniones' },
    { name: 'Ubicación', href: '#ubicacion' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-[#F7F7F2]/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/60' : 'bg-[#F7F7F2] py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Matching Bento Grid Theme */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B35] flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              SB
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-[#004E89] uppercase leading-none">
                GYM <span className="text-[#FF6B35]">SOUTH BEACH</span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#FF6B35] uppercase mt-0.5">
                Garrucha • Almería
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs font-bold uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full transition-all ${
                    isActive
                      ? 'bg-[#004E89] text-white shadow-sm font-black'
                      : 'text-slate-600 hover:text-[#004E89] hover:bg-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Direct WhatsApp button */}
            <a
              href={`https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent('Hola GYM SOUTH BEACH GARRUCHA! Quisiera información sobre el gimnasio y clases.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase text-emerald-700 hover:text-emerald-800 px-3 py-1.5 rounded-full hover:bg-emerald-100/60 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Coral Pill "Empieza Hoy" Primary CTA */}
            <button
              onClick={onOpenTrialModal}
              className="bg-[#004E89] hover:bg-[#003863] text-white text-xs font-black uppercase tracking-wider px-6 py-2.5 rounded-full shadow-md hover:scale-105 transition-transform active:scale-95"
            >
              EMPIEZA HOY
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent('Hola GYM SOUTH BEACH GARRUCHA!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-emerald-600 border border-emerald-200 rounded-full font-semibold text-sm hover:bg-emerald-50"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600" />
              <span>Contactar por WhatsApp</span>
            </a>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full text-center shadow"
            >
              Prueba Gratis
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
