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
      description="Nexa Hub Services, Ahmedabad empowers startups & MSMEs with business registration, government funding and compliance support — GST, PMEGP loans with up to 35% subsidy, Startup India (DPIIT), trademark, MSME Udyam, FSSAI and IEC. Quick response, 100% online across India."
      keywords="Nexa Hub Services, NexaHub, Nexa Hub Ahmedabad, Yogi Surendra Nath, PMEGP loan Ahmedabad, PMEGP loan consultant Gujarat, Startup India registration, DPIIT recognition, trademark registration Ahmedabad, MSME Udyam registration, FSSAI licence Ahmedabad, IEC registration, GST registration Ahmedabad, GST registration online, GST return filing, company registration India, private limited company registration, LLP registration, Mudra loan, CGTMSE loan, project report for bank loan, business registration consultant near me"
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
