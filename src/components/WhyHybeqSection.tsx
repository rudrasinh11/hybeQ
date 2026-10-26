import React from 'react';
import { ArrowUpRight, FlaskConical, ShieldCheck, SunMedium, HardHat, Check } from 'lucide-react';

interface WhyHybeqSectionProps {
  onOpenEnquiry?: () => void;
}

export const WhyHybeqSection: React.FC<WhyHybeqSectionProps> = ({
  onOpenEnquiry
}) => {
  const pillars = [
    {
      id: 'polymers',
      icon: FlaskConical,
      title: '100% Virgin European Polymer Resins',
      desc: 'We never dilute formulations with cheap calcium carbonate fillers. Every batch contains virgin redispersible polymers sourced from European synthesizers to deliver genuine shear adhesion exceeding 1.85 N/mm².',
      proof: 'Zero filler dilution • High shear bond strength',
      stat: '100%',
      statLabel: 'Virgin Resins'
    },
    {
      id: 'testing',
      icon: ShieldCheck,
      title: 'ISO 9001:2015 & Lab-Tested Quality Control',
      desc: 'Every production lot is subjected to comprehensive tensile pull-off, open-time verification, and flexural testing in our in-house materials lab. Batch Test Certificates (MTC) accompany every industrial delivery.',
      proof: 'Batch-traceable test reports with every shipment',
      stat: 'ISO 9001',
      statLabel: 'Certified QA'
    },
    {
      id: 'climate',
      icon: SunMedium,
      title: 'Formulated for Severe Indian Climatic Extremes',
      desc: 'Engineered specifically for extreme temperature differentials (5°C to 48°C), torrential monsoon moisture loads, and subterranean hydrostatic pressure that degrade ordinary off-the-shelf adhesives.',
      proof: 'Thermal shock cycle tested for exterior facades',
      stat: '5°C–48°C',
      statLabel: 'Thermal Range'
    },
    {
      id: 'support',
      icon: HardHat,
      title: 'On-Site Technical Audits & Applicator Training',
      desc: 'Our dedicated civil engineers provide pre-application substrate moisture testing, pull-off adhesion verification, and certified applicator training directly on your project site to prevent post-handover failures.',
      proof: 'Field civil engineers available for project audits',
      stat: 'On-Site',
      statLabel: 'Civil Audits'
    }
  ];

  return (
    <section className="hybeq-why-section" id="why-hybeq" aria-label="Why Choose HYBEQ">
      <div className="hybeq-why-container">
        
        {/* Top Header — Resido Reference */}
        <div className="hybeq-why-header">
          <div className="hybeq-section-badge">
            <span>ENGINEERING DIFFERENTIATION</span>
          </div>
          <h2 className="hybeq-why-title">
            Engineered for Zero Failure in Critical Civil Infrastructure
          </h2>
          <p className="hybeq-why-subtitle">
            Most tile debonding and water leaks occur because off-the-shelf products are diluted with low-grade fillers. HYBEQ builds long-lasting civil protection through pure polymer chemistry, strict lab testing, and direct on-site engineering support.
          </p>
        </div>

        {/* Resido Composition: Asymmetrical Split Layout with Anchor Visual & Structured Feature Grid */}
        <div className="hybeq-why-layout">
          
          {/* Left: Plant & Laboratory Showcase Card */}
          <div className="hybeq-why-anchor-card">
            <div className="hybeq-why-media">
              <img
                src="/images/plant-blending-tower.jpg"
                alt="HYBEQ Fully Automated Blending Facility"
                className="hybeq-why-img"
                loading="lazy"
              />
              <div className="hybeq-why-img-overlay" />
              
              {/* Floating Engineering Badge */}
              <div className="hybeq-why-plant-badge">
                <span className="hybeq-plant-icon" />
                <div>
                  <strong>Automated Dry-Mix Facility</strong>
                  <span>Sanand Industrial Estate, Gujarat</span>
                </div>
              </div>
            </div>

            <div className="hybeq-why-anchor-content">
              <h3 className="hybeq-anchor-heading">
                Precision Automation Eliminates Human Batching Error
              </h3>
              <p className="hybeq-anchor-text">
                Computerized pneumatic weighing and high-shear dispersion ensure uniform polymer distribution across every single kilogram of mortar produced.
              </p>

              <div className="hybeq-anchor-metrics">
                <div className="hybeq-metric-box">
                  <span className="hybeq-metric-num">&gt; 1.85 N/mm²</span>
                  <span className="hybeq-metric-txt">Tensile Adhesion</span>
                </div>
                <div className="hybeq-metric-box">
                  <span className="hybeq-metric-num">Zero</span>
                  <span className="hybeq-metric-txt">Vertical Slip</span>
                </div>
                <div className="hybeq-metric-box">
                  <span className="hybeq-metric-num">50+ Years</span>
                  <span className="hybeq-metric-txt">Design Life</span>
                </div>
              </div>

              <div className="hybeq-anchor-actions">
                <button
                  type="button"
                  className="hybeq-btn hybeq-btn-primary"
                  onClick={onOpenEnquiry}
                  aria-label="Request Technical Support or Site Audit"
                >
                  <span>Request Project Technical Audit</span>
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: 4 Structured Value Proposition Pillars */}
          <div className="hybeq-why-pillars-grid">
            {pillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div key={pillar.id} className="hybeq-why-card">
                  <div className="hybeq-why-card-top">
                    <div className="hybeq-why-icon-box">
                      <IconComponent size={22} />
                    </div>
                    <div className="hybeq-why-stat-badge">
                      <strong>{pillar.stat}</strong>
                      <span>{pillar.statLabel}</span>
                    </div>
                  </div>

                  <h3 className="hybeq-why-card-title">{pillar.title}</h3>
                  <p className="hybeq-why-card-desc">{pillar.desc}</p>

                  <div className="hybeq-why-card-proof">
                    <Check size={14} className="hybeq-proof-check" />
                    <span>{pillar.proof}</span>
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
