import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/Text Field/Text Field',
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: '# Text Field\nPreserved layer: `Text field` (COMPONENT_SET: `85:10177`).\n\nMulti-line text input with character support, focus elevation, and validation states.',
      },
    },
  },
  args: {
    state: 'Default',
    label: 'Special Delivery Instructions',
    helperText: 'Include access gate codes and contact phone numbers.',
    rows: 4,
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {};
