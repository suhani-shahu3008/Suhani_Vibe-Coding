import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabBars } from './TabBars';

const meta: Meta<typeof TabBars> = {
  title: 'Components/Tab bar/Tab bars',
  component: TabBars,
  parameters: {
    docs: {
      description: {
        component: '# Tab bars\nPreserved layer: `Tab bars` (COMPONENT_SET: `74:8054`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **State** | `Default`, `Active`, `Hovered`, `Focused`, `Pressed`, `Disabled` | State matrix |',
      },
    },
  },
  args: {
    state: 'Default',
    label: 'All Deliveries',
    badge: 24,
    active: false,
  },
};

export default meta;
type Story = StoryObj<typeof TabBars>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    active: true,
  },
};
