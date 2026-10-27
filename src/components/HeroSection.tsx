import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, Award, Layers } from 'lucide-react';

interface HeroSectionProps {
  onOpenVideo?: () => void;
  onOpenEnquiry?: (productName?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEnquiry
}) => {
  const scrollToProducts = () => {
    const el = document.getElementById('featured-products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/products';
    }
  };

  return (
    <section className="hybeq-hero-gridfly" id="hero-section" aria-label="Engineered Protection Hero">
      <div className="hybeq-hero-bg-accent" aria-hidden="true" />
      
      <div className="hybeq-hero-container">
        {/* Left Column: Bold Typographic Hierarchy & Conversion Triggers */}
        <div className="hybeq-hero-content">
          {/* Verified Quality & Certification Sub-Heading */}
          <span className="hybeq-hero-brand-tag">ISO 9001:2015 Certified • German Polymer Technology</span>

          {/* Primary Headline */}
          <h1 className="hybeq-hero-title">
            Engineered Protection. <br />
            <span className="hybeq-hero-title-highlight">Built to Last.</span>
          </h1>

          {/* Concise Supporting Copy */}
          <p className="hybeq-hero-subtitle">
            Advanced tile adhesives, elastomeric waterproofing membranes, and structural concrete repair systems. Engineered with pure European redispersible polymers to withstand India's most demanding climatic conditions.
          </p>

          {/* Action CTAs */}
          <div className="hybeq-hero-actions">
            <button
              type="button"
              className="hybeq-btn hybeq-btn-primary"
              onClick={scrollToProducts}
              aria-label="Explore HYBEQ Products"
            >
              <span>Explore Products</span>
              <ArrowRight size={18} className="hybeq-btn-arrow" />
            </button>

            <button
              type="button"
              className="hybeq-btn hybeq-btn-secondary"
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              aria-label="Talk to a Technical Expert"
            >
              <PhoneCall size={17} />
              <span>Talk to an Expert</span>
            </button>
          </div>

          {/* Institutional Trust Indicators Bar */}
          <div className="hybeq-hero-trust-bar">
            <div className="hybeq-trust-item">
              <div className="hybeq-trust-icon-wrap">
                <ShieldCheck size={20} className="hybeq-trust-icon" />
              </div>
              <div className="hybeq-trust-info">
                <strong className="hybeq-trust-metric">IS 15477:2019</strong>
                <span className="hybeq-trust-label">Type 1 to 4 Certified</span>
              </div>
            </div>

            <div className="hybeq-trust-divider" />

            <div className="hybeq-trust-item">
              <div className="hybeq-trust-icon-wrap">
                <Award size={20} className="hybeq-trust-icon" />
              </div>
              <div className="hybeq-trust-info">
                <strong className="hybeq-trust-metric">100% Virgin</strong>
                <span className="hybeq-trust-label">European Polymers</span>
              </div>
            </div>

            <div className="hybeq-trust-divider" />

            <div className="hybeq-trust-item">
              <div className="hybeq-trust-icon-wrap">
                <Layers size={20} className="hybeq-trust-icon" />
              </div>
              <div className="hybeq-trust-info">
                <strong className="hybeq-trust-metric">50+ Years</strong>
                <span className="hybeq-trust-label">Civil Durability Life</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Gridfly Asymmetrical Architectural Showcase */}
        <div className="hybeq-hero-visual-wrap">
          {/* Main Visual Card */}
          <div className="hybeq-hero-main-card">
            <img
              src="/images/hybeq_live/page_hybeq_20building642.jpeg"
              alt="Engineered Civil Structure Protected by HYBEQ Formulations"
              className="hybeq-hero-img"
              loading="eager"
            />
            <div className="hybeq-hero-img-overlay" />

            {/* Bottom Floating HUD Card: Featured Technical Product */}
            <div className="hybeq-hero-hud-card">
              <div className="hybeq-hud-product-thumb">
                <img
                  src="/images/hybeq_products/hymax-525.png"
                  alt="Hymax 525 Structural Adhesive"
                />
              </div>

              <div className="hybeq-hud-details">
                <h4 className="hybeq-hud-title">HYMAX-525 STRUCTURAL ADHESIVE</h4>
                <p className="hybeq-hud-spec">
                  EN 12004 C2TE S1 • Zero Vertical Slip (&lt;0.5mm)
                </p>
                <div className="hybeq-hud-stats">
                  <span className="hybeq-hud-stat-pill">Tensile: &gt;1.85 N/mm²</span>
                  <span className="hybeq-hud-stat-pill">Bed: 3-12 mm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
