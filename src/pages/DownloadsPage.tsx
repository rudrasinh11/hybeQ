import React, { useState } from 'react';
import { Download, FileText, Check, Search } from 'lucide-react';
import { PRODUCTS } from '../data/productsData';

export const DownloadsPage: React.FC = () => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'tds' | 'catalog' | 'method'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const documents = [
    {
      id: 'cat-2026',
      title: 'Hybeq Master Technical Product Catalogue 2026',
      type: 'catalog',
      typeLabel: 'Full Catalogue',
      size: '14.2 MB',
      date: 'Updated Oct 2026',
      desc: 'Complete engineering reference guide across 14 formulation categories, substrate selection charts, and IS 15477 classification matrix.'
    },
    ...PRODUCTS.map(p => ({
      id: `tds-${p.id}`,
      title: `${p.name} — Technical Data Sheet (TDS)`,
      type: 'tds' as const,
      typeLabel: 'TDS Spec Sheet',
      size: '1.4 MB',
      date: 'ISO 9001 Certified',
      desc: `Detailed laboratory parameters, shear adhesion, open time, bed thickness, standard compliance, and mixing ratios for ${p.name}.`
    })),
    {
      id: 'method-tile-facade',
      title: 'Method Statement: Exterior Facade Tile & Stone Cladding (> 30 Metres)',
      type: 'method',
      typeLabel: 'Method Statement',
      size: '2.1 MB',
      date: 'Engineering SOP',
      desc: 'Step-by-step substrate preparation, mechanical anchoring, and thixotropic adhesive application for high-rise building facades.'
    },
    {
      id: 'method-basement-waterproofing',
      title: 'Method Statement: Deep Basement Crystalline & Elastomeric Waterproofing',
      type: 'method',
      typeLabel: 'Method Statement',
      size: '2.8 MB',
      date: 'Engineering SOP',
      desc: 'Negative and positive hydrostatic pressure defense protocol for subterranean retaining walls and elevator pit sumps.'
    },
    {
      id: 'method-industrial-flooring',
      title: 'Method Statement: Heavy Duty Industrial Dry-Shake & Epoxy Floor Screeds',
      type: 'method',
      typeLabel: 'Method Statement',
      size: '1.9 MB',
      date: 'Engineering SOP',
      desc: 'Comprehensive application guidelines for high abrasion floor hardeners, moisture testing, and monolithic curing.'
    }
  ];

  const filteredDocs = documents.filter(d => {
    const matchesType = filterType === 'all' || d.type === filterType;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || d.title.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q);
    return matchesType && matchesSearch;
  });

  const handleDownload = (docId: string, title: string) => {
    setDownloadingId(docId);
    
    // Simulate real PDF trigger with blob creation
    try {
      const content = `HYBEQ CHEMICALS INDIA PVT. LTD.\n\nDOCUMENT: ${title}\nDOCUMENT ID: ${docId}\nDATE: ${new Date().toLocaleDateString()}\nSTANDARD: IS 15477:2019 / EN 12004 Certified\n\nOfficial Technical Documentation\nHeadquarters: Surat, Gujarat, India\nSupport: info@hybeq.com | https://hybeq.com/`;
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${docId}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
    }

    setTimeout(() => {
      setDownloadingId(null);
    }, 2000);
  };

  return (
    <div className="downloads-page">
      {/* Header */}
      <section style={{ background: '#0A2362', color: '#FFFFFF', padding: '60px 0 44px' }}>
        <div className="container">
          <span className="section-tag on-dark" style={{ marginBottom: 12 }}>Engineering Resource Center</span>
          <h1 style={{ fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)', color: '#FFFFFF', fontWeight: 900, marginBottom: 14 }}>
            Technical Documentation &amp; Data Sheets
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', maxWidth: 740, lineHeight: 1.6 }}>
            Download verified technical data sheets (TDS), safety documentation (MSDS), standard compliance certificates, and architectural method statements.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section style={{ background: '#F5F7FB', padding: '24px 0', borderBottom: '1px solid #DFE6EF' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            {/* Filter Buttons */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Documents' },
                { id: 'catalog', label: 'Catalogues' },
                { id: 'tds', label: 'Technical Data Sheets (TDS)' },
                { id: 'method', label: 'Method Statements' }
              ].map(f => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilterType(f.id as any)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 20,
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    background: filterType === f.id ? '#0A2362' : '#FFFFFF',
                    color: filterType === f.id ? '#FFFFFF' : '#0A2362',
                    border: '1.5px solid',
                    borderColor: filterType === f.id ? '#0A2362' : '#DFE6EF',
                    transition: 'all 0.2s'
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: '#FFFFFF',
              border: '1.5px solid #DFE6EF',
              borderRadius: 10,
              padding: '6px 14px',
              minWidth: 280,
              flex: '1 1 280px',
              maxWidth: 420
            }}>
              <Search size={16} style={{ color: '#0A2362', marginRight: 8, flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search document by name, standard..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ border: 'none', outline: 'none', fontSize: '0.875rem', fontWeight: 600, color: '#0A2362', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Document Grid with Centered Download Now Buttons (Part 3.1) */}
      <section style={{ padding: '50px 0 90px', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.875rem', color: '#64748B', fontWeight: 600 }}>
              Showing <strong>{filteredDocs.length}</strong> official documents
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: 24
          }}>
            {filteredDocs.map(doc => {
              const isDownloading = downloadingId === doc.id;
              return (
                <div
                  key={doc.id}
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid #DFE6EF',
                    borderRadius: 14,
                    padding: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 10px rgba(10,35,98,0.03)',
                    transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#46C985';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(10,35,98,0.08)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#DFE6EF';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(10,35,98,0.03)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  {/* Top: Metadata & Document Icon */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                      <div style={{
                        width: 42,
                        height: 42,
                        borderRadius: 10,
                        background: '#F5F7FB',
                        color: '#0A2362',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <FileText size={20} />
                      </div>
                      <span style={{
                        fontSize: '0.6875rem',
                        fontWeight: 800,
                        background: '#EAF8F0',
                        color: '#0A2362',
                        border: '1px solid rgba(70,201,133,0.3)',
                        padding: '3px 10px',
                        borderRadius: 20,
                        textTransform: 'uppercase'
                      }}>
                        {doc.typeLabel}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: 8, fontWeight: 600 }}>
                      {doc.size} &bull; {doc.date}
                    </div>

                    <h4 style={{ fontSize: '1.05rem', color: '#0A2362', fontWeight: 800, margin: '0 0 10px', lineHeight: 1.4 }}>
                      {doc.title}
                    </h4>

                    <p style={{ fontSize: '0.8125rem', color: '#64748B', margin: '0 0 20px', lineHeight: 1.55 }}>
                      {doc.desc}
                    </p>
                  </div>

                  {/* Bottom: Horizontally Centered Download Now Button (Part 3.1) */}
                  <div style={{
                    borderTop: '1px solid #DFE6EF',
                    paddingTop: 18,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: 'auto'
                  }}>
                    <button
                      type="button"
                      onClick={() => handleDownload(doc.id, doc.title)}
                      className="btn btn-outline"
                      style={{
                        borderColor: isDownloading ? '#46C985' : '#0A2362',
                        background: isDownloading ? '#EAF8F0' : '#FFFFFF',
                        color: isDownloading ? '#46C985' : '#0A2362',
                        fontSize: '0.8125rem',
                        padding: '10px 24px',
                        minWidth: 160,
                        justifyContent: 'center',
                        textAlign: 'center',
                        margin: '0 auto',
                        fontWeight: 700
                      }}
                    >
                      {isDownloading ? (
                        <>
                          <Check size={16} /> Downloaded
                        </>
                      ) : (
                        <>
                          <Download size={16} /> Download Now
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
