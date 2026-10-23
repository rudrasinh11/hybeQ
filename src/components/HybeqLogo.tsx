import React from 'react';

interface HybeqLogoProps {
  variant?: 'light' | 'dark' | 'original';
  height?: number | string;
  className?: string;
}

export const HybeqLogo: React.FC<HybeqLogoProps> = ({
  variant = 'dark',
  height = 36,
  className = ''
}) => {
  // 'dark' = for dark backgrounds (white text + green Q)
  // 'original' or 'light' = original navy text + green Q
  const logoSrc = variant === 'dark'
    ? '/images/hybeq-original-logo-white.png'
    : '/images/hybeq-original-logo.png';

  return (
    <div
      className={`hybeq-logo-wrapper ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center' }}
    >
      <img
        src={logoSrc}
        alt="HybeQ by Chemax"
        style={{
          height: typeof height === 'number' ? `${height}px` : height,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block'
        }}
        onError={(e) => {
          // Fallback to original if white is not found
          (e.currentTarget as HTMLImageElement).src = '/images/hybeq-original-logo.png';
        }}
      />
    </div>
  );
};
