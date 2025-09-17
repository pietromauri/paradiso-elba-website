
import React, { useState } from 'react';

const CalendarDay: React.FC<{ day?: number; isAvailable?: boolean }> = ({ day, isAvailable = false }) => (
  <div className={`text-center py-2 border ${day ? '' : 'bg-gray-50'} ${day && !isAvailable ? 'bg-red-100 text-gray-400 line-through' : ''} ${day && isAvailable ? 'bg-green-100' : ''}`}>
    {day || ''}
  </div>
);

const Contact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
    const unavailableDays = [3, 4, 5, 12, 18, 19, 20, 21, 28];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 py-20">
                <section className="text-center">
                    <h2 className="text-5xl font-serif text-gray-800">Contatti & Prenotazioni</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        Siamo qui per rispondere a ogni tua domanda e per aiutarti a pianificare il tuo soggiorno da sogno. Non esitare a contattarci.
                    </p>
                </section>

                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-lg">
                        {submitted ? (
                             <div className="text-center h-full flex flex-col justify-center">
                                <h3 className="text-3xl font-serif text-teal-700">Messaggio Inviato!</h3>
                                <p className="mt-4 text-gray-700">Grazie per averci contattato. Ti risponderemo al più presto.</p>
                             </div>
                        ) : (
                            <>
                                <h3 className="text-3xl font-serif text-gray-800 mb-6">Scrivici un Messaggio</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">Nome</label>
                                        <input type="text" id="contact-name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" required />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" id="contact-email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" required />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">Messaggio</label>
                                        <textarea id="contact-message" rows={5} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" required></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors">
                                            Invia
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                    {/* Info & Booking */}
                    <div>
                        <h3 className="text-3xl font-serif text-gray-800 mb-6">Verifica Disponibilità</h3>
                        <div className="bg-white p-6 rounded-lg shadow-xl border">
                             <div className="flex justify-between items-center mb-4">
                                <button className="px-3 py-1">&larr;</button>
                                <h4 className="text-2xl font-semibold">Luglio 2024</h4>
                                <button className="px-3 py-1">&rarr;</button>
                            </div>
                            <div className="grid grid-cols-7 gap-1 text-sm">
                                {['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'].map(day => <div key={day} className="text-center font-bold text-gray-600 py-2">{day}</div>)}
                                {daysInMonth.map(day => <CalendarDay key={day} day={day} isAvailable={!unavailableDays.includes(day)} />)}
                            </div>
                            <button className="w-full mt-6 py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
                                Prenota Ora
                            </button>
                        </div>
                        <div className="mt-8 text-gray-700">
                            <h4 className="text-xl font-semibold mb-3">Informazioni di Contatto</h4>
                            <p><strong>Email:</strong> info@paradisoelba.it</p>
                            <p><strong>Telefono:</strong> +39 123 456 7890</p>
                            <p><strong>Indirizzo:</strong> Via della Spiaggia, 123, Procchio, Isola d'Elba</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
