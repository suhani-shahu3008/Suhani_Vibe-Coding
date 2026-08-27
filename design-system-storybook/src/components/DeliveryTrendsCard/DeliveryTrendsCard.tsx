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
    return `${x},${y}`;
  }).join(' ');

  const pointsOnTime = data.map((d, i) => {
    const x = paddingLeft + (i / (data.length - 1)) * chartWidth;
    const y = chartHeight - (d.onTime / maxVal) * chartHeight + 10;
    return `${x},${y}`;
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
        <svg viewBox={`0 0 ${width} ${height}`} className="uedp-delivery-trends__svg">
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
