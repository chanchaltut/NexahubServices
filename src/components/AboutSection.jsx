import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT, BRAND, STATS } from '../utils/constants';
import useReveal from '../hooks/useReveal';

const AboutSection = ({ showCta = true }) => {
  const ref = useReveal();

  return (
    <section id="about" ref={ref} className="py-20 md:py-24 bg-white relative overflow-hidden scroll-mt-20" aria-label={`About ${BRAND.name}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <div className="reveal eyebrow-outline mb-6">About Us</div>
            <h2 className="reveal section-title lg:text-5xl mb-5">{ABOUT.heading}</h2>
            <p className="reveal text-gray-500 text-[16px] leading-[1.8] mb-7 max-w-[95%]">{ABOUT.description}</p>

            <ul className="reveal grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {ABOUT.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-ink text-[15px] font-medium">
                  <i className="ri-checkbox-circle-fill text-brand text-lg leading-none mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="reveal flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 border border-gray-100 rounded-2xl shadow-soft mb-9 w-full max-w-[520px]">
              <div className="flex items-center gap-4">
                <i className="ri-team-line text-3xl text-ink" />
                <h4 className="font-bold text-ink text-[15px] leading-[1.3]">Trusted &<br />Professional</h4>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-200" />
              <div className="flex items-center gap-4">
                <i className="ri-stack-line text-3xl text-ink" />
                <h4 className="font-bold text-ink text-[15px] leading-[1.3]">Registration &<br />Funding Support</h4>
              </div>
            </div>

            {showCta && (
              <div className="reveal">
                <Link to="/about" className="btn-brand">Know More About Us</Link>
              </div>
            )}
          </div>

          {/* Visual */}
          <div className="reveal w-full lg:w-1/2 relative">
            <div className="relative rounded-4xl overflow-hidden aspect-[4/3] w-full shadow-2xl">
              <img src={ABOUT.image} alt={`${BRAND.name} team working with a client`} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8 w-[210px] md:w-[240px] bg-ink/20 backdrop-blur-md border border-white/15 px-7 py-6 rounded-[1.25rem] text-white shadow-2xl">
                <p className="text-white/90 text-[14px] font-semibold mb-1">More than</p>
                <p className="text-[52px] md:text-[60px] font-bold leading-none tracking-tight mb-2">{STATS[1].number.toLocaleString('en-IN')}{STATS[1].suffix}</p>
                <p className="text-white/90 text-[14px] font-medium leading-snug">Registrations & Filings</p>
              </div>
            </div>
            <div className="absolute -top-5 -left-3 md:-left-6 bg-sun text-ink rounded-2xl px-5 py-4 shadow-xl rotate-[-4deg]">
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-70">Ahmedabad based</p>
              <p className="text-lg font-bold leading-tight">Serving All of India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
