import React from 'react';
import { MARQUEE_ITEMS } from '../utils/constants';

// Slim service ticker shown below the hero
const Marquee = () => {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-wrap overflow-hidden bg-ink py-4 -rotate-[0.6deg] my-2" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-4 px-5 text-white text-[15px] md:text-[17px] font-display italic font-bold tracking-wide whitespace-nowrap">
            {item}
            <i className="ri-star-fill text-brand text-xs" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
