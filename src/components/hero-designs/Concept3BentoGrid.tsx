import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Shield, Calculator } from 'lucide-react';

interface Props {
  onOpenEnquiry?: (productName?: string) => void;
}

export const Concept3BentoGrid: React.FC<Props> = ({ onOpenEnquiry }) => {
  const [selectedSurface, setSelectedSurface] = useState<string>('terrace');

  const surfaceRecommendations: Record<string, { product: string; spec: string; link: string; thumb: string }> = {
    terrace: {
      product: 'HY-DAMPPROOF ULTRA 2K',
      spec: 'Seamless Elastomeric Polyurethane Hybrid',
      link: '/products/waterproofing',
      thumb: '/images/hybeq_products/hy-dampproof-ultra.png'
    },
    tiles: {
      product: 'HYMAX-525 ADHESIVE',
      spec: 'C2TE S1 High-Polymer Polymer Modified',
      link: '/products/tile-adhesives',
      thumb: '/images/hybeq_products/hymax-525.png'
    },
    flooring: {
      product: 'HY-SPOT BOND EP-510',
      spec: '100% Solids Heavy Duty Industrial Epoxy',
      link: '/products/epoxy-flooring',
      thumb: '/images/hybeq_products/hy-spot-bond-ep510.png'
    },
    swimming: {
      product: 'HY-MASTERFLEX PU',
      spec: 'Chemical & Chlorine Resistant Waterproof Barrier',
      link: '/products/waterproofing',
      thumb: '/images/hybeq_products/hy-masterflex-pu.png'
    }
  };

  const currentRec = surfaceRecommendations[selectedSurface];

  return (
    <section className="c3-hero-wrapper" aria-label="Hero Concept 3 - Bento Grid Hub">
      <div className="c3-bento-container">
        
        {/* CARD A: Large Hero Spotlight (Left 60%, full height) */}
        <div className="c3-card c3-card-main">
          <div className="c3-main-text">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '999px', width: 'fit-content', border: '1px solid rgba(255,255,255,0.15)' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00E676' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Concept 3 • Bento-Grid Hub
              </span>
            </div>

            <h1 className="c3-main-title">
              Formulated for Harsh Sites. <br />
              <span style={{ color: '#00E676' }}>Built for Generations.</span>
            </h1>

            <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
              Engineered construction chemical formulations with European polymer technology. Delivering certified structural durability across 20+ Indian states.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
              <Link to="/products" className="c1-btn-primary" style={{ background: '#00C853', color: '#071942' }}>
                Explore Formulations <ArrowRight size={18} />
              </Link>
              <button 
                onClick={() => onOpenEnquiry && onOpenEnquiry('Hybeq Range Consultation')}
                className="c1-btn-secondary"
                style={{ background: 'transparent', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}
              >
                Book Technical Site Visit
              </button>
            </div>
          </div>

          <div className="c3-main-product-stage">
            <img 
              src="/images/hybeq_products/hy-dampproof-ultra.png" 
              alt="Hybeq Spotlight Formulation" 
              className="c3-main-img" 
            />
          </div>
        </div>

        {/* CARD B: Quick Surface Selector Tool (Top Right) */}
        <div className="c3-card c3-card-tool">
          <div>
            <div className="c3-tool-title">
              <Wrench size={20} color="#00A844" />
              <span>Interactive System Recommender</span>
            </div>
            <p style={{ color: '#64748B', fontSize: '0.86rem', marginTop: '6px', marginBottom: '14px' }}>
              Select your application surface to get the laboratory-recommended formulation instantly:
            </p>

            <div className="c3-surface-chips">
              <button 
                className={`c3-chip ${selectedSurface === 'terrace' ? 'active' : ''}`}
                onClick={() => setSelectedSurface('terrace')}
              >
                Terrace & Roof
              </button>
              <button 
                className={`c3-chip ${selectedSurface === 'tiles' ? 'active' : ''}`}
                onClick={() => setSelectedSurface('tiles')}
              >
                Large Slabs / Tiles
              </button>
              <button 
                className={`c3-chip ${selectedSurface === 'flooring' ? 'active' : ''}`}
                onClick={() => setSelectedSurface('flooring')}
              >
                Industrial Flooring
              </button>
              <button 
                className={`c3-chip ${selectedSurface === 'swimming' ? 'active' : ''}`}
                onClick={() => setSelectedSurface('swimming')}
              >
                Water Tank & Pool
              </button>
            </div>
          </div>

          <div className="c3-recommendation-box">
            <img src={currentRec.thumb} alt={currentRec.product} style={{ width: 48, height: 48, objectFit: 'contain' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#00A844', textTransform: 'uppercase' }}>
                Recommended Formulation
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0A2362' }}>
                {currentRec.product}
              </div>
              <div style={{ fontSize: '0.76rem', color: '#64748B' }}>
                {currentRec.spec}
              </div>
            </div>
            <button 
              onClick={() => onOpenEnquiry && onOpenEnquiry(currentRec.product)}
              style={{ background: '#0A2362', color: '#FFF', border: 'none', padding: '8px 12px', borderRadius: '6px', fontSize: '0.76rem', fontWeight: 700, cursor: 'pointer' }}
            >
              Get Specs
            </button>
          </div>
        </div>

        {/* BOTTOM ROW: 2 Sub-Cards (Metrics & Quick Tools) */}
        <div className="c3-bottom-row">
          <div className="c3-card c3-metric-card">
            <span className="c3-metric-number">1.2M+</span>
            <span className="c3-metric-label">Square Feet Waterproofed with Zero Failure</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00A844', fontSize: '0.76rem', fontWeight: 700, marginTop: '4px' }}>
              <Shield size={14} /> 10-Year Warranty Backed
            </div>
          </div>

          <div className="c3-card c3-metric-card" style={{ background: '#F8FAFC' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0A2362', fontWeight: 800, fontSize: '0.92rem' }}>
              <Calculator size={18} color="#0A2362" />
              <span>Material Calculator</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#64748B', margin: '4px 0 10px' }}>
              Calculate exact chemical quantity, coverage, and mortar requirements in seconds.
            </p>
            <Link to="/calculator" style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0A2362', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Launch Calculator <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
