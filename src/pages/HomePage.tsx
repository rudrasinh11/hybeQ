import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Compass,
  Target,
  Eye,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { ClientsPartnersSection } from '../components/ClientsPartnersSection';
import { PRODUCTS } from '../data/productsData';
import { BLOG_POSTS } from '../data/blogData';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { ProductRangeMarquee } from '../components/ProductRangeMarquee';
import { ProductCard } from '../components/ProductCard';

interface HomePageProps {
  onOpenVideo: () => void;
  onOpenEnquiry: (productName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenVideo,
  onOpenEnquiry
}) => {
  const [selectedProductCategory, setSelectedProductCategory] = useState<string>('all');
  const carouselRef = useRef<HTMLDivElement>(null);
  const pillarsGridRef = useRef<HTMLDivElement>(null);

  // Change 4: Mobile-only IntersectionObserver for Foundational Pillars scroll animation
  useEffect(() => {
    const grid = pillarsGridRef.current;
    if (!grid) return;
    // Only activate on mobile
    if (window.innerWidth > 768) return;

    const cards = grid.querySelectorAll<HTMLElement>('.vura-pillar-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('pillar-revealed');
          } else {
            (entry.target as HTMLElement).classList.remove('pillar-revealed');
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);


  // Requirement 4: Display approximately 5-6 products per horizontal carousel
  const carouselProducts = (
    selectedProductCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === selectedProductCategory)
  ).slice(0, 6);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 330;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="vura-home-page" style={{ backgroundColor: '#FFFFFF', color: 'var(--color-body)' }}>
      
      {/* ============================================================
          SECTION 1: HERO SECTION (Header + Two-line Headline +
          Play Button + Showcase Media Card + Bottom Socials)
          ============================================================ */}
      <HeroSection onOpenVideo={onOpenVideo} onOpenEnquiry={onOpenEnquiry} />

      {/* ============================================================
          SECTION 2: AUTHENTIC HYBEQ CLIENTS & PARTNERS SHOWCASE
          (Marquee + Grid View, Chamfered Cards, Full Color Logos)
          ============================================================ */}
      <ClientsPartnersSection />

      {/* ============================================================
          SECTION 3: FEATURED FORMULATIONS / HIGH-PERFORMANCE CATALOG
          (Curated 5–6 formulations, Category filter pills & carousel)
          ============================================================ */}
      <section className="vura-products-section" id="featured-products">
        <div className="vura-container">
        <div className="vura-products-header">
            <div>
              <h2 className="vura-section-heading" style={{ margin: 0 }}>
                High-Performance Catalog
              </h2>
            </div>

            {/* Category Filter Pills & Carousel Controls */}
            <div className="vura-products-header-actions">
              <div className="vura-cat-pills">
                {[
                  { id: 'all', label: 'All Products' },
                  { id: 'tile-fixing', label: 'Tile & Stone' },
                  { id: 'waterproofing', label: 'Waterproofing' },
                  { id: 'structural-repair', label: 'Structural Repair' },
                  { id: 'grouts', label: 'Grouts' }
                ].map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedProductCategory(cat.id);
                      if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                    }}
                    className={`vura-cat-pill ${selectedProductCategory === cat.id ? 'active' : ''}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Subtle Previous / Next Carousel Buttons */}
              <div className="vura-carousel-controls-deck">
                <button
                  type="button"
                  className="vura-carousel-control-btn"
                  onClick={() => scrollCarousel('left')}
                  aria-label="Previous products"
                  title="Previous products"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  className="vura-carousel-control-btn"
                  onClick={() => scrollCarousel('right')}
                  aria-label="Next products"
                  title="Next products"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Curated Product Carousel: Limited to 5-6 products per section */}
          <div className="vura-products-carousel-wrap">
            <div
              className="vura-products-carousel-track"
              ref={carouselRef}
              tabIndex={0}
              role="region"
              aria-label="Featured Products Carousel (up to 6 products)"
            >
              {carouselProducts.map(product => (
                <div key={product.id} className="vura-carousel-card-item">
                  <ProductCard
                    product={product}
                    onOpenEnquiry={onOpenEnquiry}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Discoverability: Link to complete product catalog */}
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <Link to="/products" className="vura-enquiry-btn" style={{ padding: '14px 34px' }}>
              <span>VIEW COMPLETE CATALOGUE ({PRODUCTS.length} PRODUCTS)</span>
              <ArrowUpRight size={18} className="vura-enquiry-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: EXPORT / GLOBAL REACH
          (Inserted between High-Performance Catalog and What We Offer)
          ============================================================ */}
      <section className="vura-export-section" id="global-reach" aria-label="Export and Global Reach">
        <div className="vura-container">
          <div className="vura-export-inner">
            <div className="vura-export-text-col">
              <h2 className="vura-export-heading">
                Reaching Builders<br /><span className="vura-export-accent">Across the Globe</span>
              </h2>
              <p className="vura-export-desc">
                HYBEQ construction chemicals are trusted in infrastructure projects across India and exported to markets in the Middle East, Southeast Asia, and Africa. Our ISO-certified manufacturing ensures every batch meets international quality standards.
              </p>
              <div className="vura-export-stats-row">
                <div className="vura-export-stat">
                  <span className="vura-export-stat-num">15+</span>
                  <span className="vura-export-stat-label">Export Countries</span>
                </div>
                <div className="vura-export-stat">
                  <span className="vura-export-stat-num">ISO</span>
                  <span className="vura-export-stat-label">Certified Manufacturing</span>
                </div>
                <div className="vura-export-stat">
                  <span className="vura-export-stat-num">4</span>
                  <span className="vura-export-stat-label">Global Regions Served</span>
                </div>
              </div>
            </div>
            <div className="vura-export-map-col">
              <div className="vura-export-globe-visual">
                <div className="vura-globe-ring vura-globe-ring-1" />
                <div className="vura-globe-ring vura-globe-ring-2" />
                <div className="vura-globe-ring vura-globe-ring-3" />
                <div className="vura-globe-center">
                  <span className="vura-globe-label">GLOBAL<br />REACH</span>
                </div>
                {/* Hotspots */}
                <div className="vura-globe-dot vura-globe-dot-india" title="India (HQ)" />
                <div className="vura-globe-dot vura-globe-dot-me" title="Middle East" />
                <div className="vura-globe-dot vura-globe-dot-sea" title="Southeast Asia" />
                <div className="vura-globe-dot vura-globe-dot-africa" title="Africa" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: WHAT WE OFFER — OUR PRODUCT RANGE
          (Dual-Layer Kinetic Typography Marquee)
          ============================================================ */}
      <ProductRangeMarquee />

      {/* ============================================================
          SECTION 6: THREE PILLARS (PRINCIPLE, MISSION, VISION)
          ============================================================ */}
      <section className="vura-pillars-section" id="foundational-pillars">
        <div className="vura-container">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
              <h2 className="vura-section-heading">
                Built On Integrity, Precision &amp; Engineering Excellence
              </h2>
            <p className="vura-section-desc">
              Three non-negotiable principles that drive our formulation chemistry, raw material selection, and applicator training programs across India.
            </p>
          </div>

          <div className="vura-pillars-grid" ref={pillarsGridRef}>
            {/* Pillar 1: Principle */}
            <div className="vura-pillar-card">
              <div className="vura-pillar-media">
                <img
                  src="/images/plant-blending-tower.jpg"
                  alt="Automated Dry-Mix Chemical Plant"
                  className="vura-pillar-img"
                />
                <div className="vura-pillar-overlay" />
                <div className="vura-pillar-icon-box">
                  <Compass size={24} />
                </div>
              </div>
              <div className="vura-pillar-content">
                <span className="vura-pillar-tag">Core Principle</span>
                <h3 className="vura-pillar-title">Zero Compromise Chemical Purity</h3>
                <p className="vura-pillar-desc">
                  We use 100% virgin redispersible polymer powders sourced directly from certified European synthesizers. We never dilute with calcium carbonate fillers or unreacted extenders.
                </p>
              </div>
            </div>

            {/* Pillar 2: Mission */}
            <div className="vura-pillar-card">
              <div className="vura-pillar-media">
                <img
                  src="/images/lab-testing-rig.jpg"
                  alt="Materials Testing Laboratory"
                  className="vura-pillar-img"
                />
                <div className="vura-pillar-overlay" />
                <div className="vura-pillar-icon-box">
                  <Target size={24} />
                </div>
              </div>
              <div className="vura-pillar-content">
                <span className="vura-pillar-tag">Corporate Mission</span>
                <h3 className="vura-pillar-title">Permanence in Civil Infrastructure</h3>
                <p className="vura-pillar-desc">
                  Eliminating post-handover tile debonding, basement flooding, and concrete carbonation through high-durability polymer mortars designed for a 50+ year design life.
                </p>
              </div>
            </div>

            {/* Pillar 3: Vision */}
            <div className="vura-pillar-card">
              <div className="vura-pillar-media">
                <img
                  src="/images/hero-facade.jpg"
                  alt="Sustainable Green Architecture"
                  className="vura-pillar-img"
                />
                <div className="vura-pillar-overlay" />
                <div className="vura-pillar-icon-box">
                  <Eye size={24} />
                </div>
              </div>
              <div className="vura-pillar-content">
                <span className="vura-pillar-tag">Strategic Vision</span>
                <h3 className="vura-pillar-title">India's Benchmark in Green Chemistry</h3>
                <p className="vura-pillar-desc">
                  Leading the construction sector toward carbon-reduced cementitious formulations and zero-VOC waterborne elastomeric sealants by 2030.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8: INSIDE STORY / BLOG ARTICLES
          ============================================================ */}
      <section className="vura-articles-section">
        <div className="vura-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <h2 className="vura-section-heading" style={{ margin: 0 }}>
                Inside Story &amp; Engineering Guides
              </h2>
            </div>
            <Link to="/blog" className="vura-enquiry-btn" style={{ padding: '10px 20px' }}>
              <span>ALL ARTICLES</span>
              <ArrowUpRight size={15} className="vura-enquiry-arrow" />
            </Link>
          </div>

          <div className="vura-articles-grid">
            {BLOG_POSTS.map((post, idx) => (
              <article key={post.id} className="vura-article-card">
                <div>
                  <div style={{ height: 160, borderRadius: 10, overflow: 'hidden', marginBottom: 18, border: '1px solid rgba(255,255,255,0.08)' }}>
                    <img
                      src={idx % 2 === 0 ? '/images/hybeq_live/blog_b3370.jpeg' : '/images/hybeq_live/blog_b2692.jpeg'}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <span className="vura-article-tag">{post.category} • {post.readTime}</span>
                  <h3 className="vura-article-title">{post.title}</h3>
                  <p className="vura-article-snippet">{post.summary}</p>
                </div>
                <Link to={`/blog/${post.slug}`} className="vura-article-link">
                  Read Technical Guide <ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          AUTHENTIC VURA MARQUEE BANNER: "Time to build better"
          ============================================================ */}
      <MarqueeTicker />

    </div>
  );
};
