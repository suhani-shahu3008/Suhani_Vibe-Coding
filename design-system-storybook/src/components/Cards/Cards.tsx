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
    <div className={`uedp-card uedp-card--${typeVariant.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="uedp-card__header">
        <div className="uedp-card__icon-wrap">
          <Icons name={iconName} size={20} mode="Dark" />
        </div>
        <span className={`uedp-card__badge ${positive ? 'uedp-card__badge--positive' : 'uedp-card__badge--negative'}`}>
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
