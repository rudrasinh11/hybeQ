import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
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
import { CorePrinciplesSection } from '../components/CorePrinciplesSection';

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
              <div className="vura-cat-pills-scroll-wrap">
                <div className="vura-cat-pills">
                  {[
                    { id: 'all', label: 'All Products' },
                    { id: 'tile-fixing', label: 'Tile & Stone' },
                    { id: 'waterproofing', label: 'Waterproofing' },
                    { id: 'grouts', label: 'Grouts' },
                    { id: 'structural-repair', label: 'Structural Repair' },
                    { id: 'surface-treatment', label: 'Surface Treatment' },
                    { id: 'precast-additives', label: 'Precast Additives' },
                    { id: 'plasticizers', label: 'Plasticizers' },
                    { id: 'bonding-agent', label: 'Bonding Agent' },
                    { id: 'sealants', label: 'Sealants' },
                    { id: 'decorative-floor-wall', label: 'Decorative Floors' },
                    { id: 'drymix-mortar', label: 'Drymix Mortar' },
                    { id: 'curing-compounds', label: 'Curing Compounds' },
                    { id: 'epoxy-flooring', label: 'Epoxy Flooring' },
                    { id: 'epoxy-screed', label: 'Epoxy Screed' }
                  ].map(cat => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={(e) => {
                        setSelectedProductCategory(cat.id);
                        (e.currentTarget as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                        if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                      }}
                      className={`vura-cat-pill ${selectedProductCategory === cat.id ? 'active' : ''}`}
                    >
                      {cat.label}
                    </button>
                  ))}
                  <Link
                    to="/products"
                    className="vura-cat-pill vura-cat-pill-view-all"
                    title="View all 14 categories in full catalog"
                  >
                    <span>View All Categories →</span>
                  </Link>
                </div>
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
            {carouselProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '48px 20px', color: '#64748B' }}>
                <p style={{ margin: '0 0 12px', fontSize: '1rem', fontWeight: 600 }}>No formulations found in this category.</p>
                <button
                  type="button"
                  onClick={() => setSelectedProductCategory('all')}
                  className="vura-cat-pill active"
                  style={{ display: 'inline-block' }}
                >
                  Show All Products
                </button>
              </div>
            ) : (
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
            )}
          </div>

          {/* Discoverability: Link to complete product catalog */}
          <div className="vura-catalog-cta-wrap">
            <Link to="/products" className="vura-catalog-cta-btn">
              <span>VIEW COMPLETE CATALOGUE ({PRODUCTS.length} PRODUCTS)</span>
              <ArrowUpRight size={18} className="vura-catalog-cta-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: EXPORT / GLOBAL REACH — Redesigned
          White text block (eyebrow + heading + desc + CTA)
          followed by full-bleed aerial port photograph
          ============================================================ */}
      <section className="reach-section" id="global-reach" aria-label="Export and Global Reach">
        {/* Top text content */}
        <div className="reach-text-block">
          
          <h2 className="reach-heading">
            Local Expertise. <span className="reach-accent">Global Ambition.</span>
          </h2>
          <p className="reach-desc">
            Construction challenges may differ across regions, but the need for reliable materials
            remains universal. HYBEQ aims to expand its reach through quality-focused solutions,
            industry relationships, and a commitment to serving the evolving needs of
            construction markets.
          </p>
          <Link to="/contact" className="reach-cta-btn">
            <span>Connect With HYBEQ</span>
            <span className="reach-btn-arrow">→</span>
          </Link>
        </div>
        {/* Full-bleed port image */}
        <div className="reach-image-block">
          <img
            src="/images/export-port-hero.jpg"
            alt="Aerial view of international shipping port — HYBEQ global export reach"
            className="reach-port-img"
            loading="eager"
            width="1440"
            height="680"
          />
        </div>
      </section>

      {/* ============================================================
          SECTION 5: WHAT WE OFFER — OUR PRODUCT RANGE
          (Dual-Layer Kinetic Typography Marquee)
          ============================================================ */}
      <ProductRangeMarquee />

      {/* ============================================================
          SECTION 6: BUILT ON INTEGRITY, PRECISION & ENGINEERING EXCELLENCE
          (ScrollStack Animation)
          ============================================================ */}
      <CorePrinciplesSection />

      {/* ============================================================
          SECTION 8: INSIDE STORY / BLOG ARTICLES
          Editorial Two-Part Layout Inspired by Reference Composition
          ============================================================ */}
      <section className="vura-articles-section" id="editorial-guides">
        <div className="vura-container">
          {/* Editorial Header Row: Heading + Subtitle + Right Aligned CTA Button */}
          <div className="vura-articles-header">
            <div>
              <h2 className="vura-section-heading" style={{ margin: 0 }}>
                Inside Story &amp; Engineering Guides
              </h2>
              <p className="vura-articles-subheading">
                Technical formulations, structural rehabilitation studies, and application methodologies direct from HYBEQ engineers.
              </p>
            </div>
            <Link to="/blog" className="vura-articles-all-btn">
              <span>ALL ARTICLES</span>
              <ArrowRight size={16} className="vura-articles-btn-arrow" />
            </Link>
          </div>

          {/* Editorial Composition: Left Featured + Right 2 Supporting Split Cards */}
          <div className="vura-editorial-layout">
            {/* Left: Large Featured Article Card */}
            {BLOG_POSTS[0] && (
              <article className="vura-editorial-featured-card">
                <div className="vura-editorial-featured-media">
                  <img
                    src="/images/hero-waterproofing.jpg"
                    alt={BLOG_POSTS[0].title}
                    className="vura-editorial-featured-img"
                    loading="eager"
                  />
                  <div className="vura-editorial-featured-overlay" />
                </div>
                <div className="vura-editorial-featured-content">
                  <div className="vura-editorial-meta">
                    <span>By HYBEQ</span>
                    <span className="vura-editorial-meta-dot">•</span>
                    <span>{BLOG_POSTS[0].date}</span>
                    <span className="vura-editorial-meta-dot">•</span>
                    <span>{BLOG_POSTS[0].readTime}</span>
                  </div>
                  <h3 className="vura-editorial-featured-title">
                    <Link to={`/blog/${BLOG_POSTS[0].slug}`}>
                      {BLOG_POSTS[0].title}
                    </Link>
                  </h3>
                  <p className="vura-editorial-featured-snippet">
                    {BLOG_POSTS[0].summary}
                  </p>
                  <div className="vura-editorial-bottom-row">
                    <span className="vura-editorial-cat-badge">
                      {BLOG_POSTS[0].category}
                    </span>
                    <Link
                      to={`/blog/${BLOG_POSTS[0].slug}`}
                      className="vura-editorial-read-link"
                    >
                      <span>Read Technical Guide</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            )}

            {/* Right: Supporting Articles (Stacked 2 Cards in Balanced Split Layout) */}
            <div className="vura-editorial-supporting-col">
              {/* Supporting Card 1: Tile Adhesives */}
              {BLOG_POSTS[2] && (
                <article className="vura-editorial-split-card">
                  <div className="vura-editorial-split-content">
                    <div className="vura-editorial-meta">
                      <span>By HYBEQ</span>
                      <span className="vura-editorial-meta-dot">•</span>
                      <span>{BLOG_POSTS[2].date}</span>
                    </div>
                    <h4 className="vura-editorial-split-title">
                      <Link to={`/blog/${BLOG_POSTS[2].slug}`}>
                        {BLOG_POSTS[2].title}
                      </Link>
                    </h4>
                    <p className="vura-editorial-split-snippet">
                      {BLOG_POSTS[2].summary}
                    </p>
                    <div className="vura-editorial-split-footer">
                      <span className="vura-editorial-cat-badge">
                        {BLOG_POSTS[2].category}
                      </span>
                      <Link
                        to={`/blog/${BLOG_POSTS[2].slug}`}
                        className="vura-editorial-circle-btn"
                        aria-label={`Read ${BLOG_POSTS[2].title}`}
                        title="Read Technical Guide"
                      >
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </div>
                  <div className="vura-editorial-split-media">
                    <img
                      src="/images/hybeq_live/blog_b2692.jpeg"
                      alt={BLOG_POSTS[2].title}
                      className="vura-editorial-split-img"
                      loading="eager"
                    />
                  </div>
                </article>
              )}

              {/* Supporting Card 2: Concrete Waterproofing & Rebar Rehabilitation */}
              {BLOG_POSTS[1] && (
                <article className="vura-editorial-split-card">
                  <div className="vura-editorial-split-content">
                    <div className="vura-editorial-meta">
                      <span>By HYBEQ</span>
                      <span className="vura-editorial-meta-dot">•</span>
                      <span>{BLOG_POSTS[1].date}</span>
                    </div>
                    <h4 className="vura-editorial-split-title">
                      <Link to={`/blog/${BLOG_POSTS[1].slug}`}>
                        {BLOG_POSTS[1].title}
                      </Link>
                    </h4>
                    <p className="vura-editorial-split-snippet">
                      {BLOG_POSTS[1].summary}
                    </p>
                    <div className="vura-editorial-split-footer">
                      <span className="vura-editorial-cat-badge">
                        {BLOG_POSTS[1].category}
                      </span>
                      <Link
                        to={`/blog/${BLOG_POSTS[1].slug}`}
                        className="vura-editorial-circle-btn"
                        aria-label={`Read ${BLOG_POSTS[1].title}`}
                        title="Read Technical Guide"
                      >
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </div>
                  <div className="vura-editorial-split-media">
                    <img
                      src="/images/hybeq_live/blog_b3370.jpeg"
                      alt={BLOG_POSTS[1].title}
                      className="vura-editorial-split-img"
                      loading="eager"
                    />
                  </div>
                </article>
              )}
            </div>
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
