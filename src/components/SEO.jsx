import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BRAND } from '../utils/constants';

const DEFAULT_IMAGE = `${BRAND.website}/og-image.jpg`;

/**
 * Per-page SEO: title, description, canonical, Open Graph, Twitter and
 * optional JSON-LD blocks. `path` is the route (e.g. "/about").
 */
const SEO = ({
  title,
  description,
  path = '/',
  keywords,
  image = DEFAULT_IMAGE,
  imageAlt = `${BRAND.name} — ${BRAND.tagline}`,
  type = 'website',
  noindex = false,
  jsonLd = [],
}) => {
  const url = `${BRAND.website}${path === '/' ? '/' : path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={BRAND.name} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {jsonLd.map((block, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(block)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
