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
                  style={{ width: `${pct}%` }}
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
