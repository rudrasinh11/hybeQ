import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { VideoModal } from './components/VideoModal';
import { EnquiryModal } from './components/EnquiryModal';
import { ScrollToTop } from './components/ScrollToTop';
import { LineShape } from './components/LineShape';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { DownloadsPage } from './pages/DownloadsPage';
import { InnovationsPage } from './pages/InnovationsPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfUsePage } from './pages/TermsOfUsePage';

export const App: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState('');

  const handleOpenEnquiry = (productName?: string) => {
    setEnquiryProduct(productName || '');
    setEnquiryOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="hybeq-site-layout" style={{ minHeight: '100vh', backgroundColor: '#071A45', position: 'relative' }}>
        {/* Scroll restoration helper */}
        <ScrollToTop />

        {/* Global Architectural Vertical Scanning Lines (VURA Style: .line-shape .cus-z-1) */}
        <LineShape />

        {/* 1. VURA-Style Header with Transparent HYBEQ Logo & Navigation */}
        <Header
          onOpenSearch={() => setSearchOpen(true)}
          onOpenEnquiry={() => handleOpenEnquiry()}
        />

        {/* 2. Main Page Content */}
        <main id="main-content" style={{ backgroundColor: '#FFFFFF' }}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenVideo={() => setVideoOpen(true)}
                  onOpenEnquiry={handleOpenEnquiry}
                />
              }
            />
            {/* Supporting pages */}
            <Route
              path="/about"
              element={<AboutPage onOpenEnquiry={() => handleOpenEnquiry()} />}
            />
            <Route
              path="/products"
              element={<ProductsPage onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route
              path="/products/:category"
              element={<ProductsPage onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route
              path="/products/:category/:id"
              element={<ProductDetailPage onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route
              path="/sustainability"
              element={<SustainabilityPage onOpenEnquiry={() => handleOpenEnquiry()} />}
            />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route
              path="/innovations"
              element={<InnovationsPage onOpenEnquiry={() => handleOpenEnquiry()} />}
            />
            <Route
              path="/calculator"
              element={<CalculatorPage onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route path="/blog" element={<BlogPage />} />
            <Route
              path="/blog/:slug"
              element={<BlogPostPage onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* 3. VURA-Style Comprehensive Footer */}
        <Footer />

        {/* Interactive Modals */}
        <SearchModal
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
        />

        <VideoModal
          isOpen={videoOpen}
          onClose={() => setVideoOpen(false)}
        />

        <EnquiryModal
          isOpen={enquiryOpen}
          onClose={() => setEnquiryOpen(false)}
          defaultProduct={enquiryProduct}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
