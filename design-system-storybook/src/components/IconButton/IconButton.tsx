import React from 'react';
import { Icons, IconName } from '../Icons/Icons';
import './IconButton.css';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma state option */
  state?: 'Default' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';
  /** Figma size option: Large (60x60) or Small (30x30) */
  size?: 'Small' | 'Large';
  /** Icon name to render */
  iconName?: IconName | string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  state = 'Default',
  size = 'Large',
  iconName = 'Settings',
  className = '',
  disabled,
  ...rest
}) => {
  const isDisabled = disabled || state === 'Disabled';
  const iconColor = state === 'Disabled' ? '#a3a3a3' : '#171717';

  return (
    <button
      className={`uedp-icon-button uedp-icon-button--${size.toLowerCase()} uedp-icon-button--state-${state.toLowerCase()} ${className}`}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...rest}
    >
      <Icons
        name={iconName}
        size={size === 'Small' ? 16 : 24}
        color={iconColor}
      />
    </button>
  );
};
