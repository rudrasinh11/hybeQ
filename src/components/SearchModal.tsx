import React, { useState, useEffect, useRef } from 'react';
import { X, Search, Layers, FileText, ChevronRight, ArrowUpRight } from 'lucide-react';
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
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setMatchingProducts([]);
      setMatchingPosts([]);
    }
  }, [isOpen, onClose]);

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
    <div
      className="modal-overlay active"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hybeq-search-modal-title"
    >
      <div
        className="hybeq-search-modal-card"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Row: Title + Close Button */}
        <div className="hybeq-search-header">
          <div>
            <h3 id="hybeq-search-modal-title" className="hybeq-search-title">
              Search Technical Solutions
            </h3>
            <p className="hybeq-search-subtitle">
              Search products, standards or applications
            </p>
          </div>
          <button
            type="button"
            className="hybeq-search-close-btn"
            onClick={onClose}
            aria-label="Close search dialog"
          >
            <X size={19} />
          </button>
        </div>

        {/* Search Input Box */}
        <div className="hybeq-search-input-wrap">
          <Search size={20} className="hybeq-search-input-icon" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products, standards or applications..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="hybeq-search-input"
            aria-label="Search technical catalog"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="hybeq-search-clear-btn"
              aria-label="Clear search input"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Suggested Quick Tags */}
        {!query && (
          <div className="hybeq-search-suggestions">
            <span className="hybeq-search-suggestions-label">
              Popular Formulations &amp; Searches
            </span>
            <div className="hybeq-search-chips-wrap">
              {[
                'Hycera 505',
                'Hyintra 507',
                'Hy Dampproof Ultra',
                'Epoxy Grout',
                'IS 15477 Type 3',
                'Waterproofing Terrace',
                'SBR Latex'
              ].map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setQuery(tag)}
                  className="hybeq-search-chip"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Area */}
        {query && (
          <div className="hybeq-search-results-area">
            {matchingProducts.length === 0 && matchingPosts.length === 0 ? (
              <div className="hybeq-search-empty">
                <p className="hybeq-search-empty-title">No direct matches found for "{query}".</p>
                <p className="hybeq-search-empty-desc">
                  Try searching for terms like "tile", "waterproof", "terrace", or "latex".
                </p>
              </div>
            ) : (
              <div>
                {/* Product Matches */}
                {matchingProducts.length > 0 && (
                  <div className="hybeq-search-results-section">
                    <div className="hybeq-search-section-badge">
                      <Layers size={15} />
                      <span>Products ({matchingProducts.length})</span>
                    </div>
                    <div className="hybeq-search-results-list">
                      {matchingProducts.map(p => (
                        <div
                          key={p.id}
                          onClick={() => handleSelectProduct(p)}
                          className="hybeq-search-item"
                          tabIndex={0}
                          role="button"
                          onKeyDown={e => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleSelectProduct(p);
                            }
                          }}
                        >
                          <div>
                            <div className="hybeq-search-item-top">
                              <strong className="hybeq-search-item-name">{p.name}</strong>
                              {p.badge && (
                                <span className="hybeq-search-item-badge">{p.badge}</span>
                              )}
                            </div>
                            <p className="hybeq-search-item-desc">{p.categoryLabel}</p>
                          </div>
                          <ChevronRight size={18} className="hybeq-search-item-arrow" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Article Matches */}
                {matchingPosts.length > 0 && (
                  <div className="hybeq-search-results-section">
                    <div className="hybeq-search-section-badge">
                      <FileText size={15} />
                      <span>Technical Guides &amp; Articles ({matchingPosts.length})</span>
                    </div>
                    <div className="hybeq-search-results-list">
                      {matchingPosts.map(b => (
                        <div
                          key={b.id}
                          onClick={() => handleSelectPost(b)}
                          className="hybeq-search-item"
                          tabIndex={0}
                          role="button"
                          onKeyDown={e => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleSelectPost(b);
                            }
                          }}
                        >
                          <div>
                            <strong className="hybeq-search-item-name">{b.title}</strong>
                            <p className="hybeq-search-item-desc">
                              {b.category} &bull; {b.readTime}
                            </p>
                          </div>
                          <ArrowUpRight size={16} className="hybeq-search-item-arrow" />
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
