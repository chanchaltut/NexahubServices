import React, { useState } from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { BRAND, SERVICE_CATEGORIES, waLink } from '../utils/constants';
import { breadcrumbSchema } from '../utils/schema';

const EMPTY_FORM = { name: '', email: '', phone: '', service: '', message: '' };

const inputClass = 'w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-ink text-[15px] placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all';

const Contact = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${BRAND.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          service: form.service || 'General Enquiry',
          _subject: `New enquiry from ${form.name} — ${BRAND.name} website`,
          _captcha: 'false',
          _template: 'table',
        }),
      });
      const data = await response.json().catch(() => null);
      if (response.ok && (!data || String(data.success) === 'true')) {
        setStatus('success');
        setForm(EMPTY_FORM);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const contactInfo = [
    { icon: 'ri-phone-line', title: 'Call Us', value: BRAND.phone, href: BRAND.phoneLink },
    { icon: 'ri-whatsapp-line', title: 'WhatsApp', value: BRAND.phone, href: waLink(), external: true },
    { icon: 'ri-mail-line', title: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: 'ri-map-pin-line', title: 'Office', value: BRAND.address, href: BRAND.mapLink },
    { icon: 'ri-time-line', title: 'Working Hours', value: BRAND.timings },
  ];

  return (
    <>
      <SEO
        title="Contact Us | Nexa Hub Services — Free Tax & Compliance Consultation"
        description="Contact Nexa Hub Services, Ahmedabad — call or WhatsApp +91 98750 37579 for GST, PMEGP loan, Startup India, trademark, MSME, FSSAI and IEC registration. Quick response, free guidance."
        keywords="contact Nexa Hub Services, tax consultant contact, GST consultant phone number, free tax consultation, company registration enquiry"
        path="/contact"
        jsonLd={[breadcrumbSchema([{ name: 'Contact Us', path: '/contact' }])]}
      />

      <PageHero
        eyebrow="Contact"
        title="Let’s Talk About"
        highlight="Your Business"
        description="Tell us what you need — our team will get back to you with a clear plan and a fixed quote, usually within a few hours."
        crumbs={[{ name: 'Contact Us' }]}
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-[1fr_1.5fr] gap-10">
          {/* Info */}
          <div className="space-y-4">
            {contactInfo.map((c) => {
              const Tag = c.href ? 'a' : 'div';
              return (
                <Tag
                  key={c.title}
                  {...(c.href ? { href: c.href } : {})}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-start gap-4 rounded-2xl border border-gray-100 hover:border-brand/40 bg-slate-50 p-5 transition-colors"
                >
                  <span className="w-12 h-12 rounded-xl bg-white group-hover:bg-brand flex items-center justify-center flex-shrink-0 shadow-sm transition-colors">
                    <i className={`${c.icon} text-xl text-brand group-hover:text-white transition-colors`} />
                  </span>
                  <span>
                    <span className="block text-[12px] font-bold uppercase tracking-widest text-gray-400 mb-1">{c.title}</span>
                    <span className="block text-ink font-semibold text-[15px] break-words">{c.value}</span>
                  </span>
                </Tag>
              );
            })}
          </div>

          {/* Form */}
          <div className="rounded-4xl bg-mist p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Send Us a Message</h2>
            <p className="text-gray-500 mb-8">Fields marked * are required.</p>

            {status === 'success' && (
              <div className="bg-brand-light border border-brand/30 text-ink rounded-2xl p-5 flex gap-3 mb-6" role="status">
                <i className="ri-checkbox-circle-fill text-brand text-2xl" />
                <div>
                  <p className="font-bold">Message sent!</p>
                  <p className="text-[14px] text-gray-600">Thank you for reaching out. Our team will contact you shortly.</p>
                </div>
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-ink rounded-2xl p-5 flex gap-3 mb-6" role="alert">
                <i className="ri-error-warning-fill text-red-500 text-2xl" />
                <div>
                  <p className="font-bold">We couldn’t send your message.</p>
                  <p className="text-[14px] text-gray-600 mb-3">Please reach us directly on WhatsApp or phone instead.</p>
                  <a href={waLink(`Hi ${BRAND.name}! I wanted to enquire about: ${form.service || form.message || 'your services'}`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25d366] text-white px-4 py-2 rounded-full font-bold text-xs">
                    <i className="ri-whatsapp-line" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block text-[14px] font-semibold text-ink mb-2">Full Name *</span>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required autoComplete="name" className={inputClass} placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="block text-[14px] font-semibold text-ink mb-2">Phone Number *</span>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required autoComplete="tel" className={inputClass} placeholder="10-digit mobile number" />
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block text-[14px] font-semibold text-ink mb-2">Email Address *</span>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required autoComplete="email" className={inputClass} placeholder="you@example.com" />
                </label>
                <label className="block">
                  <span className="block text-[14px] font-semibold text-ink mb-2">Service Required</span>
                  <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
                    <option value="">Select a service</option>
                    {SERVICE_CATEGORIES.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="block text-[14px] font-semibold text-ink mb-2">Message *</span>
                <textarea name="message" value={form.message} onChange={handleChange} required rows="5" className={`${inputClass} resize-none`} placeholder="How can we help you?" />
              </label>
              <button type="submit" disabled={status === 'submitting'} className="btn-brand w-full sm:w-auto disabled:opacity-70">
                {status === 'submitting' ? (
                  <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending…</>
                ) : (
                  <><i className="ri-send-plane-fill" /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map — swap the query for the exact office address when available */}
      <section className="pb-20 bg-white" aria-label="Location map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="relative rounded-4xl overflow-hidden border border-gray-100 shadow-soft h-[320px] md:h-[420px]">
            <iframe
              title={`${BRAND.name} location — ${BRAND.city}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(BRAND.address)}&output=embed`}
              className="w-full h-full border-0 grayscale-[30%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6 bg-white rounded-2xl shadow-xl p-5 max-w-[280px]">
              <p className="text-[11px] font-bold uppercase tracking-widest text-brand mb-1">Visit us</p>
              <p className="text-ink font-bold leading-snug">{BRAND.name}</p>
              <p className="text-gray-500 text-[14px]">{BRAND.address}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
