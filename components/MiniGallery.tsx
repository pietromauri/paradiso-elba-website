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
        <div 
          key={img.id} 
          className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg cursor-pointer group"
          onClick={() => onImageClick(img.src)}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
};

export default MiniGallery;
