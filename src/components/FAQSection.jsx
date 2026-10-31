import React, { useState } from 'react';
import { FAQS, BRAND, waLink } from '../utils/constants';

const FAQSection = ({ faqs = FAQS }) => {
  const [openId, setOpenId] = useState(faqs[0]?.id);

  return (
    <section id="faq" className="py-20 md:py-24 bg-white scroll-mt-20" aria-label="Frequently asked questions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
        <div className="lg:sticky lg:top-32 self-start">
          <div className="eyebrow mb-6">FAQ</div>
          <h2 className="section-title lg:text-5xl mb-5">Questions & Answers</h2>
          <p className="text-gray-500 text-[16px] leading-relaxed mb-8 max-w-md">
            Quick, clear answers to the questions we hear most about registrations, government funding and compliance.
          </p>
          <div className="rounded-3xl bg-mist p-7 max-w-md">
            <p className="text-ink font-bold text-lg mb-1">Still have a question?</p>
            <p className="text-gray-500 text-[14px] mb-5">Our team usually replies within minutes during working hours.</p>
            <div className="flex flex-wrap gap-3">
              <a href={waLink(`Hi! I have a question for ${BRAND.name}.`)} target="_blank" rel="noopener noreferrer" className="btn-brand !py-3 !px-5 !text-[14px]">
                <i className="ri-whatsapp-line" /> WhatsApp Us
              </a>
              <a href={BRAND.phoneLink} className="btn-ghost !py-3 !px-5 !text-[14px] bg-white">
                <i className="ri-phone-line" /> Call
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`rounded-2xl border transition-colors ${isOpen ? 'border-brand/40 bg-brand-light/40' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                <h3>
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${faq.id}`}
                  >
                    <span className="font-semibold text-ink text-[16px] leading-snug">{faq.q}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-brand text-white rotate-45' : 'bg-mist text-ink'}`}>
                      <i className="ri-add-line text-lg" />
                    </span>
                  </button>
                </h3>
                <div id={`faq-${faq.id}`} className={`accordion-body ${isOpen ? 'open' : ''}`}>
                  <div>
                    <p className="px-6 pb-6 text-gray-600 text-[15px] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
