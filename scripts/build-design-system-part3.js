const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'design-system-storybook', 'src');
const componentsDir = path.join(srcDir, 'components');

function writeComponent(name, files) {
  const dir = path.join(componentsDir, name);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  for (const [filename, content] of Object.entries(files)) {
    fs.writeFileSync(path.join(dir, filename), content.trim() + '\n');
  }
  console.log(`✓ Generated component: ${name}`);
}

// -------------------------------------------------------------
// 9. INPUT FIELD & TEXT FIELD
// -------------------------------------------------------------
writeComponent('InputField', {
  'InputField.tsx': `
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
    <div className={\`uedp-input-field uedp-input-field--\${typeVariant.toLowerCase()} uedp-input-field--state-\${state.toLowerCase()} \${isError ? 'uedp-input-field--error' : ''}\`}>
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
`,
  'InputField.css': `
.uedp-input-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  font-family: inherit;
}

.uedp-input-field__label {
  font-size: 13px;
  font-weight: 500;
  color: var(--uedp-slate-700, #334155);
}

.uedp-input-field__box {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: var(--uedp-rounded-lg, 8px);
  transition: all 0.15s ease;
}

.uedp-input-field--filled .uedp-input-field__box {
  background-color: var(--uedp-slate-100, #f1f5f9);
  border: 1px solid transparent;
}
.uedp-input-field--filled:hover .uedp-input-field__box,
.uedp-input-field--filled.uedp-input-field--state-hovered .uedp-input-field__box {
  background-color: var(--uedp-slate-200, #e2e8f0);
}
.uedp-input-field--filled:focus-within .uedp-input-field__box,
.uedp-input-field--filled.uedp-input-field--state-focused .uedp-input-field__box {
  background-color: var(--uedp-white, #ffffff);
  border-color: var(--uedp-slate-900, #0f172a);
  box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.1);
}

.uedp-input-field--outline .uedp-input-field__box {
  background-color: var(--uedp-white, #ffffff);
  border: 1px solid var(--uedp-slate-300, #cbd5e1);
}
.uedp-input-field--outline:hover .uedp-input-field__box {
  border-color: var(--uedp-slate-400, #94a3b8);
}
.uedp-input-field--outline:focus-within .uedp-input-field__box {
  border-color: var(--uedp-slate-900, #0f172a);
  box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.1);
}

.uedp-input-field--error .uedp-input-field__box {
  border-color: var(--uedp-red-500, #ef4444) !important;
  background-color: var(--uedp-red-50, #fef2f2);
}

.uedp-input-field--state-disabled {
  opacity: 0.5;
  pointer-events: none;
}

.uedp-input-field__input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 14px;
  color: var(--uedp-slate-900, #0f172a);
  font-family: inherit;
}

.uedp-input-field__error-text {
  font-size: 12px;
  color: var(--uedp-red-600, #dc2626);
}

.uedp-input-field__helper-text {
  font-size: 12px;
  color: var(--uedp-slate-500, #64748b);
}
`,
  'InputField.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/Input Field/Input Field',
  component: InputField,
  parameters: {
    docs: {
      description: {
        component: \`
# Input Field
Preserved layer: \`Input field\` (COMPONENT_SET: \`85:9820\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **Type** | \`Filled\`, \`Outline\` | Visual surface style |
| **State** | \`Default\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Typing\`, \`Filled\`, \`Error\`, \`Disabled\` | Interaction state matrix |
        \`,
      },
    },
  },
  argTypes: {
    typeVariant: { control: 'radio', options: ['Filled', 'Outline'] },
    state: {
      control: 'select',
      options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Typing', 'Filled', 'Error', 'Disabled'],
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorText: { control: 'text' },
  },
  args: {
    typeVariant: 'Filled',
    state: 'Default',
    label: 'Delivery Route Name',
    placeholder: 'e.g. Route 404 - North Sector',
    helperText: 'Enter a unique identifier for this active fleet route.',
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Filled: Story = {};

export const Outline: Story = {
  args: {
    typeVariant: 'Outline',
  },
};

export const ErrorState: Story = {
  args: {
    state: 'Error',
    errorText: 'Route name is already in use by Vehicle #402',
  },
};
`
});

writeComponent('TextField', {
  'TextField.tsx': `
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
    <div className={\`uedp-text-field uedp-text-field--state-\${state.toLowerCase()} \${isError ? 'uedp-text-field--error' : ''} \${className}\`}>
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
`,
  'TextField.css': `
.uedp-text-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  font-family: inherit;
}

.uedp-text-field__label {
  font-size: 13px;
  font-weight: 500;
  color: var(--uedp-slate-700, #334155);
}

.uedp-text-field__textarea {
  width: 100%;
  padding: 12px 14px;
  border-radius: var(--uedp-rounded-lg, 8px);
  border: 1px solid var(--uedp-slate-300, #cbd5e1);
  background-color: var(--uedp-white, #ffffff);
  font-size: 14px;
  font-family: inherit;
  color: var(--uedp-slate-900, #0f172a);
  outline: none;
  resize: vertical;
  transition: all 0.15s ease;
}

.uedp-text-field__textarea:hover {
  border-color: var(--uedp-slate-400, #94a3b8);
}

.uedp-text-field__textarea:focus {
  border-color: var(--uedp-slate-900, #0f172a);
  box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.1);
}

.uedp-text-field--error .uedp-text-field__textarea {
  border-color: var(--uedp-red-500, #ef4444) !important;
  background-color: var(--uedp-red-50, #fef2f2);
}

.uedp-text-field--state-disabled {
  opacity: 0.5;
  pointer-events: none;
}

.uedp-text-field__error-text {
  font-size: 12px;
  color: var(--uedp-red-600, #dc2626);
}

.uedp-text-field__helper-text {
  font-size: 12px;
  color: var(--uedp-slate-500, #64748b);
}
`,
  'TextField.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/Text Field/Text Field',
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: \`
# Text Field
Preserved layer: \`Text field\` (COMPONENT_SET: \`85:10177\`).

Multi-line text input with character support, focus elevation, and validation states.
        \`,
      },
    },
  },
  args: {
    state: 'Default',
    label: 'Special Delivery Instructions',
    helperText: 'Include access gate codes and contact phone numbers.',
    rows: 4,
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {};
`
});

// -------------------------------------------------------------
// 10. RADIO BUTTON, TOGGLE, CHECKBOXES
// -------------------------------------------------------------
writeComponent('RadioButtons', {
  'RadioButtons.tsx': `
import React from 'react';
import './RadioButtons.css';

export interface RadioButtonsProps {
  selected?: boolean;
  state?: 'Enabled' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';
  label?: string;
  onChange?: (selected: boolean) => void;
  name?: string;
}

export const RadioButtons: React.FC<RadioButtonsProps> = ({
  selected = false,
  state = 'Enabled',
  label = 'Standard Express Delivery',
  onChange,
  name,
}) => {
  const isDisabled = state === 'Disabled';

  return (
    <label className={\`uedp-radio uedp-radio--state-\${state.toLowerCase()} \${selected ? 'uedp-radio--selected' : ''}\`}>
      <input
        type="radio"
        className="uedp-radio__input"
        checked={selected}
        disabled={isDisabled}
        onChange={(e) => onChange && onChange(e.target.checked)}
        name={name}
      />
      <span className="uedp-radio__control">
        <span className="uedp-radio__dot" />
      </span>
      {label && <span className="uedp-radio__label">{label}</span>}
    </label>
  );
};
`,
  'RadioButtons.css': `
.uedp-radio {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
  font-family: inherit;
}

.uedp-radio__input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.uedp-radio__control {
  width: 20px;
  height: 20px;
  border-radius: var(--uedp-rounded-full, 9999px);
  border: 2px solid var(--uedp-slate-300, #cbd5e1);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--uedp-white, #ffffff);
  transition: all 0.15s ease;
}

.uedp-radio:hover .uedp-radio__control,
.uedp-radio--state-hovered .uedp-radio__control {
  border-color: var(--uedp-slate-500, #64748b);
}

.uedp-radio--selected .uedp-radio__control {
  border-color: var(--uedp-slate-900, #0f172a);
}

.uedp-radio__dot {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background-color: var(--uedp-slate-900, #0f172a);
  transform: scale(0);
  transition: transform 0.15s ease;
}

.uedp-radio--selected .uedp-radio__dot {
  transform: scale(1);
}

.uedp-radio__label {
  font-size: 14px;
  color: var(--uedp-slate-800, #1e293b);
  font-weight: 500;
}

.uedp-radio--state-disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
`,
  'RadioButtons.stories.tsx': `
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioButtons } from './RadioButtons';

const meta: Meta<typeof RadioButtons> = {
  title: 'Components/Radio button/Radio buttons',
  component: RadioButtons,
  parameters: {
    docs: {
      description: {
        component: \`
# Radio buttons
Preserved layer: \`Radio buttons\` (COMPONENT_SET: \`46:6245\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **Selected** | \`true\` / \`false\` | Selection state |
| **State** | \`Enabled\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Disabled\` | Interaction matrix |
        \`,
      },
    },
  },
  args: {
    selected: false,
    state: 'Enabled',
    label: 'Standard Express Delivery',
  },
};

export default meta;
type Story = StoryObj<typeof RadioButtons>;

export const Default: Story = {};

export const InteractiveGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('opt1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <RadioButtons
          selected={selected === 'opt1'}
          label="Express 2-Hour Delivery"
          onChange={() => setSelected('opt1')}
        />
        <RadioButtons
          selected={selected === 'opt2'}
          label="Next-Day Consolidated Dispatch"
          onChange={() => setSelected('opt2')}
        />
        <RadioButtons
          selected={selected === 'opt3'}
          label="Scheduled Eco Delivery"
          onChange={() => setSelected('opt3')}
        />
      </div>
    );
  },
};
`
});

writeComponent('Toggle', {
  'Toggle.tsx': `
import React from 'react';
import './Toggle.css';

export interface ToggleProps {
  typeVariant?: 'Primary' | 'Success';
  state?: 'Enabled' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';
  checked?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
}

export const Toggle: React.FC<ToggleProps> = ({
  typeVariant = 'Primary',
  state = 'Enabled',
  checked = false,
  label = 'Real-time GPS Tracking',
  onChange,
}) => {
  const isDisabled = state === 'Disabled';

  return (
    <label className={\`uedp-toggle uedp-toggle--\${typeVariant.toLowerCase()} uedp-toggle--state-\${state.toLowerCase()} \${checked ? 'uedp-toggle--checked' : ''}\`}>
      <input
        type="checkbox"
        className="uedp-toggle__input"
        checked={checked}
        disabled={isDisabled}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      <span className="uedp-toggle__track">
        <span className="uedp-toggle__thumb" />
      </span>
      {label && <span className="uedp-toggle__label">{label}</span>}
    </label>
  );
};
`,
  'Toggle.css': `
.uedp-toggle {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
  font-family: inherit;
}

.uedp-toggle__input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.uedp-toggle__track {
  width: 44px;
  height: 24px;
  border-radius: var(--uedp-rounded-full, 9999px);
  background-color: var(--uedp-slate-300, #cbd5e1);
  padding: 2px;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  align-items: center;
}

.uedp-toggle--primary.uedp-toggle--checked .uedp-toggle__track {
  background-color: var(--uedp-slate-900, #0f172a);
}

.uedp-toggle--success.uedp-toggle--checked .uedp-toggle__track {
  background-color: var(--uedp-emerald-600, #059669);
}

.uedp-toggle__thumb {
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  background-color: var(--uedp-white, #ffffff);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(0);
}

.uedp-toggle--checked .uedp-toggle__thumb {
  transform: translateX(20px);
}

.uedp-toggle__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--uedp-slate-800, #1e293b);
}

.uedp-toggle--state-disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
`,
  'Toggle.stories.tsx': `
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: \`
# Toggle
Preserved layer: \`Toggle\` (COMPONENT_SET: \`56:6962\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **Type** | \`Primary\`, \`Success\` | Brand fill color |
| **State** | \`Enabled\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Disabled\` | Interaction matrix |
| **checked** | \`true\` / \`false\` | Boolean state |
        \`,
      },
    },
  },
  args: {
    typeVariant: 'Primary',
    state: 'Enabled',
    checked: true,
    label: 'Real-time GPS Tracking',
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {};

export const Success: Story = {
  args: {
    typeVariant: 'Success',
    label: 'Telemetry Heartbeat Active',
  },
};
`
});

writeComponent('Checkboxes', {
  'Checkboxes.tsx': `
import React from 'react';
import { Icons } from '../Icons/Icons';
import './Checkboxes.css';

export interface CheckboxesProps {
  typeVariant?: 'Primary' | 'Success' | 'Error' | 'Warning';
  checked?: boolean;
  state?: 'Enabled' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';
  label?: string;
  onChange?: (checked: boolean) => void;
}

export const Checkboxes: React.FC<CheckboxesProps> = ({
  typeVariant = 'Primary',
  checked = false,
  state = 'Enabled',
  label = 'Notify driver on delay',
  onChange,
}) => {
  const isDisabled = state === 'Disabled';

  return (
    <label className={\`uedp-checkbox uedp-checkbox--\${typeVariant.toLowerCase()} uedp-checkbox--state-\${state.toLowerCase()} \${checked ? 'uedp-checkbox--checked' : ''}\`}>
      <input
        type="checkbox"
        className="uedp-checkbox__input"
        checked={checked}
        disabled={isDisabled}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      <span className="uedp-checkbox__box">
        {checked && <Icons name="Tick" size={14} color="#ffffff" />}
      </span>
      {label && <span className="uedp-checkbox__label">{label}</span>}
    </label>
  );
};
`,
  'Checkboxes.css': `
.uedp-checkbox {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
  font-family: inherit;
}

.uedp-checkbox__input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.uedp-checkbox__box {
  width: 20px;
  height: 20px;
  border-radius: var(--uedp-rounded-md, 6px);
  border: 1.5px solid var(--uedp-slate-300, #cbd5e1);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--uedp-white, #ffffff);
  transition: all 0.15s ease;
}

.uedp-checkbox:hover .uedp-checkbox__box {
  border-color: var(--uedp-slate-500, #64748b);
}

.uedp-checkbox--checked.uedp-checkbox--primary .uedp-checkbox__box {
  background-color: var(--uedp-slate-900, #0f172a);
  border-color: var(--uedp-slate-900, #0f172a);
}

.uedp-checkbox--checked.uedp-checkbox--success .uedp-checkbox__box {
  background-color: var(--uedp-emerald-600, #059669);
  border-color: var(--uedp-emerald-600, #059669);
}

.uedp-checkbox--checked.uedp-checkbox--error .uedp-checkbox__box {
  background-color: var(--uedp-red-600, #dc2626);
  border-color: var(--uedp-red-600, #dc2626);
}

.uedp-checkbox--checked.uedp-checkbox--warning .uedp-checkbox__box {
  background-color: var(--uedp-amber-500, #f59e0b);
  border-color: var(--uedp-amber-500, #f59e0b);
}

.uedp-checkbox__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--uedp-slate-800, #1e293b);
}

.uedp-checkbox--state-disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
`,
  'Checkboxes.stories.tsx': `
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkboxes } from './Checkboxes';

const meta: Meta<typeof Checkboxes> = {
  title: 'Components/Checkboxes/Checkboxes',
  component: Checkboxes,
  parameters: {
    docs: {
      description: {
        component: \`
# Checkboxes
Preserved layer: \`Checkboxes\` (COMPONENT_SET: \`57:7420\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **Type** | \`Primary\`, \`Success\`, \`Error\`, \`Warning\` | Color theme variant |
| **Checked** | \`true\` / \`false\` | Checked state |
| **State** | \`Enabled\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Disabled\` | Interaction matrix |
        \`,
      },
    },
  },
  args: {
    typeVariant: 'Primary',
    checked: true,
    state: 'Enabled',
    label: 'Notify driver on delay',
  },
};

export default meta;
type Story = StoryObj<typeof Checkboxes>;

export const Default: Story = {};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkboxes typeVariant="Primary" checked={true} label="Primary Theme" />
      <Checkboxes typeVariant="Success" checked={true} label="Success (Delivered)" />
      <Checkboxes typeVariant="Warning" checked={true} label="Warning (Delayed)" />
      <Checkboxes typeVariant="Error" checked={true} label="Error (Cancelled)" />
    </div>
  ),
};
`
});

// -------------------------------------------------------------
// 11. TAGS & STATUS TAG
// -------------------------------------------------------------
writeComponent('Tags', {
  'Tags.tsx': `
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
    <span className={\`uedp-tag uedp-tag--\${typeVariant.toLowerCase()}\`}>
      <span className="uedp-tag__label">{label}</span>
      {removable && (
        <button className="uedp-tag__remove" onClick={onRemove} type="button">
          <Icons name="Close" size={12} color="currentColor" />
        </button>
      )}
    </span>
  );
};
`,
  'Tags.css': `
.uedp-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: var(--uedp-rounded-md, 6px);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  user-select: none;
}

.uedp-tag--info {
  background-color: var(--uedp-blue-50, #eff6ff);
  color: var(--uedp-blue-700, #1d4ed8);
  border: 1px solid var(--uedp-blue-200, #bfdbfe);
}

.uedp-tag--success {
  background-color: var(--uedp-emerald-50, #ecfdf5);
  color: var(--uedp-emerald-700, #047857);
  border: 1px solid var(--uedp-emerald-200, #a7f3d0);
}

.uedp-tag--warning {
  background-color: var(--uedp-amber-50, #fffbeb);
  color: var(--uedp-amber-700, #b45309);
  border: 1px solid var(--uedp-amber-200, #fde68a);
}

.uedp-tag--error {
  background-color: var(--uedp-red-50, #fef2f2);
  color: var(--uedp-red-700, #b91c1c);
  border: 1px solid var(--uedp-red-200, #fecaca);
}

.uedp-tag--inactive {
  background-color: var(--uedp-slate-100, #f1f5f9);
  color: var(--uedp-slate-600, #475569);
  border: 1px solid var(--uedp-slate-200, #e2e8f0);
}

.uedp-tag__remove {
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  color: inherit;
  display: flex;
  align-items: center;
  opacity: 0.7;
}

.uedp-tag__remove:hover {
  opacity: 1;
}
`,
  'Tags.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tags } from './Tags';

const meta: Meta<typeof Tags> = {
  title: 'Components/Tags/Tags',
  component: Tags,
  parameters: {
    docs: {
      description: {
        component: \`
# Tags
Preserved layer: \`Tags\` (COMPONENT_SET: \`65:7696\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **Type** | \`Info\`, \`Success\`, \`Warning\`, \`Error\`, \`Inactive\` | Semantic color badge |
| **removable** | \`true\` / \`false\` | Dismiss button slot |
        \`,
      },
    },
  },
  args: {
    typeVariant: 'Info',
    label: 'Express Route',
    removable: false,
  },
};

export default meta;
type Story = StoryObj<typeof Tags>;

export const Default: Story = {};

export const AllTags: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tags typeVariant="Info" label="Info Tag" />
      <Tags typeVariant="Success" label="Active Route" />
      <Tags typeVariant="Warning" label="Delay Warning" />
      <Tags typeVariant="Error" label="Route Blocked" />
      <Tags typeVariant="Inactive" label="Draft" />
    </div>
  ),
};
`
});

writeComponent('StatusTag', {
  'StatusTag.tsx': `
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
    <span className={\`uedp-status-tag uedp-status-tag--\${typeVariant.toLowerCase()}\`}>
      {dot && <span className="uedp-status-tag__dot" />}
      <span className="uedp-status-tag__label">{label}</span>
    </span>
  );
};
`,
  'StatusTag.css': `
.uedp-status-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 8px;
  border-radius: var(--uedp-rounded-full, 9999px);
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
}

.uedp-status-tag__dot {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
}

.uedp-status-tag--info {
  background-color: var(--uedp-blue-100, #dbeafe);
  color: var(--uedp-blue-800, #1e40af);
}
.uedp-status-tag--info .uedp-status-tag__dot {
  background-color: var(--uedp-blue-600, #2563eb);
}

.uedp-status-tag--success {
  background-color: var(--uedp-emerald-100, #d1fae5);
  color: var(--uedp-emerald-800, #065f46);
}
.uedp-status-tag--success .uedp-status-tag__dot {
  background-color: var(--uedp-emerald-600, #059669);
}

.uedp-status-tag--warning {
  background-color: var(--uedp-amber-100, #fef3c7);
  color: var(--uedp-amber-800, #92400e);
}
.uedp-status-tag--warning .uedp-status-tag__dot {
  background-color: var(--uedp-amber-500, #f59e0b);
}

.uedp-status-tag--error {
  background-color: var(--uedp-red-100, #fee2e2);
  color: var(--uedp-red-800, #991b1b);
}
.uedp-status-tag--error .uedp-status-tag__dot {
  background-color: var(--uedp-red-600, #dc2626);
}

.uedp-status-tag--inactive {
  background-color: var(--uedp-slate-100, #f1f5f9);
  color: var(--uedp-slate-700, #334155);
}
.uedp-status-tag--inactive .uedp-status-tag__dot {
  background-color: var(--uedp-slate-400, #94a3b8);
}
`,
  'StatusTag.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatusTag } from './StatusTag';

const meta: Meta<typeof StatusTag> = {
  title: 'Components/Tags/Status Tag',
  component: StatusTag,
  parameters: {
    docs: {
      description: {
        component: \`
# Status Tag
Preserved layer: \`Status Tag\` (COMPONENT_SET: \`66:7719\`).

Pill badge with telemetry status indicator dot.
        \`,
      },
    },
  },
  args: {
    typeVariant: 'Success',
    label: 'On Schedule',
    dot: true,
  },
};

export default meta;
type Story = StoryObj<typeof StatusTag>;

export const Default: Story = {};

export const StatusVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <StatusTag typeVariant="Success" label="On Schedule" />
      <StatusTag typeVariant="Warning" label="Delay (15m)" />
      <StatusTag typeVariant="Error" label="Mechanical Hold" />
      <StatusTag typeVariant="Info" label="In Transit" />
      <StatusTag typeVariant="Inactive" label="Standby" />
    </div>
  ),
};
`
});

// -------------------------------------------------------------
// 12. INDICATORS, DIVIDERS, PROCESS BAR
// -------------------------------------------------------------
writeComponent('Indicators', {
  'Indicators.tsx': `
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
    <div className={\`uedp-indicator uedp-indicator--\${stateVariant.toLowerCase()} uedp-indicator--\${size.toLowerCase()}\`}>
      <span className={\`uedp-indicator__dot \${pulse ? 'uedp-indicator__dot--pulse' : ''}\`} />
      {label && <span className="uedp-indicator__label">{label}</span>}
    </div>
  );
};
`,
  'Indicators.css': `
.uedp-indicator {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: inherit;
}

.uedp-indicator__dot {
  border-radius: var(--uedp-rounded-full, 9999px);
  display: inline-block;
  position: relative;
}

.uedp-indicator--small .uedp-indicator__dot {
  width: 8px;
  height: 8px;
}

.uedp-indicator--large .uedp-indicator__dot {
  width: 12px;
  height: 12px;
}

.uedp-indicator--info .uedp-indicator__dot { background-color: var(--uedp-blue-500, #3b82f6); }
.uedp-indicator--success .uedp-indicator__dot { background-color: var(--uedp-emerald-500, #10b981); }
.uedp-indicator--warning .uedp-indicator__dot { background-color: var(--uedp-amber-500, #f59e0b); }
.uedp-indicator--error .uedp-indicator__dot { background-color: var(--uedp-red-500, #ef4444); }
.uedp-indicator--inactive .uedp-indicator__dot { background-color: var(--uedp-slate-400, #94a3b8); }

.uedp-indicator__dot--pulse::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 9999px;
  background-color: inherit;
  opacity: 0.4;
  animation: uedp-pulse 2s infinite cubic-bezier(0.4, 0, 0.6, 1);
}

@keyframes uedp-pulse {
  0%, 100% { transform: scale(1); opacity: 0.4; }
  50% { transform: scale(1.6); opacity: 0; }
}

.uedp-indicator__label {
  font-size: 13px;
  font-weight: 500;
  color: var(--uedp-slate-700, #334155);
}
`,
  'Indicators.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Indicators } from './Indicators';

const meta: Meta<typeof Indicators> = {
  title: 'Components/Indicators/Indicators',
  component: Indicators,
  parameters: {
    docs: {
      description: {
        component: \`
# Indicators
Preserved layer: \`Indicators\` (COMPONENT_SET: \`70:7774\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **State** | \`Info\`, \`Success\`, \`Warning\`, \`Error\`, \`Inactive\` | State color |
| **Size** | \`Small\` (8px), \`Large\` (12px) | Dot dimension |
        \`,
      },
    },
  },
  args: {
    stateVariant: 'Success',
    size: 'Small',
    label: 'Live Signal Connected',
    pulse: true,
  },
};

export default meta;
type Story = StoryObj<typeof Indicators>;

export const Default: Story = {};
`
});

writeComponent('Dividers', {
  'Dividers.tsx': `
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
    return <div className={\`uedp-divider uedp-divider--vertical uedp-divider--\${size.toLowerCase().replace(/\\s+/g, '-')}\`} />;
  }

  if (label) {
    return (
      <div className={\`uedp-divider-wrapper uedp-divider--\${size.toLowerCase().replace(/\\s+/g, '-')}\`}>
        <div className="uedp-divider uedp-divider--horizontal" />
        <span className="uedp-divider__label">{label}</span>
        <div className="uedp-divider uedp-divider--horizontal" />
      </div>
    );
  }

  return <div className={\`uedp-divider uedp-divider--horizontal uedp-divider--\${size.toLowerCase().replace(/\\s+/g, '-')}\`} />;
};
`,
  'Dividers.css': `
.uedp-divider {
  background-color: var(--uedp-slate-200, #e2e8f0);
}

.uedp-divider--horizontal {
  width: 100%;
}
.uedp-divider--horizontal.uedp-divider--small { height: 1px; }
.uedp-divider--horizontal.uedp-divider--medium { height: 2px; }
.uedp-divider--horizontal.uedp-divider--large { height: 4px; }
.uedp-divider--horizontal.uedp-divider--extra-large { height: 8px; }

.uedp-divider--vertical {
  height: 100%;
  min-height: 24px;
}
.uedp-divider--vertical.uedp-divider--small { width: 1px; }
.uedp-divider--vertical.uedp-divider--medium { width: 2px; }
.uedp-divider--vertical.uedp-divider--large { width: 4px; }
.uedp-divider--vertical.uedp-divider--extra-large { width: 8px; }

.uedp-divider-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
}

.uedp-divider__label {
  font-size: 12px;
  font-weight: 500;
  color: var(--uedp-slate-500, #64748b);
  white-space: nowrap;
}
`,
  'Dividers.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dividers } from './Dividers';

const meta: Meta<typeof Dividers> = {
  title: 'Components/Dividers/Dividers',
  component: Dividers,
  parameters: {
    docs: {
      description: {
        component: \`
# Dividers
Preserved layer: \`Dividers\` (COMPONENT_SET: \`71:7805\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **Size** | \`Small\`, \`Medium\`, \`Large\`, \`Extra Large\` | Thickness (1px, 2px, 4px, 8px) |
        \`,
      },
    },
  },
  args: {
    size: 'Medium',
    orientation: 'horizontal',
  },
};

export default meta;
type Story = StoryObj<typeof Dividers>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'OR CONTINUE WITH',
  },
};
`
});

writeComponent('ProcessBar', {
  'ProcessBar.tsx': `
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
    <div className={\`uedp-process-bar uedp-process-bar--\${colorVariant}\`}>
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
`,
  'ProcessBar.css': `
.uedp-process-bar {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  font-family: inherit;
}

.uedp-process-bar__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.uedp-process-bar__label {
  font-size: 13px;
  font-weight: 500;
  color: var(--uedp-slate-700, #334155);
}

.uedp-process-bar__value {
  font-size: 13px;
  font-weight: 700;
  color: var(--uedp-slate-900, #0f172a);
}

.uedp-process-bar__track {
  width: 100%;
  height: 8px;
  background-color: var(--uedp-slate-200, #e2e8f0);
  border-radius: var(--uedp-rounded-full, 9999px);
  overflow: hidden;
}

.uedp-process-bar__fill {
  height: 100%;
  border-radius: 9999px;
  transition: width 0.4s ease;
}

.uedp-process-bar--primary .uedp-process-bar__fill {
  background-color: var(--uedp-slate-900, #0f172a);
}
.uedp-process-bar--success .uedp-process-bar__fill {
  background-color: var(--uedp-emerald-500, #10b981);
}
.uedp-process-bar--warning .uedp-process-bar__fill {
  background-color: var(--uedp-amber-500, #f59e0b);
}
.uedp-process-bar--error .uedp-process-bar__fill {
  background-color: var(--uedp-red-500, #ef4444);
}
`,
  'ProcessBar.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProcessBar } from './ProcessBar';

const meta: Meta<typeof ProcessBar> = {
  title: 'Components/Process bar/Process bar',
  component: ProcessBar,
  parameters: {
    docs: {
      description: {
        component: \`
# Process bar
Preserved layer: \`Process bar\` (COMPONENT_SET: \`71:7902\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **Process** | \`0%\`, \`10%\`, \`20%\`, \`30%\`, \`40%\`, \`50%\`, \`60%\`, \`70%\`, \`80%\`, \`90%\`, \`100%\` | Progress scale |
        \`,
      },
    },
  },
  argTypes: {
    process: {
      control: 'select',
      options: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
    },
    colorVariant: {
      control: 'radio',
      options: ['primary', 'success', 'warning', 'error'],
    },
  },
  args: {
    process: '60%',
    colorVariant: 'primary',
    label: 'Fleet Dispatch Progress',
    showLabel: true,
  },
};

export default meta;
type Story = StoryObj<typeof ProcessBar>;

export const Default: Story = {};

export const AllSteps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '480px' }}>
      <ProcessBar process="20%" colorVariant="primary" label="Step 1: In Warehouse" />
      <ProcessBar process="50%" colorVariant="warning" label="Step 2: In Transit" />
      <ProcessBar process="80%" colorVariant="primary" label="Step 3: Out for Delivery" />
      <ProcessBar process="100%" colorVariant="success" label="Step 4: Completed" />
    </div>
  ),
};
`
});

console.log('✓ Part 3 components generated successfully.');
