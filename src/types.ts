export type SectionId = 
  | 'inicio' 
  | 'institucional' 
  | 'programas' 
  | 'catalogo' 
  | 'tienda' 
  | 'laboral' 
  | 'normativas' 
  | 'prensa' 
  | 'contacto';

export interface AccessibilitySettings {
  fontSize: 'normal' | 'large' | 'xlarge';
  contrast: 'default' | 'high-contrast-dark' | 'high-contrast-light' | 'monochrome';
  dyslexiaFont: boolean;
  textSpacing: boolean;
  highlightLinks: boolean;
  readingMask: boolean;
  speechRate: number;
}

export interface SupportItem {
  id: string;
  name: string;
  category: 'Sillas de Ruedas' | 'Bastones y Guías' | 'Muletas y Andadores' | 'Accesorios Posturales';
  description: string;
  status: 'Disponible para préstamo' | 'En reacondicionamiento' | 'En uso (lista de espera)';
  availableCount: number;
  condition: 'Excelente' | 'Muy bueno' | 'Reacondicionado a nuevo';
  image: string;
}

export interface ArtisanProduct {
  id: string;
  title: string;
  artisanGroup: string;
  category: 'Textil & Bolsas' | 'Cerámica & Velas' | 'Papelería & Encuadernación' | 'Merchandising FAPPCODI';
  price: number;
  description: string;
  image: string;
  inStock: boolean;
}

export interface JobPosting {
  id: string;
  title: string;
  company: string;
  location: string;
  workMode: 'Presencial' | 'Híbrido' | 'Remoto';
  area: string;
  description: string;
  adaptations: string[];
  publishedDate: string;
}

export interface ProvinceCUDInfo {
  id: string;
  name: string;
  region: 'Centro' | 'NOA' | 'NEA' | 'Cuyo' | 'Patagonia';
  organism: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  instructions: string;
}

export interface PressItem {
  id: string;
  title: string;
  media: string;
  date: string;
  excerpt: string;
  fullText: string;
  category: 'Entrevista' | 'Inclukiosco' | 'Institucional' | 'Inclusión Laboral';
  highlightQuote?: string;
  linkText?: string;
}
