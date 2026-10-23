import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

interface InfrastructurePageProps {
  onOpenEnquiry: () => void;
}

export const InfrastructurePage: React.FC<InfrastructurePageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="infrastructure-page">
      {/* Header */}
      <section style={{ background: '#0A2362', color: '#FFFFFF', padding: '70px 0 50px' }}>
        <div className="container">
          <span className="section-tag on-dark" style={{ marginBottom: 12 }}>Advanced Manufacturing Infrastructure</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', color: '#FFFFFF', fontWeight: 900, marginBottom: 16 }}>
            Robotic Batching &amp; High-Throughput Blending Towers
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: 740, lineHeight: 1.6 }}>
            Our state-of-the-art facilities in Sachin GIDC and Ankleshwar produce 24,000 MT of certified dry-mix mortars and liquid polymer membranes annually with micro-dosing accuracy.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
            {/* Unit 1: Dry Mix Mortar Plant */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center' }}>
              <div>
                <span className="section-tag">Facility Unit 1 — Sachin GIDC, Surat</span>
                <h2 style={{ fontSize: '2.2rem', color: '#0A2362', fontWeight: 900, lineHeight: 1.2, marginBottom: 18 }}>
                  Continuous Automated Dry-Mix Blending Tower
                </h2>
                <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.7, marginBottom: 20 }}>
                  Equipped with computerized multi-channel pneumatic load cells, our dry-mix facility blends graded washed silica sands, portland cement, and imported German redispersible polymers with ±0.05% weight precision.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: '#0A2362', fontWeight: 600 }}>
                    <CheckCircle2 size={18} style={{ color: '#46C985' }} />
                    <span>24,000 Metric Tonnes annual blending and bagging capacity</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: '#0A2362', fontWeight: 600 }}>
                    <CheckCircle2 size={18} style={{ color: '#46C985' }} />
                    <span>High-speed automated valve-bag packaging with ultrasonic seal</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: '#0A2362', fontWeight: 600 }}>
                    <CheckCircle2 size={18} style={{ color: '#46C985' }} />
                    <span>Multi-cyclone dust extraction systems maintaining zero factory emissions</span>
                  </div>
                </div>
              </div>

              <div style={{
                position: 'relative',
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(10,35,98,0.15)',
                border: '1.5px solid #DFE6EF'
              }}>
                <img
                  src="/images/plant-blending-tower.jpg"
                  alt="Automated Dry-Mix Blending Tower"
                  style={{ width: '100%', height: 340, objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(7,26,69,0.2) 0%, rgba(7,26,69,0.9) 100%)',
                  padding: 28,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  color: '#FFFFFF'
                }}>
                  <span style={{ fontSize: '0.75rem', color: '#46C985', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5 }}>
                    Computerized SCADA Tower
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#FFFFFF', margin: '4px 0 6px' }}>
                    Siemens PLC Batching Accuracy &plusmn;0.05%
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                    Fully automated pneumatic ingredient dispatch with continuous dust collection.
                  </p>
                </div>
              </div>
            </div>

            {/* Unit 2: Liquid Polymers & R&D Center */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48, alignItems: 'center' }}>
              <div style={{
                position: 'relative',
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(10,35,98,0.15)',
                border: '1.5px solid #DFE6EF'
              }}>
                <img
                  src="/images/lab-testing-rig.jpg"
                  alt="Materials Testing Laboratory"
                  style={{ width: '100%', height: 340, objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(7,26,69,0.2) 0%, rgba(7,26,69,0.9) 100%)',
                  padding: 28,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  color: '#FFFFFF'
                }}>
                  <span style={{ fontSize: '0.75rem', color: '#46C985', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5 }}>
                    Materials Testing Lab
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#FFFFFF', margin: '4px 0 6px' }}>
                    Tensile Adhesion &amp; Hydrostatic Pull-Off Rig
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                    100% batch validation exceeding IS 15477 Type 1 to 4 S2 criteria.
                  </p>
                </div>
              </div>

              <div>
                <span className="section-tag">Facility Unit 2 — Ankleshwar Chemical Zone</span>
                <h2 style={{ fontSize: '2.2rem', color: '#0A2362', fontWeight: 900, lineHeight: 1.2, marginBottom: 18 }}>
                  Advanced Polymer &amp; Waterproofing Synthesis
                </h2>
                <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.7, marginBottom: 20 }}>
                  Dedicated to liquid elastomeric waterproofing membranes (Hy Dampproof Ultra), bonding agents (Hybeq SBR), and multi-component epoxy grout chemistry.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: '#0A2362', fontWeight: 600 }}>
                    <CheckCircle2 size={18} style={{ color: '#46C985' }} />
                    <span>Precision temperature-controlled reactor jackets</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: '#0A2362', fontWeight: 600 }}>
                    <CheckCircle2 size={18} style={{ color: '#46C985' }} />
                    <span>Automated nitrogen blanketing for reactive polyurethane resins</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: '#0A2362', fontWeight: 600 }}>
                    <CheckCircle2 size={18} style={{ color: '#46C985' }} />
                    <span>In-line Brookfield viscometer monitoring during synthesis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule a Plant Visit CTA */}
      <section style={{ padding: '60px 0', background: '#071A45', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', color: '#FFFFFF', fontWeight: 900, marginBottom: 12 }}>
            Schedule an Engineering Plant Inspection
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', maxWidth: 640, margin: '0 auto 24px' }}>
            We welcome structural engineering consultants, architects, and institutional client representatives to witness automated batching and tensile pull-off testing firsthand.
          </p>
          <button type="button" className="btn btn-accent" onClick={onOpenEnquiry}>
            ARRANGE PLANT VISIT <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};
