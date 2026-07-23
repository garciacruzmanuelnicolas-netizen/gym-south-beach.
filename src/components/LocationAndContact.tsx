import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GYM_INFO } from '../data/gymData';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Send, Check } from 'lucide-react';

interface LocationAndContactProps {
  onOpenTrialModal: () => void;
}

export const LocationAndContact: React.FC<LocationAndContactProps> = ({ onOpenTrialModal }) => {
  const [quickName, setQuickName] = useState('');
  const [quickQuestion, setQuickQuestion] = useState('');

  const handleQuickWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName.trim()) return;

    const messageText = `Hola GYM SOUTH BEACH GARRUCHA! Soy ${quickName}. ${quickQuestion ? 'Tengo una consulta: ' + quickQuestion : 'Quisiera más información sobre el gimnasio.'}`;
    const url = `https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="ubicacion" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004E89] text-white text-xs font-black uppercase tracking-widest mb-3 shadow-sm">
          <MapPin className="w-4 h-4 text-[#FFD166]" />
          <span>Garrucha (Almería)</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#004E89] uppercase tracking-tight mb-4">
          VEN A CONOCERNOS EN <span className="text-[#FF6B35]">GARRUCHA</span>
        </h2>
        <p className="text-slate-700 text-base sm:text-lg font-medium">
          Ubicados en zona céntrica y accesible en Garrucha. A pocos minutos en coche o transporte desde Vera, Mojácar y Puerto Rey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Info Column (Address, Hours, Quick Contacts) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          
          {/* Location Card */}
          <div className="bg-white rounded-[2.5rem] p-7 border border-slate-200/80 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF6B35] text-white flex items-center justify-center shrink-0 font-bold">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black uppercase text-[#004E89] text-lg">Dirección</h3>
                <p className="text-slate-700 text-xs sm:text-sm font-semibold mt-1">{GYM_INFO.address}</p>
                <p className="text-slate-500 text-xs mt-1">Garrucha, Almería (Cerca de Vera, Mojácar y Puerto Rey)</p>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(GYM_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#004E89] hover:text-[#FF6B35] underline"
              >
                <Navigation className="w-4 h-4" />
                <span>Ruta en Google Maps</span>
              </a>
            </div>
          </div>

          {/* Schedule Card */}
          <div className="bg-white rounded-[2.5rem] p-7 border border-slate-200/80 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#004E89] text-white flex items-center justify-center shrink-0 font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black uppercase text-[#004E89] text-lg">Horario de Apertura</h3>
                <p className="text-slate-500 text-xs">Entrena cómodo con amplitud de horario</p>
              </div>
            </div>

            <div className="space-y-2 border-t border-slate-100 pt-3 text-sm">
              {GYM_INFO.schedule.map((s, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="font-bold text-slate-700">{s.days}</span>
                  <span className="font-black text-[#004E89] bg-sky-50 px-3 py-1 rounded-full text-xs">{s.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Contact Button */}
          <div className="bg-[#FFD166] text-[#004E89] rounded-[2.5rem] p-7 border-4 border-white shadow-md">
            <h4 className="font-black uppercase text-lg mb-2 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 fill-[#004E89] text-[#004E89]" />
              <span>¿Hablas directamente con los dueños?</span>
            </h4>
            <p className="text-[#004E89]/90 text-xs font-bold mb-4">
              Respondemos tus dudas en cuestión de minutos por WhatsApp sin ningún compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href={`https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent('Hola GYM SOUTH BEACH GARRUCHA!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#004E89] hover:bg-[#003863] text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-full text-center inline-flex items-center justify-center gap-1.5 shadow cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#FFD166]" />
                <span>678 318 615</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href={`https://wa.me/${GYM_INFO.whatsappNumber2}?text=${encodeURIComponent('Hola GYM SOUTH BEACH GARRUCHA!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#004E89] hover:bg-[#003863] text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-full text-center inline-flex items-center justify-center gap-1.5 shadow cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#FFD166]" />
                <span>678 318 621</span>
              </motion.a>
            </div>
          </div>

        </motion.div>

        {/* Interactive Map & Quick Contact Form Column */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          
          {/* Interactive Map Frame */}
          <div className="bg-[#004E89] rounded-[2.5rem] overflow-hidden shadow-lg relative h-64 sm:h-80 border-4 border-white">
            <iframe
              title="Ubicación GYM SOUTH BEACH GARRUCHA"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(GYM_INFO.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
            <div className="absolute bottom-3 right-3 z-10">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(GYM_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#004E89] hover:bg-[#003863] text-white font-black text-[11px] uppercase tracking-wider px-4 py-2 rounded-full shadow border border-white/20 inline-flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5 text-[#FFD166]" />
                <span>Abrir en Google Maps</span>
              </a>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-white rounded-[2.5rem] p-7 sm:p-9 border border-slate-200/80 shadow-md">
            <h3 className="text-2xl font-black uppercase tracking-tight text-[#004E89] mb-2">
              ESCRÍBENOS TU CONSULTA RÁPIDA
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-medium mb-6">
              Déjanos tu nombre y lo que necesitas saber. Te responderemos directamente por WhatsApp.
            </p>

            <form onSubmit={handleQuickWhatsAppSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-black text-[#004E89] uppercase tracking-wider mb-1">
                  Tu Nombre *
                </label>
                <input
                  type="text"
                  required
                  value={quickName}
                  onChange={(e) => setQuickName(e.target.value)}
                  placeholder="Ej: Laura Martínez"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004E89] text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-[#004E89] uppercase tracking-wider mb-1">
                  ¿Qué deseas saber? (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={quickQuestion}
                  onChange={(e) => setQuickQuestion(e.target.value)}
                  placeholder="Ej: Quisiera saber el horario de mañana o precios de pase semanal para vacaciones..."
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004E89] text-sm font-medium"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full sm:w-auto bg-[#FF6B35] hover:bg-[#e05a2b] text-white font-black text-xs uppercase tracking-wider px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 shadow cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar a WhatsApp</span>
                </motion.button>

                <button
                  type="button"
                  onClick={onOpenTrialModal}
                  className="text-xs font-black uppercase text-[#004E89] hover:underline cursor-pointer"
                >
                  O reservar clase gratis →
                </button>
              </div>
            </form>
          </div>

        </motion.div>

      </div>

    </section>
  );
};

