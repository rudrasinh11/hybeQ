import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GlobalReachSectionProps {
  onOpenEnquiry?: () => void;
}

export const GlobalReachSection: React.FC<GlobalReachSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="hybeq-reach-section" id="global-reach" aria-label="Global Reach & Export Ambition">
      <div className="hybeq-reach-container">
        {/* Top Centered Content Block */}
        <div className="hybeq-reach-content">
          <span className="hybeq-reach-eyebrow">OUR REACH</span>
          <h2 className="hybeq-reach-headline">
            Local Expertise. <span className="hybeq-reach-highlight">Global Ambition.</span>
          </h2>
          <p className="hybeq-reach-description">
            Construction challenges may differ across regions, but the need for reliable materials remains universal. HYBEQ aims to expand its reach through quality-focused solutions, industry relationships, and a commitment to serving the evolving needs of construction markets.
          </p>
          <div className="hybeq-reach-action">
            {onOpenEnquiry ? (
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="hybeq-reach-cta-btn"
                aria-label="Connect With HYBEQ"
              >
                <span>Connect With HYBEQ</span>
                <ArrowRight size={17} className="hybeq-reach-btn-arrow" />
              </button>
            ) : (
              <Link
                to="/contact"
                className="hybeq-reach-cta-btn"
                aria-label="Connect With HYBEQ"
              >
                <span>Connect With HYBEQ</span>
                <ArrowRight size={17} className="hybeq-reach-btn-arrow" />
              </Link>
            )}
          </div>
        </div>

        {/* Full-Width Global Port Logistics Visual with Rounded Upper Corners */}
        <div className="hybeq-reach-media-wrap">
          <img
            src="/images/hybeq_global_port.jpg"
            alt="International maritime cargo terminal and global logistics infrastructure"
            className="hybeq-reach-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
