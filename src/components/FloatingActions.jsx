import React from 'react';
import { BRAND, waLink } from '../utils/constants';

const fabClass =
  'group flex items-center gap-2 bg-brand bg-brand-gradient hover:brightness-110 text-white rounded-full shadow-xl ring-2 ring-white/80 h-12 pl-3.5 pr-3.5 sm:hover:pr-5 transition-all duration-500';
const labelClass =
  'hidden sm:block max-w-0 group-hover:max-w-[200px] overflow-hidden whitespace-nowrap font-bold text-sm transition-all duration-500';

const FloatingActions = () => (
  <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 no-print">
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={fabClass}
      aria-label={`Chat with ${BRAND.name} on WhatsApp`}
    >
      <i className="ri-whatsapp-line text-xl" />
      <span className={labelClass}>Chat on WhatsApp</span>
    </a>
    <a href={BRAND.phoneLink} className={fabClass} aria-label={`Call ${BRAND.phone}`}>
      <i className="ri-phone-fill text-xl" />
      <span className={labelClass}>{BRAND.phone}</span>
    </a>
  </div>
);

export default FloatingActions;
