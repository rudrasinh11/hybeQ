import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { TrustedPartnersMarquee } from '../components/TrustedPartnersMarquee';
import { WhatWeOfferSection } from '../components/WhatWeOfferSection';
import { FeaturedProductsSection } from '../components/FeaturedProductsSection';
import { WhyHybeqSection } from '../components/WhyHybeqSection';
import { CalculatorSection } from '../components/CalculatorSection';
import { TechnicalGuidesSection } from '../components/TechnicalGuidesSection';
import { DirectContactStrip } from '../components/DirectContactStrip';

interface HomePageProps {
  onOpenVideo: () => void;
  onOpenEnquiry: (productName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenVideo,
  onOpenEnquiry
}) => {
  return (
    <div className="hybeq-homepage-master" style={{ backgroundColor: 'var(--theme-bg-page)', color: 'var(--theme-text-primary)' }}>
      {/* ============================================================
          SECTION 2: HERO SECTION (Gridfly Reference)
          Headline: "Engineered Protection. Built to Last."
          ============================================================ */}
      <HeroSection
        onOpenVideo={onOpenVideo}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* ============================================================
          SECTION 3: TRUSTED PARTNERS (Resido Reference)
          Two separate horizontal logo rows moving in opposite directions
          ============================================================ */}
      <TrustedPartnersMarquee />

      {/* ============================================================
          SECTION 4: WHAT WE OFFER (Gridfly Reference)
          Four core chemical categories overview
          ============================================================ */}
      <WhatWeOfferSection />

      {/* ============================================================
          SECTION 5: FEATURED PRODUCTS (Existing HYBEQ Catalog Improved)
          Preserved verified product specs, images, filters, enquiry actions
          ============================================================ */}
      <FeaturedProductsSection
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* ============================================================
          SECTION 6: WHY HYBEQ (Resido Reference)
          Brand differentiation: German polymer tech, ISO 9001 QA, civil audits
          ============================================================ */}
      <WhyHybeqSection
        onOpenEnquiry={() => onOpenEnquiry()}
      />

      {/* ============================================================
          SECTION 7: MATERIAL CALCULATOR (Existing HYBEQ Estimator Improved)
          Preserved accurate civil formulas, grouped inputs, instant results
          ============================================================ */}
      <CalculatorSection
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* ============================================================
          SECTION 8: TECHNICAL GUIDES & BLOG (Bildora Reference)
          Editorial layout: prominent lead story + supporting articles
          ============================================================ */}
      <TechnicalGuidesSection />

      {/* ============================================================
          SECTION 9: DIRECT CONTACT & ACTION STRIP (Original Conversion Strip)
          Direct WhatsApp, click-to-call 1800 419 3637, site inspection trigger
          ============================================================ */}
      <DirectContactStrip
        onOpenEnquiry={() => onOpenEnquiry()}
      />
    </div>
  );
};

export default HomePage;
