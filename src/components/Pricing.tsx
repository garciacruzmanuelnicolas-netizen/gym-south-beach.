import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRICING_PLANS, EMS_PRICING_PLANS, EMS_BENEFITS, GYM_INFO } from '../data/gymData';
import { Check, MessageCircle, ShieldCheck, Dumbbell, Flame, UserCheck, Zap, Phone, Sparkles, Trophy } from 'lucide-react';

interface PricingProps {
  onOpenTrialModal: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenTrialModal }) => {
  const [activeTab, setActiveTab] = useState<'ems' | 'gym'>('ems');

  return (
    <section id="tarifas" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004E89] text-white text-xs font-black uppercase tracking-widest mb-3 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-[#FFD166]" />
          <span>Precios y Tarifas Oficiales</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#004E89] uppercase tracking-tight mb-4">
          NUESTRAS TARIFAS <br className="hidden sm:inline"/>
          <span className="text-[#FF6B35]">SIN LETRA PEQUEÑA</span>
        </h2>
        <p className="text-slate-700 text-base sm:text-lg font-medium">
          Consulta nuestras tarifas para Entrenamiento EMS y Membresías de Gimnasio.
        </p>
      </motion.div>

      {/* Tabs Selector */}
      <div className="flex justify-center mb-10">
        <div className="bg-slate-200/80 p-1.5 rounded-full inline-flex border border-slate-300 shadow-inner">
          <button
            onClick={() => setActiveTab('ems')}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'ems'
                ? 'bg-[#004E89] text-white shadow-md'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <Zap className="w-4 h-4 text-[#FFD166]" />
            <span>Tarifas EMS (Electroestimulación)</span>
          </button>
          <button
            onClick={() => setActiveTab('gym')}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'gym'
                ? 'bg-[#004E89] text-white shadow-md'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <Dumbbell className="w-4 h-4 text-[#FF6B35]" />
            <span>Cuotas Gimnasio Tradicional</span>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'ems' ? (
          /* =========================================================
             EMS FLYER EXACT REPRODUCTION
             ========================================================= */
          <motion.div
            key="ems-flyer-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-b from-slate-950 via-slate-900 to-amber-950/90 text-white rounded-[3rem] p-6 sm:p-10 border-4 border-[#FFD166]/40 shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl pointer-events-none" />

            {/* Flyer Header & Shield Logo */}
            <div className="text-center relative z-10 max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-amber-500/20 border border-[#FFD166]/40 text-[#FFD166] text-xs font-black uppercase tracking-widest mb-4 shadow">
                <Trophy className="w-4 h-4 text-[#FFD166]" />
                <span>TEAM SANDU — SOUTH BEACH GYM</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-amber-200 to-[#FFD166] mb-2 drop-shadow">
                ENTRENAMIENTO EMS
              </h3>
              <p className="text-base sm:text-xl font-black uppercase tracking-wider text-amber-300">
                ELECTROESTIMULACIÓN MUSCULAR
              </p>
              <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-slate-300 italic mt-1">
                RESULTADOS EN TIEMPO RÉCORD
              </p>
            </div>

            {/* Benefit Badges Bar (Matches 4 Flyer Icons) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 relative z-10">
              {EMS_BENEFITS.map((b, idx) => (
                <div
                  key={b.id}
                  className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-4 text-center flex flex-col items-center justify-center hover:border-amber-400 transition-colors shadow-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-[#FFD166] mb-2">
                    {idx === 0 && <Dumbbell className="w-5 h-5" />}
                    {idx === 1 && <Flame className="w-5 h-5 text-orange-400" />}
                    {idx === 2 && <UserCheck className="w-5 h-5 text-emerald-400" />}
                    {idx === 3 && <Zap className="w-5 h-5 text-yellow-300" />}
                  </div>
                  <h4 className="text-xs sm:text-sm font-black uppercase tracking-tight text-amber-100">
                    {b.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-medium mt-1 leading-tight hidden sm:block">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>

            {/* TARIFAS Title Banner */}
            <div className="text-center mb-8 relative z-10">
              <div className="inline-block bg-red-700 text-white font-black text-sm sm:text-base uppercase tracking-widest px-8 py-2 rounded-xl shadow-lg border border-red-500">
                TARIFAS EMS
              </div>
            </div>

            {/* 4 Session Rate Cards (Exact Prices from Flyer: 40€, 150€, 250€, 280€) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 relative z-10">
              {EMS_PRICING_PLANS.map((plan) => (
                <motion.div
                  key={plan.id}
                  whileHover={{ y: -6 }}
                  className="bg-slate-900/95 border-2 border-amber-500/40 rounded-[2rem] p-6 flex flex-col justify-between relative shadow-xl hover:border-amber-400 transition-all group overflow-hidden"
                >
                  {/* Discount Banner Tag */}
                  {plan.discountTag && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md border border-red-400 animate-pulse">
                      {plan.discountTag}
                    </div>
                  )}

                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-amber-400 block mb-1">
                      {plan.subtitle}
                    </span>
                    <h4 className="text-2xl font-black uppercase tracking-tight text-white mb-4">
                      {plan.title}
                    </h4>

                    {/* Price Display */}
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 text-center mb-6">
                      <div className="text-4xl sm:text-5xl font-black text-[#FFD166] tracking-tight drop-shadow">
                        {plan.price}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-200/80 mt-1 block">
                        {plan.period}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-6 text-xs text-slate-300 font-medium">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(`Hola! Me interesa reservar el pack EMS: ${plan.title} (${plan.price})`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl text-center shadow-lg block transition-all"
                  >
                    {plan.ctaText}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Bottom Flyer CTA Banner */}
            <div className="bg-slate-900/90 border border-amber-500/50 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto relative z-10 shadow-xl">
              <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-amber-300 mb-2">
                ¡RESERVA TU SESIÓN AHORA!
              </h4>
              <p className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-200 mb-6">
                CAMBIA TU CUERPO EN SOLO <span className="text-[#FFD166] text-xl font-black">2x20 MIN/SEMANA</span>
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent('Hola! Quisiera reservar mi sesión de EMS en Gym South Beach Garrucha')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {GYM_INFO.phone1}</span>
                </a>
                <a
                  href={`https://wa.me/${GYM_INFO.whatsappNumber2}?text=${encodeURIComponent('Hola! Quisiera consultar disponibilidad para EMS')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {GYM_INFO.phone2}</span>
                </a>
              </div>
            </div>

          </motion.div>
        ) : (
          /* =========================================================
             STANDARD GYM MEMBERSHIP PLANS
             ========================================================= */
          <motion.div
            key="gym-plans-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {PRICING_PLANS.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={`rounded-[2.5rem] p-8 transition-shadow flex flex-col justify-between relative shadow-lg hover:shadow-2xl ${
                    plan.popular
                      ? 'bg-[#004E89] text-white border-4 border-[#FFD166]'
                      : 'bg-white text-slate-900 border border-slate-200/80'
                  }`}
                >
                  {plan.badge && (
                    <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md ${
                      plan.popular ? 'bg-[#FF6B35] text-white' : 'bg-[#004E89] text-white'
                    }`}>
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    <h3 className={`text-2xl font-black uppercase tracking-tight mb-1 ${plan.popular ? 'text-white' : 'text-[#004E89]'}`}>
                      {plan.title}
                    </h3>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-6 ${plan.popular ? 'text-[#FFD166]' : 'text-slate-500'}`}>
                      {plan.subtitle}
                    </p>

                    <div className="flex items-baseline gap-1 mb-6">
                      <span className={`text-3xl sm:text-4xl font-black tracking-tight ${plan.popular ? 'text-[#FFD166]' : 'text-[#004E89]'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-xs font-bold uppercase tracking-wider ${plan.popular ? 'text-slate-200' : 'text-slate-500'}`}>
                        {plan.period}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-medium">
                          <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? 'text-[#FFD166]' : 'text-[#FF6B35]'}`} />
                          <span className={plan.popular ? 'text-slate-100' : 'text-slate-700'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-200/30">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={onOpenTrialModal}
                      className={`w-full py-3.5 rounded-full font-black text-xs uppercase tracking-wider text-center cursor-pointer ${
                        plan.popular
                          ? 'bg-[#FF6B35] hover:bg-[#e05a2b] text-white shadow-md'
                          : 'bg-[#004E89] hover:bg-[#003863] text-white'
                      }`}
                    >
                      {plan.ctaText}
                    </motion.button>
                    
                    <a
                      href={`https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(`Hola! Quisiera consultar precio exacto del plan: ${plan.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-1.5 text-xs font-bold ${
                        plan.popular ? 'text-emerald-300 hover:text-emerald-200' : 'text-emerald-700 hover:text-emerald-800'
                      }`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Consultar por WhatsApp</span>
                    </a>
                  </div>

                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Free trial highlight Bento Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mt-12 bg-[#FFD166] text-[#004E89] rounded-[2.5rem] p-8 sm:p-10 text-center max-w-3xl mx-auto border-4 border-white shadow-lg"
      >
        <h4 className="text-2xl font-black uppercase tracking-tight mb-2">
          ¿QUIERES PROBAR ANTES DE DECIDIRTE?
        </h4>
        <p className="text-[#004E89]/90 text-sm font-bold mb-6 max-w-xl mx-auto leading-relaxed">
          Te invitamos a realizar tu <strong>primera clase de prueba gratis</strong> para que conozcas a los dueños, pruebes las instalaciones y sientas el ambiente.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenTrialModal}
          className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e05a2b] text-white font-black text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-md cursor-pointer"
        >
          <span>RESERVAR MI CLASE GRATIS</span>
        </motion.button>
      </motion.div>

    </section>
  );
};
