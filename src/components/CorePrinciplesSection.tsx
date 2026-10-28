import { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, ShieldCheck, CheckCircle2, Maximize2 } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

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
  const mobileCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Detect mobile viewports for smooth tailored scrolling
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle keyboard Escape to dismiss modal
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

  // Mobile scroll entrance animation with IntersectionObserver
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    mobileCardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <section className="vura-core-principles-section" id="foundational-pillars">
      <div className="vura-container">
        {/* Header Section */}
        <div className="vura-principles-header">
          <span className="vura-principles-badge">CORE ENGINEERING PHILOSOPHY</span>
          <h2 className="vura-section-heading">
            Built On <span className="vura-accent-green">Integrity, Precision</span> &amp; Engineering Excellence
          </h2>
          <p className="vura-section-desc">
            Three non-negotiable principles that drive our formulations, certified manufacturing, and project execution.
          </p>
        </div>

        {/* Desktop View: Interactive ScrollStack */}
        {!isMobile ? (
          <div className="scroll-stack-wrapper">
            <ScrollStack
              itemDistance={130}
              itemStackDistance={24}
              stackPosition="18%"
              itemScale={0.03}
              baseScale={0.92}
              dimAmount={0.15}
              smoothScroll={true}
              useWindowScroll={true}
            >
              {PRINCIPLES.map((p, idx) => (
                <ScrollStackItem key={idx} itemClassName="core-principle-card">
                  <div
                    className="core-principle-card-layout"
                    onClick={() => setSelectedPrinciple(p)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedPrinciple(p);
                      }
                    }}
                    title="Click to view complete technical preview"
                  >
                    {/* Left: Text & Specs */}
                    <div className="core-principle-text-col">
                      <div className="core-principle-top">
                        <span className="core-principle-step">{p.step}</span>
                        <span className="core-principle-tag">{p.tag}</span>
                      </div>

                      <div className="core-principle-body">
                        <h3 className="core-principle-title">{p.title}</h3>
                        <p className="core-principle-subtitle">{p.subtitle}</p>
                        <p className="core-principle-desc">{p.desc}</p>
                      </div>

                      <div className="core-principle-bottom-bar">
                        <div className="core-principle-metric-chip">
                          <span className="metric-val">{p.highlightMetric}</span>
                          <span className="metric-lbl">{p.metricLabel}</span>
                        </div>
                        <button
                          type="button"
                          className="core-principle-preview-trigger"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPrinciple(p);
                          }}
                        >
                          <span>Full Preview</span>
                          <Maximize2 size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Right: Rich Image Thumbnail */}
                    <div className="core-principle-media-col">
                      <div className="core-principle-img-wrap">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="core-principle-img"
                          loading="lazy"
                        />
                        <div className="core-principle-img-overlay">
                          <span className="img-overlay-btn">
                            <Maximize2 size={16} /> Tap to expand
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        ) : (
          /* Mobile View: Natural touch-scroll stack with smooth entrance animation */
          <div className="mobile-principles-track">
            {PRINCIPLES.map((p, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  mobileCardsRef.current[idx] = el;
                }}
                className="mobile-principle-card-item"
                onClick={() => setSelectedPrinciple(p)}
                role="button"
                tabIndex={0}
              >
                {/* Image Header with Step badge */}
                <div className="mobile-principle-media">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="mobile-principle-img"
                    loading="lazy"
                  />
                  <div className="mobile-principle-badges">
                    <span className="mobile-principle-step">{p.step}</span>
                    <span className="mobile-principle-tag">{p.tag}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="mobile-principle-content">
                  <h3 className="mobile-principle-title">{p.title}</h3>
                  <p className="mobile-principle-subtitle">{p.subtitle}</p>
                  <p className="mobile-principle-desc">{p.desc}</p>

                  <div className="mobile-principle-footer">
                    <div className="mobile-metric-chip">
                      <strong>{p.highlightMetric}</strong>
                      <span>{p.metricLabel}</span>
                    </div>
                    <span className="mobile-preview-btn">
                      <span>Preview</span>
                      <Maximize2 size={13} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
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
