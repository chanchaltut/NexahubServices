import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PARENT_SERVICES, BRAND, waLink } from '../utils/constants';
import useReveal from '../hooks/useReveal';

// Flat index of every category + sub-service for the search box
const SEARCH_INDEX = PARENT_SERVICES.flatMap((parent) => [
  { name: parent.title, parentTitle: parent.title, price: `Starting from ${parent.startingPrice}`, parent },
  ...parent.subcategories.map((sub) => ({ name: sub.name, parentTitle: parent.title, price: sub.price, parent })),
]);

const enquiryMsg = (name) => `Hi! I need "${name}" from ${BRAND.name}. Please guide me.`;

// ── Side panel with sub-services & pricing ─────────────────────
const ServicePanel = ({ service, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] flex justify-end" role="dialog" aria-modal="true" aria-label={`${service.title} — services and pricing`}>
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm animate-[fadeIn_.25s_ease]" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-w-lg h-full bg-white shadow-2xl flex flex-col animate-[slideIn_.3s_ease]">
        <div className="bg-ink text-white p-6 sm:p-7 relative overflow-hidden">
          <div className="absolute inset-0 hub-pattern" />
          <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center" aria-label="Close">
            <i className="ri-close-line text-xl" />
          </button>
          <div className="relative">
            <span className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center mb-4">
              <i className={`${service.icon} text-2xl text-white`} />
            </span>
            <h3 className="!text-white text-2xl font-bold mb-1">{service.title}</h3>
            <p className="text-white/70 text-[14px] leading-relaxed pr-8">{service.shortDesc}</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto thin-scroll p-5 sm:p-6">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Services & professional fees</p>
          <ul className="space-y-2.5">
            {service.subcategories.map((sub) => (
              <li key={sub.name} className="flex items-center gap-3 border border-gray-100 hover:border-brand/40 rounded-xl px-4 py-3 transition-colors">
                <i className="ri-checkbox-circle-fill text-brand text-lg flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-ink text-[14px] font-semibold leading-snug">
                    {sub.name}
                    {sub.popular && <span className="ml-2 align-middle text-[10px] font-bold uppercase tracking-wider bg-sun/20 text-brand-dark px-2 py-0.5 rounded-full">Popular</span>}
                  </p>
                  <p className="text-brand text-[12px] font-bold mt-0.5">{sub.price}</p>
                </div>
                <a href={waLink(enquiryMsg(sub.name))} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-9 h-9 rounded-full bg-[#25d366]/10 text-[#1da851] hover:bg-[#25d366] hover:text-white flex items-center justify-center transition-colors" aria-label={`Enquire about ${sub.name} on WhatsApp`}>
                  <i className="ri-whatsapp-line text-lg" />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-gray-400 text-[12px] mt-4">* Government fees, where applicable, are charged at actuals.</p>
        </div>

        <div className="p-5 border-t border-gray-100 pb-safe flex flex-col sm:flex-row gap-3">
          {service.page && (
            <Link to={`/services/${service.page}`} onClick={onClose} className="btn-ghost flex-1 !px-5">
              Full details <i className="ri-arrow-right-line" />
            </Link>
          )}
          <a href={waLink(service.whatsappMsg)} target="_blank" rel="noopener noreferrer" className="btn-brand flex-1 !px-5">
            <i className="ri-whatsapp-line text-lg" /> Enquire Now
          </a>
        </div>
      </div>
    </div>
  );
};

// ── Card ───────────────────────────────────────────────────────
// Compact row on phones, full card from `sm` up
const ServiceCard = ({ service, onOpen }) => (
  <button onClick={() => onOpen(service)} className="reveal-card group text-left p-4 sm:p-6 flex flex-col h-full w-full">
    <div className="relative z-10 flex sm:flex-col items-center sm:items-stretch gap-4 sm:gap-0 h-full w-full">
      <div className="flex items-start justify-between sm:mb-6 flex-shrink-0">
        <span className="w-12 h-12 rounded-xl bg-brand-light ring-1 ring-brand/15 group-hover:bg-white/15 group-hover:ring-white/20 flex items-center justify-center transition-colors duration-300">
          <i className={`${service.icon} text-2xl text-brand group-hover:text-white transition-colors duration-300`} />
        </span>
        {service.badge && (
          <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-wider bg-sun/20 text-brand-dark group-hover:bg-sun group-hover:text-ink px-2.5 py-1 rounded-full transition-colors">
            {service.badge}
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1 sm:flex-none">
        <h3 className="text-[16px] sm:text-xl font-semibold !text-ink group-hover:!text-white transition-colors duration-300 sm:mb-2 leading-snug">{service.title}</h3>
        <p className="text-brand group-hover:text-sun text-[13px] font-bold sm:mb-5 transition-colors">From {service.startingPrice}</p>
      </div>
      <i className="ri-arrow-right-s-line text-2xl text-ink/40 sm:hidden" />
      <div className="hidden sm:block w-full h-px bg-ink/10 group-hover:bg-white/20 transition-colors duration-300 mb-5" />
      <p className="hidden sm:block text-gray-600 group-hover:text-white/85 text-[14.5px] leading-relaxed mb-7 flex-1 transition-colors duration-300">{service.shortDesc}</p>
      <span className="hidden sm:inline-flex items-center text-[14px] font-semibold text-ink group-hover:text-white transition-colors duration-300">
        View {service.subcategories.length} services
        <span className="ml-1.5 tracking-tighter text-[16px] leading-none group-hover:translate-x-1 transition-transform">&gt;&gt;</span>
      </span>
    </div>
  </button>
);

// ── Section ────────────────────────────────────────────────────
const ServicesSection = () => {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(null);
  const closePanel = useCallback(() => setActive(null), []);
  const sectionRef = useReveal();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return SEARCH_INDEX.filter((i) => i.name.toLowerCase().includes(q) || i.parentTitle.toLowerCase().includes(q)).slice(0, 12);
  }, [query]);

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-24 bg-mist relative overflow-hidden scroll-mt-20" aria-label="Our services">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[500px] h-[500px] bg-ink/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow mb-6">Our Services</div>
          <h2 className="section-title mb-4">Everything Your Business Needs, Under One Roof</h2>
          <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed">
            {PARENT_SERVICES.length} service categories, 100+ individual services — registrations, funding, filings and advisory, all handled by one team.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-xl mx-auto mb-12">
          <i className="ri-search-line absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a service — GST, ITR, trademark, PF…"
            className="w-full bg-white border border-gray-200 focus:border-brand focus:ring-4 focus:ring-brand/10 rounded-full pl-12 pr-5 py-4 text-ink text-[15px] placeholder-gray-400 outline-none transition-all shadow-sm"
            aria-label="Search services"
          />
          {query.trim() && (
            <div className="absolute top-full left-0 right-0 z-30 mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden">
              {results.length ? (
                <ul className="max-h-80 overflow-y-auto thin-scroll p-2">
                  {results.map((r, i) => (
                    <li key={i}>
                      <button onClick={() => { setActive(r.parent); setQuery(''); }} className="w-full flex items-center justify-between gap-3 text-left px-4 py-3 rounded-xl hover:bg-mist transition-colors">
                        <span className="min-w-0">
                          <span className="block text-ink text-[14px] font-semibold leading-snug">{r.name}</span>
                          <span className="block text-gray-400 text-[12px]">{r.parentTitle}</span>
                        </span>
                        <span className="text-brand text-[12px] font-bold whitespace-nowrap">{r.price.replace('Starting from ', 'From ')}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-5 py-6 text-center">
                  <p className="text-gray-500 text-sm mb-3">No match for “{query}” — we probably still do it.</p>
                  <a href={waLink(`Hi! I'm looking for "${query}". Can ${BRAND.name} help?`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-[#25d366] text-white px-4 py-2 rounded-full font-bold text-xs">
                    <i className="ri-whatsapp-line" /> Ask on WhatsApp
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {PARENT_SERVICES.map((service, i) => (
            <div key={service.id} className="reveal h-full" style={{ transitionDelay: `${(i % 4) * 70}ms` }}>
              <ServiceCard service={service} onOpen={setActive} />
            </div>
          ))}

          {/* Closing card — spans the leftover columns so the grid ends on a full row */}
          <div className="reveal sm:col-span-1 lg:col-span-2 xl:col-span-3 rounded-2xl bg-ink relative overflow-hidden p-7 md:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="absolute inset-0 hub-pattern" />
            <div className="absolute -right-20 -bottom-24 w-72 h-72 rounded-full bg-violet/40 blur-3xl" />
            <div className="relative">
              <p className="text-sun text-[12px] font-bold uppercase tracking-widest mb-2">Can’t find what you need?</p>
              <h3 className="!text-white text-2xl md:text-[28px] font-bold leading-snug max-w-lg">Tell us your requirement — we’ll guide you to the right solution.</h3>
            </div>
            <a href={waLink(`Hi! I need help choosing the right service from ${BRAND.name}.`)} target="_blank" rel="noopener noreferrer" className="relative btn-brand hover:!bg-white hover:!text-ink flex-shrink-0">
              <i className="ri-whatsapp-line text-lg" /> Talk to an Expert
            </a>
          </div>
        </div>
      </div>

      {active && <ServicePanel service={active} onClose={closePanel} />}
    </section>
  );
};

export default ServicesSection;
