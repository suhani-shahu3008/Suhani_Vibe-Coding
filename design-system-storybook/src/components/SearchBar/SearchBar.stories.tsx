import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/Search bar/Search bar',
  component: SearchBar,
  parameters: {
    docs: {
      description: {
        component: '# Search Bar\nPreserved layers: `Search bar` (COMPONENT_SET: `44:5165` & `44:5271`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **State** | `Default`, `Hovered`, `Focused`, `Pressed`, `Typing`, `Filled`, `Error`, `Disabled` | Component state matrix |\n| **variant** | `standard`, `pill` | Shape style |',
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Typing', 'Filled', 'Error', 'Disabled'],
    },
    variant: {
      control: 'radio',
      options: ['standard', 'pill'],
    },
    placeholder: { control: 'text' },
    showFilterButton: { control: 'boolean' },
  },
  args: {
    state: 'Default',
    variant: 'standard',
    placeholder: 'Search fleet, orders, routes...',
    showFilterButton: true,
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    variant: "pill"
  }
};

export const Filled: Story = {
  args: {
    state: 'Filled',
  },
};

export const ErrorState: Story = {
  args: {
    state: 'Error',
    placeholder: 'Invalid search term...',
  },
};
