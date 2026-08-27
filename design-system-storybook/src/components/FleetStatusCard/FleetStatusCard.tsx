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
              strokeDasharray={`${(inUsePct / 100) * 377} 377`}
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
