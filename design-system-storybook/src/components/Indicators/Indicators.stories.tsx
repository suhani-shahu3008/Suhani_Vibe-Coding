import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Indicators } from './Indicators';

const meta: Meta<typeof Indicators> = {
  title: 'Components/Indicators/Indicators',
  component: Indicators,
  parameters: {
    docs: {
      description: {
        component: '# Indicators\nPreserved layer: `Indicators` (COMPONENT_SET: `70:7774`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **State** | `Info`, `Success`, `Warning`, `Error`, `Inactive` | State color |\n| **Size** | `Small` (8px), `Large` (12px) | Dot dimension |',
      },
    },
  },
  args: {
    stateVariant: 'Success',
    size: 'Small',
    label: 'Live Signal Connected',
    pulse: true,
  },
};

export default meta;
type Story = StoryObj<typeof Indicators>;

export const Default: Story = {};
