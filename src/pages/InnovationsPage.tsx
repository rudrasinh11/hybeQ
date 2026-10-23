import React from 'react';
import { Microscope, ArrowUpRight } from 'lucide-react';

interface InnovationsPageProps {
  onOpenEnquiry: () => void;
}

export const InnovationsPage: React.FC<InnovationsPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="innovations-page">
      {/* Header */}
      <section style={{ background: '#0A2362', color: '#FFFFFF', padding: '70px 0 50px' }}>
        <div className="container">
          <span className="section-tag on-dark" style={{ marginBottom: 12 }}>Research &amp; Polymer Innovation</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', color: '#FFFFFF', fontWeight: 900, marginBottom: 16 }}>
            The Science of Permanence
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: 740, lineHeight: 1.6 }}>
            At our Central Polymer R&amp;D Lab, research chemists simulate decades of weathering, seismic stress, and water pressure to pioneer adhesives with unmatched tensile longevity.
          </p>
        </div>
      </section>

      {/* Lab Highlights */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <span className="section-tag">Laboratory Capabilities</span>
              <h2 style={{ fontSize: '2.2rem', color: '#0A2362', fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
                Accelerated Climatic &amp; Hydrostatic Simulation
              </h2>
              <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.7, marginBottom: 20 }}>
                Standard field conditions in India oscillate from 48°C scorching summers to torrential monsoon deluges. Our testing chambers subject polymer mortar bonds to 500 hours of continuous UV radiation, salt fog spray, and thermal freeze-thaw cycles before commercial release.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ background: '#F5F7FB', padding: '16px 20px', borderRadius: 10, border: '1px solid #DFE6EF' }}>
                  <strong style={{ display: 'block', color: '#0A2362', fontSize: '1rem', marginBottom: 4 }}>
                    Universal Tensile Adhesion Test Rig (EN 12004)
                  </strong>
                  <span style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                    Measures exact pull-off adhesion strength (N/mm²) after standard water immersion, heat aging, and freeze-thaw conditioning.
                  </span>
                </div>

                <div style={{ background: '#F5F7FB', padding: '16px 20px', borderRadius: 10, border: '1px solid #DFE6EF' }}>
                  <strong style={{ display: 'block', color: '#0A2362', fontSize: '1rem', marginBottom: 4 }}>
                    Transverse Deformation Rig (IS 15477 Type 4 S2)
                  </strong>
                  <span style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                    Verifies flexibility of cured adhesive strips, demanding &gt; 5.0 mm deflection without fracture for exterior high-rise cladding.
                  </span>
                </div>

                <div style={{ background: '#F5F7FB', padding: '16px 20px', borderRadius: 10, border: '1px solid #DFE6EF' }}>
                  <strong style={{ display: 'block', color: '#0A2362', fontSize: '1rem', marginBottom: 4 }}>
                    Permeability &amp; 5-Bar Water Pressure Cell
                  </strong>
                  <span style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                    Exposes crystalline coatings to 50 metres of hydrostatic water head to test molecular pore-blocking crystal growth.
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Vector Tech Chamber */}
            <div style={{
              background: 'linear-gradient(135deg, #0A2362 0%, #071A45 100%)',
              borderRadius: 20,
              padding: 40,
              color: '#FFFFFF',
              boxShadow: '0 20px 50px rgba(10,35,98,0.2)'
            }}>
              <Microscope size={44} style={{ color: '#46C985', marginBottom: 20 }} />
              <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', fontWeight: 900, marginBottom: 14 }}>
                Custom Formulations For Mega Projects
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: 24 }}>
                Does your project have unique substrate demands, extreme vibration exposure (metro stations), or aggressive marine saline fog (coastal ports)?
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: 28 }}>
                Our R&amp;D group synthesizes specialized custom polymer blends with tailored open times, thixotropic anti-sag values, and chemical resistance.
              </p>

              <button
                type="button"
                className="btn btn-accent"
                onClick={onOpenEnquiry}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                REQUEST CUSTOM FORMULATION <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
