import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND, FEATURED_SERVICES, SERVICES, TEAM, waLink } from '../utils/constants';
import useReveal from '../hooks/useReveal';

const imageOf = (slug, width) => SERVICES.find((s) => s.slug === slug)?.image.replace(/w=\d+/, `w=${width}`);

const Arrow = () => (
  <span className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-sun group-hover:text-ink group-hover:rotate-45 transition-all duration-500">
    <i className="ri-arrow-right-up-line text-xl" />
  </span>
);

const FeaturedServices = () => {
  const ref = useReveal();
  const [spotlight, ...rest] = FEATURED_SERVICES;

  return (
    <section ref={ref} className="py-20 md:py-24 bg-white" aria-label="Signature services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="reveal eyebrow mb-6">Most Requested</div>
            <h2 className="reveal section-title">Signature Services for Startups & MSMEs</h2>
          </div>
          <div className="reveal max-w-md">
            <p className="text-gray-500 text-[16px] leading-relaxed mb-4">
              The services entrepreneurs ask us for most — each handled end-to-end, from documentation to final approval.
            </p>
            <Link to="/#services" className="inline-flex items-center gap-2 font-bold text-ink hover:text-brand hover:gap-3 transition-all">
              Explore all 100+ services <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 sm:auto-rows-[250px] md:auto-rows-[270px] gap-4">
          {/* Spotlight */}
          <Link
            to={`/services/${spotlight.slug}`}
            className="reveal group relative col-span-2 min-h-[440px] sm:min-h-0 sm:row-span-2 rounded-3xl sm:rounded-4xl overflow-hidden"
          >
            <img src={imageOf(spotlight.slug, 1200)} alt={spotlight.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />
            <div className="relative h-full flex flex-col justify-between p-7 md:p-9">
              <div className="flex items-start justify-between">
                <span className="bg-sun text-ink text-[12px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">{spotlight.tag}</span>
                <Arrow />
              </div>
              <div>
                <h3 className="!text-white text-3xl md:text-[40px] font-bold leading-[1.1] mb-3">{spotlight.title}</h3>
                <p className="text-white/80 text-[15px] md:text-[16px] leading-relaxed max-w-md mb-6">{spotlight.text}</p>
                <div className="flex flex-wrap gap-2.5">
                  {['Up to ₹50 Lakh', '15–35% Subsidy', 'Project Report Included'].map((c) => (
                    <span key={c} className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[13px] font-semibold px-4 py-2 rounded-full">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>

          {rest.map((f, i) => (
            <Link
              key={f.slug}
              to={`/services/${f.slug}`}
              className="reveal group relative h-[210px] sm:h-auto rounded-3xl sm:rounded-4xl overflow-hidden"
              style={{ transitionDelay: `${(i % 2) * 80}ms` }}
            >
              <img src={imageOf(f.slug, 700)} alt={f.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/5 group-hover:via-ink/75 transition-colors duration-500" />
              <div className="relative h-full flex flex-col justify-between p-4 sm:p-6">
                <div className="flex items-start justify-between">
                  <span className="bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">{f.tag}</span>
                  <span className="hidden sm:block"><Arrow /></span>
                </div>
                <div>
                  <h3 className="!text-white text-[16px] sm:text-[21px] font-bold leading-tight sm:mb-1.5">{f.title}</h3>
                  <p className="hidden sm:block text-white/75 text-[14px] leading-snug">{f.text}</p>
                </div>
              </div>
            </Link>
          ))}

          {/* Personal CTA — mirrors the catalogue's "Message the founder" */}
          <div className="reveal col-span-2 rounded-3xl sm:rounded-4xl bg-mist relative overflow-hidden p-7 md:p-9 flex flex-col justify-between">
            <div className="absolute inset-0 hub-pattern-light" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-brand/15 blur-2xl" />
            <div className="relative">
              <p className="text-brand text-[12px] font-bold uppercase tracking-widest mb-3">Looking for something else?</p>
              <h3 className="text-2xl md:text-[28px] font-bold leading-snug max-w-md">
                Message {TEAM[0].name} directly — get the right answer in minutes.
              </h3>
            </div>
            <div className="relative flex flex-wrap items-center gap-3 mt-6">
              <a href={waLink(`Hi ${TEAM[0].name}! I'm looking for help with my business.`)} target="_blank" rel="noopener noreferrer" className="btn-brand">
                <i className="ri-whatsapp-line text-lg" /> Message on WhatsApp
              </a>
              <a href={BRAND.phoneLink} className="btn-ghost bg-white">
                <i className="ri-phone-line" /> {BRAND.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
