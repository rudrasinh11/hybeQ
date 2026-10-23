import React, { useState, useEffect, useRef } from 'react';
import { CLIENT_PARTNERS } from '../data/clientsData';

interface CounterNumberProps {
  end: number;
  suffix?: string;
  duration?: number;
  startTrigger: boolean;
}

const CounterNumber: React.FC<CounterNumberProps> = ({
  end,
  suffix = '',
  duration = 1800,
  startTrigger
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startTrigger) {
      setValue(0);
      return;
    }

    let startTimestamp: number | null = null;
    let animId: number;

    const animate = (now: number) => {
      if (!startTimestamp) startTimestamp = now;
      const elapsed = now - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easeOutCubic curve for pleasant settling
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(easeOut * end));

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [startTrigger, end, duration]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
};

export const ClientsPartnersSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  // Trigger counter animation on scroll into view or after initial load
  useEffect(() => {
    // Immediate fallback trigger after 400ms so numbers are never blank
    const fallbackTimer = setTimeout(() => {
      setStatsVisible(true);
    }, 400);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
          }
        });
      },
      { threshold: 0.05 }
    );

    const currentElem = bottomBarRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      clearTimeout(fallbackTimer);
      if (currentElem) observer.unobserve(currentElem);
    };
  }, []);

  // Split clients into two balanced sets for the dual opposite marquees
  const half = Math.ceil(CLIENT_PARTNERS.length / 2);
  const row1 = CLIENT_PARTNERS.slice(0, half);
  const row2 = CLIENT_PARTNERS.slice(half);

  // Repeat each row items 3 times for a completely seamless, gap-free infinite loop
  const row1Items = [...row1, ...row1, ...row1];
  const row2Items = [...row2, ...row2, ...row2];

  return (
    <section className="vura-clients-section" id="clients" aria-label="Clients and Partners">
      <div className="vura-clients-header-container">
        
        {/* Top Tag Badge */}
        <div className="vura-clients-badge-wrap">
          <div className="vura-clients-badge">
            <span className="vura-clients-badge-dot"></span>
            <span>OUR CLIENTS &amp; PARTNERS</span>
          </div>
        </div>

        {/* Section Heading & Simplified, Balanced Subtitle */}
        <div className="vura-clients-title-center">
          <h2 className="vura-clients-main-heading">
            Trusted by Leading <span style={{ color: '#46C985' }}>Builders &amp; Developers</span>
          </h2>
          <p className="vura-clients-subtitle">
            Supplying high-performance construction chemicals for landmark infrastructure and premier developments across India.
          </p>
        </div>

      </div>

      {/* Dual Opposite Marquee Container (No Black Background, Clean Logos) */}
      <div
        className="vura-clients-dual-marquee"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        role="region"
        aria-label="Client logos carousel"
      >
        {/* Row 1: Moves Left */}
        <div className="vura-marquee-row">
          <div className={`vura-marquee-track vura-marquee-track-left ${isPaused ? 'paused' : ''}`}>
            {row1Items.map((client, idx) => (
              <div
                key={`r1-${client.name}-${idx}`}
                className="vura-client-logo-card"
                title={`${client.name} — ${client.category}`}
              >
                <img
                  src={client.logo || client.whiteLogo}
                  alt={client.name}
                  className="vura-client-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moves Right (Opposite Direction) */}
        <div className="vura-marquee-row">
          <div className={`vura-marquee-track vura-marquee-track-right ${isPaused ? 'paused' : ''}`}>
            {row2Items.map((client, idx) => (
              <div
                key={`r2-${client.name}-${idx}`}
                className="vura-client-logo-card"
                title={`${client.name} — ${client.category}`}
              >
                <img
                  src={client.logo || client.whiteLogo}
                  alt={client.name}
                  className="vura-client-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          BIG OUTLINED METRIC COUNTERS (1:1 with user reference image)
          Columns: 500+ Happy Clients | 200+ Complete Project | 21+ Years of Expertise | 4+ Winning Awards
          ============================================================ */}
      <div className="vura-big-stats-section" ref={bottomBarRef}>
        <div className="vura-big-stats-container">
          
          <div className="vura-big-stat-col">
            <div className="vura-big-stat-number-wrap">
              <span className="vura-big-stat-num-outline">
                <CounterNumber end={500} suffix="+" startTrigger={statsVisible} duration={2200} />
              </span>
            </div>
            <div className="vura-big-stat-divider" />
            <span className="vura-big-stat-label">Happy Clients</span>
          </div>

          <div className="vura-big-stat-col">
            <div className="vura-big-stat-number-wrap">
              <span className="vura-big-stat-num-outline">
                <CounterNumber end={200} suffix="+" startTrigger={statsVisible} duration={2000} />
              </span>
            </div>
            <div className="vura-big-stat-divider" />
            <span className="vura-big-stat-label">Complete Project</span>
          </div>

          <div className="vura-big-stat-col">
            <div className="vura-big-stat-number-wrap">
              <span className="vura-big-stat-num-outline">
                <CounterNumber end={21} suffix="+" startTrigger={statsVisible} duration={1800} />
              </span>
            </div>
            <div className="vura-big-stat-divider" />
            <span className="vura-big-stat-label">Years of Expertise</span>
          </div>

          <div className="vura-big-stat-col">
            <div className="vura-big-stat-number-wrap">
              <span className="vura-big-stat-num-outline">
                <CounterNumber end={4} suffix="+" startTrigger={statsVisible} duration={1500} />
              </span>
            </div>
            <div className="vura-big-stat-divider" />
            <span className="vura-big-stat-label">Winning Awards</span>
          </div>

        </div>
      </div>
    </section>
  );
};
