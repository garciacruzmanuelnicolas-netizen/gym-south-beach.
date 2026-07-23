import React from 'react';
import { motion } from 'motion/react';
import { PRICING_PLANS, GYM_INFO } from '../data/gymData';
import { Check, MessageCircle, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onOpenTrialModal: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="tarifas" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004E89] text-white text-xs font-black uppercase tracking-widest mb-3 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-[#FFD166]" />
          <span>Honestidad y Transparencia</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#004E89] uppercase tracking-tight mb-4">
          PRECIOS SIN LETRA PEQUEÑA <br className="hidden sm:inline"/>
          <span className="text-[#FF6B35]">NI PERMANENCIAS OCULTAS</span>
        </h2>
        <p className="text-slate-700 text-base sm:text-lg font-medium">
          Creemos en ganarnos tu confianza mes a mes con resultados y un trato excelente. Consulta la opción que mejor se adapte a ti.
        </p>
      </motion.div>

      {/* Pricing Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {PRICING_PLANS.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
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

      {/* Free trial highlight Bento Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="bg-[#FFD166] text-[#004E89] rounded-[2.5rem] p-8 sm:p-10 text-center max-w-3xl mx-auto border-4 border-white shadow-lg"
      >
        <h4 className="text-2xl font-black uppercase tracking-tight mb-2">
          ¿QUIERES PROBAR ANTES DE DECIDIRTE?
        </h4>
        <p className="text-[#004E89]/90 text-sm font-bold mb-6 max-w-xl mx-auto leading-relaxed">
          Te invitamos a realizar tu <strong>primera clase de entrenamiento completamente gratis</strong> para que conozcas a los dueños, pruebes la maquinaria y sientas el ambiente.
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

