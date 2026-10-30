import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { PRODUCTS, getProductImage, type Product } from '../data/productsData';

interface RelatedProductsProps {
  currentProduct: Product;
  onOpenEnquiry?: (productName?: string) => void;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  currentProduct,
  onOpenEnquiry
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Find genuinely related products in the same category or sharing applications
  const relatedList = React.useMemo(() => {
    // 1. Same category first (excluding current)
    const sameCat = PRODUCTS.filter(
      p => p.id !== currentProduct.id && p.category === currentProduct.category
    );

    // 2. If fewer than 4, find products sharing applications
    const otherProducts = PRODUCTS.filter(
      p => p.id !== currentProduct.id && p.category !== currentProduct.category
    );

    const appMatches = otherProducts.filter(p =>
      p.applications.some(app => currentProduct.applications.includes(app))
    );

    const combined = [...sameCat, ...appMatches];
    // Deduplicate
    const unique = Array.from(new Set(combined));

    // Fallback to top products if needed
    if (unique.length < 4) {
      for (const p of PRODUCTS) {
        if (p.id !== currentProduct.id && !unique.some(u => u.id === p.id)) {
          unique.push(p);
          if (unique.length >= 6) break;
        }
      }
    }

    return unique.slice(0, 6);
  }, [currentProduct]);

  if (relatedList.length === 0) return null;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      className="hybeq-related-products-section"
      style={{
        padding: '72px 0 88px',
        backgroundColor: '#F8FAFC',
        borderTop: '1px solid #E2E8F0',
        overflow: 'hidden'
      }}
      aria-label="Related Products"
    >
      <div className="container" style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px' }}>
        {/* Header Row: Title & Subtitle + Carousel Arrows */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 36,
            gap: 20,
            flexWrap: 'wrap'
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                fontWeight: 800,
                color: '#0A2362',
                letterSpacing: '-0.02em',
                margin: 0
              }}
            >
              Related Products
            </h2>
            <p
              style={{
                fontSize: '0.9375rem',
                color: '#64748B',
                margin: '6px 0 0',
                maxWidth: 600,
                lineHeight: 1.5
              }}
            >
              Explore other HYBEQ solutions designed for your construction requirements.
            </p>
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Previous related products"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #DFE6EF',
                color: '#0A2362',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 6px rgba(10, 35, 98, 0.04)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#0A2362';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = '#0A2362';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#0A2362';
                e.currentTarget.style.borderColor = '#DFE6EF';
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Next related products"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #DFE6EF',
                color: '#0A2362',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 6px rgba(10, 35, 98, 0.04)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#0A2362';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = '#0A2362';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#0A2362';
                e.currentTarget.style.borderColor = '#DFE6EF';
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Products Card Track */}
        <div
          ref={scrollRef}
          className="hybeq-related-products-track"
          style={{
            display: 'flex',
            gap: 24,
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingBottom: 16,
            margin: '0 -12px',
            padding: '4px 12px 20px'
          }}
        >
          {relatedList.map(prod => {
            const prodUrl = `/products/${prod.category}/${prod.id}`;
            return (
              <div
                key={prod.id}
                className="hybeq-related-card"
                style={{
                  flex: '0 0 290px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 14,
                  border: '1.5px solid #E2E8F0',
                  boxShadow: '0 4px 16px rgba(10, 35, 98, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(10, 35, 98, 0.08)';
                  e.currentTarget.style.borderColor = '#46C985';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(10, 35, 98, 0.04)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                {/* Product Image Box */}
                <Link
                  to={prodUrl}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 200,
                    backgroundColor: '#F8FAFC',
                    padding: 16,
                    borderBottom: '1px solid #F1F5F9'
                  }}
                >
                  <img
                    src={getProductImage(prod)}
                    alt={prod.name}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </Link>

                {/* Card Content Area */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      color: '#46C985',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: 6
                    }}
                  >
                    {prod.categoryLabel}
                  </span>

                  <h3
                    style={{
                      fontSize: '1.0625rem',
                      fontWeight: 700,
                      color: '#0A2362',
                      margin: '0 0 8px',
                      lineHeight: 1.3
                    }}
                  >
                    <Link
                      to={prodUrl}
                      style={{ color: '#0A2362', textDecoration: 'none' }}
                    >
                      {prod.name}
                    </Link>
                  </h3>

                  <p
                    style={{
                      fontSize: '0.8125rem',
                      color: '#64748B',
                      lineHeight: 1.5,
                      margin: '0 0 16px',
                      flex: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {prod.shortDesc}
                  </p>

                  {/* Actions: View Product & Buy/Enquiry */}
                  <div style={{ display: 'flex', gap: 10, marginTop: 'auto' }}>
                    <Link
                      to={prodUrl}
                      style={{
                        flex: 1,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                        padding: '9px 12px',
                        borderRadius: 8,
                        backgroundColor: '#F1F5F9',
                        color: '#0A2362',
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#E2E8F0')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#F1F5F9')}
                    >
                      <span>View Product</span>
                      <ArrowRight size={13} />
                    </Link>

                    {onOpenEnquiry && (
                      <button
                        type="button"
                        onClick={() => onOpenEnquiry(prod.name)}
                        style={{
                          padding: '9px 14px',
                          borderRadius: 8,
                          backgroundColor: '#0A2362',
                          color: '#FFFFFF',
                          border: 'none',
                          fontSize: '0.8125rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          transition: 'background-color 0.2s ease'
                        }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#46C985')}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0A2362')}
                      >
                        Inquire
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
