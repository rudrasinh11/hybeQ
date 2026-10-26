import React from 'react';
import { Sparkles } from 'lucide-react';

export type HeroMode = 'default' | 'concept1' | 'concept2' | 'concept3' | 'concept4' | 'concept5';

interface Props {
  currentMode: HeroMode;
  onChangeMode: (mode: HeroMode) => void;
}

export const HeroLabBar: React.FC<Props> = ({ currentMode, onChangeMode }) => {
  const options: { mode: HeroMode; label: string; badge?: string }[] = [
    { mode: 'default', label: 'Current Original' },
    { mode: 'concept1', label: '1. Architectural Split (3D)', badge: 'Recommended' },
    { mode: 'concept2', label: '2. 3-Pillar Expandable' },
    { mode: 'concept3', label: '3. Bento-Grid Hub' },
    { mode: 'concept4', label: '4. Cinematic Frosted HUD' },
    { mode: 'concept5', label: '5. Tech Spec Matrix' },
  ];

  return (
    <div className="hero-lab-dock">
      <div className="hero-lab-dock-inner">
        <div className="hero-lab-dock-title">
          <Sparkles size={16} color="#00E676" />
          <span>Hero Design Laboratory</span>
          <span className="hero-lab-badge">Live Interactive Switcher</span>
        </div>

        <div className="hero-lab-pills">
          {options.map((opt) => {
            const isActive = currentMode === opt.mode;
            return (
              <button
                key={opt.mode}
                className={`hero-lab-pill ${isActive ? 'active' : ''}`}
                onClick={() => onChangeMode(opt.mode)}
                title={`Switch to ${opt.label}`}
              >
                <span>{opt.label}</span>
                {opt.badge && !isActive && (
                  <span style={{ fontSize: '0.65rem', background: 'rgba(0,200,83,0.2)', color: '#00E676', padding: '1px 5px', borderRadius: '4px' }}>
                    {opt.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
