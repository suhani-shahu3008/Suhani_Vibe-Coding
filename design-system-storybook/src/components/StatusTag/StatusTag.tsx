import React from 'react';
import './StatusTag.css';

export interface StatusTagProps {
  typeVariant?: 'Info' | 'Success' | 'Warning' | 'Error' | 'Inactive';
  label?: string;
  dot?: boolean;
}

export const StatusTag: React.FC<StatusTagProps> = ({
  typeVariant = 'Success',
  label = 'Delivered',
  dot = true,
}) => {
  return (
    <span className={`uedp-status-tag uedp-status-tag--${typeVariant.toLowerCase()}`}>
      {dot && <span className="uedp-status-tag__dot" />}
      <span className="uedp-status-tag__label">{label}</span>
    </span>
  );
};
