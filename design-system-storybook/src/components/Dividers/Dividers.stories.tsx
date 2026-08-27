import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dividers } from './Dividers';

const meta: Meta<typeof Dividers> = {
  title: 'Components/Dividers/Dividers',
  component: Dividers,
  parameters: {
    docs: {
      description: {
        component: '# Dividers\nPreserved layer: `Dividers` (COMPONENT_SET: `71:7805`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **Size** | `Small`, `Medium`, `Large`, `Extra Large` | Thickness (1px, 2px, 4px, 8px) |',
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
