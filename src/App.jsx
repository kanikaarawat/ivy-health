// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import ToastProvider from './components/common/ToastProvider';
import ContactButtons from './components/common/ContactButtons';

// Layout Components
import Navbar from './components/global/Navbar';
import Feed3pNavbar from './components/global/Feed3pNavbar';
import Cosmo3pNavbar from './components/global/Cosmo3pNavbar';
import Ayur3pNavbar from './components/global/Ayur3pNavbar';
import MegaFooter from './components/global/MegaFooter';
import EnhancedMobileHeader from './components/mobile/EnhancedMobileHeader';
import ComparisonTool from './components/desktop/ComparisonTool';

// Pages
import ManufacturingLandingPage from './pages/ManufacturingLandingPage';
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
import CartPage from './pages/CartPage';

// Division Pages - Ayurvedic
import Ayur3pHomePage from './pages/divisions/Ayur3pHomePage';
import Ayur3pAboutPage from './pages/divisions/Ayur3pAboutPage';
import Ayur3pSciencePage from './pages/divisions/Ayur3pSciencePage';
import Ayur3pProcessPage from './pages/divisions/Ayur3pProcessPage';
import Ayur3pProductsPage from './pages/divisions/Ayur3pProductsPage';

// Division Pages - Feed
import Feed3pHomePage from './pages/divisions/Feed3pHomePage';
import Feed3pAboutPage from './pages/divisions/Feed3pAboutPage';
import Feed3pSciencePage from './pages/divisions/Feed3pSciencePage';
import Feed3pProcessPage from './pages/divisions/Feed3pProcessPage';
import Feed3pProductsPage from './pages/divisions/Feed3pProductsPage';

// Division Pages - Cosmetics
import Cosmo3pHomePage from './pages/divisions/Cosmo3pHomePage';
import Cosmo3pAboutPage from './pages/divisions/Cosmo3pAboutPage';
import Cosmo3pSciencePage from './pages/divisions/Cosmo3pSciencePage';
import Cosmo3pProcessPage from './pages/divisions/Cosmo3pProcessPage';
import Cosmo3pProductsPage from './pages/divisions/Cosmo3pProductsPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Logo-only component for home page
function LogoOnly() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="hidden lg:fixed lg:block top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center h-20">
          <Link to="/" className="flex items-center group relative">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="/logo.png" 
                alt="Ivy Herbals Logo" 
                className="h-14 w-auto drop-shadow-lg"
              />
            </motion.div>
            {/* Glow Effect on Hover */}
            <motion.div
              className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

// Inner component that can use useLocation hook
function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  const isFeed3p = location.pathname.startsWith('/feed3p');
  const isCosmo3p = location.pathname.startsWith('/cosmo3p');
  const isAyur3p = location.pathname.startsWith('/ayur3p');

  return (
    <>
      <CartProvider>
        <ToastProvider />
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          {/* Desktop Navbar - Full navbar on other pages, logo only on home page */}
          {isHomePage ? <LogoOnly /> : isFeed3p ? <Feed3pNavbar /> : isCosmo3p ? <Cosmo3pNavbar /> : isAyur3p ? <Ayur3pNavbar /> : <Navbar />}
          
          {/* Mobile Header */}
          <EnhancedMobileHeader />
        
        <main className="flex-grow pb-20 lg:pb-0">
          <AnimatePresence mode="wait">
            <Routes>
              {/* Original Homepage */}
              <Route path="/" element={<HomePage />} />
              
              {/* Category Selection Landing Page */}
              <Route path="/manufacturing" element={<ManufacturingLandingPage />} />
              
              {/* Ayurvedic Division Routes */}
              <Route path="/ayur3p" element={<Ayur3pHomePage />} />
              <Route path="/ayur3p/about" element={<Ayur3pAboutPage />} />
              <Route path="/ayur3p/science" element={<Ayur3pSciencePage />} />
              <Route path="/ayur3p/process" element={<Ayur3pProcessPage />} />
              <Route path="/ayur3p/products" element={<Ayur3pProductsPage />} />
              <Route path="/ayur3p/contact" element={<ContactPage />} />
              
              {/* Feed Division Routes */}
              <Route path="/feed3p" element={<Feed3pHomePage />} />
              <Route path="/feed3p/about" element={<Feed3pAboutPage />} />
              <Route path="/feed3p/science" element={<Feed3pSciencePage />} />
              <Route path="/feed3p/process" element={<Feed3pProcessPage />} />
              <Route path="/feed3p/products" element={<Feed3pProductsPage />} />
              <Route path="/feed3p/contact" element={<ContactPage />} />
              
              {/* Cosmetics Division Routes */}
              <Route path="/cosmo3p" element={<Cosmo3pHomePage />} />
              <Route path="/cosmo3p/about" element={<Cosmo3pAboutPage />} />
              <Route path="/cosmo3p/science" element={<Cosmo3pSciencePage />} />
              <Route path="/cosmo3p/process" element={<Cosmo3pProcessPage />} />
              <Route path="/cosmo3p/products" element={<Cosmo3pProductsPage />} />
              <Route path="/cosmo3p/contact" element={<ContactPage />} />
              
              {/* Legacy/General Pages (keeping existing functionality) */}
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/our-science" element={<SciencePage />} />
              <Route path="/contract-manufacturing" element={<ContractManufacturingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/shop" element={<ShopLandingPage />} />
              <Route path="/shop/:categorySlug" element={<CategoryPage />} />
              <Route path="/product/:productId" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/legal/:pageSlug" element={<LegalPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        {/* Footer - Visible on all devices */}
        <MegaFooter />
        
          {/* Mobile-Only Components */}
          <ContactButtons variant="floating" />
          
          {/* Desktop-Only Components */}
          <ComparisonTool />
        </div>
      </CartProvider>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

