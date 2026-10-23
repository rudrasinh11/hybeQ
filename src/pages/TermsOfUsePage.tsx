import React from 'react';


export const TermsOfUsePage: React.FC = () => {
  return (
    <div className="terms-page">
      <section style={{ background: '#0A2362', color: '#FFFFFF', padding: '60px 0 40px' }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <span className="section-tag on-dark" style={{ marginBottom: 12 }}>Legal Documentation</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', fontWeight: 900 }}>
            Terms of Use &amp; Technical Disclaimers
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem' }}>
            Last Updated: October 2026 | Hybeq Chemicals India Pvt. Ltd.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0 80px', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: 880, fontSize: '0.9375rem', color: '#26344E', lineHeight: 1.8 }}>
          <h3 style={{ fontSize: '1.25rem', color: '#0A2362', fontWeight: 800, marginTop: 24, marginBottom: 12 }}>
            1. Acceptance of Terms
          </h3>
          <p>
            By accessing or using the digital portal of Hybeq Chemicals India Pvt. Ltd., you agree to comply with and be bound by these Terms of Use.
          </p>

          <h3 style={{ fontSize: '1.25rem', color: '#0A2362', fontWeight: 800, marginTop: 24, marginBottom: 12 }}>
            2. Technical Data &amp; Application Guidelines
          </h3>
          <p>
            The technical data, laboratory test results, consumption calculations, and application recommendations provided on this website are based on tests conducted in certified laboratory environments adhering to IS 15477:2019 and EN 12004 standards. Because real-world site conditions, substrate porosity, ambient temperature, humidity, and applicator workmanship vary, users and contractors must conduct independent test patches prior to commencing large-scale installations.
          </p>

          <h3 style={{ fontSize: '1.25rem', color: '#0A2362', fontWeight: 800, marginTop: 24, marginBottom: 12 }}>
            3. Intellectual Property
          </h3>
          <p>
            All product brand names (including Hycera, Hyintra, Hyextra, Hyelite, Hy Dampproof Ultra), logos, technical datasheets, and proprietary content are the exclusive intellectual property of Hybeq Chemicals India Pvt. Ltd.
          </p>
        </div>
      </section>
    </div>
  );
};
