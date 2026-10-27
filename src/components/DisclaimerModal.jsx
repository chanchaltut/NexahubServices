import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { BRAND, waLink } from '../utils/constants';

const STORAGE_KEY = 'nexahub_welcome_v1';

const quickServices = [
  { icon: 'ri-funds-line', label: 'PMEGP Loan', href: '/services/pmegp-loan' },
  { icon: 'ri-receipt-line', label: 'GST Registration', href: '/services/gst-services' },
  { icon: 'ri-rocket-2-line', label: 'Startup India', href: '/services/startup-india' },
  { icon: 'ri-service-line', label: 'Trademark', href: '/services/trademark-registration' },
];

const readFlag = () => {
  try { return sessionStorage.getItem(STORAGE_KEY); } catch { return '1'; }
};

// Welcome popup shown once per browser session
const DisclaimerModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (readFlag()) return;
    const timer = setTimeout(() => setShow(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setShow(false);
    try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch { /* storage unavailable */ }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-3 sm:p-4" role="dialog" aria-modal="true" aria-label={`Welcome to ${BRAND.name}`}>
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm animate-[fadeIn_.3s_ease]" onClick={dismiss} aria-hidden="true" />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-[popIn_.35s_ease]">
        <div className="relative bg-ink px-6 pt-6 pb-8 overflow-hidden">
          <div className="absolute inset-0 hub-pattern" />
          <div className="relative flex items-start justify-between">
            <Logo variant="light" className="h-10" />
            <button onClick={dismiss} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center" aria-label="Close">
              <i className="ri-close-line text-xl" />
            </button>
          </div>
          <h2 className="relative !text-white text-2xl font-bold mt-6 leading-snug">
            Start, fund & grow — <span className="text-gradient">we handle the rest.</span>
          </h2>
        </div>

        <div className="p-6">
          <p className="text-gray-500 text-[14px] mb-5">Most requested right now — tap to explore:</p>
          <div className="grid grid-cols-2 gap-2.5 mb-6">
            {quickServices.map((s) => (
              <Link key={s.label} to={s.href} onClick={dismiss} className="flex items-center gap-2.5 rounded-xl border border-gray-100 hover:border-brand/40 bg-slate-50 px-3.5 py-3 transition-colors">
                <i className={`${s.icon} text-brand text-lg`} />
                <span className="text-ink font-semibold text-[13px]">{s.label}</span>
              </Link>
            ))}
          </div>
          <div className="flex gap-3">
            <button onClick={dismiss} className="flex-1 btn-ghost !px-4 !py-3 !text-[14px]">Explore Site</button>
            <a href={waLink(`Hi! I would like to consult with ${BRAND.name}.`)} target="_blank" rel="noopener noreferrer" onClick={dismiss} className="flex-1 btn-brand !px-4 !py-3 !text-[14px]">
              <i className="ri-whatsapp-line" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
