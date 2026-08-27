import React from 'react';
import { Icons, IconName } from '../Icons/Icons';
import './NavigationBarMenu.css';

export interface NavigationBarMenuProps {
  type?: 'Collapsed' | 'Expanded';
  menuType?: 'Menu' | 'Sub Menu';
  state?: 'Default' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';
  label?: string;
  iconName?: IconName | string;
  active?: boolean;
  badge?: string | number;
  onClick?: () => void;
}

export const NavigationBarMenu: React.FC<NavigationBarMenuProps> = ({
  type = 'Expanded',
  menuType = 'Menu',
  state = 'Default',
  label = 'Overview',
  iconName = 'Layers',
  active = false,
  badge,
  onClick,
}) => {
  return (
    <div
      className={`uedp-nav-item uedp-nav-item--${type.toLowerCase()} uedp-nav-item--${menuType === 'Sub Menu' ? 'submenu' : 'menu'} uedp-nav-item--state-${state.toLowerCase()} ${active ? 'uedp-nav-item--active' : ''}`}
      onClick={onClick}
      title={type === 'Collapsed' ? label : undefined}
    >
      <div className="uedp-nav-item__left">
        <Icons name={iconName} size={18} color="currentColor" />
        {type === 'Expanded' && <span className="uedp-nav-item__label">{label}</span>}
      </div>
      {type === 'Expanded' && badge && (
        <span className="uedp-nav-item__badge">{badge}</span>
      )}
    </div>
  );
};
