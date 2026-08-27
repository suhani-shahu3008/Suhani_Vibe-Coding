const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'design-system-storybook', 'src');
const componentsDir = path.join(srcDir, 'components');

function writeComponent(name, files) {
  const dir = path.join(componentsDir, name);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  for (const [filename, content] of Object.entries(files)) {
    fs.writeFileSync(path.join(dir, filename), content.trim() + '\n');
  }
  console.log(`✓ Generated component: ${name}`);
}

// -------------------------------------------------------------
// 4. PAGINATION & PAGINATION ROW
// -------------------------------------------------------------
writeComponent('Pagination', {
  'Pagination.tsx': `
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
    <nav className={\`uedp-pagination uedp-pagination--state-\${state.toLowerCase()}\`} aria-label="Pagination Navigation">
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
            className={\`uedp-pagination__page \${p === currentPage ? 'uedp-pagination__page--active' : ''}\`}
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
`,
  'Pagination.css': `
.uedp-pagination {
  display: inline-flex;
  align-items: center;
  gap: var(--uedp-gap-2, 8px);
  font-family: inherit;
  font-size: 14px;
  user-select: none;
}

.uedp-pagination__btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: var(--uedp-rounded-lg, 8px);
  border: 1px solid var(--uedp-slate-200, #e2e8f0);
  background-color: var(--uedp-white, #ffffff);
  color: var(--uedp-slate-700, #334155);
  cursor: pointer;
  font-weight: 500;
  transition: all 0.15s ease;
}

.uedp-pagination__btn:hover:not(:disabled) {
  background-color: var(--uedp-slate-50, #f8fafc);
  border-color: var(--uedp-slate-300, #cbd5e1);
  color: var(--uedp-slate-900, #0f172a);
}

.uedp-pagination__btn:disabled {
  opacity: var(--uedp-opacity-40, 0.4);
  cursor: not-allowed;
}

.uedp-pagination__pages {
  display: flex;
  align-items: center;
  gap: 4px;
}

.uedp-pagination__page {
  min-width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--uedp-rounded-lg, 8px);
  border: 1px solid transparent;
  background: transparent;
  color: var(--uedp-slate-700, #334155);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}

.uedp-pagination__page:hover:not(:disabled) {
  background-color: var(--uedp-slate-100, #f1f5f9);
}

.uedp-pagination__page--active {
  background-color: var(--uedp-slate-900, #0f172a) !important;
  color: var(--uedp-white, #ffffff) !important;
}

.uedp-pagination--state-disabled {
  opacity: 0.5;
  pointer-events: none;
}
`,
  'Pagination.stories.tsx': `
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: \`
# Pagination
Preserved layer: \`Pagination\` (COMPONENT_SET: \`202:180\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **State** | \`Default\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Disabled\` | Interactive state matrix |
| **currentPage** | \`number\` | Currently active page index |
| **totalPages** | \`number\` | Total number of pages |
        \`,
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Disabled'],
    },
    currentPage: {
      control: { type: 'number', min: 1, max: 10 },
    },
    totalPages: {
      control: { type: 'number', min: 1, max: 20 },
    },
  },
  args: {
    state: 'Default',
    currentPage: 1,
    totalPages: 5,
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {};

export const Interactive: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        {...args}
        currentPage={page}
        onPageChange={(p) => setPage(p)}
      />
    );
  },
};
`
});

writeComponent('PaginationRow', {
  'PaginationRow.tsx': `
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
`,
  'PaginationRow.css': `
.uedp-pagination-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-top: 1px solid var(--uedp-slate-200, #e2e8f0);
  background-color: var(--uedp-white, #ffffff);
  border-radius: var(--uedp-rounded-xl, 12px);
  width: 100%;
}

.uedp-pagination-row__summary {
  font-size: 13px;
  color: var(--uedp-slate-500, #64748b);
}

.uedp-pagination-row__bold {
  font-weight: 600;
  color: var(--uedp-slate-800, #1e293b);
}
`,
  'PaginationRow.stories.tsx': `
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PaginationRow } from './PaginationRow';

const meta: Meta<typeof PaginationRow> = {
  title: 'Components/Pagination/Pagination Row',
  component: PaginationRow,
  parameters: {
    docs: {
      description: {
        component: \`
# Pagination Row
Preserved layer: \`Pagination Row\` (COMPONENT: \`202:181\`).

Full responsive table pagination footer summary bar.
        \`,
      },
    },
  },
  args: {
    totalItems: 48,
    itemsPerPage: 10,
    currentPage: 1,
  },
};

export default meta;
type Story = StoryObj<typeof PaginationRow>;

export const Default: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    return <PaginationRow {...args} currentPage={page} onPageChange={setPage} />;
  },
};
`
});

// -------------------------------------------------------------
// 5. NAVIGATION BAR & SIDE NAVIGATION BAR
// -------------------------------------------------------------
writeComponent('NavigationBarMenu', {
  'NavigationBarMenu.tsx': `
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
      className={\`uedp-nav-item uedp-nav-item--\${type.toLowerCase()} uedp-nav-item--\${menuType === 'Sub Menu' ? 'submenu' : 'menu'} uedp-nav-item--state-\${state.toLowerCase()} \${active ? 'uedp-nav-item--active' : ''}\`}
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
`,
  'NavigationBarMenu.css': `
.uedp-nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-radius: var(--uedp-rounded-lg, 8px);
  color: var(--uedp-slate-600, #475569);
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
  font-size: 14px;
  font-weight: 500;
}

.uedp-nav-item--collapsed {
  justify-content: center;
  padding: 10px;
  width: 44px;
  height: 44px;
}

.uedp-nav-item__left {
  display: flex;
  align-items: center;
  gap: var(--uedp-gap-3, 12px);
}

.uedp-nav-item:hover,
.uedp-nav-item--state-hovered {
  background-color: var(--uedp-slate-100, #f1f5f9);
  color: var(--uedp-slate-900, #0f172a);
}

.uedp-nav-item--active {
  background-color: var(--uedp-slate-900, #0f172a) !important;
  color: var(--uedp-white, #ffffff) !important;
}

.uedp-nav-item--submenu {
  padding-left: 28px;
  font-size: 13px;
}

.uedp-nav-item__badge {
  font-size: 11px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: var(--uedp-rounded-full, 9999px);
  background-color: var(--uedp-slate-200, #e2e8f0);
  color: var(--uedp-slate-800, #1e293b);
}

.uedp-nav-item--active .uedp-nav-item__badge {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}
`,
  'NavigationBarMenu.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBarMenu } from './NavigationBarMenu';

const meta: Meta<typeof NavigationBarMenu> = {
  title: 'Components/Navigation bar/Navigation bar Menu',
  component: NavigationBarMenu,
  parameters: {
    docs: {
      description: {
        component: \`
# Navigation bar Menu
Preserved layer: \`Navigation bar Menu\` (COMPONENT_SET: \`36:3500\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **Type** | \`Collapsed\`, \`Expanded\` | Expansion variant |
| **Menu Type** | \`Menu\`, \`Sub Menu\` | Hierarchy level |
| **State** | \`Default\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Disabled\` | Interaction state |
        \`,
      },
    },
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['Expanded', 'Collapsed'],
    },
    menuType: {
      control: 'radio',
      options: ['Menu', 'Sub Menu'],
    },
    state: {
      control: 'select',
      options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Disabled'],
    },
    label: {
      control: 'text',
    },
    active: {
      control: 'boolean',
    },
  },
  args: {
    type: 'Expanded',
    menuType: 'Menu',
    state: 'Default',
    label: 'Overview',
    iconName: 'Layers',
    active: false,
  },
};

export default meta;
type Story = StoryObj<typeof NavigationBarMenu>;

export const Default: Story = {};

export const ActiveState: Story = {
  args: {
    active: true,
  },
};
`
});

writeComponent('SideNavigationBar', {
  'SideNavigationBar.tsx': `
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
    <aside className={\`uedp-sidebar \${expanded ? 'uedp-sidebar--expanded' : 'uedp-sidebar--collapsed'} \${frame ? 'uedp-sidebar--framed' : ''}\`}>
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
                className={\`uedp-sidebar__item \${isActive ? 'uedp-sidebar__item--active' : ''}\`}
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
                      className={\`uedp-sidebar__subitem \${currentActive === sub.id ? 'uedp-sidebar__subitem--active' : ''}\`}
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
`,
  'SideNavigationBar.css': `
.uedp-sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 600px;
  background-color: var(--uedp-white, #ffffff);
  border-right: 1px solid var(--uedp-slate-200, #e2e8f0);
  transition: width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;
}

.uedp-sidebar--expanded {
  width: 256px;
}

.uedp-sidebar--collapsed {
  width: 72px;
}

.uedp-sidebar--framed {
  border-radius: var(--uedp-rounded-2xl, 16px);
  border: 1px solid var(--uedp-slate-200, #e2e8f0);
  box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.05);
}

.uedp-sidebar__header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px;
  border-bottom: 1px solid var(--uedp-slate-100, #f1f5f9);
}

.uedp-sidebar__brand-icon {
  width: 36px;
  height: 36px;
  border-radius: var(--uedp-rounded-lg, 8px);
  background-color: var(--uedp-slate-900, #0f172a);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.uedp-sidebar__brand-title {
  font-weight: 700;
  font-size: 15px;
  color: var(--uedp-slate-900, #0f172a);
  white-space: nowrap;
}

.uedp-sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 12px;
  flex: 1;
}

.uedp-sidebar__item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 12px;
  border-radius: var(--uedp-rounded-lg, 8px);
  border: none;
  background: transparent;
  color: var(--uedp-slate-600, #475569);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  transition: all 0.15s ease;
}

.uedp-sidebar--collapsed .uedp-sidebar__item {
  justify-content: center;
  padding: 10px;
}

.uedp-sidebar__item:hover {
  background-color: var(--uedp-slate-100, #f1f5f9);
  color: var(--uedp-slate-900, #0f172a);
}

.uedp-sidebar__item--active {
  background-color: var(--uedp-slate-900, #0f172a) !important;
  color: var(--uedp-white, #ffffff) !important;
}

.uedp-sidebar__badge {
  margin-left: auto;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 9999px;
  background-color: var(--uedp-slate-200, #e2e8f0);
  color: var(--uedp-slate-800, #1e293b);
}

.uedp-sidebar__item--active .uedp-sidebar__badge {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

.uedp-sidebar__submenus {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-left: 28px;
  padding-left: 12px;
  border-left: 2px solid var(--uedp-slate-200, #e2e8f0);
  margin-top: 4px;
  margin-bottom: 4px;
}

.uedp-sidebar__subitem {
  padding: 6px 10px;
  border-radius: var(--uedp-rounded-md, 6px);
  border: none;
  background: transparent;
  color: var(--uedp-slate-500, #64748b);
  font-size: 13px;
  cursor: pointer;
  text-align: left;
  transition: all 0.15s ease;
}

.uedp-sidebar__subitem:hover {
  color: var(--uedp-slate-900, #0f172a);
}

.uedp-sidebar__subitem--active {
  font-weight: 600;
  color: var(--uedp-indigo-600, #4f46e5);
}

.uedp-sidebar__footer {
  padding: 16px;
  border-top: 1px solid var(--uedp-slate-100, #f1f5f9);
}

.uedp-sidebar__user {
  display: flex;
  align-items: center;
  gap: 12px;
}

.uedp-sidebar__user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  background-color: var(--uedp-indigo-100, #e0e7ff);
  color: var(--uedp-indigo-700, #4338ca);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
  flex-shrink: 0;
}

.uedp-sidebar__user-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--uedp-slate-800, #1e293b);
}

.uedp-sidebar__user-role {
  font-size: 11px;
  color: var(--uedp-slate-400, #94a3b8);
}
`,
  'SideNavigationBar.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SideNavigationBar } from './SideNavigationBar';

const meta: Meta<typeof SideNavigationBar> = {
  title: 'Components/Navigation bar/Side Navigation Bar',
  component: SideNavigationBar,
  parameters: {
    docs: {
      description: {
        component: \`
# Side Navigation Bar
Preserved layers:
- \`Side Navigation Bar - Collapsed\` (\`41:4732\`)
- \`Side Navigation Bar - Expanded\` (\`41:4745\`)
- \`Side Navigation Bar - Expanded (Sub menu)\` (\`41:4756\`)

| Property | Options | Description |
| :--- | :--- | :--- |
| **expanded** | \`true\` / \`false\` | Expands/collapses navigation width |
| **frame** | \`true\` / \`false\` | Outer border frame and card shadow |
| **noOfIcons** | \`1\` to \`6\` | Number of menu items |
        \`,
      },
    },
  },
  argTypes: {
    expanded: { control: 'boolean' },
    frame: { control: 'boolean' },
    noOfIcons: { control: { type: 'select', options: [1, 2, 3, 4, 5, 6] } },
    brandTitle: { control: 'text' },
  },
  args: {
    expanded: true,
    frame: true,
    noOfIcons: 6,
    brandTitle: 'VisionSync Fleet',
  },
};

export default meta;
type Story = StoryObj<typeof SideNavigationBar>;

export const Expanded: Story = {};

export const Collapsed: Story = {
  args: {
    expanded: false,
  },
};
`
});

// -------------------------------------------------------------
// 6. SEARCH BAR & VARIANT 2
// -------------------------------------------------------------
writeComponent('SearchBar', {
  'SearchBar.tsx': `
import React, { useState } from 'react';
import { Icons } from '../Icons/Icons';
import './SearchBar.css';

export interface SearchBarProps {
  state?: 'Default' | 'Hovered' | 'Focused' | 'Pressed' | 'Typing' | 'Filled' | 'Error' | 'Disabled';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  variant?: 'standard' | 'pill';
  showFilterButton?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  state = 'Default',
  placeholder = 'Search fleet, orders, routes...',
  value: controlledValue,
  onChange,
  onClear,
  variant = 'standard',
  showFilterButton = true,
}) => {
  const [internalValue, setInternalValue] = useState(
    state === 'Filled' ? 'Fleet Zone North' : state === 'Typing' ? 'Route 10' : ''
  );
  const val = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  const handleClear = () => {
    setInternalValue('');
    if (onClear) onClear();
  };

  const isDisabled = state === 'Disabled';
  const isError = state === 'Error';

  return (
    <div className={\`uedp-searchbar uedp-searchbar--\${variant} uedp-searchbar--state-\${state.toLowerCase()} \${isError ? 'uedp-searchbar--error' : ''}\`}>
      <span className="uedp-searchbar__icon">
        <Icons name="Search" size={18} color="var(--uedp-slate-400, #94a3b8)" />
      </span>
      <input
        type="text"
        className="uedp-searchbar__input"
        placeholder={placeholder}
        value={val}
        onChange={handleChange}
        disabled={isDisabled}
      />
      {val && !isDisabled && (
        <button className="uedp-searchbar__clear" onClick={handleClear} type="button">
          <Icons name="Close" size={14} color="var(--uedp-slate-400, #94a3b8)" />
        </button>
      )}
      {showFilterButton && (
        <button className="uedp-searchbar__filter-btn" type="button" disabled={isDisabled}>
          <Icons name="Filter" size={16} />
        </button>
      )}
    </div>
  );
};
`,
  'SearchBar.css': `
.uedp-searchbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: var(--uedp-rounded-xl, 12px);
  border: 1px solid var(--uedp-slate-300, #cbd5e1);
  background-color: var(--uedp-white, #ffffff);
  width: 100%;
  max-width: 440px;
  transition: all 0.15s ease;
}

.uedp-searchbar--pill {
  border-radius: var(--uedp-rounded-full, 9999px);
  padding: 8px 16px;
}

.uedp-searchbar:hover,
.uedp-searchbar--state-hovered {
  border-color: var(--uedp-slate-400, #94a3b8);
}

.uedp-searchbar:focus-within,
.uedp-searchbar--state-focused {
  border-color: var(--uedp-slate-900, #0f172a);
  box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.1);
}

.uedp-searchbar--error {
  border-color: var(--uedp-red-500, #ef4444) !important;
}

.uedp-searchbar--state-disabled {
  opacity: var(--uedp-opacity-50, 0.5);
  background-color: var(--uedp-slate-50, #f8fafc);
  pointer-events: none;
}

.uedp-searchbar__icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.uedp-searchbar__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: var(--uedp-slate-900, #0f172a);
  font-family: inherit;
}

.uedp-searchbar__input::placeholder {
  color: var(--uedp-slate-400, #94a3b8);
}

.uedp-searchbar__clear {
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px;
}

.uedp-searchbar__filter-btn {
  border: none;
  background-color: var(--uedp-slate-100, #f1f5f9);
  color: var(--uedp-slate-600, #475569);
  padding: 6px;
  border-radius: var(--uedp-rounded-lg, 8px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
}

.uedp-searchbar__filter-btn:hover {
  background-color: var(--uedp-slate-200, #e2e8f0);
  color: var(--uedp-slate-900, #0f172a);
}
`,
  'SearchBar.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/Search bar/Search bar',
  component: SearchBar,
  parameters: {
    docs: {
      description: {
        component: \`
# Search Bar
Preserved layers: \`Search bar\` (COMPONENT_SET: \`44:5165\` & \`44:5271\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **State** | \`Default\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Typing\`, \`Filled\`, \`Error\`, \`Disabled\` | Component state matrix |
| **variant** | \`standard\`, \`pill\` | Shape style |
        \`,
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Hovered', 'Focused', 'Pressed', 'Typing', 'Filled', 'Error', 'Disabled'],
    },
    variant: {
      control: 'radio',
      options: ['standard', 'pill'],
    },
    placeholder: { control: 'text' },
    showFilterButton: { control: 'boolean' },
  },
  args: {
    state: 'Default',
    variant: 'standard',
    placeholder: 'Search fleet, orders, routes...',
    showFilterButton: true,
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    state: 'Filled',
  },
};

export const ErrorState: Story = {
  args: {
    state: 'Error',
    placeholder: 'Invalid search term...',
  },
};
`
});

// -------------------------------------------------------------
// 7. AVATARS & PROFILE AVATAR
// -------------------------------------------------------------
writeComponent('Avatars', {
  'Avatars.tsx': `
import React from 'react';
import './Avatars.css';

export interface AvatarsProps {
  size?: 'small' | 'big';
  src?: string;
  name?: string;
  status?: 'online' | 'offline' | 'busy' | 'away';
  badgeCount?: number;
}

export const Avatars: React.FC<AvatarsProps> = ({
  size = 'big',
  src,
  name = 'Sophia Chen',
  status = 'online',
  badgeCount,
}) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={\`uedp-avatar uedp-avatar--\${size}\`}>
      {src ? (
        <img src={src} alt={name} className="uedp-avatar__img" />
      ) : (
        <div className="uedp-avatar__initials">{initials}</div>
      )}
      {status && <span className={\`uedp-avatar__status uedp-avatar__status--\${status}\`} />}
      {badgeCount !== undefined && badgeCount > 0 && (
        <span className="uedp-avatar__badge">{badgeCount}</span>
      )}
    </div>
  );
};
`,
  'Avatars.css': `
.uedp-avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--uedp-rounded-full, 9999px);
  user-select: none;
}

.uedp-avatar--big {
  width: 48px;
  height: 48px;
  font-size: 16px;
}

.uedp-avatar--small {
  width: 32px;
  height: 32px;
  font-size: 12px;
}

.uedp-avatar__img {
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  object-fit: cover;
}

.uedp-avatar__initials {
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  background-color: var(--uedp-indigo-600, #4f46e5);
  color: var(--uedp-white, #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.uedp-avatar__status {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  border: 2px solid var(--uedp-white, #ffffff);
}
.uedp-avatar--small .uedp-avatar__status {
  width: 9px;
  height: 9px;
  border-width: 1.5px;
}

.uedp-avatar__status--online {
  background-color: var(--uedp-emerald-500, #10b981);
}
.uedp-avatar__status--busy {
  background-color: var(--uedp-red-500, #ef4444);
}
.uedp-avatar__status--away {
  background-color: var(--uedp-amber-500, #f59e0b);
}
.uedp-avatar__status--offline {
  background-color: var(--uedp-slate-400, #94a3b8);
}

.uedp-avatar__badge {
  position: absolute;
  top: -2px;
  right: -2px;
  background-color: var(--uedp-red-600, #dc2626);
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  padding: 1px 5px;
  border-radius: 9999px;
  border: 2px solid #ffffff;
}
`,
  'Avatars.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatars } from './Avatars';

const meta: Meta<typeof Avatars> = {
  title: 'Components/Avatars/Avatars',
  component: Avatars,
  parameters: {
    docs: {
      description: {
        component: \`
# Avatars
Preserved layers: \`Big Avatars\` (\`45:5629\`) & \`Small Avatars\` (\`45:5913\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **size** | \`big\` (48px), \`small\` (32px) | Avatar dimensions |
| **status** | \`online\`, \`offline\`, \`busy\`, \`away\` | Activity indicator dot |
| **name** | \`string\` | Fallback initials generation |
        \`,
      },
    },
  },
  argTypes: {
    size: { control: 'radio', options: ['big', 'small'] },
    status: { control: 'select', options: ['online', 'offline', 'busy', 'away'] },
    name: { control: 'text' },
  },
  args: {
    size: 'big',
    status: 'online',
    name: 'Sophia Chen',
  },
};

export default meta;
type Story = StoryObj<typeof Avatars>;

export const BigAvatar: Story = {};

export const SmallAvatar: Story = {
  args: {
    size: 'small',
  },
};
`
});

writeComponent('ProfileAvatar', {
  'ProfileAvatar.tsx': `
import React from 'react';
import { Avatars } from '../Avatars/Avatars';
import { Icons } from '../Icons/Icons';
import './ProfileAvatar.css';

export interface ProfileAvatarProps {
  state?: 'Default' | 'Hovered' | 'Focused' | 'Pressed';
  name?: string;
  role?: string;
  src?: string;
  onClick?: () => void;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  state = 'Default',
  name = 'Sophia Chen',
  role = 'Logistics Lead',
  src,
  onClick,
}) => {
  return (
    <div
      className={\`uedp-profile-avatar uedp-profile-avatar--state-\${state.toLowerCase()}\`}
      onClick={onClick}
    >
      <Avatars size="small" name={name} src={src} status="online" />
      <div className="uedp-profile-avatar__details">
        <span className="uedp-profile-avatar__name">{name}</span>
        <span className="uedp-profile-avatar__role">{role}</span>
      </div>
      <Icons name="Down Arrow" size={14} color="var(--uedp-slate-400, #94a3b8)" />
    </div>
  );
};
`,
  'ProfileAvatar.css': `
.uedp-profile-avatar {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px;
  border-radius: var(--uedp-rounded-full, 9999px);
  border: 1px solid var(--uedp-slate-200, #e2e8f0);
  background-color: var(--uedp-white, #ffffff);
  cursor: pointer;
  transition: all 0.15s ease;
}

.uedp-profile-avatar:hover,
.uedp-profile-avatar--state-hovered {
  background-color: var(--uedp-slate-50, #f8fafc);
  border-color: var(--uedp-slate-300, #cbd5e1);
}

.uedp-profile-avatar__details {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.uedp-profile-avatar__name {
  font-size: 13px;
  font-weight: 600;
  color: var(--uedp-slate-800, #1e293b);
  line-height: 16px;
}

.uedp-profile-avatar__role {
  font-size: 11px;
  color: var(--uedp-slate-500, #64748b);
  line-height: 14px;
}
`,
  'ProfileAvatar.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProfileAvatar } from './ProfileAvatar';

const meta: Meta<typeof ProfileAvatar> = {
  title: 'Components/Profile Avatar/Profile Avatar',
  component: ProfileAvatar,
  parameters: {
    docs: {
      description: {
        component: \`
# Profile Avatar
Preserved layer: \`Profile Avatar\` (COMPONENT_SET: \`80:8888\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **State** | \`Default\`, \`Hovered\`, \`Focused\`, \`Pressed\` | Interaction states |
| **name** | \`string\` | User name |
| **role** | \`string\` | Job title / Role |
        \`,
      },
    },
  },
  argTypes: {
    state: { control: 'select', options: ['Default', 'Hovered', 'Focused', 'Pressed'] },
    name: { control: 'text' },
    role: { control: 'text' },
  },
  args: {
    state: 'Default',
    name: 'Sophia Chen',
    role: 'Logistics Lead',
  },
};

export default meta;
type Story = StoryObj<typeof ProfileAvatar>;

export const Default: Story = {};
`
});

// -------------------------------------------------------------
// 8. HEADER & TABLE HEADER
// -------------------------------------------------------------
writeComponent('Header', {
  'Header.tsx': `
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
`,
  'Header.css': `
.uedp-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid var(--uedp-slate-200, #e2e8f0);
  background-color: var(--uedp-white, #ffffff);
  width: 100%;
  gap: 16px;
}

.uedp-header__left {
  display: flex;
  flex-direction: column;
}

.uedp-header__title {
  font-size: 20px;
  font-weight: 700;
  color: var(--uedp-slate-900, #0f172a);
}

.uedp-header__subtitle {
  font-size: 13px;
  color: var(--uedp-slate-500, #64748b);
  margin-top: 2px;
}

.uedp-header__right {
  display: flex;
  align-items: center;
  gap: 12px;
}
`,
  'Header.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: \`
# Header
Preserved layer: \`Header\` (COMPONENT: \`82:9262\`).

Global top application bar containing title, live search, notifications, and profile controls.
        \`,
      },
    },
  },
  args: {
    title: 'Live Fleet & Deliveries',
    subtitle: 'Real-time telemetry and supply chain overview',
    showSearch: true,
    showNotifications: true,
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
`
});

writeComponent('TableHeader', {
  'TableHeader.tsx': `
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
`,
  'TableHeader.css': `
.uedp-table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: var(--uedp-white, #ffffff);
  border-bottom: 1px solid var(--uedp-slate-200, #e2e8f0);
  border-top-left-radius: var(--uedp-rounded-xl, 12px);
  border-top-right-radius: var(--uedp-rounded-xl, 12px);
  width: 100%;
}

.uedp-table-header__left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.uedp-table-header__title {
  font-size: 16px;
  font-weight: 600;
  color: var(--uedp-slate-900, #0f172a);
}

.uedp-table-header__count {
  font-size: 12px;
  font-weight: 600;
  color: var(--uedp-slate-500, #64748b);
  background-color: var(--uedp-slate-100, #f1f5f9);
  padding: 2px 8px;
  border-radius: var(--uedp-rounded-full, 9999px);
}

.uedp-table-header__right {
  display: flex;
  align-items: center;
  gap: 8px;
}
`,
  'TableHeader.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TableHeader } from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/Header/Table Header',
  component: TableHeader,
  parameters: {
    docs: {
      description: {
        component: \`
# Table Header
Preserved layer: \`Table Header\` (COMPONENT: \`164:1299\`).

Dedicated data table toolbar with item count badge, quick search, filter drawer trigger, and CSV export.
        \`,
      },
    },
  },
  args: {
    title: 'Active Deliveries',
    itemCount: 142,
  },
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {};
`
});

console.log('✓ Part 2 components generated successfully.');
