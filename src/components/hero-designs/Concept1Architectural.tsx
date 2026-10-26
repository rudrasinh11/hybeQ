import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, Leaf, Clock } from 'lucide-react';

interface Props {
  onOpenEnquiry?: (productName?: string) => void;
}

export const Concept1Architectural: React.FC<Props> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState<'waterproofing' | 'adhesives' | 'flooring'>('waterproofing');

  const productsData = {
    waterproofing: {
      category: 'Waterproofing Polymer Systems',
      headline: 'Engineered For Concrete.',
      headlineAccent: 'Formulated To Last.',
      description: 'Advanced 2K elastomeric and crystalline waterproofing polymers designed for extreme hydrostatic pressure, podium slabs, and subterranean basements.',
      image: '/images/hybeq_products/hy-dampproof-ultra.png',
      spec1: { val: '100% Water Tight', lbl: 'Hydrostatic Resistance' },
      spec2: { val: '> 1.8 N/mm²', lbl: 'Adhesion Strength' },
      leadProduct: 'HY-DAMPPROOF ULTRA'
    },
    adhesives: {
      category: 'Polymer Tile & Stone Mortars',
      headline: 'Precision Bond Strength.',
      headlineAccent: 'Zero Slab Slippage.',
      description: 'High-performance C2TE S1 polymer modified adhesive engineered for large format vitrified tiles, natural stones, and heavy vertical facades.',
      image: '/images/hybeq_products/hymax-525.png',
      spec1: { val: 'Class C2TE S1', lbl: 'EN 12004 Standard' },
      spec2: { val: 'Zero Sag', lbl: 'Vertical Slip Tech' },
      leadProduct: 'HYMAX-525 HIGH-STRENGTH'
    },
    flooring: {
      category: 'Seamless Industrial Flooring',
      headline: 'Extreme Load Toughness.',
      headlineAccent: 'Chemical Immune.',
      description: 'Solvent-free epoxy and polyurethane screeds engineered for pharmaceutical cleanrooms, heavy machinery traffic, and industrial workshops.',
      image: '/images/hybeq_products/hy-spot-bond-ep510.png',
      spec1: { val: '> 75 N/mm²', lbl: 'Compressive Strength' },
      spec2: { val: 'Seamless Spec', lbl: 'Hygiene & Cleanroom' },
      leadProduct: 'HY-SPOT BOND EP-510'
    }
  };

  const curr = productsData[activeTab];

  return (
    <section className="c1-hero-wrapper" aria-label="Hero Concept 1 - Architectural Split Showcase">
      <div className="c1-grid-pattern" />
      
      <div className="c1-container">
        {/* Left Column: Typography & CTAs */}
        <div className="c1-content">
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span className="c1-kicker-badge">
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00C853', display: 'inline-block' }} />
              Concept 1 • Architectural Showcase
            </span>
            <div style={{ display: 'inline-flex', background: '#F1F5F9', padding: '3px', borderRadius: '8px', gap: '4px' }}>
              <button 
                onClick={() => setActiveTab('waterproofing')} 
                style={{ border: 'none', background: activeTab === 'waterproofing' ? '#0A2362' : 'transparent', color: activeTab === 'waterproofing' ? '#FFF' : '#475569', fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', cursor: 'pointer' }}>
                Waterproofing
              </button>
              <button 
                onClick={() => setActiveTab('adhesives')} 
                style={{ border: 'none', background: activeTab === 'adhesives' ? '#0A2362' : 'transparent', color: activeTab === 'adhesives' ? '#FFF' : '#475569', fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', cursor: 'pointer' }}>
                Tile Adhesives
              </button>
              <button 
                onClick={() => setActiveTab('flooring')} 
                style={{ border: 'none', background: activeTab === 'flooring' ? '#0A2362' : 'transparent', color: activeTab === 'flooring' ? '#FFF' : '#475569', fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', cursor: 'pointer' }}>
                Epoxy Flooring
              </button>
            </div>
          </div>

          <h1 className="c1-headline">
            {curr.headline} <br />
            <span className="highlight">{curr.headlineAccent}</span>
          </h1>

          <p className="c1-description">
            {curr.description}
          </p>

          <div className="c1-cta-row">
            <Link to="/products" className="c1-btn-primary">
              Explore Formulations <ArrowRight size={18} />
            </Link>
            <button 
              onClick={() => onOpenEnquiry && onOpenEnquiry(curr.leadProduct)}
              className="c1-btn-secondary"
            >
              Request Tech Consultation
            </button>
          </div>

          <div className="c1-trust-strip">
            <div className="c1-trust-item">
              <ShieldCheck size={18} />
              <span>ISO 9001:2015</span>
            </div>
            <div className="c1-trust-item">
              <Award size={18} />
              <span>EN 12004 Lab Certified</span>
            </div>
            <div className="c1-trust-item">
              <Leaf size={18} />
              <span>Low VOC Green Spec</span>
            </div>
            <div className="c1-trust-item">
              <Clock size={18} />
              <span>25+ Year Service Life</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Stage & Floating Spec Badges */}
        <div className="c1-stage">
          <div className="c1-stage-glow" />
          <div className="c1-pedestal" />

          {/* Top-Right Badge */}
          <div className="c1-spec-badge c1-badge-top-right">
            <span className="badge-val">{curr.spec1.val}</span>
            <span className="badge-label">{curr.spec1.lbl}</span>
          </div>

          {/* Hero Product Cutout */}
          <img 
            key={curr.image}
            src={curr.image} 
            alt={curr.leadProduct}
            className="c1-product-img" 
          />

          {/* Bottom-Left Badge */}
          <div className="c1-spec-badge c1-badge-bottom-left">
            <span className="badge-val">{curr.spec2.val}</span>
            <span className="badge-label">{curr.spec2.lbl}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
