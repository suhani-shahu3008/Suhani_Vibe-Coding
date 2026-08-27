import React from 'react';
import './RadioButtons.css';

export interface RadioButtonsProps {
  selected?: boolean;
  state?: 'Enabled' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';
  label?: string;
  onChange?: (selected: boolean) => void;
  name?: string;
}

export const RadioButtons: React.FC<RadioButtonsProps> = ({
  selected = false,
  state = 'Enabled',
  label = 'Standard Express Delivery',
  onChange,
  name,
}) => {
  const isDisabled = state === 'Disabled';

  return (
    <label className={`uedp-radio uedp-radio--state-${state.toLowerCase()} ${selected ? 'uedp-radio--selected' : ''}`}>
      <input
        type="radio"
        className="uedp-radio__input"
        checked={selected}
        disabled={isDisabled}
        onChange={(e) => onChange && onChange(e.target.checked)}
        name={name}
      />
      <span className="uedp-radio__control">
        <span className="uedp-radio__dot" />
      </span>
      {label && <span className="uedp-radio__label">{label}</span>}
    </label>
  );
};
