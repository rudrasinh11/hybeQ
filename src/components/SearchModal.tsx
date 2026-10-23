import React, { useState, useEffect, useRef } from 'react';
import { X, Search, ArrowRight, Layers, FileText, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/productsData';
import type { Product } from '../data/productsData';
import { BLOG_POSTS } from '../data/blogData';
import type { BlogPost } from '../data/blogData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [matchingProducts, setMatchingProducts] = useState<Product[]>([]);
  const [matchingPosts, setMatchingPosts] = useState<BlogPost[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
      setMatchingProducts([]);
      setMatchingPosts([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) {
      setMatchingProducts([]);
      setMatchingPosts([]);
      return;
    }

    const filteredProds = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      p.features.some(f => f.toLowerCase().includes(q)) ||
      p.applications.some(a => a.toLowerCase().includes(q))
    );

    const filteredBlogs = BLOG_POSTS.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.summary.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q)
    );

    setMatchingProducts(filteredProds);
    setMatchingPosts(filteredBlogs);
  }, [query]);

  if (!isOpen) return null;

  const handleSelectProduct = (p: Product) => {
    onClose();
    navigate(`/products/${p.category}/${p.id}`);
  };

  const handleSelectPost = (b: BlogPost) => {
    onClose();
    navigate(`/blog/${b.slug}`);
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: 720 }} onClick={e => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close Search">
          <X size={20} />
        </button>

        <div style={{ marginBottom: 24 }}>
          <span className="section-tag" style={{ marginBottom: 8 }}>Catalog Search</span>
          <h3 style={{ fontSize: '1.5rem', color: '#0A2362', fontWeight: 800 }}>Search Hybeq Technical Solutions</h3>
        </div>

        {/* Input Box */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          background: '#F5F7FB',
          border: '2px solid #DFE6EF',
          borderRadius: 12,
          padding: '4px 16px',
          marginBottom: 24,
          transition: 'border-color 0.2s'
        }}>
          <Search size={22} style={{ color: '#0A2362', marginRight: 12 }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search by product name, standard (e.g. Type 2, S2), or application..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              width: '100%',
              border: 'none',
              background: 'transparent',
              outline: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              color: '#0A2362',
              padding: '12px 0'
            }}
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} style={{ color: '#64748B' }}>
              <X size={18} />
            </button>
          )}
        </div>

        {/* Suggested Quick Tags */}
        {!query && (
          <div>
            <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#64748B', display: 'block', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>
              Popular Formulations &amp; Searches
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Hycera 505', 'Hyintra 507', 'Hy Dampproof Ultra', 'Epoxy Grout', 'IS 15477 Type 3', 'Waterproofing Terrace', 'SBR Latex'].map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setQuery(tag)}
                  style={{
                    background: '#F5F7FB',
                    border: '1px solid #DFE6EF',
                    padding: '6px 14px',
                    borderRadius: 20,
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: '#0A2362',
                    cursor: 'pointer'
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {query && (
          <div style={{ maxHeight: 380, overflowY: 'auto' }}>
            {matchingProducts.length === 0 && matchingPosts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '36px 0', color: '#64748B' }}>
                <p style={{ fontWeight: 600, fontSize: '1rem' }}>No direct matches found for "{query}".</p>
                <p style={{ fontSize: '0.875rem', marginTop: 6 }}>Try searching for generic terms like "tile", "waterproof", "terrace", or "latex".</p>
              </div>
            ) : (
              <div>
                {/* Product Matches */}
                {matchingProducts.length > 0 && (
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.8125rem', fontWeight: 800, color: '#46C985', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10 }}>
                      <Layers size={16} /> Products ({matchingProducts.length})
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {matchingProducts.map(p => (
                        <div
                          key={p.id}
                          onClick={() => handleSelectProduct(p)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px 16px',
                            background: '#F5F7FB',
                            borderRadius: 8,
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                          }}
                        >
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                              <strong style={{ color: '#0A2362', fontSize: '0.9375rem' }}>{p.name}</strong>
                              <span style={{ fontSize: '0.75rem', background: '#EAF8F0', color: '#46C985', fontWeight: 700, padding: '2px 8px', borderRadius: 4 }}>
                                {p.badge}
                              </span>
                            </div>
                            <p style={{ fontSize: '0.8125rem', color: '#64748B', margin: '4px 0 0' }}>{p.categoryLabel}</p>
                          </div>
                          <ChevronRight size={18} style={{ color: '#0A2362' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Article Matches */}
                {matchingPosts.length > 0 && (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.8125rem', fontWeight: 800, color: '#0A2362', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10 }}>
                      <FileText size={16} /> Technical Guides &amp; Articles ({matchingPosts.length})
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {matchingPosts.map(b => (
                        <div
                          key={b.id}
                          onClick={() => handleSelectPost(b)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px 16px',
                            background: '#FFFFFF',
                            border: '1px solid #DFE6EF',
                            borderRadius: 8,
                            cursor: 'pointer'
                          }}
                        >
                          <div>
                            <strong style={{ color: '#0A2362', fontSize: '0.875rem' }}>{b.title}</strong>
                            <p style={{ fontSize: '0.75rem', color: '#64748B', margin: '2px 0 0' }}>{b.category} &bull; {b.readTime}</p>
                          </div>
                          <ArrowRight size={16} style={{ color: '#46C985' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
