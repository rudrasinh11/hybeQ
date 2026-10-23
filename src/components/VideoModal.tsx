import React, { useEffect } from 'react';
import { X, ExternalLink, Shield } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl = "https://www.youtube.com/embed/kpB1AUSneTQ?autoplay=1&rel=0&modestbranding=1",
  title = "HYBEQ Chemical Innovation & Polymer Engineering"
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="vura-video-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.88)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'vuraFadeIn 0.3s ease'
      }}
    >
      <div
        className="vura-video-modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1000px',
          backgroundColor: '#0D0D0D',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
        }}
      >
        {/* Header bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            backgroundColor: '#141414'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#46C985',
                display: 'inline-block'
              }}
            />
            <span
              style={{
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '0.5px'
              }}
            >
              {title}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Video"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer',
              transition: 'background 0.2s ease, transform 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#46C985';
              e.currentTarget.style.color = '#071A45';
              e.currentTarget.style.transform = 'rotate(90deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'rotate(0deg)';
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Player Frame */}
        <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%', // 16:9 Aspect Ratio
            height: 0,
            overflow: 'hidden',
            backgroundColor: '#000000'
          }}
        >
          <iframe
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
          />
        </div>

        {/* Footer info bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 24px',
            backgroundColor: '#111111',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.7)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Shield size={14} color="#46C985" />
              German Polymer Formulations &bull; IS 15477 Type 1 to 4 S2
            </span>
          </div>

          <a
            href="https://www.youtube.com/@hybeq-thebuildingchemicalsexpe"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#46C985',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 600
            }}
          >
            Visit HYBEQ YouTube Channel <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
};
