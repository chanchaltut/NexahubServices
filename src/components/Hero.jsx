import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HERO, STATS, waLink } from '../utils/constants';

const RotatingWord = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <span key={index} className="animate-fade-in-up text-sun font-bold">{words[index]}</span>
    </span>
  );
};

const Hero = () => (
  <section id="home" className="px-3 sm:px-4 lg:px-12 pt-3 sm:pt-4 pb-8 md:pb-12 w-full max-w-[1920px] mx-auto" aria-label="Introduction">
    <div className="relative w-full rounded-[1.5rem] md:rounded-4xl overflow-hidden min-h-[620px] md:min-h-[700px] flex flex-col justify-end">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={`${HERO.image}&w=2000`}
          srcSet={[800, 1200, 2000, 2600].map((w) => `${HERO.image}&w=${w} ${w}w`).join(', ')}
          sizes="100vw"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-[60%_center] md:object-center"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 md:from-ink/80 via-ink/70 md:via-ink/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 md:via-ink/30 to-transparent" />
        <div className="absolute inset-0 hub-pattern opacity-60" />
      </div>

      {/* Floating trust card (desktop) */}
      <div className="hidden lg:flex absolute top-10 right-12 z-10 items-center gap-4 bg-ink/70 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-4 shadow-2xl animate-float-slow">
        <div className="flex -space-x-2.5">
          {['A', 'R', 'K', 'P'].map((l, i) => (
            <span key={l} className={`w-9 h-9 rounded-full border-2 border-ink flex items-center justify-center text-[13px] font-bold ${['bg-brand text-white', 'bg-sun text-ink', 'bg-white text-ink', 'bg-brand-light text-ink'][i]}`}>{l}</span>
          ))}
        </div>
        <div>
          <p className="text-white font-bold text-[15px] leading-tight">{STATS[0].number}{STATS[0].suffix} businesses</p>
          <p className="text-white/75 text-[12px]">trust Nexa Hub to grow</p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 py-8 md:px-14 md:py-12 w-full">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-7 md:gap-10 lg:gap-16">
          <div className="w-full lg:w-3/5">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full pl-2 pr-4 py-1.5 mb-6 text-white/90 text-[13px] md:text-[14px]">
              <span className="bg-brand-gradient text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Expert help</span>
              <RotatingWord words={HERO.rotatingWords} />
            </div>
            <h1 className="text-[36px] leading-[1.12] md:text-5xl lg:text-[62px] font-extrabold !text-white tracking-tight">
              {HERO.headingLines[0]}
              <br className="hidden md:block" />{' '}
              <span className="text-gradient">{HERO.headingLines[1]}</span>
            </h1>
          </div>

          <div className="w-full lg:w-2/5 flex flex-col items-start gap-6 lg:pb-3">
            <p className="text-white/85 text-[15px] md:text-lg leading-relaxed max-w-md">{HERO.description}</p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a href={waLink('Hi! I would like a free consultation.')} target="_blank" rel="noopener noreferrer" className="btn-brand hover:!bg-none hover:!bg-white hover:!text-ink">
                Get a Free Consultation
              </a>
              <Link to="/#services" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[15px] text-white border border-white/30 hover:bg-white/10 transition-colors">
                Explore Services <i className="ri-arrow-right-down-line" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-9 md:mt-11 pt-6 md:pt-8 border-t border-white/20">
          <ul className="grid grid-cols-2 md:flex md:flex-wrap lg:flex-nowrap justify-between gap-y-4 gap-x-3 md:gap-6">
            {HERO.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-white/90 font-medium text-[13px] sm:text-[14px] md:text-lg">
                <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-brand/90 flex items-center justify-center flex-shrink-0">
                  <i className="ri-check-line text-white text-sm" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
