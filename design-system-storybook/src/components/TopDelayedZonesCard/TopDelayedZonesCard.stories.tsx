import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TopDelayedZonesCard } from './TopDelayedZonesCard';

const meta: Meta<typeof TopDelayedZonesCard> = {
  title: 'Components/Charts & Graphs/Top Delayed Zones Card',
  component: TopDelayedZonesCard,
  parameters: {
    docs: {
      description: {
        component: '# Top Delayed Zones Card\nPreserved layer: `Top Delayed Zones card` (COMPONENT: `88:11237`).\n\nBar visualization displaying zones with highest delay counts.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TopDelayedZonesCard>;

export const Default: Story = {};
