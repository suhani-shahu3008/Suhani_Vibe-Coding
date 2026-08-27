import React from 'react';
import './TabBars.css';

export interface TabBarsProps {
  state?: 'Default' | 'Active' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';
  label?: string;
  badge?: string | number;
  active?: boolean;
  onClick?: () => void;
}

export const TabBars: React.FC<TabBarsProps> = ({
  state = 'Default',
  label = 'All Deliveries',
  badge = 24,
  active = false,
  onClick,
}) => {
  const isActive = active || state === 'Active';
  const isDisabled = state === 'Disabled';

  return (
    <button
      className={`uedp-tab-bar ${isActive ? 'uedp-tab-bar--active' : ''} uedp-tab-bar--state-${state.toLowerCase()}`}
      onClick={onClick}
      disabled={isDisabled}
      type="button"
    >
      <span className="uedp-tab-bar__label">{label}</span>
      {badge !== undefined && <span className="uedp-tab-bar__badge">{badge}</span>}
    </button>
  );
};
