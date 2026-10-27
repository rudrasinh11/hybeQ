import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calculator, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { PRODUCTS, type Product } from '../data/productsData';

interface CalculatorWidgetProps {
  initialProductId?: string;
  onOpenEnquiry?: (productName: string) => void;
  compact?: boolean;
}

export const CalculatorWidget: React.FC<CalculatorWidgetProps> = ({
  initialProductId,
  onOpenEnquiry,
  compact = false
}) => {
  const [searchParams] = useSearchParams();
  const urlProductId = searchParams.get('product') || undefined;

  const defaultId = initialProductId || urlProductId || 'hyintra-507';
  const [selectedProductId, setSelectedProductId] = useState<string>(defaultId);
  const [area, setArea] = useState<number>(500);
  const [unit, setUnit] = useState<'sqft' | 'sqm'>('sqft');
  const [notchSize, setNotchSize] = useState<number>(6); // mm

  // Keep synchronized if initialProductId or URL param updates
  useEffect(() => {
    if (initialProductId) {
      setSelectedProductId(initialProductId);
    } else if (urlProductId) {
      setSelectedProductId(urlProductId);
    }
  }, [initialProductId, urlProductId]);

  const selectedProduct: Product = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];

  // 1 m2 = 10.764 sq.ft
  const areaInSqm = unit === 'sqft' ? area / 10.764 : area;

  // Authoritative calculation logic based on technical parameters
  let totalKgNeeded = 0;
  let packUnit = selectedProduct.packUnitName || 'Bags (20 kg)';
  let packSize = selectedProduct.packSizeKg || 20;
  let unitsNeeded = 0;
  let coverageNote = '';
  let technicalNote = 'Store in cool, dry conditions in original sealed packaging.';

  const formulaType = selectedProduct.calcFormulaType || (
    selectedProduct.category === 'tile-fixing' ? 'tile' :
    selectedProduct.category === 'waterproofing' ? 'membrane' :
    selectedProduct.category === 'grouts' ? 'grout' :
    selectedProduct.category === 'sealants' ? 'sealant' :
    selectedProduct.category === 'decorative-floor-wall' ? 'hardener' :
    selectedProduct.category === 'precast-additives' || selectedProduct.category === 'plasticizers' || selectedProduct.category === 'curing-compounds' ? 'liquid' :
    'mortar'
  );

  switch (formulaType) {
    case 'tile': {
      // Tile adhesive standard: ~1.45 kg/m² per 1mm bed thickness
      const effectiveBedMm = notchSize === 4 ? 3 : notchSize === 6 ? 4.5 : notchSize === 8 ? 6 : 8;
      totalKgNeeded = areaInSqm * effectiveBedMm * 1.45 * 1.05; // 5% wastage
      unitsNeeded = Math.ceil(totalKgNeeded / packSize);
      coverageNote = `Approx. ${(area / unitsNeeded).toFixed(1)} ${unit} per ${packUnit} at ${effectiveBedMm}mm bed`;
      technicalNote = 'Mixing ratio: approx. 22-25% clean potable water (4.4 to 5.0 L per 20kg bag)';
      break;
    }
    case 'membrane': {
      // Liquid / cementitious membrane: ~1.8 to 2.0 kg/m² for two coats
      totalKgNeeded = areaInSqm * 1.85 * 1.05;
      unitsNeeded = Math.ceil(totalKgNeeded / packSize);
      coverageNote = `Approx. ${(area / unitsNeeded).toFixed(1)} ${unit} per ${packUnit} (2 coats)`;
      technicalNote = 'Apply minimum 2 perpendicular coats. Allow 3-4 hours cure between coats.';
      break;
    }
    case 'mortar': {
      // Structural repair microconcrete / drymix mortar: approx 2.1 kg/m² per 1mm thickness
      totalKgNeeded = areaInSqm * 3.8 * 1.05;
      unitsNeeded = Math.ceil(totalKgNeeded / packSize);
      coverageNote = `Approx. ${(area / unitsNeeded).toFixed(1)} ${unit} per ${packUnit} at recommended build`;
      technicalNote = 'Pre-wet substrate to saturated surface dry (SSD) condition before casting.';
      break;
    }
    case 'grout': {
      // Epoxy / cementitious grouting: ~0.45 kg/m² for 600x600 tiles with 3mm joint
      totalKgNeeded = areaInSqm * 0.48 * 1.05;
      unitsNeeded = Math.ceil(totalKgNeeded / packSize);
      coverageNote = `Approx. ${(area / unitsNeeded).toFixed(1)} ${unit} per ${packUnit} for 600x600 format (3mm joint)`;
      technicalNote = 'Clean tile joints thoroughly; remove spacers and dust prior to grouting.';
      break;
    }
    case 'sealant': {
      // Elastomeric sealants: ~1 sausage per 6 running meters (or ~0.15 sausages per m²)
      totalKgNeeded = areaInSqm * 0.25;
      unitsNeeded = Math.max(1, Math.ceil(totalKgNeeded));
      coverageNote = `Approx. 6 running meters per 600ml foil pack (10x10mm joint)`;
      technicalNote = 'Use PE backing rod to regulate joint depth to width ratio (1:1 or 2:1).';
      break;
    }
    case 'hardener': {
      // Dry-shake floor hardener: 5.0 kg/m² medium duty
      totalKgNeeded = areaInSqm * 5.0 * 1.05;
      unitsNeeded = Math.ceil(totalKgNeeded / packSize);
      coverageNote = `Approx. ${(area / unitsNeeded).toFixed(1)} ${unit} per ${packUnit} (medium industrial duty)`;
      technicalNote = 'Broadcast in two stages across green concrete immediately after bleed water evaporates.';
      break;
    }
    case 'liquid':
    default: {
      // Liquid admixtures & curing compounds: approx 0.25 Ltr/m² or dosage by cement wt
      totalKgNeeded = areaInSqm * 0.22 * 1.05;
      unitsNeeded = Math.max(1, Math.ceil(totalKgNeeded / packSize));
      coverageNote = `Approx. ${(area / unitsNeeded).toFixed(1)} ${unit} per ${packUnit}`;
      technicalNote = 'Spray or roll uniformly across fresh or cured substrate; do not dilute with solvent.';
      break;
    }
  }

  const handleReset = () => {
    setArea(500);
    setNotchSize(6);
    setSelectedProductId(initialProductId || 'hyintra-507');
  };

  return (
    <div style={{
      position: 'relative',
      zIndex: 2,
      background: '#FFFFFF',
      borderRadius: 16,
      border: '1.5px solid #DFE6EF',
      padding: compact ? '24px' : '36px',
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
              Synchronized with Authoritative Formulation Matrix
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: '#64748B', fontWeight: 600, cursor: 'pointer', background: 'none', border: 'none' }}
        >
          <RotateCcw size={14} /> Reset
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : '1.2fr 1fr', gap: 28 }}>
        {/* Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* Product Select */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#0A2362', marginBottom: 6 }}>
              Select Chemical Formulation
            </label>
            <select
              value={selectedProductId}
              onChange={e => setSelectedProductId(e.target.value)}
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
                    cursor: 'pointer',
                    border: 'none',
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
                    cursor: 'pointer',
                    border: 'none',
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
                min="1"
                max="500000"
                step="10"
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
                      cursor: 'pointer',
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#46C985', textTransform: 'uppercase', letterSpacing: 1.5 }}>
                Estimated Requirements
              </span>
              <span style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: 4 }}>
                {selectedProduct.name}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 12, marginBottom: 6 }}>
              <span style={{ fontSize: '2.8rem', fontWeight: 900, color: '#46C985', lineHeight: 1 }}>
                {unitsNeeded}
              </span>
              <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                {packUnit}
              </span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)', margin: '0 0 16px' }}>
              Total calculated weight: <strong>{Math.round(totalKgNeeded)} kg</strong> (includes 5% recommended wastage margin)
            </p>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.8125rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <CheckCircle2 size={16} style={{ color: '#46C985', flexShrink: 0, marginTop: 2 }} />
                <span>{coverageNote}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <CheckCircle2 size={16} style={{ color: '#46C985', flexShrink: 0, marginTop: 2 }} />
                <span>{technicalNote}</span>
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
