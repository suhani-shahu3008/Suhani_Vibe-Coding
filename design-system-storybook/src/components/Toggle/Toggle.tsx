import React from 'react';
import './Toggle.css';

export interface ToggleProps {
  typeVariant?: 'Primary' | 'Success';
  state?: 'Enabled' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';
  checked?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
}

export const Toggle: React.FC<ToggleProps> = ({
  typeVariant = 'Primary',
  state = 'Enabled',
  checked = false,
  label = 'Real-time GPS Tracking',
  onChange,
}) => {
  const isDisabled = state === 'Disabled';

  return (
    <label className={`uedp-toggle uedp-toggle--${typeVariant.toLowerCase()} uedp-toggle--state-${state.toLowerCase()} ${checked ? 'uedp-toggle--checked' : ''}`}>
      <input
        type="checkbox"
        className="uedp-toggle__input"
        checked={checked}
        disabled={isDisabled}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      <span className="uedp-toggle__track">
        <span className="uedp-toggle__thumb" />
      </span>
      {label && <span className="uedp-toggle__label">{label}</span>}
    </label>
  );
};
