import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tags } from './Tags';

const meta: Meta<typeof Tags> = {
  title: 'Components/Tags/Tags',
  component: Tags,
  parameters: {
    docs: {
      description: {
        component: '# Tags\nPreserved layer: `Tags` (COMPONENT_SET: `65:7696`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **Type** | `Info`, `Success`, `Warning`, `Error`, `Inactive` | Semantic color badge |\n| **removable** | `true` / `false` | Dismiss button slot |',
      },
    },
  },
  args: {
    typeVariant: 'Info',
    label: 'Express Route',
    removable: false,
  },
};

export default meta;
type Story = StoryObj<typeof Tags>;

export const Default: Story = {};

export const AllTags: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tags typeVariant="Info" label="Info Tag" />
      <Tags typeVariant="Success" label="Active Route" />
      <Tags typeVariant="Warning" label="Delay Warning" />
      <Tags typeVariant="Error" label="Route Blocked" />
      <Tags typeVariant="Inactive" label="Draft" />
    </div>
  ),
};
