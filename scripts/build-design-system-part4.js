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
// 13. TAB BARS & MULTI TABS
// -------------------------------------------------------------
writeComponent('TabBars', {
  'TabBars.tsx': `
import React from 'react';
import './TabBars.css';

export interface TabBarsProps {
  state?: 'Default' | 'Active' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';
  label?: string;
  badge?: string | number;
  active?: boolean;
  onClick?: () => void;
}

export const TabBars: React.FC<TabBarsProps> = ({
  state = 'Default',
  label = 'All Deliveries',
  badge = 24,
  active = false,
  onClick,
}) => {
  const isActive = active || state === 'Active';
  const isDisabled = state === 'Disabled';

  return (
    <button
      className={\`uedp-tab-bar \${isActive ? 'uedp-tab-bar--active' : ''} uedp-tab-bar--state-\${state.toLowerCase()}\`}
      onClick={onClick}
      disabled={isDisabled}
      type="button"
    >
      <span className="uedp-tab-bar__label">{label}</span>
      {badge !== undefined && <span className="uedp-tab-bar__badge">{badge}</span>}
    </button>
  );
};
`,
  'TabBars.css': `
.uedp-tab-bar {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--uedp-slate-500, #64748b);
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

.uedp-tab-bar:hover:not(:disabled),
.uedp-tab-bar--state-hovered {
  color: var(--uedp-slate-900, #0f172a);
  border-bottom-color: var(--uedp-slate-300, #cbd5e1);
}

.uedp-tab-bar--active {
  color: var(--uedp-slate-900, #0f172a) !important;
  font-weight: 600;
  border-bottom-color: var(--uedp-slate-900, #0f172a) !important;
}

.uedp-tab-bar__badge {
  font-size: 11px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: var(--uedp-rounded-full, 9999px);
  background-color: var(--uedp-slate-100, #f1f5f9);
  color: var(--uedp-slate-600, #475569);
}

.uedp-tab-bar--active .uedp-tab-bar__badge {
  background-color: var(--uedp-slate-900, #0f172a);
  color: var(--uedp-white, #ffffff);
}

.uedp-tab-bar:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
`,
  'TabBars.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabBars } from './TabBars';

const meta: Meta<typeof TabBars> = {
  title: 'Components/Tab bar/Tab bars',
  component: TabBars,
  parameters: {
    docs: {
      description: {
        component: \`
# Tab bars
Preserved layer: \`Tab bars\` (COMPONENT_SET: \`74:8054\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **State** | \`Default\`, \`Active\`, \`Hovered\`, \`Focused\`, \`Pressed\`, \`Disabled\` | State matrix |
        \`,
      },
    },
  },
  args: {
    state: 'Default',
    label: 'All Deliveries',
    badge: 24,
    active: false,
  },
};

export default meta;
type Story = StoryObj<typeof TabBars>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    active: true,
  },
};
`
});

writeComponent('TabBarsMulti', {
  'TabBarsMulti.tsx': `
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
`,
  'TabBarsMulti.css': `
.uedp-tab-bar-multi {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--uedp-slate-200, #e2e8f0);
  background-color: var(--uedp-white, #ffffff);
  width: 100%;
  overflow-x: auto;
}
`,
  'TabBarsMulti.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabBarsMulti } from './TabBarsMulti';

const meta: Meta<typeof TabBarsMulti> = {
  title: 'Components/Tab bar/Tab Bars Multi',
  component: TabBarsMulti,
  parameters: {
    docs: {
      description: {
        component: \`
# Tab Bars (Multi Tabs Container)
Preserved layer: \`Tab bars\` (COMPONENT_SET: \`74:8069\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **Active** | \`None\`, \`First\`, \`Second\`, \`Third\`, \`Fourth\`, \`Fifth\` | Preselected tab option |
        \`,
      },
    },
  },
  argTypes: {
    active: {
      control: 'select',
      options: ['None', 'First', 'Second', 'Third', 'Fourth', 'Fifth'],
    },
  },
  args: {
    active: 'First',
  },
};

export default meta;
type Story = StoryObj<typeof TabBarsMulti>;

export const Default: Story = {};
`
});

// -------------------------------------------------------------
// 14. STEPPER & STEPPER TRACK
// -------------------------------------------------------------
writeComponent('Stepper', {
  'Stepper.tsx': `
import React from 'react';
import { Icons } from '../Icons/Icons';
import './Stepper.css';

export interface StepperProps {
  progress?: 'Step 1' | 'Step 2' | 'Step 3' | 'Step 4' | 'Step 5' | 'Step 6' | 'Step 7';
  steps?: { title: string; subtitle?: string }[];
  activeStep?: number;
}

const defaultSteps = [
  { title: 'Order Placed', subtitle: '10:00 AM' },
  { title: 'Picked & Packed', subtitle: '10:30 AM' },
  { title: 'Fleet Dispatched', subtitle: '11:15 AM' },
  { title: 'In Transit', subtitle: '12:00 PM' },
  { title: 'Out for Delivery', subtitle: '01:45 PM' },
  { title: 'Delivered', subtitle: 'Pending' },
];

export const Stepper: React.FC<StepperProps> = ({
  progress = 'Step 3',
  steps = defaultSteps,
  activeStep,
}) => {
  const stepMap: Record<string, number> = {
    'Step 1': 1,
    'Step 2': 2,
    'Step 3': 3,
    'Step 4': 4,
    'Step 5': 5,
    'Step 6': 6,
    'Step 7': 7,
  };
  const currentStep = activeStep !== undefined ? activeStep : (stepMap[progress] || 3);

  return (
    <div className="uedp-stepper">
      {steps.map((step, idx) => {
        const stepNum = idx + 1;
        const isCompleted = stepNum < currentStep;
        const isCurrent = stepNum === currentStep;
        const isPending = stepNum > currentStep;

        return (
          <div key={idx} className="uedp-stepper__item">
            <div className="uedp-stepper__node-container">
              <div
                className={\`uedp-stepper__node \${isCompleted ? 'uedp-stepper__node--completed' : ''} \${isCurrent ? 'uedp-stepper__node--current' : ''} \${isPending ? 'uedp-stepper__node--pending' : ''}\`}
              >
                {isCompleted ? (
                  <Icons name="Tick" size={14} color="#ffffff" />
                ) : (
                  <span>{stepNum}</span>
                )}
              </div>
              {idx < steps.length - 1 && (
                <div
                  className={\`uedp-stepper__line \${stepNum < currentStep ? 'uedp-stepper__line--completed' : ''}\`}
                />
              )}
            </div>
            <div className="uedp-stepper__content">
              <span className="uedp-stepper__title">{step.title}</span>
              {step.subtitle && <span className="uedp-stepper__subtitle">{step.subtitle}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
};
`,
  'Stepper.css': `
.uedp-stepper {
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 16px 0;
  font-family: inherit;
}

.uedp-stepper__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: center;
  position: relative;
}

.uedp-stepper__node-container {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
}

.uedp-stepper__node {
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  z-index: 2;
  margin: 0 auto;
  transition: all 0.2s ease;
}

.uedp-stepper__node--completed {
  background-color: var(--uedp-emerald-600, #059669);
  color: #ffffff;
}

.uedp-stepper__node--current {
  background-color: var(--uedp-slate-900, #0f172a);
  color: #ffffff;
  box-shadow: 0 0 0 4px rgba(15, 23, 42, 0.15);
}

.uedp-stepper__node--pending {
  background-color: var(--uedp-slate-100, #f1f5f9);
  color: var(--uedp-slate-400, #94a3b8);
  border: 1px solid var(--uedp-slate-300, #cbd5e1);
}

.uedp-stepper__line {
  position: absolute;
  top: 16px;
  left: 50%;
  right: -50%;
  height: 2px;
  background-color: var(--uedp-slate-200, #e2e8f0);
  z-index: 1;
}

.uedp-stepper__line--completed {
  background-color: var(--uedp-emerald-600, #059669);
}

.uedp-stepper__content {
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  gap: 2px;
}

.uedp-stepper__title {
  font-size: 12px;
  font-weight: 600;
  color: var(--uedp-slate-800, #1e293b);
}

.uedp-stepper__subtitle {
  font-size: 11px;
  color: var(--uedp-slate-500, #64748b);
}
`,
  'Stepper.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper/Stepper',
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component: \`
# Stepper
Preserved layer: \`Stepper\` (COMPONENT_SET: \`77:8465\` & \`78:8819\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **Progress** | \`Step 1\` through \`Step 7\` | Active progress variant |
        \`,
      },
    },
  },
  argTypes: {
    progress: {
      control: 'select',
      options: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6', 'Step 7'],
    },
  },
  args: {
    progress: 'Step 3',
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {};
`
});

// -------------------------------------------------------------
// 15. TABLE, TABLE ROW, TABLE HEADER ROW
// -------------------------------------------------------------
writeComponent('TableRow', {
  'TableRow.tsx': `
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
    <tr className={\`uedp-table-row uedp-table-row--\${variant.toLowerCase()} \${selected ? 'uedp-table-row--selected' : ''} \${className}\`}>
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
`,
  'TableRow.css': `
.uedp-table-row {
  border-bottom: 1px solid var(--uedp-slate-200, #e2e8f0);
  background-color: var(--uedp-white, #ffffff);
  transition: background-color 0.15s ease;
}

.uedp-table-row:hover:not(.uedp-table-row--header) {
  background-color: var(--uedp-slate-50, #f8fafc);
}

.uedp-table-row--selected {
  background-color: var(--uedp-indigo-50, #eef2ff) !important;
}

.uedp-table-row--header {
  background-color: var(--uedp-slate-50, #f8fafc);
  font-weight: 600;
  color: var(--uedp-slate-600, #475569);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.uedp-table-row__cell {
  padding: 14px 16px;
  font-size: 13px;
  color: var(--uedp-slate-800, #1e293b);
  vertical-align: middle;
}

.uedp-table-row__cell--checkbox {
  width: 48px;
  padding-left: 20px;
}
`,
  'TableRow.stories.tsx': `
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TableRow } from './TableRow';

const meta: Meta<typeof TableRow> = {
  title: 'Components/Table Rows/Table Row',
  component: TableRow,
  parameters: {
    docs: {
      description: {
        component: \`
# Table Row & Table Header Row
Preserved layers: \`Table Row\` (\`179:1513\`) & \`Table Header Row\` (\`179:1512\`).
        \`,
      },
    },
  },
  args: {
    variant: 'Row',
    selected: false,
    cells: ['#DEL-4892', 'Downtown Express', 'Vehicle #402', '12:30 PM', 'On Schedule'],
  },
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  render: (args) => (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        <TableRow {...args} />
      </tbody>
    </table>
  ),
};
`
});

writeComponent('Table', {
  'Table.tsx': `
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
`,
  'Table.css': `
.uedp-table-container {
  display: flex;
  flex-direction: column;
  border-radius: var(--uedp-rounded-2xl, 16px);
  border: 1px solid var(--uedp-slate-200, #e2e8f0);
  background-color: var(--uedp-white, #ffffff);
  box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  width: 100%;
}

.uedp-table-wrapper {
  overflow-x: auto;
  width: 100%;
}

.uedp-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-family: inherit;
}
`,
  'Table.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table Rows/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: \`
# Complete Data Table
Preserved layer: \`Table\` (FRAME: \`170:1209\`).

Combines \`TableHeader\`, \`TableHeaderRow\`, interactive \`TableRow\` records with checkboxes, status tags, and \`PaginationRow\`.
        \`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {};
`
});

// -------------------------------------------------------------
// 16. CARDS (CARD 1 TO 4)
// -------------------------------------------------------------
writeComponent('Cards', {
  'Cards.tsx': `
import React from 'react';
import { Icons, IconName } from '../Icons/Icons';
import './Cards.css';

export interface CardsProps {
  typeVariant?: 'Card 1' | 'Card 2' | 'Card 3' | 'Card 4';
  title?: string;
  value?: string | number;
  change?: string;
  positive?: boolean;
  iconName?: IconName | string;
  description?: string;
}

export const Cards: React.FC<CardsProps> = ({
  typeVariant = 'Card 1',
  title = 'Active Deliveries',
  value = '1,284',
  change = '+12.5%',
  positive = true,
  iconName = 'Truck 2',
  description = 'Total active routes on track across all delivery hubs today.',
}) => {
  return (
    <div className={\`uedp-card uedp-card--\${typeVariant.toLowerCase().replace(/\\s+/g, '-')}\`}>
      <div className="uedp-card__header">
        <div className="uedp-card__icon-wrap">
          <Icons name={iconName} size={20} mode="Dark" />
        </div>
        <span className={\`uedp-card__badge \${positive ? 'uedp-card__badge--positive' : 'uedp-card__badge--negative'}\`}>
          {positive ? '↑ ' : '↓ '} {change}
        </span>
      </div>

      <div className="uedp-card__body">
        <span className="uedp-card__title">{title}</span>
        <div className="uedp-card__value">{value}</div>
        {typeVariant !== 'Card 1' && (
          <p className="uedp-card__description">{description}</p>
        )}
      </div>
    </div>
  );
};
`,
  'Cards.css': `
.uedp-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: var(--uedp-rounded-2xl, 16px);
  border: 1px solid var(--uedp-slate-200, #e2e8f0);
  background-color: var(--uedp-white, #ffffff);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  min-width: 240px;
  font-family: inherit;
}

.uedp-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
}

.uedp-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.uedp-card__icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: var(--uedp-rounded-xl, 12px);
  background-color: var(--uedp-slate-900, #0f172a);
  display: flex;
  align-items: center;
  justify-content: center;
}

.uedp-card__badge {
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: var(--uedp-rounded-full, 9999px);
}

.uedp-card__badge--positive {
  background-color: var(--uedp-emerald-100, #d1fae5);
  color: var(--uedp-emerald-800, #065f46);
}

.uedp-card__badge--negative {
  background-color: var(--uedp-red-100, #fee2e2);
  color: var(--uedp-red-800, #991b1b);
}

.uedp-card__body {
  display: flex;
  flex-direction: column;
}

.uedp-card__title {
  font-size: 13px;
  font-weight: 500;
  color: var(--uedp-slate-500, #64748b);
}

.uedp-card__value {
  font-size: 26px;
  font-weight: 800;
  color: var(--uedp-slate-900, #0f172a);
  margin-top: 4px;
}

.uedp-card__description {
  font-size: 12px;
  color: var(--uedp-slate-500, #64748b);
  margin-top: 8px;
  line-height: 16px;
}
`,
  'Cards.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Cards } from './Cards';

const meta: Meta<typeof Cards> = {
  title: 'Components/Cards/Cards',
  component: Cards,
  parameters: {
    docs: {
      description: {
        component: \`
# Cards (Metric & KPI Cards)
Preserved layer: \`Cards\` (COMPONENT_SET: \`88:10691\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **Type** | \`Card 1\`, \`Card 2\`, \`Card 3\`, \`Card 4\` | Layout style variant |
        \`,
      },
    },
  },
  argTypes: {
    typeVariant: {
      control: 'radio',
      options: ['Card 1', 'Card 2', 'Card 3', 'Card 4'],
    },
  },
  args: {
    typeVariant: 'Card 1',
    title: 'Active Deliveries',
    value: '1,284',
    change: '+12.5%',
    positive: true,
    iconName: 'Truck 2',
  },
};

export default meta;
type Story = StoryObj<typeof Cards>;

export const Card1: Story = {};

export const CardGallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <Cards typeVariant="Card 1" title="Active Fleet" value="342" change="+8.2%" positive={true} iconName="Truck 2" />
      <Cards typeVariant="Card 2" title="Delayed Dispatches" value="14" change="-3.1%" positive={false} iconName="Alert" />
      <Cards typeVariant="Card 3" title="Avg Transit Time" value="28m" change="-5.4%" positive={true} iconName="Clock" />
      <Cards typeVariant="Card 4" title="Fulfilled Orders" value="9,820" change="+18.9%" positive={true} iconName="Success" />
    </div>
  ),
};
`
});

// -------------------------------------------------------------
// 17. MAPS
// -------------------------------------------------------------
writeComponent('Maps', {
  'Maps.tsx': `
import React from 'react';
import { Icons } from '../Icons/Icons';
import './Maps.css';

export interface MapsProps {
  size?: 'Compact' | 'Standard' | 'Wide';
  interactive?: boolean;
}

export const Maps: React.FC<MapsProps> = ({
  size = 'Standard',
  interactive = true,
}) => {
  return (
    <div className={\`uedp-maps uedp-maps--\${size.toLowerCase()}\`}>
      <svg className="uedp-maps__svg" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="450" fill="#0f172a" rx="16" />
        {/* Map grid lines */}
        <path d="M50 0V450 M150 0V450 M250 0V450 M350 0V450 M450 0V450 M550 0V450 M650 0V450 M750 0V450" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M0 50H800 M0 150H800 M0 250H800 M0 350H800" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

        {/* City paths & territories */}
        <path d="M80 180 Q 220 80 340 160 T 580 140 T 720 220" stroke="#334155" strokeWidth="18" strokeLinecap="round" opacity="0.4" />
        <path d="M120 320 Q 300 240 460 300 T 680 260" stroke="#334155" strokeWidth="14" strokeLinecap="round" opacity="0.4" />

        {/* Active Route 1 (Teal) */}
        <path d="M100 200 Q 240 110 360 180 T 560 160" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" fill="none" />
        {/* Active Route 2 (Indigo) */}
        <path d="M160 320 Q 320 260 480 310 T 640 240" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" fill="none" />
        {/* Delayed Route 3 (Amber Dash) */}
        <path d="M360 180 L 460 260" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" fill="none" />

        {/* Fleet Vehicles Markers */}
        <g transform="translate(360, 180)">
          <circle r="14" fill="#06b6d4" fillOpacity="0.2" />
          <circle r="8" fill="#06b6d4" />
          <circle r="3" fill="#ffffff" />
        </g>
        <g transform="translate(560, 160)">
          <circle r="14" fill="#10b981" fillOpacity="0.2" />
          <circle r="8" fill="#10b981" />
          <circle r="3" fill="#ffffff" />
        </g>
        <g transform="translate(460, 260)">
          <circle r="14" fill="#f59e0b" fillOpacity="0.2" />
          <circle r="8" fill="#f59e0b" />
          <circle r="3" fill="#ffffff" />
        </g>
        <g transform="translate(160, 320)">
          <circle r="14" fill="#6366f1" fillOpacity="0.2" />
          <circle r="8" fill="#6366f1" />
          <circle r="3" fill="#ffffff" />
        </g>
      </svg>

      {/* Floating Control Overlay */}
      {interactive && (
        <div className="uedp-maps__controls">
          <button className="uedp-maps__btn" type="button" title="Zoom In">
            <Icons name="Add" size={16} mode="Dark" />
          </button>
          <button className="uedp-maps__btn" type="button" title="Zoom Out">
            <Icons name="Minus" size={16} mode="Dark" />
          </button>
          <button className="uedp-maps__btn" type="button" title="Center Fleet">
            <Icons name="Location filled" size={16} mode="Dark" />
          </button>
        </div>
      )}

      {/* Map Legend */}
      <div className="uedp-maps__legend">
        <div className="uedp-maps__legend-item">
          <span className="uedp-maps__dot uedp-maps__dot--teal" />
          <span>Active Route #1</span>
        </div>
        <div className="uedp-maps__legend-item">
          <span className="uedp-maps__dot uedp-maps__dot--emerald" />
          <span>Delivered</span>
        </div>
        <div className="uedp-maps__legend-item">
          <span className="uedp-maps__dot uedp-maps__dot--amber" />
          <span>Delay Alert</span>
        </div>
      </div>
    </div>
  );
};
`,
  'Maps.css': `
.uedp-maps {
  position: relative;
  width: 100%;
  border-radius: var(--uedp-rounded-2xl, 16px);
  overflow: hidden;
  border: 1px solid var(--uedp-slate-800, #1e293b);
  background-color: var(--uedp-slate-900, #0f172a);
  box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.2);
}

.uedp-maps--compact { height: 260px; }
.uedp-maps--standard { height: 380px; }
.uedp-maps--wide { height: 480px; }

.uedp-maps__svg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.uedp-maps__controls {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.uedp-maps__btn {
  width: 34px;
  height: 34px;
  border-radius: var(--uedp-rounded-lg, 8px);
  background-color: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.15s ease;
}

.uedp-maps__btn:hover {
  background-color: rgba(30, 41, 59, 0.95);
  border-color: rgba(255, 255, 255, 0.3);
}

.uedp-maps__legend {
  position: absolute;
  bottom: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 14px;
  background-color: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--uedp-rounded-full, 9999px);
  backdrop-filter: blur(8px);
}

.uedp-maps__legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 500;
  color: var(--uedp-slate-300, #cbd5e1);
}

.uedp-maps__dot {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
}
.uedp-maps__dot--teal { background-color: #06b6d4; }
.uedp-maps__dot--emerald { background-color: #10b981; }
.uedp-maps__dot--amber { background-color: #f59e0b; }
`,
  'Maps.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Maps } from './Maps';

const meta: Meta<typeof Maps> = {
  title: 'Components/Maps/Maps',
  component: Maps,
  parameters: {
    docs: {
      description: {
        component: \`
# Maps (Fleet Route Visualizer)
Preserved layer: \`Maps\` (COMPONENT_SET: \`42:5063\`).

| Property | Options | Description |
| :--- | :--- | :--- |
| **Size** | \`Compact\`, \`Standard\`, \`Wide\` | Canvas dimension |
        \`,
      },
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['Compact', 'Standard', 'Wide'],
    },
  },
  args: {
    size: 'Standard',
  },
};

export default meta;
type Story = StoryObj<typeof Maps>;

export const Standard: Story = {};

export const Compact: Story = {
  args: {
    size: 'Compact',
  },
};

export const Wide: Story = {
  args: {
    size: 'Wide',
  },
};
`
});

console.log('✓ Part 4 components generated successfully.');
