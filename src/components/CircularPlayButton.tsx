import React from 'react';
import { Play } from 'lucide-react';

interface CircularPlayButtonProps {
  onClick: () => void;
  title?: string;
  size?: number;
}

/**
 * CircularPlayButton
 * Exact Specification from Section 3.B:
 * - Position: Top-right corner of hero stage
 * - Center: Solid #46C985 circular button with dark navy play triangle icon (#071A45)
 * - Outer Ring: SVG curved circular text repeating: • TIME TO BUILD BETTER • TIME TO BUILD BETTER
 * - Motion: Continuous 360-degree rotation (animation: spin 16s linear infinite;). Hover: 1.05x with glow
 */
export const CircularPlayButton: React.FC<CircularPlayButtonProps> = ({
  onClick,
  title = "Watch HYBEQ Corporate Video"
}) => {
  return (
    <div
      className="vura-step-textcircle"
      onClick={onClick}
      role="button"
      tabIndex={0}
      title={title}
      aria-label={title}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Center: Vibrant HYBEQ Signature Emerald Green (#46C985) circular button with deep navy play icon (#071A45) */}
      <div className="vura-play-circle-icon vura-play-circle-green">
        <Play
          className="vura-play-svg-icon"
          fill="#071A45"
          color="#071A45"
        />
      </div>

      {/* Outer Ring: Rotating circular text from VURA reference */}
      <div className="vura-rotating-ring-wrap">
        <img
          src="/images/bn2-text-dark.png"
          alt="TIME TO BUILD BETTER"
          className="vura-step-circle-img"
        />
      </div>
    </div>
  );
};
