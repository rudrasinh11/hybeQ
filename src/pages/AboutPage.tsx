import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowUpRight, Target, Compass, Eye, Factory } from 'lucide-react';

interface AboutPageProps {
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section style={{ background: '#0A2362', color: '#FFFFFF', padding: '80px 0 60px', position: 'relative' }}>
        <div className="container">
          <span className="section-tag on-dark" style={{ marginBottom: 12 }}>Corporate Heritage</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#FFFFFF', fontWeight: 900, marginBottom: 16 }}>
            Engineering Longevity Since 2008
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', maxWidth: 760, lineHeight: 1.6 }}>
            Hybeq Chemicals India Pvt. Ltd. was founded with a singular conviction: to replace unreliable site-mixed mortar with precision-engineered, German-polymer modified construction chemicals.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section style={{ padding: 'clamp(40px, 6vw, 80px) 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="about-narrative-grid">
            <div>
              <span className="section-tag">Our Proven Track Record</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: '#0A2362', fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
                Formulating Trust Across 500+ Landmark Indian Infrastructure Projects
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.7, marginBottom: 16 }}>
                Headquartered in Surat, Gujarat, Hybeq operates automated dry-mix and polymer emulsion manufacturing plants serving the subcontinent's most demanding engineering projects — from metro rail stations and international airports to high-rise coastal residential towers.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.7, marginBottom: 28 }}>
                Every formulation is developed in close partnership with European polymer chemistry pioneers. We synthesize adhesives capable of absorbing structural thermal movement and seismic deflection without debonding or micro-cracking.
              </p>

              <div className="about-stats-grid">
                <div style={{ background: '#F5F7FB', padding: 20, borderRadius: 12, border: '1px solid #DFE6EF' }}>
                  <Award size={28} style={{ color: '#46C985', marginBottom: 8 }} />
                  <h4 style={{ fontSize: '1.05rem', color: '#0A2362', fontWeight: 800 }}>IS 15477:2019 Certified</h4>
                  <p style={{ fontSize: '0.8125rem', color: '#64748B', margin: '4px 0 0' }}>Exceeds Type 1, 2, 3, 4 S1/S2 tensile adhesion benchmarks.</p>
                </div>

                <div style={{ background: '#F5F7FB', padding: 20, borderRadius: 12, border: '1px solid #DFE6EF' }}>
                  <Factory size={28} style={{ color: '#46C985', marginBottom: 8 }} />
                  <h4 style={{ fontSize: '1.05rem', color: '#0A2362', fontWeight: 800 }}>24,000 MT Annual Output</h4>
                  <p style={{ fontSize: '0.8125rem', color: '#64748B', margin: '4px 0 0' }}>Fully computerized batching towers with zero contamination.</p>
                </div>
              </div>
            </div>

            {/* Visual Milestones Box */}
            <div style={{
              background: 'linear-gradient(135deg, #0A2362 0%, #071A45 100%)',
              borderRadius: 20,
              padding: 'clamp(24px, 4vw, 40px)',
              color: '#FFFFFF',
              boxShadow: '0 20px 50px rgba(10,35,98,0.2)'
            }}>
              <h3 style={{ fontSize: '1.4rem', color: '#46C985', fontWeight: 900, marginBottom: 24, textTransform: 'uppercase', letterSpacing: 1.5 }}>
                Key Historical Milestones
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24, borderLeft: '2px solid rgba(70,201,133,0.3)', paddingLeft: 24 }}>
                <div>
                  <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#46C985' }}>2008</span>
                  <strong style={{ display: 'block', fontSize: '0.9375rem', color: '#FFFFFF', marginTop: 2 }}>Foundation &amp; First Tile Adhesive Line</strong>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)', margin: '4px 0 0' }}>Established initial dry-mix blending plant in Surat, introducing polymer adhesives to Western India.</p>
                </div>

                <div>
                  <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#46C985' }}>2014</span>
                  <strong style={{ display: 'block', fontSize: '0.9375rem', color: '#FFFFFF', marginTop: 2 }}>R&amp;D Polymer Testing Laboratory</strong>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)', margin: '4px 0 0' }}>Commissioned comprehensive in-house testing facility for EN 12004 compliance and tensile shear pull-off rigs.</p>
                </div>

                <div>
                  <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#46C985' }}>2019</span>
                  <strong style={{ display: 'block', fontSize: '0.9375rem', color: '#FFFFFF', marginTop: 2 }}>Elastomeric Waterproofing Expansion</strong>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)', margin: '4px 0 0' }}>Launched Hy Dampproof Ultra and crystalline waterproofing technologies for deep basements.</p>
                </div>

                <div>
                  <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#46C985' }}>2026</span>
                  <strong style={{ display: 'block', fontSize: '0.9375rem', color: '#FFFFFF', marginTop: 2 }}>Automated High-Capacity Tower</strong>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)', margin: '4px 0 0' }}>Upgraded to 24,000 MT/year continuous mixing capacity with nationwide distribution depots.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars Deep Dive */}
      <section style={{ padding: 'clamp(40px, 6vw, 80px) 0', background: '#071A45', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 48px' }}>
            <span className="section-tag on-dark">Core Ethos</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#FFFFFF', fontWeight: 900 }}>
              The Hybeq Triad: Principle, Mission, Vision
            </h2>
          </div>

          <div className="about-triad-grid">
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: 32, borderRadius: 16 }}>
              <Compass size={36} style={{ color: '#46C985', marginBottom: 16 }} />
              <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', fontWeight: 800, marginBottom: 12 }}>Our Principle</h3>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
                Total transparency in chemical formulations. We clearly document polymer content percentages and never dilute our dry-mix matrices with inert lime or low-density fillers.
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: 32, borderRadius: 16 }}>
              <Target size={36} style={{ color: '#46C985', marginBottom: 16 }} />
              <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', fontWeight: 800, marginBottom: 12 }}>Our Mission</h3>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
                To empower contractors, structural engineers, and applicators with zero-failure construction chemicals, eliminating water ingress and ensuring permanent tile adhesion.
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: 32, borderRadius: 16 }}>
              <Eye size={36} style={{ color: '#46C985', marginBottom: 16 }} />
              <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', fontWeight: 800, marginBottom: 12 }}>Our Vision</h3>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
                To establish Hybeq as the subcontinent's foremost benchmark for sustainable, zero-VOC construction chemistry, safeguarding national infrastructure against extreme weather.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section style={{ padding: '60px 0', background: '#F5F7FB', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', color: '#0A2362', fontWeight: 900, marginBottom: 12 }}>
            Ready to Engineer Permanent Structural Solutions?
          </h2>
          <p style={{ fontSize: '1rem', color: '#64748B', maxWidth: 600, margin: '0 auto 24px' }}>
            Our technical support team conducts on-site adhesion tests and assists project engineers with custom specification sheets.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <button type="button" className="btn btn-primary" onClick={onOpenEnquiry}>
              BUSINESS ENQUIRY <ArrowUpRight size={16} />
            </button>
            <Link to="/products" className="btn btn-outline">
              EXPLORE OUR PRODUCTS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
