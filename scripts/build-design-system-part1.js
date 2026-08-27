const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'design-system-storybook', 'src');
const componentsDir = path.join(srcDir, 'components');

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

function writeComponent(name, files) {
  const dir = path.join(componentsDir, name);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  for (const [filename, content] of Object.entries(files)) {
    fs.writeFileSync(path.join(dir, filename), content.trim() + '\n');
  }
  console.log(`✓ Generated component: ${name}`);
}

// -------------------------------------------------------------
// 1. ICONS & ICONOGRAPHY
// -------------------------------------------------------------
writeComponent('Icons', {
  'Icons.tsx': `
import React from 'react';
import {
  Route,
  User,
  ShoppingCart,
  Truck,
  MapPin,
  Phone,
  Upload,
  Trash2,
  Edit2,
  Check,
  Clock,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Search,
  Settings,
  Filter,
  Bell,
  Download,
  Plus,
  Minus,
  X,
  Calendar,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle2,
  Info,
  Layers,
  BarChart3,
  PieChart,
  Navigation,
  Globe,
  Radio,
  Sliders,
  MoreVertical,
  MoreHorizontal,
  RefreshCw,
  LogOut,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Lock,
  Unlock,
  Shield,
  HelpCircle,
  FileText,
  Mail
} from 'lucide-react';
import './Icons.css';

export type IconName =
  | 'Route'
  | 'Profile 2'
  | 'Cart'
  | 'Truck 2'
  | 'Location filled'
  | 'Call'
  | 'Upload'
  | 'Delete'
  | 'Edit 2'
  | 'Tick'
  | 'Clock 2'
  | 'Clock'
  | 'Stock up'
  | 'Right Arrow'
  | 'Left Arrow'
  | 'Up Arrow'
  | 'Down Arrow'
  | 'Search'
  | 'Settings'
  | 'Filter'
  | 'Notification'
  | 'Download'
  | 'Add'
  | 'Minus'
  | 'Close'
  | 'Calendar'
  | 'Eye'
  | 'Eye Slash'
  | 'Alert'
  | 'Success'
  | 'Info'
  | 'Layers'
  | 'Bar Chart'
  | 'Pie Chart'
  | 'Navigation'
  | 'Globe'
  | 'Radio'
  | 'Sliders'
  | 'More Vertical'
  | 'More Horizontal'
  | 'Refresh'
  | 'Logout'
  | 'Maximize'
  | 'Minimize'
  | 'Zoom In'
  | 'Zoom Out'
  | 'Lock'
  | 'Unlock'
  | 'Shield'
  | 'Help'
  | 'Document'
  | 'Mail';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName | string;
  mode?: 'Light' | 'Dark';
  size?: number | string;
  color?: string;
  className?: string;
}

const iconMap: Record<string, React.FC<any>> = {
  'Route': Route,
  'Profile 2': User,
  'Cart': ShoppingCart,
  'Truck 2': Truck,
  'Location filled': MapPin,
  'Call': Phone,
  'Upload': Upload,
  'Delete': Trash2,
  'Edit 2': Edit2,
  'Tick': Check,
  'Clock 2': Clock,
  'Clock': Clock,
  'Stock up': TrendingUp,
  'Right Arrow': ChevronRight,
  'Left Arrow': ChevronLeft,
  'Up Arrow': ChevronUp,
  'Down Arrow': ChevronDown,
  'Search': Search,
  'Settings': Settings,
  'Filter': Filter,
  'Notification': Bell,
  'Download': Download,
  'Add': Plus,
  'Minus': Minus,
  'Close': X,
  'Calendar': Calendar,
  'Eye': Eye,
  'Eye Slash': EyeOff,
  'Alert': AlertCircle,
  'Success': CheckCircle2,
  'Info': Info,
  'Layers': Layers,
  'Bar Chart': BarChart3,
  'Pie Chart': PieChart,
  'Navigation': Navigation,
  'Globe': Globe,
  'Radio': Radio,
  'Sliders': Sliders,
  'More Vertical': MoreVertical,
  'More Horizontal': MoreHorizontal,
  'Refresh': RefreshCw,
  'Logout': LogOut,
  'Maximize': Maximize2,
  'Minimize': Minimize2,
  'Zoom In': ZoomIn,
  'Zoom Out': ZoomOut,
  'Lock': Lock,
  'Unlock': Unlock,
  'Shield': Shield,
  'Help': HelpCircle,
  'Document': FileText,
  'Mail': Mail,
};

export const Icons: React.FC<IconProps> = ({
  name,
  mode = 'Light',
  size = 20,
  color,
  className = '',
  ...rest
}) => {
  const IconComponent = iconMap[name] || HelpCircle;
  const computedColor = color || (mode === 'Dark' ? 'var(--uedp-white, #ffffff)' : 'var(--uedp-slate-700, #334155)');

  return (
    <span className={\`uedp-icon uedp-icon--\${mode.toLowerCase()} \${className}\`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <IconComponent size={size} color={computedColor} {...rest} />
    </span>
  );
};
`,
  'Icons.css': `
.uedp-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  transition: transform 0.15s ease, color 0.15s ease;
}
.uedp-icon--dark {
  color: var(--uedp-white, #ffffff);
}
.uedp-icon--light {
  color: var(--uedp-slate-700, #334155);
}
`,
  'Icons.stories.tsx': `
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icons, IconName } from './Icons';

const allIcons: IconName[] = [
  'Route', 'Profile 2', 'Cart', 'Truck 2', 'Location filled', 'Call',
  'Upload', 'Delete', 'Edit 2', 'Tick', 'Clock 2', 'Clock', 'Stock up',
  'Right Arrow', 'Left Arrow', 'Up Arrow', 'Down Arrow', 'Search',
  'Settings', 'Filter', 'Notification', 'Download', 'Add', 'Minus',
  'Close', 'Calendar', 'Eye', 'Eye Slash', 'Alert', 'Success', 'Info',
  'Layers', 'Bar Chart', 'Pie Chart', 'Navigation', 'Globe', 'Radio',
  'Sliders', 'More Vertical', 'More Horizontal', 'Refresh', 'Logout',
  'Maximize', 'Minimize', 'Zoom In', 'Zoom Out', 'Lock', 'Unlock',
  'Shield', 'Help', 'Document', 'Mail'
];

const meta: Meta<typeof Icons> = {
  title: 'Components/Iconography/Icons',
  component: Icons,
  parameters: {
    docs: {
      description: {
        component: \`
# Icons & Iconography
Preserved layer: \`Icons\` (COMPONENT_SET: \`23:2644\`) & \`Icons for Instance Swaps\` (FRAME: \`17:679\`).

| Property | Type | Default | Figma Spec |
| :--- | :--- | :--- | :--- |
| **name** | \`IconName\` | \`'Route'\` | 51+ visual vectors |
| **mode** | \`'Light' | 'Dark'\` | \`'Light'\` | Figma Mode variant |
| **size** | \`number | string\` | \`20\` | \`--uedp-gap-5\` (20px) |
| **color** | \`string\` | token fallback | \`--uedp-slate-700\` / \`--uedp-white\` |
        \`,
      },
    },
  },
  argTypes: {
    name: {
      control: 'select',
      options: allIcons,
    },
    mode: {
      control: 'radio',
      options: ['Light', 'Dark'],
    },
    size: {
      control: { type: 'range', min: 14, max: 48, step: 2 },
    },
    color: {
      control: 'color',
    },
  },
  args: {
    name: 'Route',
    mode: 'Light',
    size: 24,
  },
};

export default meta;
type Story = StoryObj<typeof Icons>;

export const Default: Story = {};

export const IconGallery: Story = {
  render: (args) => {
    const [search, setSearch] = useState('');
    const filtered = allIcons.filter(i => i.toLowerCase().includes(search.toLowerCase()));

    return (
      <div style={{
        padding: '24px',
        backgroundColor: args.mode === 'Dark' ? 'var(--uedp-slate-900, #0f172a)' : 'var(--uedp-white, #ffffff)',
        color: args.mode === 'Dark' ? '#ffffff' : '#0f172a',
        borderRadius: '12px',
        fontFamily: 'Inter, sans-serif'
      }}>
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '700' }}>Iconography Showcase ({filtered.length} Icons)</h2>
            <p style={{ fontSize: '13px', opacity: 0.7, marginTop: '4px' }}>Click any icon to copy its component code</p>
          </div>
          <input
            type="text"
            placeholder="Search icons..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: '1px solid var(--uedp-slate-300, #cbd5e1)',
              fontSize: '14px',
              outline: 'none',
              width: '260px',
              backgroundColor: args.mode === 'Dark' ? '#1e293b' : '#ffffff',
              color: args.mode === 'Dark' ? '#ffffff' : '#0f172a'
            }}
          />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
          gap: '16px'
        }}>
          {filtered.map((iconName) => (
            <div
              key={iconName}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 8px',
                border: '1px solid',
                borderColor: args.mode === 'Dark' ? '#334155' : '#e2e8f0',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                backgroundColor: args.mode === 'Dark' ? '#1e293b' : '#f8fafc'
              }}
              title={\`<Icons name="\${iconName}" mode="\${args.mode}" />\`}
            >
              <Icons name={iconName} mode={args.mode} size={args.size || 24} color={args.color} />
              <span style={{ fontSize: '11px', marginTop: '10px', textAlign: 'center', fontWeight: '500' }}>
                {iconName}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
`
});

// -------------------------------------------------------------
// 2. BUTTON COMPONENT
// -------------------------------------------------------------
writeComponent('Button', {
  'Button.tsx': `
import React from 'react';
import { Icons, IconName } from '../Icons/Icons';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  typeVariant?: 'Primary' | 'Secondary';
  state?: 'Active' | 'Disabled' | 'Focused' | 'Hovered' | 'Pressed';
  shape?: 'Rectangle' | 'Capsule';
  feedback?: 'Default' | 'Info' | 'Warning' | 'Success' | 'Error' | 'Warnin';
  size?: 'Small' | 'Large';
  label?: string;
  showIcon?: boolean;
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
  const isDisabled = disabled || state === 'Disabled';
  const effectiveFeedback = feedback === 'Warnin' ? 'Warning' : feedback;

  return (
    <button
      className={\`uedp-button uedp-button--\${typeVariant.toLowerCase()} uedp-button--\${shape.toLowerCase()} uedp-button--\${size.toLowerCase()} uedp-button--feedback-\${effectiveFeedback.toLowerCase()} uedp-button--state-\${state.toLowerCase()} \${className}\`}
      disabled={isDisabled}
      {...rest}
    >
      <span className="uedp-button__label">{children || label}</span>
      {showIcon && (
        <span className="uedp-button__icon">
          <Icons
            name={iconName}
            size={size === 'Small' ? 16 : 18}
            mode={typeVariant === 'Primary' && effectiveFeedback === 'Default' ? 'Dark' : 'Light'}
            color="currentColor"
          />
        </span>
      )}
    </button>
  );
};
`,
  'Button.css': `
.uedp-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--uedp-gap-2, 8px);
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid transparent;
  outline: none;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  white-space: nowrap;
}

/* Sizing */
.uedp-button--large {
  padding: 12px 24px;
  font-size: 14px;
  line-height: 20px;
  min-height: 44px;
}
.uedp-button--small {
  padding: 8px 16px;
  font-size: 12px;
  line-height: 16px;
  min-height: 32px;
}

/* Shapes */
.uedp-button--capsule {
  border-radius: var(--uedp-rounded-full, 9999px);
}
.uedp-button--rectangle {
  border-radius: var(--uedp-rounded-lg, 8px);
}

/* Primary Type */
.uedp-button--primary.uedp-button--feedback-default {
  background-color: var(--uedp-slate-900, #0f172a);
  color: var(--uedp-white, #ffffff);
  border-color: var(--uedp-slate-900, #0f172a);
}
.uedp-button--primary.uedp-button--feedback-default:hover,
.uedp-button--primary.uedp-button--state-hovered {
  background-color: var(--uedp-slate-800, #1e293b);
  border-color: var(--uedp-slate-800, #1e293b);
}
.uedp-button--primary.uedp-button--feedback-default:active,
.uedp-button--primary.uedp-button--state-pressed {
  background-color: var(--uedp-slate-950, #020617);
}
.uedp-button--primary.uedp-button--state-focused,
.uedp-button--primary:focus-visible {
  box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.25);
}

/* Feedback Variants */
.uedp-button--primary.uedp-button--feedback-info {
  background-color: var(--uedp-blue-600, #2563eb);
  color: var(--uedp-white, #ffffff);
}
.uedp-button--primary.uedp-button--feedback-success {
  background-color: var(--uedp-emerald-600, #059669);
  color: var(--uedp-white, #ffffff);
}
.uedp-button--primary.uedp-button--feedback-warning {
  background-color: var(--uedp-amber-500, #f59e0b);
  color: var(--uedp-white, #ffffff);
}
.uedp-button--primary.uedp-button--feedback-error {
  background-color: var(--uedp-red-600, #dc2626);
  color: var(--uedp-white, #ffffff);
}

/* Secondary Type */
.uedp-button--secondary {
  background-color: var(--uedp-white, #ffffff);
  color: var(--uedp-slate-700, #334155);
  border-color: var(--uedp-slate-300, #cbd5e1);
}
.uedp-button--secondary:hover,
.uedp-button--secondary.uedp-button--state-hovered {
  background-color: var(--uedp-slate-50, #f8fafc);
  border-color: var(--uedp-slate-400, #94a3b8);
  color: var(--uedp-slate-900, #0f172a);
}
.uedp-button--secondary:active,
.uedp-button--secondary.uedp-button--state-pressed {
  background-color: var(--uedp-slate-100, #f1f5f9);
}

/* Disabled */
.uedp-button:disabled,
.uedp-button--state-disabled {
  opacity: var(--uedp-opacity-50, 0.5);
  cursor: not-allowed;
  pointer-events: none;
}
`,
  'Button.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: \`
# Button
Preserved layer: \`Button\` (COMPONENT_SET: \`10:166\`).

| Property | Type | Options | Bound Tokens / Raw Value |
| :--- | :--- | :--- | :--- |
| **Type** | Variant | \`Primary\`, \`Secondary\` | \`--uedp-slate-900\` / \`--uedp-white\` |
| **State** | Variant | \`Active\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Disabled\` | Interactive state matrix |
| **Shape** | Variant | \`Rectangle\`, \`Capsule\` | \`--uedp-rounded-lg\` / \`--uedp-rounded-full\` |
| **Feedback** | Variant | \`Default\`, \`Info\`, \`Warning\`, \`Success\`, \`Error\` | Semantic tokens |
| **Size** | Variant | \`Small\`, \`Large\` | 32px / 44px min-height |
| **Icon** | Boolean/Slot | \`true\` / \`false\` | \`Icons for Instance Swaps\` |
        \`,
      },
    },
  },
  argTypes: {
    typeVariant: {
      control: 'radio',
      options: ['Primary', 'Secondary'],
    },
    state: {
      control: 'select',
      options: ['Active', 'Hovered', 'Focused', 'Pressed', 'Disabled'],
    },
    shape: {
      control: 'radio',
      options: ['Capsule', 'Rectangle'],
    },
    feedback: {
      control: 'select',
      options: ['Default', 'Info', 'Success', 'Warning', 'Error'],
    },
    size: {
      control: 'radio',
      options: ['Small', 'Large'],
    },
    showIcon: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
  args: {
    typeVariant: 'Primary',
    state: 'Active',
    shape: 'Capsule',
    feedback: 'Default',
    size: 'Large',
    label: 'Button',
    showIcon: true,
    iconName: 'Right Arrow',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    typeVariant: 'Secondary',
  },
};

export const FeedbackStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button feedback="Default" label="Default" />
      <Button feedback="Info" label="Info" iconName="Info" />
      <Button feedback="Success" label="Success" iconName="Success" />
      <Button feedback="Warning" label="Warning" iconName="Alert" />
      <Button feedback="Error" label="Error" iconName="Close" />
    </div>
  ),
};

export const AllVariantsMatrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button size="Large" shape="Capsule" label="Primary Capsule" />
        <Button size="Small" shape="Capsule" label="Small Capsule" />
        <Button size="Large" shape="Rectangle" label="Primary Rectangle" />
        <Button size="Small" shape="Rectangle" label="Small Rectangle" />
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button typeVariant="Secondary" size="Large" shape="Capsule" label="Secondary Capsule" />
        <Button typeVariant="Secondary" size="Small" shape="Capsule" label="Secondary Small" />
        <Button typeVariant="Secondary" size="Large" shape="Rectangle" label="Secondary Rectangle" />
        <Button typeVariant="Secondary" state="Disabled" label="Disabled Button" />
      </div>
    </div>
  ),
};
`
});

// -------------------------------------------------------------
// 3. ICON BUTTON
// -------------------------------------------------------------
writeComponent('IconButton', {
  'IconButton.tsx': `
import React from 'react';
import { Icons, IconName } from '../Icons/Icons';
import './IconButton.css';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: 'Default' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';
  size?: 'Small' | 'Large';
  iconName?: IconName | string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const IconButton: React.FC<IconButtonProps> = ({
  state = 'Default',
  size = 'Large',
  iconName = 'Settings',
  variant = 'secondary',
  className = '',
  disabled,
  ...rest
}) => {
  const isDisabled = disabled || state === 'Disabled';

  return (
    <button
      className={\`uedp-icon-button uedp-icon-button--\${size.toLowerCase()} uedp-icon-button--\${variant} uedp-icon-button--state-\${state.toLowerCase()} \${className}\`}
      disabled={isDisabled}
      {...rest}
    >
      <Icons
        name={iconName}
        size={size === 'Small' ? 16 : 20}
        color="currentColor"
      />
    </button>
  );
};
`,
  'IconButton.css': `
.uedp-icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--uedp-rounded-full, 9999px);
  border: 1px solid transparent;
  cursor: pointer;
  outline: none;
  transition: all 0.15s ease;
  user-select: none;
  background-color: var(--uedp-white, #ffffff);
  color: var(--uedp-slate-700, #334155);
}

.uedp-icon-button--large {
  width: 44px;
  height: 44px;
}
.uedp-icon-button--small {
  width: 32px;
  height: 32px;
}

.uedp-icon-button--secondary {
  border-color: var(--uedp-slate-200, #e2e8f0);
  background-color: var(--uedp-white, #ffffff);
}
.uedp-icon-button--secondary:hover,
.uedp-icon-button--state-hovered {
  background-color: var(--uedp-slate-100, #f1f5f9);
  color: var(--uedp-slate-900, #0f172a);
}
.uedp-icon-button--secondary:active,
.uedp-icon-button--state-pressed {
  background-color: var(--uedp-slate-200, #e2e8f0);
}

.uedp-icon-button--primary {
  background-color: var(--uedp-slate-900, #0f172a);
  color: var(--uedp-white, #ffffff);
}
.uedp-icon-button--primary:hover {
  background-color: var(--uedp-slate-800, #1e293b);
}

.uedp-icon-button:disabled,
.uedp-icon-button--state-disabled {
  opacity: var(--uedp-opacity-40, 0.4);
  cursor: not-allowed;
  pointer-events: none;
}
`,
  'IconButton.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Buttons/Icon Button',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: \`
# Icon Button
Preserved layer: \`Icon Button\` (COMPONENT_SET: \`81:8976\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **State** | \`Default\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Disabled\` | Component state |
| **Size** | \`Small\` (32px), \`Large\` (44px) | Circular dimensions |
| **iconName** | Any Figma Icon | Instance swap vector |
        \`,
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Disabled'],
    },
    size: {
      control: 'radio',
      options: ['Small', 'Large'],
    },
    variant: {
      control: 'radio',
      options: ['secondary', 'primary', 'ghost'],
    },
    iconName: {
      control: 'text',
    },
  },
  args: {
    state: 'Default',
    size: 'Large',
    variant: 'secondary',
    iconName: 'Settings',
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton iconName="Settings" size="Large" />
      <IconButton iconName="Filter" size="Large" />
      <IconButton iconName="Notification" size="Large" />
      <IconButton iconName="Route" size="Small" />
      <IconButton iconName="Truck 2" size="Small" />
      <IconButton iconName="Delete" state="Disabled" size="Large" />
    </div>
  ),
};
`
});

console.log('✓ Buttons generated successfully.');
