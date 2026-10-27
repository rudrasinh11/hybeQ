import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Search, 
  RotateCcw, 
  ArrowUpRight, 
  MessageSquare, 
  SlidersHorizontal,
  ChevronRight,
  Filter
} from 'lucide-react';
import { PRODUCTS, getProductImage, type Product } from '../data/productsData';

interface ProductsPageProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenEnquiry }) => {
  const { category } = useParams<{ category?: string }>();

  const categories = [
    { id: 'all', label: 'All Formulations' },
    { id: 'tile-stone-fixing', label: 'TILE & STONE FIXING' },
    { id: 'precast-additives', label: 'PRECAST ADDITIVES' },
    { id: 'waterproofing', label: 'WATERPROOFING' },
    { id: 'plasticizers-rmc-pqc', label: 'PLASTICIZERS RMC/PQC' },
    { id: 'grouting-systems', label: 'GROUTING SYSTEMS' },
    { id: 'surface-treatment', label: 'SURFACE TREATMENT' },
    { id: 'bonding-agent', label: 'BONDING AGENT' },
    { id: 'structural-repair', label: 'STRUCTURAL REPAIR' },
    { id: 'sealants', label: 'SEALANTS' },
    { id: 'decorative-floor-wall', label: 'DECORATIVE FLOOR & WALL' },
    { id: 'drymix-mortar', label: 'DRYMIX MORTAR' },
    { id: 'curing-compounds', label: 'CURING COMPOUNDS' },
    { id: 'epoxy-flooring', label: 'EPOXY FLOORING' },
    { id: 'epoxy-screed', label: 'EPOXY SCREED' }
  ];

  // Helper to map products to requested categories
  const matchCategory = (prod: Product, catId: string): boolean => {
    if (catId === 'all') return true;
    switch (catId) {
      case 'tile-stone-fixing':
      case 'tile-fixing':
        return prod.category === 'tile-fixing';
      case 'precast-additives':
        return prod.id === 'hy-fastset-ac' || prod.id === 'hy-hardtop-330' || prod.category === 'precast';
      case 'waterproofing':
        return prod.category === 'waterproofing';
      case 'plasticizers-rmc-pqc':
        return prod.id === 'hy-fastset-ac' || prod.id === 'hybeq-sbr-latex' || prod.category === 'precast';
      case 'grouting-systems':
      case 'grouts':
        return prod.id === 'hy-chemgrout-60' || prod.id === 'hy-epoxy-grout' || prod.id === 'hybeq-jointseal-pu' || prod.category === 'grouts';
      case 'surface-treatment':
        return prod.id === 'hybeq-sbr-latex' || prod.id === 'hy-hardtop-330' || prod.id === 'hy-waterseal-wh';
      case 'bonding-agent':
        return prod.id === 'hybeq-sbr-latex' || prod.id === 'hymax-525' || prod.id === 'hyintra-507';
      case 'structural-repair':
      case 'repairs':
        return prod.category === 'repairs';
      case 'sealants':
        return prod.id === 'hybeq-jointseal-pu' || prod.id === 'hy-epoxy-grout';
      case 'decorative-floor-wall':
        return prod.id === 'hyultra-515' || prod.id === 'hy-flexicoat-2c' || prod.id === 'hy-epoxy-grout' || prod.id === 'hy-hardtop-330';
      case 'drymix-mortar':
        return prod.id === 'hy-blockcrete-mortar' || prod.id === 'hy-microconcrete-m40' || prod.id === 'hycera-505';
      case 'curing-compounds':
        return prod.id === 'hybeq-sbr-latex' || prod.id === 'hy-fastset-ac';
      case 'epoxy-flooring':
        return prod.id === 'hy-hardtop-330' || prod.id === 'hy-epoxy-grout';
      case 'epoxy-screed':
        return prod.id === 'hy-hardtop-330' || prod.id === 'hy-chemgrout-60';
      default:
        return prod.category === catId;
    }
  };

  const [selectedCat, setSelectedCat] = useState<string>(() => {
    if (category) {
      const found = categories.find(c => c.id === category || (c.id === 'tile-stone-fixing' && category === 'tile-fixing') || (c.id === 'structural-repair' && category === 'repairs') || (c.id === 'grouting-systems' && category === 'grouts'));
      return found ? found.id : 'all';
    }
    return 'all';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'name-asc' | 'name-desc'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    if (category) {
      const found = categories.find(c => c.id === category || (c.id === 'tile-stone-fixing' && category === 'tile-fixing') || (c.id === 'structural-repair' && category === 'repairs') || (c.id === 'grouting-systems' && category === 'grouts'));
      if (found) setSelectedCat(found.id);
    }
  }, [category]);

  // Calculate live count per category
  const categoryCounts = useMemo(() => {
    const counts: { [key: string]: number } = { all: PRODUCTS.length };
    categories.forEach(c => {
      if (c.id !== 'all') {
        counts[c.id] = PRODUCTS.filter(p => matchCategory(p, c.id)).length;
      }
    });
    return counts;
  }, []);

  // Filter & Search Logic
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter((p: Product) => {
      const matchesCat = matchCategory(p, selectedCat);
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

    // Sorting
    if (sortBy === 'name-asc') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [selectedCat, searchQuery, sortBy]);

  // Client-side filtering without changing URL route
  const handleCategoryChange = (catId: string) => {
    setSelectedCat(catId);
    setMobileFilterOpen(false);
  };

  const handleResetFilters = () => {
    setSelectedCat('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  const activeCategoryObj = categories.find(c => c.id === selectedCat) || categories[0];

  return (
    <div className="hybeq-catalog-page">
      {/* Compact Page Header with Breadcrumbs */}
      <section className="hybeq-catalog-hero">
        <div className="hybeq-catalog-container">
          <nav className="hybeq-breadcrumbs" aria-label="Breadcrumb navigation">
            <Link to="/">Home</Link>
            <ChevronRight size={13} className="hybeq-breadcrumb-arrow" />
            <Link to="/products" className={selectedCat === 'all' ? 'active' : ''}>Products</Link>
            {selectedCat !== 'all' && (
              <>
                <ChevronRight size={13} className="hybeq-breadcrumb-arrow" />
                <span className="current">{activeCategoryObj.label}</span>
              </>
            )}
          </nav>

          <h1 className="hybeq-catalog-title">
            {selectedCat === 'all' ? 'Product Catalog' : activeCategoryObj.label}
          </h1>
          <p className="hybeq-catalog-intro">
            Manufactured to IS 15477:2019 and EN 12004 specifications with European redispersible polymers. Engineered for extreme shear bond, vertical slip resistance, and Indian climate durability.
          </p>
        </div>
      </section>

      {/* Main Catalog Body with Sidebar & Grid */}
      <section className="hybeq-catalog-main">
        <div className="hybeq-catalog-container">
          
          {/* Top Filter Bar: Search, Mobile Toggle & Sorting */}
          <div className="hybeq-catalog-toolbar">
            {/* Search Input */}
            <div className="hybeq-catalog-search">
              <Search size={18} className="hybeq-search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search formulations, standards (IS 15477, Type 2)..."
                aria-label="Search formulations"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="hybeq-search-clear"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              type="button"
              className="hybeq-mobile-filter-btn"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              aria-label="Toggle category filter menu"
            >
              <SlidersHorizontal size={16} />
              <span>Categories ({activeCategoryObj.label})</span>
            </button>

            {/* Right Controls: Count & Sort */}
            <div className="hybeq-catalog-controls">
              <span className="hybeq-catalog-count">
                Showing <strong>{filteredProducts.length}</strong> of {PRODUCTS.length} products
              </span>

              <div className="hybeq-catalog-sort">
                <label htmlFor="catalog-sort-select">Sort by:</label>
                <select
                  id="catalog-sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                >
                  <option value="featured">Featured Standards</option>
                  <option value="name-asc">Alphabetical (A–Z)</option>
                  <option value="name-desc">Alphabetical (Z–A)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Catalog Layout: Desktop Sidebar + Product Grid */}
          <div className="hybeq-catalog-layout">
            
            {/* Desktop Left Sidebar: Categories */}
            <aside className={`hybeq-catalog-sidebar ${mobileFilterOpen ? 'mobile-open' : ''}`}>
              <div className="hybeq-sidebar-header">
                <div className="hybeq-sidebar-title">
                  <Filter size={16} />
                  <span>Product Categories</span>
                </div>
                {(selectedCat !== 'all' || searchQuery) && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="hybeq-sidebar-reset"
                    title="Reset all filters"
                  >
                    <RotateCcw size={13} />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              <div className="hybeq-category-list" role="list">
                {categories.map((cat) => {
                  const isActive = selectedCat === cat.id;
                  const count = categoryCounts[cat.id] || 0;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`hybeq-category-btn ${isActive ? 'active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="hybeq-cat-name">{cat.label}</span>
                      <span className="hybeq-cat-count">{count}</span>
                    </button>
                  );
                })}
              </div>

              {/* Technical Assistance Sidebar Card */}
              <div className="hybeq-sidebar-support-card">
                <h4>Need Custom Specifications?</h4>
                <p>
                  Our senior chemical engineers provide substrate pull-off testing and custom BOQ estimations for project tenders.
                </p>
                <button
                  type="button"
                  onClick={() => onOpenEnquiry()}
                  className="hybeq-btn hybeq-btn-secondary hybeq-btn-full"
                >
                  <span>Request Project Audit</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </aside>

            {/* Right Product Grid */}
            <div className="hybeq-catalog-content">
              {filteredProducts.length === 0 ? (
                <div className="hybeq-catalog-empty">
                  <h3>No matching formulations found</h3>
                  <p>
                    No products matched your search "{searchQuery}" in category "{activeCategoryObj.label}".
                  </p>
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="hybeq-btn hybeq-btn-primary"
                  >
                    <RotateCcw size={16} />
                    <span>Reset All Filters</span>
                  </button>
                </div>
              ) : (
                <div className="hybeq-catalog-grid">
                  {filteredProducts.map((prod) => {
                    const imgSrc = getProductImage(prod);
                    const detailUrl = `/products/${prod.category}/${prod.id}`;

                    return (
                      <article key={prod.id} className="hybeq-catalog-card">
                        {/* Packaging only (Green badge removed as requested) */}
                        <div className="hybeq-card-header-bar">
                          <span className="hybeq-card-pack">{prod.packaging}</span>
                        </div>

                        {/* Product Image Stage */}
                        <Link to={detailUrl} className="hybeq-card-img-link" title={`View ${prod.name}`}>
                          <img
                            src={imgSrc}
                            alt={`${prod.name} packaging`}
                            className="hybeq-card-img"
                            loading="lazy"
                          />
                        </Link>

                        {/* Details */}
                        <div className="hybeq-card-info">
                          <span className="hybeq-card-cat-label">{prod.categoryLabel}</span>
                          <h3 className="hybeq-card-title">
                            <Link to={detailUrl}>{prod.name}</Link>
                          </h3>
                          <p className="hybeq-card-desc">{prod.shortDesc}</p>

                          {/* Technical Highlights */}
                          {prod.specs && Object.keys(prod.specs).length > 0 && (
                            <div className="hybeq-card-specs-box">
                              {Object.entries(prod.specs).slice(0, 2).map(([k, v], sIdx) => (
                                <div key={sIdx} className="hybeq-spec-line">
                                  <span className="k">{k}:</span>
                                  <span className="v">{v}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="hybeq-card-actions">
                          <Link to={detailUrl} className="hybeq-card-view-btn">
                            <span>View Details</span>
                            <ArrowUpRight size={14} />
                          </Link>

                          <button
                            type="button"
                            onClick={() => onOpenEnquiry(prod.name)}
                            className="hybeq-card-enquire-btn"
                            title={`Request TDS or Quote for ${prod.name}`}
                            aria-label={`Enquire about ${prod.name}`}
                          >
                            <MessageSquare size={14} />
                            <span>Enquire</span>
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
