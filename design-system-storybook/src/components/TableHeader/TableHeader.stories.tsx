import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TableHeader } from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/Header/Table Header',
  component: TableHeader,
  parameters: {
    docs: {
      description: {
        component: '# Table Header\nPreserved layer: `Table Header` (COMPONENT: `164:1299`).\n\nDedicated data table toolbar with item count badge, quick search, filter drawer trigger, and CSV export.',
      },
    },
  },
  args: {
    title: 'Active Deliveries',
    itemCount: 142,
  },
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {};
