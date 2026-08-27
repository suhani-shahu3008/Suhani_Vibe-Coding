import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DeliveryTrendsCard } from './DeliveryTrendsCard';

const meta: Meta<typeof DeliveryTrendsCard> = {
  title: 'Components/Charts & Graphs/Delivery Trends Card',
  component: DeliveryTrendsCard,
  parameters: {
    docs: {
      description: {
        component: '# Delivery Trends Card\nPreserved layer: `Delivery trends card` (COMPONENT: `88:11240`).\n\nLine chart comparison showing `Total Deliveries` vs `On-Time` fulfillment across monthly intervals.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DeliveryTrendsCard>;

export const Default: Story = {};
