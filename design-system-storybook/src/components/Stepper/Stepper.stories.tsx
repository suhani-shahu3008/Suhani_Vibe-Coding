import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper/Stepper',
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component: '# Stepper\nPreserved layer: `Stepper` (COMPONENT_SET: `77:8465` & `78:8819`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **Progress** | `Step 1` through `Step 7` | Active progress variant |',
      },
    },
  },
  argTypes: {
    progress: {
      control: 'select',
      options: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6', 'Step 7'],
    },
  },
  args: {
    progress: 'Step 3',
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {};
