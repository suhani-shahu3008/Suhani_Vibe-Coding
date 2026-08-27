import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FleetStatusCard } from './FleetStatusCard';

const meta: Meta<typeof FleetStatusCard> = {
  title: 'Components/Charts & Graphs/Fleet Status Card',
  component: FleetStatusCard,
  parameters: {
    docs: {
      description: {
        component: '# Fleet Status Card\nPreserved layer: `Fleet Status card` (COMPONENT: `88:11236`).\n\nDonut telemetry showing ratio between `In Use` (active missions) and `Available` vehicles.',
      },
    },
  },
  args: {
    available: 120,
    inUse: 240,
  },
};

export default meta;
type Story = StoryObj<typeof FleetStatusCard>;

export const Default: Story = {};
