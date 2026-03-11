
import React, { useState, useEffect } from 'react';
import { Page, Review } from '../types';
import { REVIEWS } from '../constants.tsx';
import StarRating from './StarRating';
import heroImage from '../images/apartment/PXL_20241124_104229648.MP-EFFECTS-3840x2160.jpg';
import apartmentImage from '../images/apartment/living-3.jpeg';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <img
          src={heroImage}
          alt="Vista mare"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
        <div className="relative z-20 text-center p-4">
          <h1 className="text-5xl md:text-7xl font-bold font-serif drop-shadow-2xl">
            Il tuo angolo di paradiso all'Isola d'Elba
          </h1>
          <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-lg">
            Svegliati con il profumo della macchia mediterranea, fai colazione sulla nostra terrazza e preparati a esplorare i sentieri più belli dell'isola.
          </p>
          <button
            onClick={() => onNavigate(Page.Apartment)}
            className="mt-8 px-8 py-4 bg-teal-600 text-white font-bold text-lg rounded-full hover:bg-teal-700 transition-transform transform hover:scale-105 duration-300"
          >
            Scopri l'Appartamento
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif text-gray-800">Vivi un'esperienza autentica</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                Svegliati con il profumo della macchia mediterranea, fai colazione sulla nostra terrazza baciata dal sole e preparati a esplorare i sentieri più belli dell'isola, tra relax e avventura.
            </p>
        </div>
      </section>

      {/* Key Sections Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* L'Appartamento */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
            <img src={apartmentImage} alt="Interno dell'appartamento" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-serif text-gray-800">L'Appartamento</h3>
              <p className="mt-2 text-gray-600">2 camere, fino a 4 ospiti, terrazza vista mare.</p>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(Page.Apartment); }} className="mt-4 inline-block text-teal-600 font-semibold hover:underline">Esplora gli spazi &rarr;</a>
            </div>
          </div>
          {/* Avventure Elbane */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
            <img src="/images/attivita/image-elba-coast.jpg" alt="Costa dell'Elba" className="w-full h-56 object-cover" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/id/10/600/400' }} />
            <div className="p-6">
              <h3 className="text-2xl font-serif text-gray-800">Avventure Elbane</h3>
              <p className="mt-2 text-gray-600">Esplora i sentieri nascosti e le calette segrete dell'isola.</p>
              <a href="#" onClick={(e) => { 
                e.preventDefault(); 
                window.history.pushState({}, '', '?partenza=marciana-marina');
                onNavigate(Page.Activities); 
              }} className="mt-4 inline-block text-teal-600 font-semibold hover:underline">Scopri le attività &rarr;</a>
            </div>
          </div>
          {/* Dicono di Noi */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
            <img src="https://picsum.photos/id/1043/600/400" alt="Tramonto sul mare" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-serif text-gray-800">Dicono di Noi</h3>
              <p className="mt-2 text-gray-600">La soddisfazione dei nostri ospiti è la nostra più grande gioia.</p>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(Page.Reviews); }} className="mt-4 inline-block text-teal-600 font-semibold hover:underline">Leggi le recensioni &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-gray-800">Cosa Dicono i Nostri Ospiti</h2>
          <div className="mt-10 max-w-3xl mx-auto relative h-48 flex items-center justify-center">
            {REVIEWS.map((review, index) => (
              <div key={review.id} className={`absolute transition-opacity duration-1000 ${index === currentReview ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-xl italic text-gray-600">"{review.text}"</p>
                <div className="mt-4">
                  <StarRating rating={review.rating} className="justify-center" />
                  <p className="mt-2 font-bold text-gray-800">{review.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
