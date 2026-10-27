import React, { useEffect, useState, useRef } from 'react';

interface CounterNumberProps {
  end: number;
  suffix?: string;
  duration?: number;
  startTrigger: boolean;
}

const CounterNumber: React.FC<CounterNumberProps> = ({
  end,
  suffix = '',
  duration = 1800,
  startTrigger
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startTrigger) {
      setValue(0);
      return;
    }

    let startTimestamp: number | null = null;
    let animId: number;

    const animate = (now: number) => {
      if (!startTimestamp) startTimestamp = now;
      const elapsed = now - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easeOutCubic curve for pleasant settling
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(easeOut * end));

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [startTrigger, end, duration]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
};

/**
 * ProductRangeMarquee
 * Recreation of the VURA "Our Product Range" section with:
 * - Top Tag: "WHAT WE OFFER" colored in HYBEQ Green (#46C985)
 * - Headline below tag: "Our Product Range" in rich navy (#071A45)
 * - Dual-layer kinetic text marquee of oversized ghosted outlined uppercase text
 * - Bottom: Center-aligned Counter Animation metrics (50+ Formulations, 5 Core Divisions, etc.)
 * - Fully center-aligned and responsive
 */
export const ProductRangeMarquee: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);
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

  // IntersectionObserver for the counter animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCountersVisible(true);
          } else {
            setCountersVisible(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentElem = sectionRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
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

      {/* ============================================================
          TOP CENTER HEADER:
          1. Main Tag: WHAT WE OFFER on top
          2. Main Title: Our Product Range directly below tag
          ============================================================ */}
      <div className="vura-range-center-header">
        <span className="vura-range-what-we-offer">WHAT WE OFFER</span>
        <h2 className="vura-range-main-title">Our Product Range</h2>
      </div>

      {/* ============================================================
          KINETIC TYPOGRAPHY DUAL ROWS:
          Placed cleanly below the header tag & title
          ============================================================ */}
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

      {/* ============================================================
          BOTTOM: CENTER-ALIGNED METRIC COUNTER ANIMATIONS
          Exact 1:1 format requested by user with scroll counter animation
          ============================================================ */}
      <div className="vura-range-counters-wrap">
        <div className="vura-range-counters-container">
          
          <div className="vura-range-counter-col">
            <div className="vura-range-counter-num-wrap">
              <span className="vura-range-counter-num">
                <CounterNumber end={50} suffix="+" startTrigger={countersVisible} duration={2000} />
              </span>
            </div>
            <div className="vura-range-counter-divider" />
            <span className="vura-range-counter-label">Specialized Formulations</span>
          </div>

          <div className="vura-range-counter-col">
            <div className="vura-range-counter-num-wrap">
              <span className="vura-range-counter-num">
                <CounterNumber end={14} suffix="" startTrigger={countersVisible} duration={1600} />
              </span>
            </div>
            <div className="vura-range-counter-divider" />
            <span className="vura-range-counter-label">Chemical Divisions</span>
          </div>

          <div className="vura-range-counter-col">
            <div className="vura-range-counter-num-wrap">
              <span className="vura-range-counter-num">
                <CounterNumber end={100} suffix="%" startTrigger={countersVisible} duration={2200} />
              </span>
            </div>
            <div className="vura-range-counter-divider" />
            <span className="vura-range-counter-label">Polymer Purity</span>
          </div>

          <div className="vura-range-counter-col">
            <div className="vura-range-counter-num-wrap">
              <span className="vura-range-counter-num">
                <CounterNumber end={15} suffix="+" startTrigger={countersVisible} duration={1800} />
              </span>
            </div>
            <div className="vura-range-counter-divider" />
            <span className="vura-range-counter-label">Quality Standards</span>
          </div>

        </div>
      </div>
    </section>
  );
};
