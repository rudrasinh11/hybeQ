import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Compass,
  Target,
  Eye
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

  const filteredProducts = selectedProductCategory === 'all'
    ? PRODUCTS.slice(0, 8)
    : PRODUCTS.filter(p => p.category === selectedProductCategory);

  return (
    <div className="vura-home-page" style={{ backgroundColor: 'var(--color-page-background)', color: 'var(--color-body)' }}>
      
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
          SECTION 3: OUR PRODUCT RANGE (Kinetic Typography Marquee)
          ============================================================ */}
      <ProductRangeMarquee />

      {/* ============================================================
          SECTION 4: THREE PILLARS (PRINCIPLE, MISSION, VISION)
          ============================================================ */}
      <section className="vura-pillars-section">
        <div className="vura-container">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
            <span className="vura-section-tag">Foundational Pillars</span>
            <h2 className="vura-section-heading">
              Built On Integrity, Precision &amp; Engineering Excellence
            </h2>
            <p className="vura-section-desc">
              Three non-negotiable principles that drive our formulation chemistry, raw material selection, and applicator training programs across India.
            </p>
          </div>

          <div className="vura-pillars-grid">
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
          SECTION 5: PRODUCTS SECTION (Filterable Catalog Grid)
          ============================================================ */}
      <section className="vura-products-section" id="featured-products">
        <div className="vura-container">
          <div className="vura-products-header">
            <div>
              <span className="vura-section-tag">High Performance Catalog</span>
              <h2 className="vura-section-heading" style={{ margin: 0 }}>
                Featured Formulations
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="vura-cat-pills">
              {[
                { id: 'all', label: 'All Products' },
                { id: 'tile-fixing', label: 'Tile & Stone Fixing' },
                { id: 'waterproofing', label: 'Waterproofing' },
                { id: 'repairs', label: 'Repair Mortars' },
                { id: 'grouts', label: 'Epoxy Grouts' }
              ].map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedProductCategory(cat.id)}
                  className={`vura-cat-pill ${selectedProductCategory === cat.id ? 'active' : ''}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid - Clean Responsive CSS Grid */}
          <div className="vura-products-grid">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenEnquiry={onOpenEnquiry}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 50 }}>
            <Link to="/products" className="vura-enquiry-btn" style={{ padding: '14px 32px' }}>
              <span>VIEW COMPLETE CATALOGUE (12+ PRODUCTS)</span>
              <ArrowUpRight size={18} className="vura-enquiry-arrow" />
            </Link>
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
              <span className="vura-section-tag">Technical Knowledge Base</span>
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
