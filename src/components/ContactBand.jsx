import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND, waLink } from '../utils/constants';

const details = [
  { label: 'Email Address', value: BRAND.email, href: `mailto:${BRAND.email}`, icon: 'ri-mail-line' },
  { label: 'Phone', value: BRAND.phone, href: BRAND.phoneLink, icon: 'ri-phone-line' },
  { label: 'Working Hours', value: BRAND.timings, icon: 'ri-time-line' },
  { label: 'Office', value: BRAND.address, href: BRAND.mapLink, icon: 'ri-map-pin-line' },
];

const ContactBand = () => (
  <section className="relative w-full py-20 md:py-24 bg-ink-950 overflow-hidden" aria-label="Contact details">
    <img
      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover opacity-25"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/40" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white leading-[1.2] mb-10">Let’s Simplify Your Business Compliance</h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-7">
          {details.map((d) => {
            const Tag = d.href ? 'a' : 'div';
            return (
              <Tag key={d.label} {...(d.href ? { href: d.href } : {})} className="group flex gap-4">
                <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-sun flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <i className={`${d.icon} text-lg`} />
                </span>
                <span>
                  <span className="block text-white/50 text-[11px] font-bold uppercase tracking-widest mb-1.5">{d.label}</span>
                  <span className="block text-white text-[16px] md:text-[17px] font-medium break-words">{d.value}</span>
                </span>
              </Tag>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-2xl">
        <h3 className="text-ink text-[22px] font-bold mb-2 flex items-center gap-2">
          Let’s Talk — Free Consultation <i className="ri-arrow-right-up-line text-brand" />
        </h3>
        <p className="text-gray-500 text-[14px] leading-relaxed mb-7">
          Book a free session with our team and get a clear, step-by-step plan for your business — no obligations.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={waLink('Hi! I would like to book a free consultation.')} target="_blank" rel="noopener noreferrer" className="btn-ink">
            <i className="ri-whatsapp-line" /> Book on WhatsApp
          </a>
          <Link to="/contact" className="btn-ghost">Send a Message</Link>
        </div>
      </div>
    </div>
  </section>
);

export default ContactBand;
