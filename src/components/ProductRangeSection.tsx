import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Droplets, 
  Sparkles, 
  Hammer, 
  FlaskConical, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  FileText,
  Building2
} from 'lucide-react';
import { type Product, PRODUCTS, getProductImage } from '../data/productsData';

interface ProductRangeSectionProps {
  onOpenEnquiry?: (productName?: string) => void;
}

interface DivisionData {
  id: string;
  categoryKey: Product['category'];
  number: string;
  name: string;
  shortTag: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  certifications: string[];
  metrics: { label: string; value: string }[];
  applications: string[];
}

export const ProductRangeSection: React.FC<ProductRangeSectionProps> = ({ onOpenEnquiry }) => {
  const [activeDivision, setActiveDivision] = useState(0);

  const divisions: DivisionData[] = [
    {
      id: 'tile-adhesives',
      categoryKey: 'tile-fixing',
      number: '01',
      name: 'Tile & Stone Adhesives',
      shortTag: 'C2TE S1 High Polymer Mortars',
      icon: <Layers size={20} />,
      tagline: 'Extreme Tensile Grip & Zero Vertical Slip',
      description: 'Synthesized with 100% virgin European redispersible polymer powders. Eliminates debonding and hollow sounds on large format vitrified tiles, marble slabs, and external facades.',
      certifications: ['IS 15477:2019 Type 1 to 4', 'EN 12004 C2TE S1', 'Zero VOC Certified'],
      metrics: [
        { label: 'Tensile Adhesion', value: '> 2.5 N/mm²' },
        { label: 'Slip Resistance', value: '< 0.2 mm' },
        { label: 'Open Time', value: '30 - 35 Mins' },
        { label: 'Bed Thickness', value: '3 - 12 mm' }
      ],
      applications: ['Large Format Vitrified (>1.2m)', 'External Stone Cladding', 'Subway & Metro Walls', 'Elevated Swimming Pools']
    },
    {
      id: 'waterproofing',
      categoryKey: 'waterproofing',
      number: '02',
      name: 'Advanced Waterproofing',
      shortTag: 'Elastomeric & Crystalline Barriers',
      icon: <Droplets size={20} />,
      tagline: 'Permanent Hydraulic & Negative Pressure Defense',
      description: 'High-build elastomeric acrylics and reactive crystalline chemical systems. Penetrates deep into concrete capillaries to create insoluble crystal barriers against continuous hydrostatic pressure.',
      certifications: ['IS 2645:2003', 'ASTM C1305 Crack Bridging', 'Potable Water Safe'],
      metrics: [
        { label: 'Elongation at Break', value: '> 300%' },
        { label: 'Hydrostatic Resistance', value: 'Up to 5 Bar' },
        { label: 'Crack Bridging', value: 'Up to 2.2 mm' },
        { label: 'Dry Film Thickness', value: '1.2 - 1.5 mm' }
      ],
      applications: ['Basement Retaining Walls', 'Podiums & Terrace Gardens', 'Wet Areas & Sunken Slabs', 'Water Reservoirs & Tanks']
    },
    {
      id: 'epoxy-grouts',
      categoryKey: 'grouts',
      number: '03',
      name: 'Architectural Epoxies & Grouts',
      shortTag: '3K Reactive Resin Systems',
      icon: <Sparkles size={20} />,
      tagline: 'Stain-Proof, Chemical Resistant & 40+ Color Hues',
      description: 'Three-component high-density solvent-free epoxy resin grout formulated with spherical coated quartz. Withstands severe chemical attack, mechanical scouring, and heavy pedestrian traffic.',
      certifications: ['EN 13888 RG Class', 'ISO 13007-3', 'Food Grade Anti-Bacterial'],
      metrics: [
        { label: 'Compressive Strength', value: '> 55 N/mm²' },
        { label: 'Water Absorption', value: 'Zero (0.00%)' },
        { label: 'Chemical Resistance', value: 'Acids, Alkalis & Oils' },
        { label: 'Color Retention', value: 'UV Stable Non-Yellowing' }
      ],
      applications: ['Commercial Kitchens & Breweries', 'Swimming Pools & Spas', 'Hospitals & Cleanrooms', 'Luxury Living & Bathrooms']
    },
    {
      id: 'repairs',
      categoryKey: 'repairs',
      number: '04',
      name: 'Structural Repair & Mortars',
      shortTag: 'High-Strength Non-Shrink Formulations',
      icon: <Hammer size={20} />,
      tagline: 'Restoring Load-Bearing Structural Integrity',
      description: 'Fibre-reinforced cementitious micro-concretes, polymer modification modifiers, and zinc-rich rebar primers for structural retrofitting and seismic rehabilitation of aged RCC infrastructure.',
      certifications: ['EN 1504-3 Class R4', 'ASTM C109', 'Non-Shrink Compensated'],
      metrics: [
        { label: '28-Day Strength', value: '> 60 N/mm²' },
        { label: 'Bond to Concrete', value: '> 2.0 N/mm²' },
        { label: 'Modulus of Elasticity', value: '> 25 GPa' },
        { label: 'Chloride Permeability', value: 'Very Low (<1000 C)' }
      ],
      applications: ['RCC Column Jacketing', 'Spalled Slab Restoration', 'Industrial Flooring Overlays', 'Marine Structure Repair']
    },
    {
      id: 'precast-admixtures',
      categoryKey: 'precast',
      number: '05',
      name: 'Admixtures & Precast Additives',
      shortTag: 'Polycarboxylate Ether (PCE) Synthetics',
      icon: <FlaskConical size={20} />,
      tagline: 'Ultra-High Early Strength & Extreme Flowability',
      description: 'Advanced 3rd generation PCE polymers, accelerating chemical plasticizers, and shutter release emulsions engineered for rapid cycle precast segment casting and self-compacting concrete.',
      certifications: ['IS 9103:1999', 'ASTM C494 Type F & G', 'EN 934-2'],
      metrics: [
        { label: 'Water Reduction', value: 'Up to 35%' },
        { label: 'Early Stripping Time', value: '8 - 10 Hours' },
        { label: 'Flowability (Slump)', value: '> 650 mm (SCC)' },
        { label: 'Chloride Content', value: '< 0.02% (Nil)' }
      ],
      applications: ['Metro Viaduct Precast Segments', 'Ready-Mix Concrete (RMC)', 'Self-Compacting Concrete', 'Tunnel Lining Segments']
    }
  ];

  const currentDiv = divisions[activeDivision];
  const divisionProducts = PRODUCTS.filter(p => p.category === currentDiv.categoryKey).slice(0, 3);

  // Fallback if specific category has fewer products
  const displayProducts = divisionProducts.length > 0 ? divisionProducts : PRODUCTS.slice(0, 3);

  return (
    <section className="vura-range-showcase-section" id="product-range" aria-label="Our Product Range">
      
      {/* Background Architectural Glow & Ambient Lines */}
      <div className="vura-range-ambient-grid" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="vura-container">
        
        {/* Section Header */}
        <div className="vura-range-header-block">
          <div className="vura-range-header-badge">
            <span className="vura-range-badge-dot" />
            <span>WHAT WE OFFER • HYBEQ SPECIALTY FORMULATIONS</span>
          </div>
          
          <h2 className="vura-range-headline">
            Our Product Range
          </h2>
          
          <p className="vura-range-subhead">
            German polymer technology tailored for landmark infrastructure, luxury hospitality, and high-durability residential construction across India.
          </p>
        </div>

        {/* Division Selector Tabs */}
        <div className="vura-range-tab-bar" role="tablist" aria-label="Product Divisions">
          {divisions.map((div, idx) => (
            <button
              key={div.id}
              type="button"
              role="tab"
              aria-selected={idx === activeDivision}
              className={`vura-range-tab-btn ${idx === activeDivision ? 'active' : ''}`}
              onClick={() => setActiveDivision(idx)}
            >
              <span className="vura-range-tab-num">{div.number}</span>
              <span className="vura-range-tab-title">{div.name}</span>
              <span className="vura-range-tab-bar-indicator" />
            </button>
          ))}
        </div>

        {/* Interactive Division Stage */}
        <div className="vura-range-stage-card">
          
          {/* Left Column: Chemical Formulation Anatomy */}
          <div className="vura-range-stage-info">
            <div className="vura-range-stage-pill">
              {currentDiv.icon}
              <span>{currentDiv.shortTag}</span>
            </div>

            <h3 className="vura-range-stage-title">
              {currentDiv.name}
            </h3>

            <p className="vura-range-stage-tagline">
              {currentDiv.tagline}
            </p>

            <p className="vura-range-stage-desc">
              {currentDiv.description}
            </p>

            {/* Certifications & Standards */}
            <div className="vura-range-cert-row">
              {currentDiv.certifications.map((cert, cIdx) => (
                <span key={cIdx} className="vura-range-cert-tag">
                  <ShieldCheck size={14} className="vura-range-cert-icon" />
                  <span>{cert}</span>
                </span>
              ))}
            </div>

            {/* Technical Performance Grid */}
            <div className="vura-range-metrics-grid">
              {currentDiv.metrics.map((m, mIdx) => (
                <div key={mIdx} className="vura-range-metric-item">
                  <span className="vura-range-metric-val">{m.value}</span>
                  <span className="vura-range-metric-lbl">{m.label}</span>
                </div>
              ))}
            </div>

            {/* Substrates & Target Applications */}
            <div className="vura-range-apps-block">
              <span className="vura-range-apps-title">Engineered For:</span>
              <div className="vura-range-apps-chips">
                {currentDiv.applications.map((app, aIdx) => (
                  <span key={aIdx} className="vura-range-app-chip">
                    <CheckCircle2 size={13} />
                    <span>{app}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="vura-range-cta-row">
              <button
                type="button"
                className="vura-range-primary-btn"
                onClick={() => onOpenEnquiry && onOpenEnquiry(`HYBEQ ${currentDiv.name}`)}
              >
                <span>Request Division Specs &amp; Quote</span>
                <ArrowRight size={16} />
              </button>

              <Link to="/downloads" className="vura-range-secondary-btn">
                <FileText size={16} />
                <span>Technical Data Sheets (TDS)</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Featured Products Deck */}
          <div className="vura-range-stage-products">
            <div className="vura-range-products-label-row">
              <span className="vura-range-prods-title">Flagship Formulations</span>
              <Link to="/products" className="vura-range-view-all-link">
                <span>View Full Catalog</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="vura-range-cards-deck">
              {displayProducts.map((p) => (
                <div key={p.id} className="vura-range-prod-card">
                  <div className="vura-range-prod-img-box">
                    <img
                      src={getProductImage(p)}
                      alt={p.name}
                      className="vura-range-prod-img"
                      loading="lazy"
                    />
                  </div>

                  <div className="vura-range-prod-body">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '4px' }}>
                      <span className="vura-range-prod-pkg">{p.packaging}</span>
                      {p.badge && <span className="vura-range-prod-badge">{p.badge}</span>}
                    </div>
                    <h4 className="vura-range-prod-name">{p.name}</h4>
                    <p className="vura-range-prod-desc">{p.shortDesc}</p>

                    <div className="vura-range-prod-footer">
                      <span className="vura-range-prod-std">{p.standards.split(',')[0]}</span>
                      <button
                        type="button"
                        className="vura-range-prod-inquire-btn"
                        onClick={() => onOpenEnquiry && onOpenEnquiry(p.name)}
                        title={`Inquire about ${p.name}`}
                      >
                        <span>Inquire</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Custom Formulation Strip */}
        <div className="vura-range-bottom-callout">
          <div className="vura-range-callout-content">
            <Building2 size={24} className="vura-range-callout-icon" />
            <div>
              <h4 className="vura-range-callout-title">Need Custom Project Formulations?</h4>
              <p className="vura-range-callout-text">
                Our in-house R&amp;D technical centre develops tailored polymer formulations for specialized infrastructure, high-rise wind loads, and industrial chemical plants.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="vura-range-callout-btn"
            onClick={() => onOpenEnquiry && onOpenEnquiry('Custom Project Chemistry Consultation')}
          >
            <span>Consult Chemistry Lab</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </section>
  );
};
