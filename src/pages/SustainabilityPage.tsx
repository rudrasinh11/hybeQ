import React from 'react';
import { Leaf, Sun, Recycle, Droplets, ArrowUpRight } from 'lucide-react';

interface SustainabilityPageProps {
  onOpenEnquiry: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="sustainability-page">
      {/* Header */}
      <section style={{ background: '#0A2362', color: '#FFFFFF', padding: '70px 0 50px' }}>
        <div className="container">
          <span className="section-tag on-dark" style={{ marginBottom: 12 }}>ESG &amp; Green Building</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', color: '#FFFFFF', fontWeight: 900, marginBottom: 16 }}>
            The Hybeq Green Promise
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: 740, lineHeight: 1.6 }}>
            Formulating ultra-low VOC, carbon-reduced construction chemicals certified to IGBC and GRIHA standards to create durable structures with minimal environmental footprints.
          </p>
        </div>
      </section>

      {/* 4 Pillars of Sustainable Chemistry */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            <div style={{ background: '#F5F7FB', border: '1.5px solid #DFE6EF', padding: 32, borderRadius: 16 }}>
              <div style={{ width: 50, height: 50, borderRadius: 12, background: '#EAF8F0', color: '#46C985', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Leaf size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0A2362', fontWeight: 800, marginBottom: 10 }}>Zero-VOC Formulations</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6 }}>
                Our waterborne waterproofing systems and polymer tile adhesives emit less than 5 g/L VOCs, completely eliminating airborne toxins in occupied interior environments.
              </p>
            </div>

            <div style={{ background: '#F5F7FB', border: '1.5px solid #DFE6EF', padding: 32, borderRadius: 16 }}>
              <div style={{ width: 50, height: 50, borderRadius: 12, background: '#EAF8F0', color: '#46C985', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Recycle size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0A2362', fontWeight: 800, marginBottom: 10 }}>Supplementary Cementitious</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6 }}>
                We substitute up to 35% of ordinary Portland cement with micro-silica and industrial slag, drastically reducing the embedded carbon footprint of our mortars.
              </p>
            </div>

            <div style={{ background: '#F5F7FB', border: '1.5px solid #DFE6EF', padding: 32, borderRadius: 16 }}>
              <div style={{ width: 50, height: 50, borderRadius: 12, background: '#EAF8F0', color: '#46C985', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Sun size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0A2362', fontWeight: 800, marginBottom: 10 }}>Solar-Powered Manufacturing</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6 }}>
                Our Surat production facility is powered by a 250 kW rooftop solar array, offsetting over 300 metric tonnes of carbon emissions annually.
              </p>
            </div>

            <div style={{ background: '#F5F7FB', border: '1.5px solid #DFE6EF', padding: 32, borderRadius: 16 }}>
              <div style={{ width: 50, height: 50, borderRadius: 12, background: '#EAF8F0', color: '#46C985', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Droplets size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0A2362', fontWeight: 800, marginBottom: 10 }}>Zero Liquid Discharge (ZLD)</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6 }}>
                All reactor rinse water is treated through multi-stage reverse osmosis and completely recirculated into our polymer synthesis blending vessels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IGBC Compliance Strip */}
      <section style={{ padding: '60px 0', background: '#071A45', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag on-dark">Green Building Credits</span>
          <h2 style={{ fontSize: '2.2rem', color: '#FFFFFF', fontWeight: 900, margin: '16px 0 12px' }}>
            Earn Up to 8 IGBC / LEED Rating Points
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', maxWidth: 640, margin: '0 auto 24px' }}>
            Specifying Hybeq adhesives and waterproofing coatings directly contributes to Low-Emitting Materials and Regional Sourcing credit categories.
          </p>
          <button type="button" className="btn btn-accent" onClick={onOpenEnquiry}>
            REQUEST GREEN CERTIFICATION DATA <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};
