import React from 'react';
import { Icons } from '../Icons/Icons';
import './Pagination.css';

export interface PaginationProps {
  state?: 'Default' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  state = 'Default',
  currentPage = 1,
  totalPages = 5,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={`uedp-pagination uedp-pagination--state-${state.toLowerCase()}`} aria-label="Pagination Navigation">
      <button
        className="uedp-pagination__btn uedp-pagination__btn--prev"
        disabled={currentPage <= 1 || state === 'Disabled'}
        onClick={() => onPageChange && onPageChange(currentPage - 1)}
      >
        <Icons name="Left Arrow" size={16} />
        <span>Previous</span>
      </button>

      <div className="uedp-pagination__pages">
        {pages.map((p) => (
          <button
            key={p}
            className={`uedp-pagination__page ${p === currentPage ? 'uedp-pagination__page--active' : ''}`}
            disabled={state === 'Disabled'}
            onClick={() => onPageChange && onPageChange(p)}
          >
            {p}
          </button>
        ))}
      </div>

      <button
        className="uedp-pagination__btn uedp-pagination__btn--next"
        disabled={currentPage >= totalPages || state === 'Disabled'}
        onClick={() => onPageChange && onPageChange(currentPage + 1)}
      >
        <span>Next</span>
        <Icons name="Right Arrow" size={16} />
      </button>
    </nav>
  );
};
