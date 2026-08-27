import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatusTag } from './StatusTag';

const meta: Meta<typeof StatusTag> = {
  title: 'Components/Tags/Status Tag',
  component: StatusTag,
  parameters: {
    docs: {
      description: {
        component: '# Status Tag\nPreserved layer: `Status Tag` (COMPONENT_SET: `66:7719`).\n\nPill badge with telemetry status indicator dot.',
      },
    },
  },
  args: {
    typeVariant: 'Success',
    label: 'On Schedule',
    dot: true,
  },
};

export default meta;
type Story = StoryObj<typeof StatusTag>;

export const Default: Story = {};

export const StatusVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <StatusTag typeVariant="Success" label="On Schedule" />
      <StatusTag typeVariant="Warning" label="Delay (15m)" />
      <StatusTag typeVariant="Error" label="Mechanical Hold" />
      <StatusTag typeVariant="Info" label="In Transit" />
      <StatusTag typeVariant="Inactive" label="Standby" />
    </div>
  ),
};
