
import React from 'react';
import { NEARBY_FEATURES } from '../constants';

const NearbyFeatures: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-800">Vantaggi Unici / Perché Sceglierci</h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {NEARBY_FEATURES.map((feature, index) => (
            <div key={index} className="bg-slate-50 rounded-lg shadow-md p-8 text-center flex flex-col items-center">
              <feature.icon className="w-16 h-16 text-teal-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyFeatures;
