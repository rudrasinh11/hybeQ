import React from 'react';

interface Partner {
  id: string;
  name: string;
  logo: string;
}

export const TrustedPartnersMarquee: React.FC = () => {
  // Row 1: Moves Left (0% to -50%)
  const rowOnePartners: Partner[] = [
    {
      id: 'npcil',
      name: 'NPCIL (Nuclear Power Corp)',
      logo: '/images/clients_transparent/client_npcil-latest-jobs-2025-apply523.png'
    },
    {
      id: 'surat-metro',
      name: 'Surat Metro Rail Project',
      logo: '/images/clients_transparent/client_Surat-Metro-Project-Cost-Construction-Update-Route-Everything-1838.png'
    },
    {
      id: 'adani-power',
      name: 'Adani Power & Infra',
      logo: '/images/clients_transparent/client_adani-power-share-price-target-at-rs-818-3-reasons-the-stock-is-up-9283.png'
    },
    {
      id: 'maruti-suzuki',
      name: 'Maruti Suzuki India',
      logo: '/images/clients_transparent/client_Maruti-Suzuki-Logo-png632.png'
    },
    {
      id: 'dilip-buildcon',
      name: 'Dilip Buildcon Ltd',
      logo: '/images/clients_transparent/client_Dilip_Buildcon_Limited_Logo708.png'
    },
    {
      id: 'amc',
      name: 'Ahmedabad Municipal Corp',
      logo: '/images/clients_transparent/client_ahmedabad-municipal-corporation-1200799.png'
    },
    {
      id: 'ghb',
      name: 'Gujarat Housing Board',
      logo: '/images/clients_transparent/client_gujarat-housing-board348.png'
    }
  ];

  // Row 2: Moves Right (-50% to 0%)
  const rowTwoPartners: Partner[] = [
    {
      id: 'ganesh-housing',
      name: 'Ganesh Housing',
      logo: '/images/clients_transparent/client_ganesh-housing189.png'
    },
    {
      id: 'smc',
      name: 'Surat Municipal Corp',
      logo: '/images/clients_transparent/client_smc603.png'
    },
    {
      id: 'psp-projects',
      name: 'PSP Projects Ltd',
      logo: '/images/clients_transparent/client_psp-project195.png'
    },
    {
      id: 'gsrtc',
      name: 'GSRTC Transit Hubs',
      logo: '/images/clients_transparent/client_250px-Gujarat_State_road_transport_corporation722.png'
    },
    {
      id: 'kiran-hospital',
      name: 'Kiran Multispecialty Hospital',
      logo: '/images/clients_transparent/client_kiran-hospital873.png'
    },
    {
      id: 'shaligram',
      name: 'Shaligram Developers',
      logo: '/images/clients_transparent/client_shaligram-developers876.png'
    },
    {
      id: 'raghuvir',
      name: 'Raghuvir Buildcon',
      logo: '/images/clients_transparent/client_raghuvir-builder-and-developer818.png'
    },
    {
      id: 'vrs',
      name: 'VRS Infrastructure',
      logo: '/images/clients_transparent/client_ind-about-3-1868.png'
    }
  ];

  // Duplicate arrays to create continuous infinite loops
  const rowOneItems = [...rowOnePartners, ...rowOnePartners];
  const rowTwoItems = [...rowTwoPartners, ...rowTwoPartners];

  return (
    <section className="hybeq-partners-section" id="trusted-partners" aria-label="Trusted Institutional Partners">
      <div className="hybeq-partners-container">
        {/* Section Header */}
        <div className="hybeq-partners-header">
          <h2 className="hybeq-partners-title">
            Trusted on Projects That Matter
          </h2>
          <p className="hybeq-partners-subtitle">
            From nuclear containment complexes and metro transit tunnels to high-rise townships, HYBEQ formulations provide certified permanence for India's foremost infrastructure and commercial developers.
          </p>
        </div>

        {/* Dual Opposite Marquee Rows Container */}
        <div className="hybeq-marquee-wrapper" role="region" aria-label="Partner Logos Moving in Opposite Directions">
          {/* Subtle Side Fade Overlays */}
          <div className="hybeq-marquee-fade-left" aria-hidden="true" />
          <div className="hybeq-marquee-fade-right" aria-hidden="true" />

          {/* Row 1: Moves Left (0% to -50%) — Pure PNG Logos Without Background */}
          <div className="hybeq-marquee-row hybeq-marquee-row-left" tabIndex={0} aria-label="Row 1: Institutional Partner Logos">
            <div className="hybeq-marquee-track hybeq-track-left">
              {rowOneItems.map((p, idx) => (
                <div key={`${p.id}-${idx}`} className="hybeq-partner-logo-item" title={p.name}>
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="hybeq-partner-pure-logo"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Moves Right (-50% to 0%) — Pure PNG Logos Without Background */}
          <div className="hybeq-marquee-row hybeq-marquee-row-right" tabIndex={0} aria-label="Row 2: Infrastructure & Real Estate Partner Logos">
            <div className="hybeq-marquee-track hybeq-track-right">
              {rowTwoItems.map((p, idx) => (
                <div key={`${p.id}-${idx}`} className="hybeq-partner-logo-item" title={p.name}>
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="hybeq-partner-pure-logo"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footnote on verified relationship */}
        <div className="hybeq-partners-footnote">
          <span>* Actual client projects executed with HYBEQ / Chemax industrial chemical formulations across Gujarat and pan-India.</span>
        </div>
      </div>
    </section>
  );
};
