import React, { useState } from 'react';
import { Icons, IconName } from '../Icons/Icons';
import './InputField.css';

export interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  typeVariant?: 'Filled' | 'Outline';
  state?: 'Default' | 'Hovered' | 'Focused' | 'Pressed' | 'Typing' | 'Filled' | 'Error' | 'Disabled';
  label?: string;
  helperText?: string;
  errorText?: string;
  iconLeft?: IconName | string;
  iconRight?: IconName | string;
  inputType?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  typeVariant = 'Filled',
  state = 'Default',
  label = 'Delivery Route Name',
  helperText,
  errorText,
  iconLeft,
  iconRight,
  inputType = 'text',
  placeholder = 'Enter value...',
  value: controlledValue,
  onChange,
  disabled,
  ...rest
}) => {
  const [internalValue, setInternalValue] = useState(
    state === 'Filled' ? 'Downtown Express Route A' : state === 'Typing' ? 'Route 1' : ''
  );
  const val = controlledValue !== undefined ? controlledValue : internalValue;
  const isError = state === 'Error' || !!errorText;
  const isDisabled = disabled || state === 'Disabled';

  return (
    <div className={`uedp-input-field uedp-input-field--${typeVariant.toLowerCase()} uedp-input-field--state-${state.toLowerCase()} ${isError ? 'uedp-input-field--error' : ''}`}>
      {label && <label className="uedp-input-field__label">{label}</label>}
      <div className="uedp-input-field__box">
        {iconLeft && (
          <span className="uedp-input-field__icon uedp-input-field__icon--left">
            <Icons name={iconLeft} size={16} color="var(--uedp-slate-400, #94a3b8)" />
          </span>
        )}
        <input
          type={inputType}
          className="uedp-input-field__input"
          placeholder={placeholder}
          value={val}
          onChange={(e) => {
            setInternalValue(e.target.value);
            if (onChange) onChange(e);
          }}
          disabled={isDisabled}
          {...rest}
        />
        {iconRight && (
          <span className="uedp-input-field__icon uedp-input-field__icon--right">
            <Icons name={iconRight} size={16} color="var(--uedp-slate-400, #94a3b8)" />
          </span>
        )}
      </div>
      {isError && (
        <span className="uedp-input-field__error-text">
          {errorText || 'This field contains an error.'}
        </span>
      )}
      {!isError && helperText && (
        <span className="uedp-input-field__helper-text">{helperText}</span>
      )}
    </div>
  );
};
