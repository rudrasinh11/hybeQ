import React, { useEffect, useState, useRef } from 'react';

/**
 * Authentic VURA-inspired "WHAT WE OFFER" Kinetic Section
 * Faithfully reconstructed from https://vura.ae/ for HYBEQ
 * - Dual-layer kinetic text marquee of oversized ghosted outlined uppercase text
 * - Responsive, balanced typography and spacing
 */
export const ProductRangeMarquee: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 14 official HYBEQ categories for kinetic typography
  const kineticRow1 = [
    'TILE & STONE FIXING',
    'PRECAST ADDITIVES',
    'WATERPROOFING',
    'PLASTICIZERS RMC/PQC',
    'GROUTING SYSTEMS',
    'SURFACE TREATMENT',
    'BONDING AGENT'
  ];

  const kineticRow2 = [
    'STRUCTURAL REPAIR',
    'SEALANTS',
    'DECORATIVE FLOOR & WALL',
    'DRYMIX MORTAR',
    'CURING COMPOUNDS',
    'EPOXY FLOORING',
    'EPOXY SCREED'
  ];

  return (
    <section
      ref={sectionRef}
      className="vura-range-kinetic-section"
      id="product-range"
      aria-label="Our Product Range"
    >
      {/* Background Vertical Guide Grid */}
      <div className="vura-range-grid-bg" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* TOP CENTER HEADER */}
      <div className="vura-range-center-header">
        <h2 className="vura-range-main-title">Our Product Range</h2>
      </div>

      {/* KINETIC TYPOGRAPHY DUAL ROWS */}
      <div className="vura-range-marquee-wrap">
        {/* Row 1: Continuous Left Loop + Smooth Scroll Scrub */}
        <div 
          className="vura-range-track-outer"
          style={{
            transform: `translateX(${-scrollY * 0.12}px)`,
            willChange: 'transform'
          }}
        >
          <div className="vura-range-track vura-range-track-left">
            {[...kineticRow1, ...kineticRow1, ...kineticRow1].map((text, idx) => (
              <span key={`r1-${idx}`} className="vura-kinetic-word">
                {text}
                <span className="vura-kinetic-spacer">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: Continuous Right Loop + Smooth Scroll Scrub */}
        <div 
          className="vura-range-track-outer"
          style={{
            transform: `translateX(${scrollY * 0.12}px)`,
            willChange: 'transform'
          }}
        >
          <div className="vura-range-track vura-range-track-right">
            {[...kineticRow2, ...kineticRow2, ...kineticRow2].map((text, idx) => (
              <span key={`r2-${idx}`} className="vura-kinetic-word">
                {text}
                <span className="vura-kinetic-spacer">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};