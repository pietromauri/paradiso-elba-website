import React from 'react';
import { GalleryImage } from '../types';
import MiniGallery from './MiniGallery';

interface SectionDetailProps {
  title: string;
  images: GalleryImage[];
  children: React.ReactNode;
  reverseLayout?: boolean;
  onImageClick: (imageSrc: string) => void;
}

const SectionDetail: React.FC<SectionDetailProps> = ({ title, images, children, reverseLayout = false, onImageClick }) => {
  const layoutClasses = `flex flex-col ${reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'} items-start gap-10 lg:gap-16`;

  return (
    <section className={layoutClasses}>
      {/* Colonna Testo */}
      <div className="md:w-1/2 flex-shrink-0">
        <h3 className="text-4xl font-serif text-gray-800 mb-6">{title}</h3>
        <div className="text-gray-600 text-lg leading-relaxed space-y-4">
          {children}
        </div>
      </div>

      {/* Colonna Mini Galleria */}
      <div className="md:w-1/2 w-full mt-6 md:mt-0">
        <MiniGallery images={images} onImageClick={onImageClick} />
      </div>
    </section>
  );
};

export default SectionDetail;
