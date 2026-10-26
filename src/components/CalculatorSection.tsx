import React, { useState } from 'react';
import { Calculator, RotateCcw, ArrowRight, ShieldAlert } from 'lucide-react';
import { PRODUCTS } from '../data/productsData';

interface CalculatorSectionProps {
  onOpenEnquiry?: (productName?: string) => void;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  onOpenEnquiry
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>('hyintra-507');
  const [areaInput, setAreaInput] = useState<string>('500');
  const [unit, setUnit] = useState<'sqft' | 'sqm'>('sqft');
  const [notchSize, setNotchSize] = useState<number>(6); // mm notch size

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  // Validation
  const areaNumber = Math.max(0, parseFloat(areaInput) || 0);

  // Unit conversion: 1 m² = 10.764 sq.ft
  const areaInSqm = unit === 'sqft' ? areaNumber / 10.764 : areaNumber;

  // Formula calculations adhering strictly to Indian civil engineering / IS 15477 standards:
  let totalKgNeeded = 0;
  let packUnit = 'Bags (20 kg)';
  let unitsNeeded = 0;
  let coverageNote = '';
  let bedDescription = '';

  if (selectedProduct.category === 'tile-fixing') {
    // Effective bed thickness based on trowel notch depth
    const effectiveBedMm = notchSize === 4 ? 3 : notchSize === 6 ? 4.5 : notchSize === 8 ? 6 : 8;
    bedDescription = `${effectiveBedMm} mm average bed thickness`;
    totalKgNeeded = areaInSqm * effectiveBedMm * 1.45;
    unitsNeeded = Math.ceil(totalKgNeeded / 20);
    packUnit = 'Bags (20 kg)';
    coverageNote = unitsNeeded > 0
      ? `Approx. ${(areaNumber / unitsNeeded).toFixed(1)} ${unit} per 20 kg bag`
      : '0';
  } else if (selectedProduct.category === 'waterproofing') {
    bedDescription = '2-Coat elastomeric liquid membrane (~1.2 mm DFT)';
    totalKgNeeded = areaInSqm * 1.8;
    unitsNeeded = Math.ceil(totalKgNeeded / 20);
    packUnit = 'Pails (20 Ltr / 20 kg)';
    coverageNote = `Approx. 100 - 120 sq.ft per 20 Ltr pail (2 coats)`;
  } else if (selectedProduct.category === 'repairs') {
    bedDescription = 'Structural repair mortar / micro-concrete (~10mm section)';
    totalKgNeeded = areaInSqm * 3.5;
    unitsNeeded = Math.ceil(totalKgNeeded / 25);
    packUnit = 'Bags (25 kg)';
    coverageNote = `Approx. 2.0 kg/m² per 1mm thickness`;
  } else {
    // grouts
    bedDescription = 'Tile joint filling (3 mm joint width for 600×600 mm tiles)';
    totalKgNeeded = areaInSqm * 0.45;
    unitsNeeded = Math.ceil(totalKgNeeded / 5);
    packUnit = 'Buckets (5 kg)';
    coverageNote = `Approx. 120 sq.ft per 5 kg set for 600×600 tiles`;
  }

  const handleReset = () => {
    setSelectedProductId('hyintra-507');
    setAreaInput('500');
    setUnit('sqft');
    setNotchSize(6);
  };

  return (
    <section className="hybeq-calc-section" id="material-calculator" aria-label="Civil Material Consumption Calculator">
      <div className="hybeq-calc-container">
        
        {/* Section Header */}
        <div className="hybeq-calc-header">
          <div className="hybeq-section-badge">
            <Calculator size={14} />
            <span>ACCURATE ESTIMATION TOOL</span>
          </div>
          <h2 className="hybeq-calc-title">
            Material Quantity Estimator
          </h2>
          <p className="hybeq-calc-subtitle">
            Calculate exact mortar, adhesive, or waterproofing quantities required for your project based on standard IS 15477 / EN 12004 consumption rates.
          </p>
        </div>

        {/* Calculator Interactive Card */}
        <div className="hybeq-calc-card">
          
          {/* Top Bar with Reset Action */}
          <div className="hybeq-calc-topbar">
            <div className="hybeq-calc-topbar-title">
              <span className="hybeq-calc-bullet" />
              <span>Project Specification Inputs</span>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="hybeq-calc-reset-btn"
              title="Reset inputs to defaults"
              aria-label="Reset Calculator Inputs"
            >
              <RotateCcw size={14} />
              <span>Reset Values</span>
            </button>
          </div>

          <div className="hybeq-calc-body">
            
            {/* Input Column (Left) */}
            <div className="hybeq-calc-inputs">
              
              {/* Field 1: Product Selection */}
              <div className="hybeq-calc-field">
                <label htmlFor="calc-product-select" className="hybeq-calc-label">
                  1. Select Product Formulation
                </label>
                <div className="hybeq-select-wrap">
                  <select
                    id="calc-product-select"
                    value={selectedProductId}
                    onChange={(e) => setSelectedProductId(e.target.value)}
                    className="hybeq-calc-select"
                  >
                    <optgroup label="Tile & Stone Fixing Adhesives">
                      <option value="hycera-505">Hycera 505 (Ceramic & Small Vitrified)</option>
                      <option value="hyintra-507">Hyintra 507 (Vitrified & Porous Stone)</option>
                      <option value="hyultra-515">Hyultra 515 (Large Format Vitrified & Granite)</option>
                      <option value="hymax-525">Hymax 525 (Heavy Duty Vertical Cladding)</option>
                    </optgroup>
                    <optgroup label="Waterproofing Systems">
                      <option value="hy-dampproof-ultra">Hy Dampproof Ultra 2K Elastomeric</option>
                      <option value="hy-coat-h111">Hy-Coat H-111 Polymer Slurry</option>
                    </optgroup>
                    <optgroup label="Structural Repairs & Grouts">
                      <option value="hy-superconcrete-ls">Hy Microconcrete M40 Structural</option>
                      <option value="hy-spot-bond-ep510">Hy-Spot Bond EP-510 Epoxy System</option>
                    </optgroup>
                  </select>
                </div>
                <span className="hybeq-calc-hint">
                  Selected Standard: <strong>{selectedProduct.badge}</strong> ({selectedProduct.packaging})
                </span>
              </div>

              {/* Field 2: Area & Unit Selection */}
              <div className="hybeq-calc-field">
                <div className="hybeq-calc-label-row">
                  <label htmlFor="calc-area-input" className="hybeq-calc-label">
                    2. Surface Coverage Area
                  </label>
                  <div className="hybeq-unit-toggle" role="group" aria-label="Area Unit Toggle">
                    <button
                      type="button"
                      className={`hybeq-unit-btn ${unit === 'sqft' ? 'active' : ''}`}
                      onClick={() => setUnit('sqft')}
                    >
                      Sq. Ft.
                    </button>
                    <button
                      type="button"
                      className={`hybeq-unit-btn ${unit === 'sqm' ? 'active' : ''}`}
                      onClick={() => setUnit('sqm')}
                    >
                      Sq. Metres
                    </button>
                  </div>
                </div>

                <div className="hybeq-input-with-affix">
                  <input
                    id="calc-area-input"
                    type="number"
                    min="1"
                    max="1000000"
                    step="10"
                    value={areaInput}
                    onChange={(e) => setAreaInput(e.target.value)}
                    className="hybeq-calc-input"
                    placeholder="Enter area..."
                  />
                  <span className="hybeq-input-affix">{unit === 'sqft' ? 'sq.ft' : 'm²'}</span>
                </div>
                <span className="hybeq-calc-hint">
                  Equivalent to: ~{areaInSqm.toFixed(1)} m² ({areaNumber.toFixed(0)} sq.ft)
                </span>
              </div>

              {/* Field 3: Application Thickness / Notch Trowel Size (Only for tile-fixing) */}
              {selectedProduct.category === 'tile-fixing' && (
                <div className="hybeq-calc-field">
                  <label htmlFor="calc-trowel-select" className="hybeq-calc-label">
                    3. Square-Notched Trowel Size / Bed Thickness
                  </label>
                  <select
                    id="calc-trowel-select"
                    value={notchSize}
                    onChange={(e) => setNotchSize(Number(e.target.value))}
                    className="hybeq-calc-select"
                  >
                    <option value={4}>4 mm Notch (~3.0 mm bed — small mosaic/ceramic)</option>
                    <option value={6}>6 mm Notch (~4.5 mm bed — standard 600×600 vitrified)</option>
                    <option value={8}>8 mm Notch (~6.0 mm bed — large format tiles/marble)</option>
                    <option value={10}>10 mm Notch (~8.0 mm bed — uneven substrate / heavy granite)</option>
                  </select>
                  <span className="hybeq-calc-hint">
                    Rule of thumb: 6mm trowel is recommended for standard vitrified flooring.
                  </span>
                </div>
              )}

            </div>

            {/* Results Column (Right) */}
            <div className="hybeq-calc-results">
              <div className="hybeq-results-card">
                <span className="hybeq-results-kicker">ESTIMATED MATERIAL REQUIREMENT</span>
                
                <div className="hybeq-results-primary">
                  <strong className="hybeq-results-number">
                    {unitsNeeded}
                  </strong>
                  <span className="hybeq-results-pack">{packUnit}</span>
                </div>

                <div className="hybeq-results-breakdown">
                  <div className="hybeq-breakdown-row">
                    <span>Total Net Weight:</span>
                    <strong>~{Math.round(totalKgNeeded)} kg</strong>
                  </div>
                  <div className="hybeq-breakdown-row">
                    <span>Estimated Coverage:</span>
                    <strong>{coverageNote}</strong>
                  </div>
                  <div className="hybeq-breakdown-row">
                    <span>Bed Specification:</span>
                    <strong>{bedDescription}</strong>
                  </div>
                </div>

                <div className="hybeq-calc-actions">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(selectedProduct.name)}
                    className="hybeq-btn hybeq-btn-primary hybeq-btn-full"
                    aria-label="Request Official Project Quotation"
                  >
                    <span>Request Quotation for {unitsNeeded} {packUnit}</span>
                    <ArrowRight size={17} />
                  </button>
                </div>

                <div className="hybeq-calc-disclaimer">
                  <ShieldAlert size={15} className="hybeq-disclaimer-icon" />
                  <p>
                    <strong>Engineering Note:</strong> Actual material consumption may vary by ±10% depending on substrate planar tolerances, trowel inclination angle, and on-site wastage. For exact BOQ estimates, consult our technical service desk.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
