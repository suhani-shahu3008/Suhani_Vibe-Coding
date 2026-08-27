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
            <StatusTag typeVariant="Info" label={`ETA: ${item.eta}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
