import React, { useState, useEffect, useRef } from 'react';
import { CircularPlayButton } from './CircularPlayButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      image: '/images/hero_banner_01.png?v=5',
      category: 'TILE & STONE ADHESIVE',
      badge: 'ENGINEERED FOR STRONGER STRUCTURES',
      desc: 'We engineer advanced bonding solutions for each market, using a combination of high-grade polymers, natural minerals, and specialized additives along with our deep expertise in specialized building chemicals.',
      productName: 'HYBEQ Tile & Stone Adhesive (505, 507, 515+)',
      alt: 'HYBEQ Tile & Stone Adhesive - German Polymer Technology'
    },
    {
      id: 1,
      image: '/images/hero_banner_02.png?v=5',
      category: 'WATERPROOFING SOLUTIONS',
      badge: 'PROTECT WHAT MATTERS MOST',
      desc: 'We develop innovative waterproofing solutions for each market, using a combination of elastomeric and crystalline raw materials along with our deep knowledge & expertise in specialized building chemicals.',
      productName: 'HYBEQ Waterproofing Solutions (DAMPPROOF, MASTERFLEX PU)',
      alt: 'HYBEQ Advanced Waterproofing Solutions - Stop Water Leaks Permanently'
    },
    {
      id: 2,
      image: '/images/hero_banner_03.png?v=5',
      category: 'PRECISION TILE FIXING & GROUTS',
      badge: 'LET THE WORLD KNOW YOUR COLORFUL PERSONALITY',
      desc: 'We formulate precision epoxy solutions for each market, using a combination of stain-resistant resins and high-purity quartz fillers along with our deep knowledge & expertise in specialized building chemicals.',
      productName: 'HYBEQ Tile Fixing & Grout (SPOT BOND EP510, STONESEAL)',
      alt: 'HYBEQ Precision Tile Fixing & Epoxy Grouts - Stain-Resistant & Vibrant'
    }
  ];

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

  // Keyboard navigation for carousel
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section className="hero-section-version2 vura-hero-section position-relative" id="hero" aria-label="HYBEQ Homepage Hero">
      <div className="vura-hero-container">
        
        {/* ============================================================
            HERO TOP ROW:
            Left: TWO-LINE ANIMATED HEADLINE ("TIME TO PUSH / [Arrow] THE BOUNDARIES")
            Right: ROTATING CIRCULAR PLAY BUTTON
            ============================================================ */}
        <div className="vura-hero-top-row">
          
          <div className="vura-hero-headline-wrap">
            <h1 className="vura-hero-headline" aria-label="TIME TO PUSH THE BOUNDARIES">
              {/* Line 1: TIME TO PUSH (Solid #071A45 / #FFFFFF depending on theme, clamp(40px, 6vw, 76px)) */}
              <span className="vura-headline-line1">TIME TO PUSH</span>

              {/* Line 2: [Arrow Icon] THE BOUNDARIES */}
              <span className="vura-headline-line2">
                <span className="vura-headline-arrow-icon" aria-hidden="true">
                  <img
                    src="/images/arrow-navy.png"
                    alt="Arrow"
                    className="vura-headline-arrow-img"
                  />
                </span>
                <span className="vura-word-the">THE</span>
                <span
                  className="vura-word-boundaries"
                  data-text="BOUNDARIES"
                >
                  BOUNDARIES
                </span>
              </span>
            </h1>
          </div>

          {/* Right: Circular Rotating Play Button */}
          <div className="vura-hero-play-wrap">
            <CircularPlayButton onClick={onOpenVideo} title="Watch HYBEQ Corporate Video" />
          </div>

        </div>

        {/* ============================================================
            HERO SHOWCASE BANNER CONTAINER:
            Switchable carousel with transparent stepped shape,
            interactive notch card with changeable enquiry form,
            and sleek navigation controls.
            ============================================================ */}
        <div
          className="vura-banner-v2-thumb"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="HYBEQ Featured Formulations Carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Active Carousel Banner Image Slides */}
          <div className="vura-carousel-inner">
            {slides.map((s, idx) => (
              <div
                key={s.id}
                className={`vura-carousel-slide ${idx === activeSlide ? 'active' : ''}`}
                aria-hidden={idx !== activeSlide}
              >
                <img
                  src={s.image}
                  alt={s.alt}
                  className="vura-banner-slide-img"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  fetchPriority={idx === 0 ? 'high' : 'auto'}
                />
              </div>
            ))}
          </div>

          {/* Manual Carousel Navigation Arrows (Translucent sleek buttons) */}
          <button
            type="button"
            className="vura-carousel-nav-btn prev"
            aria-label="Previous slide"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            className="vura-carousel-nav-btn next"
            aria-label="Next slide"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
          >
            <ChevronRight size={22} />
          </button>

          {/* ============================================================
          {/* ============================================================
              TOP-RIGHT NOTCH CONTENT (1:1 VURA Reference Treatment):
              Clean, deliberately positioned supporting text block
              with balanced line lengths and certified seal.
              ============================================================ */}
          <div
            className="vura-banner-thumb-content"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="vura-notch-desc">
              {slides[activeSlide].desc}
            </p>
            <div className="vura-notch-cert-wrap">
              <img
                src="/images/GPTW-Certified.png"
                alt="Great Place to Work / ISO Certified"
                className="vura-notch-cert-img"
              />
            </div>
          </div>

          {/* Bottom Left Pill Button: Active category badge */}
          <div className="vura-banner-bottom-left-pill">
            <button
              type="button"
              className="vura-banner-pill-btn"
              onClick={(e) => {
                e.stopPropagation();
                onOpenEnquiry && onOpenEnquiry(slides[activeSlide].productName);
              }}
              title="Click to view formulations"
            >
              <span className="vura-pill-dot" />
              <span>{slides[activeSlide].category}</span>
            </button>
          </div>

          {/* Center Pagination: 3 pill dots indicating active hero slide */}
          <div className="vura-banner-indicators" role="tablist" aria-label="Hero Slides">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={idx === activeSlide}
                aria-label={`Slide ${idx + 1}: ${s.category}`}
                className={`vura-banner-indicator ${idx === activeSlide ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveSlide(idx);
                }}
              />
            ))}
          </div>

        </div>

        {/* ============================================================
            BOTTOM HERO STRIP: Socials & Verified Contacts
            ============================================================ */}
        <div className="vura-hero-bottom-strip">
          <div className="vura-bottom-socials">
            <a href="https://www.facebook.com/share/1DVTdtmXDD/" target="_blank" rel="noopener noreferrer" className="vura-bottom-social-link">FACEBOOK</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="vura-bottom-social-link">TWITTER</a>
            <a href="https://www.instagram.com/hybeq_chemicals_pvt_ltd/" target="_blank" rel="noopener noreferrer" className="vura-bottom-social-link">INSTAGRAM</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="vura-bottom-social-link">LINKEDIN</a>
            <a href="https://youtube.com/@hybeq-thebuildingchemicalsexpe" target="_blank" rel="noopener noreferrer" className="vura-bottom-social-link">YOUTUBE</a>
          </div>

          <div className="vura-bottom-contacts">
            <a href="tel:18004193637" className="vura-bottom-contact-item">TOLL-FREE : 1800 419 3637</a>
            <span style={{ color: 'rgba(10,35,98,0.25)' }}>•</span>
            <a href="tel:+918000803933" className="vura-bottom-contact-item">CALL : +91 8000803933</a>
            <span style={{ color: 'rgba(10,35,98,0.25)' }}>•</span>
            <a href="mailto:info@hybeq.com" className="vura-bottom-contact-item">MAIL : INFO@HYBEQ.COM</a>
          </div>
        </div>

      </div>
    </section>
  );
};

