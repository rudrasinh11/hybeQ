import React from 'react';
import { MessageSquare, PhoneCall, ArrowUpRight, Clock, ShieldCheck, Mail } from 'lucide-react';

interface DirectContactStripProps {
  onOpenEnquiry?: () => void;
}

export const DirectContactStrip: React.FC<DirectContactStripProps> = ({
  onOpenEnquiry
}) => {
  return (
    <section className="hybeq-contact-strip" id="contact-action-strip" aria-label="Direct Technical Assistance and Contact">
      <div className="hybeq-contact-strip-bg" aria-hidden="true" />
      
      <div className="hybeq-contact-strip-container">
        <div className="hybeq-contact-strip-inner">
          
          {/* Left Text Column */}
          <div className="hybeq-strip-content">
            <h2 className="hybeq-strip-title">
              Need the Right Solution for Your Project?
            </h2>

            <p className="hybeq-strip-desc">
              Speak directly with our senior civil chemists and application engineers. We provide substrate condition audits, specification guidance, BOQ material estimation, and free on-site product trials.
            </p>

            <div className="hybeq-strip-meta">
              <div className="hybeq-strip-meta-item">
                <Clock size={15} />
                <span>Immediate response Mon–Sat (9 AM – 6:30 PM IST)</span>
              </div>
              <div className="hybeq-strip-meta-item">
                <ShieldCheck size={15} />
                <span>Pan-India certified technical service network</span>
              </div>
            </div>
          </div>

          {/* Right Action Buttons Column */}
          <div className="hybeq-strip-actions">
            
            {/* Primary Action: Direct WhatsApp Chat */}
            <a
              href="https://wa.me/919327000898?text=Hello%20HYBEQ%20Team%2C%20I%20need%20technical%20guidance%20for%20my%20construction%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="hybeq-strip-btn hybeq-strip-btn-whatsapp"
              aria-label="Chat with HYBEQ Technical Team on WhatsApp (+91 93270 00898)"
            >
              <MessageSquare size={19} className="hybeq-strip-btn-icon" />
              <div className="hybeq-strip-btn-text">
                <span className="hybeq-btn-sub">Instant Consultation</span>
                <strong className="hybeq-btn-main">Chat on WhatsApp</strong>
              </div>
            </a>

            {/* Secondary Action: Click-to-Call Toll-Free */}
            <a
              href="tel:18004193637"
              className="hybeq-strip-btn hybeq-strip-btn-call"
              aria-label="Call HYBEQ Toll-Free on 1800 419 3637"
            >
              <PhoneCall size={19} className="hybeq-strip-btn-icon" />
              <div className="hybeq-strip-btn-text">
                <span className="hybeq-btn-sub">Toll-Free Support</span>
                <strong className="hybeq-btn-main">1800 419 3637</strong>
              </div>
            </a>

            {/* Tertiary Action: Modal Form Request */}
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="hybeq-strip-btn hybeq-strip-btn-enquiry"
              aria-label="Request Site Inspection or Material Quotation"
            >
              <Mail size={19} className="hybeq-strip-btn-icon" />
              <div className="hybeq-strip-btn-text">
                <span className="hybeq-btn-sub">Submit Project Details</span>
                <strong className="hybeq-btn-main">Request Site Inspection</strong>
              </div>
              <ArrowUpRight size={17} className="hybeq-strip-arrow" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
