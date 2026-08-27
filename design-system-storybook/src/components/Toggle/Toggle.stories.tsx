import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: '# Toggle\nPreserved layer: `Toggle` (COMPONENT_SET: `56:6962`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **Type** | `Primary`, `Success` | Brand fill color |\n| **State** | `Enabled`, `Hovered`, `Focused`, `Pressed`, `Disabled` | Interaction matrix |\n| **checked** | `true` / `false` | Boolean state |',
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
