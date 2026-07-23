import { Review, PricingPlan, FacilityItem } from '../types';
import facilityImg1 from '../assets/images/gym_facility_garrucha_1784783171998.jpg';
import strengthMachineryImg from '../assets/images/strength_machinery_gym_1784802384662.jpg';
import heroGymImg from '../assets/images/hero_gym_garrucha_1784783147030.jpg';

export const GYM_INFO = {
  name: "GYM SOUTH BEACH GARRUCHA",
  brandSubtitle: "TEAM SANDU - SOUTH BEACH GYM",
  websiteUrl: "https://gym-south-beach-garrucha.com",
  domainDisplay: "gym-south-beach-garrucha.com",
  location: "Garrucha, Almería (España)",
  nearbyAreas: ["Vera", "Mojácar", "Puerto Rey", "Vera Playa"],
  googleRating: 5.0,
  googleReviewsCount: 147,
  phone: "+34 678 318 621",
  phone1: "678 318 621",
  whatsappNumber: "34678318621",
  address: "C. del Mar, 1, 04630 Garrucha, Almería",
  schedule: [
    { days: "Lunes a Viernes", hours: "08:00 - 22:00" },
    { days: "Sábados", hours: "09:00 - 14:00" },
    { days: "Domingos y Festivos", hours: "Consultar según temporada" }
  ]
};

export const REVIEWS_DATA: Review[] = [
  {
    id: "1",
    author: "María Carmen R.",
    role: "Socia desde hace 2 años",
    rating: 5,
    date: "Hace 1 semana",
    comment: "El mejor gimnasio de Garrucha sin duda. El trato de los dueños es inmejorable, siempre pendientes de que hagas bien los ejercicios para no lesionarte. Y el ambiente es como estar en familia.",
    tag: "Atención Personal"
  },
  {
    id: "2",
    author: "Carlos M.",
    role: "Turista en Garrucha (Verano)",
    rating: 5,
    date: "Hace 2 semanas",
    comment: "Vengo a entrenar durante mis vacaciones en Garrucha y Mojácar. Tienen pases semanales genial de precio. La maquinaria está súper cuidada y el aire acondicionado se agradece muchísimo en verano.",
    tag: "Turista / Vacaciones"
  },
  {
    id: "3",
    author: "Javier G.",
    role: "Socio habitualmente",
    rating: 5,
    date: "Hace 1 mes",
    comment: "Mucha variedad de máquinas, todo limpísimo y nunca hay aglomeraciones agobiantes como en los gimnasios de cadena. Entrenas cómodo y a tu ritmo.",
    tag: "Limpieza"
  },
  {
    id: "4",
    author: "Ana Isabel P.",
    role: "Principiante",
    rating: 5,
    date: "Hace 1 mes",
    comment: "Empecé con mucho reparo porque nunca había ido a un gimnasio. Me ayudaron desde el minuto uno a preparar una rutina adaptada a mí. Hoy no cambio este gimnasio por nada.",
    tag: "Ambiente Familiar"
  },
  {
    id: "5",
    author: "David L.",
    role: "Residente en Vera",
    rating: 5,
    date: "Hace 2 meses",
    comment: "Vivo en Vera pero vengo a South Beach a Garrucha porque merece la pena 100%. Equipos continuamente renovados y muy buen ambiente para entrenar duro.",
    tag: "Maquinaria"
  }
];

export const EMS_BENEFITS = [
  { id: 'fuerza', title: 'MÁS FUERZA Y MASA MUSCULAR', description: 'Estimulación profunda de fibras musculares' },
  { id: 'grasa', title: 'QUEMA DE GRASA', description: 'Activación metabólica acelerada' },
  { id: 'postura', title: 'MEJORA POSTURA', description: 'Fortalecimiento de core y zona lumbar' },
  { id: 'recuperacion', title: 'RECUPERACIÓN RÁPIDA', description: 'Regeneración muscular sin sobrecarga articular' },
];

export const EMS_PRICING_PLANS = [
  {
    id: "1-sesion",
    title: "1 SESIÓN",
    subtitle: "Electroestimulación Muscular",
    price: "40€",
    period: "1 sesión",
    badge: undefined,
    discountTag: undefined,
    features: [
      "1 Sesión de Entrenamiento EMS (20 min)",
      "Equipamiento técnico incluido",
      "Entrenador personal durante la sesión",
      "Valoración inicial rápida"
    ],
    ctaText: "RESERVAR 1 SESIÓN"
  },
  {
    id: "4-sesiones",
    title: "4 SESIONES",
    subtitle: "Bono Mensual Básico",
    price: "150€",
    period: "bono 4 sesiones",
    badge: "AHORA 10€",
    discountTag: "AHORA 10€",
    features: [
      "4 Sesiones de EMS (1 por semana)",
      "Cambia tu cuerpo en 20 min/semana",
      "Seguimiento de evolución física",
      "Horarios adaptables a tu agenda"
    ],
    ctaText: "RESERVAR 4 SESIONES"
  },
  {
    id: "8-sesiones",
    title: "8 SESIONES",
    subtitle: "Bono Recomendado (2x20 min/sem)",
    price: "250€",
    period: "bono 8 sesiones",
    badge: "AHORA 70€",
    discountTag: "AHORA 70€",
    popular: true,
    features: [
      "8 Sesiones de EMS (2 por semana)",
      "Resultados en tiempo récord",
      "Máxima quema de grasa y tonificación",
      "Ahorra 70€ respecto a sesión suelta"
    ],
    ctaText: "RESERVAR 8 SESIONES"
  },
  {
    id: "10-sesiones",
    title: "10 SESIONES",
    subtitle: "Pack Máximo Ahorro",
    price: "280€",
    period: "bono 10 sesiones",
    badge: "MEJOR PRECIO",
    discountTag: "MEJOR PRECIO",
    popular: true,
    features: [
      "10 Sesiones completas de EMS",
      "Mejor precio por sesión (sólo 28€/sesión)",
      "Plan nutricional y postural básico",
      "Ahorro máximo y preferencia de agenda"
    ],
    ctaText: "RESERVAR 10 SESIONES"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "pase-dia",
    title: "Pase Día / Vacaciones",
    subtitle: "Ideal para turistas y estancias en Garrucha, Vera o Mojácar",
    price: "Consultar",
    period: "Acceso puntual / bono semanal",
    badge: "Especial Turistas",
    features: [
      "Sin matrícula ni permanencia",
      "Acceso a todas las instalaciones",
      "Asesoramiento inicial sobre las máquinas",
      "Climatización con aire acondicionado",
      "Uso de vestuarios y duchas limpias"
    ],
    ctaText: "Consultar Pase de Vacaciones"
  },
  {
    id: "mensual",
    title: "Cuota Mensual",
    subtitle: "Para socios habituales y residentes",
    price: "Tarifa Cercana",
    period: "/ mes",
    popular: true,
    badge: "Más Popular",
    features: [
      "Acceso ilimitado en horario de apertura",
      "Rutina de entrenamiento personalizada incluida",
      "Seguimiento y corrección constante por los dueños",
      "Acceso a maquinaria de fuerza y cardio renovada",
      "Sin masificaciones ni esperas largas",
      "Trato familiar y ambiente motivador"
    ],
    ctaText: "Empezar Este Mes"
  },
  {
    id: "trimestral",
    title: "Bono Ahorro (Trimestral/Anual)",
    subtitle: "Premia tu constancia y compromiso con tu salud",
    price: "Descuento Especial",
    period: "/ periodo",
    features: [
      "Precio mensual reducida al máximo",
      "Revisiones periódicas de rutina de entrenamiento",
      "Congelación de cuota por vacaciones disponible",
      "Prioridad en eventos de la comunidad Gym South Beach"
    ],
    ctaText: "Preguntar por el Bono Ahorro"
  }
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: "f1",
    title: "Maquinaria de Fuerza Renovada",
    description: "Equipamiento de musculación completo con renovación continua para trabajar cada grupo muscular de forma precisa y segura.",
    category: "maquinaria",
    imageUrl: strengthMachineryImg
  },
  {
    id: "f2",
    title: "Zona de Peso Libre y Mancuernas",
    description: "Mancuernas de todos los pesajes, bancos regulables, racks y barras olímpicas en perfecto estado de mantenimiento.",
    category: "maquinaria",
    imageUrl: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "f3",
    title: "Climatización y Aire Acondicionado",
    description: "Espacio con excelente ventilación y climatización regulada para entrenar con el máximo confort incluso en los días más calurosos de verano.",
    category: "climatizacion",
    imageUrl: heroGymImg
  },
  {
    id: "f4",
    title: "Espacio Sin Masificaciones",
    description: "Un ambiente diseñado para que entrenes tranquilo sin tener que hacer colas interminables para usar tus máquinas preferidas.",
    category: "espacio",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
  }
];

export const MARKETING_PRESETS = [
  {
    title: "📢 Anuncio de Bienvenida / Principiantes",
    platform: "Instagram / Facebook",
    contentType: "Publicación AIDA para principiantes",
    topic: "Vence el miedo a empezar en el gimnasio con nuestro trato personalizado",
    targetAudience: "Personas que jamás han ido al gimnasio o tienen sobrepeso"
  },
  {
    title: "☀️ Campaña Especial Turistas (Garrucha / Mojácar / Vera)",
    platform: "Instagram & Meta Ads",
    contentType: "Post de captación para veraneantes",
    topic: "No rompas tu rutina en vacaciones con nuestros pases de día y semana",
    targetAudience: "Turistas alojados en Garrucha, Vera, Mojácar y Puerto Rey"
  },
  {
    title: "⭐ Respuesta a Reseña Positiva de Google",
    platform: "Google Business / Reseñas",
    contentType: "Respuesta cercana y agradecida",
    topic: "Agradecer a un cliente su reseña destacando el ambiente familiar",
    targetAudience: "Clientes habituales que han dejado 5 estrellas"
  },
  {
    title: "🎬 Guión de Reel / TikTok",
    platform: "Reels / TikTok",
    contentType: "Guión dinámico con gancho inicial",
    topic: "3 razones por las que en Gym South Beach Garrucha te sientes como en casa",
    targetAudience: "Jóvenes y adultos locales"
  }
];
