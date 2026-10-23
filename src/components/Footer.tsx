import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ChevronRight } from 'lucide-react';

/**
 * Authentic VURA-style Footer (.footer-version-one & .footer-topversion-one)
 * Faithfully reconstructed from https://vura.ae/ for HYBEQ
 */
export const Footer: React.FC = () => {
  return (
    <footer className="footer-version-one zindex1 position-relative" id="vura-footer">
      <div className="vura-container">
        
        {/* ============================================================
            FOOTER TOP VERSION ONE (.footer-topversion-one)
            Authoritative recreation from live VURA inspection
            ============================================================ */}
        <div className="footer-topversion-one pt-20 pb-20">
          <div className="footer-widget-grid">
            
            {/* Column 1: Address, Contact & Socials */}
            <div className="footer-widget">
              <h5 className="footer-title">
                Address
                <svg
                  className="d-block"
                  width="83"
                  height="2"
                  viewBox="0 0 83 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <line
                    y1="-1"
                    x2="83"
                    y2="-1"
                    transform="matrix(1 0 0 -1 0 0)"
                    stroke="url(#paint0_linear_footer_address)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_footer_address"
                      x1="4.02912"
                      y1="0.000277584"
                      x2="80"
                      y2="0.000110496"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#46C985" />
                      <stop offset="1" stopColor="#46C985" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </h5>

              <p className="pra-clr">
                <b>REGD. OFFICE:</b>
                <br />
                S25, Atlanta Shopping Mall, Althan-Bhimrad Canal Road, Althan, Surat-395007, Gujarat, India.
                <br />
                Toll Free: 1800 419 3637 | Phone: +91 8000803933
              </p>

              <div className="footer-mail">
                <Mail size={16} style={{ color: '#46C985', flexShrink: 0 }} />
                <a href="mailto:info@hybeq.com">info@hybeq.com</a>
              </div>

              {/* Verified Social Media Icons matching VURA SVG Specifications */}
              <ul className="common-social" aria-label="HYBEQ Social Media">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-center"
                    aria-label="Facebook"
                  >
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-center"
                    aria-label="Twitter / X"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.32 0H0L6.58 7.13L0 16H3.32L8.35 9.93L13.09 16H16L9.01 7.99L15.07 0H11.77L7.31 5.57L3.32 0Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-center"
                    aria-label="LinkedIn"
                  >
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-center"
                    aria-label="YouTube"
                  >
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.1769 1.87759C16.9806 1.13853 16.4023 0.556469 15.668 0.358938C14.337 0 9.00014 0 9.00014 0C9.00014 0 3.66327 0 2.3323 0.358938C1.59802 0.5565 1.0197 1.13853 0.823422 1.87759C0.466797 3.21719 0.466797 6.01213 0.466797 6.01213C0.466797 6.01213 0.466797 8.80706 0.823422 10.1467C1.0197 10.8857 1.59802 11.4435 2.3323 11.6411C3.66327 12 9.00014 12 9.00014 12C9.00014 12 14.337 12 15.668 11.6411C16.4023 11.4435 16.9806 10.8857 17.1769 10.1467C17.5335 8.80706 17.5335 6.01213 17.5335 6.01213C17.5335 6.01213 17.5335 3.21719 17.1769 1.87759V1.87759ZM7.25467 8.54972V3.47453L11.7153 6.01219L7.25467 8.54972V8.54972Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-center"
                    aria-label="Instagram"
                  >
                    <svg width="17" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.75 0H5.25C2.35 0 0 2.35 0 5.25V12.75C0 15.65 2.35 18 5.25 18H12.75C15.65 18 18 15.65 18 12.75V5.25C18 2.35 15.65 0 12.75 0ZM16.2 12.75C16.2 14.95 14.45 16.8 12.3 16.8H5.7C3.55 16.8 1.8 14.95 1.8 12.75V5.25C1.8 3.05 3.55 1.2 5.7 1.2H12.3C14.45 1.2 16.2 3.05 16.2 5.25V12.75ZM9 4.5C6.52 4.5 4.5 6.52 4.5 9C4.5 11.48 6.52 13.5 9 13.5C11.48 13.5 13.5 11.48 13.5 9C13.5 6.52 11.48 4.5 9 4.5ZM9 12C7.35 12 6 10.65 6 9C6 7.35 7.35 6 9 6C10.65 6 12 7.35 12 9C12 10.65 10.65 12 9 12ZM13.8 3.6C13.8 4.1 13.4 4.5 12.9 4.5C12.4 4.5 12 4.1 12 3.6C12 3.1 12.4 2.7 12.9 2.7C13.4 2.7 13.8 3.1 13.8 3.6Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Products */}
            <div className="footer-widget">
              <h5 className="footer-title">
                Products
                <svg
                  className="d-block"
                  width="83"
                  height="2"
                  viewBox="0 0 83 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <line
                    y1="-1"
                    x2="83"
                    y2="-1"
                    transform="matrix(1 0 0 -1 0 0)"
                    stroke="url(#paint0_linear_footer_products)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_footer_products"
                      x1="4.02912"
                      y1="0.000277584"
                      x2="80"
                      y2="0.000110496"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#46C985" />
                      <stop offset="1" stopColor="#46C985" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </h5>

              <ul className="link-footer">
                <li>
                  <Link to="/products/tile-fixing" className="flink-items">
                    <span className="ani-icons">
                      <ChevronRight size={13} />
                    </span>
                    Ceramic &amp; Tile Adhesives
                  </Link>
                </li>
                <li>
                  <Link to="/products/waterproofing" className="flink-items">
                    <span className="ani-icons">
                      <ChevronRight size={13} />
                    </span>
                    Waterproofing Systems
                  </Link>
                </li>
                <li>
                  <Link to="/products/repairs" className="flink-items">
                    <span className="ani-icons">
                      <ChevronRight size={13} />
                    </span>
                    Repairs &amp; Structural Mortars
                  </Link>
                </li>
                <li>
                  <Link to="/products/maintenance" className="flink-items">
                    <span className="ani-icons">
                      <ChevronRight size={13} />
                    </span>
                    Maintenance &amp; Cleaners
                  </Link>
                </li>
                <li>
                  <Link to="/products/grouts" className="flink-items">
                    <span className="ani-icons">
                      <ChevronRight size={13} />
                    </span>
                    Stonecare &amp; Epoxy Grouts
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Manufacturing Facilities */}
            <div className="footer-widget">
              <h5 className="footer-title">
                Manufacturing Facilities
                <svg
                  className="d-block"
                  width="83"
                  height="2"
                  viewBox="0 0 83 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <line
                    y1="-1"
                    x2="83"
                    y2="-1"
                    transform="matrix(1 0 0 -1 0 0)"
                    stroke="url(#paint0_linear_footer_mfg)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_footer_mfg"
                      x1="4.02912"
                      y1="0.000277584"
                      x2="80"
                      y2="0.000110496"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#46C985" />
                      <stop offset="1" stopColor="#46C985" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </h5>

              <ul className="link-footer">
                <li>
                  <Link to="/contact" className="flink-items">
                    <span className="ani-icons">
                      <ChevronRight size={13} />
                    </span>
                    Plant 01_Surat Dry-Mix Tower, Gujarat
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="flink-items">
                    <span className="ani-icons">
                      <ChevronRight size={13} />
                    </span>
                    Plant 02_Ankleshwar Polymer Emulsion, Gujarat
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="flink-items">
                    <span className="ani-icons">
                      <ChevronRight size={13} />
                    </span>
                    Plant 03_Rajasthan Sand &amp; Minerals Hub
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: WareHouse Facilities */}
            <div className="footer-widget">
              <h5 className="footer-title">
                WareHouse Facilities
                <svg
                  className="d-block"
                  width="83"
                  height="2"
                  viewBox="0 0 83 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <line
                    y1="-1"
                    x2="83"
                    y2="-1"
                    transform="matrix(1 0 0 -1 0 0)"
                    stroke="url(#paint0_linear_footer_wh)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_footer_wh"
                      x1="4.02912"
                      y1="0.000277584"
                      x2="80"
                      y2="0.000110496"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#46C985" />
                      <stop offset="1" stopColor="#46C985" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </h5>

              <ul className="link-footer">
                <li>
                  <Link to="/contact" className="flink-items">
                    <span className="ani-icons">
                      <ChevronRight size={13} />
                    </span>
                    WareHouse 01_Maharashtra Logistics Hub (Bhiwandi)
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="flink-items">
                    <span className="ani-icons">
                      <ChevronRight size={13} />
                    </span>
                    WareHouse 02_West Bengal Integrated Depot
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="flink-items">
                    <span className="ani-icons">
                      <ChevronRight size={13} />
                    </span>
                    WareHouse 03_Tamil Nadu Regional Depot
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="flink-items">
                    <span className="ani-icons">
                      <ChevronRight size={13} />
                    </span>
                    WareHouse 04_Andhra Pradesh Staging Hub
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* ============================================================
            FOOTER BOTTOM VERSION ONE (.footer-bottom-version-one)
            Rounded Brand Container matching VURA's exact bottom bar
            ============================================================ */}
        <div className="footer-bottom-version-one">
          <Link to="/" className="footer-logov1" aria-label="HYBEQ Chemicals Home">
            <img
              src="/images/hybeq-original-logo-white.png"
              alt="HYBEQ"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/hybeq-original-logo.png';
              }}
            />
          </Link>
          <p className="pra-clr">
            <Link to="/about" className="theme-clr">About Us</Link> •{' '}
            <Link to="/careers" className="theme-clr">Career</Link> •{' '}
            <Link to="/privacy-policy" className="theme-clr">Privacy Policy</Link> •{' '}
            <Link to="/terms-of-use" className="theme-clr">Terms of Use</Link>
          </p>
          <p className="pra-clr">
            &copy; All Copyright {new Date().getFullYear()} by{' '}
            <Link to="/" className="theme-clr">HYBEQ Chemicals (Chemax Infrachem)</Link>
          </p>
        </div>

      </div>
    </footer>
  );
};
