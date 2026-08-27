import React from 'react';
import './Indicators.css';

export interface IndicatorsProps {
  stateVariant?: 'Info' | 'Success' | 'Warning' | 'Error' | 'Inactive';
  size?: 'Small' | 'Large';
  label?: string;
  pulse?: boolean;
}

export const Indicators: React.FC<IndicatorsProps> = ({
  stateVariant = 'Success',
  size = 'Small',
  label,
  pulse = true,
}) => {
  return (
    <div className={`uedp-indicator uedp-indicator--${stateVariant.toLowerCase()} uedp-indicator--${size.toLowerCase()}`}>
      <span className={`uedp-indicator__dot ${pulse ? 'uedp-indicator__dot--pulse' : ''}`} />
      {label && <span className="uedp-indicator__label">{label}</span>}
    </div>
  );
};
