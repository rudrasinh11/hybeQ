import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Search, Calculator, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenEnquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenEnquiry
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMegaOpen, setProductsMegaOpen] = useState(false);
  
  const productsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setProductsMegaOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close menus on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setProductsMegaOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handlers for Products Mega Menu hover with grace period
  const handleProductsEnter = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    setProductsMegaOpen(true);
  };

  const handleProductsLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setProductsMegaOpen(false);
    }, 200);
  };

  const closeAllMenus = () => {
    setProductsMegaOpen(false);
    setMobileMenuOpen(false);
  };

  // Products 4-Column Balanced Grid Grouping Hierarchy
  const megaMenuColumns = [
    {
      // Col 1: TILE & STONE FIXING | GROUTING SYSTEMS | DECORATIVE FLOOR & WALL
      sections: [
        {
          heading: 'TILE & STONE FIXING',
          link: '/products/tile-fixing',
          products: [
            'Hycera 505',
            'Hyintra 507',
            'Hyultra 515',
            'Hymax 525',
            'Hy Tile Grout',
            'Hy Stonegrip GP',
            'Hy Spot Bond (750)',
            'Hy Masterflex 70',
            'Hy Stonecol',
            'Hystarg Superlastic',
            'Hyfany Epoxy Tile Grout 3K'
          ]
        },
        {
          heading: 'GROUTING SYSTEMS',
          link: '/products/grouts',
          products: [
            'Hy Chemgrout 60',
            'Hy Chemgrout 70',
            'Hybeq Chemgrout Flow',
            'Hybeq 70 Flowgrout',
            'Hy Inject Ep 8'
          ]
        },
        {
          heading: 'DECORATIVE FLOOR & WALL',
          link: '/products/precast',
          products: [
            'Hybeq Hardtop 330',
            'Hybeq Hardtop M331',
            'Hybeq Floor Screed',
            'Hybeq Microcement Wall Finish',
            'Hybeq Microcement Floor Finish'
          ]
        }
      ]
    },
    {
      // Col 2: PRECAST ADDITIVES | SURFACE TREATMENT | DRYMIX MORTAR
      sections: [
        {
          heading: 'PRECAST ADDITIVES',
          link: '/products/precast',
          products: [
            'Hy Fastset AC Hybrid',
            'Hy Fastset AC',
            'Hy Fastset S+',
            'Hy Fastset P+',
            'Hy Fastset P1 Advance',
            'Hy Fastset P1 Pre-Cast',
            'Hybeq Rapsek',
            'Hybeq Pigment',
            'Hy Shine Lacquer 01',
            'Hy Shine Selex-V'
          ]
        },
        {
          heading: 'SURFACE TREATMENT',
          link: '/products/repairs',
          products: [
            'Hybeq Metacor',
            'Hybeq Meta Rust',
            'Hybeq Floorloc',
            'Hybeq Metacor Rust-Remover'
          ]
        },
        {
          heading: 'DRYMIX MORTAR',
          link: '/products/repairs',
          products: [
            'Co Superplast PB',
            'Hy Blockcrete',
            'Hy Stucco finish'
          ]
        }
      ]
    },
    {
      // Col 3: WATERPROOFING | BONDING AGENT | CURING COMPOUNDS | EPOXY SCREED
      sections: [
        {
          heading: 'WATERPROOFING',
          link: '/products/waterproofing',
          products: [
            'Hy Dampproof Ultra',
            'Hy Waterseal WH',
            'Hy Flexicoat 2C',
            'HyCoat 4131',
            'Hy Superconcrete C3',
            'Hybeq SBR Latex 44',
            'HyCoat 555',
            'Hy Rainseal F1',
            'Hybeq Blackcoat 200'
          ]
        },
        {
          heading: 'BONDING AGENT',
          link: '/products/repairs',
          products: [
            'Hybeq Hack Aid',
            'Hybeq Hyporfoc 700',
            'Hy Super bond AR'
          ]
        },
        {
          heading: 'CURING COMPOUNDS',
          link: '/products/precast',
          products: [
            'Hy Supercure W1',
            'Hy Supercure W4',
            'Hy Supercure AR'
          ]
        },
        {
          heading: 'EPOXY SCREED',
          link: '/products/precast',
          products: [
            'Hybeq Epoxy Screed Finish'
          ]
        }
      ]
    },
    {
      // Col 4: PLASTICIZERS RMC/PQC | STRUCTURAL REPAIR | SEALANTS | EPOXY FLOORING
      sections: [
        {
          heading: 'PLASTICIZERS RMC/PQC',
          link: '/products/precast',
          products: [
            'Hy Superconcrete 650',
            'Hy Superconcrete P-480',
            'Hy Superconcrete P-750',
            'Hy Superconcrete P-850',
            'Hy Superconcrete 700',
            'Hy Superconcrete Flowone'
          ]
        },
        {
          heading: 'STRUCTURAL REPAIR',
          link: '/products/repairs',
          products: [
            'Hy Microconcrete M40',
            'Hy Microconcrete M70',
            'Hybeq Pluggfast'
          ]
        },
        {
          heading: 'SEALANTS',
          link: '/products/grouts',
          products: [
            'Hybeq Jointseal MS',
            'Hybeq Jointseal PU',
            'Hybeq Jointseal PS'
          ]
        },
        {
          heading: 'EPOXY FLOORING',
          link: '/products/precast',
          products: [
            'Hybeq Epoxy Self Level 500'
          ]
        }
      ]
    }
  ];

  return (
    <header className="vura-site-header" id="vura-header" ref={headerRef}>
      <div className="vura-header-container">
        
        {/* Left: Brand Logo */}
        <div className="vura-header-left">
          <Link to="/" className="vura-logo-link" onClick={closeAllMenus} aria-label="HybeQ by Chemax Home">
            <img
              src="/images/hybeq-original-logo.png"
              alt="HybeQ by Chemax"
              className="vura-logo-img"
            />
          </Link>
        </div>

        {/* Center: Main Desktop Navigation (Exact order: Products, Sustainability, Downloads, Innovations, About Us, Blog, Contact) */}
        <nav className="vura-nav-center" aria-label="Main Navigation">
          
          {/* 1. PRODUCTS with Full-Width Mega Menu (Keeps Arrow) */}
          <div
            className="vura-nav-item-wrap vura-nav-products-wrap"
            onMouseEnter={handleProductsEnter}
            onMouseLeave={handleProductsLeave}
          >
            <NavLink
              to="/products"
              className={({ isActive }) => `vura-nav-link ${isActive || productsMegaOpen ? 'active' : ''}`}
              onClick={() => setProductsMegaOpen(!productsMegaOpen)}
              aria-expanded={productsMegaOpen}
              aria-haspopup="true"
            >
              <ArrowUpRight size={14} className="vura-nav-arrow" />
              <span>PRODUCTS</span>
            </NavLink>
          </div>

          {/* 2. SUSTAINABILITY (Arrow removed) */}
          <NavLink to="/sustainability" className={({ isActive }) => `vura-nav-link ${isActive ? 'active' : ''}`}>
            <span>SUSTAINABILITY</span>
          </NavLink>

          {/* 3. DOWNLOADS (Arrow removed) */}
          <NavLink to="/downloads" className={({ isActive }) => `vura-nav-link ${isActive ? 'active' : ''}`}>
            <span>DOWNLOADS</span>
          </NavLink>

          {/* 4. INNOVATIONS */}
          <NavLink to="/innovations" className={({ isActive }) => `vura-nav-link ${isActive ? 'active' : ''}`}>
            <span>INNOVATIONS</span>
          </NavLink>

          {/* 5. ABOUT US (Direct link without hover dropdown) */}
          <NavLink to="/about" className={({ isActive }) => `vura-nav-link ${isActive ? 'active' : ''}`}>
            <span>ABOUT US</span>
          </NavLink>

          {/* 6. BLOG */}
          <NavLink to="/blog" className={({ isActive }) => `vura-nav-link ${isActive ? 'active' : ''}`}>
            <span>BLOG</span>
          </NavLink>

          {/* 7. CONTACT (Arrow removed) */}
          <NavLink to="/contact" className={({ isActive }) => `vura-nav-link ${isActive ? 'active' : ''}`}>
            <span>CONTACT</span>
          </NavLink>
        </nav>

        {/* Right: Controls & Business Enquiry Button */}
        <div className="vura-header-right">
          {/* Calculator Icon (Replaced filter icon with calculator) */}
          <button
            type="button"
            className="vura-icon-btn"
            onClick={() => navigate('/calculator')}
            title="Calculator"
            aria-label="Calculator"
          >
            <Calculator size={19} />
          </button>

          {/* Search Icon */}
          <button
            type="button"
            className="vura-icon-btn"
            onClick={onOpenSearch}
            title="Search Catalog"
            aria-label="Open Search Modal"
          >
            <Search size={19} />
          </button>

          {/* Outlined Business Enquiry CTA Button */}
          <button
            type="button"
            className="vura-enquiry-btn"
            onClick={onOpenEnquiry}
            aria-label="Open Business Enquiry Form"
          >
            <ArrowUpRight size={16} strokeWidth={2.8} className="vura-enquiry-arrow" />
            <span>BUSINESS ENQUIRY</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="vura-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* ============================================================
          PRODUCTS FULL-WIDTH MEGA MENU (4-Column HYBEQ Architecture)
          Opens directly beneath header, full viewport width, #0C101A bg,
          subtle bottom border in #46C985
          ============================================================ */}
      {productsMegaOpen && (
        <div
          className="vura-products-mega-menu"
          onMouseEnter={handleProductsEnter}
          onMouseLeave={handleProductsLeave}
          role="region"
          aria-label="Products Catalog Mega Menu"
        >
          <div className="vura-mega-menu-inner">
            <div className="vura-mega-columns-grid-4col">
              
              {megaMenuColumns.map((col, colIdx) => (
                <div key={colIdx} className="vura-mega-column">
                  {col.sections.map((section, sIdx) => (
                    <div key={sIdx} className="vura-mega-section-group">
                      {/* Category Header: Uppercase, bold, 12px, tracking-widest, HYBEQ Green (#46C985) */}
                      <h4 className="vura-mega-cat-heading">
                        <Link
                          to={section.link}
                          onClick={closeAllMenus}
                          className="vura-mega-cat-link"
                        >
                          {section.heading}
                        </Link>
                      </h4>

                      {/* Product Links: 13px, regular, white/light gray (#E2E8F0), hover shift 4px right */}
                      <ul className="vura-mega-product-list">
                        {section.products.map((prod, pIdx) => (
                          <li key={pIdx} className="vura-mega-product-item">
                            <Link
                              to={section.link}
                              onClick={closeAllMenus}
                              className="vura-mega-product-link"
                            >
                              {prod}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}

            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          MOBILE DRAWER NAVIGATION WITH ACCORDION ("THREE LINES" MENU)
          ============================================================ */}
      {mobileMenuOpen && (
        <div className="vura-mobile-menu" role="dialog" aria-label="Mobile Navigation Menu">
          <div className="vura-mobile-links">
            
            {/* 1. Mobile Products (Direct link to open full products section on phone) */}
            <Link to="/products" onClick={closeAllMenus} className="vura-mobile-link">
              <div className="vura-mobile-link-left">
                <ArrowUpRight size={17} className="vura-mobile-nav-arrow" />
                <span>PRODUCTS</span>
              </div>
            </Link>

            {/* 2. Sustainability */}
            <Link to="/sustainability" onClick={closeAllMenus} className="vura-mobile-link">
              <div className="vura-mobile-link-left">
                <span>SUSTAINABILITY</span>
              </div>
            </Link>

            {/* 3. Downloads */}
            <Link to="/downloads" onClick={closeAllMenus} className="vura-mobile-link">
              <div className="vura-mobile-link-left">
                <span>DOWNLOADS</span>
              </div>
            </Link>

            {/* 4. Innovations */}
            <Link to="/innovations" onClick={closeAllMenus} className="vura-mobile-link">
              <div className="vura-mobile-link-left">
                <span>INNOVATIONS</span>
              </div>
            </Link>

            {/* 5. Mobile About Us Link (Direct link without dropdown options) */}
            <Link to="/about" onClick={closeAllMenus} className="vura-mobile-link">
              <div className="vura-mobile-link-left">
                <span>ABOUT US</span>
              </div>
            </Link>

            {/* 6. Blog */}
            <Link to="/blog" onClick={closeAllMenus} className="vura-mobile-link">
              <div className="vura-mobile-link-left">
                <span>BLOG & NEWS</span>
              </div>
            </Link>

            {/* 7. Contact */}
            <Link to="/contact" onClick={closeAllMenus} className="vura-mobile-link">
              <div className="vura-mobile-link-left">
                <span>CONTACT US</span>
              </div>
            </Link>

            {/* 8. Calculator */}
            <Link to="/calculator" onClick={closeAllMenus} className="vura-mobile-link">
              <div className="vura-mobile-link-left">
                <Calculator size={17} className="vura-mobile-nav-arrow" />
                <span>MATERIAL CALCULATOR</span>
              </div>
            </Link>

            {/* 9. Prominent Business Enquiry CTA */}
            <button
              type="button"
              className="vura-mobile-cta-btn"
              onClick={() => { closeAllMenus(); onOpenEnquiry(); }}
            >
              <ArrowUpRight size={18} strokeWidth={2.8} />
              <span>BUSINESS ENQUIRY</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
