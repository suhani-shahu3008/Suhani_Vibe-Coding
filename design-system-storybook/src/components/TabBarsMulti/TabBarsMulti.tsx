import React, { useState } from 'react';
import { TabBars } from '../TabBars/TabBars';
import './TabBarsMulti.css';

export interface TabBarsMultiProps {
  active?: 'None' | 'First' | 'Second' | 'Third' | 'Fourth' | 'Fifth';
  tabs?: { id: string; label: string; badge?: string | number }[];
  onTabSelect?: (id: string) => void;
}

const defaultTabs = [
  { id: '1', label: 'All Fleet', badge: '148' },
  { id: '2', label: 'In Transit', badge: '84' },
  { id: '3', label: 'Delayed', badge: '12' },
  { id: '4', label: 'Delivered', badge: '52' },
  { id: '5', label: 'Maintenance', badge: '0' },
];

export const TabBarsMulti: React.FC<TabBarsMultiProps> = ({
  active = 'First',
  tabs = defaultTabs,
  onTabSelect,
}) => {
  const activeIdxMap: Record<string, number> = {
    First: 0,
    Second: 1,
    Third: 2,
    Fourth: 3,
    Fifth: 4,
    None: -1,
  };

  const [selectedIdx, setSelectedIdx] = useState(activeIdxMap[active] ?? 0);

  return (
    <div className="uedp-tab-bar-multi">
      {tabs.map((tab, idx) => (
        <TabBars
          key={tab.id}
          label={tab.label}
          badge={tab.badge}
          active={selectedIdx === idx}
          onClick={() => {
            setSelectedIdx(idx);
            if (onTabSelect) onTabSelect(tab.id);
          }}
        />
      ))}
    </div>
  );
};
