import React from 'react';
import { Icons, IconName } from '../Icons/Icons';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma: Type — Primary (filled) | Secondary (outlined) */
  typeVariant?: 'Primary' | 'Secondary';
  /** Figma: State */
  state?: 'Active' | 'Disabled' | 'Focused' | 'Hovered' | 'Pressed';
  /** Figma: Shape — Capsule = 9999px radius, Rectangle = 12px radius */
  shape?: 'Rectangle' | 'Capsule';
  /** Figma: Feedback — semantic fill colour (Primary only) */
  feedback?: 'Default' | 'Info' | 'Warning' | 'Success' | 'Error' | 'Warnin';
  /** Figma: Size — Large (532×54) | Small (160×53) */
  size?: 'Small' | 'Large';
  /** Figma: Text#10:0 — button label */
  label?: string;
  /** Figma: Icon#24:43 — show/hide trailing icon */
  showIcon?: boolean;
  /** Icon name from Icons component */
  iconName?: IconName | string;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  typeVariant = 'Primary',
  state = 'Active',
  shape = 'Capsule',
  feedback = 'Default',
  size = 'Large',
  label = 'Button',
  showIcon = true,
  iconName = 'Right Arrow',
  children,
  className = '',
  disabled,
  ...rest
}) => {
  // Normalise the Figma "Warnin" typo variant
  const effectiveFeedback = feedback === 'Warnin' ? 'Warning' : feedback;
  const isDisabled = disabled || state === 'Disabled';

  const classes = [
    'uedp-button',
    `uedp-button--${typeVariant.toLowerCase()}`,
    `uedp-button--${shape.toLowerCase()}`,
    `uedp-button--${size.toLowerCase()}`,
    `uedp-button--feedback-${effectiveFeedback.toLowerCase()}`,
    `uedp-button--state-${state.toLowerCase()}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Icon colour per Figma extraction:
  //   Primary Active/Hovered/Focused/Pressed → #ffffff
  //   Primary Disabled                        → #94a3b8
  //   Secondary Active/Hovered/Focused/Pressed→ #171717
  //   Secondary Disabled                      → #a3a3a3
  const getIconColor = (): string => {
    if (typeVariant === 'Primary') {
      return state === 'Disabled' ? '#94a3b8' : '#ffffff';
    }
    // Secondary
    return state === 'Disabled' ? '#a3a3a3' : '#171717';
  };

  // Figma: Capsule variants have no icon instance; Rectangle variants do.
  // Respect showIcon prop but default false for Capsule to match Figma.
  const iconSize = size === 'Small' ? 16 : 20;

  return (
    <button
      className={classes}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...rest}
    >
      <span className="uedp-button__label">{children || label}</span>
      {showIcon && (
        <span className="uedp-button__icon">
          <Icons
            name={iconName}
            size={iconSize}
            color={getIconColor()}
          />
        </span>
      )}
    </button>
  );
};
