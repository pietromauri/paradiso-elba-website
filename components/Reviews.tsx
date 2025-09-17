
import React, { useState } from 'react';
import { REVIEWS } from '../constants.tsx';
import StarRating from './StarRating';

const ReviewCard: React.FC<{ review: typeof REVIEWS[0] }> = ({ review }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
        <StarRating rating={review.rating} />
        <p className="mt-4 text-gray-600 italic flex-grow">"{review.text}"</p>
        <p className="mt-4 font-bold text-right text-gray-800">- {review.author}</p>
        {review.platform && <span className={`absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full ${review.platform === 'airbnb' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>{review.platform}</span>}
    </div>
);

const FeedbackStarRatingInput: React.FC<{ rating: number; setRating: (rating: number) => void }> = ({ rating, setRating }) => {
    const [hoverRating, setHoverRating] = useState(0);
    return (
        <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <button
                        type="button"
                        key={starValue}
                        onMouseEnter={() => setHoverRating(starValue)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setRating(starValue)}
                        className="focus:outline-none"
                    >
                        <svg className={`w-8 h-8 transition-colors ${starValue <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                        </svg>
                    </button>
                );
            })}
        </div>
    );
};

const Reviews: React.FC = () => {
    const [rating, setRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-6 py-20">
                <section className="text-center">
                    <h2 className="text-5xl font-serif text-gray-800">La Voce dell'Ospitalità</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        La fiducia è la base della nostra ospitalità. Leggi le esperienze autentiche di chi ha già soggiornato da noi.
                    </p>
                </section>

                {/* Review Mosaic */}
                <section className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {REVIEWS.map(review => <div key={review.id} className="relative"><ReviewCard review={review} /></div>)}
                    </div>
                </section>

                {/* Integration logos */}
                <section className="mt-16 text-center">
                    <p className="text-gray-600 mb-4">Siamo orgogliosi delle nostre recensioni su:</p>
                    <div className="flex justify-center items-center space-x-8">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb" className="h-8 grayscale opacity-60" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Booking.com_logo.svg" alt="Booking.com" className="h-12 grayscale opacity-60" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Vrbo_logo.svg" alt="Vrbo" className="h-8 grayscale opacity-60" />
                    </div>
                </section>

                {/* Feedback Form */}
                <section className="mt-20">
                    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl">
                        {submitted ? (
                             <div className="text-center">
                                <h3 className="text-3xl font-serif text-teal-700">Grazie per il tuo feedback!</h3>
                                <p className="mt-4 text-gray-700">Apprezziamo il tempo che ci hai dedicato. La tua opinione è preziosa per noi.</p>
                             </div>
                        ) : (
                            <>
                                <h3 className="text-4xl font-serif text-center text-gray-800">Lascia la tua Recensione</h3>
                                <p className="mt-2 text-center text-gray-600">Hai soggiornato da noi? Condividi la tua esperienza!</p>
                                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                                            <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" required />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" required />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">La tua valutazione</label>
                                        <FeedbackStarRatingInput rating={rating} setRating={setRating} />
                                    </div>
                                    <div>
                                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Commento</label>
                                        <textarea id="comment" rows={5} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" required></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors">
                                            Invia Recensione
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Reviews;
