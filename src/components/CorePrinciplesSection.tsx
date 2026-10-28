import { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, ShieldCheck, CheckCircle2, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

export interface PrincipleItem {
  step: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  desc: string;
  highlightMetric: string;
  metricLabel: string;
  specs: string[];
  fullStory: string;
}

export const PRINCIPLES: PrincipleItem[] = [
  {
    step: '01',
    title: 'Integrity in Every Batch',
    subtitle: 'Automated 120-Ton Batching Tower',
    tag: 'Production Purity',
    image: '/images/plant-blending-tower.jpg',
    desc: 'Formulations engineered with strict quality adherence, automated gravimetric dosing, and certified international testing standards.',
    highlightMetric: '99.98%',
    metricLabel: 'Batch Formulation Consistency',
    specs: [
      'ISO 9001:2015 & EN 12004 C2TES1 Quality Audited',
      'Automated PLC Gravimetric Weighing with 0.1% Tolerance',
      'Homogeneous Polymer & Rheology Dispersion Testing'
    ],
    fullStory:
      'Every metric ton produced passes through automated gravimetric feeders with 0.1% tolerance. Zero manual estimation ensures that polymer dispersion, open-time enhancers, and anti-sag rheology modifiers deliver identical performance batch after batch, season after season.'
  },
  {
    step: '02',
    title: 'Precision Chemistry',
    subtitle: 'Adhesion Shear Rig & Weathering Chambers',
    tag: 'R&D Formulation',
    image: '/images/lab-testing-rig.jpg',
    desc: 'Targeted bonding, waterproofing, and surface treatment additives designed for high thermal expansion, heavy tile formats, and harsh environments.',
    highlightMetric: '2.85 N/mm²',
    metricLabel: 'Tensile Adhesion Bond Strength',
    specs: [
      'IS 15477:2019 Type 4 & DIN 18156 Certified Shear Rigs',
      '50 Accelerated Thermal Shock & Freeze-Thaw Cycles',
      'Zero-Slump Formulation for Large Format Porcelain Slabs'
    ],
    fullStory:
      'Formulated with German polymer resins tailored for tropical climate cycling. Our laboratory stresses adhesives through 50 thermal-humidity cycles, continuous 70°C heat immersion, and dynamic lateral deflection to ensure zero hollow debonding on large-format slabs.'
  },
  {
    step: '03',
    title: 'Engineering Excellence',
    subtitle: 'Landmark Megastructures & Coastal Towers',
    tag: 'Field Durability',
    image: '/images/hero-facade.jpg',
    desc: 'Reliable construction chemicals supporting landmark infrastructures, coastal developments, metro transport hubs, and global architectural standards.',
    highlightMetric: '200+',
    metricLabel: 'Landmark Infrastructure Projects Powered',
    specs: [
      'Engineered for Wind-Load Deflections & Coastal Saline Vapor',
      'Green Building Certified & Ultra-Low VOC Emission Profile',
      'On-Site Pull-Off Substrate Verification by Technical Engineers'
    ],
    fullStory:
      'Deployed across major civic infrastructure, IT parks, and luxury residential projects. HYBEQ technical field engineers provide on-site substrate pull-off verification, moisture testing, and bespoke specification assistance to structural consultants.'
  }
];

export function CorePrinciplesSection() {
  const [selectedPrinciple, setSelectedPrinciple] = useState<PrincipleItem | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Responsive device check (< 768px mobile, >= 768px tablet & laptop)
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Modal accessibility & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPrinciple(null);
      }
    };
    if (selectedPrinciple) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedPrinciple]);

  // Mobile swipe handlers (preserved 100% for phone view)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swipe left -> Next card
        setActiveMobileIdx((prev) => (prev + 1) % PRINCIPLES.length);
      } else {
        // Swipe right -> Prev card
        setActiveMobileIdx((prev) => (prev - 1 + PRINCIPLES.length) % PRINCIPLES.length);
      }
    }
    touchStartX.current = null;
  };

  const currentPrinciple = PRINCIPLES[activeMobileIdx];

  return (
    <section className="vura-core-principles-section" id="foundational-pillars">
      <div className="vura-container">
        {/* Section Heading & Subtitle */}
        <div className="vura-principles-header">
          <h2 className="vura-section-heading">
            Built On <span className="vura-accent-green">Integrity, Precision</span> &amp; Engineering Excellence
          </h2>
          <p className="vura-section-desc">
            Three non-negotiable principles that drive our formulations, certified manufacturing, and project execution.
          </p>
        </div>

        {/* ============================================================
            1. LAPTOP / DESKTOP & TABLET VIEW: GRAND 3-CARD INTERACTIVE GRID
            Clean side-by-side architectural grid with zero vertical empty gaps
            ============================================================ */}
        {!isMobile ? (
          <div className="laptop-principles-grid">
            {PRINCIPLES.map((p, idx) => (
              <div
                key={idx}
                className="laptop-principle-card"
                onClick={() => setSelectedPrinciple(p)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedPrinciple(p);
                  }
                }}
                title={`Click to preview complete specifications for ${p.title}`}
              >
                {/* Media Image Header with Badges */}
                <div className="laptop-card-media">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="laptop-card-img"
                    loading="lazy"
                  />
                  <div className="laptop-card-media-overlay" />
                  <div className="laptop-card-badges">
                    <span className="laptop-card-step">{p.step}</span>
                    <span className="laptop-card-tag">{p.tag}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="laptop-card-content">
                  <div className="laptop-card-header">
                    <h3 className="laptop-card-title">{p.title}</h3>
                    <p className="laptop-card-subtitle">{p.subtitle}</p>
                    <p className="laptop-card-desc">{p.desc}</p>
                  </div>

                  <div className="laptop-card-footer">
                    <div className="laptop-card-metric">
                      <strong className="metric-number">{p.highlightMetric}</strong>
                      <span className="metric-label">{p.metricLabel}</span>
                    </div>

                    <button
                      type="button"
                      className="laptop-card-preview-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPrinciple(p);
                      }}
                    >
                      <span>Full Preview</span>
                      <Maximize2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ============================================================
             2. PHONE / MOBILE VIEW: PRESERVED 3D CARD DECK ANIMATION
             Kept 100% untouched as requested by user ("seee in phone view alll is sooo goodd and doneee")
             ============================================================ */
          <div className="mobile-deck-experience">
            {/* Step Switcher Segmented Pills */}
            <div className="mobile-deck-tabs" role="tablist">
              {PRINCIPLES.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={activeMobileIdx === idx}
                  className={`mobile-deck-tab ${activeMobileIdx === idx ? 'active' : ''}`}
                  onClick={() => setActiveMobileIdx(idx)}
                >
                  <span className="deck-tab-num">{p.step}</span>
                  <span className="deck-tab-title">
                    {idx === 0 ? 'Integrity' : idx === 1 ? 'Precision' : 'Engineering'}
                  </span>
                </button>
              ))}
            </div>

            {/* 3D Physical Card Deck */}
            <div
              className="mobile-deck-stage"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Subtle back cards peeking to create tangible physical stack */}
              <div className="mobile-deck-card-ghost ghost-back" />
              <div className="mobile-deck-card-ghost ghost-mid" />

              {/* Active Foreground Card */}
              <div
                key={activeMobileIdx}
                className="mobile-deck-card-active"
                onClick={() => setSelectedPrinciple(currentPrinciple)}
                role="button"
                tabIndex={0}
              >
                {/* Image Header with Step & Tag */}
                <div className="mobile-deck-media">
                  <img
                    src={currentPrinciple.image}
                    alt={currentPrinciple.title}
                    className="mobile-deck-img"
                  />
                  <div className="mobile-deck-badges">
                    <span className="mobile-deck-step-badge">{currentPrinciple.step}</span>
                    <span className="mobile-deck-tag-badge">{currentPrinciple.tag}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="mobile-deck-content">
                  <h3 className="mobile-deck-title">{currentPrinciple.title}</h3>
                  <p className="mobile-deck-subtitle">{currentPrinciple.subtitle}</p>
                  <p className="mobile-deck-desc">{currentPrinciple.desc}</p>

                  <div className="mobile-deck-footer">
                    <div className="mobile-deck-metric">
                      <strong>{currentPrinciple.highlightMetric}</strong>
                      <span>{currentPrinciple.metricLabel}</span>
                    </div>

                    <span className="mobile-deck-preview-action">
                      <span>Full Preview</span>
                      <Maximize2 size={13} />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Controls: Previous / Next and Pagination Dots */}
            <div className="mobile-deck-controls">
              <button
                type="button"
                className="mobile-deck-arrow-btn"
                onClick={() =>
                  setActiveMobileIdx((prev) => (prev - 1 + PRINCIPLES.length) % PRINCIPLES.length)
                }
                aria-label="Previous Principle"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="mobile-deck-dots">
                {PRINCIPLES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`mobile-deck-dot ${activeMobileIdx === idx ? 'active' : ''}`}
                    onClick={() => setActiveMobileIdx(idx)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="mobile-deck-arrow-btn"
                onClick={() => setActiveMobileIdx((prev) => (prev + 1) % PRINCIPLES.length)}
                aria-label="Next Principle"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ============================================================
          FULL PREVIEW MODAL
          Opens on click with high-res imagery, technical story, and CTA
          ============================================================ */}
      {selectedPrinciple && (
        <div
          className="principle-modal-backdrop"
          onClick={() => setSelectedPrinciple(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="principle-modal-title"
        >
          <div
            className="principle-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              className="principle-modal-close"
              onClick={() => setSelectedPrinciple(null)}
              aria-label="Close Preview"
            >
              <X size={20} />
            </button>

            {/* Modal Image Hero */}
            <div className="principle-modal-media">
              <img
                src={selectedPrinciple.image}
                alt={selectedPrinciple.title}
                className="principle-modal-img"
              />
              <div className="principle-modal-media-overlay">
                <span className="modal-step-badge">{selectedPrinciple.step}</span>
                <span className="modal-tag-badge">{selectedPrinciple.tag}</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="principle-modal-body">
              <span className="principle-modal-sub">{selectedPrinciple.subtitle}</span>
              <h3 id="principle-modal-title" className="principle-modal-title">
                {selectedPrinciple.title}
              </h3>

              <div className="principle-modal-highlight">
                <div className="highlight-number">{selectedPrinciple.highlightMetric}</div>
                <div className="highlight-text">{selectedPrinciple.metricLabel}</div>
              </div>

              <p className="principle-modal-story">{selectedPrinciple.fullStory}</p>

              {/* Technical Specifications */}
              <div className="principle-modal-specs">
                <h4 className="specs-heading">
                  <ShieldCheck size={18} className="specs-icon" />
                  Engineering Verification &amp; Standards
                </h4>
                <ul className="specs-list">
                  {selectedPrinciple.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="specs-item">
                      <CheckCircle2 size={16} className="spec-check-icon" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="principle-modal-actions">
                <a
                  href="/contact"
                  className="modal-action-primary"
                  onClick={() => setSelectedPrinciple(null)}
                >
                  <span>Connect With Technical Engineers</span>
                  <ArrowRight size={16} />
                </a>
                <button
                  type="button"
                  className="modal-action-secondary"
                  onClick={() => setSelectedPrinciple(null)}
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CorePrinciplesSection;
