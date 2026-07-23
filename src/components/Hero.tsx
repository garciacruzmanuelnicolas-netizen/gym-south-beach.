import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageCircle, Users, Dumbbell, Clock, Flame, ShieldCheck, Heart } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import heroGymImg from '../assets/images/hero_gym_garrucha_1784783147030.jpg';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="inicio" className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Bento Grid Header / Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-between gap-4 mb-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004E89] text-white font-extrabold text-xs uppercase tracking-widest shadow-sm">
          <Star className="w-4 h-4 fill-[#FFD166] text-[#FFD166]" />
          <span>GARRUCHA • ALMERÍA • TU GIMNASIO FAMILIAR</span>
        </div>
        <div className="inline-flex items-center gap-2 text-xs font-black text-[#004E89] bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
          <span className="text-[#FF6B35]">★ 5.0 Google</span>
        </div>
      </motion.div>

      {/* Main Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* HERO CARD 1: Main Copy & CTA (Span 12 -> 7 on Desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 bg-[#004E89] text-white rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between shadow-xl relative overflow-hidden group"
        >
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B35] text-white font-black text-[11px] uppercase tracking-wider mb-6">
              <Flame className="w-3.5 h-3.5 animate-pulse" />
              <span>Siente la diferencia</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-6">
              TU GIMNASIO DE <span className="text-[#FFD166]">CONFIANZA</span> EN <span className="text-[#FF6B35]">GARRUCHA</span>
            </h1>

            <p className="text-slate-100 text-base sm:text-lg font-medium leading-relaxed mb-8 max-w-xl">
              Aquí no eres un número más. Un ambiente familiar y acogedor donde te ayudamos día a día a conseguir tus metas sin aglomeraciones.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold">
                <Users className="w-3.5 h-3.5 text-[#FFD166]" />
                Ambiente Familiar
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold">
                <Dumbbell className="w-3.5 h-3.5 text-[#FFD166]" />
                Maquinaria Completa
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold">
                <Clock className="w-3.5 h-3.5 text-[#FFD166]" />
                Sin Aglomeraciones
              </span>
            </div>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-white/15">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenTrialModal}
              className="bg-[#FF6B35] hover:bg-[#e05a2b] text-white font-black text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-lg text-center cursor-pointer"
            >
              EMPIEZA HOY • PRUEBA GRATIS
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent('Hola! Quisiera hablar con los dueños de GYM SOUTH BEACH GARRUCHA sobre entrenar con vosotros.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-sm px-6 py-4 rounded-full backdrop-blur-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              <span>Escríbenos por WhatsApp</span>
            </motion.a>
          </div>

          {/* Decorative Background Waves */}
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        </motion.div>

        {/* HERO CARD 2: Hero Image Showcase (Span 12 -> 5 on Desktop) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 bg-slate-900 rounded-[2.5rem] relative overflow-hidden shadow-xl min-h-[320px] md:min-h-full group"
        >
          <img
            src={heroGymImg}
            alt="Gym South Beach Garrucha Ambiente"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#004E89]/90 via-slate-950/30 to-transparent" />
          
          {/* Badge Overlay */}
          <div className="absolute top-6 right-6 bg-[#FFD166] text-[#004E89] px-4 py-2 rounded-2xl font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-[#004E89]" />
            <span>5.0 / 5.0 Google</span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="text-xs font-bold uppercase tracking-widest text-[#FFD166] mb-1">
              Instalaciones Impecables
            </div>
            <div className="text-lg font-black uppercase tracking-tight">
              Entrena en las mejores condiciones
            </div>
          </div>
        </motion.div>

        {/* BENTO ROW 2 */}
        {/* CARD 3: 5-Star Rating & Dueños Implicados (Gold Bento Card) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="md:col-span-4 bg-[#FFD166] text-[#004E89] rounded-[2.5rem] p-7 shadow-md flex flex-col justify-between border-4 border-white transition-shadow hover:shadow-xl"
        >
          <div>
            <div className="flex items-center gap-1 mb-3 text-[#004E89]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#004E89] text-[#004E89]" />
              ))}
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
              100% VALORACIÓN POSITIVA
            </h3>
            <p className="text-[#004E89]/80 text-xs sm:text-sm font-semibold leading-relaxed">
              "Los dueños están siempre atentos para corregirte las posturas y ayudarte. Jamás me he sentido tan cómodo en un gimnasio."
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#004E89]/20 flex items-center justify-between text-xs font-black uppercase tracking-wider">
            <span>Atención 100% Personalizada</span>
            <ShieldCheck className="w-4 h-4" />
          </div>
        </motion.div>

        {/* CARD 4: Confort & Climatización (Coral Bento Card) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="md:col-span-4 bg-[#FF6B35] text-white rounded-[2.5rem] p-7 shadow-md flex flex-col justify-between transition-shadow hover:shadow-xl"
        >
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-extrabold text-[10px] uppercase tracking-wider mb-3">
              MÁXIMO CONFORT
            </span>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
              ❄️ CLIMATIZADO TODO EL AÑO
            </h3>
            <p className="text-white/90 text-xs sm:text-sm font-medium leading-relaxed">
              Entrena a la temperatura ideal tanto en el caluroso verano de Almería como en invierno. Aire acondicionado potente y ventilación continua.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/20 text-xs font-black uppercase tracking-wider">
            Garrucha • Mojácar • Vera
          </div>
        </motion.div>

        {/* CARD 5: Trato Cercano (White Bento Card) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -4 }}
          className="md:col-span-4 bg-white text-slate-900 rounded-[2.5rem] p-7 shadow-md border border-slate-200/80 flex flex-col justify-between transition-shadow hover:shadow-xl"
        >
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[#004E89]/10 text-[#004E89] flex items-center justify-center font-bold mb-3">
              <Heart className="w-5 h-5 text-[#004E89]" />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight text-[#004E89] mb-2">
              TRATO CERCANO Y HUMANO
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              Tanto si estás empezando como si llevas años entrenando, estamos a tu lado para guiarte en cada rutina de ejercicios.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-[#FF6B35] uppercase tracking-wider">Sin permanencias</span>
            <span className="text-xs font-bold text-slate-400 uppercase">Tarifas Flexibles</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};


