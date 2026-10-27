import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Target, 
  Compass, 
  Eye, 
  Factory, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  Building2, 
  Leaf, 
  Phone, 
  Mail, 
  Clock,
  FlaskConical,
  Truck
} from 'lucide-react';
import { CLIENT_PARTNERS, COMPANY_STATS } from '../data/clientsData';

interface AboutPageProps {
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="about-page">
      {/* 1. HERO / CORPORATE HEADER */}
      <section style={{ background: '#0A2362', color: '#FFFFFF', padding: '70px 0 54px', position: 'relative' }}>
        <div className="container">
          <span className="section-tag on-dark" style={{ marginBottom: 12 }}>Corporate Profile</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', color: '#FFFFFF', fontWeight: 900, marginBottom: 16 }}>
            Engineering Longevity Since 2008
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: 760, lineHeight: 1.6 }}>
            Hybeq by Chemax is an authoritative manufacturer of specialized construction chemicals, high-polymer tile adhesives, precision grouts, and structural waterproofing systems based in Surat, Gujarat.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ background: '#071A45', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '24px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {COMPANY_STATS.map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'center', borderRight: idx < COMPANY_STATS.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: 900, color: '#46C985', display: 'block', lineHeight: 1 }}>
                  {stat.value}
                </span>
                <strong style={{ fontSize: '0.9375rem', color: '#FFFFFF', display: 'block', marginTop: 4 }}>
                  {stat.label}
                </strong>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)' }}>
                  {stat.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW */}
      <section id="overview" style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: 50, alignItems: 'center' }}>
            <div>
              <span className="section-tag">Company Overview</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', color: '#0A2362', fontWeight: 900, lineHeight: 1.25, margin: '10px 0 20px' }}>
                Formulating Trust Across 500+ Landmark Indian Infrastructure Projects
              </h2>
              <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.7, marginBottom: 16 }}>
                Headquartered in Surat, Gujarat, HYBEQ operates automated dry-mix and polymer synthesis manufacturing facilities designed to provide zero-defect solutions for India's rapidly evolving architectural and civil engineering sectors.
              </p>
              <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.7, marginBottom: 24 }}>
                From large-format slim porcelain slab fixing and high-temperature turbine base grouting to deep subterranean waterstops, HYBEQ engineers high-performance chemical formulations that replace unstandardized site-mixed mortars with laboratory-certified polymer technology.
              </p>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <div style={{ background: '#F8FAFC', border: '1px solid #DFE6EF', padding: '12px 18px', borderRadius: 8 }}>
                  <strong style={{ display: 'block', color: '#0A2362', fontSize: '1.1rem' }}>Surat, Gujarat</strong>
                  <span style={{ fontSize: '0.8125rem', color: '#64748B' }}>Primary Blending Facility</span>
                </div>
                <div style={{ background: '#F8FAFC', border: '1px solid #DFE6EF', padding: '12px 18px', borderRadius: 8 }}>
                  <strong style={{ display: 'block', color: '#0A2362', fontSize: '1.1rem' }}>14 Product Categories</strong>
                  <span style={{ fontSize: '0.8125rem', color: '#64748B' }}>Complete Chemical Range</span>
                </div>
              </div>
            </div>

            <div>
              <div style={{ borderRadius: 16, overflow: 'hidden', border: '1.5px solid #DFE6EF', boxShadow: '0 16px 40px rgba(10,35,98,0.08)' }}>
                <img
                  src="/images/plant-blending-tower.jpg"
                  alt="HYBEQ Manufacturing Plant"
                  style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR VISION AND MISSION */}
      <section id="vision-mission" style={{ padding: '80px 0', background: '#0A2362', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 48px' }}>
            <span className="section-tag on-dark">Foundational Pillars</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', color: '#FFFFFF', fontWeight: 900 }}>
              The HYBEQ Triad: Principle, Mission, Vision
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            {/* Principle */}
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: 32, borderRadius: 16 }}>
              <Compass size={36} style={{ color: '#46C985', marginBottom: 16 }} />
              <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', fontWeight: 800, marginBottom: 12 }}>Our Principle</h3>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>
                Total chemical transparency. We clearly formulate with verified redispersible polymer content and never dilute our dry-mix cementitious matrices with low-density inert calcium fillers.
              </p>
            </div>

            {/* Mission */}
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: 32, borderRadius: 16 }}>
              <Target size={36} style={{ color: '#46C985', marginBottom: 16 }} />
              <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', fontWeight: 800, marginBottom: 12 }}>Our Mission</h3>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>
                To empower contractors, structural engineers, and applicators with zero-failure construction chemicals, eliminating structural water ingress and ensuring permanent tile adhesion across all substrates.
              </p>
            </div>

            {/* Vision */}
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: 32, borderRadius: 16 }}>
              <Eye size={36} style={{ color: '#46C985', marginBottom: 16 }} />
              <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', fontWeight: 800, marginBottom: 12 }}>Our Vision</h3>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>
                To establish HYBEQ as the benchmark for durable, sustainable construction chemistry across India and overseas markets, safeguarding residential and civil infrastructure against extreme climatic deflection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR EXPERTISE & TECHNICAL KNOWLEDGE */}
      <section id="expertise" style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
            <span className="section-tag">Technical Prowess</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', color: '#0A2362', fontWeight: 900 }}>
              Specialized Formulations Across 14 Disciplines
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', marginTop: 10 }}>
              Our R&amp;D team continuously adapts European chemical synthesis to Indian climatic conditions, high ambient temperatures, and regional aggregate varieties.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              { title: 'Tile & Stone Fixing', desc: 'Deformable S1/S2 high-polymer adhesives formulated for vitrified tiles, porcelain slabs, and tile-on-tile renovation.' },
              { title: 'Subterranean Waterproofing', desc: 'Active crystalline pore-blocking coatings and elastomeric PU membranes resisting > 12 bar hydrostatic head.' },
              { title: 'Precision Machinery Grouting', desc: 'Dual-expansion non-shrink cementitious grouts delivering up to 70 MPa compressive resistance under dynamic vibration.' },
              { title: 'Structural Jacketing & Mortars', desc: 'Self-compacting microconcrete and thin-bed jointing mortars designed for column encasement and seismic retrofitting.' },
              { title: 'Precast & PQC Admixtures', desc: 'Polycarboxylate ether (PCE) superplasticizers accelerating mold turnaround and increasing pavement flexural strength.' },
              { title: 'Joint Sealants & Finishes', desc: 'Polyurethane and hybrid MS polymer sealants accommodating ±25% joint movement in facades and cleanrooms.' }
            ].map((exp, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', border: '1.5px solid #DFE6EF', borderRadius: 12, padding: 24 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#46C985', marginBottom: 12 }} />
                <h4 style={{ fontSize: '1.1rem', color: '#0A2362', fontWeight: 800, marginBottom: 8 }}>{exp.title}</h4>
                <p style={{ fontSize: '0.84375rem', color: '#64748B', lineHeight: 1.55, margin: 0 }}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUALITY AND STANDARDS */}
      <section id="quality" style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: 48, alignItems: 'center' }}>
            <div>
              <span className="section-tag">Quality Assurance</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', color: '#0A2362', fontWeight: 900, lineHeight: 1.25, margin: '10px 0 20px' }}>
                Stringent Laboratory Testing &amp; Standard Compliance
              </h2>
              <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.7, marginBottom: 20 }}>
                Every production batch is tested in our Surat quality laboratory before palletization. We verify tensile pull-off shear strength, open time, slump retention, and shrink resistance.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                {[
                  'IS 15477:2019 Type 1, Type 2, Type 3, Type 4 Standard Compliance',
                  'EN 12004 C1T, C2TE, and C2TE S1/S2 European Classification',
                  'ASTM C1107 Precision Non-Shrink Grouting Standards',
                  'ASTM D412 & ASTM C836 High-Elongation Membrane Validation',
                  'Computerized multi-stage dry-mix batching towers'
                ].map((std, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.875rem', color: '#26344E', fontWeight: 600 }}>
                    <CheckCircle2 size={16} style={{ color: '#46C985', flexShrink: 0 }} />
                    <span>{std}</span>
                  </div>
                ))}
              </div>

              <Link to="/downloads" className="btn btn-outline">
                View Official TDS Sheets &amp; Certifications
              </Link>
            </div>

            <div>
              <div style={{ borderRadius: 16, overflow: 'hidden', border: '1.5px solid #DFE6EF', boxShadow: '0 16px 40px rgba(10,35,98,0.08)' }}>
                <img
                  src="/images/lab-testing-rig.jpg"
                  alt="HYBEQ Quality Laboratory"
                  style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES & APPLICATIONS */}
      <section id="industries" style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 44px' }}>
            <span className="section-tag">Key Sectors</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', color: '#0A2362', fontWeight: 900 }}>
              Engineered for Critical Environments
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              { icon: Building2, title: 'Commercial & High-Rise Facades', text: 'Wind load deflection and thermal cycling protection for exterior tile and granite cladding up to 30+ meters.' },
              { icon: Truck, title: 'Metros, Highways & Transit', text: 'Precision track slab grouting, high early strength precast admixtures, and rapid repair mortars for transport hubs.' },
              { icon: Factory, title: 'Energy & Heavy Industrial Plants', text: 'Turbine base grouts, chemical-resistant epoxy linings, and containment structural concrete restoration.' },
              { icon: ShieldCheck, title: 'Hospitals & Cleanrooms', text: 'Hygienic 3-component epoxy grouts and self-levelling seamless flooring meeting sterile international standards.' }
            ].map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <div key={idx} style={{ background: '#FFFFFF', border: '1.5px solid #DFE6EF', borderRadius: 14, padding: 28 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: '#F5F7FB', color: '#0A2362', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <IconComp size={22} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: '#0A2362', fontWeight: 800, marginBottom: 8 }}>{ind.title}</h4>
                  <p style={{ fontSize: '0.84375rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>{ind.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. OUR REACH & DISTRIBUTION */}
      <section id="reach" style={{ padding: '70px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ background: '#0A2362', borderRadius: 20, padding: 'clamp(32px, 5vw, 56px)', color: '#FFFFFF' }}>
            <div style={{ maxWidth: 780 }}>
              <span className="section-tag on-dark">Regional &amp; National Footprint</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', color: '#FFFFFF', fontWeight: 900, margin: '12px 0 16px' }}>
                Strategic Logistics &amp; Applicator Support
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 28 }}>
                Operating from industrial manufacturing hubs in Gujarat, HYBEQ coordinates direct project dispatch and authorized distribution networks across Western and Central India, backed by over 15,000 certified applicators trained in proper substrate profiling and trowel notch techniques.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
                <div>
                  <MapPin size={24} style={{ color: '#46C985', marginBottom: 8 }} />
                  <strong style={{ display: 'block', color: '#FFFFFF', fontSize: '1rem' }}>Gujarat &amp; Western Hub</strong>
                  <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)' }}>Surat, Ahmedabad, Vadodara, Rajkot</span>
                </div>
                <div>
                  <Clock size={24} style={{ color: '#46C985', marginBottom: 8 }} />
                  <strong style={{ display: 'block', color: '#FFFFFF', fontSize: '1rem' }}>Rapid Site Dispatch</strong>
                  <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)' }}>Direct factory truckloads within 24-48 hours</span>
                </div>
                <div>
                  <FlaskConical size={24} style={{ color: '#46C985', marginBottom: 8 }} />
                  <strong style={{ display: 'block', color: '#FFFFFF', fontSize: '1rem' }}>On-Site Testing Team</strong>
                  <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)' }}>Pull-off adhesion &amp; moisture tests</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TRUSTED RELATIONSHIPS (CLIENT LOGOS) */}
      <section id="relationships" style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 40px' }}>
            <span className="section-tag">Trusted Relationships</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', color: '#0A2362', fontWeight: 900 }}>
              Partnering with India's Premier Builders &amp; EPC Leaders
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', marginTop: 10 }}>
              Verified supply partner for mission-critical infrastructure projects, state corporations, and luxury high-rise townships.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 16
          }}>
            {CLIENT_PARTNERS.slice(0, 12).map((client, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #DFE6EF',
                  borderRadius: 10,
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 90,
                  boxShadow: '0 2px 8px rgba(10,35,98,0.03)'
                }}
                title={client.name}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  style={{
                    maxHeight: 46,
                    maxWidth: '100%',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SUSTAINABILITY INITIATIVE */}
      <section id="sustainability" style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: 48, alignItems: 'center' }}>
            <div>
              <span className="section-tag">Green Chemistry</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', color: '#0A2362', fontWeight: 900, lineHeight: 1.25, margin: '10px 0 20px' }}>
                Sustainable, Low-VOC Construction Formulations
              </h2>
              <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.7, marginBottom: 16 }}>
                As environmental stewardship becomes central to urban civil development, HYBEQ pioneers zero-VOC water-based polymers, solar reflective coatings (SRI &gt; 105), and solvent-free epoxy formulations that protect applicators and indoor air quality.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.875rem', color: '#26344E', fontWeight: 600 }}>
                  <Leaf size={16} style={{ color: '#46C985', flexShrink: 0 }} />
                  <span>Zero volatile organic compounds in water-based waterproofing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.875rem', color: '#26344E', fontWeight: 600 }}>
                  <Leaf size={16} style={{ color: '#46C985', flexShrink: 0 }} />
                  <span>High SRI solar reflective coatings reducing building cooling loads</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.875rem', color: '#26344E', fontWeight: 600 }}>
                  <Leaf size={16} style={{ color: '#46C985', flexShrink: 0 }} />
                  <span>Recyclable multi-wall moisture barrier packaging</span>
                </div>
              </div>

              <Link to="/sustainability" className="btn btn-outline">
                Read Full Sustainability Charter
              </Link>
            </div>

            <div style={{ background: '#EAF8F0', borderRadius: 16, border: '1.5px solid rgba(70,201,133,0.3)', padding: 36 }}>
              <h3 style={{ fontSize: '1.3rem', color: '#0A2362', fontWeight: 800, marginBottom: 12 }}>
                Sustainable Building Certifications
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#26344E', lineHeight: 1.6, marginBottom: 20 }}>
                HYBEQ formulations qualify for LEED, GRIHA, and IGBC green building credits under Low-Emitting Materials and Heat Island Effect reduction categories.
              </p>
              <div style={{ background: '#FFFFFF', padding: 18, borderRadius: 10, border: '1px solid #DFE6EF' }}>
                <strong style={{ display: 'block', color: '#0A2362', fontSize: '0.9375rem' }}>GRIHA Compliant Chemistry</strong>
                <span style={{ fontSize: '0.78125rem', color: '#64748B' }}>Safe for schools, hospitals, and green residential townships.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CONTACT AND ENQUIRIES */}
      <section id="contact-enquiries" style={{ padding: '70px 0', background: '#F8FAFC', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <span className="section-tag">Direct Factory Connection</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', color: '#0A2362', fontWeight: 900, margin: '12px 0 16px' }}>
              Connect with HYBEQ Technical Application Engineers
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.6, marginBottom: 28 }}>
              Request on-site pull-off adhesion testing, custom project specification sheets, or bulk contractor quotes directly from our manufacturing engineering team.
            </p>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
              <button type="button" className="btn btn-primary" onClick={onOpenEnquiry}>
                SUBMIT PROJECT INQUIRY <ArrowUpRight size={16} />
              </button>
              <Link to="/contact" className="btn btn-outline">
                VIEW OFFICE LOCATIONS
              </Link>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', borderTop: '1px solid #DFE6EF', paddingTop: 24, fontSize: '0.875rem', color: '#64748B' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <MapPin size={16} style={{ color: '#0A2362' }} />
                <span>Surat, Gujarat, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Mail size={16} style={{ color: '#0A2362' }} />
                <span>info@hybeq.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Phone size={16} style={{ color: '#0A2362' }} />
                <span>+91 97277 88877</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
