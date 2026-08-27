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
      className={`uedp-profile-avatar uedp-profile-avatar--state-${state.toLowerCase()}`}
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
