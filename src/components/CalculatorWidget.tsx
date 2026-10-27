import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { PRODUCTS } from '../data/productsData';

interface CalculatorWidgetProps {
  onOpenEnquiry?: (productName: string) => void;
  compact?: boolean;
  initialProductId?: string;
  onProductChange?: (productId: string) => void;
}

export const CalculatorWidget: React.FC<CalculatorWidgetProps> = ({
  onOpenEnquiry,
  compact = false,
  initialProductId,
  onProductChange
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(initialProductId || 'hycera-505');

  useEffect(() => {
    if (initialProductId) {
      setSelectedProductId(initialProductId);
    }
  }, [initialProductId]);

  const [area, setArea] = useState<number>(500);
  const [unit, setUnit] = useState<'sqft' | 'sqm'>('sqft');
  const [notchSize, setNotchSize] = useState<number>(6); // mm

  const handleProductSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = e.target.value;
    setSelectedProductId(newId);
    if (onProductChange) {
      onProductChange(newId);
    }
  };

  const selectedProduct = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];

  // Calculation logic based on standard Indian civil engineering formulas:
  // Tile adhesive: approx 1.45 kg/m2 per mm thickness.
  // 1 m2 = 10.764 sq.ft
  // Area in sq.m
  const areaInSqm = unit === 'sqft' ? area / 10.764 : area;

  // Total kg needed
  let totalKgNeeded = 0;
  let packUnit = 'Bags (20 kg)';
  let unitsNeeded = 0;
  let coverageNote = '';

  if (selectedProduct.category === 'tile-fixing') {
    // Notch depth / average bed thickness approx notchSize * 0.5 to 0.7
    const effectiveBedMm = notchSize === 4 ? 3 : notchSize === 6 ? 4.5 : notchSize === 8 ? 6 : 8;
    totalKgNeeded = areaInSqm * effectiveBedMm * 1.45;
    unitsNeeded = Math.ceil(totalKgNeeded / 20);
    packUnit = 'Bags (20 kg)';
    coverageNote = `Approx. ${(area / unitsNeeded).toFixed(1)} ${unit} per 20 kg bag at ${effectiveBedMm}mm bed`;
  } else if (selectedProduct.category === 'waterproofing') {
    // 2-coat membrane approx 1.5 - 2.0 kg per sq.m (or 10-12 sqft per kg for liquid)
    totalKgNeeded = areaInSqm * 1.8;
    unitsNeeded = Math.ceil(totalKgNeeded / 20);
    packUnit = 'Pails (20 Ltr / 20 kg)';
    coverageNote = `Approx. 100 - 120 sq.ft per 20 Ltr pail (2 coats)`;
  } else if (selectedProduct.category === 'repairs') {
    totalKgNeeded = areaInSqm * 3.5;
    unitsNeeded = Math.ceil(totalKgNeeded / 25);
    packUnit = 'Bags (25 kg)';
    coverageNote = `Approx. 2.0 kg/m² per 1mm thickness`;
  } else {
    // grouts
    totalKgNeeded = areaInSqm * 0.45;
    unitsNeeded = Math.ceil(totalKgNeeded / 5);
    packUnit = 'Buckets (5 kg)';
    coverageNote = `Approx. 120 sq.ft per 5 kg set for 600x600 tiles (3mm joint)`;
  }

  return (
    <div style={{
      position: 'relative',
      zIndex: 2,
      background: '#FFFFFF',
      borderRadius: 16,
      border: '1.5px solid #DFE6EF',
      padding: compact ? '20px 16px' : 'clamp(18px, 3.5vw, 36px)',
      boxShadow: '0 8px 30px rgba(10,35,98,0.06)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            background: '#0A2362',
            color: '#46C985',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Calculator size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: '#0A2362', fontWeight: 800 }}>
              Material Quantity Estimator
            </h3>
            <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
              Standard IS 15477 / EN 12004 Consumption Matrix
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => { setArea(500); setNotchSize(6); }}
          style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}
        >
          <RotateCcw size={14} /> Reset
        </button>
      </div>

      <div className={`calc-widget-grid ${compact ? 'compact' : ''}`}>
        {/* Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* Product Select */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#0A2362', marginBottom: 6 }}>
              Select Chemical Formulation
            </label>
            <select
              value={selectedProductId}
              onChange={handleProductSelect}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 8,
                border: '1.5px solid #DFE6EF',
                fontSize: '0.875rem',
                color: '#0A2362',
                background: '#F5F7FB',
                outline: 'none',
                fontWeight: 600
              }}
            >
              {PRODUCTS.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name} — {p.categoryLabel} ({p.badge})
                </option>
              ))}
            </select>
          </div>

          {/* Area & Unit */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <label style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0A2362' }}>
                Application Surface Area
              </label>
              <div style={{ display: 'flex', gap: 4, background: '#F5F7FB', padding: 2, borderRadius: 6, border: '1px solid #DFE6EF' }}>
                <button
                  type="button"
                  onClick={() => setUnit('sqft')}
                  style={{
                    padding: '3px 10px',
                    borderRadius: 4,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    background: unit === 'sqft' ? '#0A2362' : 'transparent',
                    color: unit === 'sqft' ? '#FFFFFF' : '#64748B'
                  }}
                >
                  Sq. Ft
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('sqm')}
                  style={{
                    padding: '3px 10px',
                    borderRadius: 4,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    background: unit === 'sqm' ? '#0A2362' : 'transparent',
                    color: unit === 'sqm' ? '#FFFFFF' : '#64748B'
                  }}
                >
                  Sq. Mtr
                </button>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <input
                type="number"
                min="10"
                max="500000"
                step="50"
                value={area}
                onChange={e => setArea(Math.max(1, Number(e.target.value)))}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 8,
                  border: '1.5px solid #DFE6EF',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#0A2362',
                  outline: 'none'
                }}
              />
              <span style={{ position: 'absolute', right: 14, top: 12, fontSize: '0.8125rem', color: '#64748B', fontWeight: 600 }}>
                {unit === 'sqft' ? 'sq.ft' : 'sq.m'}
              </span>
            </div>
          </div>

          {/* Notch Trowel / Bed Thickness if Tile Adhesive */}
          {selectedProduct.category === 'tile-fixing' && (
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#0A2362', marginBottom: 6 }}>
                Notch Trowel Depth / Bed Thickness
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                {[4, 6, 8, 10].map(mm => (
                  <button
                    key={mm}
                    type="button"
                    onClick={() => setNotchSize(mm)}
                    style={{
                      padding: '8px 0',
                      borderRadius: 6,
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      border: notchSize === mm ? '2px solid #0A2362' : '1px solid #DFE6EF',
                      background: notchSize === mm ? '#EAF8F0' : '#FFFFFF',
                      color: notchSize === mm ? '#0A2362' : '#64748B'
                    }}
                  >
                    {mm} mm
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Output Card */}
        <div style={{
          background: 'linear-gradient(135deg, #0A2362 0%, #071A45 100%)',
          borderRadius: 12,
          padding: '24px',
          color: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#46C985', textTransform: 'uppercase', letterSpacing: 1.5 }}>
              Recommended Quantity
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 8, marginBottom: 4 }}>
              <span style={{ fontSize: '3rem', fontWeight: 900, color: '#46C985', lineHeight: 1 }}>
                {unitsNeeded}
              </span>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>
                {packUnit}
              </span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)', margin: '0 0 16px' }}>
              Total weight: <strong>{Math.round(totalKgNeeded)} kg</strong> (includes 5% recommended site wastage)
            </p>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.8125rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle2 size={16} style={{ color: '#46C985', flexShrink: 0 }} />
                <span>{coverageNote}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle2 size={16} style={{ color: '#46C985', flexShrink: 0 }} />
                <span>Mixing ratio: 22-25% clean potable water</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 24 }}>
            <button
              type="button"
              className="btn btn-accent"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => onOpenEnquiry && onOpenEnquiry(selectedProduct.name)}
            >
              Get Bulk Project Quote <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
