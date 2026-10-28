import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Layers, 
  Search, 
  CheckCircle2, 
  X, 
  RotateCcw,
  SlidersHorizontal
} from 'lucide-react';
import { 
  PRODUCTS, 
  PRODUCT_CATEGORIES, 
  normalizeCategorySlug, 
  getProductImage
} from '../data/productsData';

interface ProductsPageProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenEnquiry }) => {
  const { category } = useParams<{ category?: string }>();
  const navigate = useNavigate();

  const [selectedCat, setSelectedCat] = useState<string>(() => normalizeCategorySlug(category));
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileFilterDrawerOpen, setMobileFilterDrawerOpen] = useState(false);

  // Keep state in sync with URL route param
  useEffect(() => {
    setSelectedCat(normalizeCategorySlug(category));
  }, [category]);

  const handleSelectCategory = (catId: string) => {
    setSelectedCat(catId);
    setMobileFilterDrawerOpen(false);
    if (catId === 'all') {
      navigate('/products');
    } else {
      navigate(`/products/${catId}`);
    }
  };

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCat = selectedCat === 'all' || p.category === selectedCat;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = !q || (
      p.name.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      p.badge.toLowerCase().includes(q) ||
      p.standards.toLowerCase().includes(q) ||
      p.features.some(f => f.toLowerCase().includes(q))
    );
    return matchesCat && matchesSearch;
  });

  const getProductCountForCategory = (catId: string) => {
    if (catId === 'all') return PRODUCTS.length;
    return PRODUCTS.filter(p => p.category === catId).length;
  };

  const activeCategoryObj = PRODUCT_CATEGORIES.find(c => c.id === selectedCat);
  const activeCategoryLabel = selectedCat === 'all' ? 'All Products' : (activeCategoryObj?.label || selectedCat.toUpperCase());

  return (
    <div className="products-page">
      {/* Header Banner */}
      <section style={{ background: '#0A2362', color: '#FFFFFF', padding: '60px 0 44px' }}>
        <div className="container">
          <span className="section-tag on-dark" style={{ marginBottom: 12 }}>Authoritative Chemical Formulations</span>
          <h1 style={{ fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)', color: '#FFFFFF', fontWeight: 900, marginBottom: 14 }}>
            High-Performance Product Portfolio
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.82)', maxWidth: 740, lineHeight: 1.6 }}>
            14 specialized civil engineering chemical categories engineered to exceed IS 15477, ASTM, and EN 12004 standards with certified German polymer chemistry.
          </p>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section style={{ padding: '36px 0 80px', background: '#F8FAFC' }}>
        <div className="container">

          {/* Top Controls Bar: Search & Mobile Filter Trigger */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 14,
            marginBottom: 28,
            flexWrap: 'wrap'
          }}>
            {/* Search Input */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: '#FFFFFF',
              border: '1.5px solid #DFE6EF',
              borderRadius: 10,
              padding: '6px 14px',
              flex: '1 1 320px',
              maxWidth: 560
            }}>
              <Search size={18} style={{ color: '#0A2362', marginRight: 10, flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search formulations, standards (e.g. Type 2, S1), or keywords..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  border: 'none',
                  outline: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#0A2362',
                  padding: '6px 0'
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{ background: 'none', border: 'none', color: '#64748B', cursor: 'pointer', padding: 4 }}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Mobile Filter Button (Visible on screens <= 767px) */}
            <div className="mobile-filter-trigger-wrap">
              <button
                type="button"
                className="btn btn-outline mobile-filter-btn"
                onClick={() => setMobileFilterDrawerOpen(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: '0.875rem',
                  padding: '10px 16px',
                  background: '#FFFFFF',
                  borderColor: selectedCat !== 'all' ? '#46C985' : '#DFE6EF',
                  color: '#0A2362',
                  fontWeight: 700
                }}
              >
                <SlidersHorizontal size={16} style={{ color: '#46C985' }} />
                <span>Categories ({selectedCat === 'all' ? '14' : '1 Active'})</span>
              </button>
            </div>

            {/* Results Count & Active Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: '0.875rem', color: '#64748B', fontWeight: 600 }}>
                Showing <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'formulation' : 'formulations'}
              </span>
              {selectedCat !== 'all' && (
                <button
                  type="button"
                  onClick={() => handleSelectCategory('all')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    fontSize: '0.75rem',
                    color: '#0A2362',
                    background: '#EAF8F0',
                    border: '1px solid #46C985',
                    borderRadius: 20,
                    padding: '3px 10px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Reset Filter <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Mobile Horizontal Quick-Pill Scroller (Strictly for mobile <= 767px) */}
          <div className="mobile-category-pill-bar">
            <button
              type="button"
              onClick={() => handleSelectCategory('all')}
              className={`mobile-cat-pill ${selectedCat === 'all' ? 'active' : ''}`}
            >
              All ({PRODUCTS.length})
            </button>
            {PRODUCT_CATEGORIES.map(cat => {
              const count = getProductCountForCategory(cat.id);
              const isActive = selectedCat === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`mobile-cat-pill ${isActive ? 'active' : ''}`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>

          {/* Main Layout: Desktop Sidebar (Left) + Product Cards (Right) */}
          <div className="catalog-layout-container">
            
            {/* Desktop Left Sidebar: Exactly 14 Categories in Required Order (Part 8.1) */}
            <aside className="catalog-desktop-sidebar">
              <div className="catalog-sidebar-card">
                <div className="catalog-sidebar-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Layers size={18} style={{ color: '#46C985' }} />
                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 800, color: '#0A2362', margin: 0 }}>
                      PRODUCT CATEGORIES
                    </h3>
                  </div>
                  {selectedCat !== 'all' && (
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('all')}
                      style={{ background: 'none', border: 'none', fontSize: '0.75rem', color: '#64748B', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
                      title="Reset to All"
                    >
                      <RotateCcw size={12} /> All
                    </button>
                  )}
                </div>

                <div className="catalog-category-list">
                  {/* All Products Option */}
                  <button
                    type="button"
                    onClick={() => handleSelectCategory('all')}
                    className={`catalog-cat-item ${selectedCat === 'all' ? 'active' : ''}`}
                  >
                    <span className="cat-item-label">ALL PRODUCTS</span>
                    <span className="cat-item-count">{PRODUCTS.length}</span>
                  </button>

                  {/* 14 Specific Categories in Strict Order */}
                  {PRODUCT_CATEGORIES.map((cat, idx) => {
                    const count = getProductCountForCategory(cat.id);
                    const isActive = selectedCat === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleSelectCategory(cat.id)}
                        className={`catalog-cat-item ${isActive ? 'active' : ''}`}
                        title={cat.label}
                      >
                        <span className="cat-item-index">{idx + 1}.</span>
                        <span className="cat-item-label">{cat.label}</span>
                        <span className="cat-item-count">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* Product Cards Content Area */}
            <main className="catalog-products-main">
              {filteredProducts.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '70px 24px', background: '#FFFFFF', borderRadius: 16, border: '1.5px solid #DFE6EF' }}>
                  <h3 style={{ fontSize: '1.35rem', color: '#0A2362', fontWeight: 800 }}>No matching formulations found</h3>
                  <p style={{ color: '#64748B', marginTop: 8, maxWidth: 440, margin: '8px auto 20px' }}>
                    No products currently match your search criteria for <strong>{activeCategoryLabel}</strong>.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => { setSearchQuery(''); handleSelectCategory('all'); }}
                  >
                    View All Formulations ({PRODUCTS.length})
                  </button>
                </div>
              ) : (
                <div className="catalog-products-grid">
                  {filteredProducts.map(product => (
                    <article
                      key={product.id}
                      className="catalog-product-card"
                    >
                      {/* 3D Product Stage */}
                      <div className="catalog-card-stage">
                        <Link
                          to={`/products/${product.category}/${product.id}`}
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
                        >
                          <img
                            src={getProductImage(product)}
                            alt={product.name}
                            className="catalog-card-img"
                            loading="lazy"
                          />
                        </Link>
                      </div>

                      {/* Card Content */}
                      <div className="catalog-card-body">
                        <div>
                          <div style={{ marginBottom: 8 }}>
                            <span style={{ fontSize: '0.75rem', color: '#0A2362', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                              {product.categoryLabel}
                            </span>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0A2362', margin: '2px 0 0' }}>
                              <Link to={`/products/${product.category}/${product.id}`} style={{ color: '#0A2362', textDecoration: 'none' }}>
                                {product.name}
                              </Link>
                            </h3>
                          </div>

                          <p style={{ fontSize: '0.8125rem', color: '#64748B', lineHeight: 1.5, margin: '0 0 14px', minHeight: 38 }}>
                            {product.shortDesc}
                          </p>

                          <div style={{ background: '#F8FAFC', padding: '8px 12px', borderRadius: 6, marginBottom: 14, border: '1px solid #E2E8F0' }}>
                            <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#0A2362', textTransform: 'uppercase', letterSpacing: 0.8, display: 'block' }}>
                              Standard Compliance
                            </span>
                            <span style={{ fontSize: '0.8125rem', color: '#0A2362', fontWeight: 700 }}>
                              {product.standards}
                            </span>
                          </div>

                          {/* Key Features */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 18 }}>
                            {product.features.slice(0, 3).map((feat, idx) => (
                              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.78125rem', color: '#26344E', fontWeight: 600 }}>
                                <CheckCircle2 size={13} style={{ color: '#46C985', flexShrink: 0 }} />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Card Actions */}
                        <div style={{ borderTop: '1px solid #DFE6EF', paddingTop: 14, display: 'flex', gap: 10, marginTop: 'auto' }}>
                          <Link
                            to={`/products/${product.category}/${product.id}`}
                            className="btn btn-outline"
                            style={{ flex: 1, fontSize: '0.8125rem', padding: '9px 12px', justifyContent: 'center' }}
                          >
                            Specs &amp; TDS
                          </Link>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => onOpenEnquiry(product.name)}
                            style={{ fontSize: '0.8125rem', padding: '9px 16px' }}
                          >
                            Quote
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </main>

          </div>

        </div>
      </section>

      {/* Mobile Category Filter Drawer Modal (Strictly for mobile phones) */}
      {mobileFilterDrawerOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileFilterDrawerOpen(false)}>
          <div className="mobile-drawer-sheet" onClick={e => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0A2362', margin: 0 }}>
                Filter by Category
              </h3>
              <button
                type="button"
                onClick={() => setMobileFilterDrawerOpen(false)}
                style={{ background: 'none', border: 'none', color: '#0A2362', cursor: 'pointer', padding: 4 }}
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-drawer-body">
              <button
                type="button"
                onClick={() => handleSelectCategory('all')}
                className={`mobile-drawer-item ${selectedCat === 'all' ? 'active' : ''}`}
              >
                <span>ALL PRODUCTS</span>
                <span className="drawer-count">{PRODUCTS.length}</span>
              </button>

              {PRODUCT_CATEGORIES.map((cat, idx) => {
                const count = getProductCountForCategory(cat.id);
                const isActive = selectedCat === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleSelectCategory(cat.id)}
                    className={`mobile-drawer-item ${isActive ? 'active' : ''}`}
                  >
                    <span>{idx + 1}. {cat.label}</span>
                    <span className="drawer-count">{count}</span>
                  </button>
                );
              })}
            </div>

            <div className="mobile-drawer-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setMobileFilterDrawerOpen(false)}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
