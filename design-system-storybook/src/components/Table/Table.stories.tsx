import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table Rows/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: '# Complete Data Table\nPreserved layer: `Table` (FRAME: `170:1209`).\n\nCombines `TableHeader`, `TableHeaderRow`, interactive `TableRow` records with checkboxes, status tags, and `PaginationRow`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {};
