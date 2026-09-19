export type SectionId = 
  | 'inicio' 
  | 'institucional' 
  | 'programas' 
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
  url?: string;
  imageUrl?: string;
  author?: string;
}
