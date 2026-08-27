import React, { useState } from 'react';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableRow } from '../TableRow/TableRow';
import { PaginationRow } from '../PaginationRow/PaginationRow';
import { StatusTag } from '../StatusTag/StatusTag';
import './Table.css';

export interface TableColumn {
  key: string;
  label: string;
}

export interface TableItem {
  id: string;
  orderId: string;
  route: string;
  vehicle: string;
  time: string;
  status: 'On Schedule' | 'Delayed' | 'Delivered' | 'In Transit';
  statusType: 'Success' | 'Warning' | 'Info' | 'Error';
}

const mockData: TableItem[] = [
  { id: '1', orderId: '#DEL-9120', route: 'North Sector Loop', vehicle: 'Van #12', time: '11:45 AM', status: 'In Transit', statusType: 'Info' },
  { id: '2', orderId: '#DEL-9121', route: 'Downtown Metro A', vehicle: 'Truck #04', time: '12:15 PM', status: 'On Schedule', statusType: 'Success' },
  { id: '3', orderId: '#DEL-9122', route: 'West Hills Expressway', vehicle: 'Van #09', time: '01:00 PM', status: 'Delayed', statusType: 'Warning' },
  { id: '4', orderId: '#DEL-9123', route: 'Harbor Warehouse Hub', vehicle: 'Heavy Rig #02', time: '01:30 PM', status: 'Delivered', statusType: 'Success' },
  { id: '5', orderId: '#DEL-9124', route: 'Airport Cargo Lane', vehicle: 'Van #18', time: '02:15 PM', status: 'On Schedule', statusType: 'Success' },
];

export const Table: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['2']);
  const [page, setPage] = useState(1);

  const toggleSelectAll = (checked: boolean) => {
    if (checked) setSelectedIds(mockData.map((d) => d.id));
    else setSelectedIds([]);
  };

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const allSelected = selectedIds.length === mockData.length;

  return (
    <div className="uedp-table-container">
      <TableHeader title="Active Fleet Dispatches" itemCount={mockData.length} />
      <div className="uedp-table-wrapper">
        <table className="uedp-table">
          <thead>
            <TableRow
              variant="Header"
              selected={allSelected}
              onSelectChange={toggleSelectAll}
              cells={['Order ID', 'Route Name', 'Assigned Vehicle', 'ETA Time', 'Status']}
            />
          </thead>
          <tbody>
            {mockData.map((row) => (
              <TableRow
                key={row.id}
                variant="Row"
                selected={selectedIds.includes(row.id)}
                onSelectChange={() => toggleSelect(row.id)}
                cells={[
                  <span style={{ fontWeight: 600, color: 'var(--uedp-slate-900, #0f172a)' }}>{row.orderId}</span>,
                  row.route,
                  row.vehicle,
                  row.time,
                  <StatusTag typeVariant={row.statusType as any} label={row.status} />,
                ]}
              />
            ))}
          </tbody>
        </table>
      </div>
      <PaginationRow totalItems={24} itemsPerPage={5} currentPage={page} onPageChange={setPage} />
    </div>
  );
};
