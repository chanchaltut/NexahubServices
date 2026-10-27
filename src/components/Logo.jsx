import React from 'react';
import { BRAND } from '../utils/constants';
import logoDark from '../assets/nexahub-logo.webp';
import logoLight from '../assets/nexahub-logo-light.webp';

// Full-colour logo; the "light" variant swaps the black wordmark to white for dark backgrounds.
const Logo = ({ variant = 'dark', className = 'h-10' }) => (
  <img
    src={variant === 'light' ? logoLight : logoDark}
    alt={BRAND.name}
    width="720"
    height="171"
    className={`${className} w-auto object-contain`}
    decoding="async"
  />
);

export default Logo;
