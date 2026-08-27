import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: '# Pagination\nPreserved layer: `Pagination` (COMPONENT_SET: `202:180`).\n\n| Property | Options | Description |\n| :--- | :--- | :--- |\n| **State** | `Default`, `Hovered`, `Focused`, `Pressed`, `Disabled` | Interactive state matrix |',
      },
    },
  },
  argTypes: {
    state: { control: 'select', options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Disabled'] },
    currentPage: { control: { type: 'number', min: 1, max: 10 } },
    totalPages: { control: { type: 'number', min: 1, max: 20 } },
  },
  args: {
    state: 'Default',
    currentPage: 1,
    totalPages: 5,
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {};

export const Interactive: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        {...args}
        currentPage={page}
        onPageChange={(p) => setPage(p)}
      />
    );
  },
};
