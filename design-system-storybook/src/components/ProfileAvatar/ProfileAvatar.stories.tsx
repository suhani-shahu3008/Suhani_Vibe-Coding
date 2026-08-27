import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProfileAvatar } from './ProfileAvatar';

const meta: Meta<typeof ProfileAvatar> = {
  title: 'Components/Profile Avatar/Profile Avatar',
  component: ProfileAvatar,
  parameters: {
    docs: {
      description: {
        component: '# Profile Avatar\nPreserved layer: `Profile Avatar` (COMPONENT_SET: `80:8888`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **State** | `Default`, `Hovered`, `Focused`, `Pressed` | Interaction states |',
      },
    },
  },
  argTypes: {
    state: { control: 'select', options: ['Default', 'Hovered', 'Focused', 'Pressed'] },
    name: { control: 'text' },
    role: { control: 'text' },
  },
  args: {
    state: 'Default',
    name: 'Sophia Chen',
    role: 'Logistics Lead',
  },
};

export default meta;
type Story = StoryObj<typeof ProfileAvatar>;

export const Default: Story = {};
