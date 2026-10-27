import React from 'react';
import SEO from './SEO';
import PageHero from './PageHero';
import { BRAND } from '../utils/constants';

/**
 * Shared layout for Privacy Policy / Terms pages.
 * `sections` = [{ title, body: [string | { list: string[] }] }]
 */
const LegalLayout = ({ title, highlight, path, description, updated, sections }) => (
  <>
    <SEO title={`${title} ${highlight} | ${BRAND.name}`} description={description} path={path} noindex />

    <PageHero title={title} highlight={highlight} description={`Last updated: ${updated}`} crumbs={[{ name: `${title} ${highlight}` }]} />

    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-10">
          {sections.map((s, i) => (
            <div key={s.title}>
              <h2 className="not-italic text-xl md:text-2xl font-bold mb-4 flex items-baseline gap-3">
                <span className="text-brand text-base font-bold">{String(i + 1).padStart(2, '0')}</span>
                {s.title}
              </h2>
              <div className="space-y-3 text-gray-600 text-[15.5px] leading-relaxed pl-0 md:pl-9">
                {s.body.map((b, j) =>
                  typeof b === 'string' ? (
                    <p key={j}>{b}</p>
                  ) : (
                    <ul key={j} className="space-y-2">
                      {b.list.map((li) => (
                        <li key={li} className="flex gap-2.5"><i className="ri-checkbox-blank-circle-fill text-[7px] text-brand mt-2.5" />{li}</li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            </div>
          ))}

          <div className="rounded-3xl bg-mist p-7 md:ml-9">
            <p className="font-bold text-ink mb-2">{BRAND.legalName}</p>
            <p className="text-gray-600 text-[15px]">{BRAND.address}</p>
            <p className="text-gray-600 text-[15px]">Email: <a href={`mailto:${BRAND.email}`} className="text-brand font-semibold hover:underline">{BRAND.email}</a></p>
            <p className="text-gray-600 text-[15px]">Phone: <a href={BRAND.phoneLink} className="text-brand font-semibold hover:underline">{BRAND.phone}</a></p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default LegalLayout;
