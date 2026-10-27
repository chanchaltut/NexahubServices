import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { BRAND } from '../utils/constants';

/**
 * Intro loader shown on the first visit of a session.
 * The logo reveals left-to-right, then the overlay fades out.
 */
const LogoLoader = ({ onDone }) => {
  const [phase, setPhase] = useState('start'); // start → reveal → fading

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('reveal'), 50);
    const t2 = setTimeout(() => setPhase('fading'), 1700);
    const t3 = setTimeout(onDone, 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-6 transition-opacity duration-500 ${phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      role="status"
      aria-label={`Loading ${BRAND.name}`}
    >
      <div className="absolute inset-0 hub-pattern-light" />
      <div
        className="relative transition-[clip-path] duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ clipPath: phase === 'start' ? 'inset(0 100% 0 0)' : 'inset(0 0% 0 0)' }}
      >
        <Logo className="h-16 md:h-20" />
      </div>
      <div className="relative w-48 h-[3px] bg-ink/10 rounded-full overflow-hidden">
        <div className={`h-full bg-spectrum-gradient rounded-full transition-[width] duration-[1500ms] ease-out ${phase === 'start' ? 'w-0' : 'w-full'}`} />
      </div>
    </div>
  );
};

export default LogoLoader;
