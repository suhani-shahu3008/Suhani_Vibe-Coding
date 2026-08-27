import React from 'react';
import './Dividers.css';

export interface DividersProps {
  size?: 'Small' | 'Medium' | 'Large' | 'Extra Large';
  orientation?: 'horizontal' | 'vertical';
  label?: string;
}

export const Dividers: React.FC<DividersProps> = ({
  size = 'Medium',
  orientation = 'horizontal',
  label,
}) => {
  if (orientation === 'vertical') {
    return <div className={`uedp-divider uedp-divider--vertical uedp-divider--${size.toLowerCase().replace(/\s+/g, '-')}`} />;
  }

  if (label) {
    return (
      <div className={`uedp-divider-wrapper uedp-divider--${size.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="uedp-divider uedp-divider--horizontal" />
        <span className="uedp-divider__label">{label}</span>
        <div className="uedp-divider uedp-divider--horizontal" />
      </div>
    );
  }

  return <div className={`uedp-divider uedp-divider--horizontal uedp-divider--${size.toLowerCase().replace(/\s+/g, '-')}`} />;
};
