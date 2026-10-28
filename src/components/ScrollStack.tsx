import React, { useRef, useEffect, useState } from 'react';

export interface ScrollStackProps {
  children: React.ReactNode;
  itemDistance?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  itemScale?: number;
  baseScale?: number;
  dimAmount?: number;
  smoothScroll?: boolean;
  useWindowScroll?: boolean;
  className?: string;
}

export interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
  className = '',
  style = {}
}) => {
  return (
    <div
      className={`scroll-stack-item ${className} ${itemClassName}`}
      style={{
        borderRadius: '24px',
        padding: '36px 32px',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, filter 0.3s ease',
        willChange: 'transform, opacity',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  itemDistance = 90,
  itemStackDistance = 20,
  stackPosition = '20%',
  itemScale = 0.04,
  baseScale = 0.88,
  dimAmount = 0.2,
  smoothScroll: _smoothScroll = true,
  useWindowScroll: _useWindowScroll = true,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const items = React.Children.toArray(children);
  const [scrollProgress, setScrollProgress] = useState<number[]>(items.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress for each card
      const newProgress = items.map((_, idx) => {
        // Distance each card travels before sticking
        const cardTrigger = viewportHeight * 0.25 + idx * itemDistance;
        const currentDistance = -containerRect.top + cardTrigger;
        return Math.max(0, currentDistance);
      });

      setScrollProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items.length, itemDistance]);

  return (
    <div
      ref={containerRef}
      className={`scroll-stack-container ${className}`}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: `${itemDistance}px`,
        paddingBottom: '40px'
      }}
    >
      {items.map((child, idx) => {
        // Sticky offset for each card
        const topOffset = `calc(${stackPosition} + ${idx * itemStackDistance}px)`;
        const isCovered = idx < items.length - 1 && scrollProgress[idx + 1] > 60;
        const scaleVal = isCovered
          ? Math.max(baseScale, 1 - (items.length - 1 - idx) * itemScale)
          : 1;
        const opacityVal = isCovered ? 1 - dimAmount : 1;

        return (
          <div
            key={idx}
            className="scroll-stack-sticky-wrap"
            style={{
              position: 'sticky',
              top: topOffset,
              zIndex: idx + 1,
              transform: `scale(${scaleVal})`,
              opacity: opacityVal,
              transition: 'transform 0.35s ease, opacity 0.35s ease',
              transformOrigin: 'top center',
              marginBottom: `${Math.max(16, itemDistance / 2)}px`
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default ScrollStack;

