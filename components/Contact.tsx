import React, { useState } from 'react';
import PhoneIcon from './icons/PhoneIcon';
import EmailIcon from './icons/EmailIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const Contact: React.FC = () => {
    const agencyUrl = "https://www.appartamentielbabrignetti.it/bilocali-Marciana-Marina/Sirio-D3.php?id2=&id3=7";
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 py-20">
                <section className="text-center">
                    <h2 className="text-5xl font-serif text-gray-800">Verifica Disponibilità e Prenota</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        Grazie per il tuo interesse nel nostro appartamento! La gestione delle prenotazioni e la verifica della disponibilità aggiornata in tempo reale sono gestite dall'<a href={agencyUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:underline">Agenzia Brignetti</a> di Marciana Marina, per garantire un servizio professionale e sicuro.
                    </p>
                </section>

                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                        <h3 className="text-3xl font-serif text-gray-800 mb-6">Come procedere:</h3>
                        <ol className="space-y-4 text-gray-700">
                            <li>
                                <span className="font-bold">1. Consulta il Calendario Ufficiale:</span> Clicca sul pulsante qui sotto per visualizzare il calendario con le date libere e le tariffe direttamente sul sito dell'Agenzia Brignetti.
                            </li>
                            <li>
                                <span className="font-bold">2. Contatta l'Agenzia:</span> Per prenotare o per richiedere informazioni specifiche sulle date, contatta direttamente l'Agenzia Brignetti ai recapiti qui sotto.
                            </li>
                            <li>
                                <span className="font-bold">3. Hai Domande sull'Appartamento?</span> Se hai domande specifiche sulle caratteristiche dell'appartamento che non hai trovato sul sito, puoi contattarci direttamente usando i nostri recapiti o il modulo in fondo alla pagina.
                            </li>
                        </ol>

                        <div className="mt-8 text-center">
                            <a
                                href={agencyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            >
                                VERIFICA DISPONIBILITÀ E TARIFFE SUL SITO DELL'AGENZIA
                                <ExternalLinkIcon className="ml-2 -mr-1 h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-3xl font-serif text-center text-gray-800 mb-6">Contatti Agenzia Brignetti</h3>
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-lg">
                            <div className="flex items-center text-gray-700">
                                <PhoneIcon className="h-6 w-6 mr-2 text-teal-600" />
                                <a href="tel:+393351673531" className="hover:text-teal-600">+39 3351673531</a>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <EmailIcon className="h-6 w-6 mr-2 text-teal-600" />
                                <a href="mailto:agenziabrignetti@gmail.com" className="hover:text-teal-600">agenziabrignetti@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h3 className="text-3xl font-serif text-center text-gray-800 mb-6">Oppure inviaci un messaggio</h3>
                        {submitted ? (
                            <div className="text-center text-2xl font-serif text-teal-700 py-12">
                                Messaggio Inviato! Grazie per averci contattato.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-lg">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Nome *</label>
                                        <input type="text" id="first-name" placeholder="Nome" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" required />
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Cognome</label>
                                        <input type="text" id="last-name" placeholder="Cognome" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">Email *</label>
                                    <input type="email" id="contact-email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" required />
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">Commento o messaggio *</label>
                                    <textarea id="contact-message" rows={5} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" required></textarea>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="privacy" name="privacy" type="checkbox" className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="privacy" className="font-medium text-gray-700">Trattamento dati personali *</label>
                                        <p className="text-gray-500 text-xs">I dati personali forniti saranno acquisiti dal Titolare del trattamento al solo scopo di rispondere alla richiesta di contatto. La cancellazione può essere richiesta in ogni momento come previsto nel documento della privacy. Privacy: Ho preso visione dell'informativa e autorizzo al trattamento dei dati ai sensi del nuovo Regolamento UE 2016/679. Confermo di avere più di 16 anni.</p>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                                        Invia
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;