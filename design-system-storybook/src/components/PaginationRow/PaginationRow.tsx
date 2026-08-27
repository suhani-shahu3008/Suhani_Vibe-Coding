import React from 'react';
import { Pagination } from '../Pagination/Pagination';
import './PaginationRow.css';

export interface PaginationRowProps {
  totalItems?: number;
  itemsPerPage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

export const PaginationRow: React.FC<PaginationRowProps> = ({
  totalItems = 48,
  itemsPerPage = 10,
  currentPage = 1,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="uedp-pagination-row">
      <div className="uedp-pagination-row__summary">
        Showing <span className="uedp-pagination-row__bold">{start}</span> to{' '}
        <span className="uedp-pagination-row__bold">{end}</span> of{' '}
        <span className="uedp-pagination-row__bold">{totalItems}</span> results
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};
