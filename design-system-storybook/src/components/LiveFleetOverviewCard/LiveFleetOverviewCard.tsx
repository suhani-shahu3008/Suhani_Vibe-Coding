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
