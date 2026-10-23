import React from 'react';


export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="privacy-policy-page">
      <section style={{ background: '#0A2362', color: '#FFFFFF', padding: '60px 0 40px' }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <span className="section-tag on-dark" style={{ marginBottom: 12 }}>Legal Documentation</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', fontWeight: 900 }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem' }}>
            Effective Date: October 2026 | Hybeq Chemicals India Pvt. Ltd.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0 80px', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: 880, fontSize: '0.9375rem', color: '#26344E', lineHeight: 1.8 }}>
          <h3 style={{ fontSize: '1.25rem', color: '#0A2362', fontWeight: 800, marginTop: 24, marginBottom: 12 }}>
            1. Overview
          </h3>
          <p>
            Hybeq Chemicals India Pvt. Ltd. ("Hybeq", "we", "us", or "our") values the privacy of contractors, civil engineers, architects, applicators, and site representatives who visit our digital platforms. This Privacy Policy outlines our procedures concerning the collection, storage, and handling of technical inquiry data.
          </p>

          <h3 style={{ fontSize: '1.25rem', color: '#0A2362', fontWeight: 800, marginTop: 24, marginBottom: 12 }}>
            2. Data We Collect
          </h3>
          <p>
            When submitting inquiries for commercial quotes, sample requests, or dealer information, we may collect:
          </p>
          <ul style={{ paddingLeft: 20, listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: 6, margin: '12px 0' }}>
            <li>Contact Information: Full name, business email, contact phone number, company name.</li>
            <li>Project Specifications: Construction site city, estimated project square footage, substrate conditions, and products of interest.</li>
            <li>Technical Telemetry: IP address, browser type, and navigation paths across technical data sheet downloads.</li>
          </ul>

          <h3 style={{ fontSize: '1.25rem', color: '#0A2362', fontWeight: 800, marginTop: 24, marginBottom: 12 }}>
            3. How We Use Your Information
          </h3>
          <p>
            The collected information is strictly utilized to:
          </p>
          <ul style={{ paddingLeft: 20, listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: 6, margin: '12px 0' }}>
            <li>Dispatch technical data sheets (TDS), test certificates, and physical material samples.</li>
            <li>Generate custom project cost estimates and consumption matrices.</li>
            <li>Assign a dedicated technical field engineer to assist with on-site pull-off testing.</li>
          </ul>

          <h3 style={{ fontSize: '1.25rem', color: '#0A2362', fontWeight: 800, marginTop: 24, marginBottom: 12 }}>
            4. Contact Us
          </h3>
          <p>
            For privacy inquiries, please contact our Legal &amp; Compliance Desk at Plot No. 124-126, GIDC Sachin, Surat, Gujarat 394230 or via email at <a href="mailto:info@hybeq.com" style={{ color: '#0A2362', fontWeight: 700 }}>info@hybeq.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
};
