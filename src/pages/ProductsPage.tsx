import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layers, Droplet, Hammer, Sparkles, Building, Search, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, getProductImage } from '../data/productsData';

interface ProductsPageProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenEnquiry }) => {
  const { category } = useParams<{ category?: string }>();
  const [selectedCat, setSelectedCat] = useState<string>(category || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (category) {
      setSelectedCat(category);
    }
  }, [category]);

  const categories = [
    { id: 'all', label: 'All Products (12+)', icon: Layers },
    { id: 'tile-fixing', label: 'Tile & Stone Fixing', icon: Layers },
    { id: 'waterproofing', label: 'Waterproofing Systems', icon: Droplet },
    { id: 'repairs', label: 'Repair Mortars & Bonding', icon: Hammer },
    { id: 'grouts', label: 'Epoxy & Cement Grouts', icon: Sparkles },
    { id: 'precast', label: 'Precast & Infra Admixtures', icon: Building }
  ];

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

  return (
    <div className="products-page">
      {/* Header */}
      <section style={{ background: '#0A2362', color: '#FFFFFF', padding: '70px 0 50px' }}>
        <div className="container">
          <span className="section-tag on-dark" style={{ marginBottom: 12 }}>Engineered Chemical Formulations</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', color: '#FFFFFF', fontWeight: 900, marginBottom: 16 }}>
            High-Performance Product Portfolio
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: 740, lineHeight: 1.6 }}>
            Formulated to exceed IS 15477:2019 and EN 12004 specifications with European redispersible polymer technology, offering high shear tenacity, flexibility, and climatic resistance.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section style={{ background: '#F5F7FB', padding: '32px 0', borderBottom: '1px solid #DFE6EF' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Search Input */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: '#FFFFFF',
              border: '1.5px solid #DFE6EF',
              borderRadius: 12,
              padding: '6px 16px',
              maxWidth: 540
            }}>
              <Search size={20} style={{ color: '#0A2362', marginRight: 12 }} />
              <input
                type="text"
                placeholder="Search formulations, IS standards (e.g. Type 2, S2), or keywords..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  border: 'none',
                  outline: 'none',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: '#0A2362',
                  padding: '8px 0'
                }}
              />
            </div>

            {/* Category Buttons */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {categories.map(cat => {
                const IconComponent = cat.icon;
                const isActive = selectedCat === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCat(cat.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '10px 18px',
                      borderRadius: 30,
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      background: isActive ? '#0A2362' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : '#0A2362',
                      border: '1.5px solid',
                      borderColor: isActive ? '#0A2362' : '#DFE6EF',
                      boxShadow: isActive ? '0 4px 14px rgba(10,35,98,0.2)' : 'none'
                    }}
                  >
                    <IconComponent size={16} style={{ color: isActive ? '#46C985' : '#0A2362' }} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ padding: '70px 0 90px', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.875rem', color: '#64748B', fontWeight: 600 }}>
              Showing <strong>{filteredProducts.length}</strong> verified formulations
            </span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{ fontSize: '0.8125rem', color: '#0A2362', fontWeight: 700 }}
              >
                Clear Search Filter
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', background: '#F5F7FB', borderRadius: 16 }}>
              <h3 style={{ fontSize: '1.3rem', color: '#0A2362', fontWeight: 800 }}>No matching formulations found</h3>
              <p style={{ color: '#64748B', marginTop: 8 }}>Try adjusting your search query or selecting "All Products".</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 28 }}>
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 16,
                    border: '1.5px solid #DFE6EF',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = '#46C985';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(10,35,98,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.borderColor = '#DFE6EF';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Product 3D Pack Render Stage */}
                  <div style={{
                    height: 200,
                    background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
                    padding: 16,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid #DFE6EF',
                    overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: 12, left: 12, zIndex: 2 }}>
                      <span style={{ fontSize: '0.6875rem', fontWeight: 800, background: '#0A2362', color: '#46C985', padding: '4px 10px', borderRadius: 20, textTransform: 'uppercase' }}>
                        {product.badge}
                      </span>
                    </div>
                    <div style={{ position: 'absolute', top: 12, right: 12, zIndex: 2 }}>
                      <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, background: 'rgba(255,255,255,0.9)', padding: '2px 8px', borderRadius: 6, border: '1px solid #DFE6EF' }}>
                        {product.packaging}
                      </span>
                    </div>
                    <img
                      src={getProductImage(product)}
                      alt={product.name}
                      style={{
                        height: 160,
                        width: 'auto',
                        maxWidth: '85%',
                        objectFit: 'contain',
                        transition: 'transform 0.4s ease',
                        filter: 'drop-shadow(0 10px 18px rgba(10,35,98,0.12))'
                      }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>

                  {/* Product Title Bar */}
                  <div style={{ padding: '16px 24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0A2362', margin: 0 }}>
                        {product.name}
                      </h3>
                      <span style={{ fontSize: '0.75rem', color: '#46C985', fontWeight: 700 }}>
                        {product.categoryLabel}
                      </span>
                    </div>
                    <div style={{
                      width: 38,
                      height: 38,
                      borderRadius: 8,
                      background: '#F5F7FB',
                      border: '1px solid #DFE6EF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0A2362'
                    }}>
                      {product.category === 'waterproofing' ? <Droplet size={20} /> :
                       product.category === 'repairs' ? <Hammer size={20} /> :
                       product.category === 'grouts' ? <Sparkles size={20} /> :
                       <Layers size={20} />}
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div>
                      <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, marginBottom: 16 }}>
                        {product.shortDesc}
                      </p>

                      <div style={{ background: '#F5F7FB', padding: '12px 14px', borderRadius: 8, marginBottom: 16 }}>
                        <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#0A2362', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 4 }}>
                          Standard Compliance
                        </span>
                        <span style={{ fontSize: '0.8125rem', color: '#46C985', fontWeight: 700 }}>
                          {product.standards}
                        </span>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                        {product.features.map((feat, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.8125rem', color: '#26344E', fontWeight: 600 }}>
                            <CheckCircle2 size={14} style={{ color: '#46C985', flexShrink: 0 }} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid #DFE6EF', paddingTop: 16, display: 'flex', gap: 10 }}>
                      <Link
                        to={`/products/${product.category}/${product.id}`}
                        className="btn btn-outline"
                        style={{ flex: 1, fontSize: '0.8125rem', padding: '10px 12px', justifyContent: 'center' }}
                      >
                        Specs &amp; TDS
                      </Link>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => onOpenEnquiry(product.name)}
                        style={{ fontSize: '0.8125rem', padding: '10px 16px' }}
                      >
                        Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
