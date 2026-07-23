import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, MessageCircle, Sparkles, User, Phone, Clock } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('Mañana (08:00 - 13:00)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setLoading(true);
    try {
      // Call Express server endpoint
      await fetch('/api/free-trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, preferredTime, message: notes })
      });
      setLoading(false);
      setSubmitted(true);

      // Open formatted WhatsApp link directly
      const text = encodeURIComponent(
        `Hola GYM SOUTH BEACH GARRUCHA! Soy ${name}. Quisiera reservar mi clase de prueba gratuita. Teléfono: ${phone}. Horario preferido: ${preferredTime}. ${notes ? 'Notas: ' + notes : ''}`
      );
      const waUrl = `https://wa.me/${GYM_INFO.whatsappNumber}?text=${text}`;
      
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 600);
    } catch (err) {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-[2.5rem] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 overflow-hidden z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                {/* Modal Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#004E89]/10 text-[#004E89] text-xs font-black uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF6B35]" />
                    <span>100% Gratis y Sin Compromiso</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#004E89] uppercase tracking-tight">
                    Reserva Tu Clase Gratis
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium mt-1">
                    Ven a conocer GYM SOUTH BEACH GARRUCHA, prueba las instalaciones y habla directamente con los propietarios.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-black text-[#004E89] uppercase tracking-wider mb-1 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#FF6B35]" />
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej: Antonio García"
                      className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#004E89]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-[#004E89] uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-[#FF6B35]" />
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ej: 678 31 86 21"
                      className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#004E89]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-[#004E89] uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#FF6B35]" />
                      Horario Preferido
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#004E89] bg-white"
                    >
                      <option value="Mañana (08:00 - 13:00)">Mañana (08:00 - 13:00)</option>
                      <option value="Tarde (16:00 - 19:00)">Tarde (16:00 - 19:00)</option>
                      <option value="Noche (19:00 - 22:00)">Noche (19:00 - 22:00)</option>
                      <option value="Sábado Por la Mañana">Sábado Por la Mañana</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-[#004E89] uppercase tracking-wider mb-1">
                      ¿Alguna nota u objetivo? (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ej: Soy principiante, o estoy de vacaciones..."
                      className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#004E89]"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#FF6B35] hover:bg-[#e05a2b] text-white font-black py-3.5 rounded-full shadow-lg text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <span>Procesando...</span>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Reservar Mi Clase Gratis Por WhatsApp</span>
                      </>
                    )}
                  </motion.button>

                  <p className="text-[11px] text-center text-slate-400 font-medium mt-2">
                    🔒 Tus datos solo se utilizarán para coordinar tu visita. Cero spam.
                  </p>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#004E89] uppercase tracking-tight">
                  ¡Solicitud Enviada Con Éxito!
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-sm mx-auto">
                  Se ha abierto WhatsApp para que confirmes directamente con los dueños tu día y hora de entrenamiento gratuito. ¡Te esperamos en GYM SOUTH BEACH GARRUCHA!
                </p>
                <button
                  onClick={handleReset}
                  className="bg-[#004E89] text-white font-black px-6 py-2.5 rounded-full text-xs uppercase tracking-wider hover:bg-[#003863] cursor-pointer"
                >
                  Volver al sitio web
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
