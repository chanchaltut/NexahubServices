import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { BRAND, waLink } from '../utils/constants';

const FloatingActions = () => (
  <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 no-print">
    <a
      href={BRAND.phoneLink}
      className="group flex items-center gap-2 bg-brand hover:bg-brand-dark text-white rounded-full shadow-xl ring-2 ring-white/80 h-12 pl-3.5 pr-3.5 sm:hover:pr-5 transition-all duration-500"
      aria-label={`Call ${BRAND.phone}`}
    >
      <i className="ri-phone-fill text-xl" />
      <span className="hidden sm:block max-w-0 group-hover:max-w-[200px] overflow-hidden whitespace-nowrap font-bold text-sm transition-all duration-500">
        {BRAND.phone}
      </span>
    </a>

    <a href={waLink()} target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Chat with us on WhatsApp">
      <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-40" />
      <span className="relative w-14 h-14 bg-[#25d366] hover:bg-[#1ebe5a] rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
        <FaWhatsapp className="text-[28px] text-white" />
      </span>
      <span className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap bg-ink text-white text-sm py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
        Chat with us on WhatsApp
      </span>
    </a>
  </div>
);

export default FloatingActions;
