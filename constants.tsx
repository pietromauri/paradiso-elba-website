
import React from 'react';
import { Page, Review, Activity, GalleryImage } from './types';

export const NAV_LINKS = [
  Page.Home,
  Page.Apartment,
  Page.Position,
  Page.Activities,
  Page.Gallery,
  Page.Reviews,
  Page.Contact,
];

export const REVIEWS: Review[] = [
  { id: 1, author: 'Marco & Giulia', rating: 5, text: "Un soggiorno indimenticabile! L'appartamento è moderno, pulito e con una vista mozzafiato. La posizione è perfetta per esplorare l'isola.", platform: 'airbnb' },
  { id: 2, author: 'Stefan from Germany', rating: 5, text: "Perfect getaway. The apartment had everything we needed. The terrace is a dream. We will be back!", platform: 'booking' },
  { id: 3, author: 'Famiglia Rossi', rating: 4, text: "Bellissima vacanza in famiglia. A due passi dalla spiaggia, i bambini si sono divertiti tantissimo. Consigliato." },
  { id: 4, author: 'Claire et Jean', rating: 5, text: "Un petit coin de paradis. Calme, sérénité et la mer à perte de vue. L'accueil était chaleureux." },
];

export const ACTIVITIES: Activity[] = [
  { id: 1, category: 'Mare', title: 'Snorkeling a Sant\'Andrea', description: 'Scopri i fondali cristallini e la ricca vita marina delle piscine naturali.', image: '/images/attivita/Snorkeling.png', difficulty: 'Facile', duration: '2-3 ore' },
  { id: 2, category: 'Mare', title: 'Kayak alla scoperta delle Grotte', description: 'Pagaia lungo la costa per esplorare grotte marine nascoste e spiagge accessibili solo via mare.', image: '/images/attivita/kayak.png', difficulty: 'Medio', duration: 'Mezza giornata' },
  { id: 3, category: 'Terra', title: 'Trekking sul Monte Capanne', description: 'Raggiungi la vetta più alta dell\'Elba per una vista a 360 gradi sull\'arcipelago toscano.', image: '/images/attivita/monte_capanne.png', difficulty: 'Impegnativo', duration: '4-5 ore' },
  { id: 4, category: 'Terra', title: 'Itinerario Capoliveri Bike Park', description: 'Percorri gli antichi sentieri dei minatori tra panorami selvaggi e resti di archeologia industriale.', image: '/images/attivita/Generated Image September 14, 2025 - 11_10PM.png', difficulty: 'Medio', duration: '3 ore' },
  { id: 5, category: 'Cultura e Gusto', title: 'Degustazione di Aleatico', description: 'Visita una cantina locale per assaggiare il famoso vino passito dell\'Elba, accompagnato da prodotti tipici.', image: '/images/attivita/aleatico elba.png', difficulty: 'Facile', duration: '2 ore' },
  { id: 6, category: 'Cultura e Gusto', title: 'Visita al borgo di Capoliveri', description: 'Perditi tra i vicoli caratteristici di uno dei borghi più affascinanti dell\'isola, ricco di storia e botteghe artigiane.', image: '/images/attivita/1443px-Capoliveri_Elbe_Elba.jpg', difficulty: 'Facile', duration: 'Mezza giornata', attribution: 'Di Gregory Zeier - Opera propria, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=2591702' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  // Outdoor
  { id: 5, category: 'outdoor', src: 'https://picsum.photos/id/20/800/600', alt: 'Sentiero di trekking con vista sul mare' },
  { id: 9, category: 'outdoor', src: 'https://picsum.photos/id/234/800/600', alt: 'Persona in kayak in una grotta marina' },
  { id: 17, category: 'outdoor', src: 'https://picsum.photos/id/404/800/600', alt: 'Mountain bike su un sentiero costiero' },
  { id: 18, category: 'outdoor', src: 'https://picsum.photos/id/405/800/600', alt: 'Passeggiata in un bosco di lecci' },

  // Panorami
  { id: 2, category: 'panorami', src: '/images/gallery/panorami/elba-porto-ferraio.webp', alt: 'Panorama di Portoferraio' },
  { id: 6, category: 'panorami', src: '/images/gallery/panorami/isola-elba.jpg', alt: 'Panorama dell\'Isola d\'Elba' },
  { id: 11, category: 'panorami', src: '/images/gallery/panorami/isola-delba-portoferraio-hd.jpg', alt: 'Portoferraio HD' },

  // Spiagge
  { id: 3, category: 'spiagge', src: '/images/gallery/spiagge/isola-delba-5103592_1280.jpg', alt: 'Spiaggia dell\'Isola d\'Elba' },
  { id: 8, category: 'spiagge', src: '/images/gallery/spiagge/isola-elba_spiaggia-bianca.jpeg', alt: 'Spiaggia bianca dell\'Isola d\'Elba' },
  { id: 12, category: 'spiagge', src: '/images/gallery/spiagge/capraia.png', alt: 'Spiaggia di Capraia' },
  { id: 15, category: 'spiagge', src: '/images/gallery/spiagge/capraia_isola.jpg', alt: 'Isola di Capraia' },
  { id: 16, category: 'spiagge', src: '/images/gallery/spiagge/fetovaia-isola-delba-1920x1280.jpg', alt: 'Spiaggia di Fetovaia' },
  { id: 19, category: 'spiagge', src: '/images/gallery/spiagge/Generated Image September 17, 2025 - 10_11PM.png', alt: 'Spiaggia' },
  { id: 20, category: 'spiagge', src: '/images/gallery/spiagge/Generated Image September 17, 2025 - 10_10PM.png', alt: 'Spiaggia' },

  // Tramonti
  { id: 21, category: 'tramonti', src: '/images/gallery/tramonti/Generated Image September 17, 2025 - 9_57PM.png', alt: 'Tramonto' },
  { id: 22, category: 'tramonti', src: '/images/gallery/tramonti/Generated Image September 17, 2025 - 9_50PM.png', alt: 'Tramonto' },
];

export const Icons = {
  Wifi: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.555a5.5 5.5 0 017.778 0M12 20.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm-4.444-4.444a9.5 9.5 0 0113.436 0" /></svg>,
  AirConditioning: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM12 19.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM4.5 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM18 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM6.343 6.343a.75.75 0 011.06 0l1.061 1.06a.75.75 0 01-1.06 1.061l-1.061-1.06a.75.75 0 010-1.06zM15.535 15.535a.75.75 0 011.06 0l1.061 1.06a.75.75 0 01-1.06 1.061l-1.061-1.06a.75.75 0 010-1.06zM8.465 15.535a.75.75 0 01-1.06 0l-1.061-1.06a.75.75 0 011.06-1.061l1.061 1.06a.75.75 0 010 1.06zM17.657 6.343a.75.75 0 01-1.06 0l-1.061 1.06a.75.75 0 01-1.06-1.061l1.06-1.06a.75.75 0 011.061 0z" /></svg>,
  Parking: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 6.75h16.5M3.75 17.25h16.5" /></svg>,
  Tv: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17.25v-10.5a2.25 2.25 0 012.25-2.25h1.5A2.25 2.25 0 0115 6.75v10.5m-6 0a2.25 2.25 0 002.25 2.25h1.5A2.25 2.25 0 0015 17.25m-6 0h6m4.5-3.375c.621 0 1.125-.504 1.125-1.125s-.504-1.125-1.125-1.125-1.125.504-1.125 1.125.504 1.125 1.125 1.125z" /></svg>,
  Kitchen: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
  Bed: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" /></svg>,
};
