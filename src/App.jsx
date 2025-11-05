// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/global/Navbar';
import MegaFooter from './components/global/MegaFooter';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SciencePage from './pages/SciencePage';
import ContractManufacturingPage from './pages/ContractManufacturingPage';
import ContactPage from './pages/ContactPage';
import ShopLandingPage from './pages/ShopLandingPage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/our-science" element={<SciencePage />} />
            <Route path="/contract-manufacturing" element={<ContractManufacturingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shop" element={<ShopLandingPage />} />
            <Route path="/shop/:categorySlug" element={<CategoryPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/legal/:pageSlug" element={<LegalPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <MegaFooter />
      </div>
    </Router>
  );
}

export default App;

