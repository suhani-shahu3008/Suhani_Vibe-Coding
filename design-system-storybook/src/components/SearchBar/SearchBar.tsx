import React, { useState } from 'react';
import { Icons } from '../Icons/Icons';
import './SearchBar.css';

export interface SearchBarProps {
  state?: 'Default' | 'Hovered' | 'Focused' | 'Pressed' | 'Typing' | 'Filled' | 'Error' | 'Disabled';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  variant?: 'standard' | 'pill';
  showFilterButton?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  state = 'Default',
  placeholder = 'Search fleet, orders, routes...',
  value: controlledValue,
  onChange,
  onClear,
  variant = 'standard',
  showFilterButton = true,
}) => {
  const [internalValue, setInternalValue] = useState(
    state === 'Filled' ? 'Fleet Zone North' : state === 'Typing' ? 'Route 10' : ''
  );
  const val = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  const handleClear = () => {
    setInternalValue('');
    if (onClear) onClear();
  };

  const isDisabled = state === 'Disabled';
  const isError = state === 'Error';

  return (
    <div className={`uedp-searchbar uedp-searchbar--${variant} uedp-searchbar--state-${state.toLowerCase()} ${isError ? 'uedp-searchbar--error' : ''}`}>
      <span className="uedp-searchbar__icon">
        <Icons name="Search" size={18} color="var(--uedp-slate-400, #94a3b8)" />
      </span>
      <input
        type="text"
        className="uedp-searchbar__input"
        placeholder={placeholder}
        value={val}
        onChange={handleChange}
        disabled={isDisabled}
      />
      {val && !isDisabled && (
        <button className="uedp-searchbar__clear" onClick={handleClear} type="button">
          <Icons name="Close" size={14} color="var(--uedp-slate-400, #94a3b8)" />
        </button>
      )}
      {showFilterButton && (
        <button className="uedp-searchbar__filter-btn" type="button" disabled={isDisabled}>
          <Icons name="Filter" size={16} />
        </button>
      )}
    </div>
  );
};
