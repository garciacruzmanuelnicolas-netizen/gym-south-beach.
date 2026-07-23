import React from 'react';
import { motion } from 'motion/react';
import { GYM_INFO } from '../data/gymData';
import { MapPin, Phone, MessageCircle, Star, Heart } from 'lucide-react';

interface FooterProps {
  onOpenTrialModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTrialModal }) => {
  return (
    <footer className="bg-[#004E89] text-white text-sm py-16 mt-12 border-t-4 border-[#FFD166]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/20">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#inicio" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#FF6B35] flex items-center justify-center text-white font-black text-xl shadow-md">
                SB
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl text-white tracking-tight uppercase">
                  GYM <span className="text-[#FFD166]">SOUTH BEACH</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slate-200 font-extrabold">
                  GARRUCHA • ALMERÍA
                </span>
              </div>
            </a>

            <p className="text-slate-100 text-xs sm:text-sm font-medium leading-relaxed max-w-sm">
              Tu gimnasio cercano, familiar y acogedor en Garrucha. Trato 100% personalizado, instalaciones climatizadas y sin masificaciones para que te sientas como en casa.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 text-xs font-black text-white bg-white/15 border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
                <span>★ {GYM_INFO.googleRating.toFixed(1)} Google ({GYM_INFO.googleReviewsCount}+)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-[#FFD166] font-black text-xs uppercase tracking-widest">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs font-bold">
              <li><a href="#inicio" className="hover:text-[#FFD166] transition-colors">Inicio</a></li>
              <li><a href="#sobre-nosotros" className="hover:text-[#FFD166] transition-colors">Sobre Nosotros</a></li>
              <li><a href="#instalaciones" className="hover:text-[#FFD166] transition-colors">Instalaciones</a></li>
              <li><a href="#servicios" className="hover:text-[#FFD166] transition-colors">Servicios & Clases</a></li>
              <li><a href="#tarifas" className="hover:text-[#FFD166] transition-colors">Tarifas & Vacaciones</a></li>
              <li><a href="#opiniones" className="hover:text-[#FFD166] transition-colors">Opiniones Reales</a></li>
              <li><a href="#ubicacion" className="hover:text-[#FFD166] transition-colors">Ubicación & Horario</a></li>
            </ul>
          </div>

          {/* Local SEO Keywords */}
          <div className="space-y-3">
            <h4 className="text-[#FFD166] font-black text-xs uppercase tracking-widest">
              Área de Servicio
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-200 font-medium">
              <li>• Gimnasio en Garrucha</li>
              <li>• Fitness Garrucha</li>
              <li>• Gimnasio Cerca de Vera</li>
              <li>• Gimnasio Cerca de Mojácar</li>
              <li>• Gimnasio Puerto Rey</li>
              <li>• Entrenamiento Personal Garrucha</li>
              <li>• Pases Vacaciones Garrucha</li>
            </ul>
          </div>

          {/* Direct Actions & Admin Tool */}
          <div className="space-y-3">
            <h4 className="text-[#FFD166] font-black text-xs uppercase tracking-widest">
              Contacto Directo
            </h4>
            <p className="text-xs text-slate-200 font-medium">
              {GYM_INFO.address}
            </p>
            <div className="pt-2 space-y-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenTrialModal}
                className="w-full bg-[#FF6B35] hover:bg-[#e05a2b] text-white font-black py-2.5 rounded-full text-xs uppercase tracking-wider text-center shadow cursor-pointer"
              >
                Clase Gratis de Prueba
              </motion.button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-200 font-medium gap-4">
          <p>© {new Date().getFullYear()} GYM SOUTH BEACH GARRUCHA. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Diseñado con</span>
            <Heart className="w-3.5 h-3.5 text-[#FF6B35] fill-[#FF6B35]" />
            <span>para Garrucha, Vera y Mojácar</span>
          </p>
        </div>

        {/* Small transparent watermark at the very bottom */}
        <div className="mt-6 pt-4 border-t border-white/5 text-center">
          <span className="text-[10px] text-slate-400/50 tracking-wider font-light uppercase select-none">
            Creado por Nicolás
          </span>
        </div>

      </div>
    </footer>
  );
};

