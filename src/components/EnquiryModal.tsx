import React, { useState } from 'react';
import { X, CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { PRODUCTS } from '../data/productsData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultProduct = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    city: '',
    product: defaultProduct,
    projectSize: 'under-5000',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      errs.phone = 'Phone number must contain exactly 10 digits';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.city.trim()) errs.city = 'City / Location is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      city: '',
      product: '',
      projectSize: 'under-5000',
      message: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: 640 }} onClick={e => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close Enquiry Form">
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            <div style={{ marginBottom: 16 }}>
              <span className="section-tag">Direct Factory Connection</span>
              <h3 style={{ fontSize: '1.45rem', color: '#0A2362', fontWeight: 800, margin: '6px 0 2px' }}>
                Commercial Project Inquiry
              </h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748B', margin: 0 }}>
                Connect directly with Hybeq technical application engineers for project estimates, site inspections, and sample dispatch.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {/* Name & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#0A2362', marginBottom: 6 }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 8,
                      border: `1.5px solid ${errors.name ? '#EF4444' : '#DFE6EF'}`,
                      fontSize: '0.875rem',
                      outline: 'none'
                    }}
                  />
                  {errors.name && <span style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}><AlertCircle size={12} /> {errors.name}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#0A2362', marginBottom: 6 }}>
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    minLength={10}
                    pattern="^[0-9]{10}$"
                    value={formData.phone}
                    onChange={e => {
                      const cleanDigits = e.target.value.replace(/\D/g, '').slice(0, 10);
                      setFormData({ ...formData, phone: cleanDigits });
                      if (errors.phone && cleanDigits.length === 10) {
                        setErrors(prev => {
                          const updated = { ...prev };
                          delete updated.phone;
                          return updated;
                        });
                      }
                    }}
                    placeholder="Enter 10-digit mobile number"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 8,
                      border: `1.5px solid ${errors.phone ? '#EF4444' : '#DFE6EF'}`,
                      fontSize: '0.875rem',
                      outline: 'none'
                    }}
                  />
                  {errors.phone && <span style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}><AlertCircle size={12} /> {errors.phone}</span>}
                </div>
              </div>

              {/* Email & City */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#0A2362', marginBottom: 6 }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="engineer@company.com"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 8,
                      border: `1.5px solid ${errors.email ? '#EF4444' : '#DFE6EF'}`,
                      fontSize: '0.875rem',
                      outline: 'none'
                    }}
                  />
                  {errors.email && <span style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}><AlertCircle size={12} /> {errors.email}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#0A2362', marginBottom: 6 }}>
                    Project City / State *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Surat, Gujarat"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 8,
                      border: `1.5px solid ${errors.city ? '#EF4444' : '#DFE6EF'}`,
                      fontSize: '0.875rem',
                      outline: 'none'
                    }}
                  />
                  {errors.city && <span style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}><AlertCircle size={12} /> {errors.city}</span>}
                </div>
              </div>

              {/* Product Interest & Project Scale */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#0A2362', marginBottom: 6 }}>
                    Formulation / Solution
                  </label>
                  <select
                    value={formData.product}
                    onChange={e => setFormData({ ...formData, product: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 8,
                      border: '1.5px solid #DFE6EF',
                      fontSize: '0.875rem',
                      background: '#FFFFFF',
                      outline: 'none',
                      color: '#0A2362'
                    }}
                  >
                    <option value="">General Inquiry / Custom Spec</option>
                    {PRODUCTS.map(p => (
                      <option key={p.id} value={p.name}>{p.name} ({p.badge})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#0A2362', marginBottom: 6 }}>
                    Estimated Project Area
                  </label>
                  <select
                    value={formData.projectSize}
                    onChange={e => setFormData({ ...formData, projectSize: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 8,
                      border: '1.5px solid #DFE6EF',
                      fontSize: '0.875rem',
                      background: '#FFFFFF',
                      outline: 'none',
                      color: '#0A2362'
                    }}
                  >
                    <option value="under-5000">Residential (&lt; 5,000 sq.ft)</option>
                    <option value="5000-25000">Commercial (5,000 - 25,000 sq.ft)</option>
                    <option value="25000-100000">Major Infra (25,000 - 100,000 sq.ft)</option>
                    <option value="over-100000">Mega Project (&gt; 100,000 sq.ft)</option>
                    <option value="dealership">Dealership / Distributorship</option>
                  </select>
                </div>
              </div>

              {/* Message / Requirements */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#0A2362', marginBottom: 6 }}>
                  Project Details / Substrate Type
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify substrate condition, tile dimensions (e.g. 1200x1800mm), or technical questions..."
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: 8,
                    border: '1.5px solid #DFE6EF',
                    fontSize: '0.875rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '11px', fontSize: '0.9375rem', marginTop: 4 }}
              >
                {submitting ? 'Transmitting to Technical Desk...' : (
                  <>
                    SUBMIT INQUIRY <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '32px 16px' }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: '#EAF8F0',
              color: '#46C985',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20
            }}>
              <CheckCircle2 size={44} />
            </div>

            <h3 style={{ fontSize: '1.75rem', color: '#0A2362', fontWeight: 800, marginBottom: 8 }}>
              Inquiry Transmitted Successfully
            </h3>

            <p style={{ fontSize: '0.9375rem', color: '#64748B', maxWidth: 440, margin: '0 auto 24px', lineHeight: 1.6 }}>
              Thank you, <strong>{formData.name}</strong>. A Hybeq technical project coordinator has received your requirements and will reach out via <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> within 2 business hours.
            </p>

            <div style={{ background: '#F5F7FB', padding: '16px', borderRadius: 8, maxWidth: 440, margin: '0 auto 24px', textAlign: 'left', fontSize: '0.8125rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ color: '#64748B' }}>Selected Spec:</span>
                <strong style={{ color: '#0A2362' }}>{formData.product || 'General / Project Spec'}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748B' }}>Location:</span>
                <strong style={{ color: '#0A2362' }}>{formData.city}</strong>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleReset}
              style={{ minWidth: 160 }}
            >
              Done &amp; Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
