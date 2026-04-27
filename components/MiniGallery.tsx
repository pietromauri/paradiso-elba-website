import React from 'react';
import { GalleryImage } from '../types';

interface MiniGalleryProps {
  images: GalleryImage[];
  onImageClick: (imageSrc: string) => void;
}

const MiniGallery: React.FC<MiniGalleryProps> = ({ images, onImageClick }) => {
  if (!images || images.length === 0) {
    return <p>Nessuna immagine disponibile.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((img) => (
        <button
          type="button"
          key={img.id} 
          className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg cursor-pointer group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-500 focus-visible:ring-offset-2 block w-full p-0 border-none text-left"
          onClick={() => onImageClick(img.src)}
          aria-label={`Ingrandisci l'immagine: ${img.alt}`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </button>
      ))}
    </div>
  );
};

export default MiniGallery;
