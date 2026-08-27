import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import './TableHeader.css';

export interface TableHeaderProps {
  title?: string;
  itemCount?: number;
  onSearch?: (val: string) => void;
  onFilterClick?: () => void;
  onExportClick?: () => void;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  title = 'Active Deliveries',
  itemCount = 142,
  onSearch,
  onFilterClick,
  onExportClick,
}) => {
  return (
    <div className="uedp-table-header">
      <div className="uedp-table-header__left">
        <h3 className="uedp-table-header__title">{title}</h3>
        <span className="uedp-table-header__count">{itemCount} items</span>
      </div>

      <div className="uedp-table-header__right">
        <SearchBar placeholder="Filter records..." showFilterButton={false} onChange={onSearch} />
        <IconButton iconName="Filter" size="Small" onClick={onFilterClick} />
        <Button size="Small" shape="Rectangle" typeVariant="Secondary" label="Export" iconName="Download" onClick={onExportClick} />
      </div>
    </div>
  );
};
