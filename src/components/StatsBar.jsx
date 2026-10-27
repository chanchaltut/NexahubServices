import React, { useEffect, useRef } from 'react';
import { STATS } from '../utils/constants';

const formatNumber = (n) => n.toLocaleString('en-IN');

const StatsBar = () => {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const animate = (el, target) => {
      const duration = 1800;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = formatNumber(Math.floor(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = formatNumber(target);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          countersRef.current.forEach((el, i) => el && animate(el, STATS[i].number));
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-white" aria-label="Our numbers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative overflow-hidden bg-mist rounded-[24px] px-6 py-14 md:px-16 md:py-20 flex flex-col items-center text-center">
          <div className="absolute inset-0 hub-pattern-light pointer-events-none" />
          <h2 className="relative text-[30px] md:text-[42px] font-bold text-ink leading-[1.2] mb-4">Numbers That Speak for Themselves</h2>
          <p className="relative text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto mb-10 md:mb-14">
            Every number reflects a business that now spends less time on paperwork and more time on growth.
          </p>
          <div className="relative w-24 spectrum-bar mb-10 md:mb-14 mx-auto" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 w-full max-w-4xl mx-auto">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center">
                <p className="font-display italic text-[40px] md:text-[52px] font-extrabold text-ink leading-none mb-3 tabular-nums">
                  <span ref={(el) => (countersRef.current[i] = el)}>0</span>
                  <span className="text-gradient">{stat.suffix}</span>
                </p>
                <p className="text-gray-500 text-[14px] md:text-[15px] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
