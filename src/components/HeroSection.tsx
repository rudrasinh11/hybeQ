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
      image: '/images/hero_banner_01.png?v=9',
      mobileImage: '/images/hero_banner_01_mobile.png?v=9',
      category: 'TILE & STONE ADHESIVE',
      badge: 'FORMULATED WITH WORLD-CLASS GERMAN TECHNOLOGY',
      desc: 'We engineer advanced bonding solutions for each market, using a combination of high-grade polymers, natural minerals, and specialized additives along with our deep expertise in specialized building chemicals.',
      productName: 'HYBEQ Tile & Stone Adhesive (505, 507, 515+)',
      alt: 'HYBEQ Tile & Stone Adhesive - German Polymer Technology'
    },
    {
      id: 1,
      image: '/images/hero_banner_02.png?v=9',
      mobileImage: '/images/hero_banner_02_mobile.png?v=9',
      category: 'WATERPROOFING SOLUTIONS',
      badge: 'ADVANCED WATERPROOFING TO STOP WATER LEAKS',
      desc: 'We develop innovative waterproofing solutions for each market, using a combination of elastomeric and crystalline raw materials along with our deep knowledge & expertise in specialized building chemicals.',
      productName: 'HYBEQ Waterproofing Solutions (DAMPPROOF, MASTERFLEX PU)',
      alt: 'HYBEQ Advanced Waterproofing Solutions - Stop Water Leaks Permanently'
    },
    {
      id: 2,
      image: '/images/hero_banner_03.png?v=9',
      mobileImage: '/images/hero_banner_03_mobile.png?v=9',
      category: 'PRECISION TILE FIXING & GROUTS',
      badge: 'LET THE WORLD KNOW YOUR COLORFUL PERSONALITY!',
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

  // Auto-advance carousel every 2 seconds (2000ms), respecting prefers-reduced-motion
  useEffect(() => {
    if (isPaused) return;
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

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

  // Touch swipe & touch interaction support with graceful autoplay resume
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX;
      if (Math.abs(diff) > 35) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }
    touchStartX.current = null;
    // Resume autoplay smoothly after 3 seconds of inactivity
    const resumeTimer = setTimeout(() => setIsPaused(false), 3000);
    return () => clearTimeout(resumeTimer);
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

            {/* Mobile Visual Hierarchy: Concise value proposition tag + CTA */}
            <div className="vura-hero-mobile-flow">
              <span className="vura-hero-value-tag">
                German Polymer Technology • C2TES1 Compliant
              </span>
              <button
                type="button"
                onClick={() => onOpenEnquiry?.(slides[activeSlide].productName)}
                className="vura-hero-mobile-cta"
              >
                <span>EXPLORE FORMULATIONS</span>
                <span className="vura-hero-cta-arrow">→</span>
              </button>
            </div>
          </div>

          {/* Right: Circular Rotating Play Button */}
          <div className="vura-hero-play-wrap">
            <CircularPlayButton onClick={onOpenVideo} title="Watch HYBEQ Corporate Video" />
          </div>

        </div>

        {/* ============================================================
            HERO SHOWCASE BANNER CONTAINER:
            Editorial outer wrapper with rounded corners
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
          {/* Editorial Numbered Category Label — overlaps upper-left of stage */}
          <div className="vura-editorial-label">
            <span className="vura-editorial-num">
              {String(activeSlide + 1).padStart(2, '0')}
            </span>
            <span className="vura-editorial-category">{slides[activeSlide].category}</span>
          </div>

          {/* Main Visual Stage (Image Slide + Arrows + Pagination Indicators) */}
          <div className="vura-banner-stage">
            {/* Active Carousel Banner Image Slides */}
            <div className="vura-carousel-inner">
              {slides.map((s, idx) => (
                <div
                  key={s.id}
                  className={`vura-carousel-slide ${idx === activeSlide ? 'active' : ''}`}
                  aria-hidden={idx !== activeSlide}
                >
                  <picture className="vura-banner-slide-picture">
                    <source media="(max-width: 767px)" srcSet={s.mobileImage} />
                    <img
                      src={s.image}
                      alt={s.alt}
                      className="vura-banner-slide-img"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      fetchPriority={idx === 0 ? 'high' : 'auto'}
                    />
                  </picture>

                </div>
              ))}
            </div>

            {/* Manual Carousel Navigation Arrows */}
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

            
          </div>

          {/* ============================================================
              SUPPORTING TEXT CONTENT:
              Desktop: Elegantly positioned within top-right transparent notch
              Mobile/Tablet: Rendered as clean modern card below banner stage
              ============================================================ */}
          <div
            className="vura-banner-thumb-content"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="vura-notch-desc">
              {slides[activeSlide].desc}
            </p>
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

          {/* Mobile: recognizable social media icons only */}
          <div className="mobile-social-icons" aria-label="Follow HYBEQ on Social Media">
            <a href="https://www.facebook.com/share/1DVTdtmXDD/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="mobile-social-icon-link">
              <svg width="18" height="18" viewBox="0 0 10 16" fill="currentColor">
                <path d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="mobile-social-icon-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M3.32 0H0L6.58 7.13L0 16H3.32L8.35 9.93L13.09 16H16L9.01 7.99L15.07 0H11.77L7.31 5.57L3.32 0Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/hybeq_chemicals_pvt_ltd/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="mobile-social-icon-link">
              <svg width="17" height="17" viewBox="0 0 18 18" fill="currentColor">
                <path d="M12.75 0H5.25C2.35 0 0 2.35 0 5.25V12.75C0 15.65 2.35 18 5.25 18H12.75C15.65 18 18 15.65 18 12.75V5.25C18 2.35 15.65 0 12.75 0ZM16.2 12.75C16.2 14.95 14.45 16.8 12.3 16.8H5.7C3.55 16.8 1.8 14.95 1.8 12.75V5.25C1.8 3.05 3.55 1.2 5.7 1.2H12.3C14.45 1.2 16.2 3.05 16.2 5.25V12.75ZM9 4.5C6.52 4.5 4.5 6.52 4.5 9C4.5 11.48 6.52 13.5 9 13.5C11.48 13.5 13.5 11.48 13.5 9C13.5 6.52 11.48 4.5 9 4.5ZM9 12C7.35 12 6 10.65 6 9C6 7.35 7.35 6 9 6C10.65 6 12 7.35 12 9C12 10.65 10.65 12 9 12ZM13.8 3.6C13.8 4.1 13.4 4.5 12.9 4.5C12.4 4.5 12 4.1 12 3.6C12 3.1 12.4 2.7 12.9 2.7C13.4 2.7 13.8 3.1 13.8 3.6Z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="mobile-social-icon-link">
              <svg width="16" height="16" viewBox="0 0 14 16" fill="currentColor">
                <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" />
              </svg>
            </a>
            <a href="https://youtube.com/@hybeq-thebuildingchemicalsexpe" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="mobile-social-icon-link">
              <svg width="18" height="14" viewBox="0 0 18 12" fill="currentColor">
                <path d="M17.1769 1.87759C16.9806 1.13853 16.4023 0.556469 15.668 0.358938C14.337 0 9.00014 0 9.00014 0C9.00014 0 3.66327 0 2.3323 0.358938C1.59802 0.5565 1.0197 1.13853 0.823422 1.87759C0.466797 3.21719 0.466797 6.01213 0.466797 6.01213C0.466797 6.01213 0.466797 8.80706 0.823422 10.1467C1.0197 10.8857 1.59802 11.4435 2.3323 11.6411C3.66327 12 9.00014 12 9.00014 12C9.00014 12 14.337 12 15.668 11.6411C16.4023 11.4435 16.9806 10.8857 17.1769 10.1467C17.5335 8.80706 17.5335 6.01213 17.5335 6.01213C17.5335 6.01213 17.5335 3.21719 17.1769 1.87759V1.87759ZM7.25467 8.54972V3.47453L11.7153 6.01219L7.25467 8.54972V8.54972Z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
