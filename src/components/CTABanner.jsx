import React from 'react';
import { BRAND, waLink } from '../utils/constants';

const CTABanner = () => (
  <section className="px-3 sm:px-4 lg:px-12 py-8 max-w-[1920px] mx-auto" aria-label="Get started">
    <div className="relative rounded-[1.5rem] md:rounded-4xl overflow-hidden min-h-[460px] flex items-end">
      <img
        src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=2000&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/20" />

      <div className="relative z-10 w-full px-6 md:px-14 pb-10 md:pb-14 pt-40 grid lg:grid-cols-2 gap-10 items-end">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white leading-[1.2] mb-5">
            Ready to Take Your Business <span className="text-sun">to the Next Level?</span>
          </h2>
          <p className="text-white/80 text-[15px] md:text-[16px] max-w-lg">
            Join entrepreneurs across India who trust {BRAND.name} with their registrations, government funding and day-to-day compliance.
          </p>
        </div>

        <div className="lg:justify-self-end w-full max-w-md bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-7">
          <p className="text-white text-[20px] md:text-[22px] font-medium leading-snug mb-6">
            Get your business officially registered & fully compliant — <span className="font-bold">starting today.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={waLink('Hi! I would like to start with a free consultation.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-sun text-ink px-7 py-3.5 rounded-full font-bold text-[15px] transition-colors shadow-lg">
              Start Your Free Consultation
            </a>
            <a href={BRAND.phoneLink} className="inline-flex items-center justify-center gap-2 text-white border border-white/30 hover:bg-white/10 px-6 py-3.5 rounded-full font-semibold text-[15px] transition-colors">
              <i className="ri-phone-line" /> Call
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
