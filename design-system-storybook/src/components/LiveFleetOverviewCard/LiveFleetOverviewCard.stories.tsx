import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LiveFleetOverviewCard } from './LiveFleetOverviewCard';

const meta: Meta<typeof LiveFleetOverviewCard> = {
  title: 'Components/Charts & Graphs/Live Fleet Overview Card',
  component: LiveFleetOverviewCard,
  parameters: {
    docs: {
      description: {
        component: '# Live Fleet Overview Card\nPreserved layer: `Live Fleet Overview card` (COMPONENT: `88:11235`).\n\nFull interactive fleet map dashboard card with header actions, GPS vector layers, and live controls.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LiveFleetOverviewCard>;

export const Default: Story = {};
