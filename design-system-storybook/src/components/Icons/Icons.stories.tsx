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
        component: '# Icons & Iconography\nPreserved layer: `Icons` (COMPONENT_SET: `23:2644`) & `Icons for Instance Swaps` (FRAME: `17:679`).\n\n| Property | Type | Default |\n| :--- | :--- | :--- |\n| **name** | `IconName` | `Route` |\n| **mode** | `Light` / `Dark` | `Light` |\n| **size** | `number` | `24` |',
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
            <p style={{ fontSize: '13px', opacity: 0.7, marginTop: '4px' }}>Click any icon to inspect</p>
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
