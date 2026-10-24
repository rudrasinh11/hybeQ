import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'product-inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      errs.phone = 'Phone number must contain exactly 10 digits';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please provide inquiry details';
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

  return (
    <div className="contact-page">
      {/* Header */}
      <section style={{ background: '#0A2362', color: '#FFFFFF', padding: '70px 0 50px' }}>
        <div className="container">
          <span className="section-tag on-dark" style={{ marginBottom: 12 }}>Corporate Headquarters &amp; Depots</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', color: '#FFFFFF', fontWeight: 900, marginBottom: 16 }}>
            Contact Hybeq Technical Desk
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: 740, lineHeight: 1.6 }}>
            Speak directly with technical application engineers, request physical material samples, or locate your nearest authorized distributor.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56 }}>
            {/* Left: Contact Form */}
            <div>
              <span className="section-tag">Direct Inquiry Channel</span>
              <h2 style={{ fontSize: '2.2rem', color: '#0A2362', fontWeight: 900, marginBottom: 20 }}>
                Send Us Your Project Requirements
              </h2>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#0A2362', marginBottom: 6 }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Deshmukh"
                        style={{
                          width: '100%',
                          padding: '12px 14px',
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
                        Phone Number *
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
                          padding: '12px 14px',
                          borderRadius: 8,
                          border: `1.5px solid ${errors.phone ? '#EF4444' : '#DFE6EF'}`,
                          fontSize: '0.875rem',
                          outline: 'none'
                        }}
                      />
                      {errors.phone && <span style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}><AlertCircle size={12} /> {errors.phone}</span>}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#0A2362', marginBottom: 6 }}>
                        Official Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contractor@domain.com"
                        style={{
                          width: '100%',
                          padding: '12px 14px',
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
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: 8,
                          border: '1.5px solid #DFE6EF',
                          fontSize: '0.875rem',
                          outline: 'none',
                          background: '#FFFFFF',
                          color: '#0A2362'
                        }}
                      >
                        <option value="product-inquiry">Commercial Material Supply</option>
                        <option value="dealership">Dealership / Distribution Request</option>
                        <option value="site-inspection">On-Site Adhesion Pull-Off Testing</option>
                        <option value="sample-request">Physical Material Sample Dispatch</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#0A2362', marginBottom: 6 }}>
                      Project Specifications / Message *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention substrate details, tile type/dimensions, or application area..."
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 8,
                        border: `1.5px solid ${errors.message ? '#EF4444' : '#DFE6EF'}`,
                        fontSize: '0.875rem',
                        outline: 'none',
                        fontFamily: 'inherit',
                        resize: 'vertical'
                      }}
                    />
                    {errors.message && <span style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}><AlertCircle size={12} /> {errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary"
                    style={{ padding: '14px', fontSize: '1rem', justifyContent: 'center' }}
                  >
                    {submitting ? 'Transmitting...' : (
                      <>
                        TRANSMIT INQUIRY <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div style={{ background: '#EAF8F0', padding: 36, borderRadius: 16, border: '1.5px solid #46C985', textAlign: 'center' }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#46C985', color: '#0A2362', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: '#0A2362', fontWeight: 800, marginBottom: 8 }}>
                    Message Received
                  </h3>
                  <p style={{ color: '#26344E', fontSize: '0.9375rem', lineHeight: 1.6, maxWidth: 440, margin: '0 auto 20px' }}>
                    Thank you, <strong>{formData.name}</strong>. Our engineering team will review your project parameters and respond within 2 business hours.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', subject: 'product-inquiry', message: '' });
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}
            </div>

            {/* Right: Verified Facilities & Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Surat Headquarters */}
              <div style={{ background: '#F5F7FB', border: '1.5px solid #DFE6EF', borderRadius: 16, padding: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: '#0A2362', color: '#46C985', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', color: '#0A2362', fontWeight: 800, margin: 0 }}>
                      Surat Headquarters &amp; Unit 1
                    </h4>
                    <span style={{ fontSize: '0.75rem', color: '#46C985', fontWeight: 700 }}>Continuous Blending Plant</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: '0.875rem' }}>
                  <div style={{ display: 'flex', gap: 10, color: '#26344E' }}>
                    <MapPin size={18} style={{ color: '#0A2362', flexShrink: 0, marginTop: 2 }} />
                    <span>Plot No. 124-126, GIDC Industrial Estate, Sachin, Surat - 394230, Gujarat, India</span>
                  </div>

                  <div style={{ display: 'flex', gap: 10, color: '#26344E' }}>
                    <Phone size={18} style={{ color: '#0A2362', flexShrink: 0 }} />
                    <a href="tel:9825112345" style={{ color: '#0A2362', fontWeight: 700 }}>9825112345</a>
                  </div>

                  <div style={{ display: 'flex', gap: 10, color: '#26344E' }}>
                    <Mail size={18} style={{ color: '#0A2362', flexShrink: 0 }} />
                    <a href="mailto:info@hybeq.com" style={{ color: '#0A2362', fontWeight: 700 }}>info@hybeq.com</a>
                  </div>

                  <div style={{ display: 'flex', gap: 10, color: '#26344E' }}>
                    <Clock size={18} style={{ color: '#0A2362', flexShrink: 0 }} />
                    <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Regional Depots */}
              <div style={{ background: '#F5F7FB', border: '1.5px solid #DFE6EF', borderRadius: 16, padding: 28 }}>
                <h4 style={{ fontSize: '1.15rem', color: '#0A2362', fontWeight: 800, marginBottom: 14 }}>
                  Regional Logistics &amp; Warehouse Depots
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: '0.875rem' }}>
                  <div>
                    <strong style={{ display: 'block', color: '#0A2362' }}>Ahmedabad Regional Depot</strong>
                    <span style={{ color: '#64748B', fontSize: '0.8125rem' }}>Changodar Industrial Zone, Express delivery to North Gujarat.</span>
                  </div>

                  <div style={{ borderTop: '1px solid #DFE6EF', paddingTop: 10 }}>
                    <strong style={{ display: 'block', color: '#0A2362' }}>Mumbai Logistics Hub</strong>
                    <span style={{ color: '#64748B', fontSize: '0.8125rem' }}>Bhiwandi Warehousing Hub, 24-hr staging for MMR &amp; Pune projects.</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <a
                href="https://wa.link/u9bwq4"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#25D366',
                  color: '#FFFFFF',
                  padding: '16px 24px',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 12,
                  fontWeight: 800,
                  fontSize: '0.9375rem',
                  boxShadow: '0 6px 20px rgba(37,211,102,0.3)',
                  transition: 'transform 0.2s'
                }}
              >
                <MessageCircle size={22} />
                <span>Instant Technical Consultation on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
