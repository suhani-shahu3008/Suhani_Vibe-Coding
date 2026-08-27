import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Buttons/Icon Button',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: `# Icon Button — Figma node \`81:8976\`

Pixel-perfect implementation of the **Icon Button** COMPONENT_SET.

| Property | Options | Description |
| :--- | :--- | :--- |
| **State** | \`Default\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Disabled\` | Component state |
| **Size** | \`Small\` (30x30), \`Large\` (60x60) | Circular dimensions |`,
      },
    },
    layout: 'padded',
  },
  argTypes: {
    state: { control: 'select', options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Disabled'] },
    size: { control: 'radio', options: ['Small', 'Large'] },
    iconName: { control: 'text' },
  },
  args: {
    state: 'Default',
    size: 'Large',
    iconName: 'Settings',
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Playground: Story = {};

export const AllStatesMatrix: Story = {
  name: '↳ All States Matrix',
  render: () => {
    const states = ['Default', 'Hovered', 'Focused', 'Pressed', 'Disabled'] as const;
    
    return (
      <div style={{ padding: '24px', background: '#e2e8f0', fontFamily: 'Inter, sans-serif' }}>
        <h3 style={{ margin: '0 0 16px', color: '#1e293b' }}>Large (60x60) State Matrix</h3>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
          {states.map(st => (
            <div key={st} style={{ textAlign: 'center' }}>
              <IconButton size="Large" state={st} iconName="Settings" />
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '8px' }}>{st}</div>
            </div>
          ))}
        </div>

        <h3 style={{ margin: '0 0 16px', color: '#1e293b' }}>Small (30x30) State Matrix</h3>
        <div style={{ display: 'flex', gap: '16px' }}>
          {states.map(st => (
            <div key={st} style={{ textAlign: 'center' }}>
              <IconButton size="Small" state={st} iconName="Filter" />
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '8px' }}>{st}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
