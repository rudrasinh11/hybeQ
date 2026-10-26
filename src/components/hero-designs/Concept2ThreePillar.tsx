import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Props {
  onOpenEnquiry?: (productName?: string) => void;
}

export const Concept2ThreePillar: React.FC<Props> = ({ onOpenEnquiry }) => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      number: '01 / SYSTEM',
      title: 'Waterproofing & Sealants',
      desc: 'Elastomeric positive & negative side polymer membranes resisting up to 7 bar water head pressure.',
      bg: '/images/hero-waterproofing.jpg',
      leadProduct: 'HY-DAMPPROOF ULTRA',
      thumb: '/images/hybeq_products/hy-dampproof-ultra.png',
      spec: '7.0 Bar Hydrostatic Barrier'
    },
    {
      id: 1,
      number: '02 / SYSTEM',
      title: 'Tile & Stone Adhesives',
      desc: 'Polymer modified C2TE adhesives specifically engineered for 1200x2400mm jumbo porcelain slabs with zero slippage.',
      bg: '/images/hero-facade.jpg',
      leadProduct: 'HYMAX-525 ADHESIVE',
      thumb: '/images/hybeq_products/hymax-525.png',
      spec: 'Zero Vertical Slip (EN 12004)'
    },
    {
      id: 2,
      number: '03 / SYSTEM',
      title: 'Industrial Epoxy Flooring',
      desc: 'Heavy-duty resin screeds and self-levelling epoxies engineered for automotive plants, cleanrooms, and warehouses.',
      bg: '/images/hero-flooring.jpg',
      leadProduct: 'HY-SPOT BOND EP-510',
      thumb: '/images/hybeq_products/hy-spot-bond-ep510.png',
      spec: 'Shore D 82 Hardness'
    }
  ];

  return (
    <section className="c2-hero-wrapper" aria-label="Hero Concept 2 - Three Pillar Interactive">
      <div className="c2-header">
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#00E676', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
            <span>Concept 2</span> • <span>Interactive 3-Pillar Experience</span>
          </div>
          <h2 className="c2-header-title">Tailored Chemical Architecture</h2>
        </div>
        <p className="c2-header-sub">
          Hover or tap any pillar to expand full engineering specifications, application scope, and formulated product sets.
        </p>
      </div>

      <div className="c2-pillars-grid">
        {pillars.map((pillar) => {
          const isActive = activePillar === pillar.id;
          return (
            <div
              key={pillar.id}
              className={`c2-pillar ${isActive ? 'active' : ''}`}
              onMouseEnter={() => setActivePillar(pillar.id)}
              onClick={() => setActivePillar(pillar.id)}
            >
              <div 
                className="c2-pillar-bg"
                style={{ backgroundImage: `url(${pillar.bg})` }}
              />
              <div className="c2-pillar-overlay" />

              <div className="c2-pillar-content">
                <span className="c2-pillar-num">{pillar.number}</span>
                <h3 className="c2-pillar-title">{pillar.title}</h3>

                <div className="c2-pillar-details">
                  <p className="c2-pillar-desc">{pillar.desc}</p>

                  <div className="c2-product-tag-row">
                    <img src={pillar.thumb} alt={pillar.leadProduct} className="c2-prod-thumb" />
                    <div>
                      <div style={{ color: '#00E676', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>
                        Featured System
                      </div>
                      <div style={{ color: '#FFFFFF', fontSize: '0.92rem', fontWeight: 700 }}>
                        {pillar.leadProduct}
                      </div>
                      <div style={{ color: '#94A3B8', fontSize: '0.78rem' }}>
                        {pillar.spec}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
                    <Link
                      to="/products"
                      className="c1-btn-primary"
                      style={{ padding: '10px 20px', fontSize: '0.85rem' }}
                    >
                      View All Products <ArrowRight size={16} />
                    </Link>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenEnquiry) onOpenEnquiry(pillar.leadProduct);
                      }}
                      className="c1-btn-secondary"
                      style={{ padding: '10px 18px', fontSize: '0.85rem', background: 'rgba(255,255,255,0.15)', color: '#FFF', borderColor: 'rgba(255,255,255,0.3)' }}
                    >
                      Instant TDS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
