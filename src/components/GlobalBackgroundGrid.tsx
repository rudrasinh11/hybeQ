import React from 'react';

/**
 * GlobalBackgroundGrid
 * Hairline Grid with Traveling Light Tracers (VURA 1:1 Reference)
 * Exact production implementation from Section 2 of Specification:
 * - 6 Vertical Hairlines across max-w-[1440px]
 * - w-[1px] bg-white/[0.07]
 * - Tiny glowing light dashes: height 22px, width 2px
 * - HYBEQ Green (#46C985) with white core and box-shadow glow
 * - Continuous dropTracer animation with randomized delays
 */
export const GlobalBackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div className="max-w-[1440px] h-full mx-auto flex justify-between px-6 sm:px-12">
        {/* 6 Vertical Hairlines */}
        <div className="relative w-[1px] h-full bg-white/[0.07]">
          <span className="tracer delay-1"></span>
        </div>
        <div className="relative w-[1px] h-full bg-white/[0.07]"></div>
        <div className="relative w-[1px] h-full bg-white/[0.07]">
          <span className="tracer delay-2"></span>
        </div>
        <div className="relative w-[1px] h-full bg-white/[0.07]"></div>
        <div className="relative w-[1px] h-full bg-white/[0.07]">
          <span className="tracer delay-3"></span>
        </div>
        <div className="relative w-[1px] h-full bg-white/[0.07]">
          <span className="tracer delay-4"></span>
        </div>
      </div>
    </div>
  );
};
