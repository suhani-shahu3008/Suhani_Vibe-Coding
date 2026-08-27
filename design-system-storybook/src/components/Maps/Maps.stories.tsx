import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Maps } from './Maps';

const meta: Meta<typeof Maps> = {
  title: 'Components/Maps/Maps',
  component: Maps,
  parameters: {
    docs: {
      description: {
        component: '# Maps (Fleet Route Visualizer)\nPreserved layer: `Maps` (COMPONENT_SET: `42:5063`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **Size** | `Compact`, `Standard`, `Wide` | Canvas dimension |',
      },
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['Compact', 'Standard', 'Wide'],
    },
  },
  args: {
    size: 'Standard',
  },
};

export default meta;
type Story = StoryObj<typeof Maps>;

export const Standard: Story = {};

export const Compact: Story = {
  args: {
    size: 'Compact',
  },
};

export const Wide: Story = {
  args: {
    size: 'Wide',
  },
};
