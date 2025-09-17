
// in src/components/icons/SnowflakeIcon.tsx
import React from 'react';

const SnowflakeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <line x1="12" y1="2" x2="12" y2="22"></line>
    <path d="M17 16l-5-5-5 5"></path>
    <path d="M7 8l5 5 5-5"></path>
    <line x1="2" y1="12" x2="22" y2="12"></line>
  </svg>
);

export default SnowflakeIcon;
