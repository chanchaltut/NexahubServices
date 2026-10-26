/**
 * Service detail page — rendered for every /services/:slug route.
 */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';
import FAQSection from '../../components/FAQSection';
import ProcessSection from '../../components/ProcessSection';
import NotFound from '../../components/NotFound';
import { BRAND, SERVICES, FAQS, waLink } from '../../utils/constants';
import { breadcrumbSchema, faqSchema, serviceSchema } from '../../utils/schema';

const imageAt = (url, width) => url.replace(/w=\d+/, `w=${width}`);

const ServicePage = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return <NotFound />;

  const path = `/services/${service.slug}`;
  const faqs = service.faqs || FAQS;
  const sameCategory = SERVICES.filter((s) => s.slug !== service.slug && s.category === service.category);
  const related = [...sameCategory, ...SERVICES.filter((s) => s.slug !== service.slug && !sameCategory.includes(s))].slice(0, 3);

  // keyed fragment remounts the page (scroll-reveal, FAQ state) when moving between services
  return (
    <React.Fragment key={slug}>
      <SEO
        title={`${service.title} | ${BRAND.name}`}
        description={`${service.shortDesc} Expert support by ${BRAND.name}, Ahmedabad — 100% online across India, starting ${service.startingPrice}.`}
        keywords={`${service.title}, ${service.shortTitle} Ahmedabad, ${service.shortTitle} Gujarat, ${service.services.join(', ')}, ${BRAND.name}`}
        path={path}
        image={imageAt(service.image, 1200)}
        imageAlt={service.title}
        jsonLd={[
          serviceSchema(service),
          breadcrumbSchema([{ name: 'Services', path: '/#services' }, { name: service.title, path }]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow={service.category}
        title={service.title}
        description={service.shortDesc}
        crumbs={[{ name: 'Services', href: '/#services' }, { name: service.shortTitle }]}
        image={imageAt(service.image, 2000)}
      >
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {[
            { label: 'Starting from', value: service.startingPrice },
            { label: 'Timeline', value: service.timeline },
            { label: 'Mode', value: '100% Online' },
          ].map((s) => (
            <div key={s.label} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-3">
              <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest">{s.label}</p>
              <p className="text-white font-bold text-[16px]">{s.value}</p>
            </div>
          ))}
          <a href={waLink(service.whatsappMsg)} target="_blank" rel="noopener noreferrer" className="btn-brand hover:!bg-white hover:!text-ink w-full sm:w-auto">
            <i className="ri-whatsapp-line text-lg" /> Get Started
          </a>
        </div>
      </PageHero>

      {service.highlights && (
        <section className="pt-10 md:pt-14 bg-white" aria-label="Key benefits">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid sm:grid-cols-3 gap-4">
            {service.highlights.map((h) => (
              <div key={h.title} className="reveal-card group p-7">
                <div className="relative z-10">
                  <span className="w-12 h-12 rounded-xl bg-brand-light group-hover:bg-white/15 flex items-center justify-center mb-5 transition-colors">
                    <i className={`${h.icon} text-2xl text-brand group-hover:text-sun transition-colors`} />
                  </span>
                  <h3 className="text-xl font-bold mb-2 group-hover:!text-white transition-colors">{h.title}</h3>
                  <p className="text-gray-500 group-hover:text-white/80 text-[15px] leading-relaxed transition-colors">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-14 items-start">
          <div>
            <div className="eyebrow-outline mb-6">Overview</div>
            <h2 className="section-title mb-5">How We Help With {service.shortTitle}</h2>
            <p className="text-gray-500 text-[16px] leading-[1.8] mb-10">{service.overview}</p>

            <h3 className="text-xl font-bold mb-5">What’s included</h3>
            <div className="grid sm:grid-cols-2 gap-3.5 mb-12">
              {service.services.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-gray-100 hover:border-brand/40 bg-slate-50 p-4 sm:p-5 transition-colors">
                  <i className="ri-checkbox-circle-fill text-brand text-xl leading-none mt-0.5" />
                  <span className="text-ink text-[15px] font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {service.documents && (
              <>
                <h3 className="text-xl font-bold mb-5">Documents required</h3>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {service.documents.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-gray-600 text-[15px] leading-snug">
                      <i className="ri-file-list-3-line text-brand text-lg leading-none mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 rounded-4xl bg-ink text-white p-7 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0 hub-pattern" />
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-brand/30 rounded-full blur-3xl" />
            <div className="relative">
              <p className="text-sun text-[12px] font-bold uppercase tracking-widest mb-2">Free consultation</p>
              <h3 className="!text-white text-2xl font-bold mb-3">Talk to a {service.shortTitle} expert</h3>
              <p className="text-white/70 text-[14px] leading-relaxed mb-6">
                Share your requirement on WhatsApp — get a document checklist and a fixed quote, usually within minutes.
              </p>
              <ul className="space-y-2.5 mb-7 text-[14px] text-white/85">
                {['No confusion, no delay', 'Your work, our responsibility', 'Quick response, 7 days a week'].map((t) => (
                  <li key={t} className="flex items-center gap-2.5"><i className="ri-check-double-line text-sun" />{t}</li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <a href={waLink(service.whatsappMsg)} target="_blank" rel="noopener noreferrer" className="btn-brand">
                  <i className="ri-whatsapp-line text-lg" /> Chat on WhatsApp
                </a>
                <a href={BRAND.phoneLink} className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 rounded-full px-7 py-3.5 font-semibold transition-colors">
                  <i className="ri-phone-line" /> {BRAND.phone}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ProcessSection />

      <section className="py-16 md:py-20 bg-slate-50" aria-label="Related services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="section-title mb-10 text-center">You May Also Need</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="group rounded-3xl overflow-hidden bg-white border border-gray-100 hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
                <div className="h-44 overflow-hidden">
                  <img src={imageAt(s.image, 700)} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-6">
                  <p className="text-brand text-[12px] font-bold uppercase tracking-widest mb-2">{s.category}</p>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-brand transition-colors">{s.title}</h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed">{s.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTABanner />
    </React.Fragment>
  );
};

export default ServicePage;
