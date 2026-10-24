import React from 'react';
import { X, Phone, Mail, MapPin, Download, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SubsideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: () => void;
}

export const SubsideDrawer: React.FC<SubsideDrawerProps> = ({
  isOpen,
  onClose,
  onOpenEnquiry
}) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`modal-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
        style={{ zIndex: 2050 }}
      />

      {/* Slide Drawer */}
      <aside className={`subside-drawer ${isOpen ? 'active' : ''}`} aria-label="Quick Contact & Facilities">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: '#0A2362', border: '2px solid #46C985', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#46C985' }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>HYBEQ</span>
              <span style={{ display: 'block', fontSize: '0.65rem', color: '#46C985', textTransform: 'uppercase', letterSpacing: 1 }}>Direct Connect</span>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close Drawer"
            style={{ position: 'static' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Corporate Summary */}
        <div style={{ marginBottom: 28, paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#46C985', letterSpacing: 1.5, textTransform: 'uppercase' }}>
            German Engineered Formulations
          </span>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', marginTop: 8, lineHeight: 1.6 }}>
            Hybeq manufactures advanced polymer-modified mortars, crystalline waterproofing, and structural repair compounds adhering to IS 15477:2019 and EN 12004 standards.
          </p>
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
          <button
            type="button"
            className="btn btn-accent"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => {
              onClose();
              onOpenEnquiry();
            }}
          >
            Request Commercial Quote
          </button>

          <a
            href="https://wa.link/u9bwq4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ borderColor: '#25D366', color: '#25D366', width: '100%', justifyContent: 'center' }}
          >
            <MessageCircle size={18} /> WhatsApp Technical Desk
          </a>
        </div>

        {/* Contact Information */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: '0.875rem', marginBottom: 32 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <MapPin size={20} style={{ color: '#46C985', flexShrink: 0, marginTop: 2 }} />
            <div>
              <strong style={{ display: 'block', color: '#FFFFFF', marginBottom: 2 }}>Headquarters &amp; Plant 1</strong>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8125rem', lineHeight: 1.5 }}>
                Plot No. 124-126, GIDC Industrial Estate, Sachin, Surat - 394230, Gujarat, India
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Phone size={18} style={{ color: '#46C985', flexShrink: 0 }} />
            <div>
              <strong style={{ display: 'block', color: '#FFFFFF', fontSize: '0.8125rem' }}>Direct Line</strong>
              <a href="tel:9825112345" style={{ color: 'rgba(255,255,255,0.85)' }}>9825112345</a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Mail size={18} style={{ color: '#46C985', flexShrink: 0 }} />
            <div>
              <strong style={{ display: 'block', color: '#FFFFFF', fontSize: '0.8125rem' }}>Inquiry Email</strong>
              <a href="mailto:info@hybeq.com" style={{ color: 'rgba(255,255,255,0.85)' }}>info@hybeq.com</a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Clock size={18} style={{ color: '#46C985', flexShrink: 0 }} />
            <div>
              <strong style={{ display: 'block', color: '#FFFFFF', fontSize: '0.8125rem' }}>Operating Hours</strong>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8125rem' }}>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 1.5, display: 'block', marginBottom: 12 }}>
            Documentation &amp; Tools
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.875rem' }}>
            <Link to="/downloads" onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#46C985' }}>
              <Download size={16} /> Download Product Catalogue (PDF)
            </Link>
            <Link to="/calculator" onClick={onClose} style={{ color: 'rgba(255,255,255,0.8)' }}>
              Online Material Consumption Calculator &rarr;
            </Link>
            <Link to="/infrastructure" onClick={onClose} style={{ color: 'rgba(255,255,255,0.8)' }}>
              Plant Tour &amp; Automated Batching &rarr;
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};
