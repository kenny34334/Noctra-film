import React from 'react';

interface SandwichLoafProps {
  className?: string;
  size?: number;
}

export const SandwichLoaf: React.FC<SandwichLoafProps> = ({ className = 'text-neutral-900', size = 32 }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 120.5 120.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sandwich Loaf"
    >
      <path
        d="M109.2 28.9c0-16.8-29.7-19.3-49-19.3s-49 2.5-49 19.3c0 3.3 1.5 8.4 4.6 11-1.2 1.6-1.7 3.6-1.5 5.5v59.4c0 2.3 1.9 4.2 4.2 4.1H102c2.3 0 4.2-1.8 4.2-4.1V44.9c0.1-1.8-0.5-3.6-1.5-5 3.2-2.6 4.7-7.7 4.7-11z"
        stroke="currentColor"
        strokeWidth="6"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
