import React from 'react';
import { BRAND, WHY_CHOOSE_US, waLink } from '../utils/constants';
import useReveal from '../hooks/useReveal';

const WhyChooseUs = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-20 md:py-24 bg-white relative overflow-hidden" aria-label={`Why choose ${BRAND.name}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-20">
          {/* Visual collage */}
          <div className="reveal w-full lg:w-1/2 grid grid-cols-5 grid-rows-6 gap-4 h-[420px] md:h-[520px]">
            <div className="col-span-3 row-span-6 rounded-4xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80" alt="Consultant reviewing financial reports" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-2 row-span-3 rounded-4xl bg-ink text-white p-5 md:p-6 flex flex-col justify-end relative overflow-hidden">
              <div className="absolute inset-0 hub-pattern" />
              <i className="relative ri-double-quotes-l text-4xl text-sun mb-2" />
              <p className="relative text-[13px] md:text-[15px] font-semibold leading-snug">
                Your work, our responsibility. No confusion, no delay.
              </p>
            </div>
            <div className="col-span-2 row-span-3 rounded-4xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80" alt="Team discussing a business plan" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <div className="reveal eyebrow-outline mb-6">Why Choose Us</div>
            <h2 className="reveal section-title lg:text-5xl mb-5">Trusted, Professional & Always Within Reach</h2>
            <p className="reveal text-gray-500 text-[16px] leading-[1.8] mb-9">
              From your first registration to government funding and yearly compliance, you get one dedicated team, plain-language advice and quick answers whenever you need them.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7 mb-10">
              {WHY_CHOOSE_US.map((f, i) => (
                <div key={f.title} className="reveal flex gap-4" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                    <i className={`${f.icon} text-xl text-brand`} />
                  </span>
                  <div>
                    <h4 className="font-bold text-ink text-[17px] mb-1.5">{f.title}</h4>
                    <p className="text-gray-500 text-[14px] leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href={waLink(`Hi! I'd like to consult with an expert at ${BRAND.name}.`)} target="_blank" rel="noopener noreferrer" className="reveal btn-brand">
              Get Free Guidance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
