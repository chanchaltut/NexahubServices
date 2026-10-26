import React from 'react';
import { BRAND } from '../utils/constants';

// ← PLACEHOLDER: when the final logo arrives, add it to src/assets and set it here, e.g.
//   import logoDark from '../assets/nexahub-logo.png';
//   import logoLight from '../assets/nexahub-logo-white.png';
// Until then a text wordmark is rendered in its place.
const LOGO_DARK = null;   // logo for light backgrounds
const LOGO_LIGHT = null;  // logo for dark backgrounds (footer)

const HubMark = ({ light }) => (
  <svg viewBox="0 0 40 40" className="h-full w-auto" aria-hidden="true">
    <rect width="40" height="40" rx="11" fill={light ? '#22A38B' : '#0E2A33'} />
    <g stroke={light ? '#ffffff' : '#22A38B'} strokeWidth="2.2" strokeLinecap="round">
      <line x1="20" y1="20" x2="11" y2="12" />
      <line x1="20" y1="20" x2="30" y2="13" />
      <line x1="20" y1="20" x2="20" y2="31" />
    </g>
    <circle cx="20" cy="20" r="5" fill={light ? '#ffffff' : '#22A38B'} />
    <circle cx="11" cy="12" r="3" fill="#F5B841" />
    <circle cx="30" cy="13" r="3" fill="#ffffff" />
    <circle cx="20" cy="31" r="3" fill="#ffffff" />
  </svg>
);

const Logo = ({ variant = 'dark', className = 'h-10' }) => {
  const light = variant === 'light';
  const image = light ? LOGO_LIGHT : LOGO_DARK;

  if (image) {
    return <img src={image} alt={BRAND.name} className={`${className} w-auto object-contain`} />;
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label={BRAND.name}>
      <HubMark light={light} />
      <span className="flex flex-col leading-none">
        <span className={`font-bold text-[20px] tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
          Nexa<span className="text-brand">Hub</span>
        </span>
        <span className={`text-[9px] font-bold tracking-[0.32em] mt-1 ${light ? 'text-white/60' : 'text-gray-400'}`}>
          SERVICES
        </span>
      </span>
    </span>
  );
};

export default Logo;
