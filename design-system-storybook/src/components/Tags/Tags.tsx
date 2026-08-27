import React from 'react';
import { Icons } from '../Icons/Icons';
import './Tags.css';

export interface TagsProps {
  typeVariant?: 'Info' | 'Success' | 'Warning' | 'Error' | 'Inactive';
  label?: string;
  removable?: boolean;
  onRemove?: () => void;
}

export const Tags: React.FC<TagsProps> = ({
  typeVariant = 'Info',
  label = 'Express Route',
  removable = false,
  onRemove,
}) => {
  return (
    <span className={`uedp-tag uedp-tag--${typeVariant.toLowerCase()}`}>
      <span className="uedp-tag__label">{label}</span>
      {removable && (
        <button className="uedp-tag__remove" onClick={onRemove} type="button">
          <Icons name="Close" size={12} color="currentColor" />
        </button>
      )}
    </span>
  );
};
