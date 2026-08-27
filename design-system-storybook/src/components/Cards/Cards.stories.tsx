import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Cards } from './Cards';

const meta: Meta<typeof Cards> = {
  title: 'Components/Cards/Cards',
  component: Cards,
  parameters: {
    docs: {
      description: {
        component: '# Cards (Metric & KPI Cards)\nPreserved layer: `Cards` (COMPONENT_SET: `88:10691`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **Type** | `Card 1`, `Card 2`, `Card 3`, `Card 4` | Layout style variant |',
      },
    },
  },
  argTypes: {
    typeVariant: {
      control: 'radio',
      options: ['Card 1', 'Card 2', 'Card 3', 'Card 4'],
    },
  },
  args: {
    typeVariant: 'Card 1',
    title: 'Active Deliveries',
    value: '1,284',
    change: '+12.5%',
    positive: true,
    iconName: 'Truck 2',
  },
};

export default meta;
type Story = StoryObj<typeof Cards>;

export const Card1: Story = {};

export const CardGallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <Cards typeVariant="Card 1" title="Active Fleet" value="342" change="+8.2%" positive={true} iconName="Truck 2" />
      <Cards typeVariant="Card 2" title="Delayed Dispatches" value="14" change="-3.1%" positive={false} iconName="Alert" />
      <Cards typeVariant="Card 3" title="Avg Transit Time" value="28m" change="-5.4%" positive={true} iconName="Clock" />
      <Cards typeVariant="Card 4" title="Fulfilled Orders" value="9,820" change="+18.9%" positive={true} iconName="Success" />
    </div>
  ),
};
