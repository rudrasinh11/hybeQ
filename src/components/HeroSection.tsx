import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CircularPlayButton } from './CircularPlayButton';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  FileDown, 
  Play,
  Sparkles
} from 'lucide-react';

interface HeroSectionProps {
  onOpenVideo: () => void;
  onOpenEnquiry?: (productName?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenVideo,
  onOpenEnquiry
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const slides = [
    {
      id: 0,
      category: 'HYDRO-POLYMER WATERPROOFING',
      headline: 'Impervious Subterranean Barrier Systems.',
      tagline: 'Elastomeric 2K polymers engineered for extreme hydrostatic pressure, podium slabs, and subterranean basements.',
      bg: '/images/hero-waterproofing.jpg',
      featuredProduct: 'HY-DAMPPROOF ULTRA 2K',
      thumb: '/images/hybeq_products/hy-dampproof-ultra.png',
      specs: [
        { key: 'Elongation At Break', val: '250%' },
        { key: 'Crack Bridging Capacity', val: 'Up to 2.8 mm' },
        { key: 'Hydrostatic Resistance', val: '> 7.0 Bar DIN 1048' }
      ],
      link: '/products/waterproofing'
    },
    {
      id: 1,
      category: 'HIGH-POLYMER TILE & STONE FIXING',
      headline: 'Engineered For Heavy Large-Format Slabs.',
      tagline: 'Zero-sag polymer modified mortars certified for jumbo vitrified porcelain slabs and demanding vertical facades.',
      bg: '/images/hero-facade.jpg',
      featuredProduct: 'HYMAX-525 ADHESIVE',
      thumb: '/images/hybeq_products/hymax-525.png',
      specs: [
        { key: 'Standard Classification', val: 'EN 12004 C2TE S1' },
        { key: 'Vertical Slip Resistance', val: '< 0.5 mm (Zero-Slip)' },
        { key: 'Tensile Adhesion Strength', val: '> 1.85 N/mm²' }
      ],
      link: '/products/tile-adhesives'
    },
    {
      id: 2,
      category: 'HEAVY INDUSTRIAL RESIN SCREEDS',
      headline: 'Impact, Abrasion & Chemical Immune Floors.',
      tagline: '100% solids epoxy screeds and self-levelling polyurethane resins for cleanrooms, automotive plants, and logistics.',
      bg: '/images/hero-flooring.jpg',
      featuredProduct: 'HY-SPOT BOND EP-510',
      thumb: '/images/hybeq_products/hy-spot-bond-ep510.png',
      specs: [
        { key: 'Compressive Toughness', val: '> 80 MPa' },
        { key: 'Chemical Defense', val: 'Acids, Alkalis & Solvents' },
        { key: 'Traffic Readiness', val: 'Light Foot Traffic in 12h' }
      ],
      link: '/products/epoxy-flooring'
    },
    {
      id: 3,
      category: 'STRUCTURAL RESTORATION & GROUTS',
      headline: 'High-Yield Concrete Rehabilitation Mortars.',
      tagline: 'Non-shrink micro-concretes and polymer repair systems designed for rapid structural load-bearing restoration.',
      bg: '/images/lab-testing-rig.jpg',
      featuredProduct: 'HY-SUPERCONCRETE LS',
      thumb: '/images/hybeq_products/hy-superconcrete-ls.png',
      specs: [
        { key: 'Compressive Yield (28d)', val: '> 65 N/mm²' },
        { key: 'Shrinkage Compensation', val: 'Zero Dimensional Shrink' },
        { key: 'Interfacial Bond Strength', val: '> 2.5 N/mm² to Concrete' }
      ],
      link: '/products/repairs'
    }
  ];

  const current = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance carousel every 6.5s unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6500);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  // Touch swipe support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section 
      className="hybeq-cinematic-hero"
      aria-label="HYBEQ Featured Chemical Engineering Solutions"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides with Smooth Fade & Cinematic Ken-Burns Motion */}
      {slides.map((slide, index) => {
        const isActive = index === activeSlide;
        return (
          <div
            key={slide.id}
            className={`cinematic-bg-layer ${isActive ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.bg})` }}
            aria-hidden={!isActive}
          >
            <div className="cinematic-bg-scrim" />
          </div>
        );
      })}

      {/* Top Bar inside Hero: Category Tag & Rotating Play Video Button */}
      <div className="cinematic-top-bar">
        <div className="cinematic-kicker">
          <span className="kicker-pulse-dot" />
          <span className="kicker-text">ADVANCED POLYMER FORMULATIONS • GERMAN TECHNOLOGY</span>
        </div>

        <div className="cinematic-play-wrap">
          <CircularPlayButton onClick={onOpenVideo} title="Watch HYBEQ Corporate Video" />
        </div>
      </div>

      {/* Bottom Floating Frosted Glass Heads-Up Display (HUD) */}
      <div className="cinematic-hud-wrapper">
        <div className="cinematic-hud-card">
          
          {/* Column 1: Category Tag, Punchy Headline & CTAs */}
          <div className="hud-col-headline">
            <div className="hud-category-chip">
              <Sparkles size={14} color="#00E676" />
              <span>{current.category}</span>
            </div>

            <h1 className="hud-main-headline">
              {current.headline}
            </h1>

            <p className="hud-tagline">
              {current.tagline}
            </p>

            <div className="hud-cta-row">
              <Link to={current.link} className="hud-btn-primary">
                Explore Formulations <ArrowRight size={18} />
              </Link>
              <button 
                onClick={onOpenVideo}
                className="hud-btn-video"
                aria-label="Watch application video"
              >
                <Play size={15} fill="#FFFFFF" /> Watch In Action
              </button>
            </div>
          </div>

          {/* Column 2: Quantitative Lab-Certified Specifications */}
          <div className="hud-col-specs">
            <div className="hud-specs-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} color="#00E676" />
                <span className="hud-specs-title">Laboratory Certified Specs</span>
              </div>
              <div className="hud-product-pill">
                <img src={current.thumb} alt={current.featuredProduct} className="hud-product-thumb" />
                <span className="hud-product-name">{current.featuredProduct}</span>
              </div>
            </div>

            <div className="hud-specs-table">
              {current.specs.map((item, idx) => (
                <div key={idx} className="hud-spec-row">
                  <span className="hud-spec-key">{item.key}:</span>
                  <span className="hud-spec-val">{item.val}</span>
                </div>
              ))}
            </div>

            <div className="hud-specs-footer">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry(current.featuredProduct)}
                className="hud-tds-trigger"
                title={`Download Technical Data Sheet for ${current.featuredProduct}`}
              >
                <FileDown size={15} /> Request Official TDS Sheet
              </button>
              <Link to="/calculator" className="hud-calc-trigger">
                Consumption Calculator →
              </Link>
            </div>
          </div>

          {/* Column 3: Slide Tracker & Interactive Navigation Arrows */}
          <div className="hud-col-controls">
            <div className="hud-counter">
              <span className="counter-current">0{activeSlide + 1}</span>
              <span className="counter-sep">/</span>
              <span className="counter-total">0{slides.length}</span>
            </div>

            <div className="hud-arrow-buttons">
              <button 
                onClick={prevSlide}
                className="hud-nav-arrow"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={22} />
              </button>
              <button 
                onClick={nextSlide}
                className="hud-nav-arrow"
                aria-label="Next Slide"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="hud-pagination-dots" role="tablist">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  className={`hud-dot ${idx === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(idx)}
                  role="tab"
                  aria-selected={idx === activeSlide}
                  aria-label={`Go to slide ${idx + 1}: ${s.category}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
