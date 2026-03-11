import React, { useState } from 'react';
import { Page } from '../types';
import { APARTMENT_IMAGES, SERVICES_LIST } from '../constants';
import SectionDetail from './SectionDetail';
import NearbyFeatures from './NearbyFeatures';

// 1. Filtra le immagini per ogni categoria
const livingImages = APARTMENT_IMAGES.filter(img => img.category === 'living');
const bedroomImages = APARTMENT_IMAGES.filter(img => img.category === 'camera');
const bathroomImages = APARTMENT_IMAGES.filter(img => img.category === 'bagno');
const balconyImages = APARTMENT_IMAGES.filter(img => img.category === 'balcone');

interface ApartmentProps {
  onNavigate: (page: Page) => void;
}

const Apartment: React.FC<ApartmentProps> = ({ onNavigate }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-20">
        <header className="text-center mb-20">
           <h2 className="text-5xl font-serif text-gray-800">Dettagli dell'Appartamento</h2>
           <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
             Scopri ogni ambiente nel dettaglio, un nido di comfort e stile pensato per il tuo soggiorno.
           </p>
        </header>

        <main className="space-y-24">
          <SectionDetail title="Living Open Space con Cucina Moderna" images={livingImages} onImageClick={handleImageClick}>
            <p>
              Un invitante spazio living dove la zona giorno si fonde con una moderna cucina a vista. L'area offre un comodo divano (utilizzabile come <strong>letto aggiuntivo</strong>), un pratico tavolo da pranzo e una parete attrezzata con TV.
            </p>
            <p>
              L'ambiente è <strong>climatizzato</strong> e luminoso, con accesso diretto a un <strong>balcone attrezzato</strong> per godersi l'esterno.
            </p>
          </SectionDetail>

          <SectionDetail title="Camera Matrimoniale: Comfort e Praticità" images={bedroomImages} onImageClick={handleImageClick} reverseLayout={true}>
             <p>
              Una rilassante camera matrimoniale con un funzionale <strong>ponte letto</strong> per ottimizzare lo spazio. La stanza è inondata di luce naturale grazie all'accesso al <strong>balcone privato</strong> con vista sul cortile.
            </p>
            <p>
              L'<strong>aria condizionata</strong> e la <strong>pompa di calore</strong> garantiscono un clima ideale in ogni stagione.
            </p>
          </SectionDetail>

          <SectionDetail title="Bagno Compatto e Completo" images={bathroomImages} onImageClick={handleImageClick}>
            <p>
              Il bagno include un comodo <strong>box doccia in vetro</strong>, lavabo, WC e bidet. Le pareti e il pavimento piastrellati rendono la manutenzione semplice. Un mobiletto a specchio e un <strong>asciugacapelli</strong> completano la dotazione.
            </p>
          </SectionDetail>

          <SectionDetail title="Il Tuo Angolo Relax all’Aperto" images={balconyImages} onImageClick={handleImageClick} reverseLayout={true}>
            <p>
              Direttamente accessibile dalla zona giorno, il delizioso balcone è lo spazio ideale per iniziare la giornata con una colazione all’aperto o per rilassarsi la sera. È attrezzato con un pratico <strong>tavolino</strong> e sedie e offre un piacevole affaccio sul giardino condominiale. Goditi un momento di tranquillità all’aria fresca. È a disposizione degli ospiti un <strong>tendone</strong> per il sole.
            </p>
          </SectionDetail>

          <section>
            <h3 className="text-4xl font-serif text-center text-gray-800 mb-12">
              Servizi Inclusi
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 max-w-5xl mx-auto">
              {SERVICES_LIST.map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <service.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">{service.text}</h4>
                    {service.details && (
                      <p className="text-sm text-gray-500">{service.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-teal-50 border border-teal-100 rounded-2xl p-8 max-w-4xl mx-auto shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex-shrink-0 bg-teal-100 p-4 rounded-full text-teal-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-teal-900 mb-2">Perfetto per gli Escursionisti</h4>
                  <p className="text-teal-800">
                    Sappiamo cosa serve dopo una lunga giornata sui sentieri: approfitta della <strong>Lavatrice</strong>, del <strong>Microonde</strong> e del riscaldamento con <strong>Pompa di calore</strong> per rimetterti in sesto. Inoltre, il Supermercato Conad e la storica Gastronomia locale sono a pochi passi per un rapido rifornimento!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <NearbyFeatures />

        </main>
      </div>

      <section className="text-center py-20 bg-gray-100">
        <div className="container mx-auto">
          <h3 className="text-4xl font-serif text-gray-800">Pronto a prenotare?</h3>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Verifica le date disponibili e inviaci una richiesta. Ti risponderemo al più presto!
          </p>
          <button
            onClick={() => onNavigate(Page.Contact)}
            className="mt-8 px-8 py-4 bg-teal-600 text-white font-bold text-lg rounded-full hover:bg-teal-700 transition-colors shadow-lg"
          >
            Verifica disponibilità
          </button>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Ingrandimento" 
              className="object-contain max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            />
            <button 
              onClick={closeModal}
              className="absolute top-0 right-0 -mt-4 -mr-4 bg-white text-black rounded-full p-2 text-2xl leading-none hover:bg-gray-200"
              aria-label="Chiudi"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apartment;
