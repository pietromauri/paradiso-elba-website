
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants.tsx';

type FilterType = 'all' | 'panorami' | 'spiagge' | 'outdoor' | 'tramonti';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredImages = filter === 'all' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.category === filter);

  const FilterButton: React.FC<{ category: FilterType; label: string }> = ({ category, label }) => (
    <button
      onClick={() => setFilter(category)}
      className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${filter === category ? 'bg-teal-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-20">
        <section className="text-center">
          <h2 className="text-5xl font-serif text-gray-800">Un Tuffo Visivo nell'Esperienza</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Lasciati ispirare dal nostro album di ricordi anticipati. Sfoglia le immagini e inizia a sognare la tua prossima vacanza all'Elba.
          </p>
        </section>

        {/* Filters */}
        <section className="mt-12">
          <div className="flex justify-center flex-wrap gap-4">
            <FilterButton category="all" label="Tutti" />
            <FilterButton category="panorami" label="Panorami" />
            <FilterButton category="tramonti" label="Tramonti" />
            <FilterButton category="spiagge" label="Spiagge" />
            <FilterButton category="outdoor" label="Vita all'Aperto" />
          </div>
        </section>

        {/* Image Grid */}
        <section className="mt-12">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filteredImages.map(img => (
              <div key={img.id} className="overflow-hidden rounded-lg shadow-md break-inside-avoid">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* User Generated Content */}
        <section className="mt-20 text-center bg-gray-50 py-16 rounded-lg">
          <h3 className="text-4xl font-serif text-gray-800">I Vostri Momenti</h3>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Adoriamo vedere l'Elba attraverso i vostri occhi! Condividi i tuoi scatti migliori su Instagram con l'hashtag <span className="font-bold text-teal-600">#ParadisoElba</span> e potresti vederli pubblicati qui.
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-10">
              <img src="https://picsum.photos/seed/guest1/500/500" className="rounded-lg shadow-md aspect-square object-cover" alt="Foto ospite 1"/>
              <img src="https://picsum.photos/seed/guest2/500/500" className="rounded-lg shadow-md aspect-square object-cover" alt="Foto ospite 2"/>
              <img src="https://picsum.photos/seed/guest3/500/500" className="rounded-lg shadow-md aspect-square object-cover" alt="Foto ospite 3"/>
              <img src="https://picsum.photos/seed/guest4/500/500" className="rounded-lg shadow-md aspect-square object-cover" alt="Foto ospite 4"/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
