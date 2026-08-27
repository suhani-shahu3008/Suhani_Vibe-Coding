import React from 'react';
import { Icons } from '../Icons/Icons';
import './Checkboxes.css';

export interface CheckboxesProps {
  typeVariant?: 'Primary' | 'Success' | 'Error' | 'Warning';
  checked?: boolean;
  state?: 'Enabled' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';
  label?: string;
  onChange?: (checked: boolean) => void;
}

export const Checkboxes: React.FC<CheckboxesProps> = ({
  typeVariant = 'Primary',
  checked = false,
  state = 'Enabled',
  label = 'Notify driver on delay',
  onChange,
}) => {
  const isDisabled = state === 'Disabled';

  return (
    <label className={`uedp-checkbox uedp-checkbox--${typeVariant.toLowerCase()} uedp-checkbox--state-${state.toLowerCase()} ${checked ? 'uedp-checkbox--checked' : ''}`}>
      <input
        type="checkbox"
        className="uedp-checkbox__input"
        checked={checked}
        disabled={isDisabled}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      <span className="uedp-checkbox__box">
        {checked && <Icons name="Tick" size={14} color="#ffffff" />}
      </span>
      {label && <span className="uedp-checkbox__label">{label}</span>}
    </label>
  );
};
