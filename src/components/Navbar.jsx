import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import Logo from './Logo';
import { BRAND, NAV_SERVICE_GROUPS, waLink } from '../utils/constants';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/#services', mega: true },
  { name: 'About Us', href: '/about' },
  { name: 'Insights', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const socials = [
  { icon: FaFacebookF, href: BRAND.social.facebook, label: 'Facebook' },
  { icon: FaInstagram, href: BRAND.social.instagram, label: 'Instagram' },
  { icon: FaLinkedinIn, href: BRAND.social.linkedin, label: 'LinkedIn' },
  { icon: FaXTwitter, href: BRAND.social.twitter, label: 'X (Twitter)' },
].filter((s) => s.href);

const TopBar = () => (
  <div className="hidden md:block w-full bg-mist/60 border-b border-gray-100">
    <div className="max-w-8xl mx-auto px-6 lg:px-12 py-2.5 flex items-center justify-between text-[13px] font-medium text-gray-500">
      <div className="flex items-center gap-7">
        <a href={BRAND.phoneLink} className="flex items-center gap-2 hover:text-brand transition-colors">
          <i className="ri-phone-line text-brand" /> Call: {BRAND.phone}
        </a>
        <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-brand transition-colors">
          <i className="ri-mail-line text-brand" /> {BRAND.email}
        </a>
        <span className="hidden lg:flex items-center gap-2">
          <i className="ri-time-line text-brand" /> {BRAND.timings}
        </span>
      </div>
      <div className="flex items-center gap-4">
        {socials.length > 0 && <span className="text-gray-400">Follow us</span>}
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#1da851] hover:text-brand transition-colors">
          <i className="ri-whatsapp-line text-base" /> Chat on WhatsApp
        </a>
        <span className="flex items-center gap-1.5"><i className="ri-map-pin-line text-brand" /> {BRAND.city}, India</span>
        {socials.map(({ icon, href, label }) => {
          const Icon = icon;
          return (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="hover:text-brand hover:scale-110 transition-all">
              <Icon className="text-[13px]" />
            </a>
          );
        })}
      </div>
    </div>
  </div>
);

const MegaMenu = () => (
  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-5 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
    <div className="w-[840px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-7 grid grid-cols-[1fr_1fr_1fr_210px] gap-7">
      {NAV_SERVICE_GROUPS.map((group) => (
        <div key={group.heading}>
          <h4 className="text-[11px] font-bold text-brand tracking-widest uppercase mb-4">{group.heading}</h4>
          <ul className="space-y-3">
            {group.links.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="block text-[14px] font-medium text-gray-600 hover:text-brand hover:translate-x-1 transition-all">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="rounded-xl bg-ink p-5 text-white flex flex-col">
        <i className="ri-customer-service-2-line text-2xl text-sun mb-3" />
        <p className="font-bold text-[15px] leading-snug mb-1">Not sure what you need?</p>
        <p className="text-white/60 text-[12px] leading-relaxed mb-4">Message us — quick response, free guidance.</p>
        <a href={waLink('Hi! I need help choosing the right service.')} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-bold text-sun hover:gap-2.5 transition-all">
          Ask on WhatsApp <i className="ri-arrow-right-line" />
        </a>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/' && !location.hash;
    if (href.startsWith('/#')) return location.pathname.startsWith('/services');
    return location.pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <>
      <TopBar />

      <header className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ${scrolled ? 'py-3 shadow-soft' : 'py-4 lg:py-5'}`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" aria-label={`${BRAND.name} — Home`} className="flex-shrink-0">
            <Logo className="h-10 sm:h-11" />
          </Link>

          <nav className="hidden lg:flex items-center gap-9" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.href}
                  className={`relative flex items-center gap-1 py-2 text-[15px] font-medium transition-colors ${isActive(link.href) ? 'text-brand' : 'text-gray-700 hover:text-brand'}`}
                >
                  {link.name}
                  {link.mega && <i className="ri-arrow-down-s-line text-base transition-transform group-hover:rotate-180" />}
                  <span className={`absolute left-0 bottom-0 h-[2px] rounded-full bg-brand-gradient transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
                {link.mega && <MegaMenu />}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href={waLink('Hi! I would like a free consultation.')} target="_blank" rel="noopener noreferrer" className="btn-brand !px-6 !py-3 !text-[14px]">
              <i className="ri-chat-smile-3-line text-base" /> Free Consultation
            </a>
          </div>

          <button
            className="lg:hidden w-11 h-11 rounded-xl flex items-center justify-center text-ink hover:bg-mist transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <i className="ri-menu-3-line text-2xl" />
          </button>
        </div>
      </header>

      {/* ─── Mobile drawer ─── */}
      <div className={`lg:hidden fixed inset-0 z-[60] ${isOpen ? '' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
        <aside
          className={`absolute top-0 left-0 h-full w-full max-w-[330px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <Logo className="h-10" />
            <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors" aria-label="Close menu">
              <i className="ri-close-line text-2xl" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-4">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 last:border-0">
                {link.mega ? (
                  <>
                    <button onClick={() => setServicesOpen((o) => !o)} className="w-full flex items-center justify-between py-3.5 text-[16px] font-bold text-ink" aria-expanded={servicesOpen}>
                      {link.name}
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${servicesOpen ? 'bg-brand/10 text-brand rotate-180' : 'bg-gray-50'}`}>
                        <i className="ri-arrow-down-s-line" />
                      </span>
                    </button>
                    <div className={`accordion-body ${servicesOpen ? 'open' : ''}`}>
                      <div>
                        <div className="pl-4 ml-1 mb-4 border-l-2 border-brand/20 space-y-5">
                          {NAV_SERVICE_GROUPS.map((g) => (
                            <div key={g.heading}>
                              <h4 className="text-[11px] font-bold text-brand tracking-widest uppercase mb-2.5">{g.heading}</h4>
                              <ul className="space-y-2.5">
                                {g.links.map((l) => (
                                  <li key={l.href}>
                                    <Link to={l.href} className="block text-[15px] font-medium text-gray-600 hover:text-brand">{l.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          <Link to="/#services" className="inline-flex items-center gap-1 text-[14px] font-bold text-brand">
                            All services & pricing <i className="ri-arrow-right-line" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link.href} className={`block py-3.5 text-[16px] font-bold ${isActive(link.href) ? 'text-brand' : 'text-ink hover:text-brand'}`}>
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="p-5 bg-mist/60 border-t border-gray-100 space-y-4 pb-safe">
            <a href={BRAND.phoneLink} className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white bg-brand-gradient shadow-lg active:scale-95 transition-transform">
              <i className="ri-phone-fill" /> Call Us Now
            </a>
            <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 text-[14px] font-semibold text-gray-600 hover:text-brand">
              <span className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center"><i className="ri-mail-line" /></span>
              <span className="break-all">{BRAND.email}</span>
            </a>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
