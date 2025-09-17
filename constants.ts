import { GalleryImage, Service, NearbyFeature } from './types';
import WifiIcon from './components/icons/WifiIcon';
import ParkingIcon from './components/icons/ParkingIcon';
import CheckmarkIcon from './components/icons/CheckmarkIcon';
import SnowflakeIcon from './components/icons/SnowflakeIcon';
import TvIcon from './components/icons/TvIcon';
import ThermometerIcon from './components/icons/ThermometerIcon';
import UtensilsIcon from './components/icons/UtensilsIcon';
import MapPinIcon from './components/icons/MapPinIcon';
import HikingIcon from './components/icons/HikingIcon';
import StorefrontIcon from './components/icons/StorefrontIcon';
import WaveIcon from './components/icons/WaveIcon';
import WashingMachineIcon from './components/icons/WashingMachineIcon';
import DishwasherIcon from './components/icons/DishwasherIcon';



export const APARTMENT_IMAGES: GalleryImage[] = [
  // --- Immagini Soggiorno / Living ---
  { id: 'liv1', src: '/images/apartment/living-1.jpeg', alt: 'Soggiorno con divano letto e vista', category: 'living' },
  { id: 'liv2', src: '/images/apartment/living-2.jpeg', alt: 'Angolo cottura moderno e funzionale', category: 'living' },
  { id: 'liv3', src: '/images/apartment/living-3.jpeg', alt: 'Vista del soggiorno dalla cucina', category: 'living' },
  { id: 'liv4', src: '/images/apartment/living-4.jpeg', alt: 'Parete attrezzata con TV e tavolo', category: 'living' },
  // --- Immagini Camera da Letto ---
  { id: 'cam1', src: '/images/apartment/camera-1.jpeg', alt: 'Camera matrimoniale con ponte letto', category: 'camera' },
  { id: 'cam2', src: '/images/apartment/camera-2.jpeg', alt: 'Vista dalla porta della camera da letto', category: 'camera' },
  { id: 'cam3', src: '/images/apartment/camera-3.jpeg', alt: 'Comò e specchio della camera', category: 'camera' },
  { id: 'cam4', src: '/images/apartment/camera-4.jpeg', alt: 'Decorazione a tema marino', category: 'camera' },
  // --- Immagini Bagno ---
  { id: 'bag1', src: '/images/apartment/bagno-1.jpeg', alt: 'Bagno completo con box doccia in vetro', category: 'bagno' },
  // --- Immagini Balcone ---
  // { id: 'bal1', src: '/images/apartment/balcone-1.jpeg', alt: 'Balcone con tavolino e sedie', category: 'balcone' },
  { id: 'bal2', src: '/images/apartment/balcone-2.png', alt: 'Vista dal balcone', category: 'balcone' },,
  { id: 'bal3', src: '/images/apartment/balcone-3.png', alt: 'Dettaglio del balcone', category: 'balcone' },
];

export const SERVICES_LIST: Service[] = [
  { icon: WifiIcon, text: 'WiFi' },
  { icon: ParkingIcon, text: 'Parcheggio privato' },
  { icon: WashingMachineIcon, text: 'Lavatrice' },,
  { icon: CheckmarkIcon, text: 'Stoviglie e Pentole' },
  { icon: SnowflakeIcon, text: 'Aria Condizionata' },
  { icon: TvIcon, text: 'TV' },
  { icon: DishwasherIcon, text: 'Lavastoviglie' },,
  { icon: CheckmarkIcon, text: 'Balcone Attrezzato' },
  { icon: ThermometerIcon, text: 'Riscaldamento' },
  { icon: UtensilsIcon, text: 'Cucina Attrezzata', details: '(Piano cottura a gas, Frigorifero con congelatore)' },
  { icon: CheckmarkIcon, text: 'Microonde' },
  { icon: CheckmarkIcon, text: 'Prodotti Base Pulizia' },
];

export const NEARBY_FEATURES: NearbyFeature[] = [
  {
    icon: MapPinIcon,
    title: "Posizione Strategica",
    description: "A soli 200m dalla spiaggia di sabbia di Marciana Marina e 5 min a piedi dalle spiagge Fenicia/Feniccetta."
  },
  {
    icon: HikingIcon,
    title: "Hiking",
    description: "Numerosi sentieri escursionistici (per ogni livello) sono a pochi passi!"
  },
  {
    icon: StorefrontIcon,
    title: "Gastronomia locale e supermercato sotto casa",
    description: "La gastronomia locale 'Elba di Gusto' sotto casa e un punto Conad City a 2 minuti a piedi!"
  },
  {
    icon: WaveIcon,
    title: "Spiaggia",
    description: "A soli 200m dalla spiaggia di sabbia di Marciana Marina e 5 min a piedi dalle spiagge Fenicia/Feniccetta."
  }
];