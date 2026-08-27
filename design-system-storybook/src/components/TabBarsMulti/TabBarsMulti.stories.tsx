import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabBarsMulti } from './TabBarsMulti';

const meta: Meta<typeof TabBarsMulti> = {
  title: 'Components/Tab bar/Tab Bars Multi',
  component: TabBarsMulti,
  parameters: {
    docs: {
      description: {
        component: '# Tab Bars (Multi Tabs Container)\nPreserved layer: `Tab bars` (COMPONENT_SET: `74:8069`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **Active** | `None`, `First`, `Second`, `Third`, `Fourth`, `Fifth` | Preselected tab option |',
      },
    },
  },
  argTypes: {
    active: {
      control: 'select',
      options: ['None', 'First', 'Second', 'Third', 'Fourth', 'Fifth'],
    },
  },
  args: {
    active: 'First',
  },
};

export default meta;
type Story = StoryObj<typeof TabBarsMulti>;

export const Default: Story = {};
