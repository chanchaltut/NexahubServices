import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { BRAND, TEAM, waLink } from '../utils/constants';
import useReveal from '../hooks/useReveal';

const founder = TEAM[0];
const initials = founder.name.split(' ').filter(Boolean).map((w) => w[0]).slice(0, 2).join('');

// Shown until a founder photo is set in constants.js
const Monogram = () => (
  <div className="relative w-full h-full bg-ink flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 hub-pattern" />
    <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-brand/40 blur-3xl" />
    <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-sun/25 blur-3xl" />
    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border border-white/15 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-2xl">
      <div className="absolute inset-3 rounded-full border border-dashed border-sun/40 animate-[spin_30s_linear_infinite]" />
      <span className="text-white text-6xl md:text-7xl font-bold tracking-tight">{initials}</span>
    </div>
  </div>
);

const TeamSection = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-20 md:py-24 bg-slate-50" aria-label="Our founder">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="reveal grid md:grid-cols-[400px_1fr] bg-white rounded-4xl overflow-hidden shadow-soft border border-gray-100">
          <div className="relative h-80 md:h-auto min-h-[340px]">
            {founder.image ? (
              <img src={founder.image} alt={founder.name} className="w-full h-full object-cover object-top" loading="lazy" />
            ) : (
              <Monogram />
            )}
          </div>

          <div className="p-7 sm:p-10 md:p-12 flex flex-col justify-center">
            <div className="eyebrow-outline w-fit mb-6">Meet the Founder</div>
            <div className="flex items-center gap-3 flex-wrap mb-1">
              <h2 className="text-3xl md:text-4xl font-bold text-ink">{founder.name}</h2>
              {founder.linkedin && (
                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white flex items-center justify-center transition-colors" aria-label={`${founder.name} on LinkedIn`}>
                  <FaLinkedinIn className="text-sm" />
                </a>
              )}
            </div>
            <p className="text-brand font-semibold mb-5">{founder.role} · {BRAND.city}</p>
            <p className="text-gray-500 text-[16px] leading-[1.8] mb-6">{founder.description}</p>

            <blockquote className="border-l-4 border-sun pl-5 mb-7">
              <p className="text-ink text-xl md:text-2xl font-bold leading-snug">“{founder.quote}”</p>
            </blockquote>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {founder.expertise.map((e) => (
                <span key={e} className="inline-flex items-center gap-1.5 bg-mist text-ink text-[13px] font-semibold px-4 py-2 rounded-full">
                  <i className="ri-checkbox-circle-fill text-brand" /> {e}
                </span>
              ))}
            </div>

            <a href={waLink(`Hi ${founder.name}! I'd like to discuss my business.`)} target="_blank" rel="noopener noreferrer" className="btn-ink w-fit">
              <i className="ri-whatsapp-line text-lg" /> Talk to {founder.name.split(' ')[0]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
