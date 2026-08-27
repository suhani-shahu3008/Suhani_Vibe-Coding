import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioButtons } from './RadioButtons';

const meta: Meta<typeof RadioButtons> = {
  title: 'Components/Radio button/Radio buttons',
  component: RadioButtons,
  parameters: {
    docs: {
      description: {
        component: '# Radio buttons\nPreserved layer: `Radio buttons` (COMPONENT_SET: `46:6245`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **Selected** | `true` / `false` | Selection state |\n| **State** | `Enabled`, `Hovered`, `Focused`, `Pressed`, `Disabled` | Interaction matrix |',
      },
    },
  },
  args: {
    selected: false,
    state: 'Enabled',
    label: 'Standard Express Delivery',
  },
};

export default meta;
type Story = StoryObj<typeof RadioButtons>;

export const Default: Story = {};

export const InteractiveGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('opt1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <RadioButtons
          selected={selected === 'opt1'}
          label="Express 2-Hour Delivery"
          onChange={() => setSelected('opt1')}
        />
        <RadioButtons
          selected={selected === 'opt2'}
          label="Next-Day Consolidated Dispatch"
          onChange={() => setSelected('opt2')}
        />
        <RadioButtons
          selected={selected === 'opt3'}
          label="Scheduled Eco Delivery"
          onChange={() => setSelected('opt3')}
        />
      </div>
    );
  },
};
