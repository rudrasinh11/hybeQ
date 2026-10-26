import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ShieldCheck, MessageSquare, Check, Sparkles } from 'lucide-react';
import { PRODUCTS, type Product } from '../data/productsData';

interface FeaturedProductsSectionProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({
  onOpenEnquiry
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Filter products by selected category pill
  const filteredProducts = (
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory)
  ).slice(0, 6);

  // Helper to resolve the best high-res packaging asset
  const resolveProductImage = (product: Product): string => {
    if (product.id === 'hycera-505') return '/images/hybeq_products/hycera-505.png';
    if (product.id === 'hyintra-507') return '/images/hybeq_products/hyintra-507.png';
    if (product.id === 'hyultra-515') return '/images/hybeq_products/hyultra-515.png';
    if (product.id === 'hymax-525') return '/images/hybeq_products/hymax-525.png';
    if (product.id === 'hy-dampproof-ultra') return '/images/hybeq_products/hy-dampproof-ultra.png';
    if (product.id === 'hy-spot-bond-ep510') return '/images/hybeq_products/hy-spot-bond-ep510.png';
    if (product.id === 'hy-superconcrete-ls') return '/images/hybeq_products/hy-superconcrete-ls.png';
    if (product.image) return product.image;
    return '/images/hybeq_products/hycera-505.png';
  };

  const categories = [
    { id: 'all', label: 'All Formulations' },
    { id: 'tile-fixing', label: 'Tile & Stone Adhesives' },
    { id: 'waterproofing', label: 'Waterproofing Membranes' },
    { id: 'repairs', label: 'Structural Repairs' },
    { id: 'grouts', label: 'Epoxy Grouts' }
  ];

  return (
    <section className="hybeq-products-section" id="featured-products" aria-label="Featured HYBEQ Formulations">
      <div className="hybeq-products-container">
        
        {/* Section Header */}
        <div className="hybeq-products-header">
          <div className="hybeq-products-header-text">
            <div className="hybeq-section-badge">
              <Sparkles size={14} className="hybeq-badge-sparkle" />
              <span>HIGH-PERFORMANCE CATALOG</span>
            </div>
            <h2 className="hybeq-products-title">
              Featured Formulations &amp; Certified Adhesives
            </h2>
            <p className="hybeq-products-subtitle">
              Verified formulations manufactured under strict ISO 9001 quality controls. Each product is engineered for specific substrate dynamics, water table depths, and civil load requirements.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="hybeq-cat-filter-bar" role="tablist" aria-label="Product Categories Filter">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`hybeq-filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid: Clean, High-Contrast, Professional */}
        <div className="hybeq-products-grid">
          {filteredProducts.map((prod) => {
            const imgSrc = resolveProductImage(prod);
            const detailUrl = `/products/${prod.category}/${prod.id}`;

            return (
              <article key={prod.id} className="hybeq-product-card" id={`product-${prod.id}`}>
                {/* Card Top: Category & Standard Badge */}
                <div className="hybeq-pcard-header">
                  <span className="hybeq-pcard-cat-label">{prod.categoryLabel}</span>
                  <span className="hybeq-pcard-standard-badge">
                    <ShieldCheck size={13} />
                    <span>{prod.badge}</span>
                  </span>
                </div>

                {/* Packaging Visual Showcase with Clean Shadow */}
                <Link to={detailUrl} className="hybeq-pcard-media-wrap" title={`View technical specs for ${prod.name}`}>
                  <div className="hybeq-pcard-media-bg" />
                  <img
                    src={imgSrc}
                    alt={`${prod.name} - ${prod.packaging}`}
                    className="hybeq-pcard-img"
                    loading="lazy"
                  />
                  <span className="hybeq-pcard-pack-tag">{prod.packaging}</span>
                </Link>

                {/* Card Body */}
                <div className="hybeq-pcard-body">
                  <h3 className="hybeq-pcard-title">
                    <Link to={detailUrl}>{prod.name}</Link>
                  </h3>

                  <p className="hybeq-pcard-desc">{prod.shortDesc}</p>

                  {/* Key Technical Highlights Checklist */}
                  <div className="hybeq-pcard-features">
                    {prod.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="hybeq-pcard-feature-item">
                        <Check size={14} className="hybeq-feature-check" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Specs Snapshot */}
                  {prod.specs && Object.keys(prod.specs).length > 0 && (
                    <div className="hybeq-pcard-specs-matrix">
                      {Object.entries(prod.specs).slice(0, 2).map(([key, val], sIdx) => (
                        <div key={sIdx} className="hybeq-spec-item">
                          <span className="hybeq-spec-k">{key}:</span>
                          <span className="hybeq-spec-v">{val}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer: Conversion & Detail Links */}
                <div className="hybeq-pcard-footer">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(prod.name)}
                    className="hybeq-pcard-enquire-btn"
                    aria-label={`Request TDS or Quote for ${prod.name}`}
                  >
                    <MessageSquare size={15} />
                    <span>Get Quote / TDS</span>
                  </button>

                  <Link
                    to={detailUrl}
                    className="hybeq-pcard-detail-btn"
                    aria-label={`View full specifications for ${prod.name}`}
                  >
                    <span>View Specs</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA to Full Catalog */}
        <div className="hybeq-products-bottom-bar">
          <p className="hybeq-bottom-note">
            Looking for specialized admixtures, bonding agents, or curing compounds?
          </p>
          <Link to="/products" className="hybeq-btn hybeq-btn-primary">
            <span>Explore All 16+ HYBEQ Formulations</span>
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
};
