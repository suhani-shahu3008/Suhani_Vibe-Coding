import React from 'react';
import { Checkboxes } from '../Checkboxes/Checkboxes';
import './TableRow.css';

export interface TableRowProps {
  variant?: 'Header' | 'Row';
  selected?: boolean;
  onSelectChange?: (selected: boolean) => void;
  cells?: React.ReactNode[];
  className?: string;
}

export const TableRow: React.FC<TableRowProps> = ({
  variant = 'Row',
  selected = false,
  onSelectChange,
  cells = ['#DEL-4892', 'Downtown Express', 'Vehicle #402', '12:30 PM', 'On Schedule'],
  className = '',
}) => {
  const isHeader = variant === 'Header';

  return (
    <tr className={`uedp-table-row uedp-table-row--${variant.toLowerCase()} ${selected ? 'uedp-table-row--selected' : ''} ${className}`}>
      <td className="uedp-table-row__cell uedp-table-row__cell--checkbox">
        <Checkboxes
          checked={selected}
          label=""
          onChange={onSelectChange}
        />
      </td>
      {cells.map((cell, idx) => (
        <td key={idx} className="uedp-table-row__cell">
          {cell}
        </td>
      ))}
    </tr>
  );
};
