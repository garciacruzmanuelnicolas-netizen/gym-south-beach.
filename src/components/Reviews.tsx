import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS_DATA, GYM_INFO } from '../data/gymData';
import { Star, MessageSquareQuote, CheckCircle, ExternalLink } from 'lucide-react';

export const Reviews: React.FC = () => {
  const [filterTag, setFilterTag] = useState<string>('Todos');

  const tags = ['Todos', 'Atención Personal', 'Ambiente Familiar', 'Limpieza', 'Maquinaria', 'Turista / Vacaciones'];

  const filteredReviews = filterTag === 'Todos'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter(r => r.tag === filterTag);

  return (
    <section id="opiniones" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004E89] text-white text-xs font-black uppercase tracking-widest mb-3 shadow-sm">
          <Star className="w-4 h-4 fill-[#FFD166] text-[#FFD166]" />
          <span>Opiniones Reales De Nuestros Socios</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#004E89] uppercase tracking-tight mb-4">
          VALORACIÓN <span className="text-[#FF6B35]">{GYM_INFO.googleRating.toFixed(1)} ★</span> EN GOOGLE
        </h2>
        <p className="text-slate-700 text-base sm:text-lg font-medium">
          Más de {GYM_INFO.googleReviewsCount} reseñas positivas avalan nuestro compromiso diario con cada persona que entrena aquí.
        </p>
      </motion.div>

      {/* Filter tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tags.map((tag) => (
          <motion.button
            key={tag}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilterTag(tag)}
            className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider cursor-pointer transition-all ${
              filterTag === tag
                ? 'bg-[#FF6B35] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tag}
          </motion.button>
        ))}
      </div>

      {/* Reviews Bento Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <AnimatePresence mode="popLayout">
          {filteredReviews.map((review) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -4 }}
              key={review.id}
              className="bg-white text-slate-900 rounded-[2.5rem] p-7 border border-slate-200/80 shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#FFD166]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD166] text-[#FFD166]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#004E89] bg-[#004E89]/10 px-3 py-1 rounded-full">
                    {review.date}
                  </span>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-black uppercase text-xs text-[#004E89] flex items-center gap-1.5">
                    {review.author}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </h4>
                  <p className="text-slate-500 text-[11px] font-semibold">{review.role}</p>
                </div>
                <span className="text-[10px] uppercase font-black text-[#FF6B35] bg-[#FF6B35]/10 px-2.5 py-1 rounded-full">
                  {review.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Google Reviews Direct CTA Bento Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center bg-[#004E89] text-white rounded-[2.5rem] p-6 shadow-lg border border-[#003863]"
      >
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white hover:text-[#FFD166] transition-colors"
        >
          <MessageSquareQuote className="w-5 h-5 text-[#FFD166]" />
          <span>Ver todas las reseñas reales en Google Maps ({GYM_INFO.googleReviewsCount}+)</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
};

