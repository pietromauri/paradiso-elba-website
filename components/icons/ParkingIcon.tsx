
// in src/components/icons/ParkingIcon.tsx
import React from 'react';

const ParkingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
  </svg>
);

export default ParkingIcon;
