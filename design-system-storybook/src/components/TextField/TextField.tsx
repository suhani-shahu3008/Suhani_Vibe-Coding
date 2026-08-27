import React from 'react';
import './TextField.css';

export interface TextFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  state?: 'Default' | 'Hovered' | 'Focused' | 'Pressed' | 'Typing' | 'Filled' | 'Error' | 'Disabled';
  label?: string;
  helperText?: string;
  errorText?: string;
  rows?: number;
}

export const TextField: React.FC<TextFieldProps> = ({
  state = 'Default',
  label = 'Special Delivery Instructions',
  helperText = 'Include access gate codes and contact phone numbers.',
  errorText,
  rows = 4,
  placeholder = 'Add notes regarding route restrictions or delay reasons...',
  disabled,
  className = '',
  ...rest
}) => {
  const isError = state === 'Error' || !!errorText;
  const isDisabled = disabled || state === 'Disabled';

  return (
    <div className={`uedp-text-field uedp-text-field--state-${state.toLowerCase()} ${isError ? 'uedp-text-field--error' : ''} ${className}`}>
      {label && <label className="uedp-text-field__label">{label}</label>}
      <textarea
        className="uedp-text-field__textarea"
        rows={rows}
        placeholder={placeholder}
        disabled={isDisabled}
        {...rest}
      />
      {isError && (
        <span className="uedp-text-field__error-text">{errorText || 'Invalid text entered.'}</span>
      )}
      {!isError && helperText && (
        <span className="uedp-text-field__helper-text">{helperText}</span>
      )}
    </div>
  );
};
