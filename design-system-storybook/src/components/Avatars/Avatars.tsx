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
    <div className={`uedp-avatar uedp-avatar--${size}`}>
      {src ? (
        <img src={src} alt={name} className="uedp-avatar__img" />
      ) : (
        <div className="uedp-avatar__initials">{initials}</div>
      )}
      {status && <span className={`uedp-avatar__status uedp-avatar__status--${status}`} />}
      {badgeCount !== undefined && badgeCount > 0 && (
        <span className="uedp-avatar__badge">{badgeCount}</span>
      )}
    </div>
  );
};
