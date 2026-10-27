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
      title: 'Hybeq Master Product Catalogue 2026',
      type: 'catalog',
      typeLabel: 'Full Catalogue',
      size: '14.2 MB',
      date: 'Updated Oct 2026',
      desc: 'Complete technical reference guide for all 12+ formulations, selection charts, and IS 15477 classification matrix.'
    },
    ...PRODUCTS.map(p => ({
      id: `tds-${p.id}`,
      title: `${p.name} — Technical Data Sheet (TDS)`,
      type: 'tds' as const,
      typeLabel: 'TDS Spec Sheet',
      size: '1.4 MB',
      date: 'ISO 9001 Certified',
      desc: `Detailed laboratory parameters, shear adhesion, open time, bed thickness, and mixing ratios for ${p.name}.`
    })),
    {
      id: 'method-tile-facade',
      title: 'Method Statement: Exterior Facade Tile Fixing (> 30 Metres)',
      type: 'method',
      typeLabel: 'Method Statement',
      size: '2.1 MB',
      date: 'Engineering SOP',
      desc: 'Step-by-step substrate preparation, mechanical anchoring, and thixotropic adhesive application for high-rise facades.'
    },
    {
      id: 'method-basement-waterproofing',
      title: 'Method Statement: Deep Basement Crystalline & Elastomeric Waterproofing',
      type: 'method',
      typeLabel: 'Method Statement',
      size: '2.8 MB',
      date: 'Engineering SOP',
      desc: 'Negative hydrostatic pressure defense protocol for subterranean retaining walls and elevator pit sumps.'
    }
  ];

  const filteredDocs = documents.filter(d => {
    const matchesType = filterType === 'all' || d.type === filterType;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || d.title.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q);
    return matchesType && matchesSearch;
  });

  const handleDownload = (id: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
    }, 2500);
  };

  return (
    <div className="downloads-page">
      {/* Header */}
      <section style={{ background: '#0A2362', color: '#FFFFFF', padding: '70px 0 50px' }}>
        <div className="container">
          <span className="section-tag on-dark" style={{ marginBottom: 12 }}>Engineering Resource Center</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', color: '#FFFFFF', fontWeight: 900, marginBottom: 16 }}>
            Technical Documentation &amp; Data Sheets
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: 740, lineHeight: 1.6 }}>
            Download verified technical data sheets (TDS), safety documentation (MSDS), method statements, and comprehensive architectural specification guides.
          </p>
        </div>
      </section>

      {/* Filter and Search */}
      <section style={{ background: '#F5F7FB', padding: '28px 0', borderBottom: '1px solid #DFE6EF' }}>
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
                    border: '1.5px solid #DFE6EF'
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
              width: '100%',
              maxWidth: 360
            }}>
              <Search size={16} style={{ color: '#0A2362', marginRight: 8 }} />
              <input
                type="text"
                placeholder="Search document name..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ border: 'none', outline: 'none', fontSize: '0.875rem', fontWeight: 600, color: '#0A2362', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Document List */}
      <section style={{ padding: 'clamp(40px, 6vw, 70px) 0 clamp(50px, 7vw, 90px)', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {filteredDocs.map(doc => {
              const isDownloading = downloadingId === doc.id;
              return (
                <div
                  key={doc.id}
                  className="hybeq-download-item-card"
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid #DFE6EF',
                    borderRadius: 12,
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 16,
                    transition: 'border-color 0.2s, box-shadow 0.2s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#46C985';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(10,35,98,0.06)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#DFE6EF';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, maxWidth: 800 }}>
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: '#F5F7FB',
                      color: '#0A2362',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <FileText size={22} />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                        <span style={{ fontSize: '0.6875rem', fontWeight: 800, background: '#EAF8F0', color: '#46C985', padding: '2px 8px', borderRadius: 4, textTransform: 'uppercase' }}>
                          {doc.typeLabel}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                          {doc.size} &bull; {doc.date}
                        </span>
                      </div>
                      <h4 style={{ fontSize: '1.05rem', color: '#0A2362', fontWeight: 800, margin: '0 0 4px' }}>
                        {doc.title}
                      </h4>
                      <p style={{ fontSize: '0.8125rem', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                        {doc.desc}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDownload(doc.id)}
                    className="btn btn-outline hybeq-download-btn"
                    style={{
                      borderColor: isDownloading ? '#46C985' : '#DFE6EF',
                      background: isDownloading ? '#EAF8F0' : 'transparent',
                      color: isDownloading ? '#46C985' : '#0A2362',
                      fontSize: '0.8125rem',
                      padding: '10px 18px',
                      minWidth: 150
                    }}
                  >
                    {isDownloading ? (
                      <>
                        <Check size={16} /> Downloaded
                      </>
                    ) : (
                      <>
                        <Download size={16} /> Download PDF
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
