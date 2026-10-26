import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import FeaturedServices from '../components/FeaturedServices';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import StatsBar from '../components/StatsBar';
import WhyChooseUs from '../components/WhyChooseUs';
import ProcessSection from '../components/ProcessSection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTABanner from '../components/CTABanner';
import FAQSection from '../components/FAQSection';
import ContactBand from '../components/ContactBand';
import { FAQS } from '../utils/constants';
import { faqSchema } from '../utils/schema';

const Home = () => (
  <>
    <SEO
      title="Nexa Hub Services Ahmedabad | GST, PMEGP Loan, Startup India, Trademark & MSME Registration"
      description="Nexa Hub Services, Ahmedabad empowers startups & MSMEs with business registration from A to Z — GST, PMEGP loans with up to 35% subsidy, Startup India (DPIIT), trademark, MSME Udyam, FSSAI, IEC, income tax and compliance. Quick response, 100% online across India."
      keywords="Nexa Hub Services, NexaHub, Nexa Hub Ahmedabad, Yogi Surendra Nath, PMEGP loan Ahmedabad, PMEGP loan consultant Gujarat, Startup India registration, DPIIT recognition, trademark registration Ahmedabad, MSME Udyam registration, FSSAI licence Ahmedabad, IEC registration, GST registration Ahmedabad, GST registration online, GST return filing, ITR filing online, income tax return filing, company registration India, private limited company registration, LLP registration, TDS return filing, ROC compliance, MSME Udyam registration, trademark registration, accounting and bookkeeping services, tax consultant near me, business compliance services India"
      path="/"
      jsonLd={[faqSchema(FAQS)]}
    />

    <Hero />
    <Marquee />
    <FeaturedServices />
    <ServicesSection />
    <AboutSection />
    <StatsBar />
    <WhyChooseUs />
    <ProcessSection />
    <TeamSection />
    <TestimonialsSection />
    <CTABanner />
    <FAQSection />
    <ContactBand />
  </>
);

export default Home;
