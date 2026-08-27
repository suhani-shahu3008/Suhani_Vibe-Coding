import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/Input Field/Input Field',
  component: InputField,
  parameters: {
    docs: {
      description: {
        component: '# Input Field\nPreserved layer: `Input field` (COMPONENT_SET: `85:9820`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **Type** | `Filled`, `Outline` | Visual surface style |\n| **State** | `Default`, `Hovered`, `Focused`, `Pressed`, `Typing`, `Filled`, `Error`, `Disabled` | Interaction state matrix |',
      },
    },
  },
  argTypes: {
    typeVariant: { control: 'radio', options: ['Filled', 'Outline'] },
    state: {
      control: 'select',
      options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Typing', 'Filled', 'Error', 'Disabled'],
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorText: { control: 'text' },
  },
  args: {
    typeVariant: 'Filled',
    state: 'Default',
    label: 'Delivery Route Name',
    placeholder: 'e.g. Route 404 - North Sector',
    helperText: 'Enter a unique identifier for this active fleet route.',
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Filled: Story = {};

export const Outline: Story = {
  args: {
    typeVariant: 'Outline',
  },
};

export const ErrorState: Story = {
  args: {
    state: 'Error',
    errorText: 'Route name is already in use by Vehicle #402',
  },
};
