import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Calculator, CheckCircle } from 'lucide-react';

interface Props {
  onOpenEnquiry?: (productName?: string) => void;
}

export const Concept5TechSpecMatrix: React.FC<Props> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState<'waterproof' | 'tile' | 'repair'>('waterproof');

  const matrixData = {
    waterproof: {
      title: 'Waterproofing & Hydro-Polymers',
      standard: 'IS 2645 & ASTM C836 Compliant',
      productName: 'HY-DAMPPROOF ULTRA 2K',
      metrics: [
        { lbl: 'Elongation At Break', val: '220%' },
        { lbl: 'Tensile Strength', val: '2.5 N/mm²' },
        { lbl: 'Water Impermeability', val: '5.0 Bar DIN 1048' },
        { lbl: 'Crack Bridging', val: '2.0 mm (Class A3)' }
      ],
      consumption: '1.2 to 1.5 kg / m² in 2 coats'
    },
    tile: {
      title: 'Precision Tile & Large Slab Adhesives',
      standard: 'IS 15477:2019 Type 3 / EN 12004 C2TE S1',
      productName: 'HYMAX-525 ADHESIVE',
      metrics: [
        { lbl: 'Tensile Adhesion', val: '> 1.8 N/mm²' },
        { lbl: 'Shear Adhesion (14d)', val: '> 2.2 N/mm²' },
        { lbl: 'Open Time', val: '30 Minutes' },
        { lbl: 'Sag Resistance', val: '< 0.5 mm' }
      ],
      consumption: '3.5 to 4.5 kg / m² with 8mm trowel'
    },
    repair: {
      title: 'Structural Micro-Concretes & Repair Mortars',
      standard: 'EN 1504-3 Class R4 Structural Mortar',
      productName: 'HY-SUPERCONCRETE LS',
      metrics: [
        { lbl: 'Compressive (28 Days)', val: '> 60 N/mm²' },
        { lbl: 'Flexural Strength', val: '> 9.5 N/mm²' },
        { lbl: 'Bond Strength', val: '> 2.5 N/mm²' },
        { lbl: 'Modulus of Elasticity', val: '> 28 GPa' }
      ],
      consumption: '2000 kg / m³ yield'
    }
  };

  const curr = matrixData[activeTab];

  return (
    <section className="c5-hero-wrapper" aria-label="Hero Concept 5 - Technical Spec-Card Matrix">
      <div className="c5-container">
        {/* Left Column: Civil Engineering Focused Typography */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#F1F5F9', padding: '6px 14px', borderRadius: '999px', marginBottom: '16px' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#0A2362' }} />
            <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0A2362', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Concept 5 • Technical Spec-Card Matrix
            </span>
          </div>

          <h1 className="c5-headline">
            Certified Chemistry <br />
            <span style={{ color: '#00A844' }}>For Extreme Climates.</span>
          </h1>

          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '520px', margin: '0 0 24px' }}>
            Architectural and structural grade formulations tested to withstand high thermal cycling, aggressive groundwater salinity, and seismic stresses.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '28px' }}>
            <Link to="/calculator" className="c1-btn-primary">
              <Calculator size={18} /> Coverage Calculator
            </Link>
            <button 
              onClick={() => onOpenEnquiry && onOpenEnquiry(curr.productName)}
              className="c1-btn-secondary"
            >
              Request Lab Test Certificate
            </button>
          </div>

          <div style={{ display: 'flex', gap: '20px', color: '#64748B', fontSize: '0.85rem', fontWeight: 700 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={16} color="#00C853" /> NABL Accredited Testing
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={16} color="#00C853" /> Free Batch COA On Dispatch
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Specification Terminal Card */}
        <div className="c5-spec-sheet">
          <div className="c5-sheet-header">
            <div>
              <div style={{ fontSize: '0.72rem', color: '#38BDF8', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                LIVE FORMULATION MATRIX
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#FFFFFF', marginTop: '2px' }}>
                {curr.productName}
              </div>
            </div>

            <div className="c5-tab-row">
              <button 
                className={`c5-tab ${activeTab === 'waterproof' ? 'active' : ''}`}
                onClick={() => setActiveTab('waterproof')}
              >
                Waterproofing
              </button>
              <button 
                className={`c5-tab ${activeTab === 'tile' ? 'active' : ''}`}
                onClick={() => setActiveTab('tile')}
              >
                Tile Adhesive
              </button>
              <button 
                className={`c5-tab ${activeTab === 'repair' ? 'active' : ''}`}
                onClick={() => setActiveTab('repair')}
              >
                Repair Mortar
              </button>
            </div>
          </div>

          <div style={{ color: '#94A3B8', fontSize: '0.82rem', fontWeight: 600 }}>
            {curr.standard}
          </div>

          <div className="c5-matrix-grid">
            {curr.metrics.map((m, idx) => (
              <div key={idx} className="c5-matrix-item">
                <span className="c5-matrix-num">{m.val}</span>
                <span className="c5-matrix-lbl">{m.lbl}</span>
              </div>
            ))}
          </div>

          <div style={{ background: '#1E293B', padding: '12px 16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem' }}>
            <span style={{ color: '#94A3B8' }}>Est. Consumption Rate:</span>
            <span style={{ color: '#38BDF8', fontWeight: 800 }}>{curr.consumption}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px solid #334155' }}>
            <span style={{ color: '#64748B', fontSize: '0.75rem' }}>
              Full TDS & Safety Data Sheet ready for download
            </span>
            <button 
              onClick={() => onOpenEnquiry && onOpenEnquiry(curr.productName)}
              style={{ background: '#00C853', color: '#071942', border: 'none', padding: '8px 14px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Download size={14} /> Get Tech Sheet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
