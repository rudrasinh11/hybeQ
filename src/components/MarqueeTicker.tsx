import React from 'react';

/**
 * Authentic VURA Infinite Scrolling Marquee Banner
 * Featuring the authoritative 'Time to build better' (.text-custom-storke-cs) UI component
 * Reconstructed with exact precision from live inspection of https://vura.ae/
 */
export const MarqueeTicker: React.FC = () => {
  const content = (
    <>
      <div className="cmn-textslide theme-clr">Time to build better</div>
      <div className="marquee-divider-img">
        <img
          src="/images/text-slide.png"
          alt="Sunburst Divider"
          className="vura-marquee-star"
        />
      </div>
      <div className="text-custom-storke-cs text-custom-thin-text">
        Time to build better
      </div>
      <div className="cmn-textslide theme-clr">Time to build better</div>
      <div className="marquee-divider-img">
        <img
          src="/images/text-slide.png"
          alt="Sunburst Divider"
          className="vura-marquee-star"
        />
      </div>
      <div className="text-custom-storke-cs text-custom-thin-text">
        Time to build better
      </div>
    </>
  );

  return (
    <div
      className="digital-solution pt-space testi-italic blackbg pb-lg-15 pb-14"
      aria-label="Brand Mission Ticker"
    >
      <div className="mycustom-marque">
        <div className="scrolling-wrap">
          <div className="comm">{content}</div>
          <div className="comm" aria-hidden="true">
            {content}
          </div>
          <div className="comm" aria-hidden="true">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};
