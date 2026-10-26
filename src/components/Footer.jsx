import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import Logo from './Logo';
import { BRAND, DEVELOPER, waLink } from '../utils/constants';

const popularServices = [
  { name: 'PMEGP Loan Scheme', href: '/services/pmegp-loan' },
  { name: 'GST Registration', href: '/services/gst-services' },
  { name: 'Startup India (DPIIT)', href: '/services/startup-india' },
  { name: 'Trademark Registration', href: '/services/trademark-registration' },
  { name: 'MSME (Udyam) Registration', href: '/services/msme-registration' },
  { name: 'FSSAI Food Licence', href: '/services/fssai-registration' },
  { name: 'Import Export Code (IEC)', href: '/services/iec-registration' },
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'All Services', href: '/#services' },
  { name: 'Insights & Guides', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
];

const usefulLinks = [
  { name: 'Income Tax Filing', href: '/services/income-tax' },
  { name: 'Company Registration', href: '/services/business-registration' },
  { name: 'Project Reports & CMA', href: '/services/project-reports' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-conditions' },
];

const socials = [
  { icon: FaFacebookF, href: BRAND.social.facebook, label: 'Facebook' },
  { icon: FaInstagram, href: BRAND.social.instagram, label: 'Instagram' },
  { icon: FaLinkedinIn, href: BRAND.social.linkedin, label: 'LinkedIn' },
  { icon: FaXTwitter, href: BRAND.social.twitter, label: 'X (Twitter)' },
  { icon: FaWhatsapp, href: waLink(), label: 'WhatsApp' },
].filter((s) => s.href);

const LinkColumn = ({ title, links }) => (
  <div>
    <h4 className="font-bold text-[18px] mb-7 !text-white">{title}</h4>
    <ul className="space-y-3.5">
      {links.map((l) => (
        <li key={l.href}>
          <Link to={l.href} className="text-white/70 hover:text-white text-[14px] flex items-center gap-3 transition-colors group">
            <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-sun group-hover:w-3 transition-all" />
            {l.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-ink relative overflow-hidden pt-20 pb-8 text-white">
      <div className="absolute inset-0 hub-pattern opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.8fr_1fr] gap-12 lg:gap-10 mb-16">
          <div className="flex flex-col">
            <Link to="/" className="mb-6 w-fit" aria-label={`${BRAND.name} — Home`}>
              <Logo variant="light" className="h-10" />
            </Link>
            <p className="text-white/70 text-[14px] leading-[1.8] mb-6 max-w-sm">
              Empowering startups & MSMEs with strategic advisory, funding, compliance and business registration from A to Z.
            </p>
            <ul className="space-y-3 mb-8 text-[14px] text-white/70">
              <li className="flex gap-3"><i className="ri-map-pin-line text-sun" /><span>{BRAND.address}</span></li>
              <li><a href={BRAND.phoneLink} className="flex gap-3 hover:text-white"><i className="ri-phone-line text-sun" />{BRAND.phone}</a></li>
              <li><a href={`mailto:${BRAND.email}`} className="flex gap-3 hover:text-white break-all"><i className="ri-mail-line text-sun" />{BRAND.email}</a></li>
            </ul>

            <h4 className="font-bold text-[16px] mb-4 !text-white">Get compliance reminders</h4>
            {subscribed ? (
              <p className="text-sun text-[14px] font-semibold">Thanks! You’re on the list.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center w-full max-w-[340px]">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="w-full bg-ink-700 border border-white/10 rounded-full h-[52px] pl-6 pr-[120px] text-[14px] text-white placeholder:text-white/50 focus:outline-none focus:border-white/30 transition-colors"
                />
                <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 bg-white hover:bg-sun text-ink px-6 rounded-full font-bold text-[14px] transition-colors">
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <LinkColumn title="Popular Services" links={popularServices} />
          <LinkColumn title="Company" links={companyLinks} />
          <LinkColumn title="Useful Links" links={usefulLinks} />
        </div>

        <div className="relative flex items-center justify-center mb-8">
          <div className="absolute w-full h-px bg-white/10" />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="relative z-10 w-11 h-11 bg-ink border border-white/10 rounded-[10px] flex items-center justify-center hover:bg-ink-700 transition-colors"
            aria-label="Back to top"
          >
            <i className="ri-arrow-up-line text-lg" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-white/70 text-[14px] text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-bold text-white">{BRAND.name}</span>. All Rights Reserved.
            <span className="hidden md:inline mx-2 opacity-40">|</span>
            <span className="block md:inline mt-1 md:mt-0 text-white/50">
              Designed & developed by{' '}
              <a href={DEVELOPER.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-semibold">{DEVELOPER.name}</a>
              <a href={`https://wa.me/${DEVELOPER.whatsapp}?text=${encodeURIComponent(`Hi ${DEVELOPER.name}! I saw your work on ${BRAND.domain}.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex align-middle ml-1.5 text-white/50 hover:text-[#25d366] transition-colors" aria-label={`Contact ${DEVELOPER.name} on WhatsApp`}>
                <FaWhatsapp />
              </a>
            </span>
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon, href, label }) => {
              const Icon = icon;
              return (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/70 hover:bg-brand hover:text-white transition-all">
                  <Icon className="text-[13px]" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
