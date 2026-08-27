import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PaginationRow } from './PaginationRow';

const meta: Meta<typeof PaginationRow> = {
  title: 'Components/Pagination/Pagination Row',
  component: PaginationRow,
  parameters: {
    docs: {
      description: {
        component: '# Pagination Row\nPreserved layer: `Pagination Row` (COMPONENT: `202:181`).\n\nFull responsive table pagination footer summary bar.',
      },
    },
  },
  args: {
    totalItems: 48,
    itemsPerPage: 10,
    currentPage: 1,
  },
};

export default meta;
type Story = StoryObj<typeof PaginationRow>;

export const Default: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    return <PaginationRow {...args} currentPage={page} onPageChange={setPage} />;
  },
};
