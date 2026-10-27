import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowUpRight, MessageSquare } from 'lucide-react';
import { PRODUCTS, type Product } from '../data/productsData';

interface FeaturedProductsSectionProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({
  onOpenEnquiry
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  // Filter products by category
  const filteredProducts = (
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory)
  );

  // Helper to resolve packaging cutout image
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
    { id: 'waterproofing', label: 'Waterproofing Systems' },
    { id: 'repairs', label: 'Structural Repairs' },
    { id: 'grouts', label: 'Epoxy Grouts' }
  ];

  const updateScrollState = () => {
    if (trackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, [filteredProducts]);

  const scrollTrack = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollStep = 340;
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollStep : scrollStep,
        behavior: 'smooth'
      });
      setTimeout(updateScrollState, 350);
    }
  };

  const handleCategorySelect = (catId: string) => {
    setActiveCategory(catId);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="hybeq-carousel-section" id="featured-products" aria-label="Featured Formulations Carousel">
      <div className="hybeq-carousel-container">
        
        {/* Header with Title & Category Filters */}
        <div className="hybeq-carousel-header">
          <div className="hybeq-carousel-title-group">
            <h2 className="hybeq-carousel-title">
              Featured Formulations
            </h2>
            <p className="hybeq-carousel-subtitle">
              Engineered construction chemicals manufactured to exceed IS 15477:2019 and EN 12004 standards.
            </p>
          </div>

          {/* Previous / Next Desktop Carousel Controls */}
          <div className="hybeq-carousel-nav-controls" role="group" aria-label="Carousel navigation">
            <button
              type="button"
              className={`hybeq-carousel-arrow-btn ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={() => scrollTrack('left')}
              disabled={!canScrollLeft}
              aria-label="Previous products"
              title="Previous products"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className={`hybeq-carousel-arrow-btn ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => scrollTrack('right')}
              disabled={!canScrollRight}
              aria-label="Next products"
              title="Next products"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="hybeq-carousel-pills" role="tablist" aria-label="Product Category Filter">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`hybeq-carousel-pill ${activeCategory === cat.id ? 'active' : ''}`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Horizontal Scrolling Showcase Track */}
        <div className="hybeq-carousel-wrapper">
          <div
            className="hybeq-carousel-track"
            ref={trackRef}
            onScroll={updateScrollState}
            tabIndex={0}
            role="region"
            aria-label="Horizontally scrollable product showcase"
          >
            {filteredProducts.map((prod) => {
              const imgSrc = resolveProductImage(prod);
              const detailUrl = `/products/${prod.category}/${prod.id}`;

              return (
                <div key={prod.id} className="hybeq-carousel-card">
                  {/* Card Top Packaging */}
                  <div className="hybeq-ccard-top">
                    <span className="hybeq-ccard-packaging">{prod.packaging}</span>
                  </div>

                  {/* Product Packaging Image Showcase */}
                  <Link to={detailUrl} className="hybeq-ccard-media" title={`View ${prod.name}`}>
                    <img
                      src={imgSrc}
                      alt={prod.name}
                      className="hybeq-ccard-img"
                      loading="lazy"
                    />
                  </Link>

                  {/* Product Information */}
                  <div className="hybeq-ccard-body">
                    <span className="hybeq-ccard-cat">{prod.categoryLabel}</span>
                    <h3 className="hybeq-ccard-name">
                      <Link to={detailUrl}>{prod.name}</Link>
                    </h3>
                    <p className="hybeq-ccard-desc">{prod.shortDesc}</p>

                    {/* Technical Specs Key Highlights */}
                    {prod.specs && Object.keys(prod.specs).length > 0 && (
                      <div className="hybeq-ccard-specs">
                        {Object.entries(prod.specs).slice(0, 2).map(([k, v], i) => (
                          <div key={i} className="hybeq-cspec-row">
                            <span className="hybeq-cspec-k">{k}:</span>
                            <span className="hybeq-cspec-v">{v}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Actions */}
                  <div className="hybeq-ccard-footer">
                    <Link to={detailUrl} className="hybeq-ccard-btn-view">
                      <span>View Product</span>
                      <ArrowUpRight size={14} />
                    </Link>

                    <button
                      type="button"
                      onClick={() => onOpenEnquiry(prod.name)}
                      className="hybeq-ccard-btn-enquire"
                      title={`Request TDS or Quote for ${prod.name}`}
                      aria-label={`Enquire about ${prod.name}`}
                    >
                      <MessageSquare size={14} />
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View Complete Catalogue CTA */}
        <div className="hybeq-carousel-bottom">
          <Link to="/products" className="hybeq-link-catalog">
            <span>View Complete Catalogue ({PRODUCTS.length} Products)</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};
