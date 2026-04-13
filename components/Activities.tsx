
import React from 'react';
import { ACTIVITIES } from '../constants.tsx';

const ActivityCard: React.FC<{ activity: typeof ACTIVITIES[0] }> = ({ activity }) => {
  const [showDetail, setShowDetail] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const allImages = React.useMemo(() => {
    const list = [activity.image, ...(activity.images || [])];
    return Array.from(new Set(list)).filter(img => !img.includes('placeholder'));
  }, [activity.image, activity.images]);

  // Scroll Lock Effect
  React.useEffect(() => {
    if (showDetail) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showDetail]);

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer group"
        onClick={() => setShowDetail(true)}
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {allImages.length > 1 && (
            <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-md text-xs backdrop-blur-sm flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              {allImages.length} Foto
            </div>
          )}
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h4 className="text-2xl font-serif text-teal-700">{activity.title}</h4>
          <p className="mt-2 text-gray-600 line-clamp-2 flex-grow">{activity.description}</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-500">
            <div className="flex items-center">
              <span className="font-semibold mr-1">Difficoltà:</span>
              <span>{activity.difficulty}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-1">Durata:</span>
              <span>{activity.duration}</span>
            </div>
          </div>
          <div className="mt-6">
            <button
              className="w-full bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-teal-700 transition-colors text-center"
            >
              Vedi Dettagli & Foto
            </button>
          </div>
        </div>
      </div>

      {/* Detail View Modal */}
      {showDetail && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="min-h-screen w-full flex flex-col items-center">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 py-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-teal-700 leading-tight">{activity.title}</h2>
              </div>
              <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                onClick={() => setShowDetail(false)}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="container mx-auto px-6 py-10 flex-grow">
              <div className="max-w-6xl mx-auto">
                {/* Info Panel */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                  <div className="md:col-span-3">
                    <p className="text-xl text-gray-700 leading-relaxed whitespace-pre-wrap">{activity.description}</p>
                  </div>
                  <div className="space-y-4 bg-teal-50 p-6 rounded-2xl">
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-teal-600 font-bold mb-1">Difficoltà</span>
                      <span className="text-lg font-medium text-gray-800">{activity.difficulty}</span>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-teal-600 font-bold mb-1">Durata Stimata</span>
                      <span className="text-lg font-medium text-gray-800">{activity.duration}</span>
                    </div>
                    {activity.gpxTrack && activity.gpxTrack !== '#' && (
                      <a
                        href={activity.gpxTrack}
                        download={!activity.gpxTrack.startsWith('http')}
                        target={activity.gpxTrack.startsWith('http') ? '_blank' : '_self'}
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-teal-600 text-white px-4 py-3 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-md active:scale-95"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {activity.gpxTrack.startsWith('http') ? 'Vedi Mappa e Traccia' : 'Scarica Traccia GPX'}
                      </a>
                    )}
                  </div>
                </div>

                {activity.hostTip && (
                  <div className="mb-12 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-amber-800">Il Consiglio dell'Host</h3>
                        <div className="mt-2 text-amber-700">
                          <p>{activity.hostTip.text}</p>
                          {activity.hostTip.linkUrl && (
                            <p className="mt-2">
                              <a href={activity.hostTip.linkUrl} target="_blank" rel="noreferrer" className="font-bold underline hover:text-amber-900">
                                {activity.hostTip.linkText || 'Scopri di più'} &rarr;
                              </a>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Photo Mosaic */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                  {allImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="break-inside-avoid relative group cursor-zoom-in rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img
                        src={img}
                        alt={`${activity.title} ${idx + 1}`}
                        className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox for Mosaic */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Expanded view"
            className="max-w-full max-h-full object-contain rounded shadow-2xl animate-in zoom-in-95 duration-200"
          />
        </div>
      )}
    </>
  );
};

const MARE_ACTIVITIES = ACTIVITIES.filter(a => a.category === 'Mare');
const TERRA_ACTIVITIES_BASE = ACTIVITIES.filter(a => a.category === 'Terra');
const CULTURA_ACTIVITIES = ACTIVITIES.filter(a => a.category === 'Cultura e Gusto');

const Activities: React.FC = () => {
  const mareActivities = MARE_ACTIVITIES;
  
  // Custom sorting for Terra activities based on URL param
  const terraActivities = React.useMemo(() => {
    const list = [...TERRA_ACTIVITIES_BASE]; // shallow copy to sort safely if needed, but since we return directly we just use it or sort it
    const params = new URLSearchParams(window.location.search);
    const partenza = params.get('partenza');
    
    if (partenza === 'marciana-marina') {
      return list.sort((a, b) => {
        const aIsMarciana = a.title.toLowerCase().includes('marciana marina');
        const bIsMarciana = b.title.toLowerCase().includes('marciana marina');
        if (aIsMarciana && !bIsMarciana) return -1;
        if (!aIsMarciana && bIsMarciana) return 1;
        return 0;
      });
    }
    return TERRA_ACTIVITIES_BASE;
  }, []);

  const culturaActivities = CULTURA_ACTIVITIES;

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
