import React from 'react';
import { PROCESS_STEPS } from '../utils/constants';
import useReveal from '../hooks/useReveal';

const ProcessSection = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-20 md:py-24 bg-ink relative overflow-hidden" aria-label="How it works">
      <div className="absolute inset-0 hub-pattern pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[460px] h-[360px] bg-berry/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 text-sun font-bold text-[12px] tracking-[0.18em] uppercase mb-6">How It Works</div>
            <h2 className="reveal text-3xl md:text-4xl lg:text-[44px] font-bold !text-white leading-[1.2]">Four Simple Steps. Zero Office Visits.</h2>
          </div>
          <p className="reveal text-white/60 text-[16px] leading-relaxed max-w-md">
            Most services are completed within 24–72 hours once documents are shared — all from your phone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.step}
              className="reveal group relative rounded-2xl bg-ink-700/60 border border-white/10 hover:border-brand/60 p-7 transition-colors duration-300"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="absolute top-5 right-6 text-[56px] font-bold leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.18)] group-hover:[-webkit-text-stroke:1px_rgba(255,170,28,0.75)] transition-all">
                {step.step}
              </span>
              <span className="w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center mb-8 shadow-glow">
                <i className={`${step.icon} text-2xl text-white`} />
              </span>
              <h3 className="!text-white text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-white/60 text-[14.5px] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
