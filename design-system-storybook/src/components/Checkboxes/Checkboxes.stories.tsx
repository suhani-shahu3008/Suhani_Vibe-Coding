import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkboxes } from './Checkboxes';

const meta: Meta<typeof Checkboxes> = {
  title: 'Components/Checkboxes/Checkboxes',
  component: Checkboxes,
  parameters: {
    docs: {
      description: {
        component: '# Checkboxes\nPreserved layer: `Checkboxes` (COMPONENT_SET: `57:7420`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **Type** | `Primary`, `Success`, `Error`, `Warning` | Color theme variant |\n| **Checked** | `true` / `false` | Checked state |',
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
