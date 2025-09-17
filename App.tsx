
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Page } from './types';
import { NAV_LINKS } from './constants.tsx';
import Home from './components/Home';
import Apartment from './components/Apartment';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Posizione from './components/Posizione';

// --- Reusable Components ---

interface StarRatingProps {
  rating: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, className = '' }) => (
  <div className={`flex items-center ${className}`}>
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
      </svg>
    ))}
  </div>
);

// --- Header Component ---

interface HeaderProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClasses = (page: Page) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      activePage === page
        ? 'text-white bg-teal-600'
        : 'text-gray-700 hover:bg-gray-200'
    }`;
  
  const mobileLinkClasses = (page: Page) => 
    `block px-3 py-2 rounded-md text-base font-medium ${
        activePage === page ? 'bg-teal-600 text-white' : 'text-gray-700 hover:bg-gray-100'
    }`;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(Page.Home); }}>
              <img src="/images/apartment/home-page.png" alt="Paradiso Elba" className="h-16 w-auto" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((page) => (
                <a
                  key={page}
                  href="#"
                  onClick={(e) => { e.preventDefault(); onNavigate(page); }}
                  className={linkClasses(page)}
                >
                  {page}
                </a>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((page) => (
              <a
                key={page}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(page);
                  setIsMenuOpen(false);
                }}
                className={mobileLinkClasses(page)}
              >
                {page}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};


// --- Footer Component ---

const Footer: React.FC = () => (
  <footer className="bg-teal-900 text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-serif font-bold">Paradiso Elba</h3>
          <p className="mt-2 text-gray-300">Il tuo rifugio esclusivo sull'Isola d'Elba. Vivi un'esperienza indimenticabile tra comfort e natura.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Link Veloci</h3>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map(link => <li key={link}><a href="#" className="text-gray-300 hover:text-white transition-colors">{link}</a></li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Contatti</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>Email: info@paradisoelba.it</li>
            <li>Telefono: +39 123 456 7890</li>
            <li>Località: Procchio, Isola d'Elba</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Paradiso Elba. Tutti i diritti riservati.</p>
      </div>
    </div>
  </footer>
);

// --- App Component ---

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Home);

  const handleNavigate = useCallback((page: Page) => {
    setActivePage(page);
    // Smooth scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  const renderPage = () => {
    switch (activePage) {
      case Page.Home:
        return <Home onNavigate={handleNavigate} />;
      case Page.Apartment:
        return <Apartment />;
      case Page.Activities:
        return <Activities />;
      case Page.Gallery:
        return <Gallery />;
      case Page.Reviews:
        return <Reviews />;
      case Page.Contact:
        return <Contact />;
      case Page.Position:
        return <Posizione />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header activePage={activePage} onNavigate={handleNavigate} />
      <main id="page-content" className="flex-grow">

        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
