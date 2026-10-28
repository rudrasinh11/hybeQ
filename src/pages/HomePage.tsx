import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
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
                    { id: 'surface-treatment', label: 'Surface Treatment' },
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
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <Link to="/products" className="vura-enquiry-btn" style={{ padding: '14px 34px' }}>
              <span>VIEW COMPLETE CATALOGUE ({PRODUCTS.length} PRODUCTS)</span>
              <ArrowUpRight size={18} className="vura-enquiry-arrow" />
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
            loading="lazy"
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
