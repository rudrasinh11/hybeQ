import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Play, FileDown, ShieldCheck } from 'lucide-react';

interface Props {
  onOpenVideo?: () => void;
  onOpenEnquiry?: (productName?: string) => void;
}

export const Concept4CinematicHUD: React.FC<Props> = ({ onOpenVideo, onOpenEnquiry }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      category: 'HYDRO-POLYMER WATERPROOFING',
      title: 'Impervious Subterranean Barrier Systems',
      bg: '/images/hero-waterproofing.jpg',
      specs: [
        { key: 'Elongation At Break', val: '250%' },
        { key: 'Crack Bridging Capacity', val: 'Up to 2.8 mm' },
        { key: 'Hydrostatic Resistance', val: '> 7.0 Bar' }
      ],
      product: 'HY-DAMPPROOF ULTRA'
    },
    {
      id: 1,
      category: 'HIGH-POLYMER TILE FIXING',
      title: 'Engineered for Heavy Large-Format Slabs',
      bg: '/images/hero-facade.jpg',
      specs: [
        { key: 'Classification', val: 'EN 12004 C2TE S1' },
        { key: 'Slip Resistance', val: '< 0.5 mm (Zero-Slip)' },
        { key: 'Adhesion Strength', val: '> 1.85 N/mm²' }
      ],
      product: 'HYMAX-525 ADHESIVE'
    },
    {
      id: 2,
      category: 'HEAVY INDUSTRIAL FLOORING',
      title: 'Impact, Abrasion & Acid Resistant Screeds',
      bg: '/images/hero-flooring.jpg',
      specs: [
        { key: 'Compressive Toughness', val: '> 80 MPa' },
        { key: 'Chemical Resistance', val: 'Acids, Alkalis, Oils' },
        { key: 'Curing Time', val: 'Light Foot Traffic in 12h' }
      ],
      product: 'HY-SPOT BOND EP-510'
    }
  ];

  const current = slides[activeSlide];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="c4-hero-wrapper" aria-label="Hero Concept 4 - Cinematic Frosted HUD">
      {/* Background slide */}
      <div 
        className="c4-bg-slide"
        style={{ backgroundImage: `url(${current.bg})` }}
      />
      
      {/* Floating HUD Container */}
      <div className="c4-hud-card">
        {/* Left Column: Category & Bold Title */}
        <div className="c4-hud-info">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ background: '#00C853', color: '#071942', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 900 }}>
              CONCEPT 4
            </span>
            <span className="c4-hud-cat">{current.category}</span>
          </div>

          <h2 className="c4-hud-title">{current.title}</h2>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '4px' }}>
            <Link 
              to="/products"
              className="c1-btn-primary" 
              style={{ background: '#00C853', color: '#071942', padding: '10px 20px', fontSize: '0.88rem' }}
            >
              Explore Formulations <ArrowRight size={16} />
            </Link>
            {onOpenVideo && (
              <button 
                onClick={onOpenVideo}
                style={{ background: 'rgba(255,255,255,0.15)', color: '#FFF', border: '1px solid rgba(255,255,255,0.3)', padding: '10px 16px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', fontWeight: 700 }}
              >
                <Play size={14} fill="#FFF" /> Watch In Action
              </button>
            )}
          </div>
        </div>

        {/* Center Column: Live Lab Technical Specs */}
        <div className="c4-hud-specs">
          <div style={{ color: '#00E676', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={14} /> Certified Laboratory Specs
          </div>

          {current.specs.map((s, idx) => (
            <div key={idx} className="c4-spec-row">
              <span className="c4-spec-key">{s.key}:</span>
              <span className="c4-spec-val">{s.val}</span>
            </div>
          ))}

          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry(current.product)}
            style={{ background: 'none', border: 'none', color: '#38BDF8', fontSize: '0.8rem', fontWeight: 700, padding: 0, textAlign: 'left', cursor: 'pointer', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <FileDown size={14} /> Download {current.product} TDS Sheet
          </button>
        </div>

        {/* Right Column: Slide Navigation Controls */}
        <div className="c4-hud-controls">
          <div style={{ color: '#94A3B8', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em' }}>
            0{activeSlide + 1} / 0{slides.length}
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={prevSlide} className="c4-nav-btn" aria-label="Previous Slide">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} className="c4-nav-btn" aria-label="Next Slide">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
