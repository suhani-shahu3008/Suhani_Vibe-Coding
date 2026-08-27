import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { ProfileAvatar } from '../ProfileAvatar/ProfileAvatar';
import { IconButton } from '../IconButton/IconButton';
import './Header.css';

export interface HeaderProps {
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
  showNotifications?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title = 'Live Fleet & Deliveries',
  subtitle = 'Real-time telemetry and supply chain overview',
  showSearch = true,
  showNotifications = true,
}) => {
  return (
    <header className="uedp-header">
      <div className="uedp-header__left">
        <h1 className="uedp-header__title">{title}</h1>
        {subtitle && <p className="uedp-header__subtitle">{subtitle}</p>}
      </div>

      <div className="uedp-header__right">
        {showSearch && <SearchBar placeholder="Search live fleet..." showFilterButton={false} />}
        {showNotifications && <IconButton iconName="Notification" size="Small" />}
        <ProfileAvatar name="Sophia Chen" role="Fleet Lead" />
      </div>
    </header>
  );
};
