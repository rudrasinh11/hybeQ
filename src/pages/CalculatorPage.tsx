import React from 'react';
import { CalculatorWidget } from '../components/CalculatorWidget';

interface CalculatorPageProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="calculator-page">
      {/* Header */}
      <section style={{ background: '#0A2362', color: '#FFFFFF', padding: '70px 0 50px' }}>
        <div className="container">
          <span className="section-tag on-dark" style={{ marginBottom: 12 }}>Civil Engineering Tools</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', color: '#FFFFFF', fontWeight: 900, marginBottom: 16 }}>
            Material Consumption Calculator
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: 740, lineHeight: 1.6 }}>
            Accurately calculate bag requirements for tile adhesives, waterproof coating pails, micro-concrete, and epoxy grouts based on project area and bed thickness parameters.
          </p>
        </div>
      </section>

      {/* Main Interactive Calculator */}
      <section style={{ padding: 'clamp(40px, 6vw, 80px) 0', background: '#F5F7FB' }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <CalculatorWidget onOpenEnquiry={onOpenEnquiry} compact={false} />

          {/* Reference Table Below Calculator */}
          <div style={{ marginTop: 40, background: '#FFFFFF', borderRadius: 16, border: '1.5px solid #DFE6EF', padding: 'clamp(18px, 4vw, 36px)' }}>
            <h3 style={{ fontSize: '1.35rem', color: '#0A2362', fontWeight: 800, marginBottom: 16 }}>
              Recommended Notch Trowel Sizing Chart (IS 15477 Guidelines)
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, marginBottom: 24 }}>
              To ensure 100% bed transfer without hollow sounds, match the trowel notch size to your tile dimension:
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ background: '#0A2362', color: '#FFFFFF' }}>
                    <th style={{ padding: '12px 16px' }}>Tile Format / Dimensions</th>
                    <th style={{ padding: '12px 16px' }}>Notch Trowel Size</th>
                    <th style={{ padding: '12px 16px' }}>Effective Bed Thickness</th>
                    <th style={{ padding: '12px 16px' }}>Approx. Coverage / 20kg Bag</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #DFE6EF' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#0A2362' }}>Small Ceramic Tiles (up to 300x300mm)</td>
                    <td style={{ padding: '12px 16px' }}>6 x 6 mm Square Notch</td>
                    <td style={{ padding: '12px 16px' }}>3.0 - 3.5 mm</td>
                    <td style={{ padding: '12px 16px', color: '#46C985', fontWeight: 700 }}>50 - 55 sq.ft</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #DFE6EF', background: '#F5F7FB' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#0A2362' }}>Medium Vitrified (600x600, 600x1200mm)</td>
                    <td style={{ padding: '12px 16px' }}>8 x 8 mm Square Notch</td>
                    <td style={{ padding: '12px 16px' }}>4.5 - 5.0 mm</td>
                    <td style={{ padding: '12px 16px', color: '#46C985', fontWeight: 700 }}>38 - 42 sq.ft</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #DFE6EF' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#0A2362' }}>Large Format GVT / Slabs (1200x1800mm+)</td>
                    <td style={{ padding: '12px 16px' }}>10 x 10 mm (Butter both sides)</td>
                    <td style={{ padding: '12px 16px' }}>6.0 - 8.0 mm</td>
                    <td style={{ padding: '12px 16px', color: '#46C985', fontWeight: 700 }}>25 - 30 sq.ft</td>
                  </tr>
                  <tr style={{ background: '#F5F7FB' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#0A2362' }}>Heavy Granite &amp; Marble Slabs</td>
                    <td style={{ padding: '12px 16px' }}>12 x 12 mm Notch</td>
                    <td style={{ padding: '12px 16px' }}>8.0 - 10.0 mm</td>
                    <td style={{ padding: '12px 16px', color: '#46C985', fontWeight: 700 }}>20 - 24 sq.ft</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
