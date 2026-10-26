import React, { lazy, Suspense, useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import DisclaimerModal from './components/DisclaimerModal';
import FloatingActions from './components/FloatingActions';
import LogoLoader from './components/LogoLoader';
import NotFound from './components/NotFound';
import Home from './pages/Home';

// Lazy load non-critical pages
const AboutUs         = lazy(() => import('./pages/AboutUs'));
const Contact         = lazy(() => import('./pages/Contact'));
const Insights        = lazy(() => import('./pages/Insights'));
const PrivacyPolicy   = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));

const ServicePage     = lazy(() => import('./pages/services/ServicePage'));

const LOADER_KEY = 'nexahub_loader_seen';

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-11 h-11 border-4 border-brand border-t-transparent rounded-full animate-spin" aria-label="Loading" />
  </div>
);

const shouldShowLoader = () => {
  try { return !sessionStorage.getItem(LOADER_KEY); } catch { return false; }
};

function App() {
  const [showLoader, setShowLoader] = useState(shouldShowLoader);

  const handleLoaderDone = useCallback(() => {
    setShowLoader(false);
    try { sessionStorage.setItem(LOADER_KEY, '1'); } catch { /* storage unavailable */ }
  }, []);

  return (
    <div className="App">
      {showLoader && <LogoLoader onDone={handleLoaderDone} />}

      <DisclaimerModal />
      <ScrollToTop />
      <Navbar />
      <FloatingActions />

      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"                 element={<Home />} />
            <Route path="/about"            element={<AboutUs />} />
            <Route path="/contact"          element={<Contact />} />
            <Route path="/blog"             element={<Insights />} />
            <Route path="/insights"         element={<Insights />} />
            <Route path="/privacy-policy"   element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />

            <Route path="/services/:slug"   element={<ServicePage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
