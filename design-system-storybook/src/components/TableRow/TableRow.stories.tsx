import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TableRow } from './TableRow';

const meta: Meta<typeof TableRow> = {
  title: 'Components/Table Rows/Table Row',
  component: TableRow,
  parameters: {
    docs: {
      description: {
        component: '# Table Row & Table Header Row\nPreserved layers: `Table Row` (`179:1513`) & `Table Header Row` (`179:1512`).',
      },
    },
  },
  args: {
    variant: 'Row',
    selected: false,
    cells: ['#DEL-4892', 'Downtown Express', 'Vehicle #402', '12:30 PM', 'On Schedule'],
  },
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  render: (args) => (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        <TableRow {...args} />
      </tbody>
    </table>
  ),
};
