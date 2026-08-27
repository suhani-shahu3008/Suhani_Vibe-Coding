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
// 18. CHARTS: DELIVERY TRENDS CARD
// -------------------------------------------------------------
writeComponent('DeliveryTrendsCard', {
  'DeliveryTrendsCard.tsx': `
import React from 'react';
import './DeliveryTrendsCard.css';

export interface DeliveryTrendsDataPoint {
  month: string;
  total: number;
  onTime: number;
}

const defaultData: DeliveryTrendsDataPoint[] = [
  { month: 'Jan', total: 2400, onTime: 2100 },
  { month: 'Feb', total: 3200, onTime: 2900 },
  { month: 'Mar', total: 4100, onTime: 3800 },
  { month: 'Apr', total: 4800, onTime: 4300 },
  { month: 'May', total: 5400, onTime: 5100 },
  { month: 'Jun', total: 5900, onTime: 5600 },
];

export const DeliveryTrendsCard: React.FC<{ data?: DeliveryTrendsDataPoint[] }> = ({
  data = defaultData,
}) => {
  const maxVal = 6000;
  const height = 180;
  const width = 340;
  const paddingLeft = 40;
  const paddingBottom = 30;
  const chartWidth = width - paddingLeft;
  const chartHeight = height - paddingBottom;

  const pointsTotal = data.map((d, i) => {
    const x = paddingLeft + (i / (data.length - 1)) * chartWidth;
    const y = chartHeight - (d.total / maxVal) * chartHeight + 10;
    return \`\${x},\${y}\`;
  }).join(' ');

  const pointsOnTime = data.map((d, i) => {
    const x = paddingLeft + (i / (data.length - 1)) * chartWidth;
    const y = chartHeight - (d.onTime / maxVal) * chartHeight + 10;
    return \`\${x},\${y}\`;
  }).join(' ');

  return (
    <div className="uedp-chart-card uedp-delivery-trends">
      <div className="uedp-chart-card__header">
        <h3 className="uedp-chart-card__title">Delivery Trends</h3>
        <div className="uedp-delivery-trends__legend">
          <div className="uedp-delivery-trends__legend-item">
            <span className="uedp-delivery-trends__dot uedp-delivery-trends__dot--total" />
            <span>Total Deliveries</span>
          </div>
          <div className="uedp-delivery-trends__legend-item">
            <span className="uedp-delivery-trends__dot uedp-delivery-trends__dot--ontime" />
            <span>On-Time</span>
          </div>
        </div>
      </div>

      <div className="uedp-delivery-trends__graph-wrap">
        <svg viewBox={\`0 0 \${width} \${height}\`} className="uedp-delivery-trends__svg">
          {/* Grid lines */}
          {[0, 1500, 3000, 4500, 6000].map((v) => {
            const y = chartHeight - (v / maxVal) * chartHeight + 10;
            return (
              <g key={v}>
                <line x1={paddingLeft} y1={y} x2={width} y2={y} stroke="#e2e8f0" strokeDasharray="3 3" />
                <text x={paddingLeft - 8} y={y + 4} textAnchor="end" fontSize="10" fill="#94a3b8">
                  {v}
                </text>
              </g>
            );
          })}

          {/* Month labels */}
          {data.map((d, i) => {
            const x = paddingLeft + (i / (data.length - 1)) * chartWidth;
            return (
              <text key={d.month} x={x} y={height - 6} textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="500">
                {d.month}
              </text>
            );
          })}

          {/* Lines */}
          <polyline fill="none" stroke="#6366f1" strokeWidth="3" points={pointsTotal} strokeLinecap="round" strokeLinejoin="round" />
          <polyline fill="none" stroke="#10b981" strokeWidth="3" points={pointsOnTime} strokeLinecap="round" strokeLinejoin="round" />

          {/* Data point dots */}
          {data.map((d, i) => {
            const x = paddingLeft + (i / (data.length - 1)) * chartWidth;
            const yTotal = chartHeight - (d.total / maxVal) * chartHeight + 10;
            const yOnTime = chartHeight - (d.onTime / maxVal) * chartHeight + 10;
            return (
              <g key={i}>
                <circle cx={x} cy={yTotal} r="4" fill="#6366f1" stroke="#ffffff" strokeWidth="2" />
                <circle cx={x} cy={yOnTime} r="4" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
`,
  'DeliveryTrendsCard.css': `
.uedp-chart-card {
  background-color: var(--uedp-white, #ffffff);
  border: 1px solid var(--uedp-slate-200, #e2e8f0);
  border-radius: var(--uedp-rounded-2xl, 16px);
  padding: 20px;
  box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.05);
  font-family: inherit;
  width: 100%;
}

.uedp-chart-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 12px;
}

.uedp-chart-card__title {
  font-size: 16px;
  font-weight: 700;
  color: var(--uedp-slate-900, #0f172a);
}

.uedp-delivery-trends__legend {
  display: flex;
  align-items: center;
  gap: 14px;
}

.uedp-delivery-trends__legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  color: var(--uedp-slate-600, #475569);
}

.uedp-delivery-trends__dot {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
}
.uedp-delivery-trends__dot--total { background-color: var(--uedp-indigo-600, #4f46e5); }
.uedp-delivery-trends__dot--ontime { background-color: var(--uedp-emerald-500, #10b981); }

.uedp-delivery-trends__graph-wrap {
  width: 100%;
}

.uedp-delivery-trends__svg {
  width: 100%;
  height: auto;
  overflow: visible;
}
`,
  'DeliveryTrendsCard.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DeliveryTrendsCard } from './DeliveryTrendsCard';

const meta: Meta<typeof DeliveryTrendsCard> = {
  title: 'Components/Charts & Graphs/Delivery Trends Card',
  component: DeliveryTrendsCard,
  parameters: {
    docs: {
      description: {
        component: \`
# Delivery Trends Card
Preserved layer: \`Delivery trends card\` (COMPONENT: \`88:11240\`).

Line chart comparison showing \`Total Deliveries\` vs \`On-Time\` fulfillment across monthly intervals.
        \`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DeliveryTrendsCard>;

export const Default: Story = {};
`
});

// -------------------------------------------------------------
// 19. CHARTS: DELAY REASONS CARD
// -------------------------------------------------------------
writeComponent('DelayReasonsCard', {
  'DelayReasonsCard.tsx': `
import React from 'react';
import './DelayReasonsCard.css';

export interface DelayReasonSlice {
  label: string;
  percentage: number;
  color: string;
}

const defaultSlices: DelayReasonSlice[] = [
  { label: 'Traffic', percentage: 48, color: '#f59e0b' },
  { label: 'Vehicle Issue', percentage: 24, color: '#ef4444' },
  { label: 'Weather', percentage: 18, color: '#3b82f6' },
  { label: 'Other', percentage: 10, color: '#94a3b8' },
];

export const DelayReasonsCard: React.FC<{ slices?: DelayReasonSlice[] }> = ({
  slices = defaultSlices,
}) => {
  return (
    <div className="uedp-chart-card uedp-delay-reasons">
      <div className="uedp-chart-card__header">
        <h3 className="uedp-chart-card__title">Delay Reasons</h3>
      </div>

      <div className="uedp-delay-reasons__content">
        <div className="uedp-delay-reasons__donut-wrap">
          <svg viewBox="0 0 160 160" className="uedp-delay-reasons__svg">
            <circle cx="80" cy="80" r="60" fill="none" stroke="#f1f5f9" strokeWidth="20" />
            {/* Donut arcs */}
            <circle cx="80" cy="80" r="60" fill="none" stroke="#f59e0b" strokeWidth="20" strokeDasharray="180 377" strokeDashoffset="0" transform="rotate(-90 80 80)" />
            <circle cx="80" cy="80" r="60" fill="none" stroke="#ef4444" strokeWidth="20" strokeDasharray="90 377" strokeDashoffset="-180" transform="rotate(-90 80 80)" />
            <circle cx="80" cy="80" r="60" fill="none" stroke="#3b82f6" strokeWidth="20" strokeDasharray="68 377" strokeDashoffset="-270" transform="rotate(-90 80 80)" />
            <circle cx="80" cy="80" r="60" fill="none" stroke="#94a3b8" strokeWidth="20" strokeDasharray="39 377" strokeDashoffset="-338" transform="rotate(-90 80 80)" />
            <text x="80" y="76" textAnchor="middle" fontSize="18" fontWeight="800" fill="#0f172a">48%</text>
            <text x="80" y="92" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="500">Traffic</text>
          </svg>
        </div>

        <div className="uedp-delay-reasons__legend">
          {slices.map((slice) => (
            <div key={slice.label} className="uedp-delay-reasons__legend-row">
              <div className="uedp-delay-reasons__label-wrap">
                <span className="uedp-delay-reasons__dot" style={{ backgroundColor: slice.color }} />
                <span className="uedp-delay-reasons__label">{slice.label}</span>
              </div>
              <span className="uedp-delay-reasons__pct">{slice.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
`,
  'DelayReasonsCard.css': `
.uedp-delay-reasons__content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
}

.uedp-delay-reasons__donut-wrap {
  width: 140px;
  height: 140px;
}

.uedp-delay-reasons__svg {
  width: 100%;
  height: 100%;
}

.uedp-delay-reasons__legend {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  min-width: 140px;
}

.uedp-delay-reasons__legend-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.uedp-delay-reasons__label-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.uedp-delay-reasons__dot {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
}

.uedp-delay-reasons__label {
  font-size: 13px;
  color: var(--uedp-slate-700, #334155);
  font-weight: 500;
}

.uedp-delay-reasons__pct {
  font-size: 13px;
  font-weight: 700;
  color: var(--uedp-slate-900, #0f172a);
}
`,
  'DelayReasonsCard.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DelayReasonsCard } from './DelayReasonsCard';

const meta: Meta<typeof DelayReasonsCard> = {
  title: 'Components/Charts & Graphs/Delay Reasons Card',
  component: DelayReasonsCard,
  parameters: {
    docs: {
      description: {
        component: \`
# Delay Reasons Card
Preserved layer: \`Delay Reasons card\` (COMPONENT: \`88:11239\`).

Donut breakdown classifying fleet delays by \`Traffic\`, \`Vehicle Issue\`, \`Weather\`, and \`Other\`.
        \`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DelayReasonsCard>;

export const Default: Story = {};
`
});

// -------------------------------------------------------------
// 20. CHARTS: TOP DELAYED ZONES CARD
// -------------------------------------------------------------
writeComponent('TopDelayedZonesCard', {
  'TopDelayedZonesCard.tsx': `
import React from 'react';
import './TopDelayedZonesCard.css';

export interface ZoneDelay {
  zone: string;
  delays: number;
}

const defaultZones: ZoneDelay[] = [
  { zone: 'Zone A', delays: 14 },
  { zone: 'Zone B', delays: 11 },
  { zone: 'Zone C', delays: 8 },
  { zone: 'Zone D', delays: 6 },
  { zone: 'Zone E', delays: 3 },
];

export const TopDelayedZonesCard: React.FC<{ zones?: ZoneDelay[] }> = ({
  zones = defaultZones,
}) => {
  const maxVal = 16;

  return (
    <div className="uedp-chart-card uedp-delayed-zones">
      <div className="uedp-chart-card__header">
        <h3 className="uedp-chart-card__title">Top Delayed Zones</h3>
      </div>

      <div className="uedp-delayed-zones__bars">
        {zones.map((item) => {
          const pct = (item.delays / maxVal) * 100;
          return (
            <div key={item.zone} className="uedp-delayed-zones__row">
              <span className="uedp-delayed-zones__name">{item.zone}</span>
              <div className="uedp-delayed-zones__bar-track">
                <div
                  className="uedp-delayed-zones__bar-fill"
                  style={{ width: \`\${pct}%\` }}
                />
              </div>
              <span className="uedp-delayed-zones__count">{item.delays}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
`,
  'TopDelayedZonesCard.css': `
.uedp-delayed-zones__bars {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.uedp-delayed-zones__row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.uedp-delayed-zones__name {
  width: 60px;
  font-size: 13px;
  font-weight: 600;
  color: var(--uedp-slate-700, #334155);
}

.uedp-delayed-zones__bar-track {
  flex: 1;
  height: 12px;
  background-color: var(--uedp-slate-100, #f1f5f9);
  border-radius: var(--uedp-rounded-full, 9999px);
  overflow: hidden;
}

.uedp-delayed-zones__bar-fill {
  height: 100%;
  border-radius: 9999px;
  background: linear-gradient(90deg, #f59e0b, #ef4444);
  transition: width 0.3s ease;
}

.uedp-delayed-zones__count {
  width: 24px;
  text-align: right;
  font-size: 13px;
  font-weight: 700;
  color: var(--uedp-slate-900, #0f172a);
}
`,
  'TopDelayedZonesCard.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TopDelayedZonesCard } from './TopDelayedZonesCard';

const meta: Meta<typeof TopDelayedZonesCard> = {
  title: 'Components/Charts & Graphs/Top Delayed Zones Card',
  component: TopDelayedZonesCard,
  parameters: {
    docs: {
      description: {
        component: \`
# Top Delayed Zones Card
Preserved layer: \`Top Delayed Zones card\` (COMPONENT: \`88:11237\`).

Bar visualization displaying zones with highest delay counts.
        \`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TopDelayedZonesCard>;

export const Default: Story = {};
`
});

// -------------------------------------------------------------
// 21. CHARTS: UPCOMING DELIVERIES CARD
// -------------------------------------------------------------
writeComponent('UpcomingDeliveriesCard', {
  'UpcomingDeliveriesCard.tsx': `
import React from 'react';
import { StatusTag } from '../StatusTag/StatusTag';
import { Icons } from '../Icons/Icons';
import './UpcomingDeliveriesCard.css';

export interface UpcomingDeliveryItem {
  id: string;
  company: string;
  city: string;
  eta: string;
}

const defaultDeliveries: UpcomingDeliveryItem[] = [
  { id: 'SHP-1001', company: 'ABC Corp', city: 'Mumbai', eta: '14:30 p.m.' },
  { id: 'SHP-1002', company: 'XYZ Ltd', city: 'Delhi', eta: '15:45 p.m.' },
  { id: 'SHP-1003', company: 'Tech Solutions', city: 'Bangalore', eta: '16:00 p.m.' },
  { id: 'SHP-1004', company: 'Global Trade', city: 'Chennai', eta: '17:20 p.m.' },
];

export const UpcomingDeliveriesCard: React.FC<{ items?: UpcomingDeliveryItem[] }> = ({
  items = defaultDeliveries,
}) => {
  return (
    <div className="uedp-chart-card uedp-upcoming-deliveries">
      <div className="uedp-chart-card__header">
        <h3 className="uedp-chart-card__title">Upcoming Deliveries</h3>
        <button className="uedp-upcoming-deliveries__view-more" type="button">
          <span>View More</span>
          <Icons name="Right Arrow" size={14} />
        </button>
      </div>

      <div className="uedp-upcoming-deliveries__list">
        {items.map((item) => (
          <div key={item.id} className="uedp-upcoming-deliveries__item">
            <div className="uedp-upcoming-deliveries__left">
              <div className="uedp-upcoming-deliveries__icon-wrap">
                <Icons name="Truck 2" size={16} mode="Dark" />
              </div>
              <div>
                <div className="uedp-upcoming-deliveries__company">{item.company}</div>
                <div className="uedp-upcoming-deliveries__sub">
                  <span className="uedp-upcoming-deliveries__id">{item.id}</span> • {item.city}
                </div>
              </div>
            </div>
            <StatusTag typeVariant="Info" label={\`ETA: \${item.eta}\`} />
          </div>
        ))}
      </div>
    </div>
  );
};
`,
  'UpcomingDeliveriesCard.css': `
.uedp-upcoming-deliveries__view-more {
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;
  background: transparent;
  color: var(--uedp-indigo-600, #4f46e5);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.uedp-upcoming-deliveries__list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.uedp-upcoming-deliveries__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  border-radius: var(--uedp-rounded-xl, 12px);
  background-color: var(--uedp-slate-50, #f8fafc);
  border: 1px solid var(--uedp-slate-100, #f1f5f9);
}

.uedp-upcoming-deliveries__left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.uedp-upcoming-deliveries__icon-wrap {
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  background-color: var(--uedp-slate-900, #0f172a);
  display: flex;
  align-items: center;
  justify-content: center;
}

.uedp-upcoming-deliveries__company {
  font-size: 13px;
  font-weight: 600;
  color: var(--uedp-slate-800, #1e293b);
}

.uedp-upcoming-deliveries__sub {
  font-size: 12px;
  color: var(--uedp-slate-500, #64748b);
  margin-top: 2px;
}

.uedp-upcoming-deliveries__id {
  font-weight: 600;
  color: var(--uedp-indigo-600, #4f46e5);
}
`,
  'UpcomingDeliveriesCard.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UpcomingDeliveriesCard } from './UpcomingDeliveriesCard';

const meta: Meta<typeof UpcomingDeliveriesCard> = {
  title: 'Components/Charts & Graphs/Upcoming Deliveries Card',
  component: UpcomingDeliveriesCard,
  parameters: {
    docs: {
      description: {
        component: \`
# Upcoming Deliveries Card
Preserved layer: \`Upcoming Deliveries card\` (COMPONENT: \`88:11238\`).

List of scheduled dispatch checkpoints with customer name, shipment ID, city, and ETA badge.
        \`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UpcomingDeliveriesCard>;

export const Default: Story = {};
`
});

// -------------------------------------------------------------
// 22. CHARTS: FLEET STATUS CARD & LIVE FLEET OVERVIEW CARD
// -------------------------------------------------------------
writeComponent('FleetStatusCard', {
  'FleetStatusCard.tsx': `
import React from 'react';
import './FleetStatusCard.css';

export interface FleetStatusProps {
  available?: number;
  inUse?: number;
}

export const FleetStatusCard: React.FC<FleetStatusProps> = ({
  available = 120,
  inUse = 240,
}) => {
  const total = available + inUse;
  const inUsePct = Math.round((inUse / total) * 100);

  return (
    <div className="uedp-chart-card uedp-fleet-status">
      <div className="uedp-chart-card__header">
        <h3 className="uedp-chart-card__title">Fleet Status</h3>
      </div>

      <div className="uedp-fleet-status__content">
        <div className="uedp-fleet-status__donut">
          <svg viewBox="0 0 160 160" className="uedp-fleet-status__svg">
            <circle cx="80" cy="80" r="60" fill="none" stroke="#10b981" strokeWidth="20" />
            <circle
              cx="80"
              cy="80"
              r="60"
              fill="none"
              stroke="#6366f1"
              strokeWidth="20"
              strokeDasharray={\`\${(inUsePct / 100) * 377} 377\`}
              transform="rotate(-90 80 80)"
            />
            <text x="80" y="76" textAnchor="middle" fontSize="20" fontWeight="800" fill="#0f172a">{total}</text>
            <text x="80" y="92" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="500">Vehicles</text>
          </svg>
        </div>

        <div className="uedp-fleet-status__legend">
          <div className="uedp-fleet-status__legend-row">
            <div className="uedp-fleet-status__item">
              <span className="uedp-fleet-status__dot uedp-fleet-status__dot--inuse" />
              <span>In Use</span>
            </div>
            <span className="uedp-fleet-status__val">{inUse}</span>
          </div>

          <div className="uedp-fleet-status__legend-row">
            <div className="uedp-fleet-status__item">
              <span className="uedp-fleet-status__dot uedp-fleet-status__dot--available" />
              <span>Available</span>
            </div>
            <span className="uedp-fleet-status__val">{available}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
`,
  'FleetStatusCard.css': `
.uedp-fleet-status__content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
}

.uedp-fleet-status__donut {
  width: 130px;
  height: 130px;
}

.uedp-fleet-status__svg {
  width: 100%;
  height: 100%;
}

.uedp-fleet-status__legend {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.uedp-fleet-status__legend-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-radius: var(--uedp-rounded-lg, 8px);
  background-color: var(--uedp-slate-50, #f8fafc);
}

.uedp-fleet-status__item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--uedp-slate-700, #334155);
}

.uedp-fleet-status__dot {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
}
.uedp-fleet-status__dot--inuse { background-color: var(--uedp-indigo-600, #4f46e5); }
.uedp-fleet-status__dot--available { background-color: var(--uedp-emerald-500, #10b981); }

.uedp-fleet-status__val {
  font-size: 14px;
  font-weight: 700;
  color: var(--uedp-slate-900, #0f172a);
}
`,
  'FleetStatusCard.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FleetStatusCard } from './FleetStatusCard';

const meta: Meta<typeof FleetStatusCard> = {
  title: 'Components/Charts & Graphs/Fleet Status Card',
  component: FleetStatusCard,
  parameters: {
    docs: {
      description: {
        component: \`
# Fleet Status Card
Preserved layer: \`Fleet Status card\` (COMPONENT: \`88:11236\`).

Donut telemetry showing ratio between \`In Use\` (active missions) and \`Available\` vehicles.
        \`,
      },
    },
  },
  args: {
    available: 120,
    inUse: 240,
  },
};

export default meta;
type Story = StoryObj<typeof FleetStatusCard>;

export const Default: Story = {};
`
});

writeComponent('LiveFleetOverviewCard', {
  'LiveFleetOverviewCard.tsx': `
import React from 'react';
import { Maps } from '../Maps/Maps';
import { IconButton } from '../IconButton/IconButton';
import './LiveFleetOverviewCard.css';

export const LiveFleetOverviewCard: React.FC = () => {
  return (
    <div className="uedp-chart-card uedp-live-fleet-overview">
      <div className="uedp-chart-card__header">
        <div>
          <h3 className="uedp-chart-card__title">Live Fleet Overview</h3>
          <p className="uedp-live-fleet-overview__sub">24 vehicles active on GPS telemetry stream</p>
        </div>
        <div className="uedp-live-fleet-overview__actions">
          <IconButton iconName="Filter" size="Small" />
          <IconButton iconName="Maximize" size="Small" />
        </div>
      </div>

      <div className="uedp-live-fleet-overview__map-wrap">
        <Maps size="Standard" />
      </div>
    </div>
  );
};
`,
  'LiveFleetOverviewCard.css': `
.uedp-live-fleet-overview__sub {
  font-size: 12px;
  color: var(--uedp-slate-500, #64748b);
  margin-top: 2px;
}

.uedp-live-fleet-overview__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.uedp-live-fleet-overview__map-wrap {
  width: 100%;
  margin-top: 8px;
}
`,
  'LiveFleetOverviewCard.stories.tsx': `
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LiveFleetOverviewCard } from './LiveFleetOverviewCard';

const meta: Meta<typeof LiveFleetOverviewCard> = {
  title: 'Components/Charts & Graphs/Live Fleet Overview Card',
  component: LiveFleetOverviewCard,
  parameters: {
    docs: {
      description: {
        component: \`
# Live Fleet Overview Card
Preserved layer: \`Live Fleet Overview card\` (COMPONENT: \`88:11235\`).

Full interactive fleet map dashboard card with header actions, GPS vector layers, and live controls.
        \`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LiveFleetOverviewCard>;

export const Default: Story = {};
`
});

// -------------------------------------------------------------
// 23. UNIVERSAL BARREL EXPORT: src/index.ts
// -------------------------------------------------------------
const barrelExports = `
/**
 * Uedp-5 Design System Barrel Exports
 * Generated automatically with preserved Figma layer names & design tokens.
 */

// Styles
import './styles/figma-tokens.css';
import './styles/global.css';

// 1. Iconography
export * from './components/Icons/Icons';

// 2. Buttons
export * from './components/Button/Button';
export * from './components/IconButton/IconButton';

// 3. Pagination
export * from './components/Pagination/Pagination';
export * from './components/PaginationRow/PaginationRow';

// 4. Navigation Bar
export * from './components/NavigationBarMenu/NavigationBarMenu';
export * from './components/SideNavigationBar/SideNavigationBar';

// 5. Search Bar
export * from './components/SearchBar/SearchBar';

// 6. Avatars
export * from './components/Avatars/Avatars';
export * from './components/ProfileAvatar/ProfileAvatar';

// 7. Header
export * from './components/Header/Header';
export * from './components/TableHeader/TableHeader';

// 8. Form Controls
export * from './components/InputField/InputField';
export * from './components/TextField/TextField';
export * from './components/RadioButtons/RadioButtons';
export * from './components/Toggle/Toggle';
export * from './components/Checkboxes/Checkboxes';

// 9. Tags & Indicators
export * from './components/Tags/Tags';
export * from './components/StatusTag/StatusTag';
export * from './components/Indicators/Indicators';

// 10. Geometry & Structure
export * from './components/Dividers/Dividers';
export * from './components/ProcessBar/ProcessBar';
export * from './components/TabBars/TabBars';
export * from './components/TabBarsMulti/TabBarsMulti';
export * from './components/Stepper/Stepper';

// 11. Tables & Cards
export * from './components/Table/Table';
export * from './components/TableRow/TableRow';
export * from './components/Cards/Cards';
export * from './components/Maps/Maps';

// 12. Charts & Graphs
export * from './components/DeliveryTrendsCard/DeliveryTrendsCard';
export * from './components/DelayReasonsCard/DelayReasonsCard';
export * from './components/TopDelayedZonesCard/TopDelayedZonesCard';
export * from './components/UpcomingDeliveriesCard/UpcomingDeliveriesCard';
export * from './components/FleetStatusCard/FleetStatusCard';
export * from './components/LiveFleetOverviewCard/LiveFleetOverviewCard';
`;

fs.writeFileSync(path.join(srcDir, 'index.ts'), barrelExports.trim() + '\n');
console.log('✓ Generated universal barrel export: src/index.ts');
console.log('✓ All components and charts generated successfully.');
