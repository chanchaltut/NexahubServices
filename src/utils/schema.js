// JSON-LD builders for structured data (SEO / AEO / GEO)
import { BRAND } from './constants';

export const ORG_ID = `${BRAND.website}/#organization`;

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${BRAND.website}${item.path === '/' ? '/' : item.path}`,
  })),
});

export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const serviceSchema = (service) => {
  const price = service.startingPrice.replace(/[^0-9]/g, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.category,
    description: service.overview,
    url: `${BRAND.website}/services/${service.slug}`,
    provider: { '@id': ORG_ID, '@type': 'ProfessionalService', name: BRAND.name, url: BRAND.website },
    areaServed: { '@type': 'Country', name: 'India' },
    ...(price && {
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price,
        priceSpecification: { '@type': 'PriceSpecification', minPrice: price, priceCurrency: 'INR' },
        availability: 'https://schema.org/InStock',
      },
    }),
  };
};
