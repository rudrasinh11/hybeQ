import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Download, Calculator, ArrowUpRight, Check, FileText } from 'lucide-react';
import { PRODUCTS, getProductImage } from '../data/productsData';
import { CalculatorWidget } from '../components/CalculatorWidget';

interface ProductDetailPageProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenEnquiry }) => {
  const { id } = useParams<{ id: string }>();
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

  const handleDownloadTDS = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="product-detail-page">
      {/* Breadcrumb Header */}
      <section style={{ background: '#0A2362', color: '#FFFFFF', padding: '50px 0 40px' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
            <span>/</span>
            <Link to="/products" style={{ color: 'rgba(255,255,255,0.7)' }}>Products</Link>
            <span>/</span>
            <Link to={`/products/${product.category}`} style={{ color: '#46C985' }}>{product.categoryLabel}</Link>
            <span>/</span>
            <span style={{ color: '#FFFFFF', fontWeight: 700 }}>{product.name}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, background: '#46C985', color: '#0A2362', padding: '4px 12px', borderRadius: 20, textTransform: 'uppercase' }}>
                  {product.badge}
                </span>
                <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
                  Standard: {product.standards}
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', color: '#FFFFFF', fontWeight: 900 }}>
                {product.name}
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: 720, marginTop: 8, lineHeight: 1.6 }}>
                {product.shortDesc}
              </p>
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
              <button
                type="button"
                className="btn btn-accent"
                onClick={() => onOpenEnquiry(product.name)}
                style={{ padding: '12px 24px' }}
              >
                REQUEST QUOTE <ArrowUpRight size={18} />
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={handleDownloadTDS}
                style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}
              >
                {downloadSuccess ? (
                  <>
                    <Check size={18} style={{ color: '#46C985' }} /> TDS INITIATED
                  </>
                ) : (
                  <>
                    <Download size={18} /> DOWNLOAD TDS
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Grid */}
      <section style={{ padding: 'clamp(40px, 6vw, 70px) 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="product-detail-grid">
            {/* Left Column: Specs, Features & Applications */}
            <div>
              {/* Product Visual Showcase Banner */}
              <div className="product-detail-pack-banner">
                <div style={{
                  width: 140,
                  height: 140,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#FFFFFF',
                  borderRadius: 12,
                  border: '1.5px solid #DFE6EF',
                  padding: 10,
                  margin: '0 auto'
                }}>
                  <img
                    src={getProductImage(product)}
                    alt={product.name}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 8px 16px rgba(10,35,98,0.12))'
                    }}
                  />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#46C985', background: '#EAF8F0', padding: '4px 10px', borderRadius: 4, textTransform: 'uppercase' }}>
                    Authentic Industrial Formulation
                  </span>
                  <h3 style={{ fontSize: 'clamp(1.15rem, 3.5vw, 1.4rem)', color: '#0A2362', fontWeight: 900, margin: '8px 0 6px' }}>
                    {product.name} Packaging Specification
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                    Supplied in <strong>{product.packaging}</strong>. Certified under <strong>{product.standards}</strong> with 100% batch traceability and anti-counterfeiting security seal.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div style={{ marginBottom: 40 }}>
                <h3 style={{ fontSize: '1.35rem', color: '#0A2362', fontWeight: 900, marginBottom: 16 }}>
                  Performance Characteristics
                </h3>
                <div className="product-features-grid">
                  {product.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: '#F5F7FB', padding: '14px 16px', borderRadius: 10 }}>
                      <CheckCircle2 size={18} style={{ color: '#46C985', flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0A2362' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div style={{ marginBottom: 40 }}>
                <h3 style={{ fontSize: '1.35rem', color: '#0A2362', fontWeight: 900, marginBottom: 16 }}>
                  Laboratory Test Parameters
                </h3>
                <div className="table-responsive" style={{ border: '1.5px solid #DFE6EF', borderRadius: 12 }}>
                  <table style={{ width: '100%', minWidth: 320, borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                    <tbody>
                      {Object.entries(product.specs).map(([key, val], idx) => (
                        <tr key={key} style={{ background: idx % 2 === 0 ? '#FFFFFF' : '#F5F7FB', borderBottom: '1px solid #DFE6EF' }}>
                          <td style={{ padding: '14px 20px', fontWeight: 700, color: '#0A2362', width: '40%' }}>{key}</td>
                          <td style={{ padding: '14px 20px', color: '#64748B', fontWeight: 600 }}>{val}</td>
                        </tr>
                      ))}
                      <tr style={{ background: '#FFFFFF', borderBottom: '1px solid #DFE6EF' }}>
                        <td style={{ padding: '14px 20px', fontWeight: 700, color: '#0A2362' }}>Standard Coverage</td>
                        <td style={{ padding: '14px 20px', color: '#46C985', fontWeight: 700 }}>{product.coverage}</td>
                      </tr>
                      <tr style={{ background: '#F5F7FB' }}>
                        <td style={{ padding: '14px 20px', fontWeight: 700, color: '#0A2362' }}>Packaging Format</td>
                        <td style={{ padding: '14px 20px', color: '#0A2362', fontWeight: 700 }}>{product.packaging}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recommended Applications */}
              <div>
                <h3 style={{ fontSize: '1.35rem', color: '#0A2362', fontWeight: 900, marginBottom: 16 }}>
                  Recommended Application Substrates
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {product.applications.map((app, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: '#EAF8F0', borderRadius: 8, color: '#0A2362', fontSize: '0.875rem', fontWeight: 600 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#46C985' }} />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Material Calculator & TDS Download Card */}
            <div>
              <div style={{
                background: '#F5F7FB',
                border: '1.5px solid #DFE6EF',
                borderRadius: 16,
                padding: 'clamp(16px, 3vw, 32px)',
                position: 'sticky',
                top: 100
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <Calculator size={22} style={{ color: '#0A2362' }} />
                  <h4 style={{ fontSize: '1.2rem', color: '#0A2362', fontWeight: 800 }}>
                    Calculate Site Requirements
                  </h4>
                </div>

                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, marginBottom: 20 }}>
                  Estimate bags required for <strong>{product.name}</strong> according to your specific site area.
                </p>

                <CalculatorWidget onOpenEnquiry={onOpenEnquiry} compact={true} />

                <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid #DFE6EF', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <button
                    type="button"
                    onClick={handleDownloadTDS}
                    className="btn btn-outline"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.8125rem' }}
                  >
                    <FileText size={16} /> Download Official TDS Sheet (PDF)
                  </button>

                  <a
                    href="https://wa.link/u9bwq4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.8125rem', borderColor: '#25D366', color: '#25D366' }}
                  >
                    Ask Applicator Advice on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
