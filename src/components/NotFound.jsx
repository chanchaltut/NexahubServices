import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import { BRAND } from '../utils/constants';

const NotFound = () => (
  <>
    <SEO title={`Page Not Found | ${BRAND.name}`} description="The page you are looking for does not exist." path="/404" noindex />
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-brand text-8xl font-bold mb-4">404</p>
      <h1 className="text-2xl font-bold mb-3">Page Not Found</h1>
      <p className="text-gray-500 mb-8">The page you’re looking for doesn’t exist or has moved.</p>
      <Link to="/" className="btn-brand">Back to Home</Link>
    </div>
  </>
);

export default NotFound;
