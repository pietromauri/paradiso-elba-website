
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issue with webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


const Posizione: React.FC = () => {
  const position: [number, number] = [42.80535220887716, 10.195620732372205];
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="container mx-auto px-6 py-20">
      <header className="text-center mb-12">
        <h2 className="text-5xl font-serif text-gray-800">Dove Siamo</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          Ci troviamo nel cuore di Marciana Marina, a pochi passi dal mare e dalle principali attrazioni.
        </p>
      </header>
      <div className="h-[500px] rounded-lg shadow-xl overflow-hidden">
        {isMounted && (
          <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Paradiso Elba <br /> Il tuo angolo di paradiso.
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default Posizione;
