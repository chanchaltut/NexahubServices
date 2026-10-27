import React, { useRef } from 'react';
import { TESTIMONIALS, STATS } from '../utils/constants';
import useReveal from '../hooks/useReveal';

const Stars = ({ count = 5, className = '' }) => (
  <div className={`flex gap-0.5 ${className}`} aria-label={`${count} out of 5 stars`}>
    {[...Array(count)].map((_, i) => <i key={i} className="ri-star-fill" />)}
  </div>
);

const TestimonialsSection = () => {
  const ref = useReveal();
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('article');
    track.scrollBy({ left: dir * ((card?.offsetWidth || 320) + 20), behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="py-20 md:py-24 bg-white overflow-hidden" aria-label="Client testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="reveal eyebrow mb-6">Client Stories</div>
            <h2 className="reveal section-title">Trusted by Entrepreneurs Across Gujarat & India</h2>
          </div>
          <div className="reveal flex gap-3">
            {[-1, 1].map((dir) => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                className="w-12 h-12 rounded-full border border-gray-200 hover:border-brand hover:bg-brand hover:text-white text-ink flex items-center justify-center transition-colors"
                aria-label={dir < 0 ? 'Previous testimonials' : 'Next testimonials'}
              >
                <i className={`ri-arrow-${dir < 0 ? 'left' : 'right'}-line text-lg`} />
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-5">
          {/* Summary card */}
          <div className="reveal rounded-3xl bg-ink text-white p-8 flex flex-col justify-between relative overflow-hidden min-h-[260px]">
            <div className="absolute inset-0 hub-pattern" />
            <div className="relative">
              <Stars className="text-sun text-lg mb-4" />
              <p className="text-[56px] font-bold leading-none">{STATS[0].number}{STATS[0].suffix}</p>
              <p className="text-white/70 mt-2">happy clients across India</p>
            </div>
            <p className="relative text-white/50 text-[13px] mt-8">Real people. Real businesses. Zero missed deadlines.</p>
          </div>

          {/* Carousel */}
          <div ref={trackRef} className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2">
            {TESTIMONIALS.map((t) => (
              <article key={t.id} className="snap-start flex-shrink-0 w-[85%] sm:w-[340px] rounded-3xl border border-gray-100 bg-slate-50 p-7 flex flex-col">
                <Stars count={t.rating} className="text-sun mb-5" />
                <p className="text-ink/80 text-[15.5px] leading-relaxed mb-7 flex-1">“{t.text}”</p>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-200">
                  <span className="w-11 h-11 rounded-full bg-brand-gradient text-white flex items-center justify-center font-bold text-lg">{t.name[0]}</span>
                  <div>
                    <p className="text-ink font-bold text-[15px]">{t.name}</p>
                    <p className="text-gray-500 text-[13px]">{t.role} · {t.city}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
