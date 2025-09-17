import React from 'react';

const DishwasherIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* Corpo principale della lavastoviglie */}
      <rect x="4" y="4" width="56" height="56" rx="4" />
      {/* Linea di separazione del pannello di controllo */}
      <line x1="4" y1="18" x2="60" y2="18" />
      {/* Pulsanti sul pannello */}
      <circle cx="16" cy="11" r="2.5" />
      <circle cx="25" cy="11" r="2.5" />
      {/* Indicatori sul pannello */}
      <line x1="33" y1="11" x2="37" y2="11" />
      <line x1="41" y1="11" x2="45" y2="11" />
      <line x1="49" y1="11" x2="53" y2="11" />
      {/* Finestra interna */}
      <rect x="12" y="24" width="40" height="28" rx="2" />
      {/* Cestello e piatti */}
      <line x1="12" y1="38" x2="52" y2="38" />
      <circle cx="27" cy="38" r="7" />
      <circle cx="42" cy="38" r="10" />
      <circle cx="27" cy="38" r="3" />
      <circle cx="42" cy="38" r="5" />
    </g>
  </svg>
);

export default DishwasherIcon;
