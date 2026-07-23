export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  tag: 'Ambiente Familiar' | 'Atención Personal' | 'Limpieza' | 'Maquinaria' | 'Turista / Vacaciones';
}

export interface PricingPlan {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  badge?: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  category: 'maquinaria' | 'climatizacion' | 'espacio' | 'cardio';
  imageUrl: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  email?: string;
  preferredTime?: string;
  interest?: string;
  notes?: string;
}

export interface MarketingGenerationRequest {
  contentType: string;
  platform: string;
  topic: string;
  targetAudience: string;
}
