import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  CalendarCheck
} from 'lucide-react';
import { PhoneInputWithCountry, COUNTRIES } from '../components/PhoneInputWithCountry';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'product-inquiry',
    message: ''
  });

  const [countryCode, setCountryCode] = useState('IN');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    const selectedCountry = COUNTRIES.find(c => c.code === countryCode) || COUNTRIES[0];
    
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (countryCode === 'IN' && !/^[0-9]{10}$/.test(formData.phone.trim())) {
      errs.phone = 'Phone number must contain exactly 10 digits';
    } else if (formData.phone.trim().length < 7 || formData.phone.trim().length > selectedCountry.maxLength) {
      errs.phone = `Phone number must be valid (${selectedCountry.format})`;
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide inquiry specifications';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    const selectedCountry = COUNTRIES.find(c => c.code === countryCode) || COUNTRIES[0];
    const fullPhoneNumber = formData.phone.startsWith('+')
      ? formData.phone
      : `${selectedCountry.dialCode} ${formData.phone.trim()}`;

    // Full phone number preserved without duplication
    console.log('Submitting Contact Inquiry:', {
      ...formData,
      fullPhoneNumber,
      country: selectedCountry.name
    });

    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="contact-page">
      {/* ── 1. Hero Section: Desktop & Mobile Optimized ── */}
      <section className="contact-hero-section" aria-label="Contact Hybeq Technical Desk">
        <div className="contact-hero-inner">
          <span className="contact-hero-tag">
            <ShieldCheck size={14} /> Corporate Headquarters &amp; Depots
          </span>
          <h1 className="contact-hero-heading">
            Contact Hybeq <span className="hero-highlight-green">Technical Desk</span>
          </h1>
          <p className="contact-hero-desc">
            Speak directly with technical application engineers, request certified physical material samples,
            or locate your nearest regional authorized distributor.
          </p>

          {/* Quick Contact & Verified Response Badges */}
          <div className="contact-hero-pills">
            <a href="tel:+919825112345" className="contact-hero-pill-item" title="Call Hybeq Direct Line">
              <span className="pill-icon"><Phone size={14} /></span>
              <span>+91 9825112345</span>
            </a>
            <a href="mailto:info@hybeq.com" className="contact-hero-pill-item" title="Email Hybeq Support">
              <span className="pill-icon"><Mail size={14} /></span>
              <span>info@hybeq.com</span>
            </a>
            <div className="contact-hero-pill-item">
              <span className="pill-icon"><CalendarCheck size={14} /></span>
              <span>Response Within 2 Business Hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Main Contact Layout Section ── */}
      <section className="contact-main-section">
        <div className="contact-main-container">
          <div className="contact-main-grid">
            
            {/* Left Column: Direct Inquiry Form Card */}
            <div className="contact-form-card" id="inquiry-form">
              <span className="contact-form-tag">Direct Inquiry Channel</span>
              <h2 className="contact-form-title">
                Send Us Your Project Requirements
              </h2>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="contact-form-element" noValidate>
                  {/* Row 1: Full Name & Phone Number (Responsive 2-col to 1-col on Mobile) */}
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label className="contact-form-label" htmlFor="contact-full-name">
                        Full Name <span className="req-star">*</span>
                      </label>
                      <input
                        id="contact-full-name"
                        type="text"
                        value={formData.name}
                        onChange={e => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) {
                            setErrors(prev => {
                              const updated = { ...prev };
                              delete updated.name;
                              return updated;
                            });
                          }
                        }}
                        placeholder="e.g. Anand Deshmukh"
                        className={`contact-form-input ${errors.name ? 'has-error' : ''}`}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <span className="contact-error-msg" role="alert">
                          <AlertCircle size={13} /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="contact-form-group">
                      <label className="contact-form-label" htmlFor="contact-phone-input">
                        Phone Number <span className="req-star">*</span>
                      </label>
                      <PhoneInputWithCountry
                        phone={formData.phone}
                        countryCode={countryCode}
                        onPhoneChange={(cleanPhone) => {
                          setFormData(prev => ({ ...prev, phone: cleanPhone }));
                          if (errors.phone) {
                            setErrors(prev => {
                              const updated = { ...prev };
                              delete updated.phone;
                              return updated;
                            });
                          }
                        }}
                        onCountryChange={(c) => setCountryCode(c.code)}
                        error={errors.phone}
                        placeholder="Enter mobile number"
                      />
                    </div>
                  </div>

                  {/* Row 2: Official Email & Inquiry Nature */}
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label className="contact-form-label" htmlFor="contact-email">
                        Official Email <span className="req-star">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={e => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) {
                            setErrors(prev => {
                              const updated = { ...prev };
                              delete updated.email;
                              return updated;
                            });
                          }
                        }}
                        placeholder="contractor@domain.com"
                        className={`contact-form-input ${errors.email ? 'has-error' : ''}`}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <span className="contact-error-msg" role="alert">
                          <AlertCircle size={13} /> {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="contact-form-group">
                      <label className="contact-form-label" htmlFor="contact-subject">
                        Inquiry Nature
                      </label>
                      <select
                        id="contact-subject"
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        className="contact-form-select"
                      >
                        <option value="product-inquiry">Commercial Material Supply</option>
                        <option value="dealership">Dealership / Distribution Request</option>
                        <option value="site-inspection">On-Site Adhesion Pull-Off Testing</option>
                        <option value="sample-request">Physical Material Sample Dispatch</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Project Specifications Message */}
                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="contact-message">
                      Project Specifications / Message <span className="req-star">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={e => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) {
                          setErrors(prev => {
                            const updated = { ...prev };
                            delete updated.message;
                            return updated;
                          });
                        }
                      }}
                      placeholder="Please mention substrate details, tile type/dimensions, or application area..."
                      className={`contact-form-textarea ${errors.message ? 'has-error' : ''}`}
                    />
                    {errors.message && (
                      <span className="contact-error-msg" role="alert">
                        <AlertCircle size={13} /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Transmit Inquiry Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="contact-submit-btn"
                    aria-label="Transmit Project Requirements Inquiry"
                  >
                    {submitting ? (
                      'Transmitting...'
                    ) : (
                      <>
                        <span>TRANSMIT INQUIRY</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Confirmation State */
                <div className="contact-success-card" role="status">
                  <div className="contact-success-icon-wrap">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="contact-success-title">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="contact-success-desc">
                    Thank you, <strong>{formData.name}</strong>. Our technical engineering desk has received
                    your project parameters and will respond to <strong>{formData.email}</strong> within 2 business hours.
                  </p>
                  <button
                    type="button"
                    className="contact-submit-btn"
                    style={{ maxWidth: 280, margin: '0 auto' }}
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

            {/* Right Column: Verified Facilities & Headquarters Information */}
            <div className="contact-side-column">
              {/* Surat Headquarters & Unit 1 (Matches Reference Design) */}
              <div className="contact-hq-card">
                <div className="contact-hq-header">
                  <div className="contact-hq-icon-box" aria-hidden="true">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h3 className="contact-hq-title">
                      Surat Headquarters &amp; Unit 1
                    </h3>
                    <span className="contact-hq-subtitle">Continuous Blending Plant</span>
                  </div>
                </div>

                <div className="contact-hq-details-list">
                  <div className="contact-hq-detail-item">
                    <MapPin size={18} className="item-icon" />
                    <span>Plot No. 124–126, GIDC Industrial Estate, Sachin, Surat – 394230, Gujarat, India</span>
                  </div>

                  <div className="contact-hq-detail-item">
                    <Phone size={18} className="item-icon" />
                    <a href="tel:+919825112345" className="contact-hq-link" title="Call Surat Headquarters">
                      +91 9825112345
                    </a>
                  </div>

                  <div className="contact-hq-detail-item">
                    <Mail size={18} className="item-icon" />
                    <a href="mailto:info@hybeq.com" className="contact-hq-link" title="Email Surat Office">
                      info@hybeq.com
                    </a>
                  </div>

                  <div className="contact-hq-detail-item">
                    <Clock size={18} className="item-icon" />
                    <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Regional Logistics & Warehouse Depots */}
              <div className="contact-depots-card">
                <h4 className="contact-depots-title">
                  Regional Logistics &amp; Warehouse Depots
                </h4>

                <div className="contact-depots-list">
                  <div className="contact-depot-item">
                    <strong>Ahmedabad Regional Depot</strong>
                    <span>Changodar Industrial Zone, Express delivery dispatch to North Gujarat &amp; Saurashtra.</span>
                  </div>

                  <div className="contact-depot-item">
                    <strong>Mumbai Logistics Hub</strong>
                    <span>Bhiwandi Warehousing Hub, 24-hr staging for MMR, Thane, Navi Mumbai &amp; Pune megaprojects.</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <a
                href="https://wa.link/u9bwq4"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp-btn"
                title="Open WhatsApp Consultation"
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
