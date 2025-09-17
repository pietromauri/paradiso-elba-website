
import React from 'react';
import { ACTIVITIES } from '../constants.tsx';

const ActivityCard: React.FC<{ activity: typeof ACTIVITIES[0] }> = ({ activity }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <img src={activity.image} alt={activity.title} className="w-full h-56 object-cover" />
        <div className="p-6">
            <h4 className="text-2xl font-serif text-teal-700">{activity.title}</h4>
            <p className="mt-2 text-gray-600">{activity.description}</p>
            <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>Difficoltà: <strong>{activity.difficulty}</strong></span>
                <span>Durata: <strong>{activity.duration}</strong></span>
            </div>
            <a href="#" className="mt-6 inline-block bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-teal-700 transition-colors">
                Maggiori Dettagli
            </a>
        </div>
    </div>
);

const Activities: React.FC = () => {
  const mareActivities = ACTIVITIES.filter(a => a.category === 'Mare');
  const terraActivities = ACTIVITIES.filter(a => a.category === 'Terra');
  const culturaActivities = ACTIVITIES.filter(a => a.category === 'Cultura e Gusto');

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-20">
        <section className="text-center">
          <h2 className="text-5xl font-serif text-gray-800">L'Elba da Vivere</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Trasforma il tuo soggiorno in un'avventura indimenticabile. Abbiamo selezionato per te le migliori esperienze che l'isola ha da offrire, per ogni tipo di interesse.
          </p>
        </section>

        {/* Mare Activities */}
        <section className="mt-20">
          <h3 className="text-4xl font-serif text-center mb-10 text-teal-700">Avventure di Mare</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {mareActivities.map(activity => <ActivityCard key={activity.id} activity={activity} />)}
          </div>
        </section>

        {/* Terra Activities */}
        <section className="mt-20">
          <h3 className="text-4xl font-serif text-center mb-10 text-teal-700">Esplorazioni di Terra</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {terraActivities.map(activity => <ActivityCard key={activity.id} activity={activity} />)}
          </div>
        </section>

        {/* Cultura e Gusto Activities */}
        <section className="mt-20">
          <h3 className="text-4xl font-serif text-center mb-10 text-teal-700">Cultura e Gusto</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {culturaActivities.map(activity => <ActivityCard key={activity.id} activity={activity} />)}
          </div>
        </section>

        {/* Insider Tips */}
        <section className="mt-20 bg-teal-50 rounded-lg p-12">
            <div className="text-center">
                <h3 className="text-4xl font-serif text-teal-700">La Nostra Elba Segreta</h3>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
                    Oltre le mete più famose, c'è un'Elba autentica che amiamo condividere. Chiedici consigli sulle calette meno conosciute, i sentieri panoramici segreti e i ristoranti frequentati solo dalla gente del posto per un'esperienza davvero unica.
                </p>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Activities;
