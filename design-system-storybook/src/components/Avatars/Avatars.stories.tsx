import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatars } from './Avatars';

const meta: Meta<typeof Avatars> = {
  title: 'Components/Avatars/Avatars',
  component: Avatars,
  parameters: {
    docs: {
      description: {
        component: '# Avatars\nPreserved layers: `Big Avatars` (`45:5629`) & `Small Avatars` (`45:5913`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **size** | `big` (48px), `small` (32px) | Avatar dimensions |\n| **status** | `online`, `offline`, `busy`, `away` | Activity indicator dot |',
      },
    },
  },
  argTypes: {
    size: { control: 'radio', options: ['big', 'small'] },
    status: { control: 'select', options: ['online', 'offline', 'busy', 'away'] },
    name: { control: 'text' },
  },
  args: {
    size: 'big',
    status: 'online',
    name: 'Sophia Chen',
  },
};

export default meta;
type Story = StoryObj<typeof Avatars>;

export const BigAvatar: Story = {};

export const SmallAvatar: Story = {
  args: {
    size: 'small',
  },
};
