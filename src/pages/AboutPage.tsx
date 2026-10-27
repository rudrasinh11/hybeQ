import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Award, 
  ArrowUpRight, 
  Target, 
  Compass, 
  Eye, 
  Factory, 
  CheckCircle2, 
  Cpu, 
  Microscope, 
  Layers, 
  ShieldCheck,
  Building2
} from 'lucide-react';

interface AboutPageProps {
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="about-page">
      {/* Page Header */}
      <section style={{ background: '#0A2362', color: '#FFFFFF', padding: '84px 0 64px', position: 'relative' }}>
        <div className="container">
          <span className="section-tag on-dark" style={{ marginBottom: 12 }}>Corporate Heritage &amp; Industrial Excellence</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#FFFFFF', fontWeight: 900, marginBottom: 16 }}>
            Engineering Longevity Since 2008
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', maxWidth: 780, lineHeight: 1.6 }}>
            Hybeq (by Chemax Chemical) was founded with a singular conviction: to replace erratic site-mixed mortar with precision-engineered, European polymer-modified construction chemicals engineered for extreme structural durability.
          </p>

          {/* Quick Anchor Navigation Strip */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 28 }}>
            {[
              { id: 'story', label: '1. Story' },
              { id: 'principle', label: '2. Principle' },
              { id: 'mission', label: '3. Mission' },
              { id: 'vision', label: '4. Vision' },
              { id: 'infrastructure', label: '5. Infrastructure' }
            ].map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  color: '#FFFFFF',
                  padding: '6px 14px',
                  borderRadius: 6,
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'background 0.2s'
                }}
              >
                {sec.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1: STORY */}
      <section id="story" style={{ padding: 'clamp(50px, 7vw, 90px) 0', background: '#FFFFFF', scrollMarginTop: '80px' }}>
        <div className="container">
          <div className="about-narrative-grid">
            <div>
              <span className="section-tag">Our Story</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#0A2362', fontWeight: 900, lineHeight: 1.25, marginBottom: 20 }}>
                From Regional Pioneering to India's Foremost Infrastructure Formulator
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.7, marginBottom: 16 }}>
                Headquartered in Surat, Gujarat, HYBEQ by Chemax has spearheaded industrial construction chemicals across Western India for over 18 years. We identified a critical failure point in traditional construction: uncontrolled water-cement ratios and inadequate polymer dispersion leading to debonded vitrified facades and persistent basement leaks.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.7, marginBottom: 28 }}>
                To solve this, we partnered directly with European polymer pioneers to synthesize factory-controlled, pre-mixed dry mortared matrices. Today, HYBEQ formulations protect nuclear power stations, metro transit tunnels, high-speed rail viaducts, and landmark commercial skyscrapers across India.
              </p>

              <div className="about-stats-grid">
                <div style={{ background: '#F5F7FB', padding: 22, borderRadius: 12, border: '1.5px solid #DFE6EF' }}>
                  <Award size={28} style={{ color: '#1E9B5A', marginBottom: 8 }} />
                  <h4 style={{ fontSize: '1.05rem', color: '#0A2362', fontWeight: 800 }}>IS 15477:2019 Certified</h4>
                  <p style={{ fontSize: '0.8125rem', color: '#64748B', margin: '4px 0 0' }}>Exceeds Type 1, 2, 3, 4 S1/S2 tensile adhesion benchmarks.</p>
                </div>

                <div style={{ background: '#F5F7FB', padding: 22, borderRadius: 12, border: '1.5px solid #DFE6EF' }}>
                  <Building2 size={28} style={{ color: '#1E9B5A', marginBottom: 8 }} />
                  <h4 style={{ fontSize: '1.05rem', color: '#0A2362', fontWeight: 800 }}>500+ Landmark Projects</h4>
                  <p style={{ fontSize: '0.8125rem', color: '#64748B', margin: '4px 0 0' }}>Approved by Adani, Surat Metro, PSP Projects &amp; AMC.</p>
                </div>
              </div>
            </div>

            {/* Visual Milestones Timeline */}
            <div style={{
              background: 'linear-gradient(135deg, #0A2362 0%, #071A45 100%)',
              borderRadius: 20,
              padding: 'clamp(28px, 4vw, 44px)',
              color: '#FFFFFF',
              boxShadow: '0 20px 50px rgba(10,35,98,0.2)'
            }}>
              <h3 style={{ fontSize: '1.35rem', color: '#1E9B5A', fontWeight: 900, marginBottom: 24, textTransform: 'uppercase', letterSpacing: 1.5 }}>
                Key Historical Milestones
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 26, borderLeft: '2px solid rgba(30,155,90,0.4)', paddingLeft: 24 }}>
                <div>
                  <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1E9B5A' }}>2008</span>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: '#FFFFFF', marginTop: 2 }}>Foundation &amp; First Tile Adhesive Line</strong>
                  <p style={{ fontSize: '0.825rem', color: 'rgba(255,255,255,0.75)', margin: '4px 0 0', lineHeight: 1.5 }}>Established the initial automated dry-mix blending plant in Surat, introducing polymer adhesives to Western India.</p>
                </div>

                <div>
                  <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1E9B5A' }}>2014</span>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: '#FFFFFF', marginTop: 2 }}>R&amp;D Polymer Testing Laboratory</strong>
                  <p style={{ fontSize: '0.825rem', color: 'rgba(255,255,255,0.75)', margin: '4px 0 0', lineHeight: 1.5 }}>Commissioned comprehensive in-house testing facility for EN 12004 compliance and tensile shear pull-off rigs.</p>
                </div>

                <div>
                  <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1E9B5A' }}>2019</span>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: '#FFFFFF', marginTop: 2 }}>Elastomeric Waterproofing Expansion</strong>
                  <p style={{ fontSize: '0.825rem', color: 'rgba(255,255,255,0.75)', margin: '4px 0 0', lineHeight: 1.5 }}>Launched Hy Dampproof Ultra and crystalline waterproofing technologies for deep basements and hydraulic tanks.</p>
                </div>

                <div>
                  <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1E9B5A' }}>2026</span>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: '#FFFFFF', marginTop: 2 }}>Automated High-Capacity Tower</strong>
                  <p style={{ fontSize: '0.825rem', color: 'rgba(255,255,255,0.75)', margin: '4px 0 0', lineHeight: 1.5 }}>Upgraded to 24,000 MT/year continuous mixing capacity with nationwide distribution depots.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRINCIPLE */}
      <section id="principle" style={{ padding: 'clamp(50px, 6vw, 80px) 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', scrollMarginTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center', marginBottom: 44 }}>
            <span className="section-tag">Scientific Integrity</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: '#0A2362', fontWeight: 900 }}>
              Our Guiding Principle: Uncompromised Polymer Purity
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.6, marginTop: 12 }}>
              In an industry plagued by cost-cutting fillers and reduced active solid contents, HYBEQ stands unconditionally on complete chemical transparency.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            <div style={{ background: '#FFFFFF', padding: 32, borderRadius: 16, border: '1.5px solid #DFE6EF', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 10, background: 'rgba(10,35,98,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <Compass size={26} style={{ color: '#0A2362' }} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#0A2362', fontWeight: 800, marginBottom: 10 }}>Zero Filler Dilution</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6 }}>
                We never dilute dry mortars with dead lime or pulverized limestone waste. Every kilogram consists of graded quartz silica, virgin OPC 53 cement, and European redispersible polymer powder (RDP).
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: 32, borderRadius: 16, border: '1.5px solid #DFE6EF', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 10, background: 'rgba(30,155,90,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <ShieldCheck size={26} style={{ color: '#1E9B5A' }} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#0A2362', fontWeight: 800, marginBottom: 10 }}>Batch-Wise Traceability</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6 }}>
                Every single pallet shipped carries a unique QR-coded batch number directly tied to our laboratory shear tests and retention sample registry kept for 36 months.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: 32, borderRadius: 16, border: '1.5px solid #DFE6EF', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 10, background: 'rgba(10,35,98,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <Microscope size={26} style={{ color: '#0A2362' }} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#0A2362', fontWeight: 800, marginBottom: 10 }}>Substrate Compatibility Guarantee</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6 }}>
                We do not sell one generic adhesive for everything. Formulations are custom-matched to substrate porosity, tile format dimensions, and environmental shear stresses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4: MISSION & VISION */}
      <section style={{ padding: 'clamp(50px, 7vw, 90px) 0', background: '#071A45', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 48px' }}>
            <span className="section-tag on-dark">Purpose &amp; Direction</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#FFFFFF', fontWeight: 900 }}>
              Our Driving Purpose
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {/* MISSION */}
            <div id="mission" style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.12)', padding: 36, borderRadius: 18, scrollMarginTop: '80px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: 'rgba(30,155,90,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Target size={26} style={{ color: '#1E9B5A' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', fontWeight: 800 }}>Our Mission</h3>
              </div>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: 18 }}>
                To empower civil contractors, structural engineers, and master applicators with certified, zero-defect construction chemicals that permanently resolve water penetration, substrate cracking, and tile debonding.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Deliver zero-failure structural repair systems across high-load infra', 'Provide direct site inspection & pull-off testing for tender specs', 'Foster applicator skills through regional training certification academies'].map((pt, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)' }}>
                    <CheckCircle2 size={16} style={{ color: '#1E9B5A', flexShrink: 0, marginTop: 3 }} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* VISION */}
            <div id="vision" style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.12)', padding: 36, borderRadius: 18, scrollMarginTop: '80px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: 'rgba(30,155,90,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Eye size={26} style={{ color: '#1E9B5A' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', fontWeight: 800 }}>Our Vision</h3>
              </div>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: 18 }}>
                To establish HYBEQ as the subcontinent's most trusted and technologically advanced chemical benchmark for sustainable, zero-VOC, resilient construction materials safeguarding national capital assets for centuries.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Achieve 100% low-VOC and green-building compliant product lines', 'Expand pan-India automated blending hubs to service projects within 24 hours', 'Lead technical standardisation alongside BIS and European EN standards committees'].map((pt, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)' }}>
                    <CheckCircle2 size={16} style={{ color: '#1E9B5A', flexShrink: 0, marginTop: 3 }} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: INFRASTRUCTURE */}
      <section id="infrastructure" style={{ padding: 'clamp(50px, 7vw, 90px) 0', background: '#FFFFFF', scrollMarginTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center', marginBottom: 48 }}>
            <span className="section-tag">Manufacturing Might</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#0A2362', fontWeight: 900 }}>
              Advanced Manufacturing Plant &amp; Testing Infrastructure
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.6, marginTop: 12 }}>
              Located in the industrial heart of Gujarat, our computerized production towers and analytical laboratories operate 24/7 to guarantee chemical consistency from the first bag to the 50,000th bag.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 40 }}>
            <div style={{ background: '#F5F7FB', padding: 28, borderRadius: 14, border: '1.5px solid #DFE6EF' }}>
              <Factory size={32} style={{ color: '#0A2362', marginBottom: 14 }} />
              <h4 style={{ fontSize: '1.15rem', color: '#0A2362', fontWeight: 800 }}>24,000 MT Annual Capacity</h4>
              <p style={{ fontSize: '0.875rem', color: '#64748B', marginTop: 6, lineHeight: 1.5 }}>
                Automated continuous pneumatic mixing towers eliminate human batching variances and guarantee homogeneous additive dispersion.
              </p>
            </div>

            <div style={{ background: '#F5F7FB', padding: 28, borderRadius: 14, border: '1.5px solid #DFE6EF' }}>
              <Cpu size={32} style={{ color: '#0A2362', marginBottom: 14 }} />
              <h4 style={{ fontSize: '1.15rem', color: '#0A2362', fontWeight: 800 }}>PLC Computerized Batching</h4>
              <p style={{ fontSize: '0.875rem', color: '#64748B', marginTop: 6, lineHeight: 1.5 }}>
                High-precision load cells measure every raw material fraction to within ±0.05% tolerance for uncompromising consistency.
              </p>
            </div>

            <div style={{ background: '#F5F7FB', padding: 28, borderRadius: 14, border: '1.5px solid #DFE6EF' }}>
              <Layers size={32} style={{ color: '#0A2362', marginBottom: 14 }} />
              <h4 style={{ fontSize: '1.15rem', color: '#0A2362', fontWeight: 800 }}>Hydrostatic Pressure Rigs</h4>
              <p style={{ fontSize: '0.875rem', color: '#64748B', marginTop: 6, lineHeight: 1.5 }}>
                Custom chamber testing evaluates waterproofing membranes and crystalline mortars against water heads exceeding 12 bar (120 meters).
              </p>
            </div>

            <div style={{ background: '#F5F7FB', padding: 28, borderRadius: 14, border: '1.5px solid #DFE6EF' }}>
              <Microscope size={32} style={{ color: '#0A2362', marginBottom: 14 }} />
              <h4 style={{ fontSize: '1.15rem', color: '#0A2362', fontWeight: 800 }}>EN 12004 Tensile Rig</h4>
              <p style={{ fontSize: '0.875rem', color: '#64748B', marginTop: 6, lineHeight: 1.5 }}>
                Calibrated universal testing machine (UTM) confirms initial, water-immersed, heat-aged, and freeze-thaw pull-off bond strengths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section style={{ padding: '60px 0', background: '#F5F7FB', textAlign: 'center', borderTop: '1px solid #DFE6EF' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', color: '#0A2362', fontWeight: 900, marginBottom: 12 }}>
            Ready to Engineer Permanent Structural Solutions?
          </h2>
          <p style={{ fontSize: '1rem', color: '#64748B', maxWidth: 600, margin: '0 auto 24px' }}>
            Our technical support team conducts on-site adhesion tests and assists project engineers with custom specification sheets.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
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

export default AboutPage;
