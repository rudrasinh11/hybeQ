import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, Calculator, ArrowUpRight, ChevronDown, Menu, X, Shield, Phone, Mail } from 'lucide-react';
import { PRODUCTS } from '../data/productsData';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenEnquiry: () => void;
  onOpenDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenEnquiry,
  onOpenDrawer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const navigate = useNavigate();

  const tileFixingProducts = PRODUCTS.filter(p => p.category === 'tile-fixing');
  const waterproofingProducts = PRODUCTS.filter(p => p.category === 'waterproofing');
  const repairProducts = PRODUCTS.filter(p => p.category === 'repairs');
  const groutProducts = PRODUCTS.filter(p => p.category === 'grouts');
  const precastProducts = PRODUCTS.filter(p => p.category === 'precast');

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="site-header" id="main-header">
      <div className="container">
        <div className="header-inner">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" onClick={closeMobile} aria-label="Hybeq Chemicals Home">
            <div style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #0A2362 0%, #071A45 100%)',
              border: '2px solid #46C985',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#46C985',
              boxShadow: '0 4px 12px rgba(10,35,98,0.2)'
            }}>
              <Shield size={24} strokeWidth={2.5} />
            </div>
            <div>
              <div className="brand-text">
                HYBEQ<span>.</span>
              </div>
              <span className="brand-tagline">Chemicals &amp; Polymers</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-links" aria-label="Main Navigation">
            <div className="nav-item">
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
            </div>

            {/* Company Dropdown */}
            <div className="nav-item">
              <span className="nav-link" style={{ cursor: 'pointer' }}>
                Company <ChevronDown size={14} />
              </span>
              <div className="dropdown-menu">
                <Link to="/about" className="dropdown-item">About Us &amp; Heritage</Link>
                <Link to="/infrastructure" className="dropdown-item">Manufacturing &amp; Plants</Link>
                <Link to="/sustainability" className="dropdown-item">Green Promise &amp; ESG</Link>
                <Link to="/innovations" className="dropdown-item">R&amp;D Lab &amp; Polymers</Link>
              </div>
            </div>

            {/* Products Mega Menu */}
            <div className="nav-item has-mega-menu">
              <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Products <ChevronDown size={14} />
              </NavLink>
              <div className="mega-menu-wrapper">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid #DFE6EF' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: '#0A2362', fontWeight: 800 }}>Complete Construction Chemical Solutions</h3>
                    <p style={{ fontSize: '0.8125rem', color: '#64748B' }}>Certified to Indian (IS 15477) &amp; European (EN 12004) Performance Standards</p>
                  </div>
                  <Link to="/products" className="btn btn-outline" style={{ padding: '6px 14px', fontSize: '0.75rem' }}>
                    View All Products <ArrowUpRight size={14} />
                  </Link>
                </div>
                <div className="mega-grid">
                  <div>
                    <div className="mega-col-title">Tile &amp; Stone Fixing</div>
                    <div className="mega-list">
                      {tileFixingProducts.map(p => (
                        <Link key={p.id} to={`/products/tile-fixing/${p.id}`}>{p.name}</Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="mega-col-title">Waterproofing</div>
                    <div className="mega-list">
                      {waterproofingProducts.map(p => (
                        <Link key={p.id} to={`/products/waterproofing/${p.id}`}>{p.name}</Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="mega-col-title">Repairs &amp; Bonding</div>
                    <div className="mega-list">
                      {repairProducts.map(p => (
                        <Link key={p.id} to={`/products/repairs/${p.id}`}>{p.name}</Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="mega-col-title">Epoxy Grouts</div>
                    <div className="mega-list">
                      {groutProducts.map(p => (
                        <Link key={p.id} to={`/products/grouts/${p.id}`}>{p.name}</Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="mega-col-title">Precast &amp; Infra</div>
                    <div className="mega-list">
                      {precastProducts.map(p => (
                        <Link key={p.id} to={`/products/precast/${p.id}`}>{p.name}</Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="nav-item">
              <NavLink to="/calculator" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Calculator
              </NavLink>
            </div>

            <div className="nav-item">
              <NavLink to="/downloads" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Downloads
              </NavLink>
            </div>

            <div className="nav-item">
              <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Inside Story
              </NavLink>
            </div>

            <div className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Contact
              </NavLink>
            </div>
          </nav>

          {/* Header Action Tools */}
          <div className="header-actions">
            {/* Calculator Shortcut */}
            <button
              type="button"
              className="header-icon-btn"
              onClick={() => navigate('/calculator')}
              title="Material Quantity Estimator"
              aria-label="Coverage Calculator"
            >
              <Calculator size={20} />
              <span className="badge-pill">CALC</span>
            </button>

            {/* Search Trigger */}
            <button
              type="button"
              className="header-icon-btn"
              onClick={onOpenSearch}
              title="Search Products &amp; TDS"
              aria-label="Search Catalog"
            >
              <Search size={20} />
            </button>

            {/* Business Enquiry Button with 60 deg rotating arrow */}
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOpenEnquiry}
              aria-label="Open Business Enquiry Modal"
            >
              BUSINESS ENQUIRY
              <span className="rot60">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </span>
            </button>

            {/* Offcanvas Drawer Toggle */}
            <button
              type="button"
              className="side-toggle-btn"
              onClick={onOpenDrawer}
              aria-label="Open Side Information Drawer"
              title="Quick Contact &amp; Facilities"
            >
              <span />
              <span />
              <span />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="header-icon-btn"
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: '80px 0 0 0',
          background: '#FFFFFF',
          zIndex: 1900,
          overflowY: 'auto',
          padding: '24px 20px 40px',
          borderTop: '1px solid #DFE6EF'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link to="/" onClick={closeMobile} style={{ padding: '12px 0', fontSize: '1.05rem', fontWeight: 700, color: '#0A2362', borderBottom: '1px solid #F5F7FB' }}>
              Home
            </Link>

            {/* Mobile Company Accordion */}
            <div>
              <div
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', fontSize: '1.05rem', fontWeight: 700, color: '#0A2362', borderBottom: '1px solid #F5F7FB', cursor: 'pointer' }}
              >
                <span>Company</span>
                <ChevronDown size={18} style={{ transform: mobileCompanyOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </div>
              {mobileCompanyOpen && (
                <div style={{ paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8, marginBottom: 8 }}>
                  <Link to="/about" onClick={closeMobile} style={{ padding: '6px 0', color: '#64748B', fontWeight: 600 }}>About Us &amp; Heritage</Link>
                  <Link to="/infrastructure" onClick={closeMobile} style={{ padding: '6px 0', color: '#64748B', fontWeight: 600 }}>Manufacturing Plants</Link>
                  <Link to="/sustainability" onClick={closeMobile} style={{ padding: '6px 0', color: '#64748B', fontWeight: 600 }}>Green Promise</Link>
                  <Link to="/innovations" onClick={closeMobile} style={{ padding: '6px 0', color: '#64748B', fontWeight: 600 }}>R&amp;D Lab &amp; Testing</Link>
                </div>
              )}
            </div>

            {/* Mobile Products Accordion */}
            <div>
              <div
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', fontSize: '1.05rem', fontWeight: 700, color: '#0A2362', borderBottom: '1px solid #F5F7FB', cursor: 'pointer' }}
              >
                <span>Products Catalog</span>
                <ChevronDown size={18} style={{ transform: mobileProductsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </div>
              {mobileProductsOpen && (
                <div style={{ paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8, marginBottom: 8 }}>
                  <Link to="/products" onClick={closeMobile} style={{ padding: '6px 0', color: '#46C985', fontWeight: 700 }}>All Products (12+)</Link>
                  <Link to="/products/tile-fixing" onClick={closeMobile} style={{ padding: '6px 0', color: '#64748B', fontWeight: 600 }}>Tile &amp; Stone Fixing</Link>
                  <Link to="/products/waterproofing" onClick={closeMobile} style={{ padding: '6px 0', color: '#64748B', fontWeight: 600 }}>Waterproofing Systems</Link>
                  <Link to="/products/repairs" onClick={closeMobile} style={{ padding: '6px 0', color: '#64748B', fontWeight: 600 }}>Repair Mortars &amp; Bonding</Link>
                  <Link to="/products/grouts" onClick={closeMobile} style={{ padding: '6px 0', color: '#64748B', fontWeight: 600 }}>Epoxy &amp; Cement Grouts</Link>
                  <Link to="/products/precast" onClick={closeMobile} style={{ padding: '6px 0', color: '#64748B', fontWeight: 600 }}>Precast &amp; Infra Admixtures</Link>
                </div>
              )}
            </div>

            <Link to="/calculator" onClick={closeMobile} style={{ padding: '12px 0', fontSize: '1.05rem', fontWeight: 700, color: '#0A2362', borderBottom: '1px solid #F5F7FB' }}>
              Material Calculator
            </Link>
            <Link to="/downloads" onClick={closeMobile} style={{ padding: '12px 0', fontSize: '1.05rem', fontWeight: 700, color: '#0A2362', borderBottom: '1px solid #F5F7FB' }}>
              Downloads &amp; TDS
            </Link>
            <Link to="/blog" onClick={closeMobile} style={{ padding: '12px 0', fontSize: '1.05rem', fontWeight: 700, color: '#0A2362', borderBottom: '1px solid #F5F7FB' }}>
              Inside Story (Blog)
            </Link>
            <Link to="/contact" onClick={closeMobile} style={{ padding: '12px 0', fontSize: '1.05rem', fontWeight: 700, color: '#0A2362', borderBottom: '1px solid #F5F7FB' }}>
              Contact &amp; Hubs
            </Link>

            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => { closeMobile(); onOpenEnquiry(); }}
              >
                BUSINESS ENQUIRY
                <ArrowUpRight size={18} />
              </button>
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <a href="tel:+919825112345" className="btn btn-outline" style={{ flex: 1, padding: '10px 8px', fontSize: '0.8rem' }}>
                  <Phone size={14} /> Call
                </a>
                <a href="mailto:info@hybeq.com" className="btn btn-outline" style={{ flex: 1, padding: '10px 8px', fontSize: '0.8rem' }}>
                  <Mail size={14} /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
