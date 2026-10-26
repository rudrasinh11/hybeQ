import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Droplets, Grid, ShieldAlert, Wrench, CheckCircle } from 'lucide-react';

export const WhatWeOfferSection: React.FC = () => {
  const categories = [
    {
      num: '01',
      id: 'waterproofing',
      title: 'Waterproofing Systems & Membranes',
      tagline: 'Impervious Subterranean & Terrace Defense',
      desc: 'Elastomeric 2K acrylic-polyurethane liquid membranes and integral crystalline admixtures engineered for extreme hydrostatic pressure in basements, podium slabs, and overhead water reservoirs.',
      highlights: ['Over 250% Elongation', '7+ Bar Hydrostatic Head', 'UV & Thermal Shock Immune'],
      image: '/images/hero-waterproofing.jpg',
      productThumb: '/images/hybeq_products/hy-dampproof-ultra.png',
      featuredProduct: 'Hy Dampproof Ultra 2K',
      link: '/products/waterproofing',
      icon: Droplets,
      isHero: true
    },
    {
      num: '02',
      id: 'tile-fixing',
      title: 'Tile & Stone Fixing Adhesives',
      tagline: 'IS 15477:2019 Certified Zero-Sag Mortars',
      desc: 'High-polymer thin-set adhesives formulated for jumbo vitrified formats, natural granite, marble, and exterior vertical facade cladding with zero vertical slip.',
      highlights: ['Type 1, 2, 3 & 4 Formulations', 'Tensile Shear >1.85 N/mm²', 'Extended 30-Min Open Time'],
      image: '/images/hero-facade.jpg',
      productThumb: '/images/hybeq_products/hymax-525.png',
      featuredProduct: 'Hymax 525 Structural',
      link: '/products/tile-fixing',
      icon: Grid,
      isHero: false
    },
    {
      num: '03',
      id: 'flooring',
      title: 'Industrial Flooring & Resin Screeds',
      tagline: 'High-Impact, Chemical Resistant Resins',
      desc: '100% solids epoxy screeds and polyurethane self-leveling floor systems designed for sterile pharmaceutical cleanrooms, automotive assembly lines, and heavy-duty warehousing.',
      highlights: ['Compressive Strength >80 MPa', 'Seamless Dust-Free Finish', 'Resistant to Acid & Solvents'],
      image: '/images/hero-flooring.jpg',
      productThumb: '/images/hybeq_products/hy-spot-bond-ep510.png',
      featuredProduct: 'Hy-Spot Bond EP-510',
      link: '/products/precast',
      icon: ShieldAlert,
      isHero: false
    },
    {
      num: '04',
      id: 'repairs',
      title: 'Structural Repair & High-Flow Grouts',
      tagline: 'Non-Shrink Structural Rehabilitation',
      desc: 'Precision micro-concretes, polymer repair mortars, and high-flow non-shrink grouts engineered for structural column jacketing, bridge bearings, and honeycombed concrete restoration.',
      highlights: ['M40 / M70 Grade Compressive Yield', 'Controlled Positive Expansion', 'Chloride-Free Passivating Chemistry'],
      image: '/images/lab-testing-rig.jpg',
      productThumb: '/images/hybeq_products/hy-superconcrete-ls.png',
      featuredProduct: 'Hy Microconcrete M40',
      link: '/products/repairs',
      icon: Wrench,
      isHero: false
    }
  ];

  return (
    <section className="hybeq-offer-section" id="what-we-offer" aria-label="What HYBEQ Offers">
      <div className="hybeq-offer-container">
        
        {/* Section Header: Gridfly Style */}
        <div className="hybeq-offer-header">
          <div className="hybeq-offer-header-left">
            <div className="hybeq-section-badge">
              <span>SPECIALIZED FORMULATIONS</span>
            </div>
            <h2 className="hybeq-offer-heading">
              Four Core Chemical Systems. <br />
              <span className="hybeq-heading-sub">Engineered for Lifelong Civil Durability.</span>
            </h2>
          </div>

          <div className="hybeq-offer-header-right">
            <p className="hybeq-offer-lead">
              Every HYBEQ formulation is synthesized with virgin European polymers and calibrated for severe Indian temperature variations, monsoon deluges, and structural deflections.
            </p>
            <Link to="/products" className="hybeq-link-arrow">
              <span>Browse Complete Chemical Index</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Gridfly Distinctive Category Composition */}
        <div className="hybeq-offer-grid">
          
          {/* Item 1: Wide Featured Category Showcase (Waterproofing) */}
          <div className="hybeq-offer-card hybeq-offer-card-featured">
            <div className="hybeq-featured-media">
              <img
                src={categories[0].image}
                alt={categories[0].title}
                className="hybeq-featured-img"
                loading="lazy"
              />
              <div className="hybeq-featured-overlay" />
              
              <div className="hybeq-featured-product-float">
                <img
                  src={categories[0].productThumb}
                  alt={categories[0].featuredProduct}
                  className="hybeq-float-pack"
                />
                <span className="hybeq-float-label">{categories[0].featuredProduct}</span>
              </div>
            </div>

            <div className="hybeq-featured-content">
              <div className="hybeq-card-top-meta">
                <span className="hybeq-cat-index">{categories[0].num}</span>
                <span className="hybeq-cat-badge">{categories[0].tagline}</span>
              </div>

              <h3 className="hybeq-cat-title">
                <Link to={categories[0].link}>{categories[0].title}</Link>
              </h3>

              <p className="hybeq-cat-desc">{categories[0].desc}</p>

              <div className="hybeq-cat-highlights">
                {categories[0].highlights.map((h, i) => (
                  <div key={i} className="hybeq-highlight-pill">
                    <CheckCircle size={14} className="hybeq-check-icon" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="hybeq-card-footer">
                <Link to={categories[0].link} className="hybeq-btn hybeq-btn-primary">
                  <span>Explore Waterproofing Formulations</span>
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </div>

          {/* Sub-grid: 3 Structured Modular Cards (Tile Fixing, Flooring, Concrete Repair) */}
          <div className="hybeq-offer-subgrid">
            {categories.slice(1).map((cat) => {
              const IconComp = cat.icon;
              return (
                <div key={cat.id} className="hybeq-offer-subcard">
                  <div className="hybeq-subcard-top">
                    <div className="hybeq-subcard-icon-box">
                      <IconComp size={22} />
                    </div>
                    <span className="hybeq-cat-index">{cat.num}</span>
                  </div>

                  <div className="hybeq-subcard-body">
                    <span className="hybeq-subcard-badge">{cat.tagline}</span>
                    <h3 className="hybeq-subcard-title">
                      <Link to={cat.link}>{cat.title}</Link>
                    </h3>
                    <p className="hybeq-subcard-desc">{cat.desc}</p>

                    <div className="hybeq-subcard-points">
                      {cat.highlights.map((pt, pIdx) => (
                        <div key={pIdx} className="hybeq-subcard-point">
                          <span className="hybeq-point-bullet" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="hybeq-subcard-bottom">
                    <div className="hybeq-subcard-pack-preview">
                      <img src={cat.productThumb} alt={cat.featuredProduct} />
                      <span className="hybeq-subcard-pack-name">{cat.featuredProduct}</span>
                    </div>

                    <Link to={cat.link} className="hybeq-subcard-cta" aria-label={`View ${cat.title} Products`}>
                      <span>Explore</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
