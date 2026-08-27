import React from 'react';
import './ProcessBar.css';

export interface ProcessBarProps {
  process?: '0%' | '10%' | '20%' | '30%' | '40%' | '50%' | '60%' | '70%' | '80%' | '90%' | '100%';
  colorVariant?: 'primary' | 'success' | 'warning' | 'error';
  showLabel?: boolean;
  label?: string;
}

export const ProcessBar: React.FC<ProcessBarProps> = ({
  process = '60%',
  colorVariant = 'primary',
  showLabel = true,
  label,
}) => {
  return (
    <div className={`uedp-process-bar uedp-process-bar--${colorVariant}`}>
      {showLabel && (
        <div className="uedp-process-bar__header">
          <span className="uedp-process-bar__label">{label || 'Route Completion'}</span>
          <span className="uedp-process-bar__value">{process}</span>
        </div>
      )}
      <div className="uedp-process-bar__track">
        <div className="uedp-process-bar__fill" style={{ width: process }} />
      </div>
    </div>
  );
};
