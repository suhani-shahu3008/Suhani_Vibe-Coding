import React, { useState } from 'react';
import { Icons, IconName } from '../Icons/Icons';
import './SideNavigationBar.css';

export interface SideNavigationItem {
  id: string;
  label: string;
  iconName: IconName;
  badge?: string | number;
  subMenus?: { id: string; label: string }[];
}

export interface SideNavigationBarProps {
  expanded?: boolean;
  frame?: boolean;
  noOfIcons?: 1 | 2 | 3 | 4 | 5 | 6;
  activeId?: string;
  onSelect?: (id: string) => void;
  brandTitle?: string;
}

const defaultNavItems: SideNavigationItem[] = [
  { id: '1', label: 'Live Fleet', iconName: 'Route', subMenus: [{ id: '1-1', label: 'Active Routes' }, { id: '1-2', label: 'Delayed Zones' }] },
  { id: '2', label: 'Deliveries', iconName: 'Cart', badge: '12' },
  { id: '3', label: 'Fleet Overview', iconName: 'Truck 2' },
  { id: '4', label: 'Analytics', iconName: 'Bar Chart' },
  { id: '5', label: 'Locations', iconName: 'Location filled' },
  { id: '6', label: 'Settings', iconName: 'Settings' },
];

export const SideNavigationBar: React.FC<SideNavigationBarProps> = ({
  expanded = true,
  frame = true,
  noOfIcons = 6,
  activeId = '1',
  onSelect,
  brandTitle = 'VisionSync Fleet',
}) => {
  const [currentActive, setCurrentActive] = useState(activeId);
  const items = defaultNavItems.slice(0, noOfIcons);

  const handleItemClick = (id: string) => {
    setCurrentActive(id);
    if (onSelect) onSelect(id);
  };

  return (
    <aside className={`uedp-sidebar ${expanded ? 'uedp-sidebar--expanded' : 'uedp-sidebar--collapsed'} ${frame ? 'uedp-sidebar--framed' : ''}`}>
      <div className="uedp-sidebar__header">
        <div className="uedp-sidebar__brand-icon">
          <Icons name="Route" size={20} mode="Dark" />
        </div>
        {expanded && <span className="uedp-sidebar__brand-title">{brandTitle}</span>}
      </div>

      <nav className="uedp-sidebar__nav">
        {items.map((item) => {
          const isActive = currentActive === item.id || (item.subMenus && item.subMenus.some(sm => sm.id === currentActive));
          return (
            <div key={item.id} className="uedp-sidebar__group">
              <button
                className={`uedp-sidebar__item ${isActive ? 'uedp-sidebar__item--active' : ''}`}
                onClick={() => handleItemClick(item.id)}
                title={!expanded ? item.label : undefined}
              >
                <Icons name={item.iconName} size={18} color="currentColor" />
                {expanded && <span className="uedp-sidebar__item-label">{item.label}</span>}
                {expanded && item.badge && <span className="uedp-sidebar__badge">{item.badge}</span>}
              </button>

              {expanded && item.subMenus && isActive && (
                <div className="uedp-sidebar__submenus">
                  {item.subMenus.map((sub) => (
                    <button
                      key={sub.id}
                      className={`uedp-sidebar__subitem ${currentActive === sub.id ? 'uedp-sidebar__subitem--active' : ''}`}
                      onClick={() => handleItemClick(sub.id)}
                    >
                      <span>{sub.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="uedp-sidebar__footer">
        <div className="uedp-sidebar__user">
          <div className="uedp-sidebar__user-avatar">AD</div>
          {expanded && (
            <div className="uedp-sidebar__user-info">
              <div className="uedp-sidebar__user-name">Alex Morgan</div>
              <div className="uedp-sidebar__user-role">Fleet Dispatcher</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
