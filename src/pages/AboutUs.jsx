import React from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import AboutSection from '../components/AboutSection';
import StatsBar from '../components/StatsBar';
import WhyChooseUs from '../components/WhyChooseUs';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTABanner from '../components/CTABanner';
import { ABOUT, BRAND } from '../utils/constants';
import { breadcrumbSchema } from '../utils/schema';

const values = [
  { icon: 'ri-focus-3-line', title: 'Our Mission', text: 'Empower startups and MSMEs with strategic advisory, funding, compliance and digital transformation — simply and affordably.' },
  { icon: 'ri-eye-line', title: 'Our Vision', text: 'To be the most trusted single hub where businesses start, stay compliant and scale — without ever worrying about paperwork.' },
  { icon: 'ri-heart-3-line', title: 'Our Promise', text: 'Your work, our responsibility. No confusion, no delay — and a quick response whenever you need us.' },
];

const AboutUs = () => (
  <>
    <SEO
      title="About Us | Nexa Hub Services — Tax, Compliance & Business Registration Experts"
      description="Nexa Hub Services, founded by Yogi Surendra Nath in Ahmedabad, empowers startups & MSMEs with strategic advisory, government funding, compliance and business registration from A to Z."
      keywords="about Nexa Hub Services, tax consultants India, business compliance firm, online tax filing company, company registration experts"
      path="/about"
      jsonLd={[breadcrumbSchema([{ name: 'About Us', path: '/about' }])]}
    />

    <PageHero
      eyebrow="About Us"
      title="Empowering Startups"
      highlight="& MSMEs"
      description={`${BRAND.name} brings registrations, tax filings and ongoing compliance under one roof — so you can focus on building your business.`}
      crumbs={[{ name: 'About Us' }]}
    />

    <AboutSection showCta={false} />

    <section className="pb-8 bg-white" aria-label="Mission and values">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid md:grid-cols-3 gap-5">
        {values.map((v) => (
          <div key={v.title} className="reveal-card group p-8">
            <div className="relative z-10">
              <i className={`${v.icon} text-3xl text-brand group-hover:text-sun transition-colors mb-5 block`} />
              <h3 className="text-xl font-bold mb-3 group-hover:!text-white transition-colors">{v.title}</h3>
              <p className="text-gray-600 group-hover:text-white/85 text-[15px] leading-relaxed transition-colors">{v.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <StatsBar />
    <WhyChooseUs />

    <section className="py-16 bg-slate-50" aria-label="Who we serve">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="eyebrow mb-6">Who We Serve</div>
        <h2 className="section-title mb-10">Built for Every Kind of Taxpayer</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {ABOUT.clientCategories.map((c) => (
            <span key={c} className="bg-white border border-gray-200 rounded-full px-5 py-2.5 text-[14px] font-semibold text-ink">{c}</span>
          ))}
        </div>
      </div>
    </section>

    <TeamSection />
    <TestimonialsSection />
    <CTABanner />
  </>
);

export default AboutUs;
