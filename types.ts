
export enum Page {
  Home = "Home",
  Apartment = "L'Appartamento",
  Activities = "Attività Outdoor",
  Gallery = "Galleria",
  Reviews = "Recensioni",
  Contact = "Contatti & Prenotazioni",
  Position = "Posizione",
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  platform?: 'airbnb' | 'booking';
}

export interface Activity {
  id: number;
  category: 'Mare' | 'Terra' | 'Cultura e Gusto';
  title: string;
  description: string;
  image: string;
  images?: string[];
  gpxTrack?: string;
  difficulty: string;
  duration: string;
  attribution?: string;
}

export interface GalleryImage {
  id: number | string;
  category: 'appartamento' | 'panorami' | 'spiagge' | 'outdoor' | 'living' | 'camera' | 'bagno' | 'balcone' | 'marciana_marina' | 'tramonti' | 'pianosa';
  src: string;
  alt: string;
}

export interface Service {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  details?: string;
}

export interface NearbyFeature {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}
