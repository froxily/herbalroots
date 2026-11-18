import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useParams } from 'react-router-dom';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import HerbalRootsIntro from './components/HerbalRootsIntro';
import { CartProvider } from './context/CartContext';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { BlogIndex } from './pages/BlogIndex';
import { PillarGuide } from './pages/PillarGuide';
import { ArticleDetail } from './pages/ArticleDetail';
import { IngredientsIndex } from './pages/IngredientsIndex';
import { IngredientDetail } from './pages/IngredientDetail';
import { ShopIndex } from './pages/ShopIndex';
import { CATEGORY_MAP, ShopCategory } from './pages/ShopCategory';
import { ProductDetail } from './pages/ProductDetail';
import { SearchPage } from './pages/SearchPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { Disclaimer } from './pages/Disclaimer';
import { NotFound } from './pages/NotFound';

// Scroll to top helper on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Dispatcher for /shop/:slug to cleanly distinguish categories from products
const ShopSlugDispatcher: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const isCategory = slug && Object.prototype.hasOwnProperty.call(CATEGORY_MAP, slug);
  if (isCategory) {
    return <ShopCategory />;
  }
  return <ProductDetail />;
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <ScrollToTop />
      <HerbalRootsIntro />
      <div id="herbalroots-site" className="flex flex-col min-h-screen bg-ivory text-charcoal font-sans antialiased selection:bg-sage selection:text-forest">
        
        {/* Skip to Content for WCAG 2.2 AA Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-forest focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Global Announcement Bar */}
        <AnnouncementBar />

        {/* Main Header & Navigation */}
        <Header />

        {/* Main Route Content */}
        <main id="main-content" tabIndex={-1} className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About */}
            <Route path="/about" element={<About />} />

            {/* Pillar Guide */}
            <Route path="/hair-fall-treatment-at-home" element={<PillarGuide />} />

            {/* Blog & Journal */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<ArticleDetail />} />

            {/* Ingredients Library */}
            <Route path="/ingredients" element={<IngredientsIndex />} />
            <Route path="/ingredients/:slug" element={<IngredientDetail />} />

            {/* Shop & Catalogue */}
            <Route path="/shop" element={<ShopIndex />} />
            <Route path="/shop/:slug" element={<ShopSlugDispatcher />} />

            {/* Search */}
            <Route path="/search" element={<SearchPage />} />

            {/* Contact */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Legal & Compliance */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Slide-out Bag & Inquiry Drawer */}
        <CartDrawer />

        {/* Global Footer */}
        <Footer />

      </div>
    </CartProvider>
  );
};

export default App;
