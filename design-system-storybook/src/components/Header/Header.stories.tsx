import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: '# Header\nPreserved layer: `Header` (COMPONENT: `82:9262`).\n\nGlobal top application bar containing title, live search, notifications, and profile controls.',
      },
    },
  },
  args: {
    title: 'Live Fleet & Deliveries',
    subtitle: 'Real-time telemetry and supply chain overview',
    showSearch: true,
    showNotifications: true,
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
