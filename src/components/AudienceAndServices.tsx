import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, HeartHandshake, Zap, Sun, Compass, CheckCircle } from 'lucide-react';

interface AudienceAndServicesProps {
  onOpenTrialModal: () => void;
}

export const AudienceAndServices: React.FC<AudienceAndServicesProps> = ({ onOpenTrialModal }) => {
  const targetGroups = [
    {
      icon: <UserCheck className="w-6 h-6 text-[#FF6B35]" />,
      title: "Principiantes y Sedentarios",
      description: "¿Nunca has pisado un gimnasio o llevas tiempo sin entrenar? Te preparamos una rutina paso a paso y te explicamos cada máquina con paciencia.",
      badge: "Iniciación Guiada",
      bgCard: "bg-white text-slate-900 border-slate-200/80"
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#004E89]" />,
      title: "Mayores y Salud",
      description: "Ejercicios adaptados para ganar movilidad, proteger articulaciones, mejorar la fuerza muscular y la calidad de vida en un ambiente tranquilo.",
      badge: "Salud & Bienestar",
      bgCard: "bg-white text-slate-900 border-slate-200/80"
    },
    {
      icon: <Zap className="w-6 h-6 text-[#FF6B35]" />,
      title: "Control de Peso y Tonificación",
      description: "Combina ejercicios de fuerza guiados con hábitos saludables para perder grasa, ganar energía y verte genial frente al espejo.",
      badge: "Resultados Reales",
      bgCard: "bg-white text-slate-900 border-slate-200/80"
    },
    {
      icon: <Sun className="w-6 h-6 text-[#004E89]" />,
      title: "Turistas y Veraneantes",
      description: "Si estás de vacaciones en Garrucha, Mojácar, Vera Playa o Puerto Rey, entrena sin matrículas ni permanencias con pases de día o semana.",
      badge: "Especial Vacaciones",
      bgCard: "bg-[#FFD166] text-[#004E89] border-4 border-white"
    }
  ];

  return (
    <section id="servicios" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004E89] text-white text-xs font-black uppercase tracking-widest mb-3 shadow-sm">
          <Compass className="w-4 h-4 text-[#FFD166]" />
          <span>Adaptado A Ti</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#004E89] uppercase tracking-tight mb-4">
          UN GIMNASIO PENSADO PARA <br className="hidden sm:inline"/>
          <span className="text-[#FF6B35]">CUALQUIER NIVEL Y EDAD</span>
        </h2>
        <p className="text-slate-700 text-base sm:text-lg font-medium">
          No importa cuál sea tu punto de partida. En GYM SOUTH BEACH GARRUCHA diseñamos la experiencia para que entrenes cómodo y con seguridad desde el primer día.
        </p>
      </motion.div>

      {/* Target Audience Bento Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {targetGroups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className={`rounded-[2.5rem] p-8 border shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between ${group.bgCard}`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                  {group.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-[#004E89] text-white rounded-full">
                  {group.badge}
                </span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-3">
                {group.title}
              </h3>
              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6">
                {group.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Atención personalizada incluida
              </span>
              <span className="font-black uppercase tracking-wider text-[#FF6B35]">100% Amigable</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tourism / Vacation Bento Card (SEO Garrucha, Vera, Mojácar) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="bg-[#004E89] text-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl border border-[#003863] relative overflow-hidden"
      >
        <div className="relative z-10 max-w-2xl">
          <span className="bg-[#FFD166] text-[#004E89] text-xs font-black uppercase px-3.5 py-1.5 rounded-full tracking-wider mb-4 inline-block shadow">
            ☀️ ¿De vacaciones en el Levante Almeriense?
          </span>
          <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
            GIMNASIO CERCA DE MOJÁCAR, VERA Y PUERTO REY
          </h3>
          <p className="text-slate-100 text-sm sm:text-base font-medium leading-relaxed mb-6">
            No dejes tus entrenamientos durante el verano o tus escapadas. Estamos ubicados estratégicamente en Garrucha con fácil acceso y aparcamiento cómodo desde Vera Playa, Mojácar y Puerto Rey.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenTrialModal}
              className="bg-[#FF6B35] hover:bg-[#e05a2b] text-white font-black text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg cursor-pointer"
            >
              Pide Tu Pase De Vacaciones
            </motion.button>
            <a
              href="#ubicacion"
              className="text-white text-xs font-black uppercase tracking-wider underline underline-offset-4 hover:text-[#FFD166] transition-colors"
            >
              Ver mapa de cómo llegar →
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

