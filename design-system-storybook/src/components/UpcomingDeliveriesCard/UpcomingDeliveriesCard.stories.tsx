import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UpcomingDeliveriesCard } from './UpcomingDeliveriesCard';

const meta: Meta<typeof UpcomingDeliveriesCard> = {
  title: 'Components/Charts & Graphs/Upcoming Deliveries Card',
  component: UpcomingDeliveriesCard,
  parameters: {
    docs: {
      description: {
        component: '# Upcoming Deliveries Card\nPreserved layer: `Upcoming Deliveries card` (COMPONENT: `88:11238`).\n\nList of scheduled dispatch checkpoints with customer name, shipment ID, city, and ETA badge.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UpcomingDeliveriesCard>;

export const Default: Story = {};
