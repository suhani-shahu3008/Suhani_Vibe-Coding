import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SideNavigationBar } from './SideNavigationBar';

const meta: Meta<typeof SideNavigationBar> = {
  title: 'Components/Navigation bar/Side Navigation Bar',
  component: SideNavigationBar,
  parameters: {
    docs: {
      description: {
        component: '# Side Navigation Bar\nPreserved layers:\n- `Side Navigation Bar - Collapsed` (`41:4732`)\n- `Side Navigation Bar - Expanded` (`41:4745`)\n- `Side Navigation Bar - Expanded (Sub menu)` (`41:4756`)',
      },
    },
  },
  argTypes: {
    expanded: { control: 'boolean' },
    frame: { control: 'boolean' },
    noOfIcons: { control: { type: 'select', options: [1, 2, 3, 4, 5, 6] } },
    brandTitle: { control: 'text' },
  },
  args: {
    expanded: true,
    frame: true,
    noOfIcons: 6,
    brandTitle: 'VisionSync Fleet',
  },
};

export default meta;
type Story = StoryObj<typeof SideNavigationBar>;

export const Expanded: Story = {};

export const Collapsed: Story = {
  args: {
    expanded: false,
  },
};
