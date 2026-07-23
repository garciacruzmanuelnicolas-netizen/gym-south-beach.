import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell, Wind, Layers, Sparkles, Check } from 'lucide-react';
import { FACILITIES_DATA } from '../data/gymData';

export const Facilities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const filteredFacilities = selectedCategory === 'todos'
    ? FACILITIES_DATA
    : FACILITIES_DATA.filter(f => f.category === selectedCategory);

  return (
    <section id="instalaciones" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004E89] text-white text-xs font-black uppercase tracking-widest mb-3 shadow-sm">
            <Dumbbell className="w-4 h-4 text-[#FFD166]" />
            <span>Instalaciones Cuidadas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#004E89] uppercase tracking-tight">
            EQUIPAMIENTO COMPLETO Y <br className="hidden sm:inline"/>
            <span className="text-[#FF6B35]">RENOVADO CONTINUAMENTE</span>
          </h2>
        </div>
        <p className="text-slate-700 text-base max-w-md font-medium">
          Un espacio luminoso, limpio y con excelente climatización diseñado para que entrenes con total comodidad en Garrucha.
        </p>
      </motion.div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[
          { id: 'todos', label: 'Todas las Instalaciones' },
          { id: 'maquinaria', label: 'Fuerza y Peso Libre' },
          { id: 'climatizacion', label: 'Climatización & Aire' },
          { id: 'espacio', label: 'Sin Masificaciones' },
        ].map((tab) => (
          <motion.button
            key={tab.id}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(tab.id)}
            className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider cursor-pointer transition-all ${
              selectedCategory === tab.id
                ? 'bg-[#004E89] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Bento Grid Facilities */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredFacilities.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col sm:flex-row"
            >
              <div className="sm:w-1/2 relative h-60 sm:h-auto overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                <div className="absolute top-4 left-4 bg-[#004E89] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  {item.category === 'maquinaria' ? 'Fuerza' : item.category === 'climatizacion' ? 'Confort A/C' : 'Espacio'}
                </div>
              </div>

              <div className="sm:w-1/2 p-7 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-[#004E89] mb-3 group-hover:text-[#FF6B35] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 pt-3 border-t border-slate-100">
                  <Check className="w-4 h-4" />
                  <span>Garantía de confort y limpieza</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bento Highlight Footer Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 bg-[#004E89] text-white rounded-[2.5rem] p-8 sm:p-10 flex flex-wrap items-center justify-between gap-6 shadow-xl border border-[#003863]"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FF6B35] text-white flex items-center justify-center font-bold">
            <Wind className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-black uppercase text-lg text-white">Climatización constante todo el año</h4>
            <p className="text-slate-200 text-xs sm:text-sm font-medium">Entrena a la temperatura ideal durante los meses de verano e invierno</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FFD166] text-[#004E89] flex items-center justify-center font-bold">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-black uppercase text-lg text-[#FFD166]">Renovación continua de material</h4>
            <p className="text-slate-200 text-xs sm:text-sm font-medium">Añadimos nuevas máquinas y agarres periódicamente</p>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

