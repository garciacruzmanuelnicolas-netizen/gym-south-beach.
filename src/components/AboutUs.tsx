import React from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, Smile, Sparkles, Fan, Star, CheckCircle2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const AboutUs: React.FC = () => {
  return (
    <section id="sobre-nosotros" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004E89] text-white text-xs font-black uppercase tracking-widest mb-4 shadow-sm">
          <Heart className="w-4 h-4 text-[#FFD166] fill-[#FFD166]" />
          <span>Nuestra Filosofía</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#004E89] uppercase tracking-tight mb-4">
          AQUÍ NO ERES UN NÚMERO. <br className="hidden sm:inline"/>
          <span className="text-[#FF6B35]">ERES PARTE DE NUESTRA FAMILIA.</span>
        </h2>
        <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
          En <strong>GYM SOUTH BEACH GARRUCHA</strong> la clave para lograr tus metas es el trato cercano, la motivación diaria y entrenar sin aglomeraciones.
        </p>
      </motion.div>

      {/* Bento Grid layout for About Us */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-8">
        
        {/* Rating Hero Bento Card (Span 8) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="md:col-span-8 bg-[#004E89] text-white rounded-[2.5rem] p-8 md:p-10 shadow-lg flex flex-col justify-between border border-[#003863] transition-shadow hover:shadow-xl"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1 text-[#FFD166]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#FFD166]" />
                ))}
              </div>
              <span className="bg-[#FF6B35] text-white text-xs font-black uppercase px-3 py-1 rounded-full">
                Google 5.0
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
              LA SATISFACCIÓN DE NUESTROS SOCIOS NOS AVALA CADA DÍA
            </h3>

            <p className="text-slate-100 text-sm sm:text-base font-medium leading-relaxed mb-6">
              Nuestros clientes destacan siempre el trato amable y atento de los propietarios, la ayuda constante durante los ejercicios para prevenir lesiones, la limpieza rigurosa y las instalaciones bien climatizadas para entrenar a gusto tanto en verano como en invierno.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/20">
            <span className="bg-white/10 text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/10">
              ✓ Sin aglomeraciones
            </span>
            <span className="bg-white/10 text-[#FFD166] text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/10">
              ✓ Como entrenar en casa
            </span>
            <span className="bg-white/10 text-emerald-300 text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/10">
              ✓ Aire acondicionado todo el año
            </span>
          </div>
        </motion.div>

        {/* Trato Humano Card (Span 4 - Coral Card) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="md:col-span-4 bg-[#FF6B35] text-white rounded-[2.5rem] p-8 shadow-lg flex flex-col justify-between transition-shadow hover:shadow-xl"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center font-bold mb-4">
              <Smile className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3">
              TRATO HUMANO Y CERCANO
            </h3>
            <p className="text-white/90 text-sm font-medium leading-relaxed">
              Los dueños estamos siempre presentes en sala para recibirte con una sonrisa, resolver tus dudas y asegurarnos de que te sientas como en casa.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/20 text-xs font-extrabold uppercase tracking-widest text-[#FFD166]">
            Atención Real
          </div>
        </motion.div>

        {/* 3 Pillar Cards Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="md:col-span-4 bg-white text-slate-900 rounded-[2.5rem] p-7 shadow-md border border-slate-200/80 flex flex-col justify-between transition-shadow hover:shadow-xl"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#004E89]/10 text-[#004E89] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-[#004E89]" />
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight text-[#004E89] mb-2">
              AYUDA Y CORRECCIÓN
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              Tengas el nivel que tengas, te enseñamos la técnica correcta de cada ejercicio para rendir al máximo sin lesiones.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="md:col-span-4 bg-white text-slate-900 rounded-[2.5rem] p-7 shadow-md border border-slate-200/80 flex flex-col justify-between transition-shadow hover:shadow-xl"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <Fan className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight text-[#004E89] mb-2">
              CLIMATIZADO Y LIMPIO
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              Cuidamos la higiene diaria al detalle y mantenemos el aire acondicionado a la temperatura perfecta en cualquier época del año.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -4 }}
          className="md:col-span-4 bg-[#FFD166] text-[#004E89] rounded-[2.5rem] p-7 shadow-md border-4 border-white flex flex-col justify-between transition-shadow hover:shadow-xl"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#004E89]/15 text-[#004E89] flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight mb-2">
              MAQUINARIA COMPLETA
            </h3>
            <p className="text-[#004E89]/90 text-xs sm:text-sm font-bold leading-relaxed">
              Equipamiento renovado y en constante evolución para que completes tu rutina sin esperas ni turnos.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

