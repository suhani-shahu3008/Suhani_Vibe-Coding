import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProcessBar } from './ProcessBar';

const meta: Meta<typeof ProcessBar> = {
  title: 'Components/Process bar/Process bar',
  component: ProcessBar,
  parameters: {
    docs: {
      description: {
        component: '# Process bar\nPreserved layer: `Process bar` (COMPONENT_SET: `71:7902`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **Process** | `0%` through `100%` | Progress scale |',
      },
    },
  },
  argTypes: {
    process: {
      control: 'select',
      options: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
    },
    colorVariant: {
      control: 'radio',
      options: ['primary', 'success', 'warning', 'error'],
    },
  },
  args: {
    process: '60%',
    colorVariant: 'primary',
    label: 'Fleet Dispatch Progress',
    showLabel: true,
  },
};

export default meta;
type Story = StoryObj<typeof ProcessBar>;

export const Default: Story = {};

export const AllSteps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '480px' }}>
      <ProcessBar process="20%" colorVariant="primary" label="Step 1: In Warehouse" />
      <ProcessBar process="50%" colorVariant="warning" label="Step 2: In Transit" />
      <ProcessBar process="80%" colorVariant="primary" label="Step 3: Out for Delivery" />
      <ProcessBar process="100%" colorVariant="success" label="Step 4: Completed" />
    </div>
  ),
};
