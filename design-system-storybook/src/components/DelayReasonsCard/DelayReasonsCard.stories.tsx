import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DelayReasonsCard } from './DelayReasonsCard';

const meta: Meta<typeof DelayReasonsCard> = {
  title: 'Components/Charts & Graphs/Delay Reasons Card',
  component: DelayReasonsCard,
  parameters: {
    docs: {
      description: {
        component: '# Delay Reasons Card\nPreserved layer: `Delay Reasons card` (COMPONENT: `88:11239`).\n\nDonut breakdown classifying fleet delays by `Traffic`, `Vehicle Issue`, `Weather`, and `Other`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DelayReasonsCard>;

export const Default: Story = {};
