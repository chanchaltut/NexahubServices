import React from 'react';
import { Link } from 'react-router-dom';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80';

/** Rounded image banner used at the top of inner pages, with breadcrumb. */
const PageHero = ({ eyebrow, title, highlight, description, crumbs = [], image = DEFAULT_IMAGE, children }) => (
  <section className="px-3 sm:px-4 lg:px-12 pt-3 sm:pt-4 pb-4 max-w-[1920px] mx-auto">
    <div className="relative rounded-[1.5rem] md:rounded-4xl overflow-hidden min-h-[380px] md:min-h-[440px] flex items-end">
      <img src={image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/40" />
      <div className="absolute inset-0 hub-pattern opacity-60" />

      <div className="relative z-10 w-full px-5 md:px-14 py-10 md:py-14">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-[13px] text-white/60">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            {crumbs.map((c) => (
              <React.Fragment key={c.name}>
                <li aria-hidden="true"><i className="ri-arrow-right-s-line" /></li>
                <li>
                  {c.href ? <Link to={c.href} className="hover:text-white transition-colors">{c.name}</Link> : <span className="text-sun font-semibold" aria-current="page">{c.name}</span>}
                </li>
              </React.Fragment>
            ))}
          </ol>
        </nav>

        {eyebrow && (
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 font-bold text-[12px] tracking-[0.18em] uppercase mb-5">
            <span className="spectrum-bar w-5" />{eyebrow}
          </span>
        )}
        <h1 className="text-[34px] md:text-5xl lg:text-[58px] font-extrabold !text-white leading-[1.12] tracking-tight max-w-4xl mb-5">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h1>
        {description && <p className="text-white/80 text-[15px] md:text-lg leading-relaxed max-w-2xl">{description}</p>}
        {children}
      </div>
    </div>
  </section>
);

export default PageHero;
